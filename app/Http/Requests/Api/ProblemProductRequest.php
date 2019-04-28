<?php

namespace App\Http\Requests\Api;

class ProblemProductRequest extends FormRequest
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
                    'after_compensation_order_id' => 'string|max:255',
                    'status' => 'boolean',
                ];
                break;
            case 'POST':
                return [
                    'after_compensation_order_id' => 'string|max:255',
                    'commodity_code' => 'string|max:255',
                    'spec_code' => 'string|max:255',
                    'short_name' => 'string|max:255',
                    'spec' => 'string|max:255',
                    'color' => 'string|max:255',
                    'materials' => 'string|max:255',
                    'function' => 'string|max:255',
                    'special' => 'string|max:255',
                    'other' => 'string|max:255',
                    'buy_number' => 'string|max:255',
                    'url' => 'string|max:255',
                    'status' => 'boolean',
                ];
                break;
            case 'PATCH':
                return [
                    'after_compensation_order_id' => 'string|max:255',
                    'commodity_code' => 'string|max:255',
                    'spec_code' => 'string|max:255',
                    'short_name' => 'string|max:255',
                    'spec' => 'string|max:255',
                    'color' => 'string|max:255',
                    'materials' => 'string|max:255',
                    'function' => 'string|max:255',
                    'special' => 'string|max:255',
                    'other' => 'string|max:255',
                    'buy_number' => 'string|max:255',
                    'url' => 'string|max:255',
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
