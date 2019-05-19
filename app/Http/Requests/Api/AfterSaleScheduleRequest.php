<?php

namespace App\Http\Requests\Api;

use Illuminate\Validation\Rule;

class AfterSaleScheduleRequest extends FormRequest
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
                    'after_sale_id' => 'required|string|max:255',
                    'schedule_description' => 'required|string|max:255',
                    'subscribed_at' => 'string',
                    'user_id' => 'integer',
                    'status' => 'boolean',
                ];
                break;
            case 'PATCH':
                return [
                    'id' => [
                        'integer',
                        Rule::exists('after_sale_schedule', 'id'),
                    ],
                    'after_sale_id' => 'string|max:255',
                    'schedule_description' => 'string|max:255',
                    'subscribed_at' => 'string',
                    'user_id' => 'integer',
                    'status' => 'boolean',
                ];
            break;
        }
    }

    public function messages()
    {
        return [
            'schedule_description.required' => '进度描述必填',
            'schedule_description.string' => '进度描述必须string类型',

            'subscribed_at.string' => '超时时间必须string类型',

            'status.boolean' => '状态必须布尔类型',
            'status.required' => '状态必填'
        ];
    }

    public function attributes()
    {
        return [
            'schedule_description' => '进度描述',
            'user_id' => '创建人',
            'subscribed_at' => '预约时间',
        ];
    }
}
