<template>
    <div>
        <div class="search_box">
            <div class="searchBox">
                <span>
                    <label>店铺昵称</label>
                    <el-input v-model.trim="searchBox.shop_nick" clearable @keyuo.enter.native="handleQuery"></el-input>
                </span>
                <span>
                    <label>订单编号</label>
                    <el-input v-model.trim="searchBox.order_no" clearable @keyup.enter.native="handleQuery"></el-input>
                </span>
                <span>
                    <label>买家昵称</label>
                    <el-input v-model.trim="searchBox.buyer_nick" clearable
                              @keyup.enter.native="handleQuery"></el-input>
                </span>
                <span>
                    <label>买家姓名</label>
                    <el-input v-model.trim="searchBox.buyer_name" clearable
                              @keyup.enter.native="handleQuery"></el-input>
                </span>
            </div>
            <div class="searchBox">
                <span>
                    <label>还款信息</label>
                    <el-input v-model.trim="searchBox.refund_info" clearable
                              @keyup.enter.native="handleQuery"></el-input>
                </span>
                <span>
                    <label>锁定人</label>
                    <el-input v-model.trim="searchBox.locker" clearable @keyup.enter.native="handleQuery"></el-input>
                </span>
                <span>
                    <label>退款时间</label>
                    <el-date-picker v-model="searchBox.refund_time" type="daterange" range-separator="至"
                                    start-placeholder="开始日期" end-placeholder="结束日期">
                    </el-date-picker>
                </span>
            </div>
        </div>

        <el-tabs v-model="topActiveName" @tab-click="clickTopTabs">
            <!--tab页-->
            <el-tab-pane label="未处理" name="pending">
                <!--表格-->
                <el-table :data="pending.data" fit
                          v-loading="pending.loading"
                          height="300">
                    <el-table-column
                            type="selection"
                            width="95" align="center"
                            :checked="checkboxInit">
                    </el-table-column>
                    <el-table-column v-for="item in pending.table" :label="item.label" align="center"
                                     :width="item.width"
                                     :key="item.prop">
                        <template slot-scope="scope">
                            <span v-if="item.type === 'select'">
                                <span v-if="scope.row[item.prop] === ''"></span>
                                <span v-else-if="typeof scope.row[item.prop] == 'object' && item.nmProp">
                                    {{scope.row[item.prop][item.nmProp]}}
                                </span>
                            </span>
                            <span v-else-if="item.type === 'checkbox'">
                                <el-checkbox v-model="scope.row[item.prop]" disabled></el-checkbox>
                            </span>
                            <span v-else-if="item.type === 'img'">
                                <el-popover placement="right" trigger="hover" popper-class="picture_detail">
                                    <img :src="scope.row[item.prop]" alt="">
                                    <img slot="reference" :src="scope.row[item.prop]" :alt="scope.row[item.alt]">
                                </el-popover>
                            </span>
                            <span v-else>
                                <span v-if="scope.row[item.prop]">
                                    {{item.inProp ? scope.row[item.prop][item.inProp] : scope.row[item.prop]}}
                                </span>
                            </span>
                        </template>
                    </el-table-column>

                </el-table>
            </el-tab-pane>
            <!--tab页-->
            <el-tab-pane label="已处理" name="solved">
                <!--表格-->
                <el-table :data="solved.data" fit
                          v-loading="solved.loading"
                          height="300">
                    <el-table-column
                            type="selection"
                            width="95" align="center"
                            :checked="checkboxInit">
                    </el-table-column>
                    <el-table-column v-for="item in solved.table" :label="item.label" align="center"
                                     :width="item.width"
                                     :key="item.prop">
                        <template slot-scope="scope">
                            <span v-if="item.type === 'select'">
                                <span v-if="scope.row[item.prop] === ''"></span>
                                <span v-else-if="typeof scope.row[item.prop] == 'object' && item.nmProp">
                                    {{scope.row[item.prop][item.nmProp]}}
                                </span>
                            </span>
                            <span v-else-if="item.type === 'checkbox'">
                                <el-checkbox v-model="scope.row[item.prop]" disabled></el-checkbox>
                            </span>
                            <span v-else-if="item.type === 'img'">
                                <el-popover placement="right" trigger="hover" popper-class="picture_detail">
                                    <img :src="scope.row[item.prop]" alt="">
                                    <img slot="reference" :src="scope.row[item.prop]" :alt="scope.row[item.alt]">
                                </el-popover>
                            </span>
                            <span v-else>
                                <span v-if="scope.row[item.prop]">
                                    {{item.inProp ? scope.row[item.prop][item.inProp] : scope.row[item.prop]}}
                                </span>
                            </span>
                        </template>
                    </el-table-column>

                </el-table>
            </el-tab-pane>

        </el-tabs>

        <Pagination :page-url="urls['auditProofread']"></Pagination>

        <el-tabs v-model="btmActiveName" @tab-click="clickBtmTabs">
            <el-tab-pane label="详细信息" name="refundDetail">
                <div class="search_box">
                    <div class="searchBox">
                        <span>
                            <label>系统单号</label>
                            <el-input v-model.trim="refundDetail.system_no" disabled
                                      @keyuo.enter.native="handleQuery"></el-input>
                        </span>
                        <span>
                            <label>退款单号</label>
                            <el-input v-model.trim="refundDetail.refund_no" disabled
                                      @keyuo.enter.native="handleQuery"></el-input>
                        </span>
                        <span>
                            <label>买家昵称</label>
                            <el-input v-model.trim="refundDetail.buyer_nick" disabled
                                      @keyuo.enter.native="handleQuery"></el-input>
                        </span>
                        <span>
                            <label>卖家昵称</label>
                            <el-input v-model.trim="refundDetail.shop_nick" disabled
                                      @keyuo.enter.native="handleQuery"></el-input>
                        </span>
                    </div>
                    <div class="searchBox">
                        <span>
                            <label>退款金额</label>
                            <el-input v-model.trim="refundDetail.refund_amount" disabled
                                      @keyuo.enter.native="handleQuery"></el-input>
                        </span>
                        <span>
                            <label>支付金额</label>
                            <el-input v-model.trim="refundDetail.pay_amount" disabled
                                      @keyuo.enter.native="handleQuery"></el-input>
                        </span>
                        <span>
                            <label>退款方式</label>
                            <el-input v-model.trim="refundDetail.refund_func" disabled
                                      @keyuo.enter.native="handleQuery"></el-input>
                        </span>
                        <span>
                            <label>创建时间</label>
                            <el-input v-model.trim="refundDetail.create_at" disabled
                                      @keyuo.enter.native="handleQuery"></el-input>
                        </span>
                    </div>
                    <div class="searchBox">
                        <span>
                            <label>超时时间</label>
                            <el-input v-model.trim="refundDetail.timeout_at" disabled
                                      @keyuo.enter.native="handleQuery"></el-input>
                        </span>
                        <span>
                            <label>单据类型</label>
                            <el-input v-model.trim="refundDetail.receipt_type" disabled
                                      @keyuo.enter.native="handleQuery"></el-input>
                        </span>
                        <span>
                            <label>淘宝售价</label>
                            <el-input v-model.trim="refundDetail.taobao_price" disabled
                                      @keyuo.enter.native="handleQuery"></el-input>
                        </span>
                        <span>
                            <label>数量</label>
                            <el-input v-model.trim="refundDetail.number" disabled
                                      @keyuo.enter.native="handleQuery"></el-input>
                        </span>
                    </div>
                    <div class="searchBox">
                        <span>
                            <label>交易单号</label>
                            <el-input v-model.trim="refundDetail.trans_no" disabled
                                      @keyuo.enter.native="handleQuery"></el-input>
                        </span>
                        <span>
                            <label>明细单号</label>
                            <el-input v-model.trim="refundDetail.detail_no" disabled
                                      @keyuo.enter.native="handleQuery"></el-input>
                        </span>
                        <span>
                            <label>退款原因</label>
                            <el-input v-model.trim="refundDetail.refund_reason" disabled
                                      @keyuo.enter.native="handleQuery"></el-input>
                        </span>
                        <span>
                            <label>还款类型</label>
                            <el-input v-model.trim="refundDetail.refund_type" disabled
                                      @keyuo.enter.native="handleQuery"></el-input>
                        </span>
                    </div>
                    <div class="searchBox">
                        <span>
                            <label>业务备注</label>
                            <el-input type="textarea" v-model.trim="refundDetail.business_remark" disabled
                                      @keyuo.enter.native="handleQuery"></el-input>
                        </span>
                        <span>
                            <label>售后备注</label>
                            <el-input type="textarea" v-model.trim="refundDetail.sale_remark" disabled
                                      @keyuo.enter.native="handleQuery"></el-input>
                        </span>
                        <span>
                            <label>财务备注</label>
                            <el-input type="textarea" v-model.trim="refundDetail.financial_remark" disabled
                                      @keyuo.enter.native="handleQuery"></el-input>
                        </span>
                        <span>
                            <label>还款说明</label>
                            <el-input type="textarea" v-model.trim="refundDetail.refund_remark" disabled
                                      @keyuo.enter.native="handleQuery"></el-input>
                        </span>
                    </div>
                </div>
            </el-tab-pane>

            <el-tab-pane label="操作日志" name="refundRecord">
            </el-tab-pane>

            <el-tab-pane label="图片信息" name="imgInfo">
                <div class="dialog-footer" style="float: right;">
                    <el-button type="primary">上传</el-button>
                    <el-button>删除</el-button>
                </div>
            </el-tab-pane>

            <el-tab-pane label="多张图片" name="images">
                <div class="dialog-footer" style="float: right;">
                    <el-button type="primary">粘贴</el-button>
                    <el-button type="primary">上传</el-button>
                </div>
            </el-tab-pane>

        </el-tabs>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                newOpt: [
                    {
                        cnt: '锁定',
                        icon: 'bf-lock',
                        ent: this.test,
                        nClick: false
                    },
                    {
                        cnt: '解锁',
                        icon: 'bf-delock',
                        ent: this.test,
                        nClick: false
                    },
                    {
                        cnt: '审核',
                        icon: 'bf-audit',
                        ent: this.test,
                        nClick: false
                    },
                    {
                        cnt: '退审',
                        icon: 'bf-auditfaild',
                        ent: this.test,
                        nClick: false
                    },
                    {
                        cnt: '刷新',
                        icon: 'bf-refresh',
                        ent: this.test,
                        nClick: false
                    }
                ],
                moreForms: true,
                checkboxInit: false,
                filterBox: false,
                searchBox: {
                    shop_nick: '',
                    order_no: '',
                    buyer_nick: '',
                    buyer_name: '',
                    refund_info: '',
                    locker: '',
                    refund_time: '',
                },
                topActiveName: 'pending',
                btmActiveName: 'refundDetail',

                pending: {
                    table: [
                        {
                            label: '系统单号',
                            width: '200',
                            prop: 'refund_no',
                            type: 'text',
                        },
                        {
                            label: '订单编号',
                            width: '120',
                            prop: 'order_no',
                            type: 'text',
                        },
                        {
                            label: '卖家昵称',
                            width: '120',
                            prop: 'seller_nick',
                            type: 'text',
                        },
                        {
                            label: '店铺分组',
                            width: '120',
                            prop: 'shop_group',
                            type: 'text',
                        },
                        {
                            label: '买家昵称',
                            width: '120',
                            prop: 'buyer_nick',
                            type: 'text',
                        },
                        {
                            label: '单据类型',
                            width: '120',
                            prop: 'receipt_type',
                            type: 'text',
                        },
                        {
                            label: '退款方式',
                            width: '120',
                            prop: 'refund_func',
                            type: 'text',
                        },
                        {
                            label: '退款金额',
                            width: '180',
                            prop: 'refund_amount',
                            type: 'text',
                        },
                        {
                            label: '退款时间',
                            width: '180',
                            prop: 'refund_at',
                            type: 'text',
                        },
                        {
                            label: '淘宝退款状态',
                            width: '180',
                            prop: 'taobao_refund_state',
                            type: 'text',
                        },
                        {
                            label: '还款账号',
                            width: '180',
                            prop: 'refund_account',
                            type: 'text',
                        },
                        {
                            label: '还款类型',
                            width: '180',
                            prop: 'refund_type',
                            type: 'text',
                        },
                        {
                            label: '开户银行',
                            width: '180',
                            prop: 'bank',
                            type: 'text',
                        },
                        {
                            label: '开户地址',
                            width: '180',
                            prop: 'bank_address',
                            type: 'text',
                        },
                        {
                            label: '创建人',
                            width: '180',
                            prop: 'creator',
                            type: 'text',
                        },
                        {
                            label: '锁定人',
                            width: '180',
                            prop: 'locker',
                            type: 'text',
                        },
                        {
                            label: '锁定时间',
                            width: '180',
                            prop: 'lock_at',
                            type: 'text',
                        },
                        {
                            label: '业务审核人',
                            width: '180',
                            prop: 'business_auditor',
                            type: 'text',
                        },
                        {
                            label: '业务审核时间',
                            width: '180',
                            prop: 'business_audit_at',
                            type: 'text',
                        },
                        {
                            label: '审计',
                            width: '180',
                            prop: 'audit',
                            type: 'checkbox',
                        },
                        {
                            label: '售后审核人',
                            width: '180',
                            prop: 'sale_auditor',
                            type: 'text',
                        },
                        {
                            label: '审计人',
                            width: '180',
                            prop: 'auditor',
                            type: 'text',
                        },
                        {
                            label: '售后审核时间',
                            width: '180',
                            prop: 'sale_audit_at',
                            type: 'text',
                        },
                        {
                            label: '审计时间',
                            width: '180',
                            prop: 'audit_at',
                            type: 'text',
                        },
                        {
                            label: '财务审核人',
                            width: '180',
                            prop: 'financial_auditor',
                            type: 'text',
                        },
                        {
                            label: '财务审核时间',
                            width: '180',
                            prop: 'financial_audit_at',
                            type: 'text',
                        },
                        {
                            label: '锁定',
                            width: '100',
                            prop: 'is_lock',
                            type: 'checkbox',
                        },
                        {
                            label: '业务审核',
                            width: '100',
                            prop: 'is_business_audit',
                            type: 'checkbox',
                        },
                        {
                            label: '售后审核',
                            width: '100',
                            prop: 'is_sale_audit',
                            type: 'checkbox',
                        },
                        {
                            label: '财务审核',
                            width: '100',
                            prop: 'is_financial_audit',
                            type: 'checkbox',
                        },
                        {
                            label: '标记名称',
                            width: '100',
                            prop: 'mark_name',
                            type: 'text',
                        },
                        {
                            label: '标记人',
                            width: '180',
                            prop: 'marker',
                            type: 'text',
                        },
                        {
                            label: '标记时间',
                            width: '100',
                            prop: 'mark_at',
                            type: 'text',
                        },
                        {
                            label: '是否启用',
                            width: '100',
                            prop: 'is_use',
                            type: 'checkbox',
                        }
                    ],
                    loading: true,
                    data: []
                },
                solved: {
                    table: [
                        {
                            label: '系统单号',
                            width: '200',
                            prop: 'refund_no',
                            type: 'text',
                        },
                        {
                            label: '订单编号',
                            width: '120',
                            prop: 'order_no',
                            type: 'text',
                        },
                        {
                            label: '卖家昵称',
                            width: '120',
                            prop: 'seller_nick',
                            type: 'text',
                        },
                        {
                            label: '店铺分组',
                            width: '120',
                            prop: 'shop_group',
                            type: 'text',
                        },
                        {
                            label: '买家昵称',
                            width: '120',
                            prop: 'buyer_nick',
                            type: 'text',
                        },
                        {
                            label: '单据类型',
                            width: '120',
                            prop: 'receipt_type',
                            type: 'text',
                        },
                        {
                            label: '退款方式',
                            width: '120',
                            prop: 'refund_func',
                            type: 'text',
                        },
                        {
                            label: '退款金额',
                            width: '180',
                            prop: 'refund_amount',
                            type: 'text',
                        },
                        {
                            label: '退款时间',
                            width: '180',
                            prop: 'refund_at',
                            type: 'text',
                        },
                        {
                            label: '淘宝退款状态',
                            width: '180',
                            prop: 'taobao_refund_state',
                            type: 'text',
                        },
                        {
                            label: '还款账号',
                            width: '180',
                            prop: 'refund_account',
                            type: 'text',
                        },
                        {
                            label: '还款类型',
                            width: '180',
                            prop: 'refund_type',
                            type: 'text',
                        },
                        {
                            label: '开户银行',
                            width: '180',
                            prop: 'bank',
                            type: 'text',
                        },
                        {
                            label: '开户地址',
                            width: '180',
                            prop: 'bank_address',
                            type: 'text',
                        },
                        {
                            label: '创建人',
                            width: '180',
                            prop: 'creator',
                            type: 'text',
                        },
                        {
                            label: '锁定人',
                            width: '180',
                            prop: 'locker',
                            type: 'text',
                        },
                        {
                            label: '锁定时间',
                            width: '180',
                            prop: 'lock_at',
                            type: 'text',
                        },
                        {
                            label: '业务审核人',
                            width: '180',
                            prop: 'business_auditor',
                            type: 'text',
                        },
                        {
                            label: '业务审核时间',
                            width: '180',
                            prop: 'business_audit_at',
                            type: 'text',
                        },
                        {
                            label: '审计',
                            width: '180',
                            prop: 'audit',
                            type: 'checkbox',
                        },
                        {
                            label: '售后审核人',
                            width: '180',
                            prop: 'sale_auditor',
                            type: 'text',
                        },
                        {
                            label: '审计人',
                            width: '180',
                            prop: 'auditor',
                            type: 'text',
                        },
                        {
                            label: '售后审核时间',
                            width: '180',
                            prop: 'sale_audit_at',
                            type: 'text',
                        },
                        {
                            label: '审计时间',
                            width: '180',
                            prop: 'audit_at',
                            type: 'text',
                        },
                        {
                            label: '财务审核人',
                            width: '180',
                            prop: 'financial_auditor',
                            type: 'text',
                        },
                        {
                            label: '财务审核时间',
                            width: '180',
                            prop: 'financial_audit_at',
                            type: 'text',
                        },
                        {
                            label: '锁定',
                            width: '100',
                            prop: 'is_lock',
                            type: 'checkbox',
                        },
                        {
                            label: '业务审核',
                            width: '100',
                            prop: 'is_business_audit',
                            type: 'checkbox',
                        },
                        {
                            label: '售后审核',
                            width: '100',
                            prop: 'is_sale_audit',
                            type: 'checkbox',
                        },
                        {
                            label: '财务审核',
                            width: '100',
                            prop: 'is_financial_audit',
                            type: 'checkbox',
                        },
                        {
                            label: '标记名称',
                            width: '100',
                            prop: 'mark_name',
                            type: 'text',
                        },
                        {
                            label: '标记人',
                            width: '180',
                            prop: 'marker',
                            type: 'text',
                        },
                        {
                            label: '标记时间',
                            width: '100',
                            prop: 'mark_at',
                            type: 'text',
                        },
                        {
                            label: '是否启用',
                            width: '100',
                            prop: 'is_use',
                            type: 'checkbox',
                        }
                    ],
                    loading: true,
                    data: []
                },

                refundDetail: {
                    system_no: '',
                    refund_no: '',
                    buyer_nick: '',
                    shop_nick: '',
                    refund_amount: '',
                    pay_amount: '',
                    refund_func: '',
                    create_at: '',
                    timeout_at: '',
                    receipt_type: '',
                    taobao_price: '',
                    number: '',
                    trans_no: '',
                    detail_no: '',
                    refund_reason: '',
                    refund_type: '',
                    business_remark: '',
                    sale_remark: '',
                    financial_remark: '',
                    refund_remark: '',
                },

            }
        },
        methods: {
            updateOpts() {
                this.$store.state.opt.opts = this.newOpt;
                this.$store.commit('change', this.newOpt);
            },
            test() {
                console.log(1);
            },
            cancelRowCName({row, rowIndex}) {
                row.index = rowIndex;
            },
            addCellClick(row) {
                this.addCurRow = 'index' + row.index;
            },
            delAddPur(index) {
                // this.addPFDialog.data.data.splice(index,1);
            },
            confirmAdd() {

            },
            cancelAdd() {

            },

            clickTopTabs() {
                switch (this.topActiveName) {
                    case 'pending':
                        this.pending.loading = true;
                        this.newOpt[0].nClick = false;
                        this.newOpt[1].nClick = true;
                        this.newOpt[2].nClick = true;
                        this.newOpt[3].nClick = false;
                        this.newOpt[4].nClick = false;


                        this.pending.loading = false;
                        break;
                    case 'solved':
                        this.solved.loading = true;
                        this.newOpt[0].nClick = true;
                        this.newOpt[1].nClick = true;
                        this.newOpt[2].nClick = true;
                        this.newOpt[3].nClick = true;
                        this.newOpt[4].nClick = false;


                        this.solved.loading = false;
                        break;
                }
            },
            clickBtmTabs() {
                switch (this.btmActiveName) {
                    case 'refundDetail':

                        break;
                    case 'refundRecord':

                        break;

                    case 'imgInfo':

                        break;
                    case 'images':

                        break;
                }
            },


        },
        watch: {
            newOpt: {
                handler() {
                    this.updateOpts()
                },
                immediate: true,
                deep: true

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
        mounted() {
            this.clickTopTabs();
            this.clickBtmTabs();
            this.updateOpts();
        }
    }
</script>
