<?php

namespace App\Http\Requests\Api;

class UserRequest extends FormRequest
{
    public function rules()
    {
        switch ($this->method()) {
            case 'GET':
                return [
                    'status'=>'boolean'
                ];
                break;
            case 'POST':
                return [
                    'username' => 'string|max:255',
                    'password' => 'string|min:6',
                    'work_id' => 'string|max:255',
                    'real_name' => 'string|max:255',
                    'id_no' => 'string|max:255',
                    'phone' => 'string|max:255',
                    'email' => 'string|max:255',
                    'home_address' => 'string|max:255',
                    'remark' => 'string|max:255',
                    'hiredate' => 'date',
                    'departure_date' => 'date',
                ];
                break;
            case 'PATCH':
                return [
                    'username' => 'required|string|max:255',
                    'password' => 'required|string|min:6',
                    'work_id' => 'string|max:255',
                    'real_name' => 'string|max:255',
                    'id_no' => 'string|max:255',
                    'phone' => 'string|max:255',
                    'email' => 'string|max:255',
                    'home_address' => 'string|max:255',
                    'remark' => 'string|max:255',
                    'hiredate' => 'date',
                    'departure_date' => 'date',
                ];
                break;
        }
    }

    public function messages()
    {
        return [
            'username.required' => '用户名不能为空',
            'password.required' => '密码不能为空',
            'password.min' => '密码最低为6位',
        ];
    }

    public function attributes()
    {
        return [
            'username' => '用户名',
            'password' => '密码',
        ];
    }
}
