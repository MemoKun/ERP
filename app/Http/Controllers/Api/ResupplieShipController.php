<?php

namespace App\Http\Controllers\Api;

use App\Models\ResupplieOrder;
use App\Http\Requests\Api\ResupplieShipRequest;
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
    public function index(ResupplieShipRequest $requset)
    {
        return $this->allOrPage($requset, self::MODEL, self::TRANSFORMER, self::PerPage);
    }

    //获取已审核、未打印的补件单
    public function searchUnprint(ResupplieShipRequest $requset)
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
        ->where('is_review', '=', ResupplieOrder::RESUPPLIE_REVIEW)
        ->where('is_print', '=', ResupplieOrder::RESUPPLIE_UNPRINT)
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

    //获取已审核、已打印的补件单
    public function searchPrint(ResupplieShipRequest $requset)
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
        ->where('is_review', '=', ResupplieOrder::RESUPPLIE_REVIEW)
        ->where('is_print', '=', ResupplieOrder::RESUPPLIE_PRINT)
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

    //获取已审核、未发货的补件单
    public function searchUnconsign(ResupplieShipRequest $requset)
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
        ->where('is_review', '=', ResupplieOrder::RESUPPLIE_REVIEW)
        ->where('is_print', '=', ResupplieOrder::RESUPPLIE_PRINT)
        ->where('is_consign', '=', ResupplieOrder::RESUPPLIE_UNCONSIGN)
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

    //获取已审核、已发货的补件单
    public function searchConsign(ResupplieShipRequest $requset)
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
        ->where('is_review', '=', ResupplieOrder::RESUPPLIE_REVIEW)
        ->where('is_print', '=', ResupplieOrder::RESUPPLIE_PRINT)
        ->where('is_consign', '=', ResupplieOrder::RESUPPLIE_CONSIGN)
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
