<?php

namespace App\Models;

use Illuminate\Support\Facades\DB;
use Dingo\Api\Exception\UpdateResourceFailedException;
use Illuminate\Support\Facades\Auth;


class EvalCategoryMag extends Model{
    protected $table = 'eval_category_mag';

    protected $fillable = ['eval_category','note','status','creator','created_at'];

    protected $casts = [
        'status' => 'boolean'
    ];
}
?>