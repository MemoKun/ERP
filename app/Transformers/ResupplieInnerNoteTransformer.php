<?php

namespace App\Transformers;

use App\Models\ResupplieInnerNote;
use League\Fractal\TransformerAbstract;

class ResupplieInnerNoteTransformer extends TransformerAbstract
{
    protected $availableIncludes = [
        'resupplieOrder',
    ];

    public function transform(ResupplieInnerNote $resupplieInnerNote)
    {
        return [
            'id' => $resupplieInnerNote->id,
            'theme' => $resupplieInnerNote->theme,
            'user_name' => $resupplieInnerNote->user_name,
            'content' => $resupplieInnerNote->content,
            'status' => $resupplieInnerNote->status,
            'created_at' => $resupplieInnerNote->created_at->toDateTimeString(),
            'updated_at' => $resupplieInnerNote->updated_at->toDateTimeString(),
        ];
    }

    public function includeResupplieOrder(ResupplieInnerNote $resupplieInnerNote)
    {
        return $this->collection($resupplieInnerNote->resupplieOrder, new ResupplieOrderTransformer());
    }
}
