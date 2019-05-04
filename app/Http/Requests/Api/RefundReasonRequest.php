<?php

namespace App\Http\Requests\Api;

class RefundReasonRequest extends FormRequest
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
                    'refund_order_id' => 'string|max:255',
                    'status' => 'boolean',
                ];
                break;
            case 'POST':
                return [
                    'refund_reason.*.refund_order_id' => 'string|max:255',
                    'refund_reason.*.refund_reason' => 'string|max:255',
                    'refund_reason.*.refund_description' => 'string|max:255',
                    'refund_reason.*.refund_amount' => 'numeric',
                    'refund_reason.*.img_url' => 'string|max:255',
                    'refund_reason.*.status' => 'boolean',
                ];
                break;
            case 'PATCH':
                return [
                    'refund_reason.*.refund_orders_id' => 'string|max:255',
                    'refund_reason.*.refund_reason' => 'string|max:255',
                    'refund_reason.*.refund_description' => 'string|max:255',
                    'refund_reason.*.refund_amount' => 'numeric',
                    'refund_reason.*.img_url' => 'string|max:255',
                    'refund_reason.*.status' => 'boolean',
                ];
                break;
        }
    }

    public function messages()
    {
        return [
            'refund_reason.*.refund_orders_id.string' => '退款订单的id必须为string类型',
            'refund_reason.*.refund_orders_id.max' => '退款订单的id最大值为255',

            'refund_reason.*.refund_reason.string' => '退款原因必须为string类型',
            'refund_reason.*.refund_reason.max' => '退款原因最大值为255',

            'refund_reason.*.refund_description.string' => '退款描述必须为string类型',
            'refund_reason.*.refund_description.max' => '退款描述最大值为255',

            'refund_reason.*.refund_amount.numeric' => '退款金额必须为数字',

            'refund_reason.*.img_url.string' => '图片地址必须为string类型',
            'refund_reason.*.img_url.max' => '图片地址最大为255',

            'refund_reason.*.status.boolean' => '状态必须为boolean类型',
        ];
    }

    public function attributes()
    {
        return [
            'id'=>'对应退款原因的id',
            'refund_order_id'=>'对应退款订单的id',
            'refund_reason'=>'退款原因',
            'refund_description'=>'退款描述',
            'refund_amount'=>'退款金额',
            'img_url'=>'图片地址',
            'status'=>'退款原因的状态',
            'created_at'=>'退款原因的创建时间',
            'updated_at'=>'退款原因的更新时间'
      
        ];
    }
}
