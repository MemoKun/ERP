<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Facades\DB;

use App\Models\ChangeOrder;
use App\Models\Order;
use App\Http\Requests\Api\CustomerServiceDepartmentRequest;
use App\Http\Requests\Api\CustomerServiceChangeOrdersRequest;
use App\Http\Requests\Api\PaymentDetailRequest;
use App\Http\Requests\Api\SplitOrderRequest;
use App\Http\Requests\Api\MergerOrderRequest;
use App\Http\Requests\Api\EditStatuRequest;
use App\Http\Requests\Api\DestroyRequest;

use App\Transformers\ChangeOrderTransformer;
use App\Transformers\OrderTransformer;

use App\Http\Controllers\Traits\CURDTrait;
use App\Http\Controllers\Traits\ProcedureTrait;

use Dingo\Api\Exception\DeleteResourceFailedException;
use Dingo\Api\Exception\UpdateResourceFailedException;

/**
 * 客服部资源
 * @Resource("customerservicedepts",uri="/api")
 */
class CustomerServiceChangeOrdersController extends Controller
{
    use CURDTrait;
    use ProcedureTrait;

    const TRANSFORMER = ChangeOrderTransformer::class;
    const MODEL = ChangeOrder::class;
    const PerPage = 8;

    /************************************中间主要的Table 四个搜索*********************************/
    /**
    * 搜索新建订单
    */
    public function searchNew(CustomerServiceChangeOrdersRequest $request)
    {
        $order = ChangeOrder::query()
        ->whereIn('change_status',[ChangeOrder::CHANGE_STATUS_NEW])
        ->orderBy('updated_at', 'desc');
        return $this->response->paginator($order->paginate(self::PerPage), self::TRANSFORMER);
    }
    /**
    * 搜索待处理订单
    */
    public function searchUntreated(CustomerServiceChangeOrdersRequest $request)
    {
        $order = ChangeOrder::query()
        ->whereIn('change_status',[ChangeOrder::CHANGE_STATUS_SUBMIT])
        ->orderBy('updated_at', 'desc');
        return $this->response->paginator($order->paginate(self::PerPage), self::TRANSFORMER);
    }
    /**
    * 搜索已处理订单
    */
    public function searchTreated(CustomerServiceChangeOrdersRequest $request)
    {
        $order = ChangeOrder::query()
        ->whereIn('change_status',[ChangeOrder::CHANGE_STATUS_AUDIT])
        ->orderBy('updated_at', 'desc');
        return $this->response->paginator($order->paginate(self::PerPage), self::TRANSFORMER);
    }
    /**
    * 搜索已作废订单
    */
    public function searchCanceled(CustomerServiceChangeOrdersRequest $request)
    {
        $order = ChangeOrder::query()
        ->whereIn('change_status',[ChangeOrder::CHANGE_STATUS_CANCEL])
        ->orderBy('updated_at', 'desc');
        return $this->response->paginator($order->paginate(self::PerPage), self::TRANSFORMER);
    }
    /***************************************选择订单Dialog**************************************/
   /**
    * 选择订单·搜索可以进行订单变更的订单列表
    */
    public function searchOrders(CustomerServiceDepartmentRequest $request)
    {
        $order = Order::query()
        ->whereIn('order_status',[ORDER::ORDER_STATUS_NEW,ORDER::ORDER_STATUS_LOCK,ORDER::ORDER_STATUS_CS_AUDIT,ORDER::ORDER_STATUS_ONE_AUDIT,ORDER::ORDER_STATUS_CARGO_AUDIT,ORDER::ORDER_STATUS_READY_STOCK_OUT])
        ->orderBy('updated_at', 'desc');

        return $this->response->paginator($order->paginate(self::PerPage),new OrderTransformer);
    }
   /**
    * 修改·搜索需要修改的data
    */
    public function show(ChangeOrder $order)
    {
         return $this->traitShow($order, self::TRANSFORMER);
    }
    
    /**
    * 提交·将新建订单提交至待处理
    */
    public function isSubmit(ChangeOrder $order)
    {
        return $this->traitAction(
            $order,
            !$order->status,
            '提交出错',
            'submit'
        );
    }


