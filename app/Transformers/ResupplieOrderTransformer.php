<?php

namespace App\Transformers;

use App\Models\ResupplieOrder;
use League\Fractal\TransformerAbstract;

class ResupplieOrderTransformer extends TransformerAbstract
{
    protected $availableIncludes = [
        'packageType', 'resupplieCategory', 'resupplieResponsible',
        'freightType', 'supplier', 'logistic', 'distributionMethod',
        'refundMethod', 'resupplieOrderItem', 'resupplieProblemProduct',
    ];

    public function transform(ResupplieOrder $resupplieOrder)
    {
        return [
            'id' => $resupplieOrder->id,
            'resupply_order_no' => $resupplieOrder->resupply_order_no,
            'system_order_no' => $resupplieOrder->system_order_no,
            'package_types_id' => $resupplieOrder->package_types_id,
            're_supplie_categories_id' => $resupplieOrder->re_supplie_categories_id,
            'resupply_cost' => $resupplieOrder->resupply_cost,
            'resupply_money' => $resupplieOrder->resupply_money,
            'resupply_reason' => $resupplieOrder->resupply_reason,
            'resupply_remark' => $resupplieOrder->resupply_remark,
            're_supplie_responsibles_id' => $resupplieOrder->re_supplie_responsibles_id,
            'salesman' => $resupplieOrder->salesman,
            'shop_nick' => $resupplieOrder->shop_nick,
            'member_nick' => $resupplieOrder->member_nick,
            'shop_group' => $resupplieOrder->shop_group,
            'member_name' => $resupplieOrder->member_name,
            'member_phone' => $resupplieOrder->member_phone,
            'suppliers_id' => $resupplieOrder->suppliers_id,
            'logistics_id' => $resupplieOrder->logistics_id,
            'express_no' => $resupplieOrder->express_no,
            'distribution_methods_id' => $resupplieOrder->distribution_methods_id,
            'freight_types_id' => $resupplieOrder->freight_types_id,
            'estimated_fee' => $resupplieOrder->estimated_fee,
            'compensate_fee' => $resupplieOrder->compensate_fee,
            'wooden_frame_fee' => $resupplieOrder->wooden_frame_fee,
            'load_fee' => $resupplieOrder->load_fee,
            'promise_time' => optional($resupplieOrder->promise_time)->toDateTimeString(),
            'refund_methods_id' => $resupplieOrder->refund_methods_id,
            'refund_account' => $resupplieOrder->refund_account,
            'bank' => $resupplieOrder->bank,
            'mark_name' => $resupplieOrder->mark_name,
            'marker' => $resupplieOrder->marker,
            'mark_time' => optional($resupplieOrder->mark_time)->toDateTimeString(),
            'creator' => $resupplieOrder->creator,
            'submitter' => $resupplieOrder->submitter,
            'reviewer' => $resupplieOrder->reviewer,
            'consigner' => $resupplieOrder->consigner,
            'consign_warehouse' => $resupplieOrder->consign_warehouse,
            'consign_remark' => $resupplieOrder->consign_remark,
            'created_at' => optional($resupplieOrder->created_at)->toDateTimeString(),
            'submit_time' => optional($resupplieOrder->submit_time)->toDateTimeString(),
            'review_time' => optional($resupplieOrder->review_time)->toDateTimeString(),
            'settle_time' => optional($resupplieOrder->settle_time)->toDateTimeString(),
            'system_consign_time' => optional($resupplieOrder->system_consign_time)->toDateTimeString(),
            'real_consign_time' => optional($resupplieOrder->real_consign_time)->toDateTimeString(),
            'is_submit' => $resupplieOrder->is_submit,
            'is_review' => $resupplieOrder->is_review,
            'is_consign' => $resupplieOrder->is_consign,
            'is_invalid' => $resupplieOrder->is_invalid,
            'square_number' => $resupplieOrder->square_number,
            'number' => $resupplieOrder->number,
            'application_mark_name' => $resupplieOrder->application_mark_name,
            'review_mark_name' => $resupplieOrder->review_mark_name,
            'real_consign_time_1' => optional($resupplieOrder->real_consign_time_1)->toDateTimeString(),
            'warehousing_status' => $resupplieOrder->warehousing_status,
            'is_purchase' => $resupplieOrder->is_purchase,
            'status' => $resupplieOrder->status,
            'updated_at' => optional($resupplieOrder->updated_at)
                                  ->toDateTimeString(),
            'remark' => $resupplieOrder->remark,
        ];
    }

    public function includePackageType(ResupplieOrder $resupplieOrder)
    {
        return $this->item($resupplieOrder->packageType, new PackageTypeTransformer());
    }

    public function includeResupplieCategory(ResupplieOrder $resupplieOrder)
    {
        return $this->item($resupplieOrder->resupplieCategory, new ResupplieCategoryTransformer());
    }

    public function includeResupplieResponsible(ResupplieOrder $resupplieOrder)
    {
        return $this->item($resupplieOrder->resupplieResponsible, new ResupplieResponsibleTransformer());
    }

    public function includeFreightType(ResupplieOrder $resupplieOrder)
    {
        return $this->item($resupplieOrder->freightType, new FreightTypeTransformer());
    }

    public function includeSupplier(ResupplieOrder $resupplieOrder)
    {
        return $this->item($resupplieOrder->supplier, new SupplierTransformer());
    }

    public function includeLogistic(ResupplieOrder $resupplieOrder)
    {
        return $this->item($resupplieOrder->logistic, new LogisticsTransformer());
    }

    public function includeDistributionMethod(ResupplieOrder $resupplieOrder)
    {
        return $this->item($resupplieOrder->distributionMethod, new DistributionMethodTransformer());
    }

    public function includeRefundMethod(ResupplieOrder $resupplieOrder)
    {
        return $this->item($resupplieOrder->refundMethod, new RefundMethodTransformer());
    }

    public function includeResupplieOrderItem(ResupplieOrder $resupplieOrder)
    {
        return $this->collection($resupplieOrder->resupplieOrderItem, new ResupplieOrderItemTransformer());
    }

    public function includeResupplieProblemProduct(ResupplieOrder $resupplieOrder)
    {
        return $this->collection($resupplieOrder->resupplieProblemProduct, new ResupplieProblemProductTransformer());
    }
}
