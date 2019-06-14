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


        $beijingOrderNum = count(DB::table("orders")->where('receiver_state', 'like', '%'.'北京市'.'%')->get());
        $shanghaiOrderNum = count(DB::table("orders")->where('receiver_state', 'like', '%'.'上海市'.'%')->get());
        $chongqingNum = count(DB::table("orders")->where('receiver_state', 'like', '%'.'重庆市'.'%')->get());
        $tianjinOrderNum = count(DB::table("orders")->where('receiver_state', 'like', '%'.'天津市'.'%')->get());
        $shandongOrderNum = count(DB::table("orders")->where('receiver_state', 'like', '%'.'山东省'.'%')->get());
        $jiangsuOrderNum = count(DB::table("orders")->where('receiver_state', 'like', '%'.'江苏省'.'%')->get());
        $zhejiangOrderNum = count(DB::table("orders")->where('receiver_state', 'like', '%'.'浙江省'.'%')->get());
        $anhuiOrderNum = count(DB::table("orders")->where('receiver_state', 'like', '%'.'安徽省'.'%')->get());
        $fujianOrderNum = count(DB::table("orders")->where('receiver_state', 'like', '%'.'福建省'.'%')->get());
        $jiangxiOrderNum = count(DB::table("orders")->where('receiver_state', 'like', '%'.'江西省'.'%')->get());
        $guangdongOrderNum = count(DB::table("orders")->where('receiver_state', 'like', '%'.'广东省'.'%')->get());
        $guangxiOrderNum = count(DB::table("orders")->where('receiver_state', 'like', '%'.'广西省'.'%')->get());
        $hainanOrderNum = count(DB::table("orders")->where('receiver_state', 'like', '%'.'海南省'.'%')->get());
        $henanOrderNum = count(DB::table("orders")->where('receiver_state', 'like', '%'.'河南省'.'%')->get());
        $hunanOrderNum = count(DB::table("orders")->where('receiver_state', 'like', '%'.'湖南省'.'%')->get());
        $hubeiOrderNum = count(DB::table("orders")->where('receiver_state', 'like', '%'.'湖北省'.'%')->get());
        $hebeiOrderNum = count(DB::table("orders")->where('receiver_state', 'like', '%'.'河北省'.'%')->get());
        $shan1xiOrderNum = count(DB::table("orders")->where('receiver_state', 'like', '%'.'山西省'.'%')->get());
        $neimengguOrderNum = count(DB::table("orders")->where('receiver_state', 'like', '%'.'内蒙古'.'%')->get());
        $ningxiaOrderNum = count(DB::table("orders")->where('receiver_state', 'like', '%'.'宁夏'.'%')->get());
        $qinghaiOrderNum = count(DB::table("orders")->where('receiver_state', 'like', '%'.'青海'.'%')->get());
        $shan3xiOrderNum = count(DB::table("orders")->where('receiver_state', 'like', '%'.'陕西省'.'%')->get());
        $gansuOrderNum = count(DB::table("orders")->where('receiver_state', 'like', '%'.'甘肃省'.'%')->get());
        $xinjiangOrderNum = count(DB::table("orders")->where('receiver_state', 'like', '%'.'新疆'.'%')->get());
        $sichuanOrderNum = count(DB::table("orders")->where('receiver_state', 'like', '%'.'四川省'.'%')->get());
        $guizhouOrderNum = count(DB::table("orders")->where('receiver_state', 'like', '%'.'贵州'.'%')->get());
        $yunnanOrderNum = count(DB::table("orders")->where('receiver_state', 'like', '%'.'云南省'.'%')->get());
        $xizangOrderNum = count(DB::table("orders")->where('receiver_state', 'like', '%'.'西藏'.'%')->get());
        $liaoningOrderNum = count(DB::table("orders")->where('receiver_state', 'like', '%'.'辽宁省'.'%')->get());
        $jilinOrderNum = count(DB::table("orders")->where('receiver_state', 'like', '%'.'吉林省'.'%')->get());
        $heilongjiangOrderNum = count(DB::table("orders")->where('receiver_state', 'like', '%'.'黑龙江省'.'%')->get());

        $provinceSales = array($beijingOrderNum,$shanghaiOrderNum,$chongqingNum,$tianjinOrderNum,$shandongOrderNum,
                               $jiangsuOrderNum,$zhejiangOrderNum,$anhuiOrderNum,$fujianOrderNum,$jiangxiOrderNum,
                               $guangdongOrderNum,$guangxiOrderNum,$hainanOrderNum,$henanOrderNum,$hunanOrderNum,
                               $hubeiOrderNum,$hebeiOrderNum,$shan1xiOrderNum,$neimengguOrderNum,$ningxiaOrderNum,
                               $qinghaiOrderNum,$shan3xiOrderNum,$gansuOrderNum,$xinjiangOrderNum,$sichuanOrderNum,
                               $guizhouOrderNum,$yunnanOrderNum,$xizangOrderNum,$liaoningOrderNum,$jilinOrderNum,
                               $heilongjiangOrderNum);

        $salesdata = array($staticLabel, $amountData, $rateData);
        $data = array($salesdata,$provinceSales);

        $data_json = json_encode($data);
        return $data;
    }

    public function indexReport(CustomerServiceDepartmentRequest $request)
    {
        //订单统计
        $ORDER_STATUS_NEW = DB::table("orders")->where('order_status', '=', 10)->get();
        $ORDER_STATUS_LOCK = DB::table("orders")->where('order_status', '=', 20)->get();//待客审
        $ORDER_STATUS_CS_AUDIT = DB::table("orders")->where('order_status', '=', 30)->get();
        $ORDER_STATUS_ONE_AUDIT = DB::table("orders")->where('order_status', '=', 40)->get();//待财审
        $ORDER_STATUS_FD_AUDIT = DB::table("orders")->where('order_status', '=', 50)->get();//待货审
        $ORDER_STATUS_CARGO_AUDIT = DB::table("orders")->where('order_status', '=', 60)->get();//未打单
        $ORDER_STATUS_READY_STOCK_OUT = DB::table("orders")->where('order_status', '=', 70)->get();//待发货
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

        $CHANGE_STATUS_NEW_NUM = count($CHANGE_STATUS_NEW);//未提交
        $CHANGE_STATUS_SUBMIT_NUM = count($CHANGE_STATUS_SUBMIT);//未审核
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

        $REFUND_STATUS_NEW_NUM = count($REFUND_STATUS_NEW);//未客审
        $REFUND_STATUS_LOCK_NUM = count($REFUND_STATUS_LOCK);//未客审
        $REFUND_STATUS_CS_AUDIT_NUM = count($REFUND_STATUS_CS_AUDIT);//未售后审
        $REFUND_STATUS_AS_LOCK_NUM = count($REFUND_STATUS_AS_LOCK);//未财审
        $REFUND_STATUS_AS_AUDIT_NUM = count($REFUND_STATUS_AS_AUDIT);//未财审
        $REFUND_STATUS_FD_LOCK_NUM = count($REFUND_STATUS_FD_LOCK);
        $REFUND_STATUS_FD_AUDIT_NUM = count($REFUND_STATUS_FD_AUDIT);

        $refundOrderNumArray = array($REFUND_STATUS_NEW_NUM, $REFUND_STATUS_LOCK_NUM, $REFUND_STATUS_CS_AUDIT_NUM, $REFUND_STATUS_AS_LOCK_NUM, $REFUND_STATUS_AS_AUDIT_NUM, $REFUND_STATUS_FD_LOCK_NUM, $REFUND_STATUS_FD_AUDIT_NUM);


        //采购
        $PURCHASE_STATUS_NEW = DB::table("purchases")->where('purchase_status', '=', 'new')->get();
        $PURCHASE_STATUS_SECTION = DB::table("purchases")->where('purchase_status', '=', 'section')->get();
        $PURCHASE_STATUS_FINISH = DB::table("purchases")->where('purchase_status', '=', 'finish')->get();

        $PURCHASE_STATUS_NEW_NUM = count($PURCHASE_STATUS_NEW);
        $PURCHASE_STATUS_SECTION_NUM = count($PURCHASE_STATUS_SECTION);
        $PURCHASE_STATUS_FINISH_NUM = count($PURCHASE_STATUS_FINISH);

        $purchaseOrderNumArray = array($PURCHASE_STATUS_NEW_NUM,$PURCHASE_STATUS_SECTION_NUM,$PURCHASE_STATUS_FINISH_NUM);

        //取消采购
        $CANCEL_PURCHASE_NEW = DB::table("cancel_purchases")->where('is_submit', '=', 0)->get();
        $CANCEL_PURCHASE_SUBMIT = DB::table("cancel_purchases")->where('is_submit', '=', 0)->get();

        $CANCEL_PURCHASE_NEW_NUM = count($CANCEL_PURCHASE_NEW);//新建取消采购
        $CANCEL_PURCHASE_SUBMIT_NUM = count($CANCEL_PURCHASE_SUBMIT);//已提交取消采购

        $cancelPurchaseOrderNum = array($CANCEL_PURCHASE_NEW_NUM,$CANCEL_PURCHASE_SUBMIT_NUM);

        //入库订单
        $STOCKIN_STATUS_NEW = DB::table("stock_ins")->where('stock_in_status', '=', 10)->get();
        $STOCKIN_STATUS_SUBMIT = DB::table("stock_ins")->where('stock_in_status', '=', 20)->get();
        $STOCKIN_STATUS_STOCKIN = DB::table("stock_ins")->where('stock_in_status', '=', 30)->get();

        $STOCKIN_STATUS_NEW_NUM = count($STOCKIN_STATUS_NEW);//新建
        $STOCKIN_STATUS_SUBMIT_NUM = count($STOCKIN_STATUS_SUBMIT);//已提交
        $STOCKIN_STATUS_STOCKIN_NUM = count($STOCKIN_STATUS_STOCKIN);//已入库

        $stockInOrderNum = array($STOCKIN_STATUS_NEW_NUM,$STOCKIN_STATUS_SUBMIT_NUM,$STOCKIN_STATUS_STOCKIN_NUM);

        //补件订单统计
        $RESUPPLIE_UNSUBMITED = DB::table("re_supplie_orders")->where('is_submit', '=', 0)->get();//未提交
        $RESUPPLIE_UNREVIEW = DB::table("re_supplie_orders")->where('is_review', '=', 0)->get();//未审核
        $RESUPPLIE_UNSETTLE = DB::table("re_supplie_orders")->where('is_settle', '=', 0)->get();//未结算

        $RESUPPLIE_UNSUBMITED_NUM = count($RESUPPLIE_UNSUBMITED);
        $RESUPPLIE_UNREVIEW_NUM = count($RESUPPLIE_UNREVIEW);
        $RESUPPLIE_UNSETTLE_NUM = count($RESUPPLIE_UNSETTLE);

        $reSupplieOrderNum = array($RESUPPLIE_UNSUBMITED_NUM,$RESUPPLIE_UNREVIEW_NUM,$RESUPPLIE_UNSETTLE_NUM);

        //售后订单
        $AFTERSALE_STATUS_NEW = DB::table("after_sale")->where('order_status', '=', 10)->get();
        $AFTERSALE_STATUS_SUBMIT = DB::table("after_sale")->where('order_status', '=', 20)->get();
        $AFTERSALE_STATUS_LOCK = DB::table("after_sale")->where('order_status', '=', 25)->get();
        $AFTERSALE_STATUS_ONE_AUDIT = DB::table("after_sale")->where('order_status', '=', 30)->get();
        $AFTERSALE_STATUS_TWO_AUDIT = DB::table("after_sale")->where('order_status', '=', 40)->get();
        $AFTERSALE_STATUS_FINISH = DB::table("after_sale")->where('order_status', '=', 50)->get();

        $AFTERSALE_STATUS_NEW_NUM = count($AFTERSALE_STATUS_NEW);//待客审
        $AFTERSALE_STATUS_SUBMIT_NUM = count($AFTERSALE_STATUS_SUBMIT);//待售后提交
        $AFTERSALE_STATUS_LOCK_NUM = count($AFTERSALE_STATUS_LOCK);//待售后提交
        $AFTERSALE_STATUS_ONE_AUDIT_NUM = count($AFTERSALE_STATUS_ONE_AUDIT);//待售后审核
        $AFTERSALE_STATUS_TWO_AUDIT_NUM = count($AFTERSALE_STATUS_TWO_AUDIT);
        $AFTERSALE_STATUS_FINISH_NUM = count($AFTERSALE_STATUS_FINISH);

        $aftersaleOrderNum = array($AFTERSALE_STATUS_NEW_NUM,$AFTERSALE_STATUS_SUBMIT_NUM,$AFTERSALE_STATUS_LOCK_NUM,$AFTERSALE_STATUS_ONE_AUDIT_NUM,$AFTERSALE_STATUS_TWO_AUDIT_NUM,$AFTERSALE_STATUS_FINISH_NUM);

        //售后赔偿
        $CMPTN_STATUS_NEW = DB::table("cmptn_orders")->where('cmptn_status', '=', 10)->get();
        $CMPTN_STATUS_ONE_AUDIT = DB::table("cmptn_orders")->where('cmptn_status', '=', 20)->get();
        $CMPTN_STATUS_SEC_AUDIT = DB::table("cmptn_orders")->where('cmptn_status', '=', 30)->get();
        $CMPTN_STATUS_CANCEL = DB::table("cmptn_orders")->where('cmptn_status', '=', 50)->get();

        $CMPTN_STATUS_NEW_NUM = count($CMPTN_STATUS_NEW);//未售后提交
        $CMPTN_STATUS_ONE_AUDIT_NUM = count($CMPTN_STATUS_ONE_AUDIT);//未售后审核
        $CMPTN_STATUS_SEC_AUDIT_NUM = count($CMPTN_STATUS_SEC_AUDIT);
        $CMPTN_STATUS_CANCEL_NUM = count($CMPTN_STATUS_CANCEL);

        $cmptnOrderNum = array($CMPTN_STATUS_NEW_NUM,$CMPTN_STATUS_ONE_AUDIT_NUM,$CMPTN_STATUS_SEC_AUDIT_NUM,$CMPTN_STATUS_CANCEL_NUM);


        $reportData = array($salesOrderNumArray,$changeOrderNumArray,$refundOrderNumArray,$purchaseOrderNumArray,$cancelPurchaseOrderNum,$stockInOrderNum,$reSupplieOrderNum,$aftersaleOrderNum,$cmptnOrderNum);
        return $reportData;
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
