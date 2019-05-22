<?php
/**
 * Created by PhpStorm.
 * User: lou
 * Date: 2019/2/12
 * Time: 23:21
 */

namespace App\Http\Requests\Api;

use Illuminate\Validation\Rule;
class RoleRequest extends FormRequest
{
    public function rules(){
        switch ($this->method()){
            case 'GET':
                return [
                    'status' => 'boolean',
                ];
                break;
            case 'POST':
                return [
                    'status' => 'boolean',
                ];
                break;
        }
    }
}
