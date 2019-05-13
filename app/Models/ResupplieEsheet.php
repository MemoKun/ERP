<?php

namespace App\Models;

class ResupplieEsheet extends Model
{
    protected $table = 're_supplie_esheet';

    protected $fillable = [
        'esheet_no', 'status',
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
        return $this->hasMany(ResupplieOrder::class, 're_supplie_categories_id');
    }
}
