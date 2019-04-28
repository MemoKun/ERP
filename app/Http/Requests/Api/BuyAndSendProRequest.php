<?php

namespace App\Http\Requests\Api;

class BuyAndSendProRequest extends FormRequest
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
                    'title' => 'required|string|max:255',
                    'commodity_code' => 'string|max:255',
                    'spec_code' => 'string|max:255',
                    'short_name' => 'string|max:255',
                    'spec_name' => 'string|max:255',
                    'status' => 'boolean',
                ];
                break;
            case'PATCH':
                return[
                    'title' => 'string|max:255',
                    'commodity_code' => 'string|max:255',
                    'spec_code' => 'string|max:255',
                    'short_name' => 'string|max:255',
                    'spec_name' => 'string|max:255',
                    'status' => 'boolean',
                ];
                break;
        }
    }

    public function messages()
    {
        return [
            'title.required' => '标题代码必填',
            'title.string' => '标题必须为string类型',
            'title.max' => '标题最大长度为255',

            //'commodity_code.required' => '商品编码必填',
            'commodity_code.string' => '商品编码必须string类型',
            'commodity_code.max' => '商品编码最大长度为255',

            //'spec_code.required' => '规格编码必填',
            'spec_code.string' => '规格编码必须string类型',
            'spec_code.max' => '规格编码最大长度为255',

         //   'short_name.required' => '商品编码必填',
            'short_name.string' => '商品编码必须string类型',
            'short_name.max' => '商品编码最大长度为255',

           // 'spec_name.required' => '规格名称必填',
            'spec_name.string' => '规格名称必须string类型',
            'spec_name.max' => '规格名称最大长度为255',

            'status.boolean' => '状态必须布尔类型',
        ];
    }

    public function attributes()
    {
        return [
            'title' => '标题',
            'commodity_code' => '商品编码',
            'sepc_code' => '规格编码',
            'short_name' => '商品简称',
            'sepc_name' => '规格名称',
            'status' => '状态：0=停用，1=启用',
        ];
    }
}
