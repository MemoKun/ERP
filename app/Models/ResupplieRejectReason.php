<?php

namespace App\Models;

class ResupplieRejectReason extends Model
{
    protected $table = 're_supplie_reject_reasons';

    protected $fillable = [
        're_supplie_orders_id', 'rejecter', 'reason', 'status',
    ];

    //设置类型
    protected $casts = [
        'status' => 'boolean',
    ];

    protected static function boot()
    {
        parent::boot();
    }

    public function resupplieOrder()
    {
        return $this->belongsTo(ResupplieOrder::class, 're_supplie_orders_id');
    }
}
