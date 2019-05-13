<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\Api\ResupplieProblemProductRequest;
use App\Http\Requests\Api\EditStatuRequest;
use App\Http\Requests\Api\DestroyRequest;
use App\Transformers\ResupplieProblemProductTransformer;
use App\Models\ResupplieProblemProduct;
use App\Http\Controllers\Traits\CURDTrait;

class ResupplieProblemProductController extends Controller
{
    use CURDTrait;

    const TRANSFORMER = ResupplieProblemProductTransformer::class;
    const MODEL = ResupplieProblemProduct::class;

    //获取所有问题产品
    public function index(ResupplieProblemProductRequest $request)
    {
        return $this->allOrPage($request, self::MODEL, self::TRANSFORMER, 10);
    }

    //显示单条问题产品
    public function show(ResupplieProblemProduct $resupplieProblemProduct)
    {
        return $this->traitShow($resupplieProblemProduct, self::TRANSFORMER);
    }

    //删除问题产品
    public function destroy(ResupplieProblemProduct $resupplieProblemProduct)
    {
        return $this->traitDestroy($resupplieProblemProduct);
    }

    //删除一组问题产品
    public function destroybyIds(DestroyRequest $request)
    {
        return $this->traitDestroybyIds($request, self::MODEL);
    }

    //更改一组问题产品状态
    public function editStatusByIds(EditStatuRequest $request)
    {
        return $this->traitEditStatusByIds($request, self::MODEL);
    }
}