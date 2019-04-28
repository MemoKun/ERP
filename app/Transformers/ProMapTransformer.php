<?php

namespace App\Transformers;

use App\Models\ProMap;
use League\Fractal\TransformerAbstract;

class ProMapTransformer extends TransformerAbstract
{
    protected $availableIncludes = [
        'product',
    ];

    public function transform(ProMap $proMap)
    {
        return [
            'id' => $proMap->id,
            'supplier_id' => $proMap->supplier_id,
            'order_id' => $proMap->order_id,
            'specification_id' => $proMap->specification_id,
            'order_name' => $proMap->order_name,
            'specification_name' => $proMap->specification_name,
            'map_order_id' => $proMap->map_order_id,
            'map_specification_id' => $proMap->map_specification_id,
            'map_order_name' => $proMap->map_order_name,
            'map_specification_name' => $proMap->map_specification_name,
            'status' => $proMap->status,
            'created_at' => $proMap->created_at ->toDateTimeString(),
            'updated_at' => $proMap->updated_at ->toDateTimeString(),
        ];
    }

    public function includeProduct(ProMap $proMap)
    {
        return $this->item($proMap->product, new ProductTransformer());
    }
}