webpackJsonp([48],{

/***/ 1154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_element_china_area_data__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_element_china_area_data___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_element_china_area_data__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        cnt: '刷新',
        icon: 'bf-refresh',
        ent: this.refresh
      }],
      //筛选信息输入
      searchBox: {
        short_name: '', //商品简称
        spec: '' //规格名称
        //包含材料
      },
      //分页
      pagination: {
        current_page: 1,
        per_page: 0,
        page_total: 0
      },
      /*产品信息 */
      productsData: [],
      productsHead: [{
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
        label: '规格',
        width: '160',
        prop: 'spec',
        type: 'text'
      }, {
        label: '颜色',
        width: '120',
        prop: 'color',
        type: 'text'
      }, {
        label: '材质',
        width: '160',
        prop: 'material_quality',
        type: 'text'
      }, {
        label: '特殊',
        width: '160',
        prop: 'special',
        type: 'text'
      }, {
        label: '其他',
        width: '160',
        prop: 'other',
        type: 'text'
      }],
      productRow: {},
      /*原材料 */
      materialData: [],
      materialHead: [{
        label: '材料编码',
        width: '160',
        prop: 'material_code',
        type: 'text'
      }, {
        label: '规格编码',
        width: '160',
        prop: 'spec_code',
        type: 'text'
      }, {
        label: '材料名称',
        width: '160',
        prop: 'material_name',
        type: 'text'
      }, {
        label: '规格',
        width: '160',
        prop: 'spec',
        type: 'text'
      }, {
        label: '颜色',
        width: '120',
        prop: 'color',
        type: 'text'
      }, {
        label: '材质',
        width: '160',
        prop: 'material_quality',
        type: 'text'
      }, {
        label: '特殊',
        width: '160',
        prop: 'special',
        type: 'text'
      }, {
        label: '其他',
        width: '160',
        prop: 'other',
        type: 'text'
      }, {
        label: '体积',
        width: '160',
        prop: 'volume',
        type: 'text'
      }, {
        label: '重量',
        width: '160',
        prop: 'weight',
        type: 'text'
      }, {
        label: '单位',
        width: '160',
        prop: 'unit',
        type: 'text'
      }, {
        label: '半成品',
        width: '160',
        prop: 'semi_finished',
        type: 'checkbox'
      }, {
        label: '启用',
        width: '160',
        prop: 'status',
        type: 'checkbox'
      }, {
        label: '所需数量',
        width: '160',
        prop: 'need',
        type: 'text'
      }],
      currentPage: true,
      checkboxInit: false,
      //新增
      addProMask: false,
      moreForms: true,
      addProForm: {
        commodity_code: '',
        spec_code: '',
        short_name: '',
        spec: '',
        color: '',
        material_quality: '',
        special: '',
        other: '',
        status: true
      },
      addProRules: {
        commodity_code: [{ required: true, message: '请输入商品编码', trigger: 'blur' }],
        spec_code: [{ required: true, message: '请输入规格编码', trigger: 'blur' }]
      },
      addProHead: [{
        label: '商品编码',
        prop: 'commodity_code',
        holder: '请输入商品编码',
        type: 'text'
      }, {
        label: '规格编码',
        prop: 'spec_code',
        holder: '请输入规格编码',
        type: 'text'
      }, {
        label: '商品简称',
        prop: 'short_name',
        holder: '请输入商品简称',
        type: 'text'
      }, {
        label: '规格',
        prop: 'spec',
        holder: '请输入规格',
        type: 'text'
      }, {
        label: '颜色',
        prop: 'color',
        holder: '请输入颜色',
        type: 'text'
      }, {
        label: '材质',
        prop: 'material_quality',
        holder: '请输入材质',
        type: 'text'
      }, {
        label: '特殊',
        prop: 'special',
        holder: '请输入特殊',
        type: 'text'
      }, {
        label: '其他',
        prop: 'other',
        holder: '请输入其他',
        type: 'text'
      }],
      addMaterialForm: [{
        material_code: '',
        spec_code: '',
        material_name: '',
        spec: '',
        color: '',
        material_quality: '',
        special: '',
        other: '',
        volume: '',
        weight: '',
        unit: '',
        semi_finished: false,
        status: true,
        need: ''
      }],
      addMaterialHead: [{
        label: '材料编码',
        prop: 'material_code',
        holder: '请输入材料编码',
        type: 'text'
      }, {
        label: '规格编码',
        prop: 'spec_code',
        holder: '请输入规格编码',
        type: 'text'
      }, {
        label: '材料名称',
        prop: 'material_name',
        holder: '请输入材料名称',
        type: 'text'
      }, {
        label: '规格',
        prop: 'spec',
        holder: '请输入规格',
        type: 'text'
      }, {
        label: '颜色',
        prop: 'color',
        holder: '请输入颜色',
        type: 'text'
      }, {
        label: '材质',
        prop: 'material_quality',
        holder: '请输入材质',
        type: 'text'
      }, {
        label: '特殊',
        prop: 'special',
        holder: '请输入特殊',
        type: 'text'
      }, {
        label: '其他',
        prop: 'other',
        holder: '请输入其他',
        type: 'text'
      }, {
        label: '体积',
        prop: 'volume',
        holder: '请输入体积',
        type: 'text'
      }, {
        label: '重量',
        prop: 'weight',
        holder: '请输入重量',
        type: 'text'
      }, {
        label: '单位',
        prop: 'unit',
        holder: '请输入单位',
        type: 'text'
      }, {
        label: '半成品',
        prop: 'semi_finished',
        holder: '请选择是否为半成品',
        type: 'checkbox'
      }, {
        label: '状态',
        prop: 'status',
        holder: '请输入状态',
        type: 'checkbox'
      }, {
        label: '所需数量',
        prop: 'need',
        holder: '请输入所需数量',
        type: 'text'
      }],
      options: __WEBPACK_IMPORTED_MODULE_0_element_china_area_data__["regionDataPlus"],
      materialIndex: '',
      /*刷新 */
      productsLoading: true,
      /*删除 */
      showDel: false,
      delId: '',
      delUrl: '',
      delBatchUrl: '',
      ids: [],
      currentId: '',
      //修改
      updateMask: false,
      updateProForm: {},
      updateMaterialForm: [],
      updateIndex: ''
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

    //筛选
    getData: function getData() {
      var _this = this;

      this.productsLoading = true;
      this.$fetch(this.urls.proBom, {
        short_name: this.searchBox.short_name,
        spec: this.searchBox.spec,
        include: 'proBomMaterial.proBom' }).then(function (res) {
        _this.productsLoading = false;
        _this.productsData = res.data;
        _this.materialData = res.data[0] ? res.data[0]['proBomMaterial'].data : [];
        var pg = res.meta.pagination;
        _this.$store.dispatch('currentPage', pg.current_page);
        _this.$store.commit('PER_PAGE', pg.per_page);
        _this.$store.commit('PAGE_TOTAL', pg.total);
      }, function (err) {
        if (err.response) {
          var arr = err.response.data.errors;
          var arr1 = [];
          for (var i in arr) {
            arr1.push(arr[i]);
          }
          var str = arr1.join(',');
          _this.$message.error({ $message: str });
        }
      });
    },

    //新增
    addPro: function addPro() {
      this.addProMask = true;
      this.materialIndex = 'index0';
      Object.assign(this.addProForm, this.$options.data().addProForm);
      Object.assign(this.addMaterialForm, this.$options.data().addMaterialForm);
    },
    addMaterialCName: function addMaterialCName(_ref) {
      var row = _ref.row,
          rowIndex = _ref.rowIndex;

      row.index = rowIndex;
    },
    addMaterialRClick: function addMaterialRClick(row) {
      this.materialIndex = 'index' + row.index;
    },
    addMaterial: function addMaterial() {
      var material = {
        material_code: '',
        spec_code: '',
        material_name: '',
        spec: '',
        color: '',
        material_quality: '',
        special: '',
        other: '',
        volume: '',
        weight: '',
        unit: '',
        semi_finished: false,
        status: true,
        need: ''
      };
      if (this.addProMask) {
        this.addMaterialForm.push(material);
        this.materialIndex = 'index' + (this.addMaterialForm.length - 1);
      } else {
        this.updateMaterialForm.push(material);
        this.updateIndex = 'index' + (this.updateMaterialForm.length - 1);
      }
    },
    addMaterialDtl: function addMaterialDtl(index) {
      this.addMaterialForm.splice(index, 1);
      this.$message({
        message: '删除城市信息成功',
        type: 'success'
      });
    },
    addConfirm: function addConfirm() {
      var _this2 = this;

      var data = {
        commodity_code: this.addProForm.commodity_code,
        spec_code: this.addProForm.spec_code,
        short_name: this.addProForm.short_name,
        spec: this.addProForm.spec,
        color: this.addProForm.color,
        material_quality: this.addProForm.material_quality,
        special: this.addProForm.special,
        other: this.addProForm.other,
        pro_bom_material: this.addMaterialForm
      };
      this.$post(this.urls.proBom, data).then(function () {
        _this2.addProMask = false;
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
      Object.assign(this.addMaterialForm, this.$options.data().addMaterialForm);
    },
    addCancel: function addCancel() {
      this.addLogicMask = false;
      this.$message({
        message: '取消添加',
        type: 'info'
      });
    },

    //修改
    updatePro: function updatePro() {
      var _this3 = this;

      this.updateMask = true;
      var id = this.currentId ? this.currentId : this.productRow.id;
      this.$fetch(this.urls.proBom + '/' + id, {
        include: 'proBomMaterial.proBom'
      }).then(function (res) {
        _this3.updateProForm = {
          commodity_code: res.commodity_code,
          spec_code: res.spec_code,
          short_name: res.short_name,
          spec: res.spec,
          color: res.color,
          material_quality: res.material_quality,
          special: res.special,
          other: res.other
        };
        _this3.updateMaterialForm = res['proBomMaterial']['data'];
      }, function (err) {});
    },
    updateMaterialCName: function updateMaterialCName(_ref2) {
      var row = _ref2.row,
          rowIndex = _ref2.rowIndex;

      row.index = rowIndex;
    },
    updateMaterialRClick: function updateMaterialRClick(row) {
      this.updateIndex = 'index' + row.index;
    },
    updateMaterialDtl: function updateMaterialDtl(row, index) {
      var _this4 = this;

      if (row.id) {
        this.$del(this.urls.proBomMaterial + '/' + row.id).then(function () {
          _this4.updateMaterialForm.splice(index, 1);
          _this4.$message({
            message: '删除原材料成功',
            type: 'success'
          });
        });
      } else {
        this.updateMaterialForm.splice(index, 1);
        this.$message({
          message: '删除原材料成功',
          type: 'success'
        });
      }
    },
    updateConfirm: function updateConfirm() {
      var _this5 = this;

      var id = this.currentId ? this.currentId : this.productRow.id;
      var data = {
        commodity_code: this.updateProForm.commodity_code,
        spec_code: this.updateProForm.spec_code,
        short_name: this.updateProForm.short_name,
        spec: this.updateProForm.spec,
        color: this.updateProForm.color,
        material_quality: this.updateProForm.material_quality,
        special: this.updateProForm.special,
        other: this.updateProForm.other,
        pro_bom_material: this.updateMaterialForm
      };
      this.$patch(this.urls.proBom + '/' + id, data).then(function () {
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
    },
    updateCancel: function updateCancel() {
      this.updateMask = false;
      this.$message({
        message: '取消修改',
        type: 'info'
      });
    },

    //删除
    delPro: function delPro() {
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
          _this6.$del(_this6.urls.proBom, { ids: _this6.ids }).then(function () {
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

    /*表中删除*/
    delSingle: function delSingle(row, e) {
      this.showDel = true;
      $('.el-popper').css({ left: e.x - 100 + 'px', top: e.y - 125 + 'px' });
      this.delId = row.id;
      this.delUrl = row['proBomMaterial'] ? this.urls.proBom : this.urls.proBomMaterial;
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
          _this7.$message.error(str);
        }
      });
    },

    //批量选择
    handleSelectionChange: function handleSelectionChange(val) {
      /*拿到id集合*/
      var delArr = [];
      val.forEach(function (selectedItem) {
        delArr.push(selectedItem.id);
      });
      this.ids = delArr.join(',');
      /*拿到当前id*/
      this.currentId = val.length > 0 ? val[val.length - 1].id : '';
    },

    /*刷新 */
    refresh: function refresh() {
      this.productsLoading = true;
      this.fetchData();
    },

    /*获取数据 */
    fetchData: function fetchData() {
      var _this8 = this;

      this.$fetch(this.urls.proBom, { include: 'proBomMaterial.proBom' }).then(function (res) {
        _this8.productsLoading = false;
        _this8.productsData = res.data;
        _this8.materialData = res.data[0] ? res.data[0]['proBomMaterial'].data : [];
        var pg = res.meta.pagination;
        _this8.$store.dispatch('currentPage', pg.current_page);
        _this8.$store.commit('PER_PAGE', pg.per_page);
        _this8.$store.commit('PAGE_TOTAL', pg.total);
      }, function (err) {
        if (err.response) {
          var arr = err.response.data.errors;
          var arr1 = [];
          for (var i in arr) {
            arr1.push(arr[i]);
          }
          var str = arr1.join(',');
          _this8.$message.error({ $message: str });
        }
      });
    },
    proRowClick: function proRowClick(row) {
      this.materialData = row['proBomMaterial'].data;
      this.productRow = row;
    },

    //重置
    resetAddPro: function resetAddPro() {},

    /*分页*/
    handlePagChg: function handlePagChg(page) {
      var _this9 = this;

      this.$fetch(this.urls.proBom + '?page=' + page, {
        include: 'proBomMaterial.proBom'
      }).then(function (res) {
        _this9.productsData = res.data;
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

/***/ 1155:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.currentPage
        ? _c(
            "div",
            { staticClass: "searchBox" },
            [
              _c(
                "span",
                [
                  _c("label", [_vm._v("商品简称")]),
                  _vm._v(" "),
                  _c("el-input", {
                    staticClass: "half",
                    attrs: { clearable: "" },
                    model: {
                      value: _vm.searchBox.short_name,
                      callback: function($$v) {
                        _vm.$set(_vm.searchBox, "short_name", $$v)
                      },
                      expression: "searchBox.short_name"
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
                    staticClass: "half",
                    attrs: { clearable: "" },
                    model: {
                      value: _vm.searchBox.spec,
                      callback: function($$v) {
                        _vm.$set(_vm.searchBox, "spec", $$v)
                      },
                      expression: "searchBox.spec"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-button",
                { attrs: { type: "primary" }, on: { click: _vm.getData } },
                [_vm._v("筛选")]
              ),
              _vm._v(" "),
              _c(
                "el-button",
                { attrs: { type: "info" }, on: { click: _vm.resetAddPro } },
                [_vm._v("重置")]
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "el-tabs",
        [
          _c(
            "el-tab-pane",
            { attrs: { label: "产品信息", name: "0" } },
            [
              _c(
                "el-table",
                {
                  directives: [
                    {
                      name: "loading",
                      rawName: "v-loading",
                      value: _vm.productsLoading,
                      expression: "productsLoading"
                    }
                  ],
                  attrs: { data: _vm.productsData },
                  on: {
                    "row-click": _vm.proRowClick,
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
        attrs: { "page-url": this.urls.proBom },
        on: { handlePagChg: _vm.handlePagChg }
      }),
      _vm._v(" "),
      _c(
        "el-tabs",
        [
          _c(
            "el-tab-pane",
            { attrs: { label: "原材料", name: "0" } },
            [
              _c(
                "el-table",
                {
                  directives: [
                    {
                      name: "loading",
                      rawName: "v-loading",
                      value: _vm.productsLoading,
                      expression: "productsLoading"
                    }
                  ],
                  attrs: { data: _vm.materialData }
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
                  _vm._l(_vm.materialHead, function(item) {
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
                              [_vm._v("删除原材料")]
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
          attrs: { title: "新增", visible: _vm.addProMask },
          on: {
            "update:visible": function($event) {
              _vm.addProMask = $event
            }
          }
        },
        [
          _c("el-button", { attrs: { type: "text" } }, [_vm._v("产品信息")]),
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
          _c("el-button", { attrs: { type: "text" } }, [_vm._v("原材料")]),
          _vm._v(" "),
          _c(
            "el-table",
            {
              attrs: {
                data: _vm.addMaterialForm,
                fit: "",
                height: "300",
                "row-class-name": _vm.addMaterialCName
              },
              on: { "row-click": _vm.addMaterialRClick }
            },
            [
              _vm._l(_vm.addMaterialHead, function(item) {
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
                            _vm.materialIndex == "index" + scope.$index
                              ? _c("span", [
                                  item.type == "checkbox"
                                    ? _c(
                                        "span",
                                        [
                                          _c("el-checkbox", {
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
                                    : _c(
                                        "span",
                                        [
                                          _c("el-input", {
                                            attrs: {
                                              size: "small",
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
                                              expression: "scope.row[item.prop]"
                                            }
                                          })
                                        ],
                                        1
                                      )
                                ])
                              : _c("span", [
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
                                            _vm._s(scope.row[item.prop]) +
                                            "\n            "
                                        )
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
                                return _vm.addMaterialDtl(scope.$index)
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
                      on: { click: _vm.addMaterial }
                    },
                    [_vm._v("添加原材料")]
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
                      on: { click: _vm.addConfirm }
                    },
                    [_vm._v("确定")]
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
          attrs: { title: "编辑", visible: _vm.updateMask },
          on: {
            "update:visible": function($event) {
              _vm.updateMask = $event
            }
          }
        },
        [
          _c("el-button", { attrs: { type: "text" } }, [_vm._v("产品信息")]),
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
          _c("el-button", { attrs: { type: "text" } }, [_vm._v("原材料")]),
          _vm._v(" "),
          _c(
            "el-table",
            {
              attrs: {
                data: _vm.updateMaterialForm,
                fit: "",
                height: "300",
                "row-class-name": _vm.updateMaterialCName
              },
              on: { "row-click": _vm.updateMaterialRClick }
            },
            [
              _vm._l(_vm.addMaterialHead, function(item) {
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
                            _vm.materialIndex == "index" + scope.$index
                              ? _c("span", [
                                  item.type == "checkbox"
                                    ? _c(
                                        "span",
                                        [
                                          _c("el-checkbox", {
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
                                    : _c(
                                        "span",
                                        [
                                          _c("el-input", {
                                            attrs: {
                                              size: "small",
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
                                              expression: "scope.row[item.prop]"
                                            }
                                          })
                                        ],
                                        1
                                      )
                                ])
                              : _c("span", [
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
                                            _vm._s(scope.row[item.prop]) +
                                            "\n            "
                                        )
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
                                return _vm.updateMaterialDtl(scope.$index)
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
                      on: { click: _vm.addMaterial }
                    },
                    [_vm._v("添加原材料")]
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
                      on: { click: _vm.updateConfirm }
                    },
                    [_vm._v("确定")]
                  ),
                  _vm._v(" "),
                  _c("el-button", { on: { click: _vm.updateCancel } }, [
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
    require("vue-hot-reload-api")      .rerender("data-v-293375a8", module.exports)
  }
}

/***/ }),

/***/ 987:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(12)
/* script */
var __vue_script__ = __webpack_require__(1154)
/* template */
var __vue_template__ = __webpack_require__(1155)
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
Component.options.__file = "resources/assets/js/views/basicInf/proBom.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-293375a8", Component.options)
  } else {
    hotAPI.reload("data-v-293375a8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});