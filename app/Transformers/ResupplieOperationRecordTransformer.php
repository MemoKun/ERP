<?php

namespace App\Transformers;

use App\Models\ResupplieOperationRecord;
use League\Fractal\TransformerAbstract;

class ResupplieOperationRecordTransformer extends TransformerAbstract
{
    protected $availableIncludes = [
        'resupplieOrder',
    ];

    public function transform(ResupplieOperationRecord $resupplieOperationRecord)
    {
        return [
            'id' => $resupplieOperationRecord->id,
            're_supplie_orders_id' => $resupplieOperationRecord->re_supplie_orders_id,
            'user_name' => $resupplieOperationRecord->user_name,
            'operated' => $resupplieOperationRecord->operated,
            'description' => $resupplieOperationRecord->description,
            'status' => $resupplieOperationRecord->status,
            'created_at' => $resupplieOperationRecord->created_at->toDateTimeString(),
            'updated_at' => $resupplieOperationRecord->updated_at->toDateTimeString(),
        ];
    }

    public function includeResupplieOrder(ResupplieOperationRecord $resupplieOperationRecord)
    {
        return $this->item($resupplieOperationRecord->resupplieOrder, new ResupplieOrderTransformer());
    }
}
