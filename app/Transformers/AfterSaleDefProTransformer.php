<?php

namespace App\Transformers;

use App\Models\AfterSaleDefPro;
use League\Fractal\TransformerAbstract;

class AfterSaleDefProTransformer extends TransformerAbstract
{
    protected $availableIncludes = [
        'afterSale'
    ];

    public function transform(AfterSaleDefPro $aftersaledefpro)
    {
        return [
            'id' => $aftersaledefpro->id,
            'after_sale_id' => $aftersaledefpro->after_sale_id,
            'commodity_code' => $aftersaledefpro->commodity_code,
            'spec_code' => $aftersaledefpro->spec_code,
            'short_name' => $aftersaledefpro->short_name,
            'spec' => $aftersaledefpro->spec,
            'color' => $aftersaledefpro->color,
            'materials' => $aftersaledefpro->materials,
            'buy_number' => $aftersaledefpro->buy_number,
            'img_url' => $aftersaledefpro->img_url,
            'supplier_id' => $aftersaledefpro->supplier_id,
            'status' => $aftersaledefpro->status,
            'created_at' => $aftersaledefpro->created_at
                                    ->toDateTimeString(),
            'updated_at' => $aftersaledefpro->updated_at
                                    ->toDateTimeString(),
        ];
    }

    public function includeAfterSale(AfterSaleDefPro $aftersaledefpro)
    {
        return $this->item($aftersaledefpro->afterSale, new AfterSaleTransformer());
    }

}