<?php

namespace App\Transformers;

use App\Models\ResupplieRejectReason;
use League\Fractal\TransformerAbstract;

class ResupplieRejectReasonTransformer extends TransformerAbstract
{
    protected $availableIncludes = [
        'resupplieOrder'
    ];

    public function transform(ResupplieRejectReason $resupplieRejectReason)
    {
        return [
            'id' => $resupplieRejectReason->id,
            're_supplie_orders_id' => $resupplieRejectReason->re_supplie_orders_id,
            'rejecter' => $resupplieRejectReason->rejecter,
            'reason' => $resupplieRejectReason->reason,
            'status' => $resupplieRejectReason->status,
            'created_at' => $resupplieRejectReason->created_at->toDateTimeString(),
            'updated_at' => $resupplieRejectReason->updated_at->toDateTimeString(),
        ];
    }

    public function includeResupplieOrder(ResupplieRejectReason $resupplieRejectReason)
    {
        return $this->item($resupplieRejectReason->resupplieOrder, new ResupplieOrderTransformer());
    }
}