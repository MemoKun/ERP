<template>
  <div>
    <!--筛选信息输入-->
    <div>
      <div class="searchBox" v-if="currentPage">
        <span>
          <label>单号</label>
          <el-input v-model="searchBox.resupply_order_no" clearable class="half"></el-input>
        </span>
        <span>
          <label>买家昵称</label>
          <el-input v-model="searchBox.member_nick" clearable class="half"></el-input>
        </span>
        <span>
          <label>买家姓名</label>
          <el-input v-model="searchBox.member_name" clearable class="half"></el-input>
        </span>
        <span>
          <label>补件类别</label>
          <el-select v-model="searchBox.re_supplie_categories_id" clearable placeholder="请选择">
            <span v-for="list in resData['resupplieCategory']" :key="list.id">
              <el-option :label="list.name?list.name:list.nick" :value="list.id"></el-option>
            </span>
          </el-select>
        </span>
      </div>
      <div class="searchBox">
        <span>
          <label>省</label>
          <el-input v-model="searchBox.receiver_state" clearable class="half"></el-input>
        </span>
        <span>
          <label>市</label>
          <el-input v-model="searchBox.receiver_city" clearable class="half"></el-input>
        </span>
        <span>
          <label>区</label>
          <el-input v-model="searchBox.receiver_district" clearable class="half"></el-input>
        </span>
        <span>
          <label>标记名称</label>
          <el-input v-model="searchBox.mark_name" clearable class="half"></el-input>
        </span>
      </div>
      <div class="searchBox">
        <span>
          <label>供应商</label>
          <el-select v-model="searchBox.suppliers_id" clearable placeholder="请选择">
            <span v-for="list in resData['suppliers']" :key="list.id">
              <el-option :label="list.name?list.name:list.nick" :value="list.id"></el-option>
            </span>
          </el-select>
        </span>
        <span>
          <label>不显示作废</label>
          <el-checkbox v-model="searchBox.is_invalid"></el-checkbox>
        </span>
        <span></span>
        <span></span>
      </div>
      <div style="text-align: right">
        <el-button type="primary" @click="searchData">筛选</el-button>
        <el-button @click="resets">重置</el-button>
      </div>
    </div>
    <!--补件单tab-->
    <el-tabs>
      <el-tab-pane label="所有补件单" name='0'>
        <el-table :data="orderData" v-loading="orderLoading" @selection-change="handleSelectionChange" @row-click="orderRClick">
          <el-table-column type="selection" width="95" align="center" :checked="checkboxInit">
          </el-table-column>
          <el-table-column v-for="item in orderHead" :label="item.label" :width="item.width" :key="item.label" align="center">
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
                <span v-if="scope.row[item.prop]">
                  {{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}
                </span>
              </span>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
    <!--页码-->
    <Pagination :page-url="this.urls.resupplieCenter" @handlePagChg="handlePagChg"></Pagination>
    <!--补件信息tab-->
    <el-tabs v-model="bottomActiveName" @tab-click="bottomTabsClick">
      <el-tab-pane label="补件产品" name='0'>
        <el-table :data="resupplyInfoData" v-loading="orderLoading">
          <el-table-column v-for="item in resupplyInfoHead" :label="item.label" :width="item.width" :key="item.label" align="center">
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
                <span v-if="scope.row[item.prop]">
                  {{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}
                </span>
              </span>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="问题产品" name='1'>
        <el-table :data="problemProData" v-loading="orderLoading">
          <el-table-column v-for="item in problemProHead" :label="item.label" :width="item.width" :key="item.label" align="center">
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
                <span v-if="scope.row[item.prop]">
                  {{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}
                </span>
              </span>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="图片信息" name="2" v-loading="orderLoading">
        <div style="text-align: right">
          <template slot-scope="scope">
            <div :data="imageData">
              <span v-for="item in imageHead" :key="item.prop">
                <img :src="scope.row[item.prop]">
              </span>
            </div>
          </template>
          <el-button>删除</el-button>
          <el-button>上传</el-button>
        </div>
      </el-tab-pane>
      <el-tab-pane label="驳回原因" name='3'>
        <el-table :data="rejectReasonData" v-loading="orderLoading">
          <el-table-column v-for="item in rejectReasonHead" :label="item.label" :width="item.width" :key="item.label" align="center">
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
                <span v-if="scope.row[item.prop]">
                  {{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}
                </span>
              </span>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="采购明细" name='4'>
        <el-table :data="purchaseData" v-loading="orderLoading">
          <el-table-column v-for="item in purchaseHead" :label="item.label" :width="item.width" :key="item.label" align="center">
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
                <span v-if="scope.row[item.prop]">
                  {{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}
                </span>
              </span>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="操作记录" name='5'>
        <el-table :data="operationData" v-loading="orderLoading">
          <el-table-column v-for="item in operationHead" :label="item.label" :width="item.width" :key="item.label" align="center">
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
                <span v-if="scope.row[item.prop]">
                  {{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}
                </span>
              </span>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="补件进度" name='6'>
        <el-table :data="progressData" v-loading="orderLoading">
          <el-table-column type="selection" width="95" align="center" :checked="checkboxInit"></el-table-column>
          <el-table-column v-for="item in progressHead" :label="item.label" :width="item.width" :key="item.label" align="center">
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
                <span v-if="scope.row[item.prop]">
                  {{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}
                </span>
              </span>
            </template>
          </el-table-column>
        </el-table>
        <div style="text-align: right">
          <el-button @click="addProgress">新增进度</el-button>
          <el-button @click="updateProgress">修改进度</el-button>
          <el-button @click="delProgress">删除进度</el-button>
        </div>
      </el-tab-pane>
      <el-tab-pane label="电子面单" name='7'>
        <el-table :data="esheetData" v-loading="orderLoading">
          <el-table-column v-for="item in esheetHead" :label="item.label" :width="item.width" :key="item.label" align="center">
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
                <span v-if="scope.row[item.prop]">
                  {{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}
                </span>
              </span>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="内部便签" name='8'>
        <el-table :data="innerNoteData" v-loading="orderLoading">
          <el-table-column v-for="item in innerNoteHead" :label="item.label" :width="item.width" :key="item.label" align="center">
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
                <span v-if="scope.row[item.prop]">
                  {{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}
                </span>
              </span>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
    <!--添加补件进度-->
    <el-dialog title="新增补件进度" :visible.sync="addProgressMask">
      <add-new :rule-form="addProgressForm" :add-arr="addProgressHead" :onlyInputs="true"></add-new>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="addProgressConfirm">确定</el-button>
        <el-button @click="addProgressCancel">取消</el-button>
      </div>
    </el-dialog>
    <!--修改补件进度-->
    <el-dialog title="修改补件进度" :visible.sync="updateProgressMask">
      <add-new :rule-form="updateProgressFrom" :add-arr="addProgressHead" :onlyInputs="true"></add-new>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="updateProgressConfirm">确定</el-button>
        <el-button @click="updateProgressCancel">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { regionDataPlus } from "element-china-area-data";
export default {
  data() {
    return {
      newOpt: [
        {
          cnt: "退审",
          icon: "bf-auditfaild",
          ent: this.auditfaild
        },
        {
          cnt: "导出",
          icon: "bf-out",
          ent: this.test
        },
        {
          cnt: "作废",
          icon: "bf-void",
          ent: this.void
        },
        {
          cnt: "刷新",
          icon: "bf-refresh",
          ent: this.refresh
        }
      ],
      currentPage: true,
      filterBox: false,
      activeName: "0",
      bottomActiveName: "0",
      searchBox: {
        resupply_order_no: "",
        member_nick: "",
        member_name: "",
        re_supplie_categories_id: "",
        receiver_state: "",
        receiver_city: "",
        receiver_district: "",
        mark_name: "",
        suppliers_id: "",
        is_invalid: ""
      },
      orderId: "",
      orderRow: {},
      options: regionDataPlus,
      moreForms: true,
      //补件单
      orderData: [],
      orderHead: [
        {
          label: "补件单号",
          width: "220",
          prop: "resupply_order_no",
          type: "text"
        },
        {
          label: "系统单号",
          width: "220",
          prop: "system_order_no",
          type: "text"
        },
        {
          label: "包件类型",
          width: "140",
          prop: "packageType",
          inProp: "name",
          type: "text"
        },
        {
          label: "补件类别",
          width: "140",
          prop: "resupplieCategory",
          inProp: "name",
          type: "text"
        },
        {
          label: "补件成本",
          width: "130",
          prop: "resupply_cost",
          type: "number"
        },
        {
          label: "补件金额",
          width: "130",
          prop: "resupply_money",
          type: "number"
        },
        {
          label: "补件原因",
          width: "300",
          prop: "resupply_reason",
          type: "text"
        },
        {
          label: "补件备注",
          width: "300",
          prop: "resupply_remark",
          type: "text"
        },
        {
          label: "补件责任方",
          width: "160",
          prop: "resupplieResponsible",
          inProp: "name",
          type: "text"
        },
        {
          label: "原订单业务员",
          width: "160",
          prop: "salesman",
          type: "text"
        },
        {
          label: "店铺昵称",
          width: "130",
          prop: "shop_nick",
          type: "text"
        },
        {
          label: "买家昵称",
          width: "130",
          prop: "member_nick",
          type: "text"
        },
        {
          label: "店铺分组",
          width: "140",
          prop: "shop_group",
          type: "text"
        },
        {
          label: "买家姓名",
          width: "130",
          prop: "member_name",
          type: "text"
        },
        {
          label: "买家电话",
          width: "160",
          prop: "member_phone",
          type: "text"
        },
        {
          label: "供应商",
          width: "130",
          prop: "supplier",
          inProp: "name",
          type: "text"
        },
        {
          label: "物流代码",
          width: "140",
          prop: "logistic",
          inProp: "code",
          type: "text"
        },
        {
          label: "物流名称",
          width: "140",
          prop: "logistic",
          inProp: "name",
          type: "text"
        },
        {
          label: "物流电话",
          width: "140",
          prop: "logistic",
          inProp: "phone",
          type: "text"
        },
        {
          label: "快递单号",
          width: "140",
          prop: "express_no",
          type: "text"
        },
        {
          label: "配送方式",
          width: "160",
          prop: "distributionMethod",
          inProp: "name",
          type: "text"
        },
        {
          label: "运费类型",
          width: "140",
          prop: "freightType",
          inProp: "name",
          type: "text"
        },
        {
          label: "预计运费",
          width: "130",
          prop: "estimated_fee",
          type: "number"
        },
        {
          label: "物流赔偿费用",
          width: "130",
          prop: "compensate_fee",
          type: "number"
        },
        {
          label: "木架费用",
          width: "130",
          prop: "wooden_frame_fee",
          type: "number"
        },
        {
          label: "送装费用",
          width: "130",
          prop: "load_fee",
          type: "number"
        },
        {
          label: "承诺时间",
          width: "140",
          prop: "promise_time",
          type: "text"
        },
        {
          label: "补款方式",
          width: "140",
          prop: "refundMethod",
          inProp: "name",
          type: "text"
        },
        {
          label: "补款账号",
          width: "160",
          prop: "refund_account",
          type: "text"
        },
        {
          label: "开户银行",
          width: "140",
          prop: "bank",
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
          width: "200",
          prop: "address",
          type: "text"
        },
        {
          label: "标记名称",
          width: "140",
          prop: "mark_name",
          type: "text"
        },
        {
          label: "标记人",
          width: "140",
          prop: "marker",
          type: "text"
        },
        {
          label: "标记时间",
          width: "140",
          prop: "mark_time",
          type: "text"
        },
        {
          label: "创建人",
          width: "140",
          prop: "creator",
          type: "text"
        },
        {
          label: "提交人",
          width: "140",
          prop: "submitter",
          type: "text"
        },
        {
          label: "审核人",
          width: "140",
          prop: "reviewer",
          type: "text"
        },
        {
          label: "发货人",
          width: "140",
          prop: "consigner",
          type: "text"
        },
        {
          label: "发货仓库",
          width: "160",
          prop: "consign_warehouse",
          type: "text"
        },
        {
          label: "发货备注",
          width: "200",
          prop: "consign_remark",
          type: "text"
        },
        {
          label: "创建时间",
          width: "140",
          prop: "created_at",
          type: "text"
        },
        {
          label: "提交时间",
          width: "140",
          prop: "submit_time",
          type: "text"
        },
        {
          label: "审核时间",
          width: "140",
          prop: "review_time",
          type: "text"
        },
        {
          label: "结算时间",
          width: "140",
          prop: "settle_time",
          type: "text"
        },
        {
          label: "打印时间",
          width: "140",
          prop: "print_time",
          type: "text"
        },
        {
          label: "系统发货时间",
          width: "140",
          prop: "system_consign_time",
          type: "text"
        },
        {
          label: "实际发货时间",
          width: "140",
          prop: "real_consign_time",
          type: "text"
        },
        {
          label: "提交",
          width: "140",
          prop: "is_submit",
          type: "checkbox"
        },
        {
          label: "审核",
          width: "140",
          prop: "is_review",
          type: "checkbox"
        },
        {
          label: "结算",
          width: "140",
          prop: "is_settle",
          type: "checkbox"
        },
        {
          label: "打印",
          width: "140",
          prop: "is_print",
          type: "checkbox"
        },
        {
          label: "发货",
          width: "140",
          prop: "is_consign",
          type: "checkbox"
        },
        {
          label: "作废",
          width: "140",
          prop: "is_invalid",
          type: "checkbox"
        },
        {
          label: "方数",
          width: "140",
          prop: "square_number",
          type: "number"
        },
        {
          label: "件数",
          width: "140",
          prop: "number",
          type: "number"
        },
        {
          label: "补件申请标记名称",
          width: "200",
          prop: "application_mark_name",
          type: "text"
        },
        {
          label: "补件审核标记名称",
          width: "200",
          prop: "review_mark_name",
          type: "text"
        },
        {
          label: "实际发货时间(跟单货审)",
          width: "140",
          prop: "real_consign_time_1",
          type: "text"
        },
        {
          label: "入库状态",
          width: "140",
          prop: "warehousing_status",
          type: "text"
        },
        {
          label: "采购",
          width: "140",
          prop: "is_purchase",
          type: "checkbox"
        }
      ],
      //补件信息
      resupplyInfoData: [], //补件产品
      problemProData: [], //问题产品
      imageData: [], //图片信息
      rejectReasonData: [], //驳回原因
      purchaseData: [], //采购明细
      operationData: [], //操作记录
      progressData: [], //补件进度
      esheetData: [], //电子面单
      innerNoteData: [], //内部便签
      resupplyInfoHead: [
        //补件产品
        {
          label: "商品编码",
          width: "160",
          prop: "product",
          inProp: "commodity_code",
          type: "text"
        },
        {
          label: "子件编码",
          width: "160",
          prop: "productComponent",
          inProp: "component_code",
          type: "text"
        },
        {
          label: "商品简称",
          width: "160",
          prop: "product",
          inProp: "short_name",
          type: "text"
        },
        {
          label: "规格名称",
          width: "160",
          prop: "productComponent",
          inProp: "spec",
          type: "text"
        },
        {
          label: "数量",
          width: "120",
          prop: "quantity",
          type: "number"
        },
        {
          label: "商品成本",
          width: "120",
          prop: "productComponent",
          inProp: "cost",
          type: "number"
        },
        {
          label: "实际售价",
          width: "120",
          prop: "actual_price",
          type: "number"
        },
        {
          label: "备注",
          width: "200",
          prop: "remark",
          type: "text"
        }
      ],
      problemProHead: [
        //问题产品
        {
          label: "商品编码",
          width: "160",
          prop: "commodity_code",
          type: "text"
        },
        {
          label: "子件编码",
          width: "160",
          prop: "spec_code",
          type: "text"
        },
        {
          label: "商品简称",
          width: "160",
          prop: "short_name",
          type: "text"
        },
        {
          label: "规格名称",
          width: "160",
          prop: "spec",
          type: "text"
        },
        {
          label: "供应商",
          width: "130",
          prop: "supplier",
          inProp: "name",
          type: "text"
        },
        {
          label: "问题描述",
          width: "200",
          prop: "problem_description",
          type: "text"
        }
      ],
      imageHead: [
        //图片信息
        {
          prop: "img_url",
          tyep: "img"
        }
      ],
      rejectReasonHead: [
        //驳回原因
        {
          label: "驳回人",
          width: "130",
          prop: "rejecter",
          type: "text"
        },
        {
          label: "驳回时间",
          width: "130",
          prop: "created_at",
          type: "text"
        },
        {
          label: "驳回原因",
          width: "200",
          prop: "reason",
          type: "text"
        }
      ],
      purchaseHead: [
        //采购明细
        {
          label: "商品编码",
          width: "160",
          prop: "product",
          inProp: "commodity_code",
          type: "text"
        },
        {
          label: "子件编码",
          width: "160",
          prop: "productComponent",
          inProp: "component_code",
          type: "text"
        },
        {
          label: "商品简称",
          width: "160",
          prop: "product",
          inProp: "short_name",
          type: "text"
        },
        {
          label: "规格名称",
          width: "160",
          prop: "productComponent",
          inProp: "spec",
          type: "text"
        },
        {
          label: "采购数",
          width: "120",
          prop: "purchase_quantity",
          type: "number"
        },
        {
          label: "已入库数",
          width: "120",
          prop: "stock_in_count",
          type: "number"
        }
      ],
      operationHead: [
        //操作记录
        {
          label: "用户",
          width: "130",
          prop: "user_name",
          type: "text"
        },
        {
          label: "操作",
          width: "160",
          prop: "operation",
          type: "text"
        },
        {
          label: "操作描述",
          width: "200",
          prop: "description",
          type: "text"
        },
        {
          label: "创建时间",
          width: "130",
          prop: "created_at",
          type: "text"
        }
      ],
      progressHead: [
        //补件进度
        {
          label: "进度描述",
          width: "200",
          prop: "description",
          type: "text"
        },
        {
          label: "创建人",
          width: "150",
          prop: "creator",
          type: "text"
        },
        {
          label: "创建时间",
          width: "200",
          prop: "created_at",
          type: "text"
        }
      ],
      esheetHead: [
        {
          label: "电子面单号",
          width: "130",
          prop: "esheet_no",
          type: "text"
        }
      ],
      innerNoteHead: [
        {
          label: "主题",
          width: "130",
          prop: "theme",
          type: "text"
        },
        {
          label: "用户",
          width: "130",
          prop: "user_name",
          type: "text"
        },
        {
          label: "内容",
          width: "130",
          prop: "content",
          type: "text"
        },
        {
          label: "提出时间",
          width: "130",
          prop: "created_at",
          type: "text"
        }
      ],
      checkboxInit: false,
      orderLoading: true,
      currentId: "",
      orderSelection: "",
      delUrl: "",
      delId: "",
      delArr: [],
      //补件进度
      addProgressMask: false,
      addProgressForm: {
        creator: "",
        description: ""
      },
      addProgressHead: [
        {
          label: "创建人",
          holder: "请输入创建人",
          prop: "creator",
          type: "text",
          updateChgAble: true
        },
        {
          label: "进度描述",
          holder: "请输入进度描述",
          prop: "description",
          type: "textarea"
        }
      ],
      updateProgressMask: false,
      updateProgressFrom: {},
      //分页
      pagination: {
        current_page: 1,
        per_page: 0,
        page_total: 0
      }
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
  methods: {
    test() {
      console.log(1);
    },
    /*展开 */
    toggleShow() {
      this.filterBox = !this.filterBox;
    },
    //重置筛选信息
    resets() {
      this.searchBox = {};
    },
    fetchData() {
      this.$fetch(this.urls.resupplieCenter, {
        resupply_order_no: this.searchBox.resupply_order_no,
        member_nick: this.searchBox.member_nick,
        member_name: this.searchBox.member_name,
        re_supplie_categories_id: this.searchBox.re_supplie_categories_id,
        resupply_order_no: this.searchBox.resupply_order_no,
        receiver_state: this.searchBox.receiver_state,
        receiver_city: this.searchBox.receiver_city,
        receiver_district: this.searchBox.receiver_district,
        mark_name: this.searchBox.mark_name,
        suppliers_id: this.searchBox.suppliers_id,
        is_invalid: this.searchBox.is_invalid,
        include:
          "packageType,resupplieCategory,resupplieResponsible,logistic,freightType,supplier,distributionMethod,refundMethod,resupplieOrderItem.resupplieOrder,resupplieOrderItem.productComponent,resupplieOrderItem.product,resupplieProblemProduct.resupplieOrder,resupplieProblemProduct.supplier,resupplieImage,resupplieRejectReason,resuppliePurchase,resuppliePurchase.product,resuppliePurchase.productComponent,resupplieOperationRecord,resupplieProgress,resupplieEsheet,resupplieInnerNote"
      }).then(
        res => {
          this.orderLoading = false;
          this.orderData = res.data;
          this.currentId=this.orderData[0].id;
          let pg = res.meta.pagination;
          this.$store.dispatch("currentPage", pg.current_page);
          this.$store.commit("PER_PAGE", pg.per_page);
          this.$store.commit("PAGE_TOTAL", pg.total);
          this.$store.dispatch("resupplieCategory", "/resupplieCategory");
          this.$store.dispatch("suppliers", "/suppliers");
          this.resupplyInfoData = res.data[0]
            ? res.data[0]["resupplieOrderItem"].data
            : [];
          this.problemProData = res.data[0]
            ? res.data[0]["resupplieProblemProduct"].data
            : [];
          this.imageData = res.data[0]
            ? res.data[0]["resupplieImage"].data
            : [];
          this.rejectReasonData = res.data[0]
            ? res.data[0]["resupplieRejectReason"].data
            : [];
          this.operationData = res.data[0]
            ? res.data[0]["resupplieOperationRecord"].data
            : [];
          this.progressData = res.data[0]
            ? res.data[0]["resupplieProgress"].data
            : [];
          this.purchaseData = res.data[0]
            ? res.data[0]["resuppliePurchase"].data
            : [];
          this.esheetData = res.data[0]
            ? res.data[0]["resupplieEsheet"].data
            : [];
          this.innerNoteData = res.data[0]
            ? res.data[0]["resupplieInnerNote"].data
            : [];
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
    },
    //筛选
    searchData() {
      this.orderLoading = true;
      this.fetchData();
    },
    //批量选择
    handleSelectionChange(val) {
      let arr = [];
      val.forEach(selectedItem => {
        arr.push(selectedItem.id);
      });
      this.delArr = arr.join(",");
      this.currentId = val.length > 0 ? val[val.length - 1].id : "";
    },
    orderRClick(row) {
      //点击上方tab的某行底部tab更新
      this.orderId = row.id;
      this.resupplyInfoData = row["resupplieOrderItem"].data;
      this.problemProData = row["resupplieProblemProduct"].data;
      this.imageData = row["resupplieImage"].data;
      this.rejectReasonData = row["resupplieRejectReason"].data;
      this.purchaseData = row["resuppliePurchase"].data;
      this.operationData = row["resupplieOperationRecord"].data;
      this.progressData = row["resupplieProgress"].data;
      this.esheetData = row["resupplieEsheet"].data;
      this.innerNoteData = row["resupplieInnerNote"].data;
      this.orderRow = row;
    },
    /*补件信息tab */
    bottomTabsClick() {},
    //退审
    auditfaild() {
      let id = this.currentId ? this.currentId : this.orderRow.id;
      this.$put(this.urls.resupplieReview + "/" + id + "/auditfaild").then(
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
    //作废
    void() {
      let id = this.currentId ? this.currentId : this.orderRow.id;
      this.$put(this.urls.resupplieCenter + "/" + id + "/invalid").then(
        () => {
          this.refresh();
          this.$message({
            message: "作废成功",
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
    //补件进度
    addProgress() {
      this.addProgressMask = true;
      Object.assign(this.addProgressForm, this.$options.data().addProgressForm);
    },
    addProgressConfirm() {
      let id = this.currentId ? this.currentId : this.orderRow.id;
      let addProgressData = {
        re_supplie_orders_id: this.currentId
          ? this.currentId
          : this.orderRow.id,
        description: this.addProgressForm.description,
        creator: this.addProgressForm.creator
      };
      this.$post(this.urls.resupplieProgress, addProgressData).then(
        () => {
          this.addProgressMask = false;
          this.refresh();
          this.$message({
            message: "添加进度成功",
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
    addProgressCancel() {
      this.addProgressMask = false;
      this.$message({
        message: "取消添加",
        type: "info"
      });
    },
    updateProgress() {
      this.updateProgressMask = true;
      let id = this.currentId;
      this.$fetch(this.urls.resupplieProgress + "/" + id).then(
        res => {
          this.updateProgressFrom = {
            description: res.description,
            creator: res.creator
          };
        },
        err => {}
      );
    },
    updateProgressConfirm() {
      let id = this.currentId;
      let data = {
        description: this.updateProgressFrom.description,
        creator: this.updateProgressFrom.creator
      };
      this.$patch(this.urls.resupplieProgress + "/" + id, data).then(
        () => {
          this.updateProgressMask = false;
          this.refresh();
          this.$message({
            message: "修改成功",
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
    updateProgressCancel() {
      this.updateMask = false;
      this.$message({
        message: "取消修改",
        type: "info"
      });
    },
    delProgress() {
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
        })
          .then(() => {
            this.$del(this.urls.resupplieProgress, { ids: this.delArr }).then(
              () => {
                this.$message({
                  message: "删除成功",
                  type: "success"
                });
                this.refresh();
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
    /*分页*/
    handlePagChg(page) {
      this.$fetch(this.urls.resupplieCenter + "?page=" + page, {
        include:
          "packageType,resupplieCategory,resupplieResponsible,logistic,freightType,supplier,distributionMethod,refundMethod,resupplieOrderItem.resupplieOrder,resupplieOrderItem.productComponent,resupplieOrderItem.product,resupplieProblemProduct.resupplieOrder,resupplieProblemProduct.supplier,resupplieImage,resupplieRejectReason,resuppliePurchase,resuppliePurchase.product,resuppliePurchase.productComponent,resupplieOperationRecord,resupplieProgress,resupplieEsheet,resupplieInnerNote"
      }).then(res => {
        this.orderData = res.data;
      });
    },
    //刷新
    refresh() {
      this.orderLoading = true;
      this.resets();
      this.fetchData();
    }
  },
  mounted() {
    this.fetchData();
    this.$store.state.opt.opts = this.newOpt;
    this.$store.commit("change", this.newOpt);
    const that = this;
    $(window).resize(() => {
      return (() => {
        that.$store.state.opt.opts = that.newOpt;
        that.$store.commit("change", that.newOpt);
      })();
    });
  }
};
</script>