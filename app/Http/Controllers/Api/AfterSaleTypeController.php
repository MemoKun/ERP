<?php

namespace App\Http\Controllers\Api;

use App\Models\AfterSaleType;
use App\Http\Requests\Api\AfterSaleTypeRequest;
use App\Http\Requests\Api\EditStatuRequest;
use App\Http\Requests\Api\DestroyRequest;
use App\Transformers\AfterSaleTypeTransformer;
use App\Http\Controllers\Traits\CURDTrait;

class AfterSaleTypeController extends Controller
{
    use CURDTrait;

    const TRANSFORMER = AfterSaleTypeTransformer::class;
    const MODEL = AfterSaleType::class;

    public function index(AfterSaleTypeRequest $request)
    {
        return $this->allOrPage($request, self::MODEL, self::TRANSFORMER, 10);
    }

    public function store(AfterSaleTypeRequest $request)
    {
        return $this->traitStore($request->validated(), self::MODEL, self::TRANSFORMER);
    }

    public function show(AfterSaleType $type)
    {
        return $this->traitShow($type, self::TRANSFORMER);
    }

    public function update(AfterSaleTypeRequest $request, AfterSaleType $type)
    {
        return $this->traitUpdate($request, $type, self::TRANSFORMER);
    }

    public function destroy(AfterSaleType $type)
    {
        return $this->traitDestroy($type);
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
