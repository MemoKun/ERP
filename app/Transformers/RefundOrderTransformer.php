<?php

namespace App\Transformers;

use App\Models\RefundOrder;
use League\Fractal\TransformerAbstract;

class RefundOrderTransformer extends TransformerAbstract
{
    protected $availableIncludes = [
        'paymentMethod', 'shop', 'refundPaymentMethod', 'refundReason', 'businessPersonnel',
        'locker', 'afterSale', 'financial', 'creator'

    ];

    public function transform(RefundOrder $refundOrder)
    {
        return [
            'id' => $refundOrder->id,
            'refund_sn' => $refundOrder->refund_sn,
            'order_sn' => $refundOrder->order_sn,
            'order_no' => $refundOrder->order_no,
            'shops_id' => $refundOrder->shops_id,
            'refund_order_status' => $refundOrder->refund_order_status,
            'order_source' => $refundOrder->order_source,
            'payment_amount' => $refundOrder->payment_amount,
            'payment_methods_id' => $refundOrder->payment_methods_id,
            'refund_amount' => $refundOrder->refund_amount,
            'refund_payment_methods_id' => $refundOrder->refund_payment_methods_id,
            'refund_account' => $refundOrder->refund_account,
            'bank' => $refundOrder->bank,
            'bank_address' => $refundOrder->bank_address,
            'refund_reasons_id' => $refundOrder->refund_reasons_id,
            'buyer_nick' => $refundOrder->buyer_nick,
            'buyer_name' => $refundOrder->buyer_name,
            'order_time' => optional($refundOrder->order_time)->toDateString(),
            'order_price' => $refundOrder->order_price,
            'is_delivered' => $refundOrder->is_delivered,
            'receipt_type' => $refundOrder->receipt_type,
            'transaction_sn' => $refundOrder->transaction_sn,
            'responsible_person' => $refundOrder->responsible_person,
            'responsible_amount' => $refundOrder->responsible_amount,
            'freight_fee' => $refundOrder->freight_fee,
            'business_remark' => $refundOrder->business_remark,
            'as_remark' => $refundOrder->as_remark,
            'f_remark' => $refundOrder->f_remark,
            'refund_description' => $refundOrder->refund_description,
            'taobao_refund_status' => $refundOrder->taobao_refund_status,
            'creator_id' => $refundOrder->creator_id,
            'business_personnel_id' => $refundOrder->business_personnel_id,
            'locker_id' => $refundOrder->locker_id,
            'after_sales_id' => $refundOrder->after_sales_id,
            'financial_id'=> $refundOrder->financial_id,
            'locked_at' => optional($refundOrder->locked_at)->toDateString(),
            'cs_audit_at' => optional($refundOrder->cs_audit_at)->toDateString(),
            'as_audit_at' => optional($refundOrder->as_audit_at)->toDateString(),
            'f_audit_at'=> optional($refundOrder->f_audit_at)->toDateString(),
            'status' => $refundOrder->status,
            'created_at' => optional($refundOrder->created_at)->toDateString(),
            'updated_at' => optional($refundOrder->updated_at)->toDateString(),
        ];
    }

    public function includePaymentMethod(RefundOrder $refundOrder)
    {
        return $this->item($refundOrder->paymentMethod, new PaymentMethodTransformer());
    }

    public function includeShop(RefundOrder $refundOrder)
    {
        return $this->item($refundOrder->shop, new ShopTransformer());
    }

    public function includeRefundPaymentMethod(RefundOrder $refundOrder)
    {
        return $this->item($refundOrder->refundPaymentMethod, new PaymentMethodTransformer());
    }

    public function includeRefundReason(RefundOrder $refundOrder)
    {
        return $this->collection($refundOrder->refundReason, new RefundReasonTransformer());
    }

    public function includeCreator(RefundOrder $refundOrder)
    {
        if(!$refundOrder->creator) return ;
        return $this->item($refundOrder->creator, new UserTransformer());
    }

    public function includeBusinessPersonnel(RefundOrder $refundOrder)
    {
        if(!$refundOrder->businessPersonnel) return ;
        return $this->item($refundOrder->businessPersonnel, new UserTransformer());
    }

    public function includeLocker(RefundOrder $refundOrder)
    {
        if(!$refundOrder->locker) return ;
        return $this->item($refundOrder->locker, new UserTransformer());
    }

    public function includeAfterSale(RefundOrder $refundOrder)
    {
        if(!$refundOrder->afterSale) return ;
        return $this->item($refundOrder->afterSale, new UserTransformer());
    }

    public function includeFinancial(RefundOrder $refundOrder)
    {
        if(!$refundOrder->afterSale) return ;
        return $this->item($refundOrder->afterSale, new UserTransformer());
    }

}