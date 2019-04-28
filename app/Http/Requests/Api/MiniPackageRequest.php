<?php

namespace App\Http\Requests\Api;

use Illuminate\Validation\Rule;

class MiniPackageRequest extends FormRequest
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

                ];
                break;
            case 'POST':
                return [
                    'supplier_id' => 'required|max:255',
                    'order_id' => 'required|max:255',
                    'order_name' => 'required|max:255',
                    // 'specification_id' => 'required|max:255',
                    'def_order_id' => 'required|max:255',
                    'def_order_name' => 'required|max:255',
                    // 'def_specification_id' => 'required|max:255',
                ];
                break;
            case 'PATCH':
                return [
                    'supplier_id' => 'required|max:255',
                    'order_id' => 'required|max:255',
                    'order_name' => 'required|max:255',
                    // 'specification_id' => 'required|max:255',
                    'def_order_id' => 'required|max:255',
                    'def_order_name' => 'required|max:255',
                    // 'def_specification_id' => 'required|max:255',
                ];
                break;
        }
    }

    public function message() {
        return [
            'supplier_id.required' => '供应商名称必填',
            'supplier_id.max' => '供应商最大长度为255',

            'order_id.required' => '商品编码必填',
            'order_id.max' => '商品编码最大长度为255',

            'order_name.required' => '商品编码必填',
            'order_name.max' => '商品编码最大长度为255',

            // 'specification_id.required' => '规格编码必填',
            // 'specification_id.max' => '规格编码最大长度为255',

            'def_order_id.required' => '缺失商品编码必填',
            'def_order_id.max' => '缺失商品编码最大长度为255',

            'def_order_name.required' => '缺失商品编码必填',
            'def_order_name.max' => '缺失商品编码最大长度为255',

            // 'def_specification_id.required' => '缺失规格编码必填',
            // 'def_specification_id.max' => '缺失规格编码最大长度为255'
        ];
    }
}
