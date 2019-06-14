webpackJsonp([26],{

/***/ 1100:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        cnt: "新增",
        icon: "bf-add",
        ent: this.addOtherStorage,
        nClick: false
      }, {
        cnt: "修改",
        icon: "bf-change",
        ent: this.test,
        nClick: false
      }, {
        cnt: "删除",
        icon: "bf-del",
        ent: this.test,
        nClick: false
      }, {
        cnt: "提交",
        icon: "bf-submit",
        ent: this.test,
        nClick: false
      }, {
        cnt: "审核",
        icon: "bf-audit",
        ent: this.test,
        nClick: false
      }, {
        cnt: "退审",
        icon: "bf-auditfaild",
        ent: this.test,
        nClick: false
      }, {
        cnt: "导出",
        icon: "bf-out",
        ent: this.test,
        nClick: false
      }, {
        cnt: "刷新",
        icon: "bf-refresh",
        ent: this.test,
        nClick: false
      }],
      moreForms: true,
      checkboxInit: false,
      filterBox: false,
      searchBox: {
        storage_no: "",
        external_no: "",
        purchase_no: "",
        spec_no: "",
        create_time: "",
        commit_time: "",
        storage_time: ""
      },
      topActiveName: "newStorage",
      btmActiveName: "storageDetail",
      newStorage: {
        table: [{
          label: "入库单号",
          width: "200",
          prop: "storage_no",
          type: "text"
        }, {
          label: "外部单号",
          width: "120",
          prop: "external_no",
          type: "text"
        }, {
          label: "入库仓库",
          width: "120",
          prop: "warehouse",
          type: "text"
        }, {
          label: "供应商",
          width: "120",
          prop: "supplier",
          type: "text"
        }, {
          label: "创建人",
          width: "120",
          prop: "create_user",
          type: "text"
        }, {
          label: "提交人",
          width: "120",
          prop: "commit_user",
          type: "text"
        }, {
          label: "入库人",
          width: "120",
          prop: "storage_user",
          type: "text"
        }, {
          label: "创建时间",
          width: "180",
          prop: "create_at",
          type: "text"
        }, {
          label: "提交时间",
          width: "180",
          prop: "commit_at",
          type: "text"
        }, {
          label: "入库时间",
          width: "180",
          prop: "storage_at",
          type: "text"
        }, {
          label: "开单时间",
          width: "180",
          prop: "start_at",
          type: "text"
        }, {
          label: "提交状态",
          width: "180",
          prop: "is_commit",
          type: "checkbox"
        }, {
          label: "入库状态",
          width: "180",
          prop: "is_storage",
          type: "checkbox"
        }],
        loading: true,
        data: []
      },
      commitStorage: {
        table: [{
          label: "入库单号",
          width: "200",
          prop: "storage_no",
          type: "text"
        }, {
          label: "外部单号",
          width: "120",
          prop: "external_no",
          type: "text"
        }, {
          label: "入库仓库",
          width: "120",
          prop: "warehouse",
          type: "text"
        }, {
          label: "供应商",
          width: "120",
          prop: "supplier",
          type: "text"
        }, {
          label: "创建人",
          width: "120",
          prop: "create_user",
          type: "text"
        }, {
          label: "提交人",
          width: "120",
          prop: "commit_user",
          type: "text"
        }, {
          label: "入库人",
          width: "120",
          prop: "storage_user",
          type: "text"
        }, {
          label: "创建时间",
          width: "180",
          prop: "create_at",
          type: "text"
        }, {
          label: "提交时间",
          width: "180",
          prop: "commit_at",
          type: "text"
        }, {
          label: "入库时间",
          width: "180",
          prop: "storage_at",
          type: "text"
        }, {
          label: "开单时间",
          width: "180",
          prop: "start_at",
          type: "text"
        }, {
          label: "提交状态",
          width: "180",
          prop: "is_commit",
          type: "checkbox"
        }, {
          label: "入库状态",
          width: "180",
          prop: "is_storage",
          type: "checkbox"
        }],
        loading: true,
        data: []
      },
      inStorage: {
        table: [{
          label: "入库单号",
          width: "200",
          prop: "storage_no",
          type: "text"
        }, {
          label: "外部单号",
          width: "120",
          prop: "external_no",
          type: "text"
        }, {
          label: "入库仓库",
          width: "120",
          prop: "warehouse",
          type: "text"
        }, {
          label: "供应商",
          width: "120",
          prop: "supplier",
          type: "text"
        }, {
          label: "创建人",
          width: "120",
          prop: "create_user",
          type: "text"
        }, {
          label: "提交人",
          width: "120",
          prop: "commit_user",
          type: "text"
        }, {
          label: "入库人",
          width: "120",
          prop: "storage_user",
          type: "text"
        }, {
          label: "创建时间",
          width: "180",
          prop: "create_at",
          type: "text"
        }, {
          label: "提交时间",
          width: "180",
          prop: "commit_at",
          type: "text"
        }, {
          label: "入库时间",
          width: "180",
          prop: "storage_at",
          type: "text"
        }, {
          label: "开单时间",
          width: "180",
          prop: "start_at",
          type: "text"
        }, {
          label: "提交状态",
          width: "180",
          prop: "is_commit",
          type: "checkbox"
        }, {
          label: "入库状态",
          width: "180",
          prop: "is_storage",
          type: "checkbox"
        }],
        loading: true,
        data: []
      },
      storageDetail: {
        table: [{
          label: "规格图片",
          width: "120",
          prop: "model_img",
          type: "img"
        }, {
          label: "商品编码",
          width: "200",
          prop: "purchase_no",
          type: "text"
        }, {
          label: "规格编码",
          width: "120",
          prop: "spec_no",
          type: "text"
        }, {
          label: "商品简称",
          width: "120",
          prop: "purchase_short",
          type: "text"
        }, {
          label: "包件数",
          width: "120",
          prop: "number",
          type: "text"
        }, {
          label: "规格",
          width: "120",
          prop: "spec",
          type: "text"
        }, {
          label: "规格一",
          width: "120",
          prop: "spec1",
          type: "text"
        }, {
          label: "颜色",
          width: "120",
          prop: "color",
          type: "text"
        }, {
          label: "材质",
          width: "120",
          prop: "material",
          type: "text"
        }, {
          label: "功能",
          width: "function",
          prop: "arrival_time",
          type: "text"
        }, {
          label: "特殊",
          width: "120",
          prop: "special",
          type: "text"
        }, {
          label: "其他",
          width: "120",
          prop: "other",
          type: "text"
        }, {
          label: "成本金额",
          width: "120",
          prop: "cost",
          type: "text"
        }, {
          label: "成本总价",
          width: "120",
          prop: "cost_all",
          type: "text"
        }, {
          label: "入库数量",
          width: "120",
          prop: "storage_number",
          type: "text"
        }, {
          label: "备注",
          width: "120",
          prop: "remark",
          type: "text"
        }],
        loading: true,
        data: []
      },

      newStorageDialog: {
        show: false,
        data: {
          storage_no: "",
          external_no: "",
          shopName: "",
          supplier: "",
          start_at: "",
          data: [],
          tableHead: [{
            label: "规格图片",
            width: "120",
            prop: "model_img",
            type: "img"
          }, {
            label: "商品编码",
            width: "200",
            prop: "purchase_no",
            type: "text"
          }, {
            label: "规格编码",
            width: "120",
            prop: "spec_no",
            type: "text"
          }, {
            label: "商品简称",
            width: "120",
            prop: "purchase_short",
            type: "text"
          }, {
            label: "包件数",
            width: "120",
            prop: "number",
            type: "text"
          }, {
            label: "规格",
            width: "120",
            prop: "spec",
            type: "text"
          }, {
            label: "规格一",
            width: "120",
            prop: "spec1",
            type: "text"
          }, {
            label: "颜色",
            width: "120",
            prop: "color",
            type: "text"
          }, {
            label: "材质",
            width: "120",
            prop: "material",
            type: "text"
          }, {
            label: "功能",
            width: "function",
            prop: "arrival_time",
            type: "text"
          }, {
            label: "特殊",
            width: "120",
            prop: "special",
            type: "text"
          }, {
            label: "其他",
            width: "120",
            prop: "other",
            type: "text"
          }, {
            label: "成本金额",
            width: "120",
            prop: "cost",
            type: "text"
          }, {
            label: "成本总价",
            width: "120",
            prop: "cost_all",
            type: "text"
          }, {
            label: "入库数量",
            width: "120",
            prop: "storage_number",
            type: "text"
          }, {
            label: "备注",
            width: "120",
            prop: "remark",
            type: "text"
          }]
        }
      },
      // 商品明细
      proDtlMask: false,
      proQuery: {
        commodity_code: ""
      },
      proDtlVal: [],
      proDtlHead: [{
        label: "采购单号",
        width: "200",
        prop: "purchase_order_no",
        type: "text"
      }, {
        label: "店铺",
        width: "160",
        prop: "shops_id",
        type: "select",
        stateVal: "shops"
      }, {
        label: "客户名称",
        width: "120",
        prop: "client_name",
        type: "text"
      }, {
        label: "商品编码",
        width: "160",
        prop: "commodity_code",
        type: "text"
      }, {
        label: "商品简称",
        width: "160",
        prop: "short_name",
        type: "text"
      }, {
        label: "子件编码",
        width: "160",
        prop: "component_code",
        type: "text"
      }, {
        label: "子件名称",
        width: "180",
        prop: "spec",
        type: "text"
      }, {
        label: "包件数",
        width: "100",
        prop: "package_quantity",
        type: "number"
      }, {
        label: "供应商",
        width: "120",
        prop: "suppliers_id",
        type: "select",
        stateVal: "suppliers"
      }, {
        label: "采购成本",
        width: "120",
        prop: "purchase_cost",
        type: "number"
      }, {
        label: "采购运费",
        width: "120",
        prop: "purchase_freight",
        type: "number"
      }, {
        label: "仓库成本",
        width: "120",
        prop: "warehouse_cost",
        type: "number"
      }, {
        label: "折扣",
        width: "100",
        prop: "discount",
        type: "number"
      }, {
        label: "采购数",
        width: "100",
        prop: "purchase_quantity",
        type: "number"
      }, {
        label: "已入库数",
        width: "120",
        prop: "stock_in_count",
        type: "number"
      }, {
        label: "总额",
        width: "120",
        prop: "total_fee",
        type: "number"
      }, {
        label: "入库数量",
        width: "120",
        prop: "newData",
        inProp: "stock_in_quantity",
        type: "number"
      }, {
        label: "最大入库数",
        width: "150",
        prop: "maxStockIn",
        type: "number"
      }, {
        label: "创建时间",
        width: "220",
        prop: "created_at",
        type: "text"
      }]
    };
  },

  methods: {
    updateOpts: function updateOpts() {
      this.$store.state.opt.opts = this.newOpt;
      this.$store.commit("change", this.newOpt);
    },
    test: function test() {
      console.log(1);
    },
    cancelRowCName: function cancelRowCName(_ref) {
      var row = _ref.row,
          rowIndex = _ref.rowIndex;

      row.index = rowIndex;
    },
    addCellClick: function addCellClick(row) {
      this.addCurRow = "index" + row.index;
    },
    delAddPur: function delAddPur(index) {
      // this.addPFDialog.data.data.splice(index,1);
    },

    // 增加明细
    addProDtl: function addProDtl() {
      this.proDtlMask = true;
      this.proDtlVal = [];
    },
    cancelAddProDtl: function cancelAddProDtl() {
      this.proDtlMask = false;
    },
    confirmAdd: function confirmAdd() {},
    cancelAdd: function cancelAdd() {
      this.newStorageDialog.show = false;
    },
    clickTopTabs: function clickTopTabs() {
      switch (this.topActiveName) {
        case "newStorage":
          this.newStorage.loading = true;
          this.newOpt[3].nClick = false;
          this.newOpt[4].nClick = true;
          this.newOpt[5].nClick = true;

          this.newStorage.loading = false;
          break;
        case "commitStorage":
          this.commitStorage.loading = true;
          this.newOpt[3].nClick = true;
          this.newOpt[4].nClick = false;
          this.newOpt[5].nClick = false;

          this.commitStorage.loading = false;
          break;
        case "inStorage":
          this.inStorage.loading = true;
          this.newOpt[3].nClick = true;
          this.newOpt[4].nClick = true;
          this.newOpt[5].nClick = false;

          this.inStorage.loading = false;

          break;
      }
    },
    clickBtmTabs: function clickBtmTabs() {
      switch (this.btmActiveName) {
        case "storageDetail":
          this.storageDetail.loading = true;

          this.storageDetail.loading = false;
          break;
        case "storagePicture":
          break;

        case "storageRecord":
          break;
      }
    },
    addOtherStorage: function addOtherStorage() {
      this.newStorageDialog.show = true;
    }
  },
  watch: {
    newOpt: {
      handler: function handler() {
        this.updateOpts();
      },

      immediate: true,
      deep: true
    }
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
  mounted: function mounted() {
    this.clickTopTabs();
    this.clickBtmTabs();
    this.updateOpts();
  }
});

