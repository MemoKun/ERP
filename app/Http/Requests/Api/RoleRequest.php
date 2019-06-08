<?php

namespace App\Http\Requests\Api;

use Illuminate\Validation\Rule;

class RoleRequest extends FormRequest
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
                    'name'=> 'string',
                    'description'=> 'string',
                    'remark'=> 'string',
                    'status' => 'boolean',
                ];
                break;
            case 'PATCH':
                return [
                    'name' => 'string',
                    'description'=> 'string',
                    'remark'=> 'string',
                    'status' => 'boolean',
                ];
                break;
        }
    }

    public function messages()
    {
        return [
            'name.string' => '角色名称必须为string',
            'description.string' => '描述必须为string',
            'remark.string' => '备注必须为string',
            'status.boolean' => '状态必须为boolean',
        ];
    }

    public function attributes()
    {
        return [
            'name' => '角色名称',
            'description' => '描述',
            'remark' => '备注',
            'status' => '状态',
        ];
    }
}
