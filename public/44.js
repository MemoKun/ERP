webpackJsonp([44],{

/***/ 472:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(630)
/* template */
var __vue_template__ = __webpack_require__(631)
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
Component.options.__file = "resources/assets/js/views/refund/afterSaleReAudit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7cc79279", Component.options)
  } else {
    hotAPI.reload("data-v-7cc79279", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 630:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            newOpt: [{
                cnt: '修改',
                icon: 'bf-change',
                ent: this.test,
                nClick: false
            }, {
                cnt: '删除',
                icon: 'bf-del',
                ent: this.test,
                nClick: false
            }, {
                cnt: '锁定',
                icon: 'bf-lock',
                ent: this.test,
                nClick: false
            }, {
                cnt: '解锁',
                icon: 'bf-delock',
                ent: this.test,
                nClick: false
            }, {
                cnt: '驳回',
                icon: 'bf-reject',
                ent: this.test,
                nClick: false
            }, {
                cnt: '审核',
                icon: 'bf-audit',
                ent: this.test,
                nClick: false
            }, {
                cnt: '退审',
                icon: 'bf-auditfaild',
                ent: this.test,
                nClick: false
            }, {
                cnt: '刷新',
                icon: 'bf-refresh',
                ent: this.test,
                nClick: false
            }],
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
                refund_time: ''
            },
            topActiveName: 'pending',
            btmActiveName: 'refundDetail',
            pending: {
                table: [{
                    label: '系统单号',
                    width: '200',
                    prop: 'refund_no',
                    type: 'text'
                }, {
                    label: '订单编号',
                    width: '120',
                    prop: 'order_no',
                    type: 'text'
                }, {
                    label: '卖家昵称',
                    width: '120',
                    prop: 'seller_nick',
                    type: 'text'
                }, {
                    label: '店铺分组',
                    width: '120',
                    prop: 'shop_group',
                    type: 'text'
                }, {
                    label: '买家昵称',
                    width: '120',
                    prop: 'buyer_nick',
                    type: 'text'
                }, {
                    label: '单据类型',
                    width: '120',
                    prop: 'receipt_type',
                    type: 'text'
                }, {
                    label: '退款方式',
                    width: '120',
                    prop: 'refund_func',
                    type: 'text'
                }, {
                    label: '退款金额',
                    width: '180',
                    prop: 'refund_amount',
                    type: 'text'
                }, {
                    label: '退款时间',
                    width: '180',
                    prop: 'refund_at',
                    type: 'text'
                }, {
                    label: '淘宝退款状态',
                    width: '180',
                    prop: 'taobao_refund_state',
                    type: 'text'
                }, {
                    label: '还款账号',
                    width: '180',
                    prop: 'refund_account',
                    type: 'text'
                }, {
                    label: '还款类型',
                    width: '180',
                    prop: 'refund_type',
                    type: 'text'
                }, {
                    label: '开户银行',
                    width: '180',
                    prop: 'bank',
                    type: 'text'
                }, {
                    label: '开户地址',
                    width: '180',
                    prop: 'bank_address',
                    type: 'text'
                }, {
                    label: '创建人',
                    width: '180',
                    prop: 'creator',
                    type: 'text'
                }, {
                    label: '锁定人',
                    width: '180',
                    prop: 'locker',
                    type: 'text'
                }, {
                    label: '锁定时间',
                    width: '180',
                    prop: 'lock_at',
                    type: 'text'
                }, {
                    label: '业务审核人',
                    width: '180',
                    prop: 'business_auditor',
                    type: 'text'
                }, {
                    label: '业务审核时间',
                    width: '180',
                    prop: 'business_audit_at',
                    type: 'text'
                }, {
                    label: '审计',
                    width: '180',
                    prop: 'audit',
                    type: 'checkbox'
                }, {
                    label: '售后审核人',
                    width: '180',
                    prop: 'sale_auditor',
                    type: 'text'
                }, {
                    label: '审计人',
                    width: '180',
                    prop: 'auditor',
                    type: 'text'
                }, {
                    label: '售后审核时间',
                    width: '180',
                    prop: 'sale_audit_at',
                    type: 'text'
                }, {
                    label: '审计时间',
                    width: '180',
                    prop: 'audit_at',
                    type: 'text'
                }, {
                    label: '财务审核人',
                    width: '180',
                    prop: 'financial_auditor',
                    type: 'text'
                }, {
                    label: '财务审核时间',
                    width: '180',
                    prop: 'financial_audit_at',
                    type: 'text'
                }, {
                    label: '锁定',
                    width: '100',
                    prop: 'is_lock',
                    type: 'checkbox'
                }, {
                    label: '业务审核',
                    width: '100',
                    prop: 'is_business_audit',
                    type: 'checkbox'
                }, {
                    label: '售后审核',
                    width: '100',
                    prop: 'is_sale_audit',
                    type: 'checkbox'
                }, {
                    label: '财务审核',
                    width: '100',
                    prop: 'is_financial_audit',
                    type: 'checkbox'
                }, {
                    label: '标记名称',
                    width: '100',
                    prop: 'mark_name',
                    type: 'text'
                }, {
                    label: '标记人',
                    width: '180',
                    prop: 'marker',
                    type: 'text'
                }, {
                    label: '标记时间',
                    width: '100',
                    prop: 'mark_at',
                    type: 'text'
                }, {
                    label: '是否启用',
                    width: '100',
                    prop: 'is_use',
                    type: 'checkbox'
                }],
                loading: true,
                data: []
            },
            solved: {
                table: [{
                    label: '系统单号',
                    width: '200',
                    prop: 'refund_no',
                    type: 'text'
                }, {
                    label: '订单编号',
                    width: '120',
                    prop: 'order_no',
                    type: 'text'
                }, {
                    label: '卖家昵称',
                    width: '120',
                    prop: 'seller_nick',
                    type: 'text'
                }, {
                    label: '店铺分组',
                    width: '120',
                    prop: 'shop_group',
                    type: 'text'
                }, {
                    label: '买家昵称',
                    width: '120',
                    prop: 'buyer_nick',
                    type: 'text'
                }, {
                    label: '单据类型',
                    width: '120',
                    prop: 'receipt_type',
                    type: 'text'
                }, {
                    label: '退款方式',
                    width: '120',
                    prop: 'refund_func',
                    type: 'text'
                }, {
                    label: '退款金额',
                    width: '180',
                    prop: 'refund_amount',
                    type: 'text'
                }, {
                    label: '退款时间',
                    width: '180',
                    prop: 'refund_at',
                    type: 'text'
                }, {
                    label: '淘宝退款状态',
                    width: '180',
                    prop: 'taobao_refund_state',
                    type: 'text'
                }, {
                    label: '还款账号',
                    width: '180',
                    prop: 'refund_account',
                    type: 'text'
                }, {
                    label: '还款类型',
                    width: '180',
                    prop: 'refund_type',
                    type: 'text'
                }, {
                    label: '开户银行',
                    width: '180',
                    prop: 'bank',
                    type: 'text'
                }, {
                    label: '开户地址',
                    width: '180',
                    prop: 'bank_address',
                    type: 'text'
                }, {
                    label: '创建人',
                    width: '180',
                    prop: 'creator',
                    type: 'text'
                }, {
                    label: '锁定人',
                    width: '180',
                    prop: 'locker',
                    type: 'text'
                }, {
                    label: '锁定时间',
                    width: '180',
                    prop: 'lock_at',
                    type: 'text'
                }, {
                    label: '业务审核人',
                    width: '180',
                    prop: 'business_auditor',
                    type: 'text'
                }, {
                    label: '业务审核时间',
                    width: '180',
                    prop: 'business_audit_at',
                    type: 'text'
                }, {
                    label: '审计',
                    width: '180',
                    prop: 'audit',
                    type: 'checkbox'
                }, {
                    label: '售后审核人',
                    width: '180',
                    prop: 'sale_auditor',
                    type: 'text'
                }, {
                    label: '审计人',
                    width: '180',
                    prop: 'auditor',
                    type: 'text'
                }, {
                    label: '售后审核时间',
                    width: '180',
                    prop: 'sale_audit_at',
                    type: 'text'
                }, {
                    label: '审计时间',
                    width: '180',
                    prop: 'audit_at',
                    type: 'text'
                }, {
                    label: '财务审核人',
                    width: '180',
                    prop: 'financial_auditor',
                    type: 'text'
                }, {
                    label: '财务审核时间',
                    width: '180',
                    prop: 'financial_audit_at',
                    type: 'text'
                }, {
                    label: '锁定',
                    width: '100',
                    prop: 'is_lock',
                    type: 'checkbox'
                }, {
                    label: '业务审核',
                    width: '100',
                    prop: 'is_business_audit',
                    type: 'checkbox'
                }, {
                    label: '售后审核',
                    width: '100',
                    prop: 'is_sale_audit',
                    type: 'checkbox'
                }, {
                    label: '财务审核',
                    width: '100',
                    prop: 'is_financial_audit',
                    type: 'checkbox'
                }, {
                    label: '标记名称',
                    width: '100',
                    prop: 'mark_name',
                    type: 'text'
                }, {
                    label: '标记人',
                    width: '180',
                    prop: 'marker',
                    type: 'text'
                }, {
                    label: '标记时间',
                    width: '100',
                    prop: 'mark_at',
                    type: 'text'
                }, {
                    label: '是否启用',
                    width: '100',
                    prop: 'is_use',
                    type: 'checkbox'
                }],
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
                refund_remark: ''
            }
        };
    },

    methods: {
        updateOpts: function updateOpts() {
            this.$store.state.opt.opts = this.newOpt;
            this.$store.commit('change', this.newOpt);
        },
        test: function test() {
            console.log(1);
        },
        cancelRowCName: function cancelRowCName(_ref) {
            var row = _ref.row,
                rowIndex = _ref.rowIndex;

            row.index = rowIndex;
        },
        addCellClick: function addCellClick(row) {
            this.addCurRow = 'index' + row.index;
        },
        delAddPur: function delAddPur(index) {
            // this.addPFDialog.data.data.splice(index,1);
        },
        confirmAdd: function confirmAdd() {},
        cancelAdd: function cancelAdd() {},
        clickTopTabs: function clickTopTabs() {
            switch (this.topActiveName) {
                case 'pending':
                    this.pending.loading = true;
                    this.newOpt[0].nClick = true;
                    this.newOpt[1].nClick = true;
                    this.newOpt[2].nClick = true;
                    this.newOpt[3].nClick = true;
                    this.newOpt[4].nClick = true;
                    this.newOpt[5].nClick = true;
                    this.newOpt[6].nClick = true;
                    this.newOpt[7].nClick = false;

                    this.pending.loading = false;
                    break;
                case 'solved':
                    this.solved.loading = true;
                    this.newOpt[0].nClick = true;
                    this.newOpt[1].nClick = true;
                    this.newOpt[2].nClick = true;
                    this.newOpt[3].nClick = true;
                    this.newOpt[4].nClick = false;
                    this.newOpt[5].nClick = true;
                    this.newOpt[6].nClick = false;
                    this.newOpt[7].nClick = false;

                    this.solved.loading = false;
                    break;
            }
        },
        clickBtmTabs: function clickBtmTabs() {
            switch (this.btmActiveName) {
                case 'refundDetail':

                    break;
                case 'refundRecord':

                    break;

                case 'imgInfo':

                    break;
                case 'images':

                    break;
                case 'refundReason':

                    break;
            }
        }
    },
    watch: {
        newOpt: {
            handler: function handler() {
                this.updateOpts();
            },

            immediate: true,
            deep: true

        }
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
    mounted: function mounted() {
        this.clickTopTabs();
        this.clickBtmTabs();
        this.updateOpts();
    }
});

