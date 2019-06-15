<?php

namespace App\Models;
use Dingo\Api\Exception\UpdateResourceFailedException;
use Illuminate\Support\Facades\Auth;

class ResupplieOrder extends Model
{
    protected $table = 're_supplie_orders';

    //提交状态
    const RESUPPLIE_UNSUBMITED = 0;
    const RESUPPLIE_SUBMITED = 1;

    //审核状态
    const RESUPPLIE_UNREVIEW = 0;
    const RESUPPLIE_REVIEW = 1;

    //结算状态
    const RESUPPLIE_UNSETTLE = 0;
    const RESUPPLIE_SETTLE = 1;

    //包件类别
    const RESUPPLIE_BIG_PACKAGE = 1;
    const RESUPPLIE_PART_PACKAGE = 2;
    const RESUPPLIE_MONEY_PACKAGE = 3;

    //打印状态
    const RESUPPLIE_UNPRINT = 0;
    const RESUPPLIE_PRINT = 1;

    //发货状态
    const RESUPPLIE_UNCONSIGN = 0;
    const RESUPPLIE_CONSIGN = 1;

    //作废状态
    const RESUPPLIE_VALID = 0;
    const RESUPPLIE_INVALID = 1;

    protected $fillable = [
        'resupply_order_no', 'orders_id', 'system_order_no', 'package_types_id',
        're_supplie_categories_id', 'resupply_cost', 'resupply_money',
        'resupply_reason', 'resupply_remark', 're_supplie_responsibles_id',
        'salesman', 'shop_nick', 'member_nick', 'shop_group', 'member_name',
        'member_phone', 'suppliers_id', 'logistics_id', 'express_no',
        'distribution_methods_id', 'freight_types_id', 'estimated_fee',
        'compensate_fee', 'wooden_frame_fee', 'load_fee', 'promise_time',
        'refund_methods_id', 'refund_account', 'bank', 'receiver_state', 'receiver_city', 'receiver_district',
        'address', 'mark_name', 'marker', 'mark_time', 'creator',
        'submitter', 'reviewer', 'consigner', 'consign_warehouse', 'consign_remark',
        'created_at', 'submit_time', 'review_time', 'settle_time', 'system_consign_time',
        'print_time', 'real_consign_time', 'is_submit', 'is_review', 'is_settle',
        'is_print', 'is_consign', 'is_invalid', 'square_number', 'number',
        'application_mark_name', 'review_mark_name', 'real_consign_time_1',
        'warehousing_status', 'is_purchase', 'updated_at', 'status', 'remark',
    ];

    protected $dates = [
        'promise_time',
        'mark_time',
        'submit_time',
        'review_time',
        'settle_time',
        'print_time',
        'system_consign_time',
        'real_consign_time',
        'real_consign_time_1',
    ];

    //设置类型
    protected $casts = [
        'is_submit' => 'boolean',
        'is_review' => 'boolean',
        'is_settle' => 'boolean',
        'is_print' => 'boolean',
        'is_consign' => 'boolean',
        'is_invalid' => 'boolean',
        'is_purchase' => 'boolean',
        'status' => 'boolean',
    ];

    protected static function boot()
    {
        parent::boot();
        // 监听模型创建事件，在写入数据库之前触发
        static::creating(function ($model) {
            // 如果模型的 no 字段为空
            if (!$model->resupply_order_no) {
                // 调用 findAvailableNo 生成订单流水号
                $model->resupply_order_no = static::findAvailableNo('BJ', 'system_order_no');
                // 如果生成失败，则终止创建订单
                if (!$model->resupply_order_no) {
                    return false;
                }
            }
        });
    }

    //随机生成补件单号
    public static function findAvailableNo(String $prefix, String $index): String
    {
        do {
            // 随机生成订单号
            $no = $prefix.date('YmdHis').str_pad(mt_rand(1, 99999), 5, 0, STR_PAD_LEFT);
        } while (static::query()->where($index, $no)->exists());

        return $no;
    }

    //提交，点击后在补件审核后可见
    public function submit()
    {
        $this->is_submit = self::RESUPPLIE_SUBMITED;
        $this->save();

        $userId = Auth::guard('api')->id();
        $userName = User::find($userId)->real_name;
        $operationData = new ResupplieOperationRecord;
        $operationData->re_supplie_orders_id = $this->id;
        $operationData->user_id = Auth::guard('api')->id();
        $operationData->user_name = $userName;
        $operationData->operation = "提交";
        $operationData->description = "提交";
        $operationData->save();
    }

    //驳回，点击后需重新提交
    public function reject()
    {
        $this->is_submit = self::RESUPPLIE_UNSUBMITED;
        $this->save();

        $userId = Auth::guard('api')->id();
        $userName = User::find($userId)->real_name;
        $operationData = new ResupplieOperationRecord;
        $operationData->re_supplie_orders_id = $this->id;
        $operationData->user_id = Auth::guard('api')->id();
        $operationData->user_name = $userName;
        $operationData->operation = "驳回";
        $operationData->description = "驳回";
        $operationData->save();
    }

    //审核，点击后在补件发货可见，可结算
    public function audit()
    {
        $this->is_review = self::RESUPPLIE_REVIEW;
        $this->save();

        $userId = Auth::guard('api')->id();
        $userName = User::find($userId)->real_name;
        $operationData = new ResupplieOperationRecord;
        $operationData->re_supplie_orders_id = $this->id;
        $operationData->user_id = Auth::guard('api')->id();
        $operationData->user_name = $userName;
        $operationData->operation = "审核";
        $operationData->description = "审核";
        $operationData->save();
    }

