<?php

namespace App\Models;

class AfterSaleOperationRecord extends Model
{
    protected $table = 'after_sale_operation_records';

    protected $fillable = [
        'after_sale_orders_id','user_id','user_name', 'operation', 'description', 'status',
    ];

    protected $dates = [
        'created_at',
        'updated_at'
    ];

    //设置类型
    protected $casts = [
        'status' => 'boolean',
    ];

    protected static function boot()
    {
        parent::boot();
    }

    public function afterSale()
    {
        return $this->belongsTo(AfterSale::class, 'after_sale_orders_id');
    }
}
