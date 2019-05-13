<?php

namespace App\Models;

class RelateLogisticsCompany extends Model
{
    protected $table = 'relate_logistics_company';

    protected $fillable = [
        'relate_logistics_id', 'code', 'logistics_name',
    ];

    //设置类型
    protected $casts = [
        'status' => 'boolean',
    ];

    //观察者
    protected static function boot()
    {
        parent::boot();
    }

    public function relateLogistics()
    {
        return $this->belongsTo(RelateLogistics::class, 'relate_logistics_id');
    }
}
