<?php

namespace App\Transformers;

use App\Models\ChangeOrder;
use League\Fractal\TransformerAbstract;

class ChangeOrderTransformer extends TransformerAbstract
{
    protected $availableIncludes = [
        'shop', 'logistic', 'freightType', 'distribution',
        'distributionMethod', 'distributionType', 'takeDeliveryGoodsWay',
        'customerType', 'paymentMethod', 'warehouses', 'orderItems', 'businessPersonnel',
        'locker', 'paymentDetails'
    ];

    public function transform(ChangeOrder $order)
    {
        return [
            'id' => $order->id,
            'change_order_no'=> $order->change_order_no,
            'order_id'=> $order->order_id,
            'applier_id'=> $order->applier_id,
            'auditor_id'=> $order->auditor_id,
            'is_canceled'=> $order->is_canceled,
            'cancel_order_no'=> $order->cancel_order_no,
            'change_remark'=> $order->change_remark,
            'change_status'=> $order->change_status,
            //
            'system_order_no' => $order->system_order_no,
            'order_status' => $order->order_status,
            'order_source' => $order->order_source,
            'shops_id' => $order->shops_id,
            'logistics_id' => $order->logistics_id,
            'billing_way' => $order->billing_way,
            'promise_ship_time' => optional($order->promise_ship_time)->toDateString(),
            'freight_types_id' => $order->freight_types_id,
            'expected_freight' => $order->expected_freight,
            'distributions_id' => $order->distributions_id,
            'distribution_methods_id' => $order->distribution_methods_id,
            'deliver_goods_fee' => $order->deliver_goods_fee,
            'move_upstairs_fee' => $order->move_upstairs_fee,
            'installation_fee' => $order->installation_fee,
            'total_distribution_fee' => $order->total_distribution_fee,
            'distribution_phone' => $order->distribution_phone,
            'distribution_no' => $order->distribution_no,
            'distribution_types_id' => $order->distribution_types_id,
            'service_car_info' => $order->service_car_info,
            'take_delivery_goods_fee' => $order->take_delivery_goods_fee,
            'take_delivery_goods_ways_id' => $order->take_delivery_goods_ways_id,
            'express_fee' => $order->express_fee,
            'service_car_fee' => $order->service_car_fee,
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
            'logistics_remark' => $order->logistics_remark,
            'seller_remark' => $order->seller_remark,
            'customer_service_remark' => $order->customer_service_remark,
            'taobao_oid' => $order->taobao_oid,
            'taobao_tid' => $order->taobao_tid,
            'member_nick' => $order->member_nick,
            'shop_name' => $order->shop_name,
            'seller_name' => $order->seller_name,
            'seller_flag' => $order->seller_flag,
            'created' => optional($order->created)->toDateTimeString(),
            'est_con_time' => optional($order->est_con_time)->toDateTimeString(),
            'buyer_message' => $order->buyer_message,
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
            'audit_at' => optional($order->audit_at)->toDateTimeString(),
            'association_taobao_oid' => $order->association_taobao_oid,
            'is_merge' => $order->is_merge,
            'is_split' => $order->is_split,
            'is_association' => $order->is_association,
            'submitted_at' => optional($order->submitted_at)->toDateTimeString(),
            'created_at' => $order->created_at
                                  ->toDateTimeString(),
            'updated_at' => $order->updated_at
                                  ->toDateTimeString()
        ];
    }

    public function includeShop(ChangeOrder $order)
    {
        return $this->item($order->shop, new ShopTransformer());
    }

    public function includeLogistic(ChangeOrder $order)
    {
        return $this->item($order->logistic, new LogisticsTransformer());
    }

    public function includeFreightType(ChangeOrder $order)
    {
        return $this->item($order->freightType, new FreightTypeTransformer());
    }

    public function includeDistribution(ChangeOrder $order)
    {
        return $this->item($order->distribution, new DistributionTransformer());
    }

    public function includeDistributionMethod(ChangeOrder $order)
    {
        return $this->item($order->distributionMethod, new DistributionMethodTransformer());
    }

    public function includeDistributionType(ChangeOrder $order)
    {
        return $this->item($order->distributionType, new DistributionTypeTransformer());
    }

    public function includeTakeDeliveryGoodsWay(ChangeOrder $order)
    {
        return $this->item($order->takeDeliveryGoodsWay, new TakeDeliveryGoodsWayTransformer());
    }

    public function includeCustomerType(ChangeOrder $order)
    {
        return $this->item($order->customerType, new CustomerTypeTransformer());
    }

    public function includePaymentMethod(ChangeOrder $order)
    {
        return $this->item($order->paymentMethod, new PaymentMethodTransformer());
    }

    public function includeWarehouses(ChangeOrder $order)
    {
        return $this->item($order->warehouses, new WarehouseTransformer());
    }

    public function includeOrderItems(ChangeOrder $order)
    {
        return $this->collection($order->orderItems, new OrderItemTransformer());
    }

    public function includePaymentDetails(ChangeOrder $order)
    {
        return $this->collection($order->paymentDetails, new PaymentDetailTransformer());
    }

    public function includeBusinessPersonnel(ChangeOrder $order)
    {
        if(!$order->locker) return ;
        return $this->item($order->businessPersonnel, new UserTransformer());
    }

    public function includeLocker(ChangeOrder $order)
    {
        if(!$order->locker) return ;
        return $this->item($order->locker, new UserTransformer());
    }

    public function includeUser(ChangeOrder $order)
    {
        return $this->item($order->user, new UserTransformer());
    }




}