<?php

namespace App\Http\Controllers\Api;

use App\Models\UserAstSupplier;
use App\Http\Requests\Api\UserAstSupplierRequest;
use App\Http\Requests\Api\EditStatuRequest;
use App\Http\Requests\Api\DestroyRequest;
use App\Transformers\UserAstSupplierTransformer;
use App\Http\Controllers\Traits\CURDTrait;


class UserAstSupplierController extends Controller
{
    use CURDTrait;

    const TRANSFORMER = UserAstSupplierTransformer::class;
    const MODEL = UserAstSupplier::class;

    
    public function index(UserAstSupplierRequest $request)
    {
        return $this->allOrPage($request, self::MODEL, self::TRANSFORMER, 10);
    }

    /**
     * 新增关联供应商
     */
    public function store(UserAstSupplierRequest $request)
    {
        return $this->traitStore($request->validated(), self::MODEL, self::TRANSFORMER);
    }

    /**
     * 显示单条关联供应商
     */
    public function show(UserAstSupplier $userAstSupplier)
    {
        return $this->traitShow($userAstSupplier, self::TRANSFORMER);
    }

    /**
     * 修改关联供应商
     *
     */
    public function update(UserAstSupplierRequest $request, UserAstSupplier $userAstSupplier)
    {
        return $this->traitUpdate($request, $userAstSupplier, self::TRANSFORMER);
    }

    /**
     * 删除关联供应商
     */
    public function destroy(UserAstSupplier $userAstSupplier)
    {
        return $this->traitDestroy($userAstSupplier);
    }

    /**
     * 删除一组关联供应商
     */
    public function destroybyIds(DestroyRequest $request)
    {
        return $this->traitDestroybyIds($request, self::MODEL);
    }

    /**
     * 更改一组关联供应商状态
     */
    public function editStatusByIds(EditStatuRequest $request)
    {
        return $this->traitEditStatusByIds($request, self::MODEL);
    }

}
