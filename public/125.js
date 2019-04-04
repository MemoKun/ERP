webpackJsonp([125],{

/***/ 576:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(859)
/* template */
var __vue_template__ = __webpack_require__(860)
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
Component.options.__file = "resources/assets/js/views/afterSaleCompensation/cmptnApplication.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5af53616", Component.options)
  } else {
    hotAPI.reload("data-v-5af53616", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 859:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      newOpt: [{
        cnt: '新增',
        icon: 'bf-add',
        ent: this.addCmptnOrder,
        ref: 'add'
      }, {
        cnt: '修改',
        icon: 'bf-change',
        ent: this.test
      }, {
        cnt: '审核',
        icon: 'bf-audit',
        ent: this.test
      }, {
        cnt: '退审',
        icon: 'bf-auditfaild',
        ent: this.test
      }, {
        cnt: '作废',
        icon: 'bf-void',
        ent: this.test
      }, {
        cnt: '刷新',
        icon: 'bf-refresh',
        ent: this.test
      }],
      filterBox: false,
      searchBox: {
        cmptn_buyerNickname: '',
        cmptn_buyerName: '',
        cmptn_buyerPhone: '',
        cmptn_buyerAddress: '',
        cmptn_businessPersonnel: '',
        cmptn_Direction: '',
        cmptn_Directions: [{ label: '我们赔偿', value: 0 }, { label: '赔偿我们', value: 1 }],
        cmptn_responsibleParty: '',
        cmptn_responsiblePartys: [{ label: '物流', value: 0 }, { label: '工厂', value: 1 }, { label: '服务商', value: 2 }, { label: '客户', value: 3 }, { label: '公司', value: 4 }, { label: '其他', value: 5 }],
        cmptn_responsiblePerson: '',
        cmptn_logisticsCompany: '',
        cmptn_logisticsCompanys: [{ label: '顺丰速运', value: 0 }, { label: '韵达快递', value: 1 }],
        cmptn_logisticsTrackingNumber: '',
        cmptn_orderShop: '',
        cmptn_orderShops: [{ label: 'Dreasylife家居旗舰店', value: 0 }, { label: '思享家官方旗舰店', value: 1 }]
      },
      activeName: '0',
      addActiveName: '0',
      defectiveProductsData: [],
      leftTopActiveName: '0',
      leftBottomActiveName: '0',
      rightActiveName: '0',
      cmptnOrderListData: [],
      cmptnOrderListHead: [//订单表头标签
      {
        label: '系统单号',
        width: '220',
        prop: 'cmptn_system_order_number',
        type: 'text'
      }, {
        label: '赔偿方向',
        width: '220',
        prop: 'cmptn_direction',
        type: 'text'
      }, {
        label: '责任方',
        width: '150',
        prop: 'cmptn_responsible_party',
        type: 'text'
      }, {
        label: '责任人',
        width: '140',
        prop: 'cmptn_responsible_person',
        type: 'text'
      }, {
        label: '买家昵称',
        width: '140',
        prop: 'cmptn_buyer_nickname',
        type: 'text'
      }, {
        label: '买家姓名',
        width: '130',
        prop: 'cmptn_buyer_name',
        type: 'text'
      }, {
        label: '客户电话',
        width: '130',
        prop: 'cmptn_buyer_phone',
        type: 'text'
      }, {
        label: '客户城市',
        width: '130',
        prop: 'cmptn_buyer_city',
        type: 'text'
      }, {
        label: '赔偿金额',
        width: '130',
        prop: 'cmptn_amount',
        type: 'number'
      }, {
        label: '协商日期',
        width: '140',
        prop: 'cmptn_date_of_nagotiation',
        type: 'text'
      }, {
        label: '发货物流',
        width: '120',
        prop: 'cmptn_logistics_company',
        type: 'text'
      }, {
        label: '物流单号',
        width: '130',
        prop: 'cmptn_tracking_number',
        type: 'text'
      }, {
        label: '结账方式',
        width: '120',
        prop: 'cmptn_checkway',
        type: 'text'
      }, {
        label: '业务员',
        width: '120',
        prop: 'cmptn_stuff',
        type: 'text'
      }],
      loading: true, //加载数据
      checkboxInit: false, //初始化Checkbox为不选中
      orderListIndex: '', //作用未知
      cmptn_alreadyHandle: [], //已经处理的cmptn订单
      addCmptnOrderMask: false,
      addCmptnOrderFormVal: {
        id: '',
        system_order_number: '',
        cmptn_status: '',
        order_source: '',
        cmptn_direction: '',
        cmptn_shop: '',
        responsible_party: '',
        responsible_person: '',
        customer_nickname: '',
        customer_name: '',
        customer_phone: '',
        customer_city: '',
        customer_address: '',
        cmptn_address: '',
        cmptn_amount: '',
        negotiation_date: '',
        logistics_company: '',
        logistics_tracking_number: '',
        payment_method: '',
        order_stuff: '',
        order_number: '',
        problem_goods: '',
        problem_description: '',
        note: '',
        refuse_reason: '',
        fee_type: '',
        payee: '',
        payee_account: ''
      },
      addCmptnOrderFormHead: [//新建订单的文本框表头
      {
        label: '系统单号',
        prop: 'system_order_number',
        holder: '系统自动生成',
        width: '200',
        type: 'text',
        editChgAble: true,
        addChgAble: true
      }, {
        label: '买家昵称',
        prop: 'customer_nickname',
        type: 'text',
        editChgAble: true,
        addChgAble: true
      }, {
        label: '买家姓名',
        prop: 'customer_name',
        type: 'text',
        editChgAble: true,
        addChgAble: true
      }, {
        label: '买家电话',
        prop: 'customer_phone',
        type: 'text',
        editChgAble: true,
        addChgAble: true
      }, {
        label: '买家城市',
        prop: 'customer_city',
        type: 'text',
        editChgAble: true,
        addChgAble: true
      }, {
        label: '结账方式',
        prop: 'payment_method',
        type: 'text',
        editChgAble: true,
        addChgAble: true
      }, {
        label: '发货物流',
        prop: 'logistics_company',
        type: 'text',
        editChgAble: true,
        addChgAble: true
      }, {
        label: '物流单号',
        prop: 'logistics_tracking_number',
        type: 'text',
        editChgAble: true,
        addChgAble: true
      }, {
        label: '责任方',
        prop: 'responsible_party',
        type: 'text',
        editChgAble: true,
        addChgAble: true
      }, {
        label: '责任人',
        prop: 'responsible_person',
        type: 'text',
        editChgAble: true,
        addChgAble: true
      }, {
        label: '赔偿方向',
        prop: 'cmptn_direction',

        type: 'text',
        editChgAble: true,
        addChgAble: true
      }, {
        label: '赔偿金额',
        prop: 'cmptn_amount',
        type: 'text',
        editChgAble: true,
        addChgAble: true
      }, {
        label: '协商日期',
        prop: 'negotiation_date',
        type: 'DatePicker',
        editChgAble: true,
        addChgAble: true
      }, {
        label: '业务员',
        prop: 'order_stuff',
        type: 'text',
        editChgAble: true,
        addChgAble: false
      }, {
        label: '费用类型',
        prop: 'fee_type',
        type: 'text',
        editChgAble: true,
        addChgAble: true
      }, {
        label: '收款人',
        prop: 'payee',
        type: 'text',
        editChgAble: true,
        addChgAble: true
      }, {
        label: '收款账号',
        prop: 'payee_account',
        type: 'text',
        editChgAble: true,
        addChgAble: true
      }, {
        label: '问题描述',
        prop: 'problem_description',
        type: 'text',
        editChgAble: true,
        addChgAble: true
      }, {
        label: '备注信息',
        prop: 'note',
        type: 'text',
        editChgAble: true,
        addChgAble: true
      }],
      moreForms: true,
      threeParts: true,
      toggleText: false,
      defectiveProductsListVal: [],
      defectiveProductsHead: [{
        label: '商品编码',
        width: '200',
        prop: 'proCode',
        type: 'text'
      }, {
        label: '规格编码',
        width: '200',
        prop: 'specCode',
        type: 'text'
      }, {
        label: '商品简称',
        width: '200',
        prop: 'proName',
        type: 'text'
      }, {
        label: '规格',
        width: '200',
        prop: 'spec',
        type: 'text'
      }, {
        label: '颜色',
        width: '200',
        prop: 'color',
        type: 'text'
      }, {
        label: '材质',
        width: '200',
        prop: 'material',
        type: 'text'
      }, {
        label: '功能',
        width: '200',
        prop: 'function',
        type: 'text'
      }, {
        label: '特殊',
        width: '200',
        prop: 'special',
        type: 'text'
      }, {
        label: '其他',
        width: '200',
        prop: 'other',
        type: 'text'
      }, {
        label: '购买数量',
        width: '200',
        prop: 'purQuantity',
        type: 'text'
      }],
      addHead: [[{
        label: '商品编码',
        width: '160',
        prop: 'proCode',
        type: 'text'
      }, {
        label: '规格编码',
        width: '160',
        prop: 'specCode',
        type: 'text'
      }, {
        label: '商品简称',
        width: '160',
        prop: 'proName',
        type: 'text'
      }, {
        label: '规格',
        width: '130',
        prop: 'spec',
        type: 'text'
      }, {
        label: '颜色',
        width: '130',
        prop: 'color',
        type: 'text'
      }, {
        label: '材质',
        width: '130',
        prop: 'material',
        type: 'text'
      }, {
        label: '功能',
        width: '130',
        prop: 'function',
        type: 'text'
      }, {
        label: '特殊',
        width: '130',
        prop: 'special',
        type: 'text'
      }, {
        label: '其他',
        width: '130',
        prop: 'other',
        type: 'text'
      }, {
        label: '购买数量',
        width: '130',
        prop: 'purQuantity',
        type: 'text'
      }]]
    };
  },

  methods: {
    toggleShow: function toggleShow() {
      this.filterBox = !this.filterBox;
    },
    test: function test() {
      console.log(1);
    },

    /*获取数据*/
    outerHandleClick: function outerHandleClick() {
      var index = this.activeName - 0;
      switch (0) {
        case 0:
          this.loading = true;
          this.fetchData();
          break;
        case 1:
          var data = this.cmptnOrderListData[0];
          /*商品*/
          if (data) {
            this.orderDtlFormVal = {
              system_order_no: data.system_order_no,
              taobao_oid: data.taobao_oid,
              taobao_tid: data.taobao_tid,
              association_taobao_oid: data.association_taobao_oid,
              shop_name: data['shop']['title'],
              business_personnel_name: data['businessPersonnel'] ? data['businessPersonnel']['username'] : '',
              member_nick: data.member_nick,
              receiver_name: data.receiver_name,
              receiver_mobile: data.receiver_mobile,
              receiver_phone: data.receiver_phone,
              receiver_address: data.receiver_address,
              express_fee: data.express_fee,
              freight_types_name: data['freightType']['name'],
              expected_freight: data.expected_freight,
              deliver_goods_fee: data.deliver_goods_fee,
              payment_date: data.payment_date,
              promise_ship_time: data.promise_ship_time,
              distribution_name: data['distribution']['name'],
              distribution_method: data['distributionMethod']['name'],
              service_car_info: data['service_car_info'],
              distribution_phone: data['distribution_phone'],
              buyer_message: data['buyer_message'],
              logistic_name: data['logistic']['name'],
              distributionType_name: data['distributionType']['name'],
              total_distribution_fee: data['total_distribution_fee'],
              customer_service_remark: data['customer_service_remark'],
              seller_remark: data['seller_remark']
            };
          }
          if (data['orderItems']['data'].length > 0) {
            data['orderItems']['data'].map(function (item) {
              item['name'] = item['combination']['name'];
              item['productComp'] = item['combination']['productComponents']['data'];
            });
          }
          this.proDtlData = data['orderItems']['data'];
          /*支付明细*/
          this.payDtlData = data['paymentDetails']['data'];
          break;
      }
    },
    fetchData: function fetchData() {
      var _this = this;

      var index = this.leftTopActiveName - 0;
      switch (index) {
        case 0:
          this.$fetch(this.urls.aftercompensation + '/searchuntreated', { include: 'id,systemOrderNumber,cmptnStatus,orderSource,cmptnDirection,cmptnShop,responsibleParty,responsiblePerson,customerNickname,customerName,customerPhone,customerCity,customerAddress,cmptnAmount,logisticsCompany,logisticsTrackingNumber,paymentMethod,orderStuff,orderNumber,problemGoods,problemDescription,note,refuseReason,feeType,payee,payeeAccount' }).then(function (res) {
            _this.loading = false;
            _this.cmptnOrderListData = res.data;
            var pg = res.meta.pagination;
            _this.$store.dispatch('currentPage', pg.current_page);
            _this.$store.commit('PER_PAGE', pg.per_page);
            _this.$store.commit('PAGE_TOTAL', pg.total);
            _this.$store.dispatch('paymentmethods', _this.urls.paymentmethods);
            _this.$fetch(_this.urls.aftercompensation + '/create').then(function (res) {
              _this.addSubData = res;
            }, function (err) {});
          }, function (err) {
            if (err.response) {
              var arr = err.response.data.errors;
              var arr1 = [];
              for (var i in arr) {
                arr1.push(arr[i]);
              }
              _this.$message.error(arr1.join(','));
            }
          });
          break;
        case 1:
          this.$fetch(this.urls.aftercompensation, { 'order_status': 20, 'include': 'shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems.combination.productComponents,orderItems.product,businessPersonnel,locker,paymentDetails.paymentMethod,paymentDetails.order' }).then(function (res) {
            _this.loading = false;
            _this.alreadyHandle = res.data;
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
              _this.$message.error(arr1.join(','));
            }
          });
          break;
        case 2:
          this.$fetch(this.urls.aftercompensation, { 'order_status': '等通知发货', 'include': 'shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems,businessPersonnel,locker,paymentDetails' }).then(function (res) {
            _this.loading = false;
            _this.cmptnOrderListData = res.data;
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
              _this.$message.error(arr1.join(','));
            }
          });
          break;
      }
    },
    leftHandleClick: function leftHandleClick() {
      this.loading = true;
      this.fetchData();
    },
    rightHandleClick: function rightHandleClick() {},
    orderListRClick: function orderListRClick(row) {
      if (row['locker_id'] == 0) {
        this.newOpt[1].nClick = true;
        this.newOpt[2].nClick = true;
        this.newOpt[3].nClick = false;
        this.newOpt[4].nClick = true;
        this.newOpt[8].nClick = true;
        this.newOpt[9].nClick = true;
        this.newOpt[14].nClick = true;
        if (row['order_status'] == "已客审") {
          this.newOpt[5].nClick = true;
          this.newOpt[6].nClick = false;
        } else {
          this.newOpt[5].nClick = false;
          this.newOpt[6].nClick = true;
        }
      } else {
        this.newOpt[1].nClick = false;
        this.newOpt[2].nClick = false;
        this.newOpt[3].nClick = true;
        this.newOpt[4].nClick = false;
        this.newOpt[5].nClick = false;
        this.newOpt[6].nClick = true;
        this.newOpt[8].nClick = false;
        this.newOpt[9].nClick = false;
        this.newOpt[14].nClick = false;
      }
      this.curRowId = row.id;
      this.curRowData = row;
    },
    orderDbClick: function orderDbClick(row) {
      this.activeName = '1';
      var data = row;
      if (data) {
        this.orderDtlFormVal = {
          system_order_no: data.system_order_no,
          taobao_oid: data.taobao_oid,
          taobao_tid: data.taobao_tid,
          association_taobao_oid: data.association_taobao_oid,
          shop_name: data['shop']['title'],
          business_personnel_name: data['businessPersonnel'] ? data['businessPersonnel']['username'] : '',
          member_nick: data.member_nick,
          receiver_name: data.receiver_name,
          receiver_mobile: data.receiver_mobile,
          receiver_phone: data.receiver_phone,
          receiver_address: data.receiver_address,
          express_fee: data.express_fee,
          freight_types_name: data['freightType']['name'],
          expected_freight: data.expected_freight,
          deliver_goods_fee: data.deliver_goods_fee,
          payment_date: data.payment_date,
          promise_ship_time: data.promise_ship_time,
          distribution_name: data['distribution']['name'],
          distribution_method: data['distributionMethod']['name'],
          service_car_info: data['service_car_info'],
          distribution_phone: data['distribution_phone'],
          buyer_message: data['buyer_message'],
          logistic_name: data['logistic']['name'],
          distributionType_name: data['distributionType']['name'],
          total_distribution_fee: data['total_distribution_fee'],
          customer_service_remark: data['customer_service_remark'],
          seller_remark: data['seller_remark']
        };
      }
      this.proDtlData = row['orderItems']['data'];
      if (row['orderItems']['data'].length > 0) {
        row['orderItems']['data'].map(function (item) {
          item['name'] = item['combination']['name'];
          item['productComp'] = item['combination']['productComponents']['data'];
        });
      }
      /*支付明细*/
      this.payDtlData = row['paymentDetails']['data'];
    },
    proDtlRClick: function proDtlRClick(row) {},

    /*新增*/
    addCmptnOrder: function addCmptnOrder() {
      this.addCmptnOrderMask = true;
      this.addIds = [];
      this.defectiveProductsData = [];
      this.proRIndex = '';
    },
    proQueryClick: function proQueryClick() {
      var _this2 = this;

      this.proSkuVal = [];
      this.$fetch(this.urls.products, { 'status': true, 'commodity_code': this.proQuery.commodity_code, 'component_code': this.proQuery.component_code, 'shops_id': this.proQuery.shops_id, 'short_name': this.proQuery.short_name, 'include': 'productComponents.product,shop,supplier,goodsCategory,combinations.productComponents' }).then(function (res) {
        _this2.proVal = res.data;
        var comb = res.data[0]['combinations']['data'];
        if (comb.length > 0) {
          var total_volume = 0;
          comb.map(function (item) {
            item['productComp'] = item['productComponents']['data'];
            if (item['productComponents']['data'].length > 0) {
              item['productComponents']['data'].map(function (list) {
                total_volume += list.volume;
              });
            } else {
              total_volume = 0;
            }
            _this2.$set(item, 'newData', {
              quantity: '',
              paint: '',
              is_printing: false,
              printing_fee: '',
              is_spot_goods: true,
              under_line_univalent: '',
              under_line_preferential: '',
              total_volume: total_volume
            });
          });
        } else {
          comb['productComp'] = [];
        }
        _this2.proSkuVal = comb;
      }, function (err) {});
    },
    addHandleClick: function addHandleClick() {},
    addProRCName: function addProRCName(_ref) {
      var row = _ref.row,
          rowIndex = _ref.rowIndex;
      row.index = rowIndex;
    },
    addProRowClick: function addProRowClick(row) {
      this.proRIndex = 'index' + row.index;
    },
    addDelPro: function addDelPro(index) {
      this.defectiveProductsData.splice(index, 1);
    },
    addCmptnOrderConfirm: function addCmptnOrderConfirm() {
      var _this3 = this;

      var forData = this.addCmptnOrderFormVal;
      var submitData = {
        shops_id: forData.shops_id,
        member_nick: forData.member_nick,
        logistics_id: forData.logistics_id,
        billing_way: forData.billing_way,
        promise_ship_time: forData.promise_ship_time,
        freight_types_id: forData.freight_types_id,
        expected_freight: forData.expected_freight,
        distributions_id: forData.distributions_id,
        distribution_methods_id: forData.distribution_methods_id,
        deliver_goods_fee: forData.deliver_goods_fee,
        move_upstairs_fee: forData.move_upstairs_fee,
        installation_fee: forData.installation_fee,
        total_distribution_fee: forData.total_distribution_fee,
        distribution_phone: forData.distribution_phone,
        distribution_no: forData.distribution_no,
        distribution_types_id: forData.distribution_types_id,
        service_car_info: forData.service_car_info,
        take_delivery_goods_fee: forData.take_delivery_goods_fee,
        take_delivery_goods_ways_id: forData.take_delivery_goods_ways_id,
        express_fee: forData.express_fee,
        service_car_fee: forData.service_car_fee,
        cancel_after_verification_code: forData.cancel_after_verification_code,
        wooden_frame_costs: forData.wooden_frame_costs,
        preferential_cashback: forData.preferential_cashback,
        favorable_cashback: forData.favorable_cashback,
        customer_types_id: forData.customer_types_id,
        is_invoice: forData.is_invoice,
        invoice_express_fee: forData.invoice_express_fee,
        express_invoice_title: forData.express_invoice_title,
        contract_no: forData.contract_no,
        payment_methods_id: forData.payment_methods_id,
        deposit: forData.deposit,
        document_title: forData.document_title,
        warehouses_id: forData.warehouses_id,
        payment_date: forData.payment_date,
        interest_concessions: forData.interest_concessions,
        is_notice: forData.is_notice,
        is_cancel_after_verification: forData.is_cancel_after_verification,
        accept_order_user: forData.accept_order_user,
        tax_number: forData.tax_number,
        receipt: forData.receipt,
        logistics_remark: forData.logistics_remark,
        seller_remark: forData.seller_remark,
        customer_service_remark: forData.customer_service_remark,
        buyer_message: forData.buyer_message,
        status: forData.status,
        receiver_name: this.receiveInfo.receiver_name,
        receiver_phone: this.receiveInfo.receiver_phone,
        receiver_mobile: this.receiveInfo.receiver_mobile,
        receiver_state: CodeToText[this.receiveInfo.provinces[0]],
        receiver_city: CodeToText[this.receiveInfo.provinces[1]],
        receiver_district: CodeToText[this.receiveInfo.provinces[2]],
        receiver_address: this.receiveInfo.receiver_address,
        receiver_zip: this.receiveInfo.receiver_zip,
        order_items: [],
        payment_details: []
      };
      this.defectiveProductsData.map(function (item) {
        var proD = {
          products_id: item.pid,
          combinations_id: item.id,
          total_volume: item['newData'].total_volume,
          paint: item['newData'].paint,
          is_printing: item['newData'].is_printing,
          printing_fee: item['newData'].printing_fee,
          is_spot_goods: item['newData'].is_spot_goods,
          under_line_univalent: item['newData'].under_line_univalent,
          under_line_total_amount: item['newData'].under_line_total_amount,
          under_line_preferential: item['newData'].under_line_preferential
        };
        submitData.order_items.push(proD);
      });
      this.expenseData.map(function (list) {
        var expenseD = {
          payment: list.payment,
          payment_methods_id: list.payment_methods_id
        };
        submitData.payment_details.push(expenseD);
      });
      this.$post(this.urls.aftercompensation, submitData).then(function () {
        _this3.addCmptnOrderMask = false;
        _this3.refresh();
        _this3.$message({
          message: '添加成功',
          type: 'success'
        });
      }, function (err) {
        if (err.response) {
          _this3.showDel = false;
          var arr = err.response.data.errors;
          var arr1 = [];
          for (var i in arr) {
            arr1.push(arr[i]);
          }
          var str = arr1.join(',');
          _this3.$message.error(str);
        }
      });
    },
    addCmptnOrderCancel: function addCmptnOrderCancel() {
      this.addCmptnOrderMask = false;
      this.$message({
        message: '取消新增订单明细',
        type: 'success'
      });
    },

    /*商品明细*/
    addProDtl: function addProDtl() {
      this.proMask = true;
      Object.assign(this.proQuery, this.$options.data().proQuery);
      this.proVal = [];
      this.proSkuVal = [];
      this.proIds = [];
    },
    toggleForm: function toggleForm() {
      /*展开  partHide
      * 折叠  没有partHide*/
      this.clickFlag = !this.clickFlag;
      this.toggleText = !this.toggleText;
      if (this.clickFlag) {
        $('#form').removeClass('hidePart');
        $('#elTabs').removeClass('hidePart');
      } else {
        $('#form').addClass('hidePart');
        $('#elTabs').addClass('hidePart');
      }
    },
    proRowClick: function proRowClick(row) {
      var _this4 = this;

      this.proSkuVal = [];
      this.proCompRowIndex = '';
      var comb = row['combinations']['data'];
      if (comb.length > 0) {
        var total_volume = 0;
        comb.map(function (item) {
          item['productComp'] = item['productComponents']['data'];
          if (item['productComponents']['data'].length > 0) {
            item['productComponents']['data'].map(function (list) {
              total_volume += list.volume;
            });
          } else {
            total_volume = 0;
          }
          _this4.$set(item, 'newData', {
            quantity: '',
            paint: '',
            is_printing: false,
            printing_fee: '0.0',
            is_spot_goods: false,
            under_line_univalent: '0.0',
            under_line_preferential: '0.0',
            total_volume: total_volume
          });
        });
      } else {
        comb['productComp'] = [];
      }
      this.proSkuVal = comb;
    },
    proCName: function proCName() {},
    proSkuCName: function proSkuCName(_ref2) {
      var row = _ref2.row,
          rowIndex = _ref2.rowIndex;
      row.index = rowIndex;
    },
    proSkuRowClick: function proSkuRowClick(row) {
      this.proCompRowIndex = 'index' + row.index;
      this.proCompRow = row;
    },
    quantityChg: function quantityChg(value) {
      var _this5 = this;

      if (value > 0) {
        var proCRow = this.proCompRow;
        if (this.proIds.indexOf(proCRow.id) == -1) {
          this.proIds.push(proCRow.id);
          this.proSubmitData.push(proCRow);
        } else {
          this.proSubmitData.map(function (list, index) {
            if (list.id == proCRow.id) {
              _this5.proSubmitData.splice(index, 1);
              _this5.proSubmitData.push(proCRow);
            }
          });
        }
      }
    },
    formChg: function formChg() {
      var formVal = void 0;
      if (this.addCmptnOrderMask) {
        formVal = this.updateCustomerFormVal;
      } else {
        formVal = this.updateCustomerFormVal;
      }
      formVal['total_distribution_fee'] = formVal['deliver_goods_fee'] - 0 + (formVal['move_upstairs_fee'] - 0) + (formVal['installation_fee'] - 0);
    },
    confirmAddProDtl: function confirmAddProDtl() {
      var _this6 = this;

      if (this.addCmptnOrderMask) {
        this.proSubmitData.map(function (item) {
          if (_this6.addIds.indexOf(item.id) == -1) {
            _this6.defectiveProductsData.push(item);
            _this6.addIds.push(item.id);
            _this6.$message({
              message: '添加商品信息成功',
              type: 'success'
            });
          } else {
            _this6.defectiveProductsData.map(function (list, index) {
              if (list.id == item.id) {
                _this6.defectiveProductsData.splice(index, 1);
                _this6.defectiveProductsData.push(item);
                _this6.$message({
                  message: '添加商品信息成功',
                  type: 'success'
                });
              }
            });
          }
        });
      } else {
        this.proSubmitData.map(function (item) {
          if (_this6.updateProIds.indexOf(item.id) == -1) {
            _this6.updateProData.push(item);
            _this6.updateProIds.push(item.id);
            _this6.$message({
              message: '添加商品信息成功',
              type: 'success'
            });
          } else {
            _this6.updateProData.map(function (list, index) {
              if (list.combinations_id == item.id) {
                _this6.$set(item, 'originalId', list.id);
                _this6.updateProData.splice(index, 1);
                _this6.updateProData.push(item);
                _this6.$message({
                  message: '添加商品信息成功',
                  type: 'success'
                });
              }
            });
          }
        });
      }
    },
    cancelAddProDtl: function cancelAddProDtl() {
      this.proMask = false;
    },
    addDelExpense: function addDelExpense(index) {
      this.expenseData.splice(index, 1);
      this.$message({
        message: '删除成功',
        type: 'success'
      });
    },
    addExpenseRCName: function addExpenseRCName(_ref3) {
      var row = _ref3.row,
          rowIndex = _ref3.rowIndex;
      row.index = rowIndex;
    },
    addExpenseRClick: function addExpenseRClick(row) {
      this.expenseRIndex = 'index' + row.index;
    },

    /*新增行*/
    addExpenseLine: function addExpenseLine() {
      if (this.addCmptnOrderMask) {
        this.expenseData.push({
          payment_methods_id: '',
          payment: ''
        });
      } else {
        this.updateExpenseData.push({
          payment_methods_id: '',
          payment: ''
        });
      }
    },

    /*删除单条*/
    delSingle: function delSingle(row, e) {
      this.showDel = true;
      $('.el-popper').css({ left: e.x - 100 + 'px', top: e.y - 125 + 'px' });
      this.delId = row.id;
      this.delUrl = row['orderItems'] ? this.urls.aftercompensation : row['payment'] ? this.urls['paymentdetails'] : this.urls.orderitems;
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
        _this7.showDel = false;
        _this7.refresh();
        _this7.$message({
          message: '删除成功',
          type: 'success'
        });
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

    /*批量删除*/
    handleSelectionChange: function handleSelectionChange(val) {
      console.log(val);
      /*拿到id集合*/
      var delArr = [];
      val.forEach(function (selectedItem) {
        delArr.push(selectedItem.id);
      });
      this.ids = delArr.join(',');
      /*拿到当前id*/
      this.checkboxId = val.length > 0 ? val[val.length - 1].id : '';
      this.curRowData = val.length > 0 ? val[val.length - 1] : '';
      this.mergerIds = val;
    },
    delBatch: function delBatch() {
      var _this8 = this;

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
          _this8.$del(_this8.urls.aftercompensation, { ids: _this8.ids }).then(function () {
            _this8.refresh();
            _this8.$message({
              message: '删除成功',
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
        }).catch(function () {
          _this8.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    },

    /*页码*/
    handlePagChg: function handlePagChg(page) {
      var _this9 = this;

      this.$fetch(this.urls.aftercompensation + '?page=' + page, { include: 'shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems.combination.productComponents,orderItems.product,businessPersonnel,locker,paymentDetails.paymentMethod,paymentDetails.order' }).then(function (res) {
        if (_this9.leftTopActiveName == '0') {
          _this9.cmptnOrderListData = res.data;
        } else {
          _this9.alreadyHandle = res.data;
        }
      });
    },
    refresh: function refresh() {
      this.loading = true;
      this.fetchData();
    },

    /*锁定*/
    lockOrder: function lockOrder() {
      var _this10 = this;

      if (this.newOpt[3].nClick) {
        return;
      } else {
        var id = this.checkboxId ? this.checkboxId : this.curRowId;
        this.$put(this.urls.aftercompensation + '/' + id + '/lockorunlock').then(function () {
          _this10.newOpt[1].nClick = false;
          _this10.newOpt[2].nClick = false;
          _this10.newOpt[3].nClick = true;
          _this10.newOpt[4].nClick = false;
          _this10.newOpt[5].nClick = false;
          _this10.newOpt[6].nClick = true;
          _this10.newOpt[8].nClick = false;
          _this10.newOpt[9].nClick = false;
          _this10.newOpt[14].nClick = false;
          _this10.refresh();
          _this10.$message({
            message: '锁定成功',
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
            _this10.$message.error(str);
          }
        });
      }
    },

    /*解锁*/
    debLock: function debLock() {
      var _this11 = this;

      if (this.newOpt[4].nClick) {
        return;
      } else {
        var id = this.checkboxId ? this.checkboxId : this.curRowId;
        this.$put(this.urls.aftercompensation + '/' + id + '/lockorunlock').then(function () {
          _this11.newOpt[1].nClick = true;
          _this11.newOpt[2].nClick = true;
          _this11.newOpt[3].nClick = false;
          _this11.newOpt[4].nClick = true;
          _this11.newOpt[5].nClick = true;
          _this11.newOpt[6].nClick = true;
          _this11.newOpt[8].nClick = true;
          _this11.newOpt[9].nClick = true;
          _this11.newOpt[14].nClick = true;
          _this11.refresh();
          _this11.$message({
            message: '解锁成功',
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
            _this11.$message.error(str);
          }
        });
      }
    },

    /*修改*/
    updateData: function updateData() {
      var _this12 = this;

      this.proIds = [];
      this.updateProIds = [];
      this.expenseRIndex = '';
      this.updateCustomerFormVal = {};
      this.updateProData = [];
      this.updateReceiveInfo = {};
      this.updateExpenseData = [];
      this.updateCustomerMask = true;
      this.proRIndex = '';
      var id = this.checkboxId ? this.checkboxId : this.curRowId;
      this.$fetch(this.urls.aftercompensation + '/' + id, { 'include': 'shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems.combination.productComponents,orderItems.product,businessPersonnel,locker,paymentDetails' }).then(function (res) {
        _this12.updateCustomerFormVal = res;
        if (res['orderItems']['data'].length > 0) {
          res['orderItems']['data'].map(function (item) {
            _this12.updateProIds.push(item['combination'].id);
            item['name'] = item['combination']['name'];
            item['id'] = item.id;
            item['products_id'] = item.products_id;
            item['combinations_id'] = item.combinations_id;
            item['productComp'] = item['combination']['productComponents']['data'];
            _this12.$set(item, 'newData', {
              quantity: item.quantity,
              paint: item.paint,
              is_printing: item.is_printing,
              printing_fee: item.printing_fee,
              is_spot_goods: item.is_spot_goods,
              under_line_univalent: item.under_line_univalent,
              under_line_preferential: item.under_line_preferential,
              total_volume: item.total_volume
            });
          });
        }
        _this12.updateProData = res['orderItems']['data'];
        _this12.updateReceiveInfo = {
          receiver_name: res.receiver_name,
          receiver_phone: res.receiver_phone,
          receiver_mobile: res.receiver_mobile,
          provinces: [TextToCode[res.receiver_state].code, TextToCode[res.receiver_state][res.receiver_city].code, TextToCode[res.receiver_state][res.receiver_city][res.receiver_district].code],
          receiver_address: res.receiver_address,
          receiver_zip: res.receiver_zip
        };
        _this12.updateExpenseData = res['paymentDetails']['data'];
      }, function (err) {
        if (err.response) {
          var arr = err.response.data.errors;
          var arr1 = [];
          for (var i in arr) {
            arr1.push(arr[i]);
          }
          var str = arr1.join(',');
          _this12.$message.error(str);
        }
      });
    },
    updateDelPro: function updateDelPro(row, index) {
      var _this13 = this;

      if (row['originalId']) {
        this.$del(this.urls.orderitems + '/' + row['originalId']).then(function () {
          _this13.updateProData.splice(index, 1);
          _this13.$message({
            message: '删除成功',
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
            _this13.$message.error(str);
          }
        });
      } else if (row.id) {
        this.$del(this.urls.orderitems + '/' + row.id).then(function () {
          _this13.updateProData.splice(index, 1);
          _this13.$message({
            message: '删除成功',
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
            _this13.$message.error(str);
          }
        });
      } else {
        this.updateProData.splice(index, 1);
        this.$message({
          message: '删除商品信息成功',
          type: 'success'
        });
      }
    },
    updateDelExpense: function updateDelExpense(row, index) {
      var _this14 = this;

      if (row.id) {
        this.$del(this.urls.paymentdetails + '/' + row.id).then(function () {
          _this14.updateExpenseData.splice(index, 1);
          _this14.$message({
            message: '删除成功',
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
            _this14.$message.error(str);
          }
        });
      } else {
        this.updateExpenseData.splice(index, 1);
        this.$message({
          message: '删除商品信息成功',
          type: 'success'
        });
      }
    },
    updateCustomerConfirm: function updateCustomerConfirm() {
      var _this15 = this;

      var forData = this.updateCustomerFormVal;
      var submitData = {
        shops_id: forData.shops_id,
        member_nick: forData.member_nick,
        logistics_id: forData.logistics_id,
        billing_way: forData.billing_way,
        promise_ship_time: forData.promise_ship_time,
        freight_types_id: forData.freight_types_id,
        expected_freight: forData.expected_freight,
        distributions_id: forData.distributions_id,
        distribution_methods_id: forData.distribution_methods_id,
        deliver_goods_fee: forData.deliver_goods_fee,
        move_upstairs_fee: forData.move_upstairs_fee,
        installation_fee: forData.installation_fee,
        total_distribution_fee: forData.total_distribution_fee,
        distribution_phone: forData.distribution_phone,
        distribution_no: forData.distribution_no,
        distribution_types_id: forData.distribution_types_id,
        service_car_info: forData.service_car_info,
        take_delivery_goods_fee: forData.take_delivery_goods_fee,
        take_delivery_goods_ways_id: forData.take_delivery_goods_ways_id,
        express_fee: forData.express_fee,
        service_car_fee: forData.service_car_fee,
        cancel_after_verification_code: forData.cancel_after_verification_code,
        wooden_frame_costs: forData.wooden_frame_costs,
        preferential_cashback: forData.preferential_cashback,
        favorable_cashback: forData.favorable_cashback,
        customer_types_id: forData.customer_types_id,
        is_invoice: forData.is_invoice,
        invoice_express_fee: forData.invoice_express_fee,
        express_invoice_title: forData.express_invoice_title,
        contract_no: forData.contract_no,
        payment_methods_id: forData.payment_methods_id,
        deposit: forData.deposit,
        document_title: forData.document_title,
        warehouses_id: forData.warehouses_id,
        payment_date: forData.payment_date,
        interest_concessions: forData.interest_concessions,
        is_notice: forData.is_notice,
        is_cancel_after_verification: forData.is_cancel_after_verification,
        accept_order_user: forData.accept_order_user,
        tax_number: forData.tax_number,
        receipt: forData.receipt,
        logistics_remark: forData.logistics_remark,
        seller_remark: forData.seller_remark,
        customer_service_remark: forData.customer_service_remark,
        buyer_message: forData.buyer_message,
        status: forData.status,
        receiver_name: this.updateReceiveInfo.receiver_name,
        receiver_phone: this.updateReceiveInfo.receiver_phone,
        receiver_mobile: this.updateReceiveInfo.receiver_mobile,
        receiver_state: CodeToText[this.updateReceiveInfo.provinces[0]],
        receiver_city: CodeToText[this.updateReceiveInfo.provinces[1]],
        receiver_district: CodeToText[this.updateReceiveInfo.provinces[2]],
        receiver_address: this.updateReceiveInfo.receiver_address,
        receiver_zip: this.updateReceiveInfo.receiver_zip,
        order_items: [],
        payment_details: []
      };
      this.updateProData.map(function (item) {
        if (item.combinations_id) {
          var proD = {
            id: item.id,
            products_id: item.products_id,
            combinations_id: item.combinations_id,
            quantity: item['newData'].quantity,
            total_volume: item['newData'].total_volume,
            paint: item['newData'].paint,
            is_printing: item['newData'].is_printing,
            printing_fee: item['newData'].printing_fee,
            is_spot_goods: item['newData'].is_spot_goods,
            under_line_univalent: item['newData'].under_line_univalent,
            under_line_total_amount: item['newData'].under_line_total_amount,
            under_line_preferential: item['newData'].under_line_preferential
          };
          submitData.order_items.push(proD);
        } else if (item['originalId']) {
          var _proD = {
            id: item['originalId'],
            products_id: item.pid,
            combinations_id: item.id,
            quantity: item['newData'].quantity,
            total_volume: item['newData'].total_volume,
            paint: item['newData'].paint,
            is_printing: item['newData'].is_printing,
            printing_fee: item['newData'].printing_fee,
            is_spot_goods: item['newData'].is_spot_goods,
            under_line_univalent: item['newData'].under_line_univalent,
            under_line_total_amount: item['newData'].under_line_total_amount,
            under_line_preferential: item['newData'].under_line_preferential
          };
          submitData.order_items.push(_proD);
        } else {
          var _proD2 = {
            products_id: item.pid,
            combinations_id: item.id,
            quantity: item['newData'].quantity,
            total_volume: item['newData'].total_volume,
            paint: item['newData'].paint,
            is_printing: item['newData'].is_printing,
            printing_fee: item['newData'].printing_fee,
            is_spot_goods: item['newData'].is_spot_goods,
            under_line_univalent: item['newData'].under_line_univalent,
            under_line_total_amount: item['newData'].under_line_total_amount,
            under_line_preferential: item['newData'].under_line_preferential
          };
          submitData.order_items.push(_proD2);
        }
      });
      this.updateExpenseData.map(function (list) {
        if (list.id) {
          var expenseD = {
            id: list.id,
            payment: list.payment,
            payment_methods_id: list.payment_methods_id
          };
          submitData.payment_details.push(expenseD);
        } else {
          var _expenseD = {
            payment: list.payment,
            payment_methods_id: list.payment_methods_id
          };
          submitData.payment_details.push(_expenseD);
        }
      });
      var id = this.checkboxId ? this.checkboxId : this.curRowId;
      this.$patch(this.urls.aftercompensation + '/' + id, submitData).then(function () {
        _this15.updateCustomerMask = false;
        _this15.refresh();
        _this15.$message({
          message: '修改成功',
          type: 'success'
        });
      }, function (err) {
        if (err.response) {
          _this15.showDel = false;
          var arr = err.response.data.errors;
          var arr1 = [];
          for (var i in arr) {
            arr1.push(arr[i]);
          }
          var str = arr1.join(',');
          _this15.$message.error(str);
        }
      });
    },
    updateCustomerCancel: function updateCustomerCancel() {
      this.updateCustomerMask = false;
      this.$message({
        message: '取消修改订单明细',
        type: 'success'
      });
    },

    /*审核*/
    handleAudit: function handleAudit() {
      var _this16 = this;

      if (this.newOpt[5].nClick) {
        return;
      } else {
        var id = this.checkboxId ? this.checkboxId : this.curRowId;
        this.$put(this.urls.aftercompensation + '/' + id + '/audit').then(function () {
          _this16.newOpt[1].nClick = true;
          _this16.newOpt[2].nClick = true;
          _this16.newOpt[3].nClick = true;
          _this16.newOpt[4].nClick = true;
          _this16.newOpt[5].nClick = true;
          _this16.newOpt[6].nClick = true;
          _this16.newOpt[8].nClick = true;
          _this16.newOpt[9].nClick = true;
          _this16.newOpt[13].nClick = true;
          _this16.newOpt[14].nClick = true;
          _this16.newOpt[15].nClick = true;
          _this16.newOpt[18].nClick = true;
          _this16.refresh();
          _this16.$message({
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
            _this16.$message.error(str);
          }
        });
      }
    },
    handleUnAudit: function handleUnAudit() {
      var _this17 = this;

      if (this.newOpt[6].nClick) {
        return;
      } else {
        var id = this.checkboxId ? this.checkboxId : this.curRowId;
        this.$put(this.urls.aftercompensation + '/' + id + '/unaudit').then(function () {
          _this17.newOpt[1].nClick = true;
          _this17.newOpt[2].nClick = true;
          _this17.newOpt[3].nClick = false;
          _this17.newOpt[4].nClick = true;
          _this17.newOpt[5].nClick = true;
          _this17.newOpt[6].nClick = true;
          _this17.newOpt[8].nClick = true;
          _this17.newOpt[9].nClick = true;
          _this17.newOpt[13].nClick = true;
          _this17.newOpt[14].nClick = true;
          _this17.newOpt[15].nClick = true;
          _this17.newOpt[18].nClick = false;
          _this17.refresh();
          _this17.$message({
            message: '退审成功',
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
            _this17.$message.error(str);
          }
        });
      }
    },
    handleSplitOrder: function handleSplitOrder() {
      var _this18 = this;

      if (this.newOpt[9].nClick) {
        return;
      } else {
        this.splitMask = true;
        this.splitRowIndex = '';
        this.splitVal = [];
        var orderData = this.curRowData['orderItems']['data'];
        if (orderData.length > 0) {
          orderData.map(function (item) {
            var list = {
              id: item.id,
              commodity_code: item.product['commodity_code'],
              short_name: item.product['short_name'],
              quantity: item['quantity'],
              newData: {
                quantity: ''
              }
            };
            _this18.splitVal.push(list);
          });
        }
      }
    },
    splitCName: function splitCName(_ref4) {
      var row = _ref4.row,
          rowIndex = _ref4.rowIndex;
      row.index = rowIndex;
    },
    splitRowClick: function splitRowClick(row) {
      this.splitRowIndex = 'index' + row.index;
      this.splitRow = row;
    },
    numChg: function numChg(value) {
      if (value > this.splitRow['quantity'] - 0) {
        this.splitRow['newData']['quantity'] = this.splitRow['quantity'];
      }
    },
    confirmSplit: function confirmSplit() {
      var _this19 = this;

      var id = this.checkboxId ? this.checkboxId : this.curRowId;
      var confSplit = {
        order_items: []
      };
      if (this.splitVal.length > 0) {
        this.splitVal.map(function (item) {
          if (item['newData']['quantity'] > 0) {
            var list = {
              id: item.id,
              quantity: item['newData']['quantity']
            };
            confSplit['order_items'].push(list);
          }
        });
      }
      this.$put(this.urls.aftercompensation + '/' + id + '/splitorder', confSplit).then(function () {
        _this19.splitMask = false;
        _this19.refresh();
        /*   this.newOpt[1].nClick = false;
           this.newOpt[2].nClick = false;
           this.newOpt[3].nClick = true;
           this.newOpt[4].nClick = false;
           this.newOpt[5].nClick = false;
           this.newOpt[6].nClick = true;
           this.newOpt[8].nClick = false;
           this.newOpt[9].nClick = false;
           this.newOpt[13].nClick = false;
           this.newOpt[14].nClick = true;
           this.newOpt[15].nClick = false;
           this.newOpt[18].nClick = false;*/
        _this19.$message({
          message: '订单拆分成功',
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
          _this19.$message.error(str);
        }
      });
    },
    cancelSplit: function cancelSplit() {
      this.splitMask = false;
    },
    handleMergerOrder: function handleMergerOrder() {
      var _this20 = this;

      if (this.newOpt[8].nClick) {
        return;
      } else {
        if (this.mergerIds.length != 2) {
          this.$message({
            message: '请选择要合并的订单',
            type: 'info'
          });
        } else {
          var ids = [];
          this.mergerIds.map(function (item) {
            ids.push(item.id);
          });
          this.$put(this.urls.aftercompensation + '/mergerorder' + '?order_id_one=' + ids[0] + '&order_id_two=' + ids[1]).then(function () {
            _this20.refresh();
            _this20.$message({
              message: '订单合并成功',
              type: 'success'
            });
          }, function (err) {
            if (err.response) {
              _this20.$message.error('合并订单出错');
            }
          });
        }
      }
    },
    resets: function resets() {
      this.searchBox = {};
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
      };
    });
  }
});

/***/ }),

/***/ 860:
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
          on: { "tab-click": _vm.outerHandleClick },
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
            { attrs: { label: "订单列表", name: "0" } },
            [
              _c("div", [
                _c("div", { staticClass: "searchBox" }, [
                  _c(
                    "span",
                    [
                      _c("label", [_vm._v("买家昵称")]),
                      _c("el-input", {
                        attrs: { clearable: "" },
                        model: {
                          value: _vm.searchBox.cmptn_buyerNickname,
                          callback: function($$v) {
                            _vm.$set(_vm.searchBox, "cmptn_buyerNickname", $$v)
                          },
                          expression: "searchBox.cmptn_buyerNickname"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    [
                      _c("label", [_vm._v("买家姓名")]),
                      _c("el-input", {
                        attrs: { clearable: "" },
                        model: {
                          value: _vm.searchBox.cmptn_buyerName,
                          callback: function($$v) {
                            _vm.$set(_vm.searchBox, "cmptn_buyerName", $$v)
                          },
                          expression: "searchBox.cmptn_buyerName"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    [
                      _c("label", [_vm._v("买家电话")]),
                      _c("el-input", {
                        attrs: { clearable: "" },
                        model: {
                          value: _vm.searchBox.cmptn_buyerPhone,
                          callback: function($$v) {
                            _vm.$set(_vm.searchBox, "cmptn_buyerPhone", $$v)
                          },
                          expression: "searchBox.cmptn_buyerPhone"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.filterBox
                    ? _c(
                        "span",
                        [
                          _c("label", [_vm._v("买家地址")]),
                          _c("el-input", {
                            attrs: { clearable: "" },
                            model: {
                              value: _vm.searchBox.cmptn_buyerAddress,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.searchBox,
                                  "cmptn_buyerAddress",
                                  $$v
                                )
                              },
                              expression: "searchBox.cmptn_buyerAddress"
                            }
                          })
                        ],
                        1
                      )
                    : _c(
                        "span",
                        [
                          _c("el-button", { attrs: { type: "primary" } }, [
                            _vm._v("筛选")
                          ]),
                          _vm._v(" "),
                          _c("el-button", [_vm._v("重置")]),
                          _vm._v(" "),
                          _c(
                            "span",
                            { on: { click: _vm.toggleShow } },
                            [
                              _c("el-button", { attrs: { type: "text" } }, [
                                _vm._v("展开")
                              ]),
                              _vm._v(" "),
                              _c("i", {
                                staticClass: "el-icon-arrow-down",
                                staticStyle: { color: "#409EFF" }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.filterBox,
                        expression: "filterBox"
                      }
                    ],
                    staticClass: "searchBox"
                  },
                  [
                    _c(
                      "span",
                      [
                        _c("label", [_vm._v("业务员")]),
                        _c("el-input", {
                          attrs: { clearable: "" },
                          model: {
                            value: _vm.searchBox.cmptn_businessPersonnel,
                            callback: function($$v) {
                              _vm.$set(
                                _vm.searchBox,
                                "cmptn_businessPersonnel",
                                $$v
                              )
                            },
                            expression: "searchBox.cmptn_businessPersonnel"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      [
                        _c("label", [_vm._v("赔偿方向")]),
                        _vm._v(" "),
                        _c(
                          "el-select",
                          {
                            attrs: { clearable: "", placeholder: "请选择" },
                            model: {
                              value: _vm.searchBox.cmptn_Direction,
                              callback: function($$v) {
                                _vm.$set(_vm.searchBox, "cmptn_Direction", $$v)
                              },
                              expression: "searchBox.cmptn_Direction"
                            }
                          },
                          _vm._l(_vm.searchBox.cmptn_Directions, function(
                            item
                          ) {
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
                        _c("label", [_vm._v("责任方")]),
                        _vm._v(" "),
                        _c(
                          "el-select",
                          {
                            attrs: { clearable: "", placeholder: "请选择" },
                            model: {
                              value: _vm.searchBox.cmptn_responsibleParty,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.searchBox,
                                  "cmptn_responsibleParty",
                                  $$v
                                )
                              },
                              expression: "searchBox.cmptn_responsibleParty"
                            }
                          },
                          _vm._l(
                            _vm.searchBox.cmptn_responsiblePartys,
                            function(item) {
                              return _c("el-option", {
                                key: item.value,
                                attrs: { label: item.label, value: item.value }
                              })
                            }
                          ),
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      [
                        _c("label", [_vm._v("责任人")]),
                        _c("el-input", {
                          attrs: { clearable: "" },
                          model: {
                            value: _vm.searchBox.cmptn_responsiblePerson,
                            callback: function($$v) {
                              _vm.$set(
                                _vm.searchBox,
                                "cmptn_responsiblePerson",
                                $$v
                              )
                            },
                            expression: "searchBox.cmptn_responsiblePerson"
                          }
                        })
                      ],
                      1
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.filterBox,
                        expression: "filterBox"
                      }
                    ],
                    staticClass: "searchBox"
                  },
                  [
                    _c(
                      "span",
                      [
                        _c("label", [_vm._v("发货物流")]),
                        _vm._v(" "),
                        _c(
                          "el-select",
                          {
                            attrs: { clearable: "", placeholder: "请选择" },
                            model: {
                              value: _vm.searchBox.cmptn_logisticsCompany,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.searchBox,
                                  "cmptn_logisticsCompany",
                                  $$v
                                )
                              },
                              expression: "searchBox.cmptn_logisticsCompany"
                            }
                          },
                          _vm._l(
                            _vm.searchBox.cmptn_logisticsCompanys,
                            function(item) {
                              return _c("el-option", {
                                key: item.value,
                                attrs: { label: item.label, value: item.value }
                              })
                            }
                          ),
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      [
                        _c("label", [_vm._v("物流单号")]),
                        _c("el-input", {
                          model: {
                            value: _vm.searchBox.cmptn_logisticsTrackingNumber,
                            callback: function($$v) {
                              _vm.$set(
                                _vm.searchBox,
                                "cmptn_logisticsTrackingNumber",
                                $$v
                              )
                            },
                            expression:
                              "searchBox.cmptn_logisticsTrackingNumber"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      [
                        _c("label", [_vm._v("所属店铺")]),
                        _vm._v(" "),
                        _c(
                          "el-select",
                          {
                            attrs: { clearable: "", placeholder: "请选择" },
                            model: {
                              value: _vm.searchBox.cmptn_orderShop,
                              callback: function($$v) {
                                _vm.$set(_vm.searchBox, "cmptn_orderShop", $$v)
                              },
                              expression: "searchBox.cmptn_orderShop"
                            }
                          },
                          _vm._l(_vm.searchBox.cmptn_orderShops, function(
                            item
                          ) {
                            return _c("el-option", {
                              key: item.value,
                              attrs: { label: item.label, value: item.value }
                            })
                          }),
                          1
                        )
                      ],
                      1
                    )
                  ]
                ),
                _vm._v(" "),
                _vm.filterBox
                  ? _c(
                      "div",
                      { staticStyle: { "text-align": "right" } },
                      [
                        _c("el-button", { attrs: { type: "primary" } }, [
                          _vm._v("筛选")
                        ]),
                        _vm._v(" "),
                        _c("el-button", { on: { click: _vm.resets } }, [
                          _vm._v("重置")
                        ]),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticStyle: { display: "inline" },
                            on: { click: _vm.toggleShow }
                          },
                          [
                            _c("el-button", { attrs: { type: "text" } }, [
                              _vm._v("收起")
                            ]),
                            _vm._v(" "),
                            _c("i", {
                              staticClass: "el-icon-arrow-up",
                              staticStyle: { color: "#409EFF" }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    )
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c(
                "el-tabs",
                {
                  staticStyle: { height: "400px" },
                  on: { "tab-click": _vm.leftHandleClick },
                  model: {
                    value: _vm.leftTopActiveName,
                    callback: function($$v) {
                      _vm.leftTopActiveName = $$v
                    },
                    expression: "leftTopActiveName"
                  }
                },
                [
                  _c(
                    "el-tab-pane",
                    { attrs: { label: "未审核", name: "0" } },
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
                          attrs: {
                            data: _vm.cmptnOrderListData,
                            fit: "",
                            height: "350"
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
                          _vm._l(_vm.cmptnOrderListHead, function(item) {
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
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            scope.row[
                                                              item.prop
                                                            ],
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
                                                        value:
                                                          scope.row[item.prop],
                                                        callback: function(
                                                          $$v
                                                        ) {
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
                                        : item.type == "flag"
                                        ? _c("span", [
                                            scope.row[item.prop] == 0
                                              ? _c("span", [
                                                  _c("i", {
                                                    staticClass:
                                                      "iconfont bf-flag"
                                                  })
                                                ])
                                              : scope.row[item.prop] == 1
                                              ? _c("span", [
                                                  _c("i", {
                                                    staticClass:
                                                      "iconfont bf-flag",
                                                    staticStyle: {
                                                      color: "red"
                                                    }
                                                  })
                                                ])
                                              : scope.row[item.prop] == 2
                                              ? _c("span", [
                                                  _c("i", {
                                                    staticClass:
                                                      "iconfont bf-flag",
                                                    staticStyle: {
                                                      color: "yellow"
                                                    }
                                                  })
                                                ])
                                              : scope.row[item.prop] == 3
                                              ? _c("span", [
                                                  _c("i", {
                                                    staticClass:
                                                      "iconfont bf-flag",
                                                    staticStyle: {
                                                      color: "green"
                                                    }
                                                  })
                                                ])
                                              : scope.row[item.prop] == 4
                                              ? _c("span", [
                                                  _c("i", {
                                                    staticClass:
                                                      "iconfont bf-flag",
                                                    staticStyle: {
                                                      color: "blue"
                                                    }
                                                  })
                                                ])
                                              : scope.row[item.prop] == 5
                                              ? _c("span", [
                                                  _c("i", {
                                                    staticClass:
                                                      "iconfont bf-flag",
                                                    staticStyle: {
                                                      color: "purple"
                                                    }
                                                  })
                                                ])
                                              : _vm._e()
                                          ])
                                        : _c("span", [
                                            scope.row[item.prop]
                                              ? _c("span", [
                                                  _vm._v(
                                                    "\n                                      " +
                                                      _vm._s(
                                                        item.inProp
                                                          ? scope.row[
                                                              item.prop
                                                            ][item.inProp]
                                                          : scope.row[item.prop]
                                                      ) +
                                                      "\n                                    "
                                                  )
                                                ])
                                              : _vm._e()
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
                                            return _vm.delSingle(
                                              scope.row,
                                              $event
                                            )
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
                  ),
                  _vm._v(" "),
                  _c(
                    "el-tab-pane",
                    { attrs: { label: "已审核", name: "1" } },
                    [
                      _c(
                        "el-table",
                        {
                          attrs: {
                            data: _vm.cmptn_alreadyHandle,
                            fit: "",
                            height: "350"
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
                          _vm._l(_vm.cmptnOrderListHead, function(item) {
                            return _c("el-table-column", {
                              key: item.label,
                              attrs: {
                                label: item.label,
                                align: "center",
                                width: item.width
                              }
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
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "clearfix" }, [
        _c(
          "div",
          { staticStyle: { float: "left" } },
          [
            _c(
              "el-tabs",
              {
                model: {
                  value: _vm.leftBottomActiveName,
                  callback: function($$v) {
                    _vm.leftBottomActiveName = $$v
                  },
                  expression: "leftBottomActiveName"
                }
              },
              [
                _c(
                  "el-tab-pane",
                  { attrs: { label: "问题产品", name: "0" } },
                  [
                    _c(
                      "el-table",
                      {
                        attrs: { data: _vm.defectiveProductsListVal, fit: "" }
                      },
                      _vm._l(_vm.defectiveProductsHead, function(item) {
                        return _c("el-table-column", {
                          key: item.prop,
                          attrs: { label: item.label, align: "center" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(scope) {
                                return [
                                  _vm._v(
                                    "\n                  " +
                                      _vm._s(
                                        scope.row[item.prop][item.inProp]
                                      ) +
                                      "\n                "
                                  )
                                ]
                              }
                            }
                          ])
                        })
                      }),
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("el-tab-pane", { attrs: { label: "图片信息", name: "1" } })
              ],
              1
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "el-dialog",
        {
          staticClass: "bigDialog",
          class: { "more-forms": _vm.moreForms, threeParts: _vm.threeParts },
          attrs: { title: "新增售后赔偿订单", visible: _vm.addCmptnOrderMask },
          on: {
            "update:visible": function($event) {
              _vm.addCmptnOrderMask = $event
            }
          }
        },
        [
          _c(
            "div",
            { staticClass: "clearfix" },
            [
              _c(
                "el-button",
                { staticStyle: { float: "left" }, attrs: { type: "text" } },
                [_vm._v("基础信息")]
              ),
              _vm._v(" "),
              _c(
                "el-button",
                {
                  staticStyle: {
                    float: "right",
                    padding: "6px 10px",
                    "font-size": "12px",
                    "margin-bottom": "5px"
                  },
                  attrs: { type: "primary" },
                  on: { click: _vm.toggleForm }
                },
                [_vm._v(_vm._s(_vm.toggleText ? "折叠" : "展开"))]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form",
            {
              staticClass: "cmptnOrderAddForm hidePart",
              attrs: { model: _vm.addCmptnOrderFormVal, id: "form" }
            },
            _vm._l(_vm.addCmptnOrderFormHead, function(item, index) {
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
                                  attrs: { disabled: item.addChgAble },
                                  model: {
                                    value:
                                      _vm.addCmprnOrderFormVal[item.prop][
                                        item.inProp
                                      ],
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.addCmprnOrderFormVal[item.prop],
                                        item.inProp,
                                        typeof $$v === "string"
                                          ? $$v.trim()
                                          : $$v
                                      )
                                    },
                                    expression:
                                      "addCmprnOrderFormVal[item.prop][item.inProp]"
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
                                    placeholder: item.holder,
                                    disabled: item.addChgAble
                                  },
                                  model: {
                                    value: _vm.addCmptnOrderFormVal[item.prop],
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.addCmptnOrderFormVal,
                                        item.prop,
                                        typeof $$v === "string"
                                          ? $$v.trim()
                                          : $$v
                                      )
                                    },
                                    expression:
                                      "addCmptnOrderFormVal[item.prop]"
                                  }
                                })
                              ],
                              1
                            )
                      ])
                    : _vm._e()
                ]
              )
            }),
            1
          ),
          _vm._v(" "),
          _c(
            "el-tabs",
            {
              staticClass: "hidePart",
              attrs: { id: "elTabs" },
              on: { "tab-click": _vm.addHandleClick },
              model: {
                value: _vm.addActiveName,
                callback: function($$v) {
                  _vm.addActiveName = $$v
                },
                expression: "addActiveName"
              }
            },
            [
              _c(
                "el-tab-pane",
                { attrs: { label: "问题产品", name: "0" } },
                [
                  _c(
                    "el-table",
                    {
                      attrs: {
                        data: _vm.defectiveProductsData,
                        fit: "",
                        "row-class-name": _vm.addProRCName
                      },
                      on: { "row-click": _vm.addProRowClick }
                    },
                    _vm._l(_vm.addHead[_vm.addActiveName], function(item) {
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
                              return undefined
                            }
                          }
                        ])
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
                      on: { click: _vm.addCmptnOrderConfirm }
                    },
                    [_vm._v("确定")]
                  ),
                  _vm._v(" "),
                  _c("el-button", { on: { click: _vm.addCmptnOrderCancel } }, [
                    _vm._v("取消")
                  ])
                ],
                1
              )
            ]
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
    require("vue-hot-reload-api")      .rerender("data-v-5af53616", module.exports)
  }
}

/***/ })

});