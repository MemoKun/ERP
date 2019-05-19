<?php

namespace App\Http\Controllers\Api;

use App\Models\ResupplieOrder;
use App\Http\Requests\Api\ResupplieReviewRequest;
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
    public function index(ResupplieReviewRequest $requset)
    {
        return $this->allOrPage($requset, self::MODEL, self::TRANSFORMER, self::PerPage);
    }

    //获取所有补大件单(提交、未审核、包件类型id为1)
    public function searchBigPackage(ResupplieReviewRequest $requset)
    {
        $resupply_order_no = $requset->input('resupply_order_no');
        $member_nick = $requset->input('member_nick');
        $member_name = $requset->input('member_name');
        $re_supplie_categories_id = $requset->input('re_supplie_categories_id');
        $receiver_state = $requset->input('receiver_state');
        $receiver_city = $requset->input('receiver_city');
        $receiver_district = $requset->input('receiver_district');
        $suppliers_id = $requset->input('suppliers_id');

        $resupplieOrder = ResupplieOrder::query()->where('is_submit', '=', ResupplieOrder::RESUPPLIE_SUBMITED)
        ->where('is_review', '=', ResupplieOrder::RESUPPLIE_UNREVIEW)
        ->where('package_types_id', '=', ResupplieOrder::RESUPPLIE_BIG_PACKAGE)
        ->where('resupply_order_no', 'like', '%'.$resupply_order_no.'%')
        ->where('member_nick', 'like', '%'.$member_nick.'%')
        ->where('member_name', 'like', '%'.$member_name.'%')
        ->where('re_supplie_categories_id', 'like', '%'.$re_supplie_categories_id.'%')
        ->where('receiver_state', 'like', '%'.$receiver_state.'%')
        ->where('receiver_city', 'like', '%'.$receiver_city.'%')
        ->where('receiver_district', 'like', '%'.$receiver_district.'%')
        ->where('suppliers_id', 'like', '%'.$suppliers_id.'%')
        ->orderBy('updated_at', 'desc');

        return $this->response->paginator($resupplieOrder->paginate(self::PerPage), self::TRANSFORMER);
    }

    //获取所有补零件单(提交、未审核、包件类型id为2)
    public function searchPartPackage(ResupplieReviewRequest $requset)
    {
        $resupply_order_no = $requset->input('resupply_order_no');
        $member_nick = $requset->input('member_nick');
        $member_name = $requset->input('member_name');
        $re_supplie_categories_id = $requset->input('re_supplie_categories_id');
        $receiver_state = $requset->input('receiver_state');
        $receiver_city = $requset->input('receiver_city');
        $receiver_district = $requset->input('receiver_district');
        $suppliers_id = $requset->input('suppliers_id');

        $resupplieOrder = ResupplieOrder::query()->where('is_submit', '=', ResupplieOrder::RESUPPLIE_SUBMITED)
        ->where('is_review', '=', ResupplieOrder::RESUPPLIE_UNREVIEW)
        ->where('package_types_id', '=', ResupplieOrder::RESUPPLIE_PART_PACKAGE)
        ->where('resupply_order_no', 'like', '%'.$resupply_order_no.'%')
        ->where('member_nick', 'like', '%'.$member_nick.'%')
        ->where('member_name', 'like', '%'.$member_name.'%')
        ->where('re_supplie_categories_id', 'like', '%'.$re_supplie_categories_id.'%')
        ->where('receiver_state', 'like', '%'.$receiver_state.'%')
        ->where('receiver_city', 'like', '%'.$receiver_city.'%')
        ->where('receiver_district', 'like', '%'.$receiver_district.'%')
        ->where('suppliers_id', 'like', '%'.$suppliers_id.'%')
        ->orderBy('updated_at', 'desc');

        return $this->response->paginator($resupplieOrder->paginate(self::PerPage), self::TRANSFORMER);
    }

    //获取所有补金额单(提交、未审核、包件类型id为3)
    public function searchMoneyPackage(ResupplieReviewRequest $requset)
    {
        $resupply_order_no = $requset->input('resupply_order_no');
        $member_nick = $requset->input('member_nick');
        $member_name = $requset->input('member_name');
        $re_supplie_categories_id = $requset->input('re_supplie_categories_id');
        $receiver_state = $requset->input('receiver_state');
        $receiver_city = $requset->input('receiver_city');
        $receiver_district = $requset->input('receiver_district');
        $suppliers_id = $requset->input('suppliers_id');

        $resupplieOrder = ResupplieOrder::query()->where('is_submit', '=', ResupplieOrder::RESUPPLIE_SUBMITED)
        ->where('is_review', '=', ResupplieOrder::RESUPPLIE_UNREVIEW)
        ->where('package_types_id', '=', ResupplieOrder::RESUPPLIE_MONEY_PACKAGE)
        ->where('resupply_order_no', 'like', '%'.$resupply_order_no.'%')
        ->where('member_nick', 'like', '%'.$member_nick.'%')
        ->where('member_name', 'like', '%'.$member_name.'%')
        ->where('re_supplie_categories_id', 'like', '%'.$re_supplie_categories_id.'%')
        ->where('receiver_state', 'like', '%'.$receiver_state.'%')
        ->where('receiver_city', 'like', '%'.$receiver_city.'%')
        ->where('receiver_district', 'like', '%'.$receiver_district.'%')
        ->where('suppliers_id', 'like', '%'.$suppliers_id.'%')
        ->orderBy('updated_at', 'desc');

        return $this->response->paginator($resupplieOrder->paginate(self::PerPage), self::TRANSFORMER);
    }

    //获取所有已审核补件单(审核、未结算)
    public function searchReview(ResupplieReviewRequest $requset)
    {
        $resupply_order_no = $requset->input('resupply_order_no');
        $member_nick = $requset->input('member_nick');
        $member_name = $requset->input('member_name');
        $re_supplie_categories_id = $requset->input('re_supplie_categories_id');
        $receiver_state = $requset->input('receiver_state');
        $receiver_city = $requset->input('receiver_city');
        $receiver_district = $requset->input('receiver_district');
        $suppliers_id = $requset->input('suppliers_id');

        $resupplieOrder = ResupplieOrder::query()->where('is_review', '=', ResupplieOrder::RESUPPLIE_REVIEW)
        ->where('is_settle', '=', ResupplieOrder::RESUPPLIE_UNSETTLE)
        ->where('resupply_order_no', 'like', '%'.$resupply_order_no.'%')
        ->where('member_nick', 'like', '%'.$member_nick.'%')
        ->where('member_name', 'like', '%'.$member_name.'%')
        ->where('re_supplie_categories_id', 'like', '%'.$re_supplie_categories_id.'%')
        ->where('receiver_state', 'like', '%'.$receiver_state.'%')
        ->where('receiver_city', 'like', '%'.$receiver_city.'%')
        ->where('receiver_district', 'like', '%'.$receiver_district.'%')
        ->where('suppliers_id', 'like', '%'.$suppliers_id.'%')
        ->orderBy('updated_at', 'desc');

        return $this->response->paginator($resupplieOrder->paginate(self::PerPage), self::TRANSFORMER);
    }

    //获取所有已结算补件单
    public function searchSettle(ResupplieReviewRequest $requset)
    {
        $resupply_order_no = $requset->input('resupply_order_no');
        $member_nick = $requset->input('member_nick');
        $member_name = $requset->input('member_name');
        $re_supplie_categories_id = $requset->input('re_supplie_categories_id');
        $receiver_state = $requset->input('receiver_state');
        $receiver_city = $requset->input('receiver_city');
        $receiver_district = $requset->input('receiver_district');
        $suppliers_id = $requset->input('suppliers_id');

        $resupplieOrder = ResupplieOrder::query()->where('is_settle', '=', ResupplieOrder::RESUPPLIE_SETTLE)
        ->where('resupply_order_no', 'like', '%'.$resupply_order_no.'%')
        ->where('member_nick', 'like', '%'.$member_nick.'%')
        ->where('member_name', 'like', '%'.$member_name.'%')
        ->where('re_supplie_categories_id', 'like', '%'.$re_supplie_categories_id.'%')
        ->where('receiver_state', 'like', '%'.$receiver_state.'%')
        ->where('receiver_city', 'like', '%'.$receiver_city.'%')
        ->where('receiver_district', 'like', '%'.$receiver_district.'%')
        ->where('suppliers_id', 'like', '%'.$suppliers_id.'%')
        ->orderBy('updated_at', 'desc');

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
