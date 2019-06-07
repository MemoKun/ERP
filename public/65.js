webpackJsonp([65],{

/***/ 1144:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      searchBox: {
        buyNick: "",
        shopTitle: ""
      },
      allData: [],
      currentPage: true,
      tableHead: [{
        label: "执行类型",
        width: "200",
        prop: "perform_type",
        type: "text"
      }, {
        label: "包含字符",
        width: "220",
        prop: "include_string",
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
        nmProp: "date",
        type: "text"
      }],
      loading: true,
      currentIndex: "",
      url: "/brushlockconf",
      // 新增
      showMask: false,
      selection: "",
      ruleForm: {
        perform_type: "",
        include_string: ""
      },
      rules: {
        perform_type: [{ required: true, message: "请选择执行类型", trigger: "blur" }],
        include_string: [{ required: true, message: "请输入包含字符", trigger: "blur" }]
      },
      addArr: [{
        label: "执行类型",
        prop: "perform_type",
        holder: "请选择执行类型",
        stateVal: "perform_type",
        type: "text"
      }, {
        label: "包含字符",
        prop: "include_string",
        holder: "请输入包含字符",
        type: "text"
      }],
      // 删除
      showDel: false,
      delId: "",
      delArr: []
    }, _defineProperty(_ref, "selection", ""), _defineProperty(_ref, "updateMask", false), _defineProperty(_ref, "updateId", ""), _defineProperty(_ref, "updateIndex", ""), _defineProperty(_ref, "updateForm", {}), _defineProperty(_ref, "componentShowChg", true), _defineProperty(_ref, "updateCompUpload", "upload0"), _defineProperty(_ref, "updateRwIndex", "0"), _ref;
  },

  methods: {
    test: function test() {
      console.log(1);
    },
    getData: function getData(url) {
      var _this = this;

      this.$fetch(url, {
        include: "user"
      }).then(function (res) {
        _this.loading = false;
        _this.allData = res.data;
        var pg = res.meta.pagination;
        _this.$store.dispatch("currentPage", pg.current_page);
        _this.$store.commit("PER_PAGE", pg.per_page);
        _this.$store.commit("PAGE_TOTAL", pg.total);
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
    handleSelectionChange: function handleSelectionChange(val) {
      if (val.length != 0) {
        this.updateId = val[0].id;
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

    // 新增
    addNew: function addNew() {
      this.ruleForm = {
        perform_type: "",
        include_string: ""
      };
      this.showMask = true;
    },
    submitForm: function submitForm() {
      var _this2 = this;

      this.$post(this.url, this.ruleForm).then(function () {
        _this2.$message({
          message: "添加成功",
          type: "success"
        });
        _this2.showMask = false;
        _this2.refresh();
      }, function (err) {
        if (err.response) {
          var arr = err.response.data.errors;
          var arr1 = [];
          for (var i in arr) {
            arr1.push(arr[i]);
          }
          var str = arr1.join(",");
          _this2.$message.error({
            message: str
          });
        }
      });
    },
    cancelAdd: function cancelAdd() {
      this.showMask = false;
      this.$message({
        message: "取消新建刷单锁单配置",
        type: "info"
      });
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

      // console.log(id);
      this.$del(this.url + "/" + id).then(function () {
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
          _this4.$del(_this4.url, { ids: _this4.delArr }).then(function () {
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
              _this4.$message.error({
                message: str
              });
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
    edit: function edit() {
      var _this5 = this;

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
        this.$fetch(this.url + "/" + this.updateId).then(function (res) {
          _this5.updateForm = {
            perform_type: res.perform_type,
            include_string: res.include_string
          };
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
      }
    },
    confirmUpdate: function confirmUpdate() {
      var _this6 = this;

      this.$patch(this.url + "/" + this.updateId, this.updateForm).then(function () {
        _this6.updateMask = false;
        _this6.$message({
          message: "修改成功",
          type: "success"
        });
        _this6.refresh();
      }, function (err) {
        if (err.response) {
          var arr = err.response.data.errors;
          var arr1 = [];
          for (var i in arr) {
            arr1.push(arr[i]);
          }
          var str = arr1.join(",");
          _this6.$message.error(str);
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

    // 刷新
    refresh: function refresh() {
      this.loading = true;
      this.getData(this.url);
    }
  },
  mounted: function mounted() {
    this.getData(this.url);
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

/***/ 1145:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.currentPage
        ? _c("div", { staticClass: "searchBox" }, [
            _c(
              "span",
              [
                _c("label", [_vm._v("执行类型")]),
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
                    value: _vm.searchBox.buyNick,
                    callback: function($$v) {
                      _vm.$set(_vm.searchBox, "buyNick", $$v)
                    },
                    expression: "searchBox.buyNick"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "span",
              [
                _c("label", [_vm._v("包含字符")]),
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
            )
          ])
        : _vm._e(),
      _vm._v(" "),
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
                      value: _vm.loading,
                      expression: "loading"
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
                                            "object" && item.inProp
                                        ? _c("span", [
                                            _vm._v(
                                              _vm._s(
                                                scope.row[item.prop][
                                                  item.inProp
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
          _c(
            "el-form",
            {
              ref: "ruleForm",
              staticClass: "demo-ruleForm",
              attrs: {
                model: _vm.ruleForm,
                rules: _vm.rules,
                "label-width": "100px"
              }
            },
            [
              _c(
                "el-form-item",
                { attrs: { label: "执行类型" } },
                [
                  _c(
                    "el-select",
                    {
                      attrs: { placeholder: "请选择执行类型" },
                      model: {
                        value: _vm.ruleForm.perform_type,
                        callback: function($$v) {
                          _vm.$set(_vm.ruleForm, "perform_type", $$v)
                        },
                        expression: "ruleForm.perform_type"
                      }
                    },
                    [
                      _c("el-option", {
                        attrs: { label: "自动转刷单", value: "自动转刷单" }
                      }),
                      _vm._v(" "),
                      _c("el-option", {
                        attrs: { label: "自动转锁单", value: "自动转锁单" }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "包含字符", prop: "name" } },
                [
                  _c("el-input", {
                    attrs: { placehold: "" },
                    model: {
                      value: _vm.ruleForm.include_string,
                      callback: function($$v) {
                        _vm.$set(_vm.ruleForm, "include_string", $$v)
                      },
                      expression: "ruleForm.include_string"
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
          _c(
            "el-form",
            {
              ref: "updateForm",
              staticClass: "demo-ruleForm",
              attrs: {
                model: _vm.updateForm,
                rules: _vm.rules,
                "label-width": "100px"
              }
            },
            [
              _c(
                "el-form-item",
                { attrs: { label: "执行类型" } },
                [
                  _c(
                    "el-select",
                    {
                      attrs: { placeholder: "请选择执行类型" },
                      model: {
                        value: _vm.updateForm.perform_type,
                        callback: function($$v) {
                          _vm.$set(_vm.updateForm, "perform_type", $$v)
                        },
                        expression: "updateForm.perform_type"
                      }
                    },
                    [
                      _c("el-option", {
                        attrs: { label: "自动转刷单", value: "自动转刷单" }
                      }),
                      _vm._v(" "),
                      _c("el-option", {
                        attrs: { label: "自动转锁单", value: "自动转锁单" }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "包含字符", prop: "name" } },
                [
                  _c("el-input", {
                    attrs: { placehold: "" },
                    model: {
                      value: _vm.updateForm.include_string,
                      callback: function($$v) {
                        _vm.$set(_vm.updateForm, "include_string", $$v)
                      },
                      expression: "updateForm.include_string"
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
    require("vue-hot-reload-api")      .rerender("data-v-52becb00", module.exports)
  }
}

/***/ }),

/***/ 993:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(12)
/* script */
var __vue_script__ = __webpack_require__(1144)
/* template */
var __vue_template__ = __webpack_require__(1145)
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
Component.options.__file = "resources/assets/js/views/basicInf/brushLockConf.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-52becb00", Component.options)
  } else {
    hotAPI.reload("data-v-52becb00", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});