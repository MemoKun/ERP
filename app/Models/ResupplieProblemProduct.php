<?php

namespace App\Models;

class ResupplieProblemProduct extends Model
{
    protected $table = 're_supplie_problem_products';

    protected $fillable = [
        're_supplie_orders_id', 'products_id', 'product_components_id',
        'suppliers_id', 'problem_description',
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

    public function supplier()
    {
        return $this->belongsTo(Supplier::class, 'suppliers_id');
    }
}
