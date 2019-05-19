<?php

namespace App\Models;

class AfterSaleDefPro extends Model
{
    protected $table = 'problem_product';

    protected $fillable = [
        'commodity_code','spec_code','short_name','spec',
        'color','materials','buy_number','supplier_id','img_url'
    ];

    protected $casts = [
        'status' => 'boolean',
    ];

    protected $dates = [
        'created_at',
    ];

    public function AfterSale()
    {
        return $this->belongsTo(AfterSale::class,'after_sale_id');
    }
}
