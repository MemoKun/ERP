webpackJsonp([42],{

/***/ 471:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(628)
/* template */
var __vue_template__ = __webpack_require__(629)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/views/refund/customerReApplication.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-38f0efbb", Component.options)
  } else {
    hotAPI.reload("data-v-38f0efbb", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 628:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_element_china_area_data__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_element_china_area_data___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_element_china_area_data__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      newOpt: [{
        cnt: "新增",
        icon: "bf-add",
        ent: this.addCustomer,
        ref: "add"
      }, {
        cnt: "修改",
        icon: "bf-change",
        ent: this.updateData,
        nClick: true
      }, {
        cnt: "删除",
        icon: "bf-del",
        ent: this.delBatch,
        nClick: true
      }, {
        cnt: "锁定",
        icon: "bf-lock",
        ent: this.lockOrder,
        nClick: false
      }, {
        cnt: "解锁",
        icon: "bf-delock",
        ent: this.debLock,
        nClick: true
      }, {
        cnt: "审核",
        icon: "bf-audit",
        ent: this.handleAudit,
        nClick: true
      }, {
        cnt: "退审",
        icon: "bf-auditfaild",
        ent: this.handleUnAudit,
        nClick: true
      }, {
        cnt: "打印",
        icon: "bf-printer",
        ent: this.test
      }, {
        cnt: "刷新",
        icon: "bf-refresh",
        ent: this.refresh
      }],
      filterBox: false,
      searchBox: {
        shop_nick: "",
        order_no: "",
        buyer_nick: "",
        buyer_name: "",
        refund_info: "",
        locker: "",
        refund_time: ""
      },
      /*获取数据*/
      activeName: "0",
      leftTopActiveName: "0",
      rightActiveName: "0",
      orderListData: [],
      orderListHead: [
      //订单表头标签
      {
        label: "系统单号",
        width: "200",
        prop: "refund_sn",
        type: "text"
      }, {
        label: "订单编号",
        width: "120",
        prop: "order_sn",
        type: "text"
      }, {
        label: "店铺名称",
        width: "120",
        prop: "shops_id",
        type: "text"
      }, {
        label: "买家姓名",
        width: "120",
        prop: "buyer_name",
        type: "text"
      }, {
        label: "买家昵称",
        width: "120",
        prop: "buyer_nick",
        type: "text"
      }, {
        label: "单据类型",
        width: "120",
        prop: "receipt_type",
        type: "text"
      }, {
        label: "退款金额",
        width: "180",
        prop: "refund_amount",
        type: "text"
      }, {
        label: "退款时间",
        width: "180",
        prop: "created_at",
        type: "text"
      }, {
        label: "淘宝退款状态",
        width: "180",
        prop: "taobao_refund_status",
        type: "text"
      }, {
        label: "退款账号",
        width: "180",
        prop: "refund_account",
        type: "text"
      }, {
        label: "退款方式",
        width: "180",
        prop: "refund_payment_methods_id",
        type: "text"
      }, {
        label: "开户银行",
        width: "180",
        prop: "bank",
        type: "text"
      }, {
        label: "开户地址",
        width: "180",
        prop: "bank_address",
        type: "text"
      }, {
        label: "创建人",
        width: "180",
        prop: "creator_id",
        type: "text"
      }, {
        label: "创建时间",
        width: "180",
        prop: "created_at",
        type: "text"
      }, {
        label: "锁定人",
        width: "180",
        prop: "locker_id",
        type: "text"
      }, {
        label: "锁定时间",
        width: "180",
        prop: "locked_at",
        type: "text"
      }, {
        label: "业务审核人",
        width: "180",
        prop: "business_personnel_id",
        type: "text"
      }, {
        label: "业务审核时间",
        width: "180",
        prop: "bs_audit_at",
        type: "text"
      }, {
        label: "售后审核人",
        width: "180",
        prop: "after_sales_id",
        type: "text"
      }, {
        label: "售后审核时间",
        width: "180",
        prop: "as_audit_at",
        type: "text"
      }, {
        label: "财务审核人",
        width: "180",
        prop: "financial_id",
        type: "text"
      }, {
        label: "财务审核时间",
        width: "180",
        prop: "f_audit_at",
        type: "text"
      }, {
        label: "锁定",
        width: "100",
        prop: "refund_order_status",
        type: "checkbox"
      }, {
        label: "业务审核",
        width: "100",
        prop: "refund_order_status",
        type: "checkbox"
      }, {
        label: "售后审核",
        width: "100",
        prop: "refund_order_status",
        type: "checkbox"
      }, {
        label: "财务审核",
        width: "100",
        prop: "refund_order_status",
        type: "checkbox"
      }, {
        label: "是否启用",
        width: "100",
        prop: "status",
        type: "checkbox"
      }],
      loading: true, //作用未知
      checkboxInit: false, //作用未知
      orderListIndex: "", //作用未知
      alreadyHandle: [],
      orderDtlFormVal: {},
      orderDtlFormHead: [{
        label: "系统单号",
        prop: "system_order_no",
        type: "text"
      }, {
        label: "淘宝单号",
        prop: "taobao_oid",
        type: "text"
      }, {
        label: "交易号",
        prop: "taobao_tid",
        type: "text"
      }, {
        label: "单号失联",
        prop: "association_taobao_oid",
        type: "text"
      }, {
        label: "所属店铺",
        prop: "shop_name",
        type: "text"
      }, {
        label: "业务员",
        prop: "business_personnel_name",
        type: "text"
      }, {
        label: "买家昵称",
        prop: "member_nick",
        type: "text"
      }, {
        label: "收货人",
        prop: "receiver_name",
        type: "text"
      }, {
        label: "手机",
        prop: "receiver_mobile",
        type: "text"
      }, {
        label: "电话",
        prop: "receiver_phone",
        type: "text"
      }, {
        label: "详细地址",
        prop: "receiver_address",
        type: "text"
      }, {
        label: "快递费用",
        prop: "express_fee",
        type: "number"
      },
      /*{
          label: '标准总金额',
          prop: 'move_upstairs_fee',
          type: 'number'
        },*/
      {
        label: "运费类型",
        prop: "freight_types_name",
        type: "text"
      }, {
        label: "预付运费",
        prop: "expected_freight",
        type: "number"
      },
      /*{
          label: '支付总金额',
          prop: 'distribution_phone',
          type: 'number'
        },
        {
          label: '三包类型',
          prop: 'distribution_no',
          type: 'text'
        },
        {
          label: '三包费用',
          prop: '',
          type: 'number'
        },*/
      {
        label: "物流成本",
        prop: "deliver_goods_fee",
        type: "number"
      },
      /*   {
          label: '订单总额',
          prop: '',
          type: 'number'
        },*/
      /*  {
          label: '订单时间',
          prop: '',
          type: 'text'
        },*/
      {
        label: "付款时间",
        prop: "payment_date",
        type: "text"
      }, {
        label: "承诺时间",
        prop: "promise_ship_time",
        type: "text"
      }, {
        label: "物流公司",
        prop: "logistic_name",
        type: "text"
      }, {
        label: "配送方式",
        prop: "distribution_method",
        type: "text"
      }, {
        label: "配送信息",
        prop: "service_car_info",
        type: "text"
      }, {
        label: "费用类型",
        prop: "deliver_goods_fee",
        type: "text"
      }, {
        label: "配送商",
        prop: "distribution_name",
        type: "text"
      }, {
        label: "配送电话",
        prop: "distribution_phone",
        type: "text"
      }, {
        label: "配送类型",
        prop: "distributionType_name",
        type: "text"
      }, {
        label: "配送总计",
        prop: "total_distribution_fee",
        type: "number"
      }, {
        label: "客服备注",
        prop: "customer_service_remark",
        type: "textarea"
      }, {
        label: "卖家备注",
        prop: "seller_remark",
        type: "textarea"
      }, {
        label: "买家留言",
        prop: "buyer_message",
        type: "textarea"
      }],
      proDtlData: [],
      curRowId: "",
      curRowData: {},
      orderDtlHead: [
      //新建订单的商品信息的表头
      [{
        label: "sku名称",
        width: "160",
        prop: "name",
        type: "text"
      }, {
        label: "数量",
        width: "130",
        prop: "quantity",
        type: "number"
      }, {
        label: "油漆",
        width: "120",
        prop: "paint",
        type: "text"
      }, {
        label: "需要印刷",
        width: "120",
        prop: "is_printing",
        type: "checkbox"
      }, {
        label: "总体积",
        width: "120",
        prop: "total_volume",
        type: "number"
      }, {
        label: "印刷费用",
        width: "140",
        prop: "printing_fee",
        type: "number"
      }, {
        label: "现货",
        width: "120",
        prop: "is_spot_goods",
        type: "checkbox"
      }, {
        label: "单价(线下)",
        width: "150",
        prop: "under_line_univalent",
        type: "number"
      }, {
        label: "优惠(线下)",
        width: "150",
        prop: "under_line_preferential",
        type: "number"
      }], [{
        label: "支付金额",
        prop: "payment",
        type: "number"
      }, {
        label: "支付方式",
        prop: "payment_methods_id",
        type: "select",
        stateVal: "paymentmethods"
      }, {
        label: "交易号",
        prop: "taobao_tid",
        type: "text"
      }, {
        label: "来源单号",
        prop: "taobao_oid",
        type: "text"
      }], [], []],
      payDtlData: [],
      /*新增*/
      addCustomerMask: false,
      moreForms: true,
      threeParts: true,
      addCustomerFormVal: {
        refund_sn: "",
        order_sn: "",
        refund_payment_methods_id: "",
        shops_id: "",
        refund_account: "",
        bank: "",
        bank_address: "",
        refund_amount: "",
        transaction_sn: "",
        refund_reasons_id: "",
        buyer_nick: "",
        buyer_name: "",
        payment_amount: "",
        order_price: "",
        order_time: "",
        is_delivered: "",
        responsible_person: "",
        refund_description: "",
        business_remark: "",
        refund_reason: [{
          refund_reason: "",
          refund_description: "",
          refund_amount: ""
        }]
      },
      addProblemProCurIndex: "index0",
      addCustomerFormRules: {
        //新建订单的要求格式
        order_sn: [{ required: true, message: "系统单号必选", trigger: "blur" }],
        refund_payment_methods_id: [{ required: true, message: "退款方式必选", trigger: "blur" }],
        shops_id: [{ required: true, message: "所属店铺必选", trigger: "blur" }],
        refund_reasons_id: [{ required: true, message: "退款原因必选", trigger: "blur" }],
        buyer_nick: [{ required: true, message: "买家昵称必填", trigger: "blur" }]
      },
      addCustomerFormHead: [
      //新建订单的文本框表头
      {
        label: "退款单号",
        prop: "refund_sn",
        holder: "系统自动生成",
        width: "200",
        type: "text",
        editChgAble: true,
        addChgAble: true
      }, {
        label: "系统单号",
        prop: "order_sn",
        holder: "从已有订单中选择",
        type: "text"
      }, {
        label: "退款方式",
        prop: "refund_payment_methods_id",
        holder: "请选择退款方式",
        width: "200",
        type: "text"
      }, {
        label: "所属店铺",
        prop: "shops_id",
        holder: "请选择所属店铺",
        width: "200",
        type: "text"
      }, {
        label: "退款账号",
        prop: "refund_account",
        holder: "客户的收款账号",
        width: "200",
        type: "text"
      },
      /**{
          label: '退款类型',
          prop: 'refund_payment_methods_id',
          holder: '退款方式（支付宝、现金等）',
          width:'200',
          type: 'text',
        },**/
      {
        label: "开户银行",
        prop: "bank",
        holder: "客户开户银行",
        width: "200",
        type: "text"
      }, {
        label: "开户银行地址",
        prop: "bank_address",
        width: "200",
        type: "text"
      }, {
        label: "退款金额",
        prop: "refund_amount",
        width: "200",
        type: "text"
      }, {
        label: "交易单号",
        prop: "transaction_sn",
        holder: "请输入交易单号",
        width: "200",
        type: "text"
      }, {
        label: "退款原因",
        prop: "refund_reasons_id",
        holder: "请选择退款原因",
        width: "200",
        type: "text"
      }, {
        label: "买家昵称",
        prop: "buyer_nick",
        holder: "输入买家昵称",
        width: "200",
        type: "text"
      }, {
        label: "买家姓名",
        prop: "buyer_name",
        holder: "输入买家姓名",
        width: "200",
        type: "text"
      }, {
        label: "支付金额",
        prop: "payment_amount",
        holder: "买家的付款金额",
        width: "200",
        type: "text"
      }, {
        label: "拍单金额",
        prop: "order_price",
        holder: "输入用户拍单金额",
        width: "200",
        type: "text"
      }, {
        label: "拍单时间",
        prop: "order_time",
        width: "200",
        type: "DatePicker"
      }, {
        label: "是否发货",
        prop: "is_delivered",
        width: "200",
        type: "checkbox"
      }, {
        label: "责任人",
        prop: "responsible_person",
        width: "200",
        type: "text"
      }, {
        label: "退款说明",
        prop: "refund_description",
        width: "200",
        type: "textarea"
      }, {
        label: "业务备注",
        prop: "business_remark",
        width: "200",
        type: "textarea"
      }],
      addActiveName: "0",
      proData: [],
      detailRefundOrderInfo: {
        refund_sn: "",
        order_sn: "",
        refund_payment_methods_id: "",
        shops_id: "",
        refund_account: "",
        bank: "",
        bank_address: "",
        refund_amount: "",
        transaction_sn: "",
        refund_reasons_id: "",
        buyer_nick: "",
        buyer_name: "",
        payment_amount: "",
        order_price: "",
        order_time: "",
        is_delivered: "",
        responsible_person: "",
        refund_description: "",
        business_remark: "",
        refund_reason: [{
          refund_reason: "",
          refund_description: "",
          refund_amount: ""
        }]
      },
      detailRefundOrderHead: [{
        label: "退款单号",
        prop: "refund_sn",
        holder: "系统自动生成",
        width: "200",
        type: "text",
        editChgAble: true,
        addChgAble: true
      }, {
        label: "系统单号",
        prop: "order_sn",
        holder: "从已有订单中选择",
        type: "text"
      }, {
        label: "买家昵称",
        prop: "buyer_nick",
        holder: "输入买家昵称",
        width: "200",
        type: "text"
      }, {
        label: "买家姓名",
        prop: "buyer_name",
        holder: "输入买家姓名",
        width: "200",
        type: "text"
      }, {
        label: "退款金额",
        prop: "refund_amount",
        width: "200",
        type: "text"
      }, {
        label: "支付金额",
        prop: "payment_amount",
        holder: "买家的付款金额",
        width: "200",
        type: "text"
      }, {
        label: "退款方式",
        prop: "refund_payment_methods_id",
        holder: "请选择退款方式",
        width: "200",
        type: "text"
      }, {
        label: "创建时间",
        prop: "created_at",
        width: "200",
        type: "text"
      }, {
        label: "单据类型",
        prop: "receipt_type",
        holder: "请选择单据类型",
        width: "200",
        type: "text"
      }, {
        label: "淘宝售价",
        prop: "order_price",
        holder: "输入用户拍单金额",
        width: "200",
        type: "text"
      }, {
        label: "数量",
        prop: "order_number",
        holder: "输入用户拍单金额",
        width: "200",
        type: "text"
      }, {
        label: "交易单号",
        prop: "transaction_sn",
        width: "200",
        type: "text"
      }, {
        label: "明细单号",
        prop: "detail_sn",
        width: "200",
        type: "text"
      }, {
        label: "退款原因",
        prop: "refund_reasons_id",
        holder: "请选择退款原因",
        width: "200",
        type: "text"
      }, {
        label: "退款类型",
        prop: "payback_type",
        holder: "退款方式（支付宝、现金等）",
        width: "200",
        type: "text"
      }, {
        label: "业务备注",
        prop: "business_remark",
        width: "200",
        type: "textarea"
      }, {
        label: "售后备注",
        prop: "as_remark",
        width: "200",
        type: "textarea"
      }, {
        label: "财务备注",
        prop: "f_remark",
        width: "200",
        type: "textarea"
      }, {
        label: "退款说明",
        prop: "refund_description",
        width: "200",
        type: "textarea"
      }],
      options: __WEBPACK_IMPORTED_MODULE_0_element_china_area_data__["regionDataPlus"],
      addHead: [{
        label: "退款原因",
        width: "200",
        prop: "refund_reason",
        type: "text"
      }, {
        label: "描述",
        width: "200",
        prop: "refund_description",
        type: "textarea"
      }, {
        label: "金额",
        width: "200",
        prop: "refund_amount",
        type: "text"
      }],
      proMask: false,
      proQuery: {
        commodity_code: "",
        component_code: "",
        shops_id: "",
        short_name: ""
      },
      proHead: [{
        label: "产品图片",
        width: "120",
        prop: "img",
        type: "img"
      }, {
        label: "商品编码",
        width: "120",
        prop: "commodity_code",
        type: "text"
      }, {
        label: "工厂型号",
        width: "120",
        prop: "factory_model",
        type: "text"
      }, {
        label: "商品简称",
        width: "120",
        prop: "short_name",
        type: "text"
      }, {
        label: "类别名称",
        width: "120",
        prop: "goodsCategory",
        inProp: "name",
        type: "text"
      }, {
        label: "商品备注",
        width: "120",
        prop: "remark",
        type: "text"
      }],
      proVal: [],
      toggleHeight: true,
      proCurSkuData: {},
      proSkuVal: [],
      proSkuHead: [{
        label: "sku名称",
        width: "120",
        prop: "name",
        type: "text"
      }, {
        label: "数量",
        width: "120",
        prop: "newData",
        inProp: "quantity",
        type: "number"
      }, {
        label: "油漆",
        width: "120",
        prop: "newData",
        inProp: "paint",
        type: "text"
      }, {
        label: "总体积",
        width: "120",
        prop: "newData",
        inProp: "total_volume",
        type: "number"
      }, {
        label: "需要印刷",
        width: "90",
        prop: "newData",
        inProp: "is_printing",
        type: "checkbox"
      }, {
        label: "印刷费用",
        width: "120",
        prop: "newData",
        inProp: "printing_fee",
        type: "number"
      }, {
        label: "现货",
        width: "90",
        prop: "newData",
        inProp: "is_spot_goods",
        type: "checkbox"
      }, {
        label: "单价(线下)",
        width: "130",
        prop: "newData",
        inProp: "under_line_univalent",
        type: "number"
      }, {
        label: "优惠(线下)",
        width: "130",
        prop: "newData",
        inProp: "under_line_preferential",
        type: "number"
      }],
      proCompVal: [],
      proCompHead: [{
        label: "组合",
        width: "90",
        prop: "is_common",
        type: "checkbox"
      }, {
        label: "子件图片",
        width: "120",
        prop: "img_url",
        type: "img"
      }, {
        label: "子件编码",
        width: "140",
        prop: "component_code",
        type: "text"
      }, {
        label: "子件名称",
        width: "120",
        prop: "spec",
        type: "text"
      }, {
        label: "颜色",
        width: "120",
        prop: "color",
        type: "text"
      }, {
        label: "材质",
        width: "120",
        prop: "materials",
        type: "text"
      }, {
        label: "功能",
        width: "120",
        prop: "function",
        type: "text"
      }, {
        label: "特殊",
        width: "120",
        prop: "special",
        type: "text"
      }, {
        label: "其他",
        width: "120",
        prop: "other",
        type: "text"
      }, {
        label: "淘宝售价",
        width: "130",
        prop: "tb_price",
        type: "number"
      }, {
        label: "标准售价",
        width: "130",
        prop: "price",
        type: "number"
      }, {
        label: "最低销售价格",
        width: "140",
        prop: "lowest_price",
        type: "number"
      }, {
        label: "最高销售价格",
        width: "140",
        prop: "highest_price",
        type: "number"
      }, {
        label: "体积",
        width: "120",
        prop: "volume",
        type: "number"
      }, {
        label: "包件数",
        width: "130",
        prop: "package_quantity",
        type: "number"
      }, {
        label: "停产",
        width: "90",
        prop: "is_stop_pro",
        type: "checkbox"
      }],
      proCompRowIndex: "",
      proSubmitData: [],
      proIds: [],
      addIds: [],
      proCompRow: {},
      refundReasonRowIndex: "",
      receiveInfo: {
        receiver_name: "",
        receiver_phone: "",
        receiver_mobile: "",
        provinces: [],
        receiver_state: "",
        receiver_city: "",
        receiver_district: "",
        receiver_address: "",
        receiver_zip: ""
      },
      halfForm: true,
      expenseData: [],
      expenseRIndex: "",
      addSubData: [],
      /*修改*/
      updateCustomerMask: false,
      updateCustomerFormVal: {},
      updateActiveName: "0",
      updateProData: [],
      updateReceiveInfo: {},
      updateExpenseData: [],
      updateProIds: [],
      /*删除单条*/
      showDel: false,
      delUrl: "",
      delId: "",
      /*删除批量*/
      ids: [],
      splitMask: false,
      splitVal: [],
      splitHead: [{
        label: "商品编码",
        prop: "commodity_code",
        type: "text"
      }, {
        label: "商品简称",
        prop: "short_name",
        type: "text"
      }, {
        label: "数量",
        prop: "quantity",
        type: "number"
      }, {
        label: "实际拆分数量",
        prop: "newData",
        inProp: "quantity",
        type: "number"
      }],
      splitRowIndex: "",
      splitRow: {},
      mergerIds: []
    };
  },

  computed: {
    resData: {
      get: function get() {
        return this.$store.state.responseData;
      },
      set: function set() {}
    },
    urls: {
      get: function get() {
        return this.$store.state.urls;
      },
      set: function set() {}
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
    toggleShow: function toggleShow() {
      this.filterBox = !this.filterBox;
    },
    test: function test() {
      console.log(1);
    },

    /*获取数据*/
    outerHandleClick: function outerHandleClick() {
      var index = this.activeName - 0;
      switch (index) {
        case 0:
          this.loading = true;
          this.fetchData();
          break;
        case 1:
          var data = this.orderListData[0];
          /*商品*/
          if (data) {
            this.orderDtlFormVal = {
              system_order_no: data.system_order_no,
              taobao_oid: data.taobao_oid,
              taobao_tid: data.taobao_tid,
              association_taobao_oid: data.association_taobao_oid,
              shop_name: data["shop"]["title"],
              business_personnel_name: data["businessPersonnel"] ? data["businessPersonnel"]["username"] : "",
              member_nick: data.member_nick,
              receiver_name: data.receiver_name,
              receiver_mobile: data.receiver_mobile,
              receiver_phone: data.receiver_phone,
              receiver_address: data.receiver_address,
              express_fee: data.express_fee,
              freight_types_name: data["freightType"]["name"],
              expected_freight: data.expected_freight,
              deliver_goods_fee: data.deliver_goods_fee,
              payment_date: data.payment_date,
              promise_ship_time: data.promise_ship_time,
              distribution_name: data["distribution"]["name"],
              distribution_method: data["distributionMethod"]["name"],
              service_car_info: data["service_car_info"],
              distribution_phone: data["distribution_phone"],
              buyer_message: data["buyer_message"],
              logistic_name: data["logistic"]["name"],
              distributionType_name: data["distributionType"]["name"],
              total_distribution_fee: data["total_distribution_fee"],
              customer_service_remark: data["customer_service_remark"],
              seller_remark: data["seller_remark"]
            };
          }
          if (data["orderItems"]["data"].length > 0) {
            data["orderItems"]["data"].map(function (item) {
              item["name"] = item["combination"]["name"];
              item["productComp"] = item["combination"]["productComponents"]["data"];
            });
          }
          this.proDtlData = data["orderItems"]["data"];
          /*支付明细*/
          this.payDtlData = data["paymentDetails"]["data"];
          break;
      }
    },
    fetchData: function fetchData() {
      var _this = this;

      var index = this.leftTopActiveName - 0;
      switch (index) {
        case 0:
          this.$fetch(this.urls.customerservicerefunds + "/searchuntreated").then(function (res) {
            _this.loading = false;
            _this.orderListData = res.data;
            var pg = res.meta.pagination;
            _this.$store.dispatch("currentPage", pg.current_page);
            _this.$store.commit("PER_PAGE", pg.per_page);
            _this.$store.commit("PAGE_TOTAL", pg.total);
          }, function (err) {
            if (err.response) {
              var arr = err.response.data.errors;
              var arr1 = [];
              for (var i in arr) {
                arr1.push(arr[i]);
              }
              _this.$message.error(arr1.join(","));
            }
          });
          break;
        case 1:
          this.$fetch(this.urls.customerservicedepts, {
            order_status: 20,
            include: "shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems.combination.productComponents,orderItems.product,businessPersonnel,locker,paymentDetails.paymentMethod,paymentDetails.order"
          }).then(function (res) {
            _this.loading = false;
            _this.alreadyHandle = res.data;
            var pg = res.meta.pagination;
            _this.$store.dispatch("currentPage", pg.current_page);
            _this.$store.commit("PER_PAGE", pg.per_page);
            _this.$store.commit("PAGE_TOTAL", pg.total);
          }, function (err) {
            if (err.response) {
              var arr = err.response.data.errors;
              var arr1 = [];
              for (var i in arr) {
                arr1.push(arr[i]);
              }
              _this.$message.error(arr1.join(","));
            }
          });
          break;
        case 2:
          this.$fetch(this.urls.customerservicedepts, {
            order_status: "等通知发货",
            include: "shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems,businessPersonnel,locker,paymentDetails"
          }).then(function (res) {
            _this.loading = false;
            _this.orderListData = res.data;
            var pg = res.meta.pagination;
            _this.$store.dispatch("currentPage", pg.current_page);
            _this.$store.commit("PER_PAGE", pg.per_page);
            _this.$store.commit("PAGE_TOTAL", pg.total);
          }, function (err) {
            if (err.response) {
              var arr = err.response.data.errors;
              var arr1 = [];
              for (var i in arr) {
                arr1.push(arr[i]);
              }
              _this.$message.error(arr1.join(","));
            }
          });
          break;
      }
    },
    leftHandleClick: function leftHandleClick() {
      this.loading = true;
      this.fetchData();
    },
    rightHandleClick: function rightHandleClick() {},
    orderListRClick: function orderListRClick(row) {
      if (row["locker_id"] == 0) {
        this.newOpt[1].nClick = true;
        this.newOpt[2].nClick = true;
        this.newOpt[3].nClick = false;
        this.newOpt[4].nClick = true;
        this.newOpt[8].nClick = true;
        this.newOpt[9].nClick = true;
        this.newOpt[14].nClick = true;
        if (row["order_status"] == "已客审") {
          this.newOpt[5].nClick = true;
          this.newOpt[6].nClick = false;
        } else {
          this.newOpt[5].nClick = false;
          this.newOpt[6].nClick = true;
        }
      } else {
        this.newOpt[1].nClick = false;
        this.newOpt[2].nClick = false;
        this.newOpt[3].nClick = true;
        this.newOpt[4].nClick = false;
        this.newOpt[5].nClick = false;
        this.newOpt[6].nClick = true;
        this.newOpt[8].nClick = false;
        this.newOpt[9].nClick = false;
        this.newOpt[14].nClick = false;
      }
      this.curRowId = row.id;
      this.curRowData = row;
    },
    orderDbClick: function orderDbClick(row) {
      this.activeName = "1";
      var data = row;
      if (data) {
        this.orderDtlFormVal = {
          system_order_no: data.system_order_no,
          taobao_oid: data.taobao_oid,
          taobao_tid: data.taobao_tid,
          association_taobao_oid: data.association_taobao_oid,
          shop_name: data["shop"]["title"],
          business_personnel_name: data["businessPersonnel"] ? data["businessPersonnel"]["username"] : "",
          member_nick: data.member_nick,
          receiver_name: data.receiver_name,
          receiver_mobile: data.receiver_mobile,
          receiver_phone: data.receiver_phone,
          receiver_address: data.receiver_address,
          express_fee: data.express_fee,
          freight_types_name: data["freightType"]["name"],
          expected_freight: data.expected_freight,
          deliver_goods_fee: data.deliver_goods_fee,
          payment_date: data.payment_date,
          promise_ship_time: data.promise_ship_time,
          distribution_name: data["distribution"]["name"],
          distribution_method: data["distributionMethod"]["name"],
          service_car_info: data["service_car_info"],
          distribution_phone: data["distribution_phone"],
          buyer_message: data["buyer_message"],
          logistic_name: data["logistic"]["name"],
          distributionType_name: data["distributionType"]["name"],
          total_distribution_fee: data["total_distribution_fee"],
          customer_service_remark: data["customer_service_remark"],
          seller_remark: data["seller_remark"]
        };
      }
      this.proDtlData = row["orderItems"]["data"];
      if (row["orderItems"]["data"].length > 0) {
        row["orderItems"]["data"].map(function (item) {
          item["name"] = item["combination"]["name"];
          item["productComp"] = item["combination"]["productComponents"]["data"];
        });
      }
      /*支付明细*/
      this.payDtlData = row["paymentDetails"]["data"];
    },
    proDtlRClick: function proDtlRClick(row) {},

    /*新增*/
    addCustomer: function addCustomer() {
      this.addCustomerMask = true;
      this.addIds = [];
      this.proData = [];
      this.refundReasonRowIndex = "";
    },
    proQueryClick: function proQueryClick() {
      var _this2 = this;

      this.proSkuVal = [];
      this.$fetch(this.urls.products, {
        status: true,
        commodity_code: this.proQuery.commodity_code,
        component_code: this.proQuery.component_code,
        shops_id: this.proQuery.shops_id,
        short_name: this.proQuery.short_name,
        include: "productComponents.product,shop,supplier,goodsCategory,combinations.productComponents"
      }).then(function (res) {
        _this2.proVal = res.data;
        var comb = res.data[0]["combinations"]["data"];
        if (comb.length > 0) {
          var total_volume = 0;
          comb.map(function (item) {
            item["productComp"] = item["productComponents"]["data"];
            if (item["productComponents"]["data"].length > 0) {
              item["productComponents"]["data"].map(function (list) {
                total_volume += list.volume;
              });
            } else {
              total_volume = 0;
            }
            _this2.$set(item, "newData", {
              quantity: "",
              paint: "",
              is_printing: false,
              printing_fee: "",
              is_spot_goods: true,
              under_line_univalent: "",
              under_line_preferential: "",
              total_volume: total_volume
            });
          });
        } else {
          comb["productComp"] = [];
        }
        _this2.proSkuVal = comb;
      }, function (err) {});
    },
    addHandleClick: function addHandleClick() {},
    addProRCName: function addProRCName(_ref) {
      var row = _ref.row,
          rowIndex = _ref.rowIndex;

      row.index = rowIndex;
    },
    addRefundReasonRowClick: function addRefundReasonRowClick(row) {
      this.refundReasonRowIndex = "index" + row.index;
    },
    addDelPro: function addDelPro(index) {
      this.proData.splice(index, 1);
    },
    addCustomerConfirm: function addCustomerConfirm() {
      var _this3 = this;

      this.$post(this.urls.customerservicerefunds, this.addCustomerFormVal).then(function () {
        _this3.addCustomerMask = false;
        _this3.refresh();
        _this3.$message({
          message: "添加成功",
          type: "success"
        });
      }, function (err) {
        if (err.response) {
          _this3.showDel = false;
          var arr = err.response.data.errors;
          var arr1 = [];
          for (var i in arr) {
            arr1.push(arr[i]);
          }
          var str = arr1.join(",");
          _this3.$message.error(str);
        }
      });
    },
    addCustomerCancel: function addCustomerCancel() {
      this.addCustomerMask = false;
      this.$message({
        message: "取消新增订单明细",
        type: "success"
      });
    },

    /*商品明细*/
    addProDtl: function addProDtl() {
      this.proMask = true;
      Object.assign(this.proQuery, this.$options.data().proQuery);
      this.proVal = [];
      this.proSkuVal = [];
      this.proIds = [];
    },
    proRowClick: function proRowClick(row) {
      var _this4 = this;

      this.proSkuVal = [];
      this.proCompRowIndex = "";
      var comb = row["combinations"]["data"];
      if (comb.length > 0) {
        var total_volume = 0;
        comb.map(function (item) {
          item["productComp"] = item["productComponents"]["data"];
          if (item["productComponents"]["data"].length > 0) {
            item["productComponents"]["data"].map(function (list) {
              total_volume += list.volume;
            });
          } else {
            total_volume = 0;
          }
          _this4.$set(item, "newData", {
            quantity: "",
            paint: "",
            is_printing: false,
            printing_fee: "0.0",
            is_spot_goods: false,
            under_line_univalent: "0.0",
            under_line_preferential: "0.0",
            total_volume: total_volume
          });
        });
      } else {
        comb["productComp"] = [];
      }
      this.proSkuVal = comb;
    },
    proCName: function proCName() {},
    proSkuCName: function proSkuCName(_ref2) {
      var row = _ref2.row,
          rowIndex = _ref2.rowIndex;

      row.index = rowIndex;
    },
    proSkuRowClick: function proSkuRowClick(row) {
      this.proCompRowIndex = "index" + row.index;
      this.proCompRow = row;
    },
    quantityChg: function quantityChg(value) {
      var _this5 = this;

      if (value > 0) {
        var proCRow = this.proCompRow;
        if (this.proIds.indexOf(proCRow.id) == -1) {
          this.proIds.push(proCRow.id);
          this.proSubmitData.push(proCRow);
        } else {
          this.proSubmitData.map(function (list, index) {
            if (list.id == proCRow.id) {
              _this5.proSubmitData.splice(index, 1);
              _this5.proSubmitData.push(proCRow);
            }
          });
        }
      }
    },
    formChg: function formChg() {
      var formVal = void 0;
      if (this.addCustomerMask) {
        formVal = this.updateCustomerFormVal;
      } else {
        formVal = this.updateCustomerFormVal;
      }
      formVal["total_distribution_fee"] = formVal["deliver_goods_fee"] - 0 + (formVal["move_upstairs_fee"] - 0) + (formVal["installation_fee"] - 0);
    },
    confirmAddProDtl: function confirmAddProDtl() {
      var _this6 = this;

      if (this.addCustomerMask) {
        this.proSubmitData.map(function (item) {
          if (_this6.addIds.indexOf(item.id) == -1) {
            _this6.proData.push(item);
            _this6.addIds.push(item.id);
            _this6.$message({
              message: "添加商品信息成功",
              type: "success"
            });
          } else {
            _this6.proData.map(function (list, index) {
              if (list.id == item.id) {
                _this6.proData.splice(index, 1);
                _this6.proData.push(item);
                _this6.$message({
                  message: "添加商品信息成功",
                  type: "success"
                });
              }
            });
          }
        });
      } else {
        this.proSubmitData.map(function (item) {
          if (_this6.updateProIds.indexOf(item.id) == -1) {
            _this6.updateProData.push(item);
            _this6.updateProIds.push(item.id);
            _this6.$message({
              message: "添加商品信息成功",
              type: "success"
            });
          } else {
            _this6.updateProData.map(function (list, index) {
              if (list.combinations_id == item.id) {
                _this6.$set(item, "originalId", list.id);
                _this6.updateProData.splice(index, 1);
                _this6.updateProData.push(item);
                _this6.$message({
                  message: "添加商品信息成功",
                  type: "success"
                });
              }
            });
          }
        });
      }
    },
    cancelAddProDtl: function cancelAddProDtl() {
      this.proMask = false;
    },
    addDelExpense: function addDelExpense(index) {
      this.expenseData.splice(index, 1);
      this.$message({
        message: "删除成功",
        type: "success"
      });
    },
    addExpenseRCName: function addExpenseRCName(_ref3) {
      var row = _ref3.row,
          rowIndex = _ref3.rowIndex;

      row.index = rowIndex;
    },
    addExpenseRClick: function addExpenseRClick(row) {
      this.expenseRIndex = "index" + row.index;
    },

    /*新增行*/
    addExpenseLine: function addExpenseLine() {
      if (this.addCustomerMask) {
        this.expenseData.push({
          payment_methods_id: "",
          payment: ""
        });
      } else {
        this.updateExpenseData.push({
          payment_methods_id: "",
          payment: ""
        });
      }
    },
    beforeAddUploadProblemProImg: function beforeAddUploadProblemProImg(file) {
      var _this7 = this;

      this.tableChgBtn = "";
      this.judgeFm(file);
      var formData = new FormData();
      formData.append("image", file);
      axios.post(this.urls.uploadimages, formData).then(function (res) {
        var imageInfo = res.data.meta;
        if (imageInfo.status_code == 201) {
          _this7.addProblemProUpload = "";
          _this7.tableChgBtn = "show" + _this7.addProblemProCurIndexNum;
          _this7.addCmptnOrderFormVal.problem_product[_this7.addProblemProCurIndexNum].img_url = res.data.path;
        }
      }).catch(function (err) {});
    },
    beforeUpdateUploadProblemProImg: function beforeUpdateUploadProblemProImg(file) {
      var _this8 = this;

      this.tableChgBtn = "";
      this.judgeFm(file);
      var formData = new FormData();
      formData.append("image", file);
      axios.post(this.urls.uploadimages, formData).then(function (res) {
        var imageInfo = res.data.meta;
        if (imageInfo.status_code == 201) {
          _this8.updateProblemProUpload = "";
          _this8.tableChgBtn = "show" + _this8.updateProblemProCurIndexNum;
          _this8.addCmptnOrderFormVal.problem_product[_this8.updateProblemProCurIndexNum].img_url = res.data.path;
        }
      }).catch(function (err) {});
    },
    judgeFm: function judgeFm(file) {
      var isJPG = file.type === "image/jpeg";
      var isGIF = file.type === "image/gif";
      var isPNG = file.type === "image/png";

      if (!isJPG && !isGIF && !isPNG) {
        this.$message.error("上传图片必须是JPG/GIF/PNG 格式!");
      }
    },
    beforeUpload: function beforeUpload(file) {
      var _this9 = this;

      this.showChgBtn = false;
      this.judgeFm(file);
      var formData = new FormData();
      formData.append("image", file);
      axios.post(this.urls.uploadimages, formData).then(function (res) {
        var imageInfo = res.data.meta;
        if (imageInfo.status_code == 201) {
          _this9.noUpload = false;
          _this9.showChgBtn = true;
          _this9.proForm.img = res.data.path;
        }
      }).catch(function (err) {});
    },
    beforeUpdateUpload: function beforeUpdateUpload(file) {
      var _this10 = this;

      this.showChgBtn = false;
      this.judgeFm(file);
      var formData = new FormData();
      formData.append("image", file);
      axios.post(this.urls.uploadimages, formData).then(function (res) {
        var imageInfo = res.data.meta;
        if (imageInfo.status_code == 201) {
          _this10.noUpload = false;
          _this10.showChgBtn = true;
          _this10.updateCmptnOrderFormVal.problem_product[_this10.updateProblemProCurIndexNum].img_url = res.data.path;
        }
      }).catch(function (err) {});
    },

    /*删除单条*/
    delSingle: function delSingle(row, e) {
      this.showDel = true;
      $(".el-popper").css({ left: e.x - 100 + "px", top: e.y - 125 + "px" });
      this.delId = row.id;
      this.delUrl = this.urls.customerservicerefunds;
    },
    cancelD: function cancelD() {
      this.showDel = false;
      this.$message({
        message: "取消删除",
        type: "info"
      });
    },
    confirmD: function confirmD(url, id) {
      var _this11 = this;

      this.$del(url + "/" + id).then(function () {
        _this11.showDel = false;
        _this11.refresh();
        _this11.$message({
          message: "删除成功",
          type: "success"
        });
      }, function (err) {
        if (err.response) {
          _this11.showDel = false;
          var arr = err.response.data.errors;
          var arr1 = [];
          for (var i in arr) {
            arr1.push(arr[i]);
          }
          var str = arr1.join(",");
          _this11.$message.error(str);
        }
      });
    },

    /*批量删除*/
    handleSelectionChange: function handleSelectionChange(val) {
      console.log(val);
      /*拿到id集合*/
      var delArr = [];
      val.forEach(function (selectedItem) {
        delArr.push(selectedItem.id);
      });
      this.ids = delArr.join(",");
      /*拿到当前id*/
      this.checkboxId = val.length > 0 ? val[val.length - 1].id : "";
      this.curRowData = val.length > 0 ? val[val.length - 1] : "";
      this.mergerIds = val;
    },
    delBatch: function delBatch() {
      var _this12 = this;

      if (this.ids.length === 0) {
        this.$message({
          message: "没有选中数据",
          type: "warning"
        });
      } else {
        this.$confirm("此操作将永久删除该数据, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function () {
          _this12.$del(_this12.urls.customerservicedepts, { ids: _this12.ids }).then(function () {
            _this12.refresh();
            _this12.$message({
              message: "删除成功",
              type: "success"
            });
          }, function (err) {
            if (err.response) {
              var arr = err.response.data.errors;
              var arr1 = [];
              for (var i in arr) {
                arr1.push(arr[i]);
              }
              var str = arr1.join(",");
              _this12.$message.error(str);
            }
          });
        }).catch(function () {
          _this12.$message({
            type: "info",
            message: "已取消删除"
          });
        });
      }
    },
    resetAddInfo: function resetAddInfo() {
      Object.assign(this.$data.addCustomerFormVal, this.$options.data().addCustomerFormVal);
      this.addProblemProCurIndex = "index0";
      this.updateProblemProCurIndex = "index0";
      this.addProblemProCurIndexNum = 0;
      this.updateProblemProCurIndexNum = 0;

      this.noUpload = true;
    },

    /*页码*/
    handlePagChg: function handlePagChg(page) {
      var _this13 = this;

      this.$fetch(this.urls.customerservicedepts + "?page=" + page, {
        include: "shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems.combination.productComponents,orderItems.product,businessPersonnel,locker,paymentDetails.paymentMethod,paymentDetails.order"
      }).then(function (res) {
        if (_this13.leftTopActiveName == "0") {
          _this13.orderListData = res.data;
        } else {
          _this13.alreadyHandle = res.data;
        }
      });
    },
    refresh: function refresh() {
      this.loading = true;
      this.fetchData();
    },

    /*锁定*/
    lockOrder: function lockOrder() {
      var _this14 = this;

      if (this.newOpt[3].nClick) {
        return;
      } else {
        var id = this.checkboxId ? this.checkboxId : this.curRowId;
        this.$put(this.urls.customerservicedepts + "/" + id + "/lockorunlock").then(function () {
          _this14.newOpt[1].nClick = false;
          _this14.newOpt[2].nClick = false;
          _this14.newOpt[3].nClick = true;
          _this14.newOpt[4].nClick = false;
          _this14.newOpt[5].nClick = false;
          _this14.newOpt[6].nClick = true;
          _this14.newOpt[8].nClick = false;
          _this14.newOpt[9].nClick = false;
          _this14.newOpt[14].nClick = false;
          _this14.refresh();
          _this14.$message({
            message: "锁定成功",
            type: "success"
          });
        }, function (err) {
          if (err.response) {
            var arr = err.response.data.errors;
            var arr1 = [];
            for (var i in arr) {
              arr1.push(arr[i]);
            }
            var str = arr1.join(",");
            _this14.$message.error(str);
          }
        });
      }
    },

    /*解锁*/
    debLock: function debLock() {
      var _this15 = this;

      if (this.newOpt[4].nClick) {
        return;
      } else {
        var id = this.checkboxId ? this.checkboxId : this.curRowId;
        this.$put(this.urls.customerservicedepts + "/" + id + "/lockorunlock").then(function () {
          _this15.newOpt[1].nClick = true;
          _this15.newOpt[2].nClick = true;
          _this15.newOpt[3].nClick = false;
          _this15.newOpt[4].nClick = true;
          _this15.newOpt[5].nClick = true;
          _this15.newOpt[6].nClick = true;
          _this15.newOpt[8].nClick = true;
          _this15.newOpt[9].nClick = true;
          _this15.newOpt[14].nClick = true;
          _this15.refresh();
          _this15.$message({
            message: "解锁成功",
            type: "success"
          });
        }, function (err) {
          if (err.response) {
            var arr = err.response.data.errors;
            var arr1 = [];
            for (var i in arr) {
              arr1.push(arr[i]);
            }
            var str = arr1.join(",");
            _this15.$message.error(str);
          }
        });
      }
    },

    /*修改*/
    updateData: function updateData() {
      var _this16 = this;

      this.proIds = [];
      this.updateProIds = [];
      this.expenseRIndex = "";
      this.updateCustomerFormVal = {};
      this.updateProData = [];
      this.updateReceiveInfo = {};
      this.updateExpenseData = [];
      this.updateCustomerMask = true;
      this.refundReasonRowIndex = "";
      var id = this.checkboxId ? this.checkboxId : this.curRowId;
      this.$fetch(this.urls.customerservicedepts + "/" + id, {
        include: "shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems.combination.productComponents,orderItems.product,businessPersonnel,locker,paymentDetails"
      }).then(function (res) {
        _this16.updateCustomerFormVal = res;
        if (res["orderItems"]["data"].length > 0) {
          res["orderItems"]["data"].map(function (item) {
            _this16.updateProIds.push(item["combination"].id);
            item["name"] = item["combination"]["name"];
            item["id"] = item.id;
            item["products_id"] = item.products_id;
            item["combinations_id"] = item.combinations_id;
            item["productComp"] = item["combination"]["productComponents"]["data"];
            _this16.$set(item, "newData", {
              quantity: item.quantity,
              paint: item.paint,
              is_printing: item.is_printing,
              printing_fee: item.printing_fee,
              is_spot_goods: item.is_spot_goods,
              under_line_univalent: item.under_line_univalent,
              under_line_preferential: item.under_line_preferential,
              total_volume: item.total_volume
            });
          });
        }
        _this16.updateProData = res["orderItems"]["data"];
        _this16.updateReceiveInfo = {
          receiver_name: res.receiver_name,
          receiver_phone: res.receiver_phone,
          receiver_mobile: res.receiver_mobile,
          provinces: [__WEBPACK_IMPORTED_MODULE_0_element_china_area_data__["TextToCode"][res.receiver_state].code, __WEBPACK_IMPORTED_MODULE_0_element_china_area_data__["TextToCode"][res.receiver_state][res.receiver_city].code, __WEBPACK_IMPORTED_MODULE_0_element_china_area_data__["TextToCode"][res.receiver_state][res.receiver_city][res.receiver_district].code],
          receiver_address: res.receiver_address,
          receiver_zip: res.receiver_zip
        };
        _this16.updateExpenseData = res["paymentDetails"]["data"];
      }, function (err) {
        if (err.response) {
          var arr = err.response.data.errors;
          var arr1 = [];
          for (var i in arr) {
            arr1.push(arr[i]);
          }
          var str = arr1.join(",");
          _this16.$message.error(str);
        }
      });
    },
    updateDelPro: function updateDelPro(row, index) {
      var _this17 = this;

      if (row["originalId"]) {
        this.$del(this.urls.orderitems + "/" + row["originalId"]).then(function () {
          _this17.updateProData.splice(index, 1);
          _this17.$message({
            message: "删除成功",
            type: "success"
          });
        }, function (err) {
          if (err.response) {
            var arr = err.response.data.errors;
            var arr1 = [];
            for (var i in arr) {
              arr1.push(arr[i]);
            }
            var str = arr1.join(",");
            _this17.$message.error(str);
          }
        });
      } else if (row.id) {
        this.$del(this.urls.orderitems + "/" + row.id).then(function () {
          _this17.updateProData.splice(index, 1);
          _this17.$message({
            message: "删除成功",
            type: "success"
          });
        }, function (err) {
          if (err.response) {
            var arr = err.response.data.errors;
            var arr1 = [];
            for (var i in arr) {
              arr1.push(arr[i]);
            }
            var str = arr1.join(",");
            _this17.$message.error(str);
          }
        });
      } else {
        this.updateProData.splice(index, 1);
        this.$message({
          message: "删除商品信息成功",
          type: "success"
        });
      }
    },
    updateDelExpense: function updateDelExpense(row, index) {
      var _this18 = this;

      if (row.id) {
        this.$del(this.urls.paymentdetails + "/" + row.id).then(function () {
          _this18.updateExpenseData.splice(index, 1);
          _this18.$message({
            message: "删除成功",
            type: "success"
          });
        }, function (err) {
          if (err.response) {
            var arr = err.response.data.errors;
            var arr1 = [];
            for (var i in arr) {
              arr1.push(arr[i]);
            }
            var str = arr1.join(",");
            _this18.$message.error(str);
          }
        });
      } else {
        this.updateExpenseData.splice(index, 1);
        this.$message({
          message: "删除商品信息成功",
          type: "success"
        });
      }
    },
    updateCustomerConfirm: function updateCustomerConfirm() {
      var _this19 = this;

      var forData = this.updateCustomerFormVal;
      var submitData = {
        shops_id: forData.shops_id,
        member_nick: forData.member_nick,
        logistics_id: forData.logistics_id,
        billing_way: forData.billing_way,
        promise_ship_time: forData.promise_ship_time,
        freight_types_id: forData.freight_types_id,
        expected_freight: forData.expected_freight,
        distributions_id: forData.distributions_id,
        distribution_methods_id: forData.distribution_methods_id,
        deliver_goods_fee: forData.deliver_goods_fee,
        move_upstairs_fee: forData.move_upstairs_fee,
        installation_fee: forData.installation_fee,
        total_distribution_fee: forData.total_distribution_fee,
        distribution_phone: forData.distribution_phone,
        distribution_no: forData.distribution_no,
        distribution_types_id: forData.distribution_types_id,
        service_car_info: forData.service_car_info,
        take_delivery_goods_fee: forData.take_delivery_goods_fee,
        take_delivery_goods_ways_id: forData.take_delivery_goods_ways_id,
        express_fee: forData.express_fee,
        service_car_fee: forData.service_car_fee,
        cancel_after_verification_code: forData.cancel_after_verification_code,
        wooden_frame_costs: forData.wooden_frame_costs,
        preferential_cashback: forData.preferential_cashback,
        favorable_cashback: forData.favorable_cashback,
        customer_types_id: forData.customer_types_id,
        is_invoice: forData.is_invoice,
        invoice_express_fee: forData.invoice_express_fee,
        express_invoice_title: forData.express_invoice_title,
        contract_no: forData.contract_no,
        payment_methods_id: forData.payment_methods_id,
        deposit: forData.deposit,
        document_title: forData.document_title,
        warehouses_id: forData.warehouses_id,
        payment_date: forData.payment_date,
        interest_concessions: forData.interest_concessions,
        is_notice: forData.is_notice,
        is_cancel_after_verification: forData.is_cancel_after_verification,
        accept_order_user: forData.accept_order_user,
        tax_number: forData.tax_number,
        receipt: forData.receipt,
        logistics_remark: forData.logistics_remark,
        seller_remark: forData.seller_remark,
        customer_service_remark: forData.customer_service_remark,
        buyer_message: forData.buyer_message,
        status: forData.status,
        receiver_name: this.updateReceiveInfo.receiver_name,
        receiver_phone: this.updateReceiveInfo.receiver_phone,
        receiver_mobile: this.updateReceiveInfo.receiver_mobile,
        receiver_state: __WEBPACK_IMPORTED_MODULE_0_element_china_area_data__["CodeToText"][this.updateReceiveInfo.provinces[0]],
        receiver_city: __WEBPACK_IMPORTED_MODULE_0_element_china_area_data__["CodeToText"][this.updateReceiveInfo.provinces[1]],
        receiver_district: __WEBPACK_IMPORTED_MODULE_0_element_china_area_data__["CodeToText"][this.updateReceiveInfo.provinces[2]],
        receiver_address: this.updateReceiveInfo.receiver_address,
        receiver_zip: this.updateReceiveInfo.receiver_zip,
        order_items: [],
        payment_details: []
      };
      this.updateProData.map(function (item) {
        if (item.combinations_id) {
          var proD = {
            id: item.id,
            products_id: item.products_id,
            combinations_id: item.combinations_id,
            quantity: item["newData"].quantity,
            total_volume: item["newData"].total_volume,
            paint: item["newData"].paint,
            is_printing: item["newData"].is_printing,
            printing_fee: item["newData"].printing_fee,
            is_spot_goods: item["newData"].is_spot_goods,
            under_line_univalent: item["newData"].under_line_univalent,
            under_line_total_amount: item["newData"].under_line_total_amount,
            under_line_preferential: item["newData"].under_line_preferential
          };
          submitData.order_items.push(proD);
        } else if (item["originalId"]) {
          var _proD = {
            id: item["originalId"],
            products_id: item.pid,
            combinations_id: item.id,
            quantity: item["newData"].quantity,
            total_volume: item["newData"].total_volume,
            paint: item["newData"].paint,
            is_printing: item["newData"].is_printing,
            printing_fee: item["newData"].printing_fee,
            is_spot_goods: item["newData"].is_spot_goods,
            under_line_univalent: item["newData"].under_line_univalent,
            under_line_total_amount: item["newData"].under_line_total_amount,
            under_line_preferential: item["newData"].under_line_preferential
          };
          submitData.order_items.push(_proD);
        } else {
          var _proD2 = {
            products_id: item.pid,
            combinations_id: item.id,
            quantity: item["newData"].quantity,
            total_volume: item["newData"].total_volume,
            paint: item["newData"].paint,
            is_printing: item["newData"].is_printing,
            printing_fee: item["newData"].printing_fee,
            is_spot_goods: item["newData"].is_spot_goods,
            under_line_univalent: item["newData"].under_line_univalent,
            under_line_total_amount: item["newData"].under_line_total_amount,
            under_line_preferential: item["newData"].under_line_preferential
          };
          submitData.order_items.push(_proD2);
        }
      });
      this.updateExpenseData.map(function (list) {
        if (list.id) {
          var expenseD = {
            id: list.id,
            payment: list.payment,
            payment_methods_id: list.payment_methods_id
          };
          submitData.payment_details.push(expenseD);
        } else {
          var _expenseD = {
            payment: list.payment,
            payment_methods_id: list.payment_methods_id
          };
          submitData.payment_details.push(_expenseD);
        }
      });
      var id = this.checkboxId ? this.checkboxId : this.curRowId;
      this.$patch(this.urls.customerservicedepts + "/" + id, submitData).then(function () {
        _this19.updateCustomerMask = false;
        _this19.refresh();
        _this19.$message({
          message: "修改成功",
          type: "success"
        });
      }, function (err) {
        if (err.response) {
          _this19.showDel = false;
          var arr = err.response.data.errors;
          var arr1 = [];
          for (var i in arr) {
            arr1.push(arr[i]);
          }
          var str = arr1.join(",");
          _this19.$message.error(str);
        }
      });
    },
    updateCustomerCancel: function updateCustomerCancel() {
      this.updateCustomerMask = false;
      this.$message({
        message: "取消修改订单明细",
        type: "success"
      });
    },

    /*审核*/
    handleAudit: function handleAudit() {
      var _this20 = this;

      if (this.newOpt[5].nClick) {
        return;
      } else {
        var id = this.checkboxId ? this.checkboxId : this.curRowId;
        this.$put(this.urls.customerservicedepts + "/" + id + "/audit").then(function () {
          _this20.newOpt[1].nClick = true;
          _this20.newOpt[2].nClick = true;
          _this20.newOpt[3].nClick = true;
          _this20.newOpt[4].nClick = true;
          _this20.newOpt[5].nClick = true;
          _this20.newOpt[6].nClick = true;
          _this20.newOpt[8].nClick = true;
          _this20.newOpt[9].nClick = true;
          _this20.newOpt[13].nClick = true;
          _this20.newOpt[14].nClick = true;
          _this20.newOpt[15].nClick = true;
          _this20.newOpt[18].nClick = true;
          _this20.refresh();
          _this20.$message({
            message: "审核成功",
            type: "success"
          });
        }, function (err) {
          if (err.response) {
            var arr = err.response.data.errors;
            var arr1 = [];
            for (var i in arr) {
              arr1.push(arr[i]);
            }
            var str = arr1.join(",");
            _this20.$message.error(str);
          }
        });
      }
    },
    handleUnAudit: function handleUnAudit() {
      var _this21 = this;

      if (this.newOpt[6].nClick) {
        return;
      } else {
        var id = this.checkboxId ? this.checkboxId : this.curRowId;
        this.$put(this.urls.customerservicedepts + "/" + id + "/unaudit").then(function () {
          _this21.newOpt[1].nClick = true;
          _this21.newOpt[2].nClick = true;
          _this21.newOpt[3].nClick = false;
          _this21.newOpt[4].nClick = true;
          _this21.newOpt[5].nClick = true;
          _this21.newOpt[6].nClick = true;
          _this21.newOpt[8].nClick = true;
          _this21.newOpt[9].nClick = true;
          _this21.newOpt[13].nClick = true;
          _this21.newOpt[14].nClick = true;
          _this21.newOpt[15].nClick = true;
          _this21.newOpt[18].nClick = false;
          _this21.refresh();
          _this21.$message({
            message: "退审成功",
            type: "success"
          });
        }, function (err) {
          if (err.response) {
            var arr = err.response.data.errors;
            var arr1 = [];
            for (var i in arr) {
              arr1.push(arr[i]);
            }
            var str = arr1.join(",");
            _this21.$message.error(str);
          }
        });
      }
    },
    handleSplitOrder: function handleSplitOrder() {
      var _this22 = this;

      if (this.newOpt[9].nClick) {
        return;
      } else {
        this.splitMask = true;
        this.splitRowIndex = "";
        this.splitVal = [];
        var orderData = this.curRowData["orderItems"]["data"];
        if (orderData.length > 0) {
          orderData.map(function (item) {
            var list = {
              id: item.id,
              commodity_code: item.product["commodity_code"],
              short_name: item.product["short_name"],
              quantity: item["quantity"],
              newData: {
                quantity: ""
              }
            };
            _this22.splitVal.push(list);
          });
        }
      }
    },
    splitCName: function splitCName(_ref4) {
      var row = _ref4.row,
          rowIndex = _ref4.rowIndex;

      row.index = rowIndex;
    },
    splitRowClick: function splitRowClick(row) {
      this.splitRowIndex = "index" + row.index;
      this.splitRow = row;
    },
    numChg: function numChg(value) {
      if (value > this.splitRow["quantity"] - 0) {
        this.splitRow["newData"]["quantity"] = this.splitRow["quantity"];
      }
    },
    confirmSplit: function confirmSplit() {
      var _this23 = this;

      var id = this.checkboxId ? this.checkboxId : this.curRowId;
      var confSplit = {
        order_items: []
      };
      if (this.splitVal.length > 0) {
        this.splitVal.map(function (item) {
          if (item["newData"]["quantity"] > 0) {
            var list = {
              id: item.id,
              quantity: item["newData"]["quantity"]
            };
            confSplit["order_items"].push(list);
          }
        });
      }
      this.$put(this.urls.customerservicedepts + "/" + id + "/splitorder", confSplit).then(function () {
        _this23.splitMask = false;
        _this23.refresh();
        /*   this.newOpt[1].nClick = false;
          this.newOpt[2].nClick = false;
          this.newOpt[3].nClick = true;
          this.newOpt[4].nClick = false;
          this.newOpt[5].nClick = false;
          this.newOpt[6].nClick = true;
          this.newOpt[8].nClick = false;
          this.newOpt[9].nClick = false;
          this.newOpt[13].nClick = false;
          this.newOpt[14].nClick = true;
          this.newOpt[15].nClick = false;
          this.newOpt[18].nClick = false;*/
        _this23.$message({
          message: "订单拆分成功",
          type: "success"
        });
      }, function (err) {
        if (err.response) {
          var arr = err.response.data.errors;
          var arr1 = [];
          for (var i in arr) {
            arr1.push(arr[i]);
          }
          var str = arr1.join(",");
          _this23.$message.error(str);
        }
      });
    },
    cancelSplit: function cancelSplit() {
      this.splitMask = false;
    },
    handleMergerOrder: function handleMergerOrder() {
      var _this24 = this;

      if (this.newOpt[8].nClick) {
        return;
      } else {
        if (this.mergerIds.length != 2) {
          this.$message({
            message: "请选择要合并的订单",
            type: "info"
          });
        } else {
          var ids = [];
          this.mergerIds.map(function (item) {
            ids.push(item.id);
          });
          this.$put(this.urls.customerservicedepts + "/mergerorder" + "?order_id_one=" + ids[0] + "&order_id_two=" + ids[1]).then(function () {
            _this24.refresh();
            _this24.$message({
              message: "订单合并成功",
              type: "success"
            });
          }, function (err) {
            if (err.response) {
              _this24.$message.error("合并订单出错");
            }
          });
        }
      }
    },
    resets: function resets() {
      this.searchBox = {};
    }
  },
  mounted: function mounted() {
    this.fetchData();
    this.$store.dispatch("setOpt", this.newOpt);
    var that = this;
    $(window).resize(function () {
      that.$store.dispatch("setOpt", that.newOpt);
    });
  }
});

