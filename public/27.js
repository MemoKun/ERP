webpackJsonp([27],{

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(562)
/* template */
var __vue_template__ = __webpack_require__(563)
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

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_element_china_area_data__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_element_china_area_data___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_element_china_area_data__);
var _methods;

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        cnt: "增加",
        icon: "bf-add",
        ent: this.addChanges,
        ref: "add",
        nClick: false
      }, {
        cnt: "修改",
        icon: "bf-change",
        ent: this.updateChanges,
        nClick: true
      }, {
        cnt: "删除",
        icon: "bf-del",
        ent: this.deleteChanges,
        nClick: true
      }, {
        cnt: "提交",
        icon: "bf-submit",
        ent: this.submitChanges,
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
        cnt: "作废",
        icon: "bf-void",
        ent: this.test,
        nClick: true
      }, {
        cnt: "刷新",
        icon: "bf-refresh",
        ent: this.refresh,
        nClick: false
      }],
      addTabActiveName: "0",
      middleActiveName: "0",
      bottomActiveName: "0",
      filterBox: false,
      loading: true, //loading标识
      checkBoxInit: false, //checked 属性l

      /**选择订单界面Dialog 订单列表*/
      chooseOrderMask: false,
      chooseOrderData: {},
      chooseOrderHead: [{
        label: "订单编号",
        width: "220",
        prop: "system_order_no",
        type: "text"
      }, {
        label: "淘宝单号",
        width: "220",
        prop: "taobao_oid",
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
        label: "收货人手机",
        prop: "receiver_mobile",
        type: "text"
      }, {
        label: "省",
        prop: "receiver_state",
        type: "text"
      }, {
        label: "市",
        prop: "receiver_city",
        type: "text"
      }, {
        label: "区",
        prop: "receiver_district",
        type: "text"
      }, {
        label: "代发供应商",
        prop: "suppliers_id",
        type: "text"
      }],
      /**选择订单界面Dialog 产品列表*/
      chooseOrderProListData: {},
      chooseOrderProListHead: [{
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
      }],

      searchBox: {
        change_order_no: "",
        member_nick: "",
        system_order_no: "",
        receiver_name: "",
        applier_id: ""
      },

      /**首页中间主要table 新建 */
      newOrderListData: [],
      untreatedOrderListData: [],
      treatedOrderListData: [],
      canceledOrderListData: [],
      middleTableHead: [
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
        prop: "applier",
        inProp: "username",
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
      }],

      curRowId: "",
      curRowData: {},
      payDtlData: [],
      addChangeOrderFormVal: {
        change_order_no: "",
        cancel_order_no: "",
        is_canceled: false,
        change_remark: "",
        change_status: 10,
        orders_id: 0,
        //-----变更订单与原始order分界线--------
        system_order_no: "",
        shops_id: 0,
        shops_name: "",
        logistics_id: 0,
        logistics_sn: "",
        billing_way: "",
        promise_ship_time: null,
        freight_types_id: 0,
        expected_freight: 0,
        actual_freight: 0,
        logistics_remark: "",
        is_logistics_checked: false,
        logistics_check_remark: "",
        logistics_checked_at: null,
        distributions_id: 0,
        distribution_methods_id: 0,
        deliver_goods_fee: 0,
        move_upstairs_fee: 0,
        installation_fee: 0,
        total_distribution_fee: 0,
        distribution_phone: "",
        distribution_no: "",
        distribution_types_id: 0,
        is_distribution_checked: false,
        distribution_check_remark: "",
        distribution_checked_at: null,
        service_car_fee: 0,
        service_car_info: "",
        take_delivery_goods_fee: 0,
        take_delivery_goods_ways_id: 0,
        express_fee: 0,
        cancel_after_verification_code: "",
        wooden_frame_costs: 0,
        preferential_cashback: 0,
        favorable_cashback: 0,
        customer_types_id: 0,
        is_invoice: false,
        invoice_express_fee: 0,
        express_invoice_title: "",
        contract_no: "",
        payment_methods_id: 0,
        deposit: 0,
        document_title: "",
        warehouses_id: 0,
        payment_date: null,
        interest_concessions: 0,
        is_notice: false,
        is_cancel_after_verification: false,
        accept_order_user: "",
        tax_number: "",
        receipt: "",
        buyer_message: "",
        seller_remark: "",
        customer_service_remark: "",
        stockout_remark: "",
        taobao_oid: 0,
        taobao_tid: 0,
        member_nick: "",
        seller_name: "",
        seller_flag: "",
        created: null,
        est_con_time: null,
        receiver_name: "",
        receiver_phone: "",
        receiver_mobile: "",
        receiver_state: "",
        receiver_city: "",
        receiver_district: "",
        receiver_address: "",
        receiver_zip: "",
        refund_info: "",
        business_personnel_id: 0,
        locker_id: 0,
        locked_at: null,
        auditor_id: 0,
        audit_at: null,
        cs_auditor_id: 0,
        cs_audited_at: null,
        fd_auditor_id: 0,
        fd_audited_at: null,
        ca_auditor_id: 0,
        ca_audited_at: null,
        stockout_op_id: 0,
        stockout_at: null,
        association_taobao_oid: 0,
        is_merge: false,
        is_split: false,
        is_association: false,
        status: true,
        order_items: [],
        payment_details: []
      },
      addDialogOrderDtlFormHead: [
      //新增会话框 下部订单信息formhead
      {
        label: "店铺名称",
        prop: "shops_id",
        holder: "请选择店铺",
        type: "select",
        stateVal: "shop",
        editChgAble: true
      }, {
        label: "买家姓名",
        width: "130",
        prop: "receiver_name",
        type: "text"
      }, {
        label: "会员昵称",
        width: "130",
        prop: "member_nick",
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
        label: "配送类型",
        prop: "distribution_types_id",
        holder: "请选择配送类型",
        type: "select",
        stateVal: "distribution_type"
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
        holder: "请选择发货仓库",
        prop: "warehouses_id",
        type: "select",
        stateVal: "warehouse"
      }, {
        label: "代发工厂",
        holder: "请选择代发工厂",
        prop: "warehouses_id",
        type: "select",
        stateVal: "warehouse"
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
      }],
      proSkuVal: [],
      /*新增*/
      addOrderChangesMask: false,
      moreForms: true,
      threeParts: true,
      addCustomerFormVal: {
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
      },
      addCustomerFormRules: {
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
      },

      addChangeOrderFormHead: [{
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
        prop: "applier_id",
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
      }],
      addChangeOrderFormRules: {
        //新建订单的要求格式
        system_order_no: [{ required: true, message: "系统单号必选", trigger: "blur" }]
      },
      proDtlHead: [{
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
      addActiveName: "0",
      proData: [],
      options: __WEBPACK_IMPORTED_MODULE_0_element_china_area_data__["regionDataPlus"],
      addHead: [[{
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
      }]],
      expenseHead: [{
        label: "类型名称",
        prop: "payment_methods_id",
        type: "select",
        stateVal: "fee_type"
      }, {
        label: "金额",
        prop: "payment",
        type: "number"
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
        prop: "img",
        type: "img"
      }, {
        label: "商品编码",
        prop: "commodity_code",
        type: "text"
      }, {
        label: "工厂型号",
        prop: "factory_model",
        type: "text"
      }, {
        label: "商品简称",
        prop: "short_name",
        type: "text"
      }, {
        label: "类别名称",
        prop: "goodsCategory",
        inProp: "name",
        type: "text"
      }, {
        label: "商品备注",
        prop: "remark",
        type: "text"
      }],
      proVal: [],
      toggleText: false,
      toggleHeight: true,
      clickFlag: false,
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
      submitData: {},
      proDtlVal: {},
      proCompRowIndex: "",
      proSubmitData: [],
      proIds: [],
      addIds: [],
      proCompRow: {},
      proRIndex: "",
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
      addChangeOrderProIds: [],
      /*删除单条*/
      showDel: false,
      delUrl: "",
      delId: "",

      /**底部变更明细*/
      changeDetails: {},
      changeDetailsHead: [{
        label: "组合商品",
        prop: "combinations",
        type: "checkbox"
      }, {
        label: "规格图片",
        prop: "spec_img",
        type: "img"
      }, {
        label: "商品编码",
        prop: "commodity_code",
        type: "text"
      }, {
        label: "商品简称",
        prop: "short_name",
        type: "text"
      }, {
        label: "规格名称",
        prop: "spec",
        type: "text"
      }, {
        label: "数量",
        prop: "quantity",
        type: "number"
      }, {
        label: "销售价格",
        prop: "price",
        type: "number"
      }, {
        label: "实际价格",
        prop: "actual_price",
        type: "number"
      }, {
        label: "类型",
        prop: "type",
        type: "text"
      }],
      changeOrdersMainInfo: {},
      changeOrdersMainInfoHead: [{
        label: "单据来源",
        prop: "order_source",
        width: "200",
        type: "text",
        editChgAble: true,
        addChgAble: true
      }, {
        label: "单据编号",
        prop: "taobao_oid",
        type: "text",
        editChgAble: true,
        addChgAble: true
      }, {
        label: "店铺名称",
        prop: "shops_id",
        holder: "请选择店铺",
        type: "text",
        editChgAble: true
      }, {
        label: "会员昵称",
        prop: "member_nick",
        holder: "请输入会员昵称",
        type: "text"
      }, {
        label: "业务员",
        prop: "business_personnel_name",
        type: "text"
      }, {
        label: "物流公司",
        prop: "logistics_id",
        holder: "请选择物流公司",
        type: "text"
      }, {
        label: "承诺日期",
        prop: "promise_ship_time",
        type: "text"
      }, {
        label: "预计运费",
        prop: "expected_freight",
        holder: "请输入预计运费",
        type: "number"
      }, {
        label: "运费类型",
        prop: "freight_types_id",
        holder: "请选择运费类型",
        type: "text"
      }, {
        label: "三包服务",
        prop: "sanbao_service",
        holder: "请选择运费类型",
        type: "text"
      }, {
        label: "三包类型",
        prop: "sanbao_type",
        holder: "请选择运费类型",
        type: "text"
      }, {
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
        type: "text"
      }, {
        label: "邮编",
        prop: "receiver_zip",
        holder: "请输入邮编",
        type: "text"
      }, {
        label: "地址",
        prop: "receiver_address",
        type: "text"
      }, {
        label: "配送方式",
        prop: "distribution_methods_id",
        type: "text"
      }, {
        label: "配送信息",
        prop: "service_car_info",
        type: "text"
      }, {
        label: "买家留言",
        prop: "buyer_message",
        type: "textarea",
        editChgAble: false,
        addChgAble: false
      }, {
        label: "卖家备注",
        prop: "seller_remark",
        type: "textarea",
        editChgAble: false,
        addChgAble: false
      }],
      operationData: {},
      operationHead: [{
        label: "用户",
        prop: "user",
        type: "text"
      }, {
        label: "操作",
        prop: "operation",
        type: "text"
      }, {
        label: "操作描述",
        prop: "operation_description",
        type: "text"
      }, {
        label: "创建时间",
        prop: "created_at",
        type: "text"
      }],
      //批量选择 批量删除
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
      chooseOrderRowIndex: "",
      chooseOrderRowId: "",
      mergerIds: [],
      orderItemListData: [],
      orderItemListHead: [{
        label: "系统单号",
        prop: "system_order_no",
        width: "220",
        type: "text"
      }, {
        label: "店铺名称",
        prop: "shops_id",
        width: "200",
        type: "text"
      }, {
        label: "订单金额",
        prop: "deposit",
        width: "200",
        type: "text"
      }, {
        label: "会员ID",
        prop: "member_nick",
        width: "200",
        type: "text"
      }],
      updateOrderChangesMask: false
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
        let searchRegex = new RegExp(this.searchBox.member_nick, 'i');
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
  methods: (_methods = {
    toogleShow: function toogleShow() {
      this.filterBox = !this.filterBox;
    },
    fetchData: function fetchData() {
      var _this = this;

      var index = this.middleActiveName - 0;
      switch (index) {
        case 0:
          this.$fetch(this.urls.changeorders + "/searchnew", {
            include: "shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems.combination.productComponents,orderItems.product,businessPersonnel,locker,paymentDetails.paymentMethod,paymentDetails.order,applier"
          }).then(function (res) {
            _this.loading = false;
            _this.newOrderListData = [];
            _this.newOrderListData = res.data;
            //this.addChangeOrderFormVal = res.data[0];
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
            include: "shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems.combination.productComponents,orderItems.product,businessPersonnel,locker,paymentDetails.paymentMethod,paymentDetails.order,applier"
          }).then(function (res) {
            _this.loading = false;
            _this.untreatedOrderListData = [];
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
            _this.treatedOrderListData = [];
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
            _this.canceledOrderListData = [];
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
    chooseOrderFetchData: function chooseOrderFetchData() {
      var _this2 = this;

      this.$fetch(this.urls.customerservicedepts + "/searchall", {
        include: "shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems.combination.productComponents,orderItems.product,businessPersonnel,locker,paymentDetails.paymentMethod,paymentDetails.order"
      }).then(function (res) {
        _this2.loading = false;
        _this2.chooseOrderData = res.data;
        var pg = res.meta.pagination;
        _this2.$store.dispatch("currentPage", pg.current_page);
        _this2.$store.commit("PER_PAGE", pg.per_page);
        _this2.$store.commit("PAGE_TOTAL", pg.total);
        _this2.$store.dispatch("paymentmethods", _this2.urls.paymentmethods);
        _this2.$fetch(_this2.urls.changeorders + "/create").then(function (res) {
          _this2.addSubData = res;
        }, function (err) {});
        data[5].orderItems.data[0].combination.productComponents.data[0];
      }, function (err) {
        if (err.response) {
          var arr = err.response.data.errors;
          var arr1 = [];
          for (var i in arr) {
            arr1.push(arr[i]);
          }
          _this2.$message.error(arr1.join(","));
        }
      });
    },
    test: function test() {
      console.log(1);
    },
    confirmAddProDtl: function confirmAddProDtl() {
      var _this3 = this;

      if (this.addOrderChangesMask) {
        this.proSubmitData.map(function (item) {
          if (_this3.addIds.indexOf(item.id) == -1) {
            _this3.proData.push(item);
            _this3.addIds.push(item.id);
            _this3.$message({
              message: "添加商品信息成功",
              type: "success"
            });
            _this3.proMask = false;
          } else {
            _this3.proData.map(function (list, index) {
              if (list.id == item.id) {
                _this3.proData.splice(index, 1);
                _this3.proData.push(item);
                _this3.$message({
                  message: "添加商品信息成功",
                  type: "success"
                });
                _this3.proMask = false;
              }
            });
          }
        });
      } else {
        this.proSubmitData.map(function (item) {
          if (_this3.updateProIds.indexOf(item.id) == -1) {
            _this3.updateProData.push(item);
            _this3.updateProIds.push(item.id);
            _this3.$message({
              message: "添加商品信息成功",
              type: "success"
            });
          } else {
            _this3.updateProData.map(function (list, index) {
              if (list.combinations_id == item.id) {
                _this3.$set(item, "originalId", list.id);
                _this3.updateProData.splice(index, 1);
                _this3.updateProData.push(item);
                _this3.$message({
                  message: "添加商品信息成功",
                  type: "success"
                });
              }
            });
          }
        });
      }
    },
    addProRCName: function addProRCName(_ref) {
      var row = _ref.row,
          rowIndex = _ref.rowIndex;

      row.index = rowIndex;
    },
    refresh: function refresh() {
      this.loading = true;
      this.fetchData();
    },
    addProRowClick: function addProRowClick(row) {
      this.proRIndex = "index" + row.index;
    },
    addAfterSProRowCName: function addAfterSProRowCName(_ref2) {
      var row = _ref2.row,
          rowIndex = _ref2.rowIndex;

      row.index = rowIndex;
    },
    addOrderRowCName: function addOrderRowCName(_ref3) {
      var row = _ref3.row,
          rowIndex = _ref3.rowIndex;

      row.index = rowIndex;
    },
    quantityChg: function quantityChg(value) {
      var _this4 = this;

      if (value > 0) {
        var proCRow = this.proCompRow;
        if (this.proIds.indexOf(proCRow.id) == -1) {
          this.proIds.push(proCRow.id);
          this.proSubmitData.push(proCRow);
        } else {
          this.proSubmitData.map(function (list, index) {
            if (list.id == proCRow.id) {
              _this4.proSubmitData.splice(index, 1);
              _this4.proSubmitData.push(proCRow);
            }
          });
        }
      }
    },
    chooseOrderRowClick: function chooseOrderRowClick(row) {
      var _this5 = this;

      this.chooseOrderRowIndex = "index" + row.index;
      this.chooseOrderRowId = row.id;
      this.chooseOrderProListData = [];
      this.proCompRowIndex = "";
      this.addChangeOrderProIds = [];

      this.$fetch(this.urls.customerservicedepts + "/" + this.chooseOrderRowId, {
        include: "shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems.combination.productComponents,orderItems.product,businessPersonnel,locker,paymentDetails"
      }).then(function (res) {
        _this5.addChangeOrderFormVal.orders_id = res["id"];
        //-----变更订单与原始order分界线--------
        _this5.addChangeOrderFormVal.system_order_no = res["system_order_no"];
        _this5.addChangeOrderFormVal.shops_id = res["shops_id"];
        _this5.addChangeOrderFormVal.shops_name = res["shops_name"];
        _this5.addChangeOrderFormVal.logistics_id = res["logistics_id"];
        _this5.addChangeOrderFormVal.logistics_sn = res["logistics_sn"];
        _this5.addChangeOrderFormVal.billing_way = res["billing_way"];
        _this5.addChangeOrderFormVal.promise_ship_time = res["promise_ship_time"];
        _this5.addChangeOrderFormVal.freight_types_id = res["freight_types_id"];
        _this5.addChangeOrderFormVal.expected_freight = res["expected_freight"];
        _this5.addChangeOrderFormVal.actual_freight = res["actual_freight"];
        _this5.addChangeOrderFormVal.logistics_remark = res["logistics_remark"];
        _this5.addChangeOrderFormVal.is_logistics_checked = res["is_logistics_checked"];
        _this5.addChangeOrderFormVal.logistics_check_remark = res["logistics_check_remark"];
        _this5.addChangeOrderFormVal.logistics_checked_at = res["logistics_checked_at"] ? res["logistics_checked_at"] : 0;
        _this5.addChangeOrderFormVal.distributions_id = res["distributions_id"];
        _this5.addChangeOrderFormVal.distribution_methods_id = res["distribution_methods_id"];
        _this5.addChangeOrderFormVal.deliver_goods_fee = res["deliver_goods_fee"];
        _this5.addChangeOrderFormVal.move_upstairs_fee = res["move_upstairs_fee"];
        _this5.addChangeOrderFormVal.installation_fee = res["installation_fee"];
        _this5.addChangeOrderFormVal.total_distribution_fee = res["total_distribution_fee"];
        _this5.addChangeOrderFormVal.distribution_phone = res["distribution_phone"];
        _this5.addChangeOrderFormVal.distribution_no = res["distribution_no"];
        _this5.addChangeOrderFormVal.distribution_types_id = res["distribution_types_id"];
        _this5.addChangeOrderFormVal.is_distribution_checked = res["is_distribution_checked"];
        _this5.addChangeOrderFormVal.distribution_check_remark = res["distribution_check_remark"];
        _this5.addChangeOrderFormVal.distribution_checked_at = res["distribution_checked_at"];
        _this5.addChangeOrderFormVal.service_car_fee = res["service_car_fee"];
        _this5.addChangeOrderFormVal.service_car_info = res["service_car_info"];
        _this5.addChangeOrderFormVal.take_delivery_goods_fee = res["take_delivery_goods_fee"];
        _this5.addChangeOrderFormVal.take_delivery_goods_ways_id = res["take_delivery_goods_ways_id"];
        _this5.addChangeOrderFormVal.express_fee = res["express_fee"];
        _this5.addChangeOrderFormVal.cancel_after_verification_code = res["cancel_after_verification_code"];
        _this5.addChangeOrderFormVal.wooden_frame_costs = res["wooden_frame_costs"];
        _this5.addChangeOrderFormVal.preferential_cashback = res["preferential_cashback"];
        _this5.addChangeOrderFormVal.favorable_cashback = res["favorable_cashback"];
        _this5.addChangeOrderFormVal.customer_types_id = res["customer_types_id"];
        _this5.addChangeOrderFormVal.is_invoice = res["is_invoice"];
        _this5.addChangeOrderFormVal.invoice_express_fee = res["invoice_express_fee"];
        _this5.addChangeOrderFormVal.express_invoice_title = res["express_invoice_title"];
        _this5.addChangeOrderFormVal.contract_no = res["contract_no"];
        _this5.addChangeOrderFormVal.payment_methods_id = res["payment_methods_id"];
        _this5.addChangeOrderFormVal.deposit = res["deposit"];
        _this5.addChangeOrderFormVal.document_title = res["document_title"];
        _this5.addChangeOrderFormVal.warehouses_id = res["warehouses_id"];
        _this5.addChangeOrderFormVal.payment_date = res["payment_date"];
        _this5.addChangeOrderFormVal.interest_concessions = res["interest_concessions"];
        _this5.addChangeOrderFormVal.is_notice = res["is_notice"];
        _this5.addChangeOrderFormVal.is_cancel_after_verification = res["is_cancel_after_verification"];
        _this5.addChangeOrderFormVal.accept_order_user = res["accept_order_user"];
        _this5.addChangeOrderFormVal.tax_number = res["tax_number"];
        _this5.addChangeOrderFormVal.receipt = res["receipt"];
        _this5.addChangeOrderFormVal.buyer_message = res["buyer_message"];
        _this5.addChangeOrderFormVal.seller_remark = res["seller_remark"];
        _this5.addChangeOrderFormVal.customer_service_remark = res["customer_service_remark"];
        _this5.addChangeOrderFormVal.stockout_remark = res["stockout_remark"];
        _this5.addChangeOrderFormVal.taobao_oid = res["taobao_oid"];
        _this5.addChangeOrderFormVal.taobao_tid = res["taobao_tid"];
        _this5.addChangeOrderFormVal.member_nick = res["member_nick"];
        _this5.addChangeOrderFormVal.seller_name = res["seller_name"];
        _this5.addChangeOrderFormVal.seller_flag = res["seller_flag"];
        _this5.addChangeOrderFormVal.created = res["created"];
        _this5.addChangeOrderFormVal.est_con_time = res["est_con_time"];
        _this5.addChangeOrderFormVal.receiver_name = res["receiver_name"];
        _this5.addChangeOrderFormVal.receiver_phone = res["receiver_phone"];
        _this5.addChangeOrderFormVal.receiver_mobile = res["receiver_mobile"];
        _this5.addChangeOrderFormVal.receiver_state = res["receiver_state"];
        _this5.addChangeOrderFormVal.receiver_city = res["receiver_city"];
        _this5.addChangeOrderFormVal.receiver_district = res["receiver_district"];
        _this5.addChangeOrderFormVal.receiver_address = res["receiver_address"];
        _this5.addChangeOrderFormVal.receiver_zip = res["receiver_zip"];
        _this5.addChangeOrderFormVal.refund_info = res["refund_info"];
        _this5.addChangeOrderFormVal.business_personnel_id = res["business_personnel_id"];
        _this5.addChangeOrderFormVal.locker_id = res["locker_id"];
        _this5.addChangeOrderFormVal.locked_at = res["locked_at"];
        _this5.addChangeOrderFormVal.auditor_id = res["auditor_id"];
        _this5.addChangeOrderFormVal.audit_at = res["audit_at"];
        _this5.addChangeOrderFormVal.cs_auditor_id = res["cs_auditor_id"];
        _this5.addChangeOrderFormVal.cs_audited_at = res["cs_audited_at"];
        _this5.addChangeOrderFormVal.fd_auditor_id = res["fd_auditor_id"];
        _this5.addChangeOrderFormVal.fd_audited_at = res["fd_audited_at"];
        _this5.addChangeOrderFormVal.ca_auditor_id = res["ca_auditor_id"];
        _this5.addChangeOrderFormVal.ca_audited_at = res["ca_audited_at"];
        _this5.addChangeOrderFormVal.stockout_op_id = res["stockout_op_id"];
        _this5.addChangeOrderFormVal.stockout_at = res["stockout_at"];
        _this5.addChangeOrderFormVal.association_taobao_oid = res["association_taobao_oid"];
        _this5.addChangeOrderFormVal.is_merge = res["is_merge"];
        _this5.addChangeOrderFormVal.is_split = res["is_split"];
        _this5.addChangeOrderFormVal.is_association = res["is_association"];

        if (res["orderItems"]["data"].length > 0) {
          res["orderItems"]["data"].map(function (item) {
            _this5.addChangeOrderProIds.push(item["combination"].id);
            item["name"] = item["combination"]["name"];
            item["id"] = item.id;
            item["products_id"] = item.products_id;
            item["combinations_id"] = item.combinations_id;
            item["productComp"] = item["combination"]["productComponents"]["data"];
            _this5.$set(item, "newData", {
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

        _this5.proData = res["orderItems"]["data"];
        _this5.chooseOrderProListData = res["orderItems"]["data"];
        _this5.expenseData = res["paymentDetails"]["data"];
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
    },
    addExpenseRClick: function addExpenseRClick(row) {
      this.expenseRIndex = "index" + row.index;
    },
    addExpenseRCName: function addExpenseRCName(_ref4) {
      var row = _ref4.row,
          rowIndex = _ref4.rowIndex;

      row.index = rowIndex;
    },
    proSkuRowClick: function proSkuRowClick(row) {
      this.proCompRowIndex = "index" + row.index;
      this.proCompRow = row;
    },

    /*新增行*/
    addExpenseLine: function addExpenseLine() {
      if (this.chooseOrderMask) {
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
    addDelExpense: function addDelExpense(index) {
      this.expenseData.splice(index, 1);
      this.$message({
        message: "删除成功",
        type: "success"
      });
    },
    proRowClick: function proRowClick(row) {
      var _this6 = this;

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
          _this6.$set(item, "newData", {
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
    proSkuCName: function proSkuCName(_ref5) {
      var row = _ref5.row,
          rowIndex = _ref5.rowIndex;

      row.index = rowIndex;
    }
  }, _defineProperty(_methods, "proSkuRowClick", function proSkuRowClick(row) {
    this.proCompRowIndex = "index" + row.index;
    this.proCompRow = row;
  }), _defineProperty(_methods, "addProRowClick", function addProRowClick(row) {
    this.proRIndex = "index" + row.index;
  }), _defineProperty(_methods, "addProRCName", function addProRCName(_ref6) {
    var row = _ref6.row,
        rowIndex = _ref6.rowIndex;

    row.index = rowIndex;
  }), _defineProperty(_methods, "addDelPro", function addDelPro(index) {
    this.proData.splice(index, 1);
  }), _defineProperty(_methods, "cancelAddProDtl", function cancelAddProDtl() {
    this.proMask = false;
  }), _defineProperty(_methods, "chooseOrders", function chooseOrders() {
    this.chooseOrderFetchData();
    this.chooseOrderMask = true;
  }), _defineProperty(_methods, "addAfterSProRowClick", function addAfterSProRowClick(row) {
    this.addAfterSProDtlVal.push(row);
  }), _defineProperty(_methods, "proQueryClick", function proQueryClick() {
    var _this7 = this;

    this.proSkuVal = [];
    this.$fetch(this.urls.products, {
      status: true,
      commodity_code: this.proQuery.commodity_code,
      component_code: this.proQuery.component_code,
      shops_id: this.proQuery.shops_id,
      short_name: this.proQuery.short_name,
      include: "productComponents.product,shop,supplier,goodsCategory,combinations.productComponents"
    }).then(function (res) {
      _this7.proVal = res.data;
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
          _this7.$set(item, "newData", {
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
      _this7.proSkuVal = comb;
    }, function (err) {});
  }), _defineProperty(_methods, "handlePagChg", function handlePagChg(page) {
    var _this8 = this;

    this.$fetch(this.urls.changeorders + "?page=" + page, {
      include: "shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems.combination.productComponents,orderItems.product,businessPersonnel,locker,paymentDetails.paymentMethod,paymentDetails.order"
    }).then(function (res) {
      var index = _this8.middleActiveName - 0;
      switch (index) {
        case 0:
          _this8.newOrderListData = res.data;
          break;
        case 1:
          _this8.untreatedOrderListData = res.data;
          break;
        case 2:
          _this8.treatedOrderListData = res.data;
          break;
        case 3:
          _this8.canceledOrderListData = rew.data;
          break;
      }
    });
  }), _defineProperty(_methods, "firstHandleClick", function firstHandleClick() {
    this.loading = true;
    this.fetchData();
  }), _defineProperty(_methods, "secondHandleClick", function secondHandleClick() {
    var index = this.bottomActiveName - 0;
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
  }), _defineProperty(_methods, "orderListRClick", function orderListRClick(row) {
    console.log("orderListRClick");
    if (row["change_status"] == 10) {
      this.newOpt[0].nClick = false;
      this.newOpt[1].nClick = false;
      this.newOpt[2].nClick = false;
      this.newOpt[3].nClick = false;
      this.newOpt[4].nClick = true;
      this.newOpt[5].nClick = true;
      this.newOpt[6].nClick = false;
      this.newOpt[7].nClick = false;
    }
    if (row["change_status"] == 20) {
      this.newOpt[0].nClick = false;
      this.newOpt[1].nClick = false;
      this.newOpt[2].nClick = false;
      this.newOpt[3].nClick = true;
      this.newOpt[4].nClick = false;
      this.newOpt[5].nClick = false;
      this.newOpt[6].nClick = false;
      this.newOpt[7].nClick = false;
    }
    if (row["change_status"] == 30) {
      this.newOpt[0].nClick = false;
      this.newOpt[1].nClick = true;
      this.newOpt[2].nClick = true;
      this.newOpt[3].nClick = true;
      this.newOpt[4].nClick = true;
      this.newOpt[5].nClick = true;
      this.newOpt[6].nClick = true;
      this.newOpt[7].nClick = false;
    }
    if (row["status"] == 0) {
      this.newOpt[0].nClick = false;
      this.newOpt[1].nClick = true;
      this.newOpt[2].nClick = true;
      this.newOpt[3].nClick = true;
      this.newOpt[4].nClick = true;
      this.newOpt[5].nClick = true;
      this.newOpt[6].nClick = false;
      this.newOpt[7].nClick = false;
    }
    this.curRowId = row.id;
    this.curRowData = row;
  }), _defineProperty(_methods, "addChanges", function addChanges() {
    console.log("addChanges");
    this.addOrderChangesMask = true;
    this.addIds = [];
    this.proData = [];
    this.proRIndex = "";
  }), _defineProperty(_methods, "updateChanges", function updateChanges() {
    var _this9 = this;

    console.log("updateChanges");
    if (this.newOpt[1].nClick) {
      return;
    } else {
      this.updateOrderChangesMask = true;
      var id = this.checkboxId ? this.checkboxId : this.curRowId;
      this.$fetch(this.urls.changeorders + "/" + id, {
        include: "shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems.combination.productComponents,orderItems.product,businessPersonnel,locker,paymentDetails.paymentMethod,paymentDetails.order"
      }).then(function (res) {
        _this9.addChangeOrderFormVal.orders_id = res["id"];
        //-----变更订单与原始order分界线--------
        _this9.addChangeOrderFormVal.system_order_no = res["system_order_no"];
        _this9.addChangeOrderFormVal.shops_id = res["shops_id"];
        _this9.addChangeOrderFormVal.shops_name = res["shops_name"];
        _this9.addChangeOrderFormVal.logistics_id = res["logistics_id"];
        _this9.addChangeOrderFormVal.logistics_sn = res["logistics_sn"];
        _this9.addChangeOrderFormVal.billing_way = res["billing_way"];
        _this9.addChangeOrderFormVal.promise_ship_time = res["promise_ship_time"];
        _this9.addChangeOrderFormVal.freight_types_id = res["freight_types_id"];
        _this9.addChangeOrderFormVal.expected_freight = res["expected_freight"];
        _this9.addChangeOrderFormVal.actual_freight = res["actual_freight"];
        _this9.addChangeOrderFormVal.logistics_remark = res["logistics_remark"];
        _this9.addChangeOrderFormVal.is_logistics_checked = res["is_logistics_checked"];
        _this9.addChangeOrderFormVal.logistics_check_remark = res["logistics_check_remark"];
        _this9.addChangeOrderFormVal.logistics_checked_at = res["logistics_checked_at"] ? res["logistics_checked_at"] : 0;
        _this9.addChangeOrderFormVal.distributions_id = res["distributions_id"];
        _this9.addChangeOrderFormVal.distribution_methods_id = res["distribution_methods_id"];
        _this9.addChangeOrderFormVal.deliver_goods_fee = res["deliver_goods_fee"];
        _this9.addChangeOrderFormVal.move_upstairs_fee = res["move_upstairs_fee"];
        _this9.addChangeOrderFormVal.installation_fee = res["installation_fee"];
        _this9.addChangeOrderFormVal.total_distribution_fee = res["total_distribution_fee"];
        _this9.addChangeOrderFormVal.distribution_phone = res["distribution_phone"];
        _this9.addChangeOrderFormVal.distribution_no = res["distribution_no"];
        _this9.addChangeOrderFormVal.distribution_types_id = res["distribution_types_id"];
        _this9.addChangeOrderFormVal.is_distribution_checked = res["is_distribution_checked"];
        _this9.addChangeOrderFormVal.distribution_check_remark = res["distribution_check_remark"];
        _this9.addChangeOrderFormVal.distribution_checked_at = res["distribution_checked_at"];
        _this9.addChangeOrderFormVal.service_car_fee = res["service_car_fee"];
        _this9.addChangeOrderFormVal.service_car_info = res["service_car_info"];
        _this9.addChangeOrderFormVal.take_delivery_goods_fee = res["take_delivery_goods_fee"];
        _this9.addChangeOrderFormVal.take_delivery_goods_ways_id = res["take_delivery_goods_ways_id"];
        _this9.addChangeOrderFormVal.express_fee = res["express_fee"];
        _this9.addChangeOrderFormVal.cancel_after_verification_code = res["cancel_after_verification_code"];
        _this9.addChangeOrderFormVal.wooden_frame_costs = res["wooden_frame_costs"];
        _this9.addChangeOrderFormVal.preferential_cashback = res["preferential_cashback"];
        _this9.addChangeOrderFormVal.favorable_cashback = res["favorable_cashback"];
        _this9.addChangeOrderFormVal.customer_types_id = res["customer_types_id"];
        _this9.addChangeOrderFormVal.is_invoice = res["is_invoice"];
        _this9.addChangeOrderFormVal.invoice_express_fee = res["invoice_express_fee"];
        _this9.addChangeOrderFormVal.express_invoice_title = res["express_invoice_title"];
        _this9.addChangeOrderFormVal.contract_no = res["contract_no"];
        _this9.addChangeOrderFormVal.payment_methods_id = res["payment_methods_id"];
        _this9.addChangeOrderFormVal.deposit = res["deposit"];
        _this9.addChangeOrderFormVal.document_title = res["document_title"];
        _this9.addChangeOrderFormVal.warehouses_id = res["warehouses_id"];
        _this9.addChangeOrderFormVal.payment_date = res["payment_date"];
        _this9.addChangeOrderFormVal.interest_concessions = res["interest_concessions"];
        _this9.addChangeOrderFormVal.is_notice = res["is_notice"];
        _this9.addChangeOrderFormVal.is_cancel_after_verification = res["is_cancel_after_verification"];
        _this9.addChangeOrderFormVal.accept_order_user = res["accept_order_user"];
        _this9.addChangeOrderFormVal.tax_number = res["tax_number"];
        _this9.addChangeOrderFormVal.receipt = res["receipt"];
        _this9.addChangeOrderFormVal.buyer_message = res["buyer_message"];
        _this9.addChangeOrderFormVal.seller_remark = res["seller_remark"];
        _this9.addChangeOrderFormVal.customer_service_remark = res["customer_service_remark"];
        _this9.addChangeOrderFormVal.stockout_remark = res["stockout_remark"];
        _this9.addChangeOrderFormVal.taobao_oid = res["taobao_oid"];
        _this9.addChangeOrderFormVal.taobao_tid = res["taobao_tid"];
        _this9.addChangeOrderFormVal.member_nick = res["member_nick"];
        _this9.addChangeOrderFormVal.seller_name = res["seller_name"];
        _this9.addChangeOrderFormVal.seller_flag = res["seller_flag"];
        _this9.addChangeOrderFormVal.created = res["created"];
        _this9.addChangeOrderFormVal.est_con_time = res["est_con_time"];
        _this9.addChangeOrderFormVal.receiver_name = res["receiver_name"];
        _this9.addChangeOrderFormVal.receiver_phone = res["receiver_phone"];
        _this9.addChangeOrderFormVal.receiver_mobile = res["receiver_mobile"];
        _this9.addChangeOrderFormVal.receiver_state = res["receiver_state"];
        _this9.addChangeOrderFormVal.receiver_city = res["receiver_city"];
        _this9.addChangeOrderFormVal.receiver_district = res["receiver_district"];
        _this9.addChangeOrderFormVal.receiver_address = res["receiver_address"];
        _this9.addChangeOrderFormVal.receiver_zip = res["receiver_zip"];
        _this9.addChangeOrderFormVal.refund_info = res["refund_info"];
        _this9.addChangeOrderFormVal.business_personnel_id = res["business_personnel_id"];
        _this9.addChangeOrderFormVal.locker_id = res["locker_id"];
        _this9.addChangeOrderFormVal.locked_at = res["locked_at"];
        _this9.addChangeOrderFormVal.auditor_id = res["auditor_id"];
        _this9.addChangeOrderFormVal.audit_at = res["audit_at"];
        _this9.addChangeOrderFormVal.cs_auditor_id = res["cs_auditor_id"];
        _this9.addChangeOrderFormVal.cs_audited_at = res["cs_audited_at"];
        _this9.addChangeOrderFormVal.fd_auditor_id = res["fd_auditor_id"];
        _this9.addChangeOrderFormVal.fd_audited_at = res["fd_audited_at"];
        _this9.addChangeOrderFormVal.ca_auditor_id = res["ca_auditor_id"];
        _this9.addChangeOrderFormVal.ca_audited_at = res["ca_audited_at"];
        _this9.addChangeOrderFormVal.stockout_op_id = res["stockout_op_id"];
        _this9.addChangeOrderFormVal.stockout_at = res["stockout_at"];
        _this9.addChangeOrderFormVal.association_taobao_oid = res["association_taobao_oid"];
        _this9.addChangeOrderFormVal.is_merge = res["is_merge"];
        _this9.addChangeOrderFormVal.is_split = res["is_split"];
        _this9.addChangeOrderFormVal.is_association = res["is_association"];

        if (res["orderItems"]["data"].length > 0) {
          res["orderItems"]["data"].map(function (item) {
            _this9.addChangeOrderProIds.push(item["combination"].id);
            item["name"] = item["combination"]["name"];
            item["id"] = item.id;
            item["products_id"] = item.products_id;
            item["combinations_id"] = item.combinations_id;
            item["productComp"] = item["combination"]["productComponents"]["data"];
            _this9.$set(item, "newData", {
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

        _this9.proData = res["orderItems"]["data"];
        _this9.chooseOrderProListData = res["orderItems"]["data"];
        _this9.expenseData = res["paymentDetails"]["data"];
      }, function (err) {
        if (err.response) {
          var arr = err.response.data.errors;
          var arr1 = [];
          for (var i in arr) {
            arr1.push(arr[i]);
          }
          _this9.$message.error(arr1.join(","));
        }
      });
    }
  }), _defineProperty(_methods, "deleteChanges", function deleteChanges() {
    console.log("deleteChanges");
  }), _defineProperty(_methods, "submitChanges", function submitChanges() {
    var _this10 = this;

    if (this.newOpt[3].nClick) {
      return;
    } else {
      var id = this.checkboxId ? this.checkboxId : this.curRowId;
      this.$put(this.urls.changeorders + "/" + id + "/submit").then(function () {
        // this.newOpt[1].nClick = true;
        _this10.refresh();
        _this10.$message({
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
          _this10.$message.error(str);
        }
      });
    }
  }), _defineProperty(_methods, "handleAudit", function handleAudit() {
    var _this11 = this;

    console.log("handleAudit");
    if (this.newOpt[4].nClick) {
      return;
    } else {
      var id = this.checkboxId ? this.checkboxId : this.curRowId;
      this.$fetch(this.urls.changeorders + "/" + id, {
        include: "shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems.combination.productComponents,orderItems.product,businessPersonnel,locker,paymentDetails.paymentMethod,paymentDetails.order"
      }).then(function (res) {
        /*请求选中的数据并拼接用于patch Order的submit*/
        _this11.addChangeOrderFormVal.orders_id = res["id"];
        var submitData = {
          system_order_no: res["system_order_no"],
          shops_id: res["shops_id"],
          shops_name: res["shops_name"],
          logistics_id: res["logistics_id"],
          logistics_sn: res["logistics_sn"],
          billing_way: res["billing_way"],
          promise_ship_time: res["promise_ship_time"],
          freight_types_id: res["freight_types_id"],
          expected_freight: res["expected_freight"],
          actual_freight: res["actual_freight"],
          logistics_remark: res["logistics_remark"],
          is_logistics_checked: res["is_logistics_checked"],
          logistics_check_remark: res["logistics_check_remark"],
          logistics_checked_at: res["logistics_checked_at"],
          distributions_id: res["distributions_id"],
          distribution_methods_id: res["distribution_methods_id"],
          deliver_goods_fee: res["deliver_goods_fee"],
          move_upstairs_fee: res["move_upstairs_fee"],
          installation_fee: res["installation_fee"],
          total_distribution_fee: res["total_distribution_fee"],
          distribution_phone: res["distribution_phone"],
          distribution_no: res["distribution_no"],
          distribution_types_id: res["distribution_types_id"],
          is_distribution_checked: res["is_distribution_checked"],
          distribution_check_remark: res["distribution_check_remark"],
          distribution_checked_at: res["distribution_checked_at"],
          service_car_fee: res["service_car_fee"],
          service_car_info: res["service_car_info"],
          take_delivery_goods_fee: res["take_delivery_goods_fee"],
          take_delivery_goods_ways_id: res["take_delivery_goods_ways_id"],
          express_fee: res["express_fee"],
          cancel_after_verification_code: res["cancel_after_verification_code"],
          wooden_frame_costs: res["wooden_frame_costs"],
          preferential_cashback: res["preferential_cashback"],
          favorable_cashback: res["favorable_cashback"],
          customer_types_id: res["customer_types_id"],
          is_invoice: res["is_invoice"],
          invoice_express_fee: res["invoice_express_fee"],
          express_invoice_title: res["express_invoice_title"],
          contract_no: res["contract_no"],
          payment_methods_id: res["payment_methods_id"],
          deposit: res["deposit"],
          document_title: res["document_title"],
          warehouses_id: res["warehouses_id"],
          payment_date: res["payment_date"],
          interest_concessions: res["interest_concessions"],
          is_notice: res["is_notice"],
          is_cancel_after_verification: res["is_cancel_after_verification"],
          accept_order_user: res["accept_order_user"],
          tax_number: res["tax_number"],
          receipt: res["receipt"],
          buyer_message: res["buyer_message"],
          seller_remark: res["seller_remark"],
          customer_service_remark: res["customer_service_remark"],
          stockout_remark: res["stockout_remark"],
          taobao_oid: res["taobao_oid"],
          taobao_tid: res["taobao_tid"],
          member_nick: res["member_nick"],
          seller_name: res["seller_name"],
          seller_flag: res["seller_flag"],
          created: res["created"],
          est_con_time: res["est_con_time"],
          receiver_name: res["receiver_name"],
          receiver_phone: res["receiver_phone"],
          receiver_mobile: res["receiver_mobile"],
          receiver_state: res["receiver_state"],
          receiver_city: res["receiver_city"],
          receiver_district: res["receiver_district"],
          receiver_address: res["receiver_address"],
          receiver_zip: res["receiver_zip"],
          refund_info: res["refund_info"],
          business_personnel_id: res["business_personnel_id"],
          locker_id: res["locker_id"],
          locked_at: res["locked_at"],
          auditor_id: res["auditor_id"],
          audit_at: res["system_order_no"],
          cs_auditor_id: res["cs_auditor_id"],
          cs_audited_at: res["cs_audited_at"],
          fd_auditor_id: res["fd_auditor_id"],
          fd_audited_at: res["fd_audited_at"],
          ca_auditor_id: res["ca_auditor_id"],
          ca_audited_at: res["ca_audited_at"],
          stockout_op_id: res["stockout_op_id"],
          stockout_at: res["stockout_at"],
          association_taobao_oid: res["association_taobao_oid"],
          is_merge: res["is_merge"],
          is_split: res["is_split"],
          is_association: res["is_association"],
          status: res["status"],
          order_items: [],
          payment_details: []
        };
        /** 对orderItems进行处理*/
        if (res["orderItems"]["data"].length > 0) {
          res["orderItems"]["data"].map(function (item) {
            _this11.addChangeOrderProIds.push(item["combination"].id);
            item["name"] = item["combination"]["name"];
            item["id"] = item.id;
            item["products_id"] = item.products_id;
            item["combinations_id"] = item.combinations_id;
            item["productComp"] = item["combination"]["productComponents"]["data"];
            _this11.$set(item, "newData", {
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
        _this11.proData = res["orderItems"]["data"];
        _this11.expenseData = res["paymentDetails"]["data"];
        /**将proData数据加入到submitData里 */
        _this11.proData.map(function (item) {
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
          _this11.submitData.order_items.push(proD);
        });
        /**将expenseData加入到submitData里*/
        _this11.expenseData.map(function (list) {
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
      }, function (err) {
        if (err.response) {
          var arr = err.response.data.errors;
          var arr1 = [];
          for (var i in arr) {
            arr1.push(arr[i]);
          }
          _this11.$message.error(arr1.join(","));
        }
      });
    }
    this.$patch(this.urls.customerservicedepts + "/" + this.addChangeOrderFormVal.orders_id, submitData).then(function () {
      _this11.refresh();
      _this11.$message({
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
        _this11.$message.error(str);
      }
    });
  }), _defineProperty(_methods, "handleUnAudit", function handleUnAudit() {
    var _this12 = this;

    if (this.newOpt[6].nClick) {
      return;
    } else {
      var id = this.checkboxId ? this.checkboxId : this.curRowId;
      this.$put(this.urls.changeorders + "/" + id + "/unaudit").then(function () {
        _this12.refresh();
        _this12.$message({
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
          _this12.$message.error(str);
        }
      });
    }
  }), _defineProperty(_methods, "addProDtl", function addProDtl() {
    this.proMask = true;
    Object.assign(this.proQuery, this.$options.data().proQuery);
    this.proVal = [];
    this.proSkuVal = [];
    this.proIds = [];
  }), _defineProperty(_methods, "formChg", function formChg() {
    var formVal = void 0;
    if (this.addOrderChangesMask) {
      formVal = this.addCustomerFormVal;
    } else {
      formVal = this.updateCustomerFormVal;
    }
    formVal["total_distribution_fee"] = formVal["deliver_goods_fee"] - 0 + (formVal["move_upstairs_fee"] - 0) + (formVal["installation_fee"] - 0);
    if (this.addOrderChangesMask) {
      this.addCustomerFormVal.total_distribution_fee = formVal["total_distribution_fee"];
    } else {
      this.updateCustomerFormVal.total_distribution_fee = formVal["total_distribution_fee"];
    }
  }), _defineProperty(_methods, "addChangeOrderCancel", function addChangeOrderCancel() {
    this.addOrderChangesMask = false;
  }), _defineProperty(_methods, "updateChangeOrderCancel", function updateChangeOrderCancel() {
    this.updateOrderChangesMask = false;
  }), _defineProperty(_methods, "handleSelectionChange", function handleSelectionChange(val) {
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
  }), _defineProperty(_methods, "chooseOrderConfirm", function chooseOrderConfirm() {
    this.chooseOrderMask = false;
    this.$message({
      message: "选择订单成功",
      type: "success"
    });
  }), _defineProperty(_methods, "addChangeOrdersConfirm", function addChangeOrdersConfirm() {
    var _this13 = this;

    var tempData = this.addChangeOrderFormVal;
    this.proData.map(function (item) {
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
      _this13.addChangeOrderFormVal.order_items.push(proD);
    });
    this.expenseData.map(function (list) {
      var expenseD = {
        payment: list.payment,
        payment_methods_id: list.payment_methods_id
      };
      _this13.addChangeOrderFormVal.payment_details.push(expenseD);
    });
    this.$post(this.urls.changeorders, this.addChangeOrderFormVal).then(function () {
      _this13.addOrderChangesMask = false;
      _this13.refresh();
      _this13.$message({
        message: "添加成功",
        type: "success"
      });
      _this13.addChangeOrderFormVal = {
        change_order_no: "",
        cancel_order_no: "",
        is_canceled: false,
        change_remark: "",
        change_status: 10,
        orders_id: 0,
        //-----变更订单与原始order分界线--------
        system_order_no: "",
        shops_id: 0,
        shops_name: "",
        logistics_id: 0,
        logistics_sn: "",
        billing_way: "",
        promise_ship_time: null,
        freight_types_id: 0,
        expected_freight: 0,
        actual_freight: 0,
        logistics_remark: "",
        is_logistics_checked: false,
        logistics_check_remark: "",
        logistics_checked_at: null,
        distributions_id: 0,
        distribution_methods_id: 0,
        deliver_goods_fee: 0,
        move_upstairs_fee: 0,
        installation_fee: 0,
        total_distribution_fee: 0,
        distribution_phone: "",
        distribution_no: "",
        distribution_types_id: 0,
        is_distribution_checked: false,
        distribution_check_remark: "",
        distribution_checked_at: null,
        service_car_fee: 0,
        service_car_info: "",
        take_delivery_goods_fee: 0,
        take_delivery_goods_ways_id: 0,
        express_fee: 0,
        cancel_after_verification_code: "",
        wooden_frame_costs: 0,
        preferential_cashback: 0,
        favorable_cashback: 0,
        customer_types_id: 0,
        is_invoice: false,
        invoice_express_fee: 0,
        express_invoice_title: "",
        contract_no: "",
        payment_methods_id: 0,
        deposit: 0,
        document_title: "",
        warehouses_id: 0,
        payment_date: null,
        interest_concessions: 0,
        is_notice: false,
        is_cancel_after_verification: false,
        accept_order_user: "",
        tax_number: "",
        receipt: "",
        buyer_message: "",
        seller_remark: "",
        customer_service_remark: "",
        stockout_remark: "",
        taobao_oid: 0,
        taobao_tid: 0,
        member_nick: "",
        seller_name: "",
        seller_flag: "",
        created: null,
        est_con_time: null,
        receiver_name: "",
        receiver_phone: "",
        receiver_mobile: "",
        receiver_state: "",
        receiver_city: "",
        receiver_district: "",
        receiver_address: "",
        receiver_zip: "",
        refund_info: "",
        business_personnel_id: 0,
        locker_id: 0,
        locked_at: null,
        auditor_id: 0,
        audit_at: null,
        cs_auditor_id: 0,
        cs_audited_at: null,
        fd_auditor_id: 0,
        fd_audited_at: null,
        ca_auditor_id: 0,
        ca_audited_at: null,
        stockout_op_id: 0,
        stockout_at: null,
        association_taobao_oid: 0,
        is_merge: false,
        is_split: false,
        is_association: false,
        status: true,
        order_items: [],
        payment_details: []
      };
    }, function (err) {
      if (err.response) {
        _this13.showDel = false;
        var arr = err.response.data.errors;
        var arr1 = [];
        for (var i in arr) {
          arr1.push(arr[i]);
        }
        var str = arr1.join(",");
        _this13.$message.error(str);
      }
    });
  }), _defineProperty(_methods, "updateChangeOrdersConfirm", function updateChangeOrdersConfirm() {
    var _this14 = this;

    var tempData = this.addChangeOrderFormVal;
    this.proData.map(function (item) {
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
      _this14.addChangeOrderFormVal.order_items.push(proD);
    });
    this.expenseData.map(function (list) {
      var expenseD = {
        payment: list.payment,
        payment_methods_id: list.payment_methods_id
      };
      _this14.addChangeOrderFormVal.payment_details.push(expenseD);
    });
    this.$patch(this.urls.changeorders, this.addChangeOrderFormVal).then(function () {
      _this14.addOrderChangesMask = false;
      _this14.refresh();
      _this14.$message({
        message: "添加成功",
        type: "success"
      });
      _this14.addChangeOrderFormVal = {
        change_order_no: "",
        cancel_order_no: "",
        is_canceled: false,
        change_remark: "",
        change_status: 10,
        orders_id: 0,
        //-----变更订单与原始order分界线--------
        system_order_no: "",
        shops_id: 0,
        shops_name: "",
        logistics_id: 0,
        logistics_sn: "",
        billing_way: "",
        promise_ship_time: null,
        freight_types_id: 0,
        expected_freight: 0,
        actual_freight: 0,
        logistics_remark: "",
        is_logistics_checked: false,
        logistics_check_remark: "",
        logistics_checked_at: null,
        distributions_id: 0,
        distribution_methods_id: 0,
        deliver_goods_fee: 0,
        move_upstairs_fee: 0,
        installation_fee: 0,
        total_distribution_fee: 0,
        distribution_phone: "",
        distribution_no: "",
        distribution_types_id: 0,
        is_distribution_checked: false,
        distribution_check_remark: "",
        distribution_checked_at: null,
        service_car_fee: 0,
        service_car_info: "",
        take_delivery_goods_fee: 0,
        take_delivery_goods_ways_id: 0,
        express_fee: 0,
        cancel_after_verification_code: "",
        wooden_frame_costs: 0,
        preferential_cashback: 0,
        favorable_cashback: 0,
        customer_types_id: 0,
        is_invoice: false,
        invoice_express_fee: 0,
        express_invoice_title: "",
        contract_no: "",
        payment_methods_id: 0,
        deposit: 0,
        document_title: "",
        warehouses_id: 0,
        payment_date: null,
        interest_concessions: 0,
        is_notice: false,
        is_cancel_after_verification: false,
        accept_order_user: "",
        tax_number: "",
        receipt: "",
        buyer_message: "",
        seller_remark: "",
        customer_service_remark: "",
        stockout_remark: "",
        taobao_oid: 0,
        taobao_tid: 0,
        member_nick: "",
        seller_name: "",
        seller_flag: "",
        created: null,
        est_con_time: null,
        receiver_name: "",
        receiver_phone: "",
        receiver_mobile: "",
        receiver_state: "",
        receiver_city: "",
        receiver_district: "",
        receiver_address: "",
        receiver_zip: "",
        refund_info: "",
        business_personnel_id: 0,
        locker_id: 0,
        locked_at: null,
        auditor_id: 0,
        audit_at: null,
        cs_auditor_id: 0,
        cs_audited_at: null,
        fd_auditor_id: 0,
        fd_audited_at: null,
        ca_auditor_id: 0,
        ca_audited_at: null,
        stockout_op_id: 0,
        stockout_at: null,
        association_taobao_oid: 0,
        is_merge: false,
        is_split: false,
        is_association: false,
        status: true,
        order_items: [],
        payment_details: []
      };
    }, function (err) {
      if (err.response) {
        _this14.showDel = false;
        var arr = err.response.data.errors;
        var arr1 = [];
        for (var i in arr) {
          arr1.push(arr[i]);
        }
        var str = arr1.join(",");
        _this14.$message.error(str);
      }
    });
  }), _defineProperty(_methods, "chooseOrderCancel", function chooseOrderCancel() {
    this.chooseOrderMask = false;
    this.$message({
      message: "取消选择订单",
      type: "success"
    });
  }), _defineProperty(_methods, "resets", function resets() {
    this.searchBox = {};
  }), _methods),
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

/***/ 563:
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
                value: _vm.searchBox.member_nick,
                callback: function($$v) {
                  _vm.$set(_vm.searchBox, "member_nick", $$v)
                },
                expression: "searchBox.member_nick"
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
                value: _vm.searchBox.applier_id,
                callback: function($$v) {
                  _vm.$set(_vm.searchBox, "applier_id", $$v)
                },
                expression: "searchBox.applier_id"
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
            value: _vm.middleActiveName,
            callback: function($$v) {
              _vm.middleActiveName = $$v
            },
            expression: "middleActiveName"
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
                  attrs: { data: _vm.newOrderListData, fit: "", height: "200" },
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
                  _vm._l(_vm.middleTableHead, function(item) {
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
                                              _vm._s(
                                                item.inProp
                                                  ? scope.row[item.prop][
                                                      item.inProp
                                                    ]
                                                  : scope.row[item.prop]
                                              )
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
                  _vm._l(_vm.middleTableHead, function(item) {
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
                                              _vm._s(
                                                item.inProp
                                                  ? scope.row[item.prop][
                                                      item.inProp
                                                    ]
                                                  : scope.row[item.prop]
                                              )
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
                  _vm._l(_vm.middleTableHead, function(item) {
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
                                              _vm._s(
                                                item.inProp
                                                  ? scope.row[item.prop][
                                                      item.inProp
                                                    ]
                                                  : scope.row[item.prop]
                                              )
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
                  _vm._l(_vm.middleTableHead, function(item) {
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
                                              _vm._s(
                                                item.inProp
                                                  ? scope.row[item.prop][
                                                      item.inProp
                                                    ]
                                                  : scope.row[item.prop]
                                              )
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
      _vm.middleActiveName == "0"
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
            value: _vm.bottomActiveName,
            callback: function($$v) {
              _vm.bottomActiveName = $$v
            },
            expression: "bottomActiveName"
          }
        },
        [
          _c(
            "el-tab-pane",
            { attrs: { label: "变更明细", name: "0" } },
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
                  attrs: { data: _vm.changeDetails, fit: "", height: "200" },
                  on: { "selection-change": _vm.handleSelectionChange }
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
                  _vm._l(_vm.changeDetailsHead, function(item) {
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
                                              _vm._s(
                                                item.inProp
                                                  ? scope.row[item.prop][
                                                      item.inProp
                                                    ]
                                                  : scope.row[item.prop]
                                              )
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
            { attrs: { label: "变更订单主信息", name: "1" } },
            [
              _c(
                "el-form",
                {
                  staticClass: "quarter_turn",
                  attrs: { model: _vm.changeOrdersMainInfo }
                },
                _vm._l(_vm.changeOrdersMainInfoHead, function(item) {
                  return _c(
                    "el-form-item",
                    {
                      key: item.label,
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
                                        disabled: ""
                                      },
                                      model: {
                                        value:
                                          _vm.changeOrdersMainInfo[item.prop][
                                            item.inProp
                                          ],
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.changeOrdersMainInfo[item.prop],
                                            item.inProp,
                                            typeof $$v === "string"
                                              ? $$v.trim()
                                              : $$v
                                          )
                                        },
                                        expression:
                                          "changeOrdersMainInfo[item.prop][item.inProp]"
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
                                        disabled: ""
                                      },
                                      model: {
                                        value:
                                          _vm.changeOrdersMainInfo[item.prop],
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.changeOrdersMainInfo,
                                            item.prop,
                                            typeof $$v === "string"
                                              ? $$v.trim()
                                              : $$v
                                          )
                                        },
                                        expression:
                                          "changeOrdersMainInfo[item.prop]"
                                      }
                                    })
                                  ],
                                  1
                                )
                          ])
                        : item.type == "number"
                        ? _c(
                            "span",
                            [
                              _c("el-input", {
                                attrs: {
                                  type: "number",
                                  placeholder: item.holder,
                                  disabled: ""
                                },
                                model: {
                                  value: _vm.changeOrdersMainInfo[item.prop],
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.changeOrdersMainInfo,
                                      item.prop,
                                      typeof $$v === "string" ? $$v.trim() : $$v
                                    )
                                  },
                                  expression: "changeOrdersMainInfo[item.prop]"
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
                                  placehode: item.holder
                                },
                                model: {
                                  value: _vm.changeOrdersMainInfo[item.prop],
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.changeOrdersMainInfo,
                                      item.prop,
                                      typeof $$v === "string" ? $$v.trim() : $$v
                                    )
                                  },
                                  expression: "changeOrdersMainInfo[item.prop]"
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
            { attrs: { label: "操作记录", name: "2" } },
            [
              _c(
                "el-table",
                { attrs: { data: _vm.operationData, fit: "", height: "180" } },
                _vm._l(_vm.operationHead, function(item) {
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
                                            attrs: { src: scope.row[item.prop] }
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
                                          ? scope.row[item.prop][item.inProp]
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
          _c("label", [_vm._v(_vm._s(this.addChangeOrderFormVal))]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("label", [_vm._v(_vm._s(this.submitData))]),
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
            {
              model: {
                value: _vm.addTabActiveName,
                callback: function($$v) {
                  _vm.addTabActiveName = $$v
                },
                expression: "addTabActiveName"
              }
            },
            [
              _c(
                "el-tab-pane",
                { attrs: { label: "产品明细", name: "0" } },
                [
                  _c(
                    "el-table",
                    {
                      attrs: {
                        data: _vm.proData,
                        fit: "",
                        "row-class-name": _vm.addProRCName
                      },
                      on: { "row-click": _vm.addProRowClick }
                    },
                    [
                      _vm._l(_vm.addHead[0], function(item) {
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
                                          _vm.proRIndex ==
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
                                                        _vm._s(
                                                          scope.row[item.prop][
                                                            item.inProp
                                                          ]
                                                        )
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
                                                  _vm._s(
                                                    item.inProp
                                                      ? scope.row[item.prop][
                                                          item.inProp
                                                        ]
                                                      : scope.row[item.prop]
                                                  )
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
                                                              _vm._s(
                                                                item.inProp
                                                                  ? scope.row[
                                                                      item.prop
                                                                    ][
                                                                      item
                                                                        .inProp
                                                                    ]
                                                                  : scope.row[
                                                                      item.prop
                                                                    ]
                                                              )
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
                                        return _vm.addDelPro(scope.$index)
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
                { attrs: { label: "订单信息" } },
                [
                  _c(
                    "el-form",
                    { attrs: { model: _vm.addChangeOrderFormVal } },
                    _vm._l(_vm.addDialogOrderDtlFormHead, function(
                      item,
                      index
                    ) {
                      return _c(
                        "el-form-item",
                        {
                          key: index,
                          attrs: { label: item.label, prop: item.prop }
                        },
                        [
                          item.type == "number"
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
                                              _vm.addChangeOrderFormVal[
                                                item.prop
                                              ],
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
                                  : item.type == "number"
                                  ? _c(
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
                                              _vm.addChangeOrderFormVal[
                                                item.prop
                                              ],
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
                                  : _vm._e()
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
                                          _vm.addChangeOrderFormVal[item.prop],
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.addChangeOrderFormVal,
                                            item.prop,
                                            $$v
                                          )
                                        },
                                        expression:
                                          "addChangeOrderFormVal[item.prop]"
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
                                      value:
                                        _vm.addChangeOrderFormVal[item.prop],
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
                            : item.type == "checkbox"
                            ? _c(
                                "span",
                                [
                                  _c("el-checkbox", {
                                    attrs: { disabled: item.chgAble },
                                    model: {
                                      value:
                                        _vm.addChangeOrderFormVal[item.prop],
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.addChangeOrderFormVal,
                                          item.prop,
                                          $$v
                                        )
                                      },
                                      expression:
                                        "addChangeOrderFormVal[item.prop]"
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
                                          _vm.addChangeOrderFormVal[item.prop],
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.addChangeOrderFormVal,
                                            item.prop,
                                            $$v
                                          )
                                        },
                                        expression:
                                          "addChangeOrderFormVal[item.prop]"
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
                                          _vm.addChangeOrderFormVal[item.prop],
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.addChangeOrderFormVal,
                                            item.prop,
                                            $$v
                                          )
                                        },
                                        expression:
                                          "addChangeOrderFormVal[item.prop]"
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
                                        _vm.addChangeOrderFormVal[item.prop],
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.addChangeOrderFormVal,
                                          item.prop,
                                          $$v
                                        )
                                      },
                                      expression:
                                        "addChangeOrderFormVal[item.prop]"
                                    }
                                  })
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
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
                                              _vm.addChangeOrderFormVal[
                                                item.prop
                                              ][item.inProp],
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.addChangeOrderFormVal[
                                                  item.prop
                                                ],
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
                                            value:
                                              _vm.addChangeOrderFormVal[
                                                item.prop
                                              ],
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
                { attrs: { label: "费用类型", name: "2" } },
                [
                  _c(
                    "el-table",
                    {
                      attrs: {
                        data: _vm.expenseData,
                        fit: "",
                        "row-class-name": _vm.addExpenseRCName
                      },
                      on: { "row-click": _vm.addExpenseRClick }
                    },
                    [
                      _vm._l(_vm.expenseHead, function(item) {
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
                                    _vm.expenseRIndex == "index" + scope.$index
                                      ? _c("span", [
                                          item.type == "select"
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
                                                        value:
                                                          scope.row[item.prop],
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
                                                    },
                                                    _vm._l(
                                                      _vm.addSubData[
                                                        item.stateVal
                                                      ],
                                                      function(list) {
                                                        return _c(
                                                          "span",
                                                          { key: list.id },
                                                          [
                                                            _c("el-option", {
                                                              attrs: {
                                                                label:
                                                                  list.name,
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
                                            : _c(
                                                "span",
                                                [
                                                  _c("el-input", {
                                                    attrs: {
                                                      size: "small",
                                                      type: "number",
                                                      placeholder: item.holder
                                                    },
                                                    model: {
                                                      value:
                                                        scope.row[item.prop],
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          scope.row,
                                                          item.prop,
                                                          typeof $$v ===
                                                            "string"
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
                                            ? _c(
                                                "span",
                                                _vm._l(
                                                  _vm.addSubData[item.stateVal],
                                                  function(list, index) {
                                                    return _c(
                                                      "span",
                                                      { key: index },
                                                      [
                                                        list.id ==
                                                        scope.row[item.prop]
                                                          ? _c("span", [
                                                              _vm._v(
                                                                _vm._s(
                                                                  list.name
                                                                )
                                                              )
                                                            ])
                                                          : _vm._e()
                                                      ]
                                                    )
                                                  }
                                                ),
                                                0
                                              )
                                            : _c("span", [
                                                _vm._v(
                                                  _vm._s(scope.row[item.prop])
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
                                        return _vm.addDelExpense(scope.$index)
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
                  _vm.addTabActiveName == "0"
                    ? _c(
                        "el-button",
                        {
                          attrs: { type: "primary" },
                          on: { click: _vm.chooseOrders }
                        },
                        [_vm._v("选择订单")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.addTabActiveName == "0"
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
                  _vm.addTabActiveName == "2"
                    ? _c(
                        "el-button",
                        {
                          attrs: { type: "primary" },
                          on: { click: _vm.addExpenseLine }
                        },
                        [_vm._v("新增费用类型")]
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
                      on: { click: _vm.addChangeOrdersConfirm }
                    },
                    [_vm._v("确定")]
                  ),
                  _vm._v(" "),
                  _c("el-button", { on: { click: _vm.addChangeOrderCancel } }, [
                    _vm._v("关闭")
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
          class: { "more-forms": _vm.moreForms },
          attrs: { title: "选择订单", visible: _vm.chooseOrderMask },
          on: {
            "update:visible": function($event) {
              _vm.chooseOrderMask = $event
            }
          }
        },
        [
          _c("el-button", { attrs: { type: "text" } }, [_vm._v("订单列表")]),
          _vm._v(" "),
          _c(
            "el-table",
            {
              attrs: {
                data: _vm.chooseOrderData,
                fit: "",
                height: "180",
                "row-class-name": _vm.addOrderRowCName
              },
              on: { "row-click": _vm.chooseOrderRowClick }
            },
            _vm._l(_vm.chooseOrderHead, function(item) {
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
                                        attrs: { src: scope.row[item.prop] }
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
                                      ? scope.row[item.prop][item.inProp]
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
          ),
          _vm._v(" "),
          _c("el-button", { attrs: { type: "text" } }, [_vm._v("订单明细")]),
          _vm._v(" "),
          _c(
            "el-table",
            {
              attrs: {
                data: _vm.chooseOrderProListData,
                fit: "",
                height: "180"
              }
            },
            _vm._l(_vm.chooseOrderProListHead, function(item) {
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
                          scope.row[item.prop]
                            ? _c("span", [
                                _vm._v(
                                  _vm._s(
                                    item.inProp
                                      ? scope.row[item.prop][item.inProp]
                                      : scope.row[item.prop]
                                  )
                                )
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
                  _c(
                    "el-button",
                    {
                      attrs: { type: "primary" },
                      on: { click: _vm.chooseOrderFetchData }
                    },
                    [_vm._v("刷新")]
                  )
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
                      on: { click: _vm.chooseOrderConfirm }
                    },
                    [_vm._v("确定")]
                  ),
                  _vm._v(" "),
                  _c(
                    "el-button",
                    {
                      attrs: { type: "warning" },
                      on: { click: _vm.chooseOrderCancel }
                    },
                    [_vm._v("取消")]
                  )
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
          class: { "more-forms": _vm.moreForms, threeParts: _vm.threeParts },
          attrs: { title: "商品明细", visible: _vm.proMask },
          on: {
            "update:visible": function($event) {
              _vm.proMask = $event
            }
          }
        },
        [
          _c("el-button", { attrs: { type: "text" } }, [_vm._v("选择商品")]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "searchBox" },
            [
              _c(
                "span",
                [
                  _c("label", [_vm._v("商品编码")]),
                  _vm._v(" "),
                  _c("el-input", {
                    attrs: { clearable: "", placeholder: "请输入商品编码" },
                    nativeOn: {
                      keyup: function($event) {
                        if (
                          !$event.type.indexOf("key") &&
                          _vm._k(
                            $event.keyCode,
                            "enter",
                            13,
                            $event.key,
                            "Enter"
                          )
                        ) {
                          return null
                        }
                        return _vm.proQueryClick($event)
                      }
                    },
                    model: {
                      value: _vm.proQuery.commodity_code,
                      callback: function($$v) {
                        _vm.$set(
                          _vm.proQuery,
                          "commodity_code",
                          typeof $$v === "string" ? $$v.trim() : $$v
                        )
                      },
                      expression: "proQuery.commodity_code"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "span",
                [
                  _c("label", [_vm._v("子件编码")]),
                  _vm._v(" "),
                  _c("el-input", {
                    attrs: { clearable: "", placeholder: "请输入子件编码" },
                    nativeOn: {
                      keyup: function($event) {
                        if (
                          !$event.type.indexOf("key") &&
                          _vm._k(
                            $event.keyCode,
                            "enter",
                            13,
                            $event.key,
                            "Enter"
                          )
                        ) {
                          return null
                        }
                        return _vm.proQueryClick($event)
                      }
                    },
                    model: {
                      value: _vm.proQuery.component_code,
                      callback: function($$v) {
                        _vm.$set(
                          _vm.proQuery,
                          "component_code",
                          typeof $$v === "string" ? $$v.trim() : $$v
                        )
                      },
                      expression: "proQuery.component_code"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "span",
                [
                  _c("label", [_vm._v("商品类别")]),
                  _vm._v(" "),
                  _c(
                    "el-select",
                    {
                      attrs: { clearable: "", placeholder: "请选择商品类别" },
                      nativeOn: {
                        keyup: function($event) {
                          if (
                            !$event.type.indexOf("key") &&
                            _vm._k(
                              $event.keyCode,
                              "enter",
                              13,
                              $event.key,
                              "Enter"
                            )
                          ) {
                            return null
                          }
                          return _vm.proQueryClick($event)
                        }
                      },
                      model: {
                        value: _vm.proQuery.shops_id,
                        callback: function($$v) {
                          _vm.$set(_vm.proQuery, "shops_id", $$v)
                        },
                        expression: "proQuery.shops_id"
                      }
                    },
                    _vm._l(_vm.resData.shops, function(item) {
                      return _c("el-option", {
                        key: item.value,
                        attrs: { label: item.nick, value: item.id }
                      })
                    }),
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "span",
                [
                  _c("label", [_vm._v("商品简称")]),
                  _vm._v(" "),
                  _c("el-input", {
                    attrs: { clearable: "", placeholder: "请输入子件编码" },
                    nativeOn: {
                      keyup: function($event) {
                        if (
                          !$event.type.indexOf("key") &&
                          _vm._k(
                            $event.keyCode,
                            "enter",
                            13,
                            $event.key,
                            "Enter"
                          )
                        ) {
                          return null
                        }
                        return _vm.proQueryClick($event)
                      }
                    },
                    model: {
                      value: _vm.proQuery.short_name,
                      callback: function($$v) {
                        _vm.$set(
                          _vm.proQuery,
                          "short_name",
                          typeof $$v === "string" ? $$v.trim() : $$v
                        )
                      },
                      expression: "proQuery.short_name"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "span",
                [
                  _c("label", [_vm._v("组合筛选")]),
                  _vm._v(" "),
                  _c("el-input", {
                    attrs: { clearable: "", placeholder: "请输入子件编码" },
                    nativeOn: {
                      keyup: function($event) {
                        if (
                          !$event.type.indexOf("key") &&
                          _vm._k(
                            $event.keyCode,
                            "enter",
                            13,
                            $event.key,
                            "Enter"
                          )
                        ) {
                          return null
                        }
                        return _vm.proQueryClick($event)
                      }
                    },
                    model: {
                      value: _vm.proQuery.component_code,
                      callback: function($$v) {
                        _vm.$set(
                          _vm.proQuery,
                          "component_code",
                          typeof $$v === "string" ? $$v.trim() : $$v
                        )
                      },
                      expression: "proQuery.component_code"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "span",
                [
                  _c("label", [_vm._v("成品筛选")]),
                  _vm._v(" "),
                  _c("el-input", {
                    attrs: { clearable: "", placeholder: "请输入子件编码" },
                    nativeOn: {
                      keyup: function($event) {
                        if (
                          !$event.type.indexOf("key") &&
                          _vm._k(
                            $event.keyCode,
                            "enter",
                            13,
                            $event.key,
                            "Enter"
                          )
                        ) {
                          return null
                        }
                        return _vm.proQueryClick($event)
                      }
                    },
                    model: {
                      value: _vm.proQuery.component_code,
                      callback: function($$v) {
                        _vm.$set(
                          _vm.proQuery,
                          "component_code",
                          typeof $$v === "string" ? $$v.trim() : $$v
                        )
                      },
                      expression: "proQuery.component_code"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-button",
                {
                  attrs: { type: "primary" },
                  on: { click: _vm.proQueryClick }
                },
                [_vm._v("查询")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-table",
            {
              attrs: { data: _vm.proVal, fit: "", height: "250" },
              on: { "row-click": _vm.proRowClick }
            },
            _vm._l(_vm.proHead, function(item) {
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
                                            ? scope.row[item.prop][item.inProp]
                                            : scope.row[item.prop]
                                        )
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
          ),
          _vm._v(" "),
          _c("el-button", { attrs: { type: "text" } }, [_vm._v("sku信息")]),
          _vm._v(" "),
          _c(
            "el-table",
            {
              attrs: {
                data: _vm.proSkuVal,
                fit: "",
                height: "230",
                "row-class-name": _vm.proSkuCName
              },
              on: { "row-click": _vm.proSkuRowClick }
            },
            [
              _vm._l(_vm.proSkuHead, function(item) {
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
                                  _vm.proCompRowIndex == "index" + scope.$index
                                    ? _c("span", [
                                        item.type == "number"
                                          ? _c("span", [
                                              item.inProp == "quantity"
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
                                                        on: {
                                                          input: _vm.quantityChg
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
                                                : _c(
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
                                            ])
                                          : item.type == "checkbox"
                                          ? _c(
                                              "span",
                                              [
                                                _c("el-checkbox", {
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
                                                _c("el-input", {
                                                  attrs: {
                                                    size: "small",
                                                    placeholder: item.holder
                                                  },
                                                  model: {
                                                    value:
                                                      scope.row[item.prop][
                                                        item.inProp
                                                      ],
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        scope.row[item.prop],
                                                        item.inProp,
                                                        typeof $$v === "string"
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
                                          : _c("span", [
                                              _vm._v(
                                                _vm._s(
                                                  scope.row[item.prop][
                                                    item.inProp
                                                  ]
                                                )
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
                            attrs: { data: scope.row["productComp"], fit: "" }
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
                                                      _c("el-checkbox", {
                                                        attrs: { disabled: "" },
                                                        model: {
                                                          value:
                                                            scope.row[
                                                              item.prop
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
                                                                scope.row[
                                                                  item.prop
                                                                ]
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
                                                                scope.row[
                                                                  item.alt
                                                                ]
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
                                                          ? scope.row[
                                                              item.prop
                                                            ][item.inProp]
                                                          : scope.row[item.prop]
                                                      )
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
              })
            ],
            2
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
                {
                  attrs: { type: "primary" },
                  on: { click: _vm.confirmAddProDtl }
                },
                [_vm._v("确定")]
              ),
              _vm._v(" "),
              _c("el-button", { on: { click: _vm.cancelAddProDtl } }, [
                _vm._v("关闭")
              ])
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
          attrs: { title: "变更订单修改", visible: _vm.updateOrderChangesMask },
          on: {
            "update:visible": function($event) {
              _vm.updateOrderChangesMask = $event
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
            {
              model: {
                value: _vm.addTabActiveName,
                callback: function($$v) {
                  _vm.addTabActiveName = $$v
                },
                expression: "addTabActiveName"
              }
            },
            [
              _c(
                "el-tab-pane",
                { attrs: { label: "产品明细", name: "0" } },
                [
                  _c(
                    "el-table",
                    {
                      attrs: {
                        data: _vm.proData,
                        fit: "",
                        "row-class-name": _vm.addProRCName
                      },
                      on: { "row-click": _vm.addProRowClick }
                    },
                    [
                      _vm._l(_vm.addHead[0], function(item) {
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
                                          _vm.proRIndex ==
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
                                                        _vm._s(
                                                          scope.row[item.prop][
                                                            item.inProp
                                                          ]
                                                        )
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
                                                  _vm._s(
                                                    item.inProp
                                                      ? scope.row[item.prop][
                                                          item.inProp
                                                        ]
                                                      : scope.row[item.prop]
                                                  )
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
                                                              _vm._s(
                                                                item.inProp
                                                                  ? scope.row[
                                                                      item.prop
                                                                    ][
                                                                      item
                                                                        .inProp
                                                                    ]
                                                                  : scope.row[
                                                                      item.prop
                                                                    ]
                                                              )
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
                                        return _vm.addDelPro(scope.$index)
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
                { attrs: { label: "订单信息" } },
                [
                  _c(
                    "el-form",
                    { attrs: { model: _vm.addChangeOrderFormVal } },
                    _vm._l(_vm.addDialogOrderDtlFormHead, function(
                      item,
                      index
                    ) {
                      return _c(
                        "el-form-item",
                        {
                          key: index,
                          attrs: { label: item.label, prop: item.prop }
                        },
                        [
                          item.type == "number"
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
                                              _vm.addChangeOrderFormVal[
                                                item.prop
                                              ],
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
                                  : item.type == "number"
                                  ? _c(
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
                                              _vm.addChangeOrderFormVal[
                                                item.prop
                                              ],
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
                                  : _vm._e()
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
                                          _vm.addChangeOrderFormVal[item.prop],
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.addChangeOrderFormVal,
                                            item.prop,
                                            $$v
                                          )
                                        },
                                        expression:
                                          "addChangeOrderFormVal[item.prop]"
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
                                      value:
                                        _vm.addChangeOrderFormVal[item.prop],
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
                            : item.type == "checkbox"
                            ? _c(
                                "span",
                                [
                                  _c("el-checkbox", {
                                    attrs: { disabled: item.chgAble },
                                    model: {
                                      value:
                                        _vm.addChangeOrderFormVal[item.prop],
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.addChangeOrderFormVal,
                                          item.prop,
                                          $$v
                                        )
                                      },
                                      expression:
                                        "addChangeOrderFormVal[item.prop]"
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
                                          _vm.addChangeOrderFormVal[item.prop],
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.addChangeOrderFormVal,
                                            item.prop,
                                            $$v
                                          )
                                        },
                                        expression:
                                          "addChangeOrderFormVal[item.prop]"
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
                                          _vm.addChangeOrderFormVal[item.prop],
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.addChangeOrderFormVal,
                                            item.prop,
                                            $$v
                                          )
                                        },
                                        expression:
                                          "addChangeOrderFormVal[item.prop]"
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
                                        _vm.addChangeOrderFormVal[item.prop],
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.addChangeOrderFormVal,
                                          item.prop,
                                          $$v
                                        )
                                      },
                                      expression:
                                        "addChangeOrderFormVal[item.prop]"
                                    }
                                  })
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
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
                                              _vm.addChangeOrderFormVal[
                                                item.prop
                                              ][item.inProp],
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.addChangeOrderFormVal[
                                                  item.prop
                                                ],
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
                                            value:
                                              _vm.addChangeOrderFormVal[
                                                item.prop
                                              ],
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
                { attrs: { label: "费用类型", name: "2" } },
                [
                  _c(
                    "el-table",
                    {
                      attrs: {
                        data: _vm.expenseData,
                        fit: "",
                        "row-class-name": _vm.addExpenseRCName
                      },
                      on: { "row-click": _vm.addExpenseRClick }
                    },
                    [
                      _vm._l(_vm.expenseHead, function(item) {
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
                                    _vm.expenseRIndex == "index" + scope.$index
                                      ? _c("span", [
                                          item.type == "select"
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
                                                        value:
                                                          scope.row[item.prop],
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
                                                    },
                                                    _vm._l(
                                                      _vm.addSubData[
                                                        item.stateVal
                                                      ],
                                                      function(list) {
                                                        return _c(
                                                          "span",
                                                          { key: list.id },
                                                          [
                                                            _c("el-option", {
                                                              attrs: {
                                                                label:
                                                                  list.name,
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
                                            : _c(
                                                "span",
                                                [
                                                  _c("el-input", {
                                                    attrs: {
                                                      size: "small",
                                                      type: "number",
                                                      placeholder: item.holder
                                                    },
                                                    model: {
                                                      value:
                                                        scope.row[item.prop],
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          scope.row,
                                                          item.prop,
                                                          typeof $$v ===
                                                            "string"
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
                                            ? _c(
                                                "span",
                                                _vm._l(
                                                  _vm.addSubData[item.stateVal],
                                                  function(list, index) {
                                                    return _c(
                                                      "span",
                                                      { key: index },
                                                      [
                                                        list.id ==
                                                        scope.row[item.prop]
                                                          ? _c("span", [
                                                              _vm._v(
                                                                _vm._s(
                                                                  list.name
                                                                )
                                                              )
                                                            ])
                                                          : _vm._e()
                                                      ]
                                                    )
                                                  }
                                                ),
                                                0
                                              )
                                            : _c("span", [
                                                _vm._v(
                                                  _vm._s(scope.row[item.prop])
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
                                        return _vm.addDelExpense(scope.$index)
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
                  _vm.addTabActiveName == "0"
                    ? _c(
                        "el-button",
                        {
                          attrs: { type: "primary" },
                          on: { click: _vm.chooseOrders }
                        },
                        [_vm._v("选择订单")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.addTabActiveName == "0"
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
                  _vm.addTabActiveName == "2"
                    ? _c(
                        "el-button",
                        {
                          attrs: { type: "primary" },
                          on: { click: _vm.addExpenseLine }
                        },
                        [_vm._v("新增费用类型")]
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
                      on: { click: _vm.updateChangeOrdersConfirm }
                    },
                    [_vm._v("确定")]
                  ),
                  _vm._v(" "),
                  _c(
                    "el-button",
                    { on: { click: _vm.updateChangeOrderCancel } },
                    [_vm._v("关闭")]
                  )
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
          class: { "more-forms": _vm.moreForms },
          attrs: { title: "选择订单", visible: _vm.chooseOrderMask },
          on: {
            "update:visible": function($event) {
              _vm.chooseOrderMask = $event
            }
          }
        },
        [
          _c("el-button", { attrs: { type: "text" } }, [_vm._v("订单列表")]),
          _vm._v(" "),
          _c(
            "el-table",
            {
              attrs: {
                data: _vm.chooseOrderData,
                fit: "",
                height: "180",
                "row-class-name": _vm.addOrderRowCName
              },
              on: { "row-click": _vm.chooseOrderRowClick }
            },
            _vm._l(_vm.chooseOrderHead, function(item) {
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
                                        attrs: { src: scope.row[item.prop] }
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
                                      ? scope.row[item.prop][item.inProp]
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
          ),
          _vm._v(" "),
          _c("el-button", { attrs: { type: "text" } }, [_vm._v("订单明细")]),
          _vm._v(" "),
          _c(
            "el-table",
            {
              attrs: {
                data: _vm.chooseOrderProListData,
                fit: "",
                height: "180"
              }
            },
            _vm._l(_vm.chooseOrderProListHead, function(item) {
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
                          scope.row[item.prop]
                            ? _c("span", [
                                _vm._v(
                                  _vm._s(
                                    item.inProp
                                      ? scope.row[item.prop][item.inProp]
                                      : scope.row[item.prop]
                                  )
                                )
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
                  _c(
                    "el-button",
                    {
                      attrs: { type: "primary" },
                      on: { click: _vm.chooseOrderFetchData }
                    },
                    [_vm._v("刷新")]
                  )
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
                      on: { click: _vm.chooseOrderConfirm }
                    },
                    [_vm._v("确定")]
                  ),
                  _vm._v(" "),
                  _c(
                    "el-button",
                    {
                      attrs: { type: "warning" },
                      on: { click: _vm.chooseOrderCancel }
                    },
                    [_vm._v("取消")]
                  )
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
          class: { "more-forms": _vm.moreForms, threeParts: _vm.threeParts },
          attrs: { title: "商品明细", visible: _vm.proMask },
          on: {
            "update:visible": function($event) {
              _vm.proMask = $event
            }
          }
        },
        [
          _c("el-button", { attrs: { type: "text" } }, [_vm._v("选择商品")]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "searchBox" },
            [
              _c(
                "span",
                [
                  _c("label", [_vm._v("商品编码")]),
                  _vm._v(" "),
                  _c("el-input", {
                    attrs: { clearable: "", placeholder: "请输入商品编码" },
                    nativeOn: {
                      keyup: function($event) {
                        if (
                          !$event.type.indexOf("key") &&
                          _vm._k(
                            $event.keyCode,
                            "enter",
                            13,
                            $event.key,
                            "Enter"
                          )
                        ) {
                          return null
                        }
                        return _vm.proQueryClick($event)
                      }
                    },
                    model: {
                      value: _vm.proQuery.commodity_code,
                      callback: function($$v) {
                        _vm.$set(
                          _vm.proQuery,
                          "commodity_code",
                          typeof $$v === "string" ? $$v.trim() : $$v
                        )
                      },
                      expression: "proQuery.commodity_code"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "span",
                [
                  _c("label", [_vm._v("子件编码")]),
                  _vm._v(" "),
                  _c("el-input", {
                    attrs: { clearable: "", placeholder: "请输入子件编码" },
                    nativeOn: {
                      keyup: function($event) {
                        if (
                          !$event.type.indexOf("key") &&
                          _vm._k(
                            $event.keyCode,
                            "enter",
                            13,
                            $event.key,
                            "Enter"
                          )
                        ) {
                          return null
                        }
                        return _vm.proQueryClick($event)
                      }
                    },
                    model: {
                      value: _vm.proQuery.component_code,
                      callback: function($$v) {
                        _vm.$set(
                          _vm.proQuery,
                          "component_code",
                          typeof $$v === "string" ? $$v.trim() : $$v
                        )
                      },
                      expression: "proQuery.component_code"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "span",
                [
                  _c("label", [_vm._v("商品类别")]),
                  _vm._v(" "),
                  _c(
                    "el-select",
                    {
                      attrs: { clearable: "", placeholder: "请选择商品类别" },
                      nativeOn: {
                        keyup: function($event) {
                          if (
                            !$event.type.indexOf("key") &&
                            _vm._k(
                              $event.keyCode,
                              "enter",
                              13,
                              $event.key,
                              "Enter"
                            )
                          ) {
                            return null
                          }
                          return _vm.proQueryClick($event)
                        }
                      },
                      model: {
                        value: _vm.proQuery.shops_id,
                        callback: function($$v) {
                          _vm.$set(_vm.proQuery, "shops_id", $$v)
                        },
                        expression: "proQuery.shops_id"
                      }
                    },
                    _vm._l(_vm.resData.shops, function(item) {
                      return _c("el-option", {
                        key: item.value,
                        attrs: { label: item.nick, value: item.id }
                      })
                    }),
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "span",
                [
                  _c("label", [_vm._v("商品简称")]),
                  _vm._v(" "),
                  _c("el-input", {
                    attrs: { clearable: "", placeholder: "请输入子件编码" },
                    nativeOn: {
                      keyup: function($event) {
                        if (
                          !$event.type.indexOf("key") &&
                          _vm._k(
                            $event.keyCode,
                            "enter",
                            13,
                            $event.key,
                            "Enter"
                          )
                        ) {
                          return null
                        }
                        return _vm.proQueryClick($event)
                      }
                    },
                    model: {
                      value: _vm.proQuery.short_name,
                      callback: function($$v) {
                        _vm.$set(
                          _vm.proQuery,
                          "short_name",
                          typeof $$v === "string" ? $$v.trim() : $$v
                        )
                      },
                      expression: "proQuery.short_name"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "span",
                [
                  _c("label", [_vm._v("组合筛选")]),
                  _vm._v(" "),
                  _c("el-input", {
                    attrs: { clearable: "", placeholder: "请输入子件编码" },
                    nativeOn: {
                      keyup: function($event) {
                        if (
                          !$event.type.indexOf("key") &&
                          _vm._k(
                            $event.keyCode,
                            "enter",
                            13,
                            $event.key,
                            "Enter"
                          )
                        ) {
                          return null
                        }
                        return _vm.proQueryClick($event)
                      }
                    },
                    model: {
                      value: _vm.proQuery.component_code,
                      callback: function($$v) {
                        _vm.$set(
                          _vm.proQuery,
                          "component_code",
                          typeof $$v === "string" ? $$v.trim() : $$v
                        )
                      },
                      expression: "proQuery.component_code"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "span",
                [
                  _c("label", [_vm._v("成品筛选")]),
                  _vm._v(" "),
                  _c("el-input", {
                    attrs: { clearable: "", placeholder: "请输入子件编码" },
                    nativeOn: {
                      keyup: function($event) {
                        if (
                          !$event.type.indexOf("key") &&
                          _vm._k(
                            $event.keyCode,
                            "enter",
                            13,
                            $event.key,
                            "Enter"
                          )
                        ) {
                          return null
                        }
                        return _vm.proQueryClick($event)
                      }
                    },
                    model: {
                      value: _vm.proQuery.component_code,
                      callback: function($$v) {
                        _vm.$set(
                          _vm.proQuery,
                          "component_code",
                          typeof $$v === "string" ? $$v.trim() : $$v
                        )
                      },
                      expression: "proQuery.component_code"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-button",
                {
                  attrs: { type: "primary" },
                  on: { click: _vm.proQueryClick }
                },
                [_vm._v("查询")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-table",
            {
              attrs: { data: _vm.proVal, fit: "", height: "250" },
              on: { "row-click": _vm.proRowClick }
            },
            _vm._l(_vm.proHead, function(item) {
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
                                            ? scope.row[item.prop][item.inProp]
                                            : scope.row[item.prop]
                                        )
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
          ),
          _vm._v(" "),
          _c("el-button", { attrs: { type: "text" } }, [_vm._v("sku信息")]),
          _vm._v(" "),
          _c(
            "el-table",
            {
              attrs: {
                data: _vm.proSkuVal,
                fit: "",
                height: "230",
                "row-class-name": _vm.proSkuCName
              },
              on: { "row-click": _vm.proSkuRowClick }
            },
            [
              _vm._l(_vm.proSkuHead, function(item) {
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
                                  _vm.proCompRowIndex == "index" + scope.$index
                                    ? _c("span", [
                                        item.type == "number"
                                          ? _c("span", [
                                              item.inProp == "quantity"
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
                                                        on: {
                                                          input: _vm.quantityChg
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
                                                : _c(
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
                                            ])
                                          : item.type == "checkbox"
                                          ? _c(
                                              "span",
                                              [
                                                _c("el-checkbox", {
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
                                                _c("el-input", {
                                                  attrs: {
                                                    size: "small",
                                                    placeholder: item.holder
                                                  },
                                                  model: {
                                                    value:
                                                      scope.row[item.prop][
                                                        item.inProp
                                                      ],
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        scope.row[item.prop],
                                                        item.inProp,
                                                        typeof $$v === "string"
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
                                          : _c("span", [
                                              _vm._v(
                                                _vm._s(
                                                  scope.row[item.prop][
                                                    item.inProp
                                                  ]
                                                )
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
                            attrs: { data: scope.row["productComp"], fit: "" }
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
                                                      _c("el-checkbox", {
                                                        attrs: { disabled: "" },
                                                        model: {
                                                          value:
                                                            scope.row[
                                                              item.prop
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
                                                                scope.row[
                                                                  item.prop
                                                                ]
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
                                                                scope.row[
                                                                  item.alt
                                                                ]
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
                                                          ? scope.row[
                                                              item.prop
                                                            ][item.inProp]
                                                          : scope.row[item.prop]
                                                      )
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
              })
            ],
            2
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
                {
                  attrs: { type: "primary" },
                  on: { click: _vm.confirmAddProDtl }
                },
                [_vm._v("确定")]
              ),
              _vm._v(" "),
              _c("el-button", { on: { click: _vm.cancelAddProDtl } }, [
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