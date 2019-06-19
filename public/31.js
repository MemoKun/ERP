webpackJsonp([31],{

/***/ 1060:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

    return _ref = {
      newOpt: [{
        cnt: "修改",
        icon: "bf-change",
        ent: this.test,
        nClick: true
      }, {
        cnt: "驳回",
        icon: "bf-reject",
        ent: this.handleUnOneAudit,
        nClick: true
      }, {
        cnt: "审核",
        icon: "bf-audit",
        ent: this.handleOneAudit,
        nClick: true
      }, {
        cnt: "货审",
        icon: "bf-change",
        ent: this.handleCargoAudit,
        nClick: true
      }, {
        cnt: "退回货审",
        icon: "bf-auditfaild",
        ent: this.handleunCargoAudit,
        nClick: true
      }, {
        cnt: "发货",
        icon: "bf-deliver",
        ent: this.stockOut,
        nClick: true
      }, {
        cnt: "结算",
        icon: "bf-finSettle",
        ent: this.test,
        nClick: true
      }, {
        cnt: "导出",
        icon: "bf-out",
        ent: this.test,
        nClick: true
      }, {
        cnt: "合并",
        icon: "bf-merge",
        ent: this.handleMergerOrder,
        nClick: true
      }, {
        cnt: "拆分",
        icon: "bf-node",
        ent: this.handleSplitOrder,
        nClick: true
      }, {
        cnt: "订单采购",
        icon: "bf-purchase",
        ent: this.test,
        nClick: true
      }, {
        cnt: "生产排单",
        icon: "bf-machie",
        ent: this.test,
        nClick: true
      }, {
        cnt: "刷新",
        icon: "bf-refresh",
        ent: this.refresh,
        nClick: false
      }],
      waitingStockOut: [],
      alreadyStockOut: [],
      /*获取数据*/
      filterBox: false,
      searchBox: {
        member_nick: "",
        system_order_no: "",
        receiver_name: "",
        receiver_phone: "",
        receiver_address: "",
        shops_id: "",
        business_personnel_id: "",
        seller_remark: "",
        logistics_id: "",
        seller_flag: "",
        promise_ship_time: ["2018-12-31T16:00:00.000Z", "2099-12-31T16:00:00.000Z"],
        created_at: ["2018-12-31T16:00:00.000Z", "2099-12-31T16:00:00.000Z"],
        audit_at: ["2018-12-31T16:00:00.000Z", "2099-12-31T16:00:00.000Z"],
        order_transMStart: "",
        order_order_transMEndmark: ""
      },
      threeParts: true,
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
      loading: true,
      checkboxInit: false,
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
        label: "单号关联",
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
      curRowData: [],
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
        prop: "user_name",
        type: "text"
      }, {
        label: "操作",
        prop: "operation",
        type: "text"
      }, {
        label: "操作描述",
        prop: "description",
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
      payDtlData: [],
      /*货审*/
      moreForms: true,
      cargoAuditFormVal: {
        warehouses_id: "",
        logistics_id: "",
        distribution_methods_id: "",
        freight_types_id: "",
        distributions_id: "",
        distribution_phone: "",
        distribution_types_id: "",
        deliver_goods_fee: 0,
        move_upstairs_fee: 0,
        installation_fee: 0,
        total_distribution_fee: 0,
        expected_freight: 0
      },
      cargoAuditFormHead: [{
        label: "发货仓库",
        prop: "warehouses_id",
        width: "120",
        type: "select",
        stateVal: "warehouse"
      }, {
        label: "物流公司",
        prop: "logistics_id",
        holder: "请选择物流公司",
        type: "select",
        stateVal: "logistics"
      }, {
        label: "配送方式",
        prop: "distribution_methods_id",
        type: "select",
        stateVal: "distribution_method"
      }, {
        label: "运费类型",
        prop: "freight_types_id",
        type: "select",
        stateVal: "freight_type"
      }, {
        label: "配送公司",
        prop: "distributions_id",
        type: "select",
        stateVal: "distribution"
      }, {
        label: "配送电话",
        prop: "distribution_phone",
        type: "text"
      }, {
        label: "配送类型",
        prop: "distribution_types_id",
        type: "select",
        stateVal: "distribution_type"
      }, {
        label: "送货费用",
        prop: "deliver_goods_fee",
        type: "number"
      }, {
        label: "搬楼费用",
        prop: "move_upstairs_fee",
        type: "number"
      }, {
        label: "安装费用",
        prop: "installation_fee",
        type: "number"
      }, {
        label: "配送总计",
        prop: "total_distribution_fee",
        type: "number"
      }, {
        label: "预计运费",
        prop: "expected_freight",
        type: "number"
      }],
      cargoAuditMask: false,
      cargoAuditTableVal: {},
      cargoAuditTableHead: [{
        label: "仓库",
        prop: "warehouses_id",
        type: "select",
        stateVal: "warehouse"
      }, {
        label: "sku名称",
        prop: "combination",
        inProp: "name",
        type: "text"
      }, {
        label: "供应商",
        prop: "product",
        inProp: "supplier_id",
        type: "select",
        stateVal: "suppliers"
      }, {
        label: "商品简称",
        prop: "product",
        inProp: "short_name",
        type: "text"
      }, {
        label: "工厂型号",
        prop: "product",
        inProp: "factory_model",
        type: "text"
      }, {
        label: "商品编码",
        prop: "product",
        inProp: "commodity_code",
        type: "text"
      }, {
        label: "库存盈余",
        // prop: 'combination',
        prop: "quantity",
        type: "number"
      }],
      stockOutMask: false,
      updateCustomerFormVal: {
        system_order_no: "",
        receiver_name: "",
        receiver_mobile: "",
        receiver_address: "",
        logistics_id: "",
        logistics_sn: "",
        actual_freight: "",
        freight_types_id: "",
        expected_freight: "",
        total_volume: "",
        distribution_phone: "",
        distributions_id: "",
        distribution_no: "",
        distribution_types_id: "",
        move_upstairs_fee: "",
        deliver_goods_fee: "",
        total_distribution_fee: "",
        installation_fee: "",
        package_quantity: "",
        wooden_frame_costs: "",
        supplier_id: "",
        favorable_cashback: "",
        stockout_at: "",
        preferential_cashback: "",
        stockout_remark: "",
        warehouses_id: ""
      },
      stockOutDtlHead: [{
        label: "订单编号",
        prop: "system_order_no",
        type: "text"
      }, {
        label: "收货人",
        prop: "receiver_name",
        type: "text"
      }, {
        label: "收货手机",
        prop: "receiver_mobile",
        type: "text"
      }, {
        label: "收货地址",
        prop: "receiver_address",
        type: "text"
      }, {
        label: "物流公司",
        prop: "logistics_id",
        holder: "请选择物流公司",
        type: "select",
        stateVal: "logistics"
      }, {
        label: "物流单号",
        prop: "logistics_sn",
        type: "text"
      }, {
        label: "物流运费",
        prop: "actual_freight",
        type: "text"
      }, {
        label: "运费类型",
        prop: "freight_types_id",
        holder: "请选择运费类型",
        type: "select",
        stateVal: "freight_type"
      }, {
        label: "预计运费",
        prop: "expected_freight",
        holder: "请输入预计运费",
        type: "number"
      }, {
        label: "总体积",
        width: "120",
        prop: "total_volume",
        type: "number"
      }, {
        label: "配送电话",
        prop: "distribution_phone",
        holder: "请输入配送电话",
        type: "text"
      }, {
        label: "配送公司",
        prop: "distributions_id",
        holder: "请选择配送公司",
        type: "select",
        stateVal: "distribution"
      }, {
        label: "配送单号",
        prop: "distribution_no",
        holder: "请输入配送单号",
        type: "text"
      }, {
        label: "配送类型",
        prop: "distribution_types_id",
        holder: "请选择配送类型",
        type: "select",
        stateVal: "distribution_type"
      }, {
        label: "搬楼费用",
        prop: "move_upstairs_fee",
        holder: "请输入搬楼费用",
        type: "number"
      }, {
        label: "送货费用",
        prop: "deliver_goods_fee",
        holder: "请输入送货费用",
        type: "number"
      }, {
        label: "配送总计",
        prop: "total_distribution_fee",
        holder: "请输入配送总计",
        type: "number"
      }, {
        label: "安装费用",
        prop: "installation_fee",
        holder: "请输入安装费用",
        type: "number"
      }, {
        label: "包件总数",
        width: "130",
        prop: "package_quantity",
        type: "number"
      }, {
        label: "木架费",
        width: "120",
        prop: "wooden_frame_costs",
        type: "number"
      }, {
        label: "供应商",
        width: "120",
        prop: "supplier_id",
        type: "text"
      }, {
        label: "好评返现",
        prop: "favorable_cashback",
        holder: "请输入好评返现",
        type: "number"
      }, {
        label: "发货时间",
        prop: "stockout_at",
        holder: "请输入发货时间",
        type: "DatePicker"
      }, {
        label: "优惠返现",
        width: "120",
        prop: "preferential_cashback",
        type: "number"
      }, {
        label: "发货备注",
        width: "120",
        prop: "stockout_remark",
        type: "textarea"
      }, {
        label: "发货仓库",
        holder: "请选择发货仓库",
        prop: "warehouses_id",
        type: "select",
        stateVal: "warehouse"
      }],
      addStockOutDtlRules: {
        system_order_no: [{ required: true, message: "系统单号必选", trigger: "blur" }],
        logistics_id: [{ required: true, message: "物流公司必选", trigger: "blur" }],
        actual_freight: [{ required: true, message: "物流运费必选", trigger: "blur" }],
        distributions_id: [{ required: true, message: "配送方式必选", trigger: "blur" }],
        freight_types_id: [{ required: true, message: "运费类型必选", trigger: "blur" }],
        total_volume: [{ required: true, message: "总体积必选", trigger: "blur" }],
        package_quantity: [{ required: true, message: "包件总数必选", trigger: "blur" }],
        stockout_at: [{ required: true, message: "发货时间", trigger: "blur" }]
      },
      stockOutDtlBottomHead: [{
        label: "淘宝单号",
        width: "220",
        prop: "taobao_oid",
        type: "text"
      }, {
        label: "淘宝状态",
        width: "220",
        prop: "taobao_status",
        type: "text"
      }, {
        label: "服务车",
        width: "90",
        prop: "service_car",
        type: "checkbox"
      }, {
        label: "验证通过",
        width: "90",
        prop: "is_validated",
        type: "checkbox"
      }],
      addSubData: [],
      updateCustomerMask: false,
      updateActiveName: "0",
      updateProData: [],
      updateReceiveInfo: [],
      updateExpenseData: [],
      updateProIds: [],
      expenseData: [],
      proRIndex: "",
      proCompRowIndex: "",
      proSubmitData: [],
      proIds: [],
      addIds: [],
      proCompRow: []
    }, _defineProperty(_ref, "proRIndex", ""), _defineProperty(_ref, "receiveInfo", {
      receiver_name: "",
      receiver_phone: "",
      receiver_mobile: "",
      provinces: [],
      receiver_state: "",
      receiver_city: "",
      receiver_district: "",
      receiver_address: "",
      receiver_zip: ""
    }), _defineProperty(_ref, "halfForm", true), _defineProperty(_ref, "expenseData", []), _defineProperty(_ref, "expenseRIndex", ""), _defineProperty(_ref, "addSubData", []), _defineProperty(_ref, "apiData", []), _defineProperty(_ref, "mergerIds", []), _defineProperty(_ref, "splitMask", false), _defineProperty(_ref, "splitVal", []), _defineProperty(_ref, "splitHead", [{
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
    }]), _defineProperty(_ref, "splitRowIndex", ""), _defineProperty(_ref, "splitRow", []), _defineProperty(_ref, "mergerIds", []), _defineProperty(_ref, "operationData", []), _defineProperty(_ref, "innerNote", []), _ref;
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

    /*获取数据*/
    toggleShow: function toggleShow() {
      this.filterBox = !this.filterBox;
    },
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
      this.loading = true;
      switch (index) {
        /*已客审*/
        case 0:
          this.$fetch(this.urls.merchandiserdepts, {
            order_status: 30,
            member_nick: this.searchBox.member_nick,
            system_order_no: this.searchBox.system_order_no,
            receiver_name: this.searchBox.receiver_name,
            receiver_phone: this.searchBox.receiver_phone,
            receiver_address: this.searchBox.receiver_address,
            shops_id: this.searchBox.shops_id,
            business_personnel_id: this.searchBox.business_personnel_id,
            seller_remark: this.searchBox.seller_remark,
            logistics_id: this.searchBox.logistics_id,
            seller_flag: this.searchBox.seller_flag,
            include: "shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems.combination.productComponents,orderItems.product,businessPersonnel,locker,paymentDetails.paymentMethod,paymentDetails.order,orderOperationRecord"
          }).then(function (res) {
            _this.loading = false;
            _this.orderListData = res.data;
            var pg = res.meta.pagination;
            _this.$store.dispatch("currentPage", pg.current_page);
            _this.$store.commit("PER_PAGE", pg.per_page);
            _this.$store.commit("PAGE_TOTAL", pg.total);
            _this.$fetch(_this.urls.customerservicedepts + "/create").then(function (res) {
              _this.addSubData = res;
            }, function (err) {});
          }, function (err) {
            console.log(err);
          });
          break;
        case 1:
          this.$fetch(this.urls.merchandiserdepts, {
            order_status: 60,
            member_nick: this.searchBox.member_nick,
            system_order_no: this.searchBox.system_order_no,
            receiver_name: this.searchBox.receiver_name,
            receiver_phone: this.searchBox.receiver_phone,
            receiver_address: this.searchBox.receiver_address,
            shops_id: this.searchBox.shops_id,
            business_personnel_id: this.searchBox.business_personnel_id,
            seller_remark: this.searchBox.seller_remark,
            logistics_id: this.searchBox.logistics_id,
            seller_flag: this.searchBox.seller_flag,
            include: "shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems.combination.productComponents,orderItems.product,businessPersonnel,locker,paymentDetails.paymentMethod,paymentDetails.order,orderOperationRecord"
          }).then(function (res) {
            _this.loading = false;
            _this.alreadyHandle = res.data;
            var pg = res.meta.pagination;
            _this.$store.dispatch("currentPage", pg.current_page);
            _this.$store.commit("PER_PAGE", pg.per_page);
            _this.$store.commit("PAGE_TOTAL", pg.total);
          }, function (err) {
            console.log(err);
          });
          break;
        case 2:
          this.$fetch(this.urls.merchandiserdepts, {
            order_status: 70,
            member_nick: this.searchBox.member_nick,
            system_order_no: this.searchBox.system_order_no,
            receiver_name: this.searchBox.receiver_name,
            receiver_phone: this.searchBox.receiver_phone,
            receiver_address: this.searchBox.receiver_address,
            shops_id: this.searchBox.shops_id,
            business_personnel_id: this.searchBox.business_personnel_id,
            seller_remark: this.searchBox.seller_remark,
            logistics_id: this.searchBox.logistics_id,
            seller_flag: this.searchBox.seller_flag,
            include: "shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems.combination.productComponents,orderItems.product,businessPersonnel,locker,paymentDetails.paymentMethod,paymentDetails.order,orderOperationRecord"
          }).then(function (res) {
            _this.loading = false;
            _this.waitingStockOut = res.data;
            var pg = res.meta.pagination;
            _this.$store.dispatch("currentPage", pg.current_page);
            _this.$store.commit("PER_PAGE", pg.per_page);
            _this.$store.commit("PAGE_TOTAL", pg.total);
          }, function (err) {
            console.log(err);
          });
          break;
        case 3:
          this.$fetch(this.urls.merchandiserdepts, {
            order_status: 80,
            member_nick: this.searchBox.member_nick,
            system_order_no: this.searchBox.system_order_no,
            receiver_name: this.searchBox.receiver_name,
            receiver_phone: this.searchBox.receiver_phone,
            receiver_address: this.searchBox.receiver_address,
            shops_id: this.searchBox.shops_id,
            business_personnel_id: this.searchBox.business_personnel_id,
            seller_remark: this.searchBox.seller_remark,
            logistics_id: this.searchBox.logistics_id,
            seller_flag: this.searchBox.seller_flag,
            include: "shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems.combination.productComponents,orderItems.product,businessPersonnel,locker,paymentDetails.paymentMethod,paymentDetails.order,orderOperationRecord"
          }).then(function (res) {
            _this.loading = false;
            _this.alreadyStockOut = res.data;
            var pg = res.meta.pagination;
            _this.$store.dispatch("currentPage", pg.current_page);
            _this.$store.commit("PER_PAGE", pg.per_page);
            _this.$store.commit("PAGE_TOTAL", pg.total);
          }, function (err) {
            console.log(err);
          });
          break;
      }
    },
    leftHandleClick: function leftHandleClick() {
      this.loading = true;
      this.fetchData();
    },
    rightHandleClick: function rightHandleClick() {},
    orderListRowClick: function orderListRowClick(row) {
      this.curRowId = row.id;
      this.curRowData = row;
      this.operationData = row["orderOperationRecord"].data;
      if (row["order_status"] == "已客审") {
        this.newOpt[0].nClick = true;
        this.newOpt[1].nClick = false;
        this.newOpt[2].nClick = false;
        this.newOpt[3].nClick = true;
        this.newOpt[4].nClick = true;
        this.newOpt[5].nClick = true;
        this.newOpt[6].nClick = true;
        this.newOpt[7].nClick = false;
        this.newOpt[8].nClick = false;
        this.newOpt[9].nClick = false;
        this.newOpt[10].nClick = false;
        this.newOpt[11].nClick = false;
        this.newOpt[12].nClick = false;
      }
      if (row["order_status"] == "已跟单一审") {
        this.newOpt[0].nClick = true;
        this.newOpt[1].nClick = false;
        this.newOpt[2].nClick = false;
        this.newOpt[3].nClick = true;
        this.newOpt[4].nClick = true;
        this.newOpt[5].nClick = true;
        this.newOpt[6].nClick = true;
        this.newOpt[7].nClick = false;
        this.newOpt[8].nClick = false;
        this.newOpt[9].nClick = false;
        this.newOpt[10].nClick = false;
        this.newOpt[11].nClick = false;
        this.newOpt[12].nClick = false;
      }
      if (row["order_status"] == "已财审") {
        this.newOpt[0].nClick = true;
        this.newOpt[1].nClick = false;
        this.newOpt[2].nClick = true;
        this.newOpt[3].nClick = false;
        this.newOpt[4].nClick = true;
        this.newOpt[5].nClick = true;
        this.newOpt[6].nClick = true;
        this.newOpt[7].nClick = false;
        this.newOpt[8].nClick = false;
        this.newOpt[9].nClick = false;
        this.newOpt[10].nClick = false;
        this.newOpt[11].nClick = false;
        this.newOpt[12].nClick = false;
      }
      if (row["order_status"] == "已货审") {
        this.newOpt[0].nClick = true;
        this.newOpt[1].nClick = true;
        this.newOpt[2].nClick = true;
        this.newOpt[3].nClick = true;
        this.newOpt[4].nClick = false;
        this.newOpt[5].nClick = true;
        this.newOpt[6].nClick = true;
        this.newOpt[7].nClick = false;
        this.newOpt[8].nClick = true;
        this.newOpt[9].nClick = true;
        this.newOpt[10].nClick = true;
        this.newOpt[11].nClick = false;
        this.newOpt[12].nClick = false;
      }
      if (row["order_status"] == "准备出库") {
        this.newOpt[0].nClick = true;
        this.newOpt[1].nClick = true;
        this.newOpt[2].nClick = true;
        this.newOpt[3].nClick = true;
        this.newOpt[4].nClick = true;
        this.newOpt[5].nClick = false;
        this.newOpt[6].nClick = true;
        this.newOpt[7].nClick = false;
        this.newOpt[8].nClick = true;
        this.newOpt[9].nClick = true;
        this.newOpt[10].nClick = true;
        this.newOpt[11].nClick = false;
        this.newOpt[12].nClick = false;
      }
      if (row["order_status"] == "已出库") {
        this.newOpt[0].nClick = false;
        this.newOpt[1].nClick = true;
        this.newOpt[2].nClick = true;
        this.newOpt[3].nClick = true;
        this.newOpt[4].nClick = true;
        this.newOpt[5].nClick = true;
        this.newOpt[6].nClick = false;
        this.newOpt[7].nClick = false;
        this.newOpt[8].nClick = true;
        this.newOpt[9].nClick = true;
        this.newOpt[10].nClick = true;
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
    delBatch: function delBatch() {
      var _this2 = this;

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
          _this2.$del(_this2.urls.customerservicedepts, { ids: _this2.ids }).then(function () {
            _this2.refresh();
            _this2.$message({
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
              _this2.$message.error(str);
            }
          });
        }).catch(function () {
          _this2.$message({
            type: "info",
            message: "已取消删除"
          });
        });
      }
    },

    /*页码*/
    handlePagChg: function handlePagChg(page) {
      var _this3 = this;

      this.$fetch(this.urls.logistics + "?page=" + page, {
        include: "cityInfos.logistics,printReport,freightType"
      }).then(function (res) {
        _this3.logisticsData = res.data;
      });
    },
    refresh: function refresh() {
      this.loading = true;
      this.fetchData();
    },

    /*驳回*/
    handleUnAudit: function handleUnAudit() {
      var _this4 = this;

      if (this.newOpt[0].nClick) {
        return;
      } else {
        var id = this.checkboxId ? this.checkboxId : this.curRowId;
        if (this.curRowData["order_status"] == "已跟单一审") {
          this.$put(this.urls.merchandiserdepts + "/" + id + "/unaudit").then(function () {
            _this4.refresh();
            _this4.$message({
              message: "驳回成功",
              type: "success"
            });
          }, function (err) {
            _this4.$message.error(err.response.data.message);
          });
        } else {
          this.$message.error("跟单一审后才能驳回");
        }
      }
    },

    /*跟单一审*/
    handleOneAudit: function handleOneAudit() {
      var _this5 = this;

      if (this.newOpt[2].nClick) {
        return;
      } else {
        var id = this.checkboxId ? this.checkboxId : this.curRowId;
        this.$put(this.urls.merchandiserdepts + "/" + id + "/oneaudit").then(function () {
          _this5.refresh();
          _this5.$message({
            message: "跟单一审成功",
            type: "success"
          });
          _this5.newOpt[0].nClick = true;
          _this5.newOpt[1].nClick = false;
          _this5.newOpt[2].nClick = false;
          _this5.newOpt[3].nClick = true;
          _this5.newOpt[4].nClick = true;
          _this5.newOpt[5].nClick = true;
          _this5.newOpt[6].nClick = true;
          _this5.newOpt[7].nClick = false;
          _this5.newOpt[8].nClick = false;
          _this5.newOpt[9].nClick = false;
          _this5.newOpt[10].nClick = false;
          _this5.newOpt[11].nClick = false;
          _this5.newOpt[12].nClick = false;
        }, function (err) {
          _this5.$message.error(err.response.data.message);
        });
      }
    },

    /*货审*/
    warehouseChg: function warehouseChg(val) {
      var _this6 = this;

      var id = this.checkboxId ? this.checkboxId : this.curRowId;
      this.$fetch(this.urls.merchandiserdepts + "/" + id + "/stock", {
        warehouses_id: val
      }).then(function (res) {
        _this6.cargoAuditTableVal = res["order_items"];
      }, function (err) {
        console.log(err);
      });
    },
    handleCargoAudit: function handleCargoAudit() {
      var _this7 = this;

      if (this.newOpt[3].nClick) {
        return;
      } else {
        this.cargoAuditMask = true;
        this.$fetch(this.urls.customerservicedepts + "/create").then(function (res) {
          _this7.apiData = res;
          _this7.$store.dispatch("suppliers", "/suppliers");
          var id = _this7.checkboxId ? _this7.checkboxId : _this7.curRowId;
          _this7.$fetch(_this7.urls.merchandiserdepts + "/" + id).then(function (res) {
            _this7.cargoAuditFormVal = res;
            _this7.cargoAuditTableVal = res.order_items;
            _this7.newOpt[0].nClick = true;
            _this7.newOpt[1].nClick = true;
            _this7.newOpt[2].nClick = true;
            _this7.newOpt[3].nClick = true;
            _this7.newOpt[4].nClick = false;
            _this7.newOpt[5].nClick = true;
            _this7.newOpt[6].nClick = true;
            _this7.newOpt[7].nClick = false;
            _this7.newOpt[8].nClick = true;
            _this7.newOpt[9].nClick = true;
            _this7.newOpt[10].nClick = true;
            _this7.newOpt[11].nClick = false;
            _this7.newOpt[12].nClick = false;
          }, function (err) {
            if (err.response) {
              var arr = err.response.data.errors;
              var arr1 = [];
              for (var i in arr) {
                arr1.push(arr[i]);
              }
              var str = arr1.join(",");
              _this7.$message.error(str);
            }
          });
        }, function (err) {
          console.log(err);
        });
      }
    },
    handleunCargoAudit: function handleunCargoAudit() {
      this.newOpt[0].nClick = true;
      this.newOpt[1].nClick = false;
      this.newOpt[2].nClick = true;
      this.newOpt[3].nClick = false;
      this.newOpt[4].nClick = true;
      this.newOpt[5].nClick = true;
      this.newOpt[6].nClick = true;
      this.newOpt[7].nClick = false;
      this.newOpt[8].nClick = false;
      this.newOpt[9].nClick = false;
      this.newOpt[10].nClick = false;
      this.newOpt[11].nClick = false;
      this.newOpt[12].nClick = false;
    },
    cargoAuditConfirm: function cargoAuditConfirm() {
      var _this8 = this;

      var id = this.checkboxId ? this.checkboxId : this.curRowId;
      var formData = this.cargoAuditFormVal;
      var submitData = {
        logistics_id: formData.logistics_id,
        freight_types_id: formData.freight_types_id,
        expected_freight: formData.expected_freight,
        distributions_id: formData.distributions_id,
        distribution_methods_id: formData.distribution_methods_id,
        deliver_goods_fee: formData.deliver_goods_fee,
        move_upstairs_fee: formData.move_upstairs_fee,
        installation_fee: formData.installation_fee,
        total_distribution_fee: formData.total_distribution_fee,
        distribution_phone: formData.distribution_phone,
        distribution_types_id: formData.distribution_types_id,
        express_fee: formData.express_fee,
        warehouses_id: formData.warehouses_id
      };
      this.$put(this.urls.merchandiserdepts + "/" + id + "/cargoaudit", submitData).then(function () {
        _this8.refresh();
        _this8.$message({
          message: "货审成功",
          type: "success"
        });
        _this8.cargoAuditMask = false;
      }, function (err) {
        _this8.$message.error(err.response.data.message);
      });
    },
    formChg: function formChg() {
      var formVal = this.cargoAuditFormVal;
      formVal["total_distribution_fee"] = formVal["deliver_goods_fee"] - 0 + (formVal["move_upstairs_fee"] - 0) + (formVal["installation_fee"] - 0);
    },
    cargoAuditCancel: function cargoAuditCancel() {
      this.cargoAuditMask = false;
      this.$message({
        message: "已取消货审",
        type: "info"
      });
    },

    /*退审*/
    handleUnOneAudit: function handleUnOneAudit() {
      var _this9 = this;

      if (this.newOpt[1].nClick) {
        return;
      } else {
        var id = this.checkboxId ? this.checkboxId : this.curRowId;
        this.$put(this.urls.merchandiserdepts + "/" + id + "/unoneaudit").then(function () {
          _this9.refresh();
          _this9.$message({
            message: "驳回跟单一审成功",
            type: "success"
          });
          _this9.newOpt[0].nClick = true;
          _this9.newOpt[1].nClick = false;
          _this9.newOpt[2].nClick = false;
          _this9.newOpt[3].nClick = true;
          _this9.newOpt[4].nClick = true;
          _this9.newOpt[5].nClick = true;
          _this9.newOpt[6].nClick = true;
          _this9.newOpt[7].nClick = false;
          _this9.newOpt[8].nClick = false;
          _this9.newOpt[9].nClick = false;
          _this9.newOpt[10].nClick = false;
          _this9.newOpt[11].nClick = false;
          _this9.newOpt[12].nClick = false;
        }, function (err) {
          _this9.$message.error(err.response.data.message);
        });
      }
    },
    stockOut: function stockOut() {
      var _this10 = this;

      if (this.newOpt[5].nClick) {
        this.$message({
          message: "请点击要选择的订单并重试",
          type: "info"
        });
      } else {
        this.stockOutMask = true;
        if (this.checkboxId == "") {
          this.$message({
            type: "info",
            message: "请先选择订单"
          });
        } else {
          this.proIds = [];
          this.updateProIds = [];
          this.expenseRIndex = "";
          this.updateCustomerFormVal = {};
          this.updateProData = [];
          this.updateReceiveInfo = {};
          this.updateExpenseData = [];
          this.proRIndex = "";
          var id = this.checkboxId ? this.checkboxId : this.curRowId;
          this.$fetch(this.urls.customerservicedepts + "/" + id, {
            include: "shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems.combination.productComponents,orderItems.product,businessPersonnel,locker,paymentDetails,orderOperationRecord"
          }).then(function (res) {
            var _this10$updateReceive;

            _this10.updateCustomerFormVal = res;
            if (res["orderItems"]["data"].length > 0) {
              res["orderItems"]["data"].map(function (item) {
                _this10.updateProIds.push(item["combination"].id);
                item["name"] = item["combination"]["name"];
                item["id"] = item.id;
                item["products_id"] = item.products_id;
                item["combinations_id"] = item.combinations_id;
                item["productComp"] = item["combination"]["productComponents"]["data"];
                _this10.$set(item, "newData", {
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
            _this10.updateProData = res["orderItems"]["data"];
            _this10.updateReceiveInfo = (_this10$updateReceive = {
              receiver_name: res.receiver_name,
              receiver_phone: res.receiver_phone,
              receiver_mobile: res.receiver_mobile,
              receiver_state: res.receiver_state
            }, _defineProperty(_this10$updateReceive, "receiver_state", res.receiver_city), _defineProperty(_this10$updateReceive, "receiver_district", res.receiver_district), _defineProperty(_this10$updateReceive, "receiver_address", res.receiver_address), _defineProperty(_this10$updateReceive, "receiver_zip", res.receiver_zip), _this10$updateReceive);
            _this10.updateExpenseData = res["paymentDetails"]["data"];
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
      }
    },
    stockOutConfirm: function stockOutConfirm() {
      var _this11 = this;

      var forData = this.updateCustomerFormVal;
      var submitData = {
        shops_id: forData.shops_id,
        member_nick: forData.member_nick,
        logistics_id: forData.logistics_id,
        logistics_sn: forData.logistics_sn,
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
        receiver_state: this.updateReceiveInfo.receiver_state,
        receiver_city: this.updateReceiveInfo.receiver_city,
        receiver_district: this.updateReceiveInfo.receiver_district,
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
      this.$message({
        message: "加载成功",
        type: "success"
      });
      this.$patch(this.urls.merchandiserdepts + "/" + id, submitData).then(function () {
        _this11.stockOutMask = false;
        _this11.refresh();
        _this11.$message({
          message: "发货成功",
          type: "success"
        });
        _this11.newOpt[0].nClick = false;
        _this11.newOpt[1].nClick = true;
        _this11.newOpt[2].nClick = true;
        _this11.newOpt[3].nClick = true;
        _this11.newOpt[4].nClick = true;
        _this11.newOpt[5].nClick = true;
        _this11.newOpt[6].nClick = false;
        _this11.newOpt[7].nClick = false;
        _this11.newOpt[8].nClick = true;
        _this11.newOpt[9].nClick = true;
        _this11.newOpt[10].nClick = true;
        _this11.newOpt[11].nClick = false;
        _this11.newOpt[12].nClick = false;
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
    },
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
    }
  }, _defineProperty(_methods, "handlePagChg", function handlePagChg(page) {
    var _this12 = this;

    this.$fetch(this.urls.merchandiserdepts + "?page=" + page, {
      include: "shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems.combination.productComponents,orderItems.product,businessPersonnel,locker,paymentDetails.paymentMethod,paymentDetails.order"
    }).then(function (res) {
      if (_this12.leftTopActiveName == "0") {
        _this12.orderListData = res.data;
      } else {
        _this12.alreadyHandle = res.data;
      }
    });
  }), _defineProperty(_methods, "handleSplitOrder", function handleSplitOrder() {
    var _this13 = this;

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
          _this13.splitVal.push(list);
        });
      }
    }
  }), _defineProperty(_methods, "splitCName", function splitCName(_ref2) {
    var row = _ref2.row,
        rowIndex = _ref2.rowIndex;

    row.index = rowIndex;
  }), _defineProperty(_methods, "splitRowClick", function splitRowClick(row) {
    this.splitRowIndex = "index" + row.index;
    this.splitRow = row;
  }), _defineProperty(_methods, "numChg", function numChg(value) {
    if (value > this.splitRow["quantity"] - 0) {
      this.splitRow["newData"]["quantity"] = this.splitRow["quantity"];
    }
  }), _defineProperty(_methods, "confirmSplit", function confirmSplit() {
    var _this14 = this;

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
      _this14.splitMask = false;
      _this14.refresh();
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
      _this14.$message({
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
        _this14.$message.error(str);
      }
    });
  }), _defineProperty(_methods, "addProRowClick", function addProRowClick(row) {
    this.proRIndex = "index" + row.index;
  }), _defineProperty(_methods, "stockOutCancel", function stockOutCancel() {
    this.stockOutMask = false;
  }), _defineProperty(_methods, "cancelSplit", function cancelSplit() {
    this.splitMask = false;
  }), _defineProperty(_methods, "handleMergerOrder", function handleMergerOrder() {
    var _this15 = this;

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
          _this15.refresh();
          _this15.$message({
            message: "订单合并成功",
            type: "success"
          });
          _this15.mergerIds = [];
        }, function (err) {
          if (err.response) {
            _this15.$message.error("合并订单出错");
          }
        });
      }
    }
  }), _defineProperty(_methods, "searchData", function searchData() {
    this.loading = true;
    this.fetchData();
  }), _defineProperty(_methods, "resets", function resets() {
    this.searchBox = {
      member_nick: "",
      system_order_no: "",
      receiver_name: "",
      receiver_phone: "",
      receiver_address: "",
      shops_id: "",
      business_personnel_id: "",
      seller_remark: "",
      logistics_id: "",
      seller_flag: "",
      promise_ship_time: ["2018-12-31T16:00:00.000Z", "2099-12-31T16:00:00.000Z"],
      created_at: ["2018-12-31T16:00:00.000Z", "2099-12-31T16:00:00.000Z"],
      audit_at: ["2018-12-31T16:00:00.000Z", "2099-12-31T16:00:00.000Z"],
      order_transMStart: "",
      order_order_transMEndmark: ""
    };
  }), _methods),
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

