<?php

namespace App\Http\Controllers\Api;

use App\Models\ShopGatheringMag;
use App\Http\Requests\Api\ShopGatheringMagRequest;
use App\Transformers\ShopGatheringMagTransformer;
use App\Http\Controllers\Traits\CURDTrait;

/**
 * 店铺资源
 * @Resource("shops",uri="/api")
 */
class ShopGatheringMagController extends Controller
{
    use CURDTrait;

    const TRANSFORMER = ShopGatheringMagTransformer::class;
    const MODEL = ShopGatheringMag::class;

    /**
     * 获取所有收款管理
     */
    public function index(ShopGatheringMagRequest $request)
    {
        return $this->allOrPage($request, self::MODEL, self::TRANSFORMER, 10);
    }


   

}
