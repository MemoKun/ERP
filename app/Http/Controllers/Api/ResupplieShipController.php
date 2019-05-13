<?php

namespace App\Http\Controllers\Api;

use App\Models\ResupplieOrder;
use App\Http\Requests\Api\ResupplieShipRequset;
//use App\Http\Requests\Api\EditStatuRequest;

use App\Transformers\ResupplieOrderTransformer;
use App\Http\Controllers\Traits\CURDTrait;
use App\Http\Controllers\Traits\ProcedureTrait;

class ResupplieShipController extends Controller
{
    use CURDTrait;
    use ProcedureTrait;

    const TRANSFORMER = ResupplieOrderTransformer::class;
    const MODEL = ResupplieOrder::class;
    const PerPage = 8;

    //获取所有补件单
    public function index(ResupplieShipRequset $requset)
    {
        return $this->allOrPage($requset, self::MODEL, self::TRANSFORMER, self::PerPage);
    }

    //获取已审核、未打印的补件单
    public function searchUnprint()
    {
        $resupplieOrder = ResupplieOrder::query()->where('is_submit', '=', ResupplieOrder::RESUPPLIE_SUBMITED)
        ->where('is_review', '=', ResupplieOrder::RESUPPLIE_REVIEW)
        ->where('is_print', '=', ResupplieOrder::RESUPPLIE_UNPRINT);

        return $this->response->paginator($resupplieOrder->paginate(self::PerPage), self::TRANSFORMER);
    }

    //获取已审核、已打印的补件单
    public function searchPrint()
    {
        $resupplieOrder = ResupplieOrder::query()->where('is_submit', '=', ResupplieOrder::RESUPPLIE_SUBMITED)
        ->where('is_review', '=', ResupplieOrder::RESUPPLIE_REVIEW)
        ->where('is_print', '=', ResupplieOrder::RESUPPLIE_PRINT);

        return $this->response->paginator($resupplieOrder->paginate(self::PerPage), self::TRANSFORMER);
    }

    //获取已审核、未发货的补件单
    public function searchUnconsign()
    {
        $resupplieOrder = ResupplieOrder::query()->where('is_submit', '=', ResupplieOrder::RESUPPLIE_SUBMITED)
        ->where('is_review', '=', ResupplieOrder::RESUPPLIE_REVIEW)
        ->where('is_print', '=', ResupplieOrder::RESUPPLIE_PRINT)
        ->where('is_consign', '=', ResupplieOrder::RESUPPLIE_UNCONSIGN);

        return $this->response->paginator($resupplieOrder->paginate(self::PerPage), self::TRANSFORMER);
    }

    //获取已审核、已发货的补件单
    public function searchConsign()
    {
        $resupplieOrder = ResupplieOrder::query()->where('is_submit', '=', ResupplieOrder::RESUPPLIE_SUBMITED)
        ->where('is_review', '=', ResupplieOrder::RESUPPLIE_REVIEW)
        ->where('is_print', '=', ResupplieOrder::RESUPPLIE_PRINT)
        ->where('is_consign', '=', ResupplieOrder::RESUPPLIE_CONSIGN);

        return $this->response->paginator($resupplieOrder->paginate(self::PerPage), self::TRANSFORMER);
    }
    //返回客审
    public function examination(ResupplieOrder $resupplieOrder)
    {
        return $this->traitAction(
            $resupplieOrder,
            !$resupplieOrder->is_review||!$resupplieOrder->is_submit,
            '返回客审出错',
            'examination'
        );
    }
    //发货
    public function isConsign(ResupplieOrder $resupplieOrder)
    {
        return $this->traitAction(
            $resupplieOrder,
            $resupplieOrder->is_consign,
            '发货出错',
            'consign'
        );
    }
    //打印
    public function isPrint(ResupplieOrder $resupplieOrder)
    {
        return $this->traitAction(
            $resupplieOrder,
            $resupplieOrder->is_print,
            '打印出错',
            'print'
        );
    }
}
