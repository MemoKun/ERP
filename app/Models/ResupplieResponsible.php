<?php

namespace App\Models;

class ResupplieResponsible extends Model
{
    protected $table = 're_supplie_responsibles';

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
        return $this->hasMany(ResupplieOrder::class,'re_supplie_responsibles_id');
    }
}
