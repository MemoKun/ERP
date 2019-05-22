<template>
  <div>
    <div>
      <div class="searchBox">
        <span>
          <label>会员昵称</label>
          <el-input v-model="searchBox.member_nick" clearable></el-input>
        </span>
        <span>
          <label>订单编号</label>
          <el-input v-model="searchBox.system_order_no" clearable></el-input>
        </span>
        <span>
          <label>收货人</label>
          <el-input v-model="searchBox.receiver_name" clearable></el-input>
        </span>
        <span>
          <label>收货手机</label>
          <el-input v-model="searchBox.receiver_mobile" clearable></el-input>
        </span>
      </div>
      <div class="searchBox">
        <span>
          <label>收货地址</label>
          <el-input v-model="searchBox.receiver_address" clearable></el-input>
        </span>
        <div style="text-align: right">
          <el-button type="primary" @click="searchData">筛选</el-button>
          <el-button @click="resets">重置</el-button>
        </div>
      </div>
    </div>

    <!--显示列表-->
    <el-tabs v-model="activeName" @tab-click="handleTabsClick">
      <el-tab-pane label="订单列表" name="0">
        <el-table :data="orderListData" @selection-change="handleSelectionChange" v-loading="loading" @row-click="orderRClick">
          <el-table-column type="selection" width="95" align="center" :checked="checkboxInit"></el-table-column>
          <el-table-column v-for="item in orderListHead" :label="item.label" :width="item.width" :key="item.label"
            align="center">
            <template slot-scope="scope">
              <span v-if="item.type=='checkbox'">
                <span v-if="item.inProp">
                  <el-checkbox v-model="scope.row[item.prop][item.inProp]" disabled></el-checkbox>
                </span>
                <span v-else>
                  <el-checkbox v-model="scope.row[item.prop]" disabled></el-checkbox>
                </span>
              </span>
              <span v-else>
                <span v-if="scope.row[item.prop]">{{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}</span>
              </span>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
    <!--页码-->
    <Pagination :page-url="this.urls.customerservicerefunds" @handlePagChg="handlePagChg" v-if="activeName=='0'"></Pagination>

    <!--底部Tab-->
    <el-tabs v-model="bottomActiveName" @tab-click="bottomTabsClick">
      <el-tab-pane label="产品明细" name="0">
        <el-table :data="detailProData" v-loading="loading">
          <el-table-column v-for="item in detailProHead" :label="item.label" align="center" :width="item.width" :key="item.label">
            <template slot-scope="scope">
              <span v-if="item.inProp">
                <span v-if="item.nmProp">
                  {{scope.row[item.prop][item.inProp]['data'][0][item.nmProp]}}
                </span>
                <span v-else>
                  {{scope.row[item.prop][item.inProp]}}
                </span>
              </span>
              <span v-else>
                {{scope.row[item.prop]}}
              </span>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="补件明细" name="1">
        <el-table :data="resupplyData" v-loading="loading">
          <el-table-column v-for="item in resupplyHead" :label="item.label" align="center" :width="item.width" :key="item.label">
            <template slot-scope="scope">
              <span v-if="item.type=='checkbox'">
                <span v-if="item.inProp">
                  <el-checkbox v-model="scope.row[item.prop][item.inProp]" disabled></el-checkbox>
                </span>
                <span v-else>
                  <el-checkbox v-model="scope.row[item.prop]" disabled></el-checkbox>
                </span>
              </span>
              <span v-else>
                <span v-if="scope.row[item.prop]">{{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}</span>
              </span>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>

  </div>
</template>
<script>
import FileSaver from 'file-saver';
import XLSX from 'xlsx';
import axios from 'axios';
import qs from 'qs';
import { mapGetters } from 'vuex';
import {
  regionDataPlus,
  CodeToText,
  TextToCode
} from 'element-china-area-data';
export default {
  data() {
    let validateNum = (rule, value, callback) => {
      if (value != parseFloat(value)) {
        callback(new Error('只能是数字'));
      } else if (value <= 0) {
        callback(new Error('不能为负数'));
      } else {
        callback();
      }
    };
    let validateTel = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('手机号不能为空'));
      } else {
        const reg = /^1[3|4|5|7|8|9][0-9]\d{8}$/;
        if (reg.test(value)) {
          callback();
        } else {
          return callback(new Error('请输入正确的手机号'));
        }
      }
    };
    let validateUrl = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('网址不能为空'));
      } else {
        // const reg = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
        const reg = /^((ht|f)tps?):\/\/([\w\-]+(\.[\w\-]+)*\/)*[\w\-]+(\.[\w\-]+)*\/?(\?([\w\-\.,@?^=%&:\/~\+#]*)+)?/;
        if (reg.test(value)) {
          callback();
        } else {
          return callback(new Error('请输入正确的网址'));
        }
      }
    };
    return {
      newOpt: [
        {
          cnt: '刷新',
          icon: 'bf-refresh',
          ent: this.refresh
        }
      ],
      options: regionDataPlus,
      /**SearchBox
       * 搜索框相关参数
       */
      filterBox: false,
      searchBox: {
        member_nick: '',
        system_order_no: '',
        receiver_name: '',
        receiver_mobile: '',
        receiver_address: ''
      },

      /**订单列表Tab
       * 订单列表的相关参数
       * */
      activeName: '0',
      bottomActiveName: '0',
      orderRow: {},
      orderListTabCurRowId: '',
      //订单列表
      orderListData: [],
      orderListHead: [
        {
          label: '系统单号',
          width: '200',
          prop: 'system_order_no',
          type: 'text'
        },
        {
          label: '淘宝单号',
          width: '120',
          prop: 'taobao_oid',
          type: 'text'
        },
        {
          label: '店铺名称',
          width: '120',
          prop: 'shop',
          inProp: 'nick',
          type: 'text'
        },
        {
          label: '买家昵称',
          width: '120',
          prop: 'member_nick',
          type: 'text'
        },
        {
          label: '收货人',
          width: '120',
          prop: 'receiver_name',
          type: 'text'
        },
        {
          label: '收货人手机',
          width: '180',
          prop: 'receiver_mobile',
          type: 'text'
        },
        {
          label: '收货人省',
          width: '180',
          prop: 'receiver_state',
          type: 'text'
        },
        {
          label: '收货人市',
          width: '180',
          prop: 'receiver_city',
          type: 'text'
        },
        {
          label: '收货人区',
          width: '180',
          prop: 'receiver_district',
          type: 'text'
        },
        {
          label: '收货地址',
          width: '180',
          prop: 'receiver_address',
          type: 'text'
        },
        {
          label: '买家留言',
          width: '180',
          prop: 'buyer_message',
          type: 'text'
        },
        {
          label: '卖家备注',
          width: '180',
          prop: 'seller_remark',
          type: 'text'
        },
        {
          label: '物流备注',
          width: '180',
          prop: 'logistics_remark',
          type: 'text'
        },
        /* {
          label: '客审',
          width: '100',
          prop: 'refund_order_status',
          type: 'checkbox'
        },
        {
          label: '货审',
          width: '100',
          prop: 'refund_order_status',
          type: 'checkbox'
        },
        {
          label: '财审',
          width: '100',
          prop: 'refund_order_status',
          type: 'checkbox'
        },
        {
          label: '打单',
          width: '100',
          prop: 'refund_order_status',
          type: 'checkbox'
        },*/
        {
          label: '作废',
          width: '100',
          prop: 'status',
          type: 'checkbox'
        }
      ],
      loading: true,
      checkboxInit: false,

      //产品明细(数据来自orderitem、product、productcomponent)
      detailProData: [],
      detailProHead: [
        {
          //product
          label: '商品编码',
          width: '160',
          prop: 'product',
          inProp: 'commodity_code',
          type: 'text'
        },
        {
          //productComponents
          label: '规格编码',
          width: '160',
          prop: 'product',
          inProp: 'productComponents',
          nmProp: 'component_code',
          type: 'text'
        },
        {
          //product
          label: '商品简称',
          width: '160',
          prop: 'product',
          inProp: 'short_name',
          type: 'text'
        },
        {
          //productComponents
          label: '规格名称',
          width: '160',
          prop: 'product',
          inProp: 'productComponents',
          nmProp: 'spec',
          type: 'text'
        },
        {
          //orderitem
          label: '数量',
          width: '120',
          prop: 'quantity',
          type: 'number'
        },
        {
          //productComponents
          label: '包件数量',
          width: '120',
          prop: 'product',
          inProp: 'productComponents',
          nmProp: 'package_quantity',
          type: 'number'
        },
        {
          //productComponents
          label: '成本',
          width: '120',
          prop: 'product',
          inProp: 'productComponents',
          nmProp: 'cost',
          type: 'number'
        },
        {
          //productComponents
          label: '淘宝售价',
          width: '120',
          prop: 'product',
          inProp: 'productComponents',
          nmProp: 'tb_price',
          type: 'number'
        },
        {
          //productComponents
          label: '标准售价',
          width: '120',
          prop: 'product',
          inProp: 'productComponents',
          nmProp: 'lowest_price',
          type: 'number'
        },
        {
          //productComponents
          label: '售价',
          width: '120',
          prop: 'product',
          inProp: 'productComponents',
          nmProp: 'price',
          type: 'number'
        }
      ],
      options: regionDataPlus,
      //补件产品(数据来自resupplieOrder，resuppliedCategory等)
      resupplyData: [],
      resupplyHead: [
        {
          label: '补件单号',
          width: '220',
          prop: 'resupply_order_no',
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
          label: '收货人',
          width: '300',
          prop:'order',
          inProp: 'receiver_name',
          type: 'text'
        },
        {
          label: '收货人电话',
          width: '300',
          prop:'order',
          inProp: 'receiver_mobile',
          type: 'text'
        },
        {
          label: '收货人地址',
          width: '300',
          prop:'order',
          inProp: 'receiver_address',
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
          label: '备注',
          width: '300',
          prop: 'remark',
          type: 'text'
        },
        {
          label: '创建人',
          width: '140',
          prop: 'creator',
          type: 'text'
        },
        {
          label: '提交人',
          width: '140',
          prop: 'submitter',
          type: 'text'
        },
        {
          label: '审核人',
          width: '140',
          prop: 'reviewer',
          type: 'text'
        },
        {
          label: '创建时间',
          width: '140',
          prop: 'created_at',
          type: 'text'
        },
        {
          label: '提交时间',
          width: '140',
          prop: 'submit_time',
          type: 'text'
        },
        {
          label: '审核时间',
          width: '140',
          prop: 'review_time',
          type: 'text'
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
    handleTabsClick() {
      let index = this.activeName - 0;
    },

    bottomTabsClick() {},
    fetchData() {
      this.$fetch(this.urls.customerservicedepts+'/logisticsQuery', {
        member_nick:this.searchBox.member_nick,
        system_order_no:this.searchBox.system_order_no,
        receiver_name:this.searchBox.receiver_name,
        receiver_mobile:this.searchBox.receiver_mobile,
        receiver_address:this.searchBox.receiver_address,
        include:
          'shop,orderItems.product,orderItems.product.productComponents,resupplieOrder.order,resupplieOrder.refundMethod,resupplieOrder.resupplieCategory,resupplieOrder.logistic'
      }).then(
        res => {
          this.loading = false;
          this.orderListData = res.data;
          this.detailProData = res.data[0]
            ? res.data[0]['orderItems'].data
            : [];
          this.resupplyData = res.data[0]
            ? res.data[0]['resupplieOrder'].data
            : [];
          let pg = res.meta.pagination;
          this.$store.dispatch('currentPage', pg.current_page);
          this.$store.commit('PER_PAGE', pg.per_page);
          this.$store.commit('PAGE_TOTAL', pg.total);
        },
        err => {
          if (err.response) {
            let arr = err.response.data.errors;
            let arr1 = [];
            for (let i in arr) {
              arr1.push(arr[i]);
            }
            this.$message.error(arr1.join(','));
          }
        }
      );
    },
    orderRClick(row) {
      this.detailProData=row['orderItems'].data;
      this.resupplyData=row['resupplieOrder'].data;
      this.orderRow=row;
    },
    /*批量删除*/
    handleSelectionChange(val) {
      console.log(val);
      /*拿到id集合*/
      let delArr = [];
      val.forEach(selectedItem => {
        delArr.push(selectedItem.id);
      });
      this.ids = delArr.join(',');
      /*拿到当前id*/
      this.checkboxId = val.length > 0 ? val[val.length - 1].id : '';
      this.OrderListCurRowData = val.length > 0 ? val[val.length - 1] : '';
      this.mergerIds = val;
    },
    /*页码*/
    handlePagChg(page) {
      this.$fetch(this.urls.customerservicerefunds + '?page=' + page).then(
        res => {
          if (this.orderListActiveName == '0') {
            this.orderListData = res.data;
          } else {
            this.treatedOrderListData = res.data;
          }
        }
      );
    },
    refresh() {
      this.loading = true;
      this.fetchData();
    },
    //重置筛选条件
    resets() {
      this.searchBox = {};
    },
    //筛选
    searchData() {
      this.loading=true;
      this.fetchData();
      this.resets();
    }
  },
  mounted() {
    this.fetchData();
    this.$store.dispatch('setOpt', this.newOpt);
    let that = this;
    $(window).resize(() => {
      that.$store.dispatch('setOpt', that.newOpt);
    });
  }
};
</script>