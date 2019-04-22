<?php

namespace App\Http\Requests\Api;

class EvalCategoryMagRequest extends FormRequest
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
                    'eval_category' => 'string',
                    'eval_description' => 'string',
                    'creator'=> 'string',
                    'status' => 'boolean',
                ];
                break;
            case 'PATCH':
                return [
                    'eval_category' => 'string',
                    'eval_description' => 'string',
                    'creator'=> 'string',
                    'status' => 'boolean',
                ];
                break;
        }
    }

    public function messages()
    {
        return [
            'eval_category.string' => '评价类型必须为string',
            'eval_description.string' => '评价描述必须为string',
            'creator.string'=> '创建人必须为string',
            'status.boolean' => '状态必须为boolean',
        ];
    }


    public function attributes()
    {
        return [
            'eval_category' => '评价类型',
            'status' => '是否启用'
        ];
    }
}
