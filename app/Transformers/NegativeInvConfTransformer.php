<?php

namespace App\Transformers;

use App\Models\NegativeInvConf;
use League\Fractal\TransformerAbstract;

class NegativeInvConfTransformer extends TransformerAbstract
{
    public function transform(NegativeInvConf $conf)
    {
        return [
            'id'=> $conf->id,
            'negative_inv' => $conf->negative_inv,
            'user' => $conf->user,
            'creator' =>$conf->creator,
            'status' => $conf->status,
            'created_at' => $conf->created_at
                                    ->toDateTimeString(),
            'updated_at' => $conf->updated_at
                                    ->toDateTimeString(),
        ];
    }
}