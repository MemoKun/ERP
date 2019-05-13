<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\Api\ResupplieProgressRequest;
use App\Transformers\ResupplieProgressTransformer;
use App\Http\Requests\Api\DestroyRequest;
use App\Models\ResupplieProgress;
use App\Http\Controllers\Traits\CURDTrait;

class ResupplieProgressController extends Controller
{
    use CURDTrait;

    const TRANSFORMER = ResupplieProgressTransformer::class;
    const MODEL = ResupplieProgress::class;

    //获取所有补件进度
    public function index(ResupplieProgressRequest $request)
    {
        return $this->allOrPage($request, self::MODEL, self::TRANSFORMER, 10);
    }

    //新增补件进度
    public function store(ResupplieProgressRequest $request)
    {
        return $this->traitStore($request->validated(), self::MODEL, self::TRANSFORMER);
    }

    //删除补件进度
    public function destroy(ResupplieProgress $resupplieProgress)
    {
        return $this->traitDestroy($resupplieProgress);
    }

    //删除一组补件进度
    public function destroybyIds(DestroyRequest $request)
    {
        return $this->traitDestroybyIds($request, self::MODEL);
    }

    //显示单条补件进度
    public function show(ResupplieProgress $resupplieProgress)
    {
        return $this->traitShow($resupplieProgress, self::TRANSFORMER);
    }

    //更改补件进度
    public function update(ResupplieProgressRequest $request, ResupplieProgress $resupplieProgress)
    {
        return $this->traitUpdate($request, $resupplieProgress, self::TRANSFORMER);
    }
}
