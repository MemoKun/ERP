<?php

namespace App\Http\Requests\Api;

class UserAstSupplierRequest extends FormRequest
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
                    'user' => 'required|string|max:255',
                    'supplier' => 'required|string|max:255',
                ];
                break;
            case 'PATCH':
                return [
                    'user' => 'required|string|max:255',
                    'supplier' => 'required|string|max:255',
                ];
                break;
        }
    }

    public function messages()
    {
        return [
            'user.required' => '用户账号必填',
            'user.max' => '用户账号最大长度为255',
            'user.string' => '用户账号必须string类型',

            'supplier.required' => '供应商名称必填',
            'supplier.string' => '供应商名称必须string类型',
            'supplier.max' => '供应商名称最大长度为255',
        ];
    }

    public function attributes()
    {
        return [
            'user' => '用户账号',
            'supplier' => '供应商名称'
        ];
    }
}
