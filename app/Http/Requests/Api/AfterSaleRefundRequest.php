<?php

namespace App\Http\Requests\Api;

use Illuminate\Validation\Rule;

class AfterSaleRefundRequest extends FormRequest
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
                    'after_sale_id' => 'required|string|max:255',
                    'refund_party' => 'required|string|max:255',
                    'refund_party_name' => 'string',
                    'refund_amount' => 'integer',
                    'status' => 'boolean',
                ];
                break;
            case 'PATCH':
                return [
                    'id' => [
                        'integer',
                        Rule::exists('after_sale_refund', 'id'),
                    ],
                    'after_sale_id' => 'string|max:255',
                    'refund_party' => 'string|max:255',
                    'refund_party_name' => 'string',
                    'refund_amount' => 'integer',
                    'status' => 'boolean',
                ];
            break;
        }
    }

    public function messages()
    {
        return [
            'refund_party.required' => '责任方必填',
            'refund_party.string' => '责任方必须string类型',

            'refund_party_name.string' => '责任方姓名必须string类型',

            'refund_amount.integer' => '责任金额必须integer类型',

            'status.boolean' => '状态必须布尔类型',
            'status.required' => '状态必填',
        ];
    }

    public function attributes()
    {
        return [
            'refund_party' => '责任方',
            'refund_party_name' => '责任方姓名',
            'refund_amount' => '责任金额',
        ];
    }
}
