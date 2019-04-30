<?php

namespace App\Models;

class ResupplieImage extends Model
{
    protected $table = 're_supplie_images';

    protected $fillable = [
        're_supplie_orders_id', 'img_url', 'status',
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
        return $this->belongsTo(ResupplieOrder::class, 're_supplie_categories_id');
    }
}
