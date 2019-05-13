<?php

namespace App\Transformers;

use App\Models\ResupplieEsheet;
use League\Fractal\TransformerAbstract;

class ResupplieEsheetTransformer extends TransformerAbstract
{
    protected $availableIncludes = [
        'resupplieOrder',
    ];

    public function transform(ResupplieEsheet $resupplieEsheet)
    {
        return [
            'id' => $resupplieEsheet->id,
            'esheet_no' => $resupplieEsheet->esheet_no,
            'status' => $resupplieEsheet->status,
            'created_at' => $resupplieEsheet->created_at->toDateTimeString(),
            'updated_at' => $resupplieEsheet->updated_at->toDateTimeString(),
        ];
    }

    public function includeResupplieOrder(ResupplieEsheet $resupplieEsheet)
    {
        return $this->collection($resupplieEsheet->resupplieOrder, new ResupplieOrderTransformer());
    }
}
