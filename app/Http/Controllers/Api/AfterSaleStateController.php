<?php

namespace App\Http\Controllers\Api;

use App\Models\AfterSaleState;
use App\Http\Requests\Api\AfterSaleStateRequest;
use App\Http\Requests\Api\EditStatuRequest;
use App\Http\Requests\Api\DestroyRequest;
use App\Transformers\AfterSaleStateTransformer;
use App\Http\Controllers\Traits\CURDTrait;

class AfterSaleStateController extends Controller
{
    use CURDTrait;

    const TRANSFORMER = AfterSaleStateTransformer::class;
    const MODEL = AfterSaleState::class;

    public function index(AfterSaleStateRequest $request)
    {
        return $this->allOrPage($request, self::MODEL, self::TRANSFORMER, 10);
    }

    public function store(AfterSaleStateRequest $request)
    {
        return $this->traitStore($request->validated(), self::MODEL, self::TRANSFORMER);
    }

    public function show(AfterSaleState $state)
    {
        return $this->traitShow($state, self::TRANSFORMER);
    }

    public function update(AfterSaleStateRequest $request, AfterSaleState $state)
    {
        return $this->traitUpdate($request, $state, self::TRANSFORMER);
    }

    public function destroy(AfterSaleState $state)
    {
        return $this->traitDestroy($state);
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
