<?php

namespace App\Http\Controllers\Api;

use App\Models\AfterSale;
use App\Models\AfterSaleDefPro;
use App\Models\AfterSaleSchedule;

use Illuminate\Support\Facades\DB;

use App\Http\Requests\Api\AfterSaleRequest;
use App\Http\Requests\Api\AfterSaleDefProRequest;
use App\Http\Requests\Api\AfterSaleScheduleRequest;
use App\Http\Requests\Api\EditStatuRequest;
use App\Http\Requests\Api\DestroyRequest;

use App\Transformers\AfterSaleTransformer;

use App\Http\Controllers\Traits\CURDTrait;
use App\Http\Controllers\Traits\ProcedureTrait;

use Dingo\Api\Exception\DeleteResourceFailedException;
use Dingo\Api\Exception\UpdateResourceFailedException;

class AfterSaleController extends Controller
{
    use CURDTrait;
    use ProcedureTrait;

    const TRANSFORMER = AfterSaleTransformer::class;
    const MODEL = AfterSale::class;

    public function index(AfterSaleRequest $request)
    {
        return $this->allOrPage($request, self::MODEL, self::TRANSFORMER, 10);
    }

    public function store(AfterSaleRequest $request, AfterSaleDefProRequest $defprorequest)
    {
        $data[] = $request->validated();
        $data[] = $request->input('after_sale_def_pro');

        return $this->traitJoint2Store(
            $data,
            'afterSaleDefPros',
            $defprorequest->rules(),
            self::MODEL,
            self::TRANSFORMER
        );
    }

    public function show(AfterSale $aftersale)
    {
        return $this->traitShow($aftersale, self::TRANSFORMER);
    }

    public function update(AfterSaleRequest $request, 
                           AfterSaleDefProRequest $defprorequest, 
                           AfterSale $aftersale)
    {
        $data[] = $request->validated();
        $data[] = $request->input('after_sale_def_pro');

        return $this->traitJoint2Update(
            $data,
            'afterSaleDefPros',
            $defprorequest->rules(),
            self::MODEL,
            self::TRANSFORMER
        );
    }

    public function destroy(AfterSale $aftersale)
    {
        DB::transaction(function () use ($aftersale) {
            //删除问题产品
            $aftersaledefpros = AfterSaleDefPro::where('after_sale_id', $aftersale->id);
            $delDefPro = $aftersaledefpros->delete();
            $aftersaledefpros->get()->map(function($item){
                $item->afterSaleDefPros()->delete();
            });

            // 删除售后进度
            $aftersaleschedules = AfterSaleSchedule::where('after_sale_id', $aftersale->id);
            $delSchedule = $aftersaleschedules->delete();
            $aftersaleschedules->get()->map(function($item){
                $item->afterSaleSchedules()->delete();
            });
            
            //删除售后
            $delaftersale = AfterSale::where('id', $aftersale->id);
            $delAfterSale = $delaftersale->delete();

            if ($delDefPro === false || $delSchedule === false || $delAfterSale === false) {
                throw new DeleteResourceFailedException('The given data was invalid.');
            }
        });

        return $this->noContent();
    }

    public function destroybyIds(DestroyRequest $request)
    {
        $ids = explode(',', $request->input('ids'));

        DB::transaction(function () use ($ids) {
            //删除问题产品
            $aftersaledefpros = AfterSaleDefPro::whereIn('after_sale_id', $ids);
            $delDefPro = $aftersaledefpros->delete();
            $aftersaledefpros->get()->map(function($item){
                $item->afterSaleDefPros()->delete();
            });

            // 删除售后进度
            $aftersaleschedules = AfterSaleSchedule::whereIn('after_sale_id', $ids);
            $delSchedule = $aftersaleschedules->delete();
            $aftersaleschedules->get()->map(function($item){
                $item->afterSaleSchedules()->delete();
            });
            
            //删除售后
            $aftersale = AfterSale::whereIn('id', $ids);
            $delAfterSale = $aftersale->delete();

            if ($delDefPro === false || $delSchedule === false || $delAfterSale === false
            ) {
                throw new DeleteResourceFailedException('The given data was invalid.');
            }

        });

        return $this->noContent();
    }

    public function editStatusByIds(EditStatuRequest $request)
    {
        return $this->traitEditStatusByIds($request, self::MODEL);
    }

    public function isLockOrUnlock(AfterSale $aftersale)
    {
        return $this->traitAction(
            $aftersale,
            !$aftersale->status || $aftersale->getOriginal('after_sale_status') >= $aftersale::AFTERSALE_STATUS_SUBMIT,
            '无法锁定',
            'lockOrUnlock'
        );
    }

    public function isAudit(AfterSale $aftersale)
    {
        return $this->traitAction(
            $aftersale,
            !$aftersale->status || $aftersale->getOriginal('order_status') != $aftersale::ORDER_STATUS_NEW || $aftersale->getOriginal('after_sale_status') == $aftersale::AFTERSALE_STATUS_LOCK,
            '提交出错',
            'audit'
        );
    }

    public function isUnAudit(AfterSale $aftersale)
    {
        return $this->traitAction(
            $aftersale,
            !$aftersale->status || $aftersale->getOriginal('order_status') != $aftersale::ORDER_STATUS_SUBMIT,
            '退审出错',
            'unAudit'
        );
    }

}
