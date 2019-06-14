<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="outerHandleClick">
      <el-tab-pane label="订单" name="0">
        <div>
          <div class="searchBox">
            <span>
              <label>订单编号</label>
              <el-input v-model="searchBox.system_order_no" clearable></el-input>
            </span>
            <span>
              <label>收货人</label>
              <el-input v-model="searchBox.receiver_name" clearable></el-input>
            </span>
            <span>
              <label>物流公司</label>
              <el-select v-model="searchBox.logistics_id" clearable placeholder="请选择">
                <span v-for="list in resData['logistics']" :key="list.id">
                  <el-option :label="list.name?list.name:list.nick" :value="list.id"></el-option>
                </span>
              </el-select>
            </span>
            <span>
              <label>供应商</label>
              <el-select v-model="searchBox.supplier_id" clearable clearable placeholder="请选择">
                <el-option v-for="item in searchBox.orderCompany" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </span>
          </div>
          <div class="searchBox">
            <span>
              <label>结算日期</label>
              <el-date-picker v-model="searchBox.checked_at" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
              </el-date-picker>
            </span>
            <span>
              <label>发货时间</label>
              <el-date-picker v-model="searchBox.stockout_at" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
              </el-date-picker>
            </span>

            <span>
              <label>客审日期</label>
              <el-date-picker v-model="searchBox.audit_at" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
              </el-date-picker>
            </span>

          </div>
          <div style="text-align: right">
            <el-button type="primary">筛选</el-button>
            <el-button @click="resets">重置</el-button>
          </div>
        </div>

        <!--显示列表-未处理-->
        <el-tabs v-model="leftTopActiveName" @tab-click="leftHandleClick" style="height: 400px;">
          <el-tab-pane label="运费未结算" name="0">
            <el-table :data="orderListData" fit @selection-change="handleSelectionChange" v-loading="loading" height="350" @row-click="orderListRClick" @row-dblclick="orderDbClick">
              <el-table-column type="selection" width="95" align="center" :checked="checkboxInit">
              </el-table-column>
              <el-table-column v-for="item in logisticsFeeHead" :label="item.label" align="center" :width="item.width" :key="item.label">
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
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="运费已结算" name="1">
            <el-table :data="orderListData" fit @selection-change="handleSelectionChange" v-loading="loading" height="350" @row-click="orderListRClick" @row-dblclick="orderDbClick">
              <el-table-column type="selection" width="95" align="center" :checked="checkboxInit">
              </el-table-column>
              <el-table-column v-for="item in logisticsFeeHead" :label="item.label" align="center" :width="item.width" :key="item.label">
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
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="货款未结算" name="2">
            <el-table :data="orderListData" fit @selection-change="handleSelectionChange" v-loading="loading" height="350" @row-click="orderListRClick" @row-dblclick="orderDbClick">
              <el-table-column type="selection" width="95" align="center" :checked="checkboxInit">
              </el-table-column>
              <el-table-column v-for="item in goodsFeeHead" :label="item.label" align="center" :width="item.width" :key="item.label">
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
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="货款已结算" name="3">
            <el-table :data="orderListData" fit @selection-change="handleSelectionChange" v-loading="loading" height="350" @row-click="orderListRClick" @row-dblclick="orderDbClick">
              <el-table-column type="selection" width="95" align="center" :checked="checkboxInit">
              </el-table-column>
              <el-table-column v-for="item in goodsFeeHead" :label="item.label" align="center" :width="item.width" :key="item.label">
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
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="配送未结算" name="4">
            <el-table :data="orderListData" fit @selection-change="handleSelectionChange" v-loading="loading" height="350" @row-click="orderListRClick" @row-dblclick="orderDbClick">
              <el-table-column type="selection" width="95" align="center" :checked="checkboxInit">
              </el-table-column>
              <el-table-column v-for="item in distributionFeeHead" :label="item.label" align="center" :width="item.width" :key="item.label">
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
                  <el-button size="mini" type="danger" @click="delSingle(scope.row,$event)">删除
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="配送已结算" name="5">
            <el-table :data="orderListData" fit @selection-change="handleSelectionChange" v-loading="loading" height="350" @row-click="orderListRClick" @row-dblclick="orderDbClick">
              <el-table-column type="selection" width="95" align="center" :checked="checkboxInit">
              </el-table-column>
              <el-table-column v-for="item in distributionFeeHead" :label="item.label" align="center" :width="item.width" :key="item.label">
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
                  <el-button size="mini" type="danger" @click="delSingle(scope.row,$event)">删除
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>

    </el-tabs>
  </div>
</template>
<script>
import {
  regionDataPlus,
  CodeToText,
  TextToCode
} from "element-china-area-data";

