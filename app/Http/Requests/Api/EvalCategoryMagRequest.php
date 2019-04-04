<?php

namespace App\Http\Requests\Api;

use Log;
use Illuminate\Validation\Rule;

class EvalCategoryMagRequest extends FormRequest
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

                ];
                break;
            case 'PATCH':
                return [
                    
                ];
                break;
        }
    }

    public function attributes()
    {
        return [
            'eval_category'=>'评价类型',
            'status' => '是否启用'
        ];
    }
}
