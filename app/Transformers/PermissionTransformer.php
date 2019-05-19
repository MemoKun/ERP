<?php
/**
 * Created by PhpStorm.
 * User: lou
 * Date: 2019/2/16
 * Time: 23:03
 */

namespace App\Transformers;


use App\Models\Permission;
use League\Fractal\TransformerAbstract;

class PermissionTransformer extends TransformerAbstract
{
    public function transform(Permission $permission){
        return [
            'key' => $permission->id,
            'label' => $permission->name,
            'description' => $permission->description,
            'type' => $permission->type,
            'checked' => false
        ];
    }
}
