<?php

namespace App\Transformers;

use App\Models\EvalCategoryMag;
use League\Fractal\TransformerAbstract;

class EvalCategoryMagTransformer extends TransformerAbstract
{
    protected $availableIncludes = [
        'evalCategoryMag','note','status','creator','createdAt'
    ];

    public function transform(EvalCategoryMag $type)
    {
        return [
            'eval_category_mag' => $type->after_s_type,
            'note'=>$type->note,
            'status' => $type->status,
            'creator'=>$type->creator,
            'created_at'=>$type->created_at
        ];
    }


}