<?php

namespace App\Http\Requests\Api;

use Illuminate\Validation\Rule;

class AfterSaleRequest extends FormRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        switch ($this->method()) {
            case 'GET':
                return [
                    'status' => 'boolean',
                    'order_status' => Rule::in([
                        \App\Models\AfterSale::AFTERSALE_STATUS_NEW,
                        \App\Models\AfterSale::AFTERSALE_STATUS_SUBMIT
                    ]),
                ];
                break;
            case 'POST':
                return [
                    'shop_name' => 'required|string|max:255',
                    'shop_group' => 'string|max:255',
                    'order_no' => 'required|string|max:255',
                    'previous_order_staff' => 'string|max:255',
                    'vip_name' => 'required|string|max:255', 
                    'client_name' => 'string|max:255', 
                    'parts_duty' => 'string|max:255',
                    'after_responsible_party' => 'string|max:255',
                    'suppliers_id' => 'string|max:255',
                    'logistic_name' => 'string|max:255',
                    'logistics_id' => 'string|max:255',
                    'logistic_name' => 'string|max:255',
                    'after_sale_person' => 'string|max:255',
                    'order_amount' => 'integer',
                    'after_sale_type' => [
                        'required', 'integer',
                        Rule::exists('after_sale_type', 'id')->where(function ($query) {
                            $query->where('status', 1);
                        }),
                    ],
                    'after_sale_group' => 'string|max:255',
                    'after_sale_status' => [
                        'required', 'integer',
                        Rule::exists('after_sale_state', 'id')->where(function ($query) {
                            $query->where('status', 1);
                        }),
                    ],
                    'problem_description' => 'string|max:255',
                    'customer_service_requirements' => 'string|max:255',
                    'receiver_state' => 'string|max:255',
                    'receiver_city' => 'string|max:255',
                    'receiver_district' => 'string|max:255',
                    'receiver_address' => 'string|max:255',
                    'order_remark' => 'string|max:255',
                    'taobao_oid' => 'string|max:255',
                    'rfe_information' => 'string|max:255',
                    'locking_people' => 'string|max:255',
                    'tag_people' => 'string|max:255',
                    'tag_name' => 'string|max:255',
                    'custom_oid' => 'string|max:255',
                    'refund_status' => 'string|max:255',
                    'return_status' => 'string|max:255',
                    'patch_status' => 'string|max:255',
                    'patch_split' => 'string|max:255',
                    'after_sale_order_type' => 'string|max:255',
                    'service_submit_person' => 'string|max:255',
                    'after_sale_check_person' => 'string|max:255',
                    'director_check_person' => 'string|max:255',
                ];
                break;
            case 'PATCH':
                return [
                    'shop_name' => 'required|string|max:255',
                    'shop_group' => 'string|max:255',
                    'order_no' => 'required|string|max:255',
                    'previous_order_staff' => 'string|max:255',
                    'vip_name' => 'required|string|max:255',
                    'client_name' => 'string|max:255',
                    'parts_duty' => 'string|max:255',
                    'after_responsible_party' => 'string|max:255',
                    'suppliers_id' => 'string|max:255',
                    'logistic_name' => 'string|max:255',
                    'logistics_id' => 'string|max:255',
                    'logistic_name' => 'string|max:255',
                    'after_sale_person' => 'string|max:255',
                    'after_sale_type' => 'string|max:255',
                    'after_sale_group' => 'string|max:255',
                    'after_sale_status' => 'string|max:255',
                    'problem_description' => 'string|max:255',
                    'customer_service_requirements' => 'string|max:255',
                    'receiver_state' => 'string|max:255',
                    'receiver_city' => 'string|max:255',
                    'receiver_district' => 'string|max:255',
                    'receiver_address' => 'string|max:255',
                    'order_remark' => 'string|max:255',
                    'taobao_oid' => 'string|max:255',
                    'rfe_information' => 'string|max:255',
                    'locking_people' => 'string|max:255',
                    'tag_people' => 'string|max:255',
                    'tag_name' => 'string|max:255',
                    'custom_oid' => 'string|max:255',
                    'refund_status' => 'string|max:255',
                    'return_status' => 'string|max:255',
                    'patch_status' => 'string|max:255',
                    'patch_split' => 'string|max:255',
                    'after_sale_order_type' => 'string|max:255',
                    'service_submit_person' => 'string|max:255',
                    'after_sale_check_person' => 'string|max:255',
                    'director_check_person' => 'string|max:255',
                ];
                break;
        }
    }

    public function messages()
    {
        return [
            'order_status.in' => '售后状态必须是：新建、已提交',

            'order_no.required' => '订单号必填',
            'order_no.string' => '订单号必须string类型',
            'order_no.max' => '订单号最大长度为255',

            'shop_name.required' => '店铺名称必填',
            'shop_name.string' => '店铺名称必须string类型',
            'shop_name.max' => '店铺名称最大长度为255',

            'vip_name.required' => '会员ID必填',
            'vip_name.string' => '会员ID必须string类型',
            'vip_name.max' => '会员ID最大长度为255',
        ];
    }

    public function attributes()
    {
        return [
            'after_sale_order_no' => '系统单号',
            'order_status' => '售后状态',
            'shop_name' => '店铺名称',
            'shop_group' => '店铺分组',
            'order_no' => '订单号',
            'previous_order_staff' => '原订单业务员',
            'vip_name' => '会员昵称',
            'client_name' => '客户姓名',
            'parts_duty' => '补件责任方',
            'after_responsible_party' => '退货责任方',
            'suppliers_id' => '供应商',
            'logistic_name' => '物流公司',
            'logistics_id' => '物流单号',
            'deliver_date' => '发货时间',
            'order_staff' => '业务员',
            'after_sale_person' => '售后处理人',
            'order_amount' => '订单金额',
            'after_sale_type' => '售后类型',
            'after_sale_group' => '售后分类',
            'after_sale_status' => '售后状态',
            'order_phone' => '联系方式',
            'problem_description' => '问题描述',
            'customer_service_requirements' => '客服要求',
            'receiver_state' => '省',
            'receiver_city' => '市',
            'receiver_district' => '区',
            'receiver_address' => '地址',
            'order_remark' => '备注',
            'taobao_oid' => '淘宝订单号',
            'rfe_information' => '补件信息',
            'rfe_order_at' => '补件下单时间',
            'locking_people' => '锁定人',
            'locking_at' => '锁定时间',
            'tag_people' => '标记人',
            'tag_name' => '标记名称',
            'tag_at' => '标记时间',
            'predict_at' => '预计交期',
            'custom_oid' => '自定义单号',
            'refund_status' => '退款处理状态',
            'return_status' => '退货处理状态',
            'patch_status' => '补件处理状态',
            'patch_split' => '补件拆分',
            'is_refund' => '需要退款',
            'is_return' => '需要退货',
            'is_patch' => '需发补件',
            'is_solve' => '已解决',
            'after_sale_order_type' => '售后单类型',
            'is_service_submit' => '客服提交',
            'service_submit_person' => '客服提交人',
            'service_submit_date' => '客服提交时间',
            'is_after_sale_check' => '售后审核',
            'after_sale_check_person' => '售后审核人',
            'after_sale_check_date' => '售后审核时间',
            'is_director_check' => '主管审核',
            'director_check_person' => '主管审核人',
            'director_check_date' => '主管审核时间',
            'status' => '状态',
            'is_close' => '状态',
            'close_date' => '结算时间',
        ];
    }
}
