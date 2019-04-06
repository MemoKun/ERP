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
                    'cmptn_status' => 'integer',
                ];
                break;
            case 'PATCH':
                return [
                   
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
