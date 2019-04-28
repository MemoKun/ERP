<?php

namespace App\Models;

class ProMap extends Model
{
    protected $table = 'pro_map';

    protected $fillable = [
        'order_id', 'specification_id', 'map_order_id', 'map_specification_id',
        'order_name', 'map_order_name'
    ];

    protected $casts = [
        'status' => 'boolean'
    ];

    public function product()
    {
        return $this->belongsTo(Product::class, 'order_id');
    }
}