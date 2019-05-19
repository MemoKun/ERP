<?php

namespace App\Transformers;

use App\Models\MiniPackage;
use League\Fractal\TransformerAbstract;

class MiniPackageTransformer extends TransformerAbstract
{
    protected $availableIncludes = [
        'product',
    ];

    public function transform(MiniPackage $MiniPackage)
    {
        return [
            'id' => $MiniPackage->id,
            'supplier_id' => $MiniPackage->supplier_id,
            'order_id' => $MiniPackage->order_id,
            'specification_id' => $MiniPackage->specification_id,
            'order_name' => $MiniPackage->order_name,
            'specification_name' => $MiniPackage->specification_name,
            'def_order_id' => $MiniPackage->def_order_id,
            'def_specification_id' => $MiniPackage->def_specification_id,
            'def_order_name' => $MiniPackage->def_order_name,
            'def_specification_name' => $MiniPackage->def_specification_name,
            'status' => $MiniPackage->status,
            'created_at' => $MiniPackage->created_at ->toDateTimeString(),
            'updated_at' => $MiniPackage->updated_at ->toDateTimeString(),
        ];
    }

    public function includeProduct(MiniPackage $miniPackage)
    {
        return $this->item($miniPackage->product, new ProductTransformer());
    }

}
