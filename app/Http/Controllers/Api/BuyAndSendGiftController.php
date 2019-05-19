<?php

namespace App\Http\Controllers\Api;

use App\Models\BuyAndSendGift;
use App\Http\Requests\Api\BuyAndSendGiftRequest;
use App\Http\Requests\Api\DestroyRequest;
use App\Transformers\BuyAndSendGiftTransformer;
use App\Http\Controllers\Traits\CURDTrait;

class BuyAndSendGiftController extends Controller
{
    use CURDTrait;

    const TRANSFORMER = BuyAndSendGiftTransformer::class;
    const MODEL = BuyAndSendGift::class;

    //获取所有买就送赠品
    public function index(BuyAndSendGiftRequest $request)
    {
        return $this->allOrPage($request, self::MODEL, self::TRANSFORMER, 10);
    }

    //删除买就送赠品
    public function destroy(BuyAndSendGift $buyAndSendGift)
    {
        return $this->traitDestroy($buyAndSendGift);
    }

    //删除一组买就送赠品
    public function destroybyIds(DestroyRequest $request)
    {
        return $this->traitDestroybyIds($request, self::MODEL);
    }

    //显示单条买就送赠品
    public function show(BuyAndSendGift $buyAndSendGift)
    {
        return $this->traitShow($buyAndSendGift, self::TRANSFORMER);
    }

    //更改一组买就送赠品
    public function editStatusByIds(EditStatuRequest $request)
    {
        return $this->traitEditStatusByIds($request, self::MODEL);
    }
}
