webpackJsonp([57],{

/***/ 459:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(604)
/* template */
var __vue_template__ = __webpack_require__(605)
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
Component.options.__file = "resources/assets/js/views/order/redPackageDelivery.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4062979d", Component.options)
  } else {
    hotAPI.reload("data-v-4062979d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 604:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_qs__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_qs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_qs__);
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



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    var _ref;

    var validateNum = function validateNum(rule, value, callback) {
      if (value != parseFloat(value)) {
        callback(new Error("只能是数字"));
      } else if (value <= 0) {
        callback(new Error("不能为负数"));
      } else {
        callback();
      }
    };
    var validateTel = function validateTel(rule, value, callback) {
      if (!value) {
        return callback(new Error("手机号不能为空"));
      } else {
        var reg = /^1[3|4|5|7|8|9][0-9]\d{8}$/;
        if (reg.test(value)) {
          callback();
        } else {
          return callback(new Error("请输入正确的手机号"));
        }
      }
    };
    var validateUrl = function validateUrl(rule, value, callback) {
      if (!value) {
        return callback(new Error("网址不能为空"));
      } else {
        // const reg = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
        var reg = /^((ht|f)tps?):\/\/([\w\-]+(\.[\w\-]+)*\/)*[\w\-]+(\.[\w\-]+)*\/?(\?([\w\-\.,@?^=%&:\/~\+#]*)+)?/;
        if (reg.test(value)) {
          callback();
        } else {
          return callback(new Error("请输入正确的网址"));
        }
      }
    };
    return _ref = {
      imgPath: "",
      fileList2: [{
        name: "food.jpeg",
        url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
      }, {
        name: "food2.jpeg",
        url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
      }],
      newC: "",
      fd: [],
      newOpt: [{
        cnt: "新增",
        icon: "bf-add",
        ent: this.addNew
      }, {
        cnt: "修改",
        icon: "bf-change",
        ent: this.editInfo,
        nClick: false
      }, {
        cnt: "删除",
        icon: "bf-del",
        ent: this.delMore
      }, {
        cnt: "刷新",
        icon: "bf-refresh",
        ent: this.refresh
      }],
      addInfoRef: "goods",
      activeName: "0",
      RedPackageListData: [],
      orderListHead: [
      /*{
        label: "产品图片",
        width: "200",
        prop: "img",
        imgPath: "",
        type: "img"
      },*/
      {
        label: "商品编码",
        width: "180",
        prop: "commodity_code",
        type: "text"
      }, {
        label: "商品简称",
        width: "120",
        prop: "short_name",
        type: "text"
      }, {
        label: "备注",
        width: "120",
        prop: "remark",
        type: "textarea"
      }, {
        label: "启用",
        width: "80",
        prop: "status",
        type: "checkbox"
      }],
      goodsUrl: "/goods",
      loading: true,
      showMask: false,
      getsInfo: [[], [], []],
      btmTableHead: [[], [{
        label: "规格编码",
        width: "160",
        prop: "spec_code",
        type: "text"
      }, {
        label: "京东规格编号",
        width: "180",
        prop: "jd_specs_code",
        type: "text"
      }, {
        label: "唯品会规格编号",
        width: "180",
        prop: "vips_specs_code",
        type: "text"
      },
      /* {
          label: '规格图片',
          width: '120',
          prop: "img_url",
          holder: '请输入图片地址',
          type: 'text'
        },*/
      {
        label: "淘宝价格",
        width: "120",
        prop: "tb_price",
        type: "number"
      }, {
        label: "成本价格",
        width: "120",
        prop: "cost",
        type: "number"
      }, {
        label: "销售价格",
        width: "120",
        prop: "price",
        type: "number"
      }, {
        label: "仓库成本",
        width: "120",
        prop: "warehouse_cost",
        type: "number"
      }, {
        label: "折扣",
        width: "120",
        prop: "discount",
        type: "number"
      }, {
        label: "佣金点",
        width: "100",
        prop: "commission",
        type: "number"
      }, {
        label: "木架费",
        width: "120",
        prop: "wooden_frame_costs",
        type: "number"
      }, {
        label: "采购运费",
        width: "120",
        prop: "purchase_freight",
        type: "number"
      }, {
        label: "组合",
        width: "120",
        prop: "is_combination",
        type: "checkbox",
        chgAble: false,
        editChgAble: true
      }, {
        label: "包件数量",
        width: "120",
        prop: "package_quantity",
        type: "number"
      }, {
        label: "库存预警数量",
        width: "150",
        prop: "inventory_warning",
        type: "number"
      }, {
        label: "采购预警天数",
        width: "150",
        prop: "purchase_days_warning",
        // holder: '请输入采购预警天数',
        type: "number"
      }, {
        label: "产品配送类别",
        width: "150",
        prop: "distribution_method_id",
        stateVal: "distmets",
        type: "select"
      }, {
        label: "规格",
        width: "200",
        prop: "spec",
        // holder: '请输入规格',
        type: "text"
      },
      /*{
          label: '最高价格',
          width: '120',
          prop: "highest_price",
          holder: '请输入最高价格',
          type: 'number'
        },
        {
          label: '成本价格',
          width: '120',
          prop: "cost",
          holder: '请输入所成本价格',
          type: 'number'
        },
        {
          label: '装配价格',
          width: '120',
          prop: "assembly_price",
          holder: '请输入装配价格',
          type: 'number'
        },
        {
          label: '最低价格',
          width: '120',
          prop: "lowest_price",
          holder: '请输入最低价格',
          type: 'number'
        },
        {
          label: '销售价格',
          width: '120',
          prop: "price",
          holder: '请输入销售价格',
          type: 'number'
        },
        {
          label: '打包费用',
          width: '120',
          prop: "package_costs",
          holder: '请输入打包费用',
          type: 'number'
        },
          {
          label: '条形码',
          width: '100',
          prop: "bar_code",
          holder: '请输入佣金点',
          type: 'text'
        },
        {
          label: '可售数预警数量',
          width: '180',
          prop: "available_warning",
          holder: '请输入可售数预警数量',
          type: 'number'
        },
      */
      {
        label: "颜色",
        width: "120",
        prop: "color",
        // holder: '请输入颜色',
        type: "text"
      }, {
        label: "材质",
        width: "130",
        prop: "materials",
        // holder: '请输入材质',
        type: "text"
      }, {
        label: "功能",
        width: "100",
        prop: "function",
        // holder: '请输入功能',
        type: "text"
      }, {
        label: "特殊",
        width: "130",
        prop: "special",
        // holder: '请输入特殊',
        type: "text"
      }, {
        label: "其他",
        width: "150",
        prop: "other",
        // holder: '请输入其他',
        type: "text"
      }, {
        label: "长度",
        width: "120",
        prop: "longness",
        // holder: '请输入长度',
        type: "number"
      }, {
        label: "宽度",
        width: "120",
        prop: "width",
        // holder: '请输入宽度',
        type: "number"
      }, {
        label: "高度",
        width: "120",
        prop: "height",
        // holder: '请输入高度',
        type: "number"
      }, {
        label: "体积",
        width: "120",
        prop: "volume",
        // holder: '请输入体积',
        type: "number"
      }, {
        label: "重量",
        width: "120",
        prop: "weight",
        // holder: '请输入重量',
        type: "number"
      }, {
        label: "备注",
        width: "150",
        prop: "remark",
        // holder: '请输入备注',
        type: "textarea"
      }, {
        label: "成品",
        width: "120",
        prop: "finished_pro",
        // holder: '请选择是否是成品',
        type: "checkbox"
      }, {
        label: "停产",
        width: "120",
        prop: "is_stop_pro",
        // holder: '请选择是否是停产',
        type: "checkbox"
      }], [{
        label: "产品规格编码",
        width: "150",
        prop: "product_specs",
        holder: "请选择产品规格编码",
        type: "select",
        val: this.sonArr
      }, {
        label: "组合产品规格编码",
        width: "150",
        prop: "com_pro_specs",
        holder: "请选择组合产品规格编码",
        type: "select",
        val: this.sonArr
      }, {
        label: " 组合件数",
        width: "120",
        prop: "count",
        holder: "请输入 组合件数",
        type: "number"
      }, {
        label: "状态",
        width: "80",
        prop: "status",
        type: "select_stu"
      }], []],
      chgSpecVal: []
    }, _defineProperty(_ref, "loading", true), _defineProperty(_ref, "currentIndex", ""), _defineProperty(_ref, "url", ["", "/productspecs"]), _defineProperty(_ref, "title", "新增商品"), _defineProperty(_ref, "addRedPackageMagData", {
      commodity_code: "",
      short_name: "",
      remark: "",
      //img: "",
      status: true
    }), _defineProperty(_ref, "rules", {
      commodity_code: [{ required: true, message: "请输入商品编码", trigger: "blur" }],
      short_name: [{ required: true, message: "请输入商品简称", trigger: "blur" }],
      nick: [{ required: true, message: "请输入店铺名称", trigger: "blur" }],
      supplier_id: [{ required: true, message: "请选择供应商", trigger: "blur" }],
      category_id: [{ required: true, message: "请选择产品类别", trigger: "blur" }],
      title: [{ required: true, message: "请输入商品标题", trigger: "blur" }],
      img: [{ required: true, message: "请输入商品图片", trigger: "blur" }]
    }), _defineProperty(_ref, "addRedPackageMagHead", [{
      label: "商品编码",
      prop: "commodity_code",
      holder: "请输入商品编号",
      type: "text"
    }, {
      label: "商品名称",
      prop: "short_name",
      holder: "请输入商品名称",
      type: "text"
    }, {
      label: "商品描述",
      prop: "remark",
      holder: "请输入商品描述",
      type: "textarea"
    }, {
      label: "是否启用",
      prop: "status",
      type: "checkbox"
    }]), _defineProperty(_ref, "noUpload", true), _defineProperty(_ref, "halfForm", true), _defineProperty(_ref, "refArr", "ruleGoods"), _defineProperty(_ref, "showDel", false), _defineProperty(_ref, "delId", ""), _defineProperty(_ref, "inputChange", false), _defineProperty(_ref, "multipleSelection", []), _defineProperty(_ref, "delArr", []), _defineProperty(_ref, "sonArr", []), _defineProperty(_ref, "pagination", {
      current_page: 1,
      per_page: 0,
      page_total: 0
    }), _defineProperty(_ref, "editTitle", "修改商品信息"), _defineProperty(_ref, "editMask", false), _defineProperty(_ref, "editId", ""), _defineProperty(_ref, "editData", {}), _defineProperty(_ref, "leftTab", "修改"), _defineProperty(_ref, "showComb", false), _defineProperty(_ref, "CombForm", {}), _defineProperty(_ref, "combRules", {}), _defineProperty(_ref, "checkboxInit", false), _defineProperty(_ref, "multipleTable", []), _defineProperty(_ref, "tData", []), _defineProperty(_ref, "countComp", ""), _defineProperty(_ref, "compRow", {}), _defineProperty(_ref, "combIndex", ""), _defineProperty(_ref, "specRow", {}), _defineProperty(_ref, "searchBox", {
      goodsName: ""
    }), _defineProperty(_ref, "moreForms", true), _defineProperty(_ref, "newArr", []), _defineProperty(_ref, "specIndex", ""), _defineProperty(_ref, "combCount", []), _defineProperty(_ref, "combArr", []), _defineProperty(_ref, "idNew", []), _defineProperty(_ref, "combinationsArr", []), _defineProperty(_ref, "fetchCombData", []), _defineProperty(_ref, "specAddIndex", ""), _defineProperty(_ref, "combRowIndex", ""), _defineProperty(_ref, "sonData", []), _defineProperty(_ref, "specRowInfo", {}), _defineProperty(_ref, "curRowId", ""), _defineProperty(_ref, "goodsComp", []), _defineProperty(_ref, "selectPro", [{
      label: "成品",
      width: "80",
      prop: "finished_pro",
      type: "checkbox",
      /*false 可点击 不写默认false 即不写是可点击*/
      clickAble: true
    }, {
      label: "组合",
      width: "86",
      prop: "is_combination",
      type: "checkbox",
      /*true不可点击*/
      clickAble: true
    }, {
      label: "商品编码",
      width: "150",
      prop: "goods",
      inProp: "commodity_code",
      type: "text"
    }, {
      label: "规格编码",
      width: "150",
      prop: "spec_code",
      type: "text"
    }, {
      label: "商品名称",
      width: "150",
      prop: "goods",
      inProp: "short_name",
      type: "text"
    }, {
      label: "规格名称",
      width: "200",
      prop: "spec",
      type: "text"
    }]), _defineProperty(_ref, "pushData", {
      is_combination: false,
      finished_pro: true,
      is_stop_pro: false
    }), _defineProperty(_ref, "combData", []), _defineProperty(_ref, "combHead", [{
      label: "商品简称",
      // width: '120',
      prop: "goods",
      inProp: "short_name",
      type: "text"
    }, {
      label: "商品编码",
      // width: '160',
      prop: "goods",
      inProp: "commodity_code",
      type: "text"
    }, {
      label: "规格编码",
      // width: '160',
      prop: "spec_code",
      type: "text"
    }, {
      label: "淘宝价格",
      // width: '120',
      prop: "tb_price",
      type: "number"
    }, {
      label: "成本价格",
      // width: '120',
      prop: "cost",
      type: "number"
    }, {
      label: "销售价格",
      // width: '120',
      prop: "price",
      type: "number"
    }, {
      label: "包件数量",
      // width: '120',
      prop: "package_quantity",
      type: "number"
    }, {
      label: "规格",
      // width: '150',
      prop: "spec",
      type: "text"
    }, {
      label: "颜色",
      // width: '120',
      prop: "color",
      type: "text"
    }, {
      label: "材质",
      // width: '130',
      prop: "materials",
      type: "text"
    }, {
      label: "特殊",
      // width: '130',
      prop: "special",
      type: "text"
    }, {
      label: "其他",
      // width: '150',
      prop: "other",
      type: "text"
    }, {
      label: "体积",
      // width: '120',
      prop: "volume",
      type: "number"
    }, {
      label: "成品",
      prop: "finished_pro",
      type: "checkbox"
    }, {
      label: "最低销售价格",
      // width: '120',
      prop: "lowest_price",
      type: "number"
    }, {
      label: "最高销售价格",
      // width: '120',
      prop: "highest_price",
      type: "number"
    }]), _defineProperty(_ref, "btmSpecHead", [{
      label: "规格编码",
      // width: '160',
      prop: "com_pro_spec",
      inProp: "spec_code",
      type: "text"
    }, {
      label: "京东规格编码",
      // width: '180',
      prop: "com_pro_spec",
      inProp: "jd_specs_code",
      type: "text"
    }, {
      label: "唯品会规格编码",
      // width: '180',
      prop: "com_pro_spec",
      inProp: "vips_specs_code",
      type: "text"
    }, {
      label: "淘宝价格",
      // width: '120',
      prop: "com_pro_spec",
      inProp: "tb_price",
      type: "number"
    }, {
      label: "成本价格",
      // width: '120',
      prop: "com_pro_spec",
      inProp: "cost",
      type: "number"
    }, {
      label: "销售价格",
      // width: '120',
      prop: "com_pro_spec",
      inProp: "price",
      type: "number"
    }, {
      label: "折扣",
      // width: '120',
      prop: "com_pro_spec",
      inProp: "discount",
      type: "number"
    }, {
      label: "木架费",
      // width: '120',
      prop: "com_pro_spec",
      inProp: "wooden_frame_costs",
      type: "number"
    }, {
      label: "包件数量",
      // width: '120',
      prop: "com_pro_spec",
      inProp: "package_quantity",
      type: "number"
    }, {
      label: "规格",
      // width: '150',
      prop: "com_pro_spec",
      inProp: "spec",
      type: "text"
    }, {
      label: "颜色",
      // width: '120',
      prop: "com_pro_spec",
      inProp: "color",
      type: "text"
    }, {
      label: "材质",
      // width: '130',
      prop: "com_pro_spec",
      inProp: "materials",
      type: "text"
    }, {
      label: "特殊",
      // width: '130',
      prop: "com_pro_spec",
      inProp: "special",
      type: "text"
    }, {
      label: "其他",
      // width: '150',
      prop: "com_pro_spec",
      inProp: "other",
      type: "text"
    }, {
      label: "体积",
      // width: '120',
      prop: "com_pro_spec",
      inProp: "volume",
      type: "number"
    }, {
      label: "成品",
      // width: '120',
      prop: "com_pro_spec",
      inProp: "finished_pro",
      type: "checkbox"
    }, {
      label: "最低销售价格",
      // width: '120',
      prop: "com_pro_spec",
      inProp: "lowest_price",
      type: "number"
    }, {
      label: "最高销售价格",
      // width: '120',
      prop: "com_pro_spec",
      inProp: "highest_price",
      type: "number"
    }]), _defineProperty(_ref, "editSpecIndex", ""), _defineProperty(_ref, "combUrl", "/combinations"), _defineProperty(_ref, "editIndex", 0), _defineProperty(_ref, "inputChg", false), _defineProperty(_ref, "chgEId", ""), _defineProperty(_ref, "conditionPro", ""), _ref;
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
    handleRemove: function handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview: function handlePreview(file) {
      console.log(file);
    },

    /* handleAvatarSuccess(res, file){
        console.log(res);
        console.log(file);
        this.noUpload = false;
        console.log(this.noUpload);
      },*/
    toggleChecked: function toggleChecked() {
      this.checkboxInit = !this.checkboxInit;
    },
    test: function test() {},

    /*点击添加商品*/
    addNew: function addNew() {
      this.showMask = true;
      this.resetAddInfo();
    },
    CB_dialog: function CB_dialog(val) {
      this.showMask = val;
      this.editMask = val;
    },

    /*提交添加数据*/
    submitForm: function submitForm() {
      var _this = this;

      /*提交数据时，如果规格中有空白项目，踢除
        * 修改规格中的组合字段
        * 如果组合字段长度大于0，默认组合自动开启
        * */
      console.log(this.addRedPackageMagData);
      var obj = this.addRedPackageMagData;
      this.$post(this.urls.redpackagemag, obj).then(function () {
        _this.$message({
          message: "添加成功",
          type: "success"
        });
        _this.showMask = false;
        _this.refresh();
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
    resetAddInfo: function resetAddInfo() {
      Object.assign(this.$data.addRedPackageMagData, this.$options.data().addRedPackageMagData);
      this.newC = "index0";
      this.specIndex = 0;
    },

    /*取消添加*/
    cancelAdd: function cancelAdd() {
      this.showMask = false;
    },

    /*修改保存*/
    edit: function edit(index) {
      this.currentIndex = "index" + index;
    },
    editCancel: function editCancel() {
      this.$message({
        message: "取消修改",
        type: "info"
      });
      this.currentIndex = "";
    },
    editSave: function editSave(row) {
      var _this2 = this;

      var newData = {};
      if (this.activeName == "0") {
        newData = {
          code: row.code,
          name: row.name,
          report: row.report,
          expected_days: row.expected_days,
          phone: row.phone,
          address: row.address,
          freight_type: row.freight_type,
          remark: row.remark,
          status: row.status
        };
      } else if (this.activeName == "1") {
        newData = {
          logistics: row.logistics.id,
          province: row.province,
          city: row.city,
          district: row.district,
          address: row.address,
          phone: row.phone,
          price: row.price,
          weight_univalent: row.weight_univalent,
          expected_days: row.expected_days,
          route: row.route,
          is_free_shipping: row.is_free_shipping,
          remark: row.remark
        };
      } else if (this.activeName == "2") {
        newData = {
          order_no: row.order_no,
          good_sn: row.good_sn,
          standard_code: row.standard_code,
          quantity: row.quantity,
          money: row.money,
          remark: row.remark
          // status: row.status
        };
      } else if (this.activeName == "3") {
        newData = {
          file: row.file,
          name: row.name,
          paper_format: row.paper_format,
          status: row.status
        };
      }
      if (this.inputChange) {
        this.$patch(this.url[this.activeName] + "/" + row.id, newData).then(function () {
          _this2.$message({
            message: "修改成功",
            type: "success"
          });
          _this2.getInfo(_this2.url[_this2.activeName]);
          _this2.currentIndex = "";
          _this2.inputChange = false;
          _this2.refresh();
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
      } else {
        this.$message({
          message: "数据未改动",
          type: "info"
        });
      }
    },
    handleEdit: function handleEdit() {
      this.inputChange = true;
    },

    /*获取商品信息*/
    fetchData: function fetchData() {
      var _this3 = this;

      this.loading = true;
      this.$fetch(this.urls.redpackagemag).then(function (res) {
        _this3.loading = false;
        _this3.RedPackageListData = res.data;
        if (res.data[0] && res.data[0].productspecs[0]) {
          _this3.goodsComp = res.data[0].productspecs[0].combinations;
        }
        var pg = res.meta.pagination;
        _this3.$store.dispatch("currentPage", pg.current_page);
        _this3.$store.commit("PER_PAGE", pg.per_page);
        _this3.$store.commit("PAGE_TOTAL", pg.total);
        /*请求数据成功之后，请求需要的所有子数据*/
        _this3.$store.dispatch("shops", "/shops");
        _this3.$store.dispatch("suppliers", "/suppliers");
        _this3.$store.dispatch("goodscates", "/goodscates");
        _this3.$store.dispatch("distmets", "/distmets");
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

    /*在商品中单击时，tab显示为id为当前商品的规格及其他*/
    proRowClick: function proRowClick(row) {
      this.$refs.multipleTable.toggleRowSelection(row);
      /*单击时拿到子件和sku*/
      // this.goodsComp=row.productspecs;
      /*if(row.productspecs.length==0){
          this.goodsComp=[];
        }else{
          // this.goodsComp=[{is_combination:'',finished_pro:'',is_stop_pro:''}];
         /!* row.productspecs.map(item=>{
            this.goodsComp.push(item);
          });*!/
        }*/
    },

    /*删除单条*/
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

      this.$del(this.urls.redpackagemag + "/" + id).then(function () {
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

    /*批量删除*/
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
          _this5.$del(_this5.urls.redpackagemag, { ids: _this5.delArr }).then(function () {
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
    handleSelectionChange: function handleSelectionChange(val) {
      this.editId = val.length > 0 ? val[val.length - 1].id : "";
      this.multipleSelection = val;
      var del = [];
      this.multipleSelection.forEach(function (selectedItem) {
        del.push(selectedItem.id);
      });
      this.delArr = del.join(",");
    },

    /*页面刷新*/
    refresh: function refresh() {
      this.loading = true;
      this.fetchData();
    },

    /*修改商品信息*/
    editInfo: function editInfo() {
      var _this6 = this;

      /*如果修改按钮是不可点击状态*/
      if (this.newOpt[2].nClick) {
        return;
      } else {
        /*如果没有选择要修改的项*/
        if (this.multipleSelection.length == 0) {
          this.$message({
            message: "没有选择要修改的数据",
            type: "warning"
          });
          return;
        } else if (this.multipleSelection.length >= 2) {
          this.$message({
            message: "只能修改单条数据",
            type: "warning"
          });
          return;
        } else {
          this.editMask = true;
          var id = this.checkboxId ? this.checkboxId : this.curRowId;
          this.$fetch(this.urls.redpackagemag + "/" + this.editId).then(function (res) {
            _this6.editData = {
              commodity_code: res.commodity_code,
              short_name: res.short_name,
              remark: res.remark,
              status: res.status
            };
          }, function (err) {
            console.log(err);
          });
        }
      }
    },
    getData: function getData() {
      console.log(this.searchBox);
    },

    /*规格信息单击进行修改*/
    rowEdit: function rowEdit() {
      this.currentIndex = "index" + index;
    },
    tableRowClassName: function tableRowClassName(_ref2) {
      var row = _ref2.row,
          rowIndex = _ref2.rowIndex;

      row.index = rowIndex;
    },

    /*修改*/
    confirmEdit: function confirmEdit() {
      var _this7 = this;

      var obj = this.editData;
      this.$patch(this.urls.redpackagemag + "/" + this.editId, this.editData).then(function () {
        _this7.$message({
          message: "修改成功",
          type: "success"
        });
        _this7.editMask = false;
        _this7.refresh();
        _this7.chgEId = "";
      }, function (err) {
        if (err.response) {
          var arr = err.response.data.errors;
          var arr1 = [];
          for (var i in arr) {
            arr1.push(arr[i]);
          }
          var str = arr1.join(",");
          _this7.$message.error({
            message: str
          });
        }
      });
    },
    cancelEdit: function cancelEdit() {
      this.editMask = false;
      this.chgEId = "";
    },

    /*要追加到哪条规格 修改时行切换*/
    editRowCName: function editRowCName(_ref3) {
      var row = _ref3.row,
          rowIndex = _ref3.rowIndex;

      row.index = rowIndex;
    },
    editRowClick: function editRowClick(row) {
      this.editIndex = row.index;
      this.chgEId = row.id ? row.id : "";
    },
    goodsRowCName: function goodsRowCName(_ref4) {
      var row = _ref4.row,
          rowIndex = _ref4.rowIndex;

      if (rowIndex % 2 == 1) {
        return "warning-row";
      } else if (rowIndex % 2 == 0) {
        return "success-row";
      }
      return "";
    },
    beforeUpload: function beforeUpload(file) {
      var _this8 = this;

      var isJPG = file.type === "image/jpeg";
      var isGIF = file.type === "image/gif";
      var isPNG = file.type === "image/png";
      // const isBMP = file.type === 'image/bmp';

      if (!isJPG && !isGIF && !isPNG) {
        this.$message.error({
          message: "上传图片必须是JPG/GIF/PNG 格式!"
        });
      }
      var formData = new FormData();
      formData.append("image", file);
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(this.urls.uploadimages, formData).then(function (res) {
        var imageInfo = res.data.meta;
        _this8.addRedPackageMagData.img = res.data.path;
        if (imageInfo.status_code == 201) {
          _this8.noUpload = false;
          _this8.addRedPackageMagHead.map(function (item) {
            if (item.type == "img") {
              item.imgPath = res.data.path;
            }
          });
        }
      }).catch(function (err) {});
    }
  },
  mounted: function mounted() {
    this.fetchData();
    this.$store.dispatch("setOpt", this.newOpt);
    var that = this;
    $(window).resize(function () {
      that.$store.dispatch("setOpt", that.newOpt);
    });
  }
});

/***/ }),

/***/ 605:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("div", { staticClass: "searchBox" }, [
        _c(
          "span",
          [
            _c("label", [_vm._v("商品名称")]),
            _vm._v(" "),
            _c("el-input", {
              attrs: { clearable: "" },
              nativeOn: {
                keyup: function($event) {
                  if (
                    "keyCode" in $event &&
                    _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                  ) {
                    return null
                  }
                  return _vm.getData($event)
                }
              },
              model: {
                value: _vm.searchBox.goodsName,
                callback: function($$v) {
                  _vm.$set(
                    _vm.searchBox,
                    "goodsName",
                    typeof $$v === "string" ? $$v.trim() : $$v
                  )
                },
                expression: "searchBox.goodsName"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c("span"),
        _vm._v(" "),
        _c("span"),
        _vm._v(" "),
        _c("span")
      ]),
      _vm._v(" "),
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
          ref: "multipleTable",
          attrs: {
            data: _vm.RedPackageListData,
            fit: "",
            height: "400",
            "row-class-name": _vm.goodsRowCName
          },
          on: {
            "selection-change": _vm.handleSelectionChange,
            "row-click": _vm.proRowClick
          }
        },
        [
          _c("el-table-column", {
            attrs: {
              type: "selection",
              width: "95",
              align: "center",
              checked: _vm.checkboxInit
            },
            on: { change: _vm.toggleChecked }
          }),
          _vm._v(" "),
          _vm._l(_vm.orderListHead, function(item, index) {
            return _c("el-table-column", {
              key: index,
              attrs: { label: item.label, align: "center", width: item.width },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(scope) {
                    return [
                      item.type == "select"
                        ? _c("span", [
                            scope.row[item.prop] == ""
                              ? _c("span")
                              : typeof scope.row[item.prop] == "object" &&
                                item.nmProp
                              ? _c("span", [
                                  _vm._v(
                                    "\n            " +
                                      _vm._s(
                                        scope.row[item.prop][item.nmProp]
                                      ) +
                                      "\n          "
                                  )
                                ])
                              : _c(
                                  "span",
                                  _vm._l(_vm.resData[item.stateVal], function(
                                    list,
                                    index
                                  ) {
                                    return _c("span", { key: index }, [
                                      item.inProp
                                        ? _c("span", [
                                            list.id ==
                                            scope.row[item.prop][item.inProp]
                                              ? _c("span", [
                                                  _vm._v(
                                                    "\n                  " +
                                                      _vm._s(list.name) +
                                                      "\n                "
                                                  )
                                                ])
                                              : _vm._e()
                                          ])
                                        : _c("span", [
                                            list.id == scope.row[item.prop]
                                              ? _c("span", [
                                                  _vm._v(
                                                    "\n                  " +
                                                      _vm._s(list.name) +
                                                      "\n                "
                                                  )
                                                ])
                                              : _vm._e()
                                          ])
                                    ])
                                  }),
                                  0
                                )
                          ])
                        : item.type == "checkbox"
                        ? _c("span", [
                            item.inProp
                              ? _c(
                                  "span",
                                  [
                                    _c("el-checkbox", {
                                      attrs: { disabled: "" },
                                      model: {
                                        value:
                                          scope.row[item.prop][item.inProp],
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
                                          _vm.$set(scope.row, item.prop, $$v)
                                        },
                                        expression: "scope.row[item.prop]"
                                      }
                                    })
                                  ],
                                  1
                                )
                          ])
                        : _c("span", [
                            _vm._v(
                              "\n          " +
                                _vm._s(
                                  item.inProp
                                    ? scope.row[item.prop][item.inProp]
                                    : scope.row[item.prop]
                                ) +
                                "\n        "
                            )
                          ])
                    ]
                  }
                }
              ])
            })
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: {
              label: "操作",
              width: "180",
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
      ),
      _vm._v(" "),
      _c("Pagination", { attrs: { "page-url": _vm.goodsUrl } }),
      _vm._v(" "),
      _c("label", [_vm._v(_vm._s(this.editId))]),
      _vm._v(" "),
      _c(
        "el-dialog",
        {
          class: { "more-forms": _vm.moreForms },
          attrs: { title: _vm.title, visible: _vm.showMask },
          on: {
            "update:visible": function($event) {
              _vm.showMask = $event
            }
          }
        },
        [
          _c(
            "el-form",
            {
              ref: "addNew",
              class: { "half-form": _vm.halfForm },
              attrs: {
                model: _vm.addRedPackageMagData,
                rules: _vm.rules,
                "label-width": "100px"
              }
            },
            _vm._l(_vm.addRedPackageMagHead, function(item, index) {
              return _c(
                "el-form-item",
                { key: index, attrs: { label: item.label, prop: item.prop } },
                [
                  item.type == "text"
                    ? _c("span", [
                        item.inProp
                          ? _c(
                              "span",
                              [
                                _c("el-input", {
                                  attrs: { placeholder: item.holder },
                                  model: {
                                    value:
                                      _vm.addRedPackageMagData[item.prop][
                                        item.inProp
                                      ],
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.addRedPackageMagData[item.prop],
                                        item.inProp,
                                        typeof $$v === "string"
                                          ? $$v.trim()
                                          : $$v
                                      )
                                    },
                                    expression:
                                      "addRedPackageMagData[item.prop][item.inProp]"
                                  }
                                })
                              ],
                              1
                            )
                          : _c(
                              "span",
                              [
                                _c("el-input", {
                                  attrs: { placeholder: item.holder },
                                  model: {
                                    value: _vm.addRedPackageMagData[item.prop],
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.addRedPackageMagData,
                                        item.prop,
                                        typeof $$v === "string"
                                          ? $$v.trim()
                                          : $$v
                                      )
                                    },
                                    expression:
                                      "addRedPackageMagData[item.prop]"
                                  }
                                })
                              ],
                              1
                            )
                      ])
                    : item.type == "url"
                    ? _c(
                        "span",
                        [
                          _c("el-input", {
                            attrs: { type: "url", placeholder: item.holder },
                            model: {
                              value: _vm.addRedPackageMagData[item.prop],
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.addRedPackageMagData,
                                  item.prop,
                                  typeof $$v === "string" ? $$v.trim() : $$v
                                )
                              },
                              expression: "addRedPackageMagData[item.prop]"
                            }
                          })
                        ],
                        1
                      )
                    : item.type == "select"
                    ? _c(
                        "span",
                        [
                          _c(
                            "el-select",
                            {
                              attrs: { placeholder: item.holder },
                              model: {
                                value: _vm.addRedPackageMagData[item.prop],
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.addRedPackageMagData,
                                    item.prop,
                                    $$v
                                  )
                                },
                                expression: "addRedPackageMagData[item.prop]"
                              }
                            },
                            _vm._l(_vm.resData[item.stateVal], function(list) {
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
                      )
                    : item.type == "textarea"
                    ? _c(
                        "span",
                        [
                          _c("el-input", {
                            attrs: {
                              type: "textarea",
                              placehoder: item.holder
                            },
                            model: {
                              value: _vm.addRedPackageMagData[item.prop],
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.addRedPackageMagData,
                                  item.prop,
                                  typeof $$v === "string" ? $$v.trim() : $$v
                                )
                              },
                              expression: "addRedPackageMagData[item.prop]"
                            }
                          })
                        ],
                        1
                      )
                    : item.type == "img"
                    ? _c("span", [
                        _vm.noUpload
                          ? _c(
                              "span",
                              [
                                _c(
                                  "el-upload",
                                  {
                                    staticClass: "upload-demo",
                                    attrs: {
                                      action: "",
                                      "before-upload": _vm.beforeUpload,
                                      "on-preview": _vm.handlePreview,
                                      "on-remove": _vm.handleRemove
                                    }
                                  },
                                  [
                                    _c(
                                      "el-button",
                                      {
                                        attrs: {
                                          size: "small",
                                          type: "primary"
                                        }
                                      },
                                      [_vm._v("点击上传")]
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          : _c("span", [
                              _c("img", {
                                attrs: { src: item.imgPath, alt: "商品图片" }
                              })
                            ])
                      ])
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
                      on: { click: _vm.submitForm }
                    },
                    [_vm._v("确认新建")]
                  ),
                  _vm._v(" "),
                  _c("el-button", { on: { click: _vm.resetAddInfo } }, [
                    _vm._v("重置")
                  ]),
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
          attrs: { title: "修改商品", visible: _vm.editMask },
          on: {
            "update:visible": function($event) {
              _vm.editMask = $event
            }
          }
        },
        [
          _c("add-new", {
            ref: "addNew",
            attrs: {
              "rule-form": _vm.editData,
              rules: _vm.rules,
              "add-arr": _vm.addRedPackageMagHead,
              "son-ref": _vm.addInfoRef,
              onlyInputs: true,
              editSign: true
            }
          }),
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
                      on: { click: _vm.confirmEdit }
                    },
                    [_vm._v("确定")]
                  ),
                  _vm._v(" "),
                  _c("el-button", { on: { click: _vm.cancelEdit } }, [
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
    require("vue-hot-reload-api")      .rerender("data-v-4062979d", module.exports)
  }
}

/***/ })

});