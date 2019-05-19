<?php

namespace App\Transformers;

use App\Models\AfterSalePatch;
use League\Fractal\TransformerAbstract;

class AfterSalePatchTransformer extends TransformerAbstract
{
    protected $availableIncludes = [
        'afterSale'
    ];

    public function transform(AfterSalePatch $aftersalepatch)
    {
        return [
            'id' => $aftersalepatch->id,
            'after_sale_id' => $aftersalepatch->after_sale_id,
            'patch_party' => $aftersalepatch->patch_party,
            'patch_party_name' => $aftersalepatch->patch_party_name,
            'patch_amount' => $aftersalepatch->patch_amount,
            'status' => $aftersalepatch->status,
            'created_at' => $aftersalepatch->created_at
                                    ->toDateTimeString(),
            'updated_at' => $aftersalepatch->updated_at
                                    ->toDateTimeString(),
        ];
    }

    public function includeAfterSale(AfterSalePatch $aftersalepatch)
    {
        return $this->item($aftersalepatch->afterSale, new AfterSaleTransformer());
    }
}