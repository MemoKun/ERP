<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Permission\Traits\HasRoles;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Auth;

class User extends Authenticatable implements JWTSubject
{
    
    use HasRoles;
    use Notifiable;
    
    protected $guard_name = 'web';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'username', 'email', 'password','work_id','real_name','id_no','phone','email','home_address','remark','hiredate','departure_date','status'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public static function findByIds(array $ids)
    {
        $user = static::whereIn('id', $id)->get();
        return $user;
    }

    public static function findById(int $id)
    {
        $user = static::where('id', $id)->get();
        return $user;
    }

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }

    /**
     * 获取与用户关联的角色
     */
    public function roles()
    {
        return $this->hasMany(Role::class,'user_id');
    }

    public function purchase()
    {
        return $this->hasMany(Purchase::class, 'user_id');
    }

    public function order()
    {
        return $this->hasMany(Order::class,'business_personnel_id');
    }

    //public function changeOrder()
    //{
    //    return $this->hasMany(ChangeOrder::class, 'applier_id');
    //}

}
