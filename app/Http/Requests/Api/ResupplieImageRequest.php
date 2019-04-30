<?php

namespace App\Http\Requests\Api;

class ResupplieImageProductRequest extends FormRequest
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
                    'img_url' => 'string|max:255',
                ];
                break;
            case 'PATCH':
                return [];
                break;
        }
    }

    public function messages()
    {
        return [
            'img_url.string' => '问题描述必须string类型',
            'img_url.max' => '问题描述最大长度为255',
        ];
    }

    public function attributes()
    {
        return [
            'img_url' => '问题描述',
        ];
    }
}
