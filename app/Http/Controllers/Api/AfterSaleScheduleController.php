<?php

namespace App\Http\Controllers\Api;

use App\Models\AfterSaleSchedule;
use App\Http\Requests\Api\AfterSaleScheduleRequest;
use App\Http\Requests\Api\EditStatuRequest;
use App\Http\Requests\Api\DestroyRequest;
use App\Transformers\AfterSaleScheduleTransformer;
use App\Http\Controllers\Traits\CURDTrait;

/**
 * 售后进度资源
 * @Resource("aftersaleschedule",uri="/api")
 */
class AfterSaleScheduleController extends Controller
{
    use CURDTrait;

    const TRANSFORMER = AfterSaleScheduleTransformer::class;
    const MODEL = AfterSaleSchedule::class;

    public function index(AfterSaleScheduleRequest $request)
    {
        return $this->allOrPage($request, self::MODEL, self::TRANSFORMER, 10);
    }

    public function store(AfterSaleScheduleRequest $request)
    {
        return $this->traitStore($request->validated(), self::MODEL, self::TRANSFORMER);
    }

    public function update(AfterSaleScheduleRequest $request, AfterSaleSchedule $aftersaleschedule)
    {
        return $this->traitUpdate($request, $aftersaleschedule, self::TRANSFORMER);
    }

    public function show(AfterSaleSchedule $aftersaleschedule)
    {
        return $this->traitShow($aftersaleschedule, self::TRANSFORMER);
    }

    public function destroy(AfterSaleSchedule $aftersaleschedule)
    {
        return $this->traitDestroy($aftersaleschedule);
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
