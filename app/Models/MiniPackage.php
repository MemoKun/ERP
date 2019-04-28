<?php

namespace App\Models;

class MiniPackage extends Model
{
    protected $table = 'mini_package';

    protected $fillable = [
        'supplier_id', 'order_id', 'specification_id','def_order_id','def_specification_id','order_name','def_order_name'
    ];

    protected $casts = [
        'status' => 'boolean'
    ];

    public function product()
    {
        return $this->belongsTo(Product::class, 'order_id');
    }

}