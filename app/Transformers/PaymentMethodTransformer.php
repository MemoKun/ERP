<?php

namespace App\Transformers;

use App\Models\PaymentMethod;
use League\Fractal\TransformerAbstract;

class PaymentMethodTransformer extends TransformerAbstract
{
    protected $availableIncludes = [
        'orders', 'paymentDetails', 'refundOrders',
    ];

    public function transform(PaymentMethod $paymentMethod)
    {
        return [
            'id' => $paymentMethod->id,
            'name' => $paymentMethod->name,
            'status' => $paymentMethod->status,
            'created_at' => $paymentMethod->created_at
                                    ->toDateTimeString(),
            'updated_at' => $paymentMethod->updated_at
                                    ->toDateTimeString(),
        ];
    }

    public function includeOrders(PaymentMethod $paymentMethod)
    {
        return $this->collection($paymentMethod->orders, new OrderTransformer());
    }

    public function includePaymentDetails(PaymentMethod $paymentMethod)
    {
        return $this->collection($paymentMethod->paymentDetails, new PaymentDetailTransformer());
    }

    public function includeRefundOrders(PaymentMethod $paymentMethod)
    {
        return $this->collection($paymentMethod->refundOrders, new RefundOrderTransformer());
    }
}
