<?php
/**
 * Created by PhpStorm.
 * User: lou
 * Date: 2019/2/21
 * Time: 22:57
 */

namespace App\Http\Controllers\Api;


use App\Http\Requests\Api\RoleGroupRequest;
use App\Models\Rolegroup;
use App\Transformers\RoleGroupTransformer;
use App\Http\Controllers\Traits\CURDTrait;
class RoleGroupController extends Controller
{
    use CURDTrait;
    const TRANSFORMER = RoleGroupTransformer::class;
    const MODEL = Rolegroup::class;
    public function index(RoleGroupRequest $request){
        return $this->allOrPage($request,self::MODEL,self::TRANSFORMER,0);
    }
}
