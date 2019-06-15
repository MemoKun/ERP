webpackJsonp([70],{

/***/ 1008:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(12)
/* script */
var __vue_script__ = __webpack_require__(1198)
/* template */
var __vue_template__ = __webpack_require__(1199)
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
Component.options.__file = "resources/assets/js/views/afterSaleMag/customerApplication.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cac7cb74", Component.options)
  } else {
    hotAPI.reload("data-v-cac7cb74", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        ent: this.addNew,
        nClick: false
      }, {
        cnt: "修改",
        icon: "bf-change",
        ent: this.edit,
        nClick: false
      }, {
        cnt: "删除",
        icon: "bf-del",
        ent: this.delMore,
        nClick: false
      }, {
        cnt: "审核",
        icon: "bf-audit",
        ent: this.handleAudit,
        nClick: false
      }, {
        cnt: "退审",
        icon: "bf-auditfaild",
        ent: this.unAudit,
        nClick: true
      }, {
        cnt: "导出",
        icon: "bf-out",
        ent: this.test
      }, {
        cnt: "刷新",
        icon: "bf-refresh",
        ent: this.refresh
      }],
      Data: [],
      operationData: [],
      filterBox: false,
      searchBox: {
        after_sale_order_no: "",
        order_no: "",
        vip_name: "",
        user_id: "",
        after_sale_status: "",
        after_sale_type: "",
        order_phone: "",
        created_at: ["2018-12-31T16:00:00.000Z", "2099-12-31T16:00:00.000Z"],
        after_sale_group: ""
      },
      topActiveName: "0",
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
        width: "200",
        prop: "user",
        inProp: "username",
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
        label: "补件下单时间",
        width: "180",
        prop: "rfe_order_at",
        type: "text"
      }, {
        label: "预计交期",
        width: "180",
        prop: "predict_at",
        type: "text"
      }, {
        label: "自定义单号",
        width: "180",
        prop: "custom_oid",
        type: "text"
      }, {
        label: "标记名称",
        width: "120",
        prop: "tag_name",
        type: "text"
      }, {
        label: "完结",
        width: "90",
        prop: "is_finish",
        type: "checkbox"
      }, {
        label: "标记时间",
        width: "180",
        prop: "tag_at",
        type: "text"
      }, {
        label: "标记人",
        width: "150",
        prop: "tag_people",
        type: "text"
      }, {
        label: "补件信息",
        width: "180",
        prop: "rfe_information",
        type: "text"
      }, {
        label: "淘宝订单号",
        width: "180",
        prop: "taobao_oid",
        type: "text"
      }],
      getsInfo: [],
      newData: [],
      submitData: [],
      addSubData: [],
      newLoading: true,
      submitLoading: true,
      checkboxInit: false,
      // 底部tabs
      addId: "",
      bottomActiveName: "0",
      showBtmDel: false,
      scheduleData: [],
      defProData: [],
      scheduleRuleFormVal: {
        schedule_description: "",
        subscribed_at: ""
      },
      updateScheduleRuleFormVal: {
        after_sale_id: "",
        schedule_description: "",
        subscribed_at: ""
      },
      scheduleRules: {
        schedule_description: [{ required: true, message: "进度描述必填", trigger: "blur" }]
      },
      scheduleRuleFormHead: [{
        label: "进度描述",
        holder: "请输入进度描述",
        prop: "schedule_description",
        type: "textarea"
      }, {
        label: "预约时间",
        prop: "subscribed_at",
        type: "DatePicker"
      }],
      btmTableHead: [[{
        label: "进度描述",
        width: "180",
        prop: "schedule_description",
        type: "text"
      }, {
        label: "创建人",
        width: "180",
        prop: "user",
        inProp: "username",
        type: "text"
      }, {
        label: "业务日期",
        width: "180",
        prop: "created_at",
        type: "text"
      }, {
        label: "预约时间",
        width: "180",
        prop: "subscribed_at",
        type: "text"
      }], [{
        label: "商品编码",
        prop: "commodity_code",
        width: "180",
        type: "text"
      }, {
        label: "规格编码",
        prop: "spec_code",
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
        prop: "buy_number",
        width: "120",
        type: "text"
      }, {
        label: "供应商",
        prop: "supplier_id",
        width: "150",
        type: "text"
      }], [{
        label: "售后图片",
        width: "120",
        prop: "img_url",
        type: "img"
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
        prop: "user_name",
        type: "text"
      }, {
        label: "操作",
        prop: "operation",
        type: "text"
      }, {
        label: "操作描述",
        prop: "description",
        type: "text"
      }, {
        label: "操作时间",
        prop: "created_at",
        type: "text"
      }]],
      // 新增售后进度
      addScheduleMask: false,
      updateScheduleMask: false,
      scheduleFrom: {},
      /* 新增售后 */
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
        prop: "user_id",
        holder: "创建后系统自动生成",
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
        rfe_information: "",
        after_sale_def_pro: [{
          commodity_code: "",
          spec_code: "",
          short_name: "",
          spec: "",
          color: "",
          materials: "",
          buy_number: 0,
          supplier_id: "",
          img_url: ""
        }]
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
        prop: "spec_code",
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
        prop: "buy_number",
        width: "120",
        type: "text"
      }, {
        label: "供应商",
        prop: "supplier_id",
        width: "150",
        type: "text"
      }],
      defectiveProduct: [],
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
        prop: "spec_code",
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
        prop: "buy_number",
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
      }],
      // 删除
      showDel: false,
      delId: "",
      delArr: [],
      selection: "",
      // 修改
      updateMask: false,
      updateId: "",
      updateIndex: "",
      updateSchIndex: "",
      updateForm: {},
      componentShowChg: true,
      updateCompUpload: "upload0",
      updateRwIndex: "0",
      curRowId: "",
      checkboxId: "",
      curRowData: {}
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
    /* 测试 */
    test: function test() {
      this.$message({
        message: "操作成功",
        type: "success"
      });
    },

    /* 查询 */
    handleQuery: function handleQuery() {
      this.newLoading = true;
      this.fetchAfterSaleData();
    },
    toggleShow: function toggleShow() {
      this.filterBox = !this.filterBox;
    },
    resets: function resets() {
      this.searchBox = {
        after_sale_order_no: "",
        order_no: "",
        vip_name: "",
        user_id: "",
        after_sale_status: "",
        after_sale_type: "",
        order_phone: "",
        created_at: "",
        after_sale_group: ""
      };
    },

    // 获取售后订单数据
    clickTopTabs: function clickTopTabs() {
      this.selection = "";
      this.fetchAfterSaleData();
    },
    fetchAfterSaleData: function fetchAfterSaleData() {
      var _this = this;

      // 获取数据
      var index = this.topActiveName - 0;
      switch (index) {
        case 0:
          this.newOpt[0].nClick = false;
          this.newOpt[1].nClick = false;
          this.newOpt[2].nClick = false;
          this.newOpt[3].nClick = false;
          this.newOpt[4].nClick = true;
          this.$fetch(this.urls.aftersale, {
            order_status: 10,
            after_sale_order_no: this.searchBox.after_sale_order_no,
            order_no: this.searchBox.order_no,
            vip_name: this.searchBox.vip_name,
            user_id: this.searchBox.user_id,
            after_sale_status: this.searchBox.after_sale_status,
            after_sale_type: this.searchBox.after_sale_type,
            order_phone: this.searchBox.order_phone,
            after_sale_group: this.searchBox.after_sale_group,
            include: "afterSaleSchedules.user,afterSaleDefPros,user,afterSaleRefunds,afterSaleReturns,afterSalePatchs"
          }).then(function (res) {
            _this.newLoading = false;
            _this.newData = res.data;
            _this.scheduleData = res.data[0] ? res.data[0]["afterSaleSchedules"].data : [];
            _this.defProData = res.data[0] ? res.data[0]["afterSaleDefPros"].data : [];
            _this.refundData = res.data[0] ? res.data[0]["afterSaleRefunds"].data : [];
            _this.returnData = res.data[0] ? res.data[0]["afterSaleReturns"].data : [];
            _this.patchData = res.data[0] ? res.data[0]["afterSalePatchs"].data : [];
            _this.checkboxInit = false;
            var pg = res.meta.pagination;
            _this.$store.dispatch("currentPage", pg.current_page);
            _this.$store.commit("PER_PAGE", pg.per_page);
            _this.$store.commit("PAGE_TOTAL", pg.total);
            /*请求子数据*/
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
            order_status: 20,
            after_sale_order_no: this.searchBox.after_sale_order_no,
            order_no: this.searchBox.order_no,
            vip_name: this.searchBox.vip_name,
            user_id: this.searchBox.user_id,
            after_sale_status: this.searchBox.after_sale_status,
            after_sale_type: this.searchBox.after_sale_type,
            order_phone: this.searchBox.order_phone,
            after_sale_group: this.searchBox.after_sale_group,
            include: "afterSaleSchedules.user,afterSaleDefPros,user,afterSaleRefunds,afterSaleReturns,afterSalePatchs"
          }).then(function (res) {
            _this.submitLoading = false;
            _this.submitData = res.data;
            _this.scheduleData = res.data[0] ? res.data[0]["afterSaleSchedules"].data : [];
            _this.defProData = res.data[0] ? res.data[0]["afterSaleDefPros"].data : [];
            _this.refundData = res.data[0] ? res.data[0]["afterSaleRefunds"].data : [];
            _this.returnData = res.data[0] ? res.data[0]["afterSaleReturns"].data : [];
            _this.patchData = res.data[0] ? res.data[0]["afterSalePatchs"].data : [];
            _this.checkboxInit = false;
            var pg = res.meta.pagination;
            _this.$store.dispatch("currentPage", pg.current_page);
            _this.$store.commit("PER_PAGE", pg.per_page);
            _this.$store.commit("PAGE_TOTAL", pg.total);
            /*请求子数据*/
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
    orderListRowClick: function orderListRowClick(row) {
      this.curRowId = row.id;
      this.curRowData = row;
      this.scheduleData = row["afterSaleSchedules"].data;
      this.defProData = row["afterSaleDefPros"].data;
      this.operationData = row["afterSaleOperationRecord"].data;
    },

    // 单条删除
    del: function del(row, e) {
      this.showDel = true;
      $(".el-popper").css({ left: e.x - 100 + "px", top: e.y - 125 + "px" });
      this.delId = row.id;
    },
    cancelD: function cancelD() {
      this.showDel = false;
      this.$message({
        message: "取消删除",
        type: "info"
      });
    },
    confirmD: function confirmD(id) {
      var _this2 = this;

      this.$del(this.urls.aftersale + "/" + id).then(function () {
        _this2.$message({
          message: "删除成功",
          type: "success"
        });
        _this2.showDel = false;
        _this2.refresh();
      }, function (err) {
        if (err.response) {
          _this2.showDel = false;
          var arr = err.response.data.errors;
          var arr1 = [];
          for (var i in arr) {
            arr1.push(arr[i]);
          }
          var str = arr1.join(",");
          _this2.$message.error({
            message: str
          });
        }
      });
    },
    handleSelectionChange: function handleSelectionChange(val) {
      if (val.length != 0) {
        this.updateId = val[0].id;
        this.updateForm = val[0];
      } else {
        this.updateId = "";
      }
      this.selection = val;
      var del = [];
      val.forEach(function (selectedItem) {
        del.push(selectedItem.id);
      });
      /*拿到当前id*/
      this.checkboxId = val.length > 0 ? val[val.length - 1].id : "";
      this.curRowData = val.length > 0 ? val[val.length - 1] : "";
      this.delArr = del.join(",");
    },

    // 底部tabs
    cancelBtmD: function cancelBtmD() {
      this.showBtmDel = false;
      this.$message({
        message: "取消删除",
        type: "info"
      });
    },
    confirmBtmD: function confirmBtmD(id) {
      var _this3 = this;

      var index = this.bottomActiveName - 0;
      switch (index) {
        case 0:
          this.$del(this.urls.aftersaleschedule + "/" + id).then(function () {
            _this3.$message({
              message: "删除成功",
              type: "success"
            });
            _this3.showBtmDel = false;
            _this3.refresh();
          }, function (err) {
            if (err.response) {
              _this3.showBtmDel = false;
              var arr = err.response.data.errors;
              var arr1 = [];
              for (var i in arr) {
                arr1.push(arr[i]);
              }
              var str = arr1.join(",");
              _this3.$message.error({
                message: str
              });
            }
          });
          break;
      }
    },
    delBtmTab: function delBtmTab(row, e) {
      this.showBtmDel = true;
      $(".el-popper").css({ left: e.x - 100 + "px", top: e.y - 125 + "px" });
      this.delId = row.id;
    },

    // 新增售后进度
    addSchedule: function addSchedule(row) {
      this.addScheduleMask = true;
      this.addId = row.id;
    },
    cancelAddSch: function cancelAddSch() {
      this.addScheduleMask = false;
      this.$message({
        message: "取消新增进度",
        type: "info"
      });
    },
    addScheduleFrom: function addScheduleFrom() {
      var _this4 = this;

      var id = this.addId;
      var data = this.scheduleRuleFormVal;
      var submitData = {
        after_sale_id: id,
        schedule_description: data.schedule_description,
        subscribed_at: data.subscribed_at
      };
      // console.log(submitData);
      this.$post(this.urls.aftersaleschedule, submitData).then(function () {
        _this4.$message({
          message: "新建售后进度成功",
          type: "success"
        });
        _this4.addScheduleMask = false;
        _this4.scheduleRuleFormVal = {
          schedule_description: "",
          subscribed_at: ""
        };
        _this4.refresh();
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

    // 修改售后进度
    updateSchedule: function updateSchedule(row) {
      var _this5 = this;

      this.updateScheduleMask = true;
      this.updateSchIndex = row.id;
      this.$fetch(this.urls.aftersaleschedule + "/" + this.updateSchIndex).then(function (res) {
        _this5.updateScheduleRuleFormVal = {
          after_sale_id: res.after_sale_id,
          schedule_description: res.schedule_description,
          subscribed_at: res.subscribed_at
        };
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
    updateScheduleFrom: function updateScheduleFrom(row) {
      var _this6 = this;

      this.$patch(this.urls.aftersaleschedule + "/" + this.updateSchIndex, this.updateScheduleRuleFormVal).then(function () {
        _this6.$message({
          message: "修改售后进度成功",
          type: "success"
        });
        _this6.updateScheduleMask = false;
        _this6.refresh();
      }, function (err) {
        if (err.response) {
          var arr = err.response.data.errors;
          var arr1 = [];
          for (var i in arr) {
            arr1.push(arr[i]);
          }
          var str = arr1.join(",");
          _this6.$message.error({
            message: str
          });
        }
      });
    },
    cancelUpdateSch: function cancelUpdateSch() {
      this.updateScheduleMask = false;
      this.$message({
        message: "取消新增进度",
        type: "info"
      });
    },

    // 新建售后申请单
    addNew: function addNew() {
      if (this.newOpt[0].nClick) {
        return;
      } else {
        this.addAfterSaleMask = true;
        this.resetAddAfterSale();
      }
    },
    resetAddAfterSale: function resetAddAfterSale() {
      Object.assign(this.addAfterSaleForm, this.$options.data().addAfterSaleForm);
      this.noUpload = true;
    },

    // 上传图片
    judgeFm: function judgeFm(file) {
      var isJPG = file.type === "image/jpeg";
      var isGIF = file.type === "image/gif";
      var isPNG = file.type === "image/png";

      if (!isJPG && !isGIF && !isPNG) {
        this.$message.error("上传图片必须是JPG/GIF/PNG 格式!");
      }
    },
    beforeUpload: function beforeUpload(file) {
      var _this7 = this;

      this.showChgBtn = false;
      this.judgeFm(file);
      var formData = new FormData();
      formData.append("image", file);
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(this.urls.uploadimages, formData).then(function (res) {
        var imageInfo = res.data.meta;
        if (imageInfo.status_code == 201) {
          _this7.noUpload = false;
          _this7.showChgBtn = true;
          _this7.addAfterSaleForm.after_sale_def_pro[0].img_url = res.data.path;
        }
      }).catch(function (err) {});
    },
    cancelAddAfterSale: function cancelAddAfterSale() {
      this.addAfterSaleMask = false;
      this.$message({
        message: "取消新建售后单",
        type: "info"
      });
    },
    confirmAddAfterSale: function confirmAddAfterSale() {
      var _this8 = this;

      var submitData = this.addAfterSaleForm;
      submitData.after_sale_def_pro.map(function (item, index) {
        if (!item.commodity_code) {
          submitData.after_sale_def_pro.splice(index, 1);
        }
      });
      this.$post(this.urls.aftersale, submitData).then(function () {
        _this8.$message({
          message: "新建售后订单成功",
          type: "success"
        });
        _this8.addAfterSaleMask = false;
        _this8.refresh();
      }, function (err) {
        if (err.response) {
          var arr = err.response.data.errors;
          var arr1 = [];
          for (var i in arr) {
            arr1.push(arr[i]);
          }
          var str = arr1.join(",");
          _this8.$message.error({
            message: str
          });
        }
      });
    },
    beforeUploadComp: function beforeUploadComp(file) {
      var _this9 = this;

      this.tableChgBtn = "";
      this.judgeFm(file);
      var formData = new FormData();
      formData.append("image", file);
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(this.urls.uploadimages, formData).then(function (res) {
        var imageInfo = res.data.meta;
        if (imageInfo.status_code == 201) {
          _this9.compUpload = "";
          _this9.tableChgBtn = "show" + _this9.updateRwIndex;
          _this9.updateForm.after_sale_def_pro[0].img_url = res.data.path;
        }
      }).catch(function (err) {});
    },
    updateTableUpload: function updateTableUpload(file) {
      var _this10 = this;

      this.updateChgBtn = "";
      this.judgeFm(file);
      var formData = new FormData();
      formData.append("image", file);
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(this.urls.uploadimages, formData).then(function (res) {
        var imageInfo = res.data.meta;
        if (imageInfo.status_code == 201) {
          _this10.updateCompUpload = "";
          _this10.updateChgBtn = "show" + _this10.updateRwIndex;
          _this10.updateForm.after_sale_def_pro[0].img_url = res.data.path;
        }
      }).catch(function (err) {});
    },

    // 删除售后产品
    delAddDefPro: function delAddDefPro(index) {
      this.addAfterSProDtlVal.splice(index, 1);
    },

    // 新增售后产品
    addOrderRowCName: function addOrderRowCName(_ref2) {
      var row = _ref2.row,
          rowIndex = _ref2.rowIndex;

      row.index = rowIndex;
    },
    addAfterSProRowCName: function addAfterSProRowCName(_ref3) {
      var row = _ref3.row,
          rowIndex = _ref3.rowIndex;

      row.index = rowIndex;
    },
    addAfterSProRowClick: function addAfterSProRowClick(row) {
      this.addAfterSProDtlVal.push(row);
    },
    addOrderRowClick: function addOrderRowClick(row) {
      var _this11 = this;

      this.proDtlVal = [];
      this.addOrderDtlVal = row;
      this.addOrderDtlVal.orderItems["data"].map(function (list) {
        list.combination.productComponents["data"].map(function (item) {
          var defPro = {
            commodity_code: list.product.commodity_code,
            spec_code: item.component_code,
            short_name: list.product.short_name,
            spec: item.spec,
            color: item.color,
            materials: item.materials,
            buy_number: list.quantity,
            supplier_id: list.product.supplier_id
          };
          _this11.proDtlVal.push(defPro);
        });
      });
    },
    addAfterSProClick: function addAfterSProClick() {
      this.addAfterSProMask = true;
      this.proQueryClick();
    },
    proQueryClick: function proQueryClick() {
      var _this12 = this;

      this.orderDtlVal = [];
      this.proDtlVal = [];
      this.addOrderDtlVal = [];
      this.addAfterSProDtlVal = [];
      this.$fetch(this.urls.customerservicedepts, {
        include: "orderItems.combination.productComponents,orderItems.product,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,businessPersonnel,locker,paymentDetails.paymentMethod,paymentDetails.order"
      }).then(function (res) {
        _this12.orderDtlVal = res.data;
      }, function (err) {
        if (err.response) {
          var arr = err.response.data.errors;
          var arr1 = [];
          for (var i in arr) {
            arr1.push(arr[i]);
          }
          _this12.$message.error(arr1.join(","));
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
      this.addAfterSaleForm.after_sale_def_pro = this.addAfterSProDtlVal;
      console.log(this.addAfterSaleForm.after_sale_def_pro);
      this.addAfterSaleForm.order_no = this.addOrderDtlVal.system_order_no;
      this.addAfterSaleForm.shop_name = this.addOrderDtlVal.shops_id;
      this.addAfterSaleForm.after_sale_type = "";
      this.addAfterSaleForm.order_amount = this.addOrderDtlVal.deposit;
      this.addAfterSaleForm.after_sale_group = "";
      this.addAfterSaleForm.after_sale_status = "";
      this.addAfterSaleForm.order_phone = this.addOrderDtlVal.receiver_mobile;
      this.addAfterSaleForm.vip_name = this.addOrderDtlVal.member_nick;
      this.addAfterSaleForm.suppliers_id = this.addAfterSaleForm.after_sale_def_pro[0].supplier_id;
      this.addAfterSaleForm.logistic_name = this.addOrderDtlVal.logistics_id;
      this.addAfterSaleForm.logistics_id = this.addOrderDtlVal.logistics_sn;
      this.addAfterSaleForm.deliver_date = this.addOrderDtlVal.promise_ship_time;
      this.addAfterSaleForm.receiver_state = this.addOrderDtlVal.receiver_state;
      this.addAfterSaleForm.receiver_city = this.addOrderDtlVal.receiver_city;
      this.addAfterSaleForm.receiver_district = this.addOrderDtlVal.receiver_district;
      this.addAfterSaleForm.receiver_address = this.addOrderDtlVal.receiver_address;
      this.addAfterSaleForm.after_responsible_party = "";
      this.addAfterSaleForm.after_sale_cost = "";
      this.addAfterSaleForm.problem_description = "";
      this.addAfterSaleForm.customer_service_requirements = "";
      this.addAfterSaleForm.taobao_oid = this.addOrderDtlVal.association_taobao_oid;
    },

    // 修改
    edit: function edit() {
      var _this13 = this;

      if (this.newOpt[1].nClick) {
        return;
      } else {
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
          this.$fetch(this.urls.aftersale + "/" + this.updateId, {
            include: "afterSaleSchedules.user,afterSaleDefPros,user"
          }).then(function (res) {
            _this13.updateForm = res;
            _this13.updateForm.after_sale_def_pro = _this13.updateForm.afterSaleDefPros["data"];
          }, function (err) {
            if (err.response) {
              var arr = err.response.data.errors;
              var arr1 = [];
              for (var i in arr) {
                arr1.push(arr[i]);
              }
              var str = arr1.join(",");
              _this13.$message.error(str);
            }
          });
        }
      }
    },
    delUpdateDefPro: function delUpdateDefPro(index) {
      this.updateForm.after_sale_def_pro.splice(index, 1);
    },
    confirmUpdate: function confirmUpdate() {
      var _this14 = this;

      this.$patch(this.urls.aftersale + "/" + this.updateId, this.updateForm).then(function () {
        _this14.updateMask = false;
        _this14.$message({
          message: "修改成功",
          type: "success"
        });
        _this14.refresh();
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
    },
    cancelUpdate: function cancelUpdate() {
      this.updateMask = false;
      this.$message({
        message: "已取消修改",
        type: "info"
      });
    },

    // 删除
    delMore: function delMore() {
      var _this15 = this;

      if (this.newOpt[2].nClick) {
        return;
      } else {
        if (this.delArr.length === 0) {
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
            _this15.$del(_this15.urls.aftersale, { ids: _this15.delArr }).then(function () {
              _this15.$message({
                message: "删除成功",
                type: "success"
              });
              _this15.refresh();
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
          }).catch(function () {
            _this15.$message({
              type: "info",
              message: "已取消删除"
            });
          });
        }
      }
    },

    // 审核
    handleAudit: function handleAudit() {
      var _this16 = this;

      if (this.newOpt[3].nClick) {
        return;
      } else {
        var id = this.checkboxId ? this.checkboxId : this.curRowId;
        this.$put(this.urls.aftersale + "/" + id + "/audit").then(function () {
          _this16.refresh();
          _this16.$message({
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
            _this16.$message.error(str);
          }
        });
      }
    },

    // 退审
    unAudit: function unAudit() {
      var _this17 = this;

      if (this.newOpt[4].nClick) {
        return;
      } else {
        var id = this.checkboxId ? this.checkboxId : this.curRowId;
        this.$put(this.urls.aftersale + "/" + id + "/unaudit").then(function () {
          _this17.refresh();
          _this17.$message({
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
            _this17.$message.error(str);
          }
        });
      }
    },

    // 刷新
    refresh: function refresh() {
      this.newLoading = true;
      this.submitLoading = true;
      this.checkboxInit = false;
      this.fetchAfterSaleData();
    }
  },
  mounted: function mounted() {
    var _this18 = this;

    this.fetchAfterSaleData();
    this.$fetch(this.urls.customerservicedepts + "/create").then(function (res) {
      _this18.addSubData = res;
    }, function (err) {});
    this.$store.dispatch("setOpt", this.newOpt);
    var that = this;
    $(window).resize(function () {
      that.$store.dispatch("setOpt", that.newOpt);
    });
  }
});

/***/ }),

/***/ 1199:
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
          _c(
            "span",
            [
              _c("label", [_vm._v("业务员")]),
              _vm._v(" "),
              _c(
                "el-select",
                {
                  attrs: { clearable: "", placeholder: "请选择" },
                  model: {
                    value: _vm.searchBox.user_id,
                    callback: function($$v) {
                      _vm.$set(_vm.searchBox, "user_id", $$v)
                    },
                    expression: "searchBox.user_id"
                  }
                },
                _vm._l(_vm.addSubData["user"], function(list) {
                  return _c(
                    "span",
                    { key: list.id },
                    [
                      _c("el-option", {
                        attrs: { label: list["username"], value: list.id }
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
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "searchBox" }, [
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
                        _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
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
                _vm._l(_vm.resData.aftersalestate, function(item) {
                  return _c("el-option", {
                    key: item.value,
                    attrs: { label: item.name, value: item.id }
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
              _c(
                "el-select",
                {
                  attrs: { clearable: "", placeholder: "请选择" },
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
                    value: _vm.searchBox.after_sale_type,
                    callback: function($$v) {
                      _vm.$set(_vm.searchBox, "after_sale_type", $$v)
                    },
                    expression: "searchBox.after_sale_type"
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
              _c("label", [_vm._v("联系方式")]),
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
                  value: _vm.searchBox.order_phone,
                  callback: function($$v) {
                    _vm.$set(_vm.searchBox, "order_phone", $$v)
                  },
                  expression: "searchBox.order_phone"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
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
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "searchBox" }, [
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
                        _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                      ) {
                        return null
                      }
                      return _vm.handleQuery($event)
                    }
                  },
                  model: {
                    value: _vm.searchBox.after_sale_group,
                    callback: function($$v) {
                      _vm.$set(_vm.searchBox, "after_sale_group", $$v)
                    },
                    expression: "searchBox.after_sale_group"
                  }
                },
                _vm._l(_vm.resData.aftersaletype, function(item) {
                  return _c("el-option", {
                    key: item.value,
                    attrs: { label: item.name, value: item.id }
                  })
                }),
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("span"),
          _vm._v(" "),
          _c("span"),
          _vm._v(" "),
          _c("span")
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticStyle: { "text-align": "right" } },
          [
            _c(
              "el-button",
              { attrs: { type: "primary" }, on: { click: _vm.handleQuery } },
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
            )
          ],
          1
        )
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
            { attrs: { label: "新增", name: "0" } },
            [
              _c(
                "el-table",
                {
                  directives: [
                    {
                      name: "loading",
                      rawName: "v-loading",
                      value: _vm.newLoading,
                      expression: "newLoading"
                    }
                  ],
                  ref: "newTable",
                  attrs: {
                    data: _vm.newData,
                    fit: "",
                    height: "300",
                    "row-class-name": _vm.afterSaleRCName
                  },
                  on: {
                    "selection-change": _vm.handleSelectionChange,
                    "row-click": _vm.orderListRowClick
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
                      width: "180",
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
                            ),
                            _vm._v(" "),
                            _c(
                              "el-button",
                              {
                                attrs: { size: "mini", type: "danger" },
                                on: {
                                  click: function($event) {
                                    return _vm.del(scope.row, $event)
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
                    "row-class-name": _vm.afterSaleRCName
                  },
                  on: {
                    "selection-change": _vm.handleSelectionChange,
                    "row-click": _vm.orderListRowClick
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
                      width: "180",
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
                            ),
                            _vm._v(" "),
                            _c(
                              "el-button",
                              {
                                attrs: { size: "mini", type: "danger" },
                                on: {
                                  click: function($event) {
                                    return _vm.del(scope.row, $event)
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
      _c("Pagination", { attrs: { "page-url": this.urls.aftersale } }),
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
                [
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
                  _vm._v(" "),
                  _c("el-table-column", {
                    attrs: {
                      label: "操作",
                      width: "180",
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
                                    return _vm.updateSchedule(scope.row, $event)
                                  }
                                }
                              },
                              [_vm._v("修改")]
                            ),
                            _vm._v(" "),
                            _c(
                              "el-button",
                              {
                                attrs: { size: "mini", type: "danger" },
                                on: {
                                  click: function($event) {
                                    return _vm.delBtmTab(scope.row, $event)
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
            { attrs: { label: "售后产品问题", name: "1" } },
            [
              _c(
                "el-table",
                { attrs: { data: _vm.defProData } },
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
            "el-tab-pane",
            { attrs: { label: "售后图片", name: "2" } },
            [
              _c(
                "el-table",
                { attrs: { data: _vm.defProData } },
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
            { attrs: { label: "内部便签", name: "3" } },
            [
              _c(
                "el-table",
                { attrs: { data: _vm.Data } },
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
            { attrs: { label: "操作记录", name: "4" } },
            [
              _c(
                "el-table",
                { attrs: { data: _vm.operationData } },
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
          attrs: { titie: "新建售后单", visible: _vm.addAfterSaleMask },
          on: {
            "update:visible": function($event) {
              _vm.addAfterSaleMask = $event
            }
          }
        },
        [
          _c("el-button", { attrs: { type: "text" } }, [_vm._v("编辑")]),
          _vm._v(" "),
          _c(
            "el-form",
            {
              ref: "addNew",
              attrs: {
                model: _vm.addAfterSaleForm,
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
                              value: _vm.addAfterSaleForm[item.prop],
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.addAfterSaleForm,
                                  item.prop,
                                  typeof $$v === "string" ? $$v.trim() : $$v
                                )
                              },
                              expression: "addAfterSaleForm[item.prop]"
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
                                value: _vm.addAfterSaleForm[item.prop],
                                callback: function($$v) {
                                  _vm.$set(_vm.addAfterSaleForm, item.prop, $$v)
                                },
                                expression: "addAfterSaleForm[item.prop]"
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
                              value: _vm.addAfterSaleForm[item.prop],
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.addAfterSaleForm,
                                  item.prop,
                                  typeof $$v === "string" ? $$v.trim() : $$v
                                )
                              },
                              expression: "addAfterSaleForm[item.prop]"
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
                              value: _vm.addAfterSaleForm[item.prop],
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.addAfterSaleForm,
                                  item.prop,
                                  typeof $$v === "string" ? $$v.trim() : $$v
                                )
                              },
                              expression: "addAfterSaleForm[item.prop]"
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
                                    src: _vm.addAfterSaleForm[item.prop],
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
                    data: _vm.addAfterSaleForm.after_sale_def_pro,
                    fit: "",
                    height: "180"
                  }
                },
                [
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
                                    return _vm.delAddDefPro(scope.$index)
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
                      on: { click: _vm.confirmAddAfterSale }
                    },
                    [_vm._v("确定")]
                  ),
                  _vm._v(" "),
                  _c(
                    "el-button",
                    {
                      attrs: { type: "info" },
                      on: { click: _vm.resetAddAfterSale }
                    },
                    [_vm._v("重置")]
                  ),
                  _vm._v(" "),
                  _c(
                    "el-button",
                    {
                      attrs: { type: "warning" },
                      on: { click: _vm.cancelAddAfterSale }
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
                                    src:
                                      _vm.updateForm.after_sale_def_pro[
                                        item.prop
                                      ],
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
                    data: _vm.updateForm.after_sale_def_pro,
                    fit: "",
                    height: "180"
                  }
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
                      return _vm.confirmD(_vm.delId)
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
      _c(
        "el-popover",
        {
          attrs: { slot: "tip", placement: "top", width: "160" },
          slot: "tip",
          model: {
            value: _vm.showBtmDel,
            callback: function($$v) {
              _vm.showBtmDel = $$v
            },
            expression: "showBtmDel"
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
                  on: { click: _vm.cancelBtmD }
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
                      return _vm.confirmBtmD(_vm.delId)
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
      _c(
        "el-dialog",
        {
          attrs: { title: "新增售后进度", visible: _vm.addScheduleMask },
          on: {
            "update:visible": function($event) {
              _vm.addScheduleMask = $event
            }
          }
        },
        [
          _c(
            "el-form",
            {
              attrs: {
                model: _vm.scheduleRuleFormVal,
                rules: _vm.scheduleRules,
                id: "form"
              }
            },
            _vm._l(_vm.scheduleRuleFormHead, function(item, index) {
              return _c(
                "el-form-item",
                { key: index, attrs: { label: item.label, prop: item.prop } },
                [
                  item.type == "textarea"
                    ? _c(
                        "span",
                        [
                          _c("el-input", {
                            attrs: { type: "textarea", placehode: item.holder },
                            model: {
                              value: _vm.scheduleRuleFormVal[item.prop],
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.scheduleRuleFormVal,
                                  item.prop,
                                  typeof $$v === "string" ? $$v.trim() : $$v
                                )
                              },
                              expression: "scheduleRuleFormVal[item.prop]"
                            }
                          })
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
                              value: _vm.scheduleRuleFormVal[item.prop],
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.scheduleRuleFormVal,
                                  item.prop,
                                  $$v
                                )
                              },
                              expression: "scheduleRuleFormVal[item.prop]"
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
            "div",
            {
              staticClass: "dialog-footer clearfix",
              attrs: { slot: "footer" },
              slot: "footer"
            },
            [
              _c(
                "div",
                { staticStyle: { float: "right" } },
                [
                  _c(
                    "el-button",
                    {
                      attrs: { type: "primary" },
                      on: { click: _vm.addScheduleFrom }
                    },
                    [_vm._v("确定")]
                  ),
                  _vm._v(" "),
                  _c("el-button", { on: { click: _vm.cancelAddSch } }, [
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
          attrs: { title: "修改售后进度", visible: _vm.updateScheduleMask },
          on: {
            "update:visible": function($event) {
              _vm.updateScheduleMask = $event
            }
          }
        },
        [
          _c(
            "el-form",
            {
              attrs: {
                model: _vm.updateScheduleRuleFormVal,
                rules: _vm.scheduleRules,
                id: "form"
              }
            },
            _vm._l(_vm.scheduleRuleFormHead, function(item, index) {
              return _c(
                "el-form-item",
                { key: index, attrs: { label: item.label, prop: item.prop } },
                [
                  item.type == "textarea"
                    ? _c(
                        "span",
                        [
                          _c("el-input", {
                            attrs: { type: "textarea", placehode: item.holder },
                            model: {
                              value: _vm.updateScheduleRuleFormVal[item.prop],
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.updateScheduleRuleFormVal,
                                  item.prop,
                                  typeof $$v === "string" ? $$v.trim() : $$v
                                )
                              },
                              expression: "updateScheduleRuleFormVal[item.prop]"
                            }
                          })
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
                              value: _vm.updateScheduleRuleFormVal[item.prop],
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.updateScheduleRuleFormVal,
                                  item.prop,
                                  $$v
                                )
                              },
                              expression: "updateScheduleRuleFormVal[item.prop]"
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
            "div",
            {
              staticClass: "dialog-footer clearfix",
              attrs: { slot: "footer" },
              slot: "footer"
            },
            [
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
                          return _vm.updateScheduleFrom(_vm.updateSchIndex)
                        }
                      }
                    },
                    [_vm._v("确定")]
                  ),
                  _vm._v(" "),
                  _c("el-button", { on: { click: _vm.cancelUpdateSch } }, [
                    _vm._v("取消")
                  ])
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
    require("vue-hot-reload-api")      .rerender("data-v-cac7cb74", module.exports)
  }
}

/***/ })

});