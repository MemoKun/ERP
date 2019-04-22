<?php

namespace App\Transformers;

use App\Models\EvalCategoryMag;
use League\Fractal\TransformerAbstract;

class EvalCategoryMagTransformer extends TransformerAbstract
{
    public function transform(EvalCategoryMag $mag)
    {
        return [
            'id'=>$mag->id,
            'eval_category' => $mag->eval_category,
            'eval_description'=>$mag->eval_description,
            'status' => $mag->status,
            'creator'=>$mag->creator,
            'created_at' => $mag->created_at
                                    ->toDateTimeString(),
            'updated_at' => $mag->updated_at
                                    ->toDateTimeString(),
        ];
    }


}