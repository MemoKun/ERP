<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Facades\DB;

use App\Models\OfflineAccountConf;
use App\Http\Requests\Api\OfflineAccountConfRequest;
use App\Transformers\OfflineAccountConfTransformer;
use App\Http\Requests\Api\EditStatuRequest;
use App\Http\Requests\Api\DestroyRequest;

use App\Http\Controllers\Traits\CURDTrait;
use App\Http\Controllers\Traits\ProcedureTrait;

use Dingo\Api\Exception\DeleteResourceFailedException;
use Dingo\Api\Exception\UpdateResourceFailedException;

/**
 * 账户配置资源
 * @Resource("offlineaccoutconf",uri="/api")
 */
class OfflineAccountConfController extends Controller
{
    use CURDTrait;
    use ProcedureTrait;

    const TRANSFORMER = OfflineAccountConfTransformer::class;
    const MODEL = OfflineAccountConf::class;

    public function index(OfflineAccountConfRequest $request)
    {
        return $this->allOrPage($request, self::MODEL, self::TRANSFORMER, 10);
    }

    public function store(OfflineAccountConfRequest $request)
    {
        return $this->traitStore($request->validated(), self::MODEL, self::TRANSFORMER);
    }

    public function show(OfflineAccountConf $offlineaccoutconf)
    {
        return $this->traitShow($offlineaccoutconf, self::TRANSFORMER);
    }

    public function update(OfflineAccountConfRequest $request, OfflineAccountConf $offlineaccoutconf)
    {
        return $this->traitUpdate($request, $offlineaccoutconf, self::TRANSFORMER);
    }

    public function destroy(OfflineAccountConf $offlineaccoutconf)
    {
        return $this->traitDestroy($offlineaccoutconf);
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
