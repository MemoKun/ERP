<?php

namespace App\Http\Controllers\Api;

use App\Models\EvalCategoryMag;
use App\Http\Requests\Api\EvalCategoryMagRequest;
use App\Transformers\EvalCategoryMagTransformer;
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

}
