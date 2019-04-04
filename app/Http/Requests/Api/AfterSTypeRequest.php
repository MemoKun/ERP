<?php

namespace App\Http\Requests\Api;

use Illuminate\Validation\Rule;

class AfterSTypeRequset extends FormRequest
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
        }
    }

    public function attributes()
    {
        return [
            'after_s_type'=>'收款类型',
            'status' => '是否启用'
        ];
    }
}
