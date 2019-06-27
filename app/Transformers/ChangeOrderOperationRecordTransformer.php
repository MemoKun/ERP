<?php

namespace App\Transformers;

use App\Models\ChangeOrderOperationRecord;
use League\Fractal\TransformerAbstract;

class ChangeOrderOperationRecordTransformer extends TransformerAbstract
{
    protected $availableIncludes = [
        'user','changeOrder'
    ];

    public function transform(ChangeOrderOperationRecord $changeOrderOperationRecord)
    {
        return [
            'id' => $changeOrderOperationRecord->id,
            'orders_id' => $changeOrderOperationRecord->orders_id,
            'user_id' => $changeOrderOperationRecord->user_id,
            'user_name' => $changeOrderOperationRecord->user_name,
            'operation' => $changeOrderOperationRecord->operation,
            'description' => $changeOrderOperationRecord->description,
            'status' => $changeOrderOperationRecord->status,
            'created_at' => optional($changeOrderOperationRecord->created_at)->toDateTimeString(),
            'updated_at' => optional($changeOrderOperationRecord->updated_at)->toDateTimeString(),
        ];
    }

    public function includeChangeOrder(ChangeOrderOperationRecord $changeOrderOperationRecord)
    {
        return $this->item($changeOrderOperationRecord->changeOrder, new ChangeOrderTransformer());
    }
}
