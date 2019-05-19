<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\Api\PackageTypeRequest;
use App\Http\Requests\Api\EditStatuRequest;
use App\Http\Requests\Api\DestroyRequest;
use App\Transformers\PackageTypeTransformer;
use App\Models\PackageType;
use App\Http\Controllers\Traits\CURDTrait;

class PackageTypeController extends Controller
{
    use CURDTrait;

    const TRANSFORMER = PackageTypeTransformer::class;
    const MODEL = PackageType::class;

    //获取所有包件类型
    public function index(PackageTypeRequest $request)
    {
        return $this->allOrPage($request, self::MODEL, self::TRANSFORMER, 10);
    }

    //新增包件类型
    public function store(PackageTypeRequest $request)
    {
        $data[] = $request->validate();

        return $this->traitStore($data, self::MODEL, self::TRANSFORMER);
    }

    //显示单条包件类型
    public function show(PackageType $packageType)
    {
        return $this->traitShow($packageType, self::TRANSFORMER);
    }

    //修改单条包件类型
    public function update(PackageTypeRequest $request, PackageType $packageType)
    {
        return $this->traitUpdate($request, $packageType, self::TRANSFORMER);
    }

    //删除包件类型
    public function destroy(PackageType $packageType)
    {
        return $this->traitDestroy($packageType);
    }

    //删除一组包件类型
    public function destroybyIds(DestroyRequest $request)
    {
        return $this->traitDestroybyIds($request, self::MODEL);
    }

    //修改一组包件类型状态
    public function editStatusByIds(EditStatuRequest $request)
    {
        return $this->traitEditStatusByIds($request, self::MODEL);
    }
}
