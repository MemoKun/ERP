webpackJsonp([108],{

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(794)
/* template */
var __vue_template__ = __webpack_require__(795)
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
Component.options.__file = "resources/assets/js/views/afterSaleMag/afterSSubmission.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-68a70dc2", Component.options)
  } else {
    hotAPI.reload("data-v-68a70dc2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 794:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        cnt: "修改",
        icon: "bf-change",
        ent: this.edit,
        nClick: false
      }, {
        cnt: "锁定",
        icon: "bf-lock",
        ent: this.test,
        nClick: false
      }, {
        cnt: "解锁",
        icon: "bf-delock",
        ent: this.test,
        nClick: false
      }, {
        cnt: "审核",
        icon: "bf-audit",
        ent: this.test,
        nClick: false
      }, {
        cnt: "退审",
        icon: "bf-auditfaild",
        ent: this.test,
        nClick: true
      }, {
        cnt: "刷新",
        icon: "bf-refresh",
        ent: this.refresh
      }],
      /* 搜索框 */
      filterBox: false,
      searchBox: {
        after_sale_order_no: "",
        order_no: "",
        vip_name: "",
        order_staff: "",
        orderStaff: [{ label: "ceshi", value: 0 }],
        after_sale_status: "",
        afterSaleStatus: [{ label: "ceshi", value: 0 }],
        after_sale_type: "",
        order_phone: "",
        created_at: "",
        after_sale_sort: "",
        afterSaleSort: [{ label: "售后", value: 0 }, { label: "售中", value: 1 }],
        parts_duty: "",
        partsDuty: [{ label: "物流", value: 0 }, { label: "工厂", value: 1 }, { label: "公司", value: 2 }, { label: "员工", value: 3 }, { label: "其他", value: 4 }]
      },
      /* 中间tabs */
      topActiveName: "0",
      checkboxInit: false,
      tableHead: [{
        label: "系统单号",
        width: "200",
        prop: "after_sale_order_no",
        type: "text"
      }, {
        label: "店铺名称",
        width: "150",
        prop: "shop_name",
        type: "text"
      }, {
        label: "店铺分组",
        width: "150",
        prop: "shop_group",
        type: "text"
      }, {
        label: "订单号",
        width: "200",
        prop: "order_no",
        type: "text"
      }, {
        label: "会员昵称",
        width: "120",
        prop: "vip_name",
        type: "text"
      }, {
        label: "客户姓名",
        width: "120",
        prop: "client_name",
        type: "text"
      }, {
        label: "补件责任方",
        width: "120",
        prop: "parts_duty",
        type: "text"
      }, {
        label: "供应商",
        width: "120",
        prop: "suppliers_id",
        type: "text"
      }, {
        label: "物流公司",
        width: "150",
        prop: "logistic_name",
        type: "text"
      }, {
        label: "物流单号",
        width: "200",
        prop: "logistics_id",
        type: "text"
      }, {
        label: "发货时间",
        width: "200",
        prop: "deliver_date",
        type: "text"
      }, {
        label: "业务员",
        width: "150",
        prop: "order_staff",
        type: "text"
      }, {
        label: "售后处理人",
        width: "150",
        prop: "after_sale_person",
        type: "text"
      }, {
        label: "订单金额",
        width: "200",
        prop: "order_amount",
        type: "text"
      }, {
        label: "售后类型",
        width: "200",
        prop: "after_sale_type",
        type: "text"
      }, {
        label: "售后分类",
        width: "130",
        prop: "after_sale_group",
        type: "text"
      }, {
        label: "售后状态",
        width: "150",
        prop: "after_sale_status",
        type: "number"
      }, {
        label: "联系方式",
        width: "150",
        prop: "order_phone",
        type: "text"
      }, {
        label: "问题描述",
        width: "200",
        prop: "problem_description",
        type: "text"
      }, {
        label: "客服要求",
        width: "200",
        prop: "customer_service_requirements",
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
        label: "地址",
        width: "180",
        prop: "receiver_address",
        type: "text"
      }, {
        label: "创建日期",
        width: "180",
        prop: "created_at",
        type: "text"
      }, {
        label: "备注",
        width: "180",
        prop: "order_remark",
        type: "text"
      }, {
        label: "淘宝订单号",
        width: "180",
        prop: "taobao_oid",
        type: "text"
      }, {
        label: "补件信息",
        width: "180",
        prop: "rfe_information",
        type: "text"
      }, {
        label: "锁定人",
        width: "150",
        prop: "locking_people",
        type: "text"
      }, {
        label: "锁定时间",
        width: "180",
        prop: "locking_at",
        type: "text"
      }, {
        label: "标记人",
        width: "150",
        prop: "tag_people",
        type: "text"
      }, {
        label: "标记名称",
        width: "150",
        prop: "tag_name",
        type: "text"
      }, {
        label: "标记时间",
        width: "180",
        prop: "tag_date",
        type: "text"
      }, {
        label: "驳回",
        width: "90",
        prop: "is_reject",
        type: "checkbox"
      }, {
        label: "退款处理状态",
        width: "150",
        prop: "refund_status",
        type: "text"
      }, {
        label: "退货处理状态",
        width: "150",
        prop: "return_status",
        type: "text"
      }, {
        label: "补件处理状态",
        width: "150",
        prop: "patch_status",
        type: "text"
      }, {
        label: "补件拆分",
        width: "150",
        prop: "patch_split",
        type: "text"
      }, {
        label: "需要退款",
        width: "90",
        prop: "is_refund",
        type: "checkbox"
      }, {
        label: "需要退货",
        width: "90",
        prop: "is_return",
        type: "checkbox"
      }, {
        label: "需发补件",
        width: "90",
        prop: "is_patch",
        type: "checkbox"
      }, {
        label: "已解决",
        width: "90",
        prop: "is_solve",
        type: "checkbox"
      }],
      submitData: [],
      unsubmitData: [],
      submitLoading: true,
      unsubmitLoading: true,
      // 底部tabs
      bottomActiveName: "0",
      scheduleData: [],
      btmTableHead: [[{
        label: "进度描述",
        width: "180",
        prop: "taobao_oid",
        type: "text"
      }, {
        label: "创建人",
        width: "180",
        prop: "user",
        type: "text"
      }, {
        label: "业务日期",
        width: "180",
        prop: "created_at",
        type: "text"
      }, {
        label: "预约时间",
        width: "180",
        prop: "order_time",
        type: "text"
      }], [{
        label: "售后图片",
        width: "120",
        prop: "img_url",
        type: "img"
      }], [], [], [], [], [{
        label: "责任方",
        prop: "responsible_party",
        width: "180",
        type: "text"
      }, {
        label: "责任方姓名",
        prop: "responsible_party_name",
        width: "180",
        type: "text"
      }, {
        label: "责任金额",
        prop: "responsible_money",
        width: "180",
        type: "number"
      }], [{
        label: "责任方",
        prop: "responsible_party",
        width: "180",
        type: "text"
      }, {
        label: "责任方姓名",
        prop: "responsible_party_name",
        width: "180",
        type: "text"
      }, {
        label: "责任金额",
        prop: "responsible_money",
        width: "180",
        type: "number"
      }], [{
        label: "责任方",
        prop: "responsible_party",
        width: "180",
        type: "text"
      }, {
        label: "责任方姓名",
        prop: "responsible_party_name",
        width: "180",
        type: "text"
      }, {
        label: "责任金额",
        prop: "responsible_money",
        width: "180",
        type: "number"
      }], [{
        label: "驳回人",
        prop: "reject_people",
        width: "180",
        type: "text"
      }, {
        label: "驳回原因",
        prop: "reject_reason",
        width: "250",
        type: "text"
      }, {
        label: "驳回时间",
        prop: "reject_at",
        width: "180",
        type: "text"
      }], [{
        label: "商品编码",
        prop: "commodity_code",
        width: "180",
        type: "text"
      }, {
        label: "规格编码",
        prop: "specification_id",
        width: "180",
        type: "text"
      }, {
        label: "商品简称",
        prop: "short_name",
        width: "150",
        type: "text"
      }, {
        label: "规格",
        prop: "spec",
        width: "180",
        type: "text"
      }, {
        label: "颜色",
        prop: "color",
        width: "120",
        type: "text"
      }, {
        label: "材质",
        prop: "materials",
        width: "120",
        type: "text"
      }, {
        label: "购买数量",
        prop: "quantity ",
        width: "120",
        type: "text"
      }, {
        label: "供应商",
        prop: "supplier_id",
        width: "150",
        type: "text"
      }], [{
        label: "主题",
        width: "150",
        prop: "theme",
        type: "text"
      }, {
        label: "用户",
        width: "150",
        prop: "user",
        type: "text"
      }, {
        label: "内容",
        width: "150",
        prop: "content",
        type: "text"
      }, {
        label: "主题",
        width: "150",
        prop: "proposed_at",
        type: "text"
      }], [{
        label: "用户",
        width: "150",
        prop: "user",
        type: "text"
      }, {
        label: "操作",
        width: "150",
        prop: "operate",
        type: "text"
      }, {
        label: "操作描述",
        width: "150",
        prop: "operate_description",
        type: "text"
      }, {
        label: "创建时间",
        width: "150",
        prop: "created_at",
        type: "text"
      }]],
      // 修改
      selection: "",
      updateMask: false,
      updateId: "",
      updateIndex: "",
      updateForm: {},
      componentShowChg: true,
      updateCompUpload: "upload0",
      updateRwIndex: "0",
      moreForms: true,
      addAfterSaleMask: false,
      addAfterSaleHead: [{
        label: "订单编号",
        prop: "order_no",
        holder: "系统自动生成",
        type: "text",
        addChgAble: true
      }, {
        label: "店铺昵称",
        prop: "shop_name",
        holder: "请输入店铺昵称",
        type: "text"
      }, {
        label: "订单金额",
        prop: "order_amount",
        holder: "请输入订单金额",
        type: "number"
      }, {
        label: "售后类型",
        prop: "after_sale_type",
        holder: "请选择售后类型",
        type: "select",
        stateVal: "aftersaletype"
      }, {
        label: "售后分类",
        prop: "after_sale_group",
        holder: "请输入售后分类",
        type: "text"
      }, {
        label: "售后状态",
        prop: "after_sale_status",
        holder: "请选择售后状态",
        type: "select",
        stateVal: "aftersalestate"
      }, {
        label: "联系方式",
        prop: "order_phone",
        holder: "请输入联系方式",
        type: "text"
      }, {
        label: "上传图片",
        prop: "img",
        imgPath: "",
        holder: "请输入上传图片",
        type: "img"
      }, {
        label: "会员ID",
        prop: "vip_name",
        holder: "请输入会员ID",
        type: "text"
      }, {
        label: "业务员",
        prop: "order_staff",
        holder: "系统自动生成",
        type: "text",
        addChgAble: true
      }, {
        label: "供应商",
        prop: "suppliers_id",
        holder: "系统自动生成",
        type: "text",
        addChgAble: true
      }, {
        label: "物流公司",
        prop: "logistic_name",
        holder: "系统自动生成",
        type: "text",
        addChgAble: true
      }, {
        label: "物流单号",
        prop: "logistics_id",
        holder: "系统自动生成",
        type: "text",
        addChgAble: true
      }, {
        label: "发货时间",
        prop: "deliver_date",
        holder: "系统自动生成",
        type: "text",
        addChgAble: true
      }, {
        label: "省",
        prop: "receiver_state",
        holder: "请输入省",
        type: "text"
      }, {
        label: "市",
        prop: "receiver_city",
        holder: "请输入市",
        type: "text"
      }, {
        label: "区",
        prop: "receiver_district",
        holder: "请输入区",
        type: "text"
      }, {
        label: "详细地址",
        prop: "receiver_address",
        holder: "请输入详细地址",
        type: "text"
      }, {
        label: "问题单责任方",
        prop: "after_responsible_party",
        holder: "请输入问题单责任方",
        type: "text"
      }, {
        label: "售后成本",
        prop: "after_sale_cost",
        holder: "请输入售后成本",
        type: "number"
      }, {
        label: "问题描述",
        prop: "problem_description",
        holder: "请输入问题描述",
        type: "textarea"
      }, {
        label: "客服要求",
        prop: "customer_service_requirements",
        holder: "请输入客服要求",
        type: "textarea"
      }, {
        label: "补件信息",
        prop: "rfe_information",
        holder: "请输入补件信息",
        type: "textarea"
      }],
      addAfterSaleForm: {
        order_no: "",
        shop_name: "",
        after_sale_type: "",
        order_amount: "",
        after_sale_group: "",
        after_sale_status: "",
        order_phone: "",
        img: "",
        vip_name: "",
        suppliers_id: "",
        logistic_name: "",
        logistics_id: "",
        deliver_date: "",
        receiver_state: "",
        receiver_city: "",
        receiver_district: "",
        receiver_address: "",
        after_responsible_party: "",
        after_sale_cost: "",
        problem_description: "",
        customer_service_requirements: "",
        rfe_information: ""
      },
      addAfterSaleRules: {
        order_no: [{ required: true, message: "订单编号必选", trigger: "blur" }],
        shop_name: [{ required: true, message: "店铺昵称必选", trigger: "blur" }],
        vip_name: [{ required: true, message: "会员ID必选", trigger: "blur" }]
      },
      // 上传图片
      noUpload: true,
      showChgBtn: false,
      updateChgBtn: false,
      defProHead: [{
        label: "商品编码",
        prop: "commodity_code",
        width: "180",
        type: "text"
      }, {
        label: "规格编码",
        prop: "specification_id",
        width: "180",
        type: "text"
      }, {
        label: "商品简称",
        prop: "short_name",
        width: "150",
        type: "text"
      }, {
        label: "规格",
        prop: "specification_name",
        width: "180",
        type: "text"
      }, {
        label: "颜色",
        prop: "productComponents",
        inProp: "color",
        width: "120",
        type: "text"
      }, {
        label: "材质",
        prop: "productComponents",
        inProp: "materials",
        width: "120",
        type: "text"
      }, {
        label: "购买数量",
        prop: "quantity ",
        width: "120",
        type: "text"
      }, {
        label: "供应商",
        prop: "supplier_id",
        width: "150",
        type: "text"
      }],
      defectiveProduct: [],
      defProDtlVal: [],
      // 新增售后产品
      addAfterSProMask: false,
      addAfterSProDtlVal: [],
      proDtlVal: [],
      addOrderDtlVal: [],
      orderDtlVal: [],
      addAfterSProHead: [{
        label: "商品编码",
        prop: "commodity_code",
        width: "180",
        type: "text"
      }, {
        label: "规格编码",
        prop: "specification_id",
        width: "180",
        type: "text"
      }, {
        label: "商品简称",
        prop: "short_name",
        width: "150",
        type: "text"
      }, {
        label: "规格",
        prop: "product_component",
        inProp: "spec",
        width: "180",
        type: "text"
      }, {
        label: "颜色",
        prop: "product_component",
        width: "120",
        type: "text"
      }, {
        label: "材质",
        prop: "product_component",
        inProp: "materials",
        width: "120",
        type: "text"
      }, {
        label: "购买数量",
        prop: "quantity ",
        width: "120",
        type: "text"
      }, {
        label: "供应商",
        prop: "supplier_id",
        width: "150",
        type: "text"
      }],
      addOrderProHead: [{
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
      }]
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
      this.$message({
        message: "操作成功",
        type: "success"
      });
    },

    /* 搜索框 */
    handleQuery: function handleQuery() {
      console.log(666);
    },
    toggleShow: function toggleShow() {
      this.filterBox = !this.filterBox;
    },
    resets: function resets() {
      this.searchBox = {
        after_sale_order_no: "",
        order_no: "",
        vip_name: "",
        order_staff: "",
        orderStaff: [{ label: "ceshi", value: 0 }],
        after_sale_status: "",
        afterSaleStatus: [{ label: "ceshi", value: 0 }],
        after_sale_type: "",
        order_phone: "",
        created_at: "",
        after_sale_sort: "",
        afterSaleSort: [{ label: "售后", value: 0 }, { label: "售中", value: 1 }],
        parts_duty: "",
        partsDuty: [{ label: "物流", value: 0 }, { label: "工厂", value: 1 }, { label: "公司", value: 2 }, { label: "员工", value: 3 }, { label: "其他", value: 4 }]
      };
    },

    /* 中间tabs */
    clickTopTabs: function clickTopTabs() {
      this.selection = "";
      this.fetchAfterSaleData();
    },
    fetchAfterSaleData: function fetchAfterSaleData() {
      var _this = this;

      var index = this.topActiveName - 0;
      switch (index) {
        case 0:
          this.newOpt[0].nClick = false;
          this.newOpt[1].nClick = false;
          this.newOpt[2].nClick = false;
          this.newOpt[3].nClick = false;
          this.newOpt[4].nClick = true;
          this.$fetch(this.urls.aftersale, {
            order_status: "new",
            include: "afterSaleSchedules.user"
          }).then(function (res) {
            _this.unsubmitLoading = false;
            _this.unsubmitData = res.data;
            _this.checkboxInit = false;
            var pg = res.meta.pagination;
            _this.$store.dispatch("currentPage", pg.current_page);
            _this.$store.commit("PER_PAGE", pg.per_page);
            _this.$store.commit("PAGE_TOTAL", pg.total);
            _this.$store.dispatch("aftersalestate", "/aftersalestate");
            _this.$store.dispatch("aftersaletype", "/aftersaletype");
          }, function (err) {
            if (err.response) {
              var arr = err.response.data.errors;
              var arr1 = [];
              for (var i in arr) {
                arr1.push(arr[i]);
              }
              var str = arr1.join(",");
              _this.$message.error({
                message: str
              });
            }
          });
          break;
        case 1:
          this.newOpt[0].nClick = true;
          this.newOpt[1].nClick = true;
          this.newOpt[2].nClick = true;
          this.newOpt[3].nClick = true;
          this.newOpt[4].nClick = false;
          this.$fetch(this.urls.aftersale, {
            order_status: "submit",
            include: "afterSaleSchedules.user"
          }).then(function (res) {
            _this.submitLoading = false;
            _this.submitData = res.data;
            _this.checkboxInit = false;
            var pg = res.meta.pagination;
            _this.$store.dispatch("currentPage", pg.current_page);
            _this.$store.commit("PER_PAGE", pg.per_page);
            _this.$store.commit("PAGE_TOTAL", pg.total);
            _this.$store.dispatch("aftersalestate", "/aftersalestate");
            _this.$store.dispatch("aftersaletype", "/aftersaletype");
          }, function (err) {
            if (err.response) {
              var arr = err.response.data.errors;
              var arr1 = [];
              for (var i in arr) {
                arr1.push(arr[i]);
              }
              var str = arr1.join(",");
              _this.$message.error({
                message: str
              });
            }
          });
          break;
      }
    },
    afterSaleRCName: function afterSaleRCName(_ref) {
      var row = _ref.row,
          rowIndex = _ref.rowIndex;

      row.index = rowIndex;
    },
    afterSSubmissionRowClick: function afterSSubmissionRowClick(row) {
      /* 点击行 */
    },
    rowStyle: function rowStyle(_ref2) {
      // console.log((this.purIndex) === rowIndex);
      /* if((this.purIndex) === rowIndex){
          return { "background-color": "red" }
        }*/

      var row = _ref2.row,
          rowIndex = _ref2.rowIndex;
    },
    handleSelectionChange: function handleSelectionChange(val) {
      if (val.length != 0) {
        this.updateId = val[0].id;
        this.updateForm = {
          after_responsible_party: val[0].after_responsible_party,
          after_sale_check_date: val[0].after_sale_check_date,
          after_sale_check_person: val[0].after_sale_check_person,
          after_sale_group: val[0].after_sale_group,
          after_sale_order_no: val[0].after_sale_order_no,
          after_sale_order_type: val[0].after_sale_order_type,
          after_sale_person: val[0].after_sale_person,
          after_sale_status: val[0].after_sale_status,
          after_sale_type: val[0].after_sale_type,
          client_name: val[0].client_name,
          close_date: val[0].close_date,
          create_date: val[0].create_date,
          created_at: val[0].created_at,
          custom_oid: val[0].custom_oid,
          customer_service_requirements: val[0].customer_service_requirements,
          deliver_date: val[0].deliver_date,
          director_check_date: val[0].director_check_date,
          director_check_person: val[0].director_check_person,
          id: val[0].id,
          is_after_sale_check: val[0].is_after_sale_check,
          is_close: val[0].is_close,
          is_director_check: val[0].is_director_check,
          is_finish: val[0].is_finish,
          is_patch: val[0].is_patch,
          is_refund: val[0].is_refund,
          is_reject: val[0].is_reject,
          is_return: val[0].is_return,
          is_service_submit: val[0].is_service_submit,
          is_solve: val[0].is_solve,
          locking_at: val[0].locking_at,
          locking_people: val[0].locking_people,
          logistic_name: val[0].logistic_name,
          logistics_id: val[0].logistics_id,
          order_amount: val[0].order_amount,
          order_no: val[0].order_no,
          order_phone: val[0].order_phone,
          order_remark: val[0].order_remark,
          order_staff: val[0].order_staff,
          order_status: val[0].order_status,
          parts_duty: val[0].parts_duty,
          patch_status: val[0].patch_status,
          predict_at: val[0].predict_at,
          previous_order_staff: val[0].previous_order_staff,
          problem_description: val[0].problem_description,
          receiver_address: val[0].receiver_address,
          receiver_city: val[0].receiver_city,
          receiver_district: val[0].receiver_district,
          receiver_state: val[0].receiver_state,
          refund_status: val[0].refund_status,
          return_status: val[0].return_status,
          rfe_information: val[0].rfe_information,
          rfe_order_at: val[0].rfe_order_at,
          service_submit_date: val[0].service_submit_date,
          service_submit_person: val[0].service_submit_person,
          shop_group: val[0].shop_group,
          shop_name: val[0].shop_name,
          status: val[0].status,
          suppliers_id: val[0].suppliers_id,
          tag_at: val[0].tag_at,
          tag_name: val[0].tag_name,
          tag_people: val[0].tag_people,
          taobao_oid: val[0].taobao_oid,
          updated_at: val[0].updated_at,
          vip_name: val[0].vip_name
        };
      } else {
        this.updateId = "";
      }
      this.selection = val;
      var del = [];
      val.forEach(function (selectedItem) {
        del.push(selectedItem.id);
      });
      // this.delArr = del.join(",");
    },

    // 修改
    edit: function edit() {
      var _this2 = this;

      if (this.selection.length == 0) {
        this.$message({
          message: "没有选择要修改的数据",
          type: "warning"
        });
        return;
      } else if (this.selection.length >= 2) {
        this.$message({
          message: "只能修改单条数据",
          type: "warning"
        });
        return;
      } else {
        this.updateMask = true;
        this.updateIndex = "";
        this.$fetch(this.urls.aftersale + "/" + this.updateId).then(function (res) {}, function (err) {
          if (err.response) {
            var arr = err.response.data.errors;
            var arr1 = [];
            for (var i in arr) {
              arr1.push(arr[i]);
            }
            var str = arr1.join(",");
            _this2.$message.error(str);
          }
        });
      }
    },
    confirmUpdate: function confirmUpdate() {
      var _this3 = this;

      this.$patch(this.urls.aftersale + "/" + this.updateId, this.updateForm).then(function () {
        _this3.updateMask = false;
        _this3.$message({
          message: "修改成功",
          type: "success"
        });
        _this3.refresh();
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
    },
    cancelUpdate: function cancelUpdate() {
      this.updateMask = false;
      this.$message({
        message: "已取消修改",
        type: "info"
      });
    },

    // 新增售后产品
    addOrderRowCName: function addOrderRowCName(_ref3) {
      var row = _ref3.row,
          rowIndex = _ref3.rowIndex;

      row.index = rowIndex;
    },
    addAfterSProRowCName: function addAfterSProRowCName(_ref4) {
      var row = _ref4.row,
          rowIndex = _ref4.rowIndex;

      row.index = rowIndex;
    },
    addAfterSProRowClick: function addAfterSProRowClick(row) {
      this.addAfterSProDtlVal.push(row);
    },
    addOrderRowClick: function addOrderRowClick(row) {
      var _this4 = this;

      this.addOrderDtlVal = row;
      console.log(this.addOrderDtlVal);
      this.$fetch(this.urls.products, {
        include: "productComponents,shop,supplier,combinations.productComponents"
      }).then(function (res) {
        _this4.proDtlVal = res.data;
        _this4.proDtlVal.map(function (item) {
          // let product_component = [];
          // console.log(item.productComponents["data"][0]["spec"]);
          // console.log(item.productComponents["data"][0]["spec"]);
          // item.productComponents.map(list => {
          //   let comp = {
          //     spec: list.spec,
          //     color: list.color,
          //     materials: list.materials
          //   };
          // });
          // if (item.productComponents["data"].length > 0) {
          //   console.log(666);
          //   let comp = {
          //     spec: item.productComponents["data"][0]["spec"],
          //     color: item.productComponents["data"][0]["color"],
          //     materials: item.productComponents["data"][0]["materials"]
          //   };
          // } else {
          //   let comp = {
          //     spec: '',
          //     color: '',
          //     materials: ''
          //   };
          // };
          //   product_component.push(comp);
        });
      }, function (err) {
        if (err.response) {
          var arr = err.response.data.errors;
          var arr1 = [];
          for (var i in arr) {
            arr1.push(arr[i]);
          }
          var str = arr1.join(",");
          _this4.$message.error({
            message: str
          });
        }
      });
    },
    addAfterSProClick: function addAfterSProClick() {
      this.addAfterSProMask = true;
      this.proQueryClick();
    },
    proQueryClick: function proQueryClick() {
      var _this5 = this;

      this.orderDtlVal = [];
      this.proDtlVal = [];
      this.addOrderDtlVal = [];
      this.addAfterSProDtlVal = [];
      this.$fetch(this.urls.customerservicedepts).then(function (res) {
        _this5.orderDtlVal = res.data;
      }, function (err) {
        if (err.response) {
          var arr = err.response.data.errors;
          var arr1 = [];
          for (var i in arr) {
            arr1.push(arr[i]);
          }
          _this5.$message.error(arr1.join(","));
        }
      });
    },
    proQueryRefresh: function proQueryRefresh() {
      this.proQueryClick();
      this.$message({
        message: "刷新成功",
        type: "success"
      });
    },
    cancelAddAfterSPro: function cancelAddAfterSPro() {
      this.addAfterSProMask = false;
      this.$message({
        message: "取消新增售后产品",
        type: "info"
      });
    },
    confirmAddAfterSPro: function confirmAddAfterSPro() {
      this.addAfterSProMask = false;
      this.defProDtlVal = this.addAfterSProDtlVal;
      console.log(this.addOrderDtlVal);
      this.addAfterSaleForm.order_no = this.addOrderDtlVal.system_order_no;
      this.addAfterSaleForm.shop_name = this.addOrderDtlVal.shops_id;
      this.addAfterSaleForm.after_sale_type = "";
      this.addAfterSaleForm.order_amount = this.addOrderDtlVal.deposit;
      this.addAfterSaleForm.after_sale_group = "";
      this.addAfterSaleForm.after_sale_status = "";
      this.addAfterSaleForm.order_phone = this.addOrderDtlVal.receiver_mobile;
      this.addAfterSaleForm.img = "";
      this.addAfterSaleForm.vip_name = this.addOrderDtlVal.member_nick;
      this.addAfterSaleForm.suppliers_id = "";
      this.addAfterSaleForm.logistic_name = "";
      this.addAfterSaleForm.logistics_id = this.addOrderDtlVal.logistics_id;
      this.addAfterSaleForm.deliver_date = "";
      this.addAfterSaleForm.receiver_state = this.addOrderDtlVal.receiver_state;
      this.addAfterSaleForm.receiver_city = this.addOrderDtlVal.receiver_city;
      this.addAfterSaleForm.receiver_district = this.addOrderDtlVal.receiver_district;
      this.addAfterSaleForm.receiver_address = this.addOrderDtlVal.receiver_address;
      this.addAfterSaleForm.after_responsible_party = "";
      this.addAfterSaleForm.after_sale_cost = "";
      this.addAfterSaleForm.problem_description = "";
      this.addAfterSaleForm.customer_service_requirements = "";
      this.addAfterSaleForm.rfe_information = "";
    },
    refresh: function refresh() {
      this.submitLoading = true;
      this.unsubmitLoading = true;
      this.checkboxInit = false;
      this.fetchAfterSaleData();
    }
  },
  mounted: function mounted() {
    this.fetchAfterSaleData();
    this.$store.state.opt.opts = this.newOpt;
    this.$store.commit("change", this.newOpt);
    var that = this;
    $(window).resize(function () {
      return function () {
        that.$store.state.opt.opts = that.newOpt;
        that.$store.commit("change", that.newOpt);
      }();
    });
  }
});

