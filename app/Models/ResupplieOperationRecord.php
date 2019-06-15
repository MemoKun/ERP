<?php

namespace App\Models;

class ResupplieOperationRecord extends Model
{
    protected $table = 're_supplie_operation_records';

    protected $fillable = [
        're_supplie_orders_id','user_id','user_name', 'operation', 'description', 'status',
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

    public function resupplieOrder()
    {
        return $this->belongsTo(ResupplieOrder::class, 're_supplie_orders_id');
    }
}
