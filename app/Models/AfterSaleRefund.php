<?php

namespace App\Models;

class AfterSaleRefund extends Model
{
    protected $table = 'after_sale_refund';

    protected $fillable = [
        'after_sale_id','refund_party','refund_party_name','refund_amount'
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
