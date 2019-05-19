<?php

namespace App\Models;

class ResupplieOrderItem extends Model
{
    protected $table = 're_supplie_order_items';

    protected $fillable = [
        're_supplie_orders_id', 'products_id', 'combinations_id', 'product_components_id',
        'quantity', 'actual_price', 'remark',
    ];

    public function resupplieOrder()
    {
        return $this->belongsTo(ResupplieOrder::class, 're_supplie_orders_id');
    }

    public function product()
    {
        return $this->belongsTo(Product::class, 'products_id');
    }

    public function combination()
    {
        return $this->belongsTo(Combination::class, 'combinations_id');
    }

    public function productComponent()
    {
        return $this->belongsTo(ProductComponent::class, 'product_components_id');
    }
}
