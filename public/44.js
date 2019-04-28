webpackJsonp([44],{

/***/ 549:
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
Component.options.__file = "resources/assets/js/views/reSupplied/reSReview.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1b8db0a6", Component.options)
  } else {
    hotAPI.reload("data-v-1b8db0a6", Component.options)
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        cnt: '驳回',
        icon: 'bf-reject',
        ent: this.test,
        nClick: false
      }, {
        cnt: '审核',
        icon: 'bf-audit',
        ent: this.test
      }, {
        cnt: '退审',
        icon: 'bf-auditfaild',
        ent: this.test
      }, {
        cnt: '导出',
        icon: 'bf-out',
        ent: this.test
      }, {
        cnt: '打印',
        icon: 'bf-printer',
        ent: this.test
      }, {
        cnt: '刷新',
        icon: 'bf-refresh',
        ent: this.test
      }],
      checkboxInit: false,
      currentPage: true,
      filterBox: false,
      activeName: '0',
      bottomActiveName: '0',
      searchBox: {
        buyNick: '',
        shopTitle: ''
      },
      options: __WEBPACK_IMPORTED_MODULE_0_element_china_area_data__["regionDataPlus"],
      //审核信息
      reviewData: [],
      reviewHead: [{
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
        label: '包件类型',
        width: '140',
        prop: 'type',
        type: 'text'
      }, {
        label: '补件类别',
        width: '140',
        prop: 'resupply_type',
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
        prop: 'resupply_responsibility',
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
        //inProp: 'name',
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
        prop: 'fee_type',
        type: 'text'
      }, {
        label: '供应商',
        width: '130',
        prop: 'supplier',
        type: 'text'
      }, {
        label: '配送方式',
        width: '160',
        prop: 'distribution_method',
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
        prop: 'refund_method',
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
        prop: 'province',
        type: 'text'
      }, {
        label: '市',
        width: '120',
        prop: 'city',
        type: 'text'
      }, {
        label: '区',
        width: '120',
        prop: 'district',
        type: 'text'
      }, {
        label: '创建人',
        width: '140',
        prop: 'creator',
        type: 'text'
      }, {
        label: '创建时间',
        width: '140',
        prop: 'create_time',
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
      }, {
        label: '补件申请的标记名称',
        width: '200',
        prop: 'application_mark_name',
        type: 'text'
      }],

      //补件信息
      resupplyData: [],
      resupplyHead: [
      //补件产品,0
      [{
        label: '规格图片',
        width: '120',
        prop: "img_url",
        type: 'img'
      }, {
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
        label: '实际售价',
        width: '120',
        prop: 'real_price',
        type: 'number'
      }, {
        label: '备注',
        width: '200',
        prop: 'remark',
        type: 'text'
      }],
      //问题产品，1
      [{
        label: '规格图片',
        width: '120',
        prop: "img_url",
        type: 'img'
      }, {
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
      //图片信息，2
      [],
      //驳回原因，3
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
      //补件进度，5
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
      }],
      //补件责任方，6
      []]
    };
  },

  methods: {
    test: function test() {
      console.log(1);
    },

    /*展开 */
    toggleShow: function toggleShow() {
      this.filterBox = !this.filterBox;
    },

    /*审核信息tab */
    handleTabsClick: function handleTabsClick() {},

    /*补件信息tab */
    bottomTabsClick: function bottomTabsClick() {}
  },
  mounted: function mounted() {
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
                        return _vm.getData($event)
                      }
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
              _c(
                "span",
                [
                  _c("label", [_vm._v("买家昵称")]),
                  _vm._v(" "),
                  _c("el-input", {
                    staticClass: "half",
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
                        return _vm.getData($event)
                      }
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
              _c(
                "span",
                [
                  _c("label", [_vm._v("买家姓名")]),
                  _vm._v(" "),
                  _c("el-input", {
                    staticClass: "half",
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
                        return _vm.getData($event)
                      }
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
                      _c("el-button", [_vm._v("重置")]),
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
                  nativeOn: {
                    keyup: function($event) {
                      if (
                        !$event.type.indexOf("key") &&
                        _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                      ) {
                        return null
                      }
                      return _vm.getData($event)
                    }
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
            _c(
              "span",
              [
                _c("label", [_vm._v("结算时间")]),
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
            { attrs: { label: "补大件", name: "0" } },
            [
              _c(
                "el-table",
                { attrs: { data: _vm.reviewData } },
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
                  _vm._l(_vm.reviewHead, function(item) {
                    return _c("el-table-column", {
                      key: item.label,
                      attrs: {
                        label: item.label,
                        width: item.width,
                        align: "center"
                      }
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
            { attrs: { label: "补零件", name: "1" } },
            [
              _c(
                "el-table",
                { attrs: { data: _vm.reviewData } },
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
                  _vm._l(_vm.reviewHead, function(item) {
                    return _c("el-table-column", {
                      key: item.label,
                      attrs: {
                        label: item.label,
                        width: item.width,
                        align: "center"
                      }
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
            { attrs: { label: "补金额", name: "2" } },
            [
              _c(
                "el-table",
                { attrs: { data: _vm.reviewData } },
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
                  _vm._l(_vm.reviewHead, function(item) {
                    return _c("el-table-column", {
                      key: item.label,
                      attrs: {
                        label: item.label,
                        width: item.width,
                        align: "center"
                      }
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
            { attrs: { label: "已审核", name: "3" } },
            [
              _c(
                "el-table",
                { attrs: { data: _vm.reviewData } },
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
                  _vm._l(_vm.reviewHead, function(item) {
                    return _c("el-table-column", {
                      key: item.label,
                      attrs: {
                        label: item.label,
                        width: item.width,
                        align: "center"
                      }
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
            { attrs: { label: "已结算", name: "4" } },
            [
              _c(
                "el-table",
                { attrs: { data: _vm.reviewData } },
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
                  _vm._l(_vm.reviewHead, function(item) {
                    return _c("el-table-column", {
                      key: item.label,
                      attrs: {
                        label: item.label,
                        width: item.width,
                        align: "center"
                      }
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
                { attrs: { data: _vm.resupplyData } },
                _vm._l(_vm.resupplyHead[this.bottomActiveName], function(item) {
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
            { attrs: { label: "问题产品", name: "1" } },
            [
              _c(
                "el-table",
                { attrs: { data: _vm.resupplyData } },
                _vm._l(_vm.resupplyHead[this.bottomActiveName], function(item) {
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
          _c("el-tab-pane", { attrs: { label: "图片信息", name: "2" } }, [
            _vm._v("图片信息\n        "),
            _c(
              "div",
              { staticStyle: { "text-align": "right" } },
              [
                _c("el-button", [_vm._v("删除")]),
                _vm._v(" "),
                _c("el-button", [_vm._v("上传")])
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c(
            "el-tab-pane",
            { attrs: { label: "驳回原因", name: "3" } },
            [
              _c(
                "el-table",
                { attrs: { data: _vm.resupplyData } },
                _vm._l(_vm.resupplyHead[this.bottomActiveName], function(item) {
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
            { attrs: { label: "操作记录", name: "4" } },
            [
              _c(
                "el-table",
                { attrs: { data: _vm.resupplyData } },
                _vm._l(_vm.resupplyHead[this.bottomActiveName], function(item) {
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
            { attrs: { label: "补件进度", name: "5" } },
            [
              _c(
                "el-table",
                { attrs: { data: _vm.resupplyData } },
                _vm._l(_vm.resupplyHead[this.bottomActiveName], function(item) {
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
          ),
          _vm._v(" "),
          _c("el-tab-pane", { attrs: { label: "补件责任方", name: "6" } })
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
    require("vue-hot-reload-api")      .rerender("data-v-1b8db0a6", module.exports)
  }
}

/***/ })

});