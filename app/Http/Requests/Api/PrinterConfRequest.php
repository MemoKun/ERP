<?php

namespace App\Http\Requests\Api;

class PrinterConfRequest extends FormRequest
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
                    'model' => 'required|string|max:255',
                    'printer' => 'required|string|max:255',
                    'user' => 'required|string|max:255',
                    'status' => 'boolean',
                ];
                break;
            case 'PATCH':
                return [
                    'model' => 'required|string|max:255',
                    'printer' => 'required|string|max:255',
                    'user' => 'required|string|max:255',
                    'status' => 'boolean',
                ];
                break;
        }
    }

    public function messages()
    {
        return [
            'model.required' => '模块名称必填',
            'model.max' => '模块名称最大长度为255',
            'model.string' => '模块名称必须string类型',

            'printer.required' => '打印机名称必填',
            'printer.string' => '打印机名称必须string类型',
            'printer.max' => '打印机名称最大长度为255',

            'user.required' => '使用人必填',
            'user.string' => '使用人名称必须string类型',
            'user.max' => '使用人最大长度为255',

            'status.required' => '状态必填',
            'status.boolean' => '状态必须布尔类型',
        ];
    }

    public function attributes()
    {
        return [
            'model' => '模块名称',
            'printer' => '打印机名称',
            'user'=> '使用人',
            'status' => '状态：0=停用，1=启用'
        ];
    }
}
