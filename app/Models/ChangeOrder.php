<?php

namespace App\Models;

use Illuminate\Support\Facades\DB;
use Dingo\Api\Exception\UpdateResourceFailedException;
use Illuminate\Support\Facades\Auth;

class ChangeOrder extends Model
{
    protected $table = 'change_orders';

    const CHANGE_STATUS_NEW = 10;
    const CHANGE_STATUS_SUBMIT = 20;
    const CHANGE_STATUS_AUDIT = 30;
    const CHANGE_STATUS_CANCEL = 40;


    //订单状态
    public static $orderStatusMap = [
        self::CHANGE_STATUS_NEW => '新建订单变更',
        self::CHANGE_STATUS_SUBMIT => '已提交订单变更',
        self::CHANGE_STATUS_AUDIT => '已审核订单变更',
        self::CHANGE_STATUS_CANCEL => '已作废',
    ];

    //订单操作
    public static $orderOperationMap = [
        self::CHANGE_STATUS_NEW => '新建',
        self::CHANGE_STATUS_SUBMIT => '提交',
        self::CHANGE_STATUS_AUDIT => '审核',
        self::CHANGE_STATUS_CANCEL => '作废',
    ];

    //订单操作详情
    public static $orderOperationDescriptionMap = [
        self::CHANGE_STATUS_NEW => '新建变更订单',
        self::CHANGE_STATUS_SUBMIT => '提交变更订单',
        self::CHANGE_STATUS_AUDIT => '审核变更订单',
        self::CHANGE_STATUS_CANCEL => '作废',
    ];

    protected $fillable = [
        'change_order_no',
        'cancel_order_no',
        'is_canceled',
        'ch_applier_id',
        'ch_applied_at',
        'ch_submitter_id',
        'ch_submitted_at',
        'ch_auditor_id',
        'ch_audited_at',
        'change_remark',
        'change_status',
        'orders_id',
        //-------变更订单与原始order分界线----------
        'system_order_no',
        'order_status',
        'order_source',
        'order_amount',
        'shops_id',
        'shop_name',
        'logistics_id',
        'logistics_sn', 
        'billing_way', 
        'promise_ship_time',
        'freight_types_id', 
        'expected_freight', 
        'actual_freight',
        'logistics_remark',
        'is_logistics_checked',
        'logistics_check_remark',
        'logistics_checked_at',
        'distributions_id',
        'distribution_methods_id',
        'deliver_goods_fee',
        'move_upstairs_fee',
        'installation_fee',
        'total_distribution_fee',
        'distribution_phone',
        'distribution_no',
        'distribution_types_id',
        'is_distribution_checked',
        'distribution_check_remark',
        'distribution_checked_at',
        'service_car_fee',
        'service_car_info',
        'take_delivery_goods_fee',
        'take_delivery_goods_ways_id',
        'express_fee',
        'cancel_after_verification_code',
        'wooden_frame_costs',
        'preferential_cashback',
        'favorable_cashback',
        'customer_types_id',
        'is_invoice',
        'invoice_express_fee',
        'express_invoice_title',
        'contract_no',
        'payment_methods_id',
        'deposit',
        'document_title',
        'warehouses_id',
        'payment_date',
        'interest_concessions',
        'is_notice',
        'is_cancel_after_verification',
        'accept_order_user',
        'tax_number',
        'receipt',
        'buyer_message',
        'seller_remark',
        'customer_service_remark',
        'stockout_remark', 
        'taobao_oid',
        'taobao_tid',
        'member_nick',
        'seller_name',
        'seller_flag',
        'created',
        'est_con_time',
        'receiver_name',
        'receiver_phone',
        'receiver_mobile',
        'receiver_state',
        'receiver_city',
        'receiver_district',
        'receiver_address',
        'receiver_zip',
        'refund_info',
        'business_personnel_id',
        'locker_id',
        'locked_at', 
        'auditor_id', 
        'audit_at',
        'cs_auditor_id',
        'cs_audited_at',
        'fd_auditor_id',
        'fd_audited_at',
        'ca_auditor_id', 
        'ca_audited_at', 
        'stockout_op_id', 
        'stockout_at',
        'association_taobao_oid',
        'is_merge',
        'is_split',
        'is_association',
        'status',
        'created_at',
        'updated_at',
    ];

    protected $dates = [
        'submitted_at',
        'created_at',
        'updated_at',
        'created',
        'audit_at',
        'locked_at',
        'cs_audited_at',
        'fd_audited_at',
        'ca_audited_at',
        'est_con_time',
        'payment_date',
        'promise_ship_time'
    ];

