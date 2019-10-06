# ERP

### 运行环境
* Nginx 1.8+
* PHP 7.0+
* Mysql 5.7+
* Redis 3.0+

### 开发环境部署/安装
 
 本项目代码使用 PHP 框架 Laravel 5.5 开发，本地开发环境使用 Laravel Homestead。
 
 下文将在假定已经安装好了 Homestead 的情况下进行说明。如果您还未安装 Homestead，可以参照 Homestead 安装与设置 进行安装配置。
 

* 克隆项目到本地
* 运行开发环境搭建参考：https://laravel-china.org/docs/laravel-development-environment/5.5
* 复制根目录下 `.env.example` 文件重命名为 `.env`
* 项目根目录执行命令 `composer update`安装laravel扩展包依赖,
  `viacreative/sudo-su`需要单独安装：`composer require viacreative/sudo-su`
* 项目根目录执行命令 `npm install` (windows 及 虚拟机用户请使用`npm install --no-bin-links`)安装前端扩展;
  具体前端工作流参照：http://note.youdao.com/noteshare?id=b1a0bd5e5858a82796ab02285d38e12f
* 生成密钥 `php artisanpmn key:generate`
* 生成 JWT 密钥 `php artisan jwt:secret`


###  composer 扩展包说明
  
| 扩展包 | 描述 | 场景 | 
| - | :-: | -: |
| dingo/api | api开发包 |  | 
| tymon/jwt-auth | jwt认证 | 用户登录授权策略 |
| barryvdh/laravel-debugbar | 页面调试工具栏 (对 phpdebugbar 的封装) | 开发环境中的 DEBUG |
| viacreative/sudo-su | 用户切换 | 开发环境中快速切换登录账号 |
| gregwar/captcha | 图片验证码 | api开发专用图片验证码 |
| xethron/migrations-generator": "^2.0 | 命令行生成migration文件 | 命令行生成migration文件 |
| "maatwebsite/excel": "^3.1" | Excel表格导入导出 | Excel表格导入导出 |
| "spatie/laravel-permission": "^2.37" | 基于RBAC的后端权限 | 基于RBAC的后端权限 |
*  `liyu/dingo-serializer-switch`: 单一资源输出去掉data包裹,
   在路由中添加 `'middleware' => ['serializer:array', 'bindings']`中间件：
   api输出结构：
```
{
    "id": 1,
    "markcode": "CANCELORDER",
    "markname": "取消订单",
    "color": "#555555",
    "description": "描述",
    "status": false,
    "created_at": "2018-06-11 15:04:17",
    "updated_at": "2018-06-11 15:04:17"
}
```
原来的结构：
```
{
    "data": [
        {
            "id": 1,
            "markcode": "CANCELORDER",
            "markname": "取消订单",
            "color": "#555555",
            "description": "描述",
            "status": false,
            "created_at": "2018-06-11 15:04:17",
            "updated_at": "2018-06-11 15:04:17"
        }
    ]
}
```
*  关于laravel-permission
```
这个包允许你在数据库中管理用户的权限和角色。

当你安装了扩展包之后你就可以这样做：

// 给用户添加一个权限
$user->givePermissionTo('edit articles');

// 通过角色添加权限。
$user->assignRole('writer');

// 给角色添加一个权限
$role->givePermissionTo('edit articles');
如果你给单个用户添加了多个守卫(guard)，扩展包也可以处理的很好，每一个分配给用户的守卫都有它自己的权限和角色，阅读 using multiple guards章节可以看见更多的信息。

因为所有的权限将注册在Laravel's gate上，所以你可以调用 Laravel 默认的 'can' 方法来测试用户是否有权限：

$user->can('edit articles');

使用：
相关
引入：
use Spatie\Permission\Traits\HasRoles;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

相关模块：
UsersController.php
RolesController.php

参考网址：https://segmentfault.com/a/1190000020316285?utm_source=tag-newest

```
*  关于laravel-excel
```
Laravel Excel功能：

轻松将集合导出到Excel。

使用自动分块导出查询以获得更好的性能。

队列导出以获得更好的性能。

轻松将Blade视图导出到Excel。

轻松导入收藏。

分块读取excel文件。

批量处理import。
参考网址：https://docs.laravel-excel.com/3.1/getting-started/installation.html
```

### API说明
 
---
* 调用说明：除了登录、注册以外，其他所有调用都必须在header中附带Authorization头 `Authorization:bearer eyJ0eXA...`
* 生成接口文档命令：

`php artisan api:docs --name API文档 --output-file docs/apidocs/apidoc.md`

编写规则：https://laravel-china.org/docs/dingo-api/2.0.0/API-Blueprint-Documentation/1454

### 前端开发说明 
 
 --- 
 路由方面，根据router中的路由配置文件index.js，组件不需要注册，在index.js中添加路由即可动态生成父级及子级路由。
 ```
  {
     name: 'CRMCustomer',
     path: '/CRMCustomer',
     component: Layout,
     redirect: '/CRMCustomer/customerManagement',
     meta: {title: 'CRM客户管理', icon: 'cus',requireAuth: true},
     children: [
       {
         path: 'customerMag',
         name: 'CustomerMag',
         component: resolve => void(require(['../views/CRMCustomer/customerMag.vue'], resolve)),
         meta: {title: '客户管理', icon: 'cusMag',requireAuth: true}
       },
       {
         path: 'SMSTemplate',
         name: 'SMSTemplate',
         component: resolve => void(require(['../views/CRMCustomer/SMSTemplate.vue'], resolve)),
         meta: {title: '短信模板', icon: 'ordMsg',requireAuth: true}
       }
     ]
   }
 ```
 * 注：children中至少有两个子路由才会展示子级，否则按一个父级路由处理；
 
 ## Migration文件
 php artisan migrate:generate 自动生成migration文件

 
