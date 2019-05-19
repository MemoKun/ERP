<?php

namespace App\Transformers;

use App\Models\UserAstWarehouse;
use League\Fractal\TransformerAbstract;

class UserAstWarehouseTransformer extends TransformerAbstract
{
    public function transform(UserAstWarehouse $uaw)
    {
        return [
            'id' => $uaw->id,
            'user' => $uaw->user,
            'warehouse' => $uaw->warehouse,
            'status'=>$uaw->status,
            'created_at' => $uaw->created_at
                                    ->toDateTimeString(),
            'updated_at' => $uaw->updated_at
                                    ->toDateTimeString(),
        ];
    }
}