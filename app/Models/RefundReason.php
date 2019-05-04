<?php

namespace App\Models;

class RefundReason extends Model
{
    protected $table = 'refund_reason';

    protected $fillable = [
        'id',
        'refund_order_id',
        'refund_reason',
        'refund_description',
        'refund_amount',
        'img_url',
        'status',
        'created_at',
        'updated_at'
    ];

    //设置类型
    protected $casts = [
        'status' => 'boolean',
    ];

    public function refundOrder()
    {
        return $this->belongsTo(RefundOrder::class);
    }

}
