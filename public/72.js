webpackJsonp([72],{

/***/ 1013:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(12)
/* script */
var __vue_script__ = __webpack_require__(1206)
/* template */
var __vue_template__ = __webpack_require__(1207)
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
Component.options.__file = "resources/assets/js/views/afterSaleMag/afterSReview.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-20c824ab", Component.options)
  } else {
    hotAPI.reload("data-v-20c824ab", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    var _ref;

    return _ref = {
      newOpt: [{
        cnt: "修改",
        icon: "bf-change",
        ent: this.edit,
        nClick: true
      }, {
        cnt: "驳回",
        icon: "bf-reject",
        ent: this.reject,
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
        cnt: "结算",
        icon: "bf-finSettle",
        ent: this.finish,
        nClick: true
      }, {
        cnt: "刷新",
        icon: "bf-refresh",
        ent: this.refresh
      }],
      Data: [],
      operationData: [],
      /* 搜索框 */
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
      /* 中间tabs */
      topActiveName: "0",
      checkboxInit: false,
      unsubmitData: [],
      submitData: [],
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
        prop: "user",
        inProp: "username",
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
        label: "售后状态",
        width: "150",
        prop: "after_sale_status",
        type: "number"
      }, {
        label: "售后分类",
        width: "130",
        prop: "after_sale_group",
        type: "text"
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
        label: "补件信息",
        width: "180",
        prop: "rfe_information",
        type: "text"
      }, {
        label: "驳回",
        width: "90",
        prop: "is_reject",
        type: "checkbox"
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
      }]
    }, _defineProperty(_ref, "submitData", []), _defineProperty(_ref, "unsubmitData", []), _defineProperty(_ref, "addSubData", []), _defineProperty(_ref, "submitLoading", true), _defineProperty(_ref, "unsubmitLoading", true), _defineProperty(_ref, "addScheduleMask", false), _defineProperty(_ref, "updateScheduleMask", false), _defineProperty(_ref, "scheduleFrom", {}), _defineProperty(_ref, "addId", ""), _defineProperty(_ref, "bottomActiveName", "0"), _defineProperty(_ref, "showBtmDel", false), _defineProperty(_ref, "scheduleData", []), _defineProperty(_ref, "defProData", []), _defineProperty(_ref, "refundData", []), _defineProperty(_ref, "returnData", []), _defineProperty(_ref, "patchData", []), _defineProperty(_ref, "scheduleRuleFormVal", {
      schedule_description: "",
      subscribed_at: ""
    }), _defineProperty(_ref, "updateScheduleRuleFormVal", {
      after_sale_id: "",
      schedule_description: "",
      subscribed_at: ""
    }), _defineProperty(_ref, "scheduleRules", {
      schedule_description: [{ required: true, message: "进度描述必填", trigger: "blur" }]
    }), _defineProperty(_ref, "scheduleRuleFormHead", [{
      label: "进度描述",
      holder: "请输入进度描述",
      prop: "schedule_description",
      type: "textarea"
    }, {
      label: "预约时间",
      prop: "subscribed_at",
      type: "DatePicker"
    }]), _defineProperty(_ref, "btmTableHead", [[{
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
      label: "售后图片",
      width: "120",
      prop: "img_url",
      type: "img"
    }], [], [], [], [], [{
      label: "责任方",
      prop: "refund_party",
      width: "180",
      type: "text"
    }, {
      label: "责任方姓名",
      prop: "refund_party_name",
      width: "180",
      type: "text"
    }, {
      label: "责任金额",
      prop: "refund_amount",
      width: "180",
      type: "number"
    }], [{
      label: "责任方",
      prop: "return_party",
      width: "180",
      type: "text"
    }, {
      label: "责任方姓名",
      prop: "return_party_name",
      width: "180",
      type: "text"
    }, {
      label: "责任金额",
      prop: "return_amount",
      width: "180",
      type: "number"
    }], [{
      label: "责任方",
      prop: "patch_party",
      width: "180",
      type: "text"
    }, {
      label: "责任方姓名",
      prop: "patch_party_name",
      width: "180",
      type: "text"
    }, {
      label: "责任金额",
      prop: "patch_amount",
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
    }]]), _defineProperty(_ref, "addActiveName", "0"), _defineProperty(_ref, "moreForms", true), _defineProperty(_ref, "selection", ""), _defineProperty(_ref, "updateMask", false), _defineProperty(_ref, "updateId", ""), _defineProperty(_ref, "updateIndex", ""), _defineProperty(_ref, "updateSchIndex", ""), _defineProperty(_ref, "updateForm", {
      refund_data: [],
      return_data: [],
      patch_data: []
    }), _defineProperty(_ref, "refundHead", [{
      label: "责任方",
      width: "200",
      prop: "refund_party",
      stateVal: "responsible_party",
      type: "text"
    }, {
      label: "责任方姓名",
      width: "200",
      prop: "refund_party_name",
      type: "text"
    }, {
      label: "责任金额",
      width: "200",
      prop: "refund_amount",
      type: "number"
    }]), _defineProperty(_ref, "returnHead", [{
      label: "责任方",
      width: "200",
      prop: "return_party",
      stateVal: "responsible_party",
      type: "text"
    }, {
      label: "责任方姓名",
      width: "200",
      prop: "return_party_name",
      type: "text"
    }, {
      label: "责任金额",
      width: "200",
      prop: "return_amount",
      type: "number"
    }]), _defineProperty(_ref, "patchHead", [{
      label: "责任方",
      width: "200",
      prop: "patch_party",
      stateVal: "responsible_party",
      type: "text"
    }, {
      label: "责任方姓名",
      width: "200",
      prop: "patch_party_name",
      type: "text"
    }, {
      label: "责任金额",
      width: "200",
      prop: "patch_amount",
      type: "number"
    }]), _defineProperty(_ref, "componentShowChg", true), _defineProperty(_ref, "updateCompUpload", "upload0"), _defineProperty(_ref, "updateRwIndex", "0"), _defineProperty(_ref, "ruleForm", {
      is_refund: false,
      is_return: false,
      is_patch: false
    }), _defineProperty(_ref, "rules", {}), _defineProperty(_ref, "updateArr", [{
      label: "退款责任方",
      prop: "is_refund",
      holder: "请选择状态",
      type: "checkbox"
    }, {
      label: "退货责任方",
      prop: "is_return",
      holder: "请选择状态",
      type: "checkbox"
    }, {
      label: "补件责任方",
      prop: "is_patch",
      holder: "请选择状态",
      type: "checkbox"
    }]), _ref;
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

    /* 搜索框 */
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
          this.newOpt[0].nClick = true;
          this.newOpt[1].nClick = false;
          this.newOpt[2].nClick = false;
          this.newOpt[3].nClick = true;
          this.newOpt[4].nClick = true;
          this.$fetch(this.urls.aftersale, {
            order_status: 30,
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
            _this.unsubmitLoading = false;
            _this.unsubmitData = res.data;
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
          this.newOpt[0].nClick = false;
          this.newOpt[1].nClick = true;
          this.newOpt[2].nClick = true;
          this.newOpt[3].nClick = false;
          this.newOpt[4].nClick = false;
          this.$fetch(this.urls.aftersale, {
            order_status: 40,
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
    afterSaleRCName: function afterSaleRCName(_ref2) {
      var row = _ref2.row,
          rowIndex = _ref2.rowIndex;

      row.index = rowIndex;
    },
    orderListRowClick: function orderListRowClick(row) {
      this.curRowId = row.id;
      this.curRowData = row;
      this.scheduleData = row["afterSaleSchedules"].data;
      this.refundData = row["afterSaleRefunds"].data;
      this.returnData = row["afterSaleReturns"].data;
      this.patchData = row["afterSalePatchs"].data;
      this.defProData = row["afterSaleDefPros"].data;
      this.operationData = row["afterSaleOperationRecord"].data;
    },
    handleSelectionChange: function handleSelectionChange(val) {
      if (val.length != 0) {
        this.updateId = val[0].id;
        this.refundForm = {};
        this.returnForm = {};
        this.patchForm = {};
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
      var _this2 = this;

      var index = this.bottomActiveName - 0;
      switch (index) {
        case 0:
          this.$del(this.urls.aftersaleschedule + "/" + id).then(function () {
            _this2.$message({
              message: "删除成功",
              type: "success"
            });
            _this2.showBtmDel = false;
            _this2.refresh();
          }, function (err) {
            if (err.response) {
              _this2.showBtmDel = false;
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
      var _this3 = this;

      var id = this.addId;
      var data = this.scheduleRuleFormVal;
      var submitData = {
        after_sale_id: id,
        schedule_description: data.schedule_description,
        subscribed_at: data.subscribed_at
      };
      this.$post(this.urls.aftersaleschedule, submitData).then(function () {
        _this3.$message({
          message: "新建售后进度成功",
          type: "success"
        });
        _this3.addScheduleMask = false;
        _this3.refresh();
      }, function (err) {
        if (err.response) {
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
    },

    // 修改售后进度
    updateSchedule: function updateSchedule(row) {
      var _this4 = this;

      this.updateScheduleMask = true;
      this.updateSchIndex = row.id;
      this.$fetch(this.urls.aftersaleschedule + "/" + this.updateSchIndex).then(function (res) {
        _this4.updateScheduleRuleFormVal = {
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
          _this4.$message.error(str);
        }
      });
    },
    updateScheduleFrom: function updateScheduleFrom(row) {
      var _this5 = this;

      this.$patch(this.urls.aftersaleschedule + "/" + this.updateSchIndex, this.updateScheduleRuleFormVal).then(function () {
        _this5.$message({
          message: "修改售后进度成功",
          type: "success"
        });
        _this5.updateScheduleMask = false;
        _this5.refresh();
      }, function (err) {
        if (err.response) {
          var arr = err.response.data.errors;
          var arr1 = [];
          for (var i in arr) {
            arr1.push(arr[i]);
          }
          var str = arr1.join(",");
          _this5.$message.error({
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

    // 修改
    updateCName: function updateCName(_ref3) {
      var row = _ref3.row,
          rowIndex = _ref3.rowIndex;

      row.index = rowIndex;
    },
    updateAddDuty: function updateAddDuty() {
      var index = this.addActiveName - 0;
      switch (index) {
        case 0:
          if (this.ruleForm.is_refund == true) {
            var refundCombKey = {
              after_sale_id: this.updateId,
              refund_party: "",
              refund_party_name: "",
              refund_amount: ""
            };
            if (this.updateForm.refund_data.length > 0 && !this.updateForm.refund_data[this.updateForm.refund_data.length - 1].refund_party) {
              this.$message({
                message: "责任方为空时不能添加新责任方",
                type: "info"
              });
            } else {
              this.updateForm.refund_data.push(refundCombKey);
              this.updateRwIndex = this.updateForm.refund_data.length - 1;
              this.updateCompUpload = "upload" + this.updateRwIndex;
              this.updateProIndex = "index" + this.updateRwIndex;
            }
          } else {
            this.$message({
              message: "需先选择退款责任方",
              type: "info"
            });
          }
          break;
        case 1:
          if (this.ruleForm.is_return == true) {
            var returnCombKey = {
              after_sale_id: this.updateId,
              return_party: "",
              return_party_name: "",
              return_amount: ""
            };
            if (this.updateForm.return_data.length > 0 && !this.updateForm.return_data[this.updateForm.return_data.length - 1].return_party) {
              this.$message({
                message: "责任方为空时不能添加新责任方",
                type: "info"
              });
            } else {
              this.updateForm.return_data.push(returnCombKey);
              this.updateRwIndex = this.updateForm.return_data.length - 1;
              this.updateCompUpload = "upload" + this.updateRwIndex;
              this.updateProIndex = "index" + this.updateRwIndex;
            }
          } else {
            this.$message({
              message: "需先选择退货责任方",
              type: "info"
            });
          }
          break;
        case 2:
          if (this.ruleForm.is_patch == true) {
            var patchCombKey = {
              after_sale_id: this.updateId,
              patch_party: "",
              patch_party_name: "",
              patch_amount: ""
            };
            if (this.updateForm.patch_data.length > 0 && !this.updateForm.patch_data[this.updateForm.patch_data.length - 1].patch_party) {
              this.$message({
                message: "责任方为空时不能添加新责任方",
                type: "info"
              });
            } else {
              this.updateForm.patch_data.push(patchCombKey);
              this.updateRwIndex = this.updateForm.patch_data.length - 1;
              this.updateCompUpload = "upload" + this.updateRwIndex;
              this.updateProIndex = "index" + this.updateRwIndex;
            }
          } else {
            this.$message({
              message: "需先选择补件责任方",
              type: "info"
            });
          }
          break;
      }
    },
    updateRowClick: function updateRowClick(row) {
      this.updateRwIndex = row.index;
      this.updateProIndex = "index" + row.index;
      if (row.img_url) {
        this.updateChgBtn = "show" + row.index;
      } else {
        this.updateChgBtn = "upload" + row.index;
      }
    },
    cancelAdd: function cancelAdd() {
      this.updateMask = false;
      this.$message({
        message: "取消添加",
        type: "info"
      });
    },
    confirmAdd: function confirmAdd() {
      var _this6 = this;

      if (this.ruleForm.is_refund) {
        this.updateForm.refund_data.map(function (item) {
          _this6.$post(_this6.urls.aftersalerefund, item).then(function () {}, function (err) {
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
        });
        this.updateMask = false;
        this.updateForm.refund_data = [];
        this.refresh();
      }
      if (this.ruleForm.is_return) {
        this.updateForm.return_data.map(function (item) {
          _this6.$post(_this6.urls.aftersalereturn, item).then(function () {}, function (err) {
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
        });
        this.updateMask = false;
        this.updateForm.return_data = [];
        this.refresh();
      }
      if (this.ruleForm.is_patch) {
        this.updateForm.patch_data.map(function (item) {
          _this6.$post(_this6.urls.aftersalepatch, item).then(function () {}, function (err) {
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
        });
        this.updateMask = false;
        this.refresh();
      }
      if (!this.ruleForm.is_refund && !this.ruleForm.is_return && !this.ruleForm.is_patch) {
        this.$message({
          message: "没有选中责任方",
          type: "warning"
        });
      }
      this.updateForm.patch_data = [];
    },
    edit: function edit() {
      var _this7 = this;

      if (this.newOpt[0].nClick) {
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
          this.$fetch(this.urls.aftersale + "/" + this.updateId).then(function (res) {}, function (err) {
            if (err.response) {
              var arr = err.response.data.errors;
              var arr1 = [];
              for (var i in arr) {
                arr1.push(arr[i]);
              }
              var str = arr1.join(",");
              _this7.$message.error(str);
            }
          });
        }
      }
    },

    // 审核
    handleAudit: function handleAudit() {
      var _this8 = this;

      if (this.newOpt[2].nClick) {
        return;
      } else {
        var id = this.checkboxId ? this.checkboxId : this.curRowId;
        this.$put(this.urls.aftersale + "/" + id + "/twoaudit").then(function () {
          _this8.refresh();
          _this8.$message({
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
            _this8.$message.error(str);
          }
        });
      }
    },

    // 退审
    unAudit: function unAudit() {
      var _this9 = this;

      if (this.newOpt[3].nClick) {
        return;
      } else {
        var id = this.checkboxId ? this.checkboxId : this.curRowId;
        this.$put(this.urls.aftersale + "/" + id + "/untwoaudit").then(function () {
          _this9.refresh();
          _this9.$message({
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
            _this9.$message.error(str);
          }
        });
      }
    },

    // 驳回
    reject: function reject() {
      var _this10 = this;

      if (this.newOpt[1].nClick) {
        return;
      } else {
        var id = this.checkboxId ? this.checkboxId : this.curRowId;
        this.$put(this.urls.aftersale + "/" + id + "/reject").then(function () {
          _this10.refresh();
          _this10.$message({
            message: "驳回成功",
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
    },

    // 结算
    finish: function finish() {
      var _this11 = this;

      if (this.newOpt[4].nClick) {
        return;
      } else {
        var id = this.checkboxId ? this.checkboxId : this.curRowId;
        this.$put(this.urls.aftersale + "/" + id + "/finish").then(function () {
          _this11.refresh();
          _this11.$message({
            message: "结算成功",
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
      }
    },
    refresh: function refresh() {
      this.submitLoading = true;
      this.unsubmitLoading = true;
      this.checkboxInit = false;
      this.fetchAfterSaleData();
    }
  },
  mounted: function mounted() {
    var _this12 = this;

    this.fetchAfterSaleData();
    this.$fetch(this.urls.customerservicedepts + "/create").then(function (res) {
      _this12.addSubData = res;
    }, function (err) {});
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

/***/ 1207:
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
                                            "object" && item.nmProp
                                        ? _c("span", [
                                            _vm._v(
                                              _vm._s(
                                                scope.row[item.prop][
                                                  item.nmProp
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
                                            "object" && item.nmProp
                                        ? _c("span", [
                                            _vm._v(
                                              _vm._s(
                                                scope.row[item.prop][
                                                  item.nmProp
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
            { attrs: { label: "售后图片", name: "1" } },
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
            { attrs: { label: "退款明细", name: "2" } },
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
            { attrs: { label: "退货明细", name: "3" } },
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
            { attrs: { label: "补件明细", name: "4" } },
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
            { attrs: { label: "补发问题产品", name: "5" } },
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
                { attrs: { data: _vm.refundData } },
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
                { attrs: { data: _vm.returnData } },
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
                { attrs: { data: _vm.patchData } },
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
            { attrs: { label: "售后问题产品", name: "10" } },
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
            { attrs: { label: "内部便签", name: "11" } },
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
            { attrs: { label: "操作记录", name: "12" } },
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
          attrs: { titie: "修改责任金额", visible: _vm.updateMask },
          on: {
            "update:visible": function($event) {
              _vm.updateMask = $event
            }
          }
        },
        [
          _c("el-button", { attrs: { type: "text" } }, [_vm._v("修改类型")]),
          _vm._v(" "),
          _c("add-new", {
            attrs: {
              "rule-form": _vm.ruleForm,
              rules: _vm.rules,
              "add-arr": _vm.updateArr,
              onlyInputs: true
            }
          }),
          _vm._v(" "),
          _c(
            "el-tabs",
            {
              staticClass: "hidePart",
              attrs: { id: "elTabs" },
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
                "el-tab-pane",
                { attrs: { label: "退款责任方", name: "0" } },
                [
                  _c(
                    "el-table",
                    {
                      attrs: {
                        data: _vm.updateForm.refund_data,
                        fit: "",
                        height: "300",
                        "row-class-name": _vm.updateCName
                      },
                      on: { "row-click": _vm.updateRowClick }
                    },
                    _vm._l(_vm.refundHead, function(item, index) {
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
                                        item.type == "number"
                                          ? _c(
                                              "span",
                                              [
                                                _c("el-input", {
                                                  attrs: {
                                                    size: "small",
                                                    type: "number"
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
                                          : _c(
                                              "span",
                                              [
                                                _c("el-input", {
                                                  attrs: { size: "small" },
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
                                                      _vm.resData[
                                                        item.stateVal
                                                      ],
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
                                                                        ? list.name
                                                                        : list.nick
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
                                            ])
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
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-tab-pane",
                { attrs: { label: "退货责任方", name: "1" } },
                [
                  _c(
                    "el-table",
                    {
                      attrs: {
                        data: _vm.updateForm.return_data,
                        fit: "",
                        height: "300",
                        "row-class-name": _vm.updateCName
                      },
                      on: { "row-click": _vm.updateRowClick }
                    },
                    _vm._l(_vm.returnHead, function(item, index) {
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
                                        item.type == "number"
                                          ? _c(
                                              "span",
                                              [
                                                _c("el-input", {
                                                  attrs: {
                                                    size: "small",
                                                    type: "number"
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
                                          : _c(
                                              "span",
                                              [
                                                _c("el-input", {
                                                  attrs: { size: "small" },
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
                                                      _vm.resData[
                                                        item.stateVal
                                                      ],
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
                                                                        ? list.name
                                                                        : list.nick
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
                                            ])
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
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-tab-pane",
                { attrs: { label: "补件责任方", name: "2" } },
                [
                  _c(
                    "el-table",
                    {
                      attrs: {
                        data: _vm.updateForm.patch_data,
                        fit: "",
                        height: "300",
                        "row-class-name": _vm.updateCName
                      },
                      on: { "row-click": _vm.updateRowClick }
                    },
                    _vm._l(_vm.patchHead, function(item, index) {
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
                                        item.type == "number"
                                          ? _c(
                                              "span",
                                              [
                                                _c("el-input", {
                                                  attrs: {
                                                    size: "small",
                                                    type: "number"
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
                                          : _c(
                                              "span",
                                              [
                                                _c("el-input", {
                                                  attrs: { size: "small" },
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
                                                      _vm.resData[
                                                        item.stateVal
                                                      ],
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
                                                                        ? list.name
                                                                        : list.nick
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
                                            ])
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
                      on: { click: _vm.updateAddDuty }
                    },
                    [_vm._v("添加责任方")]
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
                      on: { click: _vm.confirmAdd }
                    },
                    [_vm._v("确定添加")]
                  ),
                  _vm._v(" "),
                  _c(
                    "el-button",
                    {
                      attrs: { type: "warning" },
                      on: { click: _vm.cancelAdd }
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
    require("vue-hot-reload-api")      .rerender("data-v-20c824ab", module.exports)
  }
}

/***/ })

});