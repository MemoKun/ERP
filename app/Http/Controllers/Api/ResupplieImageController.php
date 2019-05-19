<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\Api\ResupplieImageRequest;
use App\Http\Requests\Api\EditStatuRequest;
use App\Http\Requests\Api\DestroyRequest;
use App\Transformers\ResupplieImageTransformer;
use App\Models\ResupplieImage;
use App\Http\Controllers\Traits\CURDTrait;

class ResupplieImageController extends Controller
{
    use CURDTrait;

    const TRANSFORMER = ResupplieImageTransformer::class;
    const MODEL = ResupplieImage::class;

    //获取所有图片信息
    public function index(ResupplieImageRequest $request)
    {
        return $this->allOrPage($request, self::MODEL, self::TRANSFORMER, 10);
    }

    //显示单条图片信息
    public function show(ResupplieImage $resupplieImage)
    {
        return $this->traitShow($resupplieImage, self::TRANSFORMER);
    }

    //删除图片信息
    public function destroy(ResupplieImage $resupplieImage)
    {
        return $this->traitDestroy($resupplieImage);
    }

    //删除一组图片信息
    public function destroybyIds(DestroyRequest $request)
    {
        return $this->traitDestroybyIds($request, self::MODEL);
    }

    //更改一组图片信息状态
    public function editStatusByIds(EditStatuRequest $request)
    {
        return $this->traitEditStatusByIds($request, self::MODEL);
    }
}
