<?php
/**
 * Created by PhpStorm.
 * User: lou
 * Date: 2019/2/21
 * Time: 21:44
 */

namespace App\Http\Requests\Api;


class PermissionRequest extends FormRequest
{
    public  function rules(){
        switch ($this->method()){
            case 'GET':
                return [
                    'status' => 'boolean',
                ];
                break;
        }
    }
}
