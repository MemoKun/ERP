webpackJsonp([37],{

/***/ 1114:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      newOpt: [{
        cnt: "删除",
        icon: "bf-del",
        ent: this.downloadOrders
      }, {
        cnt: "导出",
        icon: "bf-out",
        ent: this.downloadOrders
      }, {
        cnt: "同步",
        icon: "bf-sync",
        ent: this.downloadOrders
      }, {
        cnt: "下载",
        icon: "bf-dwn",
        ent: this.downloadOrders
      }],
      searchBox: {
        shop_name: "",
        dwn_type: "",
        pro_num: "",
        shopNames: [{ label: "店铺1", value: 0 }, { label: "店铺2", value: 1 }],
        dwnTypes: [{ label: "下载类型1", value: 0 }, { label: "下载类型2", value: 1 }]
      },
      tableData3: [],
      multipleSelection: []
    };
  },

  methods: {
    test: function test() {
      console.log(1);
    },
    downloadOrders: function downloadOrders() {
      this.$message({
        message: "请先连接淘宝API",
        type: "success"
      });
    }
  },
  mounted: function mounted() {
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

/***/ 1115:
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
          _c("el-tab-pane", { attrs: { label: "商品下载", name: "0" } }, [
            _c("div", { staticClass: "searchBox" }, [
              _c(
                "span",
                [
                  _c("label", [_vm._v("店铺名称")]),
                  _vm._v(" "),
                  _c(
                    "el-select",
                    {
                      attrs: { clearable: "", placeholder: "请选择" },
                      model: {
                        value: _vm.searchBox.shop_name,
                        callback: function($$v) {
                          _vm.$set(_vm.searchBox, "shop_name", $$v)
                        },
                        expression: "searchBox.shop_name"
                      }
                    },
                    _vm._l(_vm.searchBox.shopNames, function(item) {
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
                  _c("label", [_vm._v("下载类型")]),
                  _vm._v(" "),
                  _c(
                    "el-select",
                    {
                      attrs: { clearable: "", placeholder: "请选择" },
                      model: {
                        value: _vm.searchBox.dwn_type,
                        callback: function($$v) {
                          _vm.$set(_vm.searchBox, "dwn_type", $$v)
                        },
                        expression: "searchBox.dwn_type"
                      }
                    },
                    _vm._l(_vm.searchBox.dwnTypes, function(item) {
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
                  _c("label", [_vm._v("商品编码")]),
                  _vm._v(" "),
                  _c("el-input", {
                    attrs: { clearable: "" },
                    model: {
                      value: _vm.searchBox.pro_num,
                      callback: function($$v) {
                        _vm.$set(_vm.searchBox, "pro_num", $$v)
                      },
                      expression: "searchBox.pro_num"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("span")
            ])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-tabs",
        [
          _c(
            "el-tab-pane",
            { attrs: { label: "商品信息", name: "0" } },
            [
              _c(
                "el-table",
                {
                  ref: "multipleTable",
                  staticStyle: { width: "100%" },
                  attrs: { data: _vm.tableData3, "tooltip-effect": "dark" },
                  on: { "selection-change": _vm.handleSelectionChange }
                },
                [
                  _c("el-table-column", {
                    attrs: { type: "selection", width: "55" }
                  }),
                  _vm._v(" "),
                  _c("el-table-column", {
                    attrs: { label: "商品编码", width: "120" }
                  }),
                  _vm._v(" "),
                  _c("el-table-column", {
                    attrs: { prop: "", label: "商品标题", width: "120" }
                  }),
                  _vm._v(" "),
                  _c("el-table-column", {
                    attrs: {
                      prop: "",
                      label: "卖家昵称",
                      "show-overflow-tooltip": ""
                    }
                  })
                ],
                1
              )
            ],
            1
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
    require("vue-hot-reload-api")      .rerender("data-v-8ed34b04", module.exports)
  }
}

/***/ }),

/***/ 968:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(12)
/* script */
var __vue_script__ = __webpack_require__(1114)
/* template */
var __vue_template__ = __webpack_require__(1115)
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
Component.options.__file = "resources/assets/js/views/dwnCenter/productDwn.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8ed34b04", Component.options)
  } else {
    hotAPI.reload("data-v-8ed34b04", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});