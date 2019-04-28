<?php

namespace App\Http\Controllers\Api;

use App\Models\RelateLogistics;
use App\Http\Requests\Api\RelateLogisticsRequest;
use App\Http\Requests\Api\RelateLogisticsCompanyRequest;
use App\Http\Requests\Api\DestroyRequest;
use App\Http\Requests\Api\EditStatuRequest;
use App\Http\Controllers\Traits\CURDTrait;
use App\Transformers\RelateLogisticsTransformer;

class RelateLogisticsController extends Controller
{
    use CURDTrait;

    const TRANSFORMER = RelateLogisticsTransformer::class;
    const MODEL = RelateLogistics::class;

    //获取关联物流
    public function index(RelateLogisticsRequest $request)
    {
        return $this->allOrPage($request, self::MODEL, self::TRANSFORMER, 10);
    }

    //新增关联物流
    public function store(RelateLogisticsRequest $request, RelateLogisticsCompanyRequest $relateLogisticsCompanyRequest)
    {
        $data[] = $request->validated();
        $data[] = $relateLogisticsCompanyRequest->input('relate_logistics_company');

        return $this->traitJoint2Store(
            $data,
            'relateLogisticsCompany',
            $relateLogisticsCompanyRequest->rules(),
            self::MODEL,
            self::TRANSFORMER
        );
    }

    //删除关联物流
    public function destroy(RelateLogistics $relateLogistics)
    {
        return $this->traitDestroy($relateLogistics);
    }

    //删除一组关联物流
    public function destroybyIds(DestroyRequest $request)
    {
        return $this->traitDestroybyIds($request, self::MODEL);
    }

    //显示单条关联物流
    public function show(RelateLogistics $relateLogistics)
    {
        return $this->traitShow($relateLogistics, self::TRANSFORMER);
    }

    //修改关联物流
    public function update(RelateLogisticsRequest $request, RelateLogisticsCompanyRequest $relateLogisticsCompanyRequest, RelateLogistics $relateLogistics)
    {
        $data[] = $request->validated();
        $data[] = $relateLogisticsCompanyRequest->input('relate_logistics_company');

        return $this->traitJoint2Update(
            $data,
            'relateLogisticsCompany',
            $relateLogisticsCompanyRequest->rules(),
            $relateLogistics,
            self::TRANSFORMER
        );
    }

    //修改一组关联物流状态
    public function editStatusByIds(EditStatuRequest $request)
    {
        return $this->traitEditStatusByIds($request, self::MODEL);
    }
}
