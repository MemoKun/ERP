<?php

namespace App\Transformers;

use App\Models\AfterSale;
use League\Fractal\TransformerAbstract;

class AfterSaleTransformer extends TransformerAbstract
{
    protected $availableIncludes = [
        'afterSaleState','afterSaleType','afterSaleSchedules','user'
    ];

    public function transform(AfterSale $afterSale)
    {
        return [
            'id' => $afterSale->id,
            'after_sale_order_no' => $afterSale->after_sale_order_no,
            'order_status' => $afterSale->order_status,
            'shop_name' => $afterSale->shop_name,
            'shop_group' => $afterSale->shop_group,
            'order_no' => $afterSale->order_no,
            'previous_order_staff' => $afterSale->previous_order_staff,
            'vip_name' => $afterSale->vip_name,
            'client_name' => $afterSale->client_name,
            'parts_duty' => $afterSale->parts_duty,
            'after_responsible_party' => $afterSale->after_responsible_party,
            'suppliers_id' => $afterSale->suppliers_id,
            'logistic_name' => $afterSale->logistic_name,
            'logistics_id' => $afterSale->logistics_id,
            'deliver_date' => optional($afterSale->deliver_date)->toDateTimeString(),
            'order_staff' => $afterSale->order_staff,
            'after_sale_person' => $afterSale->after_sale_person,
            'order_amount' => $afterSale->order_amount,
            'after_sale_type' => $afterSale->after_sale_type,
            'after_sale_group' => $afterSale->after_sale_group,
            'after_sale_status' => $afterSale->after_sale_status,
            'order_phone' => $afterSale->order_phone,
            'problem_description' => $afterSale->problem_description,
            'customer_service_requirements' => $afterSale->customer_service_requirements,
            'receiver_state' => $afterSale->receiver_state,
            'receiver_city' => $afterSale->receiver_city,
            'receiver_district' => $afterSale->receiver_district,
            'receiver_address' => $afterSale->receiver_address,
            'create_date' => optional($afterSale->create_date)->toDateTimeString(),
            'order_remark' => $afterSale->order_remark,
            'taobao_oid' => $afterSale->taobao_oid,
            'rfe_information' => $afterSale->rfe_information,
            'rfe_order_at' => optional($afterSale->rfe_order_at)->toDateTimeString(),
            'locking_people' => $afterSale->locking_people,
            'locking_at' => optional($afterSale->locking_at)->toDateTimeString(),
            'tag_people' => $afterSale->tag_people,
            'tag_name' => $afterSale->tag_name,
            'tag_at' => optional($afterSale->tag_at)->toDateTimeString(),
            'predict_at' => optional($afterSale->predict_at)->toDateTimeString(),
            'custom_oid' => $afterSale->custom_oid,
            'is_finish' => $afterSale->is_finish,
            'is_reject' => $afterSale->is_reject,
            'refund_status' => $afterSale->refund_status,
            'return_status' => $afterSale->return_status,
            'patch_status' => $afterSale->patch_status,
            'is_refund' => $afterSale->is_refund,
            'is_return' => $afterSale->is_return,
            'is_patch' => $afterSale->is_patch,
            'is_solve' => $afterSale->is_solve,
            'after_sale_order_type' => $afterSale->after_sale_order_type,
            'is_service_submit' => $afterSale->is_service_submit,
            'service_submit_person' => $afterSale->service_submit_person,
            'service_submit_date' => optional($afterSale->service_submit_date)->toDateTimeString(),
            'is_after_sale_check' => $afterSale->is_after_sale_check,
            'after_sale_check_person' => $afterSale->after_sale_check_person,
            'after_sale_check_date' => optional($afterSale->after_sale_check_date)->toDateTimeString(),
            'is_director_check' => $afterSale->is_director_check,
            'director_check_person' => $afterSale->director_check_person,
            'director_check_date' => optional($afterSale->director_check_date)->toDateTimeString(),
            'status' => $afterSale->status,
            'is_close' => $afterSale->is_close,
            'close_date' => optional($afterSale->close_date)->toDateTimeString(),
            'status' => $afterSale->status,
            'created_at' => optional($afterSale->created_at)->toDateTimeString(),
            'updated_at' => optional($afterSale->updated_at)->toDateTimeString(),
        ];
    }

    public function includeAfterSaleState(AfterSale $afterSale)
    {
        return $this->item($afterSale->afterSaleState, new AfterSaleStateTransformer());
    }

    public function includeAfterSaleType(AfterSale $afterSale)
    {
        return $this->item($afterSale->afterSaleType, new AfterSaleTypeTransformer());
    }

    public function includeAfterSaleSchedules(AfterSale $afterSale)
    {
        return $this->collection($afterSale->afterSaleSchedules, new AfterSaleScheduleTransformer());
    }

    public function includeUser(AfterSale $afterSale)
    {
        return $this->item($afterSale->user, new UserTransformer());
    }
}