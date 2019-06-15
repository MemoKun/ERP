<?php

namespace App\Models;

class RefundOperationRecord extends Model
{
    protected $table = 'refund_operation_records';

    protected $fillable = [
        'refund_orders_id','user_id','user_name', 'operation', 'description', 'status',
    ];

    protected $dates = [
        'created_at',
        'updated_at'
    ];

    //设置类型
    protected $casts = [
        'status' => 'boolean',
    ];

    protected static function boot()
    {
        parent::boot();
    }

    public function refundOrder()
    {
        return $this->belongsTo(RefundOrder::class, 'refund_orders_id');
    }
}
