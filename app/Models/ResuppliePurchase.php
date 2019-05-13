<?php

namespace App\Models;

class ResuppliePurchase extends Model
{
    protected $table = 're_supplie_purchase';

    protected $fillable = [
        're_supplie_orders_id', 'products_id',  'product_components_id',
        'purchase_quantity', 'stock_in_count',
    ];

    public function resupplieOrder()
    {
        return $this->belongsTo(ResupplieOrder::class, 're_supplie_orders_id');
    }

    public function product()
    {
        return $this->belongsTo(Product::class, 'products_id');
    }

    public function productComponent()
    {
        return $this->belongsTo(ProductComponent::class, 'product_components_id');
    }
}
