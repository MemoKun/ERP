<?php

namespace App\Transformers;

use App\Models\RelateLogisticsCompany;
use League\Fractal\TransformerAbstract;

class RelateLogisticsCompanyTransformer extends TransformerAbstract
{
    protected $availableIncludes = [
        'relateLogistics',
    ];

    public function transform(RelateLogisticsCompany $relateLogisticsCompany)
    {
        return [
            'id' => $relateLogisticsCompany->id,
            'relate_logistics_id' => $relateLogisticsCompany->relate_logistics_id,
            'code' => $relateLogisticsCompany->code,
            'logistics_name' => $relateLogisticsCompany->logistics_name,
            'status' => $relateLogisticsCompany->status,
            'created_at' => $relateLogisticsCompany->created_at
                                    ->toDateTimeString(),
            'updated_at' => $relateLogisticsCompany->updated_at
                                    ->toDateTimeString(),
        ];
    }

    public function includeRelateLogistics(RelateLogisticsCompany $relateLogisticsCompany)
    {
        return $this->item($relateLogisticsCompany->relateLogistics, new RelateLogisticsTransformer());
    }
}
