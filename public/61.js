webpackJsonp([61],{

/***/ 1136:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      newOpt: [{
        cnt: '新增',
        icon: 'bf-add',
        ent: this.addConf
      }, {
        cnt: '修改',
        icon: 'bf-change',
        ent: this.updateConf
      }, {
        cnt: '删除',
        icon: 'bf-del',
        ent: this.delConf
      }, {
        cnt: '刷新',
        icon: 'bf-refresh',
        ent: this.refresh
      }],
      checkboxInit: false,
      moreForms: false,
      selections: '',
      //分页
      pagination: {
        current_page: 1,
        per_page: 0,
        page_total: 0
      },
      //新增
      addConfMask: false,
      addForm: {
        is_covered: false,
        is_merged: false
      },
      addConfHead: [{
        label: '启用覆盖',
        width: '160',
        prop: 'is_covered',
        type: 'checkbox'
      }, {
        label: '启用合并',
        width: '160',
        prop: 'is_merged',
        type: 'checkbox'
      }],
      //修改
      updateIndex: '',
      updateConfMask: false,
      updateForm: {},
      //删除
      showDel: false,
      delUrl: '',
      delId: '',
      currentId: '',
      delIds: [],
      //刷新
      confLoading: true,
      //获取数据
      confData: [],
      confHead: [{
        label: '启用覆盖',
        width: '160',
        prop: 'is_covered',
        type: 'checkbox'
      }, {
        label: '启用合并',
        width: '160',
        prop: 'is_merged',
        type: 'checkbox'
      }, {
        label: '创建时间',
        width: '160',
        prop: 'created_at',
        type: 'text'
      }]
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

      this.$fetch(this.urls.downLoadConf).then(function (res) {
        _this.confData = res.data;
        _this.confLoading = false;
      }, function (err) {
        if (err.response) {
          var arr = err.response.data.errors;
          var arr1 = [];
          for (var i in arr) {
            arr1.push(arr[i]);
          }
          var str = arr1.join(',');
          _this.$message.error(str);
        }
      });
    },

    //分页
    handlePagChg: function handlePagChg(page) {
      var _this2 = this;

      this.$fetch(this.urls.downLoadConf + '?page=' + page).then(function (res) {
        _this2.confData = res.data;
      });
    },

    //新增
    addConf: function addConf() {
      this.addConfMask = true;
      Object.assign(this.addForm, this.$options.data().addForm);
    },
    addConfirm: function addConfirm() {
      var _this3 = this;

      var obj = {
        is_covered: this.addForm.is_covered,
        is_merged: this.addForm.is_merged
      };
      this.$post(this.urls.downLoadConf, obj).then(function () {
        _this3.$message({
          message: '添加成功',
          type: 'success'
        });
        _this3.addConfMask = false;
        _this3.refresh();
      }, function (err) {
        if (err.response) {
          var arr = err.response.data.errors;
          var arr1 = [];
          for (var i in arr) {
            arr1.push(arr[i]);
          }
          var str = arr1.join(',');
          _this3.$message.error({
            message: str
          });
        }
      });
    },
    addReset: function addReset() {
      Object.assign(this.addForm, this.$options.data().addForm);
    },

    //修改
    updateConf: function updateConf() {
      var _this4 = this;

      if (this.selections.length == 0) {
        this.$message({
          message: '没有选择要修改的数据',
          type: 'warning'
        });
        return;
      } else if (this.selections.length >= 2) {
        this.$message({
          message: '只能修改单条数据',
          type: 'warning'
        });
        return;
      } else {
        this.updateConfMask = true;
        this.$fetch(this.urls.downLoadConf + '/' + this.currentId).then(function (res) {
          _this4.updateForm = {
            is_covered: res.is_covered,
            is_merged: res.is_merged
          };
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
      }
    },
    updateConfirm: function updateConfirm() {
      var _this5 = this;

      this.$patch(this.urls.downLoadConf + '/' + this.currentId, this.updateForm).then(function () {
        _this5.updateConfMask = false;
        _this5.$message({
          message: '商品修改成功',
          type: 'success'
        });
        _this5.refresh();
      }, function (err) {
        if (err.response) {
          var arr = err.response.data.errors;
          var arr1 = [];
          for (var i in arr) {
            arr1.push(arr[i]);
          }
          var str = arr1.join(',');
          _this5.$message.error(str);
        }
      });
    },
    updateCancel: function updateCancel() {
      this.updateConfMask = false;
      this.$message({
        message: '取消修改',
        type: 'info'
      });
    },

    //批量选择
    handleSelectionChange: function handleSelectionChange(val) {
      //获取id集合
      var array = [];
      val.forEach(function (selectedItem) {
        array.push(selectedItem.id);
      });
      this.selections = val;
      this.delIds = array.join(',');
      //获取当前id
      this.currentId = val.length > 0 ? val[val.length - 1].id : '';
    },

    //删除
    delConf: function delConf() {
      var _this6 = this;

      if (this.delIds.length === 0) {
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
          _this6.$del(_this6.urls.downLoadConf, { ids: _this6.delIds }).then(function () {
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
      this.delUrl = this.urls.downLoadConf;
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
          _this7.$message.error({
            message: str
          });
        }
      });
    },

    //刷新
    refresh: function refresh() {
      var _this8 = this;

      this.confLoading = true;
      this.fetchData();
      setTimeout(function () {
        _this8.loading = false;
      }, 2000);
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

/***/ 1137:
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
            { attrs: { label: "下载配置", name: "0" } },
            [
              _c(
                "el-table",
                {
                  directives: [
                    {
                      name: "loading",
                      rawName: "v-loading",
                      value: _vm.confLoading,
                      expression: "confLoading"
                    }
                  ],
                  attrs: { data: _vm.confData, fit: "" },
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
                  _vm._l(_vm.confHead, function(item) {
                    return _c("el-table-column", {
                      key: item.prop,
                      attrs: {
                        label: item.label,
                        width: item.width,
                        align: "center"
                      },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "default",
                            fn: function(scope) {
                              return [
                                item.type == "checkbox"
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
                                  : _c("span", [
                                      _vm._v(
                                        "\n              " +
                                          _vm._s(
                                            item.inProp
                                              ? scope.row[item.prop][
                                                  item.inProp
                                                ]
                                              : scope.row[item.prop]
                                          ) +
                                          "\n            "
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
        attrs: { "page-url": this.urls.downLoadConf },
        on: { handlePagChg: _vm.handlePagChg }
      }),
      _vm._v(" "),
      _c(
        "el-dialog",
        {
          class: { "more-forms": _vm.moreForms },
          attrs: { title: "下载配置", visible: _vm.addConfMask },
          on: {
            "update:visible": function($event) {
              _vm.addConfMask = $event
            }
          }
        },
        [
          _c(
            "el-form",
            { ref: "addNew", attrs: { data: _vm.addForm } },
            _vm._l(_vm.addConfHead, function(item) {
              return _c(
                "el-form-item",
                {
                  key: item.prop,
                  attrs: { label: item.label, prop: item.prop }
                },
                [
                  item.type == "checkbox"
                    ? _c(
                        "span",
                        [
                          _c("el-checkbox", {
                            model: {
                              value: _vm.addForm[item.prop],
                              callback: function($$v) {
                                _vm.$set(_vm.addForm, item.prop, $$v)
                              },
                              expression: "addForm[item.prop]"
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
          attrs: { title: "修改下载配置", visible: _vm.updateConfMask },
          on: {
            "update:visible": function($event) {
              _vm.updateConfMask = $event
            }
          }
        },
        [
          _c(
            "el-form",
            { ref: "addNew", attrs: { model: _vm.updateForm } },
            _vm._l(_vm.addConfHead, function(item) {
              return _c(
                "el-form-item",
                {
                  key: item.prop,
                  attrs: { label: item.label, prop: item.prop }
                },
                [
                  item.type == "checkbox"
                    ? _c(
                        "span",
                        [
                          _c("el-checkbox", {
                            model: {
                              value: _vm.updateForm[item.prop],
                              callback: function($$v) {
                                _vm.$set(_vm.updateForm, item.prop, $$v)
                              },
                              expression: "updateForm[item.prop]"
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
              _c("el-button", { on: { click: _vm.updateCancel } }, [
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
    require("vue-hot-reload-api")      .rerender("data-v-245f3af6", module.exports)
  }
}

/***/ }),

/***/ 989:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(12)
/* script */
var __vue_script__ = __webpack_require__(1136)
/* template */
var __vue_template__ = __webpack_require__(1137)
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
Component.options.__file = "resources/assets/js/views/basicInf/dwnConf.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-245f3af6", Component.options)
  } else {
    hotAPI.reload("data-v-245f3af6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});