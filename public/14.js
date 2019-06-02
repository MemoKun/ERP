webpackJsonp([14],{

/***/ 1003:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(12)
/* script */
var __vue_script__ = __webpack_require__(1162)
/* template */
var __vue_template__ = __webpack_require__(1163)
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
Component.options.__file = "resources/assets/js/views/system/userMag.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bdb8fbca", Component.options)
  } else {
    hotAPI.reload("data-v-bdb8fbca", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1162:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      newOpt: [{
        cnt: "新增",
        icon: "bf-add",
        ent: this.addNew
      }, {
        cnt: "修改",
        icon: "bf-change",
        ent: this.test
      }, {
        cnt: "删除",
        icon: "bf-del",
        ent: this.test
      }, {
        cnt: "刷新",
        icon: "bf-refresh",
        ent: this.refresh
      }],
      loading: false,
      checkboxInit: false,
      userListData: {},

      tableHead: [[
      /*{
        label: "用户图片",
        prop: "user_img",
        type: "img"
      },*/
      {
        label: "账号",
        prop: "username",
        type: "text"
      }, {
        label: "员工工号",
        prop: "work_id",
        type: "text"
      }, {
        label: "员工姓名",
        prop: "real_name",
        type: "text"
      }, {
        label: "员工手机",
        prop: "phone",
        type: "text"
      }, {
        label: "身份证号",
        prop: "id_no",
        type: "text"
      },
      /*{
        label: "入职时间",
        prop: "hiredate",
        type: "text"
      },
      {
        label: "离职时间",
        prop: "departure_time",
        type: "text"
      },*/
      {
        label: "家庭地址",
        prop: "home_address",
        type: "text"
      }, {
        label: "备注信息",
        prop: "remark",
        type: "text"
      }, {
        label: "创建日期",
        prop: "created_at",
        type: "text"
      }], [{
        label: "账号",
        prop: "username",
        type: "text"
      }, {
        label: "密码",
        prop: "password",
        type: "text"
      }, {
        label: "邮箱",
        prop: "email",
        type: "text"
      }, {
        label: "员工工号",
        prop: "work_id",
        type: "text"
      }, {
        label: "员工姓名",
        prop: "real_name",
        type: "text"
      }, {
        label: "员工手机",
        prop: "phone",
        type: "text"
      }, {
        label: "身份证号",
        prop: "id_no",
        type: "text"
      }, {
        label: "家庭地址",
        prop: "home_address",
        type: "text"
      }, {
        label: "备注信息",
        prop: "remark",
        type: "text"
      }]],
      /**新增 */
      addUserMask: false,
      addUserFormVal: {}
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
    fetchData: function fetchData() {
      var _this = this;

      this.loading = true;
      this.$fetch(this.urls.users).then(function (res) {
        _this.userListData = res.data;
        _this.loading = false;
      });
    },


    /**新增 */
    addNew: function addNew() {
      this.addUserMask = true;
    },
    addUserConfirm: function addUserConfirm() {
      var _this2 = this;

      this.$post(this.urls.users + "/create", this.addUserFormVal).then(function () {
        _this2.addUserMask = false;
        _this2.refresh();
        _this2.$message({
          message: "添加成功",
          type: "success"
        });
      });
    },
    resetAddUser: function resetAddUser() {
      this.addUserFormVal = {};
    },

    /**修改 */
    refresh: function refresh() {
      this.loading = true;
      this.fetchData();
    }
  },
  mounted: function mounted() {
    this.fetchData();
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

/***/ 1163:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
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
          attrs: {
            data: _vm.userListData,
            fit: "",
            width: "1000",
            height: "400"
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
          _vm._l(_vm.tableHead[0], function(item) {
            return _c("el-table-column", {
              key: item.prop,
              attrs: { label: item.label, align: "center", width: item.width },
              scopedSlots: _vm._u(
                [
                  {
                    key: "default",
                    fn: function(scope) {
                      return [
                        item.type === "checkbox"
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
                              _vm._v(
                                "\n          " +
                                  _vm._s(
                                    item.inProp
                                      ? scope.row[item.prop][item.inProp]
                                      : scope.row[item.prop]
                                  ) +
                                  "\n        "
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
          })
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "el-dialog",
        {
          attrs: { title: "新增用户", visible: _vm.addUserMask },
          on: {
            "update:visible": function($event) {
              _vm.addUserMask = $event
            }
          }
        },
        [
          _c(
            "div",
            [
              _c(
                "el-form",
                {
                  staticClass: "addChangeOrderForm",
                  attrs: { model: _vm.addUserFormVal, id: "form" }
                },
                _vm._l(_vm.tableHead[1], function(item, index) {
                  return _c(
                    "el-form-item",
                    {
                      key: index,
                      attrs: { label: item.label, prop: item.prop }
                    },
                    [
                      item.type == "text"
                        ? _c("span", [
                            item.inProp
                              ? _c(
                                  "span",
                                  [
                                    _c("el-input", {
                                      attrs: {
                                        placeholder: item.holder,
                                        disabled: item.addChgAble
                                      },
                                      model: {
                                        value:
                                          _vm.addUserFormVal[item.prop][
                                            item.inProp
                                          ],
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.addUserFormVal[item.prop],
                                            item.inProp,
                                            typeof $$v === "string"
                                              ? $$v.trim()
                                              : $$v
                                          )
                                        },
                                        expression:
                                          "addUserFormVal[item.prop][item.inProp]"
                                      }
                                    })
                                  ],
                                  1
                                )
                              : _c(
                                  "span",
                                  [
                                    _c("el-input", {
                                      attrs: {
                                        placeholder: item.holder,
                                        disabled: item.addChgAble
                                      },
                                      model: {
                                        value: _vm.addUserFormVal[item.prop],
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.addUserFormVal,
                                            item.prop,
                                            typeof $$v === "string"
                                              ? $$v.trim()
                                              : $$v
                                          )
                                        },
                                        expression: "addUserFormVal[item.prop]"
                                      }
                                    })
                                  ],
                                  1
                                )
                          ])
                        : item.type == "textarea"
                        ? _c(
                            "span",
                            [
                              _c("el-input", {
                                attrs: {
                                  type: "textarea",
                                  placehode: item.holder
                                },
                                model: {
                                  value: _vm.addUserFormVal[item.prop],
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.addUserFormVal,
                                      item.prop,
                                      typeof $$v === "string" ? $$v.trim() : $$v
                                    )
                                  },
                                  expression: "addUserFormVal[item.prop]"
                                }
                              })
                            ],
                            1
                          )
                        : item.type == "checkbox"
                        ? _c(
                            "span",
                            [
                              _c("el-checkbox", {
                                attrs: { disabled: item.chgAble },
                                model: {
                                  value: _vm.addUserFormVal[item.prop],
                                  callback: function($$v) {
                                    _vm.$set(_vm.addUserFormVal, item.prop, $$v)
                                  },
                                  expression: "addUserFormVal[item.prop]"
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
                                  value: _vm.addUserFormVal[item.prop],
                                  callback: function($$v) {
                                    _vm.$set(_vm.addUserFormVal, item.prop, $$v)
                                  },
                                  expression: "addUserFormVal[item.prop]"
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
                      on: { click: _vm.addUserConfirm }
                    },
                    [_vm._v("确定")]
                  ),
                  _vm._v(" "),
                  _c("el-button", { on: { click: _vm.resetAddUser } }, [
                    _vm._v("重置")
                  ])
                ],
                1
              )
            ]
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
    require("vue-hot-reload-api")      .rerender("data-v-bdb8fbca", module.exports)
  }
}

/***/ })

});