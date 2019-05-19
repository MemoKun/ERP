<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Facades\DB;

use App\Models\MiniPackage;
use App\Http\Requests\Api\MiniPackageRequest;
use App\Http\Requests\Api\EditStatuRequest;
use App\Http\Requests\Api\DestroyRequest;
use App\Transformers\MiniPackageTransformer;
use App\Http\Controllers\Traits\ProcedureTrait;
use App\Http\Controllers\Traits\CURDTrait;

/**
 * 最小包资源
 * @Resource("minipackage",uri="/api")
 */
class MiniPackageController extends Controller
{
    use CURDTrait;
    use ProcedureTrait;

    const TRANSFORMER = MiniPackageTransformer::class;
    const MODEL = MiniPackage::class;
    const PerPage = 10;

    public function index(MiniPackageRequest $request)
    {
        return $this->allOrPage($request, self::MODEL, self::TRANSFORMER, self::PerPage);
    }

    public function store(MiniPackageRequest $request)
    {
        return $this->traitStore($request->validated(), self::MODEL, self::TRANSFORMER);
    }

    public function show(MiniPackage $minipackage)
    {
        return $this->traitShow($minipackage, self::TRANSFORMER);
    }

    public function update(MiniPackageRequest $request, MiniPackage $minipackage)
    {
        return $this->traitUpdate($request, $minipackage, self::TRANSFORMER);
    }

    public function destroy(MiniPackage $minipackage)
    {
        return $this->traitDestroy($minipackage);
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
