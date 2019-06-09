<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Traits\CURDTrait;
use App\Http\Requests\Api\PermissionRequest;
use App\Models\Permission;
use App\Transformers\PermissionTransformer;

class PermissionsController extends Controller
{
    use CURDTrait;

    const TRANSFORMER = PermissionTransformer::class;
    const MODEL = Permission::class;

    public function index(PermissionRequest $request){
        return $this->allOrPage($request,self::MODEL,self::TRANSFORMER,0,0);
    }

    
}
