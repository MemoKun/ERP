<?php

namespace App\Transformers;

use App\Models\UserAstSupplier;
use League\Fractal\TransformerAbstract;

class UserAstSupplierTransformer extends TransformerAbstract
{
    public function transform(UserAstSupplier $uas)
    {
        return [
            'id' => $uas->id,
            'user' => $uas->user,
            'supplier' => $uas->supplier,
            'status'=>$uas->status,
            'created_at' => $uas->created_at
                                    ->toDateTimeString(),
            'updated_at' => $uas->updated_at
                                    ->toDateTimeString(),
        ];
    }
}