<?php

namespace App\Models;

class BuyAndSendGift extends Model
{
    protected $table = 'buy_and_send_gift';

    protected $fillable = [
        'buy_and_send_pro_id', 'commodity_code', 'spec_code',
        'short_name', 'spec_name', 'quantity',
    ];

    //设置类型
    protected $casts = [
        'status' => 'boolean',
    ];

    public function buyAndSendPro()
    {
        return $this->belongsTo(BuyAndSendPro::class, 'buy_and_send_pro_id');
    }
}
