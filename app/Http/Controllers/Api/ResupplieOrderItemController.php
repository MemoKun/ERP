<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\Api\ResuppliedOrderItemRequest;
use App\Http\Requests\Api\EditStatuRequest;
use App\Http\Requests\Api\DestroyRequest;
use App\Transformers\ResupplieOrderItemTransformer;
use App\Models\ResupplieOrderItem;
use App\Http\Controllers\Traits\CURDTrait;

class ResuppliedOrderItemController extends Controller
{
    use CURDTrait;

    const TRANSFORMER = ResupplieOrderItemTransformer::class;
    const MODEL = ResupplieOrderItem::class;

    //获取所有补件单子单
    public function index(ResuppliedOrderItemRequest $request)
    {
        return $this->allOrPage($request, self::MODEL, self::TRANSFORMER, 10);
    }

    //显示单条补件单子单
    public function show(ResupplieOrderItem $resupplieOrderItem)
    {
        return $this->traitShow($resupplieOrderItem, self::TRANSFORMER);
    }

    //删除补件单子单
    public function destroy(ResupplieOrderItem $resupplieOrderItem)
    {
        return $this->traitDestroy($resupplieOrderItem);
    }

    //删除一组补件单子单
    public function destroybyIds(DestroyRequest $request)
    {
        return $this->traitDestroybyIds($request, self::MODEL);
    }

    //更改一组补件单子单状态
    public function editStatusByIds(EditStatuRequest $request)
    {
        return $this->traitEditStatusByIds($request, self::MODEL);
    }
}