webpackJsonp([16],{

/***/ 517:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(720)
/* template */
var __vue_template__ = __webpack_require__(721)
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

/***/ 720:
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

            addRoleMask: false

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

            this.$fetch(this.urls.roledetails, {
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
        },
        addRole: function addRole() {
            console.log("addRole");
            this.addRoleMask = true;
        },
        changeRole: function changeRole() {
            console.log("change");
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

/***/ 721:
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
              scopedSlots: _vm._u([
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
              ])
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
    require("vue-hot-reload-api")      .rerender("data-v-4e8131e0", module.exports)
  }
}

/***/ })

});