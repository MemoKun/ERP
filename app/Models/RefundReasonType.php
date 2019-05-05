<?php

namespace App\Models;

class RefundReasonType extends Model
{
    protected $table = 'refund_reason_type';

    protected $fillable = [
        'name', 'status'
    ];

    //设置类型
    protected $casts = [
        'status' => 'boolean',
    ];

    public function refundOrder()
    {
        return $this->hasMany(RefundOrder::class);
    }

}
