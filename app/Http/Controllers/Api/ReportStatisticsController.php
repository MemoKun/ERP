<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Facades\DB;
use App\Models\Order;
use App\Models\ChangeOrder;
use App\Models\RefundOrder;
use App\Models\Purchase;
use App\Models\CancelPurchase;
use App\Models\StockIn;
use App\Models\ResupplieOrder;
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
        $today = date("Y-m-d");
        $thisMonth_start = date("Y-m-d H:i:s", mktime(0, 0, 0, date("m"), 1, date("Y")));
        $thisMonth_end = date("Y-m-d H:i:s", mktime(23, 59, 59, date("m"), date("t"), date("Y")));

        $yestertoday = date("Y-m-d", strtotime("-1 day"));
        $lastMonth_start = date('Y-m-01 00:00:00', strtotime('-1 month'));
        $lastMonth_end = date("Y-m-d 23:59:59", strtotime(-date('d') . 'day'));

        /**获取每日订单和每月订单*/
        $todayOrder = DB::table("orders")->whereDate('created_at', $today)->get();
        $thisMonthOrder = DB::table("orders")->whereBetween('created_at', [$thisMonth_start, $thisMonth_end])->get();

        $yesterdayOrder = DB::table("orders")->whereDate('created_at', $yestertoday)->get();
        $lastMonthOrder = DB::table("orders")->whereBetween('created_at', [$lastMonth_start, $lastMonth_end])->get();

        /**获取每日订单和每月订单-数组形式*/
        $todayOrderArray = json_decode($todayOrder, true);
        $thisMonthOrderArray = json_decode($thisMonthOrder, true);

        $yesterdayOrderArray = json_decode($yesterdayOrder, true);
        $lastMonthOrderArray = json_decode($lastMonthOrder, true);

        /**数据处理*/
        /**今天和这个月*/
        $todayOrderNum = count($todayOrder);
        $thisMonthOrderNum = count($thisMonthOrder);

        $todaySalesAmountSum = round(array_sum(array_map(function ($val) {
            return $val['order_amount'];
        }, $todayOrderArray)), 2);
        $thisMonthSalesAmountSum = round(array_sum(array_map(function ($val) {
            return $val['order_amount'];
        }, $thisMonthOrderArray)), 2);

        $todaySalesAmountAverage = round(array_sum(array_map(function ($val) {
            return $val['order_amount'];
        }, $todayOrderArray)) / ($todayOrderNum == 0 ? 1 : $todayOrderNum), 2);
        $thisMonthSalesAmountAverage = round(array_sum(array_map(function ($val) {
            return $val['order_amount'];
        }, $thisMonthOrderArray)) / ($thisMonthOrderNum == 0 ? 1 : $thisMonthOrderNum), 2);


        /**昨天和上个月*/
        $yesterdayOrderNum = count($yesterdayOrder);
        $lastMonthOrderNum = count($lastMonthOrder);

        $yesterdaySalesAmountSum = array_sum(array_map(function ($val) {
            return $val['order_amount'];
        }, $yesterdayOrderArray));
        $lastMonthSalesAmountSum = array_sum(array_map(function ($val) {
            return $val['order_amount'];
        }, $lastMonthOrderArray));

        $yesterdaySalesAmountAverage = array_sum(array_map(function ($val) {
            return $val['order_amount'];
        }, $yesterdayOrderArray)) / ($yesterdayOrderNum == 0 ? 1 : $yesterdayOrderNum);
        $lastMonthSalesAmountAverage = array_sum(array_map(function ($val) {
            return $val['order_amount'];
        }, $lastMonthOrderArray)) / ($lastMonthOrderNum == 0 ? 1 : $lastMonthOrderNum);

        /**增长率计算*/
        $dailyOrderNumRatio = round((($todayOrderNum / ($yesterdayOrderNum == 0 ? 1 : $yesterdayOrderNum)) - 1) * 100, 2) . "％";
        $dailyOrderAmountRatio = round((($todaySalesAmountSum / ($yesterdaySalesAmountSum == 0 ? 1 : $yesterdaySalesAmountSum)) - 1) * 100, 2) . "％";
        $dailySalesAmountAverageRatio = round((($todaySalesAmountAverage / ($yesterdaySalesAmountAverage == 0 ? 1 : $yesterdaySalesAmountAverage)) - 1) * 100, 2) . "％";

        $monthlyOrderNumRatio = round((($thisMonthOrderNum / ($lastMonthOrderNum == 0 ? 1 : $lastMonthOrderNum)) - 1) * 100, 2) . "％";
        $monthlyOrderAmountRatio = round((($thisMonthSalesAmountSum / ($lastMonthSalesAmountSum == 0 ? 1 : $lastMonthSalesAmountSum)) - 1) * 100, 2) . "％";
        $monthlySalesAmountAverageRatio = round((($thisMonthSalesAmountAverage / ($lastMonthSalesAmountAverage == 0 ? 1 : $lastMonthSalesAmountAverage)) - 1) * 100, 2) . "％";


        $staticLabel = array(
            "category" => "金额",
            "sales" =>  "销售额",
            "orderNum" => "订单数",
            "OrderPrice" => "客单价",
            "monthSales" => "本月销售额",
            "monthOrderNum" => "本月订单数",
            "monthCustomerOrderPrice" => "本月客单价"
        );
        $amountData = array(
            "category" => "金额",
            "sales" => $todaySalesAmountSum,
            "orderNum" => $todayOrderNum,
            "OrderPrice" => $todaySalesAmountAverage,
            "monthSales" => $thisMonthSalesAmountSum,
            "monthOrderNum" => $thisMonthOrderNum,
            "monthCustomerOrderPrice" => $thisMonthSalesAmountAverage
        );

        $rateData = array(
            "category" => "同比增长速率",
            "sales" => $dailyOrderNumRatio,
            "orderNum" => $dailyOrderAmountRatio,
            "OrderPrice" => $dailySalesAmountAverageRatio,
            "monthSales" => $monthlyOrderNumRatio,
            "monthOrderNum" => $monthlyOrderAmountRatio,
            "monthCustomerOrderPrice" => $monthlySalesAmountAverageRatio
        );

        $data = array($staticLabel, $amountData, $rateData);



        $data_json = json_encode($data);
        return $data_json;
    }

    public function indexReport(CustomerServiceDepartmentRequest $request)
    {
        //订单统计
        $ORDER_STATUS_NEW = DB::table("orders")->where('order_status', '=', 10)->get();
        $ORDER_STATUS_LOCK = DB::table("orders")->where('order_status', '=', 20)->get();
        $ORDER_STATUS_CS_AUDIT = DB::table("orders")->where('order_status', '=', 30)->get();
        $ORDER_STATUS_ONE_AUDIT = DB::table("orders")->where('order_status', '=', 40)->get();
        $ORDER_STATUS_FD_AUDIT = DB::table("orders")->where('order_status', '=', 50)->get();
        $ORDER_STATUS_CARGO_AUDIT = DB::table("orders")->where('order_status', '=', 60)->get();
        $ORDER_STATUS_READY_STOCK_OUT = DB::table("orders")->where('order_status', '=', 70)->get();
        $ORDER_STATUS_STOCK_OUT = DB::table("orders")->where('order_status', '=', 80)->get();

        $ORDER_STATUS_NEW_NUM = count($ORDER_STATUS_NEW);
        $ORDER_STATUS_LOCK_NUM = count($ORDER_STATUS_LOCK);
        $ORDER_STATUS_CS_AUDIT_NUM = count($ORDER_STATUS_CS_AUDIT);
        $ORDER_STATUS_ONE_AUDIT_NUM = count($ORDER_STATUS_ONE_AUDIT);
        $ORDER_STATUS_FD_AUDIT_NUM = count($ORDER_STATUS_FD_AUDIT);
        $ORDER_STATUS_CARGO_AUDIT_NUM = count($ORDER_STATUS_CARGO_AUDIT);
        $ORDER_STATUS_READY_STOCK_OUT_NUM = count($ORDER_STATUS_READY_STOCK_OUT);
        $ORDER_STATUS_STOCK_OUT_NUM = count($ORDER_STATUS_STOCK_OUT);

        $salesOrderNumArray = array(
            $ORDER_STATUS_NEW_NUM,
            $ORDER_STATUS_LOCK_NUM,
            $ORDER_STATUS_CS_AUDIT_NUM,
            $ORDER_STATUS_ONE_AUDIT_NUM,
            $ORDER_STATUS_FD_AUDIT_NUM,
            $ORDER_STATUS_CARGO_AUDIT_NUM,
            $ORDER_STATUS_READY_STOCK_OUT_NUM,
            $ORDER_STATUS_STOCK_OUT_NUM
        );

        $CHANGE_STATUS_NEW = DB::table("change_orders")->where('change_status', '=', 10)->get();
        $CHANGE_STATUS_SUBMIT = DB::table("change_orders")->where('change_status', '=', 20)->get();
        $CHANGE_STATUS_AUDIT = DB::table("change_orders")->where('change_status', '=', 30)->get();
        $CHANGE_STATUS_CANCEL = DB::table("change_orders")->where('change_status', '=', 40)->get();

        $CHANGE_STATUS_NEW_NUM = count($CHANGE_STATUS_NEW);
        $CHANGE_STATUS_SUBMIT_NUM = count($CHANGE_STATUS_SUBMIT);
        $CHANGE_STATUS_AUDIT_NUM = count($CHANGE_STATUS_AUDIT);
        $CHANGE_STATUS_CANCEL_NUM = count($CHANGE_STATUS_CANCEL);

        $changeOrderNumArray = array($CHANGE_STATUS_NEW_NUM, $CHANGE_STATUS_SUBMIT_NUM, $CHANGE_STATUS_AUDIT_NUM, $CHANGE_STATUS_CANCEL_NUM);

        $REFUND_STATUS_NEW = DB::table("refund_orders")->where('refund_order_status', '=', 10)->get();
        $REFUND_STATUS_LOCK = DB::table("refund_orders")->where('refund_order_status', '=', 15)->get();
        $REFUND_STATUS_CS_AUDIT = DB::table("refund_orders")->where('refund_order_status', '=', 30)->get();
        $REFUND_STATUS_AS_LOCK = DB::table("refund_orders")->where('refund_order_status', '=', 35)->get();
        $REFUND_STATUS_AS_AUDIT = DB::table("refund_orders")->where('refund_order_status', '=', 40)->get();
        $REFUND_STATUS_FD_LOCK = DB::table("refund_orders")->where('refund_order_status', '=', 45)->get();
        $REFUND_STATUS_FD_AUDIT = DB::table("refund_orders")->where('refund_order_status', '=', 50)->get();

        $REFUND_STATUS_NEW_NUM = count($REFUND_STATUS_NEW);
        $REFUND_STATUS_LOCK_NUM = count($REFUND_STATUS_LOCK);
        $REFUND_STATUS_CS_AUDIT_NUM = count($REFUND_STATUS_CS_AUDIT);
        $REFUND_STATUS_AS_LOCK_NUM = count($REFUND_STATUS_AS_LOCK);
        $REFUND_STATUS_AS_AUDIT_NUM = count($REFUND_STATUS_AS_AUDIT);
        $REFUND_STATUS_FD_LOCK_NUM = count($REFUND_STATUS_FD_LOCK);
        $REFUND_STATUS_FD_AUDIT_NUM = count($REFUND_STATUS_FD_AUDIT);

        $refundOrderNumArray = array($REFUND_STATUS_NEW_NUM, $REFUND_STATUS_LOCK_NUM, $REFUND_STATUS_CS_AUDIT_NUM, $REFUND_STATUS_AS_LOCK_NUM, $REFUND_STATUS_AS_AUDIT_NUM, $REFUND_STATUS_FD_LOCK_NUM, $REFUND_STATUS_FD_AUDIT_NUM);
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
