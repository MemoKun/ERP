<?php

namespace App\Models;

class ResupplieProblemProduct extends Model
{
    protected $table = 're_supplie_problem_products';

    protected $fillable = [
        're_supplie_orders_id', 'combinations_id', 'problem_description',
    ];

    public function resupplieOrder()
    {
        return $this->belongsTo(ResupplieOrder::class, 're_supplie_orders_id');
    }

    public function combination()
    {
        return $this->belongsTo(Combination::class, 'combinations_id');
    }
}
