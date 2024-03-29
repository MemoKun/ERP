<?php

namespace App\Transformers;

use App\Models\Roles;
use League\Fractal\TransformerAbstract;

class RoleTransformer extends TransformerAbstract
{
    protected $availableIncludes = [
      'roleGroup'
    ];

    public function transform(Roles $role)
    {
        return [
            'id' => $role->id,
            'name' => $role->name,
            'description' => $role->description,
            'remark'=> $role->remark,
            'guard_name'=> $role->guard_name,
            'status' => $role->status,
            'created_at' => optional($role->created_at)->toDateTimeString(),
            'updated_at' => optional($role->updated_at)->toDateTimeString(),
        ];
    }

    public function includeRoleGroup(Roles $role)
    {
        return $this->item($role->roleGroup, new RoleGroupTransformer());
    }
}
