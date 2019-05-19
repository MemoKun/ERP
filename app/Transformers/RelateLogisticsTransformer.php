<?php

namespace App\Transformers;

use App\Models\RelateLogistics;
use League\Fractal\TransformerAbstract;

class RelateLogisticsTransformer extends TransformerAbstract
{
    protected $availableIncludes = [
        'relateLogisticsCompany',
    ];

    public function transform(RelateLogistics $relateLogistics)
    {
        return [
            'id' => $relateLogistics->id,
            'username' => $relateLogistics->username,
            'name' => $relateLogistics->name,
            'phone' => $relateLogistics->phone,
            'status' => $relateLogistics->status,
            'created_at' => $relateLogistics->created_at
                                    ->toDateTimeString(),
            'updated_at' => $relateLogistics->updated_at
                                    ->toDateTimeString(),
        ];
    }

    public function includeRelateLogisticsCompany(RelateLogistics $relateLogistics)
    {
        return $this->collection($relateLogistics->relateLogisticsCompany, new RelateLogisticsCompanyTransformer());
    }
}
