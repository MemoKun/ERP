<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Traits\CURDTrait;
use App\Http\Requests\Api\DestroyRequest;
use Dingo\Api\Exception\DeleteResourceFailedException;
use Illuminate\Support\Facades\DB;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;


use App\Models\Roles;
use App\Http\Requests\Api\RoleRequest;
use App\Transformers\RoleTransformer;

class RolesController extends Controller
{
    use CURDTrait;

    const TRANSFORMER = RoleTransformer::class;
    const MODEL = Roles::class;

    public function index(RoleRequest $request)
    {
        return $this->allOrPage($request, self::MODEL, self::TRANSFORMER, 10);
    }

    public function show(Roles $role)
    {
        return $this->traitShow($role, self::TRANSFORMER);
    }

    public function giveRolesPermission(RoleRequest $request)
    {
        $roleId = $request->input('roleId');
        $permissions = $request->input('permissions');
        $role = Role::findById($roleId);
        $role->syncPermissions($permissions);
        $result=$role->hasAnyPermission($permissions);

        return $result;
    }

    public function insertRole(RoleRequest $request, Roles $role)
    {
//        return $request->post();
        $data = [
          'role_group_id' => $request->post('role_group_id'),
          'name' => $request->post('name'),
          'description' => $request->post('description'),
          'remark' => $request->post('remark'),
        ];
//        return $data;
        if (Roles::find($request->post('id'))) {
            return $this->traitUpdate($request, Roles::find($request->post('id')), self::TRANSFORMER);
        };
        return  $this->traitStore($data, self::MODEL, self::TRANSFORMER);
    }

    public function update(RoleRequest $request, Roles $role)
    {
        return $this->traitUpdate($request, $role, self::TRANSFORMER);
    }

    public function destroyByIds(DestroyRequest $request)
    {
        $ids = explode(',', $request->input('ids'));

        DB::transaction(function () use ($ids) {

//            $combinations = Combination::whereIn('pid', $ids);
//            $combinations->get()->map(function ($item){
//                //删除多对多关系
//                $item->productComponents()->detach();
//            });
//            //删除组合sku
//            $delCom = $combinations->delete();
//
//            $product = Product::whereIn('id',$ids)->with('productComponents')->get();
//            //删除子件 还有子件的库存 和 订单没有删除
//            $delComp = $product->map(function($item){
//                $item->productComponents()->delete();
//            });

            //删除产品
            $delProduct = Roles::destroy($ids);

            if ($delProduct === false) {
                throw new DeleteResourceFailedException('The given data was invalid.');
            }
        });

        return $this->noContent();
    }
}
