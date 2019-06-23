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
          <label>供应商</label>
          <el-select v-model="searchBox.suppliers_id" clearable placeholder="请选择">
            <span v-for="list in resData['suppliers']" :key="list.id">
              <el-option :label="list.name?list.name:list.nick" :value="list.id"></el-option>
            </span>
          </el-select>
        </span>
      </div>
      <div style="text-align: right">
        <el-button type="primary" @click="searchData">筛选</el-button>
        <el-button @click="resets">重置</el-button>
      </div>
    </div>
    <!--审核信息tab-->
    <el-tabs v-model="activeName" @tab-click="handleTabsClick">
      <el-tab-pane label="补大件" name='0'>
        <el-table :data="reviewData" @selection-change="handleSelectionChange" v-loading="orderLoading" @row-click="orderRClick">
          <el-table-column type="selection" width="95" align="center" :checked="checkboxInit">
          </el-table-column>
          <el-table-column v-for="item in reviewHead" :label="item.label" :width="item.width" :key="item.label" align="center">
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
      <el-tab-pane label="补零件" name='1'>
        <el-table :data="reviewData" @selection-change="handleSelectionChange" v-loading="orderLoading" @row-click="orderRClick">
          <el-table-column type="selection" width="95" align="center" :checked="checkboxInit">
          </el-table-column>
          <el-table-column v-for="item in reviewHead" :label="item.label" :width="item.width" :key="item.label" align="center">
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
      <el-tab-pane label="补金额" name='2'>
        <el-table :data="reviewData" @selection-change="handleSelectionChange" v-loading="orderLoading" @row-click="orderRClick">
          <el-table-column type="selection" width="95" align="center" :checked="checkboxInit">
          </el-table-column>
          <el-table-column v-for="item in reviewHead" :label="item.label" :width="item.width" :key="item.label" align="center">
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
      <el-tab-pane label="已审核" name='3'>
        <el-table :data="reviewData" @selection-change="handleSelectionChange" v-loading="orderLoading" @row-click="orderRClick">
          <el-table-column type="selection" width="95" align="center" :checked="checkboxInit">
          </el-table-column>
          <el-table-column v-for="item in reviewHead" :label="item.label" :width="item.width" :key="item.label" align="center">
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
      <el-tab-pane label="已结算" name='4'>
        <el-table :data="reviewData" @selection-change="handleSelectionChange" v-loading="orderLoading" @row-click="orderRClick">
          <el-table-column type="selection" width="95" align="center" :checked="checkboxInit">
          </el-table-column>
          <el-table-column v-for="item in reviewHead" :label="item.label" :width="item.width" :key="item.label" align="center">
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
    <Pagination :page-url="this.urls.resupplieReview" @handlePagChg="handlePagChg"></Pagination>
    <!--补件信息tab-->
    <el-tabs v-model="bottomActiveName" @tab-click="bottomTabsClick">
      <el-tab-pane label="补件产品" name="0">
        <el-table :data="resupplyInfoData" v-loading="orderLoading">
          <el-table-column v-for="item in resupplyInfoHead" :label="item.label" align="center" :width="item.width" :key="item.label">
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
      <el-tab-pane label="问题产品" name="1" v-loading="orderLoading">
        <el-table :data="problemProData">
          <el-table-column v-for="item in problemProHead" :label="item.label" align="center" :width="item.width" :key="item.label">
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
      <el-tab-pane label="驳回原因" name="3" v-loading="orderLoading">
        <el-table :data="rejectReasonData">
          <el-table-column v-for="item in rejectReasonHead" :label="item.label" align="center" :width="item.width" :key="item.label">
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
        <div></div>
      </el-tab-pane>
      <el-tab-pane label="操作记录" name="4" v-loading="orderLoading">
        <el-table :data="operationData">
          <el-table-column v-for="item in operationHead" :label="item.label" align="center" :width="item.width" :key="item.label">
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
      <el-tab-pane label="补件进度" name="5" v-loading="orderLoading">
        <el-table :data="progressData">
          <el-table-column type="selection" width="95" align="center" :checked="checkboxInit"></el-table-column>
          <el-table-column v-for="item in progressHead" :label="item.label" align="center" :width="item.width" :key="item.label">
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
    </el-tabs>
    <!--驳回-->
    <el-dialog title="驳回" :visible.sync="rejectMask">
      <add-new :rule-form="rejectForm" :add-arr="rejectHead" :onlyInputs="true"></add-new>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="rejectConfirm">确定</el-button>
        <el-button @click="rejectCancel">取消</el-button>
      </div>
    </el-dialog>
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
          cnt: "驳回",
          icon: "bf-reject",
          ent: this.reject,
          nClick: false
        },
        {
          cnt: "审核",
          icon: "bf-audit",
          ent: this.audit
        },
        {
          cnt: "退审",
          icon: "bf-auditfaild",
          ent: this.auditfaild,
          nClick: true
        },
        {
          cnt: "结算",
          icon: "bf-finSettle",
          ent: this.settle,
          nClick: true
        },
        {
          cnt: "导出",
          icon: "bf-out",
          ent: this.test
        },
        {
          cnt: "打印",
          icon: "bf-printer",
          ent: this.test
        },
        {
          cnt: "刷新",
          icon: "bf-refresh",
          ent: this.refresh
        }
      ],
      checkboxInit: false,
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
        suppliers_id: ""
      },
      //分页
      pagination: {
        current_page: 1,
        per_page: 0,
        page_total: 0
      },
      options: regionDataPlus,
      //审核信息
      reviewData: [],
      reviewHead: [
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
          label: "补件责任方",
          width: "160",
          prop: "resupplieResponsible",
          inProp: "name",
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
          prop: "member_telephone",
          type: "number"
        },
        {
          label: "物流公司",
          width: "140",
          prop: "logistics",
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
          label: "运费类型",
          width: "140",
          prop: "freightType",
          inProp: "name",
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
          label: "配送方式",
          width: "160",
          prop: "distributionMethod",
          inProp: "name",
          type: "text"
        },
        {
          label: "送装费",
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
          label: "创建人",
          width: "140",
          prop: "creator",
          type: "text"
        },
        {
          label: "创建时间",
          width: "140",
          prop: "created_at",
          type: "text"
        },
        {
          label: "备注",
          width: "300",
          prop: "remark",
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
          label: "补件申请的标记名称",
          width: "200",
          prop: "application_mark_name",
          type: "text"
        }
      ],
      //补件信息
      resupplyInfoData: [], //补件产品
      problemProData: [], //问题产品
      imageData: [], //图片信息
      rejectReasonData: [], //驳回原因
      operationData: [], //操作记录
      progressData: [], //补件进度
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
      orderRow: {},
      currentId: "",
      delArr: [],
      //驳回
      rejectMask: false,
      rejectForm: {
        rejecter: "",
        reason: ""
      },
      rejectHead: [
        {
          label: "驳回人",
          holder: "请输入驳回人",
          prop: "rejecter",
          type: "text"
        },
        {
          label: "驳回原因",
          holder: "请输入驳回原因",
          prop: "reason",
          type: "textarea"
        }
      ],
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
      //刷新
      orderLoading: true
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
    //获取数据
    fetchData() {
      let index = this.activeName - 0;
      switch (index) {
        case 0:
          this.$fetch(this.urls.resupplieReview + "/searchBigPackage", {
            resupply_order_no: this.searchBox.resupply_order_no,
            member_nick: this.searchBox.member_nick,
            member_name: this.searchBox.member_name,
            re_supplie_categories_id: this.searchBox.re_supplie_categories_id,
            receiver_state: this.searchBox.receiver_state,
            receiver_city: this.searchBox.receiver_city,
            receiver_district: this.searchBox.receiver_district,
            suppliers_id: this.searchBox.suppliers_id,
            include:
              "packageType,resupplieCategory,resupplieResponsible,logistic,freightType,supplier,distributionMethod,refundMethod,resupplieOrderItem.resupplieOrder,resupplieOrderItem.productComponent,resupplieOrderItem.product,resupplieProblemProduct.resupplieOrder,resupplieProblemProduct.supplier,resupplieImage,resupplieRejectReason,resupplieOperationRecord,resupplieProgress"
          }).then(
            res => {
              this.orderLoading = false;
              this.reviewData = res.data;
              this.currentId=this.reviewData[0].id;
              let pg = res.meta.pagination;
              this.$store.dispatch("currentPage", pg.current_page);
              this.$store.commit("PER_PAGE", pg.per_page);
              this.$store.commit("PAGE_TOTAL", pg.total);
              this.$store.dispatch("suppliers", "/suppliers");
              this.$store.dispatch("resupplieCategory", "/resupplieCategory");
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
          this.$fetch(this.urls.resupplieReview + "/searchPartPackage", {
            resupply_order_no: this.searchBox.resupply_order_no,
            member_nick: this.searchBox.member_nick,
            member_name: this.searchBox.member_name,
            re_supplie_categories_id: this.searchBox.re_supplie_categories_id,
            receiver_state: this.searchBox.receiver_state,
            receiver_city: this.searchBox.receiver_city,
            receiver_district: this.searchBox.receiver_district,
            suppliers_id: this.searchBox.suppliers_id,
            include:
              "packageType,resupplieCategory,resupplieResponsible,logistic,freightType,supplier,distributionMethod,refundMethod,resupplieOrderItem.resupplieOrder,resupplieOrderItem.productComponent,resupplieOrderItem.product,resupplieProblemProduct.resupplieOrder,resupplieProblemProduct.supplier,resupplieImage,resupplieRejectReason,resupplieOperationRecord,resupplieProgress"
          }).then(
            res => {
              this.orderLoading = false;
              this.reviewData = res.data;
              this.currentId=this.reviewData[0].id;
              let pg = res.meta.pagination;
              this.$store.dispatch("currentPage", pg.current_page);
              this.$store.commit("PER_PAGE", pg.per_page);
              this.$store.commit("PAGE_TOTAL", pg.total);
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
          this.$fetch(this.urls.resupplieReview + "/searchMoneyPackage", {
            resupply_order_no: this.searchBox.resupply_order_no,
            member_nick: this.searchBox.member_nick,
            member_name: this.searchBox.member_name,
            re_supplie_categories_id: this.searchBox.re_supplie_categories_id,
            receiver_state: this.searchBox.receiver_state,
            receiver_city: this.searchBox.receiver_city,
            receiver_district: this.searchBox.receiver_district,
            suppliers_id: this.searchBox.suppliers_id,
            include:
              "packageType,resupplieCategory,resupplieResponsible,logistic,freightType,supplier,distributionMethod,refundMethod,resupplieOrderItem.resupplieOrder,resupplieOrderItem.productComponent,resupplieOrderItem.product,resupplieProblemProduct.resupplieOrder,resupplieProblemProduct.supplier,resupplieImage,resupplieRejectReason,resupplieOperationRecord,resupplieProgress"
          }).then(
            res => {
              this.orderLoading = false;
              this.reviewData = res.data;
              let pg = res.meta.pagination;
              this.$store.dispatch("currentPage", pg.current_page);
              this.$store.commit("PER_PAGE", pg.per_page);
              this.$store.commit("PAGE_TOTAL", pg.total);
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
          this.$fetch(this.urls.resupplieReview + "/searchReview", {
            resupply_order_no: this.searchBox.resupply_order_no,
            member_nick: this.searchBox.member_nick,
            member_name: this.searchBox.member_name,
            re_supplie_categories_id: this.searchBox.re_supplie_categories_id,
            receiver_state: this.searchBox.receiver_state,
            receiver_city: this.searchBox.receiver_city,
            receiver_district: this.searchBox.receiver_district,
            suppliers_id: this.searchBox.suppliers_id,
            include:
              "packageType,resupplieCategory,resupplieResponsible,logistic,freightType,supplier,distributionMethod,refundMethod,resupplieOrderItem.resupplieOrder,resupplieOrderItem.productComponent,resupplieOrderItem.product,resupplieProblemProduct.resupplieOrder,resupplieProblemProduct.supplier,resupplieImage,resupplieRejectReason,resupplieOperationRecord,resupplieProgress"
          }).then(
            res => {
              this.orderLoading = false;
              this.reviewData = res.data;
              let pg = res.meta.pagination;
              this.$store.dispatch("currentPage", pg.current_page);
              this.$store.commit("PER_PAGE", pg.per_page);
              this.$store.commit("PAGE_TOTAL", pg.total);
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
          this.$fetch(this.urls.resupplieReview + "/searchSettle", {
            resupply_order_no: this.searchBox.resupply_order_no,
            member_nick: this.searchBox.member_nick,
            member_name: this.searchBox.member_name,
            re_supplie_categories_id: this.searchBox.re_supplie_categories_id,
            receiver_state: this.searchBox.receiver_state,
            receiver_city: this.searchBox.receiver_city,
            receiver_district: this.searchBox.receiver_district,
            suppliers_id: this.searchBox.suppliers_id,
            include:
              "packageType,resupplieCategory,resupplieResponsible,logistic,freightType,supplier,distributionMethod,refundMethod,resupplieOrderItem.resupplieOrder,resupplieOrderItem.productComponent,resupplieOrderItem.product,resupplieProblemProduct.resupplieOrder,resupplieProblemProduct.supplier,resupplieImage,resupplieRejectReason,resupplieOperationRecord,resupplieProgress"
          }).then(
            res => {
              this.orderLoading = false;
              this.reviewData = res.data;
              let pg = res.meta.pagination;
              this.$store.dispatch("currentPage", pg.current_page);
              this.$store.commit("PER_PAGE", pg.per_page);
              this.$store.commit("PAGE_TOTAL", pg.total);
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
    searchData() {
      this.orderLoading = true;
      this.fetchData();
    },
    /*审核信息tab */
    handleTabsClick() {
      switch (this.activeName) {
        case "0":
          this.newOpt[0].nClick = false;
          this.newOpt[1].nClick = false;
          this.newOpt[2].nClick = true;
          this.newOpt[3].nClick = true;
          break;
        case "1":
          this.newOpt[0].nClick = false;
          this.newOpt[1].nClick = false;
          this.newOpt[2].nClick = true;
          this.newOpt[3].nClick = true;
          break;
        case "2":
          this.newOpt[0].nClick = false;
          this.newOpt[1].nClick = false;
          this.newOpt[2].nClick = true;
          this.newOpt[3].nClick = true;
          break;
        case "3":
          this.newOpt[0].nClick = true;
          this.newOpt[1].nClick = true;
          this.newOpt[2].nClick = false;
          this.newOpt[3].nClick = false;
          break;
        case "4":
          this.newOpt[0].nClick = true;
          this.newOpt[1].nClick = true;
          this.newOpt[2].nClick = true;
          this.newOpt[3].nClick = true;
          break;
      }
      this.refresh();
    },
    /*补件信息tab */
    bottomTabsClick() {},
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
      this.operationData = row["resupplieOperationRecord"].data;
      this.progressData = row["resupplieProgress"].data;
      this.orderRow = row;
    },
    //驳回
    reject() {
      this.rejectMask = true;
      Object.assign(this.rejectForm, this.$options.data().rejectForm);
    },
    rejectConfirm() {
      let id = this.currentId ? this.currentId : this.orderRow.id;
      let rejectData = {
        re_supplie_orders_id: this.currentId
          ? this.currentId
          : this.orderRow.id,
        rejecter: this.rejectForm.rejecter,
        reason: this.rejectForm.reason
      };
      this.$post(this.urls.resupplieRejectReason, rejectData).then(
        () => {
          this.$put(this.urls.resupplieApplication + "/" + id + "/reject").then(
            () => {
              this.rejectMask = false;
              this.refresh();
              this.$message({
                message: "驳回成功",
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
    rejectCancel() {
      this.rejectMask = false;
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
    //审核
    audit() {
      let id = this.currentId ? this.currentId : this.orderRow.id;
      this.$put(this.urls.resupplieReview + "/" + id + "/audit").then(
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
    //结算
    settle() {
      let id = this.currentId ? this.currentId : this.orderRow.id;
      this.$put(this.urls.resupplieReview + "/" + id + "/settle").then(
        () => {
          this.refresh();
          this.$message({
            message: "结算成功",
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
    //分页
    handlePagChg(page) {
      this.$fetch(this.urls.resupplieReview + "?page=" + page, {
        include:
          "packageType,resupplieCategory,resupplieResponsible,logistic,freightType,supplier,distributionMethod,refundMethod,resupplieOrderItem.resupplieOrder,resupplieOrderItem.productComponent,resupplieOrderItem.product,resupplieProblemProduct.resupplieOrder,resupplieProblemProduct.supplier,resupplieImage,resupplieRejectReason,resupplieOperationRecord,resupplieProgress"
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