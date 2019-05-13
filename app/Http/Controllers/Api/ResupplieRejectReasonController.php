<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\Api\ResupplieRejectReasonRequest;
use App\Http\Requests\Api\EditStatuRequest;
use App\Http\Requests\Api\DestroyRequest;
use App\Transformers\ResupplieRejectReasonTransformer;
use App\Models\ResupplieRejectReason;
use App\Http\Controllers\Traits\CURDTrait;

class ResupplieRejectReasonController extends Controller
{
    use CURDTrait;

    const TRANSFORMER = ResupplieRejectReasonTransformer::class;
    const MODEL = ResupplieRejectReason::class;

    //获取所有驳回原因
    public function index(ResupplieRejectReasonRequest $request)
    {
        return $this->allOrPage($request, self::MODEL, self::TRANSFORMER, 10);
    }
    //新增驳回原因
    public function store(ResupplieRejectReasonRequest $request)
    {
        return $this->traitStore($request->validated(), self::MODEL, self::TRANSFORMER);
    }
    //显示单条驳回原因
    public function show(ResupplieRejectReason $resupplieRejectReason)
    {
        return $this->traitShow($resupplieRejectReason, self::TRANSFORMER);
    }

    //删除驳回原因
    public function destroy(ResupplieRejectReason $resupplieRejectReason)
    {
        return $this->traitDestroy($resupplieRejectReason);
    }

    //删除一组驳回原因
    public function destroybyIds(DestroyRequest $request)
    {
        return $this->traitDestroybyIds($request, self::MODEL);
    }

    //更改一组驳回原因状态
    public function editStatusByIds(EditStatuRequest $request)
    {
        return $this->traitEditStatusByIds($request, self::MODEL);
    }
}