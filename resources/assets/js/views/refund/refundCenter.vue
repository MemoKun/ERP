<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="outerHandleClick">
      <div>
        <div class="searchBox">
          <span>
            <label>店铺昵称</label>
            <el-select v-model="searchBox.shops_id" clearable placeholder="请选择">
              <span v-for="list in resData['shops']" :key="list.id">
                <el-option :label="list['nick']" :value="list.id"></el-option>
              </span>
            </el-select>
          </span>
          <span>
            <label>订单编号</label>
            <el-input v-model.trim="searchBox.order_no" clearable></el-input>
          </span>
          <span>
            <label>买家昵称</label>
            <el-input v-model.trim="searchBox.buyer_nick" clearable></el-input>
          </span>
          <span>
            <label>买家姓名</label>
            <el-input v-model.trim="searchBox.buyer_name" clearable></el-input>
          </span>
        </div>
        <div class="searchBox">
          <span>
            <label>锁定人</label>
            <el-select v-model="searchBox.locker_id" clearable placeholder="请选择">
              <span v-for="list in addSubData['user']" :key="list.id">
                <el-option :label="list['username']" :value="list.id"></el-option>
              </span>
            </el-select>
          </span>
          <span>
            <label>还款时间</label>
            <el-date-picker v-model="searchBox.refund_time" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
          </span>
        </div>
        <div style="text-align: right">
          <el-button type="primary" @click="searchData">筛选</el-button>
          <el-button @click="resets">重置</el-button>
        </div>
      </div>

      <!--显示列表-未处理-->
      <el-tabs v-model="orderListActiveName" @tab-click="leftHandleClick" style="height: 400px;">
        <el-tab-pane label="客审未处理" name="0">
          <el-table :data="bsUntreatedOrderListData" fit @selection-change="handleSelectionChange" v-loading="loading" height="350" @row-click="orderListRowClick">
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
        <el-tab-pane label="客审未处理" name="1">
          <el-table :data="asUntreatedOrderListData" fit @selection-change="handleSelectionChange" v-loading="loading" height="350" @row-click="orderListRowClick">
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
        <el-tab-pane label="财务未处理" name="2">
          <el-table :data="fdUntreatedOrderListData" fit @selection-change="handleSelectionChange" v-loading="loading" height="350" @row-click="orderListRowClick">
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
        <el-tab-pane label="已完结" name="3">
          <el-table :data="treatedOrderListData" fit @selection-change="handleSelectionChange" v-loading="loading" height="350" @row-click="orderListRowClick">
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
        <el-tab-pane label="详细信息" name="0">
          <el-form :model="detailRefundOrderData" class="quarter_turn">
            <el-form-item v-for="(item,index) in detailRefundOrderHead" :label="item.label" align="center" :prop="item.prop" :key="index">
              <span v-if="item.type=='text'">
                <span v-if="item.inProp">
                  <el-input v-model.trim="detailRefundOrderData[item.prop][item.inProp]" :placeholder="item.holder" :disabled="item.addChgAble"></el-input>
                </span>
                <span v-else>
                  <el-input v-model.trim="detailRefundOrderData[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble"></el-input>
                </span>
              </span>
              <span v-else-if="item.type=='number'">
                <span v-if="item.prop=='deliver_goods_fee' || item.prop=='move_upstairs_fee' || item.prop=='installation_fee'">
                  <el-input type="number" v-model.trim="detailRefundOrderData[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble" @input="formChg"></el-input>
                </span>
                <span v-else>
                  <el-input type="number" v-model.trim="detailRefundOrderData[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble"></el-input>
                </span>
              </span>
              <!--选择框拉取数据库数据-->
              <span v-else-if="item.type=='select'">
                <el-select v-model="detailRefundOrderData[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble">
                  <span v-for="list in resData[item.stateVal]" :key="list.id">
                    <el-option :label="list.name?list.name:list.nick" :value="list.id"></el-option>
                  </span>
                </el-select>
              </span>
              <span v-else-if="item.type == 'selects'">
                <el-select v-model="detailRefundOrderData[item.prop]" :placeholder="item.holder">
                  <span v-for="list in selectVal[item.prop]" :key="list.value">
                    <el-option :label="list.label" :value="list.value"></el-option>
                  </span>
                </el-select>
              </span>
              <span v-else-if="item.type=='textarea'">
                <el-input type="textarea" v-model.trim="detailRefundOrderData[item.prop]" :placehode="item.holder" :disabled="item.addChgAble"></el-input>
              </span>
              <span v-else-if="item.type=='checkbox'">
                <el-checkbox v-model="detailRefundOrderData[item.prop]" :disabled="item.chgAble"></el-checkbox>
              </span>
              <span v-else-if="item.type=='radio'">
                <el-radio v-model="detailRefundOrderData[item.prop]" label="volume">{{item.choiceName[0]}}</el-radio>
                <el-radio v-model="detailRefundOrderData[item.prop]" label="weight">{{item.choiceName[1]}}</el-radio>
              </span>
              <span v-else-if="item.type=='DatePicker'">
                <el-date-picker v-model="detailRefundOrderData[item.prop]" type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期"></el-date-picker>
              </span>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="操作记录" name="1">
          <el-table :data="operationData">
            <el-table-column v-for="item in operationRecordHead" :label="item.label" align="center" :width="item.width" :key="item.prop">
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
        <el-tab-pane label="退款责任方" name="2">
          <el-table :data="responsiblePartyData" fit>
            <el-table-column v-for="item in refundResponsiblePartyHead" :label="item.label" align="center" :width="item.width" :key="item.prop">
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
        <el-tab-pane label="多张图片" name="3">
          <el-table :data="refundReasonTabData">
            <el-table-column v-for="item in refundReasonTabHead" :label="item.label" align="center" :width="item.width" :key="item.prop">
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

    <el-dialog title="驳回原因" :visible.sync="refuseMask">
      <label>{{this.updateRefundOrderFormVal.refund_order_status}}</label>
      <el-input type="textarea" v-model="updateRefundOrderFormVal.as_remark"></el-input>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="refuseConfirm">确定</el-button>
        <el-button @click="refuseCancel">取消</el-button>
      </div>
    </el-dialog>

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

      /**SearchBox
       * 搜索框相关参数
      */
      filterBox: false,
      searchBox: {
        shops_id: "",
        order_sn: "",
        buyer_nick: "",
        buyer_name: "",
        locker_id: "",
        refund_time: ""
      },
      addSubData: [],
      /**订单列表Tab
       * 订单列表的相关参数
       * */
      activeName: "0",
      orderListActiveName: "0",

      orderListTabCurRowId: "",

      bsUntreatedOrderListData: [],
      asUntreatedOrderListData: [],
      fdUntreatedOrderListData: [],
      treatedOrderListData: [],
      OrderListCurRowData: {},
      responsiblePartyData: [
        {
          responsible_party: "11",
          responsible_person: "11",
          responsible_amount: "11"
        }
      ],

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
      addRefundOrderFormVal: {
        refund_sn: "",
        order_sn: "",
        refund_payment_methods_id: "",
        shops_id: "",
        refund_account: "",
        bank: "",
        bank_address: "",
        refund_amount: "",
        transaction_sn: "",
        refund_reason_type_id: "",
        buyer_nick: "",
        buyer_name: "",
        payment_amount: "",
        order_price: "",
        order_time: "",
        is_delivered: "",
        responsible_party: "",
        responsible_person: "",
        responsible_amount: "",
        refund_description: "",
        business_remark: "",
        as_remark: "",
        f_remark: "",
        status: "",
        refund_reason: [
          {
            img_url: "",
            refund_reason: "",
            refund_description: "",
            refund_amount: ""
          }
        ]
      },
      addRefundFormRules: {
        //新建订单的要求格式
        order_sn: [{ required: true, message: "系统单号必选", trigger: "blur" }],
        refund_payment_methods_id: [
          { required: true, message: "退款方式必选", trigger: "blur" }
        ],
        shops_id: [{ required: true, message: "所属店铺必选", trigger: "blur" }],
        refund_reason_type_id: [
          { required: true, message: "退款原因必选", trigger: "blur" }
        ],
        buyer_nick: [{ required: true, message: "买家昵称必填", trigger: "blur" }]
      },
      addRefundFormHead: [
        //新建订单的文本框表头
        {
          label: "退款单号",
          prop: "refund_sn",
          holder: "系统自动生成",
          width: "200",
          type: "text",
          editChgAble: true,
          addChgAble: true
        },
        {
          label: "系统单号",
          prop: "order_sn",
          holder: "从已有订单中选择",
          type: "text"
        },
        {
          label: "退款方式",
          prop: "refund_payment_methods_id",
          holder: "请选择退款方式",
          width: "200",
          type: "text"
        },
        {
          label: "所属店铺",
          prop: "shops_id",
          holder: "请选择所属店铺",
          width: "200",
          type: "text"
        },
        {
          label: "退款账号",
          prop: "refund_account",
          holder: "客户的收款账号",
          width: "200",
          type: "text"
        },
        /**{
            label: '退款类型',
            prop: 'refund_payment_methods_id',
            holder: '退款方式（支付宝、现金等）',
            width:'200',
            type: 'text',
          },**/
        {
          label: "开户银行",
          prop: "bank",
          holder: "客户开户银行",
          width: "200",
          type: "text"
        },
        {
          label: "开户银行地址",
          prop: "bank_address",
          width: "200",
          type: "text"
        },
        {
          label: "退款金额",
          prop: "refund_amount",
          width: "200",
          type: "text"
        },
        {
          label: "交易单号",
          prop: "transaction_sn",
          holder: "请输入交易单号",
          width: "200",
          type: "text"
        },
        {
          label: "退款原因",
          prop: "refund_reason_type_id",
          holder: "请选择退款原因",
          width: "200",
          type: "select",
          stateVal: "refundReasonType"
        },
        {
          label: "买家昵称",
          prop: "buyer_nick",
          holder: "输入买家昵称",
          width: "200",
          type: "text"
        },
        {
          label: "买家姓名",
          prop: "buyer_name",
          holder: "输入买家姓名",
          width: "200",
          type: "text"
        },
        {
          label: "支付金额",
          prop: "payment_amount",
          holder: "买家的付款金额",
          width: "200",
          type: "text"
        },
        {
          label: "拍单金额",
          prop: "order_price",
          holder: "输入用户拍单金额",
          width: "200",
          type: "text"
        },
        {
          label: "拍单时间",
          prop: "order_time",
          width: "200",
          type: "DatePicker"
        },
        {
          label: "是否发货",
          prop: "is_delivered",
          width: "200",
          type: "checkbox"
        },
        {
          label: "责任方",
          prop: "responsible_party",
          width: "200",
          type: "text"
        },
        {
          label: "责任人",
          prop: "responsible_person",
          width: "200",
          type: "text"
        },
        {
          label: "责任金额",
          prop: "responsible_amount",
          width: "200",
          type: "text"
        },
        {
          label: "退款说明",
          prop: "refund_description",
          width: "200",
          type: "textarea"
        },
        {
          label: "业务备注",
          prop: "business_remark",
          width: "200",
          type: "textarea"
        }
      ],
      detailRefundOrderData: {
        refund_sn: "",
        order_sn: "",
        refund_payment_methods_id: "",
        shops_id: "",
        refund_account: "",
        bank: "",
        bank_address: "",
        refund_amount: "",
        transaction_sn: "",
        refund_reason_type_id: "",
        buyer_nick: "",
        buyer_name: "",
        payment_amount: "",
        order_price: "",
        order_time: "",
        is_delivered: "",
        responsible_party: "",
        responsible_person: "",
        responsible_amount: "",
        refund_description: "",
        business_remark: "",
        as_remark: "",
        f_remark: "",
        refund_reason: [
          {
            img_url: "",
            refund_reason: "",
            refund_description: "",
            refund_amount: ""
          }
        ]
      },
      detailRefundOrderHead: [
        {
          label: "退款单号",
          prop: "refund_sn",
          holder: "系统自动生成",
          width: "25%",
          type: "text",
          editChgAble: true,
          addChgAble: true
        },
        {
          label: "系统单号",
          prop: "order_sn",
          holder: "从已有订单中选择",
          width: "25%",
          type: "text",
          addChgAble: true
        },
        {
          label: "买家昵称",
          prop: "buyer_nick",
          holder: "输入买家昵称",
          width: "25%",
          type: "text",
          addChgAble: true
        },
        {
          label: "买家姓名",
          prop: "buyer_name",
          holder: "输入买家姓名",
          width: "25%",
          type: "text",
          addChgAble: true
        },
        {
          label: "退款金额",
          prop: "refund_amount",
          width: "25%",
          type: "text",
          addChgAble: true
        },
        {
          label: "支付金额",
          prop: "payment_amount",
          holder: "买家的付款金额",
          width: "25%",
          type: "text",
          addChgAble: true
        },
        {
          label: "退款方式",
          prop: "refund_payment_methods_id",
          holder: "请选择退款方式",
          width: "25%",
          type: "text",
          addChgAble: true
        },
        {
          label: "创建时间",
          prop: "created_at",
          width: "25%",
          type: "text",
          addChgAble: true
        },
        {
          label: "单据类型",
          prop: "receipt_type",
          holder: "请选择单据类型",
          width: "25%",
          type: "text",
          addChgAble: true
        },
        {
          label: "淘宝售价",
          prop: "order_price",
          holder: "输入用户拍单金额",
          width: "25%",
          type: "text",
          addChgAble: true
        },
        {
          label: "数量",
          prop: "order_number",
          holder: "输入用户拍单金额",
          width: "25%",
          type: "text",
          addChgAble: true
        },
        {
          label: "交易单号",
          prop: "transaction_sn",
          width: "25%",
          type: "text",
          addChgAble: true
        },
        {
          label: "明细单号",
          prop: "detail_sn",
          width: "25%",
          type: "text",
          addChgAble: true
        },
        {
          label: "退款原因",
          prop: "refund_reason_type_id",
          holder: "请选择退款原因",
          width: "25%",
          type: "text",
          addChgAble: true
        },
        {
          label: "退款类型",
          prop: "payback_type",
          holder: "退款方式（支付宝、现金等）",
          width: "25%",
          type: "text",
          addChgAble: true
        },
        {
          label: "业务备注",
          prop: "business_remark",
          width: "25%",
          type: "textarea",
          addChgAble: true
        },
        {
          label: "售后备注",
          prop: "as_remark",
          width: "25%",
          type: "textarea",
          addChgAble: true
        },
        {
          label: "财务备注",
          prop: "f_remark",
          width: "25%",
          type: "textarea",
          addChgAble: true
        },
        {
          label: "退款说明",
          prop: "refund_description",
          width: "25%",
          type: "textarea",
          addChgAble: true
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
      operationData: [],
      operationRecordHead: [
        {
          label: "操作",
          width: "400",
          prop: "operation",
          type: "text"
        },
        {
          label: "操作人",
          width: "150",
          prop: "operator_id",
          type: "text"
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
      ],
      refundResponsiblePartyHead: [
        {
          label: "退款责任方",
          width: "150",
          prop: "responsible_party",
          type: "text"
        },
        {
          label: "责任人",
          width: "150",
          prop: "responsible_person",
          type: "text"
        },
        {
          label: "责任金额",
          width: "150",
          prop: "responsible_amount",
          type: "text"
        }
      ],
      /**
       * 驳回
       */
      refuseMask: false,

      operationData: []
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
          let data = this.bsUntreatedOrderListData[0];
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
            shops_id: this.searchBox.shops_id,
            order_sn: this.searchBox.order_sn,
            buyer_nick: this.searchBox.buyer_nick,
            buyer_name: this.searchBox.buyer_name,
            locker_id: this.searchBox.locker_id,
            include: "refundReason,refundReasonType,refundOperationRecord"
          }).then(
            res => {
              this.loading = false;
              this.bsUntreatedOrderListData = res.data;
              this.responsiblePartyData[0].responsible_party = "";
              this.responsiblePartyData[0].responsible_person = "";
              this.responsiblePartyData[0].responsible_amount = "";
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
          this.$fetch(this.urls.customerservicerefunds + "/searchasuntreated", {
            shops_id: this.searchBox.shops_id,
            order_sn: this.searchBox.order_sn,
            buyer_nick: this.searchBox.buyer_nick,
            buyer_name: this.searchBox.buyer_name,
            locker_id: this.searchBox.locker_id,
            include: "refundReason,refundReasonType,refundOperationRecord"
          }).then(
            res => {
              this.loading = false;
              this.asUntreatedOrderListData = res.data;
              this.responsiblePartyData[0].responsible_party = "";
              this.responsiblePartyData[0].responsible_person = "";
              this.responsiblePartyData[0].responsible_amount = "";
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
          this.$fetch(this.urls.customerservicerefunds + "/searchfduntreated", {
            shops_id: this.searchBox.shops_id,
            order_sn: this.searchBox.order_sn,
            buyer_nick: this.searchBox.buyer_nick,
            buyer_name: this.searchBox.buyer_name,
            locker_id: this.searchBox.locker_id,
            include: "refundReason,refundReasonType,refundOperationRecord"
          }).then(
            res => {
              this.loading = false;
              this.fdUntreatedOrderListData = res.data;
              this.responsiblePartyData[0].responsible_party = "";
              this.responsiblePartyData[0].responsible_person = "";
              this.responsiblePartyData[0].responsible_amount = "";
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
        case 3:
          this.$fetch(this.urls.customerservicerefunds + "/searchfdtreated", {
            shops_id: this.searchBox.shops_id,
            order_sn: this.searchBox.order_sn,
            buyer_nick: this.searchBox.buyer_nick,
            buyer_name: this.searchBox.buyer_name,
            locker_id: this.searchBox.locker_id,
            include: "refundReason,refundReasonType,refundOperationRecord"
          }).then(
            res => {
              this.loading = false;
              this.treatedOrderListData = res.data;
              this.responsiblePartyData[0].responsible_party = "";
              this.responsiblePartyData[0].responsible_person = "";
              this.responsiblePartyData[0].responsible_amount = "";
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
      this.detailRefundOrderData = row;
      this.operationData = row["refundOperationRecord"].data;
      this.refundReasonTabData = row["refundReason"].data;
      this.responsiblePartyData[0].responsible_party = row.responsible_party;
      this.responsiblePartyData[0].responsible_person = row.responsible_person;
      this.responsiblePartyData[0].responsible_amount = row.responsible_amount;
    },
    /*新增*/
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
        switch (this.orderListActiveName) {
          case 0:
            this.bsUntreatedOrderListData = res.data;
            break;
          case 1:
            this.asUntreatedOrderListData = res.data;
            break;
          case 2:
            this.fdUntreatedOrderListData = res.data;
            break;
          case 3:
            this.treatedOrderListData = res.data;
            break;
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
        this.urls.customerservicerefunds + "/" + id + "/fdlockorunlock"
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
        this.urls.customerservicerefunds + "/" + id + "/fdlockorunlock"
      ).then(
        () => {
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
      this.$put(this.urls.customerservicerefunds + "/" + id + "/fdaudit").then(
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
      this.$put(
        this.urls.customerservicerefunds + "/" + id + "/fdunaudit"
      ).then(
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
    },
    refuse() {
      this.refuseMask = true;
      let id = this.checkboxId ? this.checkboxId : this.orderListTabCurRowId;
      this.$fetch(this.urls.customerservicerefunds + "/" + id, {
        include: "refundReason"
      }).then(
        res => {
          this.updateRefundOrderFormVal = res;
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
    refuseConfirm() {
      let id = this.checkboxId ? this.checkboxId : this.orderListTabCurRowId;
      this.$patch(
        this.urls.customerservicerefunds + "/" + id,
        this.updateRefundOrderFormVal
      ).then(
        () => {
          this.refuseMask = false;
          this.updateRefundOrderFormVal = {};
          this.refresh();
          this.$message({
            message: "驳回成功",
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
    refuseCancel() {
      this.refuseMask = false;
      this.updateRefundOrderFormVal = {};
    },
    //筛选
    searchData() {
      this.loading = true;
      this.fetchData();
    },
    resets() {
      this.searchBox = {};
    }
  },
  mounted() {
    this.fetchData();
    this.$store.dispatch("shops", "/shops");
    this.$fetch(this.urls.customerservicedepts + "/create").then(
      res => {
        this.addSubData = res;
      },
      err => {}
    );
    this.$store.dispatch("setOpt", this.newOpt);
    let that = this;
    $(window).resize(() => {
      that.$store.dispatch("setOpt", that.newOpt);
    });
  }
};
</script>