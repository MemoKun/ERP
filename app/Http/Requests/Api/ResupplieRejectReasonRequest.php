<?php

namespace App\Http\Requests\Api;

use Illuminate\Validation\Rule;

class ResupplieRejectReasonRequest extends FormRequest
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
                    'rejecter' => 'string|max:255',
                    'reason' => 'string|max:255',
                ];
                break;
            case 'PATCH':
                return [
                    're_supplie_orders_id' => [
                        'required', 'integer',
                          Rule::exists('re_supplie_orders', 'id')->where(function ($query) {
                              $query->where('status', 1);
                          }),
                      ],
                    'rejecter' => 'string|max:255',
                    'reason' => 'string|max:255',
                ];
                break;
        }
    }

    public function messages()
    {
        return [
            're_supplie_orders_id.integer' => '补件单id必须int类型',

            'rejecter.string' => '驳回人必须string类型',
            'rejecter.max' => '驳回人最大长度为255',

            'reason.string' => '驳回原因必须string类型',
            'reason.max' => '驳回原因最大长度为255',

            'status.boolean' => '状态必须布尔类型',
            'status.required' => '状态必填',
        ];
    }

    public function attributes()
    {
        return [
            're_supplie_orders_id' => '补件单id',
            'rejecter' => '驳回人',
            'reason' => '驳回原因',
            'status' => '状态',
        ];
    }
}
