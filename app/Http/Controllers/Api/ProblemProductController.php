<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\Api\ProblemProductRequest;
use App\Http\Requests\Api\EditStatuRequest;
use App\Http\Requests\Api\DestroyRequest;
use App\Transformers\ProblemProductTransformer;
use App\Models\ProblemProduct;
use App\Http\Controllers\Traits\CURDTrait;

/**
 * 费用类型资源
 * @Resource("feetypes",uri="/api")
 */
class ProblemProductController extends Controller
{
    use CURDTrait;

    const TRANSFORMER = ProblemProductTransformer::class;
    const MODEL = ProblemProduct::class;

    
    public function index(ProblemProductRequest $request)
    {
        return $this->allOrPage($request, self::MODEL, self::TRANSFORMER, 10);
    }

    
    public function store(ProblemProductRequest $request)
    {
        $data[] = $request->validated();
        return $this->traitStore($data, self::MODEL, self::TRANSFORMER);
    }

    
    public function show(ProblemProduct $problemProduct)
    {
        return $this->traitShow($problemProduct, self::TRANSFORMER);
    }

    
    public function update(ProblemProductRequest $request, ProblemProduct $problemProduct)
    {
        return $this->traitUpdate($request, $problemProduct, self::TRANSFORMER);
    }

    public function destroy(ProblemProduct $problemProduct)
    {
        return $this->traitDestroy($problemProduct);
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
