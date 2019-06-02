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
                    'role_group_id'=> 'required|integer',
                    'name'=> 'required|string',
                    'description'=> 'string',
                    'remark'=> 'string',
                    'status' => 'boolean',
                ];
                break;
            case 'PATCH':
                return [
                    'id' =>'integer',
                    'role_group_id' => 'integer',
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
        return [];
    }
}
