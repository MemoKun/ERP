<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="outerHandleClick">
      <el-tab-pane label="订单列表" name="0">
        <div>
          <div class="searchBox">
            <span>
              <label>买家昵称</label>
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
              <el-input v-model="searchBox.receiver_phone" clearable></el-input>
            </span>
          </div>
          <div class="searchBox">
            <span>
              <label>收货地址</label>
              <el-input v-model="searchBox.receiver_address" clearable></el-input>
            </span>
            <span>
              <label>所属店铺</label>
              <el-select v-model="searchBox.shops_id" clearable placeholder="请选择">
                <span v-for="list in addSubData['shop']" :key="list.id">
                  <el-option :label="list.name?list.name:list.nick" :value="list.id"></el-option>
                </span>
              </el-select>
            </span>
            <span>
              <label>业务员</label>
              <el-select v-model="searchBox.business_personnel_id" clearable placeholder="请选择">
                <span v-for="list in addSubData['user']" :key="list.id">
                  <el-option :label="list['username']" :value="list.id"></el-option>
                </span>
              </el-select>
            </span>
            <span>
              <label>卖家备注</label>
              <el-input v-model="searchBox.seller_remark" clearable></el-input>
            </span>
            </div>
            <div class="searchBox">
            <span>
              <label>物流公司</label>
              <el-select v-model="searchBox.logistics_id" clearable placeholder="请选择">
                <span v-for="list in addSubData['logistics']" :key="list.id">
                  <el-option :label="list.name?list.name:list.nick" :value="list.id"></el-option>
                </span>
              </el-select>
            </span>
            <span>
              <label>淘宝旗帜</label>
              <el-select v-model="searchBox.seller_flag" clearable placeholder="请选择">
                <el-option :key="0" label="黑旗" :value="0">
                  <i class="iconfont bf-flag"></i>
                </el-option>
                <el-option :key="1" label="红旗" :value="1">
                  <i class="iconfont bf-flag" style="color:red"></i>
                </el-option>
                <el-option :key="2" label="黄旗" :value="2">
                  <i class="iconfont bf-flag" style="color:yellow"></i>
                </el-option>
                <el-option :key="3" label="绿旗" :value="3">
                  <i class="iconfont bf-flag" style="color:green"></i>
                </el-option>
                <el-option :key="4" label="蓝旗" :value="4">
                  <i class="iconfont bf-flag" style="color:blue"></i>
                </el-option>
                <el-option :key="5" label="紫旗" :value="5">
                  <i class="iconfont bf-flag" style="color:purple"></i>
                </el-option>
              </el-select>
            </span>
            <span>
              <label>承诺日期</label>
              <el-date-picker v-model="searchBox.promise_ship_time" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
              </el-date-picker>
            </span>
            </div>
            <div class="searchBox">
            <span>
              <label>业务日期</label>
              <el-date-picker v-model="searchBox.created_at" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
              </el-date-picker>
            </span>
            <span>
              <label>客审日期</label>
              <el-date-picker v-model="searchBox.audit_at" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
              </el-date-picker>
            </span>
            <span class="transMoney">
              <label>交易金额</label>
              <el-input type="number" v-model="searchBox.order_transMStart" clearable></el-input>
              <label>至</label>
              <el-input type="number" v-model="searchBox.order_transMEnd" clearable></el-input>
            </span>
          </div>
          <div style="text-align: right">
            <el-button type="primary" @click="searchData">筛选</el-button>
            <el-button @click="resets">重置</el-button>
          </div>
        </div>
        <el-tabs v-model="leftTopActiveName" @tab-click="leftHandleClick" style="height: 400px;">
          <el-tab-pane label="未处理" name="0">
            <el-table :data="orderListData" fit @selection-change="handleSelectionChange" v-loading="loading" height="350" @row-click="orderListRClick" @row-dblclick="orderDbClick">
              <el-table-column type="selection" width="95" align="center" :checked="checkboxInit"></el-table-column>
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
                    <span v-if="scope.row[item.prop]">{{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}</span>
                  </span>
                </template>
              </el-table-column>
              <!--<el-table-column label="操作" width="90" align="center" fixed="right">
                                <template slot-scope="scope">
                                    <el-button size="mini" type="danger" @click="delSingle(scope.row,$event)">删除</el-button>
                                </template>
              </el-table-column>-->
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="已处理" name="1">
            <el-table :data="alreadyHandle" fit @selection-change="handleSelectionChange" v-loading="loading" height="350" @row-click="orderListRClick" @row-dblclick="orderDbClick">
              <el-table-column type="selection" width="95" align="center" :checked="checkboxInit"></el-table-column>
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
                    <span v-if="scope.row[item.prop]">{{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}</span>
                  </span>
                </template>
              </el-table-column>
              <!-- <el-table-column label="操作" width="90" align="center" fixed="right">
                                <template slot-scope="scope">
                                    <el-button size="mini" type="danger" @click="delSingle(scope.row,$event)">删除</el-button>
                                </template>
              </el-table-column>-->
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
      <el-tab-pane label="订单明细" name="1">
        <el-form :model="orderDtlFormVal" class="quarter_turn">
          <el-form-item v-for="item in orderDtlFormHead" :key="item.label" :label="item.label" :prop="item.prop">
            <span v-if="item.type=='text'">
              <span v-if="item.inProp">
                <el-input v-model.trim="orderDtlFormVal[item.prop][item.inProp]" :placeholder="item.holder" disabled></el-input>
              </span>
              <span v-else>
                <el-input v-model.trim="orderDtlFormVal[item.prop]" :placeholder="item.holder" disabled></el-input>
              </span>
            </span>
            <span v-else-if="item.type=='number'">
              <el-input type="number" v-model.trim="orderDtlFormVal[item.prop]" :placeholder="item.holder" disabled></el-input>
            </span>
            <span v-else-if="item.type=='textarea'">
              <el-input type="textarea" v-model.trim="orderDtlFormVal[item.prop]" :placehode="item.holder"></el-input>
            </span>
          </el-form-item>
        </el-form>
        <el-tabs v-model="rightActiveName" @tab-click="rightHandleClick">
          <el-tab-pane label="商品明细" name="0">
            <el-table :data="proDtlData" fit>
              <el-table-column v-for="item in orderDtlHead[rightActiveName]" :label="item.label" align="center" :width="item.width" :key="item.label">
                <template slot-scope="scope">
                  <span v-if="item.type=='checkbox'">
                    <el-checkbox v-model="scope.row[item.prop]" disabled></el-checkbox>
                  </span>
                  <span v-else>
                    {{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}
                  </span>
                </template>
              </el-table-column>
              <el-table-column type="expand" fixed="left">
                <template slot-scope="scope">
                  <el-table :data="scope.row['productComp']" fit>
                    <el-table-column v-for="item in proCompHead" :label="item.label" align="center" :width="item.width" :key="item.label">
                      <template slot-scope="scope">
                        <span v-if="item.prop">
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
                            {{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}
                          </span>
                        </span>
                      </template>
                    </el-table-column>
                  </el-table>
                </template>
              </el-table-column>
              <el-table-column label="操作" width="90" align="center">
                <template slot-scope="scope">
                  <el-button size="mini" type="danger" @click="delSingle(scope.row,$event)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="支付明细" name="1">
            <el-table :data="payDtlData" fit>
              <el-table-column v-for="item in orderDtlHead[rightActiveName]" :label="item.label" align="center" :width="item.width" :key="item.label">
                <template slot-scope="scope">
                  <span v-if="item.type=='select'">
                    <span v-for="(list,index) in resData[item.stateVal]" :key="index">
                      <span v-if="list.id==scope.row[item.prop]">
                        {{list.name?list.name:''}}
                      </span>
                    </span>
                  </span>
                  <span v-else>
                    {{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}
                  </span>
                </template>
              </el-table-column>
              <el-table-column label="操作" width="90" align="center">
                <template slot-scope="scope">
                  <el-button size="mini" type="danger" @click="delSingle(scope.row,$event)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="内部便签" name="2">
            <el-table :data="orderDtlFormVal" fit>
              <el-table-column v-for="item in orderDtlHead[rightActiveName]" :label="item.label" align="center" :width="item.width" :key="item.label">
                <template slot-scope="scope">
                  <span v-if="item.type=='select'">
                    <span v-for="(list,index) in resData[item.stateVal]" :key="index">
                      <span v-if="list.id==scope.row[item.prop]">
                        {{list.name?list.name:''}}
                      </span>
                    </span>
                  </span>
                  <span v-else>
                    {{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}
                  </span>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="操作记录" name="3">
            <el-table :data="curRowData" fit>
              <el-table-column v-for="item in orderDtlHead[rightActiveName]" :label="item.label" align="center" :width="item.width" :key="item.label">
                <template slot-scope="scope">
                  <span v-if="item.type=='select'">
                    <span v-for="(list,index) in resData[item.stateVal]" :key="index">
                      <span v-if="list.id==scope.row[item.prop]">
                        {{list.name?list.name:''}}
                      </span>
                    </span>
                  </span>
                  <span v-else>
                    {{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}
                  </span>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="关联信息" name="4">
            <el-table :data="curRowData" fit>
              <el-table-column v-for="item in orderDtlHead[rightActiveName]" :label="item.label" align="center" :width="item.width" :key="item.label">
                <template slot-scope="scope">
                  <span v-if="item.type=='select'">
                    <span v-for="(list,index) in resData[item.stateVal]" :key="index">
                      <span v-if="list.id==scope.row[item.prop]">
                        {{list.name?list.name:''}}
                      </span>
                    </span>
                  </span>
                  <span v-else>
                    {{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}
                  </span>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="其他费用" name="5">
            <el-table :data="curRowData" fit>
              <el-table-column v-for="item in orderDtlHead[rightActiveName]" :label="item.label" align="center" :width="item.width" :key="item.label">
                <template slot-scope="scope">
                  <span v-if="item.type=='select'">
                    <span v-for="(list,index) in resData[item.stateVal]" :key="index">
                      <span v-if="list.id==scope.row[item.prop]">
                        {{list.name?list.name:''}}
                      </span>
                    </span>
                  </span>
                  <span v-else>
                    {{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}
                  </span>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="驳回原因" name="6">
            <el-table :data="curRowData" fit>
              <el-table-column v-for="item in orderDtlHead[rightActiveName]" :label="item.label" align="center" :width="item.width" :key="item.label">
                <template slot-scope="scope">
                  <span v-if="item.type=='select'">
                    <span v-for="(list,index) in resData[item.stateVal]" :key="index">
                      <span v-if="list.id==scope.row[item.prop]">
                        {{list.name?list.name:''}}
                      </span>
                    </span>
                  </span>
                  <span v-else>
                    {{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}
                  </span>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="优惠列表" name="7">
            <el-table :data="curRowData" fit>
              <el-table-column v-for="item in orderDtlHead[rightActiveName]" :label="item.label" align="center" :width="item.width" :key="item.label">
                <template slot-scope="scope">
                  <span v-if="item.type=='select'">
                    <span v-for="(list,index) in resData[item.stateVal]" :key="index">
                      <span v-if="list.id==scope.row[item.prop]">
                        {{list.name?list.name:''}}
                      </span>
                    </span>
                  </span>
                  <span v-else>
                    {{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}
                  </span>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="订单图片" name="8">
            <el-table :data="curRowData" fit>
              <el-table-column v-for="item in orderDtlHead[rightActiveName]" :label="item.label" align="center" :width="item.width" :key="item.label">
                <template slot-scope="scope">
                  <span v-if="item.type=='select'">
                    <span v-for="(list,index) in resData[item.stateVal]" :key="index">
                      <span v-if="list.id==scope.row[item.prop]">
                        {{list.name?list.name:''}}
                      </span>
                    </span>
                  </span>
                  <span v-else>
                    {{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}
                  </span>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
    </el-tabs>

    <!--页码-->
    <Pagination :page-url="this.urls.financialdepts" @handlePagChg="handlePagChg" v-if="activeName=='0'"></Pagination>

    <!--新增支付明细-->
    <el-dialog title="添加支付明细" :visible.sync="addPayDtlMask">
      <el-form :model="addPayDtlVal">
        <el-form-item v-for="item in addPayDtlHead" :key="item.label" :label="item.label" :prop="item.prop">
          <span v-if="item.type=='text'">
            <span v-if="item.prop=='taobao_oid'">
              <el-input v-model.trim="orderDtlFormVal['system_order_no']" :placeholder="item.holder" disabled></el-input>
            </span>
            <span v-else>
              <el-input v-model.trim="addPayDtlVal[item.prop]" :placeholder="item.holder"></el-input>
            </span>
          </span>
          <span v-else-if="item.type=='number'">
            <el-input type="number" v-model.trim="addPayDtlVal[item.prop]" :placeholder="item.holder"></el-input>
          </span>
          <span v-else-if="item.type=='select'">
            <el-select v-model="addPayDtlVal[item.prop]" :placeholder="item.holder">
              <span v-for="list in resData[item.stateVal]" :key="list.id">
                <el-option :label="list.name?list.name:list.nick" :value="list.id"></el-option>
              </span>
            </el-select>
          </span>
          <span v-else-if="item.type=='textarea'">
            <el-input type="textarea" v-model.trim="addPayDtlVal[item.prop]"></el-input>
          </span>
          <span v-else-if="item.type=='DatePicker'">
            <el-date-picker v-model="addPayDtlVal[item.prop]" type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期"></el-date-picker>
          </span>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer" style="text-align: right">
        <el-button type="primary" @click="addPayDtlConfirm">确定</el-button>
        <el-button @click="addPayDtlCancel">取消</el-button>
      </div>
    </el-dialog>

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
export default {
  data() {
    return {
      newOpt: [
        {
          cnt: "驳回",
          icon: "bf-reject",
          ent: this.handleReject,
          nClick: true
        },
        {
          cnt: "审核",
          icon: "bf-audit",
          ent: this.handleFinancialAudit,
          nClick: true
        },
        {
          cnt: "退审",
          icon: "bf-auditfaild",
          ent: this.handleUnFinancialAudit,
          nClick: true
        },
        {
          cnt: "刷新",
          icon: "bf-refresh",
          ent: this.refresh
        }
      ],
      addSubData:[],
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
        order_order_transMEndmark: "",
      },
      /*获取数据*/
      activeName: "0",
      leftTopActiveName: "0",
      rightActiveName: "0",
      orderListData: [],
      orderListHead: [
        {
          label: "系统订单",
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
          label: "业务员账号",
          width: "140",
          prop: "businessPersonnel",
          inProp: "username",
          type: "text"
        },
        {
          label: "锁定人姓名",
          width: "130",
          prop: "businessPersonnel",
          inProp: "username",
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
          label: "快递费用",
          width: "120",
          prop: "express_fee",
          type: "number"
        },
        {
          label: "收货人",
          width: "130",
          prop: "receiver_name",
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
          label: "配送商",
          width: "130",
          prop: "distribution",
          inProp: "name",
          type: "text"
        },
        {
          label: "配送电话",
          width: "150",
          prop: "distribution",
          inProp: "phone",
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
          label: "送货费",
          width: "120",
          prop: "deliver_goods_fee",
          type: "number"
        },
        {
          label: "搬楼费",
          width: "120",
          prop: "move_upstairs_fee",
          type: "number"
        },
        {
          label: "安装费",
          width: "120",
          prop: "installation_fee",
          type: "number"
        },
        {
          label: "配送总计",
          width: "130",
          prop: "total_distribution_fee",
          type: "number"
        },
        {
          label: "配送单号",
          width: "180",
          prop: "distribution_no",
          type: "text"
        },
        {
          label: "审计人",
          width: "180",
          prop: "auditor_id",
          type: "text"
        },
        {
          label: "审计日期", //审计日期
          width: "180",
          prop: "audit_at",
          type: "text"
        },
        {
          label: "支付日期",
          width: "180",
          prop: "payment_date",
          type: "text"
        },
        {
          label: "承诺发货日期",
          width: "180",
          prop: "promise_ship_time",
          type: "text"
        },
        {
          label: "客审日期",
          width: "180",
          prop: "cs_audited_at",
          type: "text"
        },
        {
          label: "商品数量",
          width: "120",
          prop: "is_print",
          type: "number"
        },
        {
          label: "(实际售价+其他费用)",
          width: "150",
          prop: "order_amount",
          type: "number"
        },
        {
          label: "支付总金额",
          width: "130",
          prop: "order_amount",
          type: "number"
        },
        {
          label: "实际总售价",
          width: "130",
          prop: "order_amount",
          type: "number"
        },
        {
          label: "木架费",
          width: "120",
          prop: "wooden_frame_costs",
          type: "number"
        },
        {
          label: "拆分主订单",
          width: "130",
          prop: "is_split",
          type: "checkbox"
        },
        {
          label: "订单来源",
          width: "130",
          prop: "order_source",
          type: "text"
        },
        {
          label: "分阶段状态",
          width: "130",
          prop: "",
          type: "text"
        },
        {
          label: "服务车金额",
          width: "130",
          prop: "service_car_fee",
          type: "number"
        },
        {
          label: "服务车信息",
          width: "150",
          prop: "service_car_info",
          type: "text"
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
          label: "纳税开户银行",
          width: "130",
          prop: "",
          type: "text"
        },
        {
          label: "纳税银行账号",
          width: "180",
          prop: "",
          type: "number"
        },
        {
          label: "锁定人",
          width: "90",
          prop: "locker",
          inProp: "username",
          type: "text"
        },
        {
          label: "合并订单",
          width: "90",
          prop: "is_merge",
          type: "checkbox"
        },
        {
          label: "拆分订单",
          width: "90",
          prop: "is_split",
          type: "checkbox"
        },
        {
          label: "关联单号",
          width: "220",
          prop: "association_taobao_oid",
          type: "text"
        },
        {
          label: "需要核销",
          width: "90",
          prop: "is_cancel_after_verification",
          type: "checkbox"
        },
        {
          label: "库存占用",
          width: "90",
          prop: "",
          type: "checkbox"
        }
      ],
      loading: true,
      checkboxInit: false,
      orderListIndex: "",
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
            label: "到账金额",
            prop: "arrival_amount",
            type: "text"
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
          },
          {
            label: "系统单号",
            prop: "system_order_no",
            type: "text"
          }
        ],
        [
          {
            label: "内部便签",
            prop: "inner_note",
            type: "text"
          },
          {
            label: "用户",
            prop: "user",
            type: "text"
          },
          {
            label: "内容",
            prop: "content",
            type: "text"
          },
          {
            label: "提出时间",
            prop: "noted_at",
            type: "text"
          }
        ],
        [
          {
            label: "用户",
            prop: "user",
            type: "text"
          },
          {
            label: "操作",
            prop: "operation",
            type: "text"
          },
          {
            label: "操作描述",
            prop: "operation_description",
            type: "text"
          },
          {
            label: "操作时间",
            prop: "created_at",
            type: "text"
          }
        ],
        [
          {
            label: "关联单号",
            prop: "association_taobao_oid",
            type: "text"
          }
        ],
        [
          {
            label: "系统单号",
            prop: "system_order_no",
            type: "text"
          },
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
          },
          {
            label: "创建人",
            prop: "creator",
            type: "text"
          },
          {
            label: "创建时间",
            prop: "created_at",
            type: "text"
          },
          {
            label: "修改人",
            prop: "editor",
            type: "text"
          },
          {
            label: "修改时间",
            prop: "edited_at",
            type: "text"
          },
          {
            label: "备注",
            prop: "remark",
            type: "text"
          },
        ],
        [
          {
            label: "驳回人",
            prop: "rejecter",
            type: "text"
          },
          {
            label: "驳回时间",
            prop: "rejected_at",
            type: "text"
          },
          {
            label: "驳回原因",
            prop: "reason",
            type: "text"
          },
        ],
        [
          {
            label: "单号",
            prop: "system_order_no",
            type: "text"
          },
          {
            label: "优惠标题",
            prop: "preferential_title",
            type: "text"
          },
          {
            label: "优惠金额",
            prop: "preferential_cashback",
            type: "text"
          },
        ],
        [
          {
            label: "订单图片",
            prop: "img",
            type: "img"
          }
        ]
      ],
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
      payDtlData: [],
      addPayDtlMask: false,
      addPayDtlVal: {
        orders_id: "",
        payment_methods_id: "",
        payment: 0,
        taobao_tid: "",
        taobao_oid: "",
        pay_time: "",
        remark: ""
      },
      addPayDtlHead: [
        {
          label: "来源单号",
          prop: "taobao_oid",
          type: "text"
        },
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
          label: "付款时间",
          prop: "pay_time",
          type: "DatePicker"
        },
        {
          label: "备注",
          prop: "remark",
          type: "textarea"
        }
      ],
      payDtlIndex: "",
      /*删除单条*/
      showDel: false,
      delUrl: "",
      delId: ""
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
    toggleShow() {
      this.filterBox = !this.filterBox;
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
          this.$fetch(this.urls.customerservicedepts+'/getAuditDepartment', {
            order_status: 5,
            member_nick:this.searchBox.member_nick,
            system_order_no:this.searchBox.system_order_no,
            receiver_name:this.searchBox.receiver_name,
            receiver_phone:this.searchBox.receiver_phone,
            receiver_address:this.searchBox.receiver_address,
            shops_id:this.searchBox.shops_id,
            business_personnel_id:this.searchBox.business_personnel_id,
            seller_remark:this.searchBox.seller_remark,
            logistics_id:this.searchBox.logistics_id,
            seller_flag:this.searchBox.seller_flag,
            include:
              "shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems.combination.productComponents,orderItems.product,businessPersonnel,locker,paymentDetails.paymentMethod,paymentDetails.order"
          }).then(
            res => {
              this.loading = false;
              this.orderListData = res.data;
              this.curRowId = res.data[0].id;
              this.curRowData = res.data[0];
              let pg = res.meta.pagination;
              this.$store.dispatch("currentPage", pg.current_page);
              this.$store.commit("PER_PAGE", pg.per_page);
              this.$store.commit("PAGE_TOTAL", pg.total);
              this.$store.dispatch("paymentmethods", this.urls.paymentmethods);
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
          this.$fetch(this.urls.customerservicedepts +'/getAuditDepartment', {
            order_status: 10,
            member_nick:this.searchBox.member_nick,
            system_order_no:this.searchBox.system_order_no,
            receiver_name:this.searchBox.receiver_name,
            receiver_phone:this.searchBox.receiver_phone,
            receiver_address:this.searchBox.receiver_address,
            shops_id:this.searchBox.shops_id,
            business_personnel_id:this.searchBox.business_personnel_id,
            seller_remark:this.searchBox.seller_remark,
            logistics_id:this.searchBox.logistics_id,
            seller_flag:this.searchBox.seller_flag,
            include:
              "shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems.combination.productComponents,orderItems.product,businessPersonnel,locker,paymentDetails.paymentMethod,paymentDetails.order"
          }).then(
            res => {
              this.loading = false;
              this.curRowId = res.data[0].id;
              this.curRowData = res.data[0];
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
      }
    },
    leftHandleClick() {
      this.loading = true;
      this.fetchData();
    },
    rightHandleClick() {},
    orderListRClick(row) {
      if (row["order_status"] == "待审计") {
        this.newOpt[0].nClick = true;
        this.newOpt[1].nClick = false;
        this.newOpt[2].nClick = true;
      } else if (row["order_status"] == "新建") {
        this.newOpt[0].nClick = true;
        this.newOpt[1].nClick = true;
        this.newOpt[2].nClick = false;
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
      this.$fetch(this.urls.financialdepts + "?page=" + page, {
        include:
          "shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems,businessPersonnel,locker,paymentDetails"
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
    /*驳回*/
    handleReject() {
      if (this.newOpt[0].nClick) {
        return;
      } else {
        let id = this.checkboxId ? this.checkboxId : this.curRowId;
        this.$put(
          this.urls.customerservicedepts + "/" + id + "/auditdeptsrejectaudit"
        ).then(
          () => {
            this.refresh();
            this.$message({
              message: "驳回成功",
              type: "success"
            });
            this.newOpt[0].nClick = true;
            this.newOpt[1].nClick = true;
            this.newOpt[2].nClick = true;
          },
          err => {
            this.$message.error(err.response.data.message);
          }
        );
      }
    },
    /*审核*/
    handleFinancialAudit() {
      if (this.newOpt[1].nClick) {
        return;
      } else {
        let id = this.checkboxId ? this.checkboxId : this.curRowId;
        this.$put(
          this.urls.customerservicedepts + "/" + id + "/auditdeptsaudit"
        ).then(
          () => {
            this.refresh();
            this.$message({
              message: "审计成功",
              type: "success"
            });
            this.newOpt[0].nClick = true;
            this.newOpt[1].nClick = true;
            this.newOpt[2].nClick = true;
          },
          err => {
            this.$message.error(err.response.data.message);
          }
        );
      }
    },
    /*退审*/
    handleUnFinancialAudit() {
      if (this.newOpt[0].nClick) {
        return;
      } else {
        let id = this.checkboxId ? this.checkboxId : this.curRowId;
        this.$put(
          this.urls.customerservicedepts + "/" + id + "/auditdeptsrejectaudit"
        ).then(
          () => {
            this.refresh();
            this.$message({
              message: "驳回成功",
              type: "success"
            });
            this.newOpt[0].nClick = true;
            this.newOpt[1].nClick = true;
            this.newOpt[2].nClick = true;
          },
          err => {
            this.$message.error(err.response.data.message);
          }
        );
      }
    },
    /*支付明细*/
    addExpenseLine() {
      this.addPayDtlMask = true;
    },
    payDtlRCName({ row, rowIndex }) {
      row.index = rowIndex;
    },
    payDtlRClick(row) {
      this.payDtlIndex = `index${row.index}`;
      console.log(row);
    },
    updatePayDtl(row) {
      this.$patch(this.urls.paymentdetails + "/" + row.id, row).then(
        () => {
          this.refresh();
          this.$message({
            message: "支付明细更新成功",
            type: "success"
          });
          this.payDtlIndex = "";
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
    delSingle(row, e) {
      this.showDel = true;
      $(".el-popper").css({ left: e.x - 100 + "px", top: e.y - 125 + "px" });
      this.delId = row.id;
      this.delUrl = row["orders_id"] ? this.urls.paymentdetails : "";
    },
    addPayDtlConfirm() {
      let formData = this.addPayDtlVal;
      let id = this.checkboxId ? this.checkboxId : this.curRowId;
      let submitData = {
        orders_id: id,
        payment_methods_id: formData.payment_methods_id,
        payment: formData.payment,
        taobao_tid: formData.taobao_tid,
        taobao_oid: this.orderDtlFormVal["system_order_no"],
        pay_time: formData.pay_time,
        remark: formData.remark
      };
      this.$post(this.urls.paymentdetails, submitData).then(
        () => {
          this.refresh();
          this.$message({
            message: "新增支付明细成功",
            type: "success"
          });
          this.addPayDtlMask = false;
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
    addPayDtlCancel() {
      this.addPayDtlMask = false;
      this.$store.dispatch("paymentmethods", "/paymentmethods");
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
    //筛选
    searchData(){
      this.loading=true;
      this.fetchData();
    },
    resets() {
      this.searchBox =  {
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
        order_order_transMEndmark: "",
      };
    }
  },
  mounted() {
    this.fetchData();
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