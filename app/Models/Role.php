<?php

namespace App\Models;

class Role extends Model
{
    protected $table = "roles";

    protected $fillable = [
        'name', 'description',
        'status', 'remark'
    ];

    //设置类型
    protected $casts = [
        'status' => 'boolean'
    ];

    /**
     * 获取与角色关联的权限
     */
    public function permissions()
    {
        return $this->hasMany('App\Models\Permission');
    }

    /**
     * 所在分组
     */
    public function roleGroup()
    {
        return $this->belongsTo(Rolegroup::class, 'role_group_id');
    }
}
