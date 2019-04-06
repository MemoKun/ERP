<?php

namespace App\Transformers;

use App\Models\EvalCategoryMag;
use League\Fractal\TransformerAbstract;

class EvalCategoryMagTransformer extends TransformerAbstract
{
    public function transform(EvalCategoryMag $type)
    {
        return [
            'eval_category' => $type->eval_category,
            'note'=>$type->note,
            'status' => $type->status,
            'creator'=>$type->creator,
            'created_at'=>$type->created_at
        ];
    }


}