    public function index(CustomerServiceChangeOrdersRequest $requset)
    {
        return $this->allOrPage($requset, self::MODEL, self::TRANSFORMER, self::PerPage);
    }


    
    public function create(ChangeOrder $order)
    {
        return $this->response
            ->item($order, new \App\Transformers\CreateOrderDataTransformer())
            ->setStatusCode(200)
            ->addMeta('status_code', '200');
    }


    
    public function store(
        CustomerServiceChangeOrdersRequest $customerServiceChangeOrdersRequest,
        PaymentDetailRequest $paymentDetailRequest,
        \App\Handlers\ValidatedHandler $validatedHandler
    ){
        $data[] = $customerServiceChangeOrdersRequest->validated();
        $data[] = $customerServiceChangeOrdersRequest->input('order_items');
        $data[] = $paymentDetailRequest->validated()['payment_details'] ?? null;

        $id = DB::transaction(function () use (
            $data,
            $customerServiceChangeOrdersRequest,
            $paymentDetailRequest,
            $validatedHandler
        ) {
            $model = ChangeOrder::create($data[0]);
            if ($data[1]) {
                foreach ($data[1] as $item) {
                    $model->orderItems()->create(
                        $validatedHandler->getValidatedData($customerServiceChangeOrdersRequest->rules(), $item)
                    );
                }
            }
            if($data[2]){
                foreach ($data[2] as $item) {
                    $model->paymentDetails()->create(
                        $validatedHandler->getValidatedData($paymentDetailRequest->rules(), $item)
                    );
                }
            }
            return $model->id;
        });

        return $this->response
            ->item(ChangeOrder::find($id), self::TRANSFORMER)
            ->setStatusCode(201)
            ->addMeta('status_code', '201');
    }

    public function auditUpdateOrder(
        CustomerServiceDepartmentRequest $customerServiceDepartmentRequest,
        PaymentDetailRequest $paymentDetailRequest,
        Order $order,
        \App\Handlers\ValidatedHandler $validatedHandler)
    {

        $data[] = $customerServiceDepartmentRequest->validated();
        $data[] = $customerServiceDepartmentRequest->input('order_items');
        $data[] = $paymentDetailRequest->validated()['payment_details'];

        $order = DB::transaction(function() use (
            $data,
            $customerServiceDepartmentRequest,
            $paymentDetailRequest,
            $order,
            $validatedHandler
        ) {
            $order->update($data[0]);

            if ($data[1]??null) {
                foreach ($data[1] as $item) {
                    //计算要通过的字段
                    $validatedData = $validatedHandler->getValidatedData($customerServiceDepartmentRequest->rules(), $item);
                    //存在id则更新,否则插入
                    if (isset($item['id'])) {
                        $order->orderItems()->findOrFail($item['id'])->update($validatedData);
                    } else {
                        $order->orderItems()->create($validatedData);
                    }
                }
            }

            if ($data[2]??null) {
                foreach ($data[2] as $item) {
                    //计算要通过的字段
                    $validatedData = $validatedHandler->getValidatedData($paymentDetailRequest->rules(), $item);
                    //存在id则更新,否则插入
                    if (isset($item['id'])) {
                        $order->paymentDetails()->findOrFail($item['id'])->update($validatedData);
                    } else {
                        $order->paymentDetails()->create($validatedData);
                    }
                }
            }
            return $order;
        });

        return $this->response
            ->item($order, new OrderTransformer())
            ->setStatusCode(201);
    }
   
    public function update(
        CustomerServiceChangeOrdersRequest $customerServiceChangeOrdersRequest,
        PaymentDetailRequest $paymentDetailRequest,
        ChangeOrder $order,
        \App\Handlers\ValidatedHandler $validatedHandler)
    {

        $data[] = $customerServiceChangeOrdersRequest->validated();
        $data[] = $customerServiceChangeOrdersRequest->input('order_items');
        $data[] = $paymentDetailRequest->validated()['payment_details'];

        $order = DB::transaction(function() use (
            $data,
            $customerServiceChangeOrdersRequest,
            $paymentDetailRequest,
            $order,
            $validatedHandler
        ) {
            $order->update($data[0]);

            if ($data[1]??null) {
                foreach ($data[1] as $item) {
                    //计算要通过的字段
                    $validatedData = $validatedHandler->getValidatedData($customerServiceChangeOrdersRequest->rules(), $item);
                    //存在id则更新,否则插入
                    if (isset($item['id'])) {
                        $order->orderItems()->findOrFail($item['id'])->update($validatedData);
                    } else {
                        $order->orderItems()->create($validatedData);
                    }
                }
            }

            if ($data[2]??null) {
                foreach ($data[2] as $item) {
                    //计算要通过的字段
                    $validatedData = $validatedHandler->getValidatedData($paymentDetailRequest->rules(), $item);
                    //存在id则更新,否则插入
                    if (isset($item['id'])) {
                        $order->paymentDetails()->findOrFail($item['id'])->update($validatedData);
                    } else {
                        $order->paymentDetails()->create($validatedData);
                    }
                }
            }
            return $order;
        });

        return $this->response
            ->item($order, new ChangeOrderTransformer())
            ->setStatusCode(201);
        //return $data;
    }


    
    public function destroy(ChangeOrder $order)
    {
        DB::transaction(function() use ($order) {

            $orderItems = $order->orderItems()->delete();
            $paymentDetails = $order->paymentDetails()->delete();
            $order = $order->delete();

            if ($orderItems === false || $paymentDetails === false || $order === false) {
                throw new DeleteResourceFailedException('The given data was invalid.');
            }
        });

        return $this->noContent();
    }

    
    public function destroybyIds(DestroyRequest $request)
    {
        $ids = explode(',', $request->input('ids'));

        DB::transaction(function() use ($ids) {

            $orderItems = \App\Models\OrderItem::whereIn('orders_id', $ids)->delete();
            $paymentDetails = \App\Models\PaymentDetail::whereIn('orders_id',$ids)->delete();
            $order = ChangeOrder::destroy($ids);

            if ($orderItems === false || $paymentDetails === false || $order === false) {
                throw new DeleteResourceFailedException('The given data was invalid.');
            }
        });

        return $this->noContent();
    }

    
    public function editStatusByIds(EditStatuRequest $request)
    {
        return $this->traitEditStatusByIds($request, self::MODEL);
    }

