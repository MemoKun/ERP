<?php

namespace App\Transformers;

use App\Models\Order;
use League\Fractal\TransformerAbstract;

class OrderTransformer extends TransformerAbstract
{
    protected $availableIncludes = [
        'shop', 'logistic', 'freightType', 'distribution',
        'distributionMethod', 'distributionType', 'takeDeliveryGoodsWay',
        'customerType', 'paymentMethod', 'warehouses', 'orderItems', 'businessPersonnel',
        'locker', 'paymentDetails', 'resupplieOrder', 'csAudit', 'applier', 'orderOperationRecord',
    ];

    public function transform(Order $order)
    {
        return [
            'id' => $order->id,
            'system_order_no' => $order->system_order_no,
            'order_status' => $order->order_status,
            'order_source' => $order->order_source,
            'order_amount' => $order->order_amount,
            'shops_id' => $order->shops_id,
            'shop_name' => $order->shop_name,
            'logistics_id' => $order->logistics_id,
            'logistics_sn' => $order->logistics_sn,
            'billing_way' => $order->billing_way,
            'promise_ship_time' => optional($order->promise_ship_time)->toDateString(),
            'freight_types_id' => $order->freight_types_id,
            'expected_freight' => $order->expected_freight,
            'actual_freight' => $order->actual_freight,
            'logistics_remark' => $order->logistics_remark,
            'is_logistics_checked' => $order->is_logistics_checked,
            'logistics_check_remark' => $order->logistics_check_remark,
            'logistics_checked_at' => optional($order->logistics_checked_at)->toDateString(),
            'distributions_id' => $order->distributions_id,
            'distribution_methods_id' => $order->distribution_methods_id,
            'deliver_goods_fee' => $order->deliver_goods_fee,
            'move_upstairs_fee' => $order->move_upstairs_fee,
            'installation_fee' => $order->installation_fee,
            'total_distribution_fee' => $order->total_distribution_fee,
            'distribution_phone' => $order->distribution_phone,
            'distribution_no' => $order->distribution_no,
            'distribution_types_id' => $order->distribution_types_id,
            'is_distribution_checked' => $order->is_distribution_checked,
            'distribution_check_remark' => $order->distribution_check_remark,
            'distribution_checked_at' => optional($order->distribution_checked_at)->toDateString(),
            'service_car_fee' => $order->service_car_fee,
            'service_car_info' => $order->service_car_info,
            'take_delivery_goods_fee' => $order->take_delivery_goods_fee,
            'take_delivery_goods_ways_id' => $order->take_delivery_goods_ways_id,
            'express_fee' => $order->express_fee,
            'cancel_after_verification_code' => $order->cancel_after_verification_code,
            'wooden_frame_costs' => $order->wooden_frame_costs,
            'preferential_cashback' => $order->preferential_cashback,
            'favorable_cashback' => $order->favorable_cashback,
            'customer_types_id' => $order->customer_types_id,
            'is_invoice' => $order->is_invoice,
            'invoice_express_fee' => $order->invoice_express_fee,
            'express_invoice_title' => $order->express_invoice_title,
            'contract_no' => $order->contract_no,
            'payment_methods_id' => $order->payment_methods_id,
            'deposit' => $order->deposit,
            'document_title' => $order->document_title,
            'warehouses_id' => $order->warehouses_id,
            'payment_date' => optional($order->payment_date)->toDateString(),
            'interest_concessions' => $order->interest_concessions,
            'is_notice' => $order->is_notice,
            'is_cancel_after_verification' => $order->is_cancel_after_verification,
            'accept_order_user' => $order->accept_order_user,
            'tax_number' => $order->tax_number,
            'receipt' => $order->receipt,
            'is_logistics_checked' => $order->is_logistics_checked,
            'logistics_remark' => $order->logistics_remark,
            'logistics_check_remark' => $order->logistics_check_remark,
            'logistics_checked_at' => optional($order->logistics_checked_at)->toDateTimeString(),
            'is_goods_checked' => $order->is_goods_checked,
            'goods_check_remark' => $order->goods_check_remark,
            'goods_checked_at' => optional($order->goods_checked_at)->toDateTimeString(),
            'buyer_message' => $order->buyer_message,
            'seller_remark' => $order->seller_remark,
            'customer_service_remark' => $order->customer_service_remark,
            'stockout_remark' => $order->stockout_remark,
            'taobao_oid' => $order->taobao_oid,
            'taobao_tid' => $order->taobao_tid,
            'member_nick' => $order->member_nick,
            'seller_name' => $order->seller_name,
            'seller_flag' => $order->seller_flag,
            'created' => optional($order->created)->toDateString(),
            'est_con_time' => optional($order->est_con_time)->toDateString(),
            'receiver_name' => $order->receiver_name,
            'receiver_phone' => $order->receiver_phone,
            'receiver_mobile' => $order->receiver_mobile,
            'receiver_state' => $order->receiver_state,
            'receiver_city' => $order->receiver_city,
            'receiver_district' => $order->receiver_district,
            'receiver_address' => $order->receiver_address,
            'receiver_zip' => $order->receiver_zip,
            'refund_info' => $order->refund_info,
            'business_personnel_id' => $order->business_personnel_id,
            'locker_id' => $order->locker_id,
            'locked_at' => optional($order->locked_at)->toDateString(),
            'auditor_id' => $order->auditor_id,
            'audit_at' => optional($order->audit_at)->toDateString(),
            'cs_auditor_id' => $order->cs_auditor_id,
            'cs_audited_at' => optional($order->cs_audited_at)->toDateString(),
            'fd_auditor_id' => $order->fd_auditor_id,
            'fd_audited_at' => optional($order->fd_audited_at)->toDateString(),
            'ca_auditor_id' => $order->ca_auditor_id,
            'ca_audited_at' => optional($order->ca_audited_at)->toDateString(),
            'stockout_op_id' => $order->stockout_op_id,
            'stockout_at' => optional($order->stockout_at)->toDateString(),
            'association_taobao_oid' => $order->association_taobao_oid,
            'is_merge' => $order->is_merge,
            'is_split' => $order->is_split,
            'is_association' => $order->is_association,
            'stockout_at' => optional($order->stockout_at)->toDateTimeString(),
            'stockout_remark' => $order->stockout_remark,
            'created_at' => optional($order->created_at)->toDateTimeString(),
            'updated_at' => optional($order->updated_at)->toDateTimeString(),
            'status' => $order->status,
        ];
    }

