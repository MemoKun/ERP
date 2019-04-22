<?php

namespace App\Http\Requests\Api;

class UserAstWarehouseRequest extends FormRequest
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
                     'user' => 'string',
                     'warehouse' => 'string', 
                     'status'=>'boolean'
                 ];
                 break;
             case 'POST':
                 return [
                     'user' => 'string',
                     'warehouse' => 'string',
                     'status'=>'boolean'
                 ];
                 break;
             case 'PATCH':
                 return [
                     'user' => 'string',
                     'warehouse' => 'string',
                     'status'=>'boolean'
                 ];
                 break;
         }
     }

    public function messages()
    {
        return [
            'user.required' => '用户账号必填',
            'user.max' => '用户账号最大长度为255',
            'user.string' => '用户账号必须string类型',

            'warehouse.required' => '仓库名称必填',
            'warehouse.string' => '仓库名称必须string类型',
            'warehouse.max' => '仓库名称最大长度为255',

        ];
    }

    public function attributes()
    {
        return [
            'user' => '用户账户',
            'warehouse' => '仓库名称',
        ];
    }
}
