<?php

namespace App\Models;

class DownLoadConf extends Model
{
    protected $table = 'download_conf';

    protected $fillable = [
        'is_covered', 'is_merged', 'status',
    ];
    //设置类型
    protected $casts = [
        'is_covered' => 'boolean',
        'is_merged' => 'boolean',
        'status' => 'boolean',
    ];

    //观察者
    protected static function boot()
    {
        parent::boot();
    }
}
