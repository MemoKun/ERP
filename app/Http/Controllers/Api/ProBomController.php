<?php

namespace App\Http\Controllers\Api;

use App\Models\ProBom;
use App\Http\Requests\Api\ProBomRequest;
use App\Http\Requests\Api\ProBomMaterialRequest;
use App\Http\Requests\Api\EditStatuRequest;
use App\Http\Requests\Api\DestroyRequest;
use App\Http\Requests\Api\SearchProductRequest;
use App\Transformers\ProBomTransformer;
use App\Http\Controllers\Traits\CURDTrait;

class ProBomController extends Controller
{
    use CURDTrait;

    const TRANSFORMER = ProBomTransformer::class;
    const MODEL = ProBom::class;

    //获取数据
    public function index(ProBomRequest $request)
    {
        return $this->allOrPage($request, self::MODEL, self::TRANSFORMER, 10);
    }

    //筛选数据
    public function searchProducts(SearchProductRequest $request)
    {
    }

    //添加产品
    public function store(ProBomRequest $request, ProBomMaterialRequest $proBomMaterialRequest)
    {
        $data[] = $request->validated();
        $data[] = $proBomMaterialRequest->input('pro_bom_material');

        return $this->traitJoint2Store(
            $data,
            'proBomMaterial',
            $proBomMaterialRequest->rules(),
            self::MODEL,
            self::TRANSFORMER
        );
    }

    //删除产品
    public function destroy(ProBom $proBom)
    {
        return $this->traitDestroy($proBom);
    }

    //删除一组产品
    public function destroybyIds(DestroyRequest $request)
    {
        return $this->traitDestroybyIds($request, self::MODEL);
    }

    //显示产品信息
    public function show(ProBom $proBom)
    {
        return $this->traitShow($proBom, self::TRANSFORMER);
    }

    //修改产品信息
    public function update(ProBomRequest $request, ProBomMaterialRequest $proBomMaterialRequest, ProBom $proBom)
    {
        $data[] = $request->validated();
        $data[] = $proBomMaterialRequest->input('pro_bom_material');

        return $this->traitJoint2Update(
            $data,
            'proBomMaterial',
            $proBomMaterialRequest->rules(),
            $proBom,
            self::TRANSFORMER
        );
    }

    //修改一组产品
    public function editStatusByIds(EditStatuRequest $request)
    {
        return $this->traitEditStatusByIds($request, self::MODEL);
    }
}
