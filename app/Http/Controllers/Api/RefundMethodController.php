<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\Api\RefundMethodRequest;
use App\Http\Requests\Api\EditStatuRequest;
use App\Http\Requests\Api\DestroyRequest;
use App\Transformers\RefundMethodTransformer;
use App\Models\RefundMethod;
use App\Http\Controllers\Traits\CURDTrait;

class RefundMethodController extends Controller
{
    use CURDTrait;

    const TRANSFORMER = RefundMethodTransformer::class;
    const MODEL = RefundMethod::class;

    //获取所有包件类型
    public function index(RefundMethodRequest $request)
    {
        return $this->allOrPage($request, self::MODEL, self::TRANSFORMER, 10);
    }

    //新增包件类型
    public function store(RefundMethodRequest $request)
    {
        $data[] = $request->validate();

        return $this->traitStore($data, self::MODEL, self::TRANSFORMER);
    }

    //显示单条包件类型
    public function show(RefundMethod $refundMethod)
    {
        return $this->traitShow($refundMethod, self::TRANSFORMER);
    }

    //修改单条包件类型
    public function update(RefundMethodRequest $request, RefundMethod $refundMethod)
    {
        return $this->traitUpdate($request, $refundMethod, self::TRANSFORMER);
    }

    //删除包件类型
    public function destroy(RefundMethod $refundMethod)
    {
        return $this->traitDestroy($refundMethod);
    }

    //删除一组包件类型
    public function destroybyIds(DestroyRequest $request)
    {
        return $this->traitDestroybyIds($request, self::MODEL);
    }

    //修改一组包件类型状态
    public function editStatusByIds(EditStatuRequest $request)
    {
        return $this->traitEditStatusByIds($request, self::MODEL);
    }
}
