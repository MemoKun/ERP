<?php

namespace App\Http\Requests\Api;

class BrushLockConfRequest extends FormRequest
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
                    'perform_type' => 'required|max:255',
                    'include_string' => 'required|max:255',
                ];
                break;
            case 'PATCH':
                return [
                    'perform_type' => 'required|max:255',
                    'include_string' => 'required|max:255',
                ];
                break;
        }
    }

    public function messages()
    {
        return [
            'perform_type.required' => '账户信息必填',
            'perform_type.max' => '账户信息最大长度为255',

            'include_string.required' => '包含字符必填',
            'include_string.max' => '包含字符最大长度为255',
        ];
    }

    public function attributes()
    {
        return [
            'perform_type' => '账户信息',
            'include_string' => '包含字符',
        ];
    }
}
