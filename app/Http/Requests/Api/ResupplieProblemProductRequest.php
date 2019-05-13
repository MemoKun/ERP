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
                    'products_id' => [
                        'integer',
                        Rule::exists('products', 'id')->where(function ($query) {
                            $query->where('status', 1);
                        }),
                    ],
                    'product_components_id' => [
                        'integer',
                        Rule::exists('product_components', 'id'),
                    ],
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
                    'products_id' => [
                        'integer',
                        Rule::exists('products', 'id')->where(function ($query) {
                            $query->where('status', 1);
                        }),
                    ],
                    'product_components_id' => [
                        'integer',
                        Rule::exists('product_components', 'id'),
                    ],
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
            'products_id.required' => '产品id名称必填',
            'products_id.integer' => '产品id必须int类型',

            'product_components_id.required' => '子件id名称必填',
            'product_components_id.integer' => '子件id必须int类型',

            'suppliers_id.required' => '供应商id名称必填',
            'suppliers_id.integer' => '供应商id必须int类型',

            'problem_description.string' => '问题描述必须string类型',
            'problem_description.max' => '问题描述最大长度为255',
        ];
    }

    public function attributes()
    {
        return [
            'products_id' => '产品id',
            'product_components_id' => '子件id',
            'suppliers_id' => '供应商id',
            'problem_description' => '问题描述',
        ];
    }
}
