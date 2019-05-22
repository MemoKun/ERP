<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="outerHandleClick">
      <el-tab-pane label="订单列表" name="0">
        <div>
          <div class="searchBox">
            <span>
              <label>会员名称</label>
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
          </div>
          <div class="searchBox">
            <span>
              <label>收货手机</label>
              <el-input v-model="searchBox.receiver_mobile" clearable></el-input>
            </span>
            <span>
              <label>收货地址</label>
              <el-input v-model="searchBox.receiver_address" clearable></el-input>
            </span>
            <span>
              <label>所属店铺</label>
              <el-select v-model="searchBox.shops_id" clearable placeholder="请选择">
                <span v-for="list in resData['shops']" :key="list.id">
                  <el-option :label="list.name?list.name:list.nick" :value="list.id"></el-option>
                </span>
              </el-select>
            </span>
          </div>
          <div class="searchBox">
            <span>
              <label>包含商品</label>
              <el-input clearable></el-input>
            </span>
            <span>
              <label>业务员</label>
              <el-input v-model="searchBox.business_personnel_id" clearable></el-input>
            </span>
            <span>
              <label>承诺日期</label>
              <el-date-picker v-model="searchBox.promise_ship_time" type="daterange" range-separator="至"
                start-placeholder="开始日期" end-placeholder="结束日期">
              </el-date-picker>
            </span>
          </div>
          <div class="searchBox">
            <span>
              <label>业务日期</label>
              <el-date-picker v-model="searchBox.created_at" type="daterange" range-separator="至" start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker>
            </span>
            <span class="transMoney">
              <label>交易金额</label>
              <el-input type="number" v-model="searchBox.order_transMStart" clearable></el-input>
              至
              <el-input type="number" v-model="searchBox.order_transMEnd" clearable></el-input>
            </span>
            <span>
              <label>物流公司</label>
              <el-select v-model="searchBox.logistics_id" clearable placeholder="请选择">
                <span v-for="list in resData['logistics']" :key="list.id">
                  <el-option :label="list.name?list.name:list.nick" :value="list.id"></el-option>
                </span>
              </el-select>
            </span>
          </div>
          <div class="searchBox">
            <span>
              <label>发货时间</label>
              <el-date-picker v-model="searchBox.stockout_at" type="daterange" range-separator="至" start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker>
            </span>
            <span>
              <label>支付时间</label>
              <el-date-picker v-model="searchBox.payment_date" type="daterange" range-separator="至" start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker>
            </span>
            <span>
              <label>订单状态</label>
              <el-select v-model="searchBox.order_status" clearable placeholder="请选择">
                <el-option v-for="item in searchBox.orderStatus" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </span>
          </div>
          <div class="searchBox">
            <span>
              <label>财审时间</label>
              <el-date-picker v-model="searchBox.order_fdAuditDate" type="daterange" range-separator="至"
                start-placeholder="开始日期" end-placeholder="结束日期">
              </el-date-picker>
            </span>
            <span>
              <label>运费类型</label>
              <el-select v-model="searchBox.freight_types_id" clearable placeholder="请选择">
                <span v-for="list in resData['freighttypes']" :key="list.id">
                  <el-option :label="list.name?list.name:list.nick" :value="list.id"></el-option>
                </span>
              </el-select>
            </span>
            <span>
              <label>淘宝旗帜</label>
              <el-select v-model="searchBox.seller_flag" clearable placeholder="请选择">
                <el-option v-for="item in searchBox.sellerFlags" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </span>
          </div>
          <div class="searchBox">
            <span>
              <label>物流单号</label>
              <el-input v-model="searchBox.logistics_sn" clearable></el-input>
            </span>
            <span>
              <label>外部单号</label>
              <el-input v-model="searchBox.out_order" clearable></el-input>
            </span>
            <span>
              <label>卖家备注</label>
              <el-input v-model="searchBox.seller_remark" clearable></el-input>
            </span>
          </div>
          <!--<span>
              <label>供应商</label>
              <el-select v-model="searchBox.suppliers_id" clearable placeholder="请选择">
                <span v-for="list in resData['suppliers']" :key="list.id">
                  <el-option :label="list.name?list.name:list.nick" :value="list.id"></el-option>
                </span>
              </el-select>
            </span>-->
          <div class="searchBox">
            <span>
              <label>发货仓库</label>
              <el-select v-model="searchBox.warehouses_id" clearable placeholder="请选择">
                <span v-for="list in resData['warehouses']" :key="list.id">
                  <el-option :label="list.name?list.name:list.nick" :value="list.id"></el-option>
                </span>
              </el-select>
            </span>
            <span class="transMoney">
              <label>电子面单号</label>
              <el-input v-model="searchBox.esheet_no" clearable></el-input>
            </span>

            <span>
              <label>客审时间</label>
              <el-date-picker v-model="searchBox.audit_at" type="daterange" range-separator="至" start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker>
            </span>
            <span>
              <label>审计员</label>
              <el-input v-model="searchBox.auditor_id" clearable></el-input>
            </span>
          </div>
          <div style="text-align: right">
            <el-button type="primary">筛选</el-button>
            <el-button @click="resets">重置</el-button>
          </div>
        </div>
        <!--订单表格-->
        <el-table :data="orderListData" fit @selection-change="handleSelectionChange" v-loading="loading" height="350"
          @row-click="orderListRClick" @row-dblclick="orderDbClick">
          <el-table-column type="selection" width="95" align="center" :checked="checkboxInit">
          </el-table-column>
          <el-table-column v-for="item in orderListHead" :label="item.label" align="center" :width="item.width" :key="item.label">
            <template slot-scope="scope">
              <span v-if="item.type=='checkbox'">
                <span v-if="item.inProp">
                  <span v-if="item.inData">
                    <span v-if="scope.row[item.prop]['data'][0]">
                      <el-checkbox v-model="scope.row[item.prop]['data'][0][item.inProp]" disabled></el-checkbox>
                    </span>
                    <span v-else>
                      <el-checkbox disabled></el-checkbox>
                    </span>
                  </span>
                  <span v-else>
                    <el-checkbox v-model="scope.row[item.prop][item.inProp]" disabled></el-checkbox>
                  </span>
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
                <span v-if="item.inProp">
                  <span v-if="item.inData">
                    {{scope.row[item.prop]['data'][0]?scope.row[item.prop]['data'][0][item.inProp]:''}}
                  </span>
                  <span v-else>
                    {{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}
                  </span>

                </span>
                <span v-else>
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
              <el-table-column v-for="item in proDtlHead" :label="item.label" align="center" :width="item.width" :key="item.label">
                <template slot-scope="scope">
                  <span v-if="item.type=='checkbox'">
                    <el-checkbox v-model="scope.row[item.prop]" disabled></el-checkbox>
                  </span>
                  <span v-else>
                    <span v-if="item.inProp">
                      <span v-if="item.inData">
                        <span v-if="item.nmProp">
                          {{scope.row[item.prop][item.inProp]['data'][0][item.nmProp]}}
                        </span>
                      </span>
                      <span v-else>
                        <span v-if="item.nmProp">
                          {{scope.row[item.prop][item.inProp][item.nmProp]}}
                        </span>
                        <span v-else>
                          {{scope.row[item.prop][item.inProp]}}
                        </span>
                      </span>
                    </span>
                    <span v-else>
                      {{scope.row[item.prop]}}
                    </span>
                  </span>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="订单信息" name="1">
            <el-table :data="orderInfoData" fit>
              <el-table-column v-for="item in orderInfoHead" :label="item.label" align="center" :width="item.width"
                :key="item.label">
                <template slot-scope="scope">
                  <span>
                    {{scope.row[item.prop]}}
                  </span>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="货审明细" name="2">
            <el-table :data="cargoAuditData" fit>
              <el-table-column v-for="item in cargoAuditHead" :label="item.label" align="center" :width="item.width"
                :key="item.label">
                <template slot-scope="scope">
                  <span v-if="item.type=='checkbox'">
                    <el-checkbox v-model="scope.row[item.prop]" disabled></el-checkbox>
                  </span>
                  <span v-else>
                    <span v-if="item.inProp">
                      <span v-if="item.inData">
                        <span v-if="item.nmProp">
                          {{scope.row[item.prop][item.inProp]['data'][0][item.nmProp]}}
                        </span>
                      </span>
                      <span v-else>
                        <span v-if="item.nmProp">
                          {{scope.row[item.prop][item.inProp][item.nmProp]}}
                        </span>
                        <span v-else>
                          {{scope.row[item.prop][item.inProp]}}
                        </span>
                      </span>
                    </span>
                    <span v-else>
                      {{scope.row[item.prop]}}
                    </span>
                  </span>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="支付明细" name="3">
            <el-table :data="payDtlData" fit>
              <el-table-column v-for="item in payDtlHead" :label="item.label" align="center" :width="item.width" :key="item.label">
                <template slot-scope="scope">
                  <span>
                    {{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}
                  </span>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="内部便签" name="4">
            <el-table :data="innerNoteData" fit>
              <el-table-column v-for="item in innerNoteHead" :label="item.label" align="center" :width="item.width"
                :key="item.label">
                <template slot-scope="scope">
                  <span>
                    {{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}
                  </span>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="操作记录" name="5">
            <el-table :data="operationRecordData" fit>
              <el-table-column v-for="item in operationRecordHead" :label="item.label" align="center" :width="item.width"
                :key="item.label">
                <template slot-scope="scope">
                  <span>
                    {{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}
                  </span>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="结算明细" name="6">
            <el-table :data="checkDtlData" fit>
              <el-table-column v-for="item in checkDtlHead" :label="item.label" align="center" :width="item.width" :key="item.label">
                <template slot-scope="scope">
                  <span>
                    {{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}
                  </span>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="跟单图片" name="7">

          </el-tab-pane>
          <el-tab-pane label="物流信息" name="8">
            <el-table :data="logisticsData" fit>
              <el-table-column v-for="item in logisticsHead" :label="item.label" align="center" :width="item.width"
                :key="item.label">
                <template slot-scope="scope">
                  <span v-if="item.inProp">
                    <span v-if="item.inData">
                      {{scope.row[item.prop]['data']?scope.row[item.prop]['data'][0][item.inProp]:''}}
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
          <el-tab-pane label="补件明细" name="9">
            <el-table :data="reSupplyData" fit>
              <el-table-column v-for="item in reSupplyHead" :label="item.label" align="center" :width="item.width" :key="item.label">
                <template slot-scope="scope">
                  <span v-if="item.inProp">
                    <span v-if="item.inData">
                      {{scope.row[item.prop]['data']?scope.row[item.prop]['data'][0][item.inProp]:''}}
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
          <el-tab-pane label="优惠列表" name="10">
            <el-table :data="offerListData" fit>
              <el-table-column v-for="item in offerListHead" :label="item.label" align="center" :width="item.width"
                :key="item.label">
                <template slot-scope="scope">
                  <span>
                    {{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}
                  </span>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="订单图片" name="11">

          </el-tab-pane>
          <el-tab-pane label="门店收款明细" name="12">
            <el-table :data="receiveDtlData" fit>
              <el-table-column v-for="item in receiveDtlHead" :label="item.label" align="center" :width="item.width"
                :key="item.label">
                <template slot-scope="scope">
                  <span v-if="item.inProp">
                    <span v-if="item.inData">
                      {{scope.row[item.prop]['data']?scope.row[item.prop]['data'][0][item.inProp]:''}}
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
          <el-tab-pane label="电子面单" name="13">
            <el-table :data="EsheetData" fit>
              <el-table-column v-for="item in EsheetHead" :label="item.label" align="center" :width="item.width" :key="item.label">
                <template slot-scope="scope">
                  <span>
                    {{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}
                  </span>
                </template>
              </el-table-column>
            </el-table>

          </el-tab-pane>
          <el-tab-pane label="其他费用" name="14">
            <el-table :data="otherFeeData" fit>
              <el-table-column v-for="item in otherFeeHead" :label="item.label" align="center" :width="item.width" :key="item.label">
                <template slot-scope="scope">
                  <span>
                    {{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}
                  </span>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="库存占用" name="15">
            <el-table :data="warehouseData" fit>
              <el-table-column v-for="item in warehouseHead" :label="item.label" align="center" :width="item.width"
                :key="item.label">
                <template slot-scope="scope">
                  <span>
                    {{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}
                  </span>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="备注" name="16">

          </el-tab-pane>
          <el-tab-pane label="驳回记录" name="17">

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
    <Pagination :page-url="this.urls.customerservicedepts" @handlePagChg="handlePagChg" v-if="activeName=='0'"></Pagination>

  </div>
</template>
<script>
import {
  regionDataPlus,
  CodeToText,
  TextToCode
} from 'element-china-area-data';
export default {
  data() {
    return {
      newOpt: [
        {
          cnt: '删除',
          icon: 'bf-del',
          ent: this.delBatch,
          nClick: true
        },
        {
          cnt: '退审',
          icon: 'bf-auditfaild',
          ent: this.handleUnAudit,
          nClick: true
        },
        {
          cnt: '导入',
          icon: 'bf-in',
          ent: this.test,
          nClick: false
        },
        {
          cnt: '导出',
          icon: 'bf-out',
          ent: this.test,
          nClick: false
        },
        {
          cnt: '同步',
          icon: 'bf-sync',
          ent: this.handleMergerOrder,
          nClick: true
        },
        {
          cnt: '门店收款',
          icon: 'bf-bill',
          ent: this.test,
          nClick: false
        },
        {
          cnt: '转赠品',
          icon: 'bf-gift',
          ent: this.test
        },
        {
          cnt: '还原',
          icon: 'bf-recovery',
          ent: this.test
        },
        {
          cnt: '刷新',
          icon: 'bf-refresh',
          ent: this.refresh
        }
      ],
      filterBox: false,
      searchBox: {
        member_nick: '',
        system_order_no: '',
        receiver_name: '',
        receiver_mobile: '',
        receiver_address: '',
        shops_id: '',
        business_personnel_id: '',
        promise_ship_time: [
          '2018-12-31T16:00:00.000Z',
          '2099-12-31T16:00:00.000Z'
        ],
        created_at: ['2018-12-31T16:00:00.000Z', '2099-12-31T16:00:00.000Z'],
        order_transMStart: '',
        order_transMEnd: '',
        logistics: '',
        stockout_at: ['2018-12-31T16:00:00.000Z', '2099-12-31T16:00:00.000Z'],
        payment_date: ['2018-12-31T16:00:00.000Z', '2099-12-31T16:00:00.000Z'],
        order_status: '',
        orderStatus: [],
        order_fdAuditDate: [
          '2018-12-31T16:00:00.000Z',
          '2099-12-31T16:00:00.000Z'
        ],
        seller_flag: '',
        sellerFlags: [],
        logistics_sn: '',
        out_order: '',
        seller_remark: '',
        suppliers_id: '',
        warehouses_id: '',
        esheet_no: '',
        audit_at: ['2018-12-31T16:00:00.000Z', '2099-12-31T16:00:00.000Z'],
        auditor_id: ''
      },
      /*获取数据*/
      activeName: '0',
      rightActiveName: '0',
      orderListData: [],
      orderListHead: [
        {
          label: '系统订单',
          width: '220',
          prop: 'system_order_no',
          type: 'text'
        },
        {
          label: '补件单号',
          width: '220',
          prop: 'resupplieOrder',
          inProp: 'resupply_order_no',
          type: 'text',
          inData: true
        },
        {
          label: '淘宝单号',
          width: '220',
          prop: 'taobao_oid',
          type: 'text'
        },
        {
          label: '所属店铺',
          width: '150',
          prop: 'shop',
          inProp: 'title',
          type: 'text'
        },
        {
          label: '店铺返点（%）',
          width: '220',
          prop: '',
          type: 'text'
        },
        {
          label: '淘宝旗帜',
          width: '130',
          prop: 'seller_flag',
          type: 'flag'
        },
        {
          label: '订单来源',
          width: '140',
          prop: 'order_source',
          type: 'text'
        },
        {
          label: '买家昵称',
          width: '130',
          prop: 'member_nick',
          type: 'text'
        },
        {
          label: '客户类型',
          width: '130',
          prop: 'customerType',
          inProp: 'name',
          type: 'text'
        },
        {
          label: '收货人手机',
          width: '130',
          prop: 'receiver_mobile',
          type: 'text'
        },
        {
          label: '省',
          width: '120',
          prop: 'receiver_state',
          type: 'text'
        },
        {
          label: '市',
          width: '120',
          prop: 'receiver_city',
          type: 'text'
        },
        {
          label: '区',
          width: '120',
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
          label: '商家优惠金额',
          width: '120',
          prop: '',
          type: 'number'
        },
        {
          label: '其他费用',
          width: '120',
          prop: '',
          type: 'number'
        },
        {
          label: '淘宝商品总金额',
          width: '120',
          prop: '',
          type: 'number'
        },
        {
          label: '支付总金额',
          width: '120',
          prop: '',
          type: 'number'
        },
        {
          label: '实际总金额',
          width: '120',
          prop: '',
          type: 'number'
        },
        {
          label: '标准总金额',
          width: '120',
          prop: '',
          type: 'number'
        },
        {
          label: '成本总金额',
          width: '120',
          prop: '',
          type: 'number'
        },
        {
          label: '业务员',
          width: '140',
          prop: 'businessPersonnel',
          inProp: 'username',
          type: 'text'
        },
        {
          label: '货审员',
          width: '120',
          prop: '',
          type: 'number'
        },
        {
          label: '外部打印单号',
          width: '120',
          prop: '',
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
          label: '物流单号',
          width: '120',
          prop: 'logistics_sn',
          type: 'number'
        },
        {
          label: '实发物流公司',
          width: '140',
          prop: 'logistic',
          inProp: 'name',
          type: 'text'
        },
        {
          label: '物流电话',
          width: '140',
          prop: 'logistic',
          inProp: 'phone',
          type: 'text'
        },
        {
          label: '预计运费',
          width: '130',
          prop: 'expected_freight',
          type: 'text'
        },
        {
          label: '实际运费',
          width: '130',
          prop: 'actual_freight',
          type: 'text'
        },
        {
          label: '三包类型',
          width: '130',
          prop: '',
          type: 'text'
        },
        {
          label: '实际运费类型',
          width: '130',
          prop: 'freightType',
          inProp: 'name',
          type: 'text'
        },
        {
          label: '配送商',
          width: '150',
          prop: 'distribution',
          inProp: 'name',
          type: 'number'
        },
        {
          label: '配送电话',
          width: '150',
          prop: 'distribution',
          inProp: 'phone',
          type: 'number'
        },
        {
          label: '配送类型',
          width: '130',
          prop: 'distributionType',
          inProp: 'name',
          type: 'text'
        },
        {
          label: '送货费',
          width: '120',
          prop: 'deliver_goods_fee',
          type: 'number'
        },
        {
          label: '搬楼费',
          width: '120',
          prop: 'move_upstairs_fee',
          type: 'number'
        },
        {
          label: '安装费',
          width: '120',
          prop: 'installation_fee',
          type: 'number'
        },
        {
          label: '配送总计',
          width: '130',
          prop: 'total_distribution_fee',
          type: 'number'
        },
        {
          label: '配送单号',
          width: '180',
          prop: 'distribution_no',
          type: 'text'
        },
        {
          label: '配送方式',
          width: '130',
          prop: 'distributionMethod',
          inProp: 'name',
          type: 'text'
        },
        {
          label: '配送信息',
          width: '180',
          prop: '',
          type: 'text'
        },
        {
          label: '提货地址',
          width: '180',
          prop: '',
          type: 'text'
        },
        {
          label: '拉货费用',
          width: '180',
          prop: 'take_delivery_goods_fee',
          type: 'text'
        },
        {
          label: '木架费',
          width: '180',
          prop: 'wooden_frame_costs',
          type: 'text'
        },
        {
          label: '优惠返现',
          width: '120',
          prop: 'preferential_cashback',
          type: 'number'
        },
        {
          label: '好评返现',
          width: '120',
          prop: 'favorable_cashback',
          type: 'number'
        },
        {
          label: '购买数量',
          width: '220',
          prop: 'orderItems',
          inProp: 'quantity',
          type: 'text',
          inData: true
        },
        {
          label: '体积',
          width: '220',
          prop: 'orderItems',
          inProp: 'total_volume',
          type: 'text',
          inData: true
        },
        {
          label: '体积单价',
          width: '180',
          prop: '',
          type: 'text'
        },
        {
          label: '包件数',
          width: '180',
          prop: '',
          type: 'text'
        },
        {
          label: '发货员',
          width: '180',
          prop: '',
          type: 'text'
        },
        {
          label: '打单单号',
          width: '180',
          prop: '',
          type: 'text'
        },
        {
          label: '订单状态',
          width: '180',
          prop: 'order_status',
          type: 'text'
        },
        {
          label: '拍单时间',
          width: '180',
          prop: 'created',
          type: 'text'
        },
        {
          label: '支付日期',
          width: '180',
          prop: 'payment_date',
          type: 'text'
        },
        {
          label: '客审时间',
          width: '180',
          prop: 'audit_at',
          type: 'text'
        },
        {
          label: '货审时间',
          width: '180',
          prop: '',
          type: 'text'
        },
        {
          label: '财审时间',
          width: '180',
          prop: '',
          type: 'text'
        },
        {
          label: '打印时间',
          width: '180',
          prop: 'resupplieOrder',
          inProp: 'print_time',
          type: 'text',
          inData: true
        },
        {
          label: '承诺发货时间',
          width: '180',
          prop: 'promise_ship_time',
          type: 'text'
        },
        {
          label: '预计到货时间',
          width: '180',
          prop: '',
          type: 'text'
        },
        {
          label: '实际发货时间',
          width: '180',
          prop: 'resupplieOrder',
          inProp: 'real_consign_time',
          type: 'text',
          inData: true
        },
        {
          label: '承诺到货时间',
          width: '180',
          prop: '',
          type: 'text'
        },
        {
          label: '系统发货时间',
          width: '180',
          prop: 'resupplieOrder',
          inProp: 'system_consign_time',
          type: 'text',
          inData: true
        },
        {
          label: '结算时间',
          width: '180',
          prop: 'resupplieOrder',
          inProp: 'settle_time',
          type: 'text',
          inData: true
        },
        {
          label: '分阶段金额',
          width: '130',
          prop: '',
          type: 'number'
        },
        {
          label: '分阶段状态',
          width: '130',
          prop: '',
          type: 'number'
        },
        {
          label: '服务车金额',
          width: '130',
          prop: 'service_car_fee',
          type: 'number'
        },
        {
          label: '服务车信息',
          width: '150',
          prop: 'service_car_info',
          type: 'text'
        },
        {
          label: '门店收款方式',
          width: '130',
          prop: 'paymentMethod',
          inProp: 'name',
          type: 'text'
        },
        {
          label: '门店订单金额',
          width: '140',
          prop: 'deposit',
          type: 'number'
        },
        {
          label: '门店欠款金额',
          width: '140',
          prop: '',
          type: 'number'
        },
        {
          label: '需要发票',
          width: '90',
          prop: 'is_invoice',
          type: 'checkbox'
        },
        {
          label: '发票快递费',
          width: '130',
          prop: 'invoice_express_fee',
          type: 'number'
        },
        {
          label: '支付方式-京东',
          width: '160',
          prop: '',
          type: 'text'
        },
        {
          label: '订单状态-京东',
          width: '160',
          prop: '',
          type: 'text'
        },
        {
          label: '送货类型-京东',
          width: '160',
          prop: '',
          type: 'text'
        },
        {
          label: '余额支付金额-京东',
          width: '160',
          prop: '',
          type: 'text'
        },
        {
          label: '发票信息',
          width: '160',
          prop: 'print_at',
          type: 'text'
        },
        {
          label: '纳税识别号',
          width: '180',
          prop: 'tax_number',
          type: 'text'
        },
        {
          label: '纳税注册地址',
          width: '180',
          prop: '',
          type: 'text'
        },
        {
          label: '纳税注册电话',
          width: '180',
          prop: '',
          type: 'text'
        },
        {
          label: '纳税注册开户银行',
          width: '180',
          prop: '',
          type: 'text'
        },
        {
          label: '纳税银行账户',
          width: '180',
          prop: '',
          type: 'text'
        },
        {
          label: '发票信息-唯品会',
          width: '180',
          prop: '',
          type: 'text'
        },
        {
          label: 'PO单号-唯品会',
          width: '180',
          prop: '',
          type: 'text'
        },
        {
          label: '促销优惠金额-唯品会',
          width: '180',
          prop: '',
          type: 'text'
        },
        {
          label: '期望收货时间-唯品会',
          width: '180',
          prop: '',
          type: 'text'
        },
        {
          label: '补件原因',
          width: '220',
          prop: 'resupplieOrder',
          inProp: 'resupply_reason',
          type: 'text',
          inData: true
        },
        {
          label: '买家留言',
          width: '150',
          prop: 'buyer_message',
          type: 'text'
        },
        {
          label: '卖家备注',
          width: '150',
          prop: 'customer_service_remark',
          type: 'text'
        },
        {
          label: '交易成功时间',
          width: '150',
          prop: '',
          type: 'text'
        },
        {
          label: '拆分',
          width: '90',
          prop: 'is_split',
          type: 'checkbox'
        },
        {
          label: '合并',
          width: '90',
          prop: 'is_merge',
          type: 'checkbox'
        },
        {
          label: '客审',
          width: '220',
          prop: 'resupplieOrder',
          inProp: 'is_review',
          type: 'checkbox',
          inData: true
        },
        {
          label: '审计',
          width: '90',
          prop: '',
          type: 'checkbox'
        },
        {
          label: '货审',
          width: '90',
          prop: '',
          type: 'checkbox'
        },
        {
          label: '打印',
          width: '220',
          prop: 'resupplieOrder',
          inProp: 'is_print',
          type: 'checkbox',
          inData: true
        },
        {
          label: '复检',
          width: '90',
          prop: '',
          type: 'checkbox'
        },
        {
          label: '发货',
          width: '220',
          prop: 'resupplieOrder',
          inProp: 'is_consign',
          type: 'checkbox',
          inData: true
        },
        {
          label: '结算',
          width: '220',
          prop: 'resupplieOrder',
          inProp: 'is_settle',
          type: 'checkbox',
          inData: true
        },
        {
          label: '作废',
          width: '220',
          prop: 'resupplieOrder',
          inProp: 'is_invalid',
          type: 'checkbox',
          inData: true
        },
        {
          label: '锁定',
          width: '90',
          prop: '',
          type: 'checkbox'
        },
        {
          label: '换货',
          width: '90',
          prop: '',
          type: 'checkbox'
        },
        {
          label: '退款',
          width: '90',
          prop: '',
          type: 'checkbox'
        },
        {
          label: '售前退款',
          width: '90',
          prop: '',
          type: 'checkbox'
        },
        {
          label: '补款单',
          width: '90',
          prop: '',
          type: 'checkbox'
        },
        {
          label: '赠品',
          width: '90',
          prop: '',
          type: 'checkbox'
        },
        {
          label: '分阶段',
          width: '90',
          prop: '',
          type: 'checkbox'
        },
        {
          label: '服务车',
          width: '90',
          prop: '',
          type: 'checkbox'
        },
        {
          label: '红包',
          width: '90',
          prop: '',
          type: 'checkbox'
        },
        {
          label: '等通知发货',
          width: '90',
          prop: 'is_notice',
          type: 'checkbox'
        },
        {
          label: '需要核销',
          width: '90',
          prop: 'is_cancel_after_verification',
          type: 'checkbox'
        },
        {
          label: '接单人',
          width: '120',
          prop: 'accept_order_user',
          type: 'text'
        },
        {
          label: '税号',
          width: '130',
          prop: 'tax_number',
          type: 'text'
        },
        {
          label: '收据',
          width: '130',
          prop: 'receipt',
          type: 'text'
        },
        {
          label: '标记名称',
          width: '130',
          prop: 'resupplieOrder',
          inProp: 'mark_name',
          type: 'text',
          inData: true
        },
        {
          label: '标记人',
          width: '130',
          prop: 'resupplieOrder',
          inProp: 'marker',
          type: 'text',
          inData: true
        },
        {
          label: '标记时间',
          width: '130',
          prop: 'resupplieOrder',
          inProp: 'mark_time',
          type: 'text',
          inData: true
        },
        {
          label: '退款信息',
          width: '130',
          prop: 'refund_info',
          type: 'text'
        },
        {
          label: '发货仓库',
          width: '140',
          prop: 'warehouses',
          inProp: 'name',
          type: 'text'
        }
      ],
      loading: false,
      checkboxInit: false,
      orderListIndex: '',
      alreadyHandle: [],
      //订单明细
      orderDtlFormVal: {},
      orderDtlFormHead: [
        {
          label: '系统单号',
          prop: 'system_order_no',
          type: 'text'
        },
        {
          label: '淘宝单号',
          prop: 'taobao_oid',
          type: 'text'
        },
        {
          label: '交易号',
          prop: 'taobao_tid',
          type: 'text'
        },
        {
          label: '单号关联',
          prop: 'association_taobao_oid',
          type: 'text'
        },
        {
          label: '所属店铺',
          prop: 'shop_name',
          type: 'text'
        },
        {
          label: '业务员',
          prop: 'business_personnel_name',
          type: 'text'
        },
        {
          label: '买家昵称',
          prop: 'member_nick',
          type: 'text'
        },
        {
          label: '收货人',
          prop: 'receiver_name',
          type: 'text'
        },
        {
          label: '手机',
          prop: 'receiver_mobile',
          type: 'text'
        },
        {
          label: '电话',
          prop: 'receiver_phone',
          type: 'text'
        },
        {
          label: '详细地址',
          prop: 'receiver_address',
          type: 'text'
        },
        {
          label: '快递费用',
          prop: 'express_fee',
          type: 'number'
        },
        {
          label: '标准总金额',
          prop: 'move_upstairs_fee',
          type: 'number'
        },
        {
          label: '运费类型',
          prop: 'freight_types_name',
          type: 'text'
        },
        {
          label: '预付运费',
          prop: 'expected_freight',
          type: 'number'
        },
        {
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
        },
        {
          label: '物流成本',
          prop: 'deliver_goods_fee',
          type: 'number'
        },
        {
          label: '订单总额',
          prop: '',
          type: 'number'
        },
        {
          label: '订单时间',
          prop: 'created_at',
          type: 'text'
        },
        {
          label: '付款时间',
          prop: 'payment_date',
          type: 'text'
        },
        {
          label: '承诺时间',
          prop: 'promise_ship_time',
          type: 'text'
        },
        {
          label: '配送方式',
          prop: 'distribution_method',
          type: 'text'
        },
        {
          label: '配送信息',
          prop: 'service_car_info',
          type: 'text'
        },
        {
          label: '费用类型',
          prop: 'deliver_goods_fee',
          type: 'text'
        },
        {
          label: '配送商',
          prop: 'distribution_name',
          type: 'text'
        },
        {
          label: '配送电话',
          prop: 'distribution_phone',
          type: 'text'
        },
        {
          label: '配送类型',
          prop: 'distributionType_name',
          type: 'text'
        },
        {
          label: '配送总计',
          prop: 'total_distribution_fee',
          type: 'number'
        },
        {
          label: '客服备注',
          prop: 'customer_service_remark',
          type: 'textarea'
        },
        {
          label: '卖家备注',
          prop: 'seller_remark',
          type: 'textarea'
        },
        {
          label: '买家留言',
          prop: 'buyer_message',
          type: 'textarea'
        }
      ],
      //底部tab商品明细
      proDtlData: [],
      proDtlHead: [
        {
          label: 'sku名称',
          width: '160',
          prop: 'combination',
          inProp: 'name',
          type: 'text'
        },
        {
          label: '商品编码',
          width: '160',
          prop: 'product',
          inProp: 'commodity_code',
          type: 'text'
        },
        {
          label: '规格编码',
          width: '160',
          prop: 'product',
          inProp: 'productComponents',
          inData: true,
          nmProp: 'component_code',
          type: 'text'
        },
        {
          label: '商品简称',
          width: '160',
          prop: 'product',
          inProp: 'short_name',
          type: 'text',
          inData: true
        },
        {
          label: '规格',
          width: '160',
          prop: 'product',
          inProp: 'productComponents',
          inData: true,
          nmProp: 'spec',
          type: 'text'
        },
        {
          label: '颜色',
          width: '160',
          prop: 'product',
          inProp: 'productComponents',
          inData: true,
          nmProp: 'color',
          type: 'text'
        },
        {
          label: '材质',
          width: '160',
          prop: 'product',
          inProp: 'productComponents',
          inData: true,
          nmProp: 'materials',
          type: 'text'
        },
        {
          label: '功能',
          width: '160',
          prop: 'product',
          inProp: 'productComponents',
          inData: true,
          nmProp: 'function',
          type: 'text'
        },
        {
          label: '特殊',
          width: '160',
          prop: 'product',
          inProp: 'productComponents',
          inData: true,
          nmProp: 'special',
          type: 'text'
        },
        {
          label: '其他',
          width: '160',
          prop: 'product',
          inProp: 'productComponents',
          inData: true,
          nmProp: 'other',
          type: 'text'
        },
        {
          label: '成本',
          width: '160',
          prop: 'product',
          inProp: 'productComponents',
          inData: true,
          nmProp: 'cost',
          type: 'text'
        },
        {
          label: '折扣',
          width: '160',
          prop: 'product',
          inProp: 'productComponents',
          inData: true,
          nmProp: 'discount',
          type: 'text'
        },
        {
          label: '淘宝售价',
          width: '160',
          prop: 'product',
          inProp: 'productComponents',
          inData: true,
          nmProp: 'tb_price',
          type: 'text'
        },
        {
          label: '标准售价',
          width: '160',
          prop: 'product',
          inProp: 'productComponents',
          inData: true,
          nmProp: 'price',
          type: 'text'
        },
        {
          label: '数量',
          width: '130',
          prop: 'quantity',
          type: 'number'
        },
        {
          label: '油漆',
          width: '120',
          prop: 'paint',
          type: 'text'
        },
        {
          label: '需要印刷',
          width: '120',
          prop: 'is_printing',
          type: 'checkbox'
        },
        {
          label: '总体积',
          width: '120',
          prop: 'total_volume',
          type: 'number'
        },
        {
          label: '包件数',
          width: '160',
          prop: 'product',
          inProp: 'productComponents',
          inData: true,
          nmProp: 'package_quantity',
          type: 'text'
        },
        {
          label: '印刷费用',
          width: '140',
          prop: 'printing_fee',
          type: 'number'
        },
        {
          label: '现货',
          width: '120',
          prop: 'is_spot_goods',
          type: 'checkbox'
        },
        {
          label: '单价(线下)',
          width: '150',
          prop: 'under_line_univalent',
          type: 'number'
        },
        {
          label: '优惠(线下)',
          width: '150',
          prop: 'under_line_preferential',
          type: 'number'
        },
        {
          label: '供应商',
          width: '160',
          prop: 'product',
          inProp: 'supplier',
          nmProp: 'name',
          type: 'text'
        }
      ],
      //订单信息
      orderInfoData: [],
      orderInfoHead: [],
      /**底部Tab 货审明细*/
      cargoAuditData: [],
      cargoAuditHead: [
        {
          label: '商品编码',
          width: '160',
          prop: 'product',
          inProp: 'commodity_code',
          type: 'text'
        },
        {
          label: '规格编码',
          width: '160',
          prop: 'product',
          inProp: 'productComponents',
          inData: true,
          nmProp: 'component_code',
          type: 'text'
        },
        {
          label: '仓库名称',
          prop: '',
          inProp: '',
          type: 'text'
        },
        {
          label: '供应商',
          width: '160',
          prop: 'product',
          inProp: 'supplier',
          nmProp: 'name',
          type: 'text'
        },
        {
          label: '已货审数量',
          prop: '',
          type: 'text'
        },
        {
          label: '库存数量',
          prop: '',
          type: 'text'
        },
        {
          label: '订单数量',
          prop: '',
          type: 'text'
        },
        {
          label: '总货审数量',
          prop: '',
          type: 'text'
        },
        {
          label: '采购数量',
          prop: '',
          type: 'text'
        },
        {
          label: '不完整数量',
          prop: '',
          type: 'text'
        },
        {
          label: '借出数量',
          prop: '',
          type: 'text'
        },
        {
          label: '已打印数量',
          prop: '',
          type: 'text'
        }
      ],
      //支付明细
      payDtlData: [],
      payDtlHead: [
        {
          label: '支付金额',
          prop: 'payment',
          type: 'number'
        },
        {
          label: '支付方式',
          prop: 'paymentMethod',
          inProp: 'name',
          type: 'text'
        },
        {
          label: '交易号',
          prop: 'order',
          inProp: 'taobao_tid',
          type: 'text'
        },
        {
          label: '来源单号',
          prop: 'order',
          inProp: 'taobao_oid',
          type: 'text'
        }
      ],
      /**内部便签 */
      innerNoteData: [],
      innerNoteHead: [
        {
          label: '主题',
          prop: 'theme',
          type: 'text'
        },
        {
          label: '用户',
          prop: 'user_name',
          type: 'text'
        },
        {
          label: '内容',
          prop: 'content',
          type: 'text'
        },
        {
          label: '提出时间',
          prop: 'created_at',
          type: 'text'
        }
      ],
      /**底部tab 操作记录 */
      operationRecordData: [],
      operationRecordHead: [
        {
          label: '用户',
          prop: 'user_name',
          type: 'text'
        },
        {
          label: '操作',
          prop: 'operated',
          type: 'text'
        },
        {
          label: '操作描述',
          prop: 'description',
          type: 'text'
        },
        {
          label: '创建时间',
          prop: 'created_at',
          type: 'text'
        }
      ],
      /**底部Tab 结算明细 */
      checkDtlData: [],
      checkDtlHead: [
        {
          label: '所属部门',
          prop: '',
          type: 'text'
        },
        {
          label: '所属结构',
          prop: '',
          type: 'text'
        },
        {
          label: '结算金额',
          prop: '',
          type: 'text'
        },
        {
          label: '备注',
          prop: '',
          type: 'text'
        }
      ],
      //跟单图片
      /**底部tab 物流信息 */
      logisticsData: [],
      logisticsHead: [
        {
          label: '物流单号',
          width: '220',
          prop: 'orders',
          inData: true,
          inProp: 'logistics_sn',
          type: 'text'
        },
        {
          label: '物流公司',
          width: '150',
          prop: 'name',
          type: 'text'
        },
        {
          label: '物流电话',
          width: '150',
          prop: 'phone',
          type: 'text'
        },
        {
          label: '运费类型',
          width: '150',
          prop: 'freightType',
          inProp: 'name',
          type: 'text'
        },
        {
          label: '配送商',
          width: '150',
          prop: '',
          type: 'text'
        },
        {
          label: '配送费用',
          width: '150',
          prop: '',
          type: 'text'
        },
        {
          label: '体积单价',
          width: '150',
          prop: '',
          type: 'text'
        },
        {
          label: '总体积',
          width: '150',
          prop: '',
          type: 'text'
        },
        {
          label: '总包件数',
          width: '150',
          prop: '',
          type: 'text'
        },
        {
          label: '收货人',
          width: '150',
          prop: 'orders',
          inData: true,
          inProp: 'receiver_name',
          type: 'text'
        },
        {
          label: '发货时间',
          width: '150',
          prop: 'orders',
          inData: true,
          inProp: 'stockout_at',
          type: 'text'
        },
        {
          label: '备注',
          width: '150',
          prop: 'orders',
          inData: true,
          inProp: 'goods_check_remark',
          type: 'text'
        }
      ],
      /**补件明细 */
      reSupplyData: [],
      reSupplyHead: [
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
          prop: 'order',
          inProp: 'receiver_name',
          type: 'text'
        },
        {
          label: '收货人电话',
          width: '220',
          prop: 'order',
          inProp: 'receiver_phone',
          type: 'text'
        },
        {
          label: '收货地址',
          width: '220',
          prop: 'address',
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
          label: '物流赔偿费用',
          width: '130',
          prop: 'compensate_fee',
          type: 'number'
        },
        {
          label: '实际发货时间',
          width: '140',
          prop: 'real_consign_time',
          type: 'text'
        },
        {
          label: '送货费',
          prop: 'order',
          inProp: 'deliver_goods_fee',
          type: 'text'
        },
        {
          label: '搬楼费',
          prop: 'order',
          inProp: 'move_upstairs_fee',
          type: 'text'
        },
        {
          label: '安装费',
          prop: 'order',
          inProp: 'installation_fee',
          type: 'text'
        },
        {
          label: '配送总计',
          prop: 'order',
          inProp: 'total_distribution_fee',
          type: 'text'
        },
        {
          label: '客服备注',
          prop: 'order',
          inProp: 'customer_service_remark',
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
      ],
      /**底部Tab 优惠列表 */
      offerListData: [],
      offerListHead: [
        {
          label: '单号',
          width: '140',
          prop: 'mark_time',
          type: 'text'
        },
        {
          label: '优惠标题',
          width: '140',
          prop: 'mark_time',
          type: 'text'
        },
        {
          label: '优惠金额',
          width: '140',
          prop: 'mark_time',
          type: 'text'
        }
      ],
      //门店收款明细
      receiveDtlData: [],
      receiveDtlHead: [
        {
          label: '系统单号',
          width: '140',
          prop: 'order',
          inProp: 'system_order_no',
          type: 'text'
        },
        {
          label: '收货人',
          width: '140',
          prop: 'order',
          inProp: 'receiver_name',
          type: 'text'
        },
        {
          label: '出货日期',
          width: '140',
          prop: 'mark_time',
          type: 'text'
        },
        {
          label: '门店收款方式',
          width: '140',
          prop: 'paymentMethod',
          inProp: 'name',
          type: 'text'
        },
        {
          label: '订单总额',
          width: '140',
          prop: 'payment',
          type: 'text'
        },
        {
          label: '已付定金',
          width: '140',
          prop: 'mark_time',
          type: 'text'
        },
        {
          label: '欠款金额',
          width: '140',
          prop: 'mark_time',
          type: 'text'
        },
        {
          label: '付款方式',
          width: '140',
          prop: 'paymentMethod',
          inProp: 'name',
          type: 'text'
        },
        {
          label: '付款账号',
          width: '140',
          prop: 'mark_time',
          type: 'text'
        },
        {
          label: '付款时间',
          width: '140',
          prop: 'pay_time',
          type: 'text'
        },
        {
          label: '收款人',
          width: '140',
          prop: 'mark_time',
          type: 'text'
        },
        {
          label: '收款账号',
          width: '140',
          prop: 'mark_time',
          type: 'text'
        },
        {
          label: '备注',
          width: '140',
          prop: 'remark',
          type: 'text'
        },
        {
          label: '创建人',
          width: '140',
          prop: 'mark_time',
          type: 'text'
        },
        {
          label: '创建时间',
          width: '140',
          prop: 'created_at',
          type: 'text'
        }
      ],
      //电子面单
      EsheetData: [],
      EsheetHead: [
        {
          label: '电子面单号',
          width: '140',
          prop: 'esheet_no',
          type: 'text'
        }
      ],
      //其他费用
      otherFeeData: [],
      otherFeeHead: [
        {
          label: '系统订单号',
          width: '140',
          prop: 'system_order_no',
          type: 'text'
        },
        {
          label: '费用类型',
          width: '140',
          prop: 'feeType',
          type: 'text'
        },
        {
          label: '费用金额',
          width: '140',
          prop: 'esheet_no',
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
          label: '修改人',
          width: '140',
          prop: 'esheet_no',
          type: 'text'
        },
        {
          label: '修改时间',
          width: '140',
          prop: 'esheet_no',
          type: 'text'
        },
        {
          label: '备注',
          width: '140',
          prop: 'esheet_no',
          type: 'text'
        }
      ],
      //库存占用
      warehouseData: [],
      warehouseHead: [
        {
          label: '商品编码',
          width: '140',
          prop: 'esheet_no',
          type: 'text'
        },
        {
          label: '规格编码',
          width: '140',
          prop: 'esheet_no',
          type: 'text'
        },
        {
          label: '占用仓库',
          width: '140',
          prop: 'esheet_no',
          type: 'text'
        },
        {
          label: '占用数',
          width: '140',
          prop: 'esheet_no',
          type: 'text'
        },
        {
          label: '占用时间',
          width: '140',
          prop: 'esheet_no',
          type: 'text'
        }
      ],
      //备注
      //驳回记录
      curRowId: '',
      curRowData: {},
      options: regionDataPlus,

      toggleText: false,
      toggleHeight: true,
      clickFlag: false,
      proCurSkuData: {},

      addSubData: [],
      /*删除单条*/
      showDel: false,
      delUrl: '',
      delId: '',
      /*删除批量*/
      ids: [],
      splitMask: false,
      splitVal: [],
      splitHead: [
        {
          label: '商品编码',
          prop: 'commodity_code',
          type: 'text'
        },
        {
          label: '商品简称',
          prop: 'short_name',
          type: 'text'
        },
        {
          label: '数量',
          prop: 'quantity',
          type: 'number'
        },
        {
          label: '实际拆分数量',
          prop: '',
          inProp: 'quantity',
          type: 'number'
        }
      ],
      splitRowIndex: '',
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
              shop_name: data['shop']['title'],
              business_personnel_name: data['businessPersonnel']
                ? data['businessPersonnel']['username']
                : '',
              member_nick: data.member_nick,
              receiver_name: data.receiver_name,
              receiver_mobile: data.receiver_mobile,
              receiver_phone: data.receiver_phone,
              receiver_address: data.receiver_address,
              express_fee: data.express_fee,
              freight_types_name: data['freightType']['name'],
              expected_freight: data.expected_freight,
              deliver_goods_fee: data.deliver_goods_fee,
              payment_date: data.payment_date,
              promise_ship_time: data.promise_ship_time,
              distribution_name: data['distribution']['name'],
              distribution_method: data['distributionMethod']['name'],
              service_car_info: data['service_car_info'],
              distribution_phone: data['distribution_phone'],
              buyer_message: data['buyer_message'],
              logistic_name: data['logistic']['name'],
              distributionType_name: data['distributionType']['name'],
              total_distribution_fee: data['total_distribution_fee'],
              customer_service_remark: data['customer_service_remark'],
              seller_remark: data['seller_remark']
            };
          }
          if (data['orderItems']['data'].length > 0) {
            data['orderItems']['data'].map(item => {
              item['name'] = item['combination']['name'];
              item['productComp'] =
                item['combination']['productComponents']['data'];
            });
          }
          this.proDtlData = data['orderItems']['data'];
          /*支付明细*/
          this.payDtlData = data['paymentDetails']['data'];
          break;
      }
    },
    //获取数据
    fetchData() {
      this.$fetch(this.urls.customerservicedepts + '/orderCenter', {
        member_nick: this.searchBox.member_nick,
        system_order_no: this.searchBox.system_order_no,
        receiver_name: this.searchBox.receiver_name,
        receiver_mobile: this.searchBox.receiver_mobile,
        receiver_address: this.searchBox.receiver_address,
        shops_id: this.searchBox.shops_id,
        business_personnel_id: this.searchBox.business_personnel_id,
        promise_ship_time: this.searchBox.promise_ship_time,
        created_at: this.searchBox.created_at,
        order_transMStart: this.searchBox.order_transMStart,
        order_transMEnd: this.searchBox.order_transMEnd,
        logistics: this.searchBox.logistics,
        stockout_at: this.searchBox.stockout_at,
        payment_date: this.searchBox.payment_date,
        order_status: this.searchBox.order_status,
        //order_fdAuditDate: this.searchBox.order_fdAuditDate,
        seller_flag: this.searchBox.seller_flag,
        logistics_sn: this.searchBox.logistics_sn,
        //out_order: this.searchBox.out_order,
        seller_remark: this.searchBox.seller_remark,
        suppliers_id: this.searchBox.suppliers_id,
        warehouses_id: this.searchBox.warehouses_id,
        //esheet_no: this.searchBox.esheet_no,
        audit_at: this.searchBox.audit_at,
        auditor_id: this.searchBox.auditor_id,
        include:
          'resupplieOrder,shop,customerType,businessPersonnel,logistic,freightType,distribution,distributionType,distributionMethod,orderItems,paymentMethod,warehouses,orderItems.combination,orderItems.product.supplier,orderItems.product.productComponents,paymentDetails,paymentDetails.paymentMethod,paymentDetails.order,resupplieOrder.resupplieInnerNote,resupplieOrder.resupplieOperationRecord,logistic.orders,logistic.freightType,resupplieOrder.resupplieCategory,resupplieOrder.order,resupplieOrder.refundMethod,resupplieOrder.logistic,resupplieOrder.resupplieEsheet'
      }).then(
        res => {
          this.loading = false;
          this.orderListData = res.data;
          this.proDtlData = res.data[0] ? res.data['orderItems'].data : [];
          this.cargoAuditData = res.data;
          this.payDtlData = res.data[0] ? res.data['paymentDetails'].data : [];
          this.innerNoteData = [];
          this.operationRecordData = [];
          this.checkDtlData = [];
          this.logisticsData = res.data[0]
            ? [
                {
                  orders: res.data['logistic']['orders'],
                  name: res.data['logistic']['orders'],
                  phone: res.data['logistic']['phone'],
                  freightType: res.data['logistic']['freightType']
                }
              ]
            : [];
          this.reSupplyData = res.data[0]
            ? res.data['resupplieOrder'].data
            : [];
          this.offerListData = [];
          this.receiveDtlData = [];
          this.EsheetData = res.data[0]
            ? res.data['resupplieOrder'].data['resupplieEsheet'].data
            : [];
          this.otherFeeData = [];
          this.warehouseData = [];

          let pg = res.meta.pagination;
          this.$store.dispatch('currentPage', pg.current_page);
          this.$store.commit('PER_PAGE', pg.per_page);
          this.$store.commit('PAGE_TOTAL', pg.total);
          this.$store.dispatch('paymentmethods', this.urls.paymentmethods);
          this.$fetch(this.urls.customerservicedepts + '/create').then(
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
            this.$message.error(arr1.join(','));
          }
        }
      );
    },
    //筛选信息重置
    resets() {
      this.searchBox = {
        member_nick: '',
        system_order_no: '',
        receiver_name: '',
        receiver_mobile: '',
        receiver_address: '',
        shops_id: '',
        business_personnel_id: '',
        promise_ship_time: [
          '2018-12-31T16:00:00.000Z',
          '2099-12-31T16:00:00.000Z'
        ],
        created_at: ['2018-12-31T16:00:00.000Z', '2099-12-31T16:00:00.000Z'],
        order_transMStart: '',
        order_transMEnd: '',
        logistics: '',
        stockout_at: ['2018-12-31T16:00:00.000Z', '2099-12-31T16:00:00.000Z'],
        payment_date: ['2018-12-31T16:00:00.000Z', '2099-12-31T16:00:00.000Z'],
        order_status: '',
        orderStatus: [],
        order_fdAuditDate: [
          '2018-12-31T16:00:00.000Z',
          '2099-12-31T16:00:00.000Z'
        ],
        seller_flag: '',
        sellerFlags: [],
        logistics_sn: '',
        out_order: '',
        seller_remark: '',
        suppliers_id: '',
        warehouses_id: '',
        esheet_no: '',
        audit_at: ['2018-12-31T16:00:00.000Z', '2099-12-31T16:00:00.000Z'],
        auditor_id: ''
      };
    },
    //筛选
    searchData() {
      this.loading = true;
      this.fetchData();
      this.resets();
    },

    rightHandleClick() {},
    orderListRClick(row) {
      this.curRowData = row;
      this.proDtlData = row['orderItems'].data;

      this.cargoAuditData = row['orderItems'].data;
      this.payDtlData = row['paymentDetails'].data;
      this.innerNoteData = [];
      this.operationRecordData = [];
      this.checkDtlData = [];
      this.logisticsData = [
        {
          orders: row['logistic']['orders'],
          name: row['logistic']['name'],
          phone: row['logistic']['phone'],
          freightType: row['logistic']['freightType']
        }
      ];
      this.reSupplyData = row['resupplieOrder'].data;
      this.offerListData = [];
      this.receiveDtlData = [];
      this.EsheetData = [];
      this.otherFeeData = [];
      this.warehouseData = [];
    },
    orderDbClick(row) {
      this.activeName = '1';
      let data = row;
      if (data) {
        this.orderDtlFormVal = {
          system_order_no: data.system_order_no,
          taobao_oid: data.taobao_oid,
          taobao_tid: data.taobao_tid,
          association_taobao_oid: data.association_taobao_oid,
          shop_name: data['shop']['title'],
          business_personnel_name: data['businessPersonnel']
            ? data['businessPersonnel']['username']
            : '',
          member_nick: data.member_nick,
          receiver_name: data.receiver_name,
          receiver_mobile: data.receiver_mobile,
          receiver_phone: data.receiver_phone,
          receiver_address: data.receiver_address,
          express_fee: data.express_fee,
          freight_types_name: data['freightType']['name'],
          expected_freight: data.expected_freight,
          deliver_goods_fee: data.deliver_goods_fee,
          payment_date: data.payment_date,
          promise_ship_time: data.promise_ship_time,
          distribution_name: data['distribution']['name'],
          distribution_method: data['distributionMethod']['name'],
          service_car_info: data['service_car_info'],
          distribution_phone: data['distribution_phone'],
          buyer_message: data['buyer_message'],
          logistic_name: data['logistic']['name'],
          distributionType_name: data['distributionType']['name'],
          total_distribution_fee: data['total_distribution_fee'],
          customer_service_remark: data['customer_service_remark'],
          seller_remark: data['seller_remark']
        };
      }
      console.log(row);
      this.proDtlData = row['orderItems'].data;
      this.cargoAuditData = row['orderItems'].data;

      this.payDtlData = row['paymentDetails'].data;

      this.innerNoteData = [];
      this.operationRecordData = [];
      this.checkDtlData = [];
      this.logisticsData = [
        {
          orders: row['logistic']['orders'],
          name: row['logistic']['name'],
          phone: row['logistic']['phone'],
          freightType: row['logistic']['freightType']
        }
      ];
      this.reSupplyData = row['resupplieOrder'].data;
      this.offerListData = [];
      this.receiveDtlData = [];
      this.EsheetData = [];
      this.otherFeeData = [];
      this.warehouseData = [];
      console.log(this.EsheetData);
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
          'productComponents.product,shop,supplier,goodsCategory,combinations.productComponents'
      }).then(
        res => {
          this.proVal = res.data;
          let comb = res.data[0]['combinations']['data'];
          if (comb.length > 0) {
            let total_volume = 0;
            comb.map(item => {
              item['productComp'] = item['productComponents']['data'];
              if (item['productComponents']['data'].length > 0) {
                item['productComponents']['data'].map(list => {
                  total_volume += list.volume;
                });
              } else {
                total_volume = 0;
              }
              this.$set(item, '', {
                quantity: '',
                paint: '',
                is_printing: false,
                printing_fee: '',
                is_spot_goods: true,
                under_line_univalent: '',
                under_line_preferential: '',
                total_volume: total_volume
              });
            });
          } else {
            comb['productComp'] = [];
          }
          this.proSkuVal = comb;
        },
        err => {}
      );
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
        $('#form').removeClass('hidePart');
        $('#elTabs').removeClass('hidePart');
      } else {
        $('#form').addClass('hidePart');
        $('#elTabs').addClass('hidePart');
      }
    },
    proRowClick(row) {
      this.proSkuVal = [];
      this.proCompRowIndex = '';
      let comb = row['combinations']['data'];
      if (comb.length > 0) {
        let total_volume = 0;
        comb.map(item => {
          item['productComp'] = item['productComponents']['data'];
          if (item['productComponents']['data'].length > 0) {
            item['productComponents']['data'].map(list => {
              total_volume += list.volume;
            });
          } else {
            total_volume = 0;
          }
          this.$set(item, '', {
            quantity: '',
            paint: '',
            is_printing: false,
            printing_fee: '0.0',
            is_spot_goods: false,
            under_line_univalent: '0.0',
            under_line_preferential: '0.0',
            total_volume: total_volume
          });
        });
      } else {
        comb['productComp'] = [];
      }
      this.proSkuVal = comb;
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
        formVal = this.addCustomerFormVal;
      } else {
        formVal = this.updateCustomerFormVal;
      }
      formVal['total_distribution_fee'] =
        formVal['deliver_goods_fee'] -
        0 +
        (formVal['move_upstairs_fee'] - 0) +
        (formVal['installation_fee'] - 0);
      if (this.addCustomerMask) {
        this.addCustomerFormVal.total_distribution_fee =
          formVal['total_distribution_fee'];
      } else {
        this.updateCustomerFormVal.total_distribution_fee =
          formVal['total_distribution_fee'];
      }
    },

    addDelExpense(index) {
      this.expenseData.splice(index, 1);
      this.$message({
        message: '删除成功',
        type: 'success'
      });
    },

    /*删除单条*/
    delSingle(row, e) {
      this.showDel = true;
      $('.el-popper').css({ left: e.x - 100 + 'px', top: e.y - 125 + 'px' });
      this.delId = row.id;
      this.delUrl = row['orderItems']
        ? this.urls.customerservicedepts
        : row['payment']
        ? this.urls['paymentdetails']
        : this.urls.orderitems;
    },
    cancelD() {
      this.showDel = false;
      this.$message({
        message: '取消删除',
        type: 'info'
      });
    },
    confirmD(url, id) {
      this.$del(url + '/' + id).then(
        () => {
          this.showDel = false;
          this.refresh();
          this.$message({
            message: '删除成功',
            type: 'success'
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
            let str = arr1.join(',');
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
      this.ids = delArr.join(',');
      /*拿到当前id*/
      this.checkboxId = val.length > 0 ? val[val.length - 1].id : '';
      this.curRowData = val.length > 0 ? val[val.length - 1] : '';
      this.mergerIds = val;
    },
    delBatch() {
      if (this.ids.length === 0) {
        this.$message({
          message: '没有选中数据',
          type: 'warning'
        });
      } else {
        this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            this.$del(this.urls.customerservicedepts, { ids: this.ids }).then(
              () => {
                this.refresh();
                this.$message({
                  message: '删除成功',
                  type: 'success'
                });
              },
              err => {
                if (err.response) {
                  let arr = err.response.data.errors;
                  let arr1 = [];
                  for (let i in arr) {
                    arr1.push(arr[i]);
                  }
                  let str = arr1.join(',');
                  this.$message.error(str);
                }
              }
            );
          })
          .catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          });
      }
    },
    /*页码*/
    handlePagChg(page) {
      this.$fetch(this.urls.customerservicedepts + '?page=' + page, {
        include:
          'shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems.combination.productComponents,orderItems.product,businessPersonnel,locker,paymentDetails.paymentMethod,paymentDetails.order'
      }).then(res => {
        if (this.leftTopActiveName == '0') {
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
    //退审
    handleUnAudit() {},
    //同步
    handleMergerOrder() {}
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
