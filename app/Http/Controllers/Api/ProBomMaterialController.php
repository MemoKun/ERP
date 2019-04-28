<?php

namespace App\Http\Controllers\Api;

use App\Models\ProBomMaterial;
use App\Http\Requests\Api\ProBomMaterialRequest;
use App\Http\Requests\Api\DestroyRequest;
use App\Transformers\ProBomMaterialTransformer;
use App\Http\Controllers\Traits\CURDTrait;

class ProBomMaterialController extends Controller
{
    use CURDTrait;

    const TRANSFORMER = ProBomMaterialTransformer::class;
    const MODEL = ProBomMaterial::class;

    //获取数据
    public function index(ProBomMaterialRequest $request)
    {
        return $this->allOrPage($request, self::MODEL, self::TRANSFORMER, 10);
    }

    //删除原材料
    public function destroy(ProBomMaterial $proBomMaterial)
    {
        return $this->traitDestroy($proBomMaterial);
    }

    //删除一组原材料
    public function destroybyIds(DestroyRequest $request)
    {
        return $this->traitDestroybyIds($request, self::MODEL);
    }

    //显示原材料
    public function show(ProBomMaterial $proBomMaterial)
    {
        return $this->traitShow($proBomMaterial, self::TRANSFORMER);
    }

    //更改一组原材料
    public function editStatusByIds(EditStatuRequest $request)
    {
        return $this->traitEditStatusByIds($request, self::MODEL);
    }
}
