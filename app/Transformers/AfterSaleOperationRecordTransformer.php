<?php

namespace App\Transformers;

use App\Models\AfterSaleOperationRecord;
use League\Fractal\TransformerAbstract;

class AfterSaleOperationRecordTransformer extends TransformerAbstract
{
    protected $availableIncludes = [
        'user','afterSale'
    ];

    public function transform(AfterSaleOperationRecord $afterSaleOperationRecord)
    {
        return [
            'id' => $afterSaleOperationRecord->id,
            'after_sale_id' => $afterSaleOperationRecord->after_sale_id,
            'user_id' => $afterSaleOperationRecord->user_id,
            'user_name' => $afterSaleOperationRecord->user_name,
            'operation' => $afterSaleOperationRecord->operation,
            'description' => $afterSaleOperationRecord->description,
            'status' => $afterSaleOperationRecord->status,
            'created_at' => optional($afterSaleOperationRecord->created_at)->toDateTimeString(),
            'updated_at' => optional($afterSaleOperationRecord->updated_at)->toDateTimeString(),
        ];
    }

    public function includeAfterSale(AfterSaleOperationRecord $afterSaleOperationRecord)
    {
        return $this->item($afterSaleOperationRecord->afterSale, new AfterSaleTransformer());
    }
}
