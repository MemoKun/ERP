webpackJsonp([48],{

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(784)
/* template */
var __vue_template__ = __webpack_require__(785)
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

/***/ 784:
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      newOpt: [{
        cnt: '新增',
        icon: 'bf-add',
        ent: this.test
      }, {
        cnt: '修改',
        icon: 'bf-change',
        ent: this.updateOrder,
        nClick: false
      }, {
        cnt: '删除',
        icon: 'bf-del',
        ent: this.test,
        nClick: false
      }, {
        cnt: '提交',
        icon: 'bf-submit',
        ent: this.test,
        nClick: false
      }, {
        cnt: '驳回',
        icon: 'bf-reject',
        ent: this.test,
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
        buyNick: '',
        shopTitle: '',
        //修改中添加补件产品
        commodityCode: '',
        specCode: '',
        categoryId: '',
        warehouseName: ''
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
        prop: 'supplier',
        inProp: 'province',
        type: 'text'
      }, {
        label: '市',
        width: '120',
        prop: 'supplier',
        inProp: 'city',
        type: 'text'
      }, {
        label: '区',
        width: '120',
        prop: 'supplier',
        inProp: 'district',
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
      rejectReasonData: [], //驳回原因
      operationData: [], //操作记录
      progressData: [], //补件进度
      btmTableHead: [
      //补件产品,0
      [{
        label: '商品编码',
        width: '160',
        prop: "commodity_code",
        type: 'text'
      }, {
        label: '规格编码',
        width: '160',
        prop: "spec_code",
        type: 'text'
      }, {
        label: '商品简称',
        width: '160',
        prop: 'short_name',
        type: 'text'
      }, {
        label: '规格名称',
        width: '160',
        prop: 'spec_name',
        type: 'text'
      }, {
        label: '数量',
        width: '120',
        prop: 'quantity',
        type: 'number'
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
        type: 'text'
      }],
      //问题产品,1
      [{
        label: '商品编码',
        width: '160',
        prop: "commodity_code",
        type: 'text'
      }, {
        label: '规格编码',
        width: '160',
        prop: "spec_code",
        type: 'text'
      }, {
        label: '商品简称',
        width: '160',
        prop: 'short_name',
        type: 'text'
      }, {
        label: '规格名称',
        width: '160',
        prop: 'spec_name',
        type: 'text'
      }, {
        label: '供应商',
        width: '130',
        prop: 'supplier',
        type: 'text'
      }, {
        label: '问题描述',
        width: '200',
        prop: 'description',
        type: 'text'
      }],
      //图片信息,2
      [],
      //驳回原因,3
      [{
        label: '驳回人',
        width: '130',
        prop: 'rejecter',
        type: 'text'
      }, {
        label: '驳回时间',
        width: '130',
        prop: 'reject_time',
        type: 'text'
      }, {
        label: '驳回原因',
        width: '200',
        prop: 'reject_reason',
        type: 'text'
      }],
      //操作记录，4
      [{
        label: '用户',
        width: '130',
        prop: 'username',
        type: 'text'
      }, {
        label: '操作',
        width: '160',
        prop: 'operation',
        type: 'text'
      }, {
        label: '操作描述',
        width: '200',
        prop: 'operation_description',
        type: 'text'
      }, {
        label: '创建时间',
        width: '130',
        prop: 'create_time',
        type: 'text'
      }],
      //补件进度,5
      [{
        label: '进度描述',
        width: '200',
        prop: 'progress_description',
        type: 'text'
      }, {
        label: '创建人',
        width: '150',
        prop: 'creator',
        type: 'text'
      }, {
        label: '创建时间',
        width: '200',
        prop: 'create_time',
        type: 'text'
      }]],
      orderId: '',
      options: __WEBPACK_IMPORTED_MODULE_0_element_china_area_data__["regionDataPlus"],
      //修改
      moreForms: true,
      updateMask: false,
      updateId: '',
      updateProRowIndex: '0',
      updateProIndex: '',
      updateProUpload: 'upload0',
      updateProImgBtn: true,
      updateInfoRowIndex: '0',
      updateInfoIndex: '',
      updateInfoUpload: 'upload0',
      updateInfoImgBtn: true,
      orderForm: {
        resupply_order_no: '',
        system_order_no: '', //系统单号或订单编号
        member_name: '',
        member_telephone: '',
        //补件方
        resupplieCategory: '',
        resupply_money: '',
        refundMethod: '',
        refund_account: '',
        bank: '',
        logistic: '',
        estimated_fee: '',
        compensate_fee: '',
        load_fee: '',
        supplier: '',
        resupply_reason: '',
        distributionMethod: '',
        fee_type: '',
        promise_time: '',
        remark: '', //客服备注
        province: '',
        address: '', //收货地址
        resupplieResponsible: '',
        distribution_company: '', //配送公司
        distribution_phone: '', //配送电话
        problemPro: [{
          commodity_code: '',
          spec_code: '',
          short_name: '',
          spec_name: '',
          supplier: '',
          description: ''
        }],
        resupplyInfo: [{
          commodity_code: '',
          spec_code: '',
          short_name: '',
          spec_name: '',
          quantity: '',
          cost: '',
          actual_price: '',
          type: '',
          remark: ''
        }]
      },
      orderHead: [{
        label: '补件单号',
        prop: 'resupply_order_no',
        holder: '请输入补件单号',
        type: 'text'
      }, {
        label: '系统单号',
        prop: 'system_order_no',
        holder: '请输入系统单号',
        type: 'text'
      }, {
        label: '买家姓名',
        prop: 'member_name',
        holder: '请输入买家姓名',
        type: 'text'
      }, {
        label: '买家电话',
        prop: 'member_telephone',
        holder: '请输入买家电话',
        type: 'text'
      },
      /*{
        label:'补件方',
        prop:'resupplier',
        holder:'请输入补件方',
        type:'text'
      },*/
      {
        label: '补件类别',
        prop: 'resupplieCategory',
        holder: '请选择补件类别',
        type: 'select'
        //stateVal:'resupply_type_list'
      }, {
        label: '补件金额',
        prop: 'resupply_money',
        holder: '请输入补件金额',
        type: 'number'
      }, {
        label: '补款方式',
        prop: 'refundMethod',
        holder: '请选择补款方式',
        type: 'select'
        //stateVal:'refund_method_list'
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
        label: '物流公司',
        prop: 'logistic',
        holder: '请选择物流公司',
        type: 'select'
        //stateVal:'logistics_list'

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
        prop: 'supplier',
        holder: '请输入系统单号',
        type: 'select'
        //stateVal:'supplier_list'
      }, {
        label: '补件原因',
        prop: 'resupply_reason',
        holder: '请输入系统单号',
        type: 'textarea'
      }, {
        label: '配送方式',
        prop: 'distributionMethod',
        holder: '请选择配送方式',
        type: 'select'
        //stateVal:'distribution_method_list'
      }, {
        label: '运费类型',
        prop: 'fee_type',
        holder: '请选择运费类型',
        type: 'select'
        //stateVal:'fee_type_list'
      }, {
        label: '承诺时间',
        prop: 'promise_time',
        holder: '请输入承诺时间',
        type: 'time'
      }, {
        label: '客服备注',
        prop: 'remark',
        holder: '请输入客服备注',
        type: 'textarea'
      }, {
        label: '省市区',
        prop: 'province',
        holder: '请选择省市区',
        type: 'cascader'
      }, {
        label: '收货地址',
        prop: 'address',
        holder: '请输入收货地址',
        type: 'textarea'
      }, {
        label: '补件责任方',
        prop: 'resupplieResponsible',
        holder: '请选择补件责任方',
        type: 'select'
        //stateVal: 'resupply_responsibility_list'
      }, {
        label: '配送公司',
        prop: 'distribution_company',
        holder: '请选择配送公司',
        type: 'select'
        //stateVal: 'distribution_company_list'
      }, {
        label: '配送电话',
        prop: 'distribution_phone',
        holder: '请输入配送电话',
        type: 'text'
      }],
      orderRules: {
        resupply_order_no: [{ required: true, message: '请输入补件单号', trigger: 'blur' }],
        system_order_no: [{ required: true, message: '请输入系统单号', trigger: 'blur' }],
        resupplieCategory: [{ required: true, message: '请输入补件类别', trigger: 'blur' }],
        logistic: [{ required: true, message: '请输入物流公司', trigger: 'blur' }]
      },
      problemProHead: [{
        label: '商品编码',
        width: '160',
        prop: "commodity_code",
        type: 'text'
      }, {
        label: '规格编码',
        width: '160',
        prop: "spec_code",
        type: 'text'
      }, {
        label: '商品简称',
        width: '160',
        prop: 'short_name',
        type: 'text'
      }, {
        label: '规格名称',
        width: '160',
        prop: 'spec_name',
        type: 'text'
      }, {
        label: '供应商',
        width: '130',
        prop: 'supplier',
        type: 'text'
      }, {
        label: '问题描述',
        width: '200',
        prop: 'description',
        type: 'textarea'
      }],
      resupplyInfoHead: [{
        label: '商品编码',
        width: '160',
        prop: "commodity_code",
        type: 'text'
      }, {
        label: '规格编码',
        width: '160',
        prop: "spec_code",
        type: 'text'
      }, {
        label: '商品简称',
        width: '160',
        prop: 'short_name',
        type: 'text'
      }, {
        label: '规格名称',
        width: '160',
        prop: 'spec_name',
        type: 'text'
      }, {
        label: '数量',
        width: '120',
        prop: 'quantity',
        type: 'number'
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
        label: '包件类型',
        width: '140',
        prop: 'package_type',
        type: 'select',
        stateVal: 'types'
      }, {
        label: '备注',
        width: '200',
        prop: 'remark',
        type: 'textarea'
      }],
      //修改中添加补件商品
      addInfoMask: false,
      proInfoLoading: false,
      specInfoLoading: false,
      addInfoVal: {
        productInfo: [{
          productsImg: '',
          commodity_code: '',
          productsName: '',
          short_name: '',
          category_id: ''
        }],
        specInfo: [{
          combination: '',
          specImg: '',
          spec_code: '',
          spec_name: '',
          cost: '',
          tb_price: '',
          standard_price: '',
          quantity: '',
          actual_price: '',
          package_type: '',
          standard_money: '',
          volume: '',
          package_quantity: '',
          stock_quantity: ''
        }]
      },
      addInfoHead: [{
        label: '商品编码',
        prop: 'commodity_code',
        holder: '请输入商品编号',
        type: 'text'
      }, {
        label: '规格编码',
        prop: 'spec_code',
        holder: '请输入规格编码',
        type: 'text'
      }, {
        label: '商品类别',
        prop: 'category_id',
        holder: '请选择商品类别',
        type: 'select'
      }, {
        label: '所属仓库',
        prop: 'warehouse_name',
        holder: '请选择所属仓库',
        type: 'select'
      }],
      addInfoProHead: [{
        label: '产品图片',
        width: '120',
        prop: "productsImg",
        type: 'img'
      }, {
        label: '商品编码',
        width: '120',
        prop: "commodity_code",
        type: 'text'
      }, {
        label: '商品名称',
        width: '120',
        prop: "productsName",
        type: 'text'
      }, {
        label: '商品简称',
        width: '120',
        prop: "short_name",
        type: 'text'
      }, {
        label: '商品类别',
        width: '120',
        prop: "category_id",
        type: 'text'
      }],
      addInfoSpecHead: [{
        label: '规格编码',
        width: '120',
        prop: "spec_code",
        type: 'text'
      }, {
        label: '规格名称',
        width: '120',
        prop: "spec_name",
        type: 'text'
      }, {
        label: '成本',
        width: '100',
        prop: "cost",
        type: 'number'
      }, {
        label: '淘宝售价',
        width: '120',
        prop: "tb_price",
        type: 'number'
      }, {
        label: '标准售价',
        width: '120',
        prop: "standard_price",
        type: 'number'
      }, {
        label: '数量',
        width: '120',
        prop: "quantity",
        type: 'number'
      }, {
        label: '实际售价',
        width: '120',
        prop: "actual_price",
        type: 'number'
      }, {
        label: '包件类型',
        width: '120',
        prop: "package_type",
        type: 'text'
      }, {
        label: '标准金额',
        width: '120',
        prop: "standard_money",
        type: 'number'
      }, {
        label: '体积',
        width: '120',
        prop: "volume",
        type: 'number'
      }, {
        label: '包件数',
        width: '120',
        prop: "package_quantity",
        type: 'number'
      }, {
        label: '库存数',
        width: '120',
        prop: "stock_quantity",
        type: 'number'
      }],
      //删除
      orderSelection: '',
      delArr: [],
      //提交
      //驳回
      //导出          
      //下载
      //还原
      //刷新
      orderLoading: true
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
    resets: function resets() {},

    //获取数据
    fetchData: function fetchData() {
      var _this = this;

      var index = this.activeName - 0;
      switch (index) {
        case 0:
          this.$fetch(this.urls.resupplieApplication + '/searchUnsubmited', { include: 'resupplieCategory,resupplieResponsible,logistic,freightType,supplier,distributionMethod,refundMethod,resupplieOrderItem.resupplieOrder,resupplieProblemProduct.resupplieOrder' }).then(function (res) {
            _this.orderLoading = false;
            _this.submitData = res.data;
            var pg = res.meta.pagination;
            _this.$store.dispatch('currentPage', pg.current_page);
            _this.$store.commit('PER_PAGE', pg.per_page);
            _this.$store.commit('PAGE_TOTAL', pg.total);
            _this.resupplyInfoData = _this.problemProData = res.data[0] ? res.data[0]['resupplieOrderItem'].data : [];
            _this.problemProData = res.data[1] ? res.data[1]['resupplieProblemProduct'].data : [];
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
    orderRClick: function orderRClick(row) {
      //点击上方tab的某行底部tab更新
      this.orderId = row.id;
      /*this.resupplyData=row[].data;
      this.problemProData=row[].data;
      this.rejectReasonData=row[].data;
      this.operationData=row[].data;
      this.progressData=row[].data;*/
    },

    //提交信息tab切换
    handleTabsClick: function handleTabsClick() {
      this.newOpt[0].nClick = this.activeName == '1' ? true : false; //修改
      this.newOpt[1].nClick = this.activeName == '1' ? true : false; //删除
      this.newOpt[2].nClick = this.activeName == '1' ? true : false; //提交
      this.newOpt[3].nClick = this.activeName == '0' ? true : false; //驳回
    },

    /*补件信息tab */
    bottomTabsClick: function bottomTabsClick() {},

    //修改
    updateOrder: function updateOrder() {
      if (this.orderSelection.length == 0) {
        this.$message({
          message: '没有选择要修改的数据',
          type: 'warning'
        });
        return;
      } else if (this.orderSelection.length >= 2) {
        this.$message({
          message: '只能修改单条数据',
          type: 'warning'
        });
        return;
      } else {
        this.updateMask = true;
      }
    },
    updateProCName: function updateProCName(_ref) {
      var row = _ref.row,
          rowIndex = _ref.rowIndex;

      row.index = rowIndex;
    },
    updateProRowClick: function updateProRowClick(row) {
      this.updateProRowIndex = row.index;
      this.updateProIndex = 'index' + row.index;
      //图片
    },
    updateProImgUpload: function updateProImgUpload(file) {},
    beforeUploadProImg: function beforeUploadProImg(file) {},
    updateInfoImgUpload: function updateInfoImgUpload(file) {},
    beforeUploadInfoImg: function beforeUploadInfoImg(file) {},
    updateInfoCName: function updateInfoCName(_ref2) {
      var row = _ref2.row,
          rowIndex = _ref2.rowIndex;

      row.index = rowIndex;
    },
    updateInfoRowClick: function updateInfoRowClick(row) {
      this.updateInfoRowIndex = row.index;
      this.updateInfoIndex = 'index' + row.index;
    },
    addInfoDel: function addInfoDel(index) {
      this.orderForm.resupplyInfo.splice(index, 1);
      this.$message({
        message: '删除补件产品成功',
        type: 'success'
      });
    },
    updateConfirm: function updateConfirm() {},
    updateCancel: function updateCancel() {
      this.updateMask = false;
    },

    //修改中添加补件产品
    addInfo: function addInfo() {
      this.addInfoMask = true;
    },
    proInfoRowClick: function proInfoRowClick(row) {},
    proInfoRowCName: function proInfoRowCName(_ref3) {
      var row = _ref3.row,
          rowIndex = _ref3.rowIndex;

      row.index = rowIndex;
    },
    specInfoRowClick: function specInfoRowClick(row) {},
    specInfoRowCName: function specInfoRowCName(_ref4) {
      var row = _ref4.row,
          rowIndex = _ref4.rowIndex;

      row.index = rowIndex;
    },
    searchInfo: function searchInfo() {},

    //删除
    //批量删除
    handleSelectionChange: function handleSelectionChange(val) {
      if (val.length != 0) {
        this.update = val[0].id;
      } else {
        this.updateId = '';
      }
      this.orderSelection = val;
      var del = [];
      val.forEach(function (selectedItem) {
        del.push(selectedItem.id);
      });
      this.delArr = del.join(',');
    },

    //提交
    //驳回
    //刷新
    refresh: function refresh() {
      this.orderLoading = true;
      this.fetchData();
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

/***/ 785:
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
                      value: _vm.searchBox.shopTitle,
                      callback: function($$v) {
                        _vm.$set(_vm.searchBox, "shopTitle", $$v)
                      },
                      expression: "searchBox.shopTitle"
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
                      value: _vm.searchBox.shopTitle,
                      callback: function($$v) {
                        _vm.$set(_vm.searchBox, "shopTitle", $$v)
                      },
                      expression: "searchBox.shopTitle"
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
                      value: _vm.searchBox.shopTitle,
                      callback: function($$v) {
                        _vm.$set(_vm.searchBox, "shopTitle", $$v)
                      },
                      expression: "searchBox.shopTitle"
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
                            value: _vm.searchBox.shopTitle,
                            callback: function($$v) {
                              _vm.$set(_vm.searchBox, "shopTitle", $$v)
                            },
                            expression: "searchBox.shopTitle"
                          }
                        },
                        _vm._l(_vm.searchBox.shopTitle, function(item) {
                          return _c("el-option", {
                            key: item.value,
                            attrs: { label: item.label, value: item.value }
                          })
                        }),
                        1
                      )
                    ],
                    1
                  )
                : _c(
                    "span",
                    [
                      _c("el-button", { attrs: { type: "primary" } }, [
                        _vm._v("筛选")
                      ]),
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
                _c("label", [_vm._v("包含产品")]),
                _vm._v(" "),
                _c("el-input", {
                  staticClass: "half",
                  attrs: { clearable: "" },
                  model: {
                    value: _vm.searchBox.shopTitle,
                    callback: function($$v) {
                      _vm.$set(_vm.searchBox, "shopTitle", $$v)
                    },
                    expression: "searchBox.shopTitle"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "span",
              [
                _c("label", [_vm._v("店铺昵称")]),
                _vm._v(" "),
                _c(
                  "el-select",
                  {
                    attrs: { clearable: "", placeholder: "请选择" },
                    model: {
                      value: _vm.searchBox.shopTitle,
                      callback: function($$v) {
                        _vm.$set(_vm.searchBox, "shopTitle", $$v)
                      },
                      expression: "searchBox.shopTitle"
                    }
                  },
                  _vm._l(_vm.searchBox.shopTitle, function(item) {
                    return _c("el-option", {
                      key: item.value,
                      attrs: { label: item.label, value: item.value }
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
                _c("label", [_vm._v("省市区")]),
                _vm._v(" "),
                _c("el-cascader", {
                  attrs: { size: "middle", options: _vm.options },
                  model: {
                    value: _vm.searchBox.shopTitle,
                    callback: function($$v) {
                      _vm.$set(_vm.searchBox, "shopTitle", $$v)
                    },
                    expression: "searchBox.shopTitle"
                  }
                })
              ],
              1
            )
          ]
        ),
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
              { staticStyle: { "text-align": "left" } },
              [
                _c("label", [_vm._v("审核时间")]),
                _vm._v(" "),
                _c("el-date-picker", {
                  attrs: {
                    type: "daterange",
                    "range-separator": "至",
                    "start-placeholder": "开始日期",
                    "end-placeholder": "结束日期"
                  },
                  model: {
                    value: _vm.searchBox.shopTitle,
                    callback: function($$v) {
                      _vm.$set(_vm.searchBox, "shopTitle", $$v)
                    },
                    expression: "searchBox.shopTitle"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _vm.filterBox
              ? _c(
                  "div",
                  { staticStyle: { "text-align": "right" } },
                  [
                    _c("el-button", { attrs: { type: "primary" } }, [
                      _vm._v("筛选")
                    ]),
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
                                              "\n                  " +
                                                _vm._s(
                                                  item.inProp
                                                    ? scope.row[item.prop][
                                                        item.inProp
                                                      ]
                                                    : scope.row[item.prop]
                                                ) +
                                                "\n                "
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
                                              "\n                  " +
                                                _vm._s(
                                                  item.inProp
                                                    ? scope.row[item.prop][
                                                        item.inProp
                                                      ]
                                                    : scope.row[item.prop]
                                                ) +
                                                "\n                "
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
                    _vm._l(_vm.btmTableHead[this.bottomActiveName], function(
                      item
                    ) {
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
                                                "\n                  " +
                                                  _vm._s(
                                                    item.inProp
                                                      ? scope.row[item.prop][
                                                          item.inProp
                                                        ]
                                                      : scope.row[item.prop]
                                                  ) +
                                                  "\n                "
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
                    _vm._l(_vm.btmTableHead[this.bottomActiveName], function(
                      item
                    ) {
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
                                                "\n                  " +
                                                  _vm._s(
                                                    item.inProp
                                                      ? scope.row[item.prop][
                                                          item.inProp
                                                        ]
                                                      : scope.row[item.prop]
                                                  ) +
                                                  "\n                "
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
                  _vm._v("图片信息\n        "),
                  _c(
                    "div",
                    { staticStyle: { "text-align": "right" } },
                    [
                      _c("el-button", [_vm._v("粘贴")]),
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
                    _vm._l(_vm.btmTableHead[this.bottomActiveName], function(
                      item
                    ) {
                      return _c("el-table-column", {
                        key: item.label,
                        attrs: {
                          label: item.label,
                          align: "center",
                          width: item.width
                        }
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
                    _vm._l(_vm.btmTableHead[this.bottomActiveName], function(
                      item
                    ) {
                      return _c("el-table-column", {
                        key: item.label,
                        attrs: {
                          label: item.label,
                          align: "center",
                          width: item.width
                        }
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
                    { attrs: { data: _vm.progressData } },
                    _vm._l(_vm.btmTableHead[this.bottomActiveName], function(
                      item
                    ) {
                      return _c("el-table-column", {
                        key: item.label,
                        attrs: {
                          label: item.label,
                          align: "center",
                          width: item.width
                        }
                      })
                    }),
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticStyle: { "text-align": "right" } },
                    [
                      _c("el-button", [_vm._v("新增进度")]),
                      _vm._v(" "),
                      _c("el-button", [_vm._v("修改进度")]),
                      _vm._v(" "),
                      _c("el-button", [_vm._v("删除进度")])
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
              attrs: { title: "修改补件单", visible: _vm.updateMask },
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
                  attrs: { model: _vm.orderForm, rules: _vm.orderRules }
                },
                _vm._l(_vm.orderHead, function(item, index) {
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
                                    item.prop == "resupply_order_no" ||
                                    item.prop == "system_order_no"
                                      ? true
                                      : false
                                },
                                model: {
                                  value: _vm.orderForm[item.prop],
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.orderForm,
                                      item.prop,
                                      typeof $$v === "string" ? $$v.trim() : $$v
                                    )
                                  },
                                  expression: "orderForm[item.prop]"
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
                                attrs: { size: "middle", options: _vm.options },
                                model: {
                                  value: _vm.orderForm[item.prop],
                                  callback: function($$v) {
                                    _vm.$set(_vm.orderForm, item.prop, $$v)
                                  },
                                  expression: "orderForm[item.prop]"
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
                                  value: _vm.orderForm[item.prop],
                                  callback: function($$v) {
                                    _vm.$set(_vm.orderForm, item.prop, $$v)
                                  },
                                  expression: "orderForm[item.prop]"
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
                                  value: _vm.orderForm[item.prop],
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.orderForm,
                                      item.prop,
                                      typeof $$v === "string" ? $$v.trim() : $$v
                                    )
                                  },
                                  expression: "orderForm[item.prop]"
                                }
                              })
                            ],
                            1
                          )
                        : item.type == "select"
                        ? _c("span", [_c("el-select")], 1)
                        : item.type == "time"
                        ? _c(
                            "span",
                            [
                              _c("el-date-picker", {
                                attrs: { type: "datetime" },
                                model: {
                                  value: _vm.orderForm[item.prop],
                                  callback: function($$v) {
                                    _vm.$set(_vm.orderForm, item.prop, $$v)
                                  },
                                  expression: "orderForm[item.prop]"
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
                    data: _vm.orderForm.problemPro,
                    fit: "",
                    height: "300",
                    "row-class-name": _vm.updateProCName
                  },
                  on: { "row-click": _vm.updateProRowClick }
                },
                [
                  _vm._l(_vm.problemProHead, function(item, index) {
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
                                _vm.updateProIndex == "index" + scope.$index
                                  ? _c("span", [
                                      item.type == "text"
                                        ? _c(
                                            "span",
                                            [
                                              _c("el-input", {
                                                attrs: {
                                                  size: "small",
                                                  type: "text"
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
                                        : item.type == "img"
                                        ? _c(
                                            "span",
                                            [
                                              _vm.updateProUpload ==
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
                                                              _vm.updateProImgUpload
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
                                                    "sapn",
                                                    [
                                                      _c("img", {
                                                        attrs: {
                                                          src:
                                                            scope.row[
                                                              item.imgPath
                                                            ]
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
                                                              _vm.beforeUploadProImg
                                                          }
                                                        },
                                                        [
                                                          _c("el-button", {
                                                            directives: [
                                                              {
                                                                name: "show",
                                                                rawName:
                                                                  "v-show",
                                                                value:
                                                                  _vm.updateProImgBtn ==
                                                                  "show" +
                                                                    scope.$index,
                                                                expression:
                                                                  "updateProImgBtn=='show'+scope.$index"
                                                              }
                                                            ],
                                                            staticClass: "chg",
                                                            attrs: {
                                                              type: "primary",
                                                              icon:
                                                                "el-icon-edit",
                                                              size: "mini"
                                                            }
                                                          })
                                                        ],
                                                        1
                                                      )
                                                    ],
                                                    1
                                                  )
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
                                                  value:
                                                    _vm.orderForm[item.prop],
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.orderForm,
                                                      item.prop,
                                                      typeof $$v === "string"
                                                        ? $$v.trim()
                                                        : $$v
                                                    )
                                                  },
                                                  expression:
                                                    "orderForm[item.prop]"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        : _vm._e()
                                    ])
                                  : _c("span", [
                                      item.type == "text"
                                        ? _c("span", [
                                            _vm._v(
                                              "\n                " +
                                                _vm._s(scope.row[item.prop]) +
                                                "\n              "
                                            )
                                          ])
                                        : item.type == "img"
                                        ? _c("span", [
                                            _c("img", {
                                              attrs: {
                                                src: scope.row[item.imgPath]
                                              }
                                            })
                                          ])
                                        : _c("span", [
                                            _vm._v(
                                              "\n                " +
                                                _vm._s(scope.row[item.prop]) +
                                                "\n              "
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
                      type: "selection",
                      width: "95",
                      align: "center",
                      checked: _vm.checkboxInit
                    }
                  })
                ],
                2
              ),
              _vm._v(" "),
              _c("el-button", { attrs: { type: "text" } }, [
                _vm._v("补件产品信息")
              ]),
              _vm._v(" "),
              _c(
                "el-table",
                {
                  attrs: {
                    data: _vm.orderForm.resupplyInfo,
                    fit: "",
                    height: "300",
                    "row-class-name": _vm.updateInfoCName
                  },
                  on: { "row-click": _vm.updateInfoRowClick }
                },
                [
                  _vm._l(_vm.resupplyInfoHead, function(item, index) {
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
                                _vm.updateInfoIndex == "index" + scope.$index
                                  ? _c("span", [
                                      item.type == "text"
                                        ? _c(
                                            "span",
                                            [
                                              _c("el-input", {
                                                attrs: {
                                                  size: "small",
                                                  type: "text"
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
                                        : item.type == "img"
                                        ? _c(
                                            "span",
                                            [
                                              _vm.updateInfoUpload ==
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
                                                              _vm.updateInfoImgUpload
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
                                                    "sapn",
                                                    [
                                                      _c("img", {
                                                        attrs: {
                                                          src:
                                                            scope.row[
                                                              item.imgPath
                                                            ]
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
                                                              _vm.beforeUploadInfoImg
                                                          }
                                                        },
                                                        [
                                                          _c("el-button", {
                                                            directives: [
                                                              {
                                                                name: "show",
                                                                rawName:
                                                                  "v-show",
                                                                value:
                                                                  _vm.updateInfoImgBtn ==
                                                                  "show" +
                                                                    scope.$index,
                                                                expression:
                                                                  "updateInfoImgBtn=='show'+scope.$index"
                                                              }
                                                            ],
                                                            staticClass: "chg",
                                                            attrs: {
                                                              type: "primary",
                                                              icon:
                                                                "el-icon-edit",
                                                              size: "mini"
                                                            }
                                                          })
                                                        ],
                                                        1
                                                      )
                                                    ],
                                                    1
                                                  )
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
                                                  value:
                                                    _vm.orderForm[item.prop],
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.orderForm,
                                                      item.prop,
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "orderForm[item.prop]"
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
                                                  value:
                                                    _vm.orderForm[item.prop],
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.orderForm,
                                                      item.prop,
                                                      typeof $$v === "string"
                                                        ? $$v.trim()
                                                        : $$v
                                                    )
                                                  },
                                                  expression:
                                                    "orderForm[item.prop]"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        : item.type == "select"
                                        ? _c("span", [_c("el-select")], 1)
                                        : _vm._e()
                                    ])
                                  : _c("span", [
                                      item.type == "text"
                                        ? _c("span", [
                                            _vm._v(
                                              "\n                " +
                                                _vm._s(scope.row[item.prop]) +
                                                "\n              "
                                            )
                                          ])
                                        : item.type == "img"
                                        ? _c("span", [
                                            _c("img", {
                                              attrs: {
                                                src: scope.row[item.imgPath]
                                              }
                                            })
                                          ])
                                        : _c("span", [
                                            _vm._v(
                                              "\n                " +
                                                _vm._s(scope.row[item.prop]) +
                                                "\n              "
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
                                    return _vm.addInfoDel(scope.$index)
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
                    { attrs: { type: "primary" }, on: { click: _vm.addInfo } },
                    [_vm._v("添加产品")]
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
              class: { "more-forms": _vm.moreForms },
              attrs: { title: "添加产品", visible: _vm.addInfoMask },
              on: {
                "update:visible": function($event) {
                  _vm.addInfoMask = $event
                }
              }
            },
            [
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
                        attrs: { clearble: "" },
                        model: {
                          value: _vm.searchBox.commodityCode,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.searchBox,
                              "commodityCode",
                              typeof $$v === "string" ? $$v.trim() : $$v
                            )
                          },
                          expression: "searchBox.commodityCode"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    [
                      _c("label", [_vm._v("规格编码")]),
                      _vm._v(" "),
                      _c("el-input", {
                        attrs: { clearble: "" },
                        model: {
                          value: _vm.searchBox.specCode,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.searchBox,
                              "specCode",
                              typeof $$v === "string" ? $$v.trim() : $$v
                            )
                          },
                          expression: "searchBox.specCode"
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
                      _c("el-select", {
                        attrs: { clearble: "", placeholder: "请选择" },
                        model: {
                          value: _vm.searchBox.categoryId,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.searchBox,
                              "categoryId",
                              typeof $$v === "string" ? $$v.trim() : $$v
                            )
                          },
                          expression: "searchBox.categoryId"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    [
                      _c("label", [_vm._v("所属仓库")]),
                      _vm._v(" "),
                      _c("el-select", {
                        attrs: { clearble: "", placeholder: "请选择" },
                        model: {
                          value: _vm.searchBox.warehouseName,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.searchBox,
                              "warehouseName",
                              typeof $$v === "string" ? $$v.trim() : $$v
                            )
                          },
                          expression: "searchBox.warehouseName"
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
                      on: { click: _vm.searchInfo }
                    },
                    [_vm._v("查询")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("el-button", { attrs: { type: "text" } }, [_vm._v("产品")]),
              _vm._v(" "),
              _c(
                "el-table",
                {
                  directives: [
                    {
                      name: "loading",
                      rawName: "v-loading",
                      value: _vm.proInfoLoading,
                      expression: "proInfoLoading"
                    }
                  ],
                  attrs: {
                    data: _vm.addInfoVal.productInfo,
                    height: "300",
                    "row-class-name": _vm.proInfoRowCName
                  },
                  on: { "row-click": _vm.proInfoRowClick }
                },
                _vm._l(_vm.addInfoProHead, function(item) {
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
                                      "\n              " +
                                        _vm._s(scope.row[item.prop]) +
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
              _c("el-button", { attrs: { type: "text" } }, [_vm._v("规格")]),
              _vm._v(" "),
              _c(
                "el-table",
                {
                  directives: [
                    {
                      name: "loading",
                      rawName: "v-loading",
                      value: _vm.specInfoLoading,
                      expression: "specInfoLoading"
                    }
                  ],
                  attrs: {
                    data: _vm.addInfoVal.specInfo,
                    "row-class-name": _vm.specInfoRowCName
                  },
                  on: { "row-click": _vm.specInfoRowClick }
                },
                _vm._l(_vm.addInfoSpecHead, function(item) {
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
                                      "\n              " +
                                        _vm._s(scope.row[item.prop]) +
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