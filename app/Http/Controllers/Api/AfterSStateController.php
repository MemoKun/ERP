<?php

namespace App\Http\Controllers\Api;

use App\Models\AfterSState;
use App\Http\Requests\Api\AfterSStateRequest;
use App\Transformers\AfterSStateTransformer;
use App\Http\Controllers\Traits\CURDTrait;

/**
 * 店铺资源
 * @Resource("shops",uri="/api")
 */
class AfterSStateController extends Controller
{
    use CURDTrait;

    const TRANSFORMER = AfterSStateTransformer::class;
    const MODEL = AfterSState::class;

    /**
     * 获取所有收款管理
     */
    public function index(AfterSStateRequest $request)
    {
        return $this->allOrPage($request, self::MODEL, self::TRANSFORMER, 10);
    }


   

}
