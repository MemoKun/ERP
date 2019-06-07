<?php
use Illuminate\Database\Eloquent\Model;
use Spatie\Permission\Traits\HasRoles;
use App\Models\User;

class Page extends Model
{
   use HasRoles;
   use user;
 
   protected $guard_name = 'web'; // 使用任何你想要的守卫
 
   // ...
}
