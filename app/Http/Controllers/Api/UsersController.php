<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use Spatie\Permission\Traits\HasRoles;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Maatwebsite\Excel\Facades\Excel;

use App\Models\User;
use App\Imports\UsersImport;
use App\Transformers\UserTransformer;
use App\Http\Requests\Api\UserRequest;
use App\Http\Controllers\Traits\CURDTrait;

class UsersController extends Controller
{
    use CURDTrait;
    use HasRoles;

    const TRANSFORMER = UserTransformer::class;
    const MODEL = User::class;

    protected $guard_name = 'web';

    public function index(UserRequest $request)
    {
        return $this->allOrPage($request, self::MODEL, self::TRANSFORMER, 10);
    }
    
    public function setRoles(UserRequest $request)
    {
        $roleId = $request->input('roleId');
        $userIds = $request->input('userIds');
        $role = Role::findById(intval($roleId));
        foreach ($userIds as $id) {
            $user = User::where('id', $id)->first();
            $user->syncRoles($role["name"]);
        }
        $status=intval($user->hasRole($role["name"]));
        return $status;
    }

    public function getRolesAssociateUsers(UserRequest $request){
        $roleId = intval($request->input('roleId'));
        $role = Role::findById($roleId);
        $users = User::All();
        $usersHasRoles = [];
        foreach($users as $user){
            if($user->hasRole($role['name'])){
                array_push($usersHasRoles,$user['id']);
            }
        }
        return $usersHasRoles;
    }

    public function store(Request $request)
    {
        $captchaData = \Cache::get($request->captcha_key);

        if (!$captchaData) {
            return $this->response->error('验证码已失效', 422);
        }

        if (!hash_equals($captchaData['code'], $request->captcha_code)) {
            // 返回401
            return $this->response->errorUnauthorized('验证码错误');
        }

        $user = User::create([
            'username' => $request->username,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);

        // 清除验证码缓存
        \Cache::forget($request->captcha_key);
        return $this->response->item($user, new UserTransformer())
            ->setStatusCode(201);
        return $this->response->created();
    }

    public function storeUser(Request $request)
    {
        $user = User::create([
            'username' => $request->username,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'work_id'=> $request->work_id,
            'real_name'=> $request->real_name,
            'id_no'=> $request->id_no,
            'phone'=> $request->phone,
            'email'=> $request->email,
            'home_address'=> $request->home_address,
            'remark'=> $request->remark,
            'hiredate'=> $request->hiredate,
        ]);

        return $this->response->item($user, new UserTransformer())
            ->setStatusCode(201);
        return $this->response->created();
    }

    /*public function import(Request $request)
    {
        Excel::import(new UsersImport, $request->file('form'));
        
        return redirect('/')->with('success', 'All good!');
    }*/
    public function importExcel(Request $request)
    {
        Excel::import(new UsersImport, $request->file('file'));
        return back();
    }
}
