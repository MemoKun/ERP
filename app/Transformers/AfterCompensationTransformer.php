<?php

namespace App\Transformers;

use App\Models\AfterCompensationOrder;
use League\Fractal\TransformerAbstract;

class AfterCompensationTransformer extends TransformerAbstract
{
    protected $availableIncludes = [
        'feeType','problemProduct'
    ];

    public function transform(AfterCompensationOrder $afterCompensationOrder)
    {
        return [
            'id' => $afterCompensationOrder->id,
            'system_order_no' =>$afterCompensationOrder->system_order_no,
            'order_number' =>$afterCompensationOrder->order_number,
            'order_source' =>$afterCompensationOrder->order_source,
            'cmptn_status' =>$afterCompensationOrder->cmptn_status,
            'cmptn_shop' =>$afterCompensationOrder->cmptn_shop,
            'cmptn_direction' =>$afterCompensationOrder->cmptn_direction,
            'responsible_party' =>$afterCompensationOrder->responsible_party,
            'responsible_person' =>$afterCompensationOrder->responsible_person,
            'customer_nickname' =>$afterCompensationOrder->customer_nickname,
            'customer_name' =>$afterCompensationOrder->customer_name,
            'customer_city' =>$afterCompensationOrder->customer_city,
            'customer_phone' =>$afterCompensationOrder->customer_phone,
            'customer_address' =>$afterCompensationOrder->customer_address,
            'cmptn_fee' =>$afterCompensationOrder->cmptn_fee,
            'fee_type_id' =>$afterCompensationOrder->fee_type_id,
            'logistics_company' =>$afterCompensationOrder->logistics_company,
            'logistics_tracking_number' =>$afterCompensationOrder->logistics_tracking_number,
            'payment_method' =>$afterCompensationOrder->payment_method,
            'order_stuff' =>$afterCompensationOrder->order_stuff,
            'payee' =>$afterCompensationOrder->payee,
            'payee_account' =>$afterCompensationOrder->payee_account,
            'problem_product_id' =>$afterCompensationOrder->problem_product_id,
            'problem_description' =>$afterCompensationOrder->problem_description,
            'note' =>$afterCompensationOrder->note,
            'refuse_reason' =>$afterCompensationOrder->refuse_reason,
            'negotiation_date' =>$afterCompensationOrder->negotiation_date,
            'status' =>$afterCompensationOrder->status,
            'negotiation_date' =>optional($afterCompensationOrder->negotiation_date)->toDateString(),
            'created_at' =>optional($afterCompensationOrder->created_at)->toDateString(),
            'submited_at' =>optional($afterCompensationOrder->submited_at)->toDateString(),
            'audited_at' =>optional($afterCompensationOrder->audited_at)->toDateString(),
            'updated_at' =>optional($afterCompensationOrder->updated_at)->toDateString()
        ];
    }

    public function includeFeeType(AfterCompensationOrder $afterCompensationOrder)
    {
        return $this->item($afterCompensationOrder->feeType, new FeeTypeTransformer());
    }

    public function includeProblemProduct(AfterCompensationOrder $afterCompensationOrder)
    {
        return $this->collection($afterCompensationOrder->problemProduct,new ProblemProductTransformer());
    }



}