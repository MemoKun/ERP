<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Facades\DB;

use App\Models\Order;

use App\Http\Requests\Api\CustomerServiceDepartmentRequest;
use App\Http\Requests\Api\WarehousingDepartmentRequest;
use App\Http\Requests\Api\PaymentDetailRequest;
use App\Http\Requests\Api\SplitOrderRequest;
use App\Http\Requests\Api\MergerOrderRequest;
use App\Http\Requests\Api\TurnToAdditionOrderRequest;
use App\Http\Requests\Api\EditStatuRequest;
use App\Http\Requests\Api\DestroyRequest;

use App\Transformers\OrderTransformer;

use App\Http\Controllers\Traits\CURDTrait;
use App\Http\Controllers\Traits\ProcedureTrait;

use Dingo\Api\Exception\DeleteResourceFailedException;
use Dingo\Api\Exception\UpdateResourceFailedException;

/**
 * 补单审核.
 *
 * @Resource("customerservicedepts",uri="/api")
 */
class CustomerServiceResupplieOrderAuditController extends Controller
{
    use CURDTrait;
    use ProcedureTrait;

    const TRANSFORMER = OrderTransformer::class;
    const MODEL = Order::class;
    const PerPage = 8;

    public function index(WarehousingDepartmentRequest $request)
    {
        // $order_status = $request->input("order_status");
        // extract($request->validated());

        $order_status = $request->input('order_status');
        $member_nick = $request->input('member_nick');
        $system_order_no = $request->input('system_order_no');
        $receiver_name = $request->input('receiver_name');
        $receiver_phone = $request->input('receiver_phone');
        $receiver_address = $request->input('receiver_address');
        $shops_id = $request->input('shops_id');
        $business_personnel_id = $request->input('business_personnel_id');
        $seller_remark = $request->input('seller_remark');
        $logistics_id = $request->input('logistics_id');
        $seller_flag = $request->input('seller_flag');
        $order = Order::query()->whereIn('order_status', $order_status)
        ->where('member_nick', 'like', '%'.$member_nick.'%')
        ->where('system_order_no', 'like', '%'.$system_order_no.'%')
        ->where('receiver_name', 'like', '%'.$receiver_name.'%')
        ->where('receiver_phone', 'like', '%'.$receiver_phone.'%')
        ->where('receiver_address', 'like', '%'.$receiver_address.'%')
        ->where('shops_id', 'like', '%'.$shops_id.'%')
        ->where('business_personnel_id', 'like', '%'.$business_personnel_id.'%')
        ->where('seller_remark', 'like', '%'.$seller_remark.'%')
        ->where('logistics_id', 'like', '%'.$logistics_id.'%')
        ->where('seller_flag', 'like', '%'.$seller_flag.'%')
        ->orderBy('created_at', 'desc');

        return $this->response->paginator($order->paginate(self::PerPage), new OrderTransformer());
    }

    public function isSubmit(Order $order)
    {
        return $this->traitAction(
            $order,
            !$order->status,
            '提交出错',
            'resupplieOrderSubmit'
        );
    }

    public function isAudit(Order $order)
    {
        return $this->traitAction(
            $order,
            !$order->status,
            '审核出错',
            'resupplieOrderAudit'
        );
    }

    public function destroy(Order $order)
    {
        DB::transaction(function () use ($order) {
            $orderItems = $order->orderItems()->delete();
            $paymentDetails = $order->paymentDetails()->delete();
            $order = $order->delete();

            if ($orderItems === false || $paymentDetails === false || $order === false) {
                throw new DeleteResourceFailedException('The given data was invalid.');
            }
        });

        return $this->noContent();
    }
}