    /**
     * 锁定或释放
     *
     * @PUT("/customerservicedepts/:id/lockorunlock")
     * @Versions({"v1"})
     * @Transaction({
     *      @Response(422, body={
     *          "message": "无法锁定",
     *          "status_code": 422,
     *      }),
     *      @Response(204, body={})
     * })
     */
    public function isLockOrUnlock(ChangeOrder $order)
    {
        return $this->traitAction(
            $order,
            !$order->status || $order->getOriginal('order_status') >= $order::ORDER_STATUS_CS_AUDIT,
            '无法锁定',
            'lockOrUnlock'
        );
    }

    /**
     * 客审
     *
     * @PUT("/customerservicedepts/:id/audit")
     * @Versions({"v1"})
     * @Transaction({
     *      @Response(422, body={
     *          "message": "客审出错",
     *          "status_code": 422,
     *      }),
     *      @Response(204, body={})
     * })
     */
    public function isAudit(ChangeOrder $order)
    {
        return $this->traitAction(
            $order,
            !$order->status || $order->getOriginal('change_status') != $order::CHANGE_STATUS_NEW,
            '客审出错',
            'audit'
        );
    }

    public function isAuditChanges(ChangeOrder $order)
    {
        return $this->traitAction(
            $order,
            !$order->status || $order->getOriginal('change_status') != $order::CHANGE_STATUS_SUBMIT,
            '审核出错',
            'auditChanges'
        );
    }

    /**
     * 退审
     *
     * @PUT("/customerservicedepts/:id/unaudit")
     * @Versions({"v1"})
     * @Transaction({
     *      @Response(422, body={
     *          "message": "退审出错",
     *          "status_code": 422,
     *      }),
     *      @Response(204, body={})
     * })
     */
    public function isUnAudit(ChangeOrder $order)
    {
        return $this->traitAction(
            $order,
            !$order->status || $order->getOriginal('change_status') != $order::CHANGE_STATUS_SUBMIT,
            '退回提交出错',
            'unAudit'
        );
    }

    public function isCanceled(ChangeOrder $order)
    {
        return $this->traitAction(
            $order,
            !$order->status,
            '作废出错',
            'cancel'
        );
    }

    /**
     * 拆单(要及时修改新订单的价格数据)
     *
     * @PUT("/customerservicedepts/:id/splitorder")
     * @Versions({"v1"})
     * @Parameters({
     *      @Parameter("order_items[0][id]", type="integer", description="子单id", required=true),
     *      @Parameter("order_items[0][quantity]", type="numeric", description="拆分数量", required=true),
     * })
     * @Transaction({
     *      @Response(422, body={
     *          "message": "拆单",
     *          "status_code": 422,
     *      }),
     *      @Response(204, body={})
     * })
     */
    public function isSplitOrder(SplitOrderRequest $splitOrderRequest, ChangeOrder $order)
    {
        return $this->traitAction(
            $order,
            !$order->status || $order->getOriginal('order_status') >= $order::ORDER_STATUS_FD_AUDIT,
            '拆单出错',
            'splitOrder',
            $splitOrderRequest->validated()['order_items']
        );
    }

    /**
     * 合并订单
     *
     * @PUT("/customerservicedepts/mergerorder?order_id_one=1&order_id_two=2")
     * @Versions({"v1"})
     * @Parameters({
     *      @Parameter("order_id_one", type="integer", description="订单一", required=true),
     *      @Parameter("order_id_two", type="integer", description="订单二", required=true),
     * })
     * @Transaction({
     *      @Response(422, body={
     *          "message": "合并订单出错",
     *          "status_code": 422,
     *      }),
     *      @Response(204, body={})
     * })
     */
    public function isMergerOrder(MergerOrderRequest $mergerOrderRequest, ChangeOrder $order)
    {
        return $this->traitAction(
            $order,
            false,
            '合并订单出错',
            'mergerOrder',
            $mergerOrderRequest->validated()
        );
    }

    
}
