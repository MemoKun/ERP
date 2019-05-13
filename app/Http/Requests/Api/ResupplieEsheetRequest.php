<?php

namespace App\Http\Requests\Api;

class ResupplieEsheetRequest extends FormRequest
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
                    'esheet_no' => 'string',
                    'status' => 'boolean',
                ];
                break;
            case 'PATCH':
                return [
                    'esheet_no' => 'string',
                    'status' => 'boolean',
                ];
                break;
        }
    }

    public function messages()
    {
        return [
            'esheet_no.string' => '电子面单号必须string类型',
            'status.boolean' => '状态必须布尔类型',
            'status.required' => '状态必填',
        ];
    }

    public function attributes()
    {
        return [
            'esheet_no' => '电子面单号',
            'status' => '状态',
        ];
    }
}
