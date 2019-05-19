<?php

namespace App\Transformers;

use App\Models\ResupplieImage;
use League\Fractal\TransformerAbstract;

class ResupplieImageTransformer extends TransformerAbstract
{
    protected $availableIncludes = [
        'resupplieOrder',
    ];

    public function transform(ResupplieImage $resupplieImage)
    {
        return [
            'id' => $resupplieImage->id,
            're_supplie_orders_id' => $resupplieImage->re_supplie_orders_id,
            'img_url' => $resupplieImage->img_url,
            'status' => $resupplieImage->status,
            'created_at' => $resupplieImage->created_at->toDateTimeString(),
            'updated_at' => $resupplieImage->updated_at->toDateTimeString(),
        ];
    }

    public function includeResupplieOrder(ResupplieImage $resupplieImage)
    {
        return $this->item($resupplieImage->resupplieOrder, new ResupplieOrderTransformer());
    }
}
