<?php

namespace App\Models;

class AfterSaleType extends Model
{
    protected $table = 'after_sale_type';

    protected $fillable = ['name', 'status'];

    //设置类型
    protected $casts = [
        'status' => 'boolean'
    ];

    public function afterSales(){
        return $this->hasMany(AfterSale::class,'after_sale_type');
    }
}
