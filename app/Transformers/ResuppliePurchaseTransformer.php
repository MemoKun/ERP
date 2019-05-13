<?php

namespace App\Transformers;

use App\Models\ResuppliePurchase;
use League\Fractal\TransformerAbstract;

class ResuppliePurchaseTransformer extends TransformerAbstract
{
    protected $availableIncludes = [
        'resupplieOrder', 'product',  'productComponent',
    ];

    public function transform(ResuppliePurchase $resuppliePurchase)
    {
        return [
            'id' => $resuppliePurchase->id,
            're_supplie_orders_id' => $resuppliePurchase->re_supplie_orders_id,
            'products_id' => $resuppliePurchase->products_id,
            'product_components_id' => $resuppliePurchase->product_components_id,
            'purchase_quantity' => $resuppliePurchase->purchase_quantity,
            'stock_in_count' => $resuppliePurchase->stock_in_count,
            'created_at' => $resuppliePurchase->created_at->toDateTimeString(),
            'updated_at' => $resuppliePurchase->updated_at->toDateTimeString(),
        ];
    }

    public function includeResupplieOrder(ResuppliePurchase $resuppliePurchase)
    {
        return $this->item($resuppliePurchase->resupplieOrder, new ResupplieOrderTransformer());
    }

    public function includeProduct(ResuppliePurchase $resuppliePurchase)
    {
        return $this->item($resuppliePurchase->product, new ProductTransformer());
    }

    public function includeProductComponent(ResuppliePurchase $resuppliePurchase)
    {
        return $this->item($resuppliePurchase->productComponent, new ProductComponentTransformer());
    }
}
