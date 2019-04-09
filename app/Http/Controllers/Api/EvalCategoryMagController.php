<?php

namespace App\Http\Controllers\Api;

use App\Models\EvalCategoryMag;
use App\Http\Requests\Api\EvalCategoryMagRequest;
use App\Transformers\EvalCategoryMagTransformer;
use App\Http\Requests\Api\EditStatuRequest;
use App\Http\Requests\Api\DestroyRequest;
use App\Http\Controllers\Traits\CURDTrait;

/**
 * 收款管理
 * @Resource("shops",uri="/api")
 */
class EvalCategoryMagController extends Controller
{
    use CURDTrait;

    const TRANSFORMER = EvalCategoryMagTransformer::class;
    const MODEL = EvalCategoryMag::class;

    /**
     * 获取所有收款管理
     */
    public function index(EvalCategoryMagRequest $request)
    {
        return $this->allOrPage($request, self::MODEL, self::TRANSFORMER, 10);
    }

    /**
     * 新建评价类别
     */

    public function store(EvalCategoryMagRequest $request)
    {
        return $this->traitStore($request->validated(), self::MODEL, self::TRANSFORMER);
    }

    public function show(EvalCategoryMag $evalCategoryMag)
    {
        return $this->traitShow($evalCategoryMag, self::TRANSFORMER);
    }

    public function update(EvalCategoryMagRequest $request, EvalCategoryMag $evalCategoryMag)
    {
        return $this->traitUpdate($request, $evalCategoryMag, self::TRANSFORMER);
    }

    public function destroy(EvalCategoryMag $evalCategoryMag)
    {
        return $this->traitDestroy($evalCategoryMag);
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
