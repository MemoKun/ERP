webpackJsonp([102],{

/***/ 1064:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        cnt: "修改0",
        icon: "bf-change",
        ent: this.updateData,
        nClick: true
      }, {
        cnt: "退审1",
        icon: "bf-auditfaild",
        ent: this.handleunStockOut,
        nClick: true
      }, {
        cnt: "返回客审2",
        icon: "bf-examination",
        ent: this.handleStockOutToCS,
        nClick: true
      }, {
        cnt: "导出3",
        icon: "bf-out",
        ent: this.test,
        nClick: true
      }, {
        cnt: "物流单4",
        icon: "bf-logCode",
        ent: this.logisticsBill,
        nClick: true
      }, {
        cnt: "发货单5",
        icon: "bf-bill",
        ent: this.dispatchBill,
        nClick: true
      }, {
        cnt: "拆分6",
        icon: "bf-node",
        ent: this.test,
        nClick: true
      }, {
        cnt: "捡货单7",
        icon: "bf-secSort",
        ent: this.pickGoodsBill,
        nClick: true
      }, {
        cnt: "打印8",
        icon: "bf-printer",
        ent: this.print,
        nClick: true
      }, {
        cnt: "电子面单9",
        icon: "bf-salesinvoice",
        ent: this.elecBill,
        nClick: true
      }, {
        cnt: "刷新10",
        icon: "bf-refresh",
        ent: this.refresh,
        nClick: true
      }],

      filterBox: false,
      searchBox: {
        vip_name: "",
        order_num: "",
        order_man: "",
        order_phone: "",
        order_money: "",
        order_address: "",
        order_goods: "",
        order_staff: "",
        order_promiseDate: "",
        order_workDate: "",
        order_transMStart: "",
        order_transMEnd: "",
        order_customerInves: "",
        order_financeInves: "",
        order_mark: "",
        order_flag: "",
        ordertbFlag: [{ label: "ceshi", value: 0 }],
        order_lock: "",
        orderLock: [{ label: "ceshi", value: 0 }],
        order_company: "",
        orderCompany: [{ label: "ceshi", value: 0 }],
        order_shop: "",
        orderShops: [{ label: "ceshi", value: 0 }],
        order_type: "",
        orderType: [{ label: "ceshi", value: 0 }],
        order_warehouse: "",
        orderWarehouse: [{ label: "ceshi", value: 0 }]
      },
      /*获取数据*/
      activeName: "0",
      leftTopActiveName: "0",
      rightActiveName: "0",
      orderListData: [],
      orderListHead: [{
        label: "订单状态",
        width: "140",
        prop: "order_status",
        type: "text"
      }, {
        label: "系统订单",
        width: "220",
        prop: "system_order_no",
        type: "text"
      }, {
        label: "创建时间",
        width: "220",
        prop: "created_at",
        type: "text"
      }, {
        label: "淘宝单号",
        width: "220",
        prop: "taobao_oid",
        type: "text"
      }, {
        label: "订单来源",
        width: "130",
        prop: "order_source",
        type: "text"
      }, {
        label: "店铺昵称",
        width: "150",
        prop: "shop",
        inProp: "title",
        type: "text"
      }, {
        label: "买家昵称",
        width: "130",
        prop: "member_nick",
        type: "text"
      }, {
        label: "客户类型",
        width: "130",
        prop: "customerType",
        inProp: "name",
        type: "text"
      }, {
        label: "淘宝旗帜",
        width: "130",
        prop: "seller_flag",
        type: "flag"
      }, {
        label: "物流公司",
        width: "140",
        prop: "logistic",
        inProp: "name",
        type: "text"
      }, {
        label: "快递费用",
        width: "120",
        prop: "express_fee",
        type: "number"
      }, {
        label: "发货仓库",
        width: "130",
        prop: "warehouses",
        inProp: "name",
        type: "text"
      }, {
        label: "收货人",
        width: "130",
        prop: "receiver_name",
        type: "text"
      }, {
        label: "省",
        width: "120",
        prop: "receiver_state",
        type: "text"
      }, {
        label: "市",
        width: "120",
        prop: "receiver_city",
        type: "text"
      }, {
        label: "区",
        width: "120",
        prop: "receiver_district",
        type: "text"
      }, {
        label: "收货地址",
        width: "180",
        prop: "receiver_address",
        type: "text"
      }, {
        label: "配送商",
        width: "130",
        prop: "distribution",
        inProp: "name",
        type: "text"
      }, {
        label: "配送电话",
        width: "150",
        prop: "distribution",
        inProp: "phone",
        type: "number"
      }, {
        label: "配送类型",
        width: "130",
        prop: "distributionType",
        inProp: "name",
        type: "text"
      }, {
        label: "配送方式",
        width: "130",
        prop: "distributionMethod",
        inProp: "name",
        type: "text"
      }, {
        label: "送货费",
        width: "120",
        prop: "deliver_goods_fee",
        type: "number"
      }, {
        label: "搬楼费",
        width: "120",
        prop: "move_upstairs_fee",
        type: "number"
      }, {
        label: "安装费",
        width: "120",
        prop: "installation_fee",
        type: "number"
      }, {
        label: "配送总计",
        width: "130",
        prop: "total_distribution_fee",
        type: "number"
      }, {
        label: "配送单号",
        width: "180",
        prop: "distribution_no",
        type: "text"
      }, {
        label: "拍单时间",
        width: "180",
        prop: "created",
        type: "text"
      }, {
        label: "支付日期",
        width: "180",
        prop: "payment_date",
        type: "text"
      }, {
        label: "承诺发货日期",
        width: "180",
        prop: "promise_ship_time",
        type: "text"
      }, {
        label: "木架费",
        width: "120",
        prop: "wooden_frame_costs",
        type: "number"
      }, {
        label: "优惠返现",
        width: "120",
        prop: "preferential_cashback",
        type: "number"
      }, {
        label: "好评返现",
        width: "120",
        prop: "favorable_cashback",
        type: "number"
      }, {
        label: "服务车金额",
        width: "130",
        prop: "service_car_fee",
        type: "number"
      }, {
        label: "服务车信息",
        width: "150",
        prop: "service_car_info",
        type: "text"
      }, {
        label: "门店收款方式",
        width: "130",
        prop: "paymentMethod",
        inProp: "name",
        type: "text"
      }, {
        label: "门店订单金额",
        width: "140",
        prop: "deposit",
        type: "number"
      }, {
        label: "发票快递费",
        width: "130",
        prop: "invoice_express_fee",
        type: "number"
      }, {
        label: "需要发票",
        width: "90",
        prop: "is_invoice",
        type: "checkbox"
      }, {
        label: "发票信息",
        width: "160",
        prop: "print_at",
        type: "text"
      }, {
        label: "纳税识别号",
        width: "180",
        prop: "tax_number",
        type: "text"
      }, {
        label: "合并订单",
        width: "90",
        prop: "is_merge",
        type: "checkbox"
      }, {
        label: "拆分订单",
        width: "90",
        prop: "is_split",
        type: "checkbox"
      }, {
        label: "关联订单",
        width: "90",
        prop: "is_association",
        type: "checkbox"
      }, {
        label: "关联单号",
        width: "220",
        prop: "association_taobao_oid",
        type: "text"
      }, {
        label: "接单人",
        width: "120",
        prop: "accept_order_user",
        type: "text"
      }, {
        label: "收据",
        width: "130",
        prop: "receipt",
        type: "text"
      }, {
        label: "退款信息",
        width: "130",
        prop: "refund_info",
        type: "text"
      }, {
        label: "需要核销",
        width: "90",
        prop: "is_cancel_after_verification",
        type: "checkbox"
      }, {
        label: "等通知发货",
        width: "90",
        prop: "is_notice",
        type: "checkbox"
      }, {
        label: "业务员账号",
        width: "140",
        prop: "businessPersonnel",
        inProp: "username",
        type: "text"
      }, {
        label: "锁定人账号",
        width: "130",
        prop: "locker",
        inProp: "username",
        type: "text"
      }, {
        label: "锁定时间",
        width: "180",
        prop: "locked_at",
        type: "text"
      }, {
        label: "客审人账号",
        width: "130",
        prop: "csAudit",
        inProp: "username",
        type: "text"
      }, {
        label: "客审时间",
        width: "180",
        prop: "cs_audited_at",
        type: "text"
      }, {
        label: "买家留言",
        width: "150",
        prop: "buyer_message",
        type: "text"
      }, {
        label: "客服备注",
        width: "150",
        prop: "customer_service_remark",
        type: "text"
      }, {
        label: "卖家备注",
        width: "150",
        prop: "customer_service_remark",
        type: "text"
      }],
      loading: true, //作用未知
      checkboxInit: false, //作用未知
      orderListIndex: "", //作用未知
      alreadyHandle: [],
      orderDtlFormVal: {},
      orderDtlFormHead: [{
        label: "系统单号",
        prop: "system_order_no",
        type: "text"
      }, {
        label: "淘宝单号",
        prop: "taobao_oid",
        type: "text"
      }, {
        label: "交易号",
        prop: "taobao_tid",
        type: "text"
      }, {
        label: "单号失联",
        prop: "association_taobao_oid",
        type: "text"
      }, {
        label: "所属店铺",
        prop: "shop_name",
        type: "text"
      }, {
        label: "业务员",
        prop: "business_personnel_name",
        type: "text"
      }, {
        label: "买家昵称",
        prop: "member_nick",
        type: "text"
      }, {
        label: "收货人",
        prop: "receiver_name",
        type: "text"
      }, {
        label: "手机",
        prop: "receiver_mobile",
        type: "text"
      }, {
        label: "电话",
        prop: "receiver_phone",
        type: "text"
      }, {
        label: "详细地址",
        prop: "receiver_address",
        type: "text"
      }, {
        label: "快递费用",
        prop: "express_fee",
        type: "number"
      },
      /*{
              label: '标准总金额',
              prop: 'move_upstairs_fee',
              type: 'number'
            },*/
      {
        label: "运费类型",
        prop: "freight_types_name",
        type: "text"
      }, {
        label: "预付运费",
        prop: "expected_freight",
        type: "number"
      },
      /*{
              label: '支付总金额',
              prop: 'distribution_phone',
              type: 'number'
            },
            {
              label: '三包类型',
              prop: 'distribution_no',
              type: 'text'
            },
            {
              label: '三包费用',
              prop: '',
              type: 'number'
            },*/
      {
        label: "物流成本",
        prop: "deliver_goods_fee",
        type: "number"
      },
      /*   {
                 label: '订单总额',
                 prop: '',
                 type: 'number'
               },*/
      /*  {
                label: '订单时间',
                prop: '',
                type: 'text'
              },*/
      {
        label: "付款时间",
        prop: "payment_date",
        type: "text"
      }, {
        label: "承诺时间",
        prop: "promise_ship_time",
        type: "text"
      }, {
        label: "物流公司",
        prop: "logistic_name",
        type: "text"
      }, {
        label: "配送方式",
        prop: "distribution_method",
        type: "text"
      }, {
        label: "配送信息",
        prop: "service_car_info",
        type: "text"
      }, {
        label: "费用类型",
        prop: "deliver_goods_fee",
        type: "text"
      }, {
        label: "配送商",
        prop: "distribution_name",
        type: "text"
      }, {
        label: "配送电话",
        prop: "distribution_phone",
        type: "text"
      }, {
        label: "配送类型",
        prop: "distributionType_name",
        type: "text"
      }, {
        label: "配送总计",
        prop: "total_distribution_fee",
        type: "number"
      }, {
        label: "客服备注",
        prop: "customer_service_remark",
        type: "textarea"
      }, {
        label: "卖家备注",
        prop: "seller_remark",
        type: "textarea"
      }, {
        label: "买家留言",
        prop: "buyer_message",
        type: "textarea"
      }],
      proDtlData: [],
      curRowId: "",
      curRowData: {},
      orderDtlHead: [[{
        label: "sku名称",
        width: "160",
        prop: "name",
        type: "text"
      }, {
        label: "数量",
        width: "130",
        prop: "quantity",
        type: "number"
      }, {
        label: "油漆",
        width: "120",
        prop: "paint",
        type: "text"
      }, {
        label: "需要印刷",
        width: "120",
        prop: "is_printing",
        type: "checkbox"
      }, {
        label: "总体积",
        width: "120",
        prop: "total_volume",
        type: "number"
      }, {
        label: "印刷费用",
        width: "140",
        prop: "printing_fee",
        type: "number"
      }, {
        label: "现货",
        width: "120",
        prop: "is_spot_goods",
        type: "checkbox"
      }, {
        label: "单价(线下)",
        width: "150",
        prop: "under_line_univalent",
        type: "number"
      }, {
        label: "优惠(线下)",
        width: "150",
        prop: "under_line_preferential",
        type: "number"
      }], [{
        label: "支付金额",
        prop: "payment",
        type: "number"
      }, {
        label: "支付方式",
        prop: "payment_methods_id",
        type: "select",
        stateVal: "paymentmethods"
      }, {
        label: "到账金额",
        prop: "arrival_amount",
        type: "text"
      }, {
        label: "交易号",
        prop: "taobao_tid",
        type: "text"
      }, {
        label: "来源单号",
        prop: "taobao_oid",
        type: "text"
      }, {
        label: "系统单号",
        prop: "system_order_no",
        type: "text"
      }], [{
        label: "内部便签",
        prop: "inner_note",
        type: "text"
      }, {
        label: "用户",
        prop: "user",
        type: "text"
      }, {
        label: "内容",
        prop: "content",
        type: "text"
      }, {
        label: "提出时间",
        prop: "noted_at",
        type: "text"
      }], [{
        label: "用户",
        prop: "user",
        type: "text"
      }, {
        label: "操作",
        prop: "operation",
        type: "text"
      }, {
        label: "操作描述",
        prop: "operation_description",
        type: "text"
      }, {
        label: "操作时间",
        prop: "created_at",
        type: "text"
      }], [{
        label: "关联单号",
        prop: "association_taobao_oid",
        type: "text"
      }], [{
        label: "系统单号",
        prop: "system_order_no",
        type: "text"
      }, {
        label: "类型名称",
        prop: "payment_methods_id",
        type: "select",
        stateVal: "fee_type"
      }, {
        label: "金额",
        prop: "payment",
        type: "number"
      }, {
        label: "创建人",
        prop: "creator",
        type: "text"
      }, {
        label: "创建时间",
        prop: "created_at",
        type: "text"
      }, {
        label: "修改人",
        prop: "editor",
        type: "text"
      }, {
        label: "修改时间",
        prop: "edited_at",
        type: "text"
      }, {
        label: "备注",
        prop: "remark",
        type: "text"
      }], [{
        label: "驳回人",
        prop: "rejecter",
        type: "text"
      }, {
        label: "驳回时间",
        prop: "rejected_at",
        type: "text"
      }, {
        label: "驳回原因",
        prop: "reason",
        type: "text"
      }], [{
        label: "单号",
        prop: "system_order_no",
        type: "text"
      }, {
        label: "优惠标题",
        prop: "preferential_title",
        type: "text"
      }, {
        label: "优惠金额",
        prop: "preferential_cashback",
        type: "text"
      }], [{
        label: "订单图片",
        prop: "img",
        type: "img"
      }]],
      payDtlData: [],
      /*新增*/
      addStorageMask: false,
      moreForms: true,
      threeParts: true,
      addStorageFormVal: {
        //作用未知
        shops_id: "",
        member_nick: "",
        logistics_id: "",
        billing_way: "",
        promise_ship_time: "",
        freight_types_id: "",
        expected_freight: "",
        distributions_id: "",
        distribution_methods_id: "",
        deliver_goods_fee: "",
        move_upstairs_fee: "",
        installation_fee: "",
        total_distribution_fee: 0,
        distribution_phone: "",
        distribution_no: "",
        distribution_types_id: "",
        service_car_info: "",
        take_delivery_goods_fee: "",
        take_delivery_goods_ways_id: "",
        express_fee: "",
        service_car_fee: "",
        cancel_after_verification_code: "",
        wooden_frame_costs: "",
        preferential_cashback: "",
        favorable_cashback: "",
        customer_types_id: "",
        is_invoice: false,
        invoice_express_fee: "",
        express_invoice_title: "",
        contract_no: "",
        payment_methods_id: "",
        deposit: "",
        document_title: "",
        warehouses_id: "",
        payment_date: "",
        interest_concessions: "",
        is_notice: false,
        is_cancel_after_verification: false,
        accept_order_user: "",
        tax_number: "",
        receipt: "",
        logistics_remark: "",
        seller_remark: "",
        customer_service_remark: "",
        buyer_message: "",
        status: true
      },
      addStorageFormRules: {
        //新建订单的要求格式
        shops_id: [{ required: true, message: "店铺必选", trigger: "blur" }],
        logistics_id: [{ required: true, message: " 物流必选", trigger: "blur" }],
        billing_way: [{ required: true, message: "计费方式必选", trigger: "blur" }],
        freight_types_id: [{ required: true, message: "运费类型必选", trigger: "blur" }],
        distributions_id: [{ required: true, message: "配送方式必选", trigger: "blur" }],
        take_delivery_goods_fee: [{ required: true, message: "提货费用必填", trigger: "blur" }],
        customer_types_id: [{ required: true, message: "客户类型必选", trigger: "blur" }],
        payment_methods_id: [{ required: true, message: "付款方式必选", trigger: "blur" }],
        warehouses_id: [{ required: true, message: "发货仓库必选", trigger: "blur" }]
      },
      addStorageFormHead: [
      //新建或者修改仓储头
      {
        label: "物流公司",
        prop: "logistics_id",
        holder: "请选择物流公司",
        // width: '200',
        type: "select",
        stateVal: "logistics",
        editChgAble: true
      }, {
        label: "物流单号",
        prop: "logistic_oid",
        holder: "系统自动生成",
        type: "text",
        editChgAble: true
        // addChgAble: true
      }, {
        label: "实际运费",
        prop: "actual_freight",
        holder: "请输入实际运费",
        type: "number"
      }, {
        label: "配送公司",
        prop: "distributions_id",
        holder: "请选择配送公司",
        type: "select",
        stateVal: "distribution"
      }, {
        label: "配送电话",
        prop: "distribution_phone",
        holder: "请输入配送电话",
        type: "text"
      }, {
        label: "送货费用",
        prop: "deliver_goods_fee",
        holder: "请输入送货费用",
        type: "number"
      }, {
        label: "搬楼费用",
        prop: "move_upstairs_fee",
        holder: "请输入搬楼费用",
        type: "number"
      }, {
        label: "安装费用",
        prop: "installation_fee",
        holder: "请输入安装费用",
        type: "number"
      }, {
        label: "配送总计",
        prop: "total_distribution_fee",
        holder: "请输入配送总计",
        type: "number",
        addChgAble: true
      },
      //这里的星号值
      {
        label: "收货人",
        prop: "receive_num",
        holder: "请填写收货人",
        type: "text",
        stateVal: "receive"
      }, {
        label: "手机",
        prop: "receive_phone",
        holder: "请填写手机号",
        type: "text",
        stateVal: "receive"
      }, {
        label: "手动修改体积",
        prop: "mod_total_volume",
        type: "number"
      }, {
        label: "手动修改包件数",
        prop: "mod_total_number",
        type: "number"
      }, {
        label: "手动修改重量",
        prop: "mod_total_weight",
        type: "number"
      }, {
        label: "物流保价",
        prop: "distribution_save_price",
        type: "number",
        editChgAble: true,
        addChgAble: true
      }, {
        label: "保价",
        prop: "save_price",
        type: "number"
        // editChgAble: true,
        // addChgAble: true,
      }],
      addActiveName: "0",
      proData: [],
      options: __WEBPACK_IMPORTED_MODULE_0_element_china_area_data__["regionDataPlus"],
      addHead: [[{
        label: "sku名称",
        width: "160",
        prop: "name",
        type: "text"
      }, {
        label: "数量",
        width: "130",
        prop: "newData",
        inProp: "quantity",
        type: "number"
      }, {
        label: "油漆",
        width: "120",
        prop: "newData",
        inProp: "paint",
        type: "text"
      }, {
        label: "需要印刷",
        width: "120",
        prop: "newData",
        inProp: "is_printing",
        type: "checkbox"
      }, {
        label: "总体积",
        width: "120",
        prop: "newData",
        inProp: "total_volume",
        type: "number"
      }, {
        label: "印刷费用",
        width: "140",
        prop: "newData",
        inProp: "printing_fee",
        type: "number"
      }, {
        label: "现货",
        width: "120",
        prop: "newData",
        inProp: "is_spot_goods",
        type: "checkbox"
      }, {
        label: "单价(线下)",
        width: "150",
        prop: "newData",
        inProp: "under_line_univalent",
        type: "number"
      }, {
        label: "优惠(线下)",
        width: "150",
        prop: "newData",
        inProp: "under_line_preferential",
        type: "number"
      }], [{
        label: "姓名",
        prop: "receiver_name",
        holder: "请输入姓名",
        type: "text"
      }, {
        label: "固定电话",
        prop: "receiver_phone",
        holder: "请输入固定电话",
        type: "number"
      }, {
        label: "手机",
        prop: "receiver_mobile",
        holder: "请输入手机号码",
        type: "number"
      }, {
        label: "省市区",
        prop: "provinces",
        type: "cascader"
      }, {
        label: "地址",
        prop: "receiver_address",
        type: "text"
      }, {
        label: "邮编",
        prop: "receiver_zip",
        holder: "请输入邮编",
        type: "text"
      }], [{
        label: "类型名称",
        prop: "payment_methods_id",
        type: "select",
        stateVal: "fee_type"
      }, {
        label: "金额",
        prop: "payment",
        type: "number"
      }]],
      proMask: false,
      proQuery: {
        commodity_code: "",
        component_code: "",
        shops_id: "",
        short_name: ""
      },
      proHead: [{
        label: "产品图片",
        width: "120",
        prop: "img",
        type: "img"
      }, {
        label: "商品编码",
        width: "120",
        prop: "commodity_code",
        type: "text"
      }, {
        label: "工厂型号",
        width: "120",
        prop: "factory_model",
        type: "text"
      }, {
        label: "商品简称",
        width: "120",
        prop: "short_name",
        type: "text"
      }, {
        label: "类别名称",
        width: "120",
        prop: "goodsCategory",
        inProp: "name",
        type: "text"
      }, {
        label: "商品备注",
        width: "120",
        prop: "remark",
        type: "text"
      }],
      proVal: [],
      toggleText: false,
      toggleHeight: true,
      clickFlag: false,
      proCurSkuData: {},
      proSkuVal: [],
      proSkuHead: [{
        label: "sku名称",
        width: "120",
        prop: "name",
        type: "text"
      }, {
        label: "数量",
        width: "120",
        prop: "newData",
        inProp: "quantity",
        type: "number"
      }, {
        label: "油漆",
        width: "120",
        prop: "newData",
        inProp: "paint",
        type: "text"
      }, {
        label: "总体积",
        width: "120",
        prop: "newData",
        inProp: "total_volume",
        type: "number"
      }, {
        label: "需要印刷",
        width: "90",
        prop: "newData",
        inProp: "is_printing",
        type: "checkbox"
      }, {
        label: "印刷费用",
        width: "120",
        prop: "newData",
        inProp: "printing_fee",
        type: "number"
      }, {
        label: "现货",
        width: "90",
        prop: "newData",
        inProp: "is_spot_goods",
        type: "checkbox"
      }, {
        label: "单价(线下)",
        width: "130",
        prop: "newData",
        inProp: "under_line_univalent",
        type: "number"
      }, {
        label: "优惠(线下)",
        width: "130",
        prop: "newData",
        inProp: "under_line_preferential",
        type: "number"
      }],
      proCompVal: [],
      proCompHead: [{
        label: "组合",
        width: "90",
        prop: "is_common",
        type: "checkbox"
      }, {
        label: "子件图片",
        width: "120",
        prop: "img_url",
        type: "img"
      }, {
        label: "子件编码",
        width: "140",
        prop: "component_code",
        type: "text"
      }, {
        label: "子件名称",
        width: "120",
        prop: "spec",
        type: "text"
      }, {
        label: "颜色",
        width: "120",
        prop: "color",
        type: "text"
      }, {
        label: "材质",
        width: "120",
        prop: "materials",
        type: "text"
      }, {
        label: "功能",
        width: "120",
        prop: "function",
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
        label: "淘宝售价",
        width: "130",
        prop: "tb_price",
        type: "number"
      }, {
        label: "标准售价",
        width: "130",
        prop: "price",
        type: "number"
      }, {
        label: "最低销售价格",
        width: "140",
        prop: "lowest_price",
        type: "number"
      }, {
        label: "最高销售价格",
        width: "140",
        prop: "highest_price",
        type: "number"
      }, {
        label: "体积",
        width: "120",
        prop: "volume",
        type: "number"
      }, {
        label: "包件数",
        width: "130",
        prop: "package_quantity",
        type: "number"
      }, {
        label: "停产",
        width: "90",
        prop: "is_stop_pro",
        type: "checkbox"
      }],
      proCompRowIndex: "",
      proSubmitData: [],
      proIds: [],
      addIds: [],
      proCompRow: {},
      proRIndex: "",
      receiveInfo: {
        receiver_name: "",
        receiver_phone: "",
        receiver_mobile: "",
        provinces: [],
        receiver_state: "",
        receiver_city: "",
        receiver_district: "",
        receiver_address: "",
        receiver_zip: ""
      },
      halfForm: true,
      expenseData: [],
      expenseRIndex: "",
      addSubData: [],
      /*修改*/
      updateStorageMask: false,
      updateStorageFormVal: {},
      updateActiveName: "0",
      updateProData: [],
      updateReceiveInfo: {},
      updateExpenseData: [],
      updateProIds: [],
      /*删除单条*/
      showDel: false,
      delUrl: "",
      delId: "",
      /*删除批量*/
      ids: [],
      splitMask: false,
      splitVal: [],
      splitHead: [{
        label: "商品编码",
        prop: "commodity_code",
        type: "text"
      }, {
        label: "商品简称",
        prop: "short_name",
        type: "text"
      }, {
        label: "数量",
        prop: "quantity",
        type: "number"
      }, {
        label: "实际拆分数量",
        prop: "newData",
        inProp: "quantity",
        type: "number"
      }],
      splitRowIndex: "",
      splitRow: {},
      mergerIds: []
    };
  },

  /*搬运自客服部*/
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
  /*搬运自客服部*/
  filters: {
    /*conditions: function(items){
            let searchRegex = new RegExp(this.searchBox.vip_name, 'i');
            let arr=[];
            for(let i= 0, j = items.length; i < j; i++){
              arr[i] = {};
              arr[i].contacters = [];
              for(let item = 0, len = items[i].contacters.length; item < len; item++){
                if(searchRegex.test(items[i].contacters[item].name) || searchRegex.test(items[i].contacters[item].enterpriseName) || searchRegex.test(items[i].contacters[item].phoneNumber) || searchRegex.test(items[i].contacters[item].uniqueID)){
                  arr[i].firstLetter = items[i].firstLetter;
                  arr[i].contacters.push(items[i].contacters[item]);
                }
              }
            }
            return arr;
          }
    */
  },
  methods: {
    /*搬运自客服部*/
    toggleShow: function toggleShow() {
      this.filterBox = !this.filterBox;
    },
    test: function test() {
      console.log(1);
    },

    /*获取数据*/
    outerHandleClick: function outerHandleClick() {
      var index = this.activeName - 0;
      switch (index) {
        case 0:
          this.loading = true;
          this.fetchData();
          break;
        case 1:
          var data = this.orderListData[0];
          /*商品*/
          if (data) {
            this.orderDtlFormVal = {
              system_order_no: data.system_order_no,
              taobao_oid: data.taobao_oid,
              taobao_tid: data.taobao_tid,
              association_taobao_oid: data.association_taobao_oid,
              shop_name: data["shop"]["title"],
              business_personnel_name: data["businessPersonnel"] ? data["businessPersonnel"]["username"] : "",
              member_nick: data.member_nick,
              receiver_name: data.receiver_name,
              receiver_mobile: data.receiver_mobile,
              receiver_phone: data.receiver_phone,
              receiver_address: data.receiver_address,
              express_fee: data.express_fee,
              freight_types_name: data["freightType"]["name"],
              expected_freight: data.expected_freight,
              deliver_goods_fee: data.deliver_goods_fee,
              payment_date: data.payment_date,
              promise_ship_time: data.promise_ship_time,
              distribution_name: data["distribution"]["name"],
              distribution_method: data["distributionMethod"]["name"],
              service_car_info: data["service_car_info"],
              distribution_phone: data["distribution_phone"],
              buyer_message: data["buyer_message"],
              logistic_name: data["logistic"]["name"],
              distributionType_name: data["distributionType"]["name"],
              total_distribution_fee: data["total_distribution_fee"],
              customer_service_remark: data["customer_service_remark"],
              seller_remark: data["seller_remark"]
            };
          }
          if (data["orderItems"]["data"].length > 0) {
            data["orderItems"]["data"].map(function (item) {
              item["name"] = item["combination"]["name"];
              item["productComp"] = item["combination"]["productComponents"]["data"];
            });
          }
          this.proDtlData = data["orderItems"]["data"];
          /*支付明细*/
          this.payDtlData = data["paymentDetails"]["data"];
          break;
      }
    },
    fetchData: function fetchData() {
      var _this = this;

      var index = this.leftTopActiveName - 0;
      switch (index) {
        case 0:
          this.$fetch(this.urls.warehousingdepts, {
            order_status: 60,
            include: "shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems.combination.productComponents,orderItems.product,businessPersonnel,locker,paymentDetails.paymentMethod,paymentDetails.order"
          }).then(function (res) {
            _this.loading = false;
            _this.orderListData = res.data;
            var pg = res.meta.pagination;
            _this.$store.dispatch("currentPage", pg.current_page);
            _this.$store.commit("PER_PAGE", pg.per_page);
            _this.$store.commit("PAGE_TOTAL", pg.total);
            _this.$store.dispatch("paymentmethods", _this.urls.paymentmethods);
            _this.$fetch(_this.urls.customerservicedepts + "/create").then(function (res) {
              _this.addSubData = res;
            }, function (err) {});
          }, function (err) {
            if (err.response) {
              var arr = err.response.data.errors;
              var arr1 = [];
              for (var i in arr) {
                arr1.push(arr[i]);
              }
              _this.$message.error(arr1.join(","));
            }
          });
          break;
        case 1:
          this.$fetch(this.urls.warehousingdepts, {
            order_status: 70,
            include: "shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems.combination.productComponents,orderItems.product,businessPersonnel,locker,paymentDetails.paymentMethod,paymentDetails.order"
          }).then(function (res) {
            _this.loading = false;
            _this.alreadyHandle = res.data;
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
              _this.$message.error(arr1.join(","));
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
      this.curRowId = row.id;
      this.curRowData = row;
      if (row["order_status"] == "已货审") {
        this.newOpt[0].nClick = false;
        this.newOpt[1].nClick = true;
        this.newOpt[2].nClick = false;
        this.newOpt[3].nClick = false;
        this.newOpt[4].nClick = false;
        this.newOpt[5].nClick = false;
        this.newOpt[6].nClick = false;
        this.newOpt[7].nClick = false;
        this.newOpt[8].nClick = false;
        this.newOpt[9].nClick = false;
        this.newOpt[10].nClick = false;
        this.newOpt[11].nClick = false;
        this.newOpt[12].nClick = false;
      }
      if (row["order_status"] == "准备出库") {
        this.newOpt[0].nClick = false;
        this.newOpt[1].nClick = false;
        this.newOpt[2].nClick = false;
        this.newOpt[3].nClick = false;
        this.newOpt[4].nClick = false;
        this.newOpt[5].nClick = true;
        this.newOpt[6].nClick = true;
        this.newOpt[7].nClick = false;
        this.newOpt[8].nClick = false;
        this.newOpt[9].nClick = false;
        this.newOpt[10].nClick = false;
        this.newOpt[11].nClick = false;
        this.newOpt[12].nClick = false;
      }
    },
    orderDbClick: function orderDbClick(row) {
      this.activeName = "1";
      var data = row;
      if (data) {
        this.orderDtlFormVal = {
          system_order_no: data.system_order_no,
          taobao_oid: data.taobao_oid,
          taobao_tid: data.taobao_tid,
          association_taobao_oid: data.association_taobao_oid,
          shop_name: data["shop"]["title"],
          business_personnel_name: data["businessPersonnel"] ? data["businessPersonnel"]["username"] : "",
          member_nick: data.member_nick,
          receiver_name: data.receiver_name,
          receiver_mobile: data.receiver_mobile,
          receiver_phone: data.receiver_phone,
          receiver_address: data.receiver_address,
          express_fee: data.express_fee,
          freight_types_name: data["freightType"]["name"],
          expected_freight: data.expected_freight,
          deliver_goods_fee: data.deliver_goods_fee,
          payment_date: data.payment_date,
          promise_ship_time: data.promise_ship_time,
          distribution_name: data["distribution"]["name"],
          distribution_method: data["distributionMethod"]["name"],
          service_car_info: data["service_car_info"],
          distribution_phone: data["distribution_phone"],
          buyer_message: data["buyer_message"],
          logistic_name: data["logistic"]["name"],
          distributionType_name: data["distributionType"]["name"],
          total_distribution_fee: data["total_distribution_fee"],
          customer_service_remark: data["customer_service_remark"],
          seller_remark: data["seller_remark"]
        };
      }
      this.proDtlData = row["orderItems"]["data"];
      if (row["orderItems"]["data"].length > 0) {
        row["orderItems"]["data"].map(function (item) {
          item["name"] = item["combination"]["name"];
          item["productComp"] = item["combination"]["productComponents"]["data"];
        });
      }
      /*支付明细*/
      this.payDtlData = row["paymentDetails"]["data"];
    },
    proDtlRClick: function proDtlRClick(row) {},

    /*新增*/
    addStorage: function addStorage() {
      this.addStorageMask = true;
      this.addIds = [];
      this.proData = [];
      this.proRIndex = "";
    },
    proQueryClick: function proQueryClick() {
      var _this2 = this;

      this.proSkuVal = [];
      this.$fetch(this.urls.products, {
        status: true,
        commodity_code: this.proQuery.commodity_code,
        component_code: this.proQuery.component_code,
        shops_id: this.proQuery.shops_id,
        short_name: this.proQuery.short_name,
        include: "productComponents.product,shop,supplier,goodsCategory,combinations.productComponents"
      }).then(function (res) {
        _this2.proVal = res.data;
        var comb = res.data[0]["combinations"]["data"];
        if (comb.length > 0) {
          var total_volume = 0;
          comb.map(function (item) {
            item["productComp"] = item["productComponents"]["data"];
            if (item["productComponents"]["data"].length > 0) {
              item["productComponents"]["data"].map(function (list) {
                total_volume += list.volume;
              });
            } else {
              total_volume = 0;
            }
            _this2.$set(item, "newData", {
              quantity: "",
              paint: "",
              is_printing: false,
              printing_fee: "",
              is_spot_goods: true,
              under_line_univalent: "",
              under_line_preferential: "",
              total_volume: total_volume
            });
          });
        } else {
          comb["productComp"] = [];
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
      this.proRIndex = "index" + row.index;
    },
    addDelPro: function addDelPro(index) {
      this.proData.splice(index, 1);
    },
    addStorageConfirm: function addStorageConfirm() {
      var _this3 = this;

      var forData = this.addStorageFormVal;
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
        receiver_state: __WEBPACK_IMPORTED_MODULE_0_element_china_area_data__["CodeToText"][this.receiveInfo.provinces[0]],
        receiver_city: __WEBPACK_IMPORTED_MODULE_0_element_china_area_data__["CodeToText"][this.receiveInfo.provinces[1]],
        receiver_district: __WEBPACK_IMPORTED_MODULE_0_element_china_area_data__["CodeToText"][this.receiveInfo.provinces[2]],
        receiver_address: this.receiveInfo.receiver_address,
        receiver_zip: this.receiveInfo.receiver_zip,
        order_items: [],
        payment_details: []
      };
      this.proData.map(function (item) {
        var proD = {
          products_id: item.pid,
          combinations_id: item.id,
          total_volume: item["newData"].total_volume,
          paint: item["newData"].paint,
          is_printing: item["newData"].is_printing,
          printing_fee: item["newData"].printing_fee,
          is_spot_goods: item["newData"].is_spot_goods,
          under_line_univalent: item["newData"].under_line_univalent,
          under_line_total_amount: item["newData"].under_line_total_amount,
          under_line_preferential: item["newData"].under_line_preferential
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
      this.$post(this.urls.customerservicedepts, submitData).then(function () {
        _this3.addStorageMask = false;
        _this3.refresh();
        _this3.$message({
          message: "添加成功",
          type: "success"
        });
      }, function (err) {
        if (err.response) {
          _this3.showDel = false;
          var arr = err.response.data.errors;
          var arr1 = [];
          for (var i in arr) {
            arr1.push(arr[i]);
          }
          var str = arr1.join(",");
          _this3.$message.error(str);
        }
      });
    },
    addStorageCancel: function addStorageCancel() {
      this.addStorageMask = false;
      this.$message({
        message: "取消新增订单明细",
        type: "success"
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
        $("#form").removeClass("hidePart");
        $("#elTabs").removeClass("hidePart");
      } else {
        $("#form").addClass("hidePart");
        $("#elTabs").addClass("hidePart");
      }
    },
    proRowClick: function proRowClick(row) {
      var _this4 = this;

      this.proSkuVal = [];
      this.proCompRowIndex = "";
      var comb = row["combinations"]["data"];
      if (comb.length > 0) {
        var total_volume = 0;
        comb.map(function (item) {
          item["productComp"] = item["productComponents"]["data"];
          if (item["productComponents"]["data"].length > 0) {
            item["productComponents"]["data"].map(function (list) {
              total_volume += list.volume;
            });
          } else {
            total_volume = 0;
          }
          _this4.$set(item, "newData", {
            quantity: "",
            paint: "",
            is_printing: false,
            printing_fee: "0.0",
            is_spot_goods: false,
            under_line_univalent: "0.0",
            under_line_preferential: "0.0",
            total_volume: total_volume
          });
        });
      } else {
        comb["productComp"] = [];
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
      this.proCompRowIndex = "index" + row.index;
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
      if (this.addStorageMask) {
        formVal = this.updateStorageFormVal;
      } else {
        formVal = this.updateStorageFormVal;
      }
      formVal["total_distribution_fee"] = formVal["deliver_goods_fee"] - 0 + (formVal["move_upstairs_fee"] - 0) + (formVal["installation_fee"] - 0);
    },
    confirmAddProDtl: function confirmAddProDtl() {
      var _this6 = this;

      if (this.addStorageMask) {
        this.proSubmitData.map(function (item) {
          if (_this6.addIds.indexOf(item.id) == -1) {
            _this6.proData.push(item);
            _this6.addIds.push(item.id);
            _this6.$message({
              message: "添加商品信息成功",
              type: "success"
            });
          } else {
            _this6.proData.map(function (list, index) {
              if (list.id == item.id) {
                _this6.proData.splice(index, 1);
                _this6.proData.push(item);
                _this6.$message({
                  message: "添加商品信息成功",
                  type: "success"
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
              message: "添加商品信息成功",
              type: "success"
            });
          } else {
            _this6.updateProData.map(function (list, index) {
              if (list.combinations_id == item.id) {
                _this6.$set(item, "originalId", list.id);
                _this6.updateProData.splice(index, 1);
                _this6.updateProData.push(item);
                _this6.$message({
                  message: "添加商品信息成功",
                  type: "success"
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
        message: "删除成功",
        type: "success"
      });
    },
    addExpenseRCName: function addExpenseRCName(_ref3) {
      var row = _ref3.row,
          rowIndex = _ref3.rowIndex;

      row.index = rowIndex;
    },
    addExpenseRClick: function addExpenseRClick(row) {
      this.expenseRIndex = "index" + row.index;
    },

    /*新增行*/
    addExpenseLine: function addExpenseLine() {
      if (this.addStorageMask) {
        this.expenseData.push({
          payment_methods_id: "",
          payment: ""
        });
      } else {
        this.updateExpenseData.push({
          payment_methods_id: "",
          payment: ""
        });
      }
    },

    /*删除单条*/
    delSingle: function delSingle(row, e) {
      this.showDel = true;
      $(".el-popper").css({ left: e.x - 100 + "px", top: e.y - 125 + "px" });
      this.delId = row.id;
      this.delUrl = row["orderItems"] ? this.urls.customerservicedepts : row["payment"] ? this.urls["paymentdetails"] : this.urls.orderitems;
    },
    cancelD: function cancelD() {
      this.showDel = false;
      this.$message({
        message: "取消删除",
        type: "info"
      });
    },
    confirmD: function confirmD(url, id) {
      var _this7 = this;

      this.$del(url + "/" + id).then(function () {
        _this7.showDel = false;
        _this7.refresh();
        _this7.$message({
          message: "删除成功",
          type: "success"
        });
      }, function (err) {
        if (err.response) {
          _this7.showDel = false;
          var arr = err.response.data.errors;
          var arr1 = [];
          for (var i in arr) {
            arr1.push(arr[i]);
          }
          var str = arr1.join(",");
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
      this.ids = delArr.join(",");
      /*拿到当前id*/
      this.checkboxId = val.length > 0 ? val[val.length - 1].id : "";
      this.curRowData = val.length > 0 ? val[val.length - 1] : "";
      this.mergerIds = val;
    },
    delBatch: function delBatch() {
      var _this8 = this;

      if (this.ids.length === 0) {
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
          _this8.$del(_this8.urls.customerservicedepts, { ids: _this8.ids }).then(function () {
            _this8.refresh();
            _this8.$message({
              message: "删除成功",
              type: "success"
            });
          }, function (err) {
            if (err.response) {
              var arr = err.response.data.errors;
              var arr1 = [];
              for (var i in arr) {
                arr1.push(arr[i]);
              }
              var str = arr1.join(",");
              _this8.$message.error(str);
            }
          });
        }).catch(function () {
          _this8.$message({
            type: "info",
            message: "已取消删除"
          });
        });
      }
    },

    /*页码*/
    handlePagChg: function handlePagChg(page) {
      var _this9 = this;

      this.$fetch(this.urls.customerservicedepts + "?page=" + page, {
        include: "shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems.combination.productComponents,orderItems.product,businessPersonnel,locker,paymentDetails.paymentMethod,paymentDetails.order"
      }).then(function (res) {
        if (_this9.leftTopActiveName == "0") {
          _this9.orderListData = res.data;
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
        this.$put(this.urls.customerservicedepts + "/" + id + "/lockorunlock").then(function () {
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
            message: "锁定成功",
            type: "success"
          });
        }, function (err) {
          if (err.response) {
            var arr = err.response.data.errors;
            var arr1 = [];
            for (var i in arr) {
              arr1.push(arr[i]);
            }
            var str = arr1.join(",");
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
        this.$put(this.urls.customerservicedepts + "/" + id + "/lockorunlock").then(function () {
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
            message: "解锁成功",
            type: "success"
          });
        }, function (err) {
          if (err.response) {
            var arr = err.response.data.errors;
            var arr1 = [];
            for (var i in arr) {
              arr1.push(arr[i]);
            }
            var str = arr1.join(",");
            _this11.$message.error(str);
          }
        });
      }
    },

    /*修改*/
    updateData: function updateData() {
      this.proIds = [];
      this.updateProIds = [];
      this.expenseRIndex = "";
      this.updateStorageFormVal = {};
      this.updateProData = [];
      this.updateReceiveInfo = {};
      this.updateExpenseData = [];
      this.updateStorageMask = true;
      this.proRIndex = "";
      var id = this.checkboxId ? this.checkboxId : this.curRowId;
      // this.proIds = [];
      // this.updateProIds = [];
      // this.expenseRIndex = '';
      // this.updateStorageFormVal = {};
      // this.updateProData = [];
      // this.updateReceiveInfo = {};
      // this.updateExpenseData = [];
      // this.updateStorageMask = true;
      // this.proRIndex = '';
      // let id = this.checkboxId ? this.checkboxId : this.curRowId;
      // //这里是从数据库里捞数据
      // this.$fetch(this.urls.customerservicedepts + '/' + id, {'include': 'shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems.combination.productComponents,orderItems.product,businessPersonnel,locker,paymentDetails'})
      //     .then(res => {
      //         this.updateStorageFormVal = res;
      //         if (res['orderItems']['data'].length > 0) {
      //             res['orderItems']['data'].map(item => {
      //                 this.updateProIds.push(item['combination'].id);
      //                 item['name'] = item['combination']['name'];
      //                 item['id'] = item.id;
      //                 item['products_id'] = item.products_id;
      //                 item['combinations_id'] = item.combinations_id;
      //                 item['productComp'] = item['combination']['productComponents']['data'];
      //                 this.$set(item, 'newData', {
      //                     quantity: item.quantity,
      //                     paint: item.paint,
      //                     is_printing: item.is_printing,
      //                     printing_fee: item.printing_fee,
      //                     is_spot_goods: item.is_spot_goods,
      //                     under_line_univalent: item.under_line_univalent,
      //                     under_line_preferential: item.under_line_preferential,
      //                     total_volume: item.total_volume
      //                 });
      //             })
      //         }
      //         this.updateProData = res['orderItems']['data'];
      //         this.updateReceiveInfo = {
      //             receiver_name: res.receiver_name,
      //             receiver_phone: res.receiver_phone,
      //             receiver_mobile: res.receiver_mobile,
      //             provinces: [TextToCode[res.receiver_state].code, TextToCode[res.receiver_state][res.receiver_city].code, TextToCode[res.receiver_state][res.receiver_city][res.receiver_district].code],
      //             receiver_address: res.receiver_address,
      //             receiver_zip: res.receiver_zip
      //         };
      //         this.updateExpenseData = res['paymentDetails']['data'];
      //     }, err => {
      //         if (err.response) {
      //             let arr = err.response.data.errors;
      //             let arr1 = [];
      //             for (let i in arr) {
      //                 arr1.push(arr[i]);
      //             }
      //             let str = arr1.join(',');
      //             this.$message.error(str);
      //         }
      //     })
      return 1;
    },
    updateDelPro: function updateDelPro(row, index) {
      var _this12 = this;

      if (row["originalId"]) {
        this.$del(this.urls.orderitems + "/" + row["originalId"]).then(function () {
          _this12.updateProData.splice(index, 1);
          _this12.$message({
            message: "删除成功",
            type: "success"
          });
        }, function (err) {
          if (err.response) {
            var arr = err.response.data.errors;
            var arr1 = [];
            for (var i in arr) {
              arr1.push(arr[i]);
            }
            var str = arr1.join(",");
            _this12.$message.error(str);
          }
        });
      } else if (row.id) {
        this.$del(this.urls.orderitems + "/" + row.id).then(function () {
          _this12.updateProData.splice(index, 1);
          _this12.$message({
            message: "删除成功",
            type: "success"
          });
        }, function (err) {
          if (err.response) {
            var arr = err.response.data.errors;
            var arr1 = [];
            for (var i in arr) {
              arr1.push(arr[i]);
            }
            var str = arr1.join(",");
            _this12.$message.error(str);
          }
        });
      } else {
        this.updateProData.splice(index, 1);
        this.$message({
          message: "删除商品信息成功",
          type: "success"
        });
      }
    },
    updateDelExpense: function updateDelExpense(row, index) {
      var _this13 = this;

      if (row.id) {
        this.$del(this.urls.paymentdetails + "/" + row.id).then(function () {
          _this13.updateExpenseData.splice(index, 1);
          _this13.$message({
            message: "删除成功",
            type: "success"
          });
        }, function (err) {
          if (err.response) {
            var arr = err.response.data.errors;
            var arr1 = [];
            for (var i in arr) {
              arr1.push(arr[i]);
            }
            var str = arr1.join(",");
            _this13.$message.error(str);
          }
        });
      } else {
        this.updateExpenseData.splice(index, 1);
        this.$message({
          message: "删除商品信息成功",
          type: "success"
        });
      }
    },
    updateStorageConfirm: function updateStorageConfirm() {
      var _this14 = this;

      var forData = this.updateStorageFormVal;
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
        receiver_state: __WEBPACK_IMPORTED_MODULE_0_element_china_area_data__["CodeToText"][this.updateReceiveInfo.provinces[0]],
        receiver_city: __WEBPACK_IMPORTED_MODULE_0_element_china_area_data__["CodeToText"][this.updateReceiveInfo.provinces[1]],
        receiver_district: __WEBPACK_IMPORTED_MODULE_0_element_china_area_data__["CodeToText"][this.updateReceiveInfo.provinces[2]],
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
            quantity: item["newData"].quantity,
            total_volume: item["newData"].total_volume,
            paint: item["newData"].paint,
            is_printing: item["newData"].is_printing,
            printing_fee: item["newData"].printing_fee,
            is_spot_goods: item["newData"].is_spot_goods,
            under_line_univalent: item["newData"].under_line_univalent,
            under_line_total_amount: item["newData"].under_line_total_amount,
            under_line_preferential: item["newData"].under_line_preferential
          };
          submitData.order_items.push(proD);
        } else if (item["originalId"]) {
          var _proD = {
            id: item["originalId"],
            products_id: item.pid,
            combinations_id: item.id,
            quantity: item["newData"].quantity,
            total_volume: item["newData"].total_volume,
            paint: item["newData"].paint,
            is_printing: item["newData"].is_printing,
            printing_fee: item["newData"].printing_fee,
            is_spot_goods: item["newData"].is_spot_goods,
            under_line_univalent: item["newData"].under_line_univalent,
            under_line_total_amount: item["newData"].under_line_total_amount,
            under_line_preferential: item["newData"].under_line_preferential
          };
          submitData.order_items.push(_proD);
        } else {
          var _proD2 = {
            products_id: item.pid,
            combinations_id: item.id,
            quantity: item["newData"].quantity,
            total_volume: item["newData"].total_volume,
            paint: item["newData"].paint,
            is_printing: item["newData"].is_printing,
            printing_fee: item["newData"].printing_fee,
            is_spot_goods: item["newData"].is_spot_goods,
            under_line_univalent: item["newData"].under_line_univalent,
            under_line_total_amount: item["newData"].under_line_total_amount,
            under_line_preferential: item["newData"].under_line_preferential
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
      this.$patch(this.urls.customerservicedepts + "/" + id, submitData).then(function () {
        _this14.updateStorageMask = false;
        _this14.refresh();
        _this14.$message({
          message: "修改成功",
          type: "success"
        });
      }, function (err) {
        if (err.response) {
          _this14.showDel = false;
          var arr = err.response.data.errors;
          var arr1 = [];
          for (var i in arr) {
            arr1.push(arr[i]);
          }
          var str = arr1.join(",");
          _this14.$message.error(str);
        }
      });
    },
    updateStorageCancel: function updateStorageCancel() {
      this.updateStorageMask = false;
      this.$message({
        message: "取消修改订单明细",
        type: "success"
      });
    },

    /*审核*/
    handleAudit: function handleAudit() {
      var _this15 = this;

      if (this.newOpt[5].nClick) {
        return;
      } else {
        var id = this.checkboxId ? this.checkboxId : this.curRowId;
        this.$put(this.urls.customerservicedepts + "/" + id + "/audit").then(function () {
          _this15.newOpt[1].nClick = true;
          _this15.newOpt[2].nClick = true;
          _this15.newOpt[3].nClick = true;
          _this15.newOpt[4].nClick = true;
          _this15.newOpt[5].nClick = true;
          _this15.newOpt[6].nClick = true;
          _this15.newOpt[8].nClick = true;
          _this15.newOpt[9].nClick = true;
          _this15.newOpt[13].nClick = true;
          _this15.newOpt[14].nClick = true;
          _this15.newOpt[15].nClick = true;
          _this15.newOpt[18].nClick = true;
          _this15.refresh();
          _this15.$message({
            message: "审核成功",
            type: "success"
          });
        }, function (err) {
          if (err.response) {
            var arr = err.response.data.errors;
            var arr1 = [];
            for (var i in arr) {
              arr1.push(arr[i]);
            }
            var str = arr1.join(",");
            _this15.$message.error(str);
          }
        });
      }
    },
    handleunStockOut: function handleunStockOut() {
      var _this16 = this;

      if (this.newOpt[2].nClick) {
        return;
      } else {
        var id = this.checkboxId ? this.checkboxId : this.curRowId;
        this.$put(this.urls.customerservicedepts + "/" + id + "/unaudit").then(function () {
          _this16.newOpt[0].nClick = false;
          _this16.newOpt[1].nClick = true;
          _this16.newOpt[2].nClick = false;
          _this16.newOpt[3].nClick = false;
          _this16.newOpt[4].nClick = false;
          _this16.newOpt[5].nClick = false;
          _this16.newOpt[6].nClick = false;
          _this16.newOpt[7].nClick = false;
          _this16.newOpt[8].nClick = false;
          _this16.newOpt[9].nClick = false;
          _this16.newOpt[10].nClick = false;
          _this16.newOpt[11].nClick = false;
          _this16.newOpt[12].nClick = false;
          _this16.refresh();
          _this16.$message({
            message: "退审成功",
            type: "success"
          });
        }, function (err) {
          if (err.response) {
            var arr = err.response.data.errors;
            var arr1 = [];
            for (var i in arr) {
              arr1.push(arr[i]);
            }
            var str = arr1.join(",");
            _this16.$message.error(str);
          }
        });
      }
    },
    handleStockOutToCS: function handleStockOutToCS() {
      var _this17 = this;

      if (this.newOpt[3].nClick) {
        return;
      } else {
        var id = this.checkboxId ? this.checkboxId : this.curRowId;
        this.$put(this.urls.warehousingdepts + "/" + id + "/stockouttocs").then(function () {
          _this17.newOpt[0].nClick = true;
          _this17.newOpt[1].nClick = true;
          _this17.newOpt[2].nClick = true;
          _this17.newOpt[3].nClick = true;
          _this17.newOpt[4].nClick = true;
          _this17.newOpt[5].nClick = true;
          _this17.newOpt[6].nClick = true;
          _this17.newOpt[7].nClick = true;
          _this17.newOpt[8].nClick = true;
          _this17.newOpt[9].nClick = true;
          _this17.newOpt[10].nClick = true;
          _this17.newOpt[11].nClick = true;
          _this17.newOpt[12].nClick = true;
          _this17.refresh();
          _this17.$message({
            message: "退回客审成功",
            type: "success"
          });
        }, function (err) {
          if (err.response) {
            var arr = err.response.data.errors;
            var arr1 = [];
            for (var i in arr) {
              arr1.push(arr[i]);
            }
            var str = arr1.join(",");
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
        this.splitRowIndex = "";
        this.splitVal = [];
        var orderData = this.curRowData["orderItems"]["data"];
        if (orderData.length > 0) {
          orderData.map(function (item) {
            var list = {
              id: item.id,
              commodity_code: item.product["commodity_code"],
              short_name: item.product["short_name"],
              quantity: item["quantity"],
              newData: {
                quantity: ""
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
      this.splitRowIndex = "index" + row.index;
      this.splitRow = row;
    },
    numChg: function numChg(value) {
      if (value > this.splitRow["quantity"] - 0) {
        this.splitRow["newData"]["quantity"] = this.splitRow["quantity"];
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
          if (item["newData"]["quantity"] > 0) {
            var list = {
              id: item.id,
              quantity: item["newData"]["quantity"]
            };
            confSplit["order_items"].push(list);
          }
        });
      }
      this.$put(this.urls.customerservicedepts + "/" + id + "/splitorder", confSplit).then(function () {
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
          message: "订单拆分成功",
          type: "success"
        });
      }, function (err) {
        if (err.response) {
          var arr = err.response.data.errors;
          var arr1 = [];
          for (var i in arr) {
            arr1.push(arr[i]);
          }
          var str = arr1.join(",");
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
            message: "请选择要合并的订单",
            type: "info"
          });
        } else {
          var ids = [];
          this.mergerIds.map(function (item) {
            ids.push(item.id);
          });
          this.$put(this.urls.customerservicedepts + "/mergerorder" + "?order_id_one=" + ids[0] + "&order_id_two=" + ids[1]).then(function () {
            _this20.refresh();
            _this20.$message({
              message: "订单合并成功",
              type: "success"
            });
          }, function (err) {
            if (err.response) {
              _this20.$message.error("合并订单出错");
            }
          });
        }
      }
    },
    logisticsBill: function logisticsBill() {
      this.$message({
        message: "请先配置打印机",
        type: "success"
      });
    },
    dispatchBill: function dispatchBill() {
      var _this21 = this;

      if (this.newOpt[5].nClick) {
        return;
      } else {
        this.$message({
          message: "请先配置打印机",
          type: "success"
        });
        var id = this.checkboxId ? this.checkboxId : this.curRowId;
        this.$put(this.urls.warehousingdepts + "/" + id + "/isprintdispatchbill").then(function () {
          _this21.newOpt[0].nClick = false;
          _this21.newOpt[1].nClick = false;
          _this21.newOpt[2].nClick = false;
          _this21.newOpt[3].nClick = false;
          _this21.newOpt[4].nClick = false;
          _this21.newOpt[5].nClick = true;
          _this21.newOpt[6].nClick = true;
          _this21.newOpt[7].nClick = false;
          _this21.newOpt[8].nClick = false;
          _this21.newOpt[9].nClick = false;
          _this21.newOpt[10].nClick = false;
          _this21.refresh();
          _this21.$message({
            message: "打印发货单成功",
            type: "success"
          });
        }, function (err) {
          if (err.response) {
            var arr = err.response.data.errors;
            var arr1 = [];
            for (var i in arr) {
              arr1.push(arr[i]);
            }
            var str = arr1.join(",");
            _this21.$message.error(str);
          }
        });
      }
    },
    pickGoodsBill: function pickGoodsBill() {
      this.$message({
        message: "请先配置打印机",
        type: "success"
      });
    },
    print: function print() {
      this.$message({
        message: "请先配置打印机",
        type: "success"
      });
    },
    elecBill: function elecBill() {
      this.$message({
        message: "请先配置打印机",
        type: "success"
      });
    },
    resets: function resets() {
      this.searchBox = {};
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

/***/ 1065:
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
            { attrs: { label: "订单", name: "0" } },
            [
              _c("div", [
                _c("div", { staticClass: "searchBox" }, [
                  _c(
                    "span",
                    [
                      _c("label", [_vm._v("会员名称")]),
                      _vm._v(" "),
                      _c("el-input", {
                        attrs: { clearable: "" },
                        model: {
                          value: _vm.searchBox.vip_name,
                          callback: function($$v) {
                            _vm.$set(_vm.searchBox, "vip_name", $$v)
                          },
                          expression: "searchBox.vip_name"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    [
                      _c("label", [_vm._v("订单编号")]),
                      _vm._v(" "),
                      _c("el-input", {
                        attrs: { clearable: "" },
                        model: {
                          value: _vm.searchBox.order_num,
                          callback: function($$v) {
                            _vm.$set(_vm.searchBox, "order_num", $$v)
                          },
                          expression: "searchBox.order_num"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    [
                      _c("label", [_vm._v("收货人")]),
                      _vm._v(" "),
                      _c("el-input", {
                        attrs: { clearable: "" },
                        model: {
                          value: _vm.searchBox.order_man,
                          callback: function($$v) {
                            _vm.$set(_vm.searchBox, "order_man", $$v)
                          },
                          expression: "searchBox.order_man"
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
                          _c("label", [_vm._v("收货手机")]),
                          _vm._v(" "),
                          _c("el-input", {
                            attrs: { clearable: "" },
                            model: {
                              value: _vm.searchBox.order_phone,
                              callback: function($$v) {
                                _vm.$set(_vm.searchBox, "order_phone", $$v)
                              },
                              expression: "searchBox.order_phone"
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
                        _c("label", [_vm._v("收货地址")]),
                        _vm._v(" "),
                        _c("el-input", {
                          attrs: { clearable: "" },
                          model: {
                            value: _vm.searchBox.order_address,
                            callback: function($$v) {
                              _vm.$set(_vm.searchBox, "order_address", $$v)
                            },
                            expression: "searchBox.order_address"
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
                              value: _vm.searchBox.order_shop,
                              callback: function($$v) {
                                _vm.$set(_vm.searchBox, "order_shop", $$v)
                              },
                              expression: "searchBox.order_shop"
                            }
                          },
                          _vm._l(_vm.searchBox.orderShops, function(item) {
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
                        _c("label", [_vm._v("包含商品")]),
                        _vm._v(" "),
                        _c("el-input", {
                          attrs: { clearable: "" },
                          model: {
                            value: _vm.searchBox.order_goods,
                            callback: function($$v) {
                              _vm.$set(_vm.searchBox, "order_goods", $$v)
                            },
                            expression: "searchBox.order_goods"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      [
                        _c("label", [_vm._v("业务员")]),
                        _vm._v(" "),
                        _c("el-input", {
                          attrs: { clearable: "" },
                          model: {
                            value: _vm.searchBox.order_staff,
                            callback: function($$v) {
                              _vm.$set(_vm.searchBox, "order_staff", $$v)
                            },
                            expression: "searchBox.order_staff"
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
                        _c("label", [_vm._v("产品类别")]),
                        _vm._v(" "),
                        _c(
                          "el-select",
                          {
                            attrs: { clearable: "", placeholder: "请选择" },
                            model: {
                              value: _vm.searchBox.order_type,
                              callback: function($$v) {
                                _vm.$set(_vm.searchBox, "order_type", $$v)
                              },
                              expression: "searchBox.order_type"
                            }
                          },
                          _vm._l(_vm.searchBox.orderType, function(item) {
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
                        _c("label", [_vm._v("物流公司")]),
                        _vm._v(" "),
                        _c(
                          "el-select",
                          {
                            attrs: { clearable: "", placeholder: "请选择" },
                            model: {
                              value: _vm.searchBox.order_company,
                              callback: function($$v) {
                                _vm.$set(_vm.searchBox, "order_company", $$v)
                              },
                              expression: "searchBox.order_company"
                            }
                          },
                          _vm._l(_vm.searchBox.orderCompany, function(item) {
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
                        _c("label", [_vm._v("所属仓库")]),
                        _vm._v(" "),
                        _c(
                          "el-select",
                          {
                            attrs: { clearable: "", placeholder: "请选择" },
                            model: {
                              value: _vm.searchBox.order_warehouse,
                              callback: function($$v) {
                                _vm.$set(_vm.searchBox, "order_warehouse", $$v)
                              },
                              expression: "searchBox.order_warehouse"
                            }
                          },
                          _vm._l(_vm.searchBox.ordertWarehouse, function(item) {
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
                      { staticClass: "transMoney" },
                      [
                        _c("label", [_vm._v("交易金额")]),
                        _vm._v(" "),
                        _c("el-input", {
                          attrs: { type: "number", clearable: "" },
                          model: {
                            value: _vm.searchBox.order_transMStart,
                            callback: function($$v) {
                              _vm.$set(_vm.searchBox, "order_transMStart", $$v)
                            },
                            expression: "searchBox.order_transMStart"
                          }
                        }),
                        _vm._v("\n            至\n            "),
                        _c("el-input", {
                          attrs: { type: "number", clearable: "" },
                          model: {
                            value: _vm.searchBox.order_transMEnd,
                            callback: function($$v) {
                              _vm.$set(_vm.searchBox, "order_transMEnd", $$v)
                            },
                            expression: "searchBox.order_transMEnd"
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
                        _c("label", [_vm._v("承诺日期")]),
                        _vm._v(" "),
                        _c("el-date-picker", {
                          attrs: {
                            type: "daterange",
                            "range-separator": "至",
                            "start-placeholder": "开始日期",
                            "end-placeholder": "结束日期"
                          },
                          model: {
                            value: _vm.searchBox.order_promiseDate,
                            callback: function($$v) {
                              _vm.$set(_vm.searchBox, "order_promiseDate", $$v)
                            },
                            expression: "searchBox.order_promiseDate"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      [
                        _c("label", [_vm._v("业务日期")]),
                        _vm._v(" "),
                        _c("el-date-picker", {
                          attrs: {
                            type: "daterange",
                            "range-separator": "至",
                            "start-placeholder": "开始日期",
                            "end-placeholder": "结束日期"
                          },
                          model: {
                            value: _vm.searchBox.order_workDate,
                            callback: function($$v) {
                              _vm.$set(_vm.searchBox, "order_workDate", $$v)
                            },
                            expression: "searchBox.order_workDate"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      [
                        _c("label", [_vm._v("财审日期")]),
                        _vm._v(" "),
                        _c("el-date-picker", {
                          attrs: {
                            type: "daterange",
                            "range-separator": "至",
                            "start-placeholder": "开始日期",
                            "end-placeholder": "结束日期"
                          },
                          model: {
                            value: _vm.searchBox.order_financeInves,
                            callback: function($$v) {
                              _vm.$set(_vm.searchBox, "order_financeInves", $$v)
                            },
                            expression: "searchBox.order_financeInves"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      [
                        _c("label", [_vm._v("打印时间")]),
                        _vm._v(" "),
                        _c("el-date-picker", {
                          attrs: {
                            type: "daterange",
                            "range-separator": "至",
                            "start-placeholder": "开始日期",
                            "end-placeholder": "结束日期"
                          },
                          model: {
                            value: _vm.searchBox.order_printDate,
                            callback: function($$v) {
                              _vm.$set(_vm.searchBox, "order_printDate", $$v)
                            },
                            expression: "searchBox.order_printDate"
                          }
                        })
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
                    { attrs: { label: "未处理", name: "0" } },
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
                            data: _vm.orderListData,
                            fit: "",
                            height: "350"
                          },
                          on: {
                            "selection-change": _vm.handleSelectionChange,
                            "row-click": _vm.orderListRClick,
                            "row-dblclick": _vm.orderDbClick
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
                          _vm._l(_vm.orderListHead, function(item) {
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
                                                            scope.row[
                                                              item.prop
                                                            ][item.inProp],
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
                                                            scope.row[
                                                              item.prop
                                                            ],
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
                                                      "\n                    " +
                                                        _vm._s(
                                                          item.inProp
                                                            ? scope.row[
                                                                item.prop
                                                              ][item.inProp]
                                                            : scope.row[
                                                                item.prop
                                                              ]
                                                        ) +
                                                        "\n                  "
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
                                      [_vm._v("删除\n                ")]
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
                    { attrs: { label: "已处理", name: "1" } },
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
                            data: _vm.alreadyHandle,
                            fit: "",
                            height: "350"
                          },
                          on: {
                            "selection-change": _vm.handleSelectionChange,
                            "row-click": _vm.orderListRClick,
                            "row-dblclick": _vm.orderDbClick
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
                          _vm._l(_vm.orderListHead, function(item) {
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
                                                            scope.row[
                                                              item.prop
                                                            ][item.inProp],
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
                                                            scope.row[
                                                              item.prop
                                                            ],
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
                                                      "\n                    " +
                                                        _vm._s(
                                                          item.inProp
                                                            ? scope.row[
                                                                item.prop
                                                              ][item.inProp]
                                                            : scope.row[
                                                                item.prop
                                                              ]
                                                        ) +
                                                        "\n                  "
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
                                      [_vm._v("删除\n                ")]
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
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-tab-pane",
            { attrs: { label: "订单明细", name: "1" } },
            [
              _c(
                "el-form",
                {
                  staticClass: "quarter_turn",
                  attrs: { model: _vm.orderDtlFormVal }
                },
                _vm._l(_vm.orderDtlFormHead, function(item) {
                  return _c(
                    "el-form-item",
                    {
                      key: item.label,
                      attrs: { label: item.label, prop: item.prop }
                    },
                    [
                      item.type == "text"
                        ? _c("span", [
                            item.inProp
                              ? _c(
                                  "span",
                                  [
                                    _c("el-input", {
                                      attrs: {
                                        placeholder: item.holder,
                                        disabled: ""
                                      },
                                      model: {
                                        value:
                                          _vm.orderDtlFormVal[item.prop][
                                            item.inProp
                                          ],
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.orderDtlFormVal[item.prop],
                                            item.inProp,
                                            typeof $$v === "string"
                                              ? $$v.trim()
                                              : $$v
                                          )
                                        },
                                        expression:
                                          "orderDtlFormVal[item.prop][item.inProp]"
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
                                        disabled: ""
                                      },
                                      model: {
                                        value: _vm.orderDtlFormVal[item.prop],
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.orderDtlFormVal,
                                            item.prop,
                                            typeof $$v === "string"
                                              ? $$v.trim()
                                              : $$v
                                          )
                                        },
                                        expression: "orderDtlFormVal[item.prop]"
                                      }
                                    })
                                  ],
                                  1
                                )
                          ])
                        : item.type == "number"
                        ? _c(
                            "span",
                            [
                              _c("el-input", {
                                attrs: {
                                  type: "number",
                                  placeholder: item.holder,
                                  disabled: ""
                                },
                                model: {
                                  value: _vm.orderDtlFormVal[item.prop],
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.orderDtlFormVal,
                                      item.prop,
                                      typeof $$v === "string" ? $$v.trim() : $$v
                                    )
                                  },
                                  expression: "orderDtlFormVal[item.prop]"
                                }
                              })
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
                                  placehode: item.holder
                                },
                                model: {
                                  value: _vm.orderDtlFormVal[item.prop],
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.orderDtlFormVal,
                                      item.prop,
                                      typeof $$v === "string" ? $$v.trim() : $$v
                                    )
                                  },
                                  expression: "orderDtlFormVal[item.prop]"
                                }
                              })
                            ],
                            1
                          )
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
                  on: { "tab-click": _vm.rightHandleClick },
                  model: {
                    value: _vm.rightActiveName,
                    callback: function($$v) {
                      _vm.rightActiveName = $$v
                    },
                    expression: "rightActiveName"
                  }
                },
                [
                  _c(
                    "el-tab-pane",
                    { attrs: { label: "商品明细", name: "0" } },
                    [
                      _c(
                        "el-table",
                        { attrs: { data: _vm.proDtlData, fit: "" } },
                        [
                          _vm._l(
                            _vm.orderDtlHead[_vm.rightActiveName],
                            function(item) {
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
                                                      value:
                                                        scope.row[item.prop],
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
                                            : _c("span", [
                                                _vm._v(
                                                  "\n                  " +
                                                    _vm._s(
                                                      item.inProp
                                                        ? scope.row[item.prop][
                                                            item.inProp
                                                          ]
                                                        : scope.row[item.prop]
                                                    ) +
                                                    "\n                "
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
                            }
                          ),
                          _vm._v(" "),
                          _c("el-table-column", {
                            attrs: { type: "expand", fixed: "left" },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(scope) {
                                  return [
                                    _c(
                                      "el-table",
                                      {
                                        attrs: {
                                          data: scope.row["productComp"],
                                          fit: ""
                                        }
                                      },
                                      _vm._l(_vm.proCompHead, function(item) {
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
                                                    item.prop
                                                      ? _c("span", [
                                                          item.type ==
                                                          "checkbox"
                                                            ? _c(
                                                                "span",
                                                                [
                                                                  _c(
                                                                    "el-checkbox",
                                                                    {
                                                                      attrs: {
                                                                        disabled:
                                                                          ""
                                                                      },
                                                                      model: {
                                                                        value:
                                                                          scope
                                                                            .row[
                                                                            item
                                                                              .prop
                                                                          ],
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
                                                                    }
                                                                  )
                                                                ],
                                                                1
                                                              )
                                                            : item.type == "img"
                                                            ? _c(
                                                                "span",
                                                                [
                                                                  _c(
                                                                    "el-popover",
                                                                    {
                                                                      attrs: {
                                                                        placement:
                                                                          "right",
                                                                        trigger:
                                                                          "hover",
                                                                        "popper-class":
                                                                          "picture_detail"
                                                                      }
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "img",
                                                                        {
                                                                          attrs: {
                                                                            src:
                                                                              scope
                                                                                .row[
                                                                                item
                                                                                  .prop
                                                                              ]
                                                                          }
                                                                        }
                                                                      ),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c(
                                                                        "img",
                                                                        {
                                                                          attrs: {
                                                                            slot:
                                                                              "reference",
                                                                            src:
                                                                              scope
                                                                                .row[
                                                                                item
                                                                                  .prop
                                                                              ],
                                                                            alt:
                                                                              scope
                                                                                .row[
                                                                                item
                                                                                  .alt
                                                                              ]
                                                                          },
                                                                          slot:
                                                                            "reference"
                                                                        }
                                                                      )
                                                                    ]
                                                                  )
                                                                ],
                                                                1
                                                              )
                                                            : _c("span", [
                                                                _vm._v(
                                                                  "\n                          " +
                                                                    _vm._s(
                                                                      item.inProp
                                                                        ? scope
                                                                            .row[
                                                                            item
                                                                              .prop
                                                                          ][
                                                                            item
                                                                              .inProp
                                                                          ]
                                                                        : scope
                                                                            .row[
                                                                            item
                                                                              .prop
                                                                          ]
                                                                    ) +
                                                                    "\n                        "
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
                                    )
                                  ]
                                }
                              }
                            ])
                          }),
                          _vm._v(" "),
                          _c("el-table-column", {
                            attrs: {
                              label: "操作",
                              width: "90",
                              align: "center"
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
                    { attrs: { label: "支付明细", name: "1" } },
                    [
                      _c(
                        "el-table",
                        { attrs: { data: _vm.payDtlData, fit: "" } },
                        [
                          _vm._l(
                            _vm.orderDtlHead[_vm.rightActiveName],
                            function(item) {
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
                                          item.type == "select"
                                            ? _c(
                                                "span",
                                                _vm._l(
                                                  _vm.resData[item.stateVal],
                                                  function(list, index) {
                                                    return _c(
                                                      "span",
                                                      { key: index },
                                                      [
                                                        list.id ==
                                                        scope.row[item.prop]
                                                          ? _c("span", [
                                                              _vm._v(
                                                                "\n                      " +
                                                                  _vm._s(
                                                                    list.name
                                                                      ? list.name
                                                                      : ""
                                                                  ) +
                                                                  "\n                    "
                                                              )
                                                            ])
                                                          : _vm._e()
                                                      ]
                                                    )
                                                  }
                                                ),
                                                0
                                              )
                                            : _c("span", [
                                                _vm._v(
                                                  "\n                  " +
                                                    _vm._s(
                                                      item.inProp
                                                        ? scope.row[item.prop][
                                                            item.inProp
                                                          ]
                                                        : scope.row[item.prop]
                                                    ) +
                                                    "\n                "
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
                            }
                          ),
                          _vm._v(" "),
                          _c("el-table-column", {
                            attrs: {
                              label: "操作",
                              width: "90",
                              align: "center"
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
                    { attrs: { label: "内部便签", name: "2" } },
                    [
                      _c(
                        "el-table",
                        { attrs: { data: _vm.orderDtlFormVal, fit: "" } },
                        _vm._l(_vm.orderDtlHead[_vm.rightActiveName], function(
                          item
                        ) {
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
                                      item.type == "select"
                                        ? _c(
                                            "span",
                                            _vm._l(
                                              _vm.resData[item.stateVal],
                                              function(list, index) {
                                                return _c(
                                                  "span",
                                                  { key: index },
                                                  [
                                                    list.id ==
                                                    scope.row[item.prop]
                                                      ? _c("span", [
                                                          _vm._v(
                                                            "\n                      " +
                                                              _vm._s(
                                                                list.name
                                                                  ? list.name
                                                                  : ""
                                                              ) +
                                                              "\n                    "
                                                          )
                                                        ])
                                                      : _vm._e()
                                                  ]
                                                )
                                              }
                                            ),
                                            0
                                          )
                                        : _c("span", [
                                            _vm._v(
                                              "\n                  " +
                                                _vm._s(
                                                  item.inProp
                                                    ? scope.row[item.prop][
                                                        item.inProp
                                                      ]
                                                    : scope.row[item.prop]
                                                ) +
                                                "\n                "
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
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-tab-pane",
                    { attrs: { label: "操作记录", name: "3" } },
                    [
                      _c(
                        "el-table",
                        { attrs: { data: _vm.curRowData, fit: "" } },
                        _vm._l(_vm.orderDtlHead[_vm.rightActiveName], function(
                          item
                        ) {
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
                                      item.type == "select"
                                        ? _c(
                                            "span",
                                            _vm._l(
                                              _vm.resData[item.stateVal],
                                              function(list, index) {
                                                return _c(
                                                  "span",
                                                  { key: index },
                                                  [
                                                    list.id ==
                                                    scope.row[item.prop]
                                                      ? _c("span", [
                                                          _vm._v(
                                                            "\n                      " +
                                                              _vm._s(
                                                                list.name
                                                                  ? list.name
                                                                  : ""
                                                              ) +
                                                              "\n                    "
                                                          )
                                                        ])
                                                      : _vm._e()
                                                  ]
                                                )
                                              }
                                            ),
                                            0
                                          )
                                        : _c("span", [
                                            _vm._v(
                                              "\n                  " +
                                                _vm._s(
                                                  item.inProp
                                                    ? scope.row[item.prop][
                                                        item.inProp
                                                      ]
                                                    : scope.row[item.prop]
                                                ) +
                                                "\n                "
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
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-tab-pane",
                    { attrs: { label: "关联信息", name: "4" } },
                    [
                      _c(
                        "el-table",
                        { attrs: { data: _vm.curRowData, fit: "" } },
                        _vm._l(_vm.orderDtlHead[_vm.rightActiveName], function(
                          item
                        ) {
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
                                      item.type == "select"
                                        ? _c(
                                            "span",
                                            _vm._l(
                                              _vm.resData[item.stateVal],
                                              function(list, index) {
                                                return _c(
                                                  "span",
                                                  { key: index },
                                                  [
                                                    list.id ==
                                                    scope.row[item.prop]
                                                      ? _c("span", [
                                                          _vm._v(
                                                            "\n                      " +
                                                              _vm._s(
                                                                list.name
                                                                  ? list.name
                                                                  : ""
                                                              ) +
                                                              "\n                    "
                                                          )
                                                        ])
                                                      : _vm._e()
                                                  ]
                                                )
                                              }
                                            ),
                                            0
                                          )
                                        : _c("span", [
                                            _vm._v(
                                              "\n                  " +
                                                _vm._s(
                                                  item.inProp
                                                    ? scope.row[item.prop][
                                                        item.inProp
                                                      ]
                                                    : scope.row[item.prop]
                                                ) +
                                                "\n                "
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
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-tab-pane",
                    { attrs: { label: "其他费用", name: "5" } },
                    [
                      _c(
                        "el-table",
                        { attrs: { data: _vm.curRowData, fit: "" } },
                        _vm._l(_vm.orderDtlHead[_vm.rightActiveName], function(
                          item
                        ) {
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
                                      item.type == "select"
                                        ? _c(
                                            "span",
                                            _vm._l(
                                              _vm.resData[item.stateVal],
                                              function(list, index) {
                                                return _c(
                                                  "span",
                                                  { key: index },
                                                  [
                                                    list.id ==
                                                    scope.row[item.prop]
                                                      ? _c("span", [
                                                          _vm._v(
                                                            "\n                      " +
                                                              _vm._s(
                                                                list.name
                                                                  ? list.name
                                                                  : ""
                                                              ) +
                                                              "\n                    "
                                                          )
                                                        ])
                                                      : _vm._e()
                                                  ]
                                                )
                                              }
                                            ),
                                            0
                                          )
                                        : _c("span", [
                                            _vm._v(
                                              "\n                  " +
                                                _vm._s(
                                                  item.inProp
                                                    ? scope.row[item.prop][
                                                        item.inProp
                                                      ]
                                                    : scope.row[item.prop]
                                                ) +
                                                "\n                "
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
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-tab-pane",
                    { attrs: { label: "驳回原因", name: "6" } },
                    [
                      _c(
                        "el-table",
                        { attrs: { data: _vm.curRowData, fit: "" } },
                        _vm._l(_vm.orderDtlHead[_vm.rightActiveName], function(
                          item
                        ) {
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
                                      item.type == "select"
                                        ? _c(
                                            "span",
                                            _vm._l(
                                              _vm.resData[item.stateVal],
                                              function(list, index) {
                                                return _c(
                                                  "span",
                                                  { key: index },
                                                  [
                                                    list.id ==
                                                    scope.row[item.prop]
                                                      ? _c("span", [
                                                          _vm._v(
                                                            "\n                      " +
                                                              _vm._s(
                                                                list.name
                                                                  ? list.name
                                                                  : ""
                                                              ) +
                                                              "\n                    "
                                                          )
                                                        ])
                                                      : _vm._e()
                                                  ]
                                                )
                                              }
                                            ),
                                            0
                                          )
                                        : _c("span", [
                                            _vm._v(
                                              "\n                  " +
                                                _vm._s(
                                                  item.inProp
                                                    ? scope.row[item.prop][
                                                        item.inProp
                                                      ]
                                                    : scope.row[item.prop]
                                                ) +
                                                "\n                "
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
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-tab-pane",
                    { attrs: { label: "优惠列表", name: "7" } },
                    [
                      _c(
                        "el-table",
                        { attrs: { data: _vm.curRowData, fit: "" } },
                        _vm._l(_vm.orderDtlHead[_vm.rightActiveName], function(
                          item
                        ) {
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
                                      item.type == "select"
                                        ? _c(
                                            "span",
                                            _vm._l(
                                              _vm.resData[item.stateVal],
                                              function(list, index) {
                                                return _c(
                                                  "span",
                                                  { key: index },
                                                  [
                                                    list.id ==
                                                    scope.row[item.prop]
                                                      ? _c("span", [
                                                          _vm._v(
                                                            "\n                      " +
                                                              _vm._s(
                                                                list.name
                                                                  ? list.name
                                                                  : ""
                                                              ) +
                                                              "\n                    "
                                                          )
                                                        ])
                                                      : _vm._e()
                                                  ]
                                                )
                                              }
                                            ),
                                            0
                                          )
                                        : _c("span", [
                                            _vm._v(
                                              "\n                  " +
                                                _vm._s(
                                                  item.inProp
                                                    ? scope.row[item.prop][
                                                        item.inProp
                                                      ]
                                                    : scope.row[item.prop]
                                                ) +
                                                "\n                "
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
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-tab-pane",
                    { attrs: { label: "订单图片", name: "8" } },
                    [
                      _c(
                        "el-table",
                        { attrs: { data: _vm.curRowData, fit: "" } },
                        _vm._l(_vm.orderDtlHead[_vm.rightActiveName], function(
                          item
                        ) {
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
                                      item.type == "select"
                                        ? _c(
                                            "span",
                                            _vm._l(
                                              _vm.resData[item.stateVal],
                                              function(list, index) {
                                                return _c(
                                                  "span",
                                                  { key: index },
                                                  [
                                                    list.id ==
                                                    scope.row[item.prop]
                                                      ? _c("span", [
                                                          _vm._v(
                                                            "\n                      " +
                                                              _vm._s(
                                                                list.name
                                                                  ? list.name
                                                                  : ""
                                                              ) +
                                                              "\n                    "
                                                          )
                                                        ])
                                                      : _vm._e()
                                                  ]
                                                )
                                              }
                                            ),
                                            0
                                          )
                                        : _c("span", [
                                            _vm._v(
                                              "\n                  " +
                                                _vm._s(
                                                  item.inProp
                                                    ? scope.row[item.prop][
                                                        item.inProp
                                                      ]
                                                    : scope.row[item.prop]
                                                ) +
                                                "\n                "
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
      _c(
        "el-dialog",
        {
          class: { "more-forms": _vm.moreForms, threeParts: _vm.threeParts },
          attrs: { title: "商品明细", visible: _vm.proMask },
          on: {
            "update:visible": function($event) {
              _vm.proMask = $event
            }
          }
        },
        [
          _c("el-button", { attrs: { type: "text" } }, [_vm._v("选择商品")]),
          _vm._v(" "),
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
                  _c("label", [_vm._v("子件编码")]),
                  _vm._v(" "),
                  _c("el-input", {
                    attrs: { clearable: "", placeholder: "请输入子件编码" },
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
                      value: _vm.proQuery.component_code,
                      callback: function($$v) {
                        _vm.$set(
                          _vm.proQuery,
                          "component_code",
                          typeof $$v === "string" ? $$v.trim() : $$v
                        )
                      },
                      expression: "proQuery.component_code"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "span",
                [
                  _c("label", [_vm._v("商品类别")]),
                  _vm._v(" "),
                  _c(
                    "el-select",
                    {
                      attrs: { clearable: "", placeholder: "请选择商品类别" },
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
                        value: _vm.proQuery.shops_id,
                        callback: function($$v) {
                          _vm.$set(_vm.proQuery, "shops_id", $$v)
                        },
                        expression: "proQuery.shops_id"
                      }
                    },
                    _vm._l(_vm.resData.shops, function(item) {
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
                "span",
                [
                  _c("label", [_vm._v("商品简称")]),
                  _vm._v(" "),
                  _c("el-input", {
                    attrs: { clearable: "", placeholder: "请输入子件编码" },
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
                      value: _vm.proQuery.short_name,
                      callback: function($$v) {
                        _vm.$set(
                          _vm.proQuery,
                          "short_name",
                          typeof $$v === "string" ? $$v.trim() : $$v
                        )
                      },
                      expression: "proQuery.short_name"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "span",
                [
                  _c("label", [_vm._v("组合筛选")]),
                  _vm._v(" "),
                  _c("el-input", {
                    attrs: { clearable: "", placeholder: "请输入子件编码" },
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
                      value: _vm.proQuery.component_code,
                      callback: function($$v) {
                        _vm.$set(
                          _vm.proQuery,
                          "component_code",
                          typeof $$v === "string" ? $$v.trim() : $$v
                        )
                      },
                      expression: "proQuery.component_code"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "span",
                [
                  _c("label", [_vm._v("成品筛选")]),
                  _vm._v(" "),
                  _c("el-input", {
                    attrs: { clearable: "", placeholder: "请输入子件编码" },
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
                      value: _vm.proQuery.component_code,
                      callback: function($$v) {
                        _vm.$set(
                          _vm.proQuery,
                          "component_code",
                          typeof $$v === "string" ? $$v.trim() : $$v
                        )
                      },
                      expression: "proQuery.component_code"
                    }
                  })
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
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-table",
            {
              attrs: {
                data: _vm.proVal,
                fit: "",
                height: "250",
                "row-class-name": _vm.proCName
              },
              on: { "row-click": _vm.proRowClick }
            },
            _vm._l(_vm.proHead, function(item) {
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
                          item.prop
                            ? _c("span", [
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
          _c("el-button", { attrs: { type: "text" } }, [_vm._v("sku信息")]),
          _vm._v(" "),
          _c(
            "el-table",
            {
              attrs: {
                data: _vm.proSkuVal,
                fit: "",
                height: "230",
                "row-class-name": _vm.proSkuCName
              },
              on: { "row-click": _vm.proSkuRowClick }
            },
            [
              _vm._l(_vm.proSkuHead, function(item) {
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
                                  _vm.proCompRowIndex == "index" + scope.$index
                                    ? _c("span", [
                                        item.type == "number"
                                          ? _c("span", [
                                              item.inProp == "quantity"
                                                ? _c(
                                                    "span",
                                                    [
                                                      _c("el-input", {
                                                        attrs: {
                                                          size: "small",
                                                          type: "number",
                                                          placeholder:
                                                            item.holder
                                                        },
                                                        on: {
                                                          input: _vm.quantityChg
                                                        },
                                                        model: {
                                                          value:
                                                            scope.row[
                                                              item.prop
                                                            ][item.inProp],
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              scope.row[
                                                                item.prop
                                                              ],
                                                              item.inProp,
                                                              typeof $$v ===
                                                                "string"
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
                                                : _c(
                                                    "span",
                                                    [
                                                      _c("el-input", {
                                                        attrs: {
                                                          size: "small",
                                                          type: "number",
                                                          placeholder:
                                                            item.holder
                                                        },
                                                        model: {
                                                          value:
                                                            scope.row[
                                                              item.prop
                                                            ][item.inProp],
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              scope.row[
                                                                item.prop
                                                              ],
                                                              item.inProp,
                                                              typeof $$v ===
                                                                "string"
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
                                            ])
                                          : item.type == "checkbox"
                                          ? _c(
                                              "span",
                                              [
                                                _c("el-checkbox", {
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
                                                _c("el-input", {
                                                  attrs: {
                                                    size: "small",
                                                    placeholder: item.holder
                                                  },
                                                  model: {
                                                    value:
                                                      scope.row[item.prop][
                                                        item.inProp
                                                      ],
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
                                      ])
                                    : _c("span", [
                                        item.type == "checkbox"
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
                                          : _c("span", [
                                              _vm._v(
                                                "\n                " +
                                                  _vm._s(
                                                    scope.row[item.prop][
                                                      item.inProp
                                                    ]
                                                  ) +
                                                  "\n              "
                                              )
                                            ])
                                      ])
                                ])
                              : item.prop
                              ? _c("span", [
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
                                    : item.type == "img"
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
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { type: "expand", fixed: "left" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(scope) {
                      return [
                        _c(
                          "el-table",
                          {
                            attrs: { data: scope.row["productComp"], fit: "" }
                          },
                          _vm._l(_vm.proCompHead, function(item) {
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
                                        item.prop
                                          ? _c("span", [
                                              item.type == "checkbox"
                                                ? _c(
                                                    "span",
                                                    [
                                                      _c("el-checkbox", {
                                                        attrs: { disabled: "" },
                                                        model: {
                                                          value:
                                                            scope.row[
                                                              item.prop
                                                            ],
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
                                                : item.type == "img"
                                                ? _c(
                                                    "span",
                                                    [
                                                      _c(
                                                        "el-popover",
                                                        {
                                                          attrs: {
                                                            placement: "right",
                                                            trigger: "hover",
                                                            "popper-class":
                                                              "picture_detail"
                                                          }
                                                        },
                                                        [
                                                          _c("img", {
                                                            attrs: {
                                                              src:
                                                                scope.row[
                                                                  item.prop
                                                                ]
                                                            }
                                                          }),
                                                          _vm._v(" "),
                                                          _c("img", {
                                                            attrs: {
                                                              slot: "reference",
                                                              src:
                                                                scope.row[
                                                                  item.prop
                                                                ],
                                                              alt:
                                                                scope.row[
                                                                  item.alt
                                                                ]
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
                                                      "\n                    " +
                                                        _vm._s(
                                                          item.inProp
                                                            ? scope.row[
                                                                item.prop
                                                              ][item.inProp]
                                                            : scope.row[
                                                                item.prop
                                                              ]
                                                        ) +
                                                        "\n                  "
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
      ),
      _vm._v(" "),
      _c(
        "el-dialog",
        {
          staticClass: "bigDialog",
          class: { "more-forms": _vm.moreForms, threeParts: _vm.threeParts },
          attrs: { title: "修改明细", visible: _vm.updateStorageMask },
          on: {
            "update:visible": function($event) {
              _vm.updateStorageMask = $event
            }
          }
        },
        [
          _c("div", { staticClass: "clearfix" }, [
            _c("span", { staticStyle: { float: "left" } }, [_vm._v("物流信息")])
          ]),
          _vm._v(" "),
          _c(
            "el-form",
            {
              staticClass: "storageUpdateForm",
              attrs: {
                model: _vm.updateStorageFormVal,
                rules: _vm.addStorageFormRules,
                id: "form"
              }
            },
            _vm._l(_vm.addStorageFormHead, function(item, index) {
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
                                  attrs: {
                                    placeholder: item.holder,
                                    disabled: item.addChgAble
                                  },
                                  model: {
                                    value:
                                      _vm.updateStorageFormVal[item.prop][
                                        item.inProp
                                      ],
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.updateStorageFormVal[item.prop],
                                        item.inProp,
                                        typeof $$v === "string"
                                          ? $$v.trim()
                                          : $$v
                                      )
                                    },
                                    expression:
                                      "updateStorageFormVal[item.prop][item.inProp]"
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
                                    value: _vm.updateStorageFormVal[item.prop],
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.updateStorageFormVal,
                                        item.prop,
                                        typeof $$v === "string"
                                          ? $$v.trim()
                                          : $$v
                                      )
                                    },
                                    expression:
                                      "updateStorageFormVal[item.prop]"
                                  }
                                })
                              ],
                              1
                            )
                      ])
                    : item.type == "number"
                    ? _c("span", [
                        item.prop == "deliver_goods_fee" ||
                        item.prop == "move_upstairs_fee" ||
                        item.prop == "installation_fee"
                          ? _c(
                              "span",
                              [
                                _c("el-input", {
                                  attrs: {
                                    type: "number",
                                    placeholder: item.holder,
                                    disabled: item.addChgAble
                                  },
                                  on: { input: _vm.formChg },
                                  model: {
                                    value: _vm.updateStorageFormVal[item.prop],
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.updateStorageFormVal,
                                        item.prop,
                                        typeof $$v === "string"
                                          ? $$v.trim()
                                          : $$v
                                      )
                                    },
                                    expression:
                                      "updateStorageFormVal[item.prop]"
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
                                    type: "number",
                                    placeholder: item.holder,
                                    disabled: item.addChgAble
                                  },
                                  model: {
                                    value: _vm.updateStorageFormVal[item.prop],
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.updateStorageFormVal,
                                        item.prop,
                                        typeof $$v === "string"
                                          ? $$v.trim()
                                          : $$v
                                      )
                                    },
                                    expression:
                                      "updateStorageFormVal[item.prop]"
                                  }
                                })
                              ],
                              1
                            )
                      ])
                    : item.type == "select"
                    ? _c(
                        "span",
                        [
                          _c(
                            "el-select",
                            {
                              attrs: {
                                placeholder: item.holder,
                                disabled: item.addChgAble
                              },
                              model: {
                                value: _vm.updateStorageFormVal[item.prop],
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.updateStorageFormVal,
                                    item.prop,
                                    $$v
                                  )
                                },
                                expression: "updateStorageFormVal[item.prop]"
                              }
                            },
                            _vm._l(_vm.addSubData[item.stateVal], function(
                              list
                            ) {
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
                            attrs: { type: "textarea", placehode: item.holder },
                            model: {
                              value: _vm.updateStorageFormVal[item.prop],
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.updateStorageFormVal,
                                  item.prop,
                                  typeof $$v === "string" ? $$v.trim() : $$v
                                )
                              },
                              expression: "updateStorageFormVal[item.prop]"
                            }
                          })
                        ],
                        1
                      )
                    : item.type == "checkbox"
                    ? _c(
                        "span",
                        [
                          _c("el-checkbox", {
                            attrs: { disabled: item.chgAble },
                            model: {
                              value: _vm.updateStorageFormVal[item.prop],
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.updateStorageFormVal,
                                  item.prop,
                                  $$v
                                )
                              },
                              expression: "updateStorageFormVal[item.prop]"
                            }
                          })
                        ],
                        1
                      )
                    : item.type == "radio"
                    ? _c(
                        "span",
                        [
                          _c(
                            "el-radio",
                            {
                              attrs: { label: "volume" },
                              model: {
                                value: _vm.updateStorageFormVal[item.prop],
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.updateStorageFormVal,
                                    item.prop,
                                    $$v
                                  )
                                },
                                expression: "updateStorageFormVal[item.prop]"
                              }
                            },
                            [_vm._v(_vm._s(item.choiceName[0]))]
                          ),
                          _vm._v(" "),
                          _c(
                            "el-radio",
                            {
                              attrs: { label: "weight" },
                              model: {
                                value: _vm.updateStorageFormVal[item.prop],
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.updateStorageFormVal,
                                    item.prop,
                                    $$v
                                  )
                                },
                                expression: "updateStorageFormVal[item.prop]"
                              }
                            },
                            [_vm._v(_vm._s(item.choiceName[1]))]
                          )
                        ],
                        1
                      )
                    : item.type == "DatePicker"
                    ? _c(
                        "span",
                        [
                          _c("el-date-picker", {
                            attrs: {
                              type: "date",
                              format: "yyyy-MM-dd",
                              "value-format": "yyyy-MM-dd",
                              placeholder: "选择日期"
                            },
                            model: {
                              value: _vm.updateStorageFormVal[item.prop],
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.updateStorageFormVal,
                                  item.prop,
                                  $$v
                                )
                              },
                              expression: "updateStorageFormVal[item.prop]"
                            }
                          })
                        ],
                        1
                      )
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
                      on: { click: _vm.updateStorageConfirm }
                    },
                    [_vm._v("确定")]
                  ),
                  _vm._v(" "),
                  _c("el-button", { on: { click: _vm.updateStorageCancel } }, [
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
      ),
      _vm._v(" "),
      _vm.activeName == "0"
        ? _c("Pagination", {
            attrs: { "page-url": this.urls.customerservicedepts },
            on: { handlePagChg: _vm.handlePagChg }
          })
        : _vm._e(),
      _vm._v(" "),
      _c(
        "el-dialog",
        {
          class: { "more-forms": _vm.moreForms, threeParts: _vm.threeParts },
          attrs: { title: "拆分订单", visible: _vm.splitMask },
          on: {
            "update:visible": function($event) {
              _vm.splitMask = $event
            }
          }
        },
        [
          _c("el-button", { attrs: { type: "text" } }, [
            _vm._v("请选择拆出商品")
          ]),
          _vm._v(" "),
          _c(
            "el-table",
            {
              attrs: {
                data: _vm.splitVal,
                fit: "",
                height: "300",
                "row-class-name": _vm.splitCName
              },
              on: { "row-click": _vm.splitRowClick }
            },
            _vm._l(_vm.splitHead, function(item) {
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
                                _vm.splitRowIndex == "index" + scope.$index
                                  ? _c(
                                      "span",
                                      [
                                        _c("el-input", {
                                          attrs: { size: "small" },
                                          on: { input: _vm.numChg },
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
                                        "\n              " +
                                          _vm._s(
                                            scope.row[item.prop][item.inProp]
                                          ) +
                                          "\n            "
                                      )
                                    ])
                              ])
                            : item.prop
                            ? _c("span", [
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
                { attrs: { type: "primary" }, on: { click: _vm.confirmSplit } },
                [_vm._v("确定")]
              ),
              _vm._v(" "),
              _c("el-button", { on: { click: _vm.cancelSplit } }, [
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
    require("vue-hot-reload-api")      .rerender("data-v-329d3beb", module.exports)
  }
}

/***/ }),

/***/ 947:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(12)
/* script */
var __vue_script__ = __webpack_require__(1064)
/* template */
var __vue_template__ = __webpack_require__(1065)
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
Component.options.__file = "resources/assets/js/views/order/storageDepart.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-329d3beb", Component.options)
  } else {
    hotAPI.reload("data-v-329d3beb", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});