<?php

namespace App\Transformers;

use App\Models\ResupplieResponsible;
use League\Fractal\TransformerAbstract;

class ResupplieResponsibleTransformer extends TransformerAbstract
{
    protected $availableIncludes = [
        'resupplieOrder'
    ];

    public function transform(ResupplieResponsible $resupplieResponsible)
    {
        return [
            'id' => $resupplieResponsible->id,
            'name' => $resupplieResponsible->name,
            'status' => $resupplieResponsible->status,
            'created_at' => $resupplieResponsible->created_at->toDateTimeString(),
            'updated_at' => $resupplieResponsible->updated_at->toDateTimeString(),
        ];
    }

    public function includeResupplieOrder(ResupplieResponsible $resupplieResponsible)
    {
        return $this->collection($resupplieResponsible->resupplieOrder, new ResupplieOrderTransformer());
    }
}