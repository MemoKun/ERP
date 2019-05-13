<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\Api\ResupplieEsheetRequest;
use App\Http\Requests\Api\EditStatuRequest;
use App\Http\Requests\Api\DestroyRequest;
use App\Transformers\ResupplieEsheetTransformer;
use App\Models\ResupplieEsheet;
use App\Http\Controllers\Traits\CURDTrait;

class ResupplieEsheetController extends Controller
{
    use CURDTrait;

    const TRANSFORMER = ResupplieEsheetTransformer::class;
    const MODEL = ResupplieEsheet::class;

    //获取所有电子面单
    public function index(ResupplieEsheetRequest $request)
    {
        return $this->allOrPage($request, self::MODEL, self::TRANSFORMER, 10);
    }

    //显示单条电子面单
    public function show(ResupplieEsheet $resupplieEsheet)
    {
        return $this->traitShow($resupplieEsheet, self::TRANSFORMER);
    }

    //删除电子面单
    public function destroy(ResupplieEsheet $resupplieEsheet)
    {
        return $this->traitDestroy($resupplieEsheet);
    }

    //删除一组电子面单
    public function destroybyIds(DestroyRequest $request)
    {
        return $this->traitDestroybyIds($request, self::MODEL);
    }

    //更改一组电子面单状态
    public function editStatusByIds(EditStatuRequest $request)
    {
        return $this->traitEditStatusByIds($request, self::MODEL);
    }
}
