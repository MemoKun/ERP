<?php

namespace App\Models;

class NegativeInvConf extends Model
{
    protected $table = 'negative_inv_conf';

    protected $fillable = [
        'negative_inv', 'user', 'creator', 'status' , 'created_at' , 'updated_at'
    ];

    //设置类型
    protected $casts = [
     
    ];

}
