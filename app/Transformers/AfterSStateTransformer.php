<?php

namespace App\Transformers;

use App\Models\AfterSState;
use League\Fractal\TransformerAbstract;

class AfterSStateTransformer extends TransformerAbstract
{
    protected $availableIncludes = [
        'afterSState'
    ];

    public function transform(AfterSState $state)
    {
        return [
            'after_s_state' => $state->after_s_state
        ];
    }


}