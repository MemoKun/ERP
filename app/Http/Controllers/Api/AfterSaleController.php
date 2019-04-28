<?php

namespace App\Http\Controllers\Api;

use App\Models\AfterSale;
use Illuminate\Support\Facades\DB;

use App\Http\Requests\Api\AfterSaleRequest;
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

    public function store(AfterSaleRequest $request)
    {
        return $this->traitStore($request->validated(), self::MODEL, self::TRANSFORMER);
    }

    public function show(AfterSale $aftersale)
    {
        return $this->traitShow($aftersale, self::TRANSFORMER);
    }

    public function update(AfterSaleRequest $request, AfterSale $aftersale)
    {
        return $this->traitUpdate($request, $aftersale, self::TRANSFORMER);
    }

    public function destroy(AfterSale $aftersale)
    {
        return $this->traitDestroy($aftersale);
    }

    public function destroybyIds(DestroyRequest $request)
    {
        $ids = explode(',', $request->input('ids'));

        DB::transaction(function () use ($ids) {
            //删除
            $delAfterSale = AfterSale::destroy($ids);

            if ($delAfterSale === false) {
                throw new DeleteResourceFailedException('The given data was invalid.');
            }

        });

        return $this->noContent();
    }

    public function editStatusByIds(EditStatuRequest $request)
    {
        return $this->traitEditStatusByIds($request, self::MODEL);
    }

    public function isAudit(AfterSale $aftersale)
    {
        return $this->traitAction(
            $aftersale,
            !$aftersale->status || $aftersale->getOriginal('order_status') != $aftersale::AFTERSALE_STATUS_SUBMIT,
            '提交出错',
            'audit'
        );
    }

    public function isUnAudit(AfterSale $aftersale)
    {
        return $this->traitAction(
            $aftersale,
            !$aftersale->status || $aftersale->getOriginal('order_status') != $aftersale::AFTERSALE_STATUS_NEW,
            '退审出错',
            'unAudit'
        );
    }

}
