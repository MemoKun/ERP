<?php

namespace App\Models;

class RefundReasonType extends Model
{
    protected $table = 'refund_reasons_type';

    protected $fillable = [
        'name', 'status'
    ];

    //设置类型
    protected $casts = [
        'status' => 'boolean',
    ];

    public function refundOrders()
    {
        return $this->hasMany(RefundOrder::class, 'payment_methods_id');
    }

}
