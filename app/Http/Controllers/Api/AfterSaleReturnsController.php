<?php

namespace App\Http\Controllers\Api;

use App\Models\AfterSaleReturn;
use App\Http\Requests\Api\AfterSaleReturnRequest;
use App\Http\Requests\Api\EditStatuRequest;
use App\Http\Requests\Api\DestroyRequest;
use App\Transformers\AfterSaleReturnTransformer;
use App\Http\Controllers\Traits\CURDTrait;

/**
 * 售后退货资源
 * @Resource("aftersalereturn",uri="/api")
 */
class AfterSaleReturnsController extends Controller
{
    use CURDTrait;

    const TRANSFORMER = AfterSaleReturnTransformer::class;
    const MODEL = AfterSaleReturn::class;

    public function index(AfterSaleReturnRequest $request)
    {
        return $this->allOrPage($request, self::MODEL, self::TRANSFORMER, 10);
    }

    public function store(AfterSaleReturnRequest $request)
    {
        return $this->traitStore($request->validated(), self::MODEL, self::TRANSFORMER);
    }

    public function update(AfterSaleReturnRequest $request, AfterSaleReturn $aftersalereturn)
    {
        return $this->traitUpdate($request, $aftersalereturn, self::TRANSFORMER);
    }

    public function show(AfterSaleReturn $aftersalereturn)
    {
        return $this->traitShow($aftersalereturn, self::TRANSFORMER);
    }

    public function destroy(AfterSaleReturn $aftersalereturn)
    {
        return $this->traitDestroy($aftersalereturn);
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
