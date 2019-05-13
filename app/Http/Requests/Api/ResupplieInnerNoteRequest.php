<?php

namespace App\Http\Requests\Api;

class ResupplieInnerNoteRequest extends FormRequest
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
                    'theme' => 'string',
                    'user_name' => 'string',
                    'content' => 'string',
                    'status' => 'boolean',
                ];
                break;
            case 'PATCH':
                return [
                    'theme' => 'string',
                    'user_name' => 'string',
                    'content' => 'string',
                    'status' => 'boolean',
                ];
                break;
        }
    }

    public function messages()
    {
        return [
            'theme.string' => '电子面单号必须string类型',
            'user_name.string' => '电子面单号必须string类型',
            'content.string' => '电子面单号必须string类型',

            'status.boolean' => '状态必须布尔类型',
            'status.required' => '状态必填',
        ];
    }

    public function attributes()
    {
        return [
            'theme' => '主题',
            'user_name' => '用户',
            'content' => '内容',
            'status' => '状态',
        ];
    }
}
