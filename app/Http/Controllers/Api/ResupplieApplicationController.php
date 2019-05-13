<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Facades\DB;
use App\Models\ResupplieOrder;
use App\Http\Requests\Api\ResupplieApplicationRequest;
use App\Http\Requests\Api\ResupplieProblemProductRequest;
use App\Http\Requests\Api\ResupplieRejectReasonRequest;
//use App\Http\Requests\Api\EditStatuRequest;

use App\Transformers\ResupplieOrderTransformer;
use App\Http\Controllers\Traits\CURDTrait;
use App\Http\Controllers\Traits\ProcedureTrait;

class ResupplieApplicationController extends Controller
{
    use CURDTrait;
    use ProcedureTrait;

    const TRANSFORMER = ResupplieOrderTransformer::class;
    const MODEL = ResupplieOrder::class;
    const PerPage = 8;

    //获取所有未提交的补件单
    public function searchUnsubmited()
    {
        $resupplieOrder = ResupplieOrder::query()->whereIn('is_submit', [ResupplieOrder::RESUPPLIE_UNSUBMITED]);

        return $this->response->paginator($resupplieOrder->paginate(self::PerPage), self::TRANSFORMER);
    }

    //获取所有已提交的补件单
    public function searchSubmited()
    {
        $resupplieOrder = ResupplieOrder::query()->whereIn('is_submit', [ResupplieOrder::RESUPPLIE_SUBMITED]);

        return $this->response->paginator($resupplieOrder->paginate(self::PerPage), self::TRANSFORMER);
    }

    //获取所有补件单
    public function index(ResupplieApplicationRequest $requset)
    {
        return $this->allOrPage($requset, self::MODEL, self::TRANSFORMER, self::PerPage);
    }

    //提交，点击后在补件审核后可见
    public function isSubmit(ResupplieOrder $resupplieOrder)
    {
        return $this->traitAction(
            $resupplieOrder,
            $resupplieOrder->is_submit,
            '提交出错',
            'submit'
        );
    }

    //驳回，点击后需重新提交
    public function isReject(ResupplieOrder $resupplieOrder)
    {
        return $this->traitAction(
            $resupplieOrder,
            !$resupplieOrder->is_submit,
            '驳回出错',
            'reject'
        );
    }

    //添加驳回原因
    public function rejectReason(ResupplieApplicationRequest $request,ResupplieRejectReasonRequest $resupplieRejectReasonRequest,ResupplieOrder $resupplieOrder,\App\Handlers\ValidatedHandler $validatedHandler)
    {
        $data[] = $request->validated();
        $data[] = $request->input('re_supplie_reject_reasons');

        $resupplieOrder = DB::transaction(function () use (
            $data,
            $resupplieRejectReasonRequest,
            $resupplieOrder,
            $validatedHandler
        ) {
            $resupplieOrder->update($data[0]);

            if ($data[1] ?? null) {
                foreach ($data[1] as $item) {
                    //计算要通过的字段
                    $validatedData = $validatedHandler->getValidatedData($resupplieRejectReasonRequest->rules(), $item);
                    //存在id则更新,否则插入
                    if (isset($item['id'])) {
                        $resupplieOrder->resupplieRejectReason()->findOrFail($item['id'])->update($validatedData);
                    } else {
                        $resupplieOrder->resupplieRejectReason()->create($validatedData);
                    }
                }
            }

            return $resupplieOrder;
        });
    }

    //新增补件单
    public function store(
        ResupplieApplicationRequest $resupplieApplicationRequest,
        ResupplieProblemProductRequest $resupplieProblemProductRequest,
        \App\Handlers\ValidatedHandler $validatedHandler
    ) {
        $data[] = $resupplieApplicationRequest->validated();
        $data[] = $resupplieApplicationRequest->input('re_supplie_order_items');
        $data[] = $resupplieApplicationRequest->input('re_supplie_problem_products');

        $id = DB::transaction(function () use (
            $data,
            $resupplieApplicationRequest,
            $resupplieProblemProductRequest,
            $validatedHandler
        ) {
            $model = ResupplieOrder::create($data[0]);
            if ($data[1]) {
                foreach ($data[1] as $item) {
                    $model->resupplieOrderItem()->create(
                        $validatedHandler->getValidatedData($resupplieApplicationRequest->rules(), $item)
                    );
                }
            }
            if ($data[2]) {
                foreach ($data[2] as $item) {
                    $model->resupplieProblemProduct()->create(
                        $validatedHandler->getValidatedData($resupplieProblemProductRequest->rules(), $item)
                    );
                }
            }

            return $model->id;
        });

        return $this->response
            ->item(ResupplieOrder::find($id), self::TRANSFORMER)
            ->setStatusCode(201)
            ->addMeta('status_code', '201');
    }

    //显示单条补件单
    public function show(ResupplieOrder $resupplieOrder)
    {
        return $this->traitShow($resupplieOrder, self::TRANSFORMER);
    }

    //修改补件单
    public function update(
        ResupplieApplicationRequest $resupplieApplicationRequest,
        ResupplieProblemProductRequest $resupplieProblemProductRequest,
        ResupplieOrder $resupplieOrder,
        \App\Handlers\ValidatedHandler $validatedHandler)
    {
        $data[] = $resupplieApplicationRequest->validated();
        $data[] = $resupplieApplicationRequest->input('re_supplie_order_items');
        $data[] = $resupplieApplicationRequest->input('re_supplie_problem_products');

        $resupplieOrder = DB::transaction(function () use (
            $data,
            $resupplieApplicationRequest,
            $resupplieProblemProductRequest,
            $resupplieOrder,
            $validatedHandler
        ) {
            $resupplieOrder->update($data[0]);

            if ($data[1] ?? null) {
                foreach ($data[1] as $item) {
                    //计算要通过的字段
                    $validatedData = $validatedHandler->getValidatedData($resupplieApplicationRequest->rules(), $item);
                    //存在id则更新,否则插入
                    if (isset($item['id'])) {
                        $resupplieOrder->resupplieOrderItem()->findOrFail($item['id'])->update($validatedData);
                    } else {
                        $resupplieOrder->resupplieOrderItem()->create($validatedData);
                    }
                }
            }

            if ($data[2] ?? null) {
                foreach ($data[2] as $item) {
                    //计算要通过的字段
                    $validatedData = $validatedHandler->getValidatedData($resupplieProblemProductRequest->rules(), $item);
                    //存在id则更新,否则插入
                    if (isset($item['id'])) {
                        $resupplieOrder->resupplieProblemProduct()->findOrFail($item['id'])->update($validatedData);
                    } else {
                        $resupplieOrder->resupplieProblemProduct()->create($validatedData);
                    }
                }
            }

            return $resupplieOrder;
        });

        return $this->response
            ->item($resupplieOrder, new ResupplieOrderTransformer())
            ->setStatusCode(201);
    }
}
