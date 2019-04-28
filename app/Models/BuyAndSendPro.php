<?php

namespace App\Models;

class BuyAndSendPro extends Model
{
    protected $table = 'buy_and_send_pro';

    protected $fillable = [
        'title', 'commodity_code', 'spec_code', 'short_name',
        'spec_name', 'status'
    ];

    //设置类型
    protected $casts = [
        'status' => 'boolean',
    ];

    //观察者
    protected static function boot()
    {
        parent::boot();

        static::deleting(function ($model) {
            $model->buyAndSendGift()->delete();
        });
    }

    //审核，点击后状态变为启用
    public function audit()
    {
        $this->status = 1;
        $this->save();
    }

    //作废，点击后状态变为不启用
    public function void()
    {
        $this->status = 0;
        $this->save();
    }


    public function buyAndSendGift()
    {
        return $this->hasMany(BuyAndSendGift::class);
    }
}
