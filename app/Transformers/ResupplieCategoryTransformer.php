<?php

namespace App\Transformers;

use App\Models\ResupplieCategory;
use League\Fractal\TransformerAbstract;

class ResupplieCategoryTransformer extends TransformerAbstract
{
    protected $availableIncludes = [
        'resupplieOrder',
    ];

    public function transform(ResupplieCategory $resupplieCategory)
    {
        return [
            'id' => $resupplieCategory->id,
            'name' => $resupplieCategory->name,
            'status' => $resupplieCategory->status,
            'created_at' => $resupplieCategory->created_at->toDateTimeString(),
            'updated_at' => $resupplieCategory->updated_at->toDateTimeString(),
        ];
    }

    public function includeResupplieOrder(ResupplieCategory $resupplieCategory)
    {
        return $this->collection($resupplieCategory->resupplieOrder, new ResupplieOrderTransformer());
    }
}
