<?php
/**
 * Created by PhpStorm.
 * User: lou
 * Date: 2019/2/12
 * Time: 23:07
 */

namespace App\Http\Controllers\Api;

use App\Http\Requests\Api\DestroyRequest;
use App\Models\Role;
use App\Http\Requests\Api\RoleRequest;
use App\Http\Controllers\Traits\CURDTrait;
use App\Transformers\RoleTransformer;
use Dingo\Api\Exception\DeleteResourceFailedException;
use Illuminate\Support\Facades\DB;

class RolesController extends Controller
{
    use CURDTrait;

    const TRANSFORMER = RoleTransformer::class;
    const MODEL = Role::class;

    public function index(RoleRequest $request){
        return $this->allOrPage($request,self::MODEL,self::TRANSFORMER,10);
    }

    public function destroyByIds(DestroyRequest $request){
        $ids = explode(',', $request->input('ids'));

        DB::transaction(function () use ($ids) {

//            $combinations = Combination::whereIn('pid', $ids);
//            $combinations->get()->map(function ($item){
//                //删除多对多关系
//                $item->productComponents()->detach();
//            });
//            //删除组合sku
//            $delCom = $combinations->delete();
//
//            $product = Product::whereIn('id',$ids)->with('productComponents')->get();
//            //删除子件 还有子件的库存 和 订单没有删除
//            $delComp = $product->map(function($item){
//                $item->productComponents()->delete();
//            });

            //删除产品
            $delProduct = Role::destroy($ids);

            if ($delProduct === false) {
                throw new DeleteResourceFailedException('The given data was invalid.');
            }

        });

        return $this->noContent();
    }
}