<?php

namespace App\Models;

class AfterSaleSchedule extends Model
{
    protected $table = 'after_sale_schedule';

    protected $fillable = [
        'after_sale_id','schedule_description','user_id','subscribed_at'
    ];

    protected $casts = [
        'status' => 'boolean',
    ];

    protected $dates = [
        'subscribed_at','created_at',
    ];

    protected static function boot()
    {
        parent::boot(); // TODO: Change the autogenerated stub

        // 监听模型创建事件，在写入数据库之前触发
        static::creating(function($model) {
            // 如果模型的 user_id 字段为空
            if (!$model->user_id) {

                $model->user_id = 1;
                // 如果生成失败，则终止创建订单
                if (!$model->user_id) {
                    return false;
                }
            }
        });
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function AfterSale()
    {
        return $this->belongsTo(AfterSale::class,'after_sale_id');
    }
}