    //退审，退审后需重新审核
    public function auditfaild()
    {
        $this->is_review = self::RESUPPLIE_UNREVIEW;
        $this->is_print = self::RESUPPLIE_UNPRINT;
        $this->save();

        $userId = Auth::guard('api')->id();
        $userName = User::find($userId)->real_name;
        $operationData = new ResupplieOperationRecord;
        $operationData->re_supplie_orders_id = $this->id;
        $operationData->user_id = Auth::guard('api')->id();
        $operationData->user_name = $userName;
        $operationData->operation = "退审";
        $operationData->description = "退审";
        $operationData->save();
    }

    //结算
    public function settle()
    {
        $this->is_settle = self::RESUPPLIE_SETTLE;
        $this->save();

        $userId = Auth::guard('api')->id();
        $userName = User::find($userId)->real_name;
        $operationData = new ResupplieOperationRecord;
        $operationData->re_supplie_orders_id = $this->id;
        $operationData->user_id = Auth::guard('api')->id();
        $operationData->user_name = $userName;
        $operationData->operation = "结算";
        $operationData->description = "结算";
        $operationData->save();
    }

    //返回客审
    public function examination()
    {
        $this->is_submit = self::RESUPPLIE_UNSUBMITED;
        $this->is_review = self::RESUPPLIE_UNREVIEW;
        $this->save();

        $userId = Auth::guard('api')->id();
        $userName = User::find($userId)->real_name;
        $operationData = new ResupplieOperationRecord;
        $operationData->re_supplie_orders_id = $this->id;
        $operationData->user_id = Auth::guard('api')->id();
        $operationData->user_name = $userName;
        $operationData->operation = "返回客审";
        $operationData->description = "返回客审";
        $operationData->save();
    }

    //打印，打印后可发货
    public function print()
    {
        $this->is_print = self::RESUPPLIE_PRINT;
        $this->save();

        $userId = Auth::guard('api')->id();
        $userName = User::find($userId)->real_name;
        $operationData = new ResupplieOperationRecord;
        $operationData->re_supplie_orders_id = $this->id;
        $operationData->user_id = Auth::guard('api')->id();
        $operationData->user_name = $userName;
        $operationData->operation = "打印";
        $operationData->description = "打印后可发货";
        $operationData->save();
    }

    //发货
    public function consign()
    {
        $this->is_consign = self::RESUPPLIE_CONSIGN;
        $this->save();

        $userId = Auth::guard('api')->id();
        $userName = User::find($userId)->real_name;
        $operationData = new ResupplieOperationRecord;
        $operationData->re_supplie_orders_id = $this->id;
        $operationData->user_id = Auth::guard('api')->id();
        $operationData->user_name = $userName;
        $operationData->operation = "发货";
        $operationData->description = "发货";
        $operationData->save();
    }

    //作废
    public function invalid()
    {
        $this->is_invalid = self::RESUPPLIE_INVALID;
        $this->save();

        $userId = Auth::guard('api')->id();
        $userName = User::find($userId)->real_name;
        $operationData = new ResupplieOperationRecord;
        $operationData->re_supplie_orders_id = $this->id;
        $operationData->user_id = Auth::guard('api')->id();
        $operationData->user_name = $userName;
        $operationData->operation = "作废";
        $operationData->description = "作废";
        $operationData->save();
    }

    public function order()
    {
        return $this->belongsTo(Order::class, 'orders_id');
    }

    public function packageType()
    {
        return $this->belongsTo(PackageType::class, 'package_types_id');
    }

    public function resupplieCategory()
    {
        return $this->belongsTo(ResupplieCategory::class, 're_supplie_categories_id');
    }

    public function resupplieResponsible()
    {
        return $this->belongsTo(ResupplieResponsible::class, 're_supplie_responsibles_id');
    }

    public function freightType()
    {
        return $this->belongsTo(FreightType::class, 'freight_types_id');
    }

    public function supplier()
    {
        return $this->belongsTo(Supplier::class, 'suppliers_id');
    }

    public function logistic()
    {
        return $this->belongsTo(Logistics::class, 'logistics_id');
    }

    public function distributionMethod()
    {
        return $this->belongsTo(DistributionMethod::class, 'distribution_methods_id');
    }

    public function refundMethod()
    {
        return $this->belongsTo(RefundMethod::class, 'refund_methods_id');
    }

    public function resupplieOrderItem()
    {
        return $this->hasMany(ResupplieOrderItem::class, 're_supplie_orders_id');
    }

    public function resupplieProblemProduct()
    {
        return $this->hasMany(ResupplieProblemProduct::class, 're_supplie_orders_id');
    }

    public function resupplieImage()
    {
        return $this->hasMany(ResupplieImage::class, 're_supplie_orders_id');
    }

    public function resupplieRejectReason()
    {
        return $this->hasMany(ResupplieRejectReason::class, 're_supplie_orders_id');
    }

    public function resupplieOperationRecord()
    {
        return $this->hasMany(ResupplieOperationRecord::class, 're_supplie_orders_id');
    }

    public function resupplieProgress()
    {
        return $this->hasMany(ResupplieProgress::class, 're_supplie_orders_id');
    }

    public function resuppliePurchase()
    {
        return $this->hasMany(ResuppliePurchase::class, 're_supplie_orders_id');
    }

    public function resupplieEsheet()
    {
        return $this->hasMany(ResupplieEsheet::class, 're_supplie_orders_id');
    }

    public function resupplieInnerNote()
    {
        return $this->hasMany(ResupplieInnerNote::class, 're_supplie_orders_id');
    }
}
