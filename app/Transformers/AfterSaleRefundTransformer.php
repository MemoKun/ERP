<?php

namespace App\Transformers;

use App\Models\AfterSaleRefund;
use League\Fractal\TransformerAbstract;

class AfterSaleRefundTransformer extends TransformerAbstract
{
    protected $availableIncludes = [
        'afterSale'
    ];

    public function transform(AfterSaleRefund $aftersalerefund)
    {
        return [
            'id' => $aftersalerefund->id,
            'after_sale_id' => $aftersalerefund->after_sale_id,
            'refund_party' => $aftersalerefund->refund_party,
            'refund_party_name' => $aftersalerefund->refund_party_name,
            'refund_amount' => $aftersalerefund->refund_amount,
            'status' => $aftersalerefund->status,
            'created_at' => $aftersalerefund->created_at
                                    ->toDateTimeString(),
            'updated_at' => $aftersalerefund->updated_at
                                    ->toDateTimeString(),
        ];
    }

    public function includeAfterSale(AfterSaleRefund $aftersalerefund)
    {
        return $this->item($aftersalerefund->afterSale, new AfterSaleTransformer());
    }
}