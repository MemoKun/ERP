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
    const PerPage = 8;

    public function index(AfterSaleRequest $request)
    {
        //return $this->allOrPage($request, self::MODEL, self::TRANSFORMER, 10);
        $order_status = $request->input('order_status');
        $is_finish = $request->input('is_finish');
        $after_sale_order_no = $request->input('after_sale_order_no');
        $order_no = $request->input('order_no');
        $vip_name = $request->input('vip_name');
        $user_id = $request->input('user_id');
        $after_sale_status = $request->input('after_sale_status');
        $after_sale_type = $request->input('after_sale_type');
        $order_phone = $request->input('order_phone');
        $after_sale_group = $request->input('after_sale_group');
        $problem_description = $request->input('problem_description');
        $tag_name = $request->input('tag_name');
        $afterSale = AfterSale::query()->where('order_status', 'like', '%'.$order_status.'%')
        ->where('is_finish', 'like', '%'.$is_finish.'%')
        ->where('after_sale_order_no', 'like', '%'.$after_sale_order_no.'%')
        ->where('order_no', 'like', '%'.$order_no.'%')
        ->where('vip_name', 'like', '%'.$vip_name.'%')
        ->where('user_id', 'like', '%'.$user_id.'%')
        ->where('after_sale_status', 'like', '%'.$after_sale_status.'%')
        ->where('after_sale_type', 'like', '%'.$after_sale_type.'%')
        ->where('order_phone', 'like', '%'.$order_phone.'%')
        ->where('after_sale_group', 'like', '%'.$after_sale_group.'%')
        ->where('problem_description', 'like', '%'.$problem_description.'%')
        ->where('tag_name', 'like', '%'.$tag_name.'%')
        ->orderBy('updated_at', 'desc');
        return $this->response->paginator($afterSale->paginate(self::PerPage), self::TRANSFORMER);
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

    public function update(AfterSaleRequest $aftersalerequest, 
                           AfterSaleDefProRequest $defprorequest, 
                           AfterSale $aftersale,
                           \App\Handlers\ValidatedHandler $validatedHandler)
    {
        if ($aftersale->order_status > 10)
            if (!$aftersale->is_locked)
                throw new UpdateResourceFailedException('未锁定无法修改');

        $aftersale = DB::transaction(function () use ($aftersalerequest,
                                                     $defprorequest,
                                                     $aftersale,
                                                     $validatedHandler) {

            $aftersale->update($aftersalerequest->validated());

            if ($defPros = $defprorequest->validated()['after_sale_def_pro']) {

                foreach ($defPros as $defPro) {
                    //过滤出经过验证的数据
                    $data = $validatedHandler->getValidatedData($defprorequest->rules(), $defPro);
                    //存在id则更新，否则插入
                    if (isset($defPro['id'])) {
                        $aftersale->afterSaleDefPros()->findOrFail($defPro['id'])->update($data);
                    } else {
                        $defProModel = $aftersale->afterSaleDefPros()->create($data);
                    }
                }
            }
            return $aftersale;
        });

        return $this->response
            ->item($aftersale, new AfterSaleTransformer())
            ->setStatusCode(201);
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
            !$aftersale->status || $aftersale->getOriginal('order_status') != $aftersale::AFTERSALE_STATUS_SUBMIT,
            '无法锁定',
            'lockOrUnlock'
        );
    }

    public function isAudit(AfterSale $aftersale)
    {
        return $this->traitAction(
            $aftersale,
            !$aftersale->status || $aftersale->getOriginal('order_status') != $aftersale::AFTERSALE_STATUS_NEW,
            '审核出错',
            'audit'
        );
    }

    public function isUnAudit(AfterSale $aftersale)
    {
        return $this->traitAction(
            $aftersale,
            !$aftersale->status || $aftersale->getOriginal('order_status') != $aftersale::AFTERSALE_STATUS_SUBMIT,
            '退审出错',
            'unAudit'
        );
    }

    public function isOneAudit(AfterSale $aftersale)
    {
        return $this->traitAction(
            $aftersale,
            !$aftersale->status || $aftersale->getOriginal('order_status') != $aftersale::AFTERSALE_STATUS_SUBMIT,
            '一审出错',
            'oneAudit'
        );
    }

    public function isUnOneAudit(AfterSale $aftersale)
    {
        return $this->traitAction(
            $aftersale,
            !$aftersale->status || $aftersale->getOriginal('order_status') != $aftersale::AFTERSALE_STATUS_ONE_AUDIT,
            '退审出错',
            'unOneAudit'
        );
    }

    public function isTwoAudit(AfterSale $aftersale)
    {
        return $this->traitAction(
            $aftersale,
            !$aftersale->status || $aftersale->getOriginal('order_status') != $aftersale::AFTERSALE_STATUS_ONE_AUDIT,
            '二审出错',
            'twoAudit'
        );
    }

    public function isUnTwoAudit(AfterSale $aftersale)
    {
        return $this->traitAction(
            $aftersale,
            !$aftersale->status || $aftersale->getOriginal('order_status') != $aftersale::AFTERSALE_STATUS_TWO_AUDIT,
            '退审出错',
            'unTwoAudit'
        );
    }

    public function isReject(AfterSale $aftersale)
    {
        return $this->traitAction(
            $aftersale,
            !$aftersale->status || $aftersale->getOriginal('order_status') != $aftersale::AFTERSALE_STATUS_ONE_AUDIT,
            '驳回出错',
            'reject'
        );
    }

    public function isFinish(AfterSale $aftersale)
    {
        return $this->traitAction(
            $aftersale,
            !$aftersale->status || $aftersale->getOriginal('order_status') != $aftersale::AFTERSALE_STATUS_TWO_AUDIT,
            '结算出错',
            'finish'
        );
    }
}
