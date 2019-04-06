<?php

namespace App\Transformers;

use App\Models\AfterCompensationOrder;
use League\Fractal\TransformerAbstract;

class AfterCompensationTransformer extends TransformerAbstract
{
    
    public function transform(AfterCompensationOrder $afterCompensationOrder)
    {
        return [
            'id' => $afterCompensationOrder->id,
            'system_order_number'=>$afterCompensationOrder->system_order_number,
            'cmptn_status'=>$afterCompensationOrder->cmptn_status,
            'order_source'=>$afterCompensationOrder->order_source,
            'cmptn_direction'=>$afterCompensationOrder->cmptn_direction,
            'cmptn_shop'=>$afterCompensationOrder->cmptn_shop,
            'responsible_party'=>$afterCompensationOrder->responsible_party,
            'responsible_person'=>$afterCompensationOrder->responsible_person,
            'customer_nickname'=>$afterCompensationOrder->customer_nickname,
            'customer_name'=>$afterCompensationOrder->customer_name,
            'customer_phone'=>$afterCompensationOrder->customer_phone,
            'customer_city'=>$afterCompensationOrder->customer_city,
            'customer_address'=>$afterCompensationOrder->customer_address,
            'cmptn_fee'=>$afterCompensationOrder->cmptn_fee,
            'negotiation_date'=>$afterCompensationOrder->negotiation_date->toDateTimeString(),
            'logistics_company'=>$afterCompensationOrder->logistics_company,
            'logistics_tracking_number'=>$afterCompensationOrder->logistics_tracking_number,
            'payment_method'=>$afterCompensationOrder->payment_method,
            'order_stuff'=>$afterCompensationOrder->order_stuff,
            'order_number'=>$afterCompensationOrder->order_number,
            'problem_goods'=>$afterCompensationOrder->problem_goods,
            'problem_description'=>$afterCompensationOrder->problem_description,
            'note'=>$afterCompensationOrder->note,
            'refuse_reason'=>$afterCompensationOrder->refuse_reason,
            'is_invalid'=>$afterCompensationOrder->is_invalid,
            'fee_type'=>$afterCompensationOrder->fee_type,
            'payee'=>$afterCompensationOrder->payee,
            'payee_account'=>$afterCompensationOrder->payee_account,
            'created_at'=>optional($afterCompensationOrder->created_at)->toDateTimeString(),
            'submited_at'=>optional($afterCompensationOrder->submited_at)->toDateTimeString(),
            'audited_at'=>optional($afterCompensationOrder->audited_at)->toDateTimeString(),
        ];
    }


}