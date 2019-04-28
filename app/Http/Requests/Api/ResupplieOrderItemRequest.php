<?php

namespace App\Http\Requests\Api;

use Illuminate\Validation\Rule;

class ResupplieOrderItemProductRequest extends FormRequest
{
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
                    'combinations_id' => [
                        'required', 'integer',
                        Rule::exists('combinations', 'id')->where(function ($query) {
                            $query->where('status', 1);
                        }),
                    ],
                    'quantity' => 'integer',
                    'actual_price' => 'numeric',
                    'remark' => 'string|max:255',
                ];
                break;
            case 'PATCH':
                return [];
                break;
        }
    }

    public function messages()
    {
        return [
            'combinations_id.required' => '组合sku_id名称必填',
            'combinations_id.integer' => '组合sku_id必须int类型',

            'product_components_id.required' => '子件id名称必填',
            'product_components_id.integer' => '子件id必须int类型',

            'quantity.integer' => '数量必须int类型',

            'actual_price.numeric' => '实际售价必须是数字',

            'remark.string' => '备注必须string类型',
            'remark.max' => '备注最大长度为255',
        ];
    }

    public function attributes()
    {
        return [
            'combinations_id' => '组合sku_id',
            'product_components_id' => '子件id',
            'quantity' => '数量',
            'actual_price' => '实际售价',
            'remark' => '备注',
        ];
    }
}
