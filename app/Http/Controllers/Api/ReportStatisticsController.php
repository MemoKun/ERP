<?php

namespace App\Http\Controllers\Api;

use App\Models\Order;
use App\Http\Requests\Api\CustomerServiceDepartmentRequest;
use App\Http\Requests\Api\EditStatuRequest;
use App\Http\Requests\Api\DestroyRequest;
use App\Transformers\OrderTransformer;
use App\Http\Controllers\Traits\CURDTrait;

class ReportStatisticsController extends Controller
{
    use CURDTrait;

    const TRANSFORMER = OrderTransformer::class;
    const MODEL = Order::class;

    public function index(CustomerServiceDepartmentRequest $request)
    {
        return $this->allOrPage($request, self::MODEL, self::TRANSFORMER, 10);
    }

    public function store(CustomerServiceDepartmentRequest $request)
    {
        return $this->traitStore($request->validated(), self::MODEL, self::TRANSFORMER);
    }

    public function show(Order $type)
    {
        return $this->traitShow($type, self::TRANSFORMER);
    }

    public function update(CustomerServiceDepartmentRequest $request, Order $type)
    {
        return $this->traitUpdate($request, $type, self::TRANSFORMER);
    }

    public function destroy(Order $type)
    {
        return $this->traitDestroy($type);
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
