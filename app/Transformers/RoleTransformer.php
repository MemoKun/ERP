<?php
/**
 * Created by PhpStorm.
 * User: lou
 * Date: 2019/2/12
 * Time: 23:31
 */

namespace App\Transformers;

use App\Models\Role;
use League\Fractal\TransformerAbstract;

class RoleTransformer extends TransformerAbstract
{
    protected $availableIncludes = [
      'roleGroup'
    ];

    public function transform(Role $role)
    {
        return [
            'id' => $role->id,
            'name' => $role->name,
            'role_group_id' => $role->role_group_id,
            'description' => $role->description,
            'status' => $role->status,
            'remark'=> $role->remark,
            'created_at' => $role->created_at?$role->created_at->toDateTimeString():'',
            'updated_at' => $role->updated_at?$role->updated_at->toDateTimeString():'',
        ];
    }

    public function includeRoleGroup(Role $role)
    {
        return $this->item($role->roleGroup, new RoleGroupTransformer());
    }

}
