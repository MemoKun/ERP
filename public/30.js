webpackJsonp([30],{

/***/ 1072:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_element_china_area_data__ = __webpack_require__(126);
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      newOpt: [{
        cnt: "删除",
        icon: "bf-del",
        ent: this.delBatch
      }, {
        cnt: "退审",
        icon: "bf-auditfaild",
        ent: this.handleUnAudit
      }, {
        cnt: "导入",
        icon: "bf-in",
        ent: this.test
      }, {
        cnt: "导出",
        icon: "bf-out",
        ent: this.test
      }, {
        cnt: "同步",
        icon: "bf-sync",
        ent: this.handleMergerOrder
      }, {
        cnt: "门店收款",
        icon: "bf-bill",
        ent: this.test
      }, {
        cnt: "转赠品",
        icon: "bf-gift",
        ent: this.test
      }, {
        cnt: "还原",
        icon: "bf-recovery",
        ent: this.test
      }, {
        cnt: "刷新",
        icon: "bf-refresh",
        ent: this.refresh
      }],
      filterBox: false,
      searchBox: {
        member_nick: "",
        system_order_no: "",
        receiver_name: "",
        receiver_mobile: "",
        receiver_address: "",
        shops_id: "",
        business_personnel_id: "",
        promise_ship_time: ["2018-12-31T16:00:00.000Z", "2099-12-31T16:00:00.000Z"],
        created_at: ["2018-12-31T16:00:00.000Z", "2099-12-31T16:00:00.000Z"],
        order_transMStart: "",
        order_transMEnd: "",
        logistics: "",
        stockout_at: ["2018-12-31T16:00:00.000Z", "2099-12-31T16:00:00.000Z"],
        payment_date: ["2018-12-31T16:00:00.000Z", "2099-12-31T16:00:00.000Z"],
        order_status: "",
        orderStatus: [{ label: "未处理", value: 10 }, { label: "订单锁定中", value: 20 }, { label: "已客审", value: 30 }, { label: "已跟单一审", value: 40 }, { label: "已财审", value: 50 }, { label: "已货审", value: 60 }, { label: "准备出库", value: 70 }, { label: "已出库", value: 80 }],
        order_fdAuditDate: ["2018-12-31T16:00:00.000Z", "2099-12-31T16:00:00.000Z"],
        seller_flag: "",
        logistics_sn: "",
        out_order: "",
        seller_remark: "",
        suppliers_id: "",
        warehouses_id: "",
        esheet_no: "",
        audit_at: ["2018-12-31T16:00:00.000Z", "2099-12-31T16:00:00.000Z"],
        auditor_id: ""
      },
      /*获取数据*/
      activeName: "0",
      rightActiveName: "0",
      orderListData: [],
      orderListHead: [{
        label: "系统订单",
        width: "220",
        prop: "system_order_no",
        type: "text"
      }, {
        label: "补件单号",
        width: "220",
        prop: "resupplieOrder",
        inProp: "resupply_order_no",
        type: "text",
        inData: true
      }, {
        label: "淘宝单号",
        width: "220",
        prop: "taobao_oid",
        type: "text"
      }, {
        label: "所属店铺",
        width: "150",
        prop: "shop",
        inProp: "title",
        type: "text"
      }, {
        label: "店铺返点（%）",
        width: "220",
        prop: "",
        type: "text"
      }, {
        label: "淘宝旗帜",
        width: "130",
        prop: "seller_flag",
        type: "flag"
      }, {
        label: "订单来源",
        width: "140",
        prop: "order_source",
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
        label: "收货人手机",
        width: "130",
        prop: "receiver_mobile",
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
        label: "商家优惠金额",
        width: "120",
        prop: "",
        type: "number"
      }, {
        label: "其他费用",
        width: "120",
        prop: "",
        type: "number"
      }, {
        label: "淘宝商品总金额",
        width: "120",
        prop: "",
        type: "number"
      }, {
        label: "支付总金额",
        width: "120",
        prop: "",
        type: "number"
      }, {
        label: "实际总金额",
        width: "120",
        prop: "",
        type: "number"
      }, {
        label: "标准总金额",
        width: "120",
        prop: "",
        type: "number"
      }, {
        label: "成本总金额",
        width: "120",
        prop: "",
        type: "number"
      }, {
        label: "业务员",
        width: "140",
        prop: "businessPersonnel",
        inProp: "username",
        type: "text"
      }, {
        label: "货审员",
        width: "120",
        prop: "",
        type: "number"
      }, {
        label: "外部打印单号",
        width: "120",
        prop: "",
        type: "number"
      }, {
        label: "物流公司",
        width: "140",
        prop: "logistic",
        inProp: "name",
        type: "text"
      }, {
        label: "物流单号",
        width: "120",
        prop: "logistics_sn",
        type: "number"
      }, {
        label: "实发物流公司",
        width: "140",
        prop: "logistic",
        inProp: "name",
        type: "text"
      }, {
        label: "物流电话",
        width: "140",
        prop: "logistic",
        inProp: "phone",
        type: "text"
      }, {
        label: "预计运费",
        width: "130",
        prop: "expected_freight",
        type: "text"
      }, {
        label: "实际运费",
        width: "130",
        prop: "actual_freight",
        type: "text"
      }, {
        label: "三包类型",
        width: "130",
        prop: "",
        type: "text"
      }, {
        label: "实际运费类型",
        width: "130",
        prop: "freightType",
        inProp: "name",
        type: "text"
      }, {
        label: "配送商",
        width: "150",
        prop: "distribution",
        inProp: "name",
        type: "number"
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
        label: "配送方式",
        width: "130",
        prop: "distributionMethod",
        inProp: "name",
        type: "text"
      }, {
        label: "配送信息",
        width: "180",
        prop: "",
        type: "text"
      }, {
        label: "提货地址",
        width: "180",
        prop: "",
        type: "text"
      }, {
        label: "拉货费用",
        width: "180",
        prop: "take_delivery_goods_fee",
        type: "text"
      }, {
        label: "木架费",
        width: "180",
        prop: "wooden_frame_costs",
        type: "text"
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
        label: "购买数量",
        width: "220",
        prop: "orderItems",
        inProp: "quantity",
        type: "text",
        inData: true
      }, {
        label: "体积",
        width: "220",
        prop: "orderItems",
        inProp: "total_volume",
        type: "text",
        inData: true
      }, {
        label: "体积单价",
        width: "180",
        prop: "",
        type: "text"
      }, {
        label: "包件数",
        width: "180",
        prop: "",
        type: "text"
      }, {
        label: "发货员",
        width: "180",
        prop: "",
        type: "text"
      }, {
        label: "打单单号",
        width: "180",
        prop: "",
        type: "text"
      }, {
        label: "订单状态",
        width: "180",
        prop: "order_status",
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
        label: "客审时间",
        width: "180",
        prop: "audit_at",
        type: "text"
      }, {
        label: "货审时间",
        width: "180",
        prop: "",
        type: "text"
      }, {
        label: "财审时间",
        width: "180",
        prop: "",
        type: "text"
      }, {
        label: "打印时间",
        width: "180",
        prop: "resupplieOrder",
        inProp: "print_time",
        type: "text",
        inData: true
      }, {
        label: "承诺发货时间",
        width: "180",
        prop: "promise_ship_time",
        type: "text"
      }, {
        label: "预计到货时间",
        width: "180",
        prop: "",
        type: "text"
      }, {
        label: "实际发货时间",
        width: "180",
        prop: "resupplieOrder",
        inProp: "real_consign_time",
        type: "text",
        inData: true
      }, {
        label: "承诺到货时间",
        width: "180",
        prop: "",
        type: "text"
      }, {
        label: "系统发货时间",
        width: "180",
        prop: "resupplieOrder",
        inProp: "system_consign_time",
        type: "text",
        inData: true
      }, {
        label: "结算时间",
        width: "180",
        prop: "resupplieOrder",
        inProp: "settle_time",
        type: "text",
        inData: true
      }, {
        label: "分阶段金额",
        width: "130",
        prop: "",
        type: "number"
      }, {
        label: "分阶段状态",
        width: "130",
        prop: "",
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
        label: "门店欠款金额",
        width: "140",
        prop: "",
        type: "number"
      }, {
        label: "需要发票",
        width: "90",
        prop: "is_invoice",
        type: "checkbox"
      }, {
        label: "发票快递费",
        width: "130",
        prop: "invoice_express_fee",
        type: "number"
      }, {
        label: "支付方式-京东",
        width: "160",
        prop: "",
        type: "text"
      }, {
        label: "订单状态-京东",
        width: "160",
        prop: "",
        type: "text"
      }, {
        label: "送货类型-京东",
        width: "160",
        prop: "",
        type: "text"
      }, {
        label: "余额支付金额-京东",
        width: "160",
        prop: "",
        type: "text"
      }, {
        label: "发票信息",
        width: "160",
        prop: "",
        type: "text"
      }, {
        label: "纳税识别号",
        width: "180",
        prop: "tax_number",
        type: "text"
      }, {
        label: "纳税注册地址",
        width: "180",
        prop: "",
        type: "text"
      }, {
        label: "纳税注册电话",
        width: "180",
        prop: "",
        type: "text"
      }, {
        label: "纳税注册开户银行",
        width: "180",
        prop: "",
        type: "text"
      }, {
        label: "纳税银行账户",
        width: "180",
        prop: "",
        type: "text"
      }, {
        label: "发票信息-唯品会",
        width: "180",
        prop: "",
        type: "text"
      }, {
        label: "PO单号-唯品会",
        width: "180",
        prop: "",
        type: "text"
      }, {
        label: "促销优惠金额-唯品会",
        width: "180",
        prop: "",
        type: "text"
      }, {
        label: "期望收货时间-唯品会",
        width: "180",
        prop: "",
        type: "text"
      }, {
        label: "补件原因",
        width: "220",
        prop: "resupplieOrder",
        inProp: "resupply_reason",
        type: "text",
        inData: true
      }, {
        label: "买家留言",
        width: "150",
        prop: "buyer_message",
        type: "text"
      }, {
        label: "卖家备注",
        width: "150",
        prop: "customer_service_remark",
        type: "text"
      }, {
        label: "交易成功时间",
        width: "150",
        prop: "",
        type: "text"
      }, {
        label: "拆分",
        width: "90",
        prop: "is_split",
        type: "checkbox"
      }, {
        label: "合并",
        width: "90",
        prop: "is_merge",
        type: "checkbox"
      }, {
        label: "客审",
        width: "90",
        prop: "resupplieOrder",
        inProp: "is_review",
        type: "checkbox",
        inData: true
      }, {
        label: "审计",
        width: "90",
        prop: "",
        type: "checkbox"
      }, {
        label: "货审",
        width: "90",
        prop: "",
        type: "checkbox"
      }, {
        label: "打印",
        width: "90",
        prop: "resupplieOrder",
        inProp: "is_print",
        type: "checkbox",
        inData: true
      }, {
        label: "复检",
        width: "90",
        prop: "",
        type: "checkbox"
      }, {
        label: "发货",
        width: "90",
        prop: "resupplieOrder",
        inProp: "is_consign",
        type: "checkbox",
        inData: true
      }, {
        label: "结算",
        width: "90",
        prop: "resupplieOrder",
        inProp: "is_settle",
        type: "checkbox",
        inData: true
      }, {
        label: "作废",
        width: "90",
        prop: "resupplieOrder",
        inProp: "is_invalid",
        type: "checkbox",
        inData: true
      }, {
        label: "锁定",
        width: "90",
        prop: "",
        type: "checkbox"
      }, {
        label: "换货",
        width: "90",
        prop: "",
        type: "checkbox"
      }, {
        label: "退款",
        width: "90",
        prop: "",
        type: "checkbox"
      }, {
        label: "售前退款",
        width: "90",
        prop: "",
        type: "checkbox"
      }, {
        label: "补款单",
        width: "90",
        prop: "",
        type: "checkbox"
      }, {
        label: "赠品",
        width: "90",
        prop: "",
        type: "checkbox"
      }, {
        label: "分阶段",
        width: "90",
        prop: "",
        type: "checkbox"
      }, {
        label: "服务车",
        width: "90",
        prop: "",
        type: "checkbox"
      }, {
        label: "红包",
        width: "90",
        prop: "",
        type: "checkbox"
      }, {
        label: "等通知发货",
        width: "90",
        prop: "is_notice",
        type: "checkbox"
      }, {
        label: "需要核销",
        width: "90",
        prop: "is_cancel_after_verification",
        type: "checkbox"
      }, {
        label: "接单人",
        width: "120",
        prop: "accept_order_user",
        type: "text"
      }, {
        label: "税号",
        width: "130",
        prop: "tax_number",
        type: "text"
      }, {
        label: "收据",
        width: "130",
        prop: "receipt",
        type: "text"
      }, {
        label: "标记名称",
        width: "130",
        prop: "resupplieOrder",
        inProp: "mark_name",
        type: "text",
        inData: true
      }, {
        label: "标记人",
        width: "130",
        prop: "resupplieOrder",
        inProp: "marker",
        type: "text",
        inData: true
      }, {
        label: "标记时间",
        width: "130",
        prop: "resupplieOrder",
        inProp: "mark_time",
        type: "text",
        inData: true
      }, {
        label: "退款信息",
        width: "130",
        prop: "refund_info",
        type: "text"
      }, {
        label: "发货仓库",
        width: "140",
        prop: "warehouses",
        inProp: "name",
        type: "text"
      }],
      loading: true,
      checkboxInit: false,
      orderListIndex: "",
      alreadyHandle: [],
      //订单明细
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
      }, {
        label: "标准总金额",
        prop: "move_upstairs_fee",
        type: "number"
      }, {
        label: "运费类型",
        prop: "freight_types_name",
        type: "text"
      }, {
        label: "预付运费",
        prop: "expected_freight",
        type: "number"
      }, {
        label: "支付总金额",
        prop: "",
        type: "number"
      }, {
        label: "三包类型",
        prop: "",
        type: "text"
      }, {
        label: "三包费用",
        prop: "",
        type: "number"
      }, {
        label: "物流成本",
        prop: "deliver_goods_fee",
        type: "number"
      }, {
        label: "订单总额",
        prop: "",
        type: "number"
      }, {
        label: "订单时间",
        prop: "created_at",
        type: "text"
      }, {
        label: "付款时间",
        prop: "payment_date",
        type: "text"
      }, {
        label: "承诺时间",
        prop: "promise_ship_time",
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
      //底部tab商品明细
      proDtlData: [],
      proDtlHead: [{
        label: "sku名称",
        width: "160",
        prop: "combination",
        inProp: "name",
        type: "text"
      }, {
        label: "商品编码",
        width: "160",
        prop: "product",
        inProp: "commodity_code",
        type: "text"
      }, {
        label: "规格编码",
        width: "160",
        prop: "product",
        inProp: "productComponents",
        inData: true,
        nmProp: "component_code",
        type: "text"
      }, {
        label: "商品简称",
        width: "160",
        prop: "product",
        inProp: "short_name",
        type: "text",
        inData: true
      }, {
        label: "规格",
        width: "160",
        prop: "product",
        inProp: "productComponents",
        inData: true,
        nmProp: "spec",
        type: "text"
      }, {
        label: "颜色",
        width: "160",
        prop: "product",
        inProp: "productComponents",
        inData: true,
        nmProp: "color",
        type: "text"
      }, {
        label: "材质",
        width: "160",
        prop: "product",
        inProp: "productComponents",
        inData: true,
        nmProp: "materials",
        type: "text"
      }, {
        label: "功能",
        width: "160",
        prop: "product",
        inProp: "productComponents",
        inData: true,
        nmProp: "function",
        type: "text"
      }, {
        label: "特殊",
        width: "160",
        prop: "product",
        inProp: "productComponents",
        inData: true,
        nmProp: "special",
        type: "text"
      }, {
        label: "其他",
        width: "160",
        prop: "product",
        inProp: "productComponents",
        inData: true,
        nmProp: "other",
        type: "text"
      }, {
        label: "成本",
        width: "160",
        prop: "product",
        inProp: "productComponents",
        inData: true,
        nmProp: "cost",
        type: "text"
      }, {
        label: "折扣",
        width: "160",
        prop: "product",
        inProp: "productComponents",
        inData: true,
        nmProp: "discount",
        type: "text"
      }, {
        label: "淘宝售价",
        width: "160",
        prop: "product",
        inProp: "productComponents",
        inData: true,
        nmProp: "tb_price",
        type: "text"
      }, {
        label: "标准售价",
        width: "160",
        prop: "product",
        inProp: "productComponents",
        inData: true,
        nmProp: "price",
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
        label: "包件数",
        width: "160",
        prop: "product",
        inProp: "productComponents",
        inData: true,
        nmProp: "package_quantity",
        type: "text"
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
      }, {
        label: "供应商",
        width: "160",
        prop: "product",
        inProp: "supplier",
        nmProp: "name",
        type: "text"
      }],
      //订单信息
      orderInfoData: [],
      orderInfoHead: [],
      /**底部Tab 货审明细*/
      cargoAuditData: [],
      cargoAuditHead: [{
        label: "商品编码",
        width: "160",
        prop: "product",
        inProp: "commodity_code",
        type: "text"
      }, {
        label: "规格编码",
        width: "160",
        prop: "product",
        inProp: "productComponents",
        inData: true,
        nmProp: "component_code",
        type: "text"
      }, {
        label: "仓库名称",
        prop: "",
        inProp: "",
        type: "text"
      }, {
        label: "供应商",
        width: "160",
        prop: "product",
        inProp: "supplier",
        nmProp: "name",
        type: "text"
      }, {
        label: "已货审数量",
        prop: "",
        type: "text"
      }, {
        label: "库存数量",
        prop: "",
        type: "text"
      }, {
        label: "订单数量",
        prop: "",
        type: "text"
      }, {
        label: "总货审数量",
        prop: "",
        type: "text"
      }, {
        label: "采购数量",
        prop: "",
        type: "text"
      }, {
        label: "不完整数量",
        prop: "",
        type: "text"
      }, {
        label: "借出数量",
        prop: "",
        type: "text"
      }, {
        label: "已打印数量",
        prop: "",
        type: "text"
      }],
      //支付明细
      payDtlData: [],
      payDtlHead: [{
        label: "支付金额",
        prop: "payment",
        type: "number"
      }, {
        label: "支付方式",
        prop: "paymentMethod",
        inProp: "name",
        type: "text"
      }, {
        label: "交易号",
        prop: "order",
        inProp: "taobao_tid",
        type: "text"
      }, {
        label: "来源单号",
        prop: "order",
        inProp: "taobao_oid",
        type: "text"
      }],
      /**内部便签 */
      innerNoteData: [],
      innerNoteHead: [{
        label: "主题",
        prop: "theme",
        type: "text"
      }, {
        label: "用户",
        prop: "user_name",
        type: "text"
      }, {
        label: "内容",
        prop: "content",
        type: "text"
      }, {
        label: "提出时间",
        prop: "created_at",
        type: "text"
      }],
      /**底部tab 操作记录 */
      operationRecordData: [],
      operationRecordHead: [{
        label: "用户",
        prop: "user_name",
        type: "text"
      }, {
        label: "操作",
        prop: "operated",
        type: "text"
      }, {
        label: "操作描述",
        prop: "description",
        type: "text"
      }, {
        label: "创建时间",
        prop: "created_at",
        type: "text"
      }],
      /**底部Tab 结算明细 */
      checkDtlData: [],
      checkDtlHead: [{
        label: "所属部门",
        prop: "",
        type: "text"
      }, {
        label: "所属结构",
        prop: "",
        type: "text"
      }, {
        label: "结算金额",
        prop: "",
        type: "text"
      }, {
        label: "备注",
        prop: "",
        type: "text"
      }],
      //跟单图片
      /**底部tab 物流信息 */
      logisticsData: [],
      logisticsHead: [{
        label: "物流单号",
        width: "220",
        prop: "orders",
        inData: true,
        inProp: "logistics_sn",
        type: "text"
      }, {
        label: "物流公司",
        width: "150",
        prop: "name",
        type: "text"
      }, {
        label: "物流电话",
        width: "150",
        prop: "phone",
        type: "text"
      }, {
        label: "运费类型",
        width: "150",
        prop: "freightType",
        inProp: "name",
        type: "text"
      }, {
        label: "配送商",
        width: "150",
        prop: "",
        type: "text"
      }, {
        label: "配送费用",
        width: "150",
        prop: "",
        type: "text"
      }, {
        label: "体积单价",
        width: "150",
        prop: "",
        type: "text"
      }, {
        label: "总体积",
        width: "150",
        prop: "",
        type: "text"
      }, {
        label: "总包件数",
        width: "150",
        prop: "",
        type: "text"
      }, {
        label: "收货人",
        width: "150",
        prop: "orders",
        inData: true,
        inProp: "receiver_name",
        type: "text"
      }, {
        label: "发货时间",
        width: "150",
        prop: "orders",
        inData: true,
        inProp: "stockout_at",
        type: "text"
      }, {
        label: "备注",
        width: "150",
        prop: "orders",
        inData: true,
        inProp: "goods_check_remark",
        type: "text"
      }],
      /**补件明细 */
      reSupplyData: [],
      reSupplyHead: [{
        label: "补件单号",
        width: "220",
        prop: "resupply_order_no",
        type: "text"
      }, {
        label: "补件类别",
        width: "140",
        prop: "resupplieCategory",
        inProp: "name",
        type: "text"
      }, {
        label: "收货人",
        prop: "order",
        inProp: "receiver_name",
        type: "text"
      }, {
        label: "收货人电话",
        width: "220",
        prop: "order",
        inProp: "receiver_phone",
        type: "text"
      }, {
        label: "收货地址",
        width: "220",
        prop: "address",
        type: "text"
      }, {
        label: "补件金额",
        width: "130",
        prop: "resupply_money",
        type: "number"
      }, {
        label: "补件原因",
        width: "300",
        prop: "resupply_reason",
        type: "text"
      }, {
        label: "补款方式",
        width: "140",
        prop: "refundMethod",
        inProp: "name",
        type: "text"
      }, {
        label: "补款账号",
        width: "160",
        prop: "refund_account",
        type: "text"
      }, {
        label: "开户银行",
        width: "140",
        prop: "bank",
        type: "text"
      }, {
        label: "物流公司",
        width: "140",
        prop: "logistic",
        inProp: "name",
        type: "text"
      }, {
        label: "预计运费",
        width: "130",
        prop: "estimated_fee",
        type: "number"
      }, {
        label: "物流赔偿费用",
        width: "130",
        prop: "compensate_fee",
        type: "number"
      }, {
        label: "实际发货时间",
        width: "140",
        prop: "real_consign_time",
        type: "text"
      }, {
        label: "送货费",
        prop: "order",
        inProp: "deliver_goods_fee",
        type: "text"
      }, {
        label: "搬楼费",
        prop: "order",
        inProp: "move_upstairs_fee",
        type: "text"
      }, {
        label: "安装费",
        prop: "order",
        inProp: "installation_fee",
        type: "text"
      }, {
        label: "配送总计",
        prop: "order",
        inProp: "total_distribution_fee",
        type: "text"
      }, {
        label: "客服备注",
        prop: "order",
        inProp: "customer_service_remark",
        type: "text"
      }, {
        label: "创建人",
        width: "140",
        prop: "creator",
        type: "text"
      }, {
        label: "提交人",
        width: "140",
        prop: "submitter",
        type: "text"
      }, {
        label: "审核人",
        width: "140",
        prop: "reviewer",
        type: "text"
      }, {
        label: "创建时间",
        width: "140",
        prop: "created_at",
        type: "text"
      }, {
        label: "提交时间",
        width: "140",
        prop: "submit_time",
        type: "text"
      }, {
        label: "审核时间",
        width: "140",
        prop: "review_time",
        type: "text"
      }],
      /**底部Tab 优惠列表 */
      offerListData: [],
      offerListHead: [{
        label: "单号",
        width: "140",
        prop: "",
        type: "text"
      }, {
        label: "优惠标题",
        width: "140",
        prop: "",
        type: "text"
      }, {
        label: "优惠金额",
        width: "140",
        prop: "",
        type: "text"
      }],
      //门店收款明细
      receiveDtlData: [],
      receiveDtlHead: [{
        label: "系统单号",
        width: "140",
        prop: "order",
        inProp: "system_order_no",
        type: "text"
      }, {
        label: "收货人",
        width: "140",
        prop: "order",
        inProp: "receiver_name",
        type: "text"
      }, {
        label: "出货日期",
        width: "140",
        prop: "",
        type: "text"
      }, {
        label: "门店收款方式",
        width: "140",
        prop: "paymentMethod",
        inProp: "name",
        type: "text"
      }, {
        label: "订单总额",
        width: "140",
        prop: "payment",
        type: "text"
      }, {
        label: "已付定金",
        width: "140",
        prop: "",
        type: "text"
      }, {
        label: "欠款金额",
        width: "140",
        prop: "",
        type: "text"
      }, {
        label: "付款方式",
        width: "140",
        prop: "paymentMethod",
        inProp: "name",
        type: "text"
      }, {
        label: "付款账号",
        width: "140",
        prop: "",
        type: "text"
      }, {
        label: "付款时间",
        width: "140",
        prop: "pay_time",
        type: "text"
      }, {
        label: "收款人",
        width: "140",
        prop: "",
        type: "text"
      }, {
        label: "收款账号",
        width: "140",
        prop: "",
        type: "text"
      }, {
        label: "备注",
        width: "140",
        prop: "remark",
        type: "text"
      }, {
        label: "创建人",
        width: "140",
        prop: "",
        type: "text"
      }, {
        label: "创建时间",
        width: "140",
        prop: "created_at",
        type: "text"
      }],
      //电子面单
      EsheetData: [],
      EsheetHead: [{
        label: "电子面单号",
        width: "140",
        prop: "",
        type: "text"
      }],
      //其他费用
      otherFeeData: [],
      otherFeeHead: [{
        label: "系统订单号",
        width: "140",
        prop: "",
        type: "text"
      }, {
        label: "费用类型",
        width: "140",
        prop: "",
        type: "text"
      }, {
        label: "费用金额",
        width: "140",
        prop: "",
        type: "text"
      }, {
        label: "创建人",
        width: "140",
        prop: "",
        type: "text"
      }, {
        label: "创建时间",
        width: "140",
        prop: "",
        type: "text"
      }, {
        label: "修改人",
        width: "140",
        prop: "",
        type: "text"
      }, {
        label: "修改时间",
        width: "140",
        prop: "",
        type: "text"
      }, {
        label: "备注",
        width: "140",
        prop: "",
        type: "text"
      }],
      //库存占用
      warehouseData: [],
      warehouseHead: [{
        label: "商品编码",
        width: "140",
        prop: "",
        type: "text"
      }, {
        label: "规格编码",
        width: "140",
        prop: "",
        type: "text"
      }, {
        label: "占用仓库",
        width: "140",
        prop: "",
        type: "text"
      }, {
        label: "占用数",
        width: "140",
        prop: "",
        type: "text"
      }, {
        label: "占用时间",
        width: "140",
        prop: "",
        type: "text"
      }],
      //备注
      //驳回记录
      curRowId: "",
      curRowData: {},
      options: __WEBPACK_IMPORTED_MODULE_0_element_china_area_data__["regionDataPlus"],
      toggleText: false,
      toggleHeight: true,
      clickFlag: false,
      proCurSkuData: {},
      addSubData: [],
      /*删除单条*/
      showDel: false,
      delUrl: "",
      delId: "",
      //分页
      pagination: {
        current_page: 1,
        per_page: 0,
        page_total: 0
      },
      /*删除批量*/
      ids: [],
      checkboxId: ""
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

    //获取数据
    fetchData: function fetchData() {
      var _this = this;

      this.$fetch(this.urls.customerservicedepts + "/orderCenter", {
        member_nick: this.searchBox.member_nick,
        system_order_no: this.searchBox.system_order_no,
        receiver_name: this.searchBox.receiver_name,
        receiver_mobile: this.searchBox.receiver_mobile,
        receiver_address: this.searchBox.receiver_address,
        shops_id: this.searchBox.shops_id,
        business_personnel_id: this.searchBox.business_personnel_id,
        //promise_ship_time: this.searchBox.promise_ship_time,
        //created_at: this.searchBox.created_at,
        //order_transMStart: this.searchBox.order_transMStart,
        //order_transMEnd: this.searchBox.order_transMEnd,
        logistics_id: this.searchBox.logistics_id,
        //stockout_at: this.searchBox.stockout_at,
        //payment_date: this.searchBox.payment_date,
        order_status: this.searchBox.order_status,
        freight_types_id: this.searchBox.freight_types_id,
        //order_fdAuditDate: this.searchBox.order_fdAuditDate,
        seller_flag: this.searchBox.seller_flag,
        logistics_sn: this.searchBox.logistics_sn,
        //out_order: this.searchBox.out_order,
        seller_remark: this.searchBox.seller_remark,
        //suppliers_id: this.searchBox.suppliers_id,
        warehouses_id: this.searchBox.warehouses_id,
        //esheet_no: this.searchBox.esheet_no,
        //audit_at: this.searchBox.audit_at,
        auditor_id: this.searchBox.auditor_id,
        include: "resupplieOrder,shop,customerType,businessPersonnel,logistic,freightType,distribution,distributionType,distributionMethod,orderItems,paymentMethod,warehouses,orderItems.combination,orderItems.product.supplier,orderItems.product.productComponents,paymentDetails,paymentDetails.paymentMethod,paymentDetails.order,resupplieOrder.resupplieInnerNote,resupplieOrder.resupplieOperationRecord,logistic.orders,logistic.freightType,resupplieOrder.resupplieCategory,resupplieOrder.order,resupplieOrder.refundMethod,resupplieOrder.logistic,resupplieOrder.resupplieEsheet"
      }).then(function (res) {
        _this.loading = false;
        _this.orderListData = res.data;
        _this.$store.dispatch("shops", "/shops");
        _this.$store.dispatch("logistics", "/logistics");
        _this.$store.dispatch("warehouses", "/warehouses");
        _this.$store.dispatch("freighttypes", "/freighttypes");
        _this.$fetch(_this.urls.customerservicedepts + "/create").then(function (res) {
          _this.addSubData = res;
        }, function (err) {});
        _this.proDtlData = res.data[0] ? res.data["orderItems"].data : [];
        _this.cargoAuditData = res.data;
        _this.payDtlData = res.data[0] ? res.data["paymentDetails"].data : [];
        /*this.innerNoteData = [];
        this.operationRecordData = [];
        this.checkDtlData = [];*/
        _this.logisticsData = res.data[0] ? [{
          orders: res.data["logistic"]["orders"],
          name: res.data["logistic"]["orders"],
          phone: res.data["logistic"]["phone"],
          freightType: res.data["logistic"]["freightType"]
        }] : [];
        _this.reSupplyData = res.data[0] ? res.data["resupplieOrder"].data : [];
        /*this.offerListData = [];
        this.receiveDtlData = [];
        this.EsheetData = res.data[0]
          ? res.data['resupplieOrder'].data['resupplieEsheet'].data
          : [];
        this.otherFeeData = [];
        this.warehouseData = [];*/
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
    },

    //筛选信息重置
    resets: function resets() {
      this.searchBox = {
        member_nick: "",
        system_order_no: "",
        receiver_name: "",
        receiver_mobile: "",
        receiver_address: "",
        shops_id: "",
        business_personnel_id: "",
        promise_ship_time: ["2018-12-31T16:00:00.000Z", "2099-12-31T16:00:00.000Z"],
        created_at: ["2018-12-31T16:00:00.000Z", "2099-12-31T16:00:00.000Z"],
        order_transMStart: "",
        order_transMEnd: "",
        logistics: "",
        stockout_at: ["2018-12-31T16:00:00.000Z", "2099-12-31T16:00:00.000Z"],
        payment_date: ["2018-12-31T16:00:00.000Z", "2099-12-31T16:00:00.000Z"],
        order_status: "",
        orderStatus: [{ label: "未处理", value: 10 }, { label: "订单锁定中", value: 20 }, { label: "已客审", value: 30 }, { label: "已跟单一审", value: 40 }, { label: "已财审", value: 50 }, { label: "已货审", value: 60 }, { label: "准备出库", value: 70 }, { label: "已出库", value: 80 }],
        order_fdAuditDate: ["2018-12-31T16:00:00.000Z", "2099-12-31T16:00:00.000Z"],
        seller_flag: "",
        logistics_sn: "",
        out_order: "",
        seller_remark: "",
        suppliers_id: "",
        warehouses_id: "",
        esheet_no: "",
        audit_at: ["2018-12-31T16:00:00.000Z", "2099-12-31T16:00:00.000Z"],
        auditor_id: ""
      };
    },

    //筛选
    searchData: function searchData() {
      this.loading = true;
      this.fetchData();
    },
    rightHandleClick: function rightHandleClick() {},
    orderListRClick: function orderListRClick(row) {
      this.curRowData = row;
      this.proDtlData = row["orderItems"].data;
      this.cargoAuditData = row["orderItems"].data;
      this.payDtlData = row["paymentDetails"].data;
      this.innerNoteData = [];
      this.operationRecordData = [];
      this.checkDtlData = [];
      this.logisticsData = [{
        orders: row["logistic"]["orders"],
        name: row["logistic"]["name"],
        phone: row["logistic"]["phone"],
        freightType: row["logistic"]["freightType"]
      }];
      this.reSupplyData = row["resupplieOrder"].data;
      this.offerListData = [];
      this.receiveDtlData = [];
      this.EsheetData = [];
      this.otherFeeData = [];
      this.warehouseData = [];
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
      this.proDtlData = row["orderItems"].data;
      this.cargoAuditData = row["orderItems"].data;
      this.payDtlData = row["paymentDetails"].data;
      this.innerNoteData = [];
      this.operationRecordData = [];
      this.checkDtlData = [];
      this.logisticsData = [{
        orders: row["logistic"]["orders"],
        name: row["logistic"]["name"],
        phone: row["logistic"]["phone"],
        freightType: row["logistic"]["freightType"]
      }];
      this.reSupplyData = row["resupplieOrder"].data;
      this.offerListData = [];
      this.receiveDtlData = [];
      this.EsheetData = [];
      this.otherFeeData = [];
      this.warehouseData = [];
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
            _this2.$set(item, "", {
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
      var _this3 = this;

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
          _this3.$set(item, "", {
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
    quantityChg: function quantityChg(value) {
      var _this4 = this;

      if (value > 0) {
        var proCRow = this.proCompRow;
        if (this.proIds.indexOf(proCRow.id) == -1) {
          this.proIds.push(proCRow.id);
          this.proSubmitData.push(proCRow);
        } else {
          this.proSubmitData.map(function (list, index) {
            if (list.id == proCRow.id) {
              _this4.proSubmitData.splice(index, 1);
              _this4.proSubmitData.push(proCRow);
            }
          });
        }
      }
    },
    formChg: function formChg() {
      var formVal = void 0;
      if (this.addCustomerMask) {
        formVal = this.addCustomerFormVal;
      } else {
        formVal = this.updateCustomerFormVal;
      }
      formVal["total_distribution_fee"] = formVal["deliver_goods_fee"] - 0 + (formVal["move_upstairs_fee"] - 0) + (formVal["installation_fee"] - 0);
      if (this.addCustomerMask) {
        this.addCustomerFormVal.total_distribution_fee = formVal["total_distribution_fee"];
      } else {
        this.updateCustomerFormVal.total_distribution_fee = formVal["total_distribution_fee"];
      }
    },
    addDelExpense: function addDelExpense(index) {
      this.expenseData.splice(index, 1);
      this.$message({
        message: "删除成功",
        type: "success"
      });
    },

    /*删除单条*/
    delSingle: function delSingle(row, e) {
      this.showDel = true;
      $(".el-popper").css({ left: e.x - 100 + "px", top: e.y - 125 + "px" });
      this.delId = row.id;
      this.delUrl = this.urls.customerservicedepts;
    },
    cancelD: function cancelD() {
      this.showDel = false;
      this.$message({
        message: "取消删除",
        type: "info"
      });
    },
    confirmD: function confirmD(url, id) {
      var _this5 = this;

      this.$del(url + "/" + id).then(function () {
        _this5.showDel = false;
        _this5.refresh();
        _this5.$message({
          message: "删除成功",
          type: "success"
        });
      }, function (err) {
        if (err.response) {
          _this5.showDel = false;
          var arr = err.response.data.errors;
          var arr1 = [];
          for (var i in arr) {
            arr1.push(arr[i]);
          }
          var str = arr1.join(",");
          _this5.$message.error(str);
        }
      });
    },

    /*批量删除*/
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
    delBatch: function delBatch() {
      var _this6 = this;

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
          _this6.$del(_this6.urls.customerservicedepts, { ids: _this6.ids }).then(function () {
            _this6.refresh();
            _this6.$message({
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
              _this6.$message.error(str);
            }
          });
        }).catch(function () {
          _this6.$message({
            type: "info",
            message: "已取消删除"
          });
        });
      }
    },

    /*页码*/
    handlePagChg: function handlePagChg(page) {
      var _this7 = this;

      this.$fetch(this.urls.customerservicedepts + "?page=" + page, {
        include: "shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems.combination.productComponents,orderItems.product,businessPersonnel,locker,paymentDetails.paymentMethod,paymentDetails.order"
      }).then(function (res) {
        if (_this7.leftTopActiveName == "0") {
          _this7.orderListData = res.data;
        } else {
          _this7.alreadyHandle = res.data;
        }
      });
    },
    refresh: function refresh() {
      this.loading = true;
      this.fetchData();
    },

    //退审
    handleUnAudit: function handleUnAudit() {
      var _this8 = this;

      var id = this.checkboxId ? this.checkboxId : this.curRowId;
      this.$put(this.urls.customerservicedepts + "/" + id + "/unaudit").then(function () {
        _this8.refresh();
        _this8.$message({
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
          _this8.$message.error(str);
        }
      });
    },

    //同步
    handleMergerOrder: function handleMergerOrder() {}
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

/***/ 1073:
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
                      _c("label", [_vm._v("会员名称")]),
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
                          value: _vm.searchBox.receiver_mobile,
                          callback: function($$v) {
                            _vm.$set(_vm.searchBox, "receiver_mobile", $$v)
                          },
                          expression: "searchBox.receiver_mobile"
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
                        _vm._l(_vm.resData["shops"], function(list) {
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
                      _c("label", [_vm._v("包含商品")]),
                      _vm._v(" "),
                      _c("el-input", { attrs: { clearable: "" } })
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
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "searchBox" }, [
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
                            value: _vm.searchBox.logistics_id,
                            callback: function($$v) {
                              _vm.$set(_vm.searchBox, "logistics_id", $$v)
                            },
                            expression: "searchBox.logistics_id"
                          }
                        },
                        _vm._l(_vm.resData["logistics"], function(list) {
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
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "searchBox" }, [
                  _c(
                    "span",
                    [
                      _c("label", [_vm._v("发货时间")]),
                      _vm._v(" "),
                      _c("el-date-picker", {
                        attrs: {
                          type: "daterange",
                          "range-separator": "至",
                          "start-placeholder": "开始日期",
                          "end-placeholder": "结束日期"
                        },
                        model: {
                          value: _vm.searchBox.stockout_at,
                          callback: function($$v) {
                            _vm.$set(_vm.searchBox, "stockout_at", $$v)
                          },
                          expression: "searchBox.stockout_at"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    [
                      _c("label", [_vm._v("支付时间")]),
                      _vm._v(" "),
                      _c("el-date-picker", {
                        attrs: {
                          type: "daterange",
                          "range-separator": "至",
                          "start-placeholder": "开始日期",
                          "end-placeholder": "结束日期"
                        },
                        model: {
                          value: _vm.searchBox.payment_date,
                          callback: function($$v) {
                            _vm.$set(_vm.searchBox, "payment_date", $$v)
                          },
                          expression: "searchBox.payment_date"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    [
                      _c("label", [_vm._v("订单状态")]),
                      _vm._v(" "),
                      _c(
                        "el-select",
                        {
                          attrs: { clearable: "", placeholder: "请选择" },
                          model: {
                            value: _vm.searchBox.order_status,
                            callback: function($$v) {
                              _vm.$set(_vm.searchBox, "order_status", $$v)
                            },
                            expression: "searchBox.order_status"
                          }
                        },
                        _vm._l(_vm.searchBox.orderStatus, function(item) {
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
                      _c("label", [_vm._v("财审时间")]),
                      _vm._v(" "),
                      _c("el-date-picker", {
                        attrs: {
                          type: "daterange",
                          "range-separator": "至",
                          "start-placeholder": "开始日期",
                          "end-placeholder": "结束日期"
                        },
                        model: {
                          value: _vm.searchBox.order_fdAuditDate,
                          callback: function($$v) {
                            _vm.$set(_vm.searchBox, "order_fdAuditDate", $$v)
                          },
                          expression: "searchBox.order_fdAuditDate"
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
                      _c("label", [_vm._v("运费类型")]),
                      _vm._v(" "),
                      _c(
                        "el-select",
                        {
                          attrs: { clearable: "", placeholder: "请选择" },
                          model: {
                            value: _vm.searchBox.freight_types_id,
                            callback: function($$v) {
                              _vm.$set(_vm.searchBox, "freight_types_id", $$v)
                            },
                            expression: "searchBox.freight_types_id"
                          }
                        },
                        _vm._l(_vm.resData["freighttypes"], function(list) {
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
                      _c("label", [_vm._v("物流单号")]),
                      _vm._v(" "),
                      _c("el-input", {
                        attrs: { clearable: "" },
                        model: {
                          value: _vm.searchBox.logistics_sn,
                          callback: function($$v) {
                            _vm.$set(_vm.searchBox, "logistics_sn", $$v)
                          },
                          expression: "searchBox.logistics_sn"
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
                        model: {
                          value: _vm.searchBox.out_order,
                          callback: function($$v) {
                            _vm.$set(_vm.searchBox, "out_order", $$v)
                          },
                          expression: "searchBox.out_order"
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
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    [
                      _c("label", [_vm._v("发货仓库")]),
                      _vm._v(" "),
                      _c(
                        "el-select",
                        {
                          attrs: { clearable: "", placeholder: "请选择" },
                          model: {
                            value: _vm.searchBox.warehouses_id,
                            callback: function($$v) {
                              _vm.$set(_vm.searchBox, "warehouses_id", $$v)
                            },
                            expression: "searchBox.warehouses_id"
                          }
                        },
                        _vm._l(_vm.resData["warehouses"], function(list) {
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
                    { staticClass: "transMoney" },
                    [
                      _c("label", [_vm._v("电子面单号")]),
                      _vm._v(" "),
                      _c("el-input", {
                        attrs: { clearable: "" },
                        model: {
                          value: _vm.searchBox.esheet_no,
                          callback: function($$v) {
                            _vm.$set(_vm.searchBox, "esheet_no", $$v)
                          },
                          expression: "searchBox.esheet_no"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    [
                      _c("label", [_vm._v("客审时间")]),
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
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "searchBox" }, [
                  _c(
                    "span",
                    [
                      _c("label", [_vm._v("审计员")]),
                      _vm._v(" "),
                      _c(
                        "el-select",
                        {
                          attrs: { clearable: "", placeholder: "请选择" },
                          model: {
                            value: _vm.searchBox.auditor_id,
                            callback: function($$v) {
                              _vm.$set(_vm.searchBox, "auditor_id", $$v)
                            },
                            expression: "searchBox.auditor_id"
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
                  _c("span"),
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
                  attrs: { data: _vm.orderListData, fit: "", height: "350" },
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
                                        ? _c("span", [
                                            item.inData
                                              ? _c("span", [
                                                  scope.row[item.prop][
                                                    "data"
                                                  ][0]
                                                    ? _c(
                                                        "span",
                                                        [
                                                          _c("el-checkbox", {
                                                            attrs: {
                                                              disabled: ""
                                                            },
                                                            model: {
                                                              value:
                                                                scope.row[
                                                                  item.prop
                                                                ]["data"][0][
                                                                  item.inProp
                                                                ],
                                                              callback: function(
                                                                $$v
                                                              ) {
                                                                _vm.$set(
                                                                  scope.row[
                                                                    item.prop
                                                                  ]["data"][0],
                                                                  item.inProp,
                                                                  $$v
                                                                )
                                                              },
                                                              expression:
                                                                "scope.row[item.prop]['data'][0][item.inProp]"
                                                            }
                                                          })
                                                        ],
                                                        1
                                                      )
                                                    : _c(
                                                        "span",
                                                        [
                                                          _c("el-checkbox", {
                                                            attrs: {
                                                              disabled: ""
                                                            }
                                                          })
                                                        ],
                                                        1
                                                      )
                                                ])
                                              : _c(
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
                                          ])
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
                                  : item.type == "flag"
                                  ? _c("span", [
                                      scope.row[item.prop] == 0
                                        ? _c("span", [
                                            _c("i", {
                                              staticClass: "iconfont bf-flag"
                                            })
                                          ])
                                        : scope.row[item.prop] == 1
                                        ? _c("span", [
                                            _c("i", {
                                              staticClass: "iconfont bf-flag",
                                              staticStyle: { color: "red" }
                                            })
                                          ])
                                        : scope.row[item.prop] == 2
                                        ? _c("span", [
                                            _c("i", {
                                              staticClass: "iconfont bf-flag",
                                              staticStyle: { color: "yellow" }
                                            })
                                          ])
                                        : scope.row[item.prop] == 3
                                        ? _c("span", [
                                            _c("i", {
                                              staticClass: "iconfont bf-flag",
                                              staticStyle: { color: "green" }
                                            })
                                          ])
                                        : scope.row[item.prop] == 4
                                        ? _c("span", [
                                            _c("i", {
                                              staticClass: "iconfont bf-flag",
                                              staticStyle: { color: "blue" }
                                            })
                                          ])
                                        : scope.row[item.prop] == 5
                                        ? _c("span", [
                                            _c("i", {
                                              staticClass: "iconfont bf-flag",
                                              staticStyle: { color: "purple" }
                                            })
                                          ])
                                        : _vm._e()
                                    ])
                                  : _c("span", [
                                      item.inProp
                                        ? _c("span", [
                                            item.inData
                                              ? _c("span", [
                                                  _vm._v(
                                                    "\n                  " +
                                                      _vm._s(
                                                        scope.row[item.prop][
                                                          "data"
                                                        ][0]
                                                          ? scope.row[
                                                              item.prop
                                                            ]["data"][0][
                                                              item.inProp
                                                            ]
                                                          : ""
                                                      ) +
                                                      "\n                "
                                                  )
                                                ])
                                              : _c("span", [
                                                  _vm._v(
                                                    "\n                  " +
                                                      _vm._s(
                                                        scope.row[item.prop]
                                                          ? scope.row[
                                                              item.prop
                                                            ][item.inProp]
                                                          : ""
                                                      ) +
                                                      "\n                "
                                                  )
                                                ])
                                          ])
                                        : _c("span", [
                                            _vm._v(
                                              "\n                " +
                                                _vm._s(scope.row[item.prop]) +
                                                "\n              "
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
                                        : _c("span", [
                                            item.inProp
                                              ? _c("span", [
                                                  item.inData
                                                    ? _c("span", [
                                                        item.nmProp
                                                          ? _c("span", [
                                                              _vm._v(
                                                                "\n                        " +
                                                                  _vm._s(
                                                                    scope.row[
                                                                      item.prop
                                                                    ][
                                                                      item
                                                                        .inProp
                                                                    ]["data"][0]
                                                                      ? scope
                                                                          .row[
                                                                          item
                                                                            .prop
                                                                        ][
                                                                          item
                                                                            .inProp
                                                                        ][
                                                                          "data"
                                                                        ][0][
                                                                          item
                                                                            .nmProp
                                                                        ]
                                                                      : ""
                                                                  ) +
                                                                  "\n                      "
                                                              )
                                                            ])
                                                          : _vm._e()
                                                      ])
                                                    : _c("span", [
                                                        item.nmProp
                                                          ? _c("span", [
                                                              _vm._v(
                                                                "\n                        " +
                                                                  _vm._s(
                                                                    scope.row[
                                                                      item.prop
                                                                    ][
                                                                      item
                                                                        .inProp
                                                                    ][
                                                                      item
                                                                        .nmProp
                                                                    ]
                                                                  ) +
                                                                  "\n                      "
                                                              )
                                                            ])
                                                          : _c("span", [
                                                              _vm._v(
                                                                "\n                        " +
                                                                  _vm._s(
                                                                    scope.row[
                                                                      item.prop
                                                                    ][
                                                                      item
                                                                        .inProp
                                                                    ]
                                                                  ) +
                                                                  "\n                      "
                                                              )
                                                            ])
                                                      ])
                                                ])
                                              : _c("span", [
                                                  _vm._v(
                                                    "\n                    " +
                                                      _vm._s(
                                                        scope.row[item.prop]
                                                      ) +
                                                      "\n                  "
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
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-tab-pane",
                    { attrs: { label: "订单信息", name: "1" } },
                    [
                      _c(
                        "el-table",
                        { attrs: { data: _vm.orderInfoData, fit: "" } },
                        _vm._l(_vm.orderInfoHead, function(item) {
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
                                      _c("span", [
                                        _vm._v(
                                          "\n                  " +
                                            _vm._s(scope.row[item.prop]) +
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
                    { attrs: { label: "货审明细", name: "2" } },
                    [
                      _c(
                        "el-table",
                        { attrs: { data: _vm.cargoAuditData, fit: "" } },
                        _vm._l(_vm.cargoAuditHead, function(item) {
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
                                            item.inProp
                                              ? _c("span", [
                                                  item.inData
                                                    ? _c("span", [
                                                        item.nmProp
                                                          ? _c("span", [
                                                              _vm._v(
                                                                "\n                        " +
                                                                  _vm._s(
                                                                    scope.row[
                                                                      item.prop
                                                                    ][
                                                                      item
                                                                        .inProp
                                                                    ]["data"][0]
                                                                      ? scope
                                                                          .row[
                                                                          item
                                                                            .prop
                                                                        ][
                                                                          item
                                                                            .inProp
                                                                        ][
                                                                          "data"
                                                                        ][0][
                                                                          item
                                                                            .nmProp
                                                                        ]
                                                                      : ""
                                                                  ) +
                                                                  "\n                      "
                                                              )
                                                            ])
                                                          : _vm._e()
                                                      ])
                                                    : _c("span", [
                                                        item.nmProp
                                                          ? _c("span", [
                                                              _vm._v(
                                                                "\n                        " +
                                                                  _vm._s(
                                                                    scope.row[
                                                                      item.prop
                                                                    ][
                                                                      item
                                                                        .inProp
                                                                    ][
                                                                      item
                                                                        .nmProp
                                                                    ]
                                                                  ) +
                                                                  "\n                      "
                                                              )
                                                            ])
                                                          : _c("span", [
                                                              _vm._v(
                                                                "\n                        " +
                                                                  _vm._s(
                                                                    scope.row[
                                                                      item.prop
                                                                    ][
                                                                      item
                                                                        .inProp
                                                                    ]
                                                                  ) +
                                                                  "\n                      "
                                                              )
                                                            ])
                                                      ])
                                                ])
                                              : _c("span", [
                                                  _vm._v(
                                                    "\n                    " +
                                                      _vm._s(
                                                        scope.row[item.prop]
                                                      ) +
                                                      "\n                  "
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
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-tab-pane",
                    { attrs: { label: "支付明细", name: "3" } },
                    [
                      _c(
                        "el-table",
                        { attrs: { data: _vm.payDtlData, fit: "" } },
                        _vm._l(_vm.payDtlHead, function(item) {
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
                                      _c("span", [
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
                    { attrs: { label: "内部便签", name: "4" } },
                    [
                      _c(
                        "el-table",
                        { attrs: { data: _vm.innerNoteData, fit: "" } },
                        _vm._l(_vm.innerNoteHead, function(item) {
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
                                      _c("span", [
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
                    { attrs: { label: "操作记录", name: "5" } },
                    [
                      _c(
                        "el-table",
                        { attrs: { data: _vm.operationRecordData, fit: "" } },
                        _vm._l(_vm.operationRecordHead, function(item) {
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
                                      _c("span", [
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
                    { attrs: { label: "结算明细", name: "6" } },
                    [
                      _c(
                        "el-table",
                        { attrs: { data: _vm.checkDtlData, fit: "" } },
                        _vm._l(_vm.checkDtlHead, function(item) {
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
                                      _c("span", [
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
                  _c("el-tab-pane", {
                    attrs: { label: "跟单图片", name: "7" }
                  }),
                  _vm._v(" "),
                  _c(
                    "el-tab-pane",
                    { attrs: { label: "物流信息", name: "8" } },
                    [
                      _c(
                        "el-table",
                        { attrs: { data: _vm.logisticsData, fit: "" } },
                        _vm._l(_vm.logisticsHead, function(item) {
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
                                      item.inProp
                                        ? _c("span", [
                                            item.inData
                                              ? _c("span", [
                                                  _vm._v(
                                                    "\n                    " +
                                                      _vm._s(
                                                        scope.row[item.prop][
                                                          "data"
                                                        ]
                                                          ? scope.row[
                                                              item.prop
                                                            ]["data"][0][
                                                              item.inProp
                                                            ]
                                                          : ""
                                                      ) +
                                                      "\n                  "
                                                  )
                                                ])
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
                                        : _c("span", [
                                            _vm._v(
                                              "\n                  " +
                                                _vm._s(scope.row[item.prop]) +
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
                    { attrs: { label: "补件明细", name: "9" } },
                    [
                      _c(
                        "el-table",
                        { attrs: { data: _vm.reSupplyData, fit: "" } },
                        _vm._l(_vm.reSupplyHead, function(item) {
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
                                      item.inProp
                                        ? _c("span", [
                                            item.inData
                                              ? _c("span", [
                                                  _vm._v(
                                                    "\n                    " +
                                                      _vm._s(
                                                        scope.row[item.prop][
                                                          "data"
                                                        ]
                                                          ? scope.row[
                                                              item.prop
                                                            ]["data"][0][
                                                              item.inProp
                                                            ]
                                                          : ""
                                                      ) +
                                                      "\n                  "
                                                  )
                                                ])
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
                                        : _c("span", [
                                            _vm._v(
                                              "\n                  " +
                                                _vm._s(scope.row[item.prop]) +
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
                    { attrs: { label: "优惠列表", name: "10" } },
                    [
                      _c(
                        "el-table",
                        { attrs: { data: _vm.offerListData, fit: "" } },
                        _vm._l(_vm.offerListHead, function(item) {
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
                                      _c("span", [
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
                  _c("el-tab-pane", {
                    attrs: { label: "订单图片", name: "11" }
                  }),
                  _vm._v(" "),
                  _c(
                    "el-tab-pane",
                    { attrs: { label: "门店收款明细", name: "12" } },
                    [
                      _c(
                        "el-table",
                        { attrs: { data: _vm.receiveDtlData, fit: "" } },
                        _vm._l(_vm.receiveDtlHead, function(item) {
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
                                      item.inProp
                                        ? _c("span", [
                                            item.inData
                                              ? _c("span", [
                                                  _vm._v(
                                                    "\n                    " +
                                                      _vm._s(
                                                        scope.row[item.prop][
                                                          "data"
                                                        ]
                                                          ? scope.row[
                                                              item.prop
                                                            ]["data"][0][
                                                              item.inProp
                                                            ]
                                                          : ""
                                                      ) +
                                                      "\n                  "
                                                  )
                                                ])
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
                                        : _c("span", [
                                            _vm._v(
                                              "\n                  " +
                                                _vm._s(scope.row[item.prop]) +
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
                    { attrs: { label: "电子面单", name: "13" } },
                    [
                      _c(
                        "el-table",
                        { attrs: { data: _vm.EsheetData, fit: "" } },
                        _vm._l(_vm.EsheetHead, function(item) {
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
                                      _c("span", [
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
                    { attrs: { label: "其他费用", name: "14" } },
                    [
                      _c(
                        "el-table",
                        { attrs: { data: _vm.otherFeeData, fit: "" } },
                        _vm._l(_vm.otherFeeHead, function(item) {
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
                                      _c("span", [
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
                    { attrs: { label: "库存占用", name: "15" } },
                    [
                      _c(
                        "el-table",
                        { attrs: { data: _vm.warehouseData, fit: "" } },
                        _vm._l(_vm.warehouseHead, function(item) {
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
                                      _c("span", [
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
                  _c("el-tab-pane", { attrs: { label: "备注", name: "16" } }),
                  _vm._v(" "),
                  _c("el-tab-pane", {
                    attrs: { label: "驳回记录", name: "17" }
                  })
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
    require("vue-hot-reload-api")      .rerender("data-v-0fb511df", module.exports)
  }
}

/***/ }),

/***/ 952:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(12)
/* script */
var __vue_script__ = __webpack_require__(1072)
/* template */
var __vue_template__ = __webpack_require__(1073)
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
Component.options.__file = "resources/assets/js/views/order/orderCenter.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0fb511df", Component.options)
  } else {
    hotAPI.reload("data-v-0fb511df", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});