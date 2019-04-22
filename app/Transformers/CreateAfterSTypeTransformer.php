<?php

namespace App\Transformers;

use App\Models\AfterSType;
use League\Fractal\TransformerAbstract;

class CreateAfterSTypeTransformer extends TransformerAbstract
{
    protected $availableIncludes = [
        'afterSType','status'
    ];

    public function transform(AfterSType $type)
    {
        return [
            'after_s_type' => $type->after_s_type,
            'status' => $type->status
        ];
    }
}