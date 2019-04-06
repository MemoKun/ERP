<?php

namespace App\Transformers;

use App\Models\ShopGatheringMag;
use League\Fractal\TransformerAbstract;

class ShopGatheringMagTransformer extends TransformerAbstract
{

    public function transform(ShopGatheringMag $mag)
    {
        return [
            'gathering_type' => $mag->gathering_type,
            'status' => $mag->status
        ];
    }


}