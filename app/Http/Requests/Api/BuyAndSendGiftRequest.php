<?php

namespace App\Http\Requests\Api;

use Illuminate\Validation\Rule;

class BuyAndSendGiftRequest extends FormRequest
{
    public function rules()
    {
        switch ($this->method()) {
            case'GET':
                return[
                    'status' => 'boolean',
                ];
                break;
            case'POST':
                return[
                    'buy_and_send_gift.*.commodity_code' => 'required|string|max:255',
                    'buy_and_send_gift.*.spec_code' => 'required|string|max:255',
                    'buy_and_send_gift.*.short_name' => 'required|string|max:255',
                    'buy_and_send_gift.*.spec_name' => 'required|string|max:255',
                    'buy_and_send_gift.*.quantity' => 'integer',
                    'buy_and_send_gift.*.status' => 'boolean',
                ];
                break;
            case'PATCH':
                return[
                    'buy_and_send_gift.*.id' => [
                        'integer',
                        Rule::exists('buy_and_send_gift', 'id'),
                    ],
                    'buy_and_send_gift.*.commodity_code' => 'required|string|max:255',
                    'buy_and_send_gift.*.spec_code' => 'required|string|max:255',
                    'buy_and_send_gift.*.short_name' => 'required|string|max:255',
                    'buy_and_send_gift.*.spec_name' => 'required|string|max:255',
                    'buy_and_send_gift.*.quantity' => 'integer',
                    'buy_and_send_gift.*.status' => 'boolean',
                ];
                break;
        }
    }

    public function messages()
    {
        return [
            'commodity_code.required' => '商品编码必填',
            'commodity_code.string' => '商品编码必须string类型',
            'commodity_code.max' => '商品编码最大长度为255',

            'spec_code.required' => '规格编码必填',
            'spec_code.string' => '规格编码必须string类型',
            'spec_code.max' => '规格编码最大长度为255',

            'short_name.required' => '商品编码必填',
            'short_name.string' => '商品编码必须string类型',
            'short_name.max' => '商品编码最大长度为255',

            'spec_name.required' => '规格名称必填',
            'spec_name.string' => '规格名称必须string类型',
            'spec_name.max' => '规格名称最大长度为255',

            'quantity.integer' => '数量必须int类型',
        ];
    }

    public function attributes()
    {
        return[
            'commodity_code' => '商品编码',
            'sepc_code' => '规格编码',
            'short_name' => '商品简称',
            'sepc_name' => '规格名称',
            'quantity' => '数量',
        ];
    }
}
