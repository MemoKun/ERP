<?php

namespace App\Transformers;

use App\Models\RefundMethod;
use League\Fractal\TransformerAbstract;

class RefundMethodTransformer extends TransformerAbstract
{
    protected $availableIncludes = [
        'resupplieOrder'
    ];

    public function transform(RefundMethod $refundMethod)
    {
        return [
            'id' => $refundMethod->id,
            'name' => $refundMethod->name,
            'status' => $refundMethod->status,
            'created_at' => $refundMethod->created_at
                                    ->toDateTimeString(),
            'updated_at' => $refundMethod->updated_at
                                    ->toDateTimeString(),
        ];
    }

    public function includeResuppliedOrder(RefundMethod $refundMethod)
    {
        return $this->collection($refundMethod->resupplieOrder, new ResupplieOrderTransformer());
    }
}