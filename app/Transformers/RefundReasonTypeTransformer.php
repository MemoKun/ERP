<?php

namespace App\Transformers;

use App\Models\RefundReason;
use League\Fractal\TransformerAbstract;

class RefundReasonTypeTransformer extends TransformerAbstract
{
    public function transform(RefundReasonType $refundReasonType)
    {
        return [
            'id' => $refundReasonType->id,
            'name' => $refundReasonType->name,
            'status' => $refundReasonType->status,
            'created_at' => $refundReasonType->created_at
                                    ->toDateTimeString(),
            'updated_at' => $refundReasonType->updated_at
                                    ->toDateTimeString(),
        ];
    }

    public function includeRefundOrder(RefundReasonType $refundReasonType)
    {
        return $this->collection($refundReasonType->refundOrder,new RefundOrderTransformer());
    }
}