<?php

namespace App\Models;

class PackageType extends Model
{
    protected $table = 'package_types';

    protected $fillable = [
        'name', 'status',
    ];

    //设置类型
    protected $casts = [
        'status' => 'boolean',
    ];

    protected static function boot()
    {
        parent::boot();
    }

    public function resupplieOrder()
    {
        return $this->hasMany(ResupplieOrder::class,'package_types_id');
    }
}