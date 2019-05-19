<?php

namespace App\Http\Controllers\Api;

use App\Models\BrushLockConf;
use Illuminate\Support\Facades\DB;

use App\Http\Requests\Api\BrushLockConfRequest;
use App\Transformers\BrushLockConfTransformer;
use App\Http\Requests\Api\EditStatuRequest;
use App\Http\Requests\Api\DestroyRequest;

use App\Http\Controllers\Traits\CURDTrait;
use App\Http\Controllers\Traits\ProcedureTrait;


/**
 * 刷单资源
 * @Resource("brushlockconf",uri="/api")
 */
class BrushLockConfController extends Controller
{
    use CURDTrait;
    use ProcedureTrait;

    const TRANSFORMER = BrushLockConfTransformer::class;
    const MODEL = BrushLockConf::class;

    public function index(BrushLockConfRequest $request)
    {
        return $this->allOrPage($request, self::MODEL, self::TRANSFORMER, 10);
    }

    public function store(BrushLockConfRequest $request)
    {
        return $this->traitStore($request->validated(), self::MODEL, self::TRANSFORMER);
    }

    public function show(BrushLockConf $brushlockconf)
    {
        return $this->traitShow($brushlockconf, self::TRANSFORMER);
    }

    public function update(BrushLockConfRequest $request, BrushLockConf $brushlockconf)
    {
        return $this->traitUpdate($request, $brushlockconf, self::TRANSFORMER);
    }

    public function destroy(BrushLockConf $brushlockconf)
    {
        return $this->traitDestroy($brushlockconf);
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
