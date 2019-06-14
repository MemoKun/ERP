webpackJsonp([65],{

/***/ 1156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_element_china_area_data__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_element_china_area_data___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_element_china_area_data__);
var _methods;

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
//
//
//
//
//
//
//
//
//
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
        ent: this.addPro
      }, {
        cnt: '修改',
        icon: 'bf-change',
        ent: this.updatePro
      }, {
        cnt: '删除',
        icon: 'bf-del',
        ent: this.delPro
      }, {
        cnt: '审核',
        icon: 'bf-audit',
        ent: this.audit,
        nClick: false
      }, {
        cnt: '作废',
        icon: 'bf-void',
        ent: this.void,
        nClick: false
      }, {
        cnt: '刷新',
        icon: 'bf-refresh',
        ent: this.refresh
      }],
      /*买就送商品 */
      productsData: [],
      productsHead: [{
        label: '标题',
        width: '160',
        prop: 'title',
        type: 'text'
      }, {
        label: '商品编码',
        width: '160',
        prop: 'commodity_code',
        type: 'text'
      }, {
        label: '规格编码',
        width: '160',
        prop: 'spec_code',
        type: 'text'
      }, {
        label: '商品简称',
        width: '160',
        prop: 'short_name',
        type: 'text'
      }, {
        label: '规格名称',
        width: '160',
        prop: 'spec_name',
        type: 'text'
      }, {
        label: '是否启用',
        width: '160',
        prop: 'status',
        type: 'checkbox'
      }, {
        label: '创建时间',
        width: '160',
        prop: 'created_at',
        type: 'text'
      }],
      productsRow: {},
      /*买就送赠品*/
      giftData: [],
      giftHead: [{
        label: '商品编码',
        width: '160',
        prop: 'commodity_code',
        type: 'text'
      }, {
        label: '规格编码',
        width: '160',
        prop: 'spec_code',
        type: 'text'
      }, {
        label: '商品简称',
        width: '160',
        prop: 'short_name',
        type: 'text'
      }, {
        label: '规格名称',
        width: '160',
        prop: 'spec_name',
        type: 'text'
      }, {
        label: '数量',
        width: '160',
        prop: 'quantity',
        type: 'number'
      }],
      checkboxInit: false,
      moreForms: true,
      //新增
      addMask: false,
      addProForm: {
        title: '',
        commodity_code: '',
        spec_code: '',
        short_name: '',
        spec_name: '',
        status: true
      },
      addGiftForm: [{
        commodity_code: '',
        spec_code: '',
        short_name: '',
        spec_name: '',
        quantity: ''
      }],
      addProHead: [{
        label: '标题',
        prop: 'title',
        width: '160',
        holder: '请输入标题',
        type: 'text'
      }, {
        label: '商品编码',
        prop: 'commodity_code',
        width: '160',
        holder: '请输入商品编码',
        type: 'text'
      }, {
        label: '规格编码',
        prop: 'spec_code',
        width: '160',
        holder: '请输入规格编码',
        type: 'text'
      }, {
        label: '商品简称',
        prop: 'short_name',
        width: '160',
        holder: '请输入商品简称',
        type: 'text'
      }, {
        label: '规格名称',
        prop: 'spec_name',
        width: '160',
        holder: '请输入规格名称',
        type: 'text'
      }],
      addGiftHead: [{
        label: '商品编码',
        prop: 'commodity_code',
        width: '160',
        holder: '请输入商品编码',
        type: 'text'
      }, {
        label: '规格编码',
        prop: 'spec_code',
        width: '160',
        holder: '请输入规格编码',
        type: 'text'
      }, {
        label: '商品简称',
        prop: 'short_name',
        width: '160',
        holder: '请输入商品简称',
        type: 'text'
      }, {
        label: '规格名称',
        prop: 'spec_name',
        width: '160',
        holder: '请输入规格名称',
        type: 'text'
      }, {
        label: '赠品数量',
        prop: 'quantity',
        width: '160',
        holder: '请输入赠品数量',
        type: 'number'
      }],
      addProRules: {
        title: [{ required: true, message: '请输入标题', trigger: 'blur' }]
      },
      addGiftIndex: '',
      options: __WEBPACK_IMPORTED_MODULE_0_element_china_area_data__["regionDataPlus"],
      //修改
      updateMask: false,
      updateProForm: {},
      updateGiftForm: [],
      updateGiftIndex: '',
      //删除
      showDel: false,
      delUrl: '',
      delId: '',
      delBatchUrl: '',
      delIds: [],
      currentId: '',
      //审核
      //作废
      //刷新
      loading: true,
      //分页
      pagination: {
        current_page: 1,
        per_page: 0,
        page_total: 0
      }
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
  methods: (_methods = {
    test: function test() {
      console.log(1);
    },

    //获取数据
    fetchData: function fetchData() {
      var _this = this;

      this.$fetch(this.urls.buyAndSendPro, {
        include: 'buyAndSendGift.buyAndSendPro'
      }).then(function (res) {
        _this.loading = false;
        _this.productsData = res.data;
        _this.giftData = res.data[0] ? res.data[0]['buyAndSendGift'].data : [];
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
    logicRowClick: function logicRowClick(row) {
      this.giftData = row['buyAndSendGift'].data;
      this.productsRow = row;
    },

    //新增
    addPro: function addPro() {
      this.addMask = true;
      this.addGiftIndex = 'index0';
      Object.assign(this.addProForm, this.$options.data().addProForm);
      Object.assign(this.addGiftForm, this.$options.data().addGiftForm);
    },
    addGiftName: function addGiftName(_ref) {
      var row = _ref.row,
          rowIndex = _ref.rowIndex;

      row.index = rowIndex;
    },
    addGiftRClick: function addGiftRClick(row) {
      this.addGiftIndex = 'index' + row.index;
    },
    addConfirm: function addConfirm() {
      var _this2 = this;

      var data = {
        title: this.addProForm.title,
        commodity_code: this.addProForm.commodity_code,
        spec_code: this.addProForm.spec_code,
        short_name: this.addProForm.short_name,
        spec_name: this.addProForm.spec_name,
        buy_and_send_gift: this.addGiftForm
      };
      this.$post(this.urls.buyAndSendPro, data).then(function () {
        _this2.addMask = false;
        _this2.refresh();
        _this2.$message({
          message: '添加成功',
          type: 'success'
        });
      }, function (err) {
        if (err.response) {
          var arr = err.response.data.errors;
          var arr1 = [];
          for (var i in arr) {
            arr1.push(arr[i]);
          }
          var str = arr1.join(',');
          _this2.$message.error(str);
        }
      });
    },
    addReset: function addReset() {
      Object.assign(this.addProForm, this.$options.data().addProForm);
      Object.assign(this.addGiftForm, this.$options.data().addGiftForm);
    },
    addCancel: function addCancel() {
      this.addMask = false;
    },
    addGiftRow: function addGiftRow() {
      var giftKey = {
        commodity_code: '',
        spec_code: '',
        short_name: '',
        spec_name: '',
        quantity: ''
      };
      if (this.addMask) {
        this.addGiftForm.push(giftKey);
        this.addGiftIndex = 'index' + (this.addGiftForm.length - 1);
      } else {
        this.updateGiftForm.push(giftKey);
        this.updateGiftIndex = 'index' + (this.updateGiftForm.length - 1);
      }
    },
    addGiftDel: function addGiftDel(index) {
      this.addGiftForm.splice(index, 1);
      this.$message({
        message: '删除买就送赠品成功',
        type: 'success'
      });
    }
  }, _defineProperty(_methods, 'addCancel', function addCancel() {
    this.addMask = false;
    this.$message({
      message: '取消添加',
      type: 'info'
    });
  }), _defineProperty(_methods, 'updatePro', function updatePro() {
    var _this3 = this;

    this.updateMask = true;
    var id = void 0;
    id = this.currentId ? this.currentId : this.productsRow.id;
    this.$fetch(this.urls.buyAndSendPro + '/' + id, {
      include: 'buyAndSendGift.buyAndSendPro'
    }).then(function (res) {
      _this3.updateProForm = {
        title: res.title,
        commodity_code: res.commodity_code,
        spec_code: res.spec_code,
        short_name: res.short_name,
        spec_name: res.spec_name
      };
      _this3.updateGiftForm = res['buyAndSendGift']['data'];
    }, function (err) {});
  }), _defineProperty(_methods, 'updateGiftCName', function updateGiftCName(_ref2) {
    var row = _ref2.row,
        rowIndex = _ref2.rowIndex;

    row.index = rowIndex;
  }), _defineProperty(_methods, 'updateGiftRClick', function updateGiftRClick(row) {
    this.updateGiftIndex = 'index' + row.index;
  }), _defineProperty(_methods, 'updateGiftDtl', function updateGiftDtl(row, index) {
    var _this4 = this;

    if (row.id) {
      this.$del(this.urls.buyAndSendGift + '/' + row.id).then(function () {
        _this4.updateGiftForm.splice(index, 1);
        _this4.$message({
          message: '删除买就送赠品成功',
          type: 'success'
        });
      });
    } else {
      this.updateGiftForm.splice(index, 1);
      this.$message({
        message: '删除买就送赠品成功',
        type: 'success'
      });
    }
  }), _defineProperty(_methods, 'updateConfirm', function updateConfirm() {
    var _this5 = this;

    var id = void 0;
    id = this.currentId ? this.currentId : this.productsRow.id;
    var data = {
      title: this.updateProForm.title,
      commodity_code: this.updateProForm.commodity_code,
      spec_code: this.updateProForm.spec_code,
      short_name: this.updateProForm.short_name,
      spec_name: this.updateProForm.spec_name,
      buy_and_send_gift: this.updateGiftForm
    };
    this.$patch(this.urls.buyAndSendPro + '/' + id, data).then(function () {
      _this5.updateMask = false;
      _this5.refresh();
      _this5.$message({
        message: '修改成功',
        type: 'success'
      });
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
  }), _defineProperty(_methods, 'updateCancel', function updateCancel() {
    this.updateMask = false;
    this.$message({
      message: '取消修改',
      type: 'info'
    });
  }), _defineProperty(_methods, 'handleSelectionChange', function handleSelectionChange(val) {
    var delArr = [];
    val.forEach(function (selectedItem) {
      delArr.push(selectedItem.id);
    });
    this.ids = delArr.join(',');
    this.currentId = val.length > 0 ? val[val.length - 1].id : '';
  }), _defineProperty(_methods, 'delPro', function delPro() {
    var _this6 = this;

    if (this.ids.length === 0) {
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
        _this6.$del(_this6.urls.buyAndSendPro, { ids: _this6.ids }).then(function () {
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
  }), _defineProperty(_methods, 'delSingle', function delSingle(row, e) {
    this.showDel = true;
    $('.el-popper').css({ left: e.x - 100 + 'px', top: e.y - 125 + 'px' });
    this.delId = row.id;
    this.delUrl = row['buyAndSendGift'] ? this.urls.buyAndSendPro : this.urls.buyAndSendGift;
  }), _defineProperty(_methods, 'confirmD', function confirmD(url, id) {
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
        _this7.$message.error(str);
      }
    });
  }), _defineProperty(_methods, 'cancelD', function cancelD() {
    this.showDel = false;
    this.$message({
      message: '取消删除',
      type: 'info'
    });
  }), _defineProperty(_methods, 'audit', function audit() {
    var _this8 = this;

    var id = this.currentId ? this.currentId : this.productsRow.id;
    this.$put(this.urls.buyAndSendPro + '/' + id + '/audit').then(function () {
      _this8.refresh();
      _this8.$message({
        message: '审核成功',
        type: 'success'
      });
    }, function (err) {
      if (err.response) {
        var arr = err.response.data.errors;
        var arr1 = [];
        for (var i in arr) {
          arr1.push(arr[i]);
        }
        var str = arr1.join(',');
        _this8.$message.error(str);
      }
    });
  }), _defineProperty(_methods, 'void', function _void() {
    var _this9 = this;

    var id = this.currentId ? this.currentId : this.productsRow.id;
    this.$put(this.urls.buyAndSendPro + '/' + id + '/void').then(function () {
      _this9.refresh();
      _this9.$message({
        message: '作废成功',
        type: 'success'
      });
    }, function (err) {
      if (err.response) {
        var arr = err.response.data.errors;
        var arr1 = [];
        for (var i in arr) {
          arr1.push(arr[i]);
        }
        var str = arr1.join(',');
        _this9.$message.error(str);
      }
    });
  }), _defineProperty(_methods, 'refresh', function refresh() {
    this.loading = true;
    this.fetchData();
  }), _defineProperty(_methods, 'handlePagChg', function handlePagChg(page) {
    var _this10 = this;

    this.$fetch(this.urls.buyAndSendPro, {
      include: 'buyAndSendGift.buyAndSendPro'
    }).then(function (res) {
      _this10.productsData = res.data;
    });
  }), _methods),
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

/***/ 1157:
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
            { attrs: { label: "买就送商品", name: "0" } },
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
                  attrs: { data: _vm.productsData },
                  on: {
                    "row-click": _vm.logicRowClick,
                    "selection-change": _vm.handleSelectionChange
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
                  _vm._l(_vm.productsHead, function(item) {
                    return _c("el-table-column", {
                      key: item.label,
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
        attrs: { "page-url": this.urls.buyAndSendPro },
        on: { handlePagChg: _vm.handlePagChg }
      }),
      _vm._v(" "),
      _c(
        "el-tabs",
        [
          _c(
            "el-tab-pane",
            { attrs: { label: "买就送赠品", name: "0" } },
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
                  attrs: { data: _vm.giftData }
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
                  _vm._l(_vm.giftHead, function(item) {
                    return _c("el-table-column", {
                      key: item.label,
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
                              [_vm._v("删除赠品")]
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
          class: { "more-forms": _vm.moreForms },
          attrs: { title: "新增", visible: _vm.addMask },
          on: {
            "update:visible": function($event) {
              _vm.addMask = $event
            }
          }
        },
        [
          _c("el-button", { attrs: { type: "text" } }, [_vm._v("买就送商品")]),
          _vm._v(" "),
          _c("add-new", {
            attrs: {
              "rule-form": _vm.addProForm,
              rules: _vm.addProRules,
              "add-arr": _vm.addProHead,
              onlyInputs: true
            }
          }),
          _vm._v(" "),
          _c(
            "div",
            [
              _c("el-button", { attrs: { type: "text" } }, [
                _vm._v("买就送赠品")
              ]),
              _vm._v(" "),
              _c(
                "el-table",
                {
                  attrs: {
                    data: _vm.addGiftForm,
                    fit: "",
                    height: "300",
                    "row-class-name": _vm.addGiftName
                  },
                  on: { "row-click": _vm.addGiftRClick }
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
                  _vm._l(_vm.addGiftHead, function(item) {
                    return _c("el-table-column", {
                      key: item.label,
                      attrs: { label: item.label, width: item.width },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "default",
                            fn: function(scope) {
                              return [
                                _vm.addGiftIndex == "index" + scope.$index
                                  ? _c("span", [
                                      item.type == "text"
                                        ? _c(
                                            "span",
                                            [
                                              _c("el-input", {
                                                attrs: {
                                                  size: "small",
                                                  type: "text",
                                                  placeholder: item.holder
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
                                                  expression:
                                                    "scope.row[item.prop]"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        : item.type == "number"
                                        ? _c(
                                            "span",
                                            [
                                              _c("el-input", {
                                                attrs: {
                                                  size: "small",
                                                  type: "number",
                                                  placeholder: item.holder
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
                                                  expression:
                                                    "scope.row[item.prop]"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        : _vm._e()
                                    ])
                                  : _c("span", [
                                      item.type == "text"
                                        ? _c("span", [
                                            _vm._v(
                                              "\n                " +
                                                _vm._s(scope.row[item.prop]) +
                                                "\n              "
                                            )
                                          ])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      item.type == "number"
                                        ? _c("span", [
                                            _vm._v(
                                              "\n                " +
                                                _vm._s(scope.row[item.prop]) +
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
                                    return _vm.addGiftDel(scope.$index)
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
                          on: { click: _vm.addGiftRow }
                        },
                        [_vm._v("添加买就送赠品")]
                      )
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
              ),
              _vm._v(" "),
              _c("el-button", { on: { click: _vm.addCancel } }, [
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
        "el-dialog",
        {
          class: { "more-forms": _vm.moreForms },
          attrs: { title: "修改", visible: _vm.updateMask },
          on: {
            "update:visible": function($event) {
              _vm.updateMask = $event
            }
          }
        },
        [
          _c("el-button", { attrs: { type: "text" } }, [_vm._v("买就送商品")]),
          _vm._v(" "),
          _c("add-new", {
            attrs: {
              "rule-form": _vm.updateProForm,
              rules: _vm.addProRules,
              "add-arr": _vm.addProHead,
              onlyInputs: true
            }
          }),
          _vm._v(" "),
          _c(
            "div",
            [
              _c("el-button", { attrs: { type: "text" } }, [
                _vm._v("买就送赠品")
              ]),
              _vm._v(" "),
              _c(
                "el-table",
                {
                  attrs: {
                    data: _vm.updateGiftForm,
                    fit: "",
                    height: "300",
                    "row-class-name": _vm.updateGiftCName
                  },
                  on: { "row-click": _vm.updateGiftRClick }
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
                  _vm._l(_vm.addGiftHead, function(item) {
                    return _c("el-table-column", {
                      key: item.label,
                      attrs: { label: item.label, width: item.width },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "default",
                            fn: function(scope) {
                              return [
                                _vm.updateGiftIndex == "index" + scope.$index
                                  ? _c("span", [
                                      item.type == "text"
                                        ? _c(
                                            "span",
                                            [
                                              _c("el-input", {
                                                attrs: {
                                                  size: "small",
                                                  type: "text",
                                                  placeholder: item.holder
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
                                                  expression:
                                                    "scope.row[item.prop]"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        : item.type == "number"
                                        ? _c(
                                            "span",
                                            [
                                              _c("el-input", {
                                                attrs: {
                                                  size: "small",
                                                  type: "number",
                                                  placeholder: item.holder
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
                                                  expression:
                                                    "scope.row[item.prop]"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        : _vm._e()
                                    ])
                                  : _c("span", [
                                      item.type == "text"
                                        ? _c("span", [
                                            _vm._v(
                                              "\n                " +
                                                _vm._s(scope.row[item.prop]) +
                                                "\n              "
                                            )
                                          ])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      item.type == "number"
                                        ? _c("span", [
                                            _vm._v(
                                              "\n                " +
                                                _vm._s(scope.row[item.prop]) +
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
                                    return _vm.updateGiftDtl(scope.$index)
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
                          on: { click: _vm.addGiftRow }
                        },
                        [_vm._v("添加买就送赠品")]
                      )
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
    require("vue-hot-reload-api")      .rerender("data-v-34f8f831", module.exports)
  }
}

/***/ }),

/***/ 989:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(12)
/* script */
var __vue_script__ = __webpack_require__(1156)
/* template */
var __vue_template__ = __webpack_require__(1157)
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
Component.options.__file = "resources/assets/js/views/basicInf/buyAndSendMag.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-34f8f831", Component.options)
  } else {
    hotAPI.reload("data-v-34f8f831", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});