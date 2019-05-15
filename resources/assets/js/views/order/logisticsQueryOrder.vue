<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="outerHandleClick">
      <div>
        <div class="searchBox">
          <span>
            <label>会员名称</label>
            <el-input v-model="searchBox.vip_name" clearable></el-input>
          </span>
          <span>
            <label>订单编号</label>
            <el-input v-model="searchBox.order_num" clearable></el-input>
          </span>
          <span>
            <label>收货人</label>
            <el-input v-model="searchBox.order_man" clearable></el-input>
          </span>
          <span>
            <label>收货手机</label>
            <el-input v-model="searchBox.order_phone" clearable></el-input>
          </span>
        </div>
        <div class="searchBox">
          <span>
            <label>收货手机</label>
            <el-input v-model="searchBox.order_address" clearable></el-input>
          </span>
          </span>
          <span>
          </span>
          <span>
          </span>
          <span>
          </span>
        </div>
      </div>

      <!--显示列表-未处理-->
      <el-tabs v-model="orderListActiveName" @tab-click="leftHandleClick" style="height: 400px;">
        <el-tab-pane label="订单列表" name="0">
          <el-table :data="orderListData" fit @selection-change="handleSelectionChange" v-loading="loading" height="350" @row-click="orderListRowClick" @row-dblclick="orderDbClick">
            <el-table-column type="selection" width="95" align="center" :checked="checkboxInit">
            </el-table-column>
            <el-table-column v-for="item in orderListHead" :label="item.label" align="center" :width="item.width" :key="item.label">
              <template slot-scope="scope">
                <span v-if="item.type=='checkbox'">
                  <span v-if="item.inProp">
                    <el-checkbox v-model="scope.row[item.prop][item.inProp]" disabled></el-checkbox>
                  </span>
                  <span v-else>
                    <el-checkbox v-model="scope.row[item.prop]" disabled></el-checkbox>
                  </span>
                </span>
                <span v-else-if="item.type=='flag'">
                  <span v-if="scope.row[item.prop]==0">
                    <i class="iconfont bf-flag"></i>
                  </span>
                  <span v-else-if="scope.row[item.prop]==1">
                    <i class="iconfont bf-flag" style="color:red"></i>
                  </span>
                  <span v-else-if="scope.row[item.prop]==2">
                    <i class="iconfont bf-flag" style="color:yellow"></i>
                  </span>
                  <span v-else-if="scope.row[item.prop]==3">
                    <i class="iconfont bf-flag" style="color:green"></i>
                  </span>
                  <span v-else-if="scope.row[item.prop]==4">
                    <i class="iconfont bf-flag" style="color:blue"></i>
                  </span>
                  <span v-else-if="scope.row[item.prop]==5">
                    <i class="iconfont bf-flag" style="color:purple"></i>
                  </span>
                </span>
                <span v-else>
                  <span v-if="scope.row[item.prop]">
                    {{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}
                  </span>
                </span>
              </template>
            </el-table-column>
            <el-table-column label="操作" width="90" align="center" fixed="right">
              <template slot-scope="scope">
                <el-button size="mini" type="danger" @click="delSingle(scope.row,$event)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
      <!--页码-->
      <Pagination :page-url="this.urls.customerservicerefunds" @handlePagChg="handlePagChg" v-if="activeName=='0'"></Pagination>

      <!--底部Tab-->
      <el-tabs>
        <el-tab-pane label="产品明细" name="0">
          <el-table :model="detailProData">
            <el-table-column v-for="(item,index) in detailProHead" :label="item.label" align="center" :prop="item.prop" :key="index">
              <span v-if="item.type=='text'">
                <span v-if="item.inProp">
                  <el-input v-model.trim="detailProData[item.prop][item.inProp]" :placeholder="item.holder" :disabled="item.addChgAble"></el-input>
                </span>
                <span v-else>
                  <el-input v-model.trim="detailProData[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble"></el-input>
                </span>
              </span>
              <span v-else-if="item.type=='number'">
                <span v-if="item.prop=='deliver_goods_fee' || item.prop=='move_upstairs_fee' || item.prop=='installation_fee'">
                  <el-input type="number" v-model.trim="detailProData[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble" @input="formChg"></el-input>
                </span>
                <span v-else>
                  <el-input type="number" v-model.trim="detailProData[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble"></el-input>
                </span>
              </span>
              <!--选择框拉取数据库数据-->
              <span v-else-if="item.type=='select'">
                <el-select v-model="detailProData[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble">
                  <span v-for="list in resData[item.stateVal]" :key="list.id">
                    <el-option :label="list.name?list.name:list.nick" :value="list.id"></el-option>
                  </span>
                </el-select>
              </span>
              <span v-else-if="item.type == 'selects'">
                <el-select v-model="detailProData[item.prop]" :placeholder="item.holder">
                  <span v-for="list in selectVal[item.prop]" :key="list.value">
                    <el-option :label="list.label" :value="list.value"></el-option>
                  </span>
                </el-select>
              </span>
              <span v-else-if="item.type=='textarea'">
                <el-input type="textarea" v-model.trim="detailProData[item.prop]" :placehode="item.holder" :disabled="item.addChgAble"></el-input>
              </span>
              <span v-else-if="item.type=='checkbox'">
                <el-checkbox v-model="detailProData[item.prop]" :disabled="item.chgAble"></el-checkbox>
              </span>
              <span v-else-if="item.type=='radio'">
                <el-radio v-model="detailProData[item.prop]" label="volume">{{item.choiceName[0]}}</el-radio>
                <el-radio v-model="detailProData[item.prop]" label="weight">{{item.choiceName[1]}}</el-radio>
              </span>
              <span v-else-if="item.type=='DatePicker'">
                <el-date-picker v-model="detailProData[item.prop]" type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期"></el-date-picker>
              </span>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="补件明细" name="1">
          <el-table :data="logData">
            <el-table-column v-for="item in logTableHead" :label="item.label" align="center" :width="item.width" :key="item.prop">
              <template slot-scope="scope">
                <span v-if="item.type=='checkbox'">
                  <el-checkbox v-model="scope.row[item.prop]" disabled></el-checkbox>
                </span>
                <span v-else-if="item.type=='img'">
                  <el-popover placement="right" trigger="hover" popper-class="picture_detail">
                    <img :src="scope.row[item.prop]">
                    <img slot="reference" :src="scope.row[item.prop]" :alt="scope.row[item.alt]">
                  </el-popover>
                </span>
                <span v-else>
                  <span v-if="scope.row[item.prop]">
                    {{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}
                  </span>
                </span>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </el-tabs>
    <!--删除单条-->
    <el-popover placement="top" width="160" v-model="showDel" slot="tip">
      <p>确定删除该条数据？</p>
      <div style="text-align: right; margin: 0">
        <el-button size="mini" type="text" @click="cancelD">取消</el-button>
        <el-button type="primary" size="mini" @click="confirmD(delUrl,delId)">确定</el-button>
      </div>
    </el-popover>

  </div>
</template>
<script>
import FileSaver from "file-saver";
import XLSX from "xlsx";
import axios from "axios";
import qs from "qs";
import { mapGetters } from "vuex";
import {
  regionDataPlus,
  CodeToText,
  TextToCode
} from "element-china-area-data";
export default {
  data() {
    let validateNum = (rule, value, callback) => {
      if (value != parseFloat(value)) {
        callback(new Error("只能是数字"));
      } else if (value <= 0) {
        callback(new Error("不能为负数"));
      } else {
        callback();
      }
    };
    let validateTel = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("手机号不能为空"));
      } else {
        const reg = /^1[3|4|5|7|8|9][0-9]\d{8}$/;
        if (reg.test(value)) {
          callback();
        } else {
          return callback(new Error("请输入正确的手机号"));
        }
      }
    };
    let validateUrl = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("网址不能为空"));
      } else {
        // const reg = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
        const reg = /^((ht|f)tps?):\/\/([\w\-]+(\.[\w\-]+)*\/)*[\w\-]+(\.[\w\-]+)*\/?(\?([\w\-\.,@?^=%&:\/~\+#]*)+)?/;
        if (reg.test(value)) {
          callback();
        } else {
          return callback(new Error("请输入正确的网址"));
        }
      }
    };
    return {
      newOpt: [
        {
          cnt: "刷新",
          icon: "bf-refresh",
          ent: this.refresh
        }
      ],

      /**SearchBox
       * 搜索框相关参数
      */
      filterBox: false,
      searchBox: {
        shop_nick: "",
        order_no: "",
        buyer_nick: "",
        buyer_name: "",
        refund_info: "",
        locker: "",
        refund_time: ""
      },

      /**订单列表Tab
       * 订单列表的相关参数
       * */
      activeName: "0",
      orderListActiveName: "0",

      orderListTabCurRowId: "",

      orderListData: [],
      treatedOrderListData: [],
      OrderListCurRowData: {},

      orderListHead: [
        {
          label: "系统单号",
          width: "200",
          prop: "refund_sn",
          type: "text"
        },
        {
          label: "订单编号",
          width: "120",
          prop: "order_sn",
          type: "text"
        },
        {
          label: "店铺名称",
          width: "120",
          prop: "shops_id",
          type: "text"
        },
        {
          label: "买家姓名",
          width: "120",
          prop: "buyer_name",
          type: "text"
        },
        {
          label: "买家昵称",
          width: "120",
          prop: "buyer_nick",
          type: "text"
        },
        {
          label: "单据类型",
          width: "120",
          prop: "receipt_type",
          type: "text"
        },
        {
          label: "退款金额",
          width: "180",
          prop: "refund_amount",
          type: "text"
        },
        {
          label: "退款时间",
          width: "180",
          prop: "created_at",
          type: "text"
        },
        {
          label: "淘宝退款状态",
          width: "180",
          prop: "taobao_refund_status",
          type: "text"
        },
        {
          label: "退款账号",
          width: "180",
          prop: "refund_account",
          type: "text"
        },
        {
          label: "退款方式",
          width: "180",
          prop: "refund_payment_methods_id",
          type: "text"
        },
        {
          label: "开户银行",
          width: "180",
          prop: "bank",
          type: "text"
        },
        {
          label: "开户地址",
          width: "180",
          prop: "bank_address",
          type: "text"
        },
        {
          label: "创建人",
          width: "180",
          prop: "creator_id",
          type: "text"
        },
        {
          label: "创建时间",
          width: "180",
          prop: "created_at",
          type: "text"
        },
        {
          label: "锁定人",
          width: "180",
          prop: "locker_id",
          type: "text"
        },
        {
          label: "锁定时间",
          width: "180",
          prop: "locked_at",
          type: "text"
        },
        {
          label: "业务审核人",
          width: "180",
          prop: "business_personnel_id",
          type: "text"
        },
        {
          label: "业务审核时间",
          width: "180",
          prop: "cs_audit_at",
          type: "text"
        },
        {
          label: "售后审核人",
          width: "180",
          prop: "after_sales_id",
          type: "text"
        },
        {
          label: "售后审核时间",
          width: "180",
          prop: "as_audit_at",
          type: "text"
        },
        {
          label: "财务审核人",
          width: "180",
          prop: "financial_id",
          type: "text"
        },
        {
          label: "财务审核时间",
          width: "180",
          prop: "f_audit_at",
          type: "text"
        },
        {
          label: "锁定",
          width: "100",
          prop: "refund_order_status",
          type: "checkbox"
        },
        {
          label: "业务审核",
          width: "100",
          prop: "refund_order_status",
          type: "checkbox"
        },
        {
          label: "售后审核",
          width: "100",
          prop: "refund_order_status",
          type: "checkbox"
        },
        {
          label: "财务审核",
          width: "100",
          prop: "refund_order_status",
          type: "checkbox"
        },
        {
          label: "是否启用",
          width: "100",
          prop: "status",
          type: "checkbox"
        }
      ],
      loading: true,
      checkboxInit: false,

      /**
       * 新增退款申请订单
       */
      addRefundOrderMask: false,
      moreForms: true,
      threeParts: true,
      showChgBtn: "",
      tableChgBtn: "", //上传图片结束后，旁边的修改按钮
      addRefundReasonCurIndex: "index0",
      updateRefundReasonCurIndex: "index0",
      addRefundReasonCurIndexNum: 0,
      updateRefundReasonCurIndexNum: 0,
      addRefundReasonUploadIndex: "upload0",
      updateRefundReasonUploadIndex: "upload0",

      refuseReasonKey: {
        img_url: "",
        refund_reason: "",
        refund_description: "",
        refund_amount: ""
      },
      detailProData: {},
      detailProHead: [
        {
          label: '商品编码',
          width: '160',
          prop: 'product',
          //inProp: 'commodity_code',
          type: 'text'
        },
        {
          label: '规格编码',
          width: '160',
          prop: 'productComponent',
          //inProp: 'component_code',
          type: 'text'
        },
        {
          label: '商品简称',
          width: '160',
          prop: 'product',
          //inProp: 'short_name',
          type: 'text'
        },
        {
          label: '规格名称',
          width: '160',
          prop: 'productComponent',
          //inProp: 'spec',
          type: 'text'
        },
        {
          label: '数量',
          width: '120',
          prop: 'quantity',
          type: 'number'
        },
        {
          label: '商品成本',
          width: '120',
          prop: 'productComponent',
          //inProp: 'cost',
          type: 'number'
        },
        {
          label: '实际售价',
          width: '120',
          prop: 'actual_price',
          type: 'number'
        },
        {
          label: '备注',
          width: '200',
          prop: 'remark',
          type: 'text'
        }
      ],
      options: regionDataPlus,
      refundReasonHead: [
        {
          label: "产品图片",
          width: "200",
          prop: "img_url",
          type: "img"
        },
        {
          label: "退款原因",
          width: "200",
          prop: "refund_reason",
          type: "text"
        },
        {
          label: "描述",
          width: "200",
          prop: "refund_description",
          type: "textarea"
        },
        {
          label: "金额",
          width: "200",
          prop: "refund_amount",
          type: "text"
        }
      ],

      /*修改*/
      updateRefundOrderMask: false,
      updateRefundOrderFormVal: {},
      updateActiveName: "0",
      updateRefundOrderData: [],
      updateReceiveInfo: {},
      updateExpenseData: [],
      updateProIds: [],

      /*删除单条*/
      showDel: false,
      delUrl: "",
      delId: "",

      /*删除批量*/
      ids: [],
      mergerIds: [],

      /**
       * 底部tab
       */
      logData: [],
      logTableHead: [
        //补件产品
        {
          label: '补件单号',
          width: '220',
          prop: 'resupply_order_no',
          type: 'text'
        },
        {
          label: '系统单号',
          width: '220',
          prop: 'system_order_no',
          type: 'text'
        },
        {
          label: '补件类别',
          width: '140',
          prop: 'resupplieCategory',
          inProp: 'name',
          type: 'text'
        },
        {
          label: '补件金额',
          width: '130',
          prop: 'resupply_money',
          type: 'number'
        },
        {
          label: '补件原因',
          width: '300',
          prop: 'resupply_reason',
          type: 'text'
        },
        {
          label: '补件责任方',
          width: '160',
          prop: 'resupplieResponsible',
          inProp: 'name',
          type: 'text'
        },
        {
          label: '店铺昵称',
          width: '130',
          prop: 'shop_nick',
          type: 'text'
        },
        {
          label: '买家昵称',
          width: '130',
          prop: 'member_nick',
          type: 'text'
        },
        {
          label: '店铺分组',
          width: '140',
          prop: 'shop_group',
          type: 'text'
        },
        {
          label: '买家姓名',
          width: '130',
          prop: 'member_name',
          type: 'text'
        },
        {
          label: '买家电话',
          width: '160',
          prop: 'member_phone',
          type: 'number'
        },
        {
          label: '物流公司',
          width: '140',
          prop: 'logistic',
          inProp: 'name',
          type: 'text'
        },
        {
          label: '预计运费',
          width: '130',
          prop: 'estimated_fee',
          type: 'number'
        },
        {
          label: '物流赔偿费用',
          width: '130',
          prop: 'compensate_fee',
          type: 'number'
        },
        {
          label: '运费类型',
          width: '140',
          prop: 'freightType',
          inProp: 'name',
          type: 'text'
        },
        {
          label: '供应商',
          width: '130',
          prop: 'supplier',
          inProp: 'name',
          type: 'text'
        },
        {
          label: '配送方式',
          width: '160',
          prop: 'distributionMethod',
          inProp: 'name',
          type: 'text'
        },
        {
          label: '送装费',
          width: '130',
          prop: 'load_fee',
          type: 'number'
        },
        {
          label: '承诺时间',
          width: '140',
          prop: 'promise_time',
          type: 'text'
        },
        {
          label: '补款方式',
          width: '140',
          prop: 'refundMethod',
          inProp: 'name',
          type: 'text'
        },
        {
          label: '补款账号',
          width: '160',
          prop: 'refund_account',
          type: 'text'
        },
        {
          label: '开户银行',
          width: '140',
          prop: 'bank',
          type: 'text'
        },
        {
          label: '省',
          width: '120',
          prop: 'supplier',
          inProp: 'province',
          type: 'text'
        },
        {
          label: '市',
          width: '120',
          prop: 'supplier',
          inProp: 'city',
          type: 'text'
        },
        {
          label: '区',
          width: '120',
          prop: 'supplier',
          inProp: 'district',
          type: 'text'
        },
        {
          label: '创建人',
          width: '140',
          prop: 'creator',
          type: 'text'
        },
        {
          label: '创建时间',
          width: '140',
          prop: 'created_at',
          type: 'text'
        },
        {
          label: '备注',
          width: '300',
          prop: 'remark',
          type: 'text'
        },
        {
          label: '标记名称',
          width: '140',
          prop: 'mark_name',
          type: 'text'
        },
        {
          label: '标记人',
          width: '140',
          prop: 'marker',
          type: 'text'
        },
        {
          label: '标记时间',
          width: '140',
          prop: 'mark_time',
          type: 'text'
        }
      ],
      refundReasonTabData: [],
      refundReasonTabHead: [
        {
          label: "退款商品图片",
          width: "150",
          prop: "img_url",
          type: "img"
        },
        {
          label: "退款原因",
          width: "150",
          prop: "refund_reason",
          type: "text"
        },
        {
          label: "描述",
          width: "150",
          prop: "refund_description",
          type: "textarea"
        },
        {
          label: "金额",
          width: "150",
          prop: "refund_amount",
          type: "text"
        }
      ]
    };
  },
  computed: {
    resData: {
      get: function() {
        return this.$store.state.responseData;
      },
      set: function() {}
    },
    urls: {
      get: function() {
        return this.$store.state.urls;
      },
      set: function() {}
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
    toggleShow() {
      this.filterBox = !this.filterBox;
    },
    test() {
      console.log(1);
    },
    /*获取数据*/
    outerHandleClick() {
      let index = this.activeName - 0;
      switch (index) {
        case 0:
          this.loading = true;
          this.fetchData();
          break;
        case 1:
          let data = this.orderListData[0];
          /*商品*/
          if (data) {
            this.orderDtlFormVal = {
              system_order_no: data.system_order_no,
              taobao_oid: data.taobao_oid,
              taobao_tid: data.taobao_tid,
              association_taobao_oid: data.association_taobao_oid,
              shop_name: data["shop"]["title"],
              business_personnel_name: data["businessPersonnel"]
                ? data["businessPersonnel"]["username"]
                : "",
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
            data["orderItems"]["data"].map(item => {
              item["name"] = item["combination"]["name"];
              item["productComp"] =
                item["combination"]["productComponents"]["data"];
            });
          }
          this.proDtlData = data["orderItems"]["data"];
          /*支付明细*/
          this.payDtlData = data["paymentDetails"]["data"];
          break;
      }
    },
    fetchData() {
      let index = this.orderListActiveName - 0;
      switch (index) {
        case 0:
          this.$fetch(this.urls.customerservicerefunds + "/searchuntreated", {
            include: "refundReason,refundReasonType"
          }).then(
            res => {
              this.loading = false;
              this.orderListData = res.data;
              this.$store.dispatch("refundreasontype", "/refundreasontype");
              let pg = res.meta.pagination;
              this.$store.dispatch("currentPage", pg.current_page);
              this.$store.commit("PER_PAGE", pg.per_page);
              this.$store.commit("PAGE_TOTAL", pg.total);
            },
            err => {
              if (err.response) {
                let arr = err.response.data.errors;
                let arr1 = [];
                for (let i in arr) {
                  arr1.push(arr[i]);
                }
                this.$message.error(arr1.join(","));
              }
            }
          );
          break;
        case 1:
          this.$fetch(this.urls.customerservicerefunds + "/searchtreated").then(
            res => {
              this.loading = false;
              this.treatedOrderListData = res.data;
              let pg = res.meta.pagination;
              this.$store.dispatch("currentPage", pg.current_page);
              this.$store.commit("PER_PAGE", pg.per_page);
              this.$store.commit("PAGE_TOTAL", pg.total);
            },
            err => {
              if (err.response) {
                let arr = err.response.data.errors;
                let arr1 = [];
                for (let i in arr) {
                  arr1.push(arr[i]);
                }
                this.$message.error(arr1.join(","));
              }
            }
          );
          break;
        case 2:
          this.$fetch(this.urls.customerservicerefunds, {
            order_status: "等通知发货",
            include:
              "shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems,businessPersonnel,locker,paymentDetails"
          }).then(
            res => {
              this.loading = false;
              this.orderListData = res.data;
              let pg = res.meta.pagination;
              this.$store.dispatch("currentPage", pg.current_page);
              this.$store.commit("PER_PAGE", pg.per_page);
              this.$store.commit("PAGE_TOTAL", pg.total);
            },
            err => {
              if (err.response) {
                let arr = err.response.data.errors;
                let arr1 = [];
                for (let i in arr) {
                  arr1.push(arr[i]);
                }
                this.$message.error(arr1.join(","));
              }
            }
          );
          break;
      }
    },
    leftHandleClick() {
      this.loading = true;
      this.fetchData();
    },
    rightHandleClick() {},
    orderListRowClick(row) {
      this.orderListTabCurRowId = row.id;
      this.OrderListCurRowData = row;
      this.detailProData = row;
      this.refundReasonTabData = row["refundReason"].data;
    },
    orderDbClick(row) {
      this.activeName = "1";
      let data = row;
      if (data) {
        this.orderDtlFormVal = {
          system_order_no: data.system_order_no,
          taobao_oid: data.taobao_oid,
          taobao_tid: data.taobao_tid,
          association_taobao_oid: data.association_taobao_oid,
          shop_name: data["shop"]["title"],
          business_personnel_name: data["businessPersonnel"]
            ? data["businessPersonnel"]["username"]
            : "",
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
        row["orderItems"]["data"].map(item => {
          item["name"] = item["combination"]["name"];
          item["productComp"] =
            item["combination"]["productComponents"]["data"];
        });
      }
      /*支付明细*/
      this.payDtlData = row["paymentDetails"]["data"];
    },
    proDtlRClick(row) {},
    /*新增*/
    addRefundOrder() {
      this.addRefundOrderMask = true;
      this.addIds = [];
      this.proData = [];
      this.addRefundReasonCurIndex = "index0";
    },
    addHandleClick() {},
    addProRCName({ row, rowIndex }) {
      row.index = rowIndex;
    },
    refundReasonRowClick(row) {
      this.addRefundReasonCurIndex = `index${row.index}`;
      this.addRefundReasonCurIndexNum = row.index;
      this.updateRefundReasonCurIndex = `index${row.index}`;
      this.updateRefundReasonCurIndexNum = row.index;
      if (
        !(this.updateRefundReasonUploadIndex == "") ||
        !(this.addRefundReasonUploadIndex == "")
      ) {
        this.tableChgBtn = `show${row.index}`;
      }
    },
    addDelPro(index) {
      this.proData.splice(index, 1);
    },
    addTabAddMoreRefundReason() {
      let refundReasonKey = {
        img_url: "",
        refund_reason: "",
        refund_description: "",
        refund_amount: ""
      };
      if (
        this.addRefundOrderFormVal.refund_reason.length > 0 &&
        !this.addRefundOrderFormVal.refund_reason[
          this.addRefundOrderFormVal.refund_reason.length - 1
        ].refund_reason
      ) {
        this.$message({
          message: "退款原因为空时不能添加新的退款原因",
          type: "info"
        });
      } else {
        this.addRefundOrderFormVal.refund_reason.push(refundReasonKey);
        this.addRefundReasonCurIndexNum =
          this.addRefundOrderFormVal.refund_reason.length - 1;
        this.addRefundReasonUploadIndex =
          "upload" + this.addRefundReasonCurIndexNum;
        this.addRefundReasonCurIndex =
          "index" + this.addRefundReasonCurIndexNum;
      }
    },
    updateTabAddMoreRefundReason() {
      this.updateRefundReasonCurIndexNum = this.updateRefundOrderFormVal.refund_reason.length;
      this.updateRefundReasonUploadIndex = `upload${this
        .updateRefundReasonCurIndexNum}`;
      let refundReasonKey = {
        img_url: "",
        refund_reason: "",
        refund_description: "",
        refund_amount: ""
      };
      if (
        this.updateRefundOrderFormVal.refund_reason.length > 0 &&
        !this.updateRefundOrderFormVal.refund_reason[
          this.updateRefundOrderFormVal.refund_reason.length - 1
        ].refund_reason
      ) {
        this.$message({
          message: "退款原因为空时不能添加新的退款原因",
          type: "info"
        });
      } else {
        this.updateRefundOrderFormVal.refund_reason.push(refundReasonKey);
        this.updateRefundReasonCurIndexNum =
          this.updateRefundOrderFormVal.refund_reason.length - 1;
        this.updateRefundReasonUploadIndex =
          "upload" + this.updateRefundReasonCurIndexNum;
        this.updateRefundReasonCurIndex =
          "index" + this.updateRefundReasonCurIndexNum;
      }
    },
    addRefundOrderConfirm() {
      this.$post(
        this.urls.customerservicerefunds,
        this.addRefundOrderFormVal
      ).then(
        () => {
          this.addRefundOrderMask = false;
          this.resetAddInfo();
          this.refresh();
          this.$message({
            message: "添加成功",
            type: "success"
          });
        },
        err => {
          if (err.response) {
            this.showDel = false;
            let arr = err.response.data.errors;
            let arr1 = [];
            for (let i in arr) {
              arr1.push(arr[i]);
            }
            let str = arr1.join(",");
            this.$message.error(str);
          }
        }
      );
    },
    addRefundReasonCancel() {
      this.addRefundOrderMask = false;
      this.$message({
        message: "取消新增订单明细",
        type: "success"
      });
    },
    formChg() {
      let formVal;
      if (this.addRefundOrderMask) {
        formVal = this.updateRefundOrderFormVal;
      } else {
        formVal = this.updateRefundOrderFormVal;
      }
      formVal["total_distribution_fee"] =
        formVal["deliver_goods_fee"] -
        0 +
        (formVal["move_upstairs_fee"] - 0) +
        (formVal["installation_fee"] - 0);
    },
    beforeAddUploadRefundReasonImg(file) {
      this.tableChgBtn = "";
      this.judgeFm(file);
      let formData = new FormData();
      formData.append("image", file);
      axios
        .post(this.urls.uploadimages, formData)
        .then(res => {
          let imageInfo = res.data.meta;
          if (imageInfo.status_code == 201) {
            this.addRefundReasonUploadIndex = "";
            //显示图片旁边的修改按钮
            this.tableChgBtn = "show" + this.addRefundReasonCurIndexNum;
            //将上传图片后的地址赋值给变量
            this.addRefundOrderFormVal.refund_reason[
              this.addRefundReasonCurIndexNum
            ].img_url =
              res.data.path;
          }
        })
        .catch(err => {});
    },
    beforeUpdateUploadRefundReasonImg(file) {
      this.tableChgBtn = "";
      this.judgeFm(file);
      let formData = new FormData();
      formData.append("image", file);
      axios
        .post(this.urls.uploadimages, formData)
        .then(res => {
          let imageInfo = res.data.meta;
          if (imageInfo.status_code == 201) {
            this.updateRefundReasonUploadIndex = "";
            this.tableChgBtn = "show" + this.updateRefundReasonCurIndexNum;
            this.updateRefundOrderFormVal.refund_reason[
              this.updateRefundReasonCurIndexNum
            ].img_url =
              res.data.path;
          }
        })
        .catch(err => {});
    },
    judgeFm(file) {
      const isJPG = file.type === "image/jpeg";
      const isGIF = file.type === "image/gif";
      const isPNG = file.type === "image/png";

      if (!isJPG && !isGIF && !isPNG) {
        this.$message.error("上传图片必须是JPG/GIF/PNG 格式!");
      }
    },
    beforeAddUpload(file) {
      this.showChgBtn = false;
      this.judgeFm(file);
      let formData = new FormData();
      formData.append("image", file);
      axios
        .post(this.urls.uploadimages, formData)
        .then(res => {
          let imageInfo = res.data.meta;
          if (imageInfo.status_code == 201) {
            this.showChgBtn = true;
            this.addRefundOrderFormVal.refund_reason[
              this.addRefundReasonCurIndexNum
            ].img_url =
              res.data.path;
          }
        })
        .catch(err => {});
    },
    beforeUpdateUpload(file) {
      this.showChgBtn = false;
      this.judgeFm(file);
      let formData = new FormData();
      formData.append("image", file);
      axios
        .post(this.urls.uploadimages, formData)
        .then(res => {
          let imageInfo = res.data.meta;
          if (imageInfo.status_code == 201) {
            this.showChgBtn = true;
            this.updateRefundOrderFormVal.refund_reason[
              this.updateRefundReasonCurIndexNum
            ].img_url =
              res.data.path;
          }
        })
        .catch(err => {});
    },
    /*删除单条*/
    delSingle(row, e) {
      this.showDel = true;
      $(".el-popper").css({ left: e.x - 100 + "px", top: e.y - 125 + "px" });
      this.delId = row.id;
      this.delUrl = this.urls.customerservicerefunds;
    },
    cancelD() {
      this.showDel = false;
      this.$message({
        message: "取消删除",
        type: "info"
      });
    },
    confirmD(url, id) {
      this.$del(url + "/" + id).then(
        () => {
          this.showDel = false;
          this.refresh();
          this.$message({
            message: "删除成功",
            type: "success"
          });
        },
        err => {
          if (err.response) {
            this.showDel = false;
            let arr = err.response.data.errors;
            let arr1 = [];
            for (let i in arr) {
              arr1.push(arr[i]);
            }
            let str = arr1.join(",");
            this.$message.error(str);
          }
        }
      );
    },
    /*批量删除*/
    handleSelectionChange(val) {
      console.log(val);
      /*拿到id集合*/
      let delArr = [];
      val.forEach(selectedItem => {
        delArr.push(selectedItem.id);
      });
      this.ids = delArr.join(",");
      /*拿到当前id*/
      this.checkboxId = val.length > 0 ? val[val.length - 1].id : "";
      this.OrderListCurRowData = val.length > 0 ? val[val.length - 1] : "";
      this.mergerIds = val;
    },
    delBatch() {
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
        })
          .then(() => {
            this.$del(this.urls.customerservicerefunds, { ids: this.ids }).then(
              () => {
                this.refresh();
                this.$message({
                  message: "删除成功",
                  type: "success"
                });
              },
              err => {
                if (err.response) {
                  let arr = err.response.data.errors;
                  let arr1 = [];
                  for (let i in arr) {
                    arr1.push(arr[i]);
                  }
                  let str = arr1.join(",");
                  this.$message.error(str);
                }
              }
            );
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消删除"
            });
          });
      }
    },
    resetAddInfo() {
      Object.assign(
        this.$data.addRefundOrderFormVal,
        this.$options.data().addRefundOrderFormVal
      );
      this.addRefundReasonCurIndex = "index0";
      this.updateRefundReasonCurIndex = "index0";
      this.addRefundReasonCurIndexNum = 0;
      this.updateRefundReasonCurIndexNum = 0;
      this.addRefundReasonUploadIndex = "upload0";
      this.updateRefundReasonUploadIndex = "upload0";
    },
    /*页码*/
    handlePagChg(page) {
      this.$fetch(
        this.urls.customerservicerefunds + "?page=" + page
      ).then(res => {
        if (this.orderListActiveName == "0") {
          this.orderListData = res.data;
        } else {
          this.treatedOrderListData = res.data;
        }
      });
    },
    refresh() {
      this.loading = true;
      this.fetchData();
    },
    /*锁定*/
    lockOrder() {
      let id = this.checkboxId ? this.checkboxId : this.orderListTabCurRowId;
      this.$put(
        this.urls.customerservicerefunds + "/" + id + "/lockorunlock"
      ).then(
        () => {
          this.refresh();
          this.$message({
            message: "锁定成功",
            type: "success"
          });
        },
        err => {
          if (err.response) {
            let arr = err.response.data.errors;
            let arr1 = [];
            for (let i in arr) {
              arr1.push(arr[i]);
            }
            let str = arr1.join(",");
            this.$message.error(str);
          }
        }
      );
    },
    /*解锁*/
    debLock() {
      let id = this.checkboxId ? this.checkboxId : this.orderListTabCurRowId;
      this.$put(
        this.urls.customerservicerefunds + "/" + id + "/lockorunlock"
      ).then(
        () => {
          this.newOpt[1].nClick = true;
          this.newOpt[2].nClick = true;
          this.newOpt[3].nClick = false;
          this.newOpt[4].nClick = true;
          this.newOpt[5].nClick = true;
          this.newOpt[6].nClick = true;
          this.newOpt[8].nClick = true;
          this.newOpt[9].nClick = true;
          this.newOpt[14].nClick = true;
          this.refresh();
          this.$message({
            message: "解锁成功",
            type: "success"
          });
        },
        err => {
          if (err.response) {
            let arr = err.response.data.errors;
            let arr1 = [];
            for (let i in arr) {
              arr1.push(arr[i]);
            }
            let str = arr1.join(",");
            this.$message.error(str);
          }
        }
      );
    },
    /*修改*/
    updateData() {
      this.proIds = [];
      this.updateProIds = [];
      this.updateRefundOrderFormVal = {};
      this.updateRefundOrderData = [];
      this.updateRefundOrderMask = true;
      this.updateRefundReasonCurIndex = "index0";
      this.updateRefundReasonUploadIndex = "";
      let id = this.checkboxId ? this.checkboxId : this.orderListTabCurRowId;
      this.$fetch(this.urls.customerservicerefunds + "/" + id, {
        include: "refundReason"
      }).then(
        res => {
          this.updateRefundOrderFormVal = res;
          this.updateRefundOrderFormVal.status = res.status;
          this.updateRefundOrderFormVal.refund_reason = res.refundReason.data;
        },
        err => {
          if (err.response) {
            let arr = err.response.data.errors;
            let arr1 = [];
            for (let i in arr) {
              arr1.push(arr[i]);
            }
            let str = arr1.join(",");
            this.$message.error(str);
          }
        }
      );
    },
    updateCustomerConfirm() {
      let id = this.checkboxId ? this.checkboxId : this.orderListTabCurRowId;
      this.$patch(
        this.urls.customerservicerefunds + "/" + id,
        this.updateRefundOrderFormVal
      ).then(
        () => {
          this.updateRefundOrderMask = false;
          this.refresh();
          this.$message({
            message: "修改成功",
            type: "success"
          });
        },
        err => {
          if (err.response) {
            this.showDel = false;
            let arr = err.response.data.errors;
            let arr1 = [];
            for (let i in arr) {
              arr1.push(arr[i]);
            }
            let str = arr1.join(",");
            this.$message.error(str);
          }
        }
      );
    },
    updateCustomerCancel() {
      this.updateRefundOrderMask = false;
      this.$message({
        message: "取消修改订单明细",
        type: "success"
      });
    },
    /*审核*/
    handleAudit() {
      let id = this.checkboxId ? this.checkboxId : this.orderListTabCurRowId;
      this.$put(this.urls.customerservicerefunds + "/" + id + "/audit").then(
        () => {
          this.refresh();
          this.$message({
            message: "审核成功",
            type: "success"
          });
        },
        err => {
          if (err.response) {
            let arr = err.response.data.errors;
            let arr1 = [];
            for (let i in arr) {
              arr1.push(arr[i]);
            }
            let str = arr1.join(",");
            this.$message.error(str);
          }
        }
      );
    },
    handleUnAudit() {
      let id = this.checkboxId ? this.checkboxId : this.orderListTabCurRowId;
      this.$put(this.urls.customerservicerefunds + "/" + id + "/unaudit").then(
        () => {
          this.refresh();
          this.$message({
            message: "退审成功",
            type: "success"
          });
        },
        err => {
          if (err.response) {
            let arr = err.response.data.errors;
            let arr1 = [];
            for (let i in arr) {
              arr1.push(arr[i]);
            }
            let str = arr1.join(",");
            this.$message.error(str);
          }
        }
      );
    },
    resets() {
      this.searchBox = {};
    }
  },
  mounted() {
    this.fetchData();
    this.$store.dispatch("setOpt", this.newOpt);
    let that = this;
    $(window).resize(() => {
      that.$store.dispatch("setOpt", that.newOpt);
    });
  }
};
</script>