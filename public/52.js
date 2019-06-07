webpackJsonp([52],{

/***/ 1145:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    return _defineProperty({
      newOpt: [{
        cnt: "新增",
        icon: "bf-add",
        ent: this.addNew
      }, {
        cnt: "修改",
        icon: "bf-change",
        ent: this.edit
      }, {
        cnt: "删除",
        icon: "bf-del",
        ent: this.delMore
      }, {
        cnt: "刷新",
        icon: "bf-refresh",
        ent: this.refresh
      }],
      // 数据
      allData: [],
      newLoading: true,
      tableHead: [{
        label: "账号信息",
        width: "220",
        prop: "account_information",
        type: "text"
      }, {
        label: "创建人",
        width: "200",
        prop: "user",
        inProp: "username",
        type: "text"
      }, {
        label: "创建时间",
        width: "220",
        prop: "created_at",
        type: "text"
      }],
      checkboxInit: false,
      getsData: [],
      // 新增
      showMask: false,
      selection: "",
      ruleForm: {
        account_information: ""
      },
      rules: {
        account_information: [{ required: true, message: "请输入账号信息", trigger: "blur" }]
      },
      addArr: [{
        label: "账户信息",
        prop: "account_information",
        holder: "请输入账户信息",
        type: "text"
      }],
      // 修改
      updateMask: false,
      updateId: "",
      updateIndex: "",
      updateForm: {},
      componentShowChg: true,
      updateCompUpload: "upload0",
      updateRwIndex: "0",
      // 删除
      showDel: false,
      delId: "",
      delArr: []
    }, "selection", "");
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
    // 新增
    addNew: function addNew() {
      this.showMask = true;
    },
    submitForm: function submitForm() {
      var _this = this;

      this.$post(this.urls.offlineaccountconf, this.ruleForm).then(function () {
        _this.$message({
          message: "添加成功",
          type: "success"
        });
        _this.showMask = false;
        _this.refresh();
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
    },
    cancelAdd: function cancelAdd() {
      this.showMask = false;
      this.$message({
        message: "取消新建账户配置",
        type: "info"
      });
    },
    getData: function getData() {
      var _this2 = this;

      this.$fetch(this.urls.offlineaccountconf, {
        include: "user"
      }).then(function (res) {
        _this2.newLoading = false;
        _this2.allData = res.data;
        var pg = res.meta.pagination;
        _this2.$store.dispatch("currentPage", pg.current_page);
        _this2.$store.commit("PER_PAGE", pg.per_page);
        _this2.$store.commit("PAGE_TOTAL", pg.total);
      }, function (err) {
        if (err.response) {
          var arr = err.response.data.errors;
          var arr1 = [];
          for (var i in arr) {
            arr1.push(arr[i]);
          }
          var str = arr1.join(",");
          _this2.$message.error({
            $message: str
          });
        }
      });
    },
    handleSelectionChange: function handleSelectionChange(val) {
      if (val.length != 0) {
        this.updateId = val[0].id;
        this.updateForm = {
          account_information: val[0].account_information,
          user: val[0].user,
          user_id: val[0].user_id
        };
      } else {
        this.updateId = "";
      }
      this.selection = val;
      var del = [];
      val.forEach(function (selectedItem) {
        del.push(selectedItem.id);
      });
      this.delArr = del.join(",");
    },

    // 单条删除
    del: function del(row, e) {
      this.showDel = true;
      $(".el-popper").css({ left: e.x - 100 + "px", top: e.y - 125 + "px" });
      this.delId = row.id;
    },
    cancelD: function cancelD() {
      this.showDel = false;
      this.$message({
        message: "取消删除",
        type: "info"
      });
    },
    confirmD: function confirmD(id) {
      var _this3 = this;

      console.log(id);
      console.log(666);
      this.$del(this.urls.offlineaccountconf + "/" + id).then(function () {
        _this3.$message({
          message: "删除成功",
          type: "success"
        });
        _this3.showDel = false;
        _this3.refresh();
      }, function (err) {
        if (err.response) {
          _this3.showDel = false;
          var arr = err.response.data.errors;
          var arr1 = [];
          for (var i in arr) {
            arr1.push(arr[i]);
          }
          var str = arr1.join(",");
          _this3.$message.error({
            message: str
          });
        }
      });
    },

    // 删除
    delMore: function delMore() {
      var _this4 = this;

      if (this.delArr.length === 0) {
        this.$message({
          message: "没有选中数据",
          type: "warning"
        });
      } else {
        this.$confirm("此操作将永久删除该数据, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function () {
          _this4.$del(_this4.urls.offlineaccountconf, { ids: _this4.delArr }).then(function () {
            _this4.$message({
              message: "删除成功",
              type: "success"
            });
            _this4.refresh();
          }, function (err) {
            if (err.response) {
              var arr = err.response.data.errors;
              var arr1 = [];
              for (var i in arr) {
                arr1.push(arr[i]);
              }
              var str = arr1.join(",");
              _this4.$message.error(str);
            }
          });
        }).catch(function () {
          _this4.$message({
            type: "info",
            message: "已取消删除"
          });
        });
      }
    },

    // 修改
    edit: function edit() {
      if (this.selection.length == 0) {
        this.$message({
          message: "没有选择要修改的数据",
          type: "warning"
        });
        return;
      } else if (this.selection.length >= 2) {
        this.$message({
          message: "只能修改单条数据",
          type: "warning"
        });
        return;
      } else {
        this.updateMask = true;
        this.updateIndex = "";
      }
    },
    confirmUpdate: function confirmUpdate() {
      var _this5 = this;

      this.$del(this.urls.offlineaccountconf, { ids: this.delArr }).then(function () {
        _this5.$post(_this5.urls.offlineaccountconf, _this5.updateForm).then(function () {
          _this5.$message({
            message: "修改成功",
            type: "success"
          });
          _this5.updateMask = false;
          _this5.refresh();
        }, function (err) {
          if (err.response) {
            var arr = err.response.data.errors;
            var arr1 = [];
            for (var i in arr) {
              arr1.push(arr[i]);
            }
            var str = arr1.join(",");
            _this5.$message.error({
              message: str
            });
          }
        });
      }, function (err) {
        if (err.response) {
          var arr = err.response.data.errors;
          var arr1 = [];
          for (var i in arr) {
            arr1.push(arr[i]);
          }
          var str = arr1.join(",");
          _this5.$message.error(str);
        }
      });
    },
    cancelUpdate: function cancelUpdate() {
      this.updateMask = false;
      this.$message({
        message: "已取消修改",
        type: "info"
      });
    },

    // 页码
    handlePagChg: function handlePagChg(page) {
      var _this6 = this;

      this.$fetch(this.urls.offlineaccountconf + "?page=" + page).then(function (res) {
        _this6.alreadyHandle = res.data;
      });
    },
    refresh: function refresh() {
      this.newLoading = true;
      this.getData();
    }
  },
  mounted: function mounted() {
    this.getData();
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

/***/ 1146:
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
            { attrs: { label: "所有数据" } },
            [
              _c(
                "el-table",
                {
                  directives: [
                    {
                      name: "loading",
                      rawName: "v-loading",
                      value: _vm.newLoading,
                      expression: "newLoading"
                    }
                  ],
                  ref: "multipleTable",
                  attrs: { data: _vm.allData, fit: "", height: "400" },
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
                  _vm._l(_vm.tableHead, function(item) {
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
                                item.type == "select"
                                  ? _c("span", [
                                      scope.row[item.prop] == ""
                                        ? _c("span")
                                        : typeof scope.row[item.prop] ==
                                            "object" && item.nmProp
                                        ? _c("span", [
                                            _vm._v(
                                              _vm._s(
                                                scope.row[item.prop][
                                                  item.nmProp
                                                ]
                                              )
                                            )
                                          ])
                                        : _vm._e()
                                    ])
                                  : item.type == "checkbox"
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
                                              attrs: {
                                                src: scope.row[item.prop]
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
                      width: "180",
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
                                    return _vm.del(scope.row, $event)
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
          attrs: { title: "新建", visible: _vm.showMask },
          on: {
            "update:visible": function($event) {
              _vm.showMask = $event
            }
          }
        },
        [
          _c("add-new", {
            attrs: {
              "rule-form": _vm.ruleForm,
              rules: _vm.rules,
              "add-arr": _vm.addArr,
              onlyInputs: true
            }
          }),
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
                      on: { click: _vm.submitForm }
                    },
                    [_vm._v("确定")]
                  ),
                  _vm._v(" "),
                  _c("el-button", { on: { click: _vm.cancelAdd } }, [
                    _vm._v("取消")
                  ])
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
          attrs: { title: "修改", visible: _vm.updateMask },
          on: {
            "update:visible": function($event) {
              _vm.updateMask = $event
            }
          }
        },
        [
          _c("add-new", {
            attrs: {
              "rule-form": _vm.updateForm,
              rules: _vm.rules,
              "add-arr": _vm.addArr,
              onlyInputs: true
            }
          }),
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
                      on: {
                        click: function($event) {
                          return _vm.confirmUpdate(_vm.updateIndex)
                        }
                      }
                    },
                    [_vm._v("确定")]
                  ),
                  _vm._v(" "),
                  _c("el-button", { on: { click: _vm.cancelUpdate } }, [
                    _vm._v("取消")
                  ])
                ],
                1
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("Pagination", {
        attrs: { "page-url": this.urls.offlineaccountconf },
        on: { handlePagChg: _vm.handlePagChg }
      }),
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
                      return _vm.confirmD(_vm.delId)
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
    require("vue-hot-reload-api")      .rerender("data-v-0a110b67", module.exports)
  }
}

/***/ }),

/***/ 995:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(12)
/* script */
var __vue_script__ = __webpack_require__(1145)
/* template */
var __vue_template__ = __webpack_require__(1146)
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
Component.options.__file = "resources/assets/js/views/basicInf/offlineAccountConf.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0a110b67", Component.options)
  } else {
    hotAPI.reload("data-v-0a110b67", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});