/***/ }),

/***/ 631:
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
              _c("label", [_vm._v("店铺昵称")]),
              _vm._v(" "),
              _c("el-input", {
                attrs: { clearable: "" },
                nativeOn: {
                  keyuo: function($event) {
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
            { attrs: { label: "未处理", name: "pending" } },
            [
              _c(
                "el-table",
                {
                  directives: [
                    {
                      name: "loading",
                      rawName: "v-loading",
                      value: _vm.pending.loading,
                      expression: "pending.loading"
                    }
                  ],
                  attrs: { data: _vm.pending.data, fit: "", height: "300" }
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
                  _vm._l(_vm.pending.table, function(item) {
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
                                item.type === "select"
                                  ? _c("span", [
                                      scope.row[item.prop] === ""
                                        ? _c("span")
                                        : typeof scope.row[item.prop] ==
                                            "object" && item.nmProp
                                        ? _c("span", [
                                            _vm._v(
                                              "\n                                " +
                                                _vm._s(
                                                  scope.row[item.prop][
                                                    item.nmProp
                                                  ]
                                                ) +
                                                "\n                            "
                                            )
                                          ])
                                        : _vm._e()
                                    ])
                                  : item.type === "checkbox"
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
                                  : item.type === "img"
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
                                                src: scope.row[item.prop],
                                                alt: ""
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
                                              "\n                                " +
                                                _vm._s(
                                                  item.inProp
                                                    ? scope.row[item.prop][
                                                        item.inProp
                                                      ]
                                                    : scope.row[item.prop]
                                                ) +
                                                "\n                            "
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
            { attrs: { label: "已处理", name: "solved" } },
            [
              _c(
                "el-table",
                {
                  directives: [
                    {
                      name: "loading",
                      rawName: "v-loading",
                      value: _vm.solved.loading,
                      expression: "solved.loading"
                    }
                  ],
                  attrs: { data: _vm.solved.data, fit: "", height: "300" }
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
                  _vm._l(_vm.solved.table, function(item) {
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
                                item.type === "select"
                                  ? _c("span", [
                                      scope.row[item.prop] === ""
                                        ? _c("span")
                                        : typeof scope.row[item.prop] ==
                                            "object" && item.nmProp
                                        ? _c("span", [
                                            _vm._v(
                                              "\n                                " +
                                                _vm._s(
                                                  scope.row[item.prop][
                                                    item.nmProp
                                                  ]
                                                ) +
                                                "\n                            "
                                            )
                                          ])
                                        : _vm._e()
                                    ])
                                  : item.type === "checkbox"
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
                                  : item.type === "img"
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
                                                src: scope.row[item.prop],
                                                alt: ""
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
                                              "\n                                " +
                                                _vm._s(
                                                  item.inProp
                                                    ? scope.row[item.prop][
                                                        item.inProp
                                                      ]
                                                    : scope.row[item.prop]
                                                ) +
                                                "\n                            "
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
      _c("Pagination", { attrs: { "page-url": _vm.urls["afterSaleReAudit"] } }),
      _vm._v(" "),
      _c(
        "el-tabs",
        {
          on: { "tab-click": _vm.clickBtmTabs },
          model: {
            value: _vm.btmActiveName,
            callback: function($$v) {
              _vm.btmActiveName = $$v
            },
            expression: "btmActiveName"
          }
        },
        [
          _c(
            "el-tab-pane",
            { attrs: { label: "详细信息", name: "refundDetail" } },
            [
              _c("div", { staticClass: "search_box" }, [
                _c("div", { staticClass: "searchBox" }, [
                  _c(
                    "span",
                    [
                      _c("label", [_vm._v("系统单号")]),
                      _vm._v(" "),
                      _c("el-input", {
                        attrs: { disabled: "" },
                        nativeOn: {
                          keyuo: function($event) {
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
                          value: _vm.refundDetail.system_no,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.refundDetail,
                              "system_no",
                              typeof $$v === "string" ? $$v.trim() : $$v
                            )
                          },
                          expression: "refundDetail.system_no"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    [
                      _c("label", [_vm._v("退款单号")]),
                      _vm._v(" "),
                      _c("el-input", {
                        attrs: { disabled: "" },
                        nativeOn: {
                          keyuo: function($event) {
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
                          value: _vm.refundDetail.refund_no,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.refundDetail,
                              "refund_no",
                              typeof $$v === "string" ? $$v.trim() : $$v
                            )
                          },
                          expression: "refundDetail.refund_no"
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
                        attrs: { disabled: "" },
                        nativeOn: {
                          keyuo: function($event) {
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
                          value: _vm.refundDetail.buyer_nick,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.refundDetail,
                              "buyer_nick",
                              typeof $$v === "string" ? $$v.trim() : $$v
                            )
                          },
                          expression: "refundDetail.buyer_nick"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    [
                      _c("label", [_vm._v("卖家昵称")]),
                      _vm._v(" "),
                      _c("el-input", {
                        attrs: { disabled: "" },
                        nativeOn: {
                          keyuo: function($event) {
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
                          value: _vm.refundDetail.shop_nick,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.refundDetail,
                              "shop_nick",
                              typeof $$v === "string" ? $$v.trim() : $$v
                            )
                          },
                          expression: "refundDetail.shop_nick"
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
                      _c("label", [_vm._v("退款金额")]),
                      _vm._v(" "),
                      _c("el-input", {
                        attrs: { disabled: "" },
                        nativeOn: {
                          keyuo: function($event) {
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
                          value: _vm.refundDetail.refund_amount,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.refundDetail,
                              "refund_amount",
                              typeof $$v === "string" ? $$v.trim() : $$v
                            )
                          },
                          expression: "refundDetail.refund_amount"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    [
                      _c("label", [_vm._v("支付金额")]),
                      _vm._v(" "),
                      _c("el-input", {
                        attrs: { disabled: "" },
                        nativeOn: {
                          keyuo: function($event) {
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
                          value: _vm.refundDetail.pay_amount,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.refundDetail,
                              "pay_amount",
                              typeof $$v === "string" ? $$v.trim() : $$v
                            )
                          },
                          expression: "refundDetail.pay_amount"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    [
                      _c("label", [_vm._v("退款方式")]),
                      _vm._v(" "),
                      _c("el-input", {
                        attrs: { disabled: "" },
                        nativeOn: {
                          keyuo: function($event) {
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
                          value: _vm.refundDetail.refund_func,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.refundDetail,
                              "refund_func",
                              typeof $$v === "string" ? $$v.trim() : $$v
                            )
                          },
                          expression: "refundDetail.refund_func"
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
                      _c("el-input", {
                        attrs: { disabled: "" },
                        nativeOn: {
                          keyuo: function($event) {
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
                          value: _vm.refundDetail.create_at,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.refundDetail,
                              "create_at",
                              typeof $$v === "string" ? $$v.trim() : $$v
                            )
                          },
                          expression: "refundDetail.create_at"
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
                      _c("label", [_vm._v("超时时间")]),
                      _vm._v(" "),
                      _c("el-input", {
                        attrs: { disabled: "" },
                        nativeOn: {
                          keyuo: function($event) {
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
                          value: _vm.refundDetail.timeout_at,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.refundDetail,
                              "timeout_at",
                              typeof $$v === "string" ? $$v.trim() : $$v
                            )
                          },
                          expression: "refundDetail.timeout_at"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    [
                      _c("label", [_vm._v("单据类型")]),
                      _vm._v(" "),
                      _c("el-input", {
                        attrs: { disabled: "" },
                        nativeOn: {
                          keyuo: function($event) {
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
                          value: _vm.refundDetail.receipt_type,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.refundDetail,
                              "receipt_type",
                              typeof $$v === "string" ? $$v.trim() : $$v
                            )
                          },
                          expression: "refundDetail.receipt_type"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    [
                      _c("label", [_vm._v("淘宝售价")]),
                      _vm._v(" "),
                      _c("el-input", {
                        attrs: { disabled: "" },
                        nativeOn: {
                          keyuo: function($event) {
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
                          value: _vm.refundDetail.taobao_price,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.refundDetail,
                              "taobao_price",
                              typeof $$v === "string" ? $$v.trim() : $$v
                            )
                          },
                          expression: "refundDetail.taobao_price"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    [
                      _c("label", [_vm._v("数量")]),
                      _vm._v(" "),
                      _c("el-input", {
                        attrs: { disabled: "" },
                        nativeOn: {
                          keyuo: function($event) {
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
                          value: _vm.refundDetail.number,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.refundDetail,
                              "number",
                              typeof $$v === "string" ? $$v.trim() : $$v
                            )
                          },
                          expression: "refundDetail.number"
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
                      _c("label", [_vm._v("交易单号")]),
                      _vm._v(" "),
                      _c("el-input", {
                        attrs: { disabled: "" },
                        nativeOn: {
                          keyuo: function($event) {
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
                          value: _vm.refundDetail.trans_no,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.refundDetail,
                              "trans_no",
                              typeof $$v === "string" ? $$v.trim() : $$v
                            )
                          },
                          expression: "refundDetail.trans_no"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    [
                      _c("label", [_vm._v("明细单号")]),
                      _vm._v(" "),
                      _c("el-input", {
                        attrs: { disabled: "" },
                        nativeOn: {
                          keyuo: function($event) {
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
                          value: _vm.refundDetail.detail_no,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.refundDetail,
                              "detail_no",
                              typeof $$v === "string" ? $$v.trim() : $$v
                            )
                          },
                          expression: "refundDetail.detail_no"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    [
                      _c("label", [_vm._v("退款原因")]),
                      _vm._v(" "),
                      _c("el-input", {
                        attrs: { disabled: "" },
                        nativeOn: {
                          keyuo: function($event) {
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
                          value: _vm.refundDetail.refund_reason,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.refundDetail,
                              "refund_reason",
                              typeof $$v === "string" ? $$v.trim() : $$v
                            )
                          },
                          expression: "refundDetail.refund_reason"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    [
                      _c("label", [_vm._v("还款类型")]),
                      _vm._v(" "),
                      _c("el-input", {
                        attrs: { disabled: "" },
                        nativeOn: {
                          keyuo: function($event) {
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
                          value: _vm.refundDetail.refund_type,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.refundDetail,
                              "refund_type",
                              typeof $$v === "string" ? $$v.trim() : $$v
                            )
                          },
                          expression: "refundDetail.refund_type"
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
                      _c("label", [_vm._v("业务备注")]),
                      _vm._v(" "),
                      _c("el-input", {
                        attrs: { type: "textarea", disabled: "" },
                        nativeOn: {
                          keyuo: function($event) {
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
                          value: _vm.refundDetail.business_remark,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.refundDetail,
                              "business_remark",
                              typeof $$v === "string" ? $$v.trim() : $$v
                            )
                          },
                          expression: "refundDetail.business_remark"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    [
                      _c("label", [_vm._v("售后备注")]),
                      _vm._v(" "),
                      _c("el-input", {
                        attrs: { type: "textarea", disabled: "" },
                        nativeOn: {
                          keyuo: function($event) {
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
                          value: _vm.refundDetail.sale_remark,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.refundDetail,
                              "sale_remark",
                              typeof $$v === "string" ? $$v.trim() : $$v
                            )
                          },
                          expression: "refundDetail.sale_remark"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    [
                      _c("label", [_vm._v("财务备注")]),
                      _vm._v(" "),
                      _c("el-input", {
                        attrs: { type: "textarea", disabled: "" },
                        nativeOn: {
                          keyuo: function($event) {
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
                          value: _vm.refundDetail.financial_remark,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.refundDetail,
                              "financial_remark",
                              typeof $$v === "string" ? $$v.trim() : $$v
                            )
                          },
                          expression: "refundDetail.financial_remark"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    [
                      _c("label", [_vm._v("还款说明")]),
                      _vm._v(" "),
                      _c("el-input", {
                        attrs: { type: "textarea", disabled: "" },
                        nativeOn: {
                          keyuo: function($event) {
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
                          value: _vm.refundDetail.refund_remark,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.refundDetail,
                              "refund_remark",
                              typeof $$v === "string" ? $$v.trim() : $$v
                            )
                          },
                          expression: "refundDetail.refund_remark"
                        }
                      })
                    ],
                    1
                  )
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c("el-tab-pane", {
            attrs: { label: "操作日志", name: "refundRecord" }
          }),
          _vm._v(" "),
          _c("el-tab-pane", { attrs: { label: "图片信息", name: "imgInfo" } }, [
            _c(
              "div",
              { staticClass: "dialog-footer", staticStyle: { float: "right" } },
              [
                _c("el-button", { attrs: { type: "primary" } }, [
                  _vm._v("上传")
                ]),
                _vm._v(" "),
                _c("el-button", [_vm._v("删除")])
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("el-tab-pane", { attrs: { label: "多张图片", name: "images" } }, [
            _c(
              "div",
              { staticClass: "dialog-footer", staticStyle: { float: "right" } },
              [
                _c("el-button", { attrs: { type: "primary" } }, [
                  _vm._v("粘贴")
                ]),
                _vm._v(" "),
                _c("el-button", { attrs: { type: "primary" } }, [
                  _vm._v("上传")
                ])
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("el-tab-pane", {
            attrs: { label: "退款原因", name: "refundReason" }
          })
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
    require("vue-hot-reload-api")      .rerender("data-v-7cc79279", module.exports)
  }
}

/***/ })

});