<?php

namespace App\Http\Controllers\Api;

use App\Models\AfterSaleDefPro;
use App\Http\Requests\Api\AfterSaleDefProRequest;
use App\Http\Requests\Api\EditStatuRequest;
use App\Http\Requests\Api\DestroyRequest;
use App\Transformers\AfterSaleDefProTransformer;
use App\Http\Controllers\Traits\CURDTrait;

class AfterSaleDefProController extends Controller
{
    use CURDTrait;

    const TRANSFORMER = AfterSaleDefProTransformer::class;
    const MODEL = AfterSaleDefPro::class;

    public function index(AfterSaleDefProRequest $request)
    {
        return $this->allOrPage($request, self::MODEL, self::TRANSFORMER, 10);
    }

    public function store(AfterSaleDefProRequest $request)
    {
        return $this->traitStore($request->validated(), self::MODEL, self::TRANSFORMER);
    }

    public function show(AfterSaleDefPro $aftersaledefpro)
    {
        return $this->traitShow($aftersaledefpro, self::TRANSFORMER);
    }

    public function destroy(AfterSaleDefPro $aftersaledefpro)
    {
        return $this->traitDestroy($aftersaledefpro);
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
