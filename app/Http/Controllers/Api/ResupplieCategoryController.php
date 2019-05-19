<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\Api\ResupplieCategoryRequest;
use App\Http\Requests\Api\EditStatuRequest;
use App\Http\Requests\Api\DestroyRequest;
use App\Transformers\ResupplieCategoryTransformer;
use App\Models\ResupplieCategory;
use App\Http\Controllers\Traits\CURDTrait;

class ResupplieCategoryController extends Controller
{
    use CURDTrait;

    const TRANSFORMER = ResupplieCategoryTransformer::class;
    const MODEL = ResupplieCategory::class;

    //获取所有补件类别
    public function index(ResupplieCategoryRequest $request)
    {
        return $this->allOrPage($request, self::MODEL, self::TRANSFORMER, 0);
    }

    //新增补件类别
    public function store(ResupplieCategoryRequest $request)
    {
        $data[] = $request->validate();

        return $this->traitStore($data, self::MODEL, self::TRANSFORMER);
    }

    //显示单条补件类别
    public function show(ResupplieCategory $resupplieCategory)
    {
        return $this->traitShow($resupplieCategory, self::TRANSFORMER);
    }

    //修改补件类别
    public function update(ResupplieCategoryRequest $request, ResupplieCategory $resupplieCategory)
    {
        return $this->traitUpdate($request, $resupplieCategory, self::TRANSFORMER);
    }

    //删除补件类别
    public function destroy(ResupplieCategory $resupplieCategory)
    {
        return $this->traitDestroy($resupplieCategory);
    }

    //删除一组补件类别
    public function destroybyIds(DestroyRequest $request)
    {
        return $this->traitDestroybyIds($request, self::MODEL);
    }

    //更改一组补件类别状态
    public function editStatusByIds(EditStatuRequest $request)
    {
        return $this->traitEditStatusByIds($request, self::MODEL);
    }
}
