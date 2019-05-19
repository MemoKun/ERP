<?php

namespace App\Http\Controllers\Api;

use App\Models\AfterSalePatch;
use App\Http\Requests\Api\AfterSalePatchRequest;
use App\Http\Requests\Api\EditStatuRequest;
use App\Http\Requests\Api\DestroyRequest;
use App\Transformers\AfterSalePatchTransformer;
use App\Http\Controllers\Traits\CURDTrait;

/**
 * 售后退货资源
 * @Resource("aftersalepatch",uri="/api")
 */
class AfterSalePatchsController extends Controller
{
    use CURDTrait;

    const TRANSFORMER = AfterSalePatchTransformer::class;
    const MODEL = AfterSalePatch::class;

    public function index(AfterSalePatchRequest $request)
    {
        return $this->allOrPage($request, self::MODEL, self::TRANSFORMER, 10);
    }

    public function store(AfterSalePatchRequest $request)
    {
        return $this->traitStore($request->validated(), self::MODEL, self::TRANSFORMER);
    }

    public function update(AfterSalePatchRequest $request, AfterSalePatch $aftersalepatch)
    {
        return $this->traitUpdate($request, $aftersalepatch, self::TRANSFORMER);
    }

    public function show(AfterSalePatch $aftersalepatch)
    {
        return $this->traitShow($aftersalepatch, self::TRANSFORMER);
    }

    public function destroy(AfterSalePatch $aftersalepatch)
    {
        return $this->traitDestroy($aftersalepatch);
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
