<?php

namespace App\Http\Controllers\Api;

use App\Models\AfterSaleRefund;
use App\Http\Requests\Api\AfterSaleRefundRequest;
use App\Http\Requests\Api\EditStatuRequest;
use App\Http\Requests\Api\DestroyRequest;
use App\Transformers\AfterSaleRefundTransformer;
use App\Http\Controllers\Traits\CURDTrait;

/**
 * 售后退款资源
 * @Resource("aftersalerefund",uri="/api")
 */
class AfterSaleRefundsController extends Controller
{
    use CURDTrait;

    const TRANSFORMER = AfterSaleRefundTransformer::class;
    const MODEL = AfterSaleRefund::class;

    public function index(AfterSaleRefundRequest $request)
    {
        return $this->allOrPage($request, self::MODEL, self::TRANSFORMER, 10);
    }

    public function store(AfterSaleRefundRequest $request)
    {
        return $this->traitStore($request->validated(), self::MODEL, self::TRANSFORMER);
    }

    public function update(AfterSaleRefundRequest $request, AfterSaleRefund $aftersalerefund)
    {
        return $this->traitUpdate($request, $aftersalerefund, self::TRANSFORMER);
    }

    public function show(AfterSaleRefund $aftersalerefund)
    {
        return $this->traitShow($aftersalerefund, self::TRANSFORMER);
    }

    public function destroy(AfterSaleRefund $aftersalerefund)
    {
        return $this->traitDestroy($aftersalerefund);
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
