<?php

namespace App\Transformers;

use App\Models\AfterSaleType;
use League\Fractal\TransformerAbstract;

class AfterSaleTypeTransformer extends TransformerAbstract
{
    public function transform(AfterSaleType $type)
    {
        return [
            'id' => $type->id,
            'name' => $type->name,
            'status' => $type->status,
            'created_at' => $type->created_at
                                    ->toDateTimeString(),
            'updated_at' => $type->updated_at
                                    ->toDateTimeString(),
        ];
    }
}
