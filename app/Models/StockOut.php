<?php

namespace App\Models;

use Illuminate\Support\Facades\Auth;

class StockOut extends Model
{
    protected $table = 'stock_outs';

    protected $fillable = [
        'warehouse_id', 'product_components_id', 'stock_out_quantity', 'creator',
        'remark'
    ];


    protected static function boot()
    {
        parent::boot(); // TODO: Change the autogenerated stub
        // 监听模型创建事件，在写入数据库之前触发
        static::creating(function ($model) {

            // 如果模型的 creator 字段为空
            if (!$model->creator) {

                $model->creator = Auth::guard('api')->id();;
                // 如果生成失败，则终止创建订单
                if (!$model->creator) {
                    return false;
                }
            }

        });
    }

}
