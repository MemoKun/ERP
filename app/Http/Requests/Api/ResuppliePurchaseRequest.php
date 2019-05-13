<?php

namespace App\Http\Requests\Api;

class ResuppliePurchaseProductRequest extends FormRequest
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
            'products_id.required' => '产品id必填',
            'products_id.integer' => '产品id必须int类型',

            'product_components_id.required' => '子件id必填',
            'product_components_id.integer' => '子件id必须int类型',

            'purchase_quantity.integer' => '采购数必须int类型',

            'stock_in_count.integer' => '已入库数必须int类型',

            'remark.string' => '备注必须string类型',
            'remark.max' => '备注最大长度为255',
        ];
    }

    public function attributes()
    {
        return [
            'products_id' => '产品id',
            'product_components_id' => '子件id',
            'purchase_quantity' => '采购数',
            'stock_in_count' => '已入库数',
            'remark' => '备注',
        ];
    }
}
