<?php

namespace App\Http\Requests\Api;

use Illuminate\Validation\Rule;

class AfterSStateRequset extends FormRequest
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
                    'id'=>'integer',
                ];
                break;
        }
    }

    public function attributes()
    {
        return [
            'after_s_state'=>'售后状态',
        ];
    }
}
