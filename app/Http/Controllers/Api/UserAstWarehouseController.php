<?php

namespace App\Http\Controllers\Api;

use App\Models\UserAstWarehouse;
use App\Http\Requests\Api\UserAstWarehouseRequest;
use App\Http\Requests\Api\EditStatuRequest;
use App\Http\Requests\Api\DestroyRequest;
use App\Transformers\UserAstWarehouseTransformer;
use App\Http\Controllers\Traits\CURDTrait;


class UserAstWarehouseController extends Controller
{
    use CURDTrait;

    const TRANSFORMER = UserAstWarehouseTransformer::class;
    const MODEL = UserAstWarehouse::class;

    
    public function index(UserAstWarehouseRequest $request)
    {
        return $this->allOrPage($request, self::MODEL, self::TRANSFORMER, 10);
    }

    /**
     * 新增关联仓库
     */
    public function store(UserAstWarehouseRequest $request)
    {
        return $this->traitStore($request->validated(), self::MODEL, self::TRANSFORMER);
    }

    /**
     * 显示单条关联仓库
     */
    public function show(UserAstWarehouse $userAstWarehouse)
    {
        return $this->traitShow($userAstWarehouse, self::TRANSFORMER);
    }

    /**
     * 修改关联仓库
     *
     */
    public function update(UserAstWarehouseRequest $request, UserAstWarehouse $userAstWarehouse)
    {
        return $this->traitUpdate($request, $userAstWarehouse, self::TRANSFORMER);
    }

    /**
     * 删除关联仓库
     */
    public function destroy(UserAstWarehouse $userAstWarehouse)
    {
        return $this->traitDestroy($userAstWarehouse);
    }

    /**
     * 删除一组关联仓库
     */
    public function destroybyIds(DestroyRequest $request)
    {
        return $this->traitDestroybyIds($request, self::MODEL);
    }

    /**
     * 更改一组关联仓库状态
     */
    public function editStatusByIds(EditStatuRequest $request)
    {
        return $this->traitEditStatusByIds($request, self::MODEL);
    }

}
