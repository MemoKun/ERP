<?php

namespace App\Transformers;

use App\Models\ShopGatheringMag;
use League\Fractal\TransformerAbstract;

class ShopGatheringMagTransformer extends TransformerAbstract
{
    protected $availableIncludes = [
        'gatheringType','isUsing'
    ];

    public function transform(ShopGatheringMag $mag)
    {
        return [
            'gathering_type' => $mag->gathering_type,
            'is_using' => $mag->is_using
        ];
    }


}