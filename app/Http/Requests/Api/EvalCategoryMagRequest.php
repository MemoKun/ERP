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
        switch ($this->method()) {
            case 'GET':
                return [
                    'status' => 'boolean',
                ];
                break;
            case 'POST':
                return [
                    'name' => 'required|string|max:255',
                    'note' => 'required|string|max:255',
                    'status' => 'boolean',
                ];
                break;
            case 'PATCH':
                return [
                    'name' => 'required|string|max:255',
                    'note' => 'required|string|max:255',
                    'status' => 'boolean',
                ];
                break;
        }
    }

    public function attributes()
    {
        return [
            'name'=>'评价类型',
            'status' => '是否启用'
        ];
    }
}
