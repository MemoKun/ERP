webpackJsonp([50],{

/***/ 469:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(624)
/* template */
var __vue_template__ = __webpack_require__(625)
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
Component.options.__file = "resources/assets/js/views/purchase/purchaseFabric.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-367c08f1", Component.options)
  } else {
    hotAPI.reload("data-v-367c08f1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 624:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            newOpt: [{
                cnt: '新增',
                icon: 'bf-add',
                ent: this.addPurchaseFabric,
                nClick: false
            }, {
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
                cnt: '打印',
                icon: 'bf-printer',
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
                fab_no: '',
                model: '',
                order_shop: ''
            },
            topActiveName: 'notStorage',
            btmActiveName: 'fabricDetail',
            notStorage: {
                table: [{
                    label: '系统单号',
                    width: '200',
                    prop: 'order_no',
                    type: 'text'
                }, {
                    label: '收件方',
                    width: '120',
                    prop: 'order_user',
                    type: 'text'
                }, {
                    label: '创建人',
                    width: '120',
                    prop: 'user',
                    type: 'text'
                }, {
                    label: '订购日期',
                    width: '180',
                    prop: 'order_at',
                    type: 'text'
                }, {
                    label: '备注',
                    width: '180',
                    prop: 'remark',
                    type: 'text'
                }],
                loading: true,
                data: []
            },
            partialStorage: {
                table: [{
                    label: '系统单号',
                    width: '200',
                    prop: 'order_no',
                    type: 'text'
                }, {
                    label: '收件方',
                    width: '120',
                    prop: 'order_user',
                    type: 'text'
                }, {
                    label: '创建人',
                    width: '120',
                    prop: 'user',
                    type: 'text'
                }, {
                    label: '订购日期',
                    width: '180',
                    prop: 'order_at',
                    type: 'text'
                }, {
                    label: '备注',
                    width: '180',
                    prop: 'remark',
                    type: 'text'
                }],
                loading: true,
                data: []
            },
            inStorage: {
                table: [{
                    label: '系统单号',
                    width: '200',
                    prop: 'order_no',
                    type: 'text'
                }, {
                    label: '收件方',
                    width: '120',
                    prop: 'order_user',
                    type: 'text'
                }, {
                    label: '创建人',
                    width: '120',
                    prop: 'user',
                    type: 'text'
                }, {
                    label: '订购日期',
                    width: '180',
                    prop: 'order_at',
                    type: 'text'
                }, {
                    label: '备注',
                    width: '180',
                    prop: 'remark',
                    type: 'text'
                }],
                loading: true,
                data: []
            },
            fabricDetail: {
                table: [{
                    label: '型号',
                    width: '200',
                    prop: 'model',
                    type: 'text'
                }, {
                    label: '面料图片',
                    width: '120',
                    prop: 'fabric_img',
                    type: 'img'
                }, {
                    label: '门幅(宽)',
                    width: '120',
                    prop: 'width',
                    type: 'text'
                }, {
                    label: '数量(米)',
                    width: '120',
                    prop: 'length',
                    type: 'text'
                }, {
                    label: '单价',
                    width: '120',
                    prop: 'price',
                    type: 'text'
                }, {
                    label: '合计',
                    width: '120',
                    prop: 'sum',
                    type: 'text'
                }, {
                    label: '散剪费',
                    width: '120',
                    prop: 'cut_cost',
                    type: 'text'
                }, {
                    label: '快递费',
                    width: '120',
                    prop: 'courier',
                    type: 'text'
                }, {
                    label: '总计',
                    width: '120',
                    prop: 'total',
                    type: 'text'
                }, {
                    label: '到货时间',
                    width: '120',
                    prop: 'arrival_time',
                    type: 'text'
                }, {
                    label: '供应商',
                    width: '120',
                    prop: 'supplier',
                    type: 'text'
                }, {
                    label: '余额',
                    width: '120',
                    prop: 'balance',
                    type: 'text'
                }],
                loading: true,
                data: []
            },
            storageDetail: {
                table: [{
                    label: '型号',
                    width: '200',
                    prop: 'model',
                    type: 'text'
                }, {
                    label: '面料图片',
                    width: '120',
                    prop: 'fabric_img',
                    type: 'img'
                }, {
                    label: '门幅(宽)',
                    width: '120',
                    prop: 'width',
                    type: 'text'
                }, {
                    label: '数量(米)',
                    width: '120',
                    prop: 'length',
                    type: 'text'
                }, {
                    label: '单价',
                    width: '120',
                    prop: 'price',
                    type: 'text'
                }, {
                    label: '合计',
                    width: '120',
                    prop: 'sum',
                    type: 'text'
                }, {
                    label: '散剪费',
                    width: '120',
                    prop: 'cut_cost',
                    type: 'text'
                }, {
                    label: '快递费',
                    width: '120',
                    prop: 'courier',
                    type: 'text'
                }, {
                    label: '总计',
                    width: '120',
                    prop: 'total',
                    type: 'text'
                }, {
                    label: '到货时间',
                    width: '120',
                    prop: 'arrival_time',
                    type: 'text'
                }, {
                    label: '供应商',
                    width: '120',
                    prop: 'supplier',
                    type: 'text'
                }, {
                    label: '余额',
                    width: '120',
                    prop: 'balance',
                    type: 'text'
                }],
                loading: true,
                data: []
            },
            addPFDialog: {
                show: false,
                data: {
                    receiver: '',
                    remark: '',
                    data: [],
                    tableHead: [{
                        label: '型号',
                        width: '200',
                        prop: 'model',
                        type: 'text'
                    }, {
                        label: '面料图片',
                        width: '120',
                        prop: 'fabric_img',
                        type: 'img'
                    }, {
                        label: '门幅(宽)',
                        width: '120',
                        prop: 'width',
                        type: 'text'
                    }, {
                        label: '数量(米)',
                        width: '120',
                        prop: 'length',
                        type: 'text'
                    }, {
                        label: '单价',
                        width: '120',
                        prop: 'price',
                        type: 'text'
                    }, {
                        label: '合计',
                        width: '120',
                        prop: 'sum',
                        type: 'text'
                    }, {
                        label: '散剪费',
                        width: '120',
                        prop: 'cut_cost',
                        type: 'text'
                    }, {
                        label: '快递费',
                        width: '120',
                        prop: 'courier',
                        type: 'text'
                    }, {
                        label: '总计',
                        width: '120',
                        prop: 'total',
                        type: 'text'
                    }, {
                        label: '到货时间',
                        width: '120',
                        prop: 'arrival_time',
                        type: 'text'
                    }, {
                        label: '供应商',
                        width: '120',
                        prop: 'supplier',
                        type: 'text'
                    }, {
                        label: '余额',
                        width: '120',
                        prop: 'balance',
                        type: 'text'
                    }]
                }
            },
            addUseDialog: {
                show: false,
                data: {
                    useNumber: '',
                    useDescription: ''
                }
            },
            changeUseDialog: {
                show: false,
                data: {
                    useNumber: '',
                    useDescription: ''
                }
            }
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
        updateOpts: function updateOpts() {
            this.$store.state.opt.opts = this.newOpt;
            this.$store.commit('change', this.newOpt);
        },
        test: function test() {
            console.log(1);
        },
        clickTopTabs: function clickTopTabs() {
            var _this = this;

            switch (this.topActiveName) {
                case 'notStorage':
                    this.notStorage.loading = true;
                    this.newOpt[0].nClick = false;
                    this.newOpt[1].nClick = false;
                    this.newOpt[2].nClick = false;
                    this.$fetch(this.urls.purchases, {
                        purchase_status: 'new',
                        include: 'user,purchaseLists.purchaseDetails.productComponent,purchaseLists.combination'
                    }).then(function (res) {
                        _this.notStorage.loading = false;
                        _this.notStorage.data = res.data;
                        _this.checkboxInit = false;
                    }, function (err) {
                        if (err.response) {
                            var arr = err.response.data.errors;
                            var arr1 = [];
                            for (var i in arr) {
                                arr1.push(arr[i]);
                            }
                            var str = arr1.join(',');
                            _this.$message.error({
                                message: str
                            });
                        }
                    });
                    break;
                case 'partialStorage':
                    this.partialStorage.loading = true;

                    this.newOpt[0].nClick = true;
                    this.newOpt[1].nClick = false;
                    this.newOpt[2].nClick = true;

                    this.partialStorage.loading = false;
                    break;
                case 'inStorage':
                    this.inStorage.loading = true;

                    this.newOpt[0].nClick = true;
                    this.newOpt[1].nClick = true;
                    this.newOpt[2].nClick = true;

                    this.inStorage.loading = false;

                    break;
            }
        },
        clickBtmTabs: function clickBtmTabs() {
            switch (this.btmActiveName) {
                case 'fabricDetail':
                    this.fabricDetail.loading = true;

                    this.fabricDetail.loading = false;
                    break;
                case 'storageDetail':

                    this.storageDetail.loading = true;

                    this.storageDetail.loading = false;

                    break;
            }
        },
        addPurchaseFabric: function addPurchaseFabric() {
            if (this.newOpt[0].nClick) {
                return;
            }
            this.addPFDialog.show = true;
        },
        confirmAdd: function confirmAdd() {},
        cancelAdd: function cancelAdd() {},
        addUse: function addUse() {
            this.addUseDialog.show = true;
        },
        changeUse: function changeUse() {
            this.addUseDialog.show = true;
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
            this.addPFDialog.data.data.splice(index, 1);
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
    mounted: function mounted() {
        this.clickTopTabs();
        this.clickBtmTabs();
        this.updateOpts();
    }
});

