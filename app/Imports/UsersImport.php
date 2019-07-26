<?php

namespace App\Imports;

use App\Models\User;
use Maatwebsite\Excel\Concerns\ToModel;
use Illuminate\Support\Facades\Hash;

class UsersImport implements ToModel
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return new User([
            'username'=> $row[0],
            'password'=>$row[1],
            'work_id'=>$row[2],
            'real_name'=>$row[3],
            'id_no'=>$row[4],
            'phone'=>$row[5],
            'email'=>$row[6],
            'home_address'=>$row[7],
            'remark'=>$row[8],
            'remeber_token'=>$row[9],
            'status'=>$row[10],
        ]);
    }
}