    public function includeShop(Order $order)
    {
        return $this->item($order->shop, new ShopTransformer());
    }

    public function includeLogistic(Order $order)
    {
        return $this->item($order->logistic, new LogisticsTransformer());
    }

    public function includeFreightType(Order $order)
    {
        return $this->item($order->freightType, new FreightTypeTransformer());
    }

    public function includeDistribution(Order $order)
    {
        return $this->item($order->distribution, new DistributionTransformer());
    }

    public function includeDistributionMethod(Order $order)
    {
        return $this->item($order->distributionMethod, new DistributionMethodTransformer());
    }

    public function includeDistributionType(Order $order)
    {
        return $this->item($order->distributionType, new DistributionTypeTransformer());
    }

    public function includeTakeDeliveryGoodsWay(Order $order)
    {
        return $this->item($order->takeDeliveryGoodsWay, new TakeDeliveryGoodsWayTransformer());
    }

    public function includeCustomerType(Order $order)
    {
        return $this->item($order->customerType, new CustomerTypeTransformer());
    }

    public function includePaymentMethod(Order $order)
    {
        return $this->item($order->paymentMethod, new PaymentMethodTransformer());
    }

    public function includeWarehouses(Order $order)
    {
        return $this->item($order->warehouses, new WarehouseTransformer());
    }

    public function includeOrderItems(Order $order)
    {
        return $this->collection($order->orderItems, new OrderItemTransformer());
    }

    public function includePaymentDetails(Order $order)
    {
        return $this->collection($order->paymentDetails, new PaymentDetailTransformer());
    }

    public function includeBusinessPersonnel(Order $order)
    {
        if (!$order->business_personnel_id) {
            return;
        }
        return $this->item($order->businessPersonnel, new UserTransformer());
    }

    public function includeLocker(Order $order)
    {
        if (!$order->locker) {
            return;
        }

        return $this->item($order->locker, new UserTransformer());
    }

    public function includeCsAudit(Order $order)
    {
        return $this->item($order->csAudit, new UserTransformer());
    }

    public function includeApplier(Order $order)
    {
        return $this->item($order->applier, new UserTransformer());
    }

    public function includeUser(Order $order)
    {
        return $this->item($order->user, new UserTransformer());
    }

    public function includeResupplieOrder(Order $order)
    {
        return $this->collection($order->resupplieOrder, new ResupplieOrderTransformer());
    }

    public function includeOrderOperationRecord(Order $order)
    {
        return $this->collection($order->orderOperationRecord, new OrderOperationRecordTransformer());
    }
}
