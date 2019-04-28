<template>
    <div>
        <div class="searchBox">
            <span><label>变更单号</label><el-input v-model="searchBox.change_no"></el-input></span>
            <span><label>订单号</label><el-input v-model="searchBox.order_no"></el-input></span>
            <span><label>会员名称</label><el-input v-model="searchBox.vip_name"></el-input></span>
            <span><label>申请人</label><el-input v-model="searchBox.apply_man"></el-input></span>
            <div style="text-align: left">
                <el-button type="primary">筛选</el-button>
                <el-button @click="resets">重置</el-button>
            </div>
        </div>
        <el-tabs v-model="activeName" @tab-click="firstHandleClick" style="height: 250px;">
            <el-tab-pane label="新建" name="0">
                <el-table :data="newChange" fit
                          @selection-change="handleSelectionChange"
                          v-loading="loading"
                          height="200"
                          @row-click="orderListRClick"
                          @row-dbclick="orderListRClick">
                    <el-table-column
                            type="selection"
                            width="95" align="center"
                            :checked="checkBoxInit">
                    </el-table-column>
                    <el-table-column
                            v-for="item in changeOrderListHead"
                            :label="item.label"
                            :width="item.width"
                            :key="item.label">
                        <template slot-scope="scope">
                            <span v-if="item.type=='checkBox'">
                                <span v-if="item.inProp">
                                    <el-checkbox> v-model="scope.row[item.prop][item.inProp disabled]</el-checkbox>
                                </span>
                                <span v-else>
                                    <el-checkbox v-model="scope.row[item.prop]" disabled></el-checkbox>
                                </span>
                            </span>
                            <span v-else>
                                <span v-if="scope.row[item.prop]">
                                     {{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}
                                </span>
                            </span>
                        </template>
                    </el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="待处理" name="1">
                <el-table :data="waitHandle" fit
                          @selection-change="handleSelectionChange"
                          v-loading="loading"
                          height="200"
                          @row-click="orderListRClick"
                          @row-dbclick="orderListRClick">
                    <el-table-column
                            type="selection"
                            width="95" align="center"
                            :checked="checkBoxInit">
                    </el-table-column>
                    <el-table-column
                            v-for="item in changeOrderListHead"
                            :label="item.label"
                            :width="item.width"
                            :key="item.label">
                        <template slot-scope="scope">
                            <span v-if="item.type=='checkBox'">
                                <span v-if="item.inProp">
                                    <el-checkbox> v-model="scope.row[item.prop][item.inProp disabled]</el-checkbox>
                                </span>
                                <span v-else>
                                    <el-checkbox v-model="scope.row[item.prop]" disabled></el-checkbox>
                                </span>
                            </span>
                            <span v-else>
                                <span v-if="scope.row[item.prop]">
                                     {{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}
                                </span>
                            </span>
                        </template>
                    </el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="已处理" name="2">
                <el-table :data="alreadyHandle" fit
                          @selection-change="handleSelectionChange"
                          v-loading="loading"
                          height="200"
                          @row-click="orderListRClick"
                          @row-dbclick="orderListRClick">
                    <el-table-column
                            type="selection"
                            width="95" align="center"
                            :checked="checkBoxInit">
                    </el-table-column>
                    <el-table-column
                            v-for="item in changeOrderListHead"
                            :label="item.label"
                            :width="item.width"
                            :key="item.label">
                        <template slot-scope="scope">
                            <span v-if="item.type=='checkBox'">
                                <span v-if="item.inProp">
                                    <el-checkbox> v-model="scope.row[item.prop][item.inProp disabled]</el-checkbox>
                                </span>
                                <span v-else>
                                    <el-checkbox v-model="scope.row[item.prop]" disabled></el-checkbox>
                                </span>
                            </span>
                            <span v-else>
                                <span v-if="scope.row[item.prop]">
                                     {{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}
                                </span>
                            </span>
                        </template>
                    </el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="作废" name="3">
                <el-table :data="abortChange" fit
                          @selection-change="handleSelectionChange"
                          v-loading="loading"
                          height="200"
                          @row-click="orderListRClick"
                          @row-dbclick="orderListRClick">
                    <el-table-column
                            type="selection"
                            width="95" align="center"
                            :checked="checkBoxInit">
                    </el-table-column>
                    <el-table-column
                            v-for="item in changeOrderListHead"
                            :label="item.label"
                            :width="item.width"
                            :key="item.label">
                        <template slot-scope="scope">
                            <span v-if="item.type=='checkBox'">
                                <span v-if="item.inProp">
                                    <el-checkbox> v-model="scope.row[item.prop][item.inProp disabled]</el-checkbox>
                                </span>
                                <span v-else>
                                    <el-checkbox v-model="scope.row[item.prop]" disabled></el-checkbox>
                                </span>
                            </span>
                            <span v-else>
                                <span v-if="scope.row[item.prop]">
                                     {{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}
                                </span>
                            </span>
                        </template>
                    </el-table-column>
                </el-table>
            </el-tab-pane>
        </el-tabs>

        <Pagination :page-url="this.urls.customerservicedepts" @handlePagChg="handlePagChg"
                    v-if="activeName=='0'"></Pagination>

        <el-tabs v-model="activeName2" @tab-click="secondHandleClick">
            <el-tab-pane label="变更明细" name="0">

            </el-tab-pane>
            <el-tab-pane label="变更订单主信息" name="1">

            </el-tab-pane>
            <el-tab-pane label="操作记录" name="2">

            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
    import {regionDataPlus, CodeToText, TextToCode} from 'element-china-area-data'

    export default {
        data() {
            return {
                newOpt: [
                    {
                        cnt: '增加',
                        icon: 'bf-add',
                        ent: this.addChanges,
                        ref: 'add',
                    },
                    {
                        cnt: '修改',
                        icon: 'bf-change',
                        ent: this.updateChanges,
                        nClick: false,
                    },
                    {
                        cnt: '删除',
                        icon: 'bf-del',
                        ent: this.deleteChanges,
                        nClick: false,
                    },
                    {
                        cnt: '提交',
                        icon: 'bf-submit',
                        ent: this.submitChanges,
                        nClick: false,
                    },
                    {
                        cnt: '审核',
                        icon: 'bf-audit',
                        ent: this.handleAudit,
                        nClick: false,
                    },
                    {
                        cnt: '退审',
                        icon: 'bf-auditfaild',
                        ent: this.handleUnAudit,
                        nClick: false,
                    },
                    {
                        cnt: '作废',
                        icon: 'bf-void',
                        ent: this.abort,
                        nClick: false,
                    },
                    {
                        cnt: '刷新',
                        icon: 'bf-refresh',
                        ent: this.refresh,
                    }
                ],
                filterBox: false,
                loading: true, //loading标识
                searchBox: {
                    change_no: '',
                    vip_name: '',
                    order_num: '',
                    order_man: '',
                    // order_phone: '',
                    // order_money: '',
                    // order_address: '',
                    // order_goods: '',
                    // order_staff: '',
                    // order_promiseDate: '',
                    // order_workDate: '',
                    // order_transMStart: '',
                    // order_transMEnd: '',
                    // orderCompany: [
                    //     {label: 'ceshi', value: 0}
                    // ],
                    // order_customerInves: '',
                    // order_mark: '',
                    // order_flag: '',
                    // ordertbFlag: [
                    //     {label: 'ceshi', value: 0}
                    // ],
                    // order_lock: '',
                    // orderLock: [
                    //     {label: 'ceshi', value: 0}
                    // ],
                    // order_company: '',
                    // order_shop: '',
                    // orderShops: [
                    //     {label: 'ceshi', value: 0}
                    // ],
                    apply_man: '',
                },

                activeName: '0',
                activeName2: '0',

                orderListData: [],


                checkBoxInit: false, //checked 属性l
                changeOrderListHead: [
                    // 后端再改inprop
                    {
                        label: '变更单号',
                        width: '220',
                        prop: 'change_no',
                        type: 'text',
                    },
                    {
                        label: '订单号',
                        width: '220',
                        prop: 'order_no',
                        type: 'text'
                    },
                    {
                        label: '申请人',
                        width: '100',
                        prop: 'apply_name',
                        type: 'text'
                    },
                    {
                        label: '审核人',
                        width: '100',
                        prop: 'audit_name',
                        type: 'text',
                    },
                    {
                        label: '状态',
                        width: '100',
                        prop: 'change_state',
                        type: 'text',
                    },
                    {
                        label: '服务车金额',
                        width: '100',
                        prop: 'service_car_fee',
                        type: 'number',
                    },
                    {
                        label: '服务车信息',
                        width: '120',
                        prop: 'service_car_info',
                        type: 'text',
                    },
                    //这里需要时间戳转换
                    {
                        label: '创建时间',
                        width: '100',
                        prop: 'created_at',
                        type: 'text',
                    },
                    {
                        label: '审核时间',
                        width: '130',
                        prop: 'updated_at',
                        type: 'text'
                    },
                    {
                        label: '备注',
                        width: '200',
                        prop: 'change_remark',
                        type: '',
                    },
                    {
                        label: '取消单号',
                        width: '95',
                        prop: 'cancel_order_no',
                        type: 'text',
                    },
                    {
                        label: '全单取消',
                        width: '95',
                        prop: 'cancel_all',
                        type: 'checkBox',
                    }
                ],
                newChange: [],
                waitHandle: [],
                alreadyHandle: [],
                abortChange: [],

                curRowId: '',
                curRowData: {},


                orderDtlHead: [//新建订单的商品信息的表头
                    [
                        {
                            label: 'sku名称',
                            width: '160',
                            prop: 'name',
                            type: 'text'
                        },
                        {
                            label: '数量',
                            width: '130',
                            prop: 'quantity',
                            type: 'number',
                        },
                        {
                            label: '油漆',
                            width: '120',
                            prop: 'paint',
                            type: 'text',
                        },
                        {
                            label: '需要印刷',
                            width: '120',
                            prop: 'is_printing',
                            type: 'checkbox',
                        },
                        {
                            label: '总体积',
                            width: '120',
                            prop: 'total_volume',
                            type: 'number',
                        },
                        {
                            label: '印刷费用',
                            width: '140',
                            prop: 'printing_fee',
                            type: 'number',
                        },
                        {
                            label: '现货',
                            width: '120',
                            prop: 'is_spot_goods',
                            type: 'checkbox',
                        },
                        {
                            label: '单价(线下)',
                            width: '150',
                            prop: 'under_line_univalent',
                            type: 'number'
                        },
                        {
                            label: '优惠(线下)',
                            width: '150',
                            prop: 'under_line_preferential',
                            type: 'number',
                        }
                    ],
                    [
                        {
                            label: '支付金额',
                            prop: 'payment',
                            type: 'number',
                        },
                        {
                            label: '支付方式',
                            prop: 'payment_methods_id',
                            type: 'select',
                            stateVal: 'paymentmethods'
                        },
                        {
                            label: '交易号',
                            prop: 'taobao_tid',
                            type: 'text',
                        },
                        {
                            label: '来源单号',
                            prop: 'taobao_oid',
                            type: 'text',
                        }
                    ],
                    [],
                    []
                ],
                payDtlData: [],
                /*新增*/
                addCustomerMask: false,
                moreForms: true,
                threeParts: true,
                addCustomerFormVal: {//作用未知
                    shops_id: '',
                    member_nick: '',
                    logistics_id: '',
                    billing_way: '',
                    promise_ship_time: '',
                    freight_types_id: '',
                    expected_freight: '',
                    distributions_id: '',
                    distribution_methods_id: '',
                    deliver_goods_fee: '',
                    move_upstairs_fee: '',
                    installation_fee: '',
                    total_distribution_fee: 0,
                    distribution_phone: '',
                    distribution_no: '',
                    distribution_types_id: '',
                    service_car_info: '',
                    take_delivery_goods_fee: '',
                    take_delivery_goods_ways_id: '',
                    express_fee: '',
                    service_car_fee: '',
                    cancel_after_verification_code: '',
                    wooden_frame_costs: '',
                    preferential_cashback: '',
                    favorable_cashback: '',
                    customer_types_id: '',
                    is_invoice: false,
                    invoice_express_fee: '',
                    express_invoice_title: '',
                    contract_no: '',
                    payment_methods_id: '',
                    deposit: '',
                    document_title: '',
                    warehouses_id: '',
                    payment_date: '',
                    interest_concessions: '',
                    is_notice: false,
                    is_cancel_after_verification: false,
                    accept_order_user: '',
                    tax_number: '',
                    receipt: '',
                    logistics_remark: '',
                    seller_remark: '',
                    customer_service_remark: '',
                    buyer_message: '',
                    status: true
                },
                addCustomerFormRules: {//新建订单的要求格式
                    shops_id: [
                        {required: true, message: '店铺必选', trigger: 'blur'},
                    ],
                    logistics_id: [
                        {required: true, message: ' 物流必选', trigger: 'blur'},
                    ],
                    billing_way: [
                        {required: true, message: '计费方式必选', trigger: 'blur'},
                    ],
                    freight_types_id: [
                        {required: true, message: '运费类型必选', trigger: 'blur'},
                    ],
                    distributions_id: [
                        {required: true, message: '配送方式必选', trigger: 'blur'},
                    ],
                    take_delivery_goods_fee: [
                        {required: true, message: '提货费用必填', trigger: 'blur'},
                    ],
                    customer_types_id: [
                        {required: true, message: '客户类型必选', trigger: 'blur'},
                    ],
                    payment_methods_id: [
                        {required: true, message: '付款方式必选', trigger: 'blur'},
                    ],
                    warehouses_id: [
                        {required: true, message: '发货仓库必选', trigger: 'blur'},
                    ]
                },
                addCustomerFormHead: [//新建订单的文本框表头
                    {
                        label: '单据来源',
                        prop: 'order_source',
                        holder: '系统自动生成',
                        width: '200',
                        type: 'text',
                        editChgAble: true,
                        addChgAble: true
                    },
                    {
                        label: '单据编号',
                        prop: 'taobao_oid',
                        holder: '系统自动生成',
                        type: 'text',
                        editChgAble: true,
                        addChgAble: true
                    },
                    {
                        label: '店铺名称',
                        prop: 'shops_id',
                        holder: '请选择店铺',
                        type: 'select',
                        stateVal: 'shop',
                        editChgAble: true
                    },
                    {
                        label: '会员昵称',
                        prop: 'member_nick',
                        holder: '请输入会员昵称',
                        type: 'text'
                    },
                    {
                        label: '物流公司',
                        prop: 'logistics_id',
                        holder: '请选择物流公司',
                        type: 'select',
                        stateVal: 'logistics'
                    },
                    {
                        label: '计费方式',
                        choiceName: ['按体积', '按重量'],
                        prop: 'billing_way',
                        type: 'radio',
                    },
                    {
                        label: '承诺日期',
                        prop: 'promise_ship_time',
                        type: 'DatePicker',
                    },
                    {
                        label: '运费类型',
                        prop: 'freight_types_id',
                        holder: '请选择运费类型',
                        type: 'select',
                        stateVal: 'freight_type'
                    },
                    {
                        label: '预计运费',
                        prop: 'expected_freight',
                        holder: '请输入预计运费',
                        type: 'number'
                    },
                    {
                        label: '配送公司',
                        prop: 'distributions_id',
                        holder: '请选择配送公司',
                        type: 'select',
                        stateVal: 'distribution'
                    },
                    {
                        label: '配送方式',
                        prop: 'distribution_methods_id',
                        holder: '请选择配送方式',
                        type: 'select',
                        stateVal: 'distribution_method'
                    },
                    {
                        label: '送货费用',
                        prop: 'deliver_goods_fee',
                        holder: '请输入送货费用',
                        type: 'number'
                    },
                    {
                        label: '搬楼费用',
                        prop: 'move_upstairs_fee',
                        holder: '请输入搬楼费用',
                        type: 'number'
                    },
                    {
                        label: '安装费用',
                        prop: 'installation_fee',
                        holder: '请输入安装费用',
                        type: 'number'
                    },
                    {
                        label: '配送总计',
                        prop: 'total_distribution_fee',
                        holder: '请输入配送总计',
                        type: 'number',
                        addChgAble: true
                    },
                    {
                        label: '配送电话',
                        prop: 'distribution_phone',
                        holder: '请输入配送电话',
                        type: 'number'
                    },
                    {
                        label: '配送单号',
                        prop: 'distribution_no',
                        holder: '请输入配送单号',
                        type: 'text'
                    },
                    {
                        label: '配送类型',
                        prop: 'distribution_types_id',
                        holder: '请选择配送类型',
                        type: 'select',
                        stateVal: 'distribution_type'
                    },
                    {
                        label: '配送信息',
                        prop: 'service_car_info',
                        holder: '请输入配送信息',
                        type: 'text'
                    },
                    {
                        label: '提货费用',
                        prop: 'take_delivery_goods_fee',
                        holder: '请输入提货费用',
                        type: 'number'
                    },
                    {
                        label: '提货方式',
                        prop: 'take_delivery_goods_ways_id',
                        holder: '请选择提货方式',
                        type: 'select',
                        stateVal: 'take_delivery_goodsWay'
                    },
                    {
                        label: '快递费用',
                        prop: 'express_fee',
                        holder: '请输入快递费用',
                        type: 'number'
                    },
                    {
                        label: '家装服务',
                        prop: 'service_car_fee',
                        holder: '请输入家装服务',
                        type: 'number'
                    },
                    {
                        label: '核销码',
                        prop: 'cancel_after_verification_code',
                        holder: '请输入核销码',
                        type: 'text'
                    },
                    {
                        label: '木架费',
                        prop: 'wooden_frame_costs',
                        holder: '请输入木架费',
                        type: 'number'
                    },
                    {
                        label: '优惠返现',
                        prop: 'preferential_cashback',
                        holder: '请输入优惠返现',
                        type: 'number'
                    },
                    {
                        label: '好评返现',
                        prop: 'favorable_cashback',
                        holder: '请输入好评返现',
                        type: 'number'
                    },
                    {
                        label: '客户类型',
                        prop: 'customer_types_id',
                        holder: '请输入客户类型',
                        type: 'select',
                        stateVal: 'customer_type'
                    },
                    {
                        label: '发票',
                        prop: 'is_invoice',
                        type: 'checkbox'
                    },
                    {
                        label: '抬头',
                        prop: 'express_invoice_title',
                        holder: '请输入发票抬头',
                        type: 'text'
                    },
                    {
                        label: '发票快递费',
                        prop: 'invoice_express_fee',
                        holder: '请输入发票快递费',
                        type: 'number'
                    },
                    {
                        label: '合同单号',
                        prop: 'contract_no',
                        holder: '请输入合同单号',
                        type: 'text'
                    },
                    {
                        label: '付款方式',
                        prop: 'payment_methods_id',
                        holder: '请选择付款方式',
                        type: 'select',
                        stateVal: 'payment_method'
                    },
                    {
                        label: '门店定金',
                        prop: 'deposit',
                        holder: '请输入门店定金',
                        type: 'number'
                    },
                    {
                        label: '单据头',
                        prop: 'document_title',
                        holder: '请输入单据头',
                        type: 'text'
                    },
                    {
                        label: '发货仓库',
                        holder: '请选择发货仓库',
                        prop: 'warehouses_id',
                        type: 'select',
                        stateVal: 'warehouse'
                    },
                    {
                        label: '收款日期',
                        prop: 'payment_date',
                        type: 'DatePicker'
                    },
                    {
                        label: '让利金额',
                        prop: 'interest_concessions',
                        holder: '请输入让利金额',
                        type: 'number'
                    },
                    {
                        label: '等通知发货',
                        prop: 'is_notice',
                        type: 'checkbox'
                    },
                    {
                        label: '是否核销',
                        prop: 'is_cancel_after_verification',
                        type: 'checkbox'
                    },
                    {
                        label: '接单用户',
                        prop: 'accept_order_user',
                        holder: '请输入接单用户',
                        type: 'text'
                    },
                    {
                        label: '税号',
                        prop: 'tax_number',
                        holder: '请输入税号',
                        type: 'text'
                    },
                    {
                        label: '收据',
                        prop: 'receipt',
                        holder: '请输入收据',
                        type: 'text'
                    },
                    {
                        label: '物流备注',
                        prop: 'logistics_remark',
                        holder: '请输入物流备注',
                        type: 'textarea'
                    },
                    {
                        label: '卖家备注',
                        holder: '请输入卖家备注',
                        prop: 'seller_remark',
                        type: 'textarea'
                    },
                    {
                        label: '客服备注',
                        holder: '请输入客服备注',
                        prop: 'customer_service_remark',
                        type: 'textarea'
                    },
                    {
                        label: '买家留言',
                        holder: '请输入买家留言',
                        prop: 'buyer_message',
                        type: 'textarea'
                    },
                    {
                        label: '开启订单',
                        prop: 'status',
                        type: 'checkbox'
                    }
                ],
                addActiveName: '0',
                proData: [],
                options: regionDataPlus,
                addHead: [
                    [
                        {
                            label: 'sku名称',
                            width: '160',
                            prop: 'name',
                            type: 'text',
                        },
                        {
                            label: '数量',
                            width: '130',
                            prop: 'newData',
                            inProp: 'quantity',
                            type: 'number',
                        },
                        {
                            label: '油漆',
                            width: '120',
                            prop: 'newData',
                            inProp: 'paint',
                            type: 'text',
                        },
                        {
                            label: '需要印刷',
                            width: '120',
                            prop: 'newData',
                            inProp: 'is_printing',
                            type: 'checkbox',
                        },
                        {
                            label: '总体积',
                            width: '120',
                            prop: 'newData',
                            inProp: 'total_volume',
                            type: 'number',
                        },
                        {
                            label: '印刷费用',
                            width: '140',
                            prop: 'newData',
                            inProp: 'printing_fee',
                            type: 'number',
                        },
                        {
                            label: '现货',
                            width: '120',
                            prop: 'newData',
                            inProp: 'is_spot_goods',
                            type: 'checkbox',
                        },
                        {
                            label: '单价(线下)',
                            width: '150',
                            prop: 'newData',
                            inProp: 'under_line_univalent',
                            type: 'number'
                        },
                        {
                            label: '优惠(线下)',
                            width: '150',
                            prop: 'newData',
                            inProp: 'under_line_preferential',
                            type: 'number',
                        }
                    ],
                    [
                        {
                            label: '姓名',
                            prop: 'receiver_name',
                            holder: '请输入姓名',
                            type: 'text'
                        },
                        {
                            label: '固定电话',
                            prop: 'receiver_phone',
                            holder: '请输入固定电话',
                            type: 'number'
                        },
                        {
                            label: '手机',
                            prop: 'receiver_mobile',
                            holder: '请输入手机号码',
                            type: 'number'
                        },
                        {
                            label: '省市区',
                            prop: 'provinces',
                            type: 'cascader'
                        },
                        {
                            label: '地址',
                            prop: 'receiver_address',
                            type: 'text',
                        },
                        {
                            label: '邮编',
                            prop: 'receiver_zip',
                            holder: '请输入邮编',
                            type: 'text'
                        }
                    ],
                    [
                        {
                            label: '类型名称',
                            prop: 'payment_methods_id',
                            type: 'select',
                            stateVal: 'fee_type'
                        },
                        {
                            label: '金额',
                            prop: 'payment',
                            type: 'number',
                        },
                    ]
                ],
                proMask: false,
                proQuery: {
                    commodity_code: '',
                    component_code: '',
                    shops_id: '',
                    short_name: '',
                },
                proHead: [
                    {
                        label: '产品图片',
                        width: '120',
                        prop: "img",
                        type: 'img'
                    },
                    {
                        label: '商品编码',
                        width: '120',
                        prop: "commodity_code",
                        type: 'text'
                    },
                    {
                        label: '工厂型号',
                        width: '120',
                        prop: "factory_model",
                        type: 'text'
                    },
                    {
                        label: '商品简称',
                        width: '120',
                        prop: "short_name",
                        type: 'text'
                    },
                    {
                        label: '类别名称',
                        width: '120',
                        prop: "goodsCategory",
                        inProp: 'name',
                        type: 'text'
                    },
                    {
                        label: '商品备注',
                        width: '120',
                        prop: "remark",
                        type: 'text'
                    }
                ],
                proVal: [],
                toggleText: false,
                toggleHeight: true,
                clickFlag: false,
                proCurSkuData: {},
                proSkuVal: [],
                proSkuHead: [
                    {
                        label: 'sku名称',
                        width: '120',
                        prop: 'name',
                        type: 'text',
                    },
                    {
                        label: '数量',
                        width: '120',
                        prop: 'newData',
                        inProp: 'quantity',
                        type: 'number',
                    },
                    {
                        label: '油漆',
                        width: '120',
                        prop: 'newData',
                        inProp: 'paint',
                        type: 'text',
                    },
                    {
                        label: '总体积',
                        width: '120',
                        prop: 'newData',
                        inProp: 'total_volume',
                        type: 'number',
                    },
                    {
                        label: '需要印刷',
                        width: '90',
                        prop: 'newData',
                        inProp: 'is_printing',
                        type: 'checkbox',
                    },
                    {
                        label: '印刷费用',
                        width: '120',
                        prop: 'newData',
                        inProp: 'printing_fee',
                        type: 'number',
                    },
                    {
                        label: '现货',
                        width: '90',
                        prop: 'newData',
                        inProp: 'is_spot_goods',
                        type: 'checkbox',
                    },
                    {
                        label: '单价(线下)',
                        width: '130',
                        prop: 'newData',
                        inProp: 'under_line_univalent',
                        type: 'number'
                    },
                    {
                        label: '优惠(线下)',
                        width: '130',
                        prop: 'newData',
                        inProp: 'under_line_preferential',
                        type: 'number',
                    }
                ],
                proCompVal: [],
                proCompHead: [
                    {
                        label: '组合',
                        width: '90',
                        prop: 'is_common',
                        type: 'checkbox',
                    },
                    {
                        label: '子件图片',
                        width: '120',
                        prop: 'img_url',
                        type: 'img',
                    },
                    {
                        label: '子件编码',
                        width: '140',
                        prop: 'component_code',
                        type: 'text',
                    },
                    {
                        label: '子件名称',
                        width: '120',
                        prop: 'spec',
                        type: 'text',
                    },
                    {
                        label: '颜色',
                        width: '120',
                        prop: 'color',
                        type: 'text'
                    },
                    {
                        label: '材质',
                        width: '120',
                        prop: 'materials',
                        type: 'text',
                    },
                    {
                        label: '功能',
                        width: '120',
                        prop: 'function',
                        type: 'text',
                    },
                    {
                        label: '特殊',
                        width: '120',
                        prop: 'special',
                        type: 'text'
                    },
                    {
                        label: '其他',
                        width: '120',
                        prop: 'other',
                        type: 'text',
                    },
                    {
                        label: '淘宝售价',
                        width: '130',
                        prop: 'tb_price',
                        type: 'number',
                    },
                    {
                        label: '标准售价',
                        width: '130',
                        prop: 'price',
                        type: 'number',
                    },
                    {
                        label: '最低销售价格',
                        width: '140',
                        prop: 'lowest_price',
                        type: 'number'
                    },
                    {
                        label: '最高销售价格',
                        width: '140',
                        prop: 'highest_price',
                        type: 'number'
                    },
                    {
                        label: '体积',
                        width: '120',
                        prop: 'volume',
                        type: 'number'
                    },
                    {
                        label: '包件数',
                        width: '130',
                        prop: 'package_quantity',
                        type: 'number',
                    },
                    {
                        label: '停产',
                        width: '90',
                        prop: 'is_stop_pro',
                        type: 'checkbox'
                    }
                ],
                proCompRowIndex: '',
                proSubmitData: [],
                proIds: [],
                addIds: [],
                proCompRow: {},
                proRIndex: '',
                receiveInfo: {
                    receiver_name: '',
                    receiver_phone: '',
                    receiver_mobile: '',
                    provinces: [],
                    receiver_state: '',
                    receiver_city: '',
                    receiver_district: '',
                    receiver_address: '',
                    receiver_zip: '',
                },
                halfForm: true,
                expenseData: [],
                expenseRIndex: '',
                addSubData: [],
                /*修改*/
                updateCustomerMask: false,
                updateCustomerFormVal: {},
                updateActiveName: '0',
                updateProData: [],
                updateReceiveInfo: {},
                updateExpenseData: [],
                updateProIds: [],
                /*删除单条*/
                showDel: false,
                delUrl: '',
                delId: '',






                //批量选择 批量删除
                ids: [],
                splitMask: false,
                splitVal: [],
                splitHead: [
                    {
                        label: '商品编码',
                        prop: "commodity_code",
                        type: 'text'
                    },
                    {
                        label: '商品简称',
                        prop: "short_name",
                        type: 'text'
                    },
                    {
                        label: '数量',
                        prop: "quantity",
                        type: 'number'
                    },
                    {
                        label: '实际拆分数量',
                        prop: "newData",
                        inProp: "quantity",
                        type: 'number'
                    }
                ],
                splitRowIndex: '',
                splitRow: {},
                mergerIds: []
            }
        },
        computed: {
            resData: {
                get: function () {
                    return this.$store.state.responseData
                },
                set: function () {
                }
            },
            urls: {
                get: function () {
                    return this.$store.state.urls
                },
                set: function () {
                }
            }
        },
        filters: {
            /*conditions: function(items){
        let searchRegex = new RegExp(this.searchBox.vip_name, 'i');
        let arr=[];
        for(let i= 0, j = items.length; i < j; i++){
          arr[i] = {};
          arr[i].contacters = [];
          for(let item = 0, len = items[i].contacters.length; item < len; item++){
            if(searchRegex.test(items[i].contacters[item].name) || searchRegex.test(items[i].contacters[item].enterpriseName) || searchRegex.test(items[i].contacters[item].phoneNumber) || searchRegex.test(items[i].contacters[item].uniqueID)){
              arr[i].firstLetter = items[i].firstLetter;
              arr[i].contacters.push(items[i].contacters[item]);
            }
          }
        }
        return arr;
      }
*/
        },
        methods: {
            toogleShow() {
                this.filterBox = !this.filterBox;
            },
            fetchData() {
                let index = this.activeName - 0;
                switch (index){
                    case 0:
                        this.$fetch(this.urls.customerservicedepts + '/searchuntreated', {'include': 'shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems.combination.productComponents,orderItems.product,businessPersonnel,locker,paymentDetails.paymentMethod,paymentDetails.order'})
                            .then(res => {
                                this.loading = false;
                                this.waitHandle = res.data;
                                let pg = res.meta.pagination;
                                this.$store.dispatch('currentPage', pg.current_page);
                                this.$store.commit('PER_PAGE', pg.per_page);
                                this.$store.commit('PAGE_TOTAL', pg.total);
                                this.$store.dispatch('paymentmethods', this.urls.paymentmethods);
                                this.$fetch(this.urls.customerservicedepts + '/create')
                                    .then(res => {
                                        this.addSubData = res;
                                    }, err => {
                                    })
                            }, err => {
                                if (err.response) {
                                    let arr = err.response.data.errors;
                                    let arr1 = [];
                                    for (let i in arr) {
                                        arr1.push(arr[i]);
                                    }
                                    this.$message.error(arr1.join(','));
                                }
                            });
                        break;
                    case 1:
                        this.$fetch(this.urls.customerservicedepts,{
                            'change_status': 10,
                            'include': 'shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems.combination.productComponents,orderItems.product,businessPersonnel,locker,paymentDetails.paymentMethod,paymentDetails.order'
                        })
                            .then(res => {
                                this.loading = false;
                                this.waitHandle = res.data;
                                let pg = res.meta.pagination;
                                this.$store.dispatch('currentPage', pg.current_page);
                                this.$store.commit('PER_PAGE', pg.per_page);
                                this.$store.commit('PAGE_TOTAL', pg.total);
                                this.$store.dispatch('paymentmethods', this.urls.paymentmethods);
                                this.$fetch(this.urls.customerservicedepts + '/create')
                                    .then(res => {
                                        this.addSubData = res;
                                    }, err => {
                                    })
                            }, err => {
                                if (err.response) {
                                    let arr = err.response.data.errors;
                                    let arr1 = [];
                                    for (let i in arr) {
                                        arr1.push(arr[i]);
                                    }
                                    this.$message.error(arr1.join(','));
                                }
                            });
                    case 2:
                        this.$fetch(this.urls.customerservicedepts,{
                            'change_status': 20,
                            'include': 'shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems.combination.productComponents,orderItems.product,businessPersonnel,locker,paymentDetails.paymentMethod,paymentDetails.order'
                        })
                            .then(res => {
                                this.loading = false;
                                this.alreadyHandle = res.data;
                                let pg = res.meta.pagination;
                                this.$store.dispatch('currentPage', pg.current_page);
                                this.$store.commit('PER_PAGE', pg.per_page);
                                this.$store.commit('PAGE_TOTAL', pg.total);
                                this.$store.dispatch('paymentmethods', this.urls.paymentmethods);
                                this.$fetch(this.urls.customerservicedepts + '/create')
                                    .then(res => {
                                        this.addSubData = res;
                                    }, err => {
                                    })
                            }, err => {
                                if (err.response) {
                                    let arr = err.response.data.errors;
                                    let arr1 = [];
                                    for (let i in arr) {
                                        arr1.push(arr[i]);
                                    }
                                    this.$message.error(arr1.join(','));
                                }
                            });
                    case 3:
                        this.$fetch(this.urls.customerservicedepts,{
                            'change_status': 70,
                            'include': 'shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems.combination.productComponents,orderItems.product,businessPersonnel,locker,paymentDetails.paymentMethod,paymentDetails.order'
                        })
                            .then(res => {
                                this.loading = false;
                                this.abortChange = res.data;
                                let pg = res.meta.pagination;
                                this.$store.dispatch('currentPage', pg.current_page);
                                this.$store.commit('PER_PAGE', pg.per_page);
                                this.$store.commit('PAGE_TOTAL', pg.total);
                                this.$store.dispatch('paymentmethods', this.urls.paymentmethods);
                                this.$fetch(this.urls.customerservicedepts + '/create')
                                    .then(res => {
                                        this.addSubData = res;
                                    }, err => {
                                    })
                            }, err => {
                                if (err.response) {
                                    let arr = err.response.data.errors;
                                    let arr1 = [];
                                    for (let i in arr) {
                                        arr1.push(arr[i]);
                                    }
                                    this.$message.error(arr1.join(','));
                                }
                            });
                }
            },
            test() {
                console.log(1);
            },
            refresh() {
                this.loading = true;
                this.fetchData();
            },
            /*页码*/
            handlePagChg(page) {
                this.$fetch(this.urls.customerservicedepts + '?page=' + page, {include: 'shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems.combination.productComponents,orderItems.product,businessPersonnel,locker,paymentDetails.paymentMethod,paymentDetails.order'})
                    .then(res => {
                        let index = this.activeName - 0;
                        switch (index){
                            case 0:
                                this.orderListData = res.data;
                                break;
                            case 1:
                                this.alreadyHandle = res.data;
                                break;
                            case 2:
                                this.waitHandle = res.data;
                                break;
                            case 3:
                                this.abortChange = rew.data;
                                break;
                        }
                    })
            },
            firstHandleClick() {

                let index = this.activeName - 0;

                console.log(index);

                switch (index) {
                    case 0:
                        this.loading = true;
                        this.fetchData();
                        break;
                    case 1:
                        let data = this.orderListData[0];
                        if (data) {
                            this.orderDtlFormVal = {
                                system_order_no: data.system_order_no,
                                taobao_oid: data.taobao_oid,
                                taobao_tid: data.taobao_tid,
                                association_taobao_oid: data.association_taobao_oid,
                                shop_name: data['shop']['title'],
                                business_personnel_name: data['businessPersonnel'] ? data['businessPersonnel']['username'] : '',
                                member_nick: data.member_nick,
                                receiver_name: data.receiver_name,
                                receiver_mobile: data.receiver_mobile,
                                receiver_phone: data.receiver_phone,
                                receiver_address: data.receiver_address,
                                express_fee: data.express_fee,
                                freight_types_name: data['freightType']['name'],
                                expected_freight: data.expected_freight,
                                deliver_goods_fee: data.deliver_goods_fee,
                                payment_date: data.payment_date,
                                promise_ship_time: data.promise_ship_time,
                                distribution_name: data['distribution']['name'],
                                distribution_method: data['distributionMethod']['name'],
                                service_car_info: data['service_car_info'],
                                distribution_phone: data['distribution_phone'],
                                buyer_message: data['buyer_message'],
                                logistic_name: data['logistic']['name'],
                                distributionType_name: data['distributionType']['name'],
                                total_distribution_fee: data['total_distribution_fee'],
                                customer_service_remark: data['customer_service_remark'],
                                seller_remark: data['seller_remark'],
                            }
                        }
                        if (data['orderItems']['data'].length > 0) {
                            data['orderItems']['data'].map(item => {
                                item['name'] = item['combination']['name'];
                                item['productComp'] = item['combination']['productComponents']['data'];
                            })
                        }
                        this.proDtlData = data['orderItems']['data'];
                        /*支付明细*/
                        this.payDtlData = data['paymentDetails']['data'];
                        break;
                    case 2:
                        this.test();
                        break;
                    case 3:
                        this.test();
                        break;
                }
            },
            secondHandleClick() {
                let index = this.activeName2 - 0;
                switch (index) {
                    case 0:
                        this.loading = true;
                        this.fetchData();
                        break;
                    case 1:
                        console.log(index);
                        break;
                    case 2:
                        console.log(index);
                        break;
                    case 3:
                        console.log(index);
                        break;
                }
            },
            orderListRClick(row) {
                console.log("orderListRClic");
                this.curRowId = row.id;
                this.curRowData = row;
            },
            addChanges() {
                console.log("addChanges");
                this.addCustomerMask = true;
                this.addIds = [];
                this.proData = [];
                this.proRIndex = '';
            },
            updateChanges() {
                console.log("updateChanges");
            },
            deleteChanges() {
                console.log("deleteChanges");
            },
            submitChanges() {
                console.log("submitChanges");
            },
            handleAudit() {
                console.log("handleAudit");
                if (this.newOpt[4].nClick) {
                    return
                } else {
                    let id = this.checkboxId ? this.checkboxId : this.curRowId;
                    this.$put(this.urls.customerservicedepts + '/' + id + '/audit')
                        .then(() => {
                            // this.newOpt[1].nClick = true;
                            this.refresh();
                            this.$message({
                                message: '审核成功',
                                type: 'success'
                            })
                        }, err => {
                            if (err.response) {
                                let arr = err.response.data.errors;
                                let arr1 = [];
                                for (let i in arr) {
                                    arr1.push(arr[i]);
                                }
                                let str = arr1.join(',');
                                this.$message.error(str);
                            }
                        })
                }
            },
            handleUnAudit() {
                console.log("handloeUnAudit");
            },

            //批量删除操作
            handleSelectionChange(val) {
                console.log(val);
                //拿到当前id集合
                let delArr = [];
                val.forEach(seletedIem => {
                    delArr.push(selecteItem.id);
                })
                console.log(+delArr)
                this.ids = delArr.join(',');
                console.log(delArr)
                //拿到当前id
                this.checkboxId = val.length > 0 ? val[val.length - 1].id : '';
                this.curRowData = val.length > 0 ? val[val.length - 1] : '';
                this.mergerIds = val;
            },
            resets() {
                this.searchBox = {};
            }
        },
        mounted() {
            this.fetchData();
            // this.$store.state.opt.opts = this.newOpt;
            // this.$store.commit('change', this.newOpt);
            // const that = this;
            this.$store.dispatch('setOpt', this.newOpt);
            let that = this;
            $(window).resize(() => {
                return (() => {
                    // that.$store.state.opt.opts = that.newOpt;
                    // that.$store.commit('change', that.newOpt);
                    that.$store.dispatch('setOpt', that.newOpt);
                })()
            })
        }
    }
</script>
