<?php

namespace App\Http\Requests\Api;

use Illuminate\Validation\Rule;

class RedPackageRequest extends FormRequest
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
                    'commodity_code' => 'required|string|max:255',
                    'short_name' => 'required|string|max:255',
                    'remark' => 'string|max:255',
                    'status' => 'boolean',
                ];
                break;
            case 'PATCH':
                return [
                    'commodity_code' => 'required|string|max:255',
                    'short_name' => 'required|string|max:255',
                    'remark' => 'string|max:255',
                    'status' => 'boolean',
                ];
                break;
        }
    }

    public function messages()
    {
        return [
            'commodity_code.required' => '产品编码必填',
            'commodity_code.string' => '产品编码必须string类型',
            'commodity_code.max' => '产品编码最大长度为255',

            'short_name.required' => '商品简称必填',
            'short_name.string' => '商品简称必须string类型',
            'short_name.max' => '商品简称最大长度为255',

            'remark.string' => '备注必须string类型',
            'remark.nullable' => '备注可为null',
            'remark.max' => '备注最大长度为255',

            'status.boolean' => '状态必须布尔类型',
            'status.required' => '状态必填',
        ];
    }

    public function attributes()
    {
        return [
            'commodity_code' => '产品编码',
            'short_name' => '商品简称',
            'remark' => '备注',
            'status' => '状态：0=停用，1=启用',
        ];
    }
}
