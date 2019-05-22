<?php
/**
 * Created by PhpStorm.
 * User: lou
 * Date: 2019/2/21
 * Time: 22:59
 */

namespace App\Http\Requests\Api;

use Illuminate\Validation\Rule;

class RoleGroupRequest extends FormRequest
{
    public function rules(){
        switch ($this->method()){
            case 'GET':
                return [
                    'status' => 'boolean'
                ];
                break;
        }
    }
}
