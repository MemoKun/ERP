<?php

namespace App\Models;

class RoleHasPermission extends Model
{
    protected $table = "role_has_permissions";

    protected $fillable = [
        'permission_id','role_id'
    ];

    /**
     * 获取与角色关联的权限
     */
    public function permissions()
    {
        return $this->hasMany(Permission::class, 'permission_id');
    }
}