/***/ 1061:
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
                      _vm._v(" "),
                      _c("el-input", {
                        attrs: { clearable: "" },
                        model: {
                          value: _vm.searchBox.member_nick,
                          callback: function($$v) {
                            _vm.$set(_vm.searchBox, "member_nick", $$v)
                          },
                          expression: "searchBox.member_nick"
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
                          value: _vm.searchBox.system_order_no,
                          callback: function($$v) {
                            _vm.$set(_vm.searchBox, "system_order_no", $$v)
                          },
                          expression: "searchBox.system_order_no"
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
                          value: _vm.searchBox.receiver_name,
                          callback: function($$v) {
                            _vm.$set(_vm.searchBox, "receiver_name", $$v)
                          },
                          expression: "searchBox.receiver_name"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    [
                      _c("label", [_vm._v("收货手机")]),
                      _vm._v(" "),
                      _c("el-input", {
                        attrs: { clearable: "" },
                        model: {
                          value: _vm.searchBox.receiver_phone,
                          callback: function($$v) {
                            _vm.$set(_vm.searchBox, "receiver_phone", $$v)
                          },
                          expression: "searchBox.receiver_phone"
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
                      _c("label", [_vm._v("收货地址")]),
                      _vm._v(" "),
                      _c("el-input", {
                        attrs: { clearable: "" },
                        model: {
                          value: _vm.searchBox.receiver_address,
                          callback: function($$v) {
                            _vm.$set(_vm.searchBox, "receiver_address", $$v)
                          },
                          expression: "searchBox.receiver_address"
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
                            value: _vm.searchBox.shops_id,
                            callback: function($$v) {
                              _vm.$set(_vm.searchBox, "shops_id", $$v)
                            },
                            expression: "searchBox.shops_id"
                          }
                        },
                        _vm._l(_vm.addSubData["shop"], function(list) {
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
                  _c(
                    "span",
                    [
                      _c("label", [_vm._v("业务员")]),
                      _vm._v(" "),
                      _c(
                        "el-select",
                        {
                          attrs: { clearable: "", placeholder: "请选择" },
                          model: {
                            value: _vm.searchBox.business_personnel_id,
                            callback: function($$v) {
                              _vm.$set(
                                _vm.searchBox,
                                "business_personnel_id",
                                $$v
                              )
                            },
                            expression: "searchBox.business_personnel_id"
                          }
                        },
                        _vm._l(_vm.addSubData["user"], function(list) {
                          return _c(
                            "span",
                            { key: list.id },
                            [
                              _c("el-option", {
                                attrs: {
                                  label: list["username"],
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
                  _c(
                    "span",
                    [
                      _c("label", [_vm._v("卖家备注")]),
                      _vm._v(" "),
                      _c("el-input", {
                        attrs: { clearable: "" },
                        model: {
                          value: _vm.searchBox.seller_remark,
                          callback: function($$v) {
                            _vm.$set(_vm.searchBox, "seller_remark", $$v)
                          },
                          expression: "searchBox.seller_remark"
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
                      _c("label", [_vm._v("物流公司")]),
                      _vm._v(" "),
                      _c(
                        "el-select",
                        {
                          attrs: { clearable: "", placeholder: "请选择" },
                          model: {
                            value: _vm.searchBox.logistics_id,
                            callback: function($$v) {
                              _vm.$set(_vm.searchBox, "logistics_id", $$v)
                            },
                            expression: "searchBox.logistics_id"
                          }
                        },
                        _vm._l(_vm.addSubData["logistics"], function(list) {
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
                  _c(
                    "span",
                    [
                      _c("label", [_vm._v("淘宝旗帜")]),
                      _vm._v(" "),
                      _c(
                        "el-select",
                        {
                          attrs: { clearable: "", placeholder: "请选择" },
                          model: {
                            value: _vm.searchBox.seller_flag,
                            callback: function($$v) {
                              _vm.$set(_vm.searchBox, "seller_flag", $$v)
                            },
                            expression: "searchBox.seller_flag"
                          }
                        },
                        [
                          _c(
                            "el-option",
                            { key: 0, attrs: { label: "黑旗", value: 0 } },
                            [_c("i", { staticClass: "iconfont bf-flag" })]
                          ),
                          _vm._v(" "),
                          _c(
                            "el-option",
                            { key: 1, attrs: { label: "红旗", value: 1 } },
                            [
                              _c("i", {
                                staticClass: "iconfont bf-flag",
                                staticStyle: { color: "red" }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "el-option",
                            { key: 2, attrs: { label: "黄旗", value: 2 } },
                            [
                              _c("i", {
                                staticClass: "iconfont bf-flag",
                                staticStyle: { color: "yellow" }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "el-option",
                            { key: 3, attrs: { label: "绿旗", value: 3 } },
                            [
                              _c("i", {
                                staticClass: "iconfont bf-flag",
                                staticStyle: { color: "green" }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "el-option",
                            { key: 4, attrs: { label: "蓝旗", value: 4 } },
                            [
                              _c("i", {
                                staticClass: "iconfont bf-flag",
                                staticStyle: { color: "blue" }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "el-option",
                            { key: 5, attrs: { label: "紫旗", value: 5 } },
                            [
                              _c("i", {
                                staticClass: "iconfont bf-flag",
                                staticStyle: { color: "purple" }
                              })
                            ]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
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
                          value: _vm.searchBox.promise_ship_time,
                          callback: function($$v) {
                            _vm.$set(_vm.searchBox, "promise_ship_time", $$v)
                          },
                          expression: "searchBox.promise_ship_time"
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
                          value: _vm.searchBox.created_at,
                          callback: function($$v) {
                            _vm.$set(_vm.searchBox, "created_at", $$v)
                          },
                          expression: "searchBox.created_at"
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
                      _c("label", [_vm._v("客审日期")]),
                      _vm._v(" "),
                      _c("el-date-picker", {
                        attrs: {
                          type: "daterange",
                          "range-separator": "至",
                          "start-placeholder": "开始日期",
                          "end-placeholder": "结束日期"
                        },
                        model: {
                          value: _vm.searchBox.audit_at,
                          callback: function($$v) {
                            _vm.$set(_vm.searchBox, "audit_at", $$v)
                          },
                          expression: "searchBox.audit_at"
                        }
                      })
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
                      _vm._v(" "),
                      _c("label", [_vm._v("至")]),
                      _vm._v(" "),
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
                  ),
                  _vm._v(" "),
                  _c("span"),
                  _vm._v(" "),
                  _c("span")
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticStyle: { "text-align": "right" } },
                  [
                    _c(
                      "el-button",
                      {
                        attrs: { type: "primary" },
                        on: { click: _vm.searchData }
                      },
                      [_vm._v("筛选")]
                    ),
                    _vm._v(" "),
                    _c("el-button", { on: { click: _vm.resets } }, [
                      _vm._v("重置")
                    ])
                  ],
                  1
                )
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
                    { attrs: { label: "未货审", name: "0" } },
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
                            "row-click": _vm.orderListRowClick,
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
                    { attrs: { label: "已货审", name: "1" } },
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
                            "row-click": _vm.orderListRowClick,
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
                    { attrs: { label: "可发货", name: "2" } },
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
                            data: _vm.waitingStockOut,
                            fit: "",
                            height: "350"
                          },
                          on: {
                            "selection-change": _vm.handleSelectionChange,
                            "row-click": _vm.orderListRowClick,
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
                    { attrs: { label: "已发货", name: "3" } },
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
                            data: _vm.alreadyStockOut,
                            fit: "",
                            height: "350"
                          },
                          on: {
                            "selection-change": _vm.handleSelectionChange,
                            "row-click": _vm.orderListRowClick,
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
                        { attrs: { data: _vm.innerNote, fit: "" } },
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
                        { attrs: { data: _vm.operationData, fit: "" } },
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
          class: { "more-forms": _vm.moreForms },
          attrs: { title: "仓库/供应商选项", visible: _vm.cargoAuditMask },
          on: {
            "update:visible": function($event) {
              _vm.cargoAuditMask = $event
            }
          }
        },
        [
          _c(
            "el-form",
            { attrs: { model: _vm.cargoAuditFormVal } },
            _vm._l(_vm.cargoAuditFormHead, function(item) {
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
                                  attrs: { placeholder: item.holder },
                                  model: {
                                    value:
                                      _vm.cargoAuditFormVal[item.prop][
                                        item.inProp
                                      ],
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.cargoAuditFormVal[item.prop],
                                        item.inProp,
                                        typeof $$v === "string"
                                          ? $$v.trim()
                                          : $$v
                                      )
                                    },
                                    expression:
                                      "cargoAuditFormVal[item.prop][item.inProp]"
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
                                    value: _vm.cargoAuditFormVal[item.prop],
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.cargoAuditFormVal,
                                        item.prop,
                                        typeof $$v === "string"
                                          ? $$v.trim()
                                          : $$v
                                      )
                                    },
                                    expression: "cargoAuditFormVal[item.prop]"
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
                                    value: _vm.cargoAuditFormVal[item.prop],
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.cargoAuditFormVal,
                                        item.prop,
                                        typeof $$v === "string"
                                          ? $$v.trim()
                                          : $$v
                                      )
                                    },
                                    expression: "cargoAuditFormVal[item.prop]"
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
                                    placeholder: item.holder
                                  },
                                  model: {
                                    value: _vm.cargoAuditFormVal[item.prop],
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.cargoAuditFormVal,
                                        item.prop,
                                        typeof $$v === "string"
                                          ? $$v.trim()
                                          : $$v
                                      )
                                    },
                                    expression: "cargoAuditFormVal[item.prop]"
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
                              attrs: { placeholder: item.holder },
                              on: { change: _vm.warehouseChg },
                              model: {
                                value: _vm.cargoAuditFormVal[item.prop],
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.cargoAuditFormVal,
                                    item.prop,
                                    $$v
                                  )
                                },
                                expression: "cargoAuditFormVal[item.prop]"
                              }
                            },
                            _vm._l(_vm.apiData[item.stateVal], function(list) {
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
                              value: _vm.cargoAuditFormVal[item.prop],
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.cargoAuditFormVal,
                                  item.prop,
                                  typeof $$v === "string" ? $$v.trim() : $$v
                                )
                              },
                              expression: "cargoAuditFormVal[item.prop]"
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
                            model: {
                              value: _vm.cargoAuditFormVal[item.prop],
                              callback: function($$v) {
                                _vm.$set(_vm.cargoAuditFormVal, item.prop, $$v)
                              },
                              expression: "cargoAuditFormVal[item.prop]"
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
            "el-table",
            { attrs: { data: _vm.cargoAuditTableVal, fit: "" } },
            _vm._l(_vm.cargoAuditTableHead, function(item) {
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
                                  : item.type == "select"
                                  ? _c("span", [
                                      item.prop == "warehouses_id"
                                        ? _c(
                                            "span",
                                            _vm._l(
                                              _vm.apiData[item.stateVal],
                                              function(list, index) {
                                                return _c(
                                                  "span",
                                                  { key: index },
                                                  [
                                                    list.id ==
                                                    _vm.cargoAuditFormVal[
                                                      "warehouses_id"
                                                    ]
                                                      ? _c("span", [
                                                          _vm._v(
                                                            "\n                    " +
                                                              _vm._s(
                                                                list.name
                                                              ) +
                                                              "\n                  "
                                                          )
                                                        ])
                                                      : _vm._e()
                                                  ]
                                                )
                                              }
                                            ),
                                            0
                                          )
                                        : _c(
                                            "span",
                                            _vm._l(
                                              _vm.resData[item.stateVal],
                                              function(list, index) {
                                                return _c(
                                                  "span",
                                                  { key: index },
                                                  [
                                                    list.id ==
                                                    scope.row[item.prop][
                                                      item.inProp
                                                    ]
                                                      ? _c("span", [
                                                          _vm._v(
                                                            "\n                    " +
                                                              _vm._s(
                                                                list.name
                                                              ) +
                                                              "\n                  "
                                                          )
                                                        ])
                                                      : _vm._e()
                                                  ]
                                                )
                                              }
                                            ),
                                            0
                                          )
                                    ])
                                  : _c("span", [
                                      item.prop == "quantity"
                                        ? _c("span", [
                                            scope.row[item.prop] >
                                            scope.row["combination"].quantity
                                              ? _c("span", [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticStyle: {
                                                        color: "#f76b6e"
                                                      }
                                                    },
                                                    [_vm._v("库存不足")]
                                                  )
                                                ])
                                              : _c("span", [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticStyle: {
                                                        color: "#5dc34a"
                                                      }
                                                    },
                                                    [_vm._v("可货审")]
                                                  )
                                                ])
                                          ])
                                        : _c("span", [
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
                  on: { click: _vm.cargoAuditConfirm }
                },
                [_vm._v("确定")]
              ),
              _vm._v(" "),
              _c("el-button", { on: { click: _vm.cargoAuditCancel } }, [
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
          attrs: { title: "订单发货", visible: _vm.stockOutMask },
          on: {
            "update:visible": function($event) {
              _vm.stockOutMask = $event
            }
          }
        },
        [
          _c(
            "el-tabs",
            [
              _c(
                "el-tab-pane",
                { attrs: { label: "发货明细", name: "0" } },
                [
                  _c(
                    "el-form",
                    {
                      staticClass: "storageUpdateForm",
                      attrs: {
                        model: _vm.updateCustomerFormVal,
                        rules: _vm.addStockOutDtlRules,
                        id: "form"
                      }
                    },
                    _vm._l(_vm.stockOutDtlHead, function(item, index) {
                      return _c(
                        "el-form-item",
                        {
                          key: index,
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
                                            disabled: item.addChgAble
                                          },
                                          model: {
                                            value:
                                              _vm.updateCustomerFormVal[
                                                item.prop
                                              ][item.inProp],
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.updateCustomerFormVal[
                                                  item.prop
                                                ],
                                                item.inProp,
                                                typeof $$v === "string"
                                                  ? $$v.trim()
                                                  : $$v
                                              )
                                            },
                                            expression:
                                              "updateCustomerFormVal[item.prop][item.inProp]"
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
                                            value:
                                              _vm.updateCustomerFormVal[
                                                item.prop
                                              ],
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.updateCustomerFormVal,
                                                item.prop,
                                                typeof $$v === "string"
                                                  ? $$v.trim()
                                                  : $$v
                                              )
                                            },
                                            expression:
                                              "updateCustomerFormVal[item.prop]"
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
                                            value:
                                              _vm.updateCustomerFormVal[
                                                item.prop
                                              ],
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.updateCustomerFormVal,
                                                item.prop,
                                                typeof $$v === "string"
                                                  ? $$v.trim()
                                                  : $$v
                                              )
                                            },
                                            expression:
                                              "updateCustomerFormVal[item.prop]"
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
                                            value:
                                              _vm.updateCustomerFormVal[
                                                item.prop
                                              ],
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.updateCustomerFormVal,
                                                item.prop,
                                                typeof $$v === "string"
                                                  ? $$v.trim()
                                                  : $$v
                                              )
                                            },
                                            expression:
                                              "updateCustomerFormVal[item.prop]"
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
                                        value:
                                          _vm.updateCustomerFormVal[item.prop],
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.updateCustomerFormVal,
                                            item.prop,
                                            $$v
                                          )
                                        },
                                        expression:
                                          "updateCustomerFormVal[item.prop]"
                                      }
                                    },
                                    _vm._l(
                                      _vm.addSubData[item.stateVal],
                                      function(list) {
                                        return _c(
                                          "span",
                                          { key: list.id },
                                          [
                                            _c("el-option", {
                                              attrs: {
                                                label: list.name
                                                  ? list.name
                                                  : list.nick,
                                                value: list.id
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      }
                                    ),
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
                                      placehode: item.holder
                                    },
                                    model: {
                                      value:
                                        _vm.updateCustomerFormVal[item.prop],
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.updateCustomerFormVal,
                                          item.prop,
                                          typeof $$v === "string"
                                            ? $$v.trim()
                                            : $$v
                                        )
                                      },
                                      expression:
                                        "updateCustomerFormVal[item.prop]"
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
                                      value:
                                        _vm.updateCustomerFormVal[item.prop],
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.updateCustomerFormVal,
                                          item.prop,
                                          $$v
                                        )
                                      },
                                      expression:
                                        "updateCustomerFormVal[item.prop]"
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
                                        value:
                                          _vm.updateCustomerFormVal[item.prop],
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.updateCustomerFormVal,
                                            item.prop,
                                            $$v
                                          )
                                        },
                                        expression:
                                          "updateCustomerFormVal[item.prop]"
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
                                        value:
                                          _vm.updateCustomerFormVal[item.prop],
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.updateCustomerFormVal,
                                            item.prop,
                                            $$v
                                          )
                                        },
                                        expression:
                                          "updateCustomerFormVal[item.prop]"
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
                                      value:
                                        _vm.updateCustomerFormVal[item.prop],
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.updateCustomerFormVal,
                                          item.prop,
                                          $$v
                                        )
                                      },
                                      expression:
                                        "updateCustomerFormVal[item.prop]"
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
                    "el-table",
                    {
                      attrs: { data: _vm.updateCustomerFormVal, fit: "" },
                      on: { "row-click": _vm.addProRowClick }
                    },
                    _vm._l(_vm.stockOutDtlBottomHead, function(item) {
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
                                        _vm.proRIndex == "index" + scope.$index
                                          ? _c("span", [
                                              item.type == "number"
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
                                                : item.type == "checkbox"
                                                ? _c(
                                                    "span",
                                                    [
                                                      _c("el-checkbox", {
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
                                                      _c("el-input", {
                                                        attrs: {
                                                          size: "small",
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
                                          : _c("span", [
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
                                                : _c("span", [
                                                    _vm._v(
                                                      "\n                    " +
                                                        _vm._s(
                                                          scope.row[item.prop][
                                                            item.inProp
                                                          ]
                                                        ) +
                                                        "\n                  "
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
                                                          scope.row[item.prop]
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    _c("img", {
                                                      attrs: {
                                                        slot: "reference",
                                                        src:
                                                          scope.row[item.prop],
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
                ],
                1
              ),
              _vm._v(" "),
              _c("el-tab-pane", { attrs: { label: "分拣明细", name: "1" } }),
              _vm._v(" "),
              _c("el-tab-pane", { attrs: { label: "高拍仪", name: "2" } }),
              _vm._v(" "),
              _c("el-tab-pane", { attrs: { label: "订单图片", name: "3" } })
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
                  on: { click: _vm.stockOutConfirm }
                },
                [_vm._v("确定")]
              ),
              _vm._v(" "),
              _c("el-button", { on: { click: _vm.stockOutCancel } }, [
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
      ),
      _vm._v(" "),
      _vm.activeName == "0"
        ? _c("Pagination", {
            attrs: { "page-url": this.urls.merchandiserdepts },
            on: { handlePagChg: _vm.handlePagChg }
          })
        : _vm._e()
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
    require("vue-hot-reload-api")      .rerender("data-v-5dddfd23", module.exports)
  }
}

/***/ }),

/***/ 945:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(12)
/* script */
var __vue_script__ = __webpack_require__(1060)
/* template */
var __vue_template__ = __webpack_require__(1061)
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
Component.options.__file = "resources/assets/js/views/order/merchandiser.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5dddfd23", Component.options)
  } else {
    hotAPI.reload("data-v-5dddfd23", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});