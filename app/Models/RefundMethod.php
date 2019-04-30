<?php

namespace App\Models;

class RefundMethod extends Model
{
    protected $table = 'refund_methods';

    protected $fillable = [
        'name', 'status',
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
        return $this->hasMany(ResupplieOrder::class,'refund_methods_id');
    }
}