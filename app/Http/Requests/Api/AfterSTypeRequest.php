<?php

namespace App\Http\Requests\Api;

use Log;
use Illuminate\Validation\Rule;

class AfterSTypeRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        Log::info($this);
        switch ($this->method()) {
            case 'GET':
                return [
                    'status' => 'boolean',
                ];
                break;
            case 'POST':
                return[
                    'after_s_type'=>'required|string|max:50',
                    'status'=>'required|boolean'
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
            'after_s_type.required'=>'售后类型必填',
            'after_s_type.string'=>'售后类型必须为string类型',
            'after_s_type.max'=>'售后类型最大长度为50',

            'status.required'=>'是否启用必填',
            'status.boolean'=>'是否启用必须为boolean类型',
        ];
    }

    public function attributes()
    {
        return [
            'after_s_type'=>'收款类型',
            'status' => '是否启用'
        ];
    }
}
