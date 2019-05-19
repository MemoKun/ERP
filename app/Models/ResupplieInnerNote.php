<?php

namespace App\Models;

class ResupplieInnerNote extends Model
{
    protected $table = 're_supplie_inner_note';

    protected $fillable = [
        'theme', 'user_name','content','status',
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
        return $this->hasMany(ResupplieOrder::class, 're_supplie_categories_id');
    }
}
