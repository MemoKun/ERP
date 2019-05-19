<?php

namespace App\Http\Controllers\Api;

use App\Models\BuyAndSendPro;
use App\Http\Requests\Api\BuyAndSendProRequest;
use App\Http\Requests\Api\BuyAndSendGiftRequest;
use App\Http\Requests\Api\EditStatuRequest;
use App\Http\Requests\Api\DestroyRequest;
use App\Transformers\BuyAndSendProTransformer;
use App\Http\Controllers\Traits\CURDTrait;
use App\Http\Controllers\Traits\ProcedureTrait;
//use Dingo\Api\Exception\UpdateResourceFailedException;

class BuyAndSendProController extends Controller
{
    use CURDTrait;
    use ProcedureTrait;

    const TRANSFORMER = BuyAndSendProTransformer::class;
    const MODEL = BuyAndSendPro::class;

    //获取所有买就送商品
    public function index(BuyAndSendProRequest $request)
    {
        return $this->allOrPage($request, self::MODEL, self::TRANSFORMER, 10);
    }

    //新增买就送商品
    public function store(BuyAndSendProRequest $request, BuyAndSendGiftRequest $buyAndSendGiftRequest)
    {
        $data[] = $request->validated();
        $data[] = $buyAndSendGiftRequest->input('buy_and_send_gift');

        return $this->traitJoint2Store(
            $data,
            'buyAndSendGift',
            $buyAndSendGiftRequest->rules(),
            self::MODEL,
            self::TRANSFORMER
        );
    }

    //删除买就送商品
    public function destroy(BuyAndSendPro $buyAndSendPro)
    {
        return $this->traitDestroy($buyAndSendPro);
    }

    //删除一组买就送商品
    public function destroybyIds(DestroyRequest $request)
    {
        return $this->traitDestroybyIds($request, self::MODEL);
    }

    //显示单条买就送商品
    public function show(BuyAndSendPro $buyAndSendPro)
    {
        return $this->traitShow($buyAndSendPro, self::TRANSFORMER);
    }

    //修改买就送商品
    public function update(BuyAndSendProRequest $request, BuyAndSendGiftRequest $buyAndSendGiftRequest, BuyAndSendPro $buyAndSendPro)
    {
        $data[] = $request->validated();
        $data[] = $buyAndSendGiftRequest->input('buy_and_send_gift');

        return $this->traitJoint2Update(
            $data,
            'buyAndSendGift',
            $buyAndSendGiftRequest->rules(),
            $buyAndSendPro,
            self::TRANSFORMER
        );
    }

    //修改一组买就送商品
    public function editStatusByIds(EditStatuRequest $request)
    {
        return $this->traitEditStatusByIds($request, self::MODEL);
    }

    //审核，点击后状态变为启用
    public function isAudit(BuyAndSendPro $buyAndSendPro)
    {
        return $this->traitAction(
            $buyAndSendPro,
            $buyAndSendPro->status,
            '审核出错',
            'audit'
        );
    }

    //作废，点击后状态变为非启用
    public function isVoid(BuyAndSendPro $buyAndSendPro)
    {
        return $this->traitAction(
            $buyAndSendPro,
            !$buyAndSendPro->status,
            '作废失败',
            'void'
        );
    }
}
