<?php

namespace App\Transformers;

use App\Models\AfterSaleReturn;
use League\Fractal\TransformerAbstract;

class AfterSaleReturnTransformer extends TransformerAbstract
{
    protected $availableIncludes = [
        'afterSale'
    ];

    public function transform(AfterSaleReturn $aftersalereturn)
    {
        return [
            'id' => $aftersalereturn->id,
            'after_sale_id' => $aftersalereturn->after_sale_id,
            'return_party' => $aftersalereturn->return_party,
            'return_party_name' => $aftersalereturn->return_party_name,
            'return_amount' => $aftersalereturn->return_amount,
            'status' => $aftersalereturn->status,
            'created_at' => $aftersalereturn->created_at
                                    ->toDateTimeString(),
            'updated_at' => $aftersalereturn->updated_at
                                    ->toDateTimeString(),
        ];
    }

    public function includeAfterSale(AfterSaleReturn $aftersalereturn)
    {
        return $this->item($aftersalereturn->afterSale, new AfterSaleTransformer());
    }
}