<?php

namespace App\Http\Requests\Api;

class LogisticsAreaRequest extends FormRequest
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
                    'status' => 'integer'
                ];
                break;
            case 'POST':
                return [
                    'code' => 'required|string|max:255|unique:logistics_areas',
                    'name' => 'required|string|max:255',
                    'status' => 'integer'
                ];
                break;
            case 'PATCH':
                return [
                    'code' => [
                        'string','max:255',
                        Rule::unique('logistics_areas')->ignore($this->logisticsarea->id),
                    ],
                    'name' => 'string|max:255',
                    'status' => 'integer',
                    'id' => 'exists:logistics_areas'
                ];
                break;
            case 'DELETE':
                return [
                    'ids' => 'required|string',
                ];
                break;
            case 'PUT':
                return [
                    'ids' => 'required|string',
                    'status' => 'required|integer'
                ];
                break;
        }
    }

    public function messages()
    {
        return [

            'code.required' => '区域代码必填',
            'code.string' => '区域代码必须string类型',
            'code.max' => '区域代码最大长度为255',
            'code.unique' => '区域代码不能重复',

            'name.required' => '区域名称必填',
            'name.string' => '区域名称必须string类型',
            'name.max' => '区域名称最大长度为255',

            'id.exists' => '需要更改的数据id在数据库中未找到',
            'ids.required' => 'id组必填',
            'ids.string' => 'id组必须string类型',
            'status.integer' => '状态必须int类型',
            'status.required' => '状态必填'
        ];
    }

    public function attributes()
    {
        return [
            'code' => '区域代码',
            'name' => '区域名称',
            'status' => '状态'
        ];
    }

}
