<?php

namespace App\Transformers;

use App\Models\RefundReason;
use League\Fractal\TransformerAbstract;

class RefundReasonTransformer extends TransformerAbstract
{

    protected $availableIncludes = [
        'refundOrder'
    ];

    public function transform(RefundReason $refundReason)
    {
        return [
            'id' => $refundReason->id,
            'refund_orders_id'=> $refundReason->refund_orders_id,
            'refund_reason'=> $refundReason->refund_reason,
            'refund_description'=> $refundReason->refund_description,
            'refund_amount'=> $refundReason->refund_amount,
            'img_url' => $refundReason->img_url,
            'status' => $refundReason->status,
            'created_at' => $refundReason->created_at
                                    ->toDateTimeString(),
            'updated_at' => $refundReason->updated_at
                                    ->toDateTimeString(),
        ];
    }
    public function includeRefundOrder(RefundReason $refundReason)
    {
        return $this->item($refundReason->refundOrder,new RefundOrderTransformer());
    }


}