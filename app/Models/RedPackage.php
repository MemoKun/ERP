<?php

namespace App\Models;

class RedPackage extends Model
{
    protected $table = 'red_package_mag';

    protected $fillable = [
        'commodity_code', 'short_name','remark', 'img', 'status'
    ];

    //设置类型
    protected $casts = [
        'status' => 'boolean'
    ];

    public function productComponents()
    {
        return $this->hasMany(ProductComponent::class, 'pid');
    }

    public function combinations()
    {
        return $this->hasMany(Combination::class, 'pid');
    }

    public function shop()
    {
        return $this->belongsTo(Shop::class, 'shops_id');
    }

    public function supplier()
    {
        return $this->belongsTo(Supplier::class, 'supplier_id');
    }

    public function goodsCategory()
    {
        return $this->belongsTo(GoodsCategory::class, 'category_id');
    }

    public function stock()
    {
        return $this->hasMany(Stock::class, 'products_id');
    }

    public function orderItems()
    {
        return $this->hasMany(OrderItem::class, 'products_id');
    }

    public function afterCompensationOrder()
    {
        return $this->belongsTo(AfterCompensationOrder::class);
    }
}
