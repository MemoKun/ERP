<?php

namespace App\Models;

use Illuminate\Support\Facades\DB;
use Dingo\Api\Exception\UpdateResourceFailedException;
use Illuminate\Support\Facades\Auth;


class ShopGatheringMag extends Model{
    protected $table = 'shop_gathering_mag';

    protected $fillable = ['gathering_type','status'];

    protected $casts = [
        'status' => 'boolean'
    ];
}
?>