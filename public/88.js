webpackJsonp([88],{

/***/ 516:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(685)
}
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(687)
/* template */
var __vue_template__ = __webpack_require__(688)
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

/***/ 685:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(686);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("24c76404", content, false, {});
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

/***/ 686:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n.newInput[data-v-4e8131e0]{\n    width: 500px;\n}\n", ""]);

// exports


/***/ }),

/***/ 687:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            newOpt: [{
                cnt: '新增',
                icon: 'bf-add',
                ent: this.addRole
            }, {
                cnt: '修改',
                icon: 'bf-change',
                ent: this.changeRole
            }, {
                cnt: '删除',
                icon: 'bf-del',
                ent: this.deleteRole
            }, {
                cnt: '刷新',
                icon: 'bf-refresh',
                ent: this.refreshRole
            }],
            /*获取数据*/
            rolesList: [],
            seriesVal: [],
            checkboxInit: false,
            tableHead: [[{
                label: '名称',
                width: '120',
                prop: "name",
                holder: '请输入名称',
                type: 'text'
                // beAble: true
            }, {
                label: '组',
                width: '120',
                prop: "roleGroup",
                inProp: "name",
                holder: '请输入角色组',
                type: 'text'
            }, {
                label: '描述',
                width: '250',
                prop: "description",
                holder: '请输入角色描述',
                type: 'text'
            }, {
                label: '备注',
                width: '250',
                prop: "remark",
                holder: '请输入备注'
            }, {
                label: '状态',
                width: '150',
                prop: "status",
                holder: '请选择状态',
                type: 'checkbox'
            }],
            //待更新
            [{
                label: '供应商名称',
                width: '130',
                prop: "suppliers",
                inProp: 'name',
                holder: '请选择供应商名称',
                type: 'select'
            }, {
                label: '系列代码',
                width: '130',
                prop: "code",
                holder: '请输入系列代码',
                type: 'text'
            }, {
                label: '系列名称',
                width: '130',
                prop: "name",
                holder: '请输入系列名称',
                type: 'text'
            }, {
                label: '系列描述',
                width: '150',
                prop: "description",
                holder: '请输入系列描述',
                type: 'textarea'
            }, {
                label: '备注',
                width: '130',
                prop: "remark",
                holder: '请输入名称',
                type: 'textarea'
            }, {
                label: '状态',
                width: '90',
                prop: "status",
                holder: '请选择状态',
                type: 'checkbox'
            }]],
            supplierRow: {},
            seriesRow: {},
            loading: true,
            //添加
            addRoleMask: false,
            changeRoleMask: false,
            newInfo: {
                username: '',
                role_group_id: '',
                description: '',
                remark: '',
                permission: []
            },
            nowInfo: {
                username: '',
                role_group_id: '',
                description: '',
                remark: '',
                permission: []
            },
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
                include: 'roleGroup'
            }).then(function (res) {
                console.log(res.data);
                _this.loading = false;
                _this.rolesList = res.data;
                var pg = res.meta.pagination;
                _this.$store.dispatch('currentPage', pg.current_page);
                _this.$store.commit('PER_PAGE', pg.per_page);
                _this.$store.commit('PAGE_TOTAL', pg.total);
                _this.delBatchUrl = _this.urls.roledetails;
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
        submitNewOne: function submitNewOne() {
            console.log(this.newInfo);
            this.$post(this.urls.roles, this.newInfo).then(function (res) {
                console.log(res);
            });
        },
        updateOne: function updateOne() {
            this.$patch(this.urls.roles + '/' + this.nowInfo.id, this.nowInfo).then(function (res) {
                console.log(res);
            });
        },
        handleSelectionChange: function handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        addRole: function addRole() {
            console.log("addRole");
            this.addRoleMask = true;
        },
        changeRole: function changeRole() {
            console.log("change");
            console.log(this.multipleSelection);
            this.changeRoleMask = true;
            if (this.multipleSelection.length === 0) {
                this.$message({
                    message: '请至少选择一条',
                    type: 'warning'
                });
            } else {
                this.multipleSelection[0].username = this.multipleSelection[0].name;
                this.nowInfo = this.multipleSelection[0];
            }
        },
        deleteRole: function deleteRole() {
            console.log("delete");
        },
        refreshRole: function refreshRole() {
            this.loading = true;
            this.fetchData();
        },

        /*分页*/
        handlePagChg: function handlePagChg(page) {
            var _this2 = this;

            this.$fetch(this.urls.roledetails + '?page=' + page, {
                include: 'group'
            }).then(function (res) {
                _this2.supplierVal = res.data;
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

/***/ 688:
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
                                "\n                        " +
                                  _vm._s(
                                    item.inProp
                                      ? scope.row[item.prop][item.inProp]
                                      : scope.row[item.prop]
                                  ) +
                                  "\n                    "
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
          attrs: { title: "新增用户", visible: _vm.addRoleMask },
          on: {
            "update:visible": function($event) {
              _vm.addRoleMask = $event
            }
          }
        },
        [
          _c(
            "el-row",
            [
              _c("el-col", { attrs: { span: 8 } }, [_vm._v("角色名")]),
              _vm._v(" "),
              _c(
                "el-col",
                { attrs: { span: 16 } },
                [
                  _c("el-input", {
                    attrs: { placeholder: "请输入内容" },
                    model: {
                      value: _vm.newInfo.username,
                      callback: function($$v) {
                        _vm.$set(_vm.newInfo, "username", $$v)
                      },
                      expression: "newInfo.username"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-row",
            [
              _c("el-col", { attrs: { span: 8 } }, [_vm._v("描述")]),
              _vm._v(" "),
              _c(
                "el-col",
                { attrs: { span: 16 } },
                [
                  _c("el-input", {
                    attrs: { placeholder: "请输入内容" },
                    model: {
                      value: _vm.newInfo.description,
                      callback: function($$v) {
                        _vm.$set(_vm.newInfo, "description", $$v)
                      },
                      expression: "newInfo.description"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-row",
            [
              _c("el-col", { attrs: { span: 8 } }, [_vm._v("备注")]),
              _vm._v(" "),
              _c(
                "el-col",
                { attrs: { span: 16 } },
                [
                  _c("el-input", {
                    attrs: { placeholder: "请输入内容" },
                    model: {
                      value: _vm.newInfo.remark,
                      callback: function($$v) {
                        _vm.$set(_vm.newInfo, "remark", $$v)
                      },
                      expression: "newInfo.remark"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-row",
            [
              _c("el-col", { attrs: { span: 8 } }, [_vm._v("选择分组")]),
              _vm._v(" "),
              _c(
                "el-col",
                { attrs: { span: 16 } },
                [
                  _c(
                    "el-select",
                    {
                      attrs: { placeholder: "请选择" },
                      model: {
                        value: _vm.newInfo.role_group_id,
                        callback: function($$v) {
                          _vm.$set(_vm.newInfo, "role_group_id", $$v)
                        },
                        expression: "newInfo.role_group_id"
                      }
                    },
                    _vm._l(_vm.groupOptions, function(item) {
                      return _c("el-option", {
                        key: item.id,
                        attrs: { label: item.name, value: item.id }
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
          _c("el-row", [_vm._v("\n            配置权限\n        ")]),
          _vm._v(" "),
          _c(
            "el-row",
            [
              _c(
                "el-col",
                { attrs: { span: "24" } },
                [
                  _c("el-transfer", {
                    attrs: {
                      data: _vm.permissionList,
                      titles: ["未选", "已选"]
                    },
                    model: {
                      value: _vm.newInfo.permission,
                      callback: function($$v) {
                        _vm.$set(_vm.newInfo, "permission", $$v)
                      },
                      expression: "newInfo.permission"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("br"),
          _c("br"),
          _vm._v(" "),
          _c(
            "el-button",
            { attrs: { type: "primary" }, on: { click: _vm.submitNewOne } },
            [_vm._v("提交")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-dialog",
        {
          attrs: { title: "修改信息", visible: _vm.changeRoleMask },
          on: {
            "update:visible": function($event) {
              _vm.changeRoleMask = $event
            }
          }
        },
        [
          _c(
            "el-row",
            [
              _c("el-col", { attrs: { span: 8 } }, [_vm._v("角色名")]),
              _vm._v(" "),
              _c(
                "el-col",
                { attrs: { span: 16 } },
                [
                  _c("el-input", {
                    attrs: { placeholder: "请输入内容" },
                    model: {
                      value: _vm.nowInfo.username,
                      callback: function($$v) {
                        _vm.$set(_vm.nowInfo, "username", $$v)
                      },
                      expression: "nowInfo.username"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-row",
            [
              _c("el-col", { attrs: { span: 8 } }, [_vm._v("描述")]),
              _vm._v(" "),
              _c(
                "el-col",
                { attrs: { span: 16 } },
                [
                  _c("el-input", {
                    attrs: { placeholder: "请输入内容" },
                    model: {
                      value: _vm.nowInfo.description,
                      callback: function($$v) {
                        _vm.$set(_vm.nowInfo, "description", $$v)
                      },
                      expression: "nowInfo.description"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-row",
            [
              _c("el-col", { attrs: { span: 8 } }, [_vm._v("备注")]),
              _vm._v(" "),
              _c(
                "el-col",
                { attrs: { span: 16 } },
                [
                  _c("el-input", {
                    attrs: { placeholder: "请输入内容" },
                    model: {
                      value: _vm.nowInfo.remark,
                      callback: function($$v) {
                        _vm.$set(_vm.nowInfo, "remark", $$v)
                      },
                      expression: "nowInfo.remark"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-row",
            [
              _c("el-col", { attrs: { span: 8 } }, [_vm._v("选择分组")]),
              _vm._v(" "),
              _c(
                "el-col",
                { attrs: { span: 16 } },
                [
                  _c(
                    "el-select",
                    {
                      attrs: { placeholder: "请选择" },
                      model: {
                        value: _vm.nowInfo.role_group_id,
                        callback: function($$v) {
                          _vm.$set(_vm.nowInfo, "role_group_id", $$v)
                        },
                        expression: "nowInfo.role_group_id"
                      }
                    },
                    _vm._l(_vm.groupOptions, function(item) {
                      return _c("el-option", {
                        key: item.id,
                        attrs: { label: item.name, value: item.id }
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
          _c("el-row", [_vm._v("\n            配置权限\n        ")]),
          _vm._v(" "),
          _c(
            "el-row",
            [
              _c(
                "el-col",
                { attrs: { span: "24" } },
                [
                  _c("el-transfer", {
                    attrs: {
                      data: _vm.permissionList,
                      titles: ["未选", "已选"]
                    },
                    model: {
                      value: _vm.nowInfo.permission,
                      callback: function($$v) {
                        _vm.$set(_vm.nowInfo, "permission", $$v)
                      },
                      expression: "nowInfo.permission"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("br"),
          _c("br"),
          _vm._v(" "),
          _c(
            "el-button",
            { attrs: { type: "primary" }, on: { click: _vm.updateOne } },
            [_vm._v("提交")]
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