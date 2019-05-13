<?php

namespace App\Http\Requests\Api;

//use Illuminate\Validation\Rule;

class ResupplieCenterRequest extends FormRequest
{
    public function rules()
    {
        switch ($this->method()) {
            case 'GET':
                return [
                    'status' => 'boolean',
                    'is_submit' => 'boolean',
                    'is_review' => 'boolean',
                    'is_settle' => 'boolean',
                    'is_print' => 'boolean',
                    'is_consign' => 'boolean',
                    'is_invalid' => 'boolean',
                    'is_purchase' => 'boolean',
                ];
                break;
        }
    }

    public function messages()
    {
        return [
            're_supplie_categories_id.required' => '补件类别id必填',
            're_supplie_categories_id.integer' => '补件类别id必须int类型',
            're_supplie_categories_id.exists' => '需要添加的id在数据库中未找到或未启用',

            'system_order_no.string' => '系统单号必须string类型',
            'system_order_no.max' => '系统单号最大长度为255',

            'resupply_money.numeric' => '补件金额必须是数字',

            'resupply_reason.string' => '补件原因必须string类型',
            'resupply_reason.max' => '补件原因最大长度为255',

            're_supplie_responsibles_id.required' => '补件责任方id必填',
            're_supplie_responsibles_id.integer' => '补件责任方id必须int类型',
            're_supplie_responsibles_id.exists' => '需要添加的id在数据库中未找到或未启用',

            'shop_nick.string' => '店铺昵称必须string类型',
            'shop_nick.max' => '店铺昵称最大长度为255',

            'member_nick.string' => '买家昵称必须string类型',
            'member_nick.max' => '买家昵称最大长度为255',

            'shop_group.string' => '店铺分组必须string类型',
            'shop_group.max' => '店铺分组最大长度为255',

            'member_name.string' => '买家姓名必须string类型',
            'member_name.max' => '买家姓名最大长度为255',

            'member_phone.string' => '买家电话必须string类型',
            'member_phone.max' => '买家电话最大长度为255',

            'logistics_id.required' => '物流公司id必填',
            'logistics_id.integer' => '物流公司id必须int类型',
            'logistics_id.exists' => '需要添加的id在数据库中未找到或未启用',

            'estimated_fee.numeric' => '预计运费必须是数字',

            'compensate_fee.numeric' => '物流赔偿费用必须是数字',

            'freight_types_id.required' => '运费类型id必填',
            'freight_types_id.integer' => '运费类型id必须int类型',
            'freight_types_id.exists' => '需要添加的id在数据库中未找到或未启用',

            'suppliers_id.required' => '供应商id必填',
            'suppliers_id.integer' => '供应商id必须int类型',
            'suppliers_id.exists' => '需要添加的id在数据库中未找到或未启用',

            'distribution_methods_id.required' => '供应商id必填',
            'distribution_methods_id.integer' => '供应商id必须int类型',
            'distribution_methods_id.exists' => '需要添加的id在数据库中未找到或未启用',

            'load_fee.numeric' => '送装费必须是数字',

            'promise_time.date' => '承诺时间必须date类型',

            'refund_methods_id.required' => '补款方式id必填',
            'refund_methods_id.integer' => '补款方式id必须int类型',
            'refund_methods_id.exists' => '需要添加的id在数据库中未找到或未启用',

            'refund_account.string' => '补款账号必须string类型',
            'refund_account.max' => '补款账号最大长度为255',

            'bank.string' => '开户银行必须string类型',
            'bank.max' => '开户银行最大长度为255',

            'creator.string' => '创建人必须string类型',
            'creator.max' => '创建人最大长度为255',

            'remark.string' => '备注必须string类型',
            'remark.max' => '备注最大长度为255',

            'mark_name.string' => '标记名称必须string类型',
            'mark_name.max' => '标记名称最大长度为255',

            'marker.string' => '标记人必须string类型',
            'marker.max' => '标记人最大长度为255',

            'mark_time.date' => '标记时间必须date类型',

            'status.boolean' => '状态必须布尔类型',
            'status.required' => '状态必填',

            'is_submit.boolean' => '提交必须布尔类型',
            'is_submit.required' => '提交必填',
        ];
    }

    public function attributes()
    {
        return [
            'system_order_no' => '系统单号',
            'package_types_id' => '包件类型id',
            're_supplie_categories_id' => '补件类别id',
            'resupply_cost' => '补件成本',
            'resupply_money' => '补件金额',
            'resupply_reason' => '补件原因',
            're_supplie_responsibles_id' => '补件责任方id',
            'salesman' => '原订单业务员',
            'shop_nick' => '店铺昵称',
            'member_nick' => '买家昵称',
            'shop_group' => '店铺分组',
            'member_name' => '买家姓名',
            'member_phone' => '买家电话',
            'suppliers_id' => '供应商id',
            'logistics_id' => '物流公司id',
            'express_no' => '快递单号',
            'distribution_methods_id' => '配送方式id',
            'freight_types_id' => '运费类型id',
            'estimated_fee' => '预计运费',
            'compensate_fee' => '物流赔偿费用',
            'wooden_frame_fee' => '木架费用',            
            'load_fee' => '送装费',
            'promise_time' => '承诺时间',
            'refund_methods_id' => '补款方式id',
            'refund_account' => '补款账号',
            'bank' => '开户银行',
            'address' => '收货地址',
            'mark_name' => '标记名称',
            'marker' => '标记人',
            'mark_time' => '标记时间',
            'creator' => '创建人',
            'submitter' => '提交人',
            'creator' => '创建人',
            'reviewer' => '审核人',
            'consigner' => '发货人',
            'consign_warehouse' => '发货仓库',
            'consign_remark' => '发货备注',
            'submit_time' => '提交时间',
            'review_time' => '审核时间',
            'settle_time' => '结算时间',
            'print_time' => '打印时间',
            'system_consign_time' => '系统发货时间',
            'real_consign_time' => '实际发货时间',
            'status' => '状态',
            'is_submit' => '补件单是否提交',
            'is_review' => '补件单是否审核',
            'is_settle' => '补件单是否结算',
            'is_print' => '补件单是否打印',
            'is_consign' => '补件单是否发货',
            'is_invalid' => '补件单是否作废',
            'square_number' => '方数',
            'number' => '件数',
            'application_mark_name' => '补件申请标记名称',
            'review_mark_name' => '补件审核标记名称',
            'real_consign_time_1' => '实际发货时间(跟单货审)',
            'warehousing_status' => '入库状态',
            'is_purchase' => '采购',
        ];
    }
}
