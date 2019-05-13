<?php

namespace App\Http\Requests\Api;

use Illuminate\Validation\Rule;

class ResupplieProgressRequest extends FormRequest
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
                    're_supplie_orders_id' => [
                        'required', 'integer',
                          Rule::exists('re_supplie_orders', 'id')->where(function ($query) {
                              $query->where('status', 1);
                          }),
                      ],
                    'description' => 'string|max:255',
                    'creator' => 'string|max:255',
                ];
                break;
            case 'PATCH':
                return [
                    'description' => 'string|max:255',
                    'creator' => 'string|max:255',
                ];
                break;
        }
    }

    public function messages()
    {
        return [
            're_supplie_orders_id.integer' => '补件单id必须int类型',

            'description.string' => '进度描述必须string类型',
            'description.max' => '进度描述最大长度为255',

            'creator.string' => '创建人必须string类型',
            'creator.max' => '创建人最大长度为255',

            'status.boolean' => '状态必须布尔类型',
            'status.required' => '状态必填',
        ];
    }

    public function attributes()
    {
        return [
            're_supplie_orders_id' => '补件单id',
            'description' => '进度描述',
            'creator' => '创建人',
            'status' => '状态',
        ];
    }
}
