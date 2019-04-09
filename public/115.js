webpackJsonp([115],{

/***/ 538:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(781)
/* template */
var __vue_template__ = __webpack_require__(782)
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
Component.options.__file = "resources/assets/js/views/basicInf/afterSType.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7e583baa", Component.options)
  } else {
    hotAPI.reload("data-v-7e583baa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 781:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    var _ref;

    return _ref = {
      newOpt: [{
        cnt: '新增',
        icon: 'bf-add',
        ent: this.addType
      }, {
        cnt: '修改',
        icon: 'bf-change',
        ent: this.test
      }, {
        cnt: '删除',
        icon: 'bf-del',
        ent: this.test
      }, {
        cnt: '刷新',
        icon: 'bf-refresh',
        ent: this.refresh
      }],
      activeName: '0',
      typeData: [],
      loading: true,
      checkboxInit: false,
      tableHead: [{
        label: '售后类型',
        prop: 'after_s_type',
        width: '200',
        type: 'text'
      }, {
        label: '是否启用',
        prop: 'status',
        width: '200',
        type: 'text'
      }],
      addMask: false,
      addTypeFormVal: {
        after_s_type: '',
        status: ''
      },
      addTypeFormRules: {
        after_s_type: [{ required: true, message: '售后类型必填', trigger: 'blur' }],
        status: [{ required: true, message: '是否启用必填', trigger: 'blur' }]
      },
      addTypeFormHead: [{
        label: '售后类型',
        prop: 'after_s_type',
        width: '200',
        type: 'text',
        editChgAble: true,
        addChgAble: true
      }, {
        label: '是否启用',
        prop: 'status',
        width: '200',
        type: 'checkbox',
        editChgAble: true,
        addChgAble: true
      }]
    }, _defineProperty(_ref, 'typeData', []), _defineProperty(_ref, 'addIDs', []), _defineProperty(_ref, 'typeRIndex', []), _ref;
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
    fetchData: function fetchData() {
      var _this = this;

      this.$fetch(this.urls.afterstype).then(function (res) {
        _this.typeData = res.data;
        _this.loading = false;
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
    },
    addType: function addType() {
      this.addMask = true;
    },
    addTypeConfirm: function addTypeConfirm() {
      var _this2 = this;

      var submit = {
        after_s_type: this.addTypeFormVal.after_s_type,
        status: this.addTypeFormVal.status
      };
      this.$post(this.urls.afterstype, submit).then(function () {
        _this2.addMask = false;
        _this2.refresh();
        _this2.$message({
          message: '添加成功',
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
    refresh: function refresh() {
      this.loading = true;
      this.fetchData();
    },
    addCancel: function addCancel() {
      this.addMask = false;
      this.$message({
        message: '取消添加',
        type: 'info'
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

/***/ 782:
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
        {
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
            { attrs: { label: "售后类型", name: "0" } },
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
                  attrs: { data: _vm.typeData, fit: "", height: "300" }
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
                        label: item.label,
                        align: "center",
                        width: item.width
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "default",
                          fn: function(scope) {
                            return [
                              item.type == "checkbox"
                                ? _c(
                                    "span",
                                    [
                                      _c("el-checkbox", {
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
                      ])
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
        "el-dialog",
        {
          staticClass: "dialog",
          attrs: { title: "新增", visible: _vm.addMask },
          on: {
            "update:visible": function($event) {
              _vm.addMask = $event
            }
          }
        },
        [
          _c(
            "div",
            { staticClass: "clearfix" },
            [
              _c(
                "el-form",
                {
                  staticClass: "afterSType hidePart",
                  attrs: {
                    model: _vm.addTypeFormVal,
                    rules: _vm.addTypeFormRules,
                    id: "form"
                  }
                },
                _vm._l(_vm.addTypeFormHead, function(item, index) {
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
                                model: {
                                  value: _vm.addTypeFormVal[item.prop],
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.addTypeFormVal,
                                      item.prop,
                                      typeof $$v === "string" ? $$v.trim() : $$v
                                    )
                                  },
                                  expression: "addTypeFormVal[item.prop]"
                                }
                              })
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      item.type == "checkbox"
                        ? _c(
                            "span",
                            [
                              _c("el-checkbox", {
                                model: {
                                  value: _vm.addTypeFormVal[item.prop],
                                  callback: function($$v) {
                                    _vm.$set(_vm.addTypeFormVal, item.prop, $$v)
                                  },
                                  expression: "addTypeFormVal[item.prop]"
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
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("div", [
            _c("label", [_vm._v(_vm._s(_vm.addTypeFormVal.after_s_type))]),
            _vm._v(" "),
            _c("label", [_vm._v(_vm._s(_vm.addTypeFormVal.status))])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticStyle: {} },
            [
              _c(
                "el-button",
                {
                  attrs: { type: "primary" },
                  on: { click: _vm.addTypeConfirm }
                },
                [_vm._v("确定")]
              ),
              _vm._v(" "),
              _c(
                "el-button",
                { attrs: { type: "default" }, on: { click: _vm.addCancel } },
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
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7e583baa", module.exports)
  }
}

/***/ })

});