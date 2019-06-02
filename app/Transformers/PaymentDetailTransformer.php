<?php

namespace App\Transformers;

use App\Models\PaymentDetail;
use League\Fractal\TransformerAbstract;

class PaymentDetailTransformer extends TransformerAbstract
{
    protected $availableIncludes = [
        'order', 'paymentMethod',
    ];

    public function transform(PaymentDetail $paymentDetail)
    {
        return [
            'id' => $paymentDetail->id,
            'orders_id' => $paymentDetail->orders_id,
            'payment_methods_id' => $paymentDetail->payment_methods_id,
            'payment' => $paymentDetail->payment,
            'taobao_tid' => $paymentDetail->taobao_tid,
            'taobao_oid' => $paymentDetail->taobao_oid,
            'pay_time' => optional($paymentDetail->pay_time)->toDateString(),
            'remark' => $paymentDetail->remark,
            'created_at' => $paymentDetail->created_at
                                  ->toDateTimeString(),
            'updated_at' => $paymentDetail->updated_at
                                  ->toDateTimeString(),
        ];
    }

    public function includeOrder(PaymentDetail $paymentDetail)
    {
        if (!$paymentDetail->order) {
            return;
        }
        return $this->item($paymentDetail->order, new OrderTransformer());
    }

    public function includeChangeOrder(PaymentDetail $paymentDetail)
    {
        return $this->item($paymentDetail->order, new ChangeOrderTransformer());
    }

    public function includePaymentMethod(PaymentDetail $paymentDetail)
    {
        return $this->item($paymentDetail->paymentMethod, new PaymentMethodTransformer());
    }
}
