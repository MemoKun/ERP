<?php

namespace App\Http\Requests\Api;

class ResupplieOperationRecordRequest extends FormRequest
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
                    'user_name' => 'required|string',
                    'operation' => 'required|string',
                    'description' => 'required|string',
                    'status' => 'boolean',
                ];
                break;
        }
    }

    public function messages()
    {
        return [
            'user_name.required' => '用户必填',
            'user_name.string' => '用户必须string类型',

            'operation.required' => '操作必填',
            'operation.string' => '操作必须string类型',

            'description.required' => '操作描述必填',
            'description.string' => '操作描述必须string类型',

            'status.boolean' => '状态必须布尔类型',
            'status.required' => '状态必填',
        ];
    }

    public function attributes()
    {
        return [
            'user_name' => '用户',
            'operation' => '操作',
            'description' => '操作描述',
            'status' => '状态',
        ];
    }
}
