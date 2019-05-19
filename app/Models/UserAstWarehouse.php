<?php

namespace App\Models;

class UserAstWarehouse extends Model
{
    protected $table = 'user_ast_warehouse';

    protected $fillable = [
        'user', 'warehouse','status','created_at','updated_at'
    ];

    //设置类型
    protected $casts = [
        'status' => 'boolean'
    ];

}
