<?php

namespace App\Transformers;

use App\Models\RefundOperationRecord;
use League\Fractal\TransformerAbstract;

class RefundOperationRecordTransformer extends TransformerAbstract
{
    protected $availableIncludes = [
        'user','refundOrder'
    ];

    public function transform(RefundOperationRecord $refundOperationRecord)
    {
        return [
            'id' => $refundOperationRecord->id,
            'refund_orders_id' => $refundOperationRecord->refund_orders_id,
            'user_id' => $refundOperationRecord->user_id,
            'user_name' => $refundOperationRecord->user_name,
            'operation' => $refundOperationRecord->operation,
            'description' => $refundOperationRecord->description,
            'status' => $refundOperationRecord->status,
            'created_at' => optional($refundOperationRecord->created_at)->toDateTimeString(),
            'updated_at' => optional($refundOperationRecord->updated_at)->toDateTimeString(),
        ];
    }

    public function includeRefundOrder(RefundOperationRecord $refundOperationRecord)
    {
        return $this->item($refundOperationRecord->refundOrder, new RefundOrderTransformer());
    }
}
