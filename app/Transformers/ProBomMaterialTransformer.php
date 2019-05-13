<?php

namespace App\Transformers;

use App\Models\ProBomMaterial;
use League\Fractal\TransformerAbstract;

class ProBomMaterialTransformer extends TransformerAbstract
{
    protected $availableIncludes = [
        'proBom',
    ];

    public function transform(ProBomMaterial $proBomMaterial)
    {
        return[
            'id' => $proBomMaterial->id,
            'pro_bom_id' => $proBomMaterial->pro_bom_id,
            'material_code' => $proBomMaterial->material_code,
            'spec_code' => $proBomMaterial->spec_code,
            'material_name' => $proBomMaterial->material_name,
            'spec' => $proBomMaterial->spec,
            'color' => $proBomMaterial->color,
            'material_quality' => $proBomMaterial->material_quality,
            'special' => $proBomMaterial->special,
            'other' => $proBomMaterial->other,
            'volume' => $proBomMaterial->volume,
            'weight' => $proBomMaterial->weight,
            'unit' => $proBomMaterial->unit,
            'semi_finished' => $proBomMaterial->semi_finished,
            'status' => $proBomMaterial->status,
            'need' => $proBomMaterial->need,
            'created_at' => $proBomMaterial->created_at
                                    ->toDateTimeString(),
            'updated_at' => $proBomMaterial->updated_at
                                    ->toDateTimeString(),
        ];
    }

    public function includeProBom(ProBomMaterial $proBomMaterial)
    {
        return $this->item($proBomMaterial->proBom, new ProBomTransformer());
    }
}
