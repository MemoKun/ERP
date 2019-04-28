<?php

namespace App\Http\Controllers\Api;

use App\Models\RelateLogisticsCompany;
use App\Http\Requests\Api\RelateLogisticsCompanyRequest;
use App\Http\Requests\Api\EditStatuRequest;
use App\Http\Requests\Api\DestroyRequest;
use App\Transformers\RelateLogisticsCompanyTransformer;
use App\Http\Controllers\Traits\CURDTrait;

class RelateLogisticsCompanyController extends Controller
{
    use CURDTrait;
    const TRANSFORMER = RelateLogisticsCompanyTransformer::class;
    const MODEL = RelateLogisticsCompany::class;

    //获取关联物流物流公司
    public function index(RelateLogisticsCompanyRequest $request)
    {
        return $this->allOrPage($request, self::MODEL, self::TRANSFORMER, 10);
    }

    //删除物流公司
    public function destroy(RelateLogisticsCompany $relateLogisticsCompany)
    {
        return $this->traitDestroy($relateLogisticsCompany);
    }

    //删除一组物流公司
    public function destroybyIds(DestroyRequest $request)
    {
        return $this->traitDestroybyIds($request, self::MODEL);
    }

    //显示单条物流公司
    public function show(RelateLogisticsCompany $relateLogisticsCompany)
    {
        return $this->traitShow($relateLogisticsCompany, self::TRANSFORMER);
    }

    //修改一组物流公司状态
    public function editStatusByIds(EditStatuRequest $request)
    {
        return $this->traitEditStatusByIds($request, self::MODEL);
    }
}
