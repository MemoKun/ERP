<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\Api\ResupplieResponsibleRequest;
use App\Http\Requests\Api\EditStatuRequest;
use App\Http\Requests\Api\DestroyRequest;
use App\Transformers\ResupplieResponsibleTransformer;
use App\Models\ResupplieResponsible;
use App\Http\Controllers\Traits\CURDTrait;

class ResupplieResponsibleController extends Controller
{
    use CURDTrait;

    const TRANSFORMER = ResupplieResponsibleTransformer::class;
    const MODEL = ResupplieResponsible::class;

    //获取所有补件责任方
    public function index(ResupplieResponsibleRequest $request)
    {
        return $this->allOrPage($request, self::MODEL, self::TRANSFORMER, 10);
    }

    //显示单条补件责任方
    public function show(ResupplieResponsible $resupplieResponsible)
    {
        return $this->traitShow($resupplieResponsible, self::TRANSFORMER);
    }

    //删除补件责任方
    public function destroy(ResupplieResponsible $resupplieResponsible)
    {
        return $this->traitDestroy($resupplieResponsible);
    }

    //删除一组补件责任方
    public function destroybyIds(DestroyRequest $request)
    {
        return $this->traitDestroybyIds($request, self::MODEL);
    }

    //更改一组补件责任方状态
    public function editStatusByIds(EditStatuRequest $request)
    {
        return $this->traitEditStatusByIds($request, self::MODEL);
    }
}