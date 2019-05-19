webpackJsonp([49],{

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(786)
/* template */
var __vue_template__ = __webpack_require__(787)
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
Component.options.__file = "resources/assets/js/views/reSupplied/reSApplication.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0eb6344b", Component.options)
  } else {
    hotAPI.reload("data-v-0eb6344b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 786:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_element_china_area_data__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_element_china_area_data___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_element_china_area_data__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
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



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      newOpt: [{
        cnt: '新增',
        icon: 'bf-add',
        ent: this.addOrder
      }, {
        cnt: '修改',
        icon: 'bf-change',
        ent: this.updateOrder,
        nClick: false
      }, {
        cnt: '提交',
        icon: 'bf-submit',
        ent: this.submit,
        nClick: false
      }, {
        cnt: '驳回',
        icon: 'bf-reject',
        ent: this.reject,
        nClick: true
      }, {
        cnt: '打印',
        icon: 'bf-printer',
        ent: this.test
      }, {
        cnt: '作废',
        icon: 'bf-void',
        ent: this.void
      }, {
        cnt: '刷新',
        icon: 'bf-refresh',
        ent: this.refresh
      }],
      checkboxInit: false,
      currentPage: true,
      filterBox: false,
      activeName: '0',
      bottomActiveName: '0',
      searchBox: {
        resupply_order_no: '',
        member_nick: '',
        member_name: '',
        re_supplie_categories_id: '',
        receiver_state: '',
        receiver_city: '',
        receiver_district: '',
        suppliers_id: ''
      },
      //分页
      pagination: {
        current_page: 1,
        per_page: 0,
        page_total: 0
      },
      /*提交信息 */
      submitData: [],
      submitHead: [{
        label: '补件单号',
        width: '220',
        prop: 'resupply_order_no',
        type: 'text'
      }, {
        label: '系统单号',
        width: '220',
        prop: 'system_order_no',
        type: 'text'
      }, {
        label: '补件类别',
        width: '140',
        prop: 'resupplieCategory',
        inProp: 'name',
        type: 'text'
      }, {
        label: '补件金额',
        width: '130',
        prop: 'resupply_money',
        type: 'number'
      }, {
        label: '补件原因',
        width: '300',
        prop: 'resupply_reason',
        type: 'text'
      }, {
        label: '补件责任方',
        width: '160',
        prop: 'resupplieResponsible',
        inProp: 'name',
        type: 'text'
      }, {
        label: '店铺昵称',
        width: '130',
        prop: 'shop_nick',
        type: 'text'
      }, {
        label: '买家昵称',
        width: '130',
        prop: 'member_nick',
        type: 'text'
      }, {
        label: '店铺分组',
        width: '140',
        prop: 'shop_group',
        type: 'text'
      }, {
        label: '买家姓名',
        width: '130',
        prop: 'member_name',
        type: 'text'
      }, {
        label: '买家电话',
        width: '160',
        prop: 'member_phone',
        type: 'number'
      }, {
        label: '物流公司',
        width: '140',
        prop: 'logistic',
        inProp: 'name',
        type: 'text'
      }, {
        label: '预计运费',
        width: '130',
        prop: 'estimated_fee',
        type: 'number'
      }, {
        label: '物流赔偿费用',
        width: '130',
        prop: 'compensate_fee',
        type: 'number'
      }, {
        label: '运费类型',
        width: '140',
        prop: 'freightType',
        inProp: 'name',
        type: 'text'
      }, {
        label: '供应商',
        width: '130',
        prop: 'supplier',
        inProp: 'name',
        type: 'text'
      }, {
        label: '配送方式',
        width: '160',
        prop: 'distributionMethod',
        inProp: 'name',
        type: 'text'
      }, {
        label: '送装费',
        width: '130',
        prop: 'load_fee',
        type: 'number'
      }, {
        label: '承诺时间',
        width: '140',
        prop: 'promise_time',
        type: 'text'
      }, {
        label: '补款方式',
        width: '140',
        prop: 'refundMethod',
        inProp: 'name',
        type: 'text'
      }, {
        label: '补款账号',
        width: '160',
        prop: 'refund_account',
        type: 'text'
      }, {
        label: '开户银行',
        width: '140',
        prop: 'bank',
        type: 'text'
      }, {
        label: '省',
        width: '120',
        prop: 'receiver_state',
        type: 'text'
      }, {
        label: '市',
        width: '120',
        prop: 'receiver_city',
        type: 'text'
      }, {
        label: '区',
        width: '120',
        prop: 'receiver_district',
        type: 'text'
      }, {
        label: '创建人',
        width: '140',
        prop: 'creator',
        type: 'text'
      }, {
        label: '创建时间',
        width: '140',
        prop: 'created_at',
        type: 'text'
      }, {
        label: '备注',
        width: '300',
        prop: 'remark',
        type: 'text'
      }, {
        label: '标记名称',
        width: '140',
        prop: 'mark_name',
        type: 'text'
      }, {
        label: '标记人',
        width: '140',
        prop: 'marker',
        type: 'text'
      }, {
        label: '标记时间',
        width: '140',
        prop: 'mark_time',
        type: 'text'
      }],
      /*补件产品信息 */
      resupplyInfoData: [], //补件产品
      problemProData: [], //问题产品
      imageData: [], //图片信息
      rejectReasonData: [], //驳回原因
      operationData: [], //操作记录
      progressData: [], //补件进度
      resupplyInfoHead: [
      //补件产品
      {
        label: '商品编码',
        width: '160',
        prop: 'product',
        inProp: 'commodity_code',
        type: 'text'
      }, {
        label: '子件编码',
        width: '160',
        prop: 'productComponent',
        inProp: 'component_code',
        type: 'text'
      }, {
        label: '商品简称',
        width: '160',
        prop: 'product',
        inProp: 'short_name',
        type: 'text'
      }, {
        label: '规格名称',
        width: '160',
        prop: 'productComponent',
        inProp: 'spec',
        type: 'text'
      }, {
        label: '数量',
        width: '120',
        prop: 'quantity',
        type: 'number'
      }, {
        label: '商品成本',
        width: '120',
        prop: 'productComponent',
        inProp: 'cost',
        type: 'number'
      }, {
        label: '实际售价',
        width: '120',
        prop: 'actual_price',
        type: 'number'
      }, {
        label: '备注',
        width: '200',
        prop: 'remark',
        type: 'text'
      }],
      problemProHead: [
      //问题产品
      {
        label: '商品编码',
        width: '160',
        prop: 'commodity_code',
        type: 'text'
      }, {
        label: '子件编码',
        width: '160',
        prop: 'spec_code',
        type: 'text'
      }, {
        label: '商品简称',
        width: '160',
        prop: 'short_name',
        type: 'text'
      }, {
        label: '规格名称',
        width: '160',
        prop: 'spec',
        type: 'text'
      }, {
        label: '供应商',
        width: '130',
        prop: 'supplier',
        inProp: 'name',
        type: 'text'
      }, {
        label: '问题描述',
        width: '200',
        prop: 'problem_description',
        type: 'text'
      }],
      imageHead: [
      //图片信息
      {
        prop: 'img_url',
        tyep: 'img'
      }],
      rejectReasonHead: [
      //驳回原因
      {
        label: '驳回人',
        width: '130',
        prop: 'rejecter',
        type: 'text'
      }, {
        label: '驳回时间',
        width: '130',
        prop: 'created_at',
        type: 'text'
      }, {
        label: '驳回原因',
        width: '200',
        prop: 'reason',
        type: 'text'
      }],
      operationHead: [
      //操作记录
      {
        label: '用户',
        width: '130',
        prop: 'user_name',
        type: 'text'
      }, {
        label: '操作',
        width: '160',
        prop: 'operated',
        type: 'text'
      }, {
        label: '操作描述',
        width: '200',
        prop: 'description',
        type: 'text'
      }, {
        label: '创建时间',
        width: '130',
        prop: 'created_at',
        type: 'text'
      }],
      progressHead: [
      //补件进度
      {
        label: '进度描述',
        width: '200',
        prop: 'description',
        type: 'text'
      }, {
        label: '创建人',
        width: '150',
        prop: 'creator',
        type: 'text'
      }, {
        label: '创建时间',
        width: '200',
        prop: 'created_at',
        type: 'text'
      }],
      orderId: '',
      orderRow: {},
      options: __WEBPACK_IMPORTED_MODULE_0_element_china_area_data__["regionDataPlus"],
      moreForms: true,
      //新增
      addMask: false,
      resupplyIndex: '',
      problemProIndex: '',
      //resData:[],
      addOrderForm: {
        orders_id: '',
        system_order_no: '',
        member_name: '',
        member_phone: '',
        re_supplie_categories_id: '',
        resupply_money: 0,
        refund_methods_id: '',
        refund_account: '',
        bank: '',
        receiver_state: '',
        receiver_city: '',
        receiver_district: '',
        logistics_id: '',
        estimated_fee: 0,
        compensate_fee: 0,
        load_fee: 0,
        suppliers_id: '',
        resupply_reason: '',
        distribution_methods_id: '',
        freight_types_id: '',
        promise_time: '',
        remark: '',
        address: '',
        re_supplie_responsibles_id: '',
        package_types_id: ''
      },
      addResupplyInfoVal: [
        /*{
          products_id: '',
          product_components_id: '',
          quantity: '',
          actual_price: '',
          remark: '',
          commodity_code:'',
          component_code:'',
          cost:'',
        }*/
      ],
      addResupplyInfoArr: [],
      addProblemProVal: [
        /*{
          products_id: '',
          product_components_id: '',
          suppliers_id: '',
          commodity_code:'',
          problem_description: ''
        }*/
      ],
      addProblemProArr: [],
      addOrderHead: [{
        label: '补件单号',
        prop: 'resupply_order_no',
        holder: '系统自动生成',
        type: 'text',
        addChgAble: true
      }, {
        label: '系统单号',
        prop: 'system_order_no',
        holder: '请输入系统单号',
        type: 'text',
        addChgAble: true,
        updateChgAble: true
      }, {
        label: '买家姓名',
        prop: 'member_name',
        holder: '请输入买家姓名',
        type: 'text'
      }, {
        label: '买家电话',
        prop: 'member_phone',
        holder: '请输入买家电话',
        type: 'text'
      }, {
        label: '补件类别',
        prop: 're_supplie_categories_id',
        holder: '请选择补件类别',
        type: 'select',
        stateVal: 'resupplieCategory'
      }, {
        label: '补件金额',
        prop: 'resupply_money',
        holder: '请输入补件金额',
        type: 'number'
      }, {
        label: '补款方式',
        prop: 'refund_methods_id',
        holder: '请选择补款方式',
        type: 'select',
        stateVal: 'refundMethod'
      }, {
        label: '补款账号',
        prop: 'refund_account',
        holder: '请输入补款账号',
        type: 'text'
      }, {
        label: '开户银行',
        prop: 'bank',
        holder: '请输入开户银行',
        type: 'text'
      }, {
        label: '收货人省',
        prop: 'receiver_state',
        holder: '请输入收货人省',
        type: 'text'
      }, {
        label: '收货人市',
        prop: 'receiver_city',
        holder: '请输入收货人市',
        type: 'text'
      }, {
        label: '收货人区',
        prop: 'receiver_district',
        holder: '请输入收货人区',
        type: 'text'
      }, {
        label: '物流公司',
        prop: 'logistics_id',
        holder: '请选择物流公司',
        type: 'select',
        stateVal: 'logistics'
      }, {
        label: '预计运费',
        prop: 'estimated_fee',
        holder: '请输入预计运费',
        type: 'number'
      }, {
        label: '物流补偿费',
        prop: 'compensate_fee',
        holder: '请输入物流补偿费',
        type: 'number'
      }, {
        label: '送装费',
        prop: 'load_fee',
        holder: '请输入送装费',
        type: 'number'
      }, {
        label: '供应商',
        prop: 'suppliers_id',
        holder: '请选择供应商',
        type: 'select',
        stateVal: 'suppliers'
      }, {
        label: '补件原因',
        prop: 'resupply_reason',
        holder: '请输入补件原因',
        type: 'textarea'
      }, {
        label: '配送方式',
        prop: 'distribution_methods_id',
        holder: '请选择配送方式',
        type: 'select',
        stateVal: 'distmets'
      }, {
        label: '运费类型',
        prop: 'freight_types_id',
        holder: '请选择运费类型',
        type: 'select',
        stateVal: 'freighttypes'
      },
      /*{
        label: '承诺时间',
        prop: 'promise_time',
        holder: '请输入承诺时间',
        type: 'DatePicker'
      },*/
      {
        label: '客服备注',
        prop: 'remark',
        holder: '请输入客服备注',
        type: 'textarea'
      }, {
        label: '收货地址',
        prop: 'address',
        holder: '请输入收货地址',
        type: 'textarea'
      }, {
        label: '补件责任方',
        prop: 're_supplie_responsibles_id',
        holder: '请选择补件责任方',
        type: 'select',
        stateVal: 'resupplieResponsible'
      }, {
        label: '包件类型',
        holder: '请选择包件类型',
        prop: 'package_types_id',
        type: 'select',
        stateVal: 'packageType'
      }],
      orderRules: {
        re_supplie_categories_id: [{ required: true, message: '请选择补件类别', trigger: 'blur' }],
        refund_methods_id: [{ required: true, message: '请选择补款方式', trigger: 'blur' }],
        logistics_id: [{ required: true, message: '请选择物流公司', trigger: 'blur' }],
        suppliers_id: [{ required: true, message: '请选择供应商', trigger: 'blur' }],
        distribution_methods_id: [{ required: true, message: '请选择配送方式', trigger: 'blur' }],
        freight_types_id: [{ required: true, message: '请选择运费类型', trigger: 'blur' }],
        re_supplie_responsibles_id: [{ required: true, message: '请选择补件责任方', trigger: 'blur' }],
        package_types_id: [{ required: true, message: '请选择包件类型', trigger: 'blur' }]
      },
      addProblemProHead: [{
        label: '商品编码',
        width: '160',
        prop: 'commodity_code',
        type: 'text'
      }, {
        label: '子件编码',
        width: '160',
        prop: 'spec_code',
        type: 'text'
      }, {
        label: '商品简称',
        width: '150',
        prop: 'short_name',
        type: 'text'
      }, {
        label: '规格',
        width: '200',
        prop: 'spec',
        type: 'text'
      }, {
        label: '供应商',
        width: '130',
        prop: 'suppliers',
        type: 'text'
      }, {
        label: '问题描述',
        width: '200',
        prop: 'problem_description',
        type: 'textarea',
        fillable: true
      }],
      addResupplyInfoHead: [{
        label: '商品编码',
        width: '160',
        prop: 'commodity_code',
        type: 'text'
      }, {
        label: '子件编码',
        width: '160',
        prop: 'component_code',
        type: 'text'
      }, {
        label: '数量',
        width: '120',
        prop: 'quantity',
        type: 'number',
        fillable: true
      }, {
        label: '商品成本',
        width: '120',
        prop: 'cost',
        type: 'number'
      }, {
        label: '实际售价',
        width: '120',
        prop: 'actual_price',
        type: 'number'
      }, {
        label: '备注',
        width: '200',
        prop: 'remark',
        type: 'textarea',
        fillable: true
      }],
      //新增补件产品
      addResupplyProMask: false,
      addResupplyProVal: [],
      addResupplyProRow: {},
      addResupplyCompVal: [],
      addResupplyProHead: [{
        label: '商品编码',
        width: '200',
        prop: 'commodity_code',
        type: 'text'
      }, {
        label: '商品简称',
        width: '150',
        prop: 'short_name',
        type: 'text'
      }, {
        label: '商品类别',
        width: '150',
        prop: 'goodsCategory',
        inProp: 'name',
        type: 'text'
      }],
      addResupplyCompHead: [{
        label: '子件编码',
        width: '200',
        prop: 'component_code',
        type: 'text'
      }, {
        label: '规格',
        width: '200',
        prop: 'spec',
        type: 'text'
      }, {
        label: '成本',
        width: '120',
        prop: 'cost',
        type: 'number'
      }, {
        label: '淘宝售价',
        width: '120',
        prop: 'tb_price',
        type: 'text'
      }, {
        label: '标准售价',
        width: '200',
        prop: 'price',
        type: 'text'
      }, {
        label: '体积',
        width: '120',
        prop: 'volume',
        type: 'number'
      }, {
        label: '包件数量',
        width: '120',
        prop: 'package_quantity',
        type: 'number'
      }, {
        label: '库存预警数量',
        width: '150',
        prop: 'inventory_warning',
        type: 'number'
      }],
      //新增问题产品
      addProblemProMask: false,
      problemOrderVal: [],
      problemOrderRow: [],
      problemProductVal: [],
      problemOrderHead: [{
        label: '系统单号',
        width: '200',
        prop: 'system_order_no',
        type: 'text'
      }, {
        label: '淘宝单号',
        width: '200',
        prop: 'taobao_oid',
        type: 'text'
      }, {
        label: '会员昵称',
        width: '160',
        prop: 'member_nick',
        type: 'text'
      }, {
        label: '收货人',
        width: '160',
        prop: 'receiver_name',
        type: 'text'
      }, {
        label: '收货人省',
        width: '160',
        prop: 'receiver_state',
        type: 'text'
      }, {
        label: '收货人市',
        width: '160',
        prop: 'receiver_city',
        type: 'text'
      }, {
        label: '收货人区',
        width: '160',
        prop: 'receiver_district',
        type: 'text'
      }],
      problemProductHead: [{
        label: '商品编码',
        width: '160',
        prop: 'commodity_code',
        type: 'text'
      }, {
        label: '子件编码',
        width: '160',
        prop: 'spec_code',
        type: 'text'
      }, {
        label: '商品简称',
        width: '150',
        prop: 'short_name',
        type: 'text'
      }, {
        label: '规格',
        width: '200',
        prop: 'spec',
        type: 'text'
        /*{
          label: '供应商',
          width: '130',
          prop: 'suppliers',
          type: 'text'
        }*/
      }],
      //修改
      updateMask: false,
      updateResupplyInfoIndex: '',
      updateproblemProIndex: '',
      updateOrderForm: {},
      updateProblemProVal: [],
      updateResupplyInfoVal: [],
      updateResupplyInfoHead: [{
        label: '商品编码',
        width: '160',
        prop: 'product',
        inProp: 'commodity_code',
        type: 'text'
      }, {
        label: '子件编码',
        width: '160',
        prop: 'productComponent',
        inProp: 'component_code',
        type: 'text'
      }, {
        label: '数量',
        width: '120',
        prop: 'quantity',
        type: 'number',
        fillable: true
      }, {
        label: '商品成本',
        width: '120',
        prop: 'productComponent',
        inProp: 'cost',
        type: 'number'
      }, {
        label: '实际售价',
        width: '120',
        prop: 'actual_price',
        type: 'number'
      }, {
        label: '备注',
        width: '200',
        prop: 'remark',
        type: 'textarea',
        fillable: true
      }],
      //选择
      currentId: '',
      orderSelection: '',
      delUrl: '',
      delId: '',
      delArr: [],
      //驳回
      rejectMask: false,
      rejectForm: {
        rejecter: '',
        reason: ''
      },
      rejectHead: [{
        label: '驳回人',
        holder: '请输入驳回人',
        prop: 'rejecter',
        type: 'text'
      }, {
        label: '驳回原因',
        holder: '请输入驳回原因',
        prop: 'reason',
        type: 'textarea'
      }],
      //补件进度
      addProgressMask: false,
      addProgressForm: {
        creator: '',
        description: ''
      },
      addProgressHead: [{
        label: '创建人',
        holder: '请输入创建人',
        prop: 'creator',
        type: 'text',
        updateChgAble: true
      }, {
        label: '进度描述',
        holder: '请输入进度描述',
        prop: 'description',
        type: 'textarea'
      }],
      updateProgressMask: false,
      updateProgressFrom: {},
      //刷新
      orderLoading: true,
      //上传图片
      showChgBtn: false
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
  methods: (_methods = {
    test: function test() {
      console.log(1);
    },

    /*展开 */
    toggleShow: function toggleShow() {
      this.filterBox = !this.filterBox;
    },

    //重置筛选信息
    resets: function resets() {
      this.searchBox = {};
    },

    //获取数据
    fetchData: function fetchData() {
      var _this = this;

      var index = this.activeName - 0;
      switch (index) {
        case 0:
          this.$fetch(this.urls.resupplieApplication + '/searchUnsubmited', {
            include: 'resupplieCategory,resupplieResponsible,logistic,freightType,supplier,distributionMethod,refundMethod,resupplieOrderItem.resupplieOrder,resupplieOrderItem.productComponent,resupplieOrderItem.product,resupplieProblemProduct.resupplieOrder,resupplieProblemProduct.supplier,resupplieImage,resupplieRejectReason,resupplieOperationRecord,resupplieProgress'
          }).then(function (res) {
            _this.orderLoading = false;
            _this.submitData = res.data;
            var pg = res.meta.pagination;
            _this.$store.dispatch('currentPage', pg.current_page);
            _this.$store.commit('PER_PAGE', pg.per_page);
            _this.$store.commit('PAGE_TOTAL', pg.total);
            //请求子数据
            _this.$store.dispatch('suppliers', '/suppliers');
            _this.$store.dispatch('packageType', '/packageType');
            _this.$store.dispatch('distmets', '/distmets');
            _this.$store.dispatch('resupplieCategory', '/resupplieCategory');
            _this.resupplyInfoData = res.data[0] ? res.data[0]['resupplieOrderItem'].data : [];
            _this.problemProData = res.data[0] ? res.data[0]['resupplieProblemProduct'].data : [];
            _this.imageData = res.data[0] ? res.data[0]['resupplieImage'].data : [];
            _this.rejectReasonData = res.data[0] ? res.data[0]['resupplieRejectReason'].data : [];
            _this.operationData = res.data[0] ? res.data[0]['resupplieOperationRecord'].data : [];
            _this.progressData = res.data[0] ? res.data[0]['resupplieProgress'].data : [];
          }, function (err) {
            if (err.response) {
              var arr = err.response.data.errors;
              var arr1 = [];
              for (var i in arr) {
                arr1.push(arr[i]);
              }
              _this.$message.error(arr1.join(','));
            }
          });
          break;
        case 1:
          this.$fetch(this.urls.resupplieApplication + '/searchSubmited', {
            include: 'resupplieCategory,resupplieResponsible,logistic,freightType,supplier,distributionMethod,refundMethod,resupplieOrderItem.resupplieOrder,resupplieOrderItem.productComponent,resupplieOrderItem.product,resupplieProblemProduct.resupplieOrder,resupplieProblemProduct.supplier,resupplieImage,resupplieRejectReason,resupplieOperationRecord,resupplieProgress'
          }).then(function (res) {
            _this.orderLoading = false;
            _this.submitData = res.data;
            var pg = res.meta.pagination;
            _this.$store.dispatch('currentPage', pg.current_page);
            _this.$store.commit('PER_PAGE', pg.per_page);
            _this.$store.commit('PAGE_TOTAL', pg.total);
            //请求子数据
            _this.resupplyInfoData = res.data[0] ? res.data[0]['resupplieOrderItem'].data : [];
            _this.problemProData = res.data[0] ? res.data[0]['resupplieProblemProduct'].data : [];
            _this.imageData = res.data[0] ? res.data[0]['resupplieImage'].data : [];
            _this.rejectReasonData = res.data[0] ? res.data[0]['resupplieRejectReason'].data : [];
            _this.operationData = res.data[0] ? res.data[0]['resupplieOperationRecord'].data : [];
            _this.progressData = res.data[0] ? res.data[0]['resupplieProgress'].data : [];
          }, function (err) {
            if (err.response) {
              var arr = err.response.data.errors;
              var arr1 = [];
              for (var i in arr) {
                arr1.push(arr[i]);
              }
              _this.$message.error(arr1.join(','));
            }
          });
      }
    },

    //筛选
    searchData: function searchData() {
      var _this2 = this;

      this.orderLoading = true;
      var index = this.activeName - 0;
      switch (index) {
        case 0:
          this.$fetch(this.urls.resupplieApplication + '/searchUnsubmited', {
            resupply_order_no: this.searchBox.resupply_order_no,
            member_nick: this.searchBox.member_nick,
            member_name: this.searchBox.member_name,
            re_supplie_categories_id: this.searchBox.re_supplie_categories_id,
            receiver_state: this.searchBox.receiver_state,
            receiver_city: this.searchBox.receiver_city,
            receiver_district: this.searchBox.receiver_district,
            suppliers_id: this.searchBox.suppliers_id,
            include: 'resupplieCategory,resupplieResponsible,logistic,freightType,supplier,distributionMethod,refundMethod,resupplieOrderItem.resupplieOrder,resupplieOrderItem.productComponent,resupplieOrderItem.product,resupplieProblemProduct.resupplieOrder,resupplieProblemProduct.supplier,resupplieImage,resupplieRejectReason,resupplieOperationRecord,resupplieProgress'
          }).then(function (res) {
            _this2.orderLoading = false;
            _this2.submitData = res.data;
            var pg = res.meta.pagination;
            _this2.$store.dispatch('currentPage', pg.current_page);
            _this2.$store.commit('PER_PAGE', pg.per_page);
            _this2.$store.commit('PAGE_TOTAL', pg.total);
            //请求子数据
            _this2.resupplyInfoData = res.data[0] ? res.data[0]['resupplieOrderItem'].data : [];
            _this2.problemProData = res.data[0] ? res.data[0]['resupplieProblemProduct'].data : [];
            _this2.imageData = res.data[0] ? res.data[0]['resupplieImage'].data : [];
            _this2.rejectReasonData = res.data[0] ? res.data[0]['resupplieRejectReason'].data : [];
            _this2.operationData = res.data[0] ? res.data[0]['resupplieOperationRecord'].data : [];
            _this2.progressData = res.data[0] ? res.data[0]['resupplieProgress'].data : [];
          }, function (err) {
            if (err.response) {
              var arr = err.response.data.errors;
              var arr1 = [];
              for (var i in arr) {
                arr1.push(arr[i]);
              }
              _this2.$message.error(arr1.join(','));
            }
          });
          break;
        case 1:
          this.$fetch(this.urls.resupplieApplication + '/searchSubmited', {
            resupply_order_no: this.searchBox.resupply_order_no,
            member_nick: this.searchBox.member_nick,
            member_name: this.searchBox.member_name,
            re_supplie_categories_id: this.searchBox.re_supplie_categories_id,
            receiver_state: this.searchBox.receiver_state,
            receiver_city: this.searchBox.receiver_city,
            receiver_district: this.searchBox.receiver_district,
            suppliers_id: this.searchBox.suppliers_id,
            include: 'resupplieCategory,resupplieResponsible,logistic,freightType,supplier,distributionMethod,refundMethod,resupplieOrderItem.resupplieOrder,resupplieOrderItem.productComponent,resupplieOrderItem.product,resupplieProblemProduct.resupplieOrder,resupplieProblemProduct.supplier,resupplieImage,resupplieRejectReason,resupplieOperationRecord,resupplieProgress'
          }).then(function (res) {
            _this2.orderLoading = false;
            _this2.submitData = res.data;
            var pg = res.meta.pagination;
            _this2.$store.dispatch('currentPage', pg.current_page);
            _this2.$store.commit('PER_PAGE', pg.per_page);
            _this2.$store.commit('PAGE_TOTAL', pg.total);
            //请求子数据
            _this2.resupplyInfoData = res.data[0] ? res.data[0]['resupplieOrderItem'].data : [];
            _this2.problemProData = res.data[0] ? res.data[0]['resupplieProblemProduct'].data : [];
            _this2.imageData = res.data[0] ? res.data[0]['resupplieImage'].data : [];
            _this2.rejectReasonData = res.data[0] ? res.data[0]['resupplieRejectReason'].data : [];
            _this2.operationData = res.data[0] ? res.data[0]['resupplieOperationRecord'].data : [];
            _this2.progressData = res.data[0] ? res.data[0]['resupplieProgress'].data : [];
          }, function (err) {
            if (err.response) {
              var arr = err.response.data.errors;
              var arr1 = [];
              for (var i in arr) {
                arr1.push(arr[i]);
              }
              _this2.$message.error(arr1.join(','));
            }
          });
      }
    },
    orderRClick: function orderRClick(row) {
      //点击上方tab的某行底部tab更新
      this.orderId = row.id;
      this.resupplyInfoData = row['resupplieOrderItem'].data;
      this.problemProData = row['resupplieProblemProduct'].data;
      this.imageData = row['resupplieImage'].data;
      this.rejectReasonData = row['resupplieRejectReason'].data;
      this.operationData = row['resupplieOperationRecord'].data;
      this.progressData = row['resupplieProgress'].data;
      this.orderRow = row;
    },

    //提交信息tab切换
    handleTabsClick: function handleTabsClick() {
      this.newOpt[0].nClick = this.activeName == '1' ? true : false; //新增
      this.newOpt[1].nClick = this.activeName == '1' ? true : false; //修改
      this.newOpt[2].nClick = this.activeName == '1' ? true : false; //提交
      this.newOpt[3].nClick = this.activeName == '0' ? true : false; //驳回
      this.newOpt[5].nClick = this.activeName == '1' ? true : false; //作废
      this.refresh();
    },

    /*补件信息tab */
    bottomTabsClick: function bottomTabsClick() {},

    //新增
    addOrder: function addOrder() {
      this.addMask = true;
      this.resupplyIndex = 'index0';
      this.problemProIndex = 'index0';
      Object.assign(this.addOrderForm, this.$options.data().addOrderForm);
      Object.assign(this.addResupplyInfoVal, this.$options.data().addResupplyInfoVal);
      Object.assign(this.addProblemProVal, this.$options.data().addProblemProVal);
      this.$store.dispatch('logistics', '/logistics');
      this.$store.dispatch('freighttypes', '/freighttypes');
      this.$store.dispatch('resupplieResponsible', '/resupplieResponsible');
      this.$store.dispatch('refundMethod', '/refundMethod');
    },
    addConfirm: function addConfirm() {
      var _this3 = this;

      var orderData = {
        orders_id: this.addOrderForm.orders_id,
        system_order_no: this.addOrderForm.system_order_no,
        member_name: this.addOrderForm.member_name,
        member_phone: this.addOrderForm.member_phone,
        re_supplie_categories_id: this.addOrderForm.re_supplie_categories_id,
        resupply_money: this.addOrderForm.resupply_money,
        refund_methods_id: this.addOrderForm.refund_methods_id,
        refund_account: this.addOrderForm.refund_account,
        bank: this.addOrderForm.bank,
        logistics_id: this.addOrderForm.logistics_id,
        estimated_fee: this.addOrderForm.estimated_fee,
        compensate_fee: this.addOrderForm.compensate_fee,
        load_fee: this.addOrderForm.load_fee,
        suppliers_id: this.addOrderForm.suppliers_id,
        resupply_reason: this.addOrderForm.resupply_reason,
        distribution_methods_id: this.addOrderForm.distribution_methods_id,
        freight_types_id: this.addOrderForm.freight_types_id,
        //promise_time: new Date(this.createdTimeFormat(this.addOrderForm.promise_time)),
        remark: this.addOrderForm.remark,
        address: this.addOrderForm.address,
        re_supplie_responsibles_id: this.addOrderForm.re_supplie_responsibles_id,
        package_types_id: this.addOrderForm.package_types_id,
        re_supplie_order_items: this.addResupplyInfoVal,
        re_supplie_problem_products: this.addProblemProVal
      };
      this.$post(this.urls.resupplieApplication, orderData).then(function () {
        _this3.addMask = false;
        _this3.addResupplyInfoVal = [];
        _this3.addProblemProVal = [];
        _this3.refresh();
        _this3.$message({
          message: '添加成功',
          type: 'success'
        });
      }, function (err) {
        if (err.response) {
          var arr = err.response.data.errors;
          var arr1 = [];
          for (var i in arr) {
            arr1.push(arr[i]);
          }
          var str = arr1.join(',');
          _this3.$message.error(str);
        }
      });
    },
    addCancel: function addCancel() {
      this.addMask = false;
    },
    addInfoCName: function addInfoCName(_ref) {
      var row = _ref.row,
          rowIndex = _ref.rowIndex;

      row.index = rowIndex;
    },
    addInfoRowClick: function addInfoRowClick(row) {
      this.resupplyIndex = 'index' + row.index;
    },
    addProCName: function addProCName(_ref2) {
      var row = _ref2.row,
          rowIndex = _ref2.rowIndex;

      row.index = rowIndex;
    },
    addProRowClick: function addProRowClick(row) {
      this.problemProIndex = 'index' + row.index;
    },
    addProDel: function addProDel(index) {
      this.addProblemProVal.splice(index, 1);
      this.$message({
        message: '删除问题成功',
        type: 'success'
      });
    },
    addResupplyInfoDel: function addResupplyInfoDel(index) {
      this.addResupplyInfoVal.splice(index, 1);
      this.$message({
        message: '删除补件产品成功',
        type: 'success'
      });
    },
    addProblemPro: function addProblemPro() {
      var _this4 = this;

      this.addProblemProMask = true;
      this.$fetch(this.urls.customerservicedepts).then(function (res) {
        _this4.problemOrderVal = res.data;
        _this4.$fetch(_this4.urls.problemProduct).then(function (res) {
          _this4.problemProductVal = res.data;
        }, function (err) {
          if (err.response) {
            var arr = err.response.data.errors;
            var arr1 = [];
            for (var i in arr) {
              arr1.push(arr[i]);
            }
            _this4.$message.error(arr1.join(','));
          }
        });
      }, function (err) {
        if (err.response) {
          var arr = err.response.data.errors;
          var arr1 = [];
          for (var i in arr) {
            arr1.push(arr[i]);
          }
          _this4.$message.error(arr1.join(','));
        }
      });
      /*let problemProKey = {
        products_id: '',
        product_components_id: '',
        suppliers_id: '',
        problem_description: ''
      };
      if (this.addMask) {
        this.addProblemProVal.push(problemProKey);
        this.problemProIndex = 'index' + (this.addProblemProVal.length - 1);
      } else {
        this.updateProblemProVal.push(problemProKey);
        this.updateproblemProIndex =
          'index' + (this.updateProblemProVal.length - 1);
      }*/
    },
    addProblemProConfirm: function addProblemProConfirm() {
      var _this5 = this;

      this.addProblemProMask = false;
      if (this.addMask) {
        this.addOrderForm.orders_id = this.problemOrderRow.id;
        this.addOrderForm.system_order_no = this.problemOrderRow.system_order_no;
        this.addOrderForm.member_nick = this.problemOrderRow.member_nick;
        this.addOrderForm.receiver_state = this.problemOrderRow.receiver_state;
        this.addOrderForm.receiver_city = this.problemOrderRow.receiver_city;
        this.addOrderForm.receiver_district = this.problemOrderRow.receiver_district;
        this.addOrderForm.address = this.problemOrderRow.receiver_address;
        this.addOrderForm.logistics_id = this.problemOrderRow.logistics_id;
        this.addOrderForm.distribution_methods_id = this.problemOrderRow.distribution_methods_id;
        this.addProblemProArr.forEach(function (item) {
          _this5.addProblemProVal.push(item);
        });
      } else {
        this.updateOrderForm.system_order_no = this.problemOrderRow.system_order_no;
        this.updateOrderForm.member_nick = this.problemOrderRow.member_nick;
        this.updateOrderForm.receiver_state = this.problemOrderRow.receiver_state;
        this.updateOrderForm.receiver_city = this.problemOrderRow.receiver_city;
        this.updateOrderForm.receiver_district = this.problemOrderRow.receiver_district;
        this.updateOrderForm.address = this.problemOrderRow.receiver_address;
        this.updateOrderForm.logistics_id = this.problemOrderRow.logistics_id;
        this.updateOrderForm.distribution_methods_id = this.problemOrderRow.distribution_methods_id;
        this.addProblemProArr.forEach(function (item) {
          _this5.updateProblemProVal.push(item);
        });
      }

      this.addProblemProArr = [];
      this.problemProductVal = [];
      this.problemOrderVal = [];
    },
    addProblemProCancel: function addProblemProCancel() {
      this.addProblemProMask = false;
      this.problemOrderVal = [];
      this.problemProductVal = [];
    },
    addResupplyInfo: function addResupplyInfo() {
      var _this6 = this;

      this.addResupplyProMask = true;
      this.$fetch(this.urls.products, {
        include: 'productComponents,goodsCategory'
      }).then(function (res) {
        _this6.addResupplyProVal = res.data;
        _this6.addResupplyCompVal = res.data[0]['productComponents'].data;
      }, function (err) {
        if (err.response) {
          var arr = err.response.data.errors;
          var arr1 = [];
          for (var i in arr) {
            arr1.push(arr[i]);
          }
          var str = arr1.join(',');
          _this6.$message.error({
            message: str
          });
        }
      });
    },
    addResupplyProConfirm: function addResupplyProConfirm() {
      var _this7 = this;

      this.addResupplyProMask = false;
      if (this.addMask) {
        this.addResupplyInfoArr.forEach(function (item) {
          _this7.addResupplyInfoVal.push(item);
        });
      } else {
        this.addResupplyInfoArr.forEach(function (item) {
          _this7.updateResupplyInfoVal.push(item);
        });
      }
      this.addResupplyInfoArr = [];
      this.addResupplyProVal = [];
      this.addResupplyCompVal = [];
    },
    addResupplyProCancel: function addResupplyProCancel() {
      this.addResupplyProMask = false;
      this.addResupplyProVal = [];
      this.addResupplyCompVal = [];
    },
    proRClick: function proRClick(row) {
      this.addResupplyProRow = row;
      this.addResupplyCompVal = row['productComponents'].data;
    },
    CompSelectionChange: function CompSelectionChange(val) {
      var _this8 = this;

      this.addResupplyInfoArr = [];
      val.forEach(function (selectedItem) {
        var item = {
          products_id: _this8.addResupplyProRow.id,
          product_components_id: selectedItem.id,
          quantity: 0,
          actual_price: selectedItem.price,
          commodity_code: _this8.addResupplyProRow.commodity_code,
          component_code: selectedItem.component_code,
          cost: selectedItem.cost,
          remark: ''
        };
        _this8.addResupplyInfoArr.push(item);
      });
    }
  }, _defineProperty(_methods, 'orderRClick', function orderRClick(row) {
    this.problemOrderRow = row;
    //this.problemProductVal = row['problemProduct'].data;
    console.log(this.problemOrderRow);
  }), _defineProperty(_methods, 'problemProSelectionChange', function problemProSelectionChange(val) {
    var _this9 = this;

    this.addProblemProArr = [];
    val.forEach(function (selectedItem) {
      var item = {
        commodity_code: selectedItem.commodity_code,
        spec_code: selectedItem.spec_code,
        short_name: selectedItem.short_name,
        spec: selectedItem.spec,
        suppliers_id: selectedItem.supplier_id,
        problem_description: ''
      };
      _this9.addProblemProArr.push(item);
    });
  }), _defineProperty(_methods, 'updateOrder', function updateOrder() {
    var _this10 = this;

    if (this.delArr.length === 0) {
      this.$message({
        message: '没有选中数据',
        type: 'warning'
      });
    } else {
      this.updateResupplyInfoIndex = '';
      this.updateproblemProIndex = '';
      this.updateOrderForm = {};
      this.updateProblemProVal = [];
      this.updateResupplyInfoVal = [];
      this.updateMask = true;
      var id = this.currentId ? this.currentId : this.orderRow.id;
      this.$fetch(this.urls.resupplieApplication + '/' + id, {
        include: 'resupplieCategory,resupplieResponsible,logistic,freightType,supplier,distributionMethod,refundMethod,resupplieOrderItem.resupplieOrder,resupplieOrderItem.productComponent,resupplieOrderItem.product,resupplieProblemProduct.resupplieOrder,resupplieProblemProduct.supplier,resupplieImage,resupplieRejectReason,resupplieOperationRecord,resupplieProgress'
      }).then(function (res) {
        _this10.updateOrderForm = res;
        _this10.updateProblemProVal = res['resupplieProblemProduct']['data'];
        _this10.updateResupplyInfoVal = res['resupplieOrderItem']['data'];
        _this10.$store.dispatch('logistics', '/logistics');
        _this10.$store.dispatch('freighttypes', '/freighttypes');
        _this10.$store.dispatch('resupplieResponsible', '/resupplieResponsible');
        _this10.$store.dispatch('refundMethod', '/refundMethod');
      }, function (err) {
        if (err.response) {
          var arr = err.response.data.errors;
          var arr1 = [];
          for (var i in arr) {
            arr1.push(arr[i]);
          }
          var str = arr1.join(',');
          _this10.$message.error(str);
        }
      });
    }
  }), _defineProperty(_methods, 'updateConfirm', function updateConfirm() {
    var _this11 = this;

    var id = this.currentId ? this.currentId : this.orderRow.id;
    var updateData = {
      system_order_no: this.updateOrderForm.system_order_no,
      member_name: this.updateOrderForm.member_name,
      member_phone: this.updateOrderForm.member_phone,
      re_supplie_categories_id: this.updateOrderForm.re_supplie_categories_id,
      resupply_money: this.updateOrderForm.resupply_money,
      refund_methods_id: this.updateOrderForm.refund_methods_id,
      refund_account: this.updateOrderForm.refund_account,
      bank: this.updateOrderForm.bank,
      logistics_id: this.updateOrderForm.logistics_id,
      estimated_fee: this.updateOrderForm.estimated_fee,
      compensate_fee: this.updateOrderForm.compensate_fee,
      load_fee: this.updateOrderForm.load_fee,
      suppliers_id: this.updateOrderForm.suppliers_id,
      resupply_reason: this.updateOrderForm.resupply_reason,
      distribution_methods_id: this.updateOrderForm.distribution_methods_id,
      freight_types_id: this.updateOrderForm.freight_types_id,
      //promise_time: new Date(this.createdTimeFormat(this.updateOrderForm.promise_time)),
      remark: this.updateOrderForm.remark,
      address: this.updateOrderForm.address,
      re_supplie_responsibles_id: this.updateOrderForm.re_supplie_responsibles_id,
      package_types_id: this.updateOrderForm.package_types_id,
      re_supplie_order_items: this.updateResupplyInfoVal,
      re_supplie_problem_products: this.updateProblemProVal
    };
    console.log(this.updateOrderForm.promise_time);
    console.log(updateData.promise_time);
    this.$patch(this.urls.resupplieApplication + '/' + id, updateData).then(function () {
      _this11.updateMask = false;
      _this11.refresh();
      _this11.$message({
        message: '修改成功',
        type: 'success'
      });
    }, function (err) {
      if (err.response) {
        var arr = err.response.data.errors;
        var arr1 = [];
        for (var i in arr) {
          arr1.push(arr[i]);
        }
        var str = arr1.join(',');
        _this11.$message.error(str);
      }
    });
  }), _defineProperty(_methods, 'updateCancel', function updateCancel() {
    this.updateMask = false;
  }), _defineProperty(_methods, 'updateProDel', function updateProDel(index) {
    var _this12 = this;

    if (row.id) {
      this.$del(this.urls.resupplieProblemProduct + '/' + row.id).then(function () {
        _this12.updateProblemProVal.splice(index, 1);
        _this12.$message({
          message: '删除问题产品成功',
          type: 'success'
        });
      });
    } else {
      this.updateProblemProVal.splice(index, 1);
      this.$message({
        message: '删除问题产品成功',
        type: 'success'
      });
    }
  }), _defineProperty(_methods, 'updateResupplyInfoDel', function updateResupplyInfoDel(index) {
    var _this13 = this;

    if (row.id) {
      this.$del(this.urls.resupplieOrderItem + '/' + row.id).then(function () {
        _this13.updateResupplyInfoVal.splice(index, 1);
        _this13.$message({
          message: '删除补件产品成功',
          type: 'success'
        });
      });
    } else {
      this.updateResupplyInfoVal.splice(index, 1);
      this.$message({
        message: '删除补件产品成功',
        type: 'success'
      });
    }
  }), _defineProperty(_methods, 'handleSelectionChange', function handleSelectionChange(val) {
    var arr = [];
    val.forEach(function (selectedItem) {
      arr.push(selectedItem.id);
    });
    this.delArr = arr.join(',');
    this.currentId = val.length > 0 ? val[val.length - 1].id : '';
  }), _defineProperty(_methods, 'submit', function submit() {
    var _this14 = this;

    var id = this.currentId ? this.currentId : this.orderRow.id;
    this.$put(this.urls.resupplieApplication + '/' + id + '/submit').then(function () {
      _this14.refresh();
      _this14.$message({
        message: '提交成功',
        type: 'success'
      });
    }, function (err) {
      if (err.response) {
        var arr = err.response.data.errors;
        var arr1 = [];
        for (var i in arr) {
          arr1.push(arr[i]);
        }
        var str = arr1.join(',');
        _this14.$message.error(str);
      }
    });
  }), _defineProperty(_methods, 'reject', function reject() {
    this.rejectMask = true;
    Object.assign(this.rejectForm, this.$options.data().rejectForm);
  }), _defineProperty(_methods, 'rejectConfirm', function rejectConfirm() {
    var _this15 = this;

    var id = this.currentId ? this.currentId : this.orderRow.id;
    var rejectData = {
      re_supplie_orders_id: this.currentId ? this.currentId : this.orderRow.id,
      rejecter: this.rejectForm.rejecter,
      reason: this.rejectForm.reason
    };
    this.$post(this.urls.resupplieRejectReason, rejectData).then(function () {
      _this15.$put(_this15.urls.resupplieApplication + '/' + id + '/reject').then(function () {
        _this15.rejectMask = false;
        _this15.refresh();
        _this15.$message({
          message: '驳回成功',
          type: 'success'
        });
      }, function (err) {
        if (err.response) {
          var arr = err.response.data.errors;
          var arr1 = [];
          for (var i in arr) {
            arr1.push(arr[i]);
          }
          var str = arr1.join(',');
          _this15.$message.error(str);
        }
      });
    }, function (err) {
      if (err.response) {
        var arr = err.response.data.errors;
        var arr1 = [];
        for (var i in arr) {
          arr1.push(arr[i]);
        }
        var str = arr1.join(',');
        _this15.$message.error(str);
      }
    });
  }), _defineProperty(_methods, 'rejectCancel', function rejectCancel() {
    this.rejectMask = false;
  }), _defineProperty(_methods, 'addProgress', function addProgress() {
    this.addProgressMask = true;
    Object.assign(this.addProgressForm, this.$options.data().addProgressForm);
  }), _defineProperty(_methods, 'addProgressConfirm', function addProgressConfirm() {
    var _this16 = this;

    var id = this.currentId ? this.currentId : this.orderRow.id;
    var addProgressData = {
      re_supplie_orders_id: this.currentId ? this.currentId : this.orderRow.id,
      description: this.addProgressForm.description,
      creator: this.addProgressForm.creator
    };
    this.$post(this.urls.resupplieProgress, addProgressData).then(function () {
      _this16.addProgressMask = false;
      _this16.refresh();
      _this16.$message({
        message: '添加进度成功',
        type: 'success'
      });
    }, function (err) {
      if (err.response) {
        var arr = err.response.data.errors;
        var arr1 = [];
        for (var i in arr) {
          arr1.push(arr[i]);
        }
        var str = arr1.join(',');
        _this16.$message.error(str);
      }
    });
  }), _defineProperty(_methods, 'addProgressCancel', function addProgressCancel() {
    this.addProgressMask = false;
    this.$message({
      message: '取消添加',
      type: 'info'
    });
  }), _defineProperty(_methods, 'updateProgress', function updateProgress() {
    var _this17 = this;

    this.updateProgressMask = true;
    var id = this.currentId;
    this.$fetch(this.urls.resupplieProgress + '/' + id).then(function (res) {
      _this17.updateProgressFrom = {
        description: res.description,
        creator: res.creator
      };
    }, function (err) {});
  }), _defineProperty(_methods, 'updateProgressConfirm', function updateProgressConfirm() {
    var _this18 = this;

    var id = this.currentId;
    var data = {
      description: this.updateProgressFrom.description,
      creator: this.updateProgressFrom.creator
    };
    this.$patch(this.urls.resupplieProgress + '/' + id, data).then(function () {
      _this18.updateProgressMask = false;
      _this18.refresh();
      _this18.$message({
        message: '修改成功',
        type: 'success'
      });
    }, function (err) {
      if (err.response) {
        var arr = err.response.data.errors;
        var arr1 = [];
        for (var i in arr) {
          arr1.push(arr[i]);
        }
        var str = arr1.join(',');
        _this18.$message.error(str);
      }
    });
  }), _defineProperty(_methods, 'updateProgressCancel', function updateProgressCancel() {
    this.updateMask = false;
    this.$message({
      message: '取消修改',
      type: 'info'
    });
  }), _defineProperty(_methods, 'delProgress', function delProgress() {
    var _this19 = this;

    if (this.delArr.length === 0) {
      this.$message({
        message: '没有选中数据',
        type: 'warning'
      });
    } else {
      this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        _this19.$del(_this19.urls.resupplieProgress, { ids: _this19.delArr }).then(function () {
          _this19.$message({
            message: '删除成功',
            type: 'success'
          });
          _this19.refresh();
        }, function (err) {
          if (err.response) {
            var arr = err.response.data.errors;
            var arr1 = [];
            for (var i in arr) {
              arr1.push(arr[i]);
            }
            var str = arr1.join(',');
            _this19.$message.error(str);
          }
        });
      }).catch(function () {
        _this19.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    }
  }), _defineProperty(_methods, 'void', function _void() {
    var _this20 = this;

    var id = this.currentId ? this.currentId : this.orderRow.id;
    this.$put(this.urls.resupplieCenter + '/' + id + '/invalid').then(function () {
      _this20.refresh();
      _this20.$message({
        message: '作废成功',
        type: 'success'
      });
    }, function (err) {
      if (err.response) {
        var arr = err.response.data.errors;
        var arr1 = [];
        for (var i in arr) {
          arr1.push(arr[i]);
        }
        var str = arr1.join(',');
        _this20.$message.error(str);
      }
    });
  }), _defineProperty(_methods, 'refresh', function refresh() {
    this.orderLoading = true;
    this.resets();
    this.fetchData();
  }), _defineProperty(_methods, 'judgeFm', function judgeFm(file) {
    var isJPG = file.type === 'image/jpeg';
    var isGIF = file.type === 'image/gif';
    var isPNG = file.type === 'image/png';

    if (!isJPG && !isGIF && !isPNG) {
      this.$message.error('上传图片必须是JPG/GIF/PNG 格式!');
    }
  }), _defineProperty(_methods, 'beforeUpload', function beforeUpload(file) {
    var _this21 = this;

    this.showChgBtn = false;
    this.judgeFm(file);
    var formData = new FormData();
    formData.append('image', file);
    this.$post(this.urls.resupplieImage, formData).then(function (res) {
      var imageInfo = res.data.meta;
      if (imageInfo.status_code == 201) {
        _this21.showChgBtn = true;
        _this21.imageData = res.data;
      }
    }).catch(function (err) {});
  }), _defineProperty(_methods, 'handlePagChg', function handlePagChg(page) {
    var _this22 = this;

    this.$fetch(this.urls.resupplieApplication + '?page=' + page, {
      include: 'resupplieCategory,resupplieResponsible,logistic,freightType,supplier,distributionMethod,refundMethod,resupplieOrderItem.resupplieOrder,resupplieOrderItem.productComponent,resupplieOrderItem.product,resupplieProblemProduct.resupplieOrder,resupplieProblemProduct.supplier,resupplieImage,resupplieRejectReason,resupplieOperationRecord,resupplieProgress'
    }).then(function (res) {
      _this22.orderData = res.data;
    });
  }), _defineProperty(_methods, 'createdTimeFormat', function createdTimeFormat(timestamp) {
    var date = new Date(timestamp * 1000);
    var Y = date.getFullYear();
    var M = date.getMonth() + 1;
    M = m < 10 ? '0' + M : M;
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    var h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    var m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    var s = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    return Y + '-' + M + '-' + D + ' ' + h + ':' + m + ':' + s;
  }), _methods),
  mounted: function mounted() {
    this.fetchData();
    this.$store.state.opt.opts = this.newOpt;
    this.$store.commit('change', this.newOpt);
    var that = this;
    $(window).resize(function () {
      return function () {
        that.$store.state.opt.opts = that.newOpt;
        that.$store.commit('change', that.newOpt);
      }();
    });
  }
});

