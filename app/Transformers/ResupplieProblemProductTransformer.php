<?php

namespace App\Transformers;

use App\Models\ResupplieProblemProduct;
use League\Fractal\TransformerAbstract;

class ResupplieProblemProductTransformer extends TransformerAbstract
{
    protected $availableIncludes = [
        'resupplieOrder','combination'
    ];

    public function transform(ResupplieProblemProduct $resupplieProblemProduct)
    {
        return [
            'id'=>$resupplieProblemProduct->id,
            're_supplie_orders_id'=>$resupplieProblemProduct->re_supplie_orders_id,
            'combinations_id'=>$resupplieProblemProduct->combinations_id,
            'problem_description'=>$resupplieProblemProduct->problem_description,
            'created_at'=>$resupplieProblemProduct->created_at->toDateTimeString(),
            'updated_at'=>$resupplieProblemProduct->updated_at->toDateTimeString(),
        ];
    }

    public function includeResupplieOrder(ResupplieProblemProduct $resupplieProblemProduct)
    {
        return $this->item($resupplieProblemProduct->resupplieOrder, new ResupplieOrderTransformer());
    }

    public function includeCombination(ResupplieProblemProduct $resupplieProblemProduct)
    {
        return $this->item($resupplieProblemProduct->combination, new ResupplieOrderTransformer());
    }
}