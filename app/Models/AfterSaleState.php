<?php

namespace App\Models;

class AfterSaleState extends Model
{
    protected $table = 'after_sale_state';

    protected $fillable = ['name', 'status'];

    //设置类型
    protected $casts = [
        'status' => 'boolean'
    ];

    public function afterSales(){
        return $this->hasMany(AfterSale::class,'after_sale_status');
    }
}
