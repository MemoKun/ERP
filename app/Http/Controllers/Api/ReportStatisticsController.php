<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Facades\DB;
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

    public function orderAmount(CustomerServiceDepartmentRequest $request)
    {
        $today=date("Y-m-d");
        $thismonth_start = date("Y-m-d H:i:s",mktime(0, 0 , 0,date("m"),1,date("Y"))); 
        $thismonth_end = date("Y-m-d H:i:s",mktime(23,59,59,date("m"),date("t"),date("Y")));

        $dailyOrder = DB::table("orders")->whereDate('created_at', $today)->get();
        $monthlyOrder = DB::table("orders")->whereBetween('created_at', [$thismonth_start, $thismonth_end])->get();
        
        $dailyOrderNum = count($dailyOrder);
        $monthlyOrderNum = count($monthlyOrder);
        
        return $monthlyOrderNum;
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
