<?php

namespace App\Models;

class AfterSalePatch extends Model
{
    protected $table = 'after_sale_patch';

    protected $fillable = [
        'after_sale_id','patch_party','patch_party_name','patch_amount'
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
