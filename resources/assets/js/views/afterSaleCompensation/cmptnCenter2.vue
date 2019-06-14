<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="outerHandleClick">
      <el-tab-pane label="订单" name="0">
        <div>
          <div class="searchBox">
            <span>
              <label>买家昵称</label>
              <el-input v-model="searchBox.customer_nickname" clearable></el-input>
            </span>
            <span>
              <label>买家姓名</label>
              <el-input v-model="searchBox.customer_name" clearable></el-input>
            </span>
            <span>
              <label>买家电话</label>
              <el-input v-model="searchBox.customer_phone" clearable></el-input>
            </span>
            <span v-if="filterBox">
              <label>买家地址</label>
              <el-input v-model="searchBox.customer_address" clearable></el-input>
            </span>
            <span v-else>
              <el-button type="primary">筛选</el-button>
              <el-button>重置</el-button>
              <span @click="toggleShow">
                <el-button type="text">展开</el-button>
                <i class="el-icon-arrow-down" style="color:#409EFF"></i>
              </span>
            </span>
          </div>
          <div class="searchBox" v-show="filterBox">
            <span>
              <label>业务员</label>
              <el-input v-model="searchBox.order_stuff" clearable></el-input>
            </span>
            <span>
              <label>赔偿方向</label>
              <el-select v-model="searchBox.cmptn_direction" clearable placeholder="请选择">
                <el-option v-for="item in searchBox.cmptn_directions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </span>
            <span>
              <label>责任方</label>
              <el-select v-model="searchBox.responsible_party" clearable placeholder="请选择">
                <el-option v-for="item in searchBox.responsible_partys" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </span>
            <span>
              <label>责任人</label>
              <el-input v-model="searchBox.responsible_person" clearable></el-input>
            </span>
          </div>
          <div class="searchBox" v-show="filterBox">
            <span>
              <label>发货物流</label>
              <el-select v-model="searchBox.logistics_company" clearable placeholder="请选择">
                <el-option v-for="item in searchBox.logistics_companys" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </span>
            <span>
              <label>物流单号</label>
              <el-input v-model="searchBox.logistics_tracking_number"></el-input>
            </span>
            <span>
              <label>所属店铺</label>
              <el-select v-model="searchBox.cmptn_shop" clearable placeholder="请选择">
                <el-option v-for="item in searchBox.cmptn_shops" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </span>
            <span>
              <label>协商日期</label>
              <el-date-picker v-model="searchBox.negotiation_date" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholeder="结束日期"></el-date-picker>
            </span>
          </div>
          <div class="searchBox" v-show="filterBox">
            <span>
              <label>创建日期</label>
              <el-date-picker v-model="searchBox.created_at" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholeder="结束日期"></el-date-picker>
            </span>
            <span>
              <label>提交日期</label>
              <el-date-picker v-model="searchBox.submited_at" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholeder="结束日期"></el-date-picker>
            </span>
            <span>
              <label>审核日期</label>
              <el-date-picker v-model="searchBox.audited_at" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholeder="结束日期"></el-date-picker>
            </span>
          </div>
          <div v-if="filterBox" style="text-align: right">
            <el-button type="primary">筛选</el-button>
            <el-button @click="resets">重置</el-button>
            <span @click="toggleShow" style="display: inline">
              <el-button type="text">收起</el-button>
              <i class="el-icon-arrow-up" style="color:#409EFF"></i>
            </span>
          </div>
        </div>
        <!--显示列表-未处理-->
        <el-tabs v-model="leftTopActiveName" @tab-click="leftHandleClick" style="height: 400px;">
          <el-tab-pane label="所有订单" name="0">
            <el-table :data="cmptnOrderListTableData" fit @selection-change="handleSelectionChange" v-loading="loading" height="350" @row-click="orderListRClick" @row-dblclick="orderDbClick">
              <el-table-column type="selection" width="95" align="center" :checked="checkboxInit">
              </el-table-column>
              <el-table-column v-for="item in cmptnOrderListTableHead" :label="item.label" align="center" :width="item.width" :key="item.label">
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
          <el-tab-pane label="未处理" name="1">
            <el-table :data="unHandle" fit @selection-change="handleSelectionChange" v-loading="loading" height="350" @row-click="orderListRClick" @row-dblclick="orderDbClick">
              <el-table-column type="selection" width="95" align="center" :checked="checkboxInit">
              </el-table-column>
              <el-table-column v-for="item in cmptnOrderListTableHead" :label="item.label" align="center" :width="item.width" :key="item.label">
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
          <el-tab-pane label="已处理" name="2">
            <el-table :data="alreadyHandle" fit @selection-change="handleSelectionChange" v-loading="loading" height="350" @row-click="orderListRClick" @row-dblclick="orderDbClick">
              <el-table-column type="selection" width="95" align="center" :checked="checkboxInit">
              </el-table-column>
              <el-table-column v-for="item in cmptnOrderListTableHead" :label="item.label" align="center" :width="item.width" :key="item.label">
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
          <el-tab-pane label="已作废" name="4">
            <el-table :data="cmptnOrderListTableData" fit @selection-change="handleSelectionChange" v-loading="loading" height="350" @row-click="orderListRClick" @row-dblclick="orderDbClick">
              <el-table-column type="selection" width="95" align="center" :checked="checkboxInit">
              </el-table-column>
              <el-table-column v-for="item in cmptnOrderListTableHead" :label="item.label" align="center" :width="item.width" :key="item.label">
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
        <el-tabs>
          <el-tab-pane label="问题产品" name="0">
            <el-table :data="defProData">
              <el-table-column v-for="item in defProTableHead" :label="item.label" align="center" :width="item.width" :key="item.prop">
                <template slot-scope="scope">
                  <span v-if="item.type=='select'">
                    <span v-if="scope.row[item.prop]==''"></span>
                    <span v-else-if="typeof scope.row[item.prop] == 'object' && item.nmProp">
                      {{scope.row[item.prop][item.nmProp]}}
                    </span>
                  </span>
                  <span v-else-if="item.type=='checkbox'">
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
      </el-tab-pane>
    </el-tabs>

    <!--删除单条-->
    <el-popover placement="top" width="160" v-model="showDel" slot="tip">
      <p>确定删除该条数据？</p>
      <div style="text-align: right; margin: 0">
        <el-button size="mini" type="text" @click="cancelD">取消</el-button>
        <el-button type="primary" size="mini" @click="confirmD(delUrl,delId)">确定</el-button>
      </div>
    </el-popover>

    <!--页码-->
    <Pagination :page-url="this.urls.aftercompensation" @handlePagChg="handlePagChg" v-if="activeName=='0'"></Pagination>

    <!--拆分-->
    <el-dialog title="拆分订单" :visible.sync="splitMask" :class="{'more-forms':moreForms,'threeParts':threeParts}">
      <el-button type="text">请选择拆出商品</el-button>
      <el-table :data="splitVal" fit height="300" @row-click="splitRowClick" :row-class-name="splitCName">
        <el-table-column v-for="item in splitHead" :label="item.label" align="center" :width="item.width" :key="item.label">
          <template slot-scope="scope">
            <span v-if="item.prop=='newData'">
              <span v-if="splitRowIndex == 'index'+scope.$index">
                <el-input size="small" v-model.trim="scope.row[item.prop][item.inProp]" @input="numChg"></el-input>
              </span>
              <span v-else>
                {{scope.row[item.prop][item.inProp]}}
              </span>
            </span>
            <span v-else-if="item.prop">
              <span v-if="item.type=='checkbox'">
                <el-checkbox v-model="scope.row[item.prop]" disabled></el-checkbox>
              </span>
              <span v-else>
                {{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}
              </span>
            </span>
          </template>
        </el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="confirmSplit">确定</el-button>
        <el-button @click="cancelSplit">关闭</el-button>
      </div>
    </el-dialog>
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
          cnt: "导出",
          icon: "bf-out",
          ent: this.test
        },
        {
          cnt: "刷新",
          icon: "bf-refresh",
          ent: this.refresh
        }
      ],
      filterBox: false,
      searchBox: {
        customer_nickname: "",
        customer_name: "",
        customer_phone: "",
        customer_address: "",
        order_stuff: "",
        cmptn_direction: "",
        cmptn_directions: [
          { label: "我们赔偿", value: 0 },
          { label: "赔偿我们", value: 1 }
        ],
        responsible_party: "",
        responsible_partys: [
          { label: "物流", value: 0 },
          { label: "工厂", value: 1 },
          { label: "服务商", value: 2 },
          { label: "客户", value: 3 },
          { label: "公司", value: 4 },
          { label: "其他", value: 5 }
        ],
        responsible_person: "",
        logistics_company: "",
        logistics_companys: [
          { label: "顺丰速运", value: 0 },
          { label: "韵达快递", value: 1 }
        ],
        logistics_tracking_number: "",
        cmptn_shop: "",
        cmptn_shops: [
          { label: "Dreasylife家居旗舰店", value: 0 },
          { label: "思享家官方旗舰店", value: 1 }
        ],
        negotiation_date: "",
        created_at: "",
        submited_at: "",
        audited_at: ""
      },
      /*获取数据*/
      activeName: "0",
      leftTopActiveName: "0",
      rightActiveName: "0",
      cmptnOrderListTableData: [],
      cmptnOrderListTableHead: [
        //订单表头标签
        {
          label: "系统单号",
          width: "220",
          prop: "system_order_no",
          type: "text"
        },
        {
          label: "赔偿方向",
          width: "220",
          prop: "cmptn_direction",
          type: "text"
        },
        {
          label: "责任方",
          width: "150",
          prop: "responsible_party",
          type: "text"
        },
        {
          label: "责任人",
          width: "140",
          prop: "responsible_person",
          type: "text"
        },
        {
          label: "买家昵称",
          width: "140",
          prop: "customer_nickname",
          type: "text"
        },
        {
          label: "买家姓名",
          width: "130",
          prop: "customer_name",
          type: "text"
        },
        {
          label: "客户电话",
          width: "130",
          prop: "customer_phone",
          type: "text"
        },
        {
          label: "客户城市",
          width: "130",
          prop: "customer_city",
          type: "text"
        },
        {
          label: "赔偿金额",
          width: "130",
          prop: "cmptn_fee",
          type: "text"
        },
        {
          label: "协商日期",
          width: "140",
          prop: "negotiation_date",
          type: "text"
        },
        {
          label: "发货物流",
          width: "120",
          prop: "logistics_company",
          type: "text"
        },
        {
          label: "物流单号",
          width: "130",
          prop: "logistics_tracking_number",
          type: "text"
        },
        {
          label: "结账方式",
          width: "120",
          prop: "payment_method",
          type: "text"
        },
        {
          label: "业务员",
          width: "120",
          prop: "order_stuff",
          type: "text"
        },
        {
          label: "订单编号",
          prop: "order_number",
          type: "text",
          editChgAble: true,
          addChgAble: false
        },
        {
          label: "问题描述",
          prop: "problem_description",
          type: "text",
          editChgAble: true,
          addChgAble: false
        },
        {
          label: "备注",
          prop: "note",
          type: "text",
          editChgAble: true,
          addChgAble: false
        },
        {
          label: "创建时间",
          prop: "created_at",
          type: "text",
          editChgAble: true,
          addChgAble: false
        },
        {
          label: "提交时间",
          prop: "submited_at",
          type: "text",
          editChgAble: true,
          addChgAble: false
        },
        {
          label: "驳回原因",
          prop: "refuse_reason",
          type: "text",
          editChgAble: true,
          addChgAble: false
        },
        {
          label: "费用类型",
          prop: "fee_type",
          type: "text",
          editChgAble: true,
          addChgAble: false
        },
        {
          label: "收款人",
          prop: "payee",
          type: "text",
          editChgAble: true,
          addChgAble: false
        },
        {
          label: "收款账户",
          prop: "payee_account",
          type: "text",
          editChgAble: true,
          addChgAble: false
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
      addCmptnOrderMask: false,
      moreForms: true,
      threeParts: true,
      addCmptnOrderFormVal: {
        order_number: "nodata",
        cmptn_shop: "",
        cmptn_direction: "",
        responsible_party: "",
        responsible_person: "",
        customer_nickname: "",
        customer_name: "",
        customer_phone: "",
        customer_city: "",
        customer_address: "no data",
        cmptn_fee: "",
        fee_type: "",
        logistics_company: "",
        logistics_tracking_number: "",
        payment_method: "",
        order_stuff: "",
        payee: "",
        payee_account: "",
        problem_goods: "no data",
        problem_description: "",
        note: "",
        refuse_reason: "",
        negotiation_date: "",
        created_at: "",
        submited_at: "",
        audited_at: "",
        updated_at: "",
        status: true
      },
      addCmptnOrderFormRules: {
        //新建订单的要求格式
        customer_phone: [
          { required: true, message: "买家电话必选", trigger: "blur" }
        ],
        payment_method: [
          { required: true, message: "结账方式必选", trigger: "blur" }
        ],
        logistics_company: [
          { required: true, message: "发货物流必选", trigger: "blur" }
        ],
        logistics_tracking_number: [
          { required: true, message: "物流单号必选", trigger: "blur" }
        ],
        responsible_party: [
          { required: true, message: "责任方必选", trigger: "blur" }
        ],
        responsible_person: [
          { required: true, message: "责任人必选", trigger: "blur" }
        ],
        cmptn_direction: [
          { required: true, message: "赔偿方向必选", trigger: "blur" }
        ],
        cmptn_fee: [{ required: true, message: "赔偿金额必选", trigger: "blur" }],
        negotiation_date: [
          { required: true, message: "协商日期必选", trigger: "blur" }
        ],
        order_stuff: [{ required: true, message: "业务员必选", trigger: "blur" }],
        fee_type: [{ required: true, message: "费用类型必选", trigger: "blur" }],
        payee: [{ required: true, message: "收款人必选", trigger: "blur" }],
        payee_account: [{ required: true, message: "收款账号必选", trigger: "blur" }],
        cmptn_shop: [{ required: true, message: "店铺昵称必选", trigger: "blur" }],
        problem_description: [
          { required: true, message: "问题描述必选", trigger: "blur" }
        ]
      },
      addCmptnOrderFormHead: [
        //新建订单的文本框表头
        {
          label: "系统单号",
          prop: "system_order_no",
          holder: "系统自动生成",
          width: "200",
          type: "text",
          editChgAble: true,
          addChgAble: true
        },
        {
          label: "买家昵称",
          prop: "customer_nickname",
          type: "text",
          editChgAble: true,
          addChgAble: false
        },
        {
          label: "买家姓名",
          prop: "customer_name",
          type: "text",
          editChgAble: true,
          addChgAble: false
        },
        {
          label: "买家电话",
          prop: "customer_phone",
          type: "text",
          editChgAble: true,
          addChgAble: false
        },
        {
          label: "买家城市",
          prop: "customer_city",
          type: "text",
          editChgAble: true,
          addChgAble: false
        },
        {
          label: "结账方式",
          prop: "payment_method",
          type: "text",
          editChgAble: true,
          addChgAble: false
        },
        {
          label: "发货物流",
          prop: "logistics_company",
          type: "text",
          editChgAble: true,
          addChgAble: false
        },
        {
          label: "物流单号",
          prop: "logistics_tracking_number",
          type: "text",
          editChgAble: true,
          addChgAble: false
        },
        {
          label: "责任方",
          prop: "responsible_party",
          type: "text",
          editChgAble: true,
          addChgAble: false
        },
        {
          label: "责任人",
          prop: "responsible_person",
          type: "text",
          editChgAble: true,
          addChgAble: false
        },
        {
          label: "赔偿方向",
          prop: "cmptn_direction",
          type: "text",
          editChgAble: true,
          addChgAble: false
        },
        {
          label: "赔偿金额",
          prop: "cmptn_fee",
          type: "text",
          editChgAble: true,
          addChgAble: false
        },
        {
          label: "协商日期",
          prop: "negotiation_date",
          type: "DatePicker",
          editChgAble: true,
          addChgAble: false
        },
        {
          label: "业务员",
          prop: "order_stuff",
          type: "text",
          editChgAble: true,
          addChgAble: false
        },
        {
          label: "费用类型",
          prop: "fee_type",
          type: "text",
          editChgAble: true,
          addChgAble: false
        },
        {
          label: "收款人",
          prop: "payee",
          type: "text",
          editChgAble: true,
          addChgAble: false
        },
        {
          label: "收款账户",
          prop: "payee_account",
          type: "text",
          editChgAble: true,
          addChgAble: false
        },
        {
          label: "问题描述",
          prop: "problem_description",
          type: "textarea",
          editChgAble: true,
          addChgAble: false
        },
        {
          label: "备注信息",
          prop: "note",
          type: "textarea",
          editChgAble: true,
          addChgAble: false
        }
      ],
      moreForms: true,
      threeParts: true,
      toggleText: false,
      defectiveProductsListVal: [],
      defectiveProductsHead: [
        {
          label: "商品编码",
          width: "200",
          prop: "proCode",
          type: "text"
        }
      ],
      addActiveName: "0",
      proData: [],
      options: regionDataPlus,
      addHead: [
        [
          {
            label: "商品编码",
            prop: "commodity_code",
            type: "text",
            width: "180"
          },
          {
            label: "规格编码",
            prop: "spec_code",
            type: "text",
            width: "150"
          },
          {
            label: "商品简称",
            prop: "short_name",
            type: "text",
            width: "120"
          },
          {
            label: "规格",
            prop: "spec",
            type: "text",
            width: "120"
          },
          {
            label: "颜色",
            prop: "color",
            type: "text",
            width: "120"
          },
          {
            label: "材质",
            prop: "materials",
            type: "text",
            width: "120"
          },
          {
            label: "功能",
            prop: "function",
            type: "text",
            width: "120"
          },
          {
            label: "特殊",
            prop: "special",
            type: "text",
            width: "120"
          },
          {
            label: "其他",
            prop: "other",
            type: "text",
            width: "120"
          },
          {
            label: "购买数量",
            prop: "buy_number",
            type: "text",
            width: "120"
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
      updateCmptnOrderFormVal: {},
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
      mergerIds: [],
      defProTableHead: [
        {
          label: "商品编码",
          prop: "commodity_code",
          type: "text",
          width: "180"
        },
        {
          label: "规格编码",
          prop: "spec_code",
          type: "text",
          width: "150"
        },
        {
          label: "商品简称",
          prop: "short_name",
          type: "text",
          width: "120"
        },
        {
          label: "规格",
          prop: "spec",
          type: "text",
          width: "120"
        },
        {
          label: "颜色",
          prop: "color",
          type: "text",
          width: "120"
        },
        {
          label: "材质",
          prop: "materials",
          type: "text",
          width: "120"
        },
        {
          label: "功能",
          prop: "function",
          type: "text",
          width: "120"
        },
        {
          label: "特殊",
          prop: "special",
          type: "text",
          width: "120"
        },
        {
          label: "其他",
          prop: "other",
          type: "text",
          width: "120"
        },
        {
          label: "购买数量",
          prop: "buy_number",
          type: "text",
          width: "120"
        }
      ],
      defProData: {
        commodity_code: "",
        spec_code: "",
        short_name: "",
        spec: "",
        color: "",
        materials: "",
        function: "",
        special: "",
        other: "",
        buy_number: ""
      },
      unHandle: []
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
          let data = this.cmptnOrderListTableData[0];
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
          this.$fetch(this.urls.aftercompensation + "/searchall").then(
            res => {
              this.loading = false;
              this.cmptnOrderListTableData = res.data;
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
          this.$fetch(this.urls.aftercompensation + "/searchalluntreated").then(
            res => {
              this.loading = false;
              this.unHandle = res.data;
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
          this.$fetch(this.urls.aftercompensation + "/searchsectreated").then(
            res => {
              this.loading = false;
              this.alreadyHandle = res.data;
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
          this.$fetch(this.urls.aftercompensation + "/searchsectreated").then(
            res => {
              this.loading = false;
              this.cmptnOrderListTableData = res.data;
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
      if (row["locker_id"] == 0) {
        this.newOpt[1].nClick = true;
        this.newOpt[2].nClick = true;
        this.newOpt[3].nClick = false;
        this.newOpt[4].nClick = true;
        this.newOpt[8].nClick = true;
        this.newOpt[9].nClick = true;
        this.newOpt[14].nClick = true;
        if (row["order_status"] == "已客审") {
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
      this.addCmptnOrderMask = true;
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
      let forData = this.addCmptnOrderFormVal;
      let submitData = {
        customer_nickname: forData.customer_nickname,
        customer_name: forData.customer_name,
        customer_phone: forData.customer_phone,
        customer_city: forData.customer_city,
        payment_method: forData.payment_method,
        logistics_company: forData.logistics_company,
        logistics_tracking_number: forData.logistics_tracking_number,
        responsible_party: forData.responsible_party,
        responsible_person: forData.responsible_person,
        cmptn_direction: forData.cmptn_direction,
        cmptn_fee: forData.cmptn_fee,
        negotiation_date: forData.negotiation_date,
        order_stuff: forData.order_stuff,
        fee_type: forData.fee_type,
        payee: forData.payee,
        payee_account: forData.payee_account,
        cmptn_shop: forData.cmptn_shop,
        problem_description: forData.problem_description,
        note: forData.note,
        cmptn_status: forData.cmptn_status
      };
      this.$post(this.urls.aftercompensation, submitData).then(
        () => {
          this.addCmptnOrderMask = false;
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
      this.addCmptnOrderMask = false;
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
      if (this.addCmptnOrderMask) {
        formVal = this.updateCmptnOrderFormVal;
      } else {
        formVal = this.updateCmptnOrderFormVal;
      }
      formVal["total_distribution_fee"] =
        formVal["deliver_goods_fee"] -
        0 +
        (formVal["move_upstairs_fee"] - 0) +
        (formVal["installation_fee"] - 0);
    },
    confirmAddProDtl() {
      if (this.addCmptnOrderMask) {
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
      if (this.addCmptnOrderMask) {
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
      this.delUrl = this.urls.aftercompensation;
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
            this.$del(this.urls.aftercompensation, { ids: this.ids }).then(
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
          this.cmptnOrderListTableData = res.data;
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
      this.updateCmptnOrderFormVal = {};
      this.updateCustomerMask = true;
      this.proRIndex = "";
      let id = this.checkboxId ? this.checkboxId : this.curRowId;
      this.$fetch(this.urls.aftercompensation + "/" + id).then(
        res => {
          this.updateCmptnOrderFormVal = res;
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
    updateCmptnConfirm() {
      let forData = this.updateCmptnOrderFormVal;
      let submitData = {
        customer_nickname: forData.customer_nickname,
        customer_name: forData.customer_name,
        customer_phone: forData.customer_phone,
        customer_city: forData.customer_city,
        payment_method: forData.payment_method,
        logistics_company: forData.logistics_company,
        logistics_tracking_number: forData.logistics_tracking_number,
        responsible_party: forData.responsible_party,
        responsible_person: forData.responsible_person,
        cmptn_direction: forData.cmptn_direction,
        cmptn_fee: forData.cmptn_fee,
        negotiation_date: forData.negotiation_date,
        order_stuff: forData.order_stuff,
        fee_type: forData.fee_type,
        payee: forData.payee,
        payee_account: forData.payee_account,
        cmptn_shop: forData.cmptn_shop,
        problem_description: forData.problem_description,
        note: forData.note,
        cmptn_status: forData.cmptn_status
      };
      let id = this.checkboxId ? this.checkboxId : this.curRowId;
      this.$patch(this.urls.aftercompensation + "/" + id, submitData).then(
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
      if (this.newOpt[5].nClick) {
        return;
      } else {
        let id = this.checkboxId ? this.checkboxId : this.curRowId;
        this.$put(this.urls.aftercompensation + "/" + id + "/audit").then(
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
      }
    },
    handleUnAudit() {
      let id = this.checkboxId ? this.checkboxId : this.curRowId;
      this.$put(this.urls.aftercompensation + "/" + id + "/unaudit").then(
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