<?php

namespace App\Transformers;

use App\Models\User;
use League\Fractal\TransformerAbstract;

class UserTransformer extends TransformerAbstract
{
    public function transform(User $user)
    {
        return [
            'id' => $user->id,
            'username' => $user->username,
            'work_id' => $user->work_id,
            'real_name' => $user->real_name,
            'id_no' => $user->id_no,
            'phone' => $user->phone,
            'email' => $user->email,
            'home_address' => $user->home_address,
            'remark' => $user->remark,
            'hiredate' => optional($user->hiredate)->toDateTimeString(),
            'departure_date' => optional($user->departure_date)->toDateTimeString(),
            'status'=> $user->status,
            'created_at' => optional($user->created_at)->toDateTimeString(),
            'updated_at' => optional($user->updated_at)->toDateTimeString(),
        ];
    }
}