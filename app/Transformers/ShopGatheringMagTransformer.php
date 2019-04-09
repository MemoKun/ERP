<?php

namespace App\Transformers;

use App\Models\ShopGatheringMag;
use League\Fractal\TransformerAbstract;

class ShopGatheringMagTransformer extends TransformerAbstract
{

    public function transform(ShopGatheringMag $mag)
    {
        return [
            'id'=>$mag->id,
            'name' => $mag->name,
            'status' => $mag->status,
            'created_at' => $mag->created_at
                                    ->toDateTimeString(),
            'updated_at' => $mag->updated_at
                                    ->toDateTimeString(),
        ];
    }


}