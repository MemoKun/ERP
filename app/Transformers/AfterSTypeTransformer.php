<?php

namespace App\Transformers;

use App\Models\AfterSType;
use League\Fractal\TransformerAbstract;

class AfterSTypeTransformer extends TransformerAbstract
{
    public function transform(AfterSType $type)
    {
        return [
            'after_s_type' => $type->after_s_type,
            'status' => $type->status
        ];
    }


}