/***/ }),

/***/ 787:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("div", [
        _vm.currentPage
          ? _c("div", { staticClass: "searchBox" }, [
              _c(
                "span",
                [
                  _c("label", [_vm._v("单号")]),
                  _vm._v(" "),
                  _c("el-input", {
                    staticClass: "half",
                    attrs: { clearable: "" },
                    model: {
                      value: _vm.searchBox.resupply_order_no,
                      callback: function($$v) {
                        _vm.$set(_vm.searchBox, "resupply_order_no", $$v)
                      },
                      expression: "searchBox.resupply_order_no"
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
                    staticClass: "half",
                    attrs: { clearable: "" },
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
                  _c("label", [_vm._v("买家姓名")]),
                  _vm._v(" "),
                  _c("el-input", {
                    staticClass: "half",
                    attrs: { clearable: "" },
                    model: {
                      value: _vm.searchBox.member_name,
                      callback: function($$v) {
                        _vm.$set(_vm.searchBox, "member_name", $$v)
                      },
                      expression: "searchBox.member_name"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _vm.filterBox
                ? _c(
                    "span",
                    [
                      _c("label", [_vm._v("补件类别")]),
                      _vm._v(" "),
                      _c(
                        "el-select",
                        {
                          attrs: { clearable: "", placeholder: "请选择" },
                          model: {
                            value: _vm.searchBox.re_supplie_categories_id,
                            callback: function($$v) {
                              _vm.$set(
                                _vm.searchBox,
                                "re_supplie_categories_id",
                                $$v
                              )
                            },
                            expression: "searchBox.re_supplie_categories_id"
                          }
                        },
                        _vm._l(_vm.resData["resupplieCategory"], function(
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
                : _c(
                    "span",
                    [
                      _c(
                        "el-button",
                        {
                          attrs: { type: "primary" },
                          on: { click: _vm.searchData }
                        },
                        [_vm._v("筛选")]
                      ),
                      _vm._v(" "),
                      _c("el-button", { on: { click: _vm.resets } }, [
                        _vm._v("重置")
                      ]),
                      _vm._v(" "),
                      _c(
                        "span",
                        { on: { click: _vm.toggleShow } },
                        [
                          _c("el-button", { attrs: { type: "text" } }, [
                            _vm._v("展开")
                          ]),
                          _vm._v(" "),
                          _c("i", {
                            staticClass: "el-icon-arrow-down",
                            staticStyle: { color: "#409EFF" }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
            ])
          : _vm._e(),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.filterBox,
                expression: "filterBox"
              }
            ],
            staticClass: "searchBox"
          },
          [
            _c(
              "span",
              [
                _c("label", [_vm._v("省")]),
                _vm._v(" "),
                _c("el-input", {
                  staticClass: "half",
                  attrs: { clearable: "" },
                  model: {
                    value: _vm.searchBox.receiver_state,
                    callback: function($$v) {
                      _vm.$set(_vm.searchBox, "receiver_state", $$v)
                    },
                    expression: "searchBox.receiver_state"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "span",
              [
                _c("label", [_vm._v("市")]),
                _vm._v(" "),
                _c("el-input", {
                  staticClass: "half",
                  attrs: { clearable: "" },
                  model: {
                    value: _vm.searchBox.receiver_city,
                    callback: function($$v) {
                      _vm.$set(_vm.searchBox, "receiver_city", $$v)
                    },
                    expression: "searchBox.receiver_city"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "span",
              [
                _c("label", [_vm._v("区")]),
                _vm._v(" "),
                _c("el-input", {
                  staticClass: "half",
                  attrs: { clearable: "" },
                  model: {
                    value: _vm.searchBox.receiver_district,
                    callback: function($$v) {
                      _vm.$set(_vm.searchBox, "receiver_district", $$v)
                    },
                    expression: "searchBox.receiver_district"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "span",
              [
                _c("label", [_vm._v("供应商")]),
                _vm._v(" "),
                _c(
                  "el-select",
                  {
                    attrs: { clearable: "", placeholder: "请选择" },
                    model: {
                      value: _vm.searchBox.suppliers_id,
                      callback: function($$v) {
                        _vm.$set(_vm.searchBox, "suppliers_id", $$v)
                      },
                      expression: "searchBox.suppliers_id"
                    }
                  },
                  _vm._l(_vm.resData["suppliers"], function(list) {
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
            ),
            _vm._v(" "),
            _vm.filterBox
              ? _c(
                  "div",
                  { staticStyle: { "text-align": "right" } },
                  [
                    _c(
                      "el-button",
                      {
                        attrs: { type: "primary" },
                        on: { click: _vm.searchData }
                      },
                      [_vm._v("筛选")]
                    ),
                    _vm._v(" "),
                    _c("el-button", { on: { click: _vm.resets } }, [
                      _vm._v("重置")
                    ]),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticStyle: { display: "inline" },
                        on: { click: _vm.toggleShow }
                      },
                      [
                        _c("el-button", { attrs: { type: "text" } }, [
                          _vm._v("收起")
                        ]),
                        _vm._v(" "),
                        _c("i", {
                          staticClass: "el-icon-arrow-up",
                          staticStyle: { color: "#409EFF" }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              : _vm._e()
          ]
        )
      ]),
      _vm._v(" "),
      _c(
        "el-tabs",
        {
          on: { "tab-click": _vm.handleTabsClick },
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
            { attrs: { label: "未提交", name: "0" } },
            [
              _c(
                "el-table",
                {
                  directives: [
                    {
                      name: "loading",
                      rawName: "v-loading",
                      value: _vm.orderLoading,
                      expression: "orderLoading"
                    }
                  ],
                  attrs: { data: _vm.submitData },
                  on: {
                    "selection-change": _vm.handleSelectionChange,
                    "row-click": _vm.orderRClick
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
                  _vm._l(_vm.submitHead, function(item) {
                    return _c("el-table-column", {
                      key: item.label,
                      attrs: {
                        label: item.label,
                        width: item.width,
                        align: "center"
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
            { attrs: { label: "已提交", name: "1" } },
            [
              _c(
                "el-table",
                {
                  directives: [
                    {
                      name: "loading",
                      rawName: "v-loading",
                      value: _vm.orderLoading,
                      expression: "orderLoading"
                    }
                  ],
                  attrs: { data: _vm.submitData },
                  on: {
                    "selection-change": _vm.handleSelectionChange,
                    "row-click": _vm.orderRClick
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
                  _vm._l(_vm.submitHead, function(item) {
                    return _c("el-table-column", {
                      key: item.label,
                      attrs: {
                        label: item.label,
                        width: item.width,
                        align: "center"
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
      _c("Pagination", {
        attrs: { "page-url": this.urls.resupplieApplication },
        on: { handlePagChg: _vm.handlePagChg }
      }),
      _vm._v(" "),
      _c(
        "div",
        [
          _c(
            "el-tabs",
            {
              on: { "tab-click": _vm.bottomTabsClick },
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
                { attrs: { label: "补件产品", name: "0" } },
                [
                  _c(
                    "el-table",
                    {
                      directives: [
                        {
                          name: "loading",
                          rawName: "v-loading",
                          value: _vm.orderLoading,
                          expression: "orderLoading"
                        }
                      ],
                      attrs: { data: _vm.resupplyInfoData }
                    },
                    _vm._l(_vm.resupplyInfoHead, function(item) {
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
                    }),
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-tab-pane",
                {
                  directives: [
                    {
                      name: "loading",
                      rawName: "v-loading",
                      value: _vm.orderLoading,
                      expression: "orderLoading"
                    }
                  ],
                  attrs: { label: "问题产品", name: "1" }
                },
                [
                  _c(
                    "el-table",
                    { attrs: { data: _vm.problemProData } },
                    _vm._l(_vm.problemProHead, function(item) {
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
                    }),
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-tab-pane",
                {
                  directives: [
                    {
                      name: "loading",
                      rawName: "v-loading",
                      value: _vm.orderLoading,
                      expression: "orderLoading"
                    }
                  ],
                  attrs: { label: "图片信息", name: "2" }
                },
                [
                  _c(
                    "div",
                    {
                      staticStyle: { "text-align": "right" },
                      scopedSlots: _vm._u([
                        {
                          key: "default",
                          fn: function(scope) {
                            return [
                              _c(
                                "div",
                                { attrs: { data: _vm.imageData } },
                                _vm._l(_vm.imageHead, function(item) {
                                  return _c("span", { key: item.prop }, [
                                    _c("img", {
                                      attrs: { src: scope.row[item.prop] }
                                    })
                                  ])
                                }),
                                0
                              )
                            ]
                          }
                        }
                      ])
                    },
                    [
                      _vm._v(" "),
                      _c("el-button", [_vm._v("删除")]),
                      _vm._v(" "),
                      _c(
                        "el-upload",
                        {
                          staticClass: "upload-demo",
                          attrs: {
                            action: "",
                            "before-upload": _vm.beforeUpload
                          }
                        },
                        [_c("el-button", [_vm._v("上传")])],
                        1
                      )
                    ],
                    1
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "el-tab-pane",
                {
                  directives: [
                    {
                      name: "loading",
                      rawName: "v-loading",
                      value: _vm.orderLoading,
                      expression: "orderLoading"
                    }
                  ],
                  attrs: { label: "驳回原因", name: "3" }
                },
                [
                  _c(
                    "el-table",
                    { attrs: { data: _vm.rejectReasonData } },
                    _vm._l(_vm.rejectReasonHead, function(item) {
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
                    }),
                    1
                  ),
                  _vm._v(" "),
                  _c("div")
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-tab-pane",
                {
                  directives: [
                    {
                      name: "loading",
                      rawName: "v-loading",
                      value: _vm.orderLoading,
                      expression: "orderLoading"
                    }
                  ],
                  attrs: { label: "操作记录", name: "4" }
                },
                [
                  _c(
                    "el-table",
                    { attrs: { data: _vm.operationData } },
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
                    }),
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-tab-pane",
                {
                  directives: [
                    {
                      name: "loading",
                      rawName: "v-loading",
                      value: _vm.orderLoading,
                      expression: "orderLoading"
                    }
                  ],
                  attrs: { label: "补件进度", name: "5" }
                },
                [
                  _c(
                    "el-table",
                    {
                      attrs: { data: _vm.progressData },
                      on: { "selection-change": _vm.handleSelectionChange }
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
                      _vm._l(_vm.progressHead, function(item) {
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
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticStyle: { "text-align": "right" } },
                    [
                      _c("el-button", { on: { click: _vm.addProgress } }, [
                        _vm._v("新增进度")
                      ]),
                      _vm._v(" "),
                      _c("el-button", { on: { click: _vm.updateProgress } }, [
                        _vm._v("修改进度")
                      ]),
                      _vm._v(" "),
                      _c("el-button", { on: { click: _vm.delProgress } }, [
                        _vm._v("删除进度")
                      ])
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
              class: { "more-forms": _vm.moreForms },
              attrs: { title: "新增", visible: _vm.addMask },
              on: {
                "update:visible": function($event) {
                  _vm.addMask = $event
                }
              }
            },
            [
              _c(
                "el-form",
                {
                  ref: "addNew",
                  attrs: { model: _vm.addOrderForm, rules: _vm.orderRules }
                },
                _vm._l(_vm.addOrderHead, function(item, index) {
                  return _c(
                    "el-form-item",
                    {
                      key: index,
                      attrs: { label: item.label, prop: item.prop }
                    },
                    [
                      item.type == "text"
                        ? _c(
                            "span",
                            [
                              _c("el-input", {
                                attrs: { disabled: item.addChgAble },
                                model: {
                                  value: _vm.addOrderForm[item.prop],
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.addOrderForm,
                                      item.prop,
                                      typeof $$v === "string" ? $$v.trim() : $$v
                                    )
                                  },
                                  expression: "addOrderForm[item.prop]"
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
                                attrs: { size: "middle" },
                                model: {
                                  value: _vm.addOrderForm[item.prop],
                                  callback: function($$v) {
                                    _vm.$set(_vm.addOrderForm, item.prop, $$v)
                                  },
                                  expression: "addOrderForm[item.prop]"
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
                                attrs: { type: "number" },
                                model: {
                                  value: _vm.addOrderForm[item.prop],
                                  callback: function($$v) {
                                    _vm.$set(_vm.addOrderForm, item.prop, $$v)
                                  },
                                  expression: "addOrderForm[item.prop]"
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
                                attrs: { type: "textarea" },
                                model: {
                                  value: _vm.addOrderForm[item.prop],
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.addOrderForm,
                                      item.prop,
                                      typeof $$v === "string" ? $$v.trim() : $$v
                                    )
                                  },
                                  expression: "addOrderForm[item.prop]"
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
                                  attrs: { placeholder: item.holder },
                                  model: {
                                    value: _vm.addOrderForm[item.prop],
                                    callback: function($$v) {
                                      _vm.$set(_vm.addOrderForm, item.prop, $$v)
                                    },
                                    expression: "addOrderForm[item.prop]"
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
                        : item.type == "DatePicker"
                        ? _c(
                            "span",
                            [
                              _c("el-date-picker", {
                                attrs: {
                                  type: "datetime",
                                  "value-format": "timestamp",
                                  format: "yyyy-MM-dd "
                                },
                                model: {
                                  value: _vm.addOrderForm[item.prop],
                                  callback: function($$v) {
                                    _vm.$set(_vm.addOrderForm, item.prop, $$v)
                                  },
                                  expression: "addOrderForm[item.prop]"
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
              _c("el-button", { attrs: { type: "text" } }, [
                _vm._v("问题产品")
              ]),
              _vm._v(" "),
              _c(
                "el-table",
                {
                  attrs: {
                    data: _vm.addProblemProVal,
                    fit: "",
                    height: "180",
                    "row-class-name": _vm.addProCName
                  },
                  on: { "row-click": _vm.addProRowClick }
                },
                [
                  _vm._l(_vm.addProblemProHead, function(item) {
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
                                item.fillable
                                  ? _c("span", [
                                      item.type == "number"
                                        ? _c(
                                            "span",
                                            [
                                              _c("el-input", {
                                                attrs: { type: "number" },
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
                                        : item.type == "textarea"
                                        ? _c(
                                            "span",
                                            [
                                              _c("el-input", {
                                                attrs: { type: "textarea" },
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
                                    ])
                                  : _c("span", [
                                      _vm._v(
                                        "\n              " +
                                          _vm._s(
                                            item.inProp
                                              ? scope.row[item.prop][
                                                  item.inProp
                                                ]
                                              : scope.row[item.prop]
                                          ) +
                                          "\n            "
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
                  _vm._v(" "),
                  _c("el-table-column", {
                    attrs: { label: "操作", width: "90", align: "center" },
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
                                    return _vm.addProDel(scope.$index)
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
              ),
              _vm._v(" "),
              _c(
                "div",
                [
                  _c(
                    "el-button",
                    {
                      attrs: { type: "primary" },
                      on: { click: _vm.addProblemPro }
                    },
                    [_vm._v("查找订单并添加问题产品")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("el-button", { attrs: { type: "text" } }, [
                _vm._v("补件产品")
              ]),
              _vm._v(" "),
              _c(
                "el-table",
                {
                  attrs: {
                    data: _vm.addResupplyInfoVal,
                    fit: "",
                    height: "220",
                    "row-class-name": _vm.addInfoCName
                  },
                  on: { "row-click": _vm.addInfoRowClick }
                },
                [
                  _vm._l(_vm.addResupplyInfoHead, function(item) {
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
                                item.fillable
                                  ? _c("span", [
                                      item.type == "number"
                                        ? _c(
                                            "span",
                                            [
                                              _c("el-input", {
                                                attrs: { type: "number" },
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
                                        : item.type == "textarea"
                                        ? _c(
                                            "span",
                                            [
                                              _c("el-input", {
                                                attrs: { type: "textarea" },
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
                                    ])
                                  : _c("span", [
                                      _vm._v(
                                        "\n              " +
                                          _vm._s(
                                            item.inProp
                                              ? scope.row[item.prop][
                                                  item.inProp
                                                ]
                                              : scope.row[item.prop]
                                          ) +
                                          "\n            "
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
                  _vm._v(" "),
                  _c("el-table-column", {
                    attrs: { label: "操作", width: "90", align: "center" },
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
                                    return _vm.addResupplyInfoDel(scope.$index)
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
              ),
              _vm._v(" "),
              _c(
                "div",
                [
                  _c(
                    "el-button",
                    {
                      attrs: { type: "primary" },
                      on: { click: _vm.addResupplyInfo }
                    },
                    [_vm._v("添加补件产品")]
                  )
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
                    {
                      attrs: { type: "primary" },
                      on: { click: _vm.addConfirm }
                    },
                    [_vm._v("确定")]
                  ),
                  _vm._v(" "),
                  _c("el-button", { on: { click: _vm.addCancel } }, [
                    _vm._v("取消")
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
              class: { "more-forms": _vm.moreForms },
              attrs: { title: "查找订单", visible: _vm.addProblemProMask },
              on: {
                "update:visible": function($event) {
                  _vm.addProblemProMask = $event
                }
              }
            },
            [
              _c("el-button", { attrs: { type: "text" } }, [_vm._v("订单")]),
              _vm._v(" "),
              _c(
                "el-table",
                {
                  attrs: { data: _vm.problemOrderVal, height: "180" },
                  on: { "row-click": _vm.orderRClick }
                },
                _vm._l(_vm.problemOrderHead, function(item) {
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
                              _c("span", [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(
                                      item.inProp
                                        ? scope.row[item.prop][item.inProp]
                                        : scope.row[item.prop]
                                    ) +
                                    "\n            "
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
              _c("el-button", { attrs: { type: "text" } }, [
                _vm._v("问题产品")
              ]),
              _vm._v(" "),
              _c(
                "el-table",
                {
                  attrs: { data: _vm.problemProductVal, height: "300" },
                  on: { "selection-change": _vm.problemProSelectionChange }
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
                  _vm._l(_vm.problemProductHead, function(item) {
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
                                item.fillable
                                  ? _c("span", [
                                      item.type == "number"
                                        ? _c(
                                            "span",
                                            [
                                              _c("el-input", {
                                                attrs: { type: "number" },
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
                                    ])
                                  : _c("span", [
                                      _vm._v(
                                        "\n              " +
                                          _vm._s(
                                            item.inProp
                                              ? scope.row[item.prop][
                                                  item.inProp
                                                ]
                                              : scope.row[item.prop]
                                          ) +
                                          "\n            "
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
                      on: { click: _vm.addProblemProConfirm }
                    },
                    [_vm._v("确定")]
                  ),
                  _vm._v(" "),
                  _c("el-button", { on: { click: _vm.addProblemProCancel } }, [
                    _vm._v("取消")
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
              class: { "more-forms": _vm.moreForms },
              attrs: { title: "选择补件产品", visible: _vm.addResupplyProMask },
              on: {
                "update:visible": function($event) {
                  _vm.addResupplyProMask = $event
                }
              }
            },
            [
              _c("el-button", { attrs: { type: "text" } }, [
                _vm._v("产品列表")
              ]),
              _vm._v(" "),
              _c(
                "el-table",
                {
                  attrs: { data: _vm.addResupplyProVal, height: "180" },
                  on: { "row-click": _vm.proRClick }
                },
                _vm._l(_vm.addResupplyProHead, function(item) {
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
                              _c("span", [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(
                                      item.inProp
                                        ? scope.row[item.prop][item.inProp]
                                        : scope.row[item.prop]
                                    ) +
                                    "\n            "
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
              _c("el-button", { attrs: { type: "text" } }, [_vm._v("子件")]),
              _vm._v(" "),
              _c(
                "el-table",
                {
                  attrs: { data: _vm.addResupplyCompVal, height: "300" },
                  on: { "selection-change": _vm.CompSelectionChange }
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
                  _vm._l(_vm.addResupplyCompHead, function(item) {
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
                                item.fillable
                                  ? _c("span", [
                                      item.type == "number"
                                        ? _c(
                                            "span",
                                            [
                                              _c("el-input", {
                                                attrs: { type: "number" },
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
                                    ])
                                  : _c("span", [
                                      _vm._v(
                                        "\n              " +
                                          _vm._s(
                                            item.inProp
                                              ? scope.row[item.prop][
                                                  item.inProp
                                                ]
                                              : scope.row[item.prop]
                                          ) +
                                          "\n            "
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
                      on: { click: _vm.addResupplyProConfirm }
                    },
                    [_vm._v("确定")]
                  ),
                  _vm._v(" "),
                  _c("el-button", { on: { click: _vm.addResupplyProCancel } }, [
                    _vm._v("取消")
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
              class: { "more-forms": _vm.moreForms },
              attrs: { title: "修改", visible: _vm.updateMask },
              on: {
                "update:visible": function($event) {
                  _vm.updateMask = $event
                }
              }
            },
            [
              _c(
                "el-form",
                {
                  ref: "addNew",
                  attrs: { model: _vm.updateOrderForm, rules: _vm.orderRules }
                },
                _vm._l(_vm.addOrderHead, function(item, index) {
                  return _c(
                    "el-form-item",
                    {
                      key: index,
                      attrs: { label: item.label, prop: item.prop }
                    },
                    [
                      item.type == "text"
                        ? _c(
                            "span",
                            [
                              _c("el-input", {
                                attrs: {
                                  disabled:
                                    item.addChgAble || item.updateChgAble
                                },
                                model: {
                                  value: _vm.updateOrderForm[item.prop],
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.updateOrderForm,
                                      item.prop,
                                      typeof $$v === "string" ? $$v.trim() : $$v
                                    )
                                  },
                                  expression: "updateOrderForm[item.prop]"
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
                                attrs: { size: "middle" },
                                model: {
                                  value: _vm.updateOrderForm[item.prop],
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.updateOrderForm,
                                      item.prop,
                                      $$v
                                    )
                                  },
                                  expression: "updateOrderForm[item.prop]"
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
                                attrs: { type: "number" },
                                model: {
                                  value: _vm.updateOrderForm[item.prop],
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.updateOrderForm,
                                      item.prop,
                                      $$v
                                    )
                                  },
                                  expression: "updateOrderForm[item.prop]"
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
                                attrs: { type: "textarea" },
                                model: {
                                  value: _vm.updateOrderForm[item.prop],
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.updateOrderForm,
                                      item.prop,
                                      typeof $$v === "string" ? $$v.trim() : $$v
                                    )
                                  },
                                  expression: "updateOrderForm[item.prop]"
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
                                  attrs: { placeholder: item.holder },
                                  model: {
                                    value: _vm.updateOrderForm[item.prop],
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.updateOrderForm,
                                        item.prop,
                                        $$v
                                      )
                                    },
                                    expression: "updateOrderForm[item.prop]"
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
                        : item.type == "DatePicker"
                        ? _c(
                            "span",
                            [
                              _c("el-date-picker", {
                                attrs: {
                                  type: "datetime",
                                  "value-format": "timestamp",
                                  format: "yyyy-MM-dd "
                                },
                                model: {
                                  value: _vm.updateOrderForm[item.prop],
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.updateOrderForm,
                                      item.prop,
                                      $$v
                                    )
                                  },
                                  expression: "updateOrderForm[item.prop]"
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
              _c("el-button", { attrs: { type: "text" } }, [
                _vm._v("问题产品")
              ]),
              _vm._v(" "),
              _c(
                "el-table",
                {
                  attrs: {
                    data: _vm.updateProblemProVal,
                    fit: "",
                    height: "180",
                    "row-class-name": _vm.addProCName
                  },
                  on: { "row-click": _vm.addProRowClick }
                },
                [
                  _vm._l(_vm.addProblemProHead, function(item) {
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
                                item.fillable
                                  ? _c("span", [
                                      item.type == "number"
                                        ? _c(
                                            "span",
                                            [
                                              _c("el-input", {
                                                attrs: { type: "number" },
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
                                        : item.type == "textarea"
                                        ? _c(
                                            "span",
                                            [
                                              _c("el-input", {
                                                attrs: { type: "textarea" },
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
                                    ])
                                  : _c("span", [
                                      _vm._v(
                                        "\n              " +
                                          _vm._s(
                                            item.inProp
                                              ? scope.row[item.prop][
                                                  item.inProp
                                                ]
                                              : scope.row[item.prop]
                                          ) +
                                          "\n            "
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
                  _vm._v(" "),
                  _c("el-table-column", {
                    attrs: { label: "操作", width: "90", align: "center" },
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
                                    return _vm.addProDel(scope.$index)
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
              ),
              _vm._v(" "),
              _c(
                "div",
                [
                  _c(
                    "el-button",
                    {
                      attrs: { type: "primary" },
                      on: { click: _vm.addProblemPro }
                    },
                    [_vm._v("查找订单并添加问题产品")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("el-button", { attrs: { type: "text" } }, [
                _vm._v("补件产品")
              ]),
              _vm._v(" "),
              _c(
                "el-table",
                {
                  attrs: {
                    data: _vm.updateResupplyInfoVal,
                    fit: "",
                    height: "300",
                    "row-class-name": _vm.addInfoCName
                  },
                  on: { "row-click": _vm.addInfoRowClick }
                },
                [
                  _vm._l(_vm.updateResupplyInfoHead, function(item) {
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
                                item.fillable
                                  ? _c("span", [
                                      item.type == "number"
                                        ? _c(
                                            "span",
                                            [
                                              _c("el-input", {
                                                attrs: { type: "number" },
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
                                        : item.type == "textarea"
                                        ? _c(
                                            "span",
                                            [
                                              _c("el-input", {
                                                attrs: { type: "textarea" },
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
                                    ])
                                  : _c("span", [
                                      _vm._v(
                                        "\n              " +
                                          _vm._s(
                                            item.inProp
                                              ? scope.row[item.prop][
                                                  item.inProp
                                                ]
                                              : scope.row[item.prop]
                                          ) +
                                          "\n            "
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
                  _vm._v(" "),
                  _c("el-table-column", {
                    attrs: { label: "操作", width: "90", align: "center" },
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
                                    return _vm.updateResupplyInfoDel(
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
              ),
              _vm._v(" "),
              _c(
                "div",
                [
                  _c(
                    "el-button",
                    {
                      attrs: { type: "primary" },
                      on: { click: _vm.addResupplyInfo }
                    },
                    [_vm._v("添加补件产品")]
                  )
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
                    {
                      attrs: { type: "primary" },
                      on: { click: _vm.updateConfirm }
                    },
                    [_vm._v("确定")]
                  ),
                  _vm._v(" "),
                  _c("el-button", { on: { click: _vm.updateCancel } }, [
                    _vm._v("取消")
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
              attrs: { title: "驳回", visible: _vm.rejectMask },
              on: {
                "update:visible": function($event) {
                  _vm.rejectMask = $event
                }
              }
            },
            [
              _c("add-new", {
                attrs: {
                  "rule-form": _vm.rejectForm,
                  "add-arr": _vm.rejectHead,
                  onlyInputs: true
                }
              }),
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
                      on: { click: _vm.rejectConfirm }
                    },
                    [_vm._v("确定")]
                  ),
                  _vm._v(" "),
                  _c("el-button", { on: { click: _vm.rejectCancel } }, [
                    _vm._v("取消")
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
              attrs: { title: "新增补件进度", visible: _vm.addProgressMask },
              on: {
                "update:visible": function($event) {
                  _vm.addProgressMask = $event
                }
              }
            },
            [
              _c("add-new", {
                attrs: {
                  "rule-form": _vm.addProgressForm,
                  "add-arr": _vm.addProgressHead,
                  onlyInputs: true
                }
              }),
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
                      on: { click: _vm.addProgressConfirm }
                    },
                    [_vm._v("确定")]
                  ),
                  _vm._v(" "),
                  _c("el-button", { on: { click: _vm.addProgressCancel } }, [
                    _vm._v("取消")
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
              attrs: { title: "修改补件进度", visible: _vm.updateProgressMask },
              on: {
                "update:visible": function($event) {
                  _vm.updateProgressMask = $event
                }
              }
            },
            [
              _c("add-new", {
                attrs: {
                  "rule-form": _vm.updateProgressFrom,
                  "add-arr": _vm.addProgressHead,
                  onlyInputs: true
                }
              }),
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
                      on: { click: _vm.updateProgressConfirm }
                    },
                    [_vm._v("确定")]
                  ),
                  _vm._v(" "),
                  _c("el-button", { on: { click: _vm.updateProgressCancel } }, [
                    _vm._v("取消")
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
    require("vue-hot-reload-api")      .rerender("data-v-0eb6344b", module.exports)
  }
}

/***/ })

});