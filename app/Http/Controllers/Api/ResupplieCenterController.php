<?php

namespace App\Http\Controllers\Api;

use App\Models\ResupplieOrder;
use App\Http\Requests\Api\ResupplieCenterRequest;
//use App\Http\Requests\Api\EditStatuRequest;

use App\Transformers\ResupplieOrderTransformer;
use App\Http\Controllers\Traits\CURDTrait;
use App\Http\Controllers\Traits\ProcedureTrait;

class ResupplieCenterController extends Controller
{
    use CURDTrait;
    use ProcedureTrait;

    const TRANSFORMER = ResupplieOrderTransformer::class;
    const MODEL = ResupplieOrder::class;
    const PerPage = 8;

    //获取所有补件单
    public function index(ResupplieCenterRequest $requset)
    {
        $resupply_order_no = $requset->input('resupply_order_no');
        $member_nick = $requset->input('member_nick');
        $member_name = $requset->input('member_name');
        $re_supplie_categories_id = $requset->input('re_supplie_categories_id');
        $receiver_state = $requset->input('receiver_state');
        $receiver_city = $requset->input('receiver_city');
        $receiver_district = $requset->input('receiver_district');
        $mark_name = $requset->input('mark_name');
        $suppliers_id = $requset->input('suppliers_id');
        $is_invalid = $requset->input('is_invalid');
        if ($is_invalid) {//不显示作废
            $resupplieOrder = ResupplieOrder::query()
            ->where('resupply_order_no', 'like', '%'.$resupply_order_no.'%')
            ->where('member_nick', 'like', '%'.$member_nick.'%')
            ->where('member_name', 'like', '%'.$member_name.'%')
            ->where('re_supplie_categories_id', 'like', '%'.$re_supplie_categories_id.'%')
            ->where('receiver_state', 'like', '%'.$receiver_state.'%')
            ->where('receiver_city', 'like', '%'.$receiver_city.'%')
            ->where('receiver_district', 'like', '%'.$receiver_district.'%')
            ->where('mark_name', 'like', '%'.$mark_name.'%')
            ->where('suppliers_id', 'like', '%'.$suppliers_id.'%')
            ->where('is_invalid', '=', ResupplieOrder::RESUPPLIE_VALID)
            ->orderBy('updated_at', 'desc');
        } else {
            $resupplieOrder = ResupplieOrder::query()
            ->where('resupply_order_no', 'like', '%'.$resupply_order_no.'%')
            ->where('member_nick', 'like', '%'.$member_nick.'%')
            ->where('member_name', 'like', '%'.$member_name.'%')
            ->where('re_supplie_categories_id', 'like', '%'.$re_supplie_categories_id.'%')
            ->where('receiver_state', 'like', '%'.$receiver_state.'%')
            ->where('receiver_city', 'like', '%'.$receiver_city.'%')
            ->where('receiver_district', 'like', '%'.$receiver_district.'%')
            ->where('mark_name', 'like', '%'.$mark_name.'%')
            ->where('suppliers_id', 'like', '%'.$suppliers_id.'%')
            ->orderBy('updated_at', 'desc');
        }

        return $this->response->paginator($resupplieOrder->paginate(self::PerPage), self::TRANSFORMER);
    }

    //作废补件单
    public function isInvalid(ResupplieOrder $resupplieOrder)
    {
        return $this->traitAction(
            $resupplieOrder,
            $resupplieOrder->is_invalid,
            '作废出错',
            'invalid'
        );
    }
}
