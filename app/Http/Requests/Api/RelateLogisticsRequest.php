<?php

namespace App\Http\Requests\Api;

//use Illuminate\Validation\Rule;

class RelateLogisticsRequest extends FormRequest
{
    public function rules()
    {
        switch ($this->method()) {
            case'GET':
                return [
                    'status' => 'boolean',
                ];
                break;
            case'POST':
                return[
                    'username' => 'required|string',
                    'name' => 'string|max:255',
                    'phone' => 'string|max:255',
                    'status' => 'boolean',
                ];
                break;
            case'PATCH':
                return[
                    'username' => 'string|max:255',
                    'name' => 'string|max:255',
                    'phone' => 'string|max:255',
                    'status' => 'boolean',
                ];
                break;
        }
    }

    public function messages()
    {
        return [
            'username.required' => '用户账号必填',
            'username.string' => '用户账号必须为string类型',

            'name.string' => '名字必须为string类型',
            'name.max' => '名字最大长度为255',

            'phone.string' => '手机必须为string类型',
            'phone.max' => '手机最大长度为255',
        ];
    }

    public function attributes()
    {
        return [
            'username' => '用户账号',
            'name' => '名字',
            'phone' => '手机',
        ];
    }
}
