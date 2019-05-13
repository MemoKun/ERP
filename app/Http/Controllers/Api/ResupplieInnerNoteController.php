<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\Api\ResupplieInnerNoteRequest;
use App\Http\Requests\Api\EditStatuRequest;
use App\Http\Requests\Api\DestroyRequest;
use App\Transformers\ResupplieInnerNoteTransformer;
use App\Models\ResupplieInnerNote;
use App\Http\Controllers\Traits\CURDTrait;

class ResupplieInnerNoteController extends Controller
{
    use CURDTrait;

    const TRANSFORMER = ResupplieInnerNoteTransformer::class;
    const MODEL = ResupplieInnerNote::class;

    //获取所有内部便签
    public function index(ResupplieInnerNoteRequest $request)
    {
        return $this->allOrPage($request, self::MODEL, self::TRANSFORMER, 10);
    }

    //显示单条内部便签
    public function show(ResupplieInnerNote $resupplieInnerNote)
    {
        return $this->traitShow($resupplieInnerNote, self::TRANSFORMER);
    }

    //删除内部便签
    public function destroy(ResupplieInnerNote $resupplieInnerNote)
    {
        return $this->traitDestroy($resupplieInnerNote);
    }

    //删除一组内部便签
    public function destroybyIds(DestroyRequest $request)
    {
        return $this->traitDestroybyIds($request, self::MODEL);
    }

    //更改一组内部便签状态
    public function editStatusByIds(EditStatuRequest $request)
    {
        return $this->traitEditStatusByIds($request, self::MODEL);
    }
}
