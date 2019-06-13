webpackJsonp([16],{

/***/ 1004:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(12)
/* script */
var __vue_script__ = __webpack_require__(1188)
/* template */
var __vue_template__ = __webpack_require__(1189)
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
Component.options.__file = "resources/assets/js/views/system/roleAssociateUser.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-26af46f4", Component.options)
  } else {
    hotAPI.reload("data-v-26af46f4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1188:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      newOpt: [{
        cnt: "角色权限",
        icon: "bf-jurisdiction",
        ent: this.addRolesPermission
      }, {
        cnt: "角色用户",
        icon: "bf-juruser",
        ent: this.addUserRoles
      }, {
        cnt: "刷新",
        icon: "bf-refresh",
        ent: this.refresh
      }],
      activeName: "0",
      loading: false,
      roleListData: {},
      userListData: {},
      tempUserListData: {},
      curRowId: "",
      curRowData: {},
      checkboxId: "",
      checkboxInit: false,
      tableHead: [[{
        label: "角色名称",
        width: "120",
        prop: "name",
        type: "text"
      }, {
        label: "角色描述",
        width: "250",
        prop: "description",
        type: "text"
      }, {
        label: "备注",
        width: "250",
        prop: "remark",
        type: "text"
      }, {
        label: "是否启用",
        width: "150",
        prop: "status",
        type: "checkbox"
      }, {
        label: "创建日期",
        width: "250",
        prop: "created_at",
        type: "text"
      }], [{
        label: "账号",
        prop: "username",
        type: "text"
      }, {
        label: "员工工号",
        prop: "work_id",
        type: "text"
      }, {
        label: "员工姓名",
        prop: "real_name",
        type: "text"
      }, {
        label: "员工手机",
        prop: "phone",
        type: "text"
      }, {
        label: "身份证号",
        prop: "id_no",
        type: "text"
      }, {
        label: "家庭地址",
        prop: "home_address",
        type: "text"
      }, {
        label: "备注信息",
        prop: "remark",
        type: "text"
      }, {
        label: "是否启用",
        width: "150",
        prop: "status",
        type: "checkbox"
      }, {
        label: "创建日期",
        prop: "created_at",
        type: "text"
      }]],
      RolesPermissionMask: false,
      userRolesMask: false,
      permissionListTree: [{
        id: 1,
        label: "订单管理",
        children: [{
          id: 11,
          label: "客服部"
        }, {
          id: 12,
          label: "跟单部"
        }, {
          id: 13,
          label: "财务部"
        }, {
          id: 14,
          label: "仓储部"
        }, {
          id: 15,
          label: "订单变更"
        }, {
          id: 16,
          label: "订单中心"
        }, {
          id: 17,
          label: "审计部"
        }, {
          id: 18,
          label: "财务刷单审核"
        }, {
          id: 19,
          label: "物流查询订单"
        }, {
          id: 20,
          label: "订单结算"
        }]
      }, {
        id: 2,
        label: "采购管理",
        children: [{
          id: 21,
          label: "采购单管理"
        }, {
          id: 22,
          label: "入库单管理"
        }, {
          id: 23,
          label: "取消采购管理"
        }, {
          id: 24,
          label: "采购退货管理"
        }, {
          id: 25,
          label: "其他入库管理"
        }]
      }, {
        id: 3,
        label: "退款管理",
        children: [{
          id: 26,
          label: "客服退款申请"
        }, {
          id: 27,
          label: "售后退款申请"
        }, {
          id: 28,
          label: "财务退款审核"
        }, {
          id: 29,
          label: "退款中心"
        }, {
          id: 30,
          label: "审核校对"
        }]
      }, {
        id: 4,
        label: "下载中心",
        children: [{
          id: 31,
          label: "订单下载"
        }, {
          id: 32,
          label: "商品下载"
        }, {
          id: 33,
          label: "退款单下载"
        }]
      }, {
        id: 5,
        label: "基础信息",
        children: [{
          id: 34,
          label: "商品管理"
        }, {
          id: 35,
          label: "会员管理"
        }, {
          id: 36,
          label: "仓库管理"
        }, {
          id: 37,
          label: "店铺管理"
        }, {
          id: 38,
          label: "物流管理"
        }, {
          id: 39,
          label: "供应商管理"
        }, {
          id: 40,
          label: "费用类型管理"
        }, {
          id: 41,
          label: "物流区域"
        }, {
          id: 42,
          label: "部门管理"
        }, {
          id: 43,
          label: "标记颜色管理"
        }, {
          id: 44,
          label: "订单状态配置"
        }, {
          id: 45,
          label: "城市配置"
        }, {
          id: 46,
          label: "商品类别配置"
        }, {
          id: 47,
          label: "公告管理"
        }, {
          id: 48,
          label: "打印机配置"
        }, {
          id: 49,
          label: "费用类型配置"
        }, {
          id: 50,
          label: "用户关联供应商"
        }, {
          id: 51,
          label: "负库存配置"
        }, {
          id: 52,
          label: "用户关联仓库"
        }, {
          id: 53,
          label: "发货单配置"
        }, {
          id: 54,
          label: "配送方式管理"
        }, {
          id: 55,
          label: "复检配置管理"
        }, {
          id: 56,
          label: "配送管理"
        }, {
          id: 57,
          label: "面料管理"
        }, {
          id: 58,
          label: "记账类型"
        }, {
          id: 59,
          label: "量子用户"
        }, {
          id: 60,
          label: "运费类型"
        }, {
          id: 61,
          label: "买就送管理"
        }, {
          id: 62,
          label: "产品Bom"
        }, {
          id: 63,
          label: "关联物流"
        }, {
          id: 64,
          label: "下载配置"
        }, {
          id: 65,
          label: "产品映射"
        }, {
          id: 66,
          label: "最小包管理"
        }, {
          id: 67,
          label: "线下账户配置"
        }, {
          id: 68,
          label: "核销配置"
        }, {
          id: 69,
          label: "刷单锁单配置"
        }, {
          id: 70,
          label: "门店收款管理"
        }, {
          id: 71,
          label: "售后状态管理"
        }, {
          id: 72,
          label: "售后类型管理"
        }, {
          id: 73,
          label: "评价类别管理"
        }, {
          id: 74,
          label: "库存盘点类型"
        }, {
          id: 75,
          label: "款项类型设置"
        }, {
          id: 76,
          label: "标签打印配置"
        }, {
          id: 77,
          label: "抽检配置"
        }, {
          id: 78,
          label: "补件责任方配置"
        }, {
          id: 79,
          label: "电子面单配置"
        }, {
          id: 80,
          label: "售后基础配置"
        }, {
          id: 81,
          label: "退货责任方配置"
        }, {
          id: 82,
          label: "售后原因管理"
        }, {
          id: 83,
          label: "承诺日期配置"
        }, {
          id: 84,
          label: "规格修改配置"
        }, {
          id: 85,
          label: "月结功能配置"
        }, {
          id: 86,
          label: "采购退货类型"
        }, {
          id: 87,
          label: "回访超时配置"
        }, {
          id: 88,
          label: "商品属性设置"
        }, {
          id: 89,
          label: "标准词库"
        }]
      }, {
        id: 6,
        label: "系统管理",
        children: [{
          id: 90,
          label: "角色管理"
        }, {
          id: 91,
          label: "用户管理"
        }, {
          id: 92,
          label: "角色用户关联"
        }]
      }, {
        id: 7,
        label: "报表统计",
        children: [{
          id: 93,
          label: "销售报表3.0"
        }]
      }, {
        id: 8,
        label: "补件管理",
        children: [{
          id: 94,
          label: "补件申请"
        }, {
          id: 95,
          label: "补件审核"
        }, {
          id: 96,
          label: "补件中心"
        }, {
          id: 97,
          label: "补件发货"
        }]
      }, {
        id: 9,
        label: "售后管理",
        children: [{
          id: 98,
          label: "售后申请"
        }, {
          id: 99,
          label: "售后提交"
        }, {
          id: 100,
          label: "售后审核"
        }, {
          id: 101,
          label: "售后中心"
        }]
      }, {
        id: 10,
        label: "售后赔偿",
        children: [{
          id: 102,
          label: "赔偿申请"
        }, {
          id: 103,
          label: "赔偿审核"
        }, {
          id: 104,
          label: "赔偿中心"
        }]
      }],
      permissionListData: "",
      defaultProps: {
        children: "children",
        label: "label"
      },
      selectRoleId: "",
      roleData: {},
      alreadyContainUsers: [],
      unContainUsers: []
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

      this.loading = true;
      this.$fetch(this.urls.users).then(function (res) {
        _this.tempUserListData = res.data;
        _this.userListData = res.data;
        _this.loading = false;
      }, function (err) {});
      this.$fetch(this.urls.roles).then(function (res) {
        _this.roleListData = res.data;
        _this.loading = false;
      }, function (err) {});
    },
    listRowClick: function listRowClick(row) {
      this.curRowId = row.id;
      this.curRowData = row;
    },
    handleSelectionChange: function handleSelectionChange(val) {
      /*拿到id集合*/
      var delArr = [];
      val.forEach(function (selectedItem) {
        delArr.push(selectedItem.id);
      });
      this.ids = delArr.join(",");
      /*拿到当前id*/
      this.checkboxId = val.length > 0 ? val[val.length - 1].id : "";
      this.curRowData = val.length > 0 ? val[val.length - 1] : "";
    },
    addRolesPermission: function addRolesPermission() {
      var _this2 = this;

      this.RolesPermissionMask = true;
      this.$fetch(this.urls.roles).then(function (res) {
        _this2.roleData = res.data;
        _this2.getCheckedNodes();
      }, function (err) {});
    },
    addUserRoles: function addUserRoles() {
      var _this3 = this;

      this.unContainUsers = [];
      this.userRolesMask = true;
      this.$fetch(this.urls.roles).then(function (res) {
        _this3.roleData = res.data;
      }, function (err) {});
      this.$fetch(this.urls.users).then(function (res) {
        var usersData = res.data;
        usersData.map(function (item) {
          var users = {
            key: item.id,
            label: item.real_name
          };
          _this3.unContainUsers.push(users);
        });
      });
    },
    getCheckedNodes: function getCheckedNodes() {
      this.permissionListData = this.$refs.permissionTree.getCheckedKeys();
    },
    fetchRolePermissions: function fetchRolePermissions() {
      var _this4 = this;

      var id = this.selectRoleId;
      this.$fetch(this.urls.permissions + "/" + id).then(function (res) {
        var checked = ["订单管理", "采购管理", "退款管理", "下载中心", "基础信息", "系统管理", "报表统计", "补件管理", "售后管理", "售后赔偿"];
        _this4.$refs.permissionTree.setCheckedKeys(checked);
      }, function (err) {});
    },
    getRolesAsUsers: function getRolesAsUsers() {
      var _this5 = this;

      var id = this.selectRoleId;
      var submitData = {
        roleId: this.selectRoleId
      };
      this.$fetch(this.urls.users + "/" + id + "/getrolesassociateusers", submitData).then(function (res) {
        _this5.alreadyContainUsers = res;
      }, function (err) {});
    },
    changePermissionsConfirm: function changePermissionsConfirm() {
      var _this6 = this;

      this.RolesPermissionMask = false;
      var submitData = {
        roleId: this.selectRoleId,
        permissions: this.permissionListData
      };
      this.$post(this.urls.roles + "/giverolespermission", submitData).then(function (res) {
        _this6.$message({
          message: "更改权限成功！",
          type: "success"
        });
      }, function (err) {});
    },
    changeUserRolesConfirm: function changeUserRolesConfirm() {
      var _this7 = this;

      this.RolesPermissionMask = false;
      var submitData = {
        userIds: this.alreadyContainUsers,
        roleId: this.selectRoleId
      };
      this.$post(this.urls.users + "/setroles", submitData).then(function (res) {
        if (res == 1) {
          _this7.$message({
            message: "设置角色成功！",
            type: "success"
          });
        } else {
          _this7.$message({
            message: "设置角色失败！",
            type: "info"
          });
        }
      }, function (err) {});
    },
    refresh: function refresh() {
      this.loading = true;
      this.fetchData();
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

/***/ 1189:
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
            { attrs: { label: "角色列表", name: "0" } },
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
                  attrs: { data: _vm.roleListData, fit: "", height: "250" },
                  on: {
                    "selection-change": _vm.handleSelectionChange,
                    "row-click": _vm.listRowClick
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
                  _vm._l(_vm.tableHead[0], function(item) {
                    return _c("el-table-column", {
                      key: item.label,
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
                                item.type == "checkbox"
                                  ? _c("span", [
                                      item.inProp
                                        ? _c(
                                            "span",
                                            [
                                              _c("el-checkbox", {
                                                attrs: { disabled: "" },
                                                model: {
                                                  value:
                                                    scope.row[item.prop][
                                                      item.inProp
                                                    ],
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      scope.row[item.prop],
                                                      item.inProp,
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "scope.row[item.prop][item.inProp]"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        : _c(
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
                                                  expression:
                                                    "scope.row[item.prop]"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                    ])
                                  : _c("span", [
                                      scope.row[item.prop]
                                        ? _c("span", [
                                            _vm._v(
                                              "\n                " +
                                                _vm._s(
                                                  item.inProp
                                                    ? scope.row[item.prop][
                                                        item.inProp
                                                      ]
                                                    : scope.row[item.prop]
                                                ) +
                                                "\n              "
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
        "el-tabs",
        {
          attrs: { name: "0" },
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
            { attrs: { label: "用户列表" } },
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
                  attrs: { data: _vm.userListData, fit: "", height: "250" },
                  on: {
                    "selection-change": _vm.handleSelectionChange,
                    "row-click": _vm.listRowClick
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
                  _vm._l(_vm.tableHead[1], function(item) {
                    return _c("el-table-column", {
                      key: item.label,
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
                                item.type == "checkbox"
                                  ? _c("span", [
                                      item.inProp
                                        ? _c(
                                            "span",
                                            [
                                              _c("el-checkbox", {
                                                attrs: { disabled: "" },
                                                model: {
                                                  value:
                                                    scope.row[item.prop][
                                                      item.inProp
                                                    ],
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      scope.row[item.prop],
                                                      item.inProp,
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "scope.row[item.prop][item.inProp]"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        : _c(
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
                                                  expression:
                                                    "scope.row[item.prop]"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                    ])
                                  : _c("span", [
                                      scope.row[item.prop]
                                        ? _c("span", [
                                            _vm._v(
                                              "\n                " +
                                                _vm._s(
                                                  item.inProp
                                                    ? scope.row[item.prop][
                                                        item.inProp
                                                      ]
                                                    : scope.row[item.prop]
                                                ) +
                                                "\n              "
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
          attrs: { title: "角色权限管理", visible: _vm.RolesPermissionMask },
          on: {
            "update:visible": function($event) {
              _vm.RolesPermissionMask = $event
            }
          }
        },
        [
          _c(
            "div",
            { staticClass: "searchBox" },
            [
              _c(
                "el-select",
                {
                  attrs: { placeholder: "所属角色", width: "200px" },
                  on: { change: _vm.fetchRolePermissions },
                  model: {
                    value: _vm.selectRoleId,
                    callback: function($$v) {
                      _vm.selectRoleId = $$v
                    },
                    expression: "selectRoleId"
                  }
                },
                _vm._l(_vm.roleData, function(list) {
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
          ),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c(
            "div",
            [
              _c("el-tree", {
                ref: "permissionTree",
                attrs: {
                  data: _vm.permissionListTree,
                  "show-checkbox": "",
                  "node-key": "label",
                  props: _vm.defaultProps
                },
                on: { check: _vm.getCheckedNodes }
              })
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
                      on: { click: _vm.changePermissionsConfirm }
                    },
                    [_vm._v("更改权限")]
                  )
                ],
                1
              )
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "el-dialog",
        {
          attrs: { title: "角色用户关联", visible: _vm.userRolesMask },
          on: {
            "update:visible": function($event) {
              _vm.userRolesMask = $event
            }
          }
        },
        [
          _c(
            "div",
            [
              _c(
                "el-select",
                {
                  attrs: { placeholder: "所属角色", width: "200px" },
                  on: { change: _vm.getRolesAsUsers },
                  model: {
                    value: _vm.selectRoleId,
                    callback: function($$v) {
                      _vm.selectRoleId = $$v
                    },
                    expression: "selectRoleId"
                  }
                },
                _vm._l(_vm.roleData, function(list) {
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
          ),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c(
            "div",
            [
              _c("el-transfer", {
                attrs: {
                  data: _vm.unContainUsers,
                  titles: ["未包含用户", "已包含用户"]
                },
                model: {
                  value: _vm.alreadyContainUsers,
                  callback: function($$v) {
                    _vm.alreadyContainUsers = $$v
                  },
                  expression: "alreadyContainUsers"
                }
              })
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
                      on: { click: _vm.changeUserRolesConfirm }
                    },
                    [_vm._v("设置关联角色")]
                  )
                ],
                1
              )
            ]
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
    require("vue-hot-reload-api")      .rerender("data-v-26af46f4", module.exports)
  }
}

/***/ })

});