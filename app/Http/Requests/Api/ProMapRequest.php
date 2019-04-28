<?php

namespace App\Http\Requests\Api;

class ProMapRequest extends FormRequest
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
                return [];
                break;
            case 'POST':
                return [
                    'order_id' => 'required|max:255',
                    'order_name' => 'required|max:255',
                    // 'specification_id' => 'required|max:255',
                    'map_order_id' => 'required|max:255',
                    'map_order_name' => 'required|max:255',
                    // 'map_specification_id' => 'required|max:255',
                ];
                break;
            case 'PATCH':
                return [
                    'order_id' => 'required|max:255',
                    'order_name' => 'required|max:255',
                    // 'specification_id' => 'required|max:255',
                    'map_order_id' => 'required|max:255',
                    'map_order_name' => 'required|max:255',
                    // 'map_specification_id' => 'required|max:255',
                ];
                break;
        }
    }

    public function messages() {
        return [
            'order_id.required' => '商品编码必填',
            'order_id.max' => '商品编码最大长度为255',

            // 'specification_id.required' => '规格编码必填',
            // 'specification_id.max' => '规格编码最大长度为255',
            
            'map_order_id.required' => '映射商品编码必填',
            'map_order_id.max' => '映射商品编码最大长度为255',

            // 'map_specification_id.required' => '映射规格编码必填',
            // 'map_specification_id.max' => '映射规格编码最大长度为255'
        ];
    }
}
