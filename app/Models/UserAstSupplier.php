<?php

namespace App\Models;

class UserAstSupplier extends Model
{
    protected $table = 'user_ast_supplier';

    protected $fillable = [
        'user','supplier','status','created_at','updated_at'
    ];

    //设置类型
    protected $casts = [
        
    ];

}
