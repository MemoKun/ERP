<?php

namespace App\Transformers;

use App\Models\EvalCategoryMag;
use League\Fractal\TransformerAbstract;

class EvalCategoryMagTransformer extends TransformerAbstract
{
    public function transform(EvalCategoryMag $type)
    {
        return [
            'name' => $type->name,
            'note'=>$type->note,
            'status' => $type->status,
            'creator'=>$type->creator,
            'created_at' => $type->created_at
                                    ->toDateTimeString(),
            'updated_at' => $type->updated_at
                                    ->toDateTimeString(),
        ];
    }


}