<?php

namespace App\Transformers;

use App\Models\ResupplieProgress;
use League\Fractal\TransformerAbstract;

class ResupplieProgressTransformer extends TransformerAbstract
{
    protected $availableIncludes = [
        'resupplieOrder'
    ];

    public function transform(ResupplieProgress $resupplieProgress)
    {
        return [
            'id' => $resupplieProgress->id,
            're_supplie_orders_id' => $resupplieProgress->re_supplie_orders_id,
            'description' => $resupplieProgress->description,
            'creator' => $resupplieProgress->creator,
            'status' => $resupplieProgress->status,
            'created_at' => $resupplieProgress->created_at->toDateTimeString(),
            'updated_at' => $resupplieProgress->updated_at->toDateTimeString(),
        ];
    }

    public function includeResupplieOrder(ResupplieProgress $resupplieProgress)
    {
        return $this->item($resupplieProgress->resupplieOrder, new ResupplieOrderTransformer());
    }
}