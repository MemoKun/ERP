<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class OfflineAccountConf extends Model
{
    protected $table = "offline_account_conf";

    protected $fillable = [
        'account_information', 'user_id'
    ];

    protected $casts = [
        'status' => 'boolean'
    ];

    protected $dates = [
        'created_at',
    ];

    protected static function boot()
    {
        parent::boot(); // TODO: Change the autogenerated stub

        // 监听模型创建事件，在写入数据库之前触发
        static::creating(function($model) {
            // 如果模型的 user_id 字段为空
            if (!$model->user_id) {

                $model->user_id = Auth::guard('api')->id();;;
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
}
