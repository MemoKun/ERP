<?php

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
