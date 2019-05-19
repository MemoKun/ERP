<?php

namespace App\Transformers;

use App\Models\ProBom;
use League\Fractal\TransformerAbstract;

class ProBomTransformer extends TransformerAbstract
{
    protected $availableIncludes = [
        'proBomMaterial',
    ];

    public function transform(ProBom $proBom)
    {
        return[
            'id' => $proBom->id,
            'commodity_code' => $proBom->commodity_code,
            'spec_code' => $proBom->spec_code,
            'short_name' => $proBom->short_name,
            'spec' => $proBom->spec,
            'color' => $proBom->color,
            'material_quality' => $proBom->material_quality,
            'special' => $proBom->special,
            'other' => $proBom->other,
            'status' => $proBom->status,
            'created_at' => $proBom->created_at
                                    ->toDateTimeString(),
            'updated_at' => $proBom->updated_at
                                    ->toDateTimeString(),
        ];
    }

    public function includeProBomMaterial(ProBom $proBom)
    {
        return $this->collection($proBom->proBomMaterial, new ProBomMaterialTransformer());
    }
}
