<?php

namespace App\Http\Requests\Api;

class DownLoadConfRequest extends FormRequest
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
                    'is_covered' => 'boolean',
                    'is_merged' => 'boolean',
                ];
                break;
            case'PATCH':
                return[
                    'is_covered' => 'boolean',
                    'is_merged' => 'boolean',
                ];
                break;
        }
    }

    public function messages()
    {
        return[
            'is_covered.boolean' => '启用覆盖必须布尔类型',
            'is_merged.boolean' => '启用合并必须布尔类型',
            'status.boolean' => '状态必须布尔类型',
        ];
    }

    public function attributes()
    {
        return[
            'is_covered' => '启用覆盖',
            'is_merged' => '启用合并',
            'status' => '状态：0=停用，1=启用',
        ];
    }
}
