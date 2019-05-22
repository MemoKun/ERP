webpackJsonp([14],{

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(669)
/* template */
var __vue_template__ = __webpack_require__(670)
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

/***/ 669:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      newOpt: [{
        cnt: '新增',
        icon: 'bf-add',
        ent: this.test
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
        ent: this.test
      }]
    };
  },

  methods: {
    test: function test() {
      console.log(1);
    }
  },
  mounted: function mounted() {
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

/***/ 670:
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
          attrs: { data: _vm.rolesList, fit: "", width: "1000", height: "400" }
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
        [_vm._v("\n        111\n    ")]
      ),
      _vm._v(" "),
      _c("Pagination", {
        attrs: { "page-url": _vm.delBatchUrl },
        on: { handlePagChg: _vm.handlePagChg }
      })
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