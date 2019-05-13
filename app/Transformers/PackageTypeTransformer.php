<?php

namespace App\Transformers;

use App\Models\PackageType;
use League\Fractal\TransformerAbstract;

class PackageTypeTransformer extends TransformerAbstract
{
    protected $availableIncludes = [
        'resupplieOrder'
    ];

    public function transform(PackageType $packageType)
    {
        return [
            'id' => $packageType->id,
            'name' => $packageType->name,
            'status' => $packageType->status,
            'created_at' => $packageType->created_at->toDateTimeString(),
            'updated_at' => $packageType->updated_at->toDateTimeString(),
        ];
    }

    public function includeResuppliedOrder(PackageType $packageType)
    {
        return $this->collection($packageType->resupplieOrder, new ResupplieOrderTransformer());
    }
}