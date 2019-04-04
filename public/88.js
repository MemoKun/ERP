webpackJsonp([88],{

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(777)
/* template */
var __vue_template__ = __webpack_require__(778)
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
Component.options.__file = "resources/assets/js/views/basicInf/shopGatheringMag.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6ab8667b", Component.options)
  } else {
    hotAPI.reload("data-v-6ab8667b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 777:
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
      }],
      activeName: '0',
      typeData: [],
      checkboxInit: false,
      loading: true,
      listHead: [{
        label: '收款类型',
        prop: 'gathering_type',
        width: '200',
        type: 'text'
      }, {
        label: '是否启用',
        prop: 'gathering_type',
        width: '200',
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
    fetchData: function fetchData() {
      var _this = this;

      this.$fetch(this.urls.shopgatheringmag, { include: 'gatheringType,isUsing' }).then(function (res) {
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
    handleTabsClick: function handleTabsClick() {
      this.loading = true;
      this.fetchData();
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

/***/ 778:
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
          on: { "tab-click": _vm.handleTabsClick },
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
            { attrs: { label: "门店收款管理", name: "0" } },
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
                  attrs: { data: _vm.typeData, fit: "", height: "350" }
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
                  _vm._l(_vm.listHead, function(item) {
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
                              item.type == "checkbox"
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
                                    scope.row[item.prop]
                                      ? _c("span", [
                                          _vm._v(
                                            "\n                   " +
                                              _vm._s(
                                                item.inProp
                                                  ? scope.row[item.prop][
                                                      item.inProp
                                                    ]
                                                  : scope.row[item.prop]
                                              ) +
                                              "\n                 "
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
    require("vue-hot-reload-api")      .rerender("data-v-6ab8667b", module.exports)
  }
}

/***/ })

});