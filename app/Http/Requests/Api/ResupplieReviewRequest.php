<?php

namespace App\Http\Requests\Api;

//use Illuminate\Validation\Rule;

class ResupplieReviewRequest extends FormRequest
{
    public function rules()
    {
        switch ($this->method()) {
            case 'GET':
                return [
                    'status' => 'boolean',
                    'is_submit' => 'boolean',
                    'is_review' => 'boolean',
                ];
                break;
            case 'POST':
                return [
                    'status' => 'boolean',
                    'is_submit' => 'boolean',
                    'is_review' => 'boolean',
                ];
                break;
            case 'PATCH':
                return [];
                break;
        }
    }

    public function messages()
    {
        return [
            're_supplie_categories_id.required' => '补件类别id必填',
            're_supplie_categories_id.integer' => '补件类别id必须int类型',
            're_supplie_categories_id.exists' => '需要添加的id在数据库中未找到或未启用',

            'resupply_money.numeric' => '补件金额必须是数字',

            'resupply_reason.string' => '补件原因必须string类型',
            'resupply_reason.max' => '补件原因最大长度为255',

            'package_types_id.required' => '包件类型id必填',
            'package_types_id.integer' => '包件类型id必须int类型',
            'package_types_id.exists' => '需要添加的id在数据库中未找到或未启用',

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

            'application_mark_name.string' => '补件申请的标记名称必须string类型',
            'application_mark_name.max' => '补件申请的标记名称最大长度为255',

            'status.boolean' => '状态必须布尔类型',
            'status.required' => '状态必填',

            'is_submit.boolean' => '提交必须布尔类型',
            'is_submit.required' => '提交必填',

            'is_review.boolean' => '审核必须布尔类型',
            'is_review.required' => '审核必填',
        ];
    }

    public function attributes()
    {
        return [
            'resupply_order_no' => '补件单号',
            'system_order_no' => '系统单号',
            'package_types_id' => '包件类型id',
            're_supplie_categories_id' => '补件类别id',
            'resupply_money' => '补件金额',
            'resupply_reason' => '补件原因',
            're_supplie_responsibles_id' => '补件责任方id',
            'shop_nick' => '店铺昵称',
            'member_nick' => '买家昵称',
            'shop_group' => '店铺分组',
            'member_name' => '买家姓名',
            'member_phone' => '买家电话',
            'logistics_id' => '物流公司id',
            'estimated_fee' => '预计运费',
            'compensate_fee' => '物流赔偿费用',
            'freight_types_id' => '运费类型id',
            'suppliers_id' => '供应商id',
            'distribution_methods_id' => '配送方式id',
            'load_fee' => '送装费',
            'promise_time' => '承诺时间',
            'refund_methods_id' => '补款方式id',
            'refund_account' => '补款账号',
            'bank' => '开户银行',
            'creator' => '创建人',
            'remark' => '备注',
            'mark_name' => '标记名称',
            'marker' => '标记人',
            'mark_time' => '标记时间',
            'application_mark_name' => '补件申请的标记名称',
            'status' => '状态',
            'is_submit' => '补件单是否提交',
            'is_review' => '补件单是否审核',
        ];
    }
}
