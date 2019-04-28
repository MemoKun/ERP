<?php

namespace App\Models;

class ResupplieOrder extends Model
{
    protected $table = 're_supplie_orders';

    //提交状态
    const RESUPPLIE_UNSUBMITED = 0;
    const RESUPPLIE_SUBMITED = 1;

    protected $fillable = [
        'resupply_order_no', 'system_order_no', 'package_types_id',
        're_supplie_categories_id', 'resupply_cost', 'resupply_money',
        'resupply_reason', 'resupply_remark', 're_supplie_responsibles_id',
        'salesman', 'shop_nick', 'member_nick', 'shop_group', 'member_name',
        'member_phone', 'suppliers_id', 'logistics_id', 'express_no',
        'distribution_methods_id', 'freight_types_id', 'estimated_fee',
        'compensate_fee', 'wooden_frame_fee', 'load_fee', 'promise_time',
        'refund_methods_id', 'refund_account', 'bank', 'mark_name', 'marker', 'mark_time', 'creator',
        'submitter', 'reviewer', 'consigner', 'consign_warehouse', 'consign_remark',
        'created_at', 'submit_time', 'review_time', 'settle_time', 'system_consign_time',
        'real_consign_time', 'is_submit', 'is_review', 'is_settle',
        'is_consign', 'is_invalid', 'square_number', 'number',
        'application_mark_name', 'review_mark_name', 'real_consign_time_1',
        'warehousing_status', 'is_purchase', 'updated_at', 'status', 'remark',
    ];

    protected $dates = [
        'promise_time',
        'mark_time',
        'submit_time',
        'review_time',
        'settle_time',
        'system_consign_time',
        'real_consign_time',
        'real_consign_time_1',
    ];

    //设置类型
    protected $casts = [
        'is_submit' => 'boolean',
        'is_review' => 'boolean',
        'is_settle' => 'boolean',
        'is_consign' => 'boolean',
        'is_invalid' => 'boolean',
        'is_purchase' => 'boolean',
        'status' => 'boolean',
    ];

    protected static function boot()
    {
        parent::boot();
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
}
