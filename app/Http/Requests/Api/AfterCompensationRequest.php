<?php

namespace App\Http\Requests\Api;

class AfterCompensationRequest extends FormRequest
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
                    'note' => 'required|string|max:255',
                ];
                break;
            case 'POST':
                return [
                    //'order_number' => 'required|string|max:255',
                    //'order_source' => 'required|string|max:255',
                    'cmptn_status' => 'numeric',
                    //'cmptn_shop' => 'numeric',
                    'cmptn_direction' => 'required|string|max:255',
                    'responsible_party' => 'required|string|max:255',
                    'responsible_person' => 'required|string|max:255',
                    'customer_nickname' => 'required|string|max:255',
                    'customer_name' => 'required|string|max:255',
                    'customer_phone' => 'required|string|max:255',
                    'customer_city' => 'required|string|max:255',
                    //'customer_address' => 'string|max:255',
                    'cmptn_fee' => 'numeric',
                    'fee_type' => 'required|string|max:255',
                    'logistics_company' => 'required|string|max:255',
                    'logistics_tracking_number' => 'required|string|max:255',
                    'payment_method' => 'required|string|max:255',
                    'order_stuff' => 'required|numeric',
                    'payee' => 'required|string|max:255',
                    'payee_account' => 'required|string|max:255',
                    //'problem_goods' => 'required|string|max:255',
                    'problem_description' => 'required|string|max:255',
                    'note' => 'required|string|max:255',
                    //'refuse_reason' => 'string|max:255',
                    'negotiation_date' => 'required|string|max:255',
                    'status' => 'boolean',
                ];
                break;
            case 'PATCH':
                return [
                   //'order_number' => 'required|string|max:255',
                    //'order_source' => 'required|string|max:255',
                    'cmptn_status' => 'numeric',
                    //'cmptn_shop' => 'numeric',
                    'cmptn_direction' => 'required|string|max:255',
                    'responsible_party' => 'required|string|max:255',
                    'responsible_person' => 'required|string|max:255',
                    'customer_nickname' => 'required|string|max:255',
                    'customer_name' => 'required|string|max:255',
                    'customer_phone' => 'required|string|max:255',
                    'customer_city' => 'required|string|max:255',
                    //'customer_address' => 'string|max:255',
                    'cmptn_fee' => 'numeric',
                    'fee_type' => 'required|string|max:255',
                    'logistics_company' => 'required|string|max:255',
                    'logistics_tracking_number' => 'required|string|max:255',
                    'payment_method' => 'required|string|max:255',
                    'order_stuff' => 'required|numeric',
                    'payee' => 'required|string|max:255',
                    'payee_account' => 'required|string|max:255',
                    //'problem_goods' => 'required|string|max:255',
                    'problem_description' => 'required|string|max:255',
                    'note' => 'required|string|max:255',
                    //'refuse_reason' => 'string|max:255',
                    'negotiation_date' => 'required|string|max:255',
                    'status' => 'boolean',
                ];
                break;
        }
    }

    public function messages()
    {
        return [
          
        ];
    }

    public function attributes()
    {
        return [
      
        ];
    }
}
