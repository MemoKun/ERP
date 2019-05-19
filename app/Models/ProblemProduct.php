<?php

namespace App\Models;

class ProblemProduct extends Model
{
    protected $table = 'problem_product';

    protected $fillable = [
        'after_compensation_order_id', 'commodity_code', 'spec_code',
        'short_name', 'spec', 'color', 'materials', 'function',
        'special', 'other', 'buy_number', 'img_url', 'supplier_id',
    ];

    //设置类型
    protected $casts = [
    ];

    public function afterCompensationOrder()
    {
        return $this->belongsTo(AfterCompensationOrder::class);
    }
}
