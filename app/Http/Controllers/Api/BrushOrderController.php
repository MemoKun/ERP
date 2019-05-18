<?php

namespace App\Http\Controllers\Api;

use App\Models\Order;
use Illuminate\Support\Facades\DB;

use App\Http\Requests\Api\BrushOrderRequest;
use App\Transformers\OrderTransformer;
use App\Http\Requests\Api\EditStatuRequest;
use App\Http\Requests\Api\DestroyRequest;

use App\Http\Controllers\Traits\CURDTrait;
use App\Http\Controllers\Traits\ProcedureTrait;


/**
 * 刷单资源
 * @Resource("brushlockconf",uri="/api")
 */
class BrushOrderController extends Controller
{
    use CURDTrait;
    use ProcedureTrait;

    const TRANSFORMER = BrushOrderTransformer::class;
    const MODEL = Order::class;

    public function index(BrushOrderRequest $request)
    {
        return $this->allOrPage($request, self::MODEL, self::TRANSFORMER, 10);
    }

    public function store(BrushOrderRequest $request)
    {
        return $this->traitStore($request->validated(), self::MODEL, self::TRANSFORMER);
    }

    public function show(Order $brushlockconf)
    {
        return $this->traitShow($brushlockconf, self::TRANSFORMER);
    }

    public function update(BrushOrderRequest $request, Order $brushlockconf)
    {
        return $this->traitUpdate($request, $brushlockconf, self::TRANSFORMER);
    }

    public function destroy(Order $brushlockconf)
    {
        return $this->traitDestroy($brushlockconf);
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