/***/ }),

/***/ 629:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-tabs",
        {
          on: { "tab-click": _vm.outerHandleClick },
          model: {
            value: _vm.activeName,
            callback: function($$v) {
              _vm.activeName = $$v
            },
            expression: "activeName"
          }
        },
        [
          _c("div", [
            _c("div", { staticClass: "searchBox" }, [
              _c(
                "span",
                [
                  _c("label", [_vm._v("店铺昵称")]),
                  _vm._v(" "),
                  _c("el-input", {
                    attrs: { clearable: "" },
                    model: {
                      value: _vm.searchBox.shop_nick,
                      callback: function($$v) {
                        _vm.$set(
                          _vm.searchBox,
                          "shop_nick",
                          typeof $$v === "string" ? $$v.trim() : $$v
                        )
                      },
                      expression: "searchBox.shop_nick"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "span",
                [
                  _c("label", [_vm._v("订单编号")]),
                  _vm._v(" "),
                  _c("el-input", {
                    attrs: { clearable: "" },
                    model: {
                      value: _vm.searchBox.order_no,
                      callback: function($$v) {
                        _vm.$set(
                          _vm.searchBox,
                          "order_no",
                          typeof $$v === "string" ? $$v.trim() : $$v
                        )
                      },
                      expression: "searchBox.order_no"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "span",
                [
                  _c("label", [_vm._v("买家昵称")]),
                  _vm._v(" "),
                  _c("el-input", {
                    attrs: { clearable: "" },
                    model: {
                      value: _vm.searchBox.buyer_nick,
                      callback: function($$v) {
                        _vm.$set(
                          _vm.searchBox,
                          "buyer_nick",
                          typeof $$v === "string" ? $$v.trim() : $$v
                        )
                      },
                      expression: "searchBox.buyer_nick"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "span",
                [
                  _c("label", [_vm._v("买家姓名")]),
                  _vm._v(" "),
                  _c("el-input", {
                    attrs: { clearable: "" },
                    model: {
                      value: _vm.searchBox.buyer_name,
                      callback: function($$v) {
                        _vm.$set(
                          _vm.searchBox,
                          "buyer_name",
                          typeof $$v === "string" ? $$v.trim() : $$v
                        )
                      },
                      expression: "searchBox.buyer_name"
                    }
                  })
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "searchBox" }, [
              _c(
                "span",
                [
                  _c("label", [_vm._v("还款信息")]),
                  _vm._v(" "),
                  _c("el-input", {
                    attrs: { clearable: "" },
                    model: {
                      value: _vm.searchBox.refund_info,
                      callback: function($$v) {
                        _vm.$set(
                          _vm.searchBox,
                          "refund_info",
                          typeof $$v === "string" ? $$v.trim() : $$v
                        )
                      },
                      expression: "searchBox.refund_info"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "span",
                [
                  _c("label", [_vm._v("锁定人")]),
                  _vm._v(" "),
                  _c("el-input", {
                    attrs: { clearable: "" },
                    model: {
                      value: _vm.searchBox.locker,
                      callback: function($$v) {
                        _vm.$set(
                          _vm.searchBox,
                          "locker",
                          typeof $$v === "string" ? $$v.trim() : $$v
                        )
                      },
                      expression: "searchBox.locker"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "span",
                [
                  _c("label", [_vm._v("还款时间")]),
                  _vm._v(" "),
                  _c("el-date-picker", {
                    attrs: {
                      type: "daterange",
                      "range-separator": "至",
                      "start-placeholder": "开始日期",
                      "end-placeholder": "结束日期"
                    },
                    model: {
                      value: _vm.searchBox.refund_time,
                      callback: function($$v) {
                        _vm.$set(_vm.searchBox, "refund_time", $$v)
                      },
                      expression: "searchBox.refund_time"
                    }
                  })
                ],
                1
              )
            ])
          ]),
          _vm._v(" "),
          _c(
            "el-tabs",
            {
              staticStyle: { height: "400px" },
              on: { "tab-click": _vm.leftHandleClick },
              model: {
                value: _vm.leftTopActiveName,
                callback: function($$v) {
                  _vm.leftTopActiveName = $$v
                },
                expression: "leftTopActiveName"
              }
            },
            [
              _c(
                "el-tab-pane",
                { attrs: { label: "未处理", name: "0" } },
                [
                  _c(
                    "el-table",
                    {
                      directives: [
                        {
                          name: "loading",
                          rawName: "v-loading",
                          value: _vm.loading,
                          expression: "loading"
                        }
                      ],
                      attrs: {
                        data: _vm.orderListData,
                        fit: "",
                        height: "350"
                      },
                      on: {
                        "selection-change": _vm.handleSelectionChange,
                        "row-click": _vm.orderListRClick,
                        "row-dblclick": _vm.orderDbClick
                      }
                    },
                    [
                      _c("el-table-column", {
                        attrs: {
                          type: "selection",
                          width: "95",
                          align: "center",
                          checked: _vm.checkboxInit
                        }
                      }),
                      _vm._v(" "),
                      _vm._l(_vm.orderListHead, function(item) {
                        return _c("el-table-column", {
                          key: item.label,
                          attrs: {
                            label: item.label,
                            align: "center",
                            width: item.width
                          },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "default",
                                fn: function(scope) {
                                  return [
                                    item.type == "checkbox"
                                      ? _c("span", [
                                          item.inProp
                                            ? _c(
                                                "span",
                                                [
                                                  _c("el-checkbox", {
                                                    attrs: { disabled: "" },
                                                    model: {
                                                      value:
                                                        scope.row[item.prop][
                                                          item.inProp
                                                        ],
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          scope.row[item.prop],
                                                          item.inProp,
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "scope.row[item.prop][item.inProp]"
                                                    }
                                                  })
                                                ],
                                                1
                                              )
                                            : _c(
                                                "span",
                                                [
                                                  _c("el-checkbox", {
                                                    attrs: { disabled: "" },
                                                    model: {
                                                      value:
                                                        scope.row[item.prop],
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          scope.row,
                                                          item.prop,
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "scope.row[item.prop]"
                                                    }
                                                  })
                                                ],
                                                1
                                              )
                                        ])
                                      : item.type == "flag"
                                      ? _c("span", [
                                          scope.row[item.prop] == 0
                                            ? _c("span", [
                                                _c("i", {
                                                  staticClass:
                                                    "iconfont bf-flag"
                                                })
                                              ])
                                            : scope.row[item.prop] == 1
                                            ? _c("span", [
                                                _c("i", {
                                                  staticClass:
                                                    "iconfont bf-flag",
                                                  staticStyle: { color: "red" }
                                                })
                                              ])
                                            : scope.row[item.prop] == 2
                                            ? _c("span", [
                                                _c("i", {
                                                  staticClass:
                                                    "iconfont bf-flag",
                                                  staticStyle: {
                                                    color: "yellow"
                                                  }
                                                })
                                              ])
                                            : scope.row[item.prop] == 3
                                            ? _c("span", [
                                                _c("i", {
                                                  staticClass:
                                                    "iconfont bf-flag",
                                                  staticStyle: {
                                                    color: "green"
                                                  }
                                                })
                                              ])
                                            : scope.row[item.prop] == 4
                                            ? _c("span", [
                                                _c("i", {
                                                  staticClass:
                                                    "iconfont bf-flag",
                                                  staticStyle: { color: "blue" }
                                                })
                                              ])
                                            : scope.row[item.prop] == 5
                                            ? _c("span", [
                                                _c("i", {
                                                  staticClass:
                                                    "iconfont bf-flag",
                                                  staticStyle: {
                                                    color: "purple"
                                                  }
                                                })
                                              ])
                                            : _vm._e()
                                        ])
                                      : _c("span", [
                                          scope.row[item.prop]
                                            ? _c("span", [
                                                _vm._v(
                                                  "\n                                    " +
                                                    _vm._s(
                                                      item.inProp
                                                        ? scope.row[item.prop][
                                                            item.inProp
                                                          ]
                                                        : scope.row[item.prop]
                                                    ) +
                                                    "\n                                "
                                                )
                                              ])
                                            : _vm._e()
                                        ])
                                  ]
                                }
                              }
                            ],
                            null,
                            true
                          )
                        })
                      }),
                      _vm._v(" "),
                      _c("el-table-column", {
                        attrs: {
                          label: "操作",
                          width: "90",
                          align: "center",
                          fixed: "right"
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(scope) {
                              return [
                                _c(
                                  "el-button",
                                  {
                                    attrs: { size: "mini", type: "danger" },
                                    on: {
                                      click: function($event) {
                                        return _vm.delSingle(scope.row, $event)
                                      }
                                    }
                                  },
                                  [_vm._v("删除")]
                                )
                              ]
                            }
                          }
                        ])
                      })
                    ],
                    2
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-tab-pane",
                { attrs: { label: "已处理", name: "1" } },
                [
                  _c(
                    "el-table",
                    {
                      directives: [
                        {
                          name: "loading",
                          rawName: "v-loading",
                          value: _vm.loading,
                          expression: "loading"
                        }
                      ],
                      attrs: {
                        data: _vm.alreadyHandle,
                        fit: "",
                        height: "350"
                      },
                      on: {
                        "selection-change": _vm.handleSelectionChange,
                        "row-click": _vm.orderListRClick,
                        "row-dblclick": _vm.orderDbClick
                      }
                    },
                    [
                      _c("el-table-column", {
                        attrs: {
                          type: "selection",
                          width: "95",
                          align: "center",
                          checked: _vm.checkboxInit
                        }
                      }),
                      _vm._v(" "),
                      _vm._l(_vm.orderListHead, function(item) {
                        return _c("el-table-column", {
                          key: item.label,
                          attrs: {
                            label: item.label,
                            align: "center",
                            width: item.width
                          },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "default",
                                fn: function(scope) {
                                  return [
                                    item.type == "checkbox"
                                      ? _c("span", [
                                          item.inProp
                                            ? _c(
                                                "span",
                                                [
                                                  _c("el-checkbox", {
                                                    attrs: { disabled: "" },
                                                    model: {
                                                      value:
                                                        scope.row[item.prop][
                                                          item.inProp
                                                        ],
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          scope.row[item.prop],
                                                          item.inProp,
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "scope.row[item.prop][item.inProp]"
                                                    }
                                                  })
                                                ],
                                                1
                                              )
                                            : _c(
                                                "span",
                                                [
                                                  _c("el-checkbox", {
                                                    attrs: { disabled: "" },
                                                    model: {
                                                      value:
                                                        scope.row[item.prop],
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          scope.row,
                                                          item.prop,
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "scope.row[item.prop]"
                                                    }
                                                  })
                                                ],
                                                1
                                              )
                                        ])
                                      : item.type == "flag"
                                      ? _c("span", [
                                          scope.row[item.prop] == 0
                                            ? _c("span", [
                                                _c("i", {
                                                  staticClass:
                                                    "iconfont bf-flag"
                                                })
                                              ])
                                            : scope.row[item.prop] == 1
                                            ? _c("span", [
                                                _c("i", {
                                                  staticClass:
                                                    "iconfont bf-flag",
                                                  staticStyle: { color: "red" }
                                                })
                                              ])
                                            : scope.row[item.prop] == 2
                                            ? _c("span", [
                                                _c("i", {
                                                  staticClass:
                                                    "iconfont bf-flag",
                                                  staticStyle: {
                                                    color: "yellow"
                                                  }
                                                })
                                              ])
                                            : scope.row[item.prop] == 3
                                            ? _c("span", [
                                                _c("i", {
                                                  staticClass:
                                                    "iconfont bf-flag",
                                                  staticStyle: {
                                                    color: "green"
                                                  }
                                                })
                                              ])
                                            : scope.row[item.prop] == 4
                                            ? _c("span", [
                                                _c("i", {
                                                  staticClass:
                                                    "iconfont bf-flag",
                                                  staticStyle: { color: "blue" }
                                                })
                                              ])
                                            : scope.row[item.prop] == 5
                                            ? _c("span", [
                                                _c("i", {
                                                  staticClass:
                                                    "iconfont bf-flag",
                                                  staticStyle: {
                                                    color: "purple"
                                                  }
                                                })
                                              ])
                                            : _vm._e()
                                        ])
                                      : _c("span", [
                                          scope.row[item.prop]
                                            ? _c("span", [
                                                _vm._v(
                                                  "\n                                    " +
                                                    _vm._s(
                                                      item.inProp
                                                        ? scope.row[item.prop][
                                                            item.inProp
                                                          ]
                                                        : scope.row[item.prop]
                                                    ) +
                                                    "\n                                "
                                                )
                                              ])
                                            : _vm._e()
                                        ])
                                  ]
                                }
                              }
                            ],
                            null,
                            true
                          )
                        })
                      }),
                      _vm._v(" "),
                      _c("el-table-column", {
                        attrs: {
                          label: "操作",
                          width: "90",
                          align: "center",
                          fixed: "right"
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(scope) {
                              return [
                                _c(
                                  "el-button",
                                  {
                                    attrs: { size: "mini", type: "danger" },
                                    on: {
                                      click: function($event) {
                                        return _vm.delSingle(scope.row, $event)
                                      }
                                    }
                                  },
                                  [_vm._v("删除")]
                                )
                              ]
                            }
                          }
                        ])
                      })
                    ],
                    2
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-tabs",
            [
              _c(
                "el-tab-pane",
                { attrs: { label: "详细信息", name: "0" } },
                [
                  _c(
                    "el-form",
                    { attrs: { model: _vm.detailRefundOrderInfo } },
                    _vm._l(_vm.detailRefundOrderHead, function(item, index) {
                      return _c(
                        "el-table-item",
                        {
                          key: index,
                          attrs: {
                            label: item.label,
                            align: "center",
                            width: item.width
                          }
                        },
                        [
                          item.type == "text"
                            ? _c("span", [
                                item.inProp
                                  ? _c(
                                      "span",
                                      [
                                        _c("el-input", {
                                          attrs: {
                                            placeholder: item.holder,
                                            disabled: item.addChgAble
                                          },
                                          model: {
                                            value:
                                              _vm.detailRefundOrderInfo[
                                                item.prop
                                              ][item.inProp],
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.detailRefundOrderInfo[
                                                  item.prop
                                                ],
                                                item.inProp,
                                                typeof $$v === "string"
                                                  ? $$v.trim()
                                                  : $$v
                                              )
                                            },
                                            expression:
                                              "detailRefundOrderInfo[item.prop][item.inProp]"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  : _c(
                                      "span",
                                      [
                                        _c("el-input", {
                                          attrs: {
                                            placeholder: item.holder,
                                            disabled: item.addChgAble
                                          },
                                          model: {
                                            value:
                                              _vm.detailRefundOrderInfo[
                                                item.prop
                                              ],
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.detailRefundOrderInfo,
                                                item.prop,
                                                typeof $$v === "string"
                                                  ? $$v.trim()
                                                  : $$v
                                              )
                                            },
                                            expression:
                                              "detailRefundOrderInfo[item.prop]"
                                          }
                                        })
                                      ],
                                      1
                                    )
                              ])
                            : item.type == "number"
                            ? _c("span", [
                                item.prop == "deliver_goods_fee" ||
                                item.prop == "move_upstairs_fee" ||
                                item.prop == "installation_fee"
                                  ? _c(
                                      "span",
                                      [
                                        _c("el-input", {
                                          attrs: {
                                            type: "number",
                                            placeholder: item.holder,
                                            disabled: item.addChgAble
                                          },
                                          on: { input: _vm.formChg },
                                          model: {
                                            value:
                                              _vm.detailRefundOrderInfo[
                                                item.prop
                                              ],
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.detailRefundOrderInfo,
                                                item.prop,
                                                typeof $$v === "string"
                                                  ? $$v.trim()
                                                  : $$v
                                              )
                                            },
                                            expression:
                                              "detailRefundOrderInfo[item.prop]"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  : _c(
                                      "span",
                                      [
                                        _c("el-input", {
                                          attrs: {
                                            type: "number",
                                            placeholder: item.holder,
                                            disabled: item.addChgAble
                                          },
                                          model: {
                                            value:
                                              _vm.detailRefundOrderInfo[
                                                item.prop
                                              ],
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.detailRefundOrderInfo,
                                                item.prop,
                                                typeof $$v === "string"
                                                  ? $$v.trim()
                                                  : $$v
                                              )
                                            },
                                            expression:
                                              "detailRefundOrderInfo[item.prop]"
                                          }
                                        })
                                      ],
                                      1
                                    )
                              ])
                            : item.type == "select"
                            ? _c(
                                "span",
                                [
                                  _c(
                                    "el-select",
                                    {
                                      attrs: {
                                        placeholder: item.holder,
                                        disabled: item.addChgAble
                                      },
                                      model: {
                                        value:
                                          _vm.detailRefundOrderInfo[item.prop],
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.detailRefundOrderInfo,
                                            item.prop,
                                            $$v
                                          )
                                        },
                                        expression:
                                          "detailRefundOrderInfo[item.prop]"
                                      }
                                    },
                                    _vm._l(_vm.resData[item.stateVal], function(
                                      list
                                    ) {
                                      return _c(
                                        "span",
                                        { key: list.id },
                                        [
                                          _c("el-option", {
                                            attrs: {
                                              label: list.name
                                                ? list.name
                                                : list.nick,
                                              value: list.id
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    }),
                                    0
                                  )
                                ],
                                1
                              )
                            : item.type == "selects"
                            ? _c(
                                "span",
                                [
                                  _c(
                                    "el-select",
                                    {
                                      attrs: { placeholder: item.holder },
                                      model: {
                                        value:
                                          _vm.detailRefundOrderInfo[item.prop],
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.detailRefundOrderInfo,
                                            item.prop,
                                            $$v
                                          )
                                        },
                                        expression:
                                          "detailRefundOrderInfo[item.prop]"
                                      }
                                    },
                                    _vm._l(_vm.selectVal[item.prop], function(
                                      list
                                    ) {
                                      return _c(
                                        "span",
                                        { key: list.value },
                                        [
                                          _c("el-option", {
                                            attrs: {
                                              label: list.label,
                                              value: list.value
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    }),
                                    0
                                  )
                                ],
                                1
                              )
                            : item.type == "textarea"
                            ? _c(
                                "span",
                                [
                                  _c("el-input", {
                                    attrs: {
                                      type: "textarea",
                                      placehode: item.holder
                                    },
                                    model: {
                                      value:
                                        _vm.detailRefundOrderInfo[item.prop],
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.detailRefundOrderInfo,
                                          item.prop,
                                          typeof $$v === "string"
                                            ? $$v.trim()
                                            : $$v
                                        )
                                      },
                                      expression:
                                        "detailRefundOrderInfo[item.prop]"
                                    }
                                  })
                                ],
                                1
                              )
                            : item.type == "checkbox"
                            ? _c(
                                "span",
                                [
                                  _c("el-checkbox", {
                                    attrs: { disabled: item.chgAble },
                                    model: {
                                      value:
                                        _vm.detailRefundOrderInfo[item.prop],
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.detailRefundOrderInfo,
                                          item.prop,
                                          $$v
                                        )
                                      },
                                      expression:
                                        "detailRefundOrderInfo[item.prop]"
                                    }
                                  })
                                ],
                                1
                              )
                            : item.type == "radio"
                            ? _c(
                                "span",
                                [
                                  _c(
                                    "el-radio",
                                    {
                                      attrs: { label: "volume" },
                                      model: {
                                        value:
                                          _vm.detailRefundOrderInfo[item.prop],
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.detailRefundOrderInfo,
                                            item.prop,
                                            $$v
                                          )
                                        },
                                        expression:
                                          "detailRefundOrderInfo[item.prop]"
                                      }
                                    },
                                    [_vm._v(_vm._s(item.choiceName[0]))]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "el-radio",
                                    {
                                      attrs: { label: "weight" },
                                      model: {
                                        value:
                                          _vm.detailRefundOrderInfo[item.prop],
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.detailRefundOrderInfo,
                                            item.prop,
                                            $$v
                                          )
                                        },
                                        expression:
                                          "detailRefundOrderInfo[item.prop]"
                                      }
                                    },
                                    [_vm._v(_vm._s(item.choiceName[1]))]
                                  )
                                ],
                                1
                              )
                            : item.type == "DatePicker"
                            ? _c(
                                "span",
                                [
                                  _c("el-date-picker", {
                                    attrs: {
                                      type: "date",
                                      format: "yyyy-MM-dd",
                                      "value-format": "yyyy-MM-dd",
                                      placeholder: "选择日期"
                                    },
                                    model: {
                                      value:
                                        _vm.detailRefundOrderInfo[item.prop],
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.detailRefundOrderInfo,
                                          item.prop,
                                          $$v
                                        )
                                      },
                                      expression:
                                        "detailRefundOrderInfo[item.prop]"
                                    }
                                  })
                                ],
                                1
                              )
                            : _vm._e()
                        ]
                      )
                    }),
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-tab-pane",
                { attrs: { label: "操作日志", name: "1" } },
                [
                  _c(
                    "el-table",
                    { attrs: { data: _vm.problemProData } },
                    _vm._l(_vm.problemProTableHead, function(item) {
                      return _c("el-table-column", {
                        key: item.prop,
                        attrs: {
                          label: item.label,
                          align: "center",
                          width: item.width
                        },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "default",
                              fn: function(scope) {
                                return [
                                  item.type == "checkbox"
                                    ? _c(
                                        "span",
                                        [
                                          _c("el-checkbox", {
                                            attrs: { disabled: "" },
                                            model: {
                                              value: scope.row[item.prop],
                                              callback: function($$v) {
                                                _vm.$set(
                                                  scope.row,
                                                  item.prop,
                                                  $$v
                                                )
                                              },
                                              expression: "scope.row[item.prop]"
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    : item.type == "img"
                                    ? _c(
                                        "span",
                                        [
                                          _c(
                                            "el-popover",
                                            {
                                              attrs: {
                                                placement: "right",
                                                trigger: "hover",
                                                "popper-class": "picture_detail"
                                              }
                                            },
                                            [
                                              _c("img", {
                                                attrs: {
                                                  src: scope.row[item.prop]
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("img", {
                                                attrs: {
                                                  slot: "reference",
                                                  src: scope.row[item.prop],
                                                  alt: scope.row[item.alt]
                                                },
                                                slot: "reference"
                                              })
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                    : _c("span", [
                                        scope.row[item.prop]
                                          ? _c("span", [
                                              _vm._v(
                                                "\n                                    " +
                                                  _vm._s(
                                                    item.inProp
                                                      ? scope.row[item.prop][
                                                          item.inProp
                                                        ]
                                                      : scope.row[item.prop]
                                                  ) +
                                                  "\n                                "
                                              )
                                            ])
                                          : _vm._e()
                                      ])
                                ]
                              }
                            }
                          ],
                          null,
                          true
                        )
                      })
                    }),
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-tab-pane",
                { attrs: { label: "图片信息", name: "2" } },
                [
                  _c(
                    "el-table",
                    { attrs: { data: _vm.problemProData } },
                    _vm._l(_vm.problemProTableHead, function(item) {
                      return _c("el-table-column", {
                        key: item.prop,
                        attrs: {
                          label: item.label,
                          align: "center",
                          width: item.width
                        },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "default",
                              fn: function(scope) {
                                return [
                                  item.type == "checkbox"
                                    ? _c(
                                        "span",
                                        [
                                          _c("el-checkbox", {
                                            attrs: { disabled: "" },
                                            model: {
                                              value: scope.row[item.prop],
                                              callback: function($$v) {
                                                _vm.$set(
                                                  scope.row,
                                                  item.prop,
                                                  $$v
                                                )
                                              },
                                              expression: "scope.row[item.prop]"
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    : item.type == "img"
                                    ? _c(
                                        "span",
                                        [
                                          _c(
                                            "el-popover",
                                            {
                                              attrs: {
                                                placement: "right",
                                                trigger: "hover",
                                                "popper-class": "picture_detail"
                                              }
                                            },
                                            [
                                              _c("img", {
                                                attrs: {
                                                  src: scope.row[item.prop]
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("img", {
                                                attrs: {
                                                  slot: "reference",
                                                  src: scope.row[item.prop],
                                                  alt: scope.row[item.alt]
                                                },
                                                slot: "reference"
                                              })
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                    : _c("span", [
                                        scope.row[item.prop]
                                          ? _c("span", [
                                              _vm._v(
                                                "\n                                    " +
                                                  _vm._s(
                                                    item.inProp
                                                      ? scope.row[item.prop][
                                                          item.inProp
                                                        ]
                                                      : scope.row[item.prop]
                                                  ) +
                                                  "\n                                "
                                              )
                                            ])
                                          : _vm._e()
                                      ])
                                ]
                              }
                            }
                          ],
                          null,
                          true
                        )
                      })
                    }),
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-tab-pane",
                { attrs: { label: "多张图片", name: "3" } },
                [
                  _c(
                    "el-table",
                    { attrs: { data: _vm.problemProData } },
                    _vm._l(_vm.problemProTableHead, function(item) {
                      return _c("el-table-column", {
                        key: item.prop,
                        attrs: {
                          label: item.label,
                          align: "center",
                          width: item.width
                        },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "default",
                              fn: function(scope) {
                                return [
                                  item.type == "checkbox"
                                    ? _c(
                                        "span",
                                        [
                                          _c("el-checkbox", {
                                            attrs: { disabled: "" },
                                            model: {
                                              value: scope.row[item.prop],
                                              callback: function($$v) {
                                                _vm.$set(
                                                  scope.row,
                                                  item.prop,
                                                  $$v
                                                )
                                              },
                                              expression: "scope.row[item.prop]"
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    : item.type == "img"
                                    ? _c(
                                        "span",
                                        [
                                          _c(
                                            "el-popover",
                                            {
                                              attrs: {
                                                placement: "right",
                                                trigger: "hover",
                                                "popper-class": "picture_detail"
                                              }
                                            },
                                            [
                                              _c("img", {
                                                attrs: {
                                                  src: scope.row[item.prop]
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("img", {
                                                attrs: {
                                                  slot: "reference",
                                                  src: scope.row[item.prop],
                                                  alt: scope.row[item.alt]
                                                },
                                                slot: "reference"
                                              })
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                    : _c("span", [
                                        scope.row[item.prop]
                                          ? _c("span", [
                                              _vm._v(
                                                "\n                                    " +
                                                  _vm._s(
                                                    item.inProp
                                                      ? scope.row[item.prop][
                                                          item.inProp
                                                        ]
                                                      : scope.row[item.prop]
                                                  ) +
                                                  "\n                                "
                                              )
                                            ])
                                          : _vm._e()
                                      ])
                                ]
                              }
                            }
                          ],
                          null,
                          true
                        )
                      })
                    }),
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-tab-pane",
                { attrs: { label: "退款原因", name: "4" } },
                [
                  _c(
                    "el-table",
                    { attrs: { data: _vm.problemProData } },
                    _vm._l(_vm.problemProTableHead, function(item) {
                      return _c("el-table-column", {
                        key: item.prop,
                        attrs: {
                          label: item.label,
                          align: "center",
                          width: item.width
                        },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "default",
                              fn: function(scope) {
                                return [
                                  item.type == "checkbox"
                                    ? _c(
                                        "span",
                                        [
                                          _c("el-checkbox", {
                                            attrs: { disabled: "" },
                                            model: {
                                              value: scope.row[item.prop],
                                              callback: function($$v) {
                                                _vm.$set(
                                                  scope.row,
                                                  item.prop,
                                                  $$v
                                                )
                                              },
                                              expression: "scope.row[item.prop]"
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    : item.type == "img"
                                    ? _c(
                                        "span",
                                        [
                                          _c(
                                            "el-popover",
                                            {
                                              attrs: {
                                                placement: "right",
                                                trigger: "hover",
                                                "popper-class": "picture_detail"
                                              }
                                            },
                                            [
                                              _c("img", {
                                                attrs: {
                                                  src: scope.row[item.prop]
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("img", {
                                                attrs: {
                                                  slot: "reference",
                                                  src: scope.row[item.prop],
                                                  alt: scope.row[item.alt]
                                                },
                                                slot: "reference"
                                              })
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                    : _c("span", [
                                        scope.row[item.prop]
                                          ? _c("span", [
                                              _vm._v(
                                                "\n                                    " +
                                                  _vm._s(
                                                    item.inProp
                                                      ? scope.row[item.prop][
                                                          item.inProp
                                                        ]
                                                      : scope.row[item.prop]
                                                  ) +
                                                  "\n                                "
                                              )
                                            ])
                                          : _vm._e()
                                      ])
                                ]
                              }
                            }
                          ],
                          null,
                          true
                        )
                      })
                    }),
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-dialog",
        {
          staticClass: "bigDialog",
          class: { "more-forms": _vm.moreForms, threeParts: _vm.threeParts },
          attrs: { title: "新增退款单", visible: _vm.addCustomerMask },
          on: {
            "update:visible": function($event) {
              _vm.addCustomerMask = $event
            }
          }
        },
        [
          _c(
            "div",
            { staticClass: "clearfix" },
            [
              _c(
                "el-button",
                { staticStyle: { float: "left" }, attrs: { type: "text" } },
                [_vm._v("新增退款单信息")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form",
            {
              staticClass: "customerAddForm",
              attrs: {
                model: _vm.addCustomerFormVal,
                rules: _vm.addCustomerFormRules,
                id: "form"
              }
            },
            _vm._l(_vm.addCustomerFormHead, function(item, index) {
              return _c(
                "el-form-item",
                { key: index, attrs: { label: item.label, prop: item.prop } },
                [
                  item.type == "text"
                    ? _c("span", [
                        item.inProp
                          ? _c(
                              "span",
                              [
                                _c("el-input", {
                                  attrs: {
                                    placeholder: item.holder,
                                    disabled: item.addChgAble
                                  },
                                  model: {
                                    value:
                                      _vm.addCustomerFormVal[item.prop][
                                        item.inProp
                                      ],
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.addCustomerFormVal[item.prop],
                                        item.inProp,
                                        typeof $$v === "string"
                                          ? $$v.trim()
                                          : $$v
                                      )
                                    },
                                    expression:
                                      "addCustomerFormVal[item.prop][item.inProp]"
                                  }
                                })
                              ],
                              1
                            )
                          : _c(
                              "span",
                              [
                                _c("el-input", {
                                  attrs: {
                                    placeholder: item.holder,
                                    disabled: item.addChgAble
                                  },
                                  model: {
                                    value: _vm.addCustomerFormVal[item.prop],
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.addCustomerFormVal,
                                        item.prop,
                                        typeof $$v === "string"
                                          ? $$v.trim()
                                          : $$v
                                      )
                                    },
                                    expression: "addCustomerFormVal[item.prop]"
                                  }
                                })
                              ],
                              1
                            )
                      ])
                    : item.type == "number"
                    ? _c("span", [
                        item.prop == "deliver_goods_fee" ||
                        item.prop == "move_upstairs_fee" ||
                        item.prop == "installation_fee"
                          ? _c(
                              "span",
                              [
                                _c("el-input", {
                                  attrs: {
                                    type: "number",
                                    placeholder: item.holder,
                                    disabled: item.addChgAble
                                  },
                                  on: { input: _vm.formChg },
                                  model: {
                                    value: _vm.addCustomerFormVal[item.prop],
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.addCustomerFormVal,
                                        item.prop,
                                        typeof $$v === "string"
                                          ? $$v.trim()
                                          : $$v
                                      )
                                    },
                                    expression: "addCustomerFormVal[item.prop]"
                                  }
                                })
                              ],
                              1
                            )
                          : _c(
                              "span",
                              [
                                _c("el-input", {
                                  attrs: {
                                    type: "number",
                                    placeholder: item.holder,
                                    disabled: item.addChgAble
                                  },
                                  model: {
                                    value: _vm.addCustomerFormVal[item.prop],
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.addCustomerFormVal,
                                        item.prop,
                                        typeof $$v === "string"
                                          ? $$v.trim()
                                          : $$v
                                      )
                                    },
                                    expression: "addCustomerFormVal[item.prop]"
                                  }
                                })
                              ],
                              1
                            )
                      ])
                    : item.type == "select"
                    ? _c(
                        "span",
                        [
                          _c(
                            "el-select",
                            {
                              attrs: {
                                placeholder: item.holder,
                                disabled: item.addChgAble
                              },
                              model: {
                                value: _vm.addCustomerFormVal[item.prop],
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.addCustomerFormVal,
                                    item.prop,
                                    $$v
                                  )
                                },
                                expression: "addCustomerFormVal[item.prop]"
                              }
                            },
                            _vm._l(_vm.addSubData[item.stateVal], function(
                              list
                            ) {
                              return _c(
                                "span",
                                { key: list.id },
                                [
                                  _c("el-option", {
                                    attrs: {
                                      label: list.name ? list.name : list.nick,
                                      value: list.id
                                    }
                                  })
                                ],
                                1
                              )
                            }),
                            0
                          )
                        ],
                        1
                      )
                    : item.type == "textarea"
                    ? _c(
                        "span",
                        [
                          _c("el-input", {
                            attrs: { type: "textarea", placehode: item.holder },
                            model: {
                              value: _vm.addCustomerFormVal[item.prop],
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.addCustomerFormVal,
                                  item.prop,
                                  typeof $$v === "string" ? $$v.trim() : $$v
                                )
                              },
                              expression: "addCustomerFormVal[item.prop]"
                            }
                          })
                        ],
                        1
                      )
                    : item.type == "checkbox"
                    ? _c(
                        "span",
                        [
                          _c("el-checkbox", {
                            attrs: { disabled: item.chgAble },
                            model: {
                              value: _vm.addCustomerFormVal[item.prop],
                              callback: function($$v) {
                                _vm.$set(_vm.addCustomerFormVal, item.prop, $$v)
                              },
                              expression: "addCustomerFormVal[item.prop]"
                            }
                          })
                        ],
                        1
                      )
                    : item.type == "radio"
                    ? _c(
                        "span",
                        [
                          _c(
                            "el-radio",
                            {
                              attrs: { label: "volume" },
                              model: {
                                value: _vm.addCustomerFormVal[item.prop],
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.addCustomerFormVal,
                                    item.prop,
                                    $$v
                                  )
                                },
                                expression: "addCustomerFormVal[item.prop]"
                              }
                            },
                            [_vm._v(_vm._s(item.choiceName[0]))]
                          ),
                          _vm._v(" "),
                          _c(
                            "el-radio",
                            {
                              attrs: { label: "weight" },
                              model: {
                                value: _vm.addCustomerFormVal[item.prop],
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.addCustomerFormVal,
                                    item.prop,
                                    $$v
                                  )
                                },
                                expression: "addCustomerFormVal[item.prop]"
                              }
                            },
                            [_vm._v(_vm._s(item.choiceName[1]))]
                          )
                        ],
                        1
                      )
                    : item.type == "DatePicker"
                    ? _c(
                        "span",
                        [
                          _c("el-date-picker", {
                            attrs: {
                              type: "date",
                              format: "yyyy-MM-dd",
                              "value-format": "yyyy-MM-dd",
                              placeholder: "选择日期"
                            },
                            model: {
                              value: _vm.addCustomerFormVal[item.prop],
                              callback: function($$v) {
                                _vm.$set(_vm.addCustomerFormVal, item.prop, $$v)
                              },
                              expression: "addCustomerFormVal[item.prop]"
                            }
                          })
                        ],
                        1
                      )
                    : _vm._e()
                ]
              )
            }),
            1
          ),
          _vm._v(" "),
          _c("el-button", { attrs: { type: "text" } }, [_vm._v("退款原因")]),
          _vm._v(" "),
          _c(
            "el-tabs",
            {
              on: { "tab-click": _vm.addHandleClick },
              model: {
                value: _vm.addActiveName,
                callback: function($$v) {
                  _vm.addActiveName = $$v
                },
                expression: "addActiveName"
              }
            },
            [
              _c(
                "el-table",
                {
                  attrs: {
                    data: _vm.addCustomerFormVal.refund_reason,
                    fit: "",
                    "row-class-name": _vm.addProRCName
                  },
                  on: { "row-click": _vm.addRefundReasonRowClick }
                },
                _vm._l(_vm.addHead, function(item, index) {
                  return _c("el-table-column", {
                    key: index,
                    attrs: {
                      label: item.label,
                      align: "center",
                      width: item.width
                    },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "default",
                          fn: function(scope) {
                            return [
                              _vm.addProblemProCurIndex ==
                              "index" + scope.$index
                                ? _c("span", [
                                    item.type == "number"
                                      ? _c(
                                          "span",
                                          [
                                            _c("el-input", {
                                              attrs: {
                                                size: "small",
                                                type: "number",
                                                placeholder: item.holder
                                              },
                                              model: {
                                                value: scope.row[item.prop],
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    scope.row,
                                                    item.prop,
                                                    typeof $$v === "string"
                                                      ? $$v.trim()
                                                      : $$v
                                                  )
                                                },
                                                expression:
                                                  "scope.row[item.prop]"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      : item.type == "url"
                                      ? _c(
                                          "span",
                                          [
                                            _c("el-input", {
                                              attrs: {
                                                size: "small",
                                                type: "url",
                                                placeholder: item.holder
                                              },
                                              model: {
                                                value: scope.row[item.prop],
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    scope.row,
                                                    item.prop,
                                                    typeof $$v === "string"
                                                      ? $$v.trim()
                                                      : $$v
                                                  )
                                                },
                                                expression:
                                                  "scope.row[item.prop]"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      : item.type == "textarea"
                                      ? _c(
                                          "span",
                                          [
                                            _c("el-input", {
                                              attrs: {
                                                type: "textarea",
                                                size: "small",
                                                placeholder: item.holder
                                              },
                                              model: {
                                                value: scope.row[item.prop],
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    scope.row,
                                                    item.prop,
                                                    typeof $$v === "string"
                                                      ? $$v.trim()
                                                      : $$v
                                                  )
                                                },
                                                expression:
                                                  "scope.row[item.prop]"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      : item.type == "select"
                                      ? _c(
                                          "span",
                                          [
                                            _c(
                                              "el-select",
                                              {
                                                attrs: {
                                                  placeholder: item.holder
                                                },
                                                model: {
                                                  value: scope.row[item.prop],
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      scope.row,
                                                      item.prop,
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "scope.row[item.prop]"
                                                }
                                              },
                                              _vm._l(
                                                _vm.resData[item.stateVal],
                                                function(list) {
                                                  return _c(
                                                    "span",
                                                    { key: list.id },
                                                    [
                                                      _c("el-option", {
                                                        attrs: {
                                                          label: list.name,
                                                          value: list.id
                                                        }
                                                      })
                                                    ],
                                                    1
                                                  )
                                                }
                                              ),
                                              0
                                            )
                                          ],
                                          1
                                        )
                                      : item.type == "checkbox"
                                      ? _c(
                                          "span",
                                          [
                                            _c("el-checkbox", {
                                              model: {
                                                value: scope.row[item.prop],
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    scope.row,
                                                    item.prop,
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "scope.row[item.prop]"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      : item.type == "img"
                                      ? _c("span", [
                                          _vm.addProblemProUpload ==
                                          "upload" + scope.$index
                                            ? _c(
                                                "span",
                                                [
                                                  _c(
                                                    "el-upload",
                                                    {
                                                      attrs: {
                                                        action: "",
                                                        "before-upload":
                                                          _vm.beforeAddUploadProblemProImg
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "el-button",
                                                        {
                                                          attrs: {
                                                            size: "small",
                                                            type: "primary"
                                                          }
                                                        },
                                                        [_vm._v("点击上传")]
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              )
                                            : _c(
                                                "span",
                                                [
                                                  _c("img", {
                                                    attrs: {
                                                      src: scope.row[item.prop]
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c(
                                                    "el-upload",
                                                    {
                                                      staticClass: "chgDiv",
                                                      attrs: {
                                                        action: "",
                                                        "before-upload":
                                                          _vm.beforeUpload
                                                      }
                                                    },
                                                    [
                                                      _c("el-button", {
                                                        directives: [
                                                          {
                                                            name: "show",
                                                            rawName: "v-show",
                                                            value:
                                                              _vm.tableChgBtn ==
                                                              "show" +
                                                                scope.$index,
                                                            expression:
                                                              "tableChgBtn=='show'+scope.$index"
                                                          }
                                                        ],
                                                        staticClass: "chg",
                                                        attrs: {
                                                          type: "primary",
                                                          icon: "el-icon-edit",
                                                          size: "mini"
                                                        }
                                                      })
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              )
                                        ])
                                      : _c(
                                          "span",
                                          [
                                            _c("el-input", {
                                              attrs: {
                                                size: "small",
                                                placeholder: item.holder
                                              },
                                              model: {
                                                value: scope.row[item.prop],
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    scope.row,
                                                    item.prop,
                                                    typeof $$v === "string"
                                                      ? $$v.trim()
                                                      : $$v
                                                  )
                                                },
                                                expression:
                                                  "scope.row[item.prop]"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                  ])
                                : _c("span", [
                                    item.type == "select"
                                      ? _c("span", [
                                          scope.row[item.prop] == ""
                                            ? _c("span")
                                            : _c(
                                                "span",
                                                _vm._l(
                                                  _vm.resData[item.stateVal],
                                                  function(list, index) {
                                                    return _c(
                                                      "span",
                                                      { key: index },
                                                      [
                                                        list.id ==
                                                        scope.row[item.prop]
                                                          ? _c("span", [
                                                              _vm._v(
                                                                "\n                                            " +
                                                                  _vm._s(
                                                                    list.name
                                                                  ) +
                                                                  "\n                                        "
                                                              )
                                                            ])
                                                          : _vm._e()
                                                      ]
                                                    )
                                                  }
                                                ),
                                                0
                                              )
                                        ])
                                      : item.type == "checkbox"
                                      ? _c(
                                          "span",
                                          [
                                            _c("el-checkbox", {
                                              attrs: { disabled: "" },
                                              model: {
                                                value: scope.row[item.prop],
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    scope.row,
                                                    item.prop,
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "scope.row[item.prop]"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      : item.type == "img"
                                      ? _c("span", [
                                          _c("img", {
                                            attrs: {
                                              src: scope.row[item.prop],
                                              alt: ""
                                            }
                                          })
                                        ])
                                      : _c("span", [
                                          _vm._v(
                                            "\n                                " +
                                              _vm._s(scope.row[item.prop]) +
                                              "\n                            "
                                          )
                                        ])
                                  ])
                            ]
                          }
                        }
                      ],
                      null,
                      true
                    )
                  })
                }),
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "dialog-footer clearfix",
              attrs: { slot: "footer" },
              slot: "footer"
            },
            [
              _c(
                "div",
                { staticStyle: { float: "left" } },
                [
                  _vm.addActiveName == "0"
                    ? _c(
                        "el-button",
                        {
                          attrs: { type: "primary" },
                          on: { click: _vm.addProDtl }
                        },
                        [_vm._v("添加商品")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.addActiveName == "2"
                    ? _c(
                        "el-button",
                        {
                          attrs: { type: "primary" },
                          on: { click: _vm.addExpenseLine }
                        },
                        [_vm._v("新增行")]
                      )
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticStyle: { float: "right" } },
                [
                  _c(
                    "el-button",
                    {
                      attrs: { type: "primary" },
                      on: { click: _vm.addCustomerConfirm }
                    },
                    [_vm._v("确定")]
                  ),
                  _vm._v(" "),
                  _c("el-button", { on: { click: _vm.addCustomerCancel } }, [
                    _vm._v("取消")
                  ])
                ],
                1
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-dialog",
        {
          staticClass: "bigDialog",
          class: { "more-forms": _vm.moreForms, threeParts: _vm.threeParts },
          attrs: { title: "修改明细", visible: _vm.updateCustomerMask },
          on: {
            "update:visible": function($event) {
              _vm.updateCustomerMask = $event
            }
          }
        },
        [
          _c(
            "div",
            { staticClass: "clearfix" },
            [
              _c(
                "el-button",
                { staticStyle: { float: "left" }, attrs: { type: "text" } },
                [_vm._v("基础信息")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form",
            {
              staticClass: "customerAddForm",
              attrs: {
                model: _vm.updateCustomerFormVal,
                rules: _vm.addCustomerFormRules,
                id: "form"
              }
            },
            _vm._l(_vm.addCustomerFormHead, function(item, index) {
              return _c(
                "el-form-item",
                { key: index, attrs: { label: item.label, prop: item.prop } },
                [
                  item.type == "text"
                    ? _c("span", [
                        item.inProp
                          ? _c(
                              "span",
                              [
                                _c("el-input", {
                                  attrs: {
                                    placeholder: item.holder,
                                    disabled: item.addChgAble
                                  },
                                  model: {
                                    value:
                                      _vm.updateCustomerFormVal[item.prop][
                                        item.inProp
                                      ],
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.updateCustomerFormVal[item.prop],
                                        item.inProp,
                                        typeof $$v === "string"
                                          ? $$v.trim()
                                          : $$v
                                      )
                                    },
                                    expression:
                                      "updateCustomerFormVal[item.prop][item.inProp]"
                                  }
                                })
                              ],
                              1
                            )
                          : _c(
                              "span",
                              [
                                _c("el-input", {
                                  attrs: {
                                    placeholder: item.holder,
                                    disabled: item.addChgAble
                                  },
                                  model: {
                                    value: _vm.updateCustomerFormVal[item.prop],
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.updateCustomerFormVal,
                                        item.prop,
                                        typeof $$v === "string"
                                          ? $$v.trim()
                                          : $$v
                                      )
                                    },
                                    expression:
                                      "updateCustomerFormVal[item.prop]"
                                  }
                                })
                              ],
                              1
                            )
                      ])
                    : item.type == "number"
                    ? _c("span", [
                        item.prop == "deliver_goods_fee" ||
                        item.prop == "move_upstairs_fee" ||
                        item.prop == "installation_fee"
                          ? _c(
                              "span",
                              [
                                _c("el-input", {
                                  attrs: {
                                    type: "number",
                                    placeholder: item.holder,
                                    disabled: item.addChgAble
                                  },
                                  on: { input: _vm.formChg },
                                  model: {
                                    value: _vm.updateCustomerFormVal[item.prop],
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.updateCustomerFormVal,
                                        item.prop,
                                        typeof $$v === "string"
                                          ? $$v.trim()
                                          : $$v
                                      )
                                    },
                                    expression:
                                      "updateCustomerFormVal[item.prop]"
                                  }
                                })
                              ],
                              1
                            )
                          : _c(
                              "span",
                              [
                                _c("el-input", {
                                  attrs: {
                                    type: "number",
                                    placeholder: item.holder,
                                    disabled: item.addChgAble
                                  },
                                  model: {
                                    value: _vm.updateCustomerFormVal[item.prop],
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.updateCustomerFormVal,
                                        item.prop,
                                        typeof $$v === "string"
                                          ? $$v.trim()
                                          : $$v
                                      )
                                    },
                                    expression:
                                      "updateCustomerFormVal[item.prop]"
                                  }
                                })
                              ],
                              1
                            )
                      ])
                    : item.type == "select"
                    ? _c(
                        "span",
                        [
                          _c(
                            "el-select",
                            {
                              attrs: {
                                placeholder: item.holder,
                                disabled: item.addChgAble
                              },
                              model: {
                                value: _vm.updateCustomerFormVal[item.prop],
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.updateCustomerFormVal,
                                    item.prop,
                                    $$v
                                  )
                                },
                                expression: "updateCustomerFormVal[item.prop]"
                              }
                            },
                            _vm._l(_vm.addSubData[item.stateVal], function(
                              list
                            ) {
                              return _c(
                                "span",
                                { key: list.id },
                                [
                                  _c("el-option", {
                                    attrs: {
                                      label: list.name ? list.name : list.nick,
                                      value: list.id
                                    }
                                  })
                                ],
                                1
                              )
                            }),
                            0
                          )
                        ],
                        1
                      )
                    : item.type == "textarea"
                    ? _c(
                        "span",
                        [
                          _c("el-input", {
                            attrs: { type: "textarea", placehode: item.holder },
                            model: {
                              value: _vm.updateCustomerFormVal[item.prop],
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.updateCustomerFormVal,
                                  item.prop,
                                  typeof $$v === "string" ? $$v.trim() : $$v
                                )
                              },
                              expression: "updateCustomerFormVal[item.prop]"
                            }
                          })
                        ],
                        1
                      )
                    : item.type == "checkbox"
                    ? _c(
                        "span",
                        [
                          _c("el-checkbox", {
                            attrs: { disabled: item.chgAble },
                            model: {
                              value: _vm.updateCustomerFormVal[item.prop],
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.updateCustomerFormVal,
                                  item.prop,
                                  $$v
                                )
                              },
                              expression: "updateCustomerFormVal[item.prop]"
                            }
                          })
                        ],
                        1
                      )
                    : item.type == "radio"
                    ? _c(
                        "span",
                        [
                          _c(
                            "el-radio",
                            {
                              attrs: { label: "volume" },
                              model: {
                                value: _vm.updateCustomerFormVal[item.prop],
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.updateCustomerFormVal,
                                    item.prop,
                                    $$v
                                  )
                                },
                                expression: "updateCustomerFormVal[item.prop]"
                              }
                            },
                            [_vm._v(_vm._s(item.choiceName[0]))]
                          ),
                          _vm._v(" "),
                          _c(
                            "el-radio",
                            {
                              attrs: { label: "weight" },
                              model: {
                                value: _vm.updateCustomerFormVal[item.prop],
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.updateCustomerFormVal,
                                    item.prop,
                                    $$v
                                  )
                                },
                                expression: "updateCustomerFormVal[item.prop]"
                              }
                            },
                            [_vm._v(_vm._s(item.choiceName[1]))]
                          )
                        ],
                        1
                      )
                    : item.type == "DatePicker"
                    ? _c(
                        "span",
                        [
                          _c("el-date-picker", {
                            attrs: {
                              type: "date",
                              format: "yyyy-MM-dd",
                              "value-format": "yyyy-MM-dd",
                              placeholder: "选择日期"
                            },
                            model: {
                              value: _vm.updateCustomerFormVal[item.prop],
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.updateCustomerFormVal,
                                  item.prop,
                                  $$v
                                )
                              },
                              expression: "updateCustomerFormVal[item.prop]"
                            }
                          })
                        ],
                        1
                      )
                    : _vm._e()
                ]
              )
            }),
            1
          ),
          _vm._v(" "),
          _c(
            "el-tabs",
            {
              attrs: { id: "elTabs" },
              on: { "tab-click": _vm.addHandleClick },
              model: {
                value: _vm.updateActiveName,
                callback: function($$v) {
                  _vm.updateActiveName = $$v
                },
                expression: "updateActiveName"
              }
            },
            [
              _c(
                "el-tab-pane",
                { attrs: { label: "商品信息", name: "0" } },
                [
                  _c(
                    "el-table",
                    {
                      attrs: {
                        data: _vm.updateProData,
                        fit: "",
                        "row-class-name": _vm.addProRCName
                      },
                      on: { "row-click": _vm.addRefundReasonRowClick }
                    },
                    [
                      _vm._l(_vm.addHead[_vm.updateActiveName], function(item) {
                        return _c("el-table-column", {
                          key: item.label,
                          attrs: {
                            label: item.label,
                            align: "center",
                            width: item.width
                          },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "default",
                                fn: function(scope) {
                                  return [
                                    item.prop == "newData"
                                      ? _c("span", [
                                          _vm.refundReasonRowIndex ==
                                          "index" + scope.$index
                                            ? _c("span", [
                                                item.type == "number"
                                                  ? _c(
                                                      "span",
                                                      [
                                                        _c("el-input", {
                                                          attrs: {
                                                            size: "small",
                                                            type: "number",
                                                            placeholder:
                                                              item.holder
                                                          },
                                                          model: {
                                                            value:
                                                              scope.row[
                                                                item.prop
                                                              ][item.inProp],
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                scope.row[
                                                                  item.prop
                                                                ],
                                                                item.inProp,
                                                                typeof $$v ===
                                                                  "string"
                                                                  ? $$v.trim()
                                                                  : $$v
                                                              )
                                                            },
                                                            expression:
                                                              "scope.row[item.prop][item.inProp]"
                                                          }
                                                        })
                                                      ],
                                                      1
                                                    )
                                                  : item.type == "checkbox"
                                                  ? _c(
                                                      "span",
                                                      [
                                                        _c("el-checkbox", {
                                                          model: {
                                                            value:
                                                              scope.row[
                                                                item.prop
                                                              ][item.inProp],
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                scope.row[
                                                                  item.prop
                                                                ],
                                                                item.inProp,
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "scope.row[item.prop][item.inProp]"
                                                          }
                                                        })
                                                      ],
                                                      1
                                                    )
                                                  : _c(
                                                      "span",
                                                      [
                                                        _c("el-input", {
                                                          attrs: {
                                                            size: "small",
                                                            placeholder:
                                                              item.holder
                                                          },
                                                          model: {
                                                            value:
                                                              scope.row[
                                                                item.prop
                                                              ][item.inProp],
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                scope.row[
                                                                  item.prop
                                                                ],
                                                                item.inProp,
                                                                typeof $$v ===
                                                                  "string"
                                                                  ? $$v.trim()
                                                                  : $$v
                                                              )
                                                            },
                                                            expression:
                                                              "scope.row[item.prop][item.inProp]"
                                                          }
                                                        })
                                                      ],
                                                      1
                                                    )
                                              ])
                                            : _c("span", [
                                                item.type == "checkbox"
                                                  ? _c(
                                                      "span",
                                                      [
                                                        _c("el-checkbox", {
                                                          attrs: {
                                                            disabled: ""
                                                          },
                                                          model: {
                                                            value:
                                                              scope.row[
                                                                item.prop
                                                              ][item.inProp],
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                scope.row[
                                                                  item.prop
                                                                ],
                                                                item.inProp,
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "scope.row[item.prop][item.inProp]"
                                                          }
                                                        })
                                                      ],
                                                      1
                                                    )
                                                  : _c("span", [
                                                      _vm._v(
                                                        "\n                                        " +
                                                          _vm._s(
                                                            scope.row[
                                                              item.prop
                                                            ][item.inProp]
                                                          ) +
                                                          "\n                                    "
                                                      )
                                                    ])
                                              ])
                                        ])
                                      : item.prop
                                      ? _c("span", [
                                          item.type == "checkbox"
                                            ? _c(
                                                "span",
                                                [
                                                  _c("el-checkbox", {
                                                    attrs: { disabled: "" },
                                                    model: {
                                                      value:
                                                        scope.row[item.prop],
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          scope.row,
                                                          item.prop,
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "scope.row[item.prop]"
                                                    }
                                                  })
                                                ],
                                                1
                                              )
                                            : item.type == "img"
                                            ? _c(
                                                "span",
                                                [
                                                  _c(
                                                    "el-popover",
                                                    {
                                                      attrs: {
                                                        placement: "right",
                                                        trigger: "hover",
                                                        "popper-class":
                                                          "picture_detail"
                                                      }
                                                    },
                                                    [
                                                      _c("img", {
                                                        attrs: {
                                                          src:
                                                            scope.row[item.prop]
                                                        }
                                                      }),
                                                      _vm._v(" "),
                                                      _c("img", {
                                                        attrs: {
                                                          slot: "reference",
                                                          src:
                                                            scope.row[
                                                              item.prop
                                                            ],
                                                          alt:
                                                            scope.row[item.alt]
                                                        },
                                                        slot: "reference"
                                                      })
                                                    ]
                                                  )
                                                ],
                                                1
                                              )
                                            : _c("span", [
                                                _vm._v(
                                                  "\n                                    " +
                                                    _vm._s(
                                                      item.inProp
                                                        ? scope.row[item.prop][
                                                            item.inProp
                                                          ]
                                                        : scope.row[item.prop]
                                                    ) +
                                                    "\n                                "
                                                )
                                              ])
                                        ])
                                      : _vm._e()
                                  ]
                                }
                              }
                            ],
                            null,
                            true
                          )
                        })
                      }),
                      _vm._v(" "),
                      _c("el-table-column", {
                        attrs: { type: "expand", fixed: "left" },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(scope) {
                              return [
                                _c(
                                  "el-table",
                                  {
                                    attrs: {
                                      data: scope.row["productComp"],
                                      fit: ""
                                    }
                                  },
                                  _vm._l(_vm.proCompHead, function(item) {
                                    return _c("el-table-column", {
                                      key: item.label,
                                      attrs: {
                                        label: item.label,
                                        align: "center",
                                        width: item.width
                                      },
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "default",
                                            fn: function(scope) {
                                              return [
                                                item.prop
                                                  ? _c("span", [
                                                      item.type == "checkbox"
                                                        ? _c(
                                                            "span",
                                                            [
                                                              _c(
                                                                "el-checkbox",
                                                                {
                                                                  attrs: {
                                                                    disabled: ""
                                                                  },
                                                                  model: {
                                                                    value:
                                                                      scope.row[
                                                                        item
                                                                          .prop
                                                                      ],
                                                                    callback: function(
                                                                      $$v
                                                                    ) {
                                                                      _vm.$set(
                                                                        scope.row,
                                                                        item.prop,
                                                                        $$v
                                                                      )
                                                                    },
                                                                    expression:
                                                                      "scope.row[item.prop]"
                                                                  }
                                                                }
                                                              )
                                                            ],
                                                            1
                                                          )
                                                        : item.type == "img"
                                                        ? _c(
                                                            "span",
                                                            [
                                                              _c(
                                                                "el-popover",
                                                                {
                                                                  attrs: {
                                                                    placement:
                                                                      "right",
                                                                    trigger:
                                                                      "hover",
                                                                    "popper-class":
                                                                      "picture_detail"
                                                                  }
                                                                },
                                                                [
                                                                  _c("img", {
                                                                    attrs: {
                                                                      src:
                                                                        scope
                                                                          .row[
                                                                          item
                                                                            .prop
                                                                        ]
                                                                    }
                                                                  }),
                                                                  _vm._v(" "),
                                                                  _c("img", {
                                                                    attrs: {
                                                                      slot:
                                                                        "reference",
                                                                      src:
                                                                        scope
                                                                          .row[
                                                                          item
                                                                            .prop
                                                                        ],
                                                                      alt:
                                                                        scope
                                                                          .row[
                                                                          item
                                                                            .alt
                                                                        ]
                                                                    },
                                                                    slot:
                                                                      "reference"
                                                                  })
                                                                ]
                                                              )
                                                            ],
                                                            1
                                                          )
                                                        : _c("span", [
                                                            _vm._v(
                                                              "\n                                                " +
                                                                _vm._s(
                                                                  item.inProp
                                                                    ? scope.row[
                                                                        item
                                                                          .prop
                                                                      ][
                                                                        item
                                                                          .inProp
                                                                      ]
                                                                    : scope.row[
                                                                        item
                                                                          .prop
                                                                      ]
                                                                ) +
                                                                "\n                                            "
                                                            )
                                                          ])
                                                    ])
                                                  : _vm._e()
                                              ]
                                            }
                                          }
                                        ],
                                        null,
                                        true
                                      )
                                    })
                                  }),
                                  1
                                )
                              ]
                            }
                          }
                        ])
                      }),
                      _vm._v(" "),
                      _c("el-table-column", {
                        attrs: {
                          label: "操作",
                          width: "90",
                          align: "center",
                          fixed: "right"
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(scope) {
                              return [
                                _c(
                                  "el-button",
                                  {
                                    attrs: { size: "mini", type: "danger" },
                                    on: {
                                      click: function($event) {
                                        return _vm.updateDelPro(
                                          scope.row,
                                          scope.$index
                                        )
                                      }
                                    }
                                  },
                                  [_vm._v("删除")]
                                )
                              ]
                            }
                          }
                        ])
                      })
                    ],
                    2
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-tab-pane",
                { attrs: { label: "收货信息", name: "1" } },
                [
                  _c(
                    "el-form",
                    {
                      staticClass: "half",
                      attrs: { model: _vm.updateReceiveInfo }
                    },
                    _vm._l(_vm.addHead[_vm.updateActiveName], function(
                      item,
                      index
                    ) {
                      return _c(
                        "el-form-item",
                        {
                          key: index,
                          attrs: { label: item.label, prop: item.label }
                        },
                        [
                          item.type == "number"
                            ? _c(
                                "span",
                                [
                                  _c("el-input", {
                                    attrs: {
                                      type: "number",
                                      placeholder: item.holder
                                    },
                                    model: {
                                      value: _vm.updateReceiveInfo[item.prop],
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.updateReceiveInfo,
                                          item.prop,
                                          typeof $$v === "string"
                                            ? $$v.trim()
                                            : $$v
                                        )
                                      },
                                      expression: "updateReceiveInfo[item.prop]"
                                    }
                                  })
                                ],
                                1
                              )
                            : item.type == "cascader"
                            ? _c(
                                "span",
                                [
                                  _c("el-cascader", {
                                    attrs: {
                                      size: "large",
                                      options: _vm.options
                                    },
                                    model: {
                                      value: _vm.updateReceiveInfo[item.prop],
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.updateReceiveInfo,
                                          item.prop,
                                          $$v
                                        )
                                      },
                                      expression: "updateReceiveInfo[item.prop]"
                                    }
                                  })
                                ],
                                1
                              )
                            : _c(
                                "span",
                                [
                                  _c("el-input", {
                                    attrs: { placeholder: item.holder },
                                    model: {
                                      value: _vm.updateReceiveInfo[item.prop],
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.updateReceiveInfo,
                                          item.prop,
                                          typeof $$v === "string"
                                            ? $$v.trim()
                                            : $$v
                                        )
                                      },
                                      expression: "updateReceiveInfo[item.prop]"
                                    }
                                  })
                                ],
                                1
                              )
                        ]
                      )
                    }),
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-tab-pane",
                { attrs: { label: "费用类型", name: "2" } },
                [
                  _c(
                    "el-table",
                    {
                      attrs: {
                        data: _vm.updateExpenseData,
                        fit: "",
                        "row-class-name": _vm.addExpenseRCName
                      },
                      on: { "row-click": _vm.addExpenseRClick }
                    },
                    [
                      _vm._l(_vm.addHead[_vm.updateActiveName], function(item) {
                        return _c("el-table-column", {
                          key: item.label,
                          attrs: {
                            label: item.label,
                            align: "center",
                            width: item.width
                          }
                        })
                      }),
                      _vm._v(" "),
                      _c("el-table-column", {
                        attrs: {
                          label: "操作",
                          width: "90",
                          align: "center",
                          fixed: "right"
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(scope) {
                              return [
                                _c(
                                  "el-button",
                                  {
                                    attrs: { size: "mini", type: "danger" },
                                    on: {
                                      click: function($event) {
                                        return _vm.updateDelExpense(
                                          scope.row,
                                          scope.$index
                                        )
                                      }
                                    }
                                  },
                                  [_vm._v("删除")]
                                )
                              ]
                            }
                          }
                        ])
                      })
                    ],
                    2
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "dialog-footer clearfix",
              attrs: { slot: "footer" },
              slot: "footer"
            },
            [
              _c(
                "div",
                { staticStyle: { float: "left" } },
                [
                  _vm.updateActiveName == "0"
                    ? _c(
                        "el-button",
                        {
                          attrs: { type: "primary" },
                          on: { click: _vm.addProDtl }
                        },
                        [_vm._v("添加商品")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.updateActiveName == "2"
                    ? _c(
                        "el-button",
                        {
                          attrs: { type: "primary" },
                          on: { click: _vm.addExpenseLine }
                        },
                        [_vm._v("新增行")]
                      )
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticStyle: { float: "right" } },
                [
                  _c(
                    "el-button",
                    {
                      attrs: { type: "primary" },
                      on: { click: _vm.updateCustomerConfirm }
                    },
                    [_vm._v("确定")]
                  ),
                  _vm._v(" "),
                  _c("el-button", { on: { click: _vm.updateCustomerCancel } }, [
                    _vm._v("取消")
                  ])
                ],
                1
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-popover",
        {
          attrs: { slot: "tip", placement: "top", width: "160" },
          slot: "tip",
          model: {
            value: _vm.showDel,
            callback: function($$v) {
              _vm.showDel = $$v
            },
            expression: "showDel"
          }
        },
        [
          _c("p", [_vm._v("确定删除该条数据？")]),
          _vm._v(" "),
          _c(
            "div",
            { staticStyle: { "text-align": "right", margin: "0" } },
            [
              _c(
                "el-button",
                {
                  attrs: { size: "mini", type: "text" },
                  on: { click: _vm.cancelD }
                },
                [_vm._v("取消")]
              ),
              _vm._v(" "),
              _c(
                "el-button",
                {
                  attrs: { type: "primary", size: "mini" },
                  on: {
                    click: function($event) {
                      return _vm.confirmD(_vm.delUrl, _vm.delId)
                    }
                  }
                },
                [_vm._v("确定")]
              )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _vm.activeName == "0"
        ? _c("Pagination", {
            attrs: { "page-url": this.urls.customerservicedepts },
            on: { handlePagChg: _vm.handlePagChg }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-38f0efbb", module.exports)
  }
}

/***/ })

});