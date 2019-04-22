<?php

namespace App\Models;

use Illuminate\Support\Facades\DB;
use Dingo\Api\Exception\UpdateResourceFailedException;
use Illuminate\Support\Facades\Auth;


class AfterSType extends Model
{
    protected $table = 'after_s_type';

    protected $fillable = ['after_s_type', 'status'];

    protected $casts = [
        'status' => 'boolean'
    ];
}