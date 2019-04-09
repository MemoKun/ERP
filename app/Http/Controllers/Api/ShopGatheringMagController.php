<?php

namespace App\Http\Controllers\Api;

use App\Models\ShopGatheringMag;
use App\Http\Requests\Api\ShopGatheringMagRequest;
use App\Transformers\ShopGatheringMagTransformer;
use App\Http\Requests\Api\EditStatuRequest;
use App\Http\Requests\Api\DestroyRequest;
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

    public function store(ShopGatheringMagRequest $request)
    {
        return $this->traitStore(
            $request->validated(),
            self::MODEL,
            self::TRANSFORMER
        );
    }

    public function show(ShopGatheringMag $shopGatheringMag)
    {
        return $this->traitShow($shopGatheringMag, self::TRANSFORMER);
    }

    public function update(ShopGatheringMagRequest $request, ShopGatheringMag $shopGatheringMag)
    {
        return $this->traitUpdate($request, $shopGatheringMag, self::TRANSFORMER);
    }

    public function destroy(ShopGatheringMag $shopGatheringMag)
    {
        return $this->traitDestroy($shopGatheringMag);
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
