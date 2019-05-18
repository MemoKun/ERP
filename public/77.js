webpackJsonp([77],{

/***/ 506:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(698)
/* template */
var __vue_template__ = __webpack_require__(699)
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
Component.options.__file = "resources/assets/js/views/basicInf/relateLogistics.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-791ce131", Component.options)
  } else {
    hotAPI.reload("data-v-791ce131", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 698:
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      newOpt: [{
        cnt: '新增',
        icon: 'bf-add',
        ent: this.addUser
      }, {
        cnt: '修改',
        icon: 'bf-change',
        ent: this.updateUser
      }, {
        cnt: '删除',
        icon: 'bf-del',
        ent: this.delUser
      }, {
        cnt: '刷新',
        icon: 'bf-refresh',
        ent: this.refresh
      }],
      //分页
      pagination: {
        current_page: 1,
        per_page: 0,
        page_total: 0
      },
      /*用户信息 */
      UserData: [],
      UserHead: [{
        label: '用户账号',
        width: '160',
        prop: 'username',
        type: 'text'
      }, {
        label: '名字',
        width: '160',
        prop: 'name',
        type: 'text'
      }, {
        label: '手机',
        width: '160',
        prop: 'phone',
        type: 'text'
      }],
      /*物流公司 */
      logisticsData: [],
      logisticsHead: [{
        label: '物流代码',
        width: '160',
        prop: 'code',
        type: 'text'
      }, {
        label: '物流名称',
        width: '160',
        prop: 'logistics_name',
        type: 'text'
      }],
      checkboxInit: false,
      options: __WEBPACK_IMPORTED_MODULE_0_element_china_area_data__["regionDataPlus"],
      moreForms: false,
      logicRow: {},
      //新增
      addMask: false,
      addUserForm: {
        username: '',
        name: '',
        phone: ''
      },
      addLogisticsForm: [{
        code: '',
        logistics_name: ''
      }],
      addUserHead: [{
        label: '用户账号',
        prop: 'username',
        holder: '请输入用户账号',
        type: 'text'
      }, {
        label: '名字',
        prop: 'name',
        holder: '请输入名字',
        type: 'text'
      }, {
        label: '手机',
        prop: 'phone',
        holder: '请输入手机',
        type: 'text'
      }],
      addLogisticsHead: [{
        label: '物流代码',
        prop: 'code',
        holder: '请输入物流代码',
        type: 'text'
      }, {
        label: '物流名称',
        prop: 'logistics_name',
        holder: '物流名称',
        type: 'text'
      }],
      addUserRules: {
        username: [{ required: true, message: '请输入用户', trigger: 'blur' }]
      },
      addLogisticsIndex: '',
      //修改
      updateLogisticsIndex: '',
      updateMask: false,
      updateUserForm: {},
      updateLogisticsForm: [],
      //删除
      showDel: false,
      delUrl: '',
      delId: '',
      delBatchUrl: '',
      delIds: [],
      currentId: '',
      //刷新
      loading: true
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

    //获取数据
    fetchData: function fetchData() {
      var _this = this;

      this.$fetch(this.urls.relateLogistics, {
        include: 'relateLogisticsCompany.relateLogistics'
      }).then(function (res) {
        _this.loading = false;
        _this.UserData = res.data;
        _this.logisticsData = res.data[0] ? res.data[0]['relateLogisticsCompany'].data : [];
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
    logicRowClick: function logicRowClick(row) {
      this.logisticsData = row['relateLogisticsCompany'].data;
      this.logicRow = row;
    },

    //新增
    addUser: function addUser() {
      this.addMask = true;
      this.addLogisticsIndex = 'index0';
      Object.assign(this.addUserForm, this.$options.data().addUserForm);
      Object.assign(this.addLogisticsForm, this.$options.data().addLogisticsForm);
    },
    addConfirm: function addConfirm() {
      var _this2 = this;

      var data = {
        username: this.addUserForm.username,
        name: this.addUserForm.name,
        phone: this.addUserForm.phone,
        relate_logistics_company: this.addLogisticsForm
      };
      this.$post(this.urls.relateLogistics, data).then(function () {
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
    addReset: function addReset() {
      Object.assign(this.addUserForm, this.$options.data().addUserForm);
      Object.assign(this.addLogisticsForm, this.$options.data().addLogisticsForm);
    },
    addCancel: function addCancel() {
      this.addMask = false;
      this.$message({
        message: '取消添加',
        type: 'info'
      });
    },
    addLogisticsCName: function addLogisticsCName(_ref) {
      var row = _ref.row,
          rowIndex = _ref.rowIndex;

      row.index = rowIndex;
    },
    addLogisticsRClick: function addLogisticsRClick(row) {
      this.addLogisticsIndex = 'index' + row.index;
    },
    addLogisticsRow: function addLogisticsRow() {
      var proKey = {
        code: '',
        logistics_name: '',
        status: true
      };
      if (this.addMask) {
        this.addLogisticsForm.push(proKey);
        this.addLogisticsIndex = 'index' + (this.addLogisticsForm.length - 1);
      } else {
        this.updateLogisticsForm.push(proKey);
        this.updateLogisticsIndex = 'index' + (this.updateLogisticsForm.length - 1);
      }
    },
    addLogisticsDel: function addLogisticsDel(index) {
      this.addLogisticsForm.splice(index, 1);
      this.$message({
        message: '删除物流公司成功',
        type: 'success'
      });
    },

    //修改
    updateUser: function updateUser() {
      var _this3 = this;

      this.updateMask = true;
      var id = void 0;
      id = this.currentId ? this.currentId : this.logicRow.id;
      this.$fetch(this.urls.relateLogistics + '/' + id, {
        include: 'relateLogisticsCompany.relateLogistics'
      }).then(function (res) {
        _this3.updateUserForm = {
          username: res.username,
          name: res.name,
          phone: res.phone,
          status: res.status
        };
        _this3.updateLogisticsForm = res['relateLogisticsCompany']['data'];
      }, function (err) {});
    },
    updateConfirm: function updateConfirm() {
      var _this4 = this;

      var id = void 0;
      id = this.currentId ? this.currentId : this.logicRow.id;
      var data = {
        username: this.updateUserForm.username,
        name: this.updateUserForm.name,
        phone: this.updateUserForm.phone,
        relate_logistics_company: this.updateLogisticsForm
      };
      this.$patch(this.urls.relateLogistics + '/' + id, data).then(function () {
        _this4.updateMask = false;
        _this4.refresh();
        _this4.$message({
          message: '修改成功',
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
          _this4.$message.error(str);
        }
      });
    },
    updateCancel: function updateCancel() {
      this.updateMask = false;
      this.$message({
        message: '取消修改',
        type: 'info'
      });
    },
    updateLogisticsDel: function updateLogisticsDel(row, index) {
      var _this5 = this;

      if (row.id) {
        this.$del(this.urls.relateLogisticsCompany + '/' + row.id).then(function () {
          _this5.updateLogisticsForm.splice(index, 1);
          _this5.$message({
            message: '删除城市信息成功',
            type: 'success'
          });
        });
      } else {
        this.updateLogisticsForm.splice(index, 1);
        this.$message({
          message: '删除城市信息成功',
          type: 'success'
        });
      }
    },

    //按钮批量删除
    handleSelectionChange: function handleSelectionChange(val) {
      var delArr = [];
      val.forEach(function (selectedItem) {
        delArr.push(selectedItem.id);
      });
      this.ids = delArr.join(',');
      this.currentId = val.length > 0 ? val[val.length - 1].id : '';
    },
    delUser: function delUser() {
      var _this6 = this;

      if (this.ids.length === 0) {
        this.$message({
          message: '没有选中数据',
          type: 'warning'
        });
      } else {
        this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(function () {
          _this6.$del(_this6.urls.relateLogistics, { ids: _this6.ids }).then(function () {
            _this6.$message({
              message: '删除成功',
              type: 'success'
            });
            _this6.refresh();
          }, function (err) {
            if (err.response) {
              var arr = err.response.data.errors;
              var arr1 = [];
              for (var i in arr) {
                arr1.push(arr[i]);
              }
              var str = arr1.join(',');
              _this6.$message.error(str);
            }
          });
        }).catch(function () {
          _this6.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    },
    delSingle: function delSingle(row, e) {
      this.showDel = true;
      $('.el-popper').css({ left: e.x - 100 + 'px', top: e.y - 125 + 'px' });
      this.delId = row.id;
      this.delUrl = row['relateLogisticsCompany'] ? this.urls.relateLogistics : this.urls.relateLogisticsCompany;
    },
    cancelD: function cancelD() {
      this.showDel = false;
      this.$message({
        message: '取消删除',
        type: 'info'
      });
    },
    confirmD: function confirmD(url, id) {
      var _this7 = this;

      this.$del(url + '/' + id).then(function () {
        _this7.$message({
          message: '删除成功',
          type: 'success'
        });
        _this7.showDel = false;
        _this7.refresh();
      }, function (err) {
        if (err.response) {
          _this7.showDel = false;
          var arr = err.response.data.errors;
          var arr1 = [];
          for (var i in arr) {
            arr1.push(arr[i]);
          }
          var str = arr1.join(',');
          _this7.$message.error(str);
        }
      });
    },

    //刷新
    refresh: function refresh() {
      this.loading = true;
      this.fetchData();
    },

    //分页
    handlePagChg: function handlePagChg(page) {
      var _this8 = this;

      this.$fetch(this.urls.relateLogistics + '?page=' + page, {
        include: 'relateLogisticsCompany.relateLogistics'
      }).then(function (res) {
        _this8.logisticsData = res.data;
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

/***/ 699:
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
          _c(
            "el-tab-pane",
            { attrs: { label: "用户信息", name: "0" } },
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
                  attrs: { data: _vm.UserData, fit: "" },
                  on: {
                    "row-click": _vm.logicRowClick,
                    "selection-change": _vm.handleSelectionChange
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
                  _vm._l(_vm.UserHead, function(item) {
                    return _c("el-table-column", {
                      key: item.prop,
                      attrs: {
                        label: item.label,
                        width: item.width,
                        align: "center"
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "default",
                          fn: function(scope) {
                            return [
                              _c("span", [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(
                                      item.inProp
                                        ? scope.row[item.prop][item.inProp]
                                        : scope.row[item.prop]
                                    ) +
                                    "\n            "
                                )
                              ])
                            ]
                          }
                        }
                      ])
                    })
                  }),
                  _vm._v(" "),
                  _c("el-table-column", {
                    attrs: { label: "操作", width: "90", align: "center" },
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
      ),
      _vm._v(" "),
      _c("Pagination", {
        attrs: { "page-url": this.urls.relateLogistics },
        on: { handlePagChg: _vm.handlePagChg }
      }),
      _vm._v(" "),
      _c(
        "el-tabs",
        [
          _c(
            "el-tab-pane",
            { attrs: { label: "物流公司", name: "0" } },
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
                  attrs: { data: _vm.logisticsData }
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
                  _vm._l(_vm.logisticsHead, function(item) {
                    return _c("el-table-column", {
                      key: item.prop,
                      attrs: {
                        label: item.label,
                        width: item.width,
                        align: "center"
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "default",
                          fn: function(scope) {
                            return [
                              _c("span", [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(
                                      item.inProp
                                        ? scope.row[item.prop][item.inProp]
                                        : scope.row[item.prop]
                                    ) +
                                    "\n            "
                                )
                              ])
                            ]
                          }
                        }
                      ])
                    })
                  }),
                  _vm._v(" "),
                  _c("el-table-column", {
                    attrs: { label: "操作", width: "90", align: "center" },
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
      ),
      _vm._v(" "),
      _c(
        "el-dialog",
        {
          class: { "more-forms": _vm.moreForms },
          attrs: { title: "关联物流", visible: _vm.addMask },
          on: {
            "update:visible": function($event) {
              _vm.addMask = $event
            }
          }
        },
        [
          _c("el-button", { attrs: { type: "text" } }, [_vm._v("用户信息")]),
          _vm._v(" "),
          _c("add-new", {
            attrs: {
              "rule-form": _vm.addUserForm,
              rules: _vm.addUserRules,
              "add-arr": _vm.addUserHead,
              onlyInputs: true
            }
          }),
          _vm._v(" "),
          _c("el-button", { attrs: { type: "text" } }, [_vm._v("物流公司")]),
          _vm._v(" "),
          _c(
            "el-table",
            {
              attrs: {
                data: _vm.addLogisticsForm,
                fit: "",
                height: "300",
                "row-class-name": _vm.addLogisticsCName
              },
              on: { "row-click": _vm.addLogisticsRClick }
            },
            [
              _vm._l(_vm.addLogisticsHead, function(item) {
                return _c("el-table-column", {
                  key: item.label,
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
                          _vm.addLogisticsIndex == "index" + scope.$index
                            ? _c("span", [
                                item.type == "text"
                                  ? _c(
                                      "span",
                                      [
                                        _c("el-input", {
                                          attrs: {
                                            size: "small",
                                            type: "text",
                                            placeholder: item.holder
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
                                  : _vm._e()
                              ])
                            : _c("span", [
                                item.type == "text"
                                  ? _c("span", [
                                      _vm._v(
                                        "\n              " +
                                          _vm._s(scope.row[item.prop]) +
                                          "\n            "
                                      )
                                    ])
                                  : _vm._e()
                              ])
                        ]
                      }
                    }
                  ])
                })
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { label: "操作", width: "90", align: "center" },
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
                                return _vm.addLogisticsDel(scope.$index)
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
                      on: { click: _vm.addLogisticsRow }
                    },
                    [_vm._v("添加物流公司")]
                  )
                ],
                1
              )
            ]
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
                { attrs: { type: "primary" }, on: { click: _vm.addConfirm } },
                [_vm._v("添加")]
              ),
              _vm._v(" "),
              _c(
                "el-button",
                { attrs: { type: "info" }, on: { click: _vm.addReset } },
                [_vm._v("重置")]
              ),
              _vm._v(" "),
              _c("el-button", { on: { click: _vm.addCancel } }, [
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
          attrs: { title: "编辑关联物流", visible: _vm.updateMask },
          on: {
            "update:visible": function($event) {
              _vm.updateMask = $event
            }
          }
        },
        [
          _c("el-button", { attrs: { type: "text" } }, [_vm._v("用户信息")]),
          _vm._v(" "),
          _c("add-new", {
            attrs: {
              "rule-form": _vm.updateUserForm,
              rules: _vm.addUserRules,
              "add-arr": _vm.addUserHead,
              onlyInputs: true
            }
          }),
          _vm._v(" "),
          _c("el-button", { attrs: { type: "text" } }, [_vm._v("物流公司")]),
          _vm._v(" "),
          _c(
            "el-table",
            {
              attrs: {
                data: _vm.updateLogisticsForm,
                fit: "",
                height: "300",
                "row-class-name": _vm.addLogisticsCName
              },
              on: { "row-click": _vm.addLogisticsRClick }
            },
            [
              _vm._l(_vm.addLogisticsHead, function(item) {
                return _c("el-table-column", {
                  key: item.label,
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
                          _vm.addLogisticsIndex == "index" + scope.$index
                            ? _c("span", [
                                item.type == "text"
                                  ? _c(
                                      "span",
                                      [
                                        _c("el-input", {
                                          attrs: {
                                            size: "small",
                                            type: "text",
                                            placeholder: item.holder
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
                                  : _vm._e()
                              ])
                            : _c("span", [
                                item.type == "text"
                                  ? _c("span", [
                                      _vm._v(
                                        "\n              " +
                                          _vm._s(scope.row[item.prop]) +
                                          "\n            "
                                      )
                                    ])
                                  : _vm._e()
                              ])
                        ]
                      }
                    }
                  ])
                })
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { label: "操作", width: "90", align: "center" },
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
                                return _vm.updateLogisticsDel(scope.$index)
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
                      on: { click: _vm.addLogisticsRow }
                    },
                    [_vm._v("添加物流公司")]
                  )
                ],
                1
              )
            ]
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
                {
                  attrs: { type: "primary" },
                  on: { click: _vm.updateConfirm }
                },
                [_vm._v("修改")]
              ),
              _vm._v(" "),
              _c(
                "el-button",
                { attrs: { type: "info" }, on: { click: _vm.updateCancel } },
                [_vm._v("取消")]
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
            value: _vm.showDel,
            callback: function($$v) {
              _vm.showDel = $$v
            },
            expression: "showDel"
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
                  on: { click: _vm.cancelD }
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
                      return _vm.confirmD(_vm.delUrl, _vm.delId)
                    }
                  }
                },
                [_vm._v("确定")]
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
    require("vue-hot-reload-api")      .rerender("data-v-791ce131", module.exports)
  }
}

/***/ })

});