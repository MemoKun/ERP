<?php

namespace App\Models;

class RelateLogistics extends Model
{
    protected $table = 'relate_logistics';

    protected $fillable = [
        'username', 'name', 'phone',
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
            $model->relateLogisticsCompany()->delete();
        });
    }

    public function relateLogisticsCompany()
    {
        return $this->hasMany(RelateLogisticsCompany::class);
    }
}
