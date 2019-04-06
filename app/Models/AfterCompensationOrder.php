<?php

namespace App\Models;

use Illuminate\Support\Facades\DB;
use Dingo\Api\Exception\UpdateResourceFailedException;
use Illuminate\Support\Facades\Auth;

class AfterCompensationOrder extends Model
{
    protected $table = 'cmptn_orders';

    const CMPTN_STATUS_NEW = 10;//创建后初始为新订单,待审核
    const CMPTN_STATUS_AUDIT = 20;//审核通过
    const CMPTN_STATUS_CANCEL = 50;//作废

    //驳回状态
    const CMPTN_RETURN_AUDIT = 21;//审核驳回

    //订单来源
    const CMPTN_SOURCE_SYSTEM = 'system';
    const CMPTN_SOURCE_TAOBAO = 'taobao';

    //赔偿方向
    const CMPTN_DIRECTION_WEPAY = '我们赔偿';
    const CMPTN_DIRECTION_PAYUS = '赔偿我们';

    //结账方式
    const CMPTN_PAYMENT_METHOD_NOW = '现付';
    const CMPTN_PAYMENT_METHOD_BYMONTH = '月结';

    protected $fillable = [
        'cmptn_status',
        'order_source',
        'cmptn_direction',
        'cmptn_shop',
        'responsible_party',
        'responsible_person',
        'customer_nickname',
        'customer_name',
        'customer_phone',
        'customer_city',
        'customer_address',
        'cmptn_fee',
        'logistics_company',
        'logistics_tracking_number',
        'payment_method',
        'order_stuff',
        'order_number',
        'problem_goods',
        'problem_description',
        'note',
        'refuse_reason',
        'is_invalid',
        'fee_type',
        'payee',
        'payee_account'
    ];

    protected $dates = [
        'negotiation_date',
        'created_at',
        'submited_at',
        'audited_at'
    ];

    //设置类型
    protected $casts = [
        'is_invalid' =>'boolean'
    ];
}
?>