<?php

namespace App\Transformers;

use App\Models\RefundReasonType;
use League\Fractal\TransformerAbstract;

class RefundReasonTypeTransformer extends TransformerAbstract
{
    public function transform(RefundReasonType $refundreasontype)
    {
        return [
            'id' => $refundreasontype->id,
            'name' => $refundreasontype->name,
            'status' => $refundreasontype->status,
            'created_at' => $refundreasontype->created_at
                                    ->toDateTimeString(),
            'updated_at' => $refundreasontype->updated_at
                                    ->toDateTimeString(),
        ];
    }

    public function includeRefundOrder(RefundReasonType $refundreasontype)
    {
        return $this->collection($refundreasontype->refundOrder,new RefundOrderTransformer());
    }
}