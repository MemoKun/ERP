<?php

namespace App\Http\Requests\Api;

use Illuminate\Validation\Rule;

class CustomerServiceRefundRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        switch ($this->method()) {
            case 'GET':
                return [
                    'status' => 'boolean',
                ];
                break;
            case 'POST':
                return [
                    'refund_sn' => 'string|max:255',
                    'order_sn' => 'string|max:255',
                    'order_no' => 'string|max:255',
                    'shops_id' => 'integer',
                    'order_source' => 'string|max:255',
                    'payment_amount' => 'numeric',
                    'payment_methods_id' => 'integer',
                    'refund_amount' => 'numeric',
                    'refund_payment_methods_id' => 'integer',
                    'refund_account' => 'string|max:255',
                    'bank' => 'string|max:255',
                    'bank_address' => 'string|max:255',
                    'refund_reason_type_id' => 'integer',
                    'buyer_nick' => 'string|max:255',
                    'buyer_name' => 'string|max:255',
                    'order_time' => 'string|max:255',
                    'order_price' => 'numeric',
                    'is_delivered' => 'boolean|max:255',
                    'receipt_type' => 'string|max:255',
                    'transaction_sn' => 'string|max:255',
                    'responsible_party' => 'string|max:255',
                    'responsible_person' => 'string|max:255',
                    'responsible_amount' => 'numeric|max:255',
                    'freight_fee' => 'numeric|max:255',
                    'business_remark' => 'string|max:255',
                    'as_remark' => 'string|max:255',
                    'f_remark' => 'string|max:255',
                    'refund_description' => 'string|max:255',
                    'taobao_refund_status' => 'numeric|max:255',
                    'creator_id' => 'string|max:255',
                    'status' => 'boolean'
                ];
                break;
            case 'PATCH':
                return [
                    'refund_sn' => 'string|max:255',
                    'order_sn' => 'string',
                    'order_no' => 'string|max:255',
                    'shops_id' => 'integer',
                    'order_source' => 'string|max:255',
                    'payment_amount' => 'numeric',
                    'payment_methods_id' => 'integer',
                    'refund_amount' => 'numeric',
                    'refund_payment_methods_id' => 'integer',
                    'refund_account' => 'string|max:255',
                    'bank' => 'string|max:255',
                    'bank_address' => 'string|max:255',
                    'refund_reason_type_id' => 'integer',
                    'buyer_nick' => 'string|max:255',
                    'buyer_name' => 'string|max:255',
                    'order_time' => 'string|max:255',
                    'order_price' => 'numeric',
                    'is_delivered' => 'boolean|max:255',
                    'receipt_type' => 'string|max:255',
                    'transaction_sn' => 'string|max:255',
                    'responsible_party' => 'string|max:255',
                    'responsible_person' => 'string|max:255',
                    'responsible_amount' => 'numeric|max:255',
                    'freight_fee' => 'numeric|max:255',
                    'business_remark' => 'string|max:255',
                    'as_remark' => 'string|max:255',
                    'f_remark' => 'string|max:255',
                    'refund_description' => 'string|max:255',
                    'creator_id' => 'string|max:255',
                    'status' => 'boolean'
                ];
                break;
        }
    }

    public function messages()
    {
        return [

        ];
    }

    public function attributes()
    {
        return [

        ];
    }
}
