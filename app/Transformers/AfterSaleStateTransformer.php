<?php

namespace App\Transformers;

use App\Models\AfterSaleState;
use League\Fractal\TransformerAbstract;

class AfterSaleStateTransformer extends TransformerAbstract
{
    public function transform(AfterSaleState $state)
    {
        return [
            'id' => $state->id,
            'name' => $state->name,
            'status' => $state->status,
            'created_at' => $state->created_at
                                    ->toDateTimeString(),
            'updated_at' => $state->updated_at
                                    ->toDateTimeString(),
        ];
    }
}
