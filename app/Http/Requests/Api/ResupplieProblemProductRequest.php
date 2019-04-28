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
                    'combinations_id' => [
                        'required', 'integer',
                        Rule::exists('combinations', 'id')->where(function ($query) {
                            $query->where('status', 1);
                        }),
                    ],
                    'problem_description' => 'string|max:255',
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
            'combinations_id.required' => '组合sku_id名称必填',
            'combinations_id.integer' => '组合sku_id必须int类型',

            'problem_description.string' => '问题描述必须string类型',
            'problem_description.max' => '问题描述最大长度为255',
        ];
    }

    public function attributes()
    {
        return [
            'combinations_id' => '组合sku_id',
            'problem_description' => '问题描述',
        ];
    }
}
