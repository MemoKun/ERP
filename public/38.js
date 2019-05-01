webpackJsonp([38],{

/***/ 474:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(634)
/* template */
var __vue_template__ = __webpack_require__(635)
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
Component.options.__file = "resources/assets/js/views/refund/refundCenter.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-57f99ac1", Component.options)
  } else {
    hotAPI.reload("data-v-57f99ac1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 634:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            newOpt: [{
                cnt: '导出',
                icon: 'bf-out',
                ent: this.test,
                nClick: false
            }, {
                cnt: '还原',
                icon: 'bf-reduce',
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
                refund_time: '',
                financial_audit_time: '',
                not_show_invalid: ''
            },
            // topActiveName: 'pending',
            btmActiveName: 'operatorLog',

            refundCenter: {
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
                    label: '淘宝单号',
                    width: '120',
                    prop: 'taobao_no',
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
                    label: '买家姓名',
                    width: '120',
                    prop: 'buyer_name',
                    type: 'text'
                }, {
                    label: '卖家昵称',
                    width: '120',
                    prop: 'seller_nick',
                    type: 'text'
                }, {
                    label: '标记名称',
                    width: '120',
                    prop: 'mark_name',
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
                    label: '责任人',
                    width: '180',
                    prop: 'principal',
                    type: 'text'
                }, {
                    label: '承担人',
                    width: '180',
                    prop: 'bearers',
                    type: 'text'
                }, {
                    label: '责任金额',
                    width: '180',
                    prop: 'principal_amount',
                    type: 'text'
                }, {
                    label: '运费',
                    width: '180',
                    prop: 'freight',
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
                    label: '是否启用',
                    width: '100',
                    prop: 'is_use',
                    type: 'checkbox'
                }],
                loading: true,
                data: []
            },

            refundResponsible: {
                table: [{
                    label: '责任方',
                    width: '100',
                    prop: 'responsible',
                    type: 'text'
                }, {
                    label: '责任方姓名',
                    width: '100',
                    prop: 'responsible_name',
                    type: 'text'
                }, {
                    label: '责任金额',
                    width: '100',
                    prop: 'responsible_amount',
                    type: 'text'
                }],
                loading: true,
                data: []
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

            this.refundCenter.loading = true;
            this.newOpt[0].nClick = false;
            this.newOpt[1].nClick = true;
            this.newOpt[2].nClick = false;

            this.refundCenter.loading = false;
        },
        clickBtmTabs: function clickBtmTabs() {
            switch (this.btmActiveName) {
                case 'operatorLog':

                    break;
                case 'imgInfo':

                    break;
                case 'refundResponsible':
                    this.refundResponsible.loading = true;

                    this.refundResponsible.loading = false;
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

/***/ 635:
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
          ),
          _vm._v(" "),
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
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "searchBox" }, [
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
          ),
          _vm._v(" "),
          _c(
            "span",
            [
              _c("label", [_vm._v("财审时间")]),
              _vm._v(" "),
              _c("el-date-picker", {
                attrs: {
                  type: "daterange",
                  "range-separator": "至",
                  "start-placeholder": "开始日期",
                  "end-placeholder": "结束日期"
                },
                model: {
                  value: _vm.searchBox.financial_audit_time,
                  callback: function($$v) {
                    _vm.$set(_vm.searchBox, "financial_audit_time", $$v)
                  },
                  expression: "searchBox.financial_audit_time"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "span",
            [
              _c(
                "el-checkbox",
                {
                  model: {
                    value: _vm.searchBox.not_show_invalid,
                    callback: function($$v) {
                      _vm.$set(_vm.searchBox, "not_show_invalid", $$v)
                    },
                    expression: "searchBox.not_show_invalid"
                  }
                },
                [_vm._v("不显示作废")]
              )
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "el-table",
        {
          directives: [
            {
              name: "loading",
              rawName: "v-loading",
              value: _vm.refundCenter.loading,
              expression: "refundCenter.loading"
            }
          ],
          attrs: { data: _vm.refundCenter.data, fit: "", height: "300" }
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
          _vm._l(_vm.refundCenter.table, function(item) {
            return _c("el-table-column", {
              key: item.prop,
              attrs: { label: item.label, align: "center", width: item.width },
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
                                : typeof scope.row[item.prop] == "object" &&
                                  item.nmProp
                                ? _c("span", [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(
                                          scope.row[item.prop][item.nmProp]
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
                                      _vm.$set(scope.row, item.prop, $$v)
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
                                            ? scope.row[item.prop][item.inProp]
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
      ),
      _vm._v(" "),
      _c("Pagination", { attrs: { "page-url": _vm.urls["refundCenter"] } }),
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
          _c("el-tab-pane", {
            attrs: { label: "操作日志", name: "operatorLog" }
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
          _c(
            "el-tab-pane",
            { attrs: { label: "退款责任方", name: "refundResponsible" } },
            [
              _c(
                "el-table",
                {
                  directives: [
                    {
                      name: "loading",
                      rawName: "v-loading",
                      value: _vm.refundResponsible.loading,
                      expression: "refundResponsible.loading"
                    }
                  ],
                  attrs: {
                    data: _vm.refundResponsible.data,
                    fit: "",
                    height: "300"
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
                  _vm._l(_vm.refundResponsible.table, function(item) {
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
    require("vue-hot-reload-api")      .rerender("data-v-57f99ac1", module.exports)
  }
}

/***/ })

});