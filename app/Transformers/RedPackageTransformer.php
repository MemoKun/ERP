<?php

namespace App\Transformers;

use App\Models\RedPackage;
use League\Fractal\TransformerAbstract;

class RedPackageTransformer extends TransformerAbstract
{
    protected $availableIncludes = [
    ];

    public function transform(RedPackage $product)
    {
        return [
            'commodity_code' => $product->commodity_code,
            'short_name' => $product->short_name,
            'remark' => $product->remark,
            'status' => $product->status,
            'created_at' => optional($product->created_at)
                                  ->toDateTimeString(),
            'updated_at' => optional($product->updated_at)
                                  ->toDateTimeString()
        ];
    }


}