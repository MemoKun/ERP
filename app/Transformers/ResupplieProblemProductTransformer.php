<?php

namespace App\Transformers;

use App\Models\ResupplieProblemProduct;
use League\Fractal\TransformerAbstract;

class ResupplieProblemProductTransformer extends TransformerAbstract
{
    protected $availableIncludes = [
        'resupplieOrder', 'product', 'productComponent', 'supplier',
    ];

    public function transform(ResupplieProblemProduct $resupplieProblemProduct)
    {
        return [
            'id' => $resupplieProblemProduct->id,
            're_supplie_orders_id' => $resupplieProblemProduct->re_supplie_orders_id,
            'products_id' => $resupplieProblemProduct->products_id,
            'product_components_id' => $resupplieProblemProduct->product_components_id,
            'suppliers_id' => $resupplieProblemProduct->suppliers_id,
            'problem_description' => $resupplieProblemProduct->problem_description,
            'created_at' => $resupplieProblemProduct->created_at->toDateTimeString(),
            'updated_at' => $resupplieProblemProduct->updated_at->toDateTimeString(),
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

    public function includeProduct(ResupplieProblemProduct $resupplieProblemProduct)
    {
        return $this->item($resupplieProblemProduct->product, new ProductTransformer());
    }

    public function includeProductComponent(ResupplieProblemProduct $resupplieProblemProduct)
    {
        return $this->item($resupplieProblemProduct->productComponent, new ProductComponentTransformer());
    }

    public function includeSupplier(ResupplieProblemProduct $resupplieProblemProduct)
    {
        return $this->item($resupplieProblemProduct->supplier, new SupplierTransformer());
    }
}