export default {
  data() {
    return {
      newOpt: [
        {
          cnt: "修改",
          icon: "bf-change",
          ent: this.test,
          nClick: true
        },
        {
          cnt: "退审",
          icon: "bf-audit",
          ent: this.handleUnAudit,
          nClick: true
        },
        {
          cnt: "结算",
          icon: "bf-finSettle",
          ent: this.handleAudit,
          nClick: true
        },
        {
          cnt: "导出",
          icon: "bf-out",
          ent: this.test,
          nClick: true
        },
        {
          cnt: "刷新",
          icon: "bf-refresh",
          ent: this.refresh,
          nClick: false
        }
      ],
      filterBox: false,
      searchBox: {
        system_order_no: "",
        receiver_name: "",
        logistics_id: "",
        shops_id: "",
        checked_at: ["2018-12-31T16:00:00.000Z", "2099-12-31T16:00:00.000Z"],
        stockout_at: ["2018-12-31T16:00:00.000Z", "2099-12-31T16:00:00.000Z"],
        audit_at: ["2018-12-31T16:00:00.000Z", "2099-12-31T16:00:00.000Z"]
      },
      /*获取数据*/
      activeName: "0",
      leftTopActiveName: "0",
      rightActiveName: "0",
      orderListData: [],
      logisticsFeeHead: [
        //订单表头标签
        {
          label: "系统订单号",
          width: "220",
          prop: "system_order_no",
          type: "text"
        },
        {
          label: "淘宝单号",
          width: "220",
          prop: "taobao_oid",
          type: "text"
        },
        {
          label: "买家昵称",
          width: "130",
          prop: "member_nick",
          type: "text"
        },
        {
          label: "收货人",
          width: "130",
          prop: "receiver_name",
          type: "text"
        },
        {
          label: "实际运费",
          width: "130",
          prop: "actual_fright",
          type: "text"
        },
        {
          label: "实际运费类型",
          width: "130",
          prop: "fright_types_id",
          type: "text"
        },
        {
          label: "省",
          width: "120",
          prop: "receiver_state",
          type: "text"
        },
        {
          label: "市",
          width: "120",
          prop: "receiver_city",
          type: "text"
        },
        {
          label: "区",
          width: "120",
          prop: "receiver_district",
          type: "text"
        },
        {
          label: "详细地址",
          width: "180",
          prop: "receiver_address",
          type: "text"
        },
        {
          label: "实发物流",
          width: "140",
          prop: "logistics_id",
          type: "text"
        },
        {
          label: "运费结算备注",
          width: "140",
          prop: "logistics_check_remark",
          type: "text"
        },
        {
          label: "运费结算时间",
          width: "140",
          prop: "logistics_check_at",
          type: "text"
        },
        {
          label: "发货时间",
          width: "140",
          prop: "stockout_at",
          type: "text"
        }
      ],
      goodsFeeHead: [
        //订单表头标签
        {
          label: "系统订单号",
          width: "220",
          prop: "system_order_no",
          type: "text"
        },
        {
          label: "淘宝单号",
          width: "220",
          prop: "taobao_oid",
          type: "text"
        },
        {
          label: "买家昵称",
          width: "130",
          prop: "member_nick",
          type: "text"
        },
        {
          label: "物流公司",
          width: "140",
          prop: "logistic",
          inProp: "name",
          type: "text"
        },
        {
          label: "收货人",
          width: "130",
          prop: "receiver_name",
          type: "text"
        },
        {
          label: "省",
          width: "120",
          prop: "receiver_state",
          type: "text"
        },
        {
          label: "市",
          width: "120",
          prop: "receiver_city",
          type: "text"
        },
        {
          label: "区",
          width: "120",
          prop: "receiver_district",
          type: "text"
        },
        {
          label: "收货地址",
          width: "180",
          prop: "receiver_address",
          type: "text"
        },
        {
          label: "发货仓库",
          width: "130",
          prop: "warehouses",
          inProp: "name",
          type: "text"
        },
        {
          label: "支付日期",
          width: "180",
          prop: "payment_date",
          type: "text"
        },
        {
          label: "服务车金额",
          width: "130",
          prop: "service_car_fee",
          type: "number"
        },
        {
          label: "门店收款方式",
          width: "130",
          prop: "paymentMethod",
          inProp: "name",
          type: "text"
        },
        {
          label: "门店订单金额",
          width: "140",
          prop: "deposit",
          type: "number"
        },
        {
          label: "发票快递费",
          width: "130",
          prop: "invoice_express_fee",
          type: "number"
        },
        {
          label: "需要发票",
          width: "90",
          prop: "is_invoice",
          type: "checkbox"
        },
        {
          label: "订单状态",
          width: "140",
          prop: "order_status",
          type: "text"
        },
        {
          label: "发票信息",
          width: "160",
          prop: "print_at",
          type: "text"
        },
        {
          label: "纳税识别号",
          width: "180",
          prop: "tax_number",
          type: "text"
        },
        {
          label: "买家留言",
          width: "150",
          prop: "buyer_message",
          type: "text"
        },
        {
          label: "客服备注",
          width: "150",
          prop: "customer_service_remark",
          type: "text"
        },
        {
          label: "卖家备注",
          width: "150",
          prop: "customer_service_remark",
          type: "text"
        },
      ],
      distributionFeeHead: [
        //订单表头标签
        {
          label: "系统订单号",
          width: "220",
          prop: "system_order_no",
          type: "text"
        },
        {
          label: "淘宝单号",
          width: "220",
          prop: "taobao_oid",
          type: "text"
        },
        {
          label: "店铺昵称",
          width: "150",
          prop: "shop",
          inProp: "title",
          type: "text"
        },
        {
          label: "买家昵称",
          width: "130",
          prop: "member_nick",
          type: "text"
        },
        {
          label: "收货人",
          width: "130",
          prop: "receiver_name",
          type: "text"
        },
        {
          label: "配送单号",
          width: "180",
          prop: "distribution_no",
          type: "text"
        },
        {
          label: "配送费",
          width: "130",
          prop: "total_distribution_fee",
          type: "number"
        },
        {
          label: "配送类型",
          width: "130",
          prop: "distributionType",
          inProp: "name",
          type: "text"
        },
        {
          label: "省",
          width: "120",
          prop: "receiver_state",
          type: "text"
        },
        {
          label: "市",
          width: "120",
          prop: "receiver_city",
          type: "text"
        },
        {
          label: "区",
          width: "120",
          prop: "receiver_district",
          type: "text"
        },
        {
          label: "详细地址",
          width: "180",
          prop: "receiver_address",
          type: "text"
        },
        {
          label: "客服备注",
          width: "150",
          prop: "customer_service_remark",
          type: "text"
        },
        {
          label: "实发物流",
          width: "140",
          prop: "logistics_id",
          type: "text"
        },
        {
          label: "配送结算备注",
          width: "140",
          prop: "distribution_check_remark",
          type: "text"
        },
        {
          label: "配送结算时间",
          width: "140",
          prop: "distribution_checked_at",
          type: "text"
        },
        {
          label: "发货时间",
          width: "180",
          prop: "stockout_at",
          type: "text"
        },
        {
          label: "客审时间",
          width: "150",
          prop: "audit_at",
          type: "text"
        }
      ],
      loading: true, //作用未知
      checkboxInit: false, //作用未知
      orderListIndex: "", //作用未知
      alreadyHandle: [],
      orderDtlFormVal: {},
      orderDtlFormHead: [
        {
          label: "系统单号",
          prop: "system_order_no",
          type: "text"
        },
        {
          label: "淘宝单号",
          prop: "taobao_oid",
          type: "text"
        },
        {
          label: "交易号",
          prop: "taobao_tid",
          type: "text"
        },
        {
          label: "单号关联",
          prop: "association_taobao_oid",
          type: "text"
        },
        {
          label: "所属店铺",
          prop: "shop_name",
          type: "text"
        },
        {
          label: "业务员",
          prop: "business_personnel_name",
          type: "text"
        },
        {
          label: "买家昵称",
          prop: "member_nick",
          type: "text"
        },
        {
          label: "收货人",
          prop: "receiver_name",
          type: "text"
        },
        {
          label: "手机",
          prop: "receiver_mobile",
          type: "text"
        },
        {
          label: "电话",
          prop: "receiver_phone",
          type: "text"
        },
        {
          label: "详细地址",
          prop: "receiver_address",
          type: "text"
        },
        {
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
        },
        {
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
        },
        {
          label: "承诺时间",
          prop: "promise_ship_time",
          type: "text"
        },
        {
          label: "物流公司",
          prop: "logistic_name",
          type: "text"
        },
        {
          label: "配送方式",
          prop: "distribution_method",
          type: "text"
        },
        {
          label: "配送信息",
          prop: "service_car_info",
          type: "text"
        },
        {
          label: "费用类型",
          prop: "deliver_goods_fee",
          type: "text"
        },
        {
          label: "配送商",
          prop: "distribution_name",
          type: "text"
        },
        {
          label: "配送电话",
          prop: "distribution_phone",
          type: "text"
        },
        {
          label: "配送类型",
          prop: "distributionType_name",
          type: "text"
        },
        {
          label: "配送总计",
          prop: "total_distribution_fee",
          type: "number"
        },
        {
          label: "客服备注",
          prop: "customer_service_remark",
          type: "textarea"
        },
        {
          label: "卖家备注",
          prop: "seller_remark",
          type: "textarea"
        },
        {
          label: "买家留言",
          prop: "buyer_message",
          type: "textarea"
        }
      ],
      proDtlData: [],
      curRowId: "",
      curRowData: {},
      orderDtlHead: [
        //新建订单的商品信息的表头
        [
          {
            label: "sku名称",
            width: "160",
            prop: "name",
            type: "text"
          },
          {
            label: "数量",
            width: "130",
            prop: "quantity",
            type: "number"
          },
          {
            label: "油漆",
            width: "120",
            prop: "paint",
            type: "text"
          },
          {
            label: "需要印刷",
            width: "120",
            prop: "is_printing",
            type: "checkbox"
          },
          {
            label: "总体积",
            width: "120",
            prop: "total_volume",
            type: "number"
          },
          {
            label: "印刷费用",
            width: "140",
            prop: "printing_fee",
            type: "number"
          },
          {
            label: "现货",
            width: "120",
            prop: "is_spot_goods",
            type: "checkbox"
          },
          {
            label: "单价(线下)",
            width: "150",
            prop: "under_line_univalent",
            type: "number"
          },
          {
            label: "优惠(线下)",
            width: "150",
            prop: "under_line_preferential",
            type: "number"
          }
        ],
        [
          {
            label: "支付金额",
            prop: "payment",
            type: "number"
          },
          {
            label: "支付方式",
            prop: "payment_methods_id",
            type: "select",
            stateVal: "paymentmethods"
          },
          {
            label: "交易号",
            prop: "taobao_tid",
            type: "text"
          },
          {
            label: "来源单号",
            prop: "taobao_oid",
            type: "text"
          }
        ],
        [],
        []
      ],
      payDtlData: [],
      /*新增*/
      addCustomerMask: false,
      moreForms: true,
      threeParts: true,
      addCustomerFormVal: {
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
      addCustomerFormRules: {
        //新建订单的要求格式
        shops_id: [{ required: true, message: "店铺必选", trigger: "blur" }],
        logistics_id: [{ required: true, message: " 物流必选", trigger: "blur" }],
        billing_way: [{ required: true, message: "计费方式必选", trigger: "blur" }],
        freight_types_id: [
          { required: true, message: "运费类型必选", trigger: "blur" }
        ],
        distributions_id: [
          { required: true, message: "配送方式必选", trigger: "blur" }
        ],
        take_delivery_goods_fee: [
          { required: true, message: "提货费用必填", trigger: "blur" }
        ],
        customer_types_id: [
          { required: true, message: "客户类型必选", trigger: "blur" }
        ],
        payment_methods_id: [
          { required: true, message: "付款方式必选", trigger: "blur" }
        ],
        warehouses_id: [{ required: true, message: "发货仓库必选", trigger: "blur" }]
      },
      addCustomerFormHead: [
        //新建订单的文本框表头
        {
          label: "单据来源",
          prop: "order_source",
          holder: "系统自动生成",
          width: "200",
          type: "text",
          editChgAble: true,
          addChgAble: true
        },
        {
          label: "单据编号",
          prop: "taobao_oid",
          holder: "系统自动生成",
          type: "text",
          editChgAble: true,
          addChgAble: true
        },
        {
          label: "店铺名称",
          prop: "shops_id",
          holder: "请选择店铺",
          type: "select",
          stateVal: "shop",
          editChgAble: true
        },
        {
          label: "会员昵称",
          prop: "member_nick",
          holder: "请输入会员昵称",
          type: "text"
        },
        {
          label: "物流公司",
          prop: "logistics_id",
          holder: "请选择物流公司",
          type: "select",
          stateVal: "logistics"
        },
        {
          label: "计费方式",
          choiceName: ["按体积", "按重量"],
          prop: "billing_way",
          type: "radio"
        },
        {
          label: "承诺日期",
          prop: "promise_ship_time",
          type: "DatePicker"
        },
        {
          label: "运费类型",
          prop: "freight_types_id",
          holder: "请选择运费类型",
          type: "select",
          stateVal: "freight_type"
        },
        {
          label: "预计运费",
          prop: "expected_freight",
          holder: "请输入预计运费",
          type: "number"
        },
        {
          label: "配送公司",
          prop: "distributions_id",
          holder: "请选择配送公司",
          type: "select",
          stateVal: "distribution"
        },
        {
          label: "配送方式",
          prop: "distribution_methods_id",
          holder: "请选择配送方式",
          type: "select",
          stateVal: "distribution_method"
        },
        {
          label: "送货费用",
          prop: "deliver_goods_fee",
          holder: "请输入送货费用",
          type: "number"
        },
        {
          label: "搬楼费用",
          prop: "move_upstairs_fee",
          holder: "请输入搬楼费用",
          type: "number"
        },
        {
          label: "安装费用",
          prop: "installation_fee",
          holder: "请输入安装费用",
          type: "number"
        },
        {
          label: "配送总计",
          prop: "total_distribution_fee",
          holder: "请输入配送总计",
          type: "number",
          addChgAble: true
        },
        {
          label: "配送电话",
          prop: "distribution_phone",
          holder: "请输入配送电话",
          type: "number"
        },
        {
          label: "配送单号",
          prop: "distribution_no",
          holder: "请输入配送单号",
          type: "text"
        },
        {
          label: "配送类型",
          prop: "distribution_types_id",
          holder: "请选择配送类型",
          type: "select",
          stateVal: "distribution_type"
        },
        {
          label: "配送信息",
          prop: "service_car_info",
          holder: "请输入配送信息",
          type: "text"
        },
        {
          label: "提货费用",
          prop: "take_delivery_goods_fee",
          holder: "请输入提货费用",
          type: "number"
        },
        {
          label: "提货方式",
          prop: "take_delivery_goods_ways_id",
          holder: "请选择提货方式",
          type: "select",
          stateVal: "take_delivery_goodsWay"
        },
        {
          label: "快递费用",
          prop: "express_fee",
          holder: "请输入快递费用",
          type: "number"
        },
        {
          label: "家装服务",
          prop: "service_car_fee",
          holder: "请输入家装服务",
          type: "number"
        },
        {
          label: "核销码",
          prop: "cancel_after_verification_code",
          holder: "请输入核销码",
          type: "text"
        },
        {
          label: "木架费",
          prop: "wooden_frame_costs",
          holder: "请输入木架费",
          type: "number"
        },
        {
          label: "优惠返现",
          prop: "preferential_cashback",
          holder: "请输入优惠返现",
          type: "number"
        },
        {
          label: "好评返现",
          prop: "favorable_cashback",
          holder: "请输入好评返现",
          type: "number"
        },
        {
          label: "客户类型",
          prop: "customer_types_id",
          holder: "请输入客户类型",
          type: "select",
          stateVal: "customer_type"
        },
        {
          label: "发票",
          prop: "is_invoice",
          type: "checkbox"
        },
        {
          label: "抬头",
          prop: "express_invoice_title",
          holder: "请输入发票抬头",
          type: "text"
        },
        {
          label: "发票快递费",
          prop: "invoice_express_fee",
          holder: "请输入发票快递费",
          type: "number"
        },
        {
          label: "合同单号",
          prop: "contract_no",
          holder: "请输入合同单号",
          type: "text"
        },
        {
          label: "付款方式",
          prop: "payment_methods_id",
          holder: "请选择付款方式",
          type: "select",
          stateVal: "payment_method"
        },
        {
          label: "门店定金",
          prop: "deposit",
          holder: "请输入门店定金",
          type: "number"
        },
        {
          label: "单据头",
          prop: "document_title",
          holder: "请输入单据头",
          type: "text"
        },
        {
          label: "发货仓库",
          holder: "请选择发货仓库",
          prop: "warehouses_id",
          type: "select",
          stateVal: "warehouse"
        },
        {
          label: "收款日期",
          prop: "payment_date",
          type: "DatePicker"
        },
        {
          label: "让利金额",
          prop: "interest_concessions",
          holder: "请输入让利金额",
          type: "number"
        },
        {
          label: "等通知发货",
          prop: "is_notice",
          type: "checkbox"
        },
        {
          label: "是否核销",
          prop: "is_cancel_after_verification",
          type: "checkbox"
        },
        {
          label: "接单用户",
          prop: "accept_order_user",
          holder: "请输入接单用户",
          type: "text"
        },
        {
          label: "税号",
          prop: "tax_number",
          holder: "请输入税号",
          type: "text"
        },
        {
          label: "收据",
          prop: "receipt",
          holder: "请输入收据",
          type: "text"
        },
        {
          label: "物流备注",
          prop: "logistics_remark",
          holder: "请输入物流备注",
          type: "textarea"
        },
        {
          label: "卖家备注",
          holder: "请输入卖家备注",
          prop: "seller_remark",
          type: "textarea"
        },
        {
          label: "客服备注",
          holder: "请输入客服备注",
          prop: "customer_service_remark",
          type: "textarea"
        },
        {
          label: "买家留言",
          holder: "请输入买家留言",
          prop: "buyer_message",
          type: "textarea"
        },
        {
          label: "开启订单",
          prop: "status",
          type: "checkbox"
        }
      ],
      addActiveName: "0",
      proData: [],
      options: regionDataPlus,
      addHead: [
        [
          {
            label: "sku名称",
            width: "160",
            prop: "name",
            type: "text"
          },
          {
            label: "数量",
            width: "130",
            prop: "newData",
            inProp: "quantity",
            type: "number"
          },
          {
            label: "油漆",
            width: "120",
            prop: "newData",
            inProp: "paint",
            type: "text"
          },
          {
            label: "需要印刷",
            width: "120",
            prop: "newData",
            inProp: "is_printing",
            type: "checkbox"
          },
          {
            label: "总体积",
            width: "120",
            prop: "newData",
            inProp: "total_volume",
            type: "number"
          },
          {
            label: "印刷费用",
            width: "140",
            prop: "newData",
            inProp: "printing_fee",
            type: "number"
          },
          {
            label: "现货",
            width: "120",
            prop: "newData",
            inProp: "is_spot_goods",
            type: "checkbox"
          },
          {
            label: "单价(线下)",
            width: "150",
            prop: "newData",
            inProp: "under_line_univalent",
            type: "number"
          },
          {
            label: "优惠(线下)",
            width: "150",
            prop: "newData",
            inProp: "under_line_preferential",
            type: "number"
          }
        ],
        [
          {
            label: "姓名",
            prop: "receiver_name",
            holder: "请输入姓名",
            type: "text"
          },
          {
            label: "固定电话",
            prop: "receiver_phone",
            holder: "请输入固定电话",
            type: "number"
          },
          {
            label: "手机",
            prop: "receiver_mobile",
            holder: "请输入手机号码",
            type: "number"
          },
          {
            label: "省市区",
            prop: "provinces",
            type: "cascader"
          },
          {
            label: "地址",
            prop: "receiver_address",
            type: "text"
          },
          {
            label: "邮编",
            prop: "receiver_zip",
            holder: "请输入邮编",
            type: "text"
          }
        ],
        [
          {
            label: "类型名称",
            prop: "payment_methods_id",
            type: "select",
            stateVal: "fee_type"
          },
          {
            label: "金额",
            prop: "payment",
            type: "number"
          }
        ]
      ],
      proMask: false,
      proQuery: {
        commodity_code: "",
        component_code: "",
        shops_id: "",
        short_name: ""
      },
      proHead: [
        {
          label: "产品图片",
          width: "120",
          prop: "img",
          type: "img"
        },
        {
          label: "商品编码",
          width: "120",
          prop: "commodity_code",
          type: "text"
        },
        {
          label: "工厂型号",
          width: "120",
          prop: "factory_model",
          type: "text"
        },
        {
          label: "商品简称",
          width: "120",
          prop: "short_name",
          type: "text"
        },
        {
          label: "类别名称",
          width: "120",
          prop: "goodsCategory",
          inProp: "name",
          type: "text"
        },
        {
          label: "商品备注",
          width: "120",
          prop: "remark",
          type: "text"
        }
      ],
      proVal: [],
      toggleText: false,
      toggleHeight: true,
      clickFlag: false,
      proCurSkuData: {},
      proSkuVal: [],
      proSkuHead: [
        {
          label: "sku名称",
          width: "120",
          prop: "name",
          type: "text"
        },
        {
          label: "数量",
          width: "120",
          prop: "newData",
          inProp: "quantity",
          type: "number"
        },
        {
          label: "油漆",
          width: "120",
          prop: "newData",
          inProp: "paint",
          type: "text"
        },
        {
          label: "总体积",
          width: "120",
          prop: "newData",
          inProp: "total_volume",
          type: "number"
        },
        {
          label: "需要印刷",
          width: "90",
          prop: "newData",
          inProp: "is_printing",
          type: "checkbox"
        },
        {
          label: "印刷费用",
          width: "120",
          prop: "newData",
          inProp: "printing_fee",
          type: "number"
        },
        {
          label: "现货",
          width: "90",
          prop: "newData",
          inProp: "is_spot_goods",
          type: "checkbox"
        },
        {
          label: "单价(线下)",
          width: "130",
          prop: "newData",
          inProp: "under_line_univalent",
          type: "number"
        },
        {
          label: "优惠(线下)",
          width: "130",
          prop: "newData",
          inProp: "under_line_preferential",
          type: "number"
        }
      ],
      proCompVal: [],
      proCompHead: [
        {
          label: "组合",
          width: "90",
          prop: "is_common",
          type: "checkbox"
        },
        {
          label: "子件图片",
          width: "120",
          prop: "img_url",
          type: "img"
        },
        {
          label: "子件编码",
          width: "140",
          prop: "component_code",
          type: "text"
        },
        {
          label: "子件名称",
          width: "120",
          prop: "spec",
          type: "text"
        },
        {
          label: "颜色",
          width: "120",
          prop: "color",
          type: "text"
        },
        {
          label: "材质",
          width: "120",
          prop: "materials",
          type: "text"
        },
        {
          label: "功能",
          width: "120",
          prop: "function",
          type: "text"
        },
        {
          label: "特殊",
          width: "120",
          prop: "special",
          type: "text"
        },
        {
          label: "其他",
          width: "120",
          prop: "other",
          type: "text"
        },
        {
          label: "淘宝售价",
          width: "130",
          prop: "tb_price",
          type: "number"
        },
        {
          label: "标准售价",
          width: "130",
          prop: "price",
          type: "number"
        },
        {
          label: "最低销售价格",
          width: "140",
          prop: "lowest_price",
          type: "number"
        },
        {
          label: "最高销售价格",
          width: "140",
          prop: "highest_price",
          type: "number"
        },
        {
          label: "体积",
          width: "120",
          prop: "volume",
          type: "number"
        },
        {
          label: "包件数",
          width: "130",
          prop: "package_quantity",
          type: "number"
        },
        {
          label: "停产",
          width: "90",
          prop: "is_stop_pro",
          type: "checkbox"
        }
      ],
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
      updateCustomerMask: false,
      updateCustomerFormVal: {},
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
      splitHead: [
        {
          label: "商品编码",
          prop: "commodity_code",
          type: "text"
        },
        {
          label: "商品简称",
          prop: "short_name",
          type: "text"
        },
        {
          label: "数量",
          prop: "quantity",
          type: "number"
        },
        {
          label: "实际拆分数量",
          prop: "newData",
          inProp: "quantity",
          type: "number"
        }
      ],
      splitRowIndex: "",
      splitRow: {},
      mergerIds: []
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
      let index = this.leftTopActiveName - 0;
      switch (index) {
        case 0:
          this.orderListData = {};
          this.$fetch(
            this.urls.customerservicedepts + "/searchordersettlement",
            {
              is_logistics_checked: 0,
              system_order_no:this.searchBox.system_order_no,
              receiver_name:this.searchBox.receiver_name,
              logistics_id:this.searchBox.logistics_id,
              shops_id:this.searchBox.shops_id,
              include:
                "shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems.combination.productComponents,orderItems.product,businessPersonnel,locker,paymentDetails.paymentMethod,paymentDetails.order"
            }
          ).then(
            res => {
              this.loading = false;
              this.orderListData = res.data;
              let pg = res.meta.pagination;
              this.$store.dispatch("currentPage", pg.current_page);
              this.$store.commit("PER_PAGE", pg.per_page);
              this.$store.commit("PAGE_TOTAL", pg.total);
              this.$store.dispatch("paymentmethods", this.urls.paymentmethods);
              this.$fetch(this.urls.customerservicedepts + "/create").then(
                res => {
                  this.addSubData = res;
                },
                err => {}
              );
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
          this.orderListData = {};
          this.$fetch(
            this.urls.customerservicedepts + "/searchordersettlement",
            {
              is_logistics_checked: 1,
              system_order_no:this.searchBox.system_order_no,
              receiver_name:this.searchBox.receiver_name,
              logistics_id:this.searchBox.logistics_id,
              shops_id:this.searchBox.shops_id,
              include:
                "shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems.combination.productComponents,orderItems.product,businessPersonnel,locker,paymentDetails.paymentMethod,paymentDetails.order"
            }
          ).then(
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
        case 2:
          this.orderListData = {};
          this.$fetch(
            this.urls.customerservicedepts + "/searchordersettlement",
            {
              is_goods_checked:0,
              system_order_no:this.searchBox.system_order_no,
              receiver_name:this.searchBox.receiver_name,
              logistics_id:this.searchBox.logistics_id,
              shops_id:this.searchBox.shops_id,
              include:
                "shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems,businessPersonnel,locker,paymentDetails"
            }
          ).then(
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
        case 3:
          this.orderListData = {};
          this.$fetch(
            this.urls.customerservicedepts + "/searchordersettlement",
            {
              is_goods_checked:1,
              system_order_no:this.searchBox.system_order_no,
              receiver_name:this.searchBox.receiver_name,
              logistics_id:this.searchBox.logistics_id,
              shops_id:this.searchBox.shops_id,
              include:
                "shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems,businessPersonnel,locker,paymentDetails"
            }
          ).then(
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
        case 4:
          this.orderListData = {};
          this.$fetch(
            this.urls.customerservicedepts + "/searchordersettlement",
            {
              is_distribution_checked: 0,
              system_order_no:this.searchBox.system_order_no,
              receiver_name:this.searchBox.receiver_name,
              logistics_id:this.searchBox.logistics_id,
              shops_id:this.searchBox.shops_id,
              include:
                "shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems,businessPersonnel,locker,paymentDetails"
            }
          ).then(
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
        case 5:
          this.orderListData = {};
          this.$fetch(
            this.urls.customerservicedepts + "/searchordersettlement",
            {
              is_distribution_checked: 1,
              system_order_no:this.searchBox.system_order_no,
              receiver_name:this.searchBox.receiver_name,
              logistics_id:this.searchBox.logistics_id,
              shops_id:this.searchBox.shops_id,
              include:
                "shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems,businessPersonnel,locker,paymentDetails"
            }
          ).then(
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
    orderListRClick(row) {
      this.curRowId = row.id;
      this.curRowData = row;
      if(this.leftTopActiveName==0){
        this.newOpt[0].nClick = false;
        this.newOpt[1].nClick = true;
        this.newOpt[2].nClick = false;
        this.newOpt[3].nClick = false;
        this.newOpt[4].nClick = false;
      };
      if(this.leftTopActiveName==1){
        this.newOpt[0].nClick = false;
        this.newOpt[1].nClick = false;
        this.newOpt[2].nClick = true;
        this.newOpt[3].nClick = false;
        this.newOpt[4].nClick = false;
      };
      if(this.leftTopActiveName==2){
        this.newOpt[0].nClick = false;
        this.newOpt[1].nClick = true;
        this.newOpt[2].nClick = false;
        this.newOpt[3].nClick = false;
        this.newOpt[4].nClick = false;
      };
      if(this.leftTopActiveName==3){
        this.newOpt[0].nClick = false;
        this.newOpt[1].nClick = false;
        this.newOpt[2].nClick = true;
        this.newOpt[3].nClick = false;
        this.newOpt[4].nClick = false;
      };
      if(this.leftTopActiveName==4){
        this.newOpt[0].nClick = false;
        this.newOpt[1].nClick = true;
        this.newOpt[2].nClick = false;
        this.newOpt[3].nClick = false;
        this.newOpt[4].nClick = false;
      };
      if(this.leftTopActiveName==5){
        this.newOpt[0].nClick = false;
        this.newOpt[1].nClick = false;
        this.newOpt[2].nClick = true;
        this.newOpt[3].nClick = false;
        this.newOpt[4].nClick = false;
      };
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
    addCustomer() {
      this.addCustomerMask = true;
      this.addIds = [];
      this.proData = [];
      this.proRIndex = "";
    },
    proQueryClick() {
      this.proSkuVal = [];
      this.$fetch(this.urls.products, {
        status: true,
        commodity_code: this.proQuery.commodity_code,
        component_code: this.proQuery.component_code,
        shops_id: this.proQuery.shops_id,
        short_name: this.proQuery.short_name,
        include:
          "productComponents.product,shop,supplier,goodsCategory,combinations.productComponents"
      }).then(
        res => {
          this.proVal = res.data;
          let comb = res.data[0]["combinations"]["data"];
          if (comb.length > 0) {
            let total_volume = 0;
            comb.map(item => {
              item["productComp"] = item["productComponents"]["data"];
              if (item["productComponents"]["data"].length > 0) {
                item["productComponents"]["data"].map(list => {
                  total_volume += list.volume;
                });
              } else {
                total_volume = 0;
              }
              this.$set(item, "newData", {
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
          this.proSkuVal = comb;
        },
        err => {}
      );
    },
    addHandleClick() {},
    addProRCName({ row, rowIndex }) {
      row.index = rowIndex;
    },
    addProRowClick(row) {
      this.proRIndex = `index${row.index}`;
    },
    addDelPro(index) {
      this.proData.splice(index, 1);
    },
    addCustomerConfirm() {
      let forData = this.addCustomerFormVal;
      let submitData = {
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
      this.proData.map(item => {
        let proD = {
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
      this.expenseData.map(list => {
        let expenseD = {
          payment: list.payment,
          payment_methods_id: list.payment_methods_id
        };
        submitData.payment_details.push(expenseD);
      });
      this.$post(this.urls.customerservicedepts, submitData).then(
        () => {
          this.addCustomerMask = false;
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
    addCustomerCancel() {
      this.addCustomerMask = false;
      this.$message({
        message: "取消新增订单明细",
        type: "success"
      });
    },
    /*商品明细*/
    addProDtl() {
      this.proMask = true;
      Object.assign(this.proQuery, this.$options.data().proQuery);
      this.proVal = [];
      this.proSkuVal = [];
      this.proIds = [];
    },
    toggleForm() {
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
    proRowClick(row) {
      this.proSkuVal = [];
      this.proCompRowIndex = "";
      let comb = row["combinations"]["data"];
      if (comb.length > 0) {
        let total_volume = 0;
        comb.map(item => {
          item["productComp"] = item["productComponents"]["data"];
          if (item["productComponents"]["data"].length > 0) {
            item["productComponents"]["data"].map(list => {
              total_volume += list.volume;
            });
          } else {
            total_volume = 0;
          }
          this.$set(item, "newData", {
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
    proCName() {},
    proSkuCName({ row, rowIndex }) {
      row.index = rowIndex;
    },
    proSkuRowClick(row) {
      this.proCompRowIndex = `index${row.index}`;
      this.proCompRow = row;
    },
    quantityChg(value) {
      if (value > 0) {
        let proCRow = this.proCompRow;
        if (this.proIds.indexOf(proCRow.id) == -1) {
          this.proIds.push(proCRow.id);
          this.proSubmitData.push(proCRow);
        } else {
          this.proSubmitData.map((list, index) => {
            if (list.id == proCRow.id) {
              this.proSubmitData.splice(index, 1);
              this.proSubmitData.push(proCRow);
            }
          });
        }
      }
    },
    formChg() {
      let formVal;
      if (this.addCustomerMask) {
        formVal = this.updateCustomerFormVal;
      } else {
        formVal = this.updateCustomerFormVal;
      }
      formVal["total_distribution_fee"] =
        formVal["deliver_goods_fee"] -
        0 +
        (formVal["move_upstairs_fee"] - 0) +
        (formVal["installation_fee"] - 0);
    },
    confirmAddProDtl() {
      if (this.addCustomerMask) {
        this.proSubmitData.map(item => {
          if (this.addIds.indexOf(item.id) == -1) {
            this.proData.push(item);
            this.addIds.push(item.id);
            this.$message({
              message: "添加商品信息成功",
              type: "success"
            });
          } else {
            this.proData.map((list, index) => {
              if (list.id == item.id) {
                this.proData.splice(index, 1);
                this.proData.push(item);
                this.$message({
                  message: "添加商品信息成功",
                  type: "success"
                });
              }
            });
          }
        });
      } else {
        this.proSubmitData.map(item => {
          if (this.updateProIds.indexOf(item.id) == -1) {
            this.updateProData.push(item);
            this.updateProIds.push(item.id);
            this.$message({
              message: "添加商品信息成功",
              type: "success"
            });
          } else {
            this.updateProData.map((list, index) => {
              if (list.combinations_id == item.id) {
                this.$set(item, "originalId", list.id);
                this.updateProData.splice(index, 1);
                this.updateProData.push(item);
                this.$message({
                  message: "添加商品信息成功",
                  type: "success"
                });
              }
            });
          }
        });
      }
    },
    cancelAddProDtl() {
      this.proMask = false;
    },
    addDelExpense(index) {
      this.expenseData.splice(index, 1);
      this.$message({
        message: "删除成功",
        type: "success"
      });
    },
    addExpenseRCName({ row, rowIndex }) {
      row.index = rowIndex;
    },
    addExpenseRClick(row) {
      this.expenseRIndex = `index${row.index}`;
    },
    /*新增行*/
    addExpenseLine() {
      if (this.addCustomerMask) {
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
    delSingle(row, e) {
      this.showDel = true;
      $(".el-popper").css({ left: e.x - 100 + "px", top: e.y - 125 + "px" });
      this.delId = row.id;
      this.delUrl = row["orderItems"]
        ? this.urls.customerservicedepts
        : row["payment"] ? this.urls["paymentdetails"] : this.urls.orderitems;
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
      this.curRowData = val.length > 0 ? val[val.length - 1] : "";
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
            this.$del(this.urls.customerservicedepts, { ids: this.ids }).then(
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
    /*页码*/
    handlePagChg(page) {
      this.$fetch(this.urls.customerservicedepts + "?page=" + page, {
        include:
          "shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems.combination.productComponents,orderItems.product,businessPersonnel,locker,paymentDetails.paymentMethod,paymentDetails.order"
      }).then(res => {
        if (this.leftTopActiveName == "0") {
          this.orderListData = res.data;
        } else {
          this.alreadyHandle = res.data;
        }
      });
    },
    refresh() {
      this.loading = true;
      this.fetchData();
    },
    /*锁定*/
    lockOrder() {
      if (this.newOpt[3].nClick) {
        return;
      } else {
        let id = this.checkboxId ? this.checkboxId : this.curRowId;
        this.$put(
          this.urls.customerservicedepts + "/" + id + "/lockorunlock"
        ).then(
          () => {
            this.newOpt[1].nClick = false;
            this.newOpt[2].nClick = false;
            this.newOpt[3].nClick = true;
            this.newOpt[4].nClick = false;
            this.newOpt[5].nClick = false;
            this.newOpt[6].nClick = true;
            this.newOpt[8].nClick = false;
            this.newOpt[9].nClick = false;
            this.newOpt[14].nClick = false;
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
      }
    },
    /*解锁*/
    debLock() {
      if (this.newOpt[4].nClick) {
        return;
      } else {
        let id = this.checkboxId ? this.checkboxId : this.curRowId;
        this.$put(
          this.urls.customerservicedepts + "/" + id + "/lockorunlock"
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
      }
    },
    /*修改*/
    updateData() {
      this.proIds = [];
      this.updateProIds = [];
      this.expenseRIndex = "";
      this.updateCustomerFormVal = {};
      this.updateProData = [];
      this.updateReceiveInfo = {};
      this.updateExpenseData = [];
      this.updateCustomerMask = true;
      this.proRIndex = "";
      let id = this.checkboxId ? this.checkboxId : this.curRowId;
      this.$fetch(this.urls.customerservicedepts + "/" + id, {
        include:
          "shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems.combination.productComponents,orderItems.product,businessPersonnel,locker,paymentDetails"
      }).then(
        res => {
          this.updateCustomerFormVal = res;
          if (res["orderItems"]["data"].length > 0) {
            res["orderItems"]["data"].map(item => {
              this.updateProIds.push(item["combination"].id);
              item["name"] = item["combination"]["name"];
              item["id"] = item.id;
              item["products_id"] = item.products_id;
              item["combinations_id"] = item.combinations_id;
              item["productComp"] =
                item["combination"]["productComponents"]["data"];
              this.$set(item, "newData", {
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
          this.updateProData = res["orderItems"]["data"];
          this.updateReceiveInfo = {
            receiver_name: res.receiver_name,
            receiver_phone: res.receiver_phone,
            receiver_mobile: res.receiver_mobile,
            provinces: [
              TextToCode[res.receiver_state].code,
              TextToCode[res.receiver_state][res.receiver_city].code,
              TextToCode[res.receiver_state][res.receiver_city][
                res.receiver_district
              ].code
            ],
            receiver_address: res.receiver_address,
            receiver_zip: res.receiver_zip
          };
          this.updateExpenseData = res["paymentDetails"]["data"];
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
    updateDelPro(row, index) {
      if (row["originalId"]) {
        this.$del(this.urls.orderitems + "/" + row["originalId"]).then(
          () => {
            this.updateProData.splice(index, 1);
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
      } else if (row.id) {
        this.$del(this.urls.orderitems + "/" + row.id).then(
          () => {
            this.updateProData.splice(index, 1);
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
      } else {
        this.updateProData.splice(index, 1);
        this.$message({
          message: "删除商品信息成功",
          type: "success"
        });
      }
    },
    updateDelExpense(row, index) {
      if (row.id) {
        this.$del(this.urls.paymentdetails + "/" + row.id).then(
          () => {
            this.updateExpenseData.splice(index, 1);
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
      } else {
        this.updateExpenseData.splice(index, 1);
        this.$message({
          message: "删除商品信息成功",
          type: "success"
        });
      }
    },
    updateCustomerConfirm() {
      let forData = this.updateCustomerFormVal;
      let submitData = {
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
      this.updateProData.map(item => {
        if (item.combinations_id) {
          let proD = {
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
          let proD = {
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
          submitData.order_items.push(proD);
        } else {
          let proD = {
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
          submitData.order_items.push(proD);
        }
      });
      this.updateExpenseData.map(list => {
        if (list.id) {
          let expenseD = {
            id: list.id,
            payment: list.payment,
            payment_methods_id: list.payment_methods_id
          };
          submitData.payment_details.push(expenseD);
        } else {
          let expenseD = {
            payment: list.payment,
            payment_methods_id: list.payment_methods_id
          };
          submitData.payment_details.push(expenseD);
        }
      });
      let id = this.checkboxId ? this.checkboxId : this.curRowId;
      this.$patch(this.urls.customerservicedepts + "/" + id, submitData).then(
        () => {
          this.updateCustomerMask = false;
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
      this.updateCustomerMask = false;
      this.$message({
        message: "取消修改订单明细",
        type: "success"
      });
    },
    /*审核*/
    handleAudit() {
      if (this.newOpt[2].nClick) {
        return;
      } else {
        let id = this.checkboxId ? this.checkboxId : this.curRowId;
        let index = this.leftTopActiveName - 0;
        switch (index) {
          case 0:
            this.$put(
              this.urls.customerservicedepts + "/" + id + "/logcheck"
            ).then(
              () => {
                this.newOpt[0].nClick = true;
                this.newOpt[1].nClick = true;
                this.newOpt[2].nClick = true;
                this.newOpt[3].nClick = true;
                this.newOpt[4].nClick = true;
                this.refresh();
                this.$message({
                  message: "运费结算成功",
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
            break;
          case 2:
            this.$put(
              this.urls.customerservicedepts + "/" + id + "/goodscheck"
            ).then(
              () => {
                this.newOpt[0].nClick = true;
                this.newOpt[1].nClick = true;
                this.newOpt[2].nClick = true;
                this.newOpt[3].nClick = true;
                this.newOpt[4].nClick = true;
                this.refresh();
                this.$message({
                  message: "货款结算成功",
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
            break;
          case 4:
            this.$put(
              this.urls.customerservicedepts + "/" + id + "/discheck"
            ).then(
              () => {
                this.newOpt[0].nClick = true;
                this.newOpt[1].nClick = true;
                this.newOpt[2].nClick = true;
                this.newOpt[3].nClick = true;
                this.newOpt[4].nClick = true;
                this.refresh();
                this.$message({
                  message: "配送结算成功",
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
            break;
        }
      }
    },
    handleUnAudit() {
      if (this.newOpt[1].nClick) {
        return;
      } else {
        let id = this.checkboxId ? this.checkboxId : this.curRowId;
        let index = this.leftTopActiveName - 0;
        switch (index) {
          case 1:
            this.$put(
              this.urls.customerservicedepts + "/" + id + "/loguncheck"
            ).then(
              () => {
                this.newOpt[0].nClick = true;
                this.newOpt[1].nClick = true;
                this.newOpt[2].nClick = true;
                this.newOpt[3].nClick = true;
                this.newOpt[4].nClick = true;
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
            break;
          case 3:
            this.$put(
              this.urls.customerservicedepts + "/" + id + "/goodsuncheck"
            ).then(
              () => {
                this.newOpt[0].nClick = true;
                this.newOpt[1].nClick = true;
                this.newOpt[2].nClick = true;
                this.newOpt[3].nClick = true;
                this.newOpt[4].nClick = true;
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
            break;
          case 5:
            this.$put(
              this.urls.customerservicedepts + "/" + id + "/disuncheck"
            ).then(
              () => {
                this.newOpt[0].nClick = true;
                this.newOpt[1].nClick = true;
                this.newOpt[2].nClick = true;
                this.newOpt[3].nClick = true;
                this.newOpt[4].nClick = true;
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
            break;
        }
      }
    },
    handleSplitOrder() {
      if (this.newOpt[9].nClick) {
        return;
      } else {
        this.splitMask = true;
        this.splitRowIndex = "";
        this.splitVal = [];
        let orderData = this.curRowData["orderItems"]["data"];
        if (orderData.length > 0) {
          orderData.map(item => {
            let list = {
              id: item.id,
              commodity_code: item.product["commodity_code"],
              short_name: item.product["short_name"],
              quantity: item["quantity"],
              newData: {
                quantity: ""
              }
            };
            this.splitVal.push(list);
          });
        }
      }
    },
    splitCName({ row, rowIndex }) {
      row.index = rowIndex;
    },
    splitRowClick(row) {
      this.splitRowIndex = `index${row.index}`;
      this.splitRow = row;
    },
    numChg(value) {
      if (value > this.splitRow["quantity"] - 0) {
        this.splitRow["newData"]["quantity"] = this.splitRow["quantity"];
      }
    },
    confirmSplit() {
      let id = this.checkboxId ? this.checkboxId : this.curRowId;
      let confSplit = {
        order_items: []
      };
      if (this.splitVal.length > 0) {
        this.splitVal.map(item => {
          if (item["newData"]["quantity"] > 0) {
            let list = {
              id: item.id,
              quantity: item["newData"]["quantity"]
            };
            confSplit["order_items"].push(list);
          }
        });
      }
      this.$put(
        this.urls.customerservicedepts + "/" + id + "/splitorder",
        confSplit
      ).then(
        () => {
          this.splitMask = false;
          this.refresh();
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
          this.$message({
            message: "订单拆分成功",
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
    cancelSplit() {
      this.splitMask = false;
    },
    handleMergerOrder() {
      if (this.newOpt[8].nClick) {
        return;
      } else {
        if (this.mergerIds.length != 2) {
          this.$message({
            message: "请选择要合并的订单",
            type: "info"
          });
        } else {
          let ids = [];
          this.mergerIds.map(item => {
            ids.push(item.id);
          });
          this.$put(
            this.urls.customerservicedepts +
              "/mergerorder" +
              "?order_id_one=" +
              ids[0] +
              "&order_id_two=" +
              ids[1]
          ).then(
            () => {
              this.refresh();
              this.$message({
                message: "订单合并成功",
                type: "success"
              });
            },
            err => {
              if (err.response) {
                this.$message.error("合并订单出错");
              }
            }
          );
        }
      }
    },
    //筛选
    searchData(){
      this.loading=true;
      this.fetchData();
    },
    resets() {
      this.searchBox = {
        system_order_no: "",
        receiver_name: "",
        logistics_id: "",
        shops_id: "",
        checked_at: ["2018-12-31T16:00:00.000Z", "2099-12-31T16:00:00.000Z"],
        stockout_at: ["2018-12-31T16:00:00.000Z", "2099-12-31T16:00:00.000Z"],
        audit_at: ["2018-12-31T16:00:00.000Z", "2099-12-31T16:00:00.000Z"]
      };
    }
  },
  mounted() {
    // this.$store.state.opt.opts = this.newOpt;
    // this.$store.commit('change', this.newOpt);
    // const that = this;
    // $(window).resize(() => {
    //   return (() => {
    //     that.$store.state.opt.opts = that.newOpt;
    //     that.$store.commit('change', that.newOpt);
    //   })()
    // })
    this.fetchData();
    this.$store.dispatch('logistics', '/logistics');
    this.$store.dispatch('suppliers', '/suppliers');
    this.$store.dispatch('shops', '/shops');
    this.$store.dispatch("setOpt", this.newOpt);
    let that = this;
    $(window).resize(() => {
      that.$store.dispatch("setOpt", that.newOpt);
    });
  }
};
</script>