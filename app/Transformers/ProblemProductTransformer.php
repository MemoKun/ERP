<?php

namespace App\Transformers;

use App\Models\ProblemProduct;
use League\Fractal\TransformerAbstract;

class ProblemProductTransformer extends TransformerAbstract
{

    protected $availableIncludes = [
        'afterCompensationOrder'
    ];

    public function transform(ProblemProduct $problemProduct)
    {
        return [
            'id' => $problemProduct->id,
            'after_compensation_order_id' => $problemProduct->after_compensation_order_id,
            'commodity_code' => $problemProduct->commodity_code,
            'spec_code' => $problemProduct->spec_code,
            'short_name' => $problemProduct->short_name,
            'spec' => $problemProduct->spec,
            'color' => $problemProduct->color,
            'materials' => $problemProduct->materials,
            'function' => $problemProduct->function,
            'special' => $problemProduct->special,
            'other' => $problemProduct->other,
            'buy_number' => $problemProduct->buy_number,
            'img_url' => $problemProduct->img_url,
            'status' => $problemProduct->status,
            'created_at' => $problemProduct->created_at
                                    ->toDateTimeString(),
            'updated_at' => $problemProduct->updated_at
                                    ->toDateTimeString(),
        ];
    }
    public function includeAfterCompensationOrder(ProblemProduct $problemProduct)
    {
        return $this->item($problemProduct->afterCompensationOrder,new AfterCompensationTransformer());
    }


}