/***/ }),

/***/ 1101:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("div", { staticClass: "search_box" }, [
        _c("div", { staticClass: "searchBox" }, [
          _c(
            "span",
            [
              _c("label", [_vm._v("入库单号")]),
              _vm._v(" "),
              _c("el-input", {
                attrs: { clearable: "" },
                nativeOn: {
                  keyuo: function($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                    ) {
                      return null
                    }
                    return _vm.handleQuery($event)
                  }
                },
                model: {
                  value: _vm.searchBox.storage_no,
                  callback: function($$v) {
                    _vm.$set(
                      _vm.searchBox,
                      "storage_no",
                      typeof $$v === "string" ? $$v.trim() : $$v
                    )
                  },
                  expression: "searchBox.storage_no"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "span",
            [
              _c("label", [_vm._v("外部单号")]),
              _vm._v(" "),
              _c("el-input", {
                attrs: { clearable: "" },
                nativeOn: {
                  keyup: function($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                    ) {
                      return null
                    }
                    return _vm.handleQuery($event)
                  }
                },
                model: {
                  value: _vm.searchBox.external_no,
                  callback: function($$v) {
                    _vm.$set(
                      _vm.searchBox,
                      "external_no",
                      typeof $$v === "string" ? $$v.trim() : $$v
                    )
                  },
                  expression: "searchBox.external_no"
                }
              })
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
                nativeOn: {
                  keyup: function($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                    ) {
                      return null
                    }
                    return _vm.handleQuery($event)
                  }
                },
                model: {
                  value: _vm.searchBox.purchase_no,
                  callback: function($$v) {
                    _vm.$set(
                      _vm.searchBox,
                      "purchase_no",
                      typeof $$v === "string" ? $$v.trim() : $$v
                    )
                  },
                  expression: "searchBox.purchase_no"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "span",
            [
              _c("label", [_vm._v("规格编码")]),
              _vm._v(" "),
              _c("el-input", {
                attrs: { clearable: "" },
                nativeOn: {
                  keyup: function($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                    ) {
                      return null
                    }
                    return _vm.handleQuery($event)
                  }
                },
                model: {
                  value: _vm.searchBox.spec_no,
                  callback: function($$v) {
                    _vm.$set(
                      _vm.searchBox,
                      "spec_no",
                      typeof $$v === "string" ? $$v.trim() : $$v
                    )
                  },
                  expression: "searchBox.spec_no"
                }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "searchBox" }, [
          _c(
            "span",
            [
              _c("label", [_vm._v("创建时间")]),
              _vm._v(" "),
              _c("el-date-picker", {
                attrs: {
                  type: "daterange",
                  "range-separator": "至",
                  "start-placeholder": "开始日期",
                  "end-placeholder": "结束日期"
                },
                model: {
                  value: _vm.searchBox.create_time,
                  callback: function($$v) {
                    _vm.$set(_vm.searchBox, "create_time", $$v)
                  },
                  expression: "searchBox.create_time"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "span",
            [
              _c("label", [_vm._v("提交时间")]),
              _vm._v(" "),
              _c("el-date-picker", {
                attrs: {
                  type: "daterange",
                  "range-separator": "至",
                  "start-placeholder": "开始日期",
                  "end-placeholder": "结束日期"
                },
                model: {
                  value: _vm.searchBox.commit_time,
                  callback: function($$v) {
                    _vm.$set(_vm.searchBox, "commit_time", $$v)
                  },
                  expression: "searchBox.commit_time"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "span",
            [
              _c("label", [_vm._v("入库时间")]),
              _vm._v(" "),
              _c("el-date-picker", {
                attrs: {
                  type: "daterange",
                  "range-separator": "至",
                  "start-placeholder": "开始日期",
                  "end-placeholder": "结束日期"
                },
                model: {
                  value: _vm.searchBox.storage_time,
                  callback: function($$v) {
                    _vm.$set(_vm.searchBox, "storage_time", $$v)
                  },
                  expression: "searchBox.storage_time"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("span")
        ])
      ]),
      _vm._v(" "),
      _c(
        "el-tabs",
        {
          on: { "tab-click": _vm.clickTopTabs },
          model: {
            value: _vm.topActiveName,
            callback: function($$v) {
              _vm.topActiveName = $$v
            },
            expression: "topActiveName"
          }
        },
        [
          _c(
            "el-tab-pane",
            { attrs: { label: "新建", name: "newStorage" } },
            [
              _c(
                "el-table",
                {
                  directives: [
                    {
                      name: "loading",
                      rawName: "v-loading",
                      value: _vm.newStorage.loading,
                      expression: "newStorage.loading"
                    }
                  ],
                  attrs: { data: _vm.newStorage.data, fit: "", height: "300" }
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
                  _vm._l(_vm.newStorage.table, function(item) {
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
                                item.type === "select"
                                  ? _c("span", [
                                      scope.row[item.prop] === ""
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
                                  : item.type === "checkbox"
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
                                  : item.type === "img"
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
                                                src: scope.row[item.prop],
                                                alt: ""
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
                  })
                ],
                2
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-tab-pane",
            { attrs: { label: "已提交", name: "commitStorage" } },
            [
              _c(
                "el-table",
                {
                  directives: [
                    {
                      name: "loading",
                      rawName: "v-loading",
                      value: _vm.commitStorage.loading,
                      expression: "commitStorage.loading"
                    }
                  ],
                  attrs: {
                    data: _vm.commitStorage.data,
                    fit: "",
                    height: "300"
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
                  _vm._l(_vm.commitStorage.table, function(item) {
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
                                item.type === "select"
                                  ? _c("span", [
                                      scope.row[item.prop] === ""
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
                                  : item.type === "checkbox"
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
                                  : item.type === "img"
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
                                                src: scope.row[item.prop],
                                                alt: ""
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
                  })
                ],
                2
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-tab-pane",
            { attrs: { label: "已入库", name: "inStorage" } },
            [
              _c(
                "el-table",
                {
                  directives: [
                    {
                      name: "loading",
                      rawName: "v-loading",
                      value: _vm.inStorage.loading,
                      expression: "inStorage.loading"
                    }
                  ],
                  attrs: { data: _vm.inStorage.data, fit: "", height: "300" }
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
                  _vm._l(_vm.inStorage.table, function(item) {
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
                                item.type === "select"
                                  ? _c("span", [
                                      scope.row[item.prop] === ""
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
                                  : item.type === "checkbox"
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
                                  : item.type === "img"
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
                                                src: scope.row[item.prop],
                                                alt: ""
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
      _c("Pagination", { attrs: { "page-url": _vm.urls["otherStorage"] } }),
      _vm._v(" "),
      _c(
        "el-tabs",
        {
          on: { "tab-click": _vm.clickBtmTabs },
          model: {
            value: _vm.btmActiveName,
            callback: function($$v) {
              _vm.btmActiveName = $$v
            },
            expression: "btmActiveName"
          }
        },
        [
          _c(
            "el-tab-pane",
            { attrs: { label: "入库单明细", name: "storageDetail" } },
            [
              _c(
                "el-table",
                {
                  directives: [
                    {
                      name: "loading",
                      rawName: "v-loading",
                      value: _vm.storageDetail.loading,
                      expression: "storageDetail.loading"
                    }
                  ],
                  attrs: {
                    data: _vm.storageDetail.data,
                    fit: "",
                    height: "300"
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
                  _vm._l(_vm.storageDetail.table, function(item) {
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
                                item.type === "select"
                                  ? _c("span", [
                                      scope.row[item.prop] === ""
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
                                  : item.type === "checkbox"
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
                                  : item.type === "img"
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
                                                src: scope.row[item.prop],
                                                alt: ""
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
                  })
                ],
                2
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("el-tab-pane", {
            attrs: { label: "入库图片", name: "storagePicture" }
          }),
          _vm._v(" "),
          _c("el-tab-pane", {
            attrs: { label: "操作记录", name: "storageRecord" }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-dialog",
        {
          class: { "more-forms": _vm.moreForms },
          attrs: { title: "添加商品", visible: _vm.newStorageDialog.show },
          on: {
            "update:visible": function($event) {
              return _vm.$set(_vm.newStorageDialog, "show", $event)
            }
          }
        },
        [
          _c("div", { staticClass: "searchBox cancelPur" }, [
            _c(
              "span",
              [
                _c("label", [_vm._v("入库单号")]),
                _vm._v(" "),
                _c("el-input", {
                  attrs: { placeholder: "系统自动生成", disabled: "" },
                  model: {
                    value: _vm.newStorageDialog.data.storage_no,
                    callback: function($$v) {
                      _vm.$set(_vm.newStorageDialog.data, "storage_no", $$v)
                    },
                    expression: "newStorageDialog.data.storage_no"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "span",
              [
                _c("label", [_vm._v("外部单号")]),
                _vm._v(" "),
                _c("el-input", {
                  model: {
                    value: _vm.newStorageDialog.data.external_no,
                    callback: function($$v) {
                      _vm.$set(_vm.newStorageDialog.data, "external_no", $$v)
                    },
                    expression: "newStorageDialog.data.external_no"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "span",
              [
                _c("label", [_vm._v("入库仓库")]),
                _vm._v(" "),
                _c(
                  "el-select",
                  {
                    attrs: { clearable: "", placeholder: "请选择" },
                    nativeOn: {
                      keyup: function($event) {
                        if (
                          !$event.type.indexOf("key") &&
                          _vm._k(
                            $event.keyCode,
                            "enter",
                            13,
                            $event.key,
                            "Enter"
                          )
                        ) {
                          return null
                        }
                        return _vm.handleQuery($event)
                      }
                    },
                    model: {
                      value: _vm.newStorageDialog.data.shopName,
                      callback: function($$v) {
                        _vm.$set(_vm.newStorageDialog.data, "shopName", $$v)
                      },
                      expression: "newStorageDialog.data.shopName"
                    }
                  },
                  _vm._l(_vm.resData.shopNames, function(item) {
                    return _c("el-option", {
                      key: item.value,
                      attrs: { label: item.name, value: item.id }
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
                _c("label", [_vm._v("供应商")]),
                _vm._v(" "),
                _c(
                  "el-select",
                  {
                    attrs: { clearable: "", placeholder: "请选择" },
                    nativeOn: {
                      keyup: function($event) {
                        if (
                          !$event.type.indexOf("key") &&
                          _vm._k(
                            $event.keyCode,
                            "enter",
                            13,
                            $event.key,
                            "Enter"
                          )
                        ) {
                          return null
                        }
                        return _vm.handleQuery($event)
                      }
                    },
                    model: {
                      value: _vm.newStorageDialog.data.supplier,
                      callback: function($$v) {
                        _vm.$set(_vm.newStorageDialog.data, "supplier", $$v)
                      },
                      expression: "newStorageDialog.data.supplier"
                    }
                  },
                  _vm._l(_vm.resData.suppliers, function(item) {
                    return _c("el-option", {
                      key: item.value,
                      attrs: { label: item.name, value: item.id }
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
                _c("label", [_vm._v("开单时间")]),
                _vm._v(" "),
                _c("el-date-picker", {
                  attrs: { type: "date" },
                  model: {
                    value: _vm.newStorageDialog.data.start_at,
                    callback: function($$v) {
                      _vm.$set(_vm.newStorageDialog.data, "start_at", $$v)
                    },
                    expression: "newStorageDialog.data.start_at"
                  }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("el-button", { attrs: { type: "text" } }, [_vm._v("入库明细")]),
          _vm._v(" "),
          _c(
            "el-table",
            {
              attrs: {
                data: _vm.newStorageDialog.data.data,
                fit: "",
                height: "350",
                "row-class-name": _vm.cancelRowCName
              },
              on: { "cell-click": _vm.addCellClick }
            },
            [
              _vm._l(_vm.newStorageDialog.data.tableHead, function(
                item,
                index
              ) {
                return _c("el-table-column", {
                  key: index,
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
                            item.prop == "purchase_fabric"
                              ? _c("span", [
                                  _vm.addCurRow == "index" + scope.$index
                                    ? _c(
                                        "span",
                                        [
                                          _c("el-input", {
                                            on: {
                                              input: function($event) {
                                                return _vm.purQChg(scope.row)
                                              }
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
                                    : _c("span", [
                                        _vm._v(_vm._s(scope.row[item.prop]))
                                      ])
                                ])
                              : _c("span", [
                                  item.type == "img"
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
                                                  src: scope.row[item.prop]
                                                },
                                                slot: "reference"
                                              })
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                    : item.type == "select"
                                    ? _c(
                                        "span",
                                        _vm._l(
                                          _vm.resData[item.stateVal],
                                          function(list, index) {
                                            return _c("span", { key: index }, [
                                              list.id == scope.row[item.prop]
                                                ? _c("span", [
                                                    _vm._v(_vm._s(list.name))
                                                  ])
                                                : _vm._e()
                                            ])
                                          }
                                        ),
                                        0
                                      )
                                    : _c("span", [
                                        _vm._v(_vm._s(scope.row[item.prop]))
                                      ])
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
                  width: "90",
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
                                return _vm.delAddPur(scope.$index)
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
                      on: { click: _vm.addProDtl }
                    },
                    [_vm._v("增加明细")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticStyle: { float: "right" } },
                [
                  _c(
                    "el-button",
                    {
                      attrs: { type: "primary" },
                      on: { click: _vm.confirmAdd }
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
          class: { "more-forms": _vm.moreForms },
          attrs: { title: "商品明细", visible: _vm.proDtlMask },
          on: {
            "update:visible": function($event) {
              _vm.proDtlMask = $event
            }
          }
        },
        [
          _c(
            "div",
            { staticClass: "searchBox" },
            [
              _c(
                "span",
                [
                  _c("label", [_vm._v("商品编码")]),
                  _vm._v(" "),
                  _c("el-input", {
                    attrs: { clearable: "", placeholder: "请输入商品编码" },
                    nativeOn: {
                      keyup: function($event) {
                        if (
                          !$event.type.indexOf("key") &&
                          _vm._k(
                            $event.keyCode,
                            "enter",
                            13,
                            $event.key,
                            "Enter"
                          )
                        ) {
                          return null
                        }
                        return _vm.proQueryClick($event)
                      }
                    },
                    model: {
                      value: _vm.proQuery.commodity_code,
                      callback: function($$v) {
                        _vm.$set(
                          _vm.proQuery,
                          "commodity_code",
                          typeof $$v === "string" ? $$v.trim() : $$v
                        )
                      },
                      expression: "proQuery.commodity_code"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "span",
                [
                  _c("label", [_vm._v("供应商")]),
                  _vm._v(" "),
                  _c(
                    "el-select",
                    {
                      attrs: { clearable: "", placeholder: "请选择店铺名称" },
                      nativeOn: {
                        keyup: function($event) {
                          if (
                            !$event.type.indexOf("key") &&
                            _vm._k(
                              $event.keyCode,
                              "enter",
                              13,
                              $event.key,
                              "Enter"
                            )
                          ) {
                            return null
                          }
                          return _vm.proQueryClick($event)
                        }
                      },
                      model: {
                        value: _vm.proQuery.suppliers_id,
                        callback: function($$v) {
                          _vm.$set(_vm.proQuery, "suppliers_id", $$v)
                        },
                        expression: "proQuery.suppliers_id"
                      }
                    },
                    _vm._l(_vm.resData.suppliers, function(item) {
                      return _c("el-option", {
                        key: item.value,
                        attrs: { label: item.nick, value: item.id }
                      })
                    }),
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-button",
                {
                  attrs: { type: "primary" },
                  on: { click: _vm.proQueryClick }
                },
                [_vm._v("查询")]
              ),
              _vm._v(" "),
              _c(
                "el-button",
                { attrs: { type: "primary" }, on: { click: _vm.proExport } },
                [_vm._v("导出")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-table",
            {
              attrs: {
                data: _vm.proDtlVal,
                fit: "",
                height: "350",
                "row-class-name": _vm.proDtlCName
              },
              on: { "row-click": _vm.proDtlRClick }
            },
            _vm._l(_vm.proDtlHead, function(item) {
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
                          item.prop == "newData"
                            ? _c("span", [
                                _vm.proDtlRIndex == "index" + scope.$index
                                  ? _c(
                                      "span",
                                      [
                                        _c("el-input", {
                                          attrs: {
                                            size: "small",
                                            type: "number",
                                            placeholder: item.holder
                                          },
                                          on: { input: _vm.compValChg },
                                          model: {
                                            value:
                                              scope.row[item.prop][item.inProp],
                                            callback: function($$v) {
                                              _vm.$set(
                                                scope.row[item.prop],
                                                item.inProp,
                                                typeof $$v === "string"
                                                  ? $$v.trim()
                                                  : $$v
                                              )
                                            },
                                            expression:
                                              "scope.row[item.prop][item.inProp]"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  : _c("span", [
                                      _vm._v(
                                        _vm._s(
                                          scope.row[item.prop][item.inProp]
                                        )
                                      )
                                    ])
                              ])
                            : item.prop
                            ? _c("span", [
                                item.type == "select"
                                  ? _c(
                                      "span",
                                      _vm._l(
                                        _vm.resData[item.stateVal],
                                        function(list) {
                                          return _c("span", { key: list.id }, [
                                            list.id == scope.row[item.prop]
                                              ? _c("span", [
                                                  _vm._v(
                                                    _vm._s(
                                                      list.name
                                                        ? list.name
                                                        : list.title
                                                    )
                                                  )
                                                ])
                                              : _vm._e()
                                          ])
                                        }
                                      ),
                                      0
                                    )
                                  : _c("span", [
                                      _vm._v(
                                        _vm._s(
                                          item.inProp
                                            ? scope.row[item.prop][item.inProp]
                                            : scope.row[item.prop]
                                        )
                                      )
                                    ])
                              ])
                            : _vm._e()
                        ]
                      }
                    }
                  ],
                  null,
                  true
                )
              })
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
                  on: { click: _vm.confirmAddProDtl }
                },
                [_vm._v("确定")]
              ),
              _vm._v(" "),
              _c("el-button", { on: { click: _vm.cancelAddProDtl } }, [
                _vm._v("关闭")
              ])
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
    require("vue-hot-reload-api")      .rerender("data-v-85f29114", module.exports)
  }
}

/***/ }),

/***/ 961:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(12)
/* script */
var __vue_script__ = __webpack_require__(1100)
/* template */
var __vue_template__ = __webpack_require__(1101)
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
Component.options.__file = "resources/assets/js/views/purchase/otherStorage.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-85f29114", Component.options)
  } else {
    hotAPI.reload("data-v-85f29114", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});