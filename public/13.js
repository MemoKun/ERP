webpackJsonp([13],{

/***/ 1002:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1158)
}
var normalizeComponent = __webpack_require__(12)
/* script */
var __vue_script__ = __webpack_require__(1160)
/* template */
var __vue_template__ = __webpack_require__(1161)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4e8131e0"
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
Component.options.__file = "resources/assets/js/views/system/roleMag.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4e8131e0", Component.options)
  } else {
    hotAPI.reload("data-v-4e8131e0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1158:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1159);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(21)("24c76404", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4e8131e0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./roleMag.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4e8131e0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./roleMag.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1159:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "\n.newInput[data-v-4e8131e0] {\n  width: 500px;\n}\n", ""]);

// exports


/***/ }),

/***/ 1160:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      newOpt: [{
        cnt: "新增",
        icon: "bf-add",
        ent: this.addRole
      }, {
        cnt: "修改",
        icon: "bf-change",
        ent: this.updateRole
      }, {
        cnt: "删除",
        icon: "bf-del",
        ent: this.deleteRole
      }, {
        cnt: "刷新",
        icon: "bf-refresh",
        ent: this.refresh
      }],
      /*获取数据*/
      rolesList: [],
      seriesVal: [],
      checkboxInit: false,
      tableHead: [[{
        label: "角色名称",
        width: "120",
        prop: "name",
        holder: "请输入名称",
        type: "text"
      }, {
        label: "用户组",
        width: "120",
        prop: "roleGroup",
        inProp: "name",
        holder: "请输入角色组",
        type: "text"
      }, {
        label: "描述",
        width: "250",
        prop: "description",
        holder: "请输入角色描述",
        type: "text"
      }, {
        label: "备注",
        width: "250",
        prop: "remark",
        holder: "请输入备注"
      }, {
        label: "状态",
        width: "150",
        prop: "status",
        holder: "请选择状态",
        type: "checkbox"
      }], [{
        label: "角色名称",
        prop: "name",
        type: "text"
      }, {
        label: "用户组",
        prop: "role_group_id",
        type: "select"
      }, {
        label: "描述",
        prop: "description",
        type: "text"
      }, {
        label: "备注",
        prop: "remark",
        type: "text"
      }, {
        label: "状态",
        prop: "status",
        type: "checkbox"
      }, {
        label: "配置权限",
        type: "transfer"
      }]],
      supplierRow: {},
      seriesRow: {},
      loading: true,
      //添加
      addRoleMask: false,
      updateRoleMask: false,
      addData: {
        name: "",
        role_group_id: "",
        description: "",
        remark: "",
        permission: []
      },
      updateData: {},
      groupOptions: [],
      permissionList: []
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
    //获取数据
    fetchData: function fetchData() {
      var _this = this;

      this.$fetch(this.urls.roles, {
        include: "roleGroup"
      }).then(function (res) {
        console.log(res.data);
        _this.loading = false;
        _this.rolesList = res.data;
        var pg = res.meta.pagination;
        _this.$store.dispatch("currentPage", pg.current_page);
        _this.$store.commit("PER_PAGE", pg.per_page);
        _this.$store.commit("PAGE_TOTAL", pg.total);
        _this.delBatchUrl = _this.urls.roledetails;
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
      //    获取分组
      this.$fetch(this.urls.rolegroup).then(function (res) {
        console.log(res);
        _this.groupOptions = res.data;
      }, function (err) {});
      //    获取权限列表
      this.$fetch(this.urls.permissions).then(function (res) {
        console.log(res.data);
        _this.permissionList = res.data;
      }, function (err) {});
    },

    /**
     * ********************************************  新  增  角  色  ***************************************************
     * 
     **/
    addRole: function addRole() {
      console.log("addRole");
      this.addRoleMask = true;
    },
    addRoleConfirm: function addRoleConfirm() {
      var _this2 = this;

      this.$post(this.urls.roles, this.addData).then(function (res) {
        _this2.$message({
          message: "添加角色成功",
          type: "success"
        });
        _this2.addRoleMask = false;
        _this2.refresh();
      });
    },

    /**
     * ********************************************  修  改  角  色  ***************************************************
     * 
     **/
    updateRole: function updateRole() {
      console.log("change");
      console.log(this.multipleSelection);
      this.updateRoleMask = true;
      if (this.multipleSelection.length === 0) {
        this.$message({
          message: "请至少选择一条",
          type: "warning"
        });
      } else {
        this.updateData = this.multipleSelection[0];
      }
    },
    updateRoleConfirm: function updateRoleConfirm() {
      var _this3 = this;

      var submitData = this.updateData;
      this.$patch(this.urls.roles + "/" + submitData.id, submitData).then(function (res) {
        console.log(res);
        _this3.$message({
          message: "修改角色成功",
          type: "success"
        });
        _this3.refresh();
        _this3.updateRoleMask = false;
      });
    },
    handleSelectionChange: function handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    deleteRole: function deleteRole() {
      console.log("delete");
    },


    /**
     * ********************************************  刷  新  ***************************************************
     * 
     **/
    refresh: function refresh() {
      this.loading = true;
      this.fetchData();
    },

    /*分页*/
    handlePagChg: function handlePagChg(page) {
      var _this4 = this;

      this.$fetch(this.urls.roledetails + "?page=" + page, {
        include: "group"
      }).then(function (res) {
        _this4.supplierVal = res.data;
      });
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

/***/ 1161:
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
          attrs: { data: _vm.rolesList, fit: "", width: "1000", height: "400" },
          on: { "selection-change": _vm.handleSelectionChange }
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
                          : _c("span", [
                              _vm._v(
                                "\n                    " +
                                  _vm._s(
                                    item.inProp
                                      ? scope.row[item.prop][item.inProp]
                                      : scope.row[item.prop]
                                  ) +
                                  "\n                "
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
          attrs: { title: "新增角色", visible: _vm.addRoleMask },
          on: {
            "update:visible": function($event) {
              _vm.addRoleMask = $event
            }
          }
        },
        [
          _c("label", [_vm._v(_vm._s(this.addData))]),
          _vm._v(" "),
          _c(
            "el-form",
            {
              staticClass: "addRoleForm",
              attrs: { model: _vm.addData, id: "addRoleForm" }
            },
            _vm._l(_vm.tableHead[1], function(item, index) {
              return _c(
                "el-form-item",
                { key: index, attrs: { label: item.label, prop: item.prop } },
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
                                    value: _vm.addData[item.prop][item.inProp],
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.addData[item.prop],
                                        item.inProp,
                                        typeof $$v === "string"
                                          ? $$v.trim()
                                          : $$v
                                      )
                                    },
                                    expression:
                                      "addData[item.prop][item.inProp]"
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
                                    value: _vm.addData[item.prop],
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.addData,
                                        item.prop,
                                        typeof $$v === "string"
                                          ? $$v.trim()
                                          : $$v
                                      )
                                    },
                                    expression: "addData[item.prop]"
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
                            attrs: { type: "textarea", placehode: item.holder },
                            model: {
                              value: _vm.addData[item.prop],
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.addData,
                                  item.prop,
                                  typeof $$v === "string" ? $$v.trim() : $$v
                                )
                              },
                              expression: "addData[item.prop]"
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
                              attrs: { placeholder: item.holder },
                              model: {
                                value: _vm.addData[item.prop],
                                callback: function($$v) {
                                  _vm.$set(_vm.addData, item.prop, $$v)
                                },
                                expression: "addData[item.prop]"
                              }
                            },
                            _vm._l(_vm.groupOptions, function(list) {
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
                    : item.type == "checkbox"
                    ? _c(
                        "span",
                        [
                          _c("el-checkbox", {
                            attrs: { disabled: item.chgAble },
                            model: {
                              value: _vm.addData[item.prop],
                              callback: function($$v) {
                                _vm.$set(_vm.addData, item.prop, $$v)
                              },
                              expression: "addData[item.prop]"
                            }
                          })
                        ],
                        1
                      )
                    : item.type == "transfer"
                    ? _c(
                        "span",
                        [
                          _c("el-transfer", {
                            attrs: {
                              data: _vm.permissionList,
                              titles: ["未选", "已选"]
                            },
                            model: {
                              value: _vm.addData.permission,
                              callback: function($$v) {
                                _vm.$set(_vm.addData, "permission", $$v)
                              },
                              expression: "addData.permission"
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
                      on: { click: _vm.addRoleConfirm }
                    },
                    [_vm._v("提交")]
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
          attrs: { title: "修改信息", visible: _vm.updateRoleMask },
          on: {
            "update:visible": function($event) {
              _vm.updateRoleMask = $event
            }
          }
        },
        [
          _c("label", [_vm._v(_vm._s(this.updateData))]),
          _vm._v(" "),
          _c(
            "el-form",
            {
              staticClass: "addRoleForm",
              attrs: { model: _vm.updateData, id: "addRoleForm" }
            },
            _vm._l(_vm.tableHead[1], function(item, index) {
              return _c(
                "el-form-item",
                { key: index, attrs: { label: item.label, prop: item.prop } },
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
                                      _vm.updateData[item.prop][item.inProp],
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.updateData[item.prop],
                                        item.inProp,
                                        typeof $$v === "string"
                                          ? $$v.trim()
                                          : $$v
                                      )
                                    },
                                    expression:
                                      "updateData[item.prop][item.inProp]"
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
                                    value: _vm.updateData[item.prop],
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.updateData,
                                        item.prop,
                                        typeof $$v === "string"
                                          ? $$v.trim()
                                          : $$v
                                      )
                                    },
                                    expression: "updateData[item.prop]"
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
                            attrs: { type: "textarea", placehode: item.holder },
                            model: {
                              value: _vm.updateData[item.prop],
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.updateData,
                                  item.prop,
                                  typeof $$v === "string" ? $$v.trim() : $$v
                                )
                              },
                              expression: "updateData[item.prop]"
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
                              attrs: { placeholder: item.holder },
                              model: {
                                value: _vm.updateData[item.prop],
                                callback: function($$v) {
                                  _vm.$set(_vm.updateData, item.prop, $$v)
                                },
                                expression: "updateData[item.prop]"
                              }
                            },
                            _vm._l(_vm.groupOptions, function(list) {
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
                    : item.type == "checkbox"
                    ? _c(
                        "span",
                        [
                          _c("el-checkbox", {
                            attrs: { disabled: item.chgAble },
                            model: {
                              value: _vm.updateData[item.prop],
                              callback: function($$v) {
                                _vm.$set(_vm.updateData, item.prop, $$v)
                              },
                              expression: "updateData[item.prop]"
                            }
                          })
                        ],
                        1
                      )
                    : item.type == "transfer"
                    ? _c(
                        "span",
                        [
                          _c("el-transfer", {
                            attrs: {
                              data: _vm.permissionList,
                              titles: ["未选", "已选"]
                            },
                            model: {
                              value: _vm.updateData.permission,
                              callback: function($$v) {
                                _vm.$set(_vm.updateData, "permission", $$v)
                              },
                              expression: "updateData.permission"
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
                      on: { click: _vm.updateRoleConfirm }
                    },
                    [_vm._v("提交")]
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
    require("vue-hot-reload-api")      .rerender("data-v-4e8131e0", module.exports)
  }
}

/***/ })

});