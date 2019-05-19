<?php

namespace App\Models;

class ResupplieProblemProduct extends Model
{
    protected $table = 're_supplie_problem_products';

    protected $fillable = [
        're_supplie_orders_id', 'commodity_code', 'spec_code','short_name',
        'spec','suppliers_id', 'problem_description',
    ];

    public function resupplieOrder()
    {
        return $this->belongsTo(ResupplieOrder::class, 're_supplie_orders_id');
    }

    public function supplier()
    {
        return $this->belongsTo(Supplier::class, 'suppliers_id');
    }
}