    //设置类型
    protected $casts = [
        'is_invoice' => 'boolean',
        'is_notice' => 'boolean',
        'is_cancel_after_verification' => 'boolean',
        'is_merge' => 'boolean',
        'is_split' => 'boolean',
        'is_association' => 'boolean',
        'business_personnel_id' => 'integer',
        'locker_id' => 'integer'
    ];

    //观察者
    protected static function boot()
    {
        parent::boot(); // TODO: Change the autogenerated stub

        // 监听模型创建事件，在写入数据库之前触发
        static::creating(function ($model) {
            // 如果模型的 no 字段为空
            if (!$model->change_order_no) {
                // 调用 findAvailableNo 生成订单流水号
                $model->change_order_no = static::findAvailableNo('AT', 'change_order_no');
                // 如果生成失败，则终止创建订单
                if (!$model->change_order_no) {
                    return false;
                }
            }

            // 如果模型的 ch_applier_id 字段为空
            if (!$model->ch_applier_id) {
                    $model->ch_applier_id = Auth::guard('api')->id();
                    // 如果生成失败，则终止创建订单
                if (!$model->ch_applier_id) {
                    return false;
                }
            }

            // 如果模型的 ch_applied_at 字段为空
            if (!$model->ch_applied_at) {
                $model->ch_applied_at = date("Y-m-d h:i:s");
                // 如果生成失败，则终止创建订单
                if (!$model->ch_applied_at) {
                    return false;
                }
            }
        });
    }

    public function getOrderStatusAttribute($value)
    {
        return self::$orderStatusMap[$value] ?? $value;
    }

    /**
     * 生成订单流水号
     *
     * @param $prefix       订单流水号前缀
     * @param $index        字段名
     * @return string
     */
    public static function findAvailableNo(String $prefix, String $index) :String
    {
        do {
            // 随机生成订单号
            $no = $prefix . date('YmdHis') . str_pad(mt_rand(1, 99999), 5, 0, STR_PAD_LEFT);
        } while (static::query()->where($index, $no)->exists());

        return $no;
    }

    /**
     * 提交
     * @return bool
     */
    public function submit()
    {
        $this->ch_submitter_id = Auth::guard('api')->id();
        $this->ch_submitted_at = date("Y-m-d h:i:s");
        $this->change_status = self::CHANGE_STATUS_SUBMIT;
        $this->save();
    }

    /**
     * 审核变更
     *
     * @return bool
     */
     public function auditChanges()
     {
         $this->change_status = self::CHANGE_STATUS_AUDIT;
         $this->ch_auditor_id = Auth::guard('api')->id();
         $this->ch_audited_at = date("Y-m-d h:i:s");
         $this->save();
     }

    /**
     * 审核
     * @return bool
     */
    public function audit()
    {
        $this->locker_id = 0;
        $this->change_status = self::CHANGE_STATUS_SUBMIT;
        $this->submitted_at = date("Y-m-d h:i:s");
        $this->save();
    }

    /**
     * 退审
     * @return bool
     */
    public function unAudit()
    {
        $this->business_personnel_id = 0;
        $this->locker_id = 0;
        $this->change_status = self::CHANGE_STATUS_NEW;
        $this->submitted_at = null;
        $this->save();
    }

    public function shop()
    {
        return $this->belongsTo(Shop::class, 'shops_id');
    }

    public function logistic()
    {
        return $this->belongsTo(Logistics::class, 'logistics_id');
    }

    public function freightType()
    {
        return $this->belongsTo(FreightType::class, 'freight_types_id');
    }

    public function distribution()
    {
        return $this->belongsTo(Distribution::class, 'distributions_id');
    }

    public function distributionMethod()
    {
        return $this->belongsTo(DistributionMethod::class, 'distribution_methods_id');
    }

    public function distributionType()
    {
        return $this->belongsTo(DistributionType::class, 'distribution_types_id');
    }

    public function takeDeliveryGoodsWay()
    {
        return $this->belongsTo(TakeDeliveryGoodsWay::class, 'take_delivery_goods_ways_id');
    }

    public function customerType()
    {
        return $this->belongsTo(CustomerType::class, 'customer_types_id');
    }

    public function paymentMethod()
    {
        return $this->belongsTo(PaymentMethod::class, 'payment_methods_id');
    }

    public function warehouses()
    {
        return $this->belongsTo(Warehouse::class, 'warehouses_id');
    }

    public function orderItems()
    {
        return $this->hasMany(OrderItem::class, 'change_orders_id');
    }

    public function businessPersonnel()
    {
        return $this->belongsTo(User::class, 'business_personnel_id');
    }

    public function applier()
    {
        return $this->belongsTo(User::class, 'applier_id');
    }

    public function locker()
    {
        return $this->belongsTo(User::class, 'locker_id');
    }

    public function paymentDetails()
    {
        return $this->hasMany(PaymentDetail::class, 'change_orders_id');
    }
}
