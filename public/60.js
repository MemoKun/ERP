webpackJsonp([60],{

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(600)
/* template */
var __vue_template__ = __webpack_require__(601)
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
Component.options.__file = "resources/assets/js/views/order/orderChanges.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2451e4a9", Component.options)
  } else {
    hotAPI.reload("data-v-2451e4a9", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_element_china_area_data__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_element_china_area_data___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_element_china_area_data__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    var _ref;

    return _ref = {
      newOpt: [{
        cnt: "增加",
        icon: "bf-add",
        ent: this.addChanges,
        ref: "add"
      }, {
        cnt: "修改",
        icon: "bf-change",
        ent: this.updateChanges,
        nClick: false
      }, {
        cnt: "删除",
        icon: "bf-del",
        ent: this.deleteChanges,
        nClick: false
      }, {
        cnt: "提交",
        icon: "bf-submit",
        ent: this.submitChanges,
        nClick: false
      }, {
        cnt: "审核",
        icon: "bf-audit",
        ent: this.handleAudit,
        nClick: false
      }, {
        cnt: "退审",
        icon: "bf-auditfaild",
        ent: this.handleUnAudit,
        nClick: false
      }, {
        cnt: "作废",
        icon: "bf-void",
        ent: this.test,
        nClick: false
      }, {
        cnt: "刷新",
        icon: "bf-refresh",
        ent: this.refresh
      }],
      filterBox: false,
      loading: true, //loading标识
      searchBox: {
        change_order_no: "",
        vip_name: "",
        order_num: "",
        order_man: "",
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
        apply_man: ""
      },

      activeName: "0",
      activeName2: "0",

      orderListData: [],

      checkBoxInit: false, //checked 属性l
      changeOrderListHead: [
      // 后端再改inprop
      {
        label: "变更单号",
        width: "220",
        prop: "change_order_no",
        type: "text"
      }, {
        label: "订单号",
        width: "220",
        prop: "system_order_no",
        type: "text"
      }, {
        label: "申请人",
        width: "100",
        prop: "apply_name",
        type: "text"
      }, {
        label: "审核人",
        width: "100",
        prop: "audit_name",
        type: "text"
      }, {
        label: "状态",
        width: "100",
        prop: "change_state",
        type: "text"
      }, {
        label: "服务车金额",
        width: "100",
        prop: "service_car_fee",
        type: "number"
      }, {
        label: "服务车信息",
        width: "120",
        prop: "service_car_info",
        type: "text"
      },
      //这里需要时间戳转换
      {
        label: "创建时间",
        width: "100",
        prop: "created_at",
        type: "text"
      }, {
        label: "审核时间",
        width: "130",
        prop: "updated_at",
        type: "text"
      }, {
        label: "备注",
        width: "200",
        prop: "change_remark",
        type: "text"
      }, {
        label: "取消单号",
        width: "95",
        prop: "cancel_order_no",
        type: "text"
      }, {
        label: "全单取消",
        width: "95",
        prop: "cancel_all",
        type: "checkBox"
      }]
    }, _defineProperty(_ref, "orderListData", []), _defineProperty(_ref, "untreatedOrderListData", []), _defineProperty(_ref, "treatedOrderListData", []), _defineProperty(_ref, "canceledOrderListData", []), _defineProperty(_ref, "curRowId", ""), _defineProperty(_ref, "curRowData", {}), _defineProperty(_ref, "orderDtlHead", [
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
    }], [], []]), _defineProperty(_ref, "payDtlData", []), _defineProperty(_ref, "orderDtlFormVal", {}), _defineProperty(_ref, "orderDtlFormHead", [{
      label: "店铺昵称",
      width: "150",
      prop: "shop",
      //inProp: "title",
      type: "text"
    }, {
      label: "买家姓名",
      width: "130",
      prop: "buyer_name",
      type: "text"
    }, {
      label: "会员昵称",
      width: "130",
      prop: "member_nick",
      type: "text"
    }, {
      label: "业务员姓名",
      width: "140",
      prop: "user",
      //inProp: "username",
      type: "text"
    }, {
      label: "省",
      width: "120",
      prop: "receiver_state",
      type: "text"
    }, {
      label: "市",
      width: "120",
      prop: "receiver_city",
      type: "text"
    }, {
      label: "区",
      width: "120",
      prop: "receiver_district",
      type: "text"
    }, {
      label: "收货地址",
      width: "180",
      prop: "receiver_address",
      type: "text"
    }, {
      label: "固定电话",
      width: "180",
      prop: "receiver_phone",
      type: "text"
    }, {
      label: "手机号码",
      width: "180",
      prop: "receiver_mobile",
      type: "text"
    }, {
      label: "邮政编码",
      width: "180",
      prop: "receiver_zip",
      type: "text"
    }, {
      label: "接单用户",
      prop: "accept_order_user",
      holder: "请输入接单用户",
      type: "text"
    }, {
      label: "物流公司",
      prop: "logistics_id",
      holder: "请选择物流公司",
      type: "select",
      stateVal: "logistics"
    }, {
      label: "运费类型",
      prop: "freight_types_id",
      holder: "请选择运费类型",
      type: "select",
      stateVal: "freight_type"
    }, {
      label: "预计运费",
      prop: "expected_freight",
      holder: "请输入预计运费",
      type: "number"
    }, {
      label: "承诺日期",
      prop: "promise_ship_time",
      type: "DatePicker"
    }, {
      label: "配送公司",
      width: "130",
      prop: "distribution",
      //inProp: "name",
      type: "text"
    }, {
      label: "配送方式",
      width: "130",
      prop: "distributionMethod",
      //inProp: "name",
      type: "text"
    }, {
      label: "配送类型",
      width: "130",
      prop: "distributionType",
      //inProp: "name",
      type: "text"
    }, {
      label: "配送单号",
      width: "180",
      prop: "distribution_no",
      type: "text"
    }, {
      label: "送货费用",
      width: "120",
      prop: "deliver_goods_fee",
      type: "number"
    }, {
      label: "搬楼费用",
      width: "120",
      prop: "move_upstairs_fee",
      type: "number"
    }, {
      label: "安装费用",
      width: "120",
      prop: "installation_fee",
      type: "number"
    }, {
      label: "配送总计",
      width: "130",
      prop: "total_distribution_fee",
      type: "number"
    }, {
      label: "发货仓库",
      width: "130",
      prop: "warehouses",
      //inProp: "name",
      type: "text"
    }, {
      label: "代发工厂",
      width: "130",
      prop: "warehouses",
      //inProp: "name",
      type: "text"
    }, {
      label: "买家留言",
      width: "150",
      prop: "buyer_message",
      type: "textarea"
    }, {
      label: "客服备注",
      width: "150",
      prop: "customer_service_remark",
      type: "textarea"
    }, {
      label: "卖家备注",
      width: "150",
      prop: "customer_service_remark",
      type: "textarea"
    }]), _defineProperty(_ref, "addOrderChangesMask", false), _defineProperty(_ref, "moreForms", true), _defineProperty(_ref, "threeParts", true), _defineProperty(_ref, "addCustomerFormVal", {
      //作用未知
      shops_id: "",
      member_nick: "",
      logistics_id: "",
      billing_way: "",
      promise_ship_time: "",
      freight_types_id: "",
      expected_freight: "",
      distributions_id: "",
      distribution_methods_id: "",
      deliver_goods_fee: "",
      move_upstairs_fee: "",
      installation_fee: "",
      total_distribution_fee: 0,
      distribution_phone: "",
      distribution_no: "",
      distribution_types_id: "",
      service_car_info: "",
      take_delivery_goods_fee: "",
      take_delivery_goods_ways_id: "",
      express_fee: "",
      service_car_fee: "",
      cancel_after_verification_code: "",
      wooden_frame_costs: "",
      preferential_cashback: "",
      favorable_cashback: "",
      customer_types_id: "",
      is_invoice: false,
      invoice_express_fee: "",
      express_invoice_title: "",
      contract_no: "",
      payment_methods_id: "",
      deposit: "",
      document_title: "",
      warehouses_id: "",
      payment_date: "",
      interest_concessions: "",
      is_notice: false,
      is_cancel_after_verification: false,
      accept_order_user: "",
      tax_number: "",
      receipt: "",
      logistics_remark: "",
      seller_remark: "",
      customer_service_remark: "",
      buyer_message: "",
      status: true
    }), _defineProperty(_ref, "addCustomerFormRules", {
      //新建订单的要求格式
      shops_id: [{ required: true, message: "店铺必选", trigger: "blur" }],
      logistics_id: [{ required: true, message: " 物流必选", trigger: "blur" }],
      billing_way: [{ required: true, message: "计费方式必选", trigger: "blur" }],
      freight_types_id: [{ required: true, message: "运费类型必选", trigger: "blur" }],
      distributions_id: [{ required: true, message: "配送方式必选", trigger: "blur" }],
      take_delivery_goods_fee: [{ required: true, message: "提货费用必填", trigger: "blur" }],
      customer_types_id: [{ required: true, message: "客户类型必选", trigger: "blur" }],
      payment_methods_id: [{ required: true, message: "付款方式必选", trigger: "blur" }],
      warehouses_id: [{ required: true, message: "发货仓库必选", trigger: "blur" }]
    }), _defineProperty(_ref, "addCustomerFormHead", [
    //新建订单的文本框表头
    {
      label: "单据来源",
      prop: "order_source",
      holder: "系统自动生成",
      width: "200",
      type: "text",
      editChgAble: true,
      addChgAble: true
    }, {
      label: "单据编号",
      prop: "taobao_oid",
      holder: "系统自动生成",
      type: "text",
      editChgAble: true,
      addChgAble: true
    }, {
      label: "店铺名称",
      prop: "shops_id",
      holder: "请选择店铺",
      type: "select",
      stateVal: "shop",
      editChgAble: true
    }, {
      label: "会员昵称",
      prop: "member_nick",
      holder: "请输入会员昵称",
      type: "text"
    }, {
      label: "物流公司",
      prop: "logistics_id",
      holder: "请选择物流公司",
      type: "select",
      stateVal: "logistics"
    }, {
      label: "计费方式",
      choiceName: ["按体积", "按重量"],
      prop: "billing_way",
      type: "radio"
    }, {
      label: "承诺日期",
      prop: "promise_ship_time",
      type: "DatePicker"
    }, {
      label: "运费类型",
      prop: "freight_types_id",
      holder: "请选择运费类型",
      type: "select",
      stateVal: "freight_type"
    }, {
      label: "预计运费",
      prop: "expected_freight",
      holder: "请输入预计运费",
      type: "number"
    }, {
      label: "配送公司",
      prop: "distributions_id",
      holder: "请选择配送公司",
      type: "select",
      stateVal: "distribution"
    }, {
      label: "配送方式",
      prop: "distribution_methods_id",
      holder: "请选择配送方式",
      type: "select",
      stateVal: "distribution_method"
    }, {
      label: "送货费用",
      prop: "deliver_goods_fee",
      holder: "请输入送货费用",
      type: "number"
    }, {
      label: "搬楼费用",
      prop: "move_upstairs_fee",
      holder: "请输入搬楼费用",
      type: "number"
    }, {
      label: "安装费用",
      prop: "installation_fee",
      holder: "请输入安装费用",
      type: "number"
    }, {
      label: "配送总计",
      prop: "total_distribution_fee",
      holder: "请输入配送总计",
      type: "number",
      addChgAble: true
    }, {
      label: "配送电话",
      prop: "distribution_phone",
      holder: "请输入配送电话",
      type: "number"
    }, {
      label: "配送单号",
      prop: "distribution_no",
      holder: "请输入配送单号",
      type: "text"
    }, {
      label: "配送类型",
      prop: "distribution_types_id",
      holder: "请选择配送类型",
      type: "select",
      stateVal: "distribution_type"
    }, {
      label: "配送信息",
      prop: "service_car_info",
      holder: "请输入配送信息",
      type: "text"
    }, {
      label: "提货费用",
      prop: "take_delivery_goods_fee",
      holder: "请输入提货费用",
      type: "number"
    }, {
      label: "提货方式",
      prop: "take_delivery_goods_ways_id",
      holder: "请选择提货方式",
      type: "select",
      stateVal: "take_delivery_goodsWay"
    }, {
      label: "快递费用",
      prop: "express_fee",
      holder: "请输入快递费用",
      type: "number"
    }, {
      label: "家装服务",
      prop: "service_car_fee",
      holder: "请输入家装服务",
      type: "number"
    }, {
      label: "核销码",
      prop: "cancel_after_verification_code",
      holder: "请输入核销码",
      type: "text"
    }, {
      label: "木架费",
      prop: "wooden_frame_costs",
      holder: "请输入木架费",
      type: "number"
    }, {
      label: "优惠返现",
      prop: "preferential_cashback",
      holder: "请输入优惠返现",
      type: "number"
    }, {
      label: "好评返现",
      prop: "favorable_cashback",
      holder: "请输入好评返现",
      type: "number"
    }, {
      label: "客户类型",
      prop: "customer_types_id",
      holder: "请输入客户类型",
      type: "select",
      stateVal: "customer_type"
    }, {
      label: "发票",
      prop: "is_invoice",
      type: "checkbox"
    }, {
      label: "抬头",
      prop: "express_invoice_title",
      holder: "请输入发票抬头",
      type: "text"
    }, {
      label: "发票快递费",
      prop: "invoice_express_fee",
      holder: "请输入发票快递费",
      type: "number"
    }, {
      label: "合同单号",
      prop: "contract_no",
      holder: "请输入合同单号",
      type: "text"
    }, {
      label: "付款方式",
      prop: "payment_methods_id",
      holder: "请选择付款方式",
      type: "select",
      stateVal: "payment_method"
    }, {
      label: "门店定金",
      prop: "deposit",
      holder: "请输入门店定金",
      type: "number"
    }, {
      label: "单据头",
      prop: "document_title",
      holder: "请输入单据头",
      type: "text"
    }, {
      label: "发货仓库",
      holder: "请选择发货仓库",
      prop: "warehouses_id",
      type: "select",
      stateVal: "warehouse"
    }, {
      label: "收款日期",
      prop: "payment_date",
      type: "DatePicker"
    }, {
      label: "让利金额",
      prop: "interest_concessions",
      holder: "请输入让利金额",
      type: "number"
    }, {
      label: "等通知发货",
      prop: "is_notice",
      type: "checkbox"
    }, {
      label: "是否核销",
      prop: "is_cancel_after_verification",
      type: "checkbox"
    }, {
      label: "接单用户",
      prop: "accept_order_user",
      holder: "请输入接单用户",
      type: "text"
    }, {
      label: "税号",
      prop: "tax_number",
      holder: "请输入税号",
      type: "text"
    }, {
      label: "收据",
      prop: "receipt",
      holder: "请输入收据",
      type: "text"
    }, {
      label: "物流备注",
      prop: "logistics_remark",
      holder: "请输入物流备注",
      type: "textarea"
    }, {
      label: "卖家备注",
      holder: "请输入卖家备注",
      prop: "seller_remark",
      type: "textarea"
    }, {
      label: "客服备注",
      holder: "请输入客服备注",
      prop: "customer_service_remark",
      type: "textarea"
    }, {
      label: "买家留言",
      holder: "请输入买家留言",
      prop: "buyer_message",
      type: "textarea"
    }, {
      label: "开启订单",
      prop: "status",
      type: "checkbox"
    }]), _defineProperty(_ref, "addChangeOrderFormHead", [{
      label: "变更单号",
      holder: "系统自动生成",
      prop: "change_order_no",
      type: "text",
      editChgAble: true,
      addChgAble: true
    }, {
      label: "订单编码",
      holder: "系统自动填写订单编码",
      prop: "system_order_no",
      type: "text",
      editChgAble: true,
      addChgAble: true
    }, {
      label: "申请人",
      holder: "系统自动填写申请人",
      prop: "business_personnel_id",
      type: "text",
      editChgAble: true,
      addChgAble: true
    }, {
      label: "全单取消",
      prop: "is_canceled",
      type: "checkbox"
    }, {
      label: "备注",
      holder: "请输入备注",
      prop: "remark",
      type: "textarea"
    }, {
      label: "作废",
      prop: "is_trashed",
      type: "checkbox"
    }]), _defineProperty(_ref, "addChangeOrderFormVal", {
      change_order_no: "",
      system_order_no: "",
      business_personnel_id: "",
      is_canceled: "",
      remark: "",
      is_trashed: ""
    }), _defineProperty(_ref, "addChangeOrderFormRules", {
      //新建订单的要求格式
      system_order_no: [{ required: true, message: "系统单号必选", trigger: "blur" }]
    }), _defineProperty(_ref, "proDtlHead", [{
      label: "组合商品",
      holder: "请输入申请人",
      prop: "change_order_personnel_id",
      type: "text"
    }, {
      label: "规格图片",
      prop: "spec_img",
      type: "text"
    }, {
      label: "商品编码",
      holder: "请输入商品编码",
      prop: "commodity_code",
      type: "text"
    }, {
      label: "商品简称",
      holder: "请输入申请人",
      prop: "short_name",
      type: "text"
    }, {
      label: "规格编码",
      holder: "请输入申请人",
      prop: "spec_code",
      type: "text"
    }, {
      label: "规格名称",
      holder: "请输入申请人",
      prop: "spec_name",
      type: "text"
    }, {
      label: "数量",
      holder: "请输入数量",
      prop: "buy_number",
      type: "text"
    }, {
      label: "实际售价",
      holder: "请输入申请人",
      prop: "actual_price",
      type: "text"
    }, {
      label: "面料图片",
      holder: "请输入申请人",
      prop: "",
      type: "text"
    }, {
      label: "类型",
      holder: "请输入申请人",
      prop: "type",
      type: "text"
    }]), _defineProperty(_ref, "addActiveName", "0"), _defineProperty(_ref, "proData", []), _defineProperty(_ref, "options", __WEBPACK_IMPORTED_MODULE_0_element_china_area_data__["regionDataPlus"]), _defineProperty(_ref, "addHead", [[{
      label: "sku名称",
      width: "160",
      prop: "name",
      type: "text"
    }, {
      label: "数量",
      width: "130",
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
      label: "需要印刷",
      width: "120",
      prop: "newData",
      inProp: "is_printing",
      type: "checkbox"
    }, {
      label: "总体积",
      width: "120",
      prop: "newData",
      inProp: "total_volume",
      type: "number"
    }, {
      label: "印刷费用",
      width: "140",
      prop: "newData",
      inProp: "printing_fee",
      type: "number"
    }, {
      label: "现货",
      width: "120",
      prop: "newData",
      inProp: "is_spot_goods",
      type: "checkbox"
    }, {
      label: "单价(线下)",
      width: "150",
      prop: "newData",
      inProp: "under_line_univalent",
      type: "number"
    }, {
      label: "优惠(线下)",
      width: "150",
      prop: "newData",
      inProp: "under_line_preferential",
      type: "number"
    }], [{
      label: "姓名",
      prop: "receiver_name",
      holder: "请输入姓名",
      type: "text"
    }, {
      label: "固定电话",
      prop: "receiver_phone",
      holder: "请输入固定电话",
      type: "number"
    }, {
      label: "手机",
      prop: "receiver_mobile",
      holder: "请输入手机号码",
      type: "number"
    }, {
      label: "省市区",
      prop: "provinces",
      type: "cascader"
    }, {
      label: "地址",
      prop: "receiver_address",
      type: "text"
    }, {
      label: "邮编",
      prop: "receiver_zip",
      holder: "请输入邮编",
      type: "text"
    }], [{
      label: "类型名称",
      prop: "payment_methods_id",
      type: "select",
      stateVal: "fee_type"
    }, {
      label: "金额",
      prop: "payment",
      type: "number"
    }]]), _defineProperty(_ref, "proMask", false), _defineProperty(_ref, "proQuery", {
      commodity_code: "",
      component_code: "",
      shops_id: "",
      short_name: ""
    }), _defineProperty(_ref, "proHead", [{
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
    }]), _defineProperty(_ref, "proVal", []), _defineProperty(_ref, "toggleText", false), _defineProperty(_ref, "toggleHeight", true), _defineProperty(_ref, "clickFlag", false), _defineProperty(_ref, "proCurSkuData", {}), _defineProperty(_ref, "proSkuVal", []), _defineProperty(_ref, "proSkuHead", [{
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
    }]), _defineProperty(_ref, "proCompVal", []), _defineProperty(_ref, "proCompHead", [{
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
    }]), _defineProperty(_ref, "proDtlVal", {}), _defineProperty(_ref, "proCompRowIndex", ""), _defineProperty(_ref, "proSubmitData", []), _defineProperty(_ref, "proIds", []), _defineProperty(_ref, "addIds", []), _defineProperty(_ref, "proCompRow", {}), _defineProperty(_ref, "proRIndex", ""), _defineProperty(_ref, "receiveInfo", {
      receiver_name: "",
      receiver_phone: "",
      receiver_mobile: "",
      provinces: [],
      receiver_state: "",
      receiver_city: "",
      receiver_district: "",
      receiver_address: "",
      receiver_zip: ""
    }), _defineProperty(_ref, "halfForm", true), _defineProperty(_ref, "expenseData", []), _defineProperty(_ref, "expenseRIndex", ""), _defineProperty(_ref, "addSubData", []), _defineProperty(_ref, "updateCustomerMask", false), _defineProperty(_ref, "updateCustomerFormVal", {}), _defineProperty(_ref, "updateActiveName", "0"), _defineProperty(_ref, "updateProData", []), _defineProperty(_ref, "updateReceiveInfo", {}), _defineProperty(_ref, "updateExpenseData", []), _defineProperty(_ref, "updateProIds", []), _defineProperty(_ref, "showDel", false), _defineProperty(_ref, "delUrl", ""), _defineProperty(_ref, "delId", ""), _defineProperty(_ref, "ids", []), _defineProperty(_ref, "splitMask", false), _defineProperty(_ref, "splitVal", []), _defineProperty(_ref, "splitHead", [{
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
    }]), _defineProperty(_ref, "splitRowIndex", ""), _defineProperty(_ref, "splitRow", {}), _defineProperty(_ref, "mergerIds", []), _ref;
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
    toogleShow: function toogleShow() {
      this.filterBox = !this.filterBox;
    },
    fetchData: function fetchData() {
      var _this = this;

      var index = this.activeName - 0;
      switch (index) {
        case 0:
          this.$fetch(this.urls.changeorders + "/searchnew", {
            include: "shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems.combination.productComponents,orderItems.product,businessPersonnel,locker,paymentDetails.paymentMethod,paymentDetails.order"
          }).then(function (res) {
            _this.loading = false;
            _this.orderListData = res.data;
            //this.orderDtlFormVal = res.data[0];
            var pg = res.meta.pagination;
            _this.$store.dispatch("currentPage", pg.current_page);
            _this.$store.commit("PER_PAGE", pg.per_page);
            _this.$store.commit("PAGE_TOTAL", pg.total);
            _this.$store.dispatch("paymentmethods", _this.urls.paymentmethods);
            _this.$fetch(_this.urls.changeorders + "/create").then(function (res) {
              _this.addSubData = res;
            }, function (err) {});
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
          this.$fetch(this.urls.changeorders + "/searchuntreated", {
            include: "shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems.combination.productComponents,orderItems.product,businessPersonnel,locker,paymentDetails.paymentMethod,paymentDetails.order"
          }).then(function (res) {
            _this.loading = false;
            _this.untreatedOrderListData = res.data;
            var pg = res.meta.pagination;
            _this.$store.dispatch("currentPage", pg.current_page);
            _this.$store.commit("PER_PAGE", pg.per_page);
            _this.$store.commit("PAGE_TOTAL", pg.total);
            _this.$store.dispatch("paymentmethods", _this.urls.paymentmethods);
            _this.$fetch(_this.urls.changeorders + "/create").then(function (res) {
              _this.addSubData = res;
            }, function (err) {});
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
        case 2:
          this.$fetch(this.urls.changeorders + "/searchtreated", {
            include: "shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems.combination.productComponents,orderItems.product,businessPersonnel,locker,paymentDetails.paymentMethod,paymentDetails.order"
          }).then(function (res) {
            _this.loading = false;
            _this.treatedOrderListData = res.data;
            var pg = res.meta.pagination;
            _this.$store.dispatch("currentPage", pg.current_page);
            _this.$store.commit("PER_PAGE", pg.per_page);
            _this.$store.commit("PAGE_TOTAL", pg.total);
            _this.$store.dispatch("paymentmethods", _this.urls.paymentmethods);
            _this.$fetch(_this.urls.changeorders + "/create").then(function (res) {
              _this.addSubData = res;
            }, function (err) {});
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
        case 3:
          this.$fetch(this.urls.changeorders + "/searchcanceled", {
            include: "shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems.combination.productComponents,orderItems.product,businessPersonnel,locker,paymentDetails.paymentMethod,paymentDetails.order"
          }).then(function (res) {
            _this.loading = false;
            _this.canceledOrderListData = res.data;
            var pg = res.meta.pagination;
            _this.$store.dispatch("currentPage", pg.current_page);
            _this.$store.commit("PER_PAGE", pg.per_page);
            _this.$store.commit("PAGE_TOTAL", pg.total);
            _this.$store.dispatch("paymentmethods", _this.urls.paymentmethods);
            _this.$fetch(_this.urls.changeorders + "/create").then(function (res) {
              _this.addSubData = res;
            }, function (err) {});
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
      }
    },
    test: function test() {
      console.log(1);
    },
    refresh: function refresh() {
      this.loading = true;
      this.fetchData();
    },
    addOrderRowCName: function addOrderRowCName(_ref2) {
      var row = _ref2.row,
          rowIndex = _ref2.rowIndex;

      row.index = rowIndex;
    },
    addOrderRowClick: function addOrderRowClick(row) {
      this.splitRowIndex = "index" + row.index;
      this.splitRow = row;
    },

    /*页码*/
    handlePagChg: function handlePagChg(page) {
      var _this2 = this;

      this.$fetch(this.urls.changeorders + "?page=" + page, {
        include: "shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems.combination.productComponents,orderItems.product,businessPersonnel,locker,paymentDetails.paymentMethod,paymentDetails.order"
      }).then(function (res) {
        var index = _this2.activeName - 0;
        switch (index) {
          case 0:
            _this2.orderListData = res.data;
            break;
          case 1:
            _this2.untreatedOrderListData = res.data;
            break;
          case 2:
            _this2.treatedOrderListData = res.data;
            break;
          case 3:
            _this2.canceledOrderListData = rew.data;
            break;
        }
      });
    },
    firstHandleClick: function firstHandleClick() {
      this.loading = true;
      this.fetchData();
    },
    secondHandleClick: function secondHandleClick() {
      var index = this.activeName2 - 0;
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
    orderListRClick: function orderListRClick(row) {
      console.log("orderListRClic");
      /**if (row["locker_id"] == 0) {
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
      }**/
      this.curRowId = row.id;
      this.curRowData = row;
    },
    addChanges: function addChanges() {
      console.log("addChanges");
      this.addOrderChangesMask = true;
      this.addIds = [];
      this.proData = [];
      this.proRIndex = "";
    },
    updateChanges: function updateChanges() {
      console.log("updateChanges");
    },
    deleteChanges: function deleteChanges() {
      console.log("deleteChanges");
    },
    submitChanges: function submitChanges() {
      var _this3 = this;

      if (this.newOpt[4].nClick) {
        return;
      } else {
        var id = this.checkboxId ? this.checkboxId : this.curRowId;
        this.$put(this.urls.changeorders + "/" + id + "/submit").then(function () {
          // this.newOpt[1].nClick = true;
          _this3.refresh();
          _this3.$message({
            message: "提交成功",
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
            _this3.$message.error(str);
          }
        });
      }
    },
    handleAudit: function handleAudit() {
      var _this4 = this;

      console.log("handleAudit");
      if (this.newOpt[4].nClick) {
        return;
      } else {
        var id = this.checkboxId ? this.checkboxId : this.curRowId;
        this.$put(this.urls.changeorders + "/" + id + "/audit").then(function () {
          // this.newOpt[1].nClick = true;
          _this4.refresh();
          _this4.$message({
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
            _this4.$message.error(str);
          }
        });
      }
    },
    handleUnAudit: function handleUnAudit() {
      var _this5 = this;

      if (this.newOpt[6].nClick) {
        return;
      } else {
        var id = this.checkboxId ? this.checkboxId : this.curRowId;
        this.$put(this.urls.changeorders + "/" + id + "/unaudit").then(function () {
          _this5.refresh();
          _this5.$message({
            message: "退回提交成功",
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
            _this5.$message.error(str);
          }
        });
      }
    },
    formChg: function formChg() {
      var formVal = void 0;
      if (this.addCustomerMask) {
        formVal = this.addCustomerFormVal;
      } else {
        formVal = this.updateCustomerFormVal;
      }
      formVal["total_distribution_fee"] = formVal["deliver_goods_fee"] - 0 + (formVal["move_upstairs_fee"] - 0) + (formVal["installation_fee"] - 0);
      if (this.addCustomerMask) {
        this.addCustomerFormVal.total_distribution_fee = formVal["total_distribution_fee"];
      } else {
        this.updateCustomerFormVal.total_distribution_fee = formVal["total_distribution_fee"];
      }
    },
    addChangeOrderCancel: function addChangeOrderCancel() {
      this.addOrderChangesMask = false;
    },

    //批量删除操作
    handleSelectionChange: function handleSelectionChange(val) {
      console.log(val);
      //拿到当前id集合
      var delArr = [];
      val.forEach(function (seletedIem) {
        delArr.push(selecteItem.id);
      });
      console.log(+delArr);
      this.ids = delArr.join(",");
      console.log(delArr);
      //拿到当前id
      this.checkboxId = val.length > 0 ? val[val.length - 1].id : "";
      this.curRowData = val.length > 0 ? val[val.length - 1] : "";
      this.mergerIds = val;
    },
    resets: function resets() {
      this.searchBox = {};
    }
  },
  mounted: function mounted() {
    this.fetchData();
    // this.$store.state.opt.opts = this.newOpt;
    // this.$store.commit('change', this.newOpt);
    // const that = this;
    this.$store.dispatch("setOpt", this.newOpt);
    var that = this;
    $(window).resize(function () {
      return function () {
        // that.$store.state.opt.opts = that.newOpt;
        // that.$store.commit('change', that.newOpt);
        that.$store.dispatch("setOpt", that.newOpt);
      }();
    });
  }
});

/***/ }),

/***/ 601:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("div", { staticClass: "searchBox" }, [
        _c(
          "span",
          [
            _c("label", [_vm._v("变更单号")]),
            _vm._v(" "),
            _c("el-input", {
              model: {
                value: _vm.searchBox.change_order_no,
                callback: function($$v) {
                  _vm.$set(_vm.searchBox, "change_order_no", $$v)
                },
                expression: "searchBox.change_order_no"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "span",
          [
            _c("label", [_vm._v("订单号")]),
            _vm._v(" "),
            _c("el-input", {
              model: {
                value: _vm.searchBox.order_no,
                callback: function($$v) {
                  _vm.$set(_vm.searchBox, "order_no", $$v)
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
            _c("label", [_vm._v("会员名称")]),
            _vm._v(" "),
            _c("el-input", {
              model: {
                value: _vm.searchBox.vip_name,
                callback: function($$v) {
                  _vm.$set(_vm.searchBox, "vip_name", $$v)
                },
                expression: "searchBox.vip_name"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "span",
          [
            _c("label", [_vm._v("申请人")]),
            _vm._v(" "),
            _c("el-input", {
              model: {
                value: _vm.searchBox.apply_man,
                callback: function($$v) {
                  _vm.$set(_vm.searchBox, "apply_man", $$v)
                },
                expression: "searchBox.apply_man"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticStyle: { "text-align": "left" } },
          [
            _c("el-button", { attrs: { type: "primary" } }, [_vm._v("筛选")]),
            _vm._v(" "),
            _c("el-button", { on: { click: _vm.resets } }, [_vm._v("重置")])
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "el-tabs",
        {
          staticStyle: { height: "250px" },
          on: { "tab-click": _vm.firstHandleClick },
          model: {
            value: _vm.activeName,
            callback: function($$v) {
              _vm.activeName = $$v
            },
            expression: "activeName"
          }
        },
        [
          _c(
            "el-tab-pane",
            { attrs: { label: "新建", name: "0" } },
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
                  attrs: { data: _vm.orderListData, fit: "", height: "200" },
                  on: {
                    "selection-change": _vm.handleSelectionChange,
                    "row-click": _vm.orderListRClick,
                    "row-dbclick": _vm.orderListRClick
                  }
                },
                [
                  _c("el-table-column", {
                    attrs: {
                      type: "selection",
                      width: "95",
                      align: "center",
                      checked: _vm.checkBoxInit
                    }
                  }),
                  _vm._v(" "),
                  _vm._l(_vm.changeOrderListHead, function(item) {
                    return _c("el-table-column", {
                      key: item.label,
                      attrs: { label: item.label, width: item.width },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "default",
                            fn: function(scope) {
                              return [
                                item.type == "checkBox"
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
                                    ])
                                  : _c("span", [
                                      scope.row[item.prop]
                                        ? _c("span", [
                                            _vm._v(
                                              "\n                " +
                                                _vm._s(
                                                  item.inProp
                                                    ? scope.row[item.prop][
                                                        item.inProp
                                                      ]
                                                    : scope.row[item.prop]
                                                ) +
                                                "\n              "
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
            { attrs: { label: "待处理", name: "1" } },
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
                    data: _vm.untreatedOrderListData,
                    fit: "",
                    height: "200"
                  },
                  on: {
                    "selection-change": _vm.handleSelectionChange,
                    "row-click": _vm.orderListRClick,
                    "row-dbclick": _vm.orderListRClick
                  }
                },
                [
                  _c("el-table-column", {
                    attrs: {
                      type: "selection",
                      width: "95",
                      align: "center",
                      checked: _vm.checkBoxInit
                    }
                  }),
                  _vm._v(" "),
                  _vm._l(_vm.changeOrderListHead, function(item) {
                    return _c("el-table-column", {
                      key: item.label,
                      attrs: { label: item.label, width: item.width },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "default",
                            fn: function(scope) {
                              return [
                                item.type == "checkBox"
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
                                    ])
                                  : _c("span", [
                                      scope.row[item.prop]
                                        ? _c("span", [
                                            _vm._v(
                                              "\n                " +
                                                _vm._s(
                                                  item.inProp
                                                    ? scope.row[item.prop][
                                                        item.inProp
                                                      ]
                                                    : scope.row[item.prop]
                                                ) +
                                                "\n              "
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
            { attrs: { label: "已处理", name: "2" } },
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
                    data: _vm.treatedOrderListData,
                    fit: "",
                    height: "200"
                  },
                  on: {
                    "selection-change": _vm.handleSelectionChange,
                    "row-click": _vm.orderListRClick,
                    "row-dbclick": _vm.orderListRClick
                  }
                },
                [
                  _c("el-table-column", {
                    attrs: {
                      type: "selection",
                      width: "95",
                      align: "center",
                      checked: _vm.checkBoxInit
                    }
                  }),
                  _vm._v(" "),
                  _vm._l(_vm.changeOrderListHead, function(item) {
                    return _c("el-table-column", {
                      key: item.label,
                      attrs: { label: item.label, width: item.width },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "default",
                            fn: function(scope) {
                              return [
                                item.type == "checkBox"
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
                                    ])
                                  : _c("span", [
                                      scope.row[item.prop]
                                        ? _c("span", [
                                            _vm._v(
                                              "\n                " +
                                                _vm._s(
                                                  item.inProp
                                                    ? scope.row[item.prop][
                                                        item.inProp
                                                      ]
                                                    : scope.row[item.prop]
                                                ) +
                                                "\n              "
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
            { attrs: { label: "作废", name: "3" } },
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
                    data: _vm.canceledOrderListData,
                    fit: "",
                    height: "200"
                  },
                  on: {
                    "selection-change": _vm.handleSelectionChange,
                    "row-click": _vm.orderListRClick,
                    "row-dbclick": _vm.orderListRClick
                  }
                },
                [
                  _c("el-table-column", {
                    attrs: {
                      type: "selection",
                      width: "95",
                      align: "center",
                      checked: _vm.checkBoxInit
                    }
                  }),
                  _vm._v(" "),
                  _vm._l(_vm.changeOrderListHead, function(item) {
                    return _c("el-table-column", {
                      key: item.label,
                      attrs: { label: item.label, width: item.width },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "default",
                            fn: function(scope) {
                              return [
                                item.type == "checkBox"
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
                                    ])
                                  : _c("span", [
                                      scope.row[item.prop]
                                        ? _c("span", [
                                            _vm._v(
                                              "\n                " +
                                                _vm._s(
                                                  item.inProp
                                                    ? scope.row[item.prop][
                                                        item.inProp
                                                      ]
                                                    : scope.row[item.prop]
                                                ) +
                                                "\n              "
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
      _vm.activeName == "0"
        ? _c("Pagination", {
            attrs: { "page-url": this.urls.changeorders },
            on: { handlePagChg: _vm.handlePagChg }
          })
        : _vm._e(),
      _vm._v(" "),
      _c(
        "el-tabs",
        {
          on: { "tab-click": _vm.secondHandleClick },
          model: {
            value: _vm.activeName2,
            callback: function($$v) {
              _vm.activeName2 = $$v
            },
            expression: "activeName2"
          }
        },
        [
          _c("el-tab-pane", { attrs: { label: "变更明细", name: "0" } }),
          _vm._v(" "),
          _c("el-tab-pane", { attrs: { label: "变更订单主信息", name: "1" } }),
          _vm._v(" "),
          _c("el-tab-pane", { attrs: { label: "操作记录", name: "2" } })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-dialog",
        {
          staticClass: "bigDialog",
          class: { "more-forms": _vm.moreForms, threeParts: _vm.threeParts },
          attrs: { title: "订单明细变更", visible: _vm.addOrderChangesMask },
          on: {
            "update:visible": function($event) {
              _vm.addOrderChangesMask = $event
            }
          }
        },
        [
          _c("el-button", { attrs: { type: "text" } }, [_vm._v("基础信息")]),
          _vm._v(" "),
          _c(
            "el-form",
            {
              staticClass: "addChangeOrderForm",
              attrs: {
                model: _vm.addChangeOrderFormVal,
                rules: _vm.addChangeOrderFormRules,
                id: "form"
              }
            },
            _vm._l(_vm.addChangeOrderFormHead, function(item, index) {
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
                                      _vm.addChangeOrderFormVal[item.prop][
                                        item.inProp
                                      ],
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.addChangeOrderFormVal[item.prop],
                                        item.inProp,
                                        typeof $$v === "string"
                                          ? $$v.trim()
                                          : $$v
                                      )
                                    },
                                    expression:
                                      "addChangeOrderFormVal[item.prop][item.inProp]"
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
                                    value: _vm.addChangeOrderFormVal[item.prop],
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.addChangeOrderFormVal,
                                        item.prop,
                                        typeof $$v === "string"
                                          ? $$v.trim()
                                          : $$v
                                      )
                                    },
                                    expression:
                                      "addChangeOrderFormVal[item.prop]"
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
                                    value: _vm.addChangeOrderFormVal[item.prop],
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.addChangeOrderFormVal,
                                        item.prop,
                                        typeof $$v === "string"
                                          ? $$v.trim()
                                          : $$v
                                      )
                                    },
                                    expression:
                                      "addChangeOrderFormVal[item.prop]"
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
                                    value: _vm.addChangeOrderFormVal[item.prop],
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.addChangeOrderFormVal,
                                        item.prop,
                                        typeof $$v === "string"
                                          ? $$v.trim()
                                          : $$v
                                      )
                                    },
                                    expression:
                                      "addChangeOrderFormVal[item.prop]"
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
                                value: _vm.addChangeOrderFormVal[item.prop],
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.addChangeOrderFormVal,
                                    item.prop,
                                    $$v
                                  )
                                },
                                expression: "addChangeOrderFormVal[item.prop]"
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
                              value: _vm.addChangeOrderFormVal[item.prop],
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.addChangeOrderFormVal,
                                  item.prop,
                                  typeof $$v === "string" ? $$v.trim() : $$v
                                )
                              },
                              expression: "addChangeOrderFormVal[item.prop]"
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
                              value: _vm.addChangeOrderFormVal[item.prop],
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.addChangeOrderFormVal,
                                  item.prop,
                                  $$v
                                )
                              },
                              expression: "addChangeOrderFormVal[item.prop]"
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
                                value: _vm.addChangeOrderFormVal[item.prop],
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.addChangeOrderFormVal,
                                    item.prop,
                                    $$v
                                  )
                                },
                                expression: "addChangeOrderFormVal[item.prop]"
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
                                value: _vm.addChangeOrderFormVal[item.prop],
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.addChangeOrderFormVal,
                                    item.prop,
                                    $$v
                                  )
                                },
                                expression: "addChangeOrderFormVal[item.prop]"
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
                              value: _vm.addChangeOrderFormVal[item.prop],
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.addChangeOrderFormVal,
                                  item.prop,
                                  $$v
                                )
                              },
                              expression: "addChangeOrderFormVal[item.prop]"
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
            [
              _c(
                "el-tab-pane",
                { attrs: { label: "产品明细" } },
                [
                  _c(
                    "el-table",
                    {
                      attrs: {
                        data: _vm.proDtlVal,
                        fit: "",
                        height: "180",
                        "row-class-name": _vm.addOrderRowCName
                      },
                      on: { "row-click": _vm.addOrderRowClick }
                    },
                    _vm._l(_vm.proDtlHead, function(item) {
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
                                  item.type == "img"
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
                                        _vm._v(
                                          _vm._s(
                                            item.inProp
                                              ? scope.row[item.prop][
                                                  item.inProp
                                                ]
                                              : scope.row[item.prop]
                                          )
                                        )
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
                { attrs: { label: "订单信息" } },
                [
                  _c(
                    "el-form",
                    { attrs: { model: _vm.orderDtlFormVal } },
                    _vm._l(_vm.orderDtlFormHead, function(item, index) {
                      return _c(
                        "el-form-item",
                        {
                          key: index,
                          attrs: { label: item.label, prop: item.prop }
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
                                              _vm.orderDtlFormVal[item.prop][
                                                item.inProp
                                              ],
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.orderDtlFormVal[item.prop],
                                                item.inProp,
                                                typeof $$v === "string"
                                                  ? $$v.trim()
                                                  : $$v
                                              )
                                            },
                                            expression:
                                              "orderDtlFormVal[item.prop][item.inProp]"
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
                                              _vm.orderDtlFormVal[item.prop],
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.orderDtlFormVal,
                                                item.prop,
                                                typeof $$v === "string"
                                                  ? $$v.trim()
                                                  : $$v
                                              )
                                            },
                                            expression:
                                              "orderDtlFormVal[item.prop]"
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
                                              _vm.orderDtlFormVal[item.prop],
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.orderDtlFormVal,
                                                item.prop,
                                                typeof $$v === "string"
                                                  ? $$v.trim()
                                                  : $$v
                                              )
                                            },
                                            expression:
                                              "orderDtlFormVal[item.prop]"
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
                                              _vm.orderDtlFormVal[item.prop],
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.orderDtlFormVal,
                                                item.prop,
                                                typeof $$v === "string"
                                                  ? $$v.trim()
                                                  : $$v
                                              )
                                            },
                                            expression:
                                              "orderDtlFormVal[item.prop]"
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
                                        value: _vm.orderDtlFormVal[item.prop],
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.orderDtlFormVal,
                                            item.prop,
                                            $$v
                                          )
                                        },
                                        expression: "orderDtlFormVal[item.prop]"
                                      }
                                    },
                                    _vm._l(
                                      _vm.addSubData[item.stateVal],
                                      function(list) {
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
                                      }
                                    ),
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
                                      value: _vm.orderDtlFormVal[item.prop],
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.orderDtlFormVal,
                                          item.prop,
                                          typeof $$v === "string"
                                            ? $$v.trim()
                                            : $$v
                                        )
                                      },
                                      expression: "orderDtlFormVal[item.prop]"
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
                                      value: _vm.orderDtlFormVal[item.prop],
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.orderDtlFormVal,
                                          item.prop,
                                          $$v
                                        )
                                      },
                                      expression: "orderDtlFormVal[item.prop]"
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
                                        value: _vm.orderDtlFormVal[item.prop],
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.orderDtlFormVal,
                                            item.prop,
                                            $$v
                                          )
                                        },
                                        expression: "orderDtlFormVal[item.prop]"
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
                                        value: _vm.orderDtlFormVal[item.prop],
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.orderDtlFormVal,
                                            item.prop,
                                            $$v
                                          )
                                        },
                                        expression: "orderDtlFormVal[item.prop]"
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
                                      value: _vm.orderDtlFormVal[item.prop],
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.orderDtlFormVal,
                                          item.prop,
                                          $$v
                                        )
                                      },
                                      expression: "orderDtlFormVal[item.prop]"
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
              _c("el-tab-pane", { attrs: { label: "费用类型" } })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "dialog-footer",
              attrs: { slot: "footer" },
              slot: "footer"
            },
            [
              _c(
                "el-button",
                { attrs: { type: "primary" }, on: { click: _vm.test } },
                [_vm._v("确定")]
              ),
              _vm._v(" "),
              _c("el-button", { on: { click: _vm.addChangeOrderCancel } }, [
                _vm._v("关闭")
              ])
            ],
            1
          )
        ],
        1
      )
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
    require("vue-hot-reload-api")      .rerender("data-v-2451e4a9", module.exports)
  }
}

/***/ })

});