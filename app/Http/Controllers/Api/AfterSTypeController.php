<?php

namespace App\Http\Controllers\Api;

use App\Models\AfterSType;
use App\Http\Requests\Api\AfterSTypeRequest;
use App\Transformers\AfterSTypeTransformer;
use App\Http\Controllers\Traits\CURDTrait;

/**
 * 收款管理
 * @Resource("shops",uri="/api")
 */
class AfterSTypeController extends Controller
{
    use CURDTrait;

    const TRANSFORMER = AfterSTypeTransformer::class;
    const MODEL = AfterSType::class;

    /**
     * 获取所有收款管理
     */
    public function index(AfterSTypeRequest $request)
    {
        return $this->allOrPage($request, self::MODEL, self::TRANSFORMER, 10);
    }


   

}
