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
                    'user' => 'string',
                    'supplier' => 'string', 
                    'status'=>'boolean'
                ];
                break;
            case 'POST':
                return [
                    'user' => 'string',
                    'supplier' => 'string',
                    'status'=>'boolean'
                ];
                break;
            case 'PATCH':
                return [
                    'user' => 'string',
                    'supplier' => 'string',
                    'status'=>'boolean'
                ];
                break;
        }
    }

    public function messages()
    {
        return [
            'user.string' => '用户账号必须string类型',
            'supplier.string' => '供应商名称必须为string类型',
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
