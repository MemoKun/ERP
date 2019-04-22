<?php
/**
 * Created by PhpStorm.
 * User: lou
 * Date: 2019/2/14
 * Time: 11:21
 */

namespace App\Transformers;

use App\Models\Rolegroup;
use League\Fractal\TransformerAbstract;

class RoleGroupTransformer extends TransformerAbstract
{
    public function transform(Rolegroup $roleGroup){
        return [
            'id' => $roleGroup->id,
            'name' => $roleGroup->name,
            'description' => $roleGroup->description,
            'status' => $roleGroup->status,
            'remark' => $roleGroup->remark,
            'created_at' => $roleGroup->created_at
                ->toDateTimeString(),
            'updated_at' => $roleGroup->updated_at
                ->toDateTimeString(),
        ];
    }

}
