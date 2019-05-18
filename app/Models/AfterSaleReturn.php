<?php

namespace App\Models;

class AfterSaleReturn extends Model
{
    protected $table = 'after_sale_return';

    protected $fillable = [
        'after_sale_id','return_party','return_party_name','return_amount'
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
