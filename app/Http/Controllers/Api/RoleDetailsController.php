<?php
/**
 * Created by PhpStorm.
 * User: lou
 * Date: 2019/2/12
 * Time: 23:07
 */

namespace App\Http\Controllers\Api;

use App\Models\Role;
use App\Http\Requests\Api\RoleRequest;
use App\Http\Controllers\Traits\CURDTrait;
use App\Transformers\RoleTransformer;
class RoleDetailsController extends Controller
{
    use CURDTrait;

    const TRANSFORMER = RoleTransformer::class;
    const MODEL = Role::class;

    public function index(RoleRequest $request){
        return $this->allOrPage($request,self::MODEL,self::TRANSFORMER,10);
    }
}
