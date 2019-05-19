<?php

namespace App\Models;

use Illuminate\Support\Facades\DB;
use Dingo\Api\Exception\UpdateResourceFailedException;
use Illuminate\Support\Facades\Auth;

class PrinterConf extends Model
{
    protected $table = 'printer_conf';

    protected $fillable = [
        'model','printer','user','status'
    ];

    //设置类型
    protected $casts = [
        'status' => 'boolean',
    ];

}
