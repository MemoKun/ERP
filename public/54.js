webpackJsonp([54],{

/***/ 1140:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      newOpt: [{
        cnt: "新增",
        icon: "bf-add",
        ent: this.addNew
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
        provider: "",
        commodity_code: "",
        specification_code: "",
        commodity_abbreviation: "",
        specification_name: ""
      },
      mainCheckboxInit: false,
      miniData: [],
      packageData: [],
      mainloading: true,
      mainIndex: "",
      topTableHead: [{
        label: "供应商",
        prop: "supplier_id",
        width: "150",
        type: "text"
      }, {
        label: "商品编码",
        prop: "order_id",
        width: "200",
        type: "text"
      }, {
        label: "规格编码",
        prop: "specification_id",
        width: "200",
        type: "text"
      }, {
        label: "商品简称",
        prop: "order_name",
        width: "150",
        type: "text"
      }, {
        label: "规格名称",
        prop: "specification_name",
        width: "150",
        type: "text"
      }],
      bottomTableHead: [{
        label: "商品编码",
        prop: "def_order_id",
        width: "200",
        type: "text"
      }, {
        label: "规格编码",
        prop: "def_specification_id",
        width: "200",
        type: "text"
      }, {
        label: "商品简称",
        prop: "def_order_name",
        width: "150",
        type: "text"
      }, {
        label: "规格名称",
        prop: "def_specification_name",
        width: "150",
        type: "text"
      }],
      // 新增
      moreForms: true,
      showMask: false,
      mainProDtlVal: [],
      addMainProDtlVal: [],
      mainProHead: [{
        label: "商品编码",
        prop: "commodity_code",
        width: "160",
        type: "text"
      }, {
        label: "商品简称",
        prop: "short_name",
        width: "150",
        type: "text"
      }, {
        label: "规格编码",
        prop: "specification_id",
        width: "200",
        type: "text"
      }, {
        label: "商品名称",
        prop: "title",
        width: "130",
        type: "text"
      }, {
        label: "规格名称",
        prop: "specification_name",
        width: "150",
        type: "text"
      }, {
        label: "供应商",
        prop: "supplier",
        inProp: "name",
        width: "130",
        type: "text"
      }],
      defCheckboxInit: [],
      addDefProDtlVal: [],
      defProDtlVal: [],
      defProHead: [{
        label: "商品编码",
        prop: "commodity_code",
        width: "160",
        type: "text"
      }, {
        label: "商品简称",
        prop: "short_name",
        width: "150",
        type: "text"
      }, {
        label: "规格编码",
        prop: "specification_id",
        width: "200",
        type: "text"
      }, {
        label: "商品名称",
        prop: "title",
        width: "130",
        type: "text"
      }, {
        label: "规格名称",
        prop: "specification_name",
        width: "150",
        type: "text"
      }, {
        label: "供应商",
        prop: "supplier",
        inProp: "name",
        width: "130",
        type: "text"
      }],
      // 删除
      showDel: false,
      delId: "",
      delArr: [],
      proSelection: "",
      proCompValChg: false,
      proCompIndex: "",
      // 修改
      updateProMask: false,
      updateId: "",
      updateProIndex: "",
      updateForm: {},
      componentShowChg: true,
      updateCompUpload: "upload0",
      updateRwIndex: "0"
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
      console.log(this.resData);
    },

    // 获取数据
    miniRowCName: function miniRowCName(_ref) {
      var row = _ref.row,
          rowIndex = _ref.rowIndex;

      row.index = rowIndex;
    },
    miniRowClick: function miniRowClick(row) {
      this.packageData = [];
      this.packageData.push(row);
    },
    getData: function getData() {
      var _this = this;

      this.$fetch(this.urls.minipackage).then(function (res) {
        _this.mainloading = false;
        _this.miniData = res.data;
        _this.defCheckboxInit = false;
        _this.mainCheckboxInit = false;
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
      this.proSelection = val;
      var del = [];
      val.forEach(function (selectedItem) {
        del.push(selectedItem.id);
      });
      this.delArr = del.join(",");
    },

    // 新增
    mainRowClick: function mainRowClick(row) {
      this.addMainProDtlVal = row;
    },
    defProRowClick: function defProRowClick(row) {
      this.addDefProDtlVal = row;
    },
    addNew: function addNew() {
      this.showMask = true;
      this.addMainProDtlVal = [];
      this.addDefProDtlVal = [];
      this.proQueryClick();
    },
    proQueryClick: function proQueryClick() {
      var _this2 = this;

      this.addMainProDtlVal = [];
      this.addDefProDtlVal = [];
      this.mainProDtlVal = [];
      this.defProDtlVal = [];
      this.proCompValChg = false;
      this.proCompIndex = "0";
      this.$fetch(this.urls.products, {
        include: "productComponents,shop,supplier,goodsCategory,combinations.productComponents"
      }).then(function (res) {
        _this2.mainProDtlVal = res.data;
        _this2.defProDtlVal = res.data;
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

    // 确定添加
    submitForm: function submitForm() {
      var _this3 = this;

      var mainData = this.addMainProDtlVal;
      var defData = this.addDefProDtlVal;
      var submitData = {
        supplier_id: mainData.supplier.name,
        order_id: mainData.commodity_code,
        // specification_id: mainData.specification_id,
        order_name: mainData.short_name,
        // specification_name: mainData.specification_name,
        def_order_id: defData.commodity_code,
        // def_specification_id: defData.def_specification_id,
        def_order_name: defData.short_name
        // def_specification_name: defData.def_specification_name,
      };
      this.$post(this.urls.minipackage, submitData).then(function () {
        _this3.$message({
          message: "新建最小包成功",
          type: "success"
        });
        _this3.showMask = false;
        _this3.refresh();
      }, function (err) {
        if (err.response) {
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
    cancelAdd: function cancelAdd() {
      this.showMask = false;
      this.$message({
        message: "取消新建最小包",
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
      var _this4 = this;

      this.$del(this.urls.minipackage + "/" + id).then(function () {
        _this4.$message({
          message: "删除成功",
          type: "success"
        });
        _this4.showDel = false;
        _this4.refresh();
      }, function (err) {
        if (err.response) {
          _this4.showDel = false;
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
    },
    delMore: function delMore() {
      var _this5 = this;

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
          _this5.$del(_this5.urls.minipackage, { ids: _this5.delArr }).then(function () {
            _this5.$message({
              message: "删除成功",
              type: "success"
            });
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
        }).catch(function () {
          _this5.$message({
            type: "info",
            message: "已取消删除"
          });
        });
      }
    },
    refresh: function refresh() {
      this.mainloading = true;
      this.packageData = [];
      this.getData();
    },

    // 分页
    handlePagChg: function handlePagChg(page) {
      var _this6 = this;

      this.$fetch(this.urls.minipackage + "?page=" + page, {}).then(function (res) {
        _this6.logisticsData = res.data;
      });
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

/***/ 1141:
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
              _c("label", [_vm._v("供应商")]),
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
                  value: _vm.searchBox.provider,
                  callback: function($$v) {
                    _vm.$set(_vm.searchBox, "provider", $$v)
                  },
                  expression: "searchBox.provider"
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
                  value: _vm.searchBox.commodity_code,
                  callback: function($$v) {
                    _vm.$set(_vm.searchBox, "commodity_code", $$v)
                  },
                  expression: "searchBox.commodity_code"
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
                  value: _vm.searchBox.specification_code,
                  callback: function($$v) {
                    _vm.$set(_vm.searchBox, "specification_code", $$v)
                  },
                  expression: "searchBox.specification_code"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "span",
            [
              _c("label", [_vm._v("商品简称")]),
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
                  value: _vm.searchBox.commodity_abbreviation,
                  callback: function($$v) {
                    _vm.$set(_vm.searchBox, "commodity_abbreviation", $$v)
                  },
                  expression: "searchBox.commodity_abbreviation"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "span",
            [
              _c("label", [_vm._v("规格名称")]),
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
                  value: _vm.searchBox.specification_name,
                  callback: function($$v) {
                    _vm.$set(_vm.searchBox, "specification_name", $$v)
                  },
                  expression: "searchBox.specification_name"
                }
              })
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "el-tabs",
        [
          _c(
            "el-tab-pane",
            { attrs: { label: "主数据" } },
            [
              _c(
                "el-table",
                {
                  directives: [
                    {
                      name: "loading",
                      rawName: "v-loading",
                      value: _vm.mainloading,
                      expression: "mainloading"
                    }
                  ],
                  ref: "multipleTable",
                  attrs: {
                    data: _vm.miniData,
                    fit: "",
                    height: "300",
                    "row-class-name": _vm.miniRowCName
                  },
                  on: {
                    "selection-change": _vm.handleSelectionChange,
                    "row-click": _vm.miniRowClick
                  }
                },
                [
                  _c("el-table-column", {
                    attrs: {
                      type: "selection",
                      width: "95",
                      align: "center",
                      checked: _vm.mainCheckboxInit
                    }
                  }),
                  _vm._v(" "),
                  _vm._l(_vm.topTableHead, function(item) {
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
                      width: "150",
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
      _c("Pagination", {
        attrs: { "page-url": this.urls.minipackage },
        on: { handlePagChg: _vm.handlePagChg }
      }),
      _vm._v(" "),
      _c(
        "el-tabs",
        [
          _c(
            "el-tab-pane",
            { attrs: { label: "缺失包件" } },
            [
              _c(
                "el-table",
                { attrs: { data: _vm.packageData } },
                _vm._l(_vm.bottomTableHead, function(item) {
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
                1
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
          attrs: { title: "新建", visible: _vm.showMask },
          on: {
            "update:visible": function($event) {
              _vm.showMask = $event
            }
          }
        },
        [
          _c("el-button", { attrs: { type: "text" } }, [_vm._v("主数据")]),
          _vm._v(" "),
          _c(
            "el-table",
            {
              attrs: {
                data: _vm.mainProDtlVal,
                "highlight-current-row": "",
                height: "180",
                "row-class-name": _vm.mainRowCName
              },
              on: { "row-click": _vm.mainRowClick }
            },
            _vm._l(_vm.mainProHead, function(item) {
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
                                        attrs: { src: scope.row[item.prop] }
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
                                _vm._v(
                                  _vm._s(
                                    item.inProp
                                      ? scope.row[item.prop][item.inProp]
                                      : scope.row[item.prop]
                                  )
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
            1
          ),
          _vm._v(" "),
          _c("el-button", { attrs: { type: "text" } }, [_vm._v("缺失包件")]),
          _vm._v(" "),
          _c(
            "el-table",
            {
              attrs: {
                data: _vm.defProDtlVal,
                "highlight-current-row": "",
                height: "180",
                "row-class-name": _vm.defProRowCName
              },
              on: { "row-click": _vm.defProRowClick }
            },
            [
              _c("el-table-column", {
                attrs: {
                  type: "selection",
                  width: "95",
                  align: "center",
                  checked: _vm.defCheckboxInit
                }
              }),
              _vm._v(" "),
              _vm._l(_vm.defProHead, function(item) {
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
                                          attrs: { src: scope.row[item.prop] }
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
                                  _vm._v(
                                    _vm._s(
                                      item.inProp
                                        ? scope.row[item.prop][item.inProp]
                                        : scope.row[item.prop]
                                    )
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
                      on: { click: _vm.proQueryClick }
                    },
                    [_vm._v("刷新")]
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
    require("vue-hot-reload-api")      .rerender("data-v-0b5fd6bd", module.exports)
  }
}

/***/ }),

/***/ 991:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(12)
/* script */
var __vue_script__ = __webpack_require__(1140)
/* template */
var __vue_template__ = __webpack_require__(1141)
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
Component.options.__file = "resources/assets/js/views/basicInf/miniPackageMag.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0b5fd6bd", Component.options)
  } else {
    hotAPI.reload("data-v-0b5fd6bd", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});