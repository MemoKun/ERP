webpackJsonp([36],{

/***/ 1113:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      newOpt: [{
        cnt: "导出",
        icon: "bf-out",
        ent: this.downloadOrders
      }, {
        cnt: "下载",
        icon: "bf-dwn",
        ent: this.downloadOrders
      }],
      searchBox: {
        shop_id: "",
        order_workDate: "",
        buyer_nickname: "",
        orderShops: [{ label: "简艺家具旗舰店", value: 0 }, { label: "迪洛家具旗舰店", value: 1 }]
      },
      loading: true,
      downloadData: [],
      checkboxInit: false,
      orderListHead: [{
        label: "退款单号",
        width: "150",
        prop: "refund_num",
        type: "text"
      }, {
        label: "淘宝交易单号",
        width: "150",
        prop: "refund_num",
        type: "text"
      }, {
        label: "子订单号",
        width: "150",
        prop: "refund_num",
        type: "text"
      }, {
        label: "交易金额",
        width: "150",
        prop: "refund_num",
        type: "text"
      }, {
        label: "买家昵称",
        width: "150",
        prop: "refund_num",
        type: "text"
      }, {
        label: "退款金额",
        width: "150",
        prop: "refund_num",
        type: "text"
      }, {
        label: "退款原因",
        width: "150",
        prop: "refund_num",
        type: "text"
      }, {
        label: "退款说明",
        width: "150",
        prop: "refund_num",
        type: "text"
      }]
    };
  },

  methods: {
    test: function test() {
      console.log(1);
    },
    downloadOrders: function downloadOrders() {
      this.$message({
        message: "请先连接淘宝API",
        type: "success"
      });
    }
  },
  mounted: function mounted() {
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

/***/ 1114:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-tabs",
        [
          _c("el-tab-pane", { attrs: { label: "退款单下载", name: "0" } }, [
            _c("div", [
              _c("div", { staticClass: "searchBox" }, [
                _c(
                  "span",
                  [
                    _c("label", [_vm._v("店铺")]),
                    _vm._v(" "),
                    _c(
                      "el-select",
                      {
                        attrs: { clearable: "", placeholder: "请选择" },
                        model: {
                          value: _vm.searchBox.buyer_nickname,
                          callback: function($$v) {
                            _vm.$set(_vm.searchBox, "buyer_nickname", $$v)
                          },
                          expression: "searchBox.buyer_nickname"
                        }
                      },
                      _vm._l(_vm.searchBox.orderShops, function(item) {
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
                    _c("label", [_vm._v("业务日期")]),
                    _vm._v(" "),
                    _c("el-date-picker", {
                      attrs: {
                        type: "daterange",
                        "range-separator": "至",
                        "start-placeholder": "开始日期",
                        "end-placeholder": "结束日期"
                      },
                      model: {
                        value: _vm.searchBox.order_workDate,
                        callback: function($$v) {
                          _vm.$set(_vm.searchBox, "order_workDate", $$v)
                        },
                        expression: "searchBox.order_workDate"
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
                      model: {
                        value: _vm.searchBox.buyer_nickname,
                        callback: function($$v) {
                          _vm.$set(_vm.searchBox, "buyer_nickname", $$v)
                        },
                        expression: "searchBox.buyer_nickname"
                      }
                    })
                  ],
                  1
                )
              ])
            ])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-tabs",
        [
          _c(
            "el-tab-pane",
            { attrs: { label: "退款单下载", name: "0" } },
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
                  attrs: { data: _vm.downloadData, fit: "", height: "350" }
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
                  _vm._l(_vm.orderListHead, function(item) {
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
                                    return _vm.delSingle(scope.row, $event)
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
    require("vue-hot-reload-api")      .rerender("data-v-4619d63a", module.exports)
  }
}

/***/ }),

/***/ 966:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(12)
/* script */
var __vue_script__ = __webpack_require__(1113)
/* template */
var __vue_template__ = __webpack_require__(1114)
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
Component.options.__file = "resources/assets/js/views/dwnCenter/refundListDwn.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4619d63a", Component.options)
  } else {
    hotAPI.reload("data-v-4619d63a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});