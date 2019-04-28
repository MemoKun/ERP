<?php

namespace App\Http\Requests\Api;

use Illuminate\Validation\Rule;

class RelateLogisticsCompanyRequest extends FormRequest
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
                    'relate_logistics_company.*.code' => 'string|max:255|unique:relate_logistics_company',
                    'relate_logistics_company.*.logistics_name' => 'string|max:255|unique:relate_logistics_company',
                    'relate_logistics_company.*.status' => 'boolean',
                ];
                break;
            case'PATCH':
                return[
                    'relate_logistics_company.*.id' => [
                        'integer',
                        Rule::exists('relate_logistics_company', 'id'),
                    ],
                    'relate_logistics_company.*.code' => 'string|max:255|unique:relate_logistics_company',
                    'relate_logistics_company.*.logistics_name' => 'string|max:255|unique:relate_logistics_company',
                    'relate_logistics_company.*.status' => 'boolean',
                ];
                break;
        }
    }

    public function messages()
    {
        return [
            'code.string' => '物流代码必须string类型',
            'code.max' => '物流代码最大长度为255',
            'code.unique' => '物流代码不能重复',

            'logistics_name.string' => '物流名称必须string类型',
            'logistics_name.max' => '物流名称最大长度为255',
            'logistics_name.unique' => '物流名称不能重复',
        ];
    }

    public function attributes()
    {
        return [
            'code' => '物流代码',
            'logistics_name' => '物流名称',
        ];
    }
}
