<?php

namespace App\Transformers;

use App\Models\ResupplieProblemProduct;
use League\Fractal\TransformerAbstract;

class ResupplieProblemProductTransformer extends TransformerAbstract
{
    protected $availableIncludes = [
        'resupplieOrder', 'supplier',
    ];

    public function transform(ResupplieProblemProduct $resupplieProblemProduct)
    {
        return [
            'id' => $resupplieProblemProduct->id,
            're_supplie_orders_id' => $resupplieProblemProduct->re_supplie_orders_id,
            'commodity_code' => $resupplieProblemProduct->commodity_code,
            'spec_code' => $resupplieProblemProduct->spec_code,
            'short_name' => $resupplieProblemProduct->short_name,
            'product_components_id' => $resupplieProblemProduct->product_components_id,
            'spec' => $resupplieProblemProduct->spec,
            'problem_description' => $resupplieProblemProduct->problem_description,
            'created_at' => $resupplieProblemProduct->created_at->toDateTimeString(),
            'updated_at' => $resupplieProblemProduct->updated_at->toDateTimeString(),
        ];
    }

    public function includeResupplieOrder(ResupplieProblemProduct $resupplieProblemProduct)
    {
        return $this->item($resupplieProblemProduct->resupplieOrder, new ResupplieOrderTransformer());
    }

    public function includeSupplier(ResupplieProblemProduct $resupplieProblemProduct)
    {
        return $this->item($resupplieProblemProduct->supplier, new SupplierTransformer());
    }
}
