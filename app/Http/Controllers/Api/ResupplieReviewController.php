<?php

namespace App\Http\Controllers\Api;

use App\Models\ResupplieOrder;
use App\Http\Requests\Api\ResupplieReviewRequset;
//use App\Http\Requests\Api\EditStatuRequest;

use App\Transformers\ResupplieOrderTransformer;
use App\Http\Controllers\Traits\CURDTrait;
use App\Http\Controllers\Traits\ProcedureTrait;

class ResupplieReviewController extends Controller
{
    use CURDTrait;
    use ProcedureTrait;

    const TRANSFORMER = ResupplieOrderTransformer::class;
    const MODEL = ResupplieOrder::class;
    const PerPage = 8;

    //获取所有补件单
    public function index(ResupplieReviewRequset $requset)
    {
        return $this->allOrPage($requset, self::MODEL, self::TRANSFORMER, self::PerPage);
    }

    //获取所有补大件单(提交、未审核、包件类型id为1)
    public function searchBigPackage()
    {
        $resupplieOrder = ResupplieOrder::query()->where('is_submit', '=', ResupplieOrder::RESUPPLIE_SUBMITED)
        ->where('is_review', '=', ResupplieOrder::RESUPPLIE_UNREVIEW)
        ->where('package_types_id', '=', ResupplieOrder::RESUPPLIE_BIG_PACKAGE);

        return $this->response->paginator($resupplieOrder->paginate(self::PerPage), self::TRANSFORMER);
    }

    //获取所有补零件单(提交、未审核、包件类型id为2)
    public function searchPartPackage()
    {
        $resupplieOrder = ResupplieOrder::query()->where('is_submit', '=', ResupplieOrder::RESUPPLIE_SUBMITED)
        ->where('is_review', '=', ResupplieOrder::RESUPPLIE_UNREVIEW)
        ->where('package_types_id', '=', ResupplieOrder::RESUPPLIE_PART_PACKAGE);

        return $this->response->paginator($resupplieOrder->paginate(self::PerPage), self::TRANSFORMER);
    }

    //获取所有补金额单(提交、未审核、包件类型id为3)
    public function searchMoneyPackage()
    {
        $resupplieOrder = ResupplieOrder::query()->where('is_submit', '=', ResupplieOrder::RESUPPLIE_SUBMITED)
        ->where('is_review', '=', ResupplieOrder::RESUPPLIE_UNREVIEW)
        ->where('package_types_id', '=', ResupplieOrder::RESUPPLIE_MONEY_PACKAGE);

        return $this->response->paginator($resupplieOrder->paginate(self::PerPage), self::TRANSFORMER);
    }

    //获取所有已审核补件单(审核、未结算)
    public function searchReview()
    {
        $resupplieOrder = ResupplieOrder::query()->where('is_review', '=', ResupplieOrder::RESUPPLIE_REVIEW)
        ->where('is_settle', '=', ResupplieOrder::RESUPPLIE_UNSETTLE);

        return $this->response->paginator($resupplieOrder->paginate(self::PerPage), self::TRANSFORMER);
    }

    //获取所有已结算补件单
    public function searchSettle()
    {
        $resupplieOrder = ResupplieOrder::query()->where('is_settle', '=', ResupplieOrder::RESUPPLIE_SETTLE);

        return $this->response->paginator($resupplieOrder->paginate(self::PerPage), self::TRANSFORMER);
    }

    //审核
    public function isAudit(ResupplieOrder $resupplieOrder)
    {
        return $this->traitAction(
            $resupplieOrder,
            $resupplieOrder->is_review,
            '审核出错',
            'audit'
        );
    }

    //退审
    public function isAuditFaild(ResupplieOrder $resupplieOrder)
    {
        return $this->traitAction(
            $resupplieOrder,
            !$resupplieOrder->is_review,
            '退审出错',
            'auditfaild'
        );
    }

    //结算
    public function isSettle(ResupplieOrder $resupplieOrder)
    {
        return $this->traitAction(
            $resupplieOrder,
            $resupplieOrder->is_settle,
            '退审出错',
            'settle'
        );
    }
}
