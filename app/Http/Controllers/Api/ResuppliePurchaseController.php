<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\Api\ResuppliePurchaseRequest;
use App\Http\Requests\Api\EditStatuRequest;
use App\Http\Requests\Api\DestroyRequest;
use App\Transformers\ResuppliePurchaseTransformer;
use App\Models\ResuppliePurchase;
use App\Http\Controllers\Traits\CURDTrait;

class ResuppliePurchaseController extends Controller
{
    use CURDTrait;

    const TRANSFORMER = ResuppliePurchaseTransformer::class;
    const MODEL = ResuppliePurchase::class;

    //获取所有采购明细
    public function index(ResuppliePurchaseRequest $request)
    {
        return $this->allOrPage($request, self::MODEL, self::TRANSFORMER, 10);
    }

    //显示单条采购明细
    public function show(ResuppliePurchase $resuppliePurchase)
    {
        return $this->traitShow($resuppliePurchase, self::TRANSFORMER);
    }

    //删除采购明细
    public function destroy(ResuppliePurchase $resuppliePurchase)
    {
        return $this->traitDestroy($resuppliePurchase);
    }

    //删除一组采购明细
    public function destroybyIds(DestroyRequest $request)
    {
        return $this->traitDestroybyIds($request, self::MODEL);
    }

    //更改一组采购明细状态
    public function editStatusByIds(EditStatuRequest $request)
    {
        return $this->traitEditStatusByIds($request, self::MODEL);
    }
}
