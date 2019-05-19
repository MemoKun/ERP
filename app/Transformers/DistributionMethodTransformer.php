<?php

namespace App\Transformers;

use App\Models\DistributionMethod;
use League\Fractal\TransformerAbstract;

class DistributionMethodTransformer extends TransformerAbstract
{
    protected $availableIncludes = [
        'productComponents','orders','resupplieOrder'
    ];

    public function transform(DistributionMethod $dismet)
    {
        return [
            'id' => $dismet->id,
            'name' => $dismet->name,
            'status' => $dismet->status,
            'created_at' => $dismet->created_at
                                    ->toDateTimeString(),
            'updated_at' => $dismet->updated_at
                                    ->toDateTimeString(),
        ];
    }

    public function includeProductComponents(DistributionMethod $dismet)
    {
        return $this->collection($dismet->productComponents, new ProductComponentTransformer());
    }

    public function includeOrders(DistributionMethod $dismet)
    {
        return $this->collection($dismet->orders, new OrderTransformer());
    }

    public function includeResuppliedOrder(DistributionMethod $dismet)
    {
        return $this->collection($dismet->resupplieOrder, new ResupplieOrderTransformer());
    }
}