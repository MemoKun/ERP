<?php

namespace App\Http\Requests\Api;

use Illuminate\Validation\Rule;

class OfflineAccountConfRequest extends FormRequest
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
                    'account_information' => 'required|max:255',
                    'status' => 'boolean',
                ];
                break;
            case 'PATCH':
                return [
                    'account_information' => 'required|max:255',
                    'status' => 'boolean',
                ];
                break;
        }
    }

    public function messages()
    {
        return [
            'account_information.required' => '账户信息必填',
            'account_information.max' => '账户信息最大长度为255',

            'status.boolean' => '状态必须布尔类型',
        ];
    }

    public function attributes()
    {
        return [
            'account_information' => '账户信息',
            'status' => '状态'
        ];
    }
}
