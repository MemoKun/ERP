<?php

namespace App\Models;

use Illuminate\Support\Facades\DB;
use Dingo\Api\Exception\UpdateResourceFailedException;
use Illuminate\Support\Facades\Auth;


class AfterSState extends Model{
    protected $table = 'after_s_state';

    protected $fillable = ['after_s_state','status'];

    protected $cast = [
        'status' => 'boolean'
    ];
}
?>