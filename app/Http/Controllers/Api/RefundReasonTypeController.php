<?php

namespace App\Http\Controllers\Api;

use App\Models\RefundReasonType;
use App\Http\Requests\Api\RefundReasonTypeRequest;
use App\Http\Requests\Api\EditStatuRequest;
use App\Http\Requests\Api\DestroyRequest;
use App\Transformers\RefundReasonTypeTransformer;
use App\Http\Controllers\Traits\CURDTrait;

class RefundReasonTypeController extends Controller
{
    use CURDTrait;

    const TRANSFORMER = RefundReasonTypeTransformer::class;
    const MODEL = RefundReasonType::class;

    public function index(RefundReasonTypeRequest $request)
    {
        return $this->allOrPage($request, self::MODEL, self::TRANSFORMER, 10);
    }

    public function store(RefundReasonTypeRequest $request)
    {
        return $this->traitStore($request->validated(), self::MODEL, self::TRANSFORMER);
    }

    public function show(RefundReasonType $refundreasontype)
    {
        return $this->traitShow($refundreasontype, self::TRANSFORMER);
    }

    public function update(RefundReasonTypeRequest $request, RefundReasonType $refundreasontype)
    {
        return $this->traitUpdate($request, $refundreasontype, self::TRANSFORMER);
    }

    public function destroy(RefundReasonType $refundreasontype)
    {
        return $this->traitDestroy($refundreasontype);
    }

    public function destroybyIds(DestroyRequest $request)
    {
        return $this->traitDestroybyIds($request, self::MODEL);
    }

    public function editStatusByIds(EditStatuRequest $request)
    {
        return $this->traitEditStatusByIds($request, self::MODEL);
    }
}