/***/ }),

/***/ 625:
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
              _c("label", [_vm._v("面料单号")]),
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
                  value: _vm.searchBox.fab_no,
                  callback: function($$v) {
                    _vm.$set(
                      _vm.searchBox,
                      "fab_no",
                      typeof $$v === "string" ? $$v.trim() : $$v
                    )
                  },
                  expression: "searchBox.fab_no"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "span",
            [
              _c("label", [_vm._v("型号")]),
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
                  value: _vm.searchBox.model,
                  callback: function($$v) {
                    _vm.$set(
                      _vm.searchBox,
                      "model",
                      typeof $$v === "string" ? $$v.trim() : $$v
                    )
                  },
                  expression: "searchBox.model"
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
                  attrs: { clearable: "", placeholder: "请选择", value: "" },
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
                    value: _vm.searchBox.order_shop,
                    callback: function($$v) {
                      _vm.$set(_vm.searchBox, "order_shop", $$v)
                    },
                    expression: "searchBox.order_shop"
                  }
                },
                _vm._l(_vm.resData.suppliers, function(item) {
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
              _c("label", [_vm._v("订购日期")]),
              _vm._v(" "),
              _c("el-date-picker", {
                attrs: {
                  type: "daterange",
                  "range-separator": "至",
                  "start-placeholder": "开始日期",
                  "end-placeholder": "结束日期"
                },
                model: {
                  value: _vm.searchBox.order_promiseDate,
                  callback: function($$v) {
                    _vm.$set(_vm.searchBox, "order_promiseDate", $$v)
                  },
                  expression: "searchBox.order_promiseDate"
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
            { attrs: { label: "未入库", name: "notStorage" } },
            [
              _c(
                "el-table",
                {
                  directives: [
                    {
                      name: "loading",
                      rawName: "v-loading",
                      value: _vm.notStorage.loading,
                      expression: "notStorage.loading"
                    }
                  ],
                  attrs: { data: _vm.notStorage.data, fit: "", height: "300" }
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
                  _vm._l(_vm.notStorage.table, function(item) {
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
            { attrs: { label: "部分入库", name: "partialStorage" } },
            [
              _c(
                "el-table",
                {
                  directives: [
                    {
                      name: "loading",
                      rawName: "v-loading",
                      value: _vm.partialStorage.loading,
                      expression: "partialStorage.loading"
                    }
                  ],
                  attrs: {
                    data: _vm.partialStorage.data,
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
                  _vm._l(_vm.partialStorage.table, function(item) {
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
            { attrs: { label: "已入库", name: "inStorage" } },
            [
              _c(
                "el-table",
                {
                  directives: [
                    {
                      name: "loading",
                      rawName: "v-loading",
                      value: _vm.inStorage.loading,
                      expression: "inStorage.loading"
                    }
                  ],
                  attrs: { data: _vm.inStorage.data, fit: "", height: "300" }
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
                  _vm._l(_vm.inStorage.table, function(item) {
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
      _c("Pagination", { attrs: { "page-url": _vm.urls["purchaseFabric"] } }),
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
            { attrs: { label: "面料明细", name: "fabricDetail" } },
            [
              _c(
                "el-table",
                {
                  directives: [
                    {
                      name: "loading",
                      rawName: "v-loading",
                      value: _vm.fabricDetail.loading,
                      expression: "fabricDetail.loading"
                    }
                  ],
                  attrs: { data: _vm.fabricDetail.data, fit: "", height: "300" }
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
                  _vm._l(_vm.fabricDetail.table, function(item) {
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
            { attrs: { label: "入库明细", name: "storageDetail" } },
            [
              _c(
                "el-table",
                {
                  directives: [
                    {
                      name: "loading",
                      rawName: "v-loading",
                      value: _vm.storageDetail.loading,
                      expression: "storageDetail.loading"
                    }
                  ],
                  attrs: {
                    data: _vm.storageDetail.data,
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
                  _vm._l(_vm.storageDetail.table, function(item) {
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
      _c("br"),
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
                { attrs: { type: "primary" }, on: { click: _vm.addUse } },
                [_vm._v("新增用途")]
              ),
              _vm._v(" "),
              _c("el-button", { on: { click: _vm.changeUse } }, [
                _vm._v("修改用途")
              ])
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "el-dialog",
        {
          class: { "more-forms": _vm.moreForms },
          attrs: { title: "新增采购面料", visible: _vm.addPFDialog.show },
          on: {
            "update:visible": function($event) {
              return _vm.$set(_vm.addPFDialog, "show", $event)
            }
          }
        },
        [
          _c("div", { staticClass: "searchBox cancelPur" }, [
            _c(
              "span",
              [
                _c("label", [_vm._v("收件方")]),
                _vm._v(" "),
                _c("el-input", {
                  model: {
                    value: _vm.addPFDialog.data.receiver,
                    callback: function($$v) {
                      _vm.$set(_vm.addPFDialog.data, "receiver", $$v)
                    },
                    expression: "addPFDialog.data.receiver"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "span",
              [
                _c("label", [_vm._v("采购单号")]),
                _vm._v(" "),
                _c("el-input", {
                  model: {
                    value: _vm.addPFDialog.data.remark,
                    callback: function($$v) {
                      _vm.$set(_vm.addPFDialog.data, "remark", $$v)
                    },
                    expression: "addPFDialog.data.remark"
                  }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("el-button", { attrs: { type: "text" } }, [_vm._v("面料明细")]),
          _vm._v(" "),
          _c(
            "el-table",
            {
              attrs: {
                data: _vm.addPFDialog.data.data,
                fit: "",
                height: "350",
                "row-class-name": _vm.cancelRowCName
              },
              on: { "cell-click": _vm.addCellClick }
            },
            [
              _vm._l(_vm.addPFDialog.data.tableHead, function(item, index) {
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
                            item.prop == "purchase_fabric"
                              ? _c("span", [
                                  _vm.addCurRow == "index" + scope.$index
                                    ? _c(
                                        "span",
                                        [
                                          _c("el-input", {
                                            on: {
                                              input: function($event) {
                                                return _vm.purQChg(scope.row)
                                              }
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
                                              expression: "scope.row[item.prop]"
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    : _c("span", [
                                        _vm._v(
                                          "\n                            " +
                                            _vm._s(scope.row[item.prop]) +
                                            "\n                        "
                                        )
                                      ])
                                ])
                              : _c("span", [
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
                                                attrs: {
                                                  src: scope.row[item.prop]
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("img", {
                                                attrs: {
                                                  slot: "reference",
                                                  src: scope.row[item.prop]
                                                },
                                                slot: "reference"
                                              })
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                    : item.type == "select"
                                    ? _c(
                                        "span",
                                        _vm._l(
                                          _vm.resData[item.stateVal],
                                          function(list, index) {
                                            return _c("span", { key: index }, [
                                              list.id == scope.row[item.prop]
                                                ? _c("span", [
                                                    _vm._v(
                                                      "\n                                       " +
                                                        _vm._s(list.name) +
                                                        "\n                                       "
                                                    )
                                                  ])
                                                : _vm._e()
                                            ])
                                          }
                                        ),
                                        0
                                      )
                                    : _c("span", [
                                        _vm._v(
                                          "\n                          " +
                                            _vm._s(scope.row[item.prop]) +
                                            "\n                     "
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
                                return _vm.delAddPur(scope.$index)
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
            {
              staticClass: "dialog-footer",
              attrs: { slot: "footer" },
              slot: "footer"
            },
            [
              _c(
                "el-button",
                { attrs: { type: "primary" }, on: { click: _vm.confirmAdd } },
                [_vm._v("确定")]
              ),
              _vm._v(" "),
              _c("el-button", { on: { click: _vm.cancelAdd } }, [
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
          attrs: { title: "修改采购面料", visible: _vm.addPFDialog.show },
          on: {
            "update:visible": function($event) {
              return _vm.$set(_vm.addPFDialog, "show", $event)
            }
          }
        },
        [
          _c("div", { staticClass: "searchBox cancelPur" }, [
            _c(
              "span",
              [
                _c("label", [_vm._v("收件方")]),
                _vm._v(" "),
                _c("el-input", {
                  model: {
                    value: _vm.addPFDialog.data.receiver,
                    callback: function($$v) {
                      _vm.$set(_vm.addPFDialog.data, "receiver", $$v)
                    },
                    expression: "addPFDialog.data.receiver"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "span",
              [
                _c("label", [_vm._v("采购单号")]),
                _vm._v(" "),
                _c("el-input", {
                  model: {
                    value: _vm.addPFDialog.data.remark,
                    callback: function($$v) {
                      _vm.$set(_vm.addPFDialog.data, "remark", $$v)
                    },
                    expression: "addPFDialog.data.remark"
                  }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("el-button", { attrs: { type: "text" } }, [_vm._v("面料明细")]),
          _vm._v(" "),
          _c(
            "el-table",
            {
              attrs: {
                data: _vm.addPFDialog.data.data,
                fit: "",
                height: "350",
                "row-class-name": _vm.cancelRowCName
              },
              on: { "cell-click": _vm.addCellClick }
            },
            [
              _vm._l(_vm.addPFDialog.data.tableHead, function(item, index) {
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
                            item.prop == "purchase_fabric"
                              ? _c("span", [
                                  _vm.addCurRow == "index" + scope.$index
                                    ? _c(
                                        "span",
                                        [
                                          _c("el-input", {
                                            on: {
                                              input: function($event) {
                                                return _vm.purQChg(scope.row)
                                              }
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
                                              expression: "scope.row[item.prop]"
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    : _c("span", [
                                        _vm._v(
                                          "\n                            " +
                                            _vm._s(scope.row[item.prop]) +
                                            "\n                        "
                                        )
                                      ])
                                ])
                              : _c("span", [
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
                                                attrs: {
                                                  src: scope.row[item.prop]
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("img", {
                                                attrs: {
                                                  slot: "reference",
                                                  src: scope.row[item.prop]
                                                },
                                                slot: "reference"
                                              })
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                    : item.type == "select"
                                    ? _c(
                                        "span",
                                        _vm._l(
                                          _vm.resData[item.stateVal],
                                          function(list, index) {
                                            return _c("span", { key: index }, [
                                              list.id == scope.row[item.prop]
                                                ? _c("span", [
                                                    _vm._v(
                                                      "\n                                       " +
                                                        _vm._s(list.name) +
                                                        "\n                                       "
                                                    )
                                                  ])
                                                : _vm._e()
                                            ])
                                          }
                                        ),
                                        0
                                      )
                                    : _c("span", [
                                        _vm._v(
                                          "\n                          " +
                                            _vm._s(scope.row[item.prop]) +
                                            "\n                     "
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
                                return _vm.delAddPur(scope.$index)
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
            {
              staticClass: "dialog-footer",
              attrs: { slot: "footer" },
              slot: "footer"
            },
            [
              _c(
                "el-button",
                { attrs: { type: "primary" }, on: { click: _vm.confirmAdd } },
                [_vm._v("确定")]
              ),
              _vm._v(" "),
              _c("el-button", { on: { click: _vm.cancelAdd } }, [
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
          attrs: { title: "新增面料用途", visible: _vm.addUseDialog.show },
          on: {
            "update:visible": function($event) {
              return _vm.$set(_vm.addUseDialog, "show", $event)
            }
          }
        },
        [
          _c("div", { staticClass: "searchBox cancelPur" }, [
            _c(
              "span",
              [
                _c("label", [_vm._v("使用数量")]),
                _vm._v(" "),
                _c("el-input", {
                  model: {
                    value: _vm.addUseDialog.data.useNumber,
                    callback: function($$v) {
                      _vm.$set(_vm.addUseDialog.data, "useNumber", $$v)
                    },
                    expression: "addUseDialog.data.useNumber"
                  }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "searchBox cancelPur" }, [
            _c(
              "span",
              [
                _c("label", [_vm._v("用途描述")]),
                _vm._v(" "),
                _c("el-input", {
                  attrs: { type: "textarea" },
                  model: {
                    value: _vm.addUseDialog.data.useDescription,
                    callback: function($$v) {
                      _vm.$set(_vm.addUseDialog.data, "useDescription", $$v)
                    },
                    expression: "addUseDialog.data.useDescription"
                  }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "dialog-footer",
              attrs: { slot: "footer" },
              slot: "footer"
            },
            [
              _c("el-button", { attrs: { type: "primary" } }, [_vm._v("确定")]),
              _vm._v(" "),
              _c("el-button", [_vm._v("取消")])
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "el-dialog",
        {
          attrs: { title: "修改面料用途", visible: _vm.changeUseDialog.show },
          on: {
            "update:visible": function($event) {
              return _vm.$set(_vm.changeUseDialog, "show", $event)
            }
          }
        },
        [
          _c("div", { staticClass: "searchBox cancelPur" }, [
            _c(
              "span",
              [
                _c("label", [_vm._v("使用数量")]),
                _vm._v(" "),
                _c("el-input", {
                  model: {
                    value: _vm.changeUseDialog.data.useNumber,
                    callback: function($$v) {
                      _vm.$set(_vm.changeUseDialog.data, "useNumber", $$v)
                    },
                    expression: "changeUseDialog.data.useNumber"
                  }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "searchBox cancelPur" }, [
            _c(
              "span",
              [
                _c("label", [_vm._v("用途描述")]),
                _vm._v(" "),
                _c("el-input", {
                  attrs: { type: "textarea" },
                  model: {
                    value: _vm.changeUseDialog.data.useDescription,
                    callback: function($$v) {
                      _vm.$set(_vm.changeUseDialog.data, "useDescription", $$v)
                    },
                    expression: "changeUseDialog.data.useDescription"
                  }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "dialog-footer",
              attrs: { slot: "footer" },
              slot: "footer"
            },
            [
              _c("el-button", { attrs: { type: "primary" } }, [_vm._v("确定")]),
              _vm._v(" "),
              _c("el-button", [_vm._v("取消")])
            ],
            1
          )
        ]
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
    require("vue-hot-reload-api")      .rerender("data-v-367c08f1", module.exports)
  }
}

/***/ })

});