/***/ }),

/***/ 795:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("div", { staticClass: "search_box" }, [
        _c("div", { staticClass: "searchBox" }, [
          _c(
            "span",
            [
              _c("label", [_vm._v("系统单号")]),
              _vm._v(" "),
              _c("el-input", {
                attrs: { clearable: "" },
                nativeOn: {
                  keyup: function($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                    ) {
                      return null
                    }
                    return _vm.handleQuery($event)
                  }
                },
                model: {
                  value: _vm.searchBox.after_sale_order_no,
                  callback: function($$v) {
                    _vm.$set(_vm.searchBox, "after_sale_order_no", $$v)
                  },
                  expression: "searchBox.after_sale_order_no"
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
                attrs: { clearable: "" },
                nativeOn: {
                  keyup: function($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                    ) {
                      return null
                    }
                    return _vm.handleQuery($event)
                  }
                },
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
              _c("label", [_vm._v("会员昵称")]),
              _vm._v(" "),
              _c("el-input", {
                attrs: { clearable: "" },
                nativeOn: {
                  keyup: function($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                    ) {
                      return null
                    }
                    return _vm.handleQuery($event)
                  }
                },
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
          _vm.filterBox
            ? _c(
                "span",
                [
                  _c("label", [_vm._v("业务员")]),
                  _vm._v(" "),
                  _c(
                    "el-select",
                    {
                      attrs: { clearable: "", placeholder: "请选择" },
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
                          return _vm.handleQuery($event)
                        }
                      },
                      model: {
                        value: _vm.searchBox.order_staff,
                        callback: function($$v) {
                          _vm.$set(_vm.searchBox, "order_staff", $$v)
                        },
                        expression: "searchBox.order_staff"
                      }
                    },
                    _vm._l(_vm.searchBox.orderStaff, function(item) {
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
                  _c(
                    "el-button",
                    {
                      attrs: { type: "primary" },
                      on: { click: _vm.handleQuery }
                    },
                    [_vm._v("筛选")]
                  ),
                  _vm._v(" "),
                  _c(
                    "el-button",
                    {
                      staticStyle: { "margin-right": "5px" },
                      on: { click: _vm.resets }
                    },
                    [_vm._v("重置")]
                  ),
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
        ]),
        _vm._v(" "),
        _vm.filterBox
          ? _c("div", { staticClass: "searchBox" }, [
              _c(
                "span",
                [
                  _c("label", [_vm._v("售后状态")]),
                  _vm._v(" "),
                  _c(
                    "el-select",
                    {
                      attrs: { clearable: "", placeholder: "请选择" },
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
                          return _vm.handleQuery($event)
                        }
                      },
                      model: {
                        value: _vm.searchBox.after_sale_status,
                        callback: function($$v) {
                          _vm.$set(_vm.searchBox, "after_sale_status", $$v)
                        },
                        expression: "searchBox.after_sale_status"
                      }
                    },
                    _vm._l(_vm.searchBox.afterSaleStatus, function(item) {
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
                  _c("label", [_vm._v("售后类型")]),
                  _vm._v(" "),
                  _c("el-input", {
                    attrs: { clearable: "" },
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
                        return _vm.handleQuery($event)
                      }
                    },
                    model: {
                      value: _vm.searchBox.after_sale_type,
                      callback: function($$v) {
                        _vm.$set(_vm.searchBox, "after_sale_type", $$v)
                      },
                      expression: "searchBox.after_sale_type"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "span",
                [
                  _c("label", [_vm._v("联系方式")]),
                  _vm._v(" "),
                  _c("el-input", {
                    attrs: { clearable: "" },
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
                        return _vm.handleQuery($event)
                      }
                    },
                    model: {
                      value: _vm.searchBox.order_phone,
                      callback: function($$v) {
                        _vm.$set(_vm.searchBox, "order_phone", $$v)
                      },
                      expression: "searchBox.order_phone"
                    }
                  })
                ],
                1
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.filterBox
          ? _c("div", { staticClass: "searchBox" }, [
              _c(
                "span",
                [
                  _c("label", [_vm._v("创建时间")]),
                  _vm._v(" "),
                  _c("el-date-picker", {
                    attrs: {
                      type: "daterange",
                      "range-separator": "至",
                      "start-placeholder": "开始日期",
                      "end-placeholder": "结束日期"
                    },
                    model: {
                      value: _vm.searchBox.created_at,
                      callback: function($$v) {
                        _vm.$set(_vm.searchBox, "created_at", $$v)
                      },
                      expression: "searchBox.created_at"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "span",
                [
                  _c("label", [_vm._v("售后分类")]),
                  _vm._v(" "),
                  _c(
                    "el-select",
                    {
                      attrs: { clearable: "", placeholder: "请选择" },
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
                          return _vm.handleQuery($event)
                        }
                      },
                      model: {
                        value: _vm.searchBox.after_sale_sort,
                        callback: function($$v) {
                          _vm.$set(_vm.searchBox, "after_sale_sort", $$v)
                        },
                        expression: "searchBox.after_sale_sort"
                      }
                    },
                    _vm._l(_vm.searchBox.afterSaleSort, function(item) {
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
                  _c("label", [_vm._v("补件责任方")]),
                  _vm._v(" "),
                  _c(
                    "el-select",
                    {
                      attrs: { clearable: "", placeholder: "请选择" },
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
                          return _vm.handleQuery($event)
                        }
                      },
                      model: {
                        value: _vm.searchBox.parts_duty,
                        callback: function($$v) {
                          _vm.$set(_vm.searchBox, "parts_duty", $$v)
                        },
                        expression: "searchBox.parts_duty"
                      }
                    },
                    _vm._l(_vm.searchBox.partsDuty, function(item) {
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
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.filterBox
          ? _c(
              "div",
              { staticClass: "opt", staticStyle: { "text-align": "right" } },
              [
                _c(
                  "el-button",
                  {
                    attrs: { type: "primary" },
                    on: { click: _vm.handleQuery }
                  },
                  [_vm._v("筛选")]
                ),
                _vm._v(" "),
                _c(
                  "el-button",
                  {
                    staticStyle: { "margin-right": "5px" },
                    on: { click: _vm.resets }
                  },
                  [_vm._v("重置")]
                ),
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
      ]),
      _vm._v(" "),
      _c(
        "el-tabs",
        {
          on: { "tab-click": _vm.clickTopTabs },
          model: {
            value: _vm.topActiveName,
            callback: function($$v) {
              _vm.topActiveName = $$v
            },
            expression: "topActiveName"
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
                      value: _vm.unsubmitLoading,
                      expression: "unsubmitLoading"
                    }
                  ],
                  ref: "unsubmitTable",
                  attrs: {
                    data: _vm.unsubmitData,
                    fit: "",
                    height: "300",
                    "row-class-name": _vm.afterSaleRCName,
                    "row-style": _vm.rowStyle
                  },
                  on: {
                    "selection-change": _vm.handleSelectionChange,
                    "row-click": _vm.afterSSubmissionRowClick
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
                  _vm._l(_vm.tableHead, function(item) {
                    return _c("el-table-column", {
                      key: item.prop,
                      attrs: {
                        align: "center",
                        label: item.label,
                        width: item.width
                      },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "default",
                            fn: function(scope) {
                              return [
                                item.type == "select"
                                  ? _c("span", [
                                      scope.row[item.prop] == ""
                                        ? _c("span")
                                        : typeof scope.row[item.prop] ==
                                            "object" && item.inProp
                                        ? _c("span", [
                                            _vm._v(
                                              _vm._s(
                                                scope.row[item.prop][
                                                  item.inProp
                                                ]
                                              )
                                            )
                                          ])
                                        : _vm._e()
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
                                attrs: { size: "mini", type: "primary" },
                                on: {
                                  click: function($event) {
                                    return _vm.addSchedule(scope.row)
                                  }
                                }
                              },
                              [_vm._v("新增进度")]
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
            { attrs: { label: "已提交", name: "1" } },
            [
              _c(
                "el-table",
                {
                  directives: [
                    {
                      name: "loading",
                      rawName: "v-loading",
                      value: _vm.submitLoading,
                      expression: "submitLoading"
                    }
                  ],
                  ref: "submitTable",
                  attrs: {
                    data: _vm.submitData,
                    fit: "",
                    height: "300",
                    "row-class-name": _vm.afterSaleRCName,
                    "row-style": _vm.rowStyle
                  },
                  on: {
                    "selection-change": _vm.handleSelectionChange,
                    "row-click": _vm.afterSSubmissionRowClick
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
                  _vm._l(_vm.tableHead, function(item) {
                    return _c("el-table-column", {
                      key: item.prop,
                      attrs: {
                        align: "center",
                        label: item.label,
                        width: item.width
                      },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "default",
                            fn: function(scope) {
                              return [
                                item.type == "select"
                                  ? _c("span", [
                                      scope.row[item.prop] == ""
                                        ? _c("span")
                                        : typeof scope.row[item.prop] ==
                                            "object" && item.inProp
                                        ? _c("span", [
                                            _vm._v(
                                              _vm._s(
                                                scope.row[item.prop][
                                                  item.inProp
                                                ]
                                              )
                                            )
                                          ])
                                        : _vm._e()
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
                                attrs: { size: "mini", type: "primary" },
                                on: {
                                  click: function($event) {
                                    return _vm.addSchedule(scope.row)
                                  }
                                }
                              },
                              [_vm._v("新增进度")]
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
      _c("Pagination", { attrs: { "page-url": this.urls.purchases } }),
      _vm._v(" "),
      _c(
        "el-tabs",
        {
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
            { attrs: { label: "售后进度", name: "0" } },
            [
              _c(
                "el-table",
                { attrs: { data: _vm.scheduleData } },
                _vm._l(_vm.btmTableHead[this.bottomActiveName], function(item) {
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
                                    item.type == "select"
                                      ? _c(
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
                                                          _vm._s(list.name)
                                                        )
                                                      ])
                                                    : _vm._e()
                                                ]
                                              )
                                            }
                                          ),
                                          0
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
                                      : _c("span", [
                                          _vm._v(_vm._s(scope.row[item.prop]))
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
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-tab-pane",
            { attrs: { label: "售后图片", name: "1" } },
            [
              _c(
                "el-table",
                { attrs: { data: _vm.scheduleData } },
                _vm._l(_vm.btmTableHead[this.bottomActiveName], function(item) {
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
                              item.type == "select"
                                ? _c("span", [
                                    scope.row[item.prop] == ""
                                      ? _c("span")
                                      : typeof scope.row[item.prop] ==
                                          "object" && item.inProp
                                      ? _c("span", [
                                          _vm._v(
                                            _vm._s(
                                              scope.row[item.prop][item.inProp]
                                            )
                                          )
                                        ])
                                      : _vm._e()
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
                                            _vm.$set(scope.row, item.prop, $$v)
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
            { attrs: { label: "退款明细", name: "2" } },
            [
              _c(
                "el-table",
                { attrs: { data: _vm.scheduleData } },
                _vm._l(_vm.btmTableHead[this.bottomActiveName], function(item) {
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
                              item.type == "select"
                                ? _c("span", [
                                    scope.row[item.prop] == ""
                                      ? _c("span")
                                      : typeof scope.row[item.prop] ==
                                          "object" && item.inProp
                                      ? _c("span", [
                                          _vm._v(
                                            _vm._s(
                                              scope.row[item.prop][item.inProp]
                                            )
                                          )
                                        ])
                                      : _vm._e()
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
                                            _vm.$set(scope.row, item.prop, $$v)
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
            { attrs: { label: "退货明细", name: "3" } },
            [
              _c(
                "el-table",
                { attrs: { data: _vm.scheduleData } },
                _vm._l(_vm.btmTableHead[this.bottomActiveName], function(item) {
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
                              item.type == "select"
                                ? _c("span", [
                                    scope.row[item.prop] == ""
                                      ? _c("span")
                                      : typeof scope.row[item.prop] ==
                                          "object" && item.inProp
                                      ? _c("span", [
                                          _vm._v(
                                            _vm._s(
                                              scope.row[item.prop][item.inProp]
                                            )
                                          )
                                        ])
                                      : _vm._e()
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
                                            _vm.$set(scope.row, item.prop, $$v)
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
            { attrs: { label: "补件明细", name: "4" } },
            [
              _c(
                "el-table",
                { attrs: { data: _vm.scheduleData } },
                _vm._l(_vm.btmTableHead[this.bottomActiveName], function(item) {
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
                              item.type == "select"
                                ? _c("span", [
                                    scope.row[item.prop] == ""
                                      ? _c("span")
                                      : typeof scope.row[item.prop] ==
                                          "object" && item.inProp
                                      ? _c("span", [
                                          _vm._v(
                                            _vm._s(
                                              scope.row[item.prop][item.inProp]
                                            )
                                          )
                                        ])
                                      : _vm._e()
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
                                            _vm.$set(scope.row, item.prop, $$v)
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
            { attrs: { label: "补发问题产品", name: "5" } },
            [
              _c(
                "el-table",
                { attrs: { data: _vm.scheduleData } },
                _vm._l(_vm.btmTableHead[this.bottomActiveName], function(item) {
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
                              item.type == "select"
                                ? _c("span", [
                                    scope.row[item.prop] == ""
                                      ? _c("span")
                                      : typeof scope.row[item.prop] ==
                                          "object" && item.inProp
                                      ? _c("span", [
                                          _vm._v(
                                            _vm._s(
                                              scope.row[item.prop][item.inProp]
                                            )
                                          )
                                        ])
                                      : _vm._e()
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
                                            _vm.$set(scope.row, item.prop, $$v)
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
            { attrs: { label: "退款责任方", name: "6" } },
            [
              _c(
                "el-table",
                { attrs: { data: _vm.scheduleData } },
                _vm._l(_vm.btmTableHead[this.bottomActiveName], function(item) {
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
                              item.type == "select"
                                ? _c("span", [
                                    scope.row[item.prop] == ""
                                      ? _c("span")
                                      : typeof scope.row[item.prop] ==
                                          "object" && item.inProp
                                      ? _c("span", [
                                          _vm._v(
                                            _vm._s(
                                              scope.row[item.prop][item.inProp]
                                            )
                                          )
                                        ])
                                      : _vm._e()
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
                                            _vm.$set(scope.row, item.prop, $$v)
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
            { attrs: { label: "退货责任方", name: "7" } },
            [
              _c(
                "el-table",
                { attrs: { data: _vm.scheduleData } },
                _vm._l(_vm.btmTableHead[this.bottomActiveName], function(item) {
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
                              item.type == "select"
                                ? _c("span", [
                                    scope.row[item.prop] == ""
                                      ? _c("span")
                                      : typeof scope.row[item.prop] ==
                                          "object" && item.inProp
                                      ? _c("span", [
                                          _vm._v(
                                            _vm._s(
                                              scope.row[item.prop][item.inProp]
                                            )
                                          )
                                        ])
                                      : _vm._e()
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
                                            _vm.$set(scope.row, item.prop, $$v)
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
            { attrs: { label: "补件责任方", name: "8" } },
            [
              _c(
                "el-table",
                { attrs: { data: _vm.scheduleData } },
                _vm._l(_vm.btmTableHead[this.bottomActiveName], function(item) {
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
                              item.type == "select"
                                ? _c("span", [
                                    scope.row[item.prop] == ""
                                      ? _c("span")
                                      : typeof scope.row[item.prop] ==
                                          "object" && item.inProp
                                      ? _c("span", [
                                          _vm._v(
                                            _vm._s(
                                              scope.row[item.prop][item.inProp]
                                            )
                                          )
                                        ])
                                      : _vm._e()
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
                                            _vm.$set(scope.row, item.prop, $$v)
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
            { attrs: { label: "驳回原因", name: "9" } },
            [
              _c(
                "el-table",
                { attrs: { data: _vm.scheduleData } },
                _vm._l(_vm.btmTableHead[this.bottomActiveName], function(item) {
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
                              item.type == "select"
                                ? _c("span", [
                                    scope.row[item.prop] == ""
                                      ? _c("span")
                                      : typeof scope.row[item.prop] ==
                                          "object" && item.inProp
                                      ? _c("span", [
                                          _vm._v(
                                            _vm._s(
                                              scope.row[item.prop][item.inProp]
                                            )
                                          )
                                        ])
                                      : _vm._e()
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
                                            _vm.$set(scope.row, item.prop, $$v)
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
            { attrs: { label: "售后问题产品", name: "10" } },
            [
              _c(
                "el-table",
                { attrs: { data: _vm.scheduleData } },
                _vm._l(_vm.btmTableHead[this.bottomActiveName], function(item) {
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
                              item.type == "select"
                                ? _c("span", [
                                    scope.row[item.prop] == ""
                                      ? _c("span")
                                      : typeof scope.row[item.prop] ==
                                          "object" && item.inProp
                                      ? _c("span", [
                                          _vm._v(
                                            _vm._s(
                                              scope.row[item.prop][item.inProp]
                                            )
                                          )
                                        ])
                                      : _vm._e()
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
                                            _vm.$set(scope.row, item.prop, $$v)
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
            { attrs: { label: "内部便签", name: "11" } },
            [
              _c(
                "el-table",
                { attrs: { data: _vm.scheduleData } },
                _vm._l(_vm.btmTableHead[this.bottomActiveName], function(item) {
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
                              item.type == "select"
                                ? _c("span", [
                                    scope.row[item.prop] == ""
                                      ? _c("span")
                                      : typeof scope.row[item.prop] ==
                                          "object" && item.inProp
                                      ? _c("span", [
                                          _vm._v(
                                            _vm._s(
                                              scope.row[item.prop][item.inProp]
                                            )
                                          )
                                        ])
                                      : _vm._e()
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
                                            _vm.$set(scope.row, item.prop, $$v)
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
            { attrs: { label: "操作记录", name: "12" } },
            [
              _c(
                "el-table",
                { attrs: { data: _vm.scheduleData } },
                _vm._l(_vm.btmTableHead[this.bottomActiveName], function(item) {
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
                              item.type == "select"
                                ? _c("span", [
                                    scope.row[item.prop] == ""
                                      ? _c("span")
                                      : typeof scope.row[item.prop] ==
                                          "object" && item.inProp
                                      ? _c("span", [
                                          _vm._v(
                                            _vm._s(
                                              scope.row[item.prop][item.inProp]
                                            )
                                          )
                                        ])
                                      : _vm._e()
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
                                            _vm.$set(scope.row, item.prop, $$v)
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
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-dialog",
        {
          class: { "more-forms": _vm.moreForms },
          attrs: { titie: "修改售后单", visible: _vm.updateMask },
          on: {
            "update:visible": function($event) {
              _vm.updateMask = $event
            }
          }
        },
        [
          _c("el-button", { attrs: { type: "text" } }, [_vm._v("编辑")]),
          _vm._v(" "),
          _c(
            "el-form",
            {
              ref: "updateForm",
              staticClass: "demo-ruleForm",
              attrs: {
                model: _vm.updateForm,
                rules: _vm.addAfterSaleRules,
                "label-width": "100px"
              }
            },
            _vm._l(_vm.addAfterSaleHead, function(item, index) {
              return _c(
                "el-form-item",
                { key: index, attrs: { label: item.label, prop: item.prop } },
                [
                  item.type == "text"
                    ? _c(
                        "span",
                        [
                          _c("el-input", {
                            attrs: {
                              placeholder: item.holder,
                              disabled: item.addChgAble
                            },
                            model: {
                              value: _vm.updateForm[item.prop],
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.updateForm,
                                  item.prop,
                                  typeof $$v === "string" ? $$v.trim() : $$v
                                )
                              },
                              expression: "updateForm[item.prop]"
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
                                placeholder: item.holder,
                                disabled: item.addChgAble
                              },
                              model: {
                                value: _vm.updateForm[item.prop],
                                callback: function($$v) {
                                  _vm.$set(_vm.updateForm, item.prop, $$v)
                                },
                                expression: "updateForm[item.prop]"
                              }
                            },
                            _vm._l(_vm.resData[item.stateVal], function(list) {
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
                        { attrs: { disabled: item.addChgAble } },
                        [
                          _c("el-input", {
                            attrs: {
                              type: "textarea",
                              placehoder: item.holder
                            },
                            model: {
                              value: _vm.updateForm[item.prop],
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.updateForm,
                                  item.prop,
                                  typeof $$v === "string" ? $$v.trim() : $$v
                                )
                              },
                              expression: "updateForm[item.prop]"
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
                              placehoder: item.holder,
                              disabled: item.addChgAble
                            },
                            model: {
                              value: _vm.updateForm[item.prop],
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.updateForm,
                                  item.prop,
                                  typeof $$v === "string" ? $$v.trim() : $$v
                                )
                              },
                              expression: "updateForm[item.prop]"
                            }
                          })
                        ],
                        1
                      )
                    : item.type == "img"
                    ? _c("span", { attrs: { disabled: item.addChgAble } }, [
                        _vm.noUpload
                          ? _c(
                              "span",
                              [
                                _c(
                                  "el-upload",
                                  {
                                    staticClass: "upload-demo",
                                    attrs: {
                                      action: "",
                                      "before-upload": _vm.beforeUpload
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
                                    src: _vm.updateForm[item.prop],
                                    disabled: item.addChgAble
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "el-upload",
                                  {
                                    staticClass: "chgDiv",
                                    attrs: {
                                      action: "",
                                      "before-upload": _vm.beforeUpload
                                    }
                                  },
                                  [
                                    _c("el-button", {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: _vm.showChgBtn,
                                          expression: "showChgBtn"
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
                    : _vm._e()
                ]
              )
            }),
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "clearfix" },
            [
              _c("el-button", { attrs: { type: "text" } }, [
                _vm._v("售后问题产品")
              ]),
              _vm._v(" "),
              _c(
                "el-table",
                {
                  attrs: {
                    data: _vm.defProDtlVal,
                    fit: "",
                    height: "180",
                    "row-class-name": _vm.defRowCName
                  },
                  on: { "row-click": _vm.defRowClick }
                },
                _vm._l(_vm.defProHead, function(item) {
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
                  _c(
                    "el-button",
                    {
                      attrs: { type: "primary" },
                      on: { click: _vm.addAfterSProClick }
                    },
                    [_vm._v("新增售后产品")]
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
                      on: {
                        click: function($event) {
                          return _vm.confirmUpdate(_vm.updateIndex)
                        }
                      }
                    },
                    [_vm._v("确定")]
                  ),
                  _vm._v(" "),
                  _c(
                    "el-button",
                    {
                      attrs: { type: "warning" },
                      on: { click: _vm.cancelUpdate }
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
          class: { "more-forms": _vm.moreForms },
          attrs: { title: "选择订单", visible: _vm.addAfterSProMask },
          on: {
            "update:visible": function($event) {
              _vm.addAfterSProMask = $event
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
                data: _vm.orderDtlVal,
                fit: "",
                height: "180",
                "row-class-name": _vm.addOrderRowCName
              },
              on: { "row-click": _vm.addOrderRowClick }
            },
            _vm._l(_vm.addOrderProHead, function(item) {
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
          _c("el-button", { attrs: { type: "text" } }, [_vm._v("产品列表")]),
          _vm._v(" "),
          _c(
            "el-table",
            {
              attrs: {
                data: _vm.proDtlVal,
                fit: "",
                height: "180",
                "row-class-name": _vm.addAfterSProRowCName
              },
              on: { "row-click": _vm.addAfterSProRowClick }
            },
            _vm._l(_vm.addAfterSProHead, function(item) {
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
                      on: { click: _vm.proQueryRefresh }
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
                      on: { click: _vm.confirmAddAfterSPro }
                    },
                    [_vm._v("确定")]
                  ),
                  _vm._v(" "),
                  _c(
                    "el-button",
                    {
                      attrs: { type: "warning" },
                      on: { click: _vm.cancelAddAfterSPro }
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
    require("vue-hot-reload-api")      .rerender("data-v-68a70dc2", module.exports)
  }
}

/***/ })

});