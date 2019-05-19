<?php

namespace App\Http\Requests\Api;

class ProBomRequest extends FormRequest
{
    public function rules()
    {
        switch ($this->method()) {
            case 'GET':
                return [
                    'status' => 'boolean',
                ];
                break;
            case'POST':
                return [
                    'commodity_code' => 'required|string|max:255',
                    'spec_code' => 'required|string|max:255',
                    'short_name' => 'string|max:255',
                    'spec' => 'string|max:255',
                    'color' => 'string|max:255',
                    'material_quality' => 'string|max:255',
                    'special' => 'string|max:255',
                    'other' => 'string|max:255',
                    'status' => 'boolean',
                ];
                break;
            case'PATCH':
                return [
                    'commodity_code' => 'required|string|max:255',
                    'spec_code' => 'required|string|max:255',
                    'short_name' => 'string|max:255',
                    'spec' => 'string|max:255',
                    'color' => 'string|max:255',
                    'material_quality' => 'string|max:255',
                    'special' => 'string|max:255',
                    'other' => 'string|max:255',
                    'status' => 'boolean',
                ];
                break;
        }
    }

    public function messages()
    {
        return[
            'commodity_code.required' => '商品编码必填',
            'commodity_code.string' => '商品编码必须string类型',
            'commodity_code.max' => '商品编码最大长度为255',

            'spec_code.required' => '商品编码必填',
            'spec_code.string' => '规格编码必须string类型',
            'spec_code.max' => '规格编码最大长度为255',

            'short_name.string' => '商品简称必须string类型',
            'short_name.max' => '商品简称最大长度为255',

            'spec.string' => '规格必须string类型',
            'spec.max' => '规格最大长度为255',

            'color.string' => '颜色必须string类型',
            'color.max' => '颜色最大长度为255',

            'material_quality.string' => '材质必须string类型',
            'material_quality.max' => '材质最大长度为255',

            'special.string' => '特殊必须string类型',
            'special.max' => '特殊最大长度为255',

            'other.string' => '其他必须string类型',
            'other.max' => '其他最大长度为255',

            'status.boolean' => '状态必须布尔类型',
        ];
    }

    public function attributes()
    {
        return [
            'commodity_code' => '商品编码',
            'spec_code' => '规格编码',
            'short_name' => '商品简称',
            'spec' => '规格',
            'color' => '颜色',
            'material_quality' => '材质',
            'special' => '特殊',
            'other' => '其他',
            'status' => '状态：0=停用，1=启用',
        ];
    }
}
