<?php

namespace App\Transformers;

use App\Models\ResupplieOrderItem;
use League\Fractal\TransformerAbstract;

class ResupplieOrderItemTransformer extends TransformerAbstract
{
    protected $availableIncludes =[
        'resupplieOrder','combination','productComponent'
    ];

    public function transform(ResupplieOrderItem $resupplieOrderItem)
    {
        return [
            'id'=>$resupplieOrderItem->id,
            're_supplie_orders_id'=>$resupplieOrderItem->re_supplie_orders_id,
            'combinations_id'=>$resupplieOrderItem->combinations_id,
            'product_components_id'=>$resupplieOrderItem->product_components_id,
            'quantity'=>$resupplieOrderItem->quantity,
            'actual_price'=>$resupplieOrderItem->actual_price,
            'remark'=>$resupplieOrderItem->remark,
            'created_at'=>$resupplieOrderItem->created_at->toDateTimeString(),
            'updated_at'=>$resupplieOrderItem->updated_at->toDateTimeString(),
        ];
    }

    public function includeResupplieOrder(ResupplieOrderItem $resupplieOrderItem)
    {
        return $this->item($resupplieOrderItem->resupplieOrder, new ResupplieOrderTransformer());
    }

    public function includeCombination(ResupplieOrderItem $resupplieOrderItem)
    {
        return $this->item($resupplieOrderItem->combination, new CombinationTransformer());
    }

    public function includeProductComponent(ResupplieOrderItem $resupplieOrderItem)
    {
        return $this->item($resupplieOrderItem->productComponent, new ProductComponentTransformer());
    }
}