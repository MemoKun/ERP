<?php

namespace App\Transformers;

use App\Models\OrderOperationRecord;
use League\Fractal\TransformerAbstract;

class OrderOperationRecordTransformer extends TransformerAbstract
{
    protected $availableIncludes = [
        'user','order'
    ];

    public function transform(OrderOperationRecord $orderOperationRecord)
    {
        return [
            'id' => $orderOperationRecord->id,
            'orders_id' => $orderOperationRecord->orders_id,
            'user_id' => $orderOperationRecord->user_id,
            'user_name' => $orderOperationRecord->user_name,
            'operation' => $orderOperationRecord->operation,
            'description' => $orderOperationRecord->description,
            'status' => $orderOperationRecord->status,
            'created_at' => optional($orderOperationRecord->created_at)->toDateTimeString(),
            'updated_at' => optional($orderOperationRecord->updated_at)->toDateTimeString(),
        ];
    }

    public function includeOrder(OrderOperationRecord $orderOperationRecord)
    {
        return $this->item($orderOperationRecord->order, new OrderTransformer());
    }
}
