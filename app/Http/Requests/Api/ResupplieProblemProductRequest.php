<?php

namespace App\Http\Requests\Api;

use Illuminate\Validation\Rule;

class ResupplieProblemProductRequest extends FormRequest
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
                    'commodity_code' => 'string|max:255',
                    'spec_code' => 'string|max:255',
                    'short_name' => 'string|max:255',
                    'spec' => 'string|max:255',
                    'suppliers_id' => [
                        'integer',
                        Rule::exists('suppliers', 'id')->where(function ($query) {
                            $query->where('status', 1);
                        }),
                    ],
                    'problem_description' => 'string|max:255',
                ];
                break;
            case 'PATCH':
                return [
                    'commodity_code' => 'string|max:255',
                    'spec_code' => 'string|max:255',
                    'short_name' => 'string|max:255',
                    'spec' => 'string|max:255',
                    'suppliers_id' => [
                        'integer',
                        Rule::exists('suppliers', 'id')->where(function ($query) {
                            $query->where('status', 1);
                        }),
                    ],
                    'problem_description' => 'string|max:255',
                ];
                break;
        }
    }

    public function messages()
    {
        return [
            'commodity_code.string' => '商品编码必须string类型',
            'commodity_code.max' => '商品编码最大长度为255',

            'spec_code.string' => '子件编码必须string类型',
            'spec_code.max' => '子件编码最大长度为255',

            'short_name.string' => '商品简称必须string类型',
            'short_name.max' => '商品简称最大长度为255',

            'spec.string' => '规格必须string类型',
            'spec.max' => '规格最大长度为255',

            'suppliers_id.required' => '供应商id名称必填',
            'suppliers_id.integer' => '供应商id必须int类型',

            'problem_description.string' => '问题描述必须string类型',
            'problem_description.max' => '问题描述最大长度为255',
        ];
    }

    public function attributes()
    {
        return [
            'commodity_code' => '商品编码',
            'spec_code' => '子件编码',
            'short_name' => '商品简称',
            'spec' => '规格',
            'suppliers_id' => '供应商id',
            'problem_description' => '问题描述',
        ];
    }
}
