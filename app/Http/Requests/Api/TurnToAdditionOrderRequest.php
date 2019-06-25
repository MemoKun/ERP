<?php

namespace App\Http\Requests\Api;

use Illuminate\Validation\Rule;

class TurnToAdditionOrderRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        switch ($this->method()) {
            case 'PUT':
                return [
                    
                ];
                break;
        }
    }

    public function messages()
    {
        return [
            'order_id_one.required' => '订单一必填',
            'order_id_one.integer' => '订单一必须int类型',
            'order_id_one.exists' => '需要添加的id在数据库中未找到或未启用或已财审',

            'order_id_two.required' => '订单二必填',
            'order_id_two.integer' => '订单二必须int类型',
            'order_id_two.exists' => '需要添加的id在数据库中未找到或未启用或已财审',
        ];
    }

    public function attributes()
    {
        return [
            'order_id_one' => '订单一',
            'order_id_two' => '订单二'
        ];
    }
}
