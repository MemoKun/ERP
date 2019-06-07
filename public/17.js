webpackJsonp([17],{

/***/ 1005:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(12)
/* script */
var __vue_script__ = __webpack_require__(1170)
/* template */
var __vue_template__ = __webpack_require__(1171)
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
Component.options.__file = "resources/assets/js/views/reSupplied/reSShip.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-45a543d1", Component.options)
  } else {
    hotAPI.reload("data-v-45a543d1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_element_china_area_data__ = __webpack_require__(125);
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      newOpt: [{
        cnt: '修改',
        icon: 'bf-change',
        ent: this.test,
        nClick: true
      }, {
        cnt: '退审',
        icon: 'bf-auditfaild',
        ent: this.auditfaild,
        nClick: true
      }, {
        cnt: '返回客审',
        icon: 'bf-examination',
        ent: this.examination
      }, {
        cnt: '发货',
        icon: 'bf-deliver',
        ent: this.consign,
        nClick: true
      }, {
        cnt: '批量处理', //批量发货
        icon: 'bf-more',
        ent: this.test,
        nClick: true
      }, {
        cnt: '导出',
        icon: 'bf-out',
        ent: this.test
      }, {
        cnt: '打印',
        icon: 'bf-printer',
        ent: this.print
      }, {
        cnt: '刷新',
        icon: 'bf-refresh',
        ent: this.refresh
      }],
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
      orderId: '',
      orderRow: {},
      options: __WEBPACK_IMPORTED_MODULE_0_element_china_area_data__["regionDataPlus"],
      moreForms: true,
      //订单信息tab
      orderData: [],
      orderHead: [{
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
        label: '补件成本',
        width: '130',
        prop: 'resupply_cost',
        type: 'number'
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
        label: '补件备注',
        width: '300',
        prop: 'resupply_remark',
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
        prop: 'member_telephone',
        type: 'number'
      }, {
        label: '物流公司',
        width: '140',
        prop: 'logistic',
        inProp: 'name',
        type: 'text'
      }, {
        label: '快递单号',
        width: '140',
        prop: 'express_no',
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
        label: '送装费用',
        width: '130',
        prop: 'load_fee',
        type: 'number'
      }, {
        label: '运费类型',
        width: '140',
        prop: 'freightType',
        inProp: 'name',
        type: 'text'
      }, {
        label: '配送方式',
        width: '160',
        prop: 'distributionMethod',
        inProp: 'name',
        type: 'text'
      }, {
        label: '供应商',
        width: '130',
        prop: 'supplier',
        inProp: 'name',
        type: 'text'
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
        label: '发货人',
        width: '140',
        prop: 'consigner',
        type: 'text'
      }, {
        label: '发货仓库',
        width: '160',
        prop: 'consign_warehouse',
        type: 'text'
      }, {
        label: '发货备注',
        width: '200',
        prop: 'consign_remark',
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
        label: '收货地址',
        width: '200',
        prop: 'address',
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
        label: '打印时间',
        width: '140',
        prop: 'print_time',
        type: 'text'
      }, {
        label: '实际发货时间',
        width: '140',
        prop: 'real_consign_time',
        type: 'text'
      }, {
        label: '方数',
        width: '140',
        prop: 'square_number',
        type: 'number'
      }, {
        label: '件数',
        width: '140',
        prop: 'number',
        type: 'number'
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
      }, {
        label: '入库状态',
        width: '140',
        prop: 'warehousing_status',
        type: 'text'
      }, {
        label: '采购',
        width: '140',
        prop: 'is_purchase',
        type: 'checkbox'
      }],
      //补件信息
      resupplyInfoData: [], //补件产品
      problemProData: [], //问题产品
      imageData: [], //图片信息
      rejectReasonData: [], //驳回原因
      purchaseData: [], //采购明细
      operationData: [], //操作记录
      progressData: [], //补件进度
      esheetData: [], //电子面单
      innerNoteData: [], //内部便签
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
      purchaseHead: [
      //采购明细
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
        label: '采购数',
        width: '120',
        prop: 'purchase_quantity',
        type: 'number'
      }, {
        label: '已入库数',
        width: '120',
        prop: 'stock_in_count',
        type: 'number'
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
      esheetHead: [{
        label: '电子面单号',
        width: '130',
        prop: 'esheet_no',
        type: 'text'
      }],
      innerNoteHead: [{
        label: '主题',
        width: '130',
        prop: 'theme',
        type: 'text'
      }, {
        label: '用户',
        width: '130',
        prop: 'user_name',
        type: 'text'
      }, {
        label: '内容',
        width: '130',
        prop: 'content',
        type: 'text'
      }, {
        label: '提出时间',
        width: '130',
        prop: 'created_at',
        type: 'text'
      }],
      checkboxInit: false,
      orderLoading: true,
      currentId: '',
      orderSelection: '',
      delUrl: '',
      delId: '',
      delArr: [],
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
      updateProgressFrom: {}
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
  methods: {
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
          this.$fetch(this.urls.resupplieShip + '/searchUnprint', {
            resupply_order_no: this.searchBox.resupply_order_no,
            member_nick: this.searchBox.member_nick,
            member_name: this.searchBox.member_name,
            re_supplie_categories_id: this.searchBox.re_supplie_categories_id,
            receiver_state: this.searchBox.receiver_state,
            receiver_city: this.searchBox.receiver_city,
            receiver_district: this.searchBox.receiver_district,
            suppliers_id: this.searchBox.suppliers_id,
            include: 'resupplieCategory,resupplieResponsible,logistic,freightType,supplier,distributionMethod,refundMethod,resupplieOrderItem.resupplieOrder,resupplieOrderItem.productComponent,resupplieOrderItem.product,resupplieProblemProduct.resupplieOrder,resupplieProblemProduct.supplier,resupplieImage,resupplieRejectReason,resuppliePurchase,resuppliePurchase.product,resuppliePurchase.productComponent,resupplieOperationRecord,resupplieProgress,resupplieEsheet,resupplieInnerNote'
          }).then(function (res) {
            _this.orderLoading = false;
            _this.orderData = res.data;
            var pg = res.meta.pagination;
            _this.$store.dispatch('currentPage', pg.current_page);
            _this.$store.commit('PER_PAGE', pg.per_page);
            _this.$store.commit('PAGE_TOTAL', pg.total);
            _this.$store.dispatch('resupplieCategory', '/resupplieCategory');
            _this.$store.dispatch('suppliers', '/suppliers');
            _this.resupplyInfoData = res.data[0] ? res.data[0]['resupplieOrderItem'].data : [];
            _this.problemProData = res.data[0] ? res.data[0]['resupplieProblemProduct'].data : [];
            _this.imageData = res.data[0] ? res.data[0]['resupplieImage'].data : [];
            _this.rejectReasonData = res.data[0] ? res.data[0]['resupplieRejectReason'].data : [];
            _this.operationData = res.data[0] ? res.data[0]['resupplieOperationRecord'].data : [];
            _this.progressData = res.data[0] ? res.data[0]['resupplieProgress'].data : [];
            _this.purchaseData = res.data[0] ? res.data[0]['resuppliePurchase'].data : [];
            _this.esheetData = res.data[0] ? res.data[0]['resupplieEsheet'].data : [];
            _this.innerNoteData = res.data[0] ? res.data[0]['resupplieInnerNote'].data : [];
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
          this.$fetch(this.urls.resupplieShip + '/searchPrint', {
            resupply_order_no: this.searchBox.resupply_order_no,
            member_nick: this.searchBox.member_nick,
            member_name: this.searchBox.member_name,
            re_supplie_categories_id: this.searchBox.re_supplie_categories_id,
            receiver_state: this.searchBox.receiver_state,
            receiver_city: this.searchBox.receiver_city,
            receiver_district: this.searchBox.receiver_district,
            suppliers_id: this.searchBox.suppliers_id,
            include: 'resupplieCategory,resupplieResponsible,logistic,freightType,supplier,distributionMethod,refundMethod,resupplieOrderItem.resupplieOrder,resupplieOrderItem.productComponent,resupplieOrderItem.product,resupplieProblemProduct.resupplieOrder,resupplieProblemProduct.supplier,resupplieImage,resupplieRejectReason,resuppliePurchase,resuppliePurchase.product,resuppliePurchase.productComponent,resupplieOperationRecord,resupplieProgress,resupplieEsheet,resupplieInnerNote'
          }).then(function (res) {
            _this.orderLoading = false;
            _this.orderData = res.data;
            var pg = res.meta.pagination;
            _this.$store.dispatch('currentPage', pg.current_page);
            _this.$store.commit('PER_PAGE', pg.per_page);
            _this.$store.commit('PAGE_TOTAL', pg.total);
            _this.resupplyInfoData = res.data[0] ? res.data[0]['resupplieOrderItem'].data : [];
            _this.problemProData = res.data[0] ? res.data[0]['resupplieProblemProduct'].data : [];
            _this.imageData = res.data[0] ? res.data[0]['resupplieImage'].data : [];
            _this.rejectReasonData = res.data[0] ? res.data[0]['resupplieRejectReason'].data : [];
            _this.operationData = res.data[0] ? res.data[0]['resupplieOperationRecord'].data : [];
            _this.progressData = res.data[0] ? res.data[0]['resupplieProgress'].data : [];
            _this.purchaseData = res.data[0] ? res.data[0]['resuppliePurchase'].data : [];
            _this.esheetData = res.data[0] ? res.data[0]['resupplieEsheet'].data : [];
            _this.innerNoteData = res.data[0] ? res.data[0]['resupplieInnerNote'].data : [];
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
        case 2:
          this.$fetch(this.urls.resupplieShip + '/searchUnconsign', {
            resupply_order_no: this.searchBox.resupply_order_no,
            member_nick: this.searchBox.member_nick,
            member_name: this.searchBox.member_name,
            re_supplie_categories_id: this.searchBox.re_supplie_categories_id,
            receiver_state: this.searchBox.receiver_state,
            receiver_city: this.searchBox.receiver_city,
            receiver_district: this.searchBox.receiver_district,
            suppliers_id: this.searchBox.suppliers_id,
            include: 'resupplieCategory,resupplieResponsible,logistic,freightType,supplier,distributionMethod,refundMethod,resupplieOrderItem.resupplieOrder,resupplieOrderItem.productComponent,resupplieOrderItem.product,resupplieProblemProduct.resupplieOrder,resupplieProblemProduct.supplier,resupplieImage,resupplieRejectReason,resuppliePurchase,resuppliePurchase.product,resuppliePurchase.productComponent,resupplieOperationRecord,resupplieProgress,resupplieEsheet,resupplieInnerNote'
          }).then(function (res) {
            _this.orderLoading = false;
            _this.orderData = res.data;
            var pg = res.meta.pagination;
            _this.$store.dispatch('currentPage', pg.current_page);
            _this.$store.commit('PER_PAGE', pg.per_page);
            _this.$store.commit('PAGE_TOTAL', pg.total);
            _this.resupplyInfoData = res.data[0] ? res.data[0]['resupplieOrderItem'].data : [];
            _this.problemProData = res.data[0] ? res.data[0]['resupplieProblemProduct'].data : [];
            _this.imageData = res.data[0] ? res.data[0]['resupplieImage'].data : [];
            _this.rejectReasonData = res.data[0] ? res.data[0]['resupplieRejectReason'].data : [];
            _this.operationData = res.data[0] ? res.data[0]['resupplieOperationRecord'].data : [];
            _this.progressData = res.data[0] ? res.data[0]['resupplieProgress'].data : [];
            _this.purchaseData = res.data[0] ? res.data[0]['resuppliePurchase'].data : [];
            _this.esheetData = res.data[0] ? res.data[0]['resupplieEsheet'].data : [];
            _this.innerNoteData = res.data[0] ? res.data[0]['resupplieInnerNote'].data : [];
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
        case 3:
          this.$fetch(this.urls.resupplieShip + '/searchConsign', {
            resupply_order_no: this.searchBox.resupply_order_no,
            member_nick: this.searchBox.member_nick,
            member_name: this.searchBox.member_name,
            re_supplie_categories_id: this.searchBox.re_supplie_categories_id,
            receiver_state: this.searchBox.receiver_state,
            receiver_city: this.searchBox.receiver_city,
            receiver_district: this.searchBox.receiver_district,
            suppliers_id: this.searchBox.suppliers_id,
            include: 'resupplieCategory,resupplieResponsible,logistic,freightType,supplier,distributionMethod,refundMethod,resupplieOrderItem.resupplieOrder,resupplieOrderItem.productComponent,resupplieOrderItem.product,resupplieProblemProduct.resupplieOrder,resupplieProblemProduct.supplier,resupplieImage,resupplieRejectReason,resuppliePurchase,resuppliePurchase.product,resuppliePurchase.productComponent,resupplieOperationRecord,resupplieProgress,resupplieEsheet,resupplieInnerNote'
          }).then(function (res) {
            _this.orderLoading = false;
            _this.orderData = res.data;
            var pg = res.meta.pagination;
            _this.$store.dispatch('currentPage', pg.current_page);
            _this.$store.commit('PER_PAGE', pg.per_page);
            _this.$store.commit('PAGE_TOTAL', pg.total);
            _this.resupplyInfoData = res.data[0] ? res.data[0]['resupplieOrderItem'].data : [];
            _this.problemProData = res.data[0] ? res.data[0]['resupplieProblemProduct'].data : [];
            _this.imageData = res.data[0] ? res.data[0]['resupplieImage'].data : [];
            _this.rejectReasonData = res.data[0] ? res.data[0]['resupplieRejectReason'].data : [];
            _this.operationData = res.data[0] ? res.data[0]['resupplieOperationRecord'].data : [];
            _this.progressData = res.data[0] ? res.data[0]['resupplieProgress'].data : [];
            _this.purchaseData = res.data[0] ? res.data[0]['resuppliePurchase'].data : [];
            _this.esheetData = res.data[0] ? res.data[0]['resupplieEsheet'].data : [];
            _this.innerNoteData = res.data[0] ? res.data[0]['resupplieInnerNote'].data : [];
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
      }
    },

    //筛选信息
    searchData: function searchData() {
      this.orderLoading = true;
      this.fetchData();
    },

    //订单信息tab切换
    handleTabsClick: function handleTabsClick() {
      switch (this.activeName) {
        case '0':
          this.newOpt[0].nClick = true;
          this.newOpt[1].nClick = true;
          this.newOpt[2].nClick = false;
          this.newOpt[3].nClick = true;
          this.newOpt[4].nClick = true;
          break;
        case '1':
          this.newOpt[0].nClick = true;
          this.newOpt[1].nClick = false;
          this.newOpt[2].nClick = true;
          this.newOpt[3].nClick = true;
          this.newOpt[4].nClick = true;
          break;
        case '2':
          this.newOpt[0].nClick = true;
          this.newOpt[1].nClick = true;
          this.newOpt[2].nClick = true;
          this.newOpt[3].nClick = false;
          this.newOpt[4].nClick = false;
          break;
        case '3':
          this.newOpt[0].nClick = false;
          this.newOpt[1].nClick = false;
          this.newOpt[2].nClick = true;
          this.newOpt[3].nClick = true;
          this.newOpt[4].nClick = true;
          break;
      }
      this.refresh();
    },

    /*补件信息tab */
    bottomTabsClick: function bottomTabsClick() {},

    //批量选择
    handleSelectionChange: function handleSelectionChange(val) {
      var arr = [];
      val.forEach(function (selectedItem) {
        arr.push(selectedItem.id);
      });
      this.delArr = arr.join(',');
      this.currentId = val.length > 0 ? val[val.length - 1].id : '';
    },
    orderRClick: function orderRClick(row) {
      //点击上方tab的某行底部tab更新
      this.orderId = row.id;
      this.resupplyInfoData = row['resupplieOrderItem'].data;
      this.problemProData = row['resupplieProblemProduct'].data;
      this.imageData = row['resupplieImage'].data;
      this.rejectReasonData = row['resupplieRejectReason'].data;
      this.purchaseData = row['resuppliePurchase'].data;
      this.operationData = row['resupplieOperationRecord'].data;
      this.progressData = row['resupplieProgress'].data;
      this.esheetData = row['resupplieEsheet'].data;
      this.innerNoteData = row['resupplieInnerNote'].data;
      this.orderRow = row;
    },

    //退审
    auditfaild: function auditfaild() {
      var _this2 = this;

      var id = this.currentId ? this.currentId : this.orderRow.id;
      this.$put(this.urls.resupplieReview + '/' + id + '/auditfaild').then(function () {
        _this2.refresh();
        _this2.$message({
          message: '退审成功',
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
          _this2.$message.error(str);
        }
      });
    },

    //返回客审
    examination: function examination() {
      var _this3 = this;

      var id = this.currentId ? this.currentId : this.orderRow.id;
      this.$put(this.urls.resupplieShip + '/' + id + '/examination').then(function () {
        _this3.refresh();
        _this3.$message({
          message: '返回客审成功',
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

    //发货
    consign: function consign() {
      var _this4 = this;

      var id = this.currentId ? this.currentId : this.orderRow.id;
      this.$put(this.urls.resupplieShip + '/' + id + '/consign').then(function () {
        _this4.refresh();
        _this4.$message({
          message: '发货成功',
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
          _this4.$message.error(str);
        }
      });
    },

    //打印
    print: function print() {
      var _this5 = this;

      var id = this.currentId ? this.currentId : this.orderRow.id;
      this.$put(this.urls.resupplieShip + '/' + id + '/print').then(function () {
        _this5.refresh();
        _this5.$message({
          message: '打印成功',
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
          _this5.$message.error(str);
        }
      });
    },

    //补件进度
    addProgress: function addProgress() {
      this.addProgressMask = true;
      Object.assign(this.addProgressForm, this.$options.data().addProgressForm);
    },
    addProgressConfirm: function addProgressConfirm() {
      var _this6 = this;

      var id = this.currentId ? this.currentId : this.orderRow.id;
      var addProgressData = {
        re_supplie_orders_id: this.currentId ? this.currentId : this.orderRow.id,
        description: this.addProgressForm.description,
        creator: this.addProgressForm.creator
      };
      this.$post(this.urls.resupplieProgress, addProgressData).then(function () {
        _this6.addProgressMask = false;
        _this6.refresh();
        _this6.$message({
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
          _this6.$message.error(str);
        }
      });
    },
    addProgressCancel: function addProgressCancel() {
      this.addProgressMask = false;
      this.$message({
        message: '取消添加',
        type: 'info'
      });
    },
    updateProgress: function updateProgress() {
      var _this7 = this;

      this.updateProgressMask = true;
      var id = this.currentId;
      this.$fetch(this.urls.resupplieProgress + '/' + id).then(function (res) {
        _this7.updateProgressFrom = {
          description: res.description,
          creator: res.creator
        };
      }, function (err) {});
    },
    updateProgressConfirm: function updateProgressConfirm() {
      var _this8 = this;

      var id = this.currentId;
      var data = {
        description: this.updateProgressFrom.description,
        creator: this.updateProgressFrom.creator
      };
      this.$patch(this.urls.resupplieProgress + '/' + id, data).then(function () {
        _this8.updateProgressMask = false;
        _this8.refresh();
        _this8.$message({
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
          _this8.$message.error(str);
        }
      });
    },
    updateProgressCancel: function updateProgressCancel() {
      this.updateMask = false;
      this.$message({
        message: '取消修改',
        type: 'info'
      });
    },
    delProgress: function delProgress() {
      var _this9 = this;

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
          _this9.$del(_this9.urls.resupplieProgress, { ids: _this9.delArr }).then(function () {
            _this9.$message({
              message: '删除成功',
              type: 'success'
            });
            _this9.refresh();
          }, function (err) {
            if (err.response) {
              var arr = err.response.data.errors;
              var arr1 = [];
              for (var i in arr) {
                arr1.push(arr[i]);
              }
              var str = arr1.join(',');
              _this9.$message.error(str);
            }
          });
        }).catch(function () {
          _this9.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    },


    //刷新
    refresh: function refresh() {
      this.orderLoading = true;
      this.resets();
      this.fetchData();
    },

    /*分页*/
    handlePagChg: function handlePagChg(page) {
      var _this10 = this;

      this.$fetch(this.urls.resupplieShip + '?page=' + page, {
        include: 'resupplieCategory,resupplieResponsible,logistic,freightType,supplier,distributionMethod,refundMethod,resupplieOrderItem.resupplieOrder,resupplieOrderItem.productComponent,resupplieOrderItem.product,resupplieProblemProduct.resupplieOrder,resupplieProblemProduct.supplier,resupplieImage,resupplieRejectReason,resuppliePurchase,resuppliePurchase.product,resuppliePurchase.productComponent,resupplieOperationRecord,resupplieProgress,resupplieEsheet,resupplieInnerNote'
      }).then(function (res) {
        _this10.orderData = res.data;
      });
    }
  },
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

/***/ 1171:
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
            { attrs: { label: "未打印", name: "0" } },
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
                  attrs: { data: _vm.orderData },
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
                  _vm._l(_vm.orderHead, function(item) {
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
            { attrs: { label: "已打印", name: "1" } },
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
                  attrs: { data: _vm.orderData },
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
                  _vm._l(_vm.orderHead, function(item) {
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
            { attrs: { label: "未发货", name: "2" } },
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
                  attrs: { data: _vm.orderData },
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
                  _vm._l(_vm.orderHead, function(item) {
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
            { attrs: { label: "已发货", name: "3" } },
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
                  attrs: { data: _vm.orderData },
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
                  _vm._l(_vm.orderHead, function(item) {
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
      _c("Pagination", {
        attrs: { "page-url": this.urls.resupplieShip },
        on: { handlePagChg: _vm.handlePagChg }
      }),
      _vm._v(" "),
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
                }),
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-tab-pane",
            { attrs: { label: "问题产品", name: "1" } },
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
                  attrs: { data: _vm.problemProData }
                },
                _vm._l(_vm.problemProHead, function(item) {
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
                  _c("el-button", [_vm._v("上传")])
                ],
                1
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "el-tab-pane",
            { attrs: { label: "驳回原因", name: "3" } },
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
                  attrs: { data: _vm.rejectReasonData }
                },
                _vm._l(_vm.rejectReasonHead, function(item) {
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
                }),
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-tab-pane",
            { attrs: { label: "采购明细", name: "4" } },
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
                  attrs: { data: _vm.purchaseData }
                },
                _vm._l(_vm.purchaseHead, function(item) {
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
                }),
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-tab-pane",
            { attrs: { label: "操作记录", name: "5" } },
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
                  attrs: { data: _vm.operationData }
                },
                _vm._l(_vm.operationHead, function(item) {
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
                }),
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-tab-pane",
            { attrs: { label: "补件进度", name: "6" } },
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
                  attrs: { data: _vm.progressData }
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
          ),
          _vm._v(" "),
          _c(
            "el-tab-pane",
            { attrs: { label: "电子面单", name: "7" } },
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
                  attrs: { data: _vm.esheetData }
                },
                _vm._l(_vm.esheetHead, function(item) {
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
                }),
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-tab-pane",
            { attrs: { label: "内部便签", name: "8" } },
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
                  attrs: { data: _vm.innerNoteData }
                },
                _vm._l(_vm.innerNoteHead, function(item) {
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
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-45a543d1", module.exports)
  }
}

/***/ })

});