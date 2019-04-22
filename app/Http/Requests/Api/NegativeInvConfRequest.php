<?php

namespace App\Http\Requests\Api;

class NegativeInvConfRequest extends FormRequest
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
                    'negative_inv' => 'string',
                    'user' => 'string',
                    'creator' => 'string',
                    'status' => 'boolean',
                ];
                break;
            case 'POST':
                return [
                    'negative_inv' => 'string',
                    'user' => 'string',
                    'creator' => 'string',
                    'status' => 'boolean',
                ];
                break;
            case 'PATCH':
                return [
                    'negative_inv' => 'string',
                    'user' => 'string',
                    'creator' => 'string',
                    'status' => 'boolean',
                ];
                break;
        }
    }

    public function messages()
    {
        return [
           
            'negative_inv.string' => '负库存上限必须string类型',
            'user.string' => '所属账户必须string类型',
            'creator.string' => '创建人必须string类型',
            'status.boolean' => '状态必须布尔类型',
        ];
    }

    public function attributes()
    {
        return [
            'negative_inv' => '负库存上限名称',
            'user' => '所属账户',
            'creator' => '创建人',
            'status' => '状态：0=停用，1=启用'
        ];
    }
}
