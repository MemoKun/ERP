<?php

namespace App\Models;

class ResupplieOperationRecord extends Model
{
    protected $table = 're_supplie_operation_records';

    protected $fillable = [
        'user_name', 'operated', 'description', 'status',
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
        return $this->belongsTo(ResupplieOrder::class, 're_supplie_responsibles_id');
    }
}
