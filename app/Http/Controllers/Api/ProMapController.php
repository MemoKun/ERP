<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Facades\DB;

use App\Models\ProMap;
use App\Http\Requests\Api\ProMapRequest;
use App\Http\Requests\Api\EditStatuRequest;
use App\Http\Requests\Api\DestroyRequest;
use App\Transformers\ProMapTransformer;
use App\Http\Controllers\Traits\CURDTrait;
use App\Http\Controllers\Traits\ProcedureTrait;


/**
 * 映射管理资源
 * @Resource("proMap",uri="/api")
 */
class ProMapController extends Controller
{
    use CURDTrait;
    use ProcedureTrait;

    const TRANSFORMER = ProMapTransformer::class;
    const MODEL = ProMap::class;
    const PerPage = 10;

    public function index(ProMapRequest $request)
    {
        return $this->allOrPage($request, self::MODEL, self::TRANSFORMER, self::PerPage);
    }

    public function store(ProMapRequest $request)
    {
        return $this->traitStore($request->validated(), self::MODEL, self::TRANSFORMER);
    }

    public function show(ProMap $promap)
    {
        return $this->traitShow($promap, self::TRANSFORMER);
    }

    public function update(ProMapRequest $request, ProMap $promap)
    {
        return $this->traitUpdate($request, $promap, self::TRANSFORMER);
    }

    public function destroy(ProMap $promap)
    {
        return $this->traitDestroy($promap);
    }

    public function destroybyIds(DestroyRequest $request)
    {
        return $this->traitDestroybyIds($request, self::MODEL);
    }

    public function editStatusByIds(EditStatuRequest $request)
    {
        return $this->traitEditStatusByIds($request, self::MODEL);
    }
}
