<template>
  <div>
    <div class="searchBox">
      <span>
        <label>变更单号</label>
        <el-input v-model="searchBox.change_order_no"></el-input>
      </span>
      <span>
        <label>订单号</label>
        <el-input v-model="searchBox.order_no"></el-input>
      </span>
      <span>
        <label>会员名称</label>
        <el-input v-model="searchBox.member_nick"></el-input>
      </span>
      <span>
        <label>申请人</label>
        <el-input v-model="searchBox.applier_id"></el-input>
      </span>
    </div>
    <div style="text-align: right">
      <el-button type="primary">筛选</el-button>
      <el-button @click="resets">重置</el-button>
    </div>

    <!--*****************************************中间主要的table*******************************-->
    <el-tabs v-model="middleActiveName" @tab-click="firstHandleClick" style="height: 250px;">
      <el-tab-pane label="新建" name="0">
        <el-table :data="newOrderListData" fit @selection-change="handleSelectionChange" v-loading="loading" height="200" @row-click="orderListRClick" @row-dbclick="orderListRClick">
          <el-table-column type="selection" width="95" align="center" :checked="checkBoxInit"></el-table-column>
          <el-table-column v-for="item in middleTableHead" :label="item.label" :width="item.width" :key="item.label">
            <template slot-scope="scope">
              <span v-if="item.type=='checkBox'">
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
      <el-tab-pane label="待处理" name="1">
        <el-table :data="untreatedOrderListData" fit @selection-change="handleSelectionChange" v-loading="loading" height="200" @row-click="orderListRClick" @row-dbclick="orderListRClick">
          <el-table-column type="selection" width="95" align="center" :checked="checkBoxInit"></el-table-column>
          <el-table-column v-for="item in middleTableHead" :label="item.label" :width="item.width" :key="item.label">
            <template slot-scope="scope">
              <span v-if="item.type=='checkBox'">
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
      <el-tab-pane label="已处理" name="2">
        <el-table :data="treatedOrderListData" fit @selection-change="handleSelectionChange" v-loading="loading" height="200" @row-click="orderListRClick" @row-dbclick="orderListRClick">
          <el-table-column type="selection" width="95" align="center" :checked="checkBoxInit"></el-table-column>
          <el-table-column v-for="item in middleTableHead" :label="item.label" :width="item.width" :key="item.label">
            <template slot-scope="scope">
              <span v-if="item.type=='checkBox'">
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
      <el-tab-pane label="作废" name="3">
        <el-table :data="canceledOrderListData" fit @selection-change="handleSelectionChange" v-loading="loading" height="200" @row-click="orderListRClick" @row-dbclick="orderListRClick">
          <el-table-column type="selection" width="95" align="center" :checked="checkBoxInit"></el-table-column>
          <el-table-column v-for="item in middleTableHead" :label="item.label" :width="item.width" :key="item.label">
            <template slot-scope="scope">
              <span v-if="item.type=='checkBox'">
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

    <Pagination :page-url="this.urls.changeorders" @handlePagChg="handlePagChg" v-if="middleActiveName=='0'"></Pagination>

    <!--底部tab-->
    <el-tabs v-model="bottomActiveName" @tab-click="secondHandleClick">
      <el-tab-pane label="变更明细" name="0">
        <el-table :data="changeDetails" fit @selection-change="handleSelectionChange" v-loading="loading" height="200">
          <el-table-column type="selection" width="95" align="center" :checked="checkBoxInit"></el-table-column>
          <el-table-column v-for="item in changeDetailsHead" :label="item.label" :width="item.width" :key="item.label">
            <template slot-scope="scope">
              <span v-if="item.type=='checkBox'">
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
      <el-tab-pane label="变更订单主信息" name="1">
        <el-form :model="changeOrdersMainInfo" class="quarter_turn">
          <el-form-item v-for="item in changeOrdersMainInfoHead" :key="item.label" :label="item.label" :prop="item.prop">
            <span v-if="item.type=='text'">
              <span v-if="item.inProp">
                <el-input v-model.trim="changeOrdersMainInfo[item.prop][item.inProp]" :placeholder="item.holder" disabled></el-input>
              </span>
              <span v-else>
                <el-input v-model.trim="changeOrdersMainInfo[item.prop]" :placeholder="item.holder" disabled></el-input>
              </span>
            </span>
            <span v-else-if="item.type=='number'">
              <el-input type="number" v-model.trim="changeOrdersMainInfo[item.prop]" :placeholder="item.holder" disabled></el-input>
            </span>
            <span v-else-if="item.type=='textarea'">
              <el-input type="textarea" v-model.trim="changeOrdersMainInfo[item.prop]" :placehode="item.holder"></el-input>
            </span>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="操作记录" name="2">
        <el-table :data="operationData" fit height="180">
          <el-table-column v-for="item in operationHead" :label="item.label" align="center" :width="item.width" :key="item.label">
            <template slot-scope="scope">
              <span v-if="item.type=='img'">
                <el-popover placement="right" trigger="hover" popper-class="picture_detail">
                  <img :src="scope.row[item.prop]">
                  <img slot="reference" :src="scope.row[item.prop]" :alt="scope.row[item.alt]">
                </el-popover>
              </span>
              <span v-else>{{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}</span>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>

    <!--*********************************以下为*新增订单变更*所需的Dialog*****************************-->

    <!--新增订单变更-->
    <el-dialog title="新增订单变更" :visible.sync="addOrderChangesMask" :class="{'more-forms':moreForms,'threeParts':threeParts}" class="bigDialog">
      <el-button type="text">基础信息</el-button>
      <el-form :model="addChangeOrderFormVal" :rules="addChangeOrderFormRules" class="addChangeOrderForm" id="form">
        <el-form-item v-for="(item,index) in addChangeOrderFormHead" :key="index" :label="item.label" :prop="item.prop">
          <span v-if="item.type=='text'">
            <span v-if="item.inProp">
              <el-input v-model.trim="addChangeOrderFormVal[item.prop][item.inProp]" :placeholder="item.holder" :disabled="item.addChgAble"></el-input>
            </span>
            <span v-else>
              <el-input v-model.trim="addChangeOrderFormVal[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble"></el-input>
            </span>
          </span>
          <span v-else-if="item.type=='number'">
            <span v-if="item.prop=='deliver_goods_fee' || item.prop=='move_upstairs_fee' || item.prop=='installation_fee'">
              <el-input type="number" v-model.trim="addChangeOrderFormVal[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble" @input="formChg"></el-input>
            </span>
            <span v-else>
              <el-input type="number" v-model.trim="addChangeOrderFormVal[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble"></el-input>
            </span>
          </span>
          <span v-else-if="item.type=='select'">
            <el-select v-model="addChangeOrderFormVal[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble">
              <span v-for="list in addSubData[item.stateVal]" :key="list.id">
                <el-option :label="list.name?list.name:list.nick" :value="list.id"></el-option>
              </span>
            </el-select>
          </span>
          <span v-else-if="item.type=='textarea'">
            <el-input type="textarea" v-model.trim="addChangeOrderFormVal[item.prop]" :placehode="item.holder"></el-input>
          </span>
          <span v-else-if="item.type=='checkbox'">
            <el-checkbox v-model="addChangeOrderFormVal[item.prop]" :disabled="item.chgAble"></el-checkbox>
          </span>
          <span v-else-if="item.type=='radio'">
            <el-radio v-model="addChangeOrderFormVal[item.prop]" label="volume">{{item.choiceName[0]}}</el-radio>
            <el-radio v-model="addChangeOrderFormVal[item.prop]" label="weight">{{item.choiceName[1]}}</el-radio>
          </span>
          <span v-else-if="item.type=='DatePicker'">
            <el-date-picker v-model="addChangeOrderFormVal[item.prop]" type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期"></el-date-picker>
          </span>
        </el-form-item>
      </el-form>
      <el-tabs v-model="addTabActiveName">
        <el-tab-pane label="产品明细" name="0">
          <el-table :data="proData" fit @row-click="addProRowClick" :row-class-name="addProRCName">
            <el-table-column v-for="item in addHead[0]" :label="item.label" align="center" :width="item.width" :key="item.label">
              <template slot-scope="scope">
                <span v-if="item.prop=='newData'">
                  <span v-if="proRIndex == 'index'+scope.$index">
                    <span v-if="item.type=='number'">
                      <el-input size="small" type="number" v-model.trim="scope.row[item.prop][item.inProp]" :placeholder="item.holder"></el-input>
                    </span>
                    <span v-else-if="item.type == 'checkbox'">
                      <el-checkbox v-model="scope.row[item.prop][item.inProp]"></el-checkbox>
                    </span>
                    <span v-else>
                      <el-input size="small" v-model.trim="scope.row[item.prop][item.inProp]" :placeholder="item.holder"></el-input>
                    </span>
                  </span>
                  <span v-else>
                    <span v-if="item.type=='checkbox'">
                      <el-checkbox v-model="scope.row[item.prop][item.inProp]" disabled></el-checkbox>
                    </span>
                    <span v-else>{{scope.row[item.prop][item.inProp]}}</span>
                  </span>
                </span>
                <span v-else-if="item.prop">
                  <span v-if="item.type=='checkbox'">
                    <el-checkbox v-model="scope.row[item.prop]" disabled></el-checkbox>
                  </span>
                  <span v-else-if="item.type=='img'">
                    <el-popover placement="right" trigger="hover" popper-class="picture_detail">
                      <img :src="scope.row[item.prop]">
                      <img slot="reference" :src="scope.row[item.prop]" :alt="scope.row[item.alt]">
                    </el-popover>
                  </span>
                  <span v-else>{{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}</span>
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
                        <span v-else>{{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}</span>
                      </span>
                    </template>
                  </el-table-column>
                </el-table>
              </template>
            </el-table-column>
            <el-table-column label="操作" width="90" align="center" fixed="right">
              <template slot-scope="scope">
                <el-button size="mini" type="danger" @click="addDelPro(scope.$index)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="订单信息">
          <el-form :model="addChangeOrderFormVal">
            <el-form-item v-for="(item,index) in addDialogOrderDtlFormHead" :key="index" :label="item.label" :prop="item.prop">
              <span v-if="item.type=='number'">
                <span v-if="item.prop=='deliver_goods_fee' || item.prop=='move_upstairs_fee' || item.prop=='installation_fee'">
                  <el-input type="number" v-model.trim="addChangeOrderFormVal[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble" @input="formChg"></el-input>
                </span>
                <span v-else-if="item.type=='number'">
                  <el-input type="number" v-model.trim="addChangeOrderFormVal[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble"></el-input>
                </span>
              </span>
              <span v-else-if="item.type=='select'">
                <el-select v-model="addChangeOrderFormVal[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble">
                  <span v-for="list in addSubData[item.stateVal]" :key="list.id">
                    <el-option :label="list.name?list.name:list.nick" :value="list.id"></el-option>
                  </span>
                </el-select>
              </span>
              <span v-else-if="item.type=='textarea'">
                <el-input type="textarea" v-model.trim="addChangeOrderFormVal[item.prop]" :placehode="item.holder"></el-input>
              </span>
              <span v-else-if="item.type=='checkbox'">
                <el-checkbox v-model="addChangeOrderFormVal[item.prop]" :disabled="item.chgAble"></el-checkbox>
              </span>
              <span v-else-if="item.type=='radio'">
                <el-radio v-model="addChangeOrderFormVal[item.prop]" label="volume">{{item.choiceName[0]}}</el-radio>
                <el-radio v-model="addChangeOrderFormVal[item.prop]" label="weight">{{item.choiceName[1]}}</el-radio>
              </span>
              <span v-else-if="item.type=='DatePicker'">
                <el-date-picker v-model="addChangeOrderFormVal[item.prop]" type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期"></el-date-picker>
              </span>
              <span v-if="item.type=='text'">
                <span v-if="item.inProp">
                  <el-input v-model.trim="addChangeOrderFormVal[item.prop][item.inProp]" :placeholder="item.holder" :disabled="item.addChgAble"></el-input>
                </span>
                <span v-else>
                  <el-input v-model.trim="addChangeOrderFormVal[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble"></el-input>
                </span>
              </span>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="费用类型" name="2">
          <el-table :data="expenseData" fit @row-click="addExpenseRClick" :row-class-name="addExpenseRCName">
            <el-table-column v-for="item in expenseHead" :label="item.label" align="center" :width="item.width" :key="item.label">
              <template slot-scope="scope">
                <span v-if="expenseRIndex == 'index'+scope.$index">
                  <span v-if="item.type=='select'">
                    <el-select v-model="scope.row[item.prop]" :placeholder="item.holder">
                      <span v-for="list in addSubData[item.stateVal]" :key="list.id">
                        <el-option :label="list.name" :value="list.id"></el-option>
                      </span>
                    </el-select>
                  </span>
                  <span v-else>
                    <el-input size="small" type="number" v-model.trim="scope.row[item.prop]" :placeholder="item.holder"></el-input>
                  </span>
                </span>
                <span v-else>
                  <span v-if="item.type=='select'">
                    <span v-for="(list,index) in addSubData[item.stateVal]" :key="index">
                      <span v-if="list.id==scope.row[item.prop]">{{list.name}}</span>
                    </span>
                  </span>
                  <span v-else>{{scope.row[item.prop]}}</span>
                </span>
              </template>
            </el-table-column>
            <el-table-column label="操作" width="90" align="center" fixed="right">
              <template slot-scope="scope">
                <el-button size="mini" type="danger" @click="addDelExpense(scope.$index)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
      <div slot="footer" class="dialog-footer clearfix">
        <div style="float: left">
          <el-button type="primary" @click="chooseOrders" v-if="addTabActiveName=='0'">选择订单</el-button>
          <el-button type="primary" @click="addProDtl" v-if="addTabActiveName=='0'">添加商品</el-button>
          <el-button type="primary" @click="addExpenseLine" v-if="addTabActiveName=='2'">新增费用类型</el-button>
        </div>
        <div style="float: right">
          <el-button type="primary" @click="addChangeOrdersConfirm">确定</el-button>
          <el-button @click="addChangeOrderCancel">关闭</el-button>
        </div>
      </div>
    </el-dialog>

    <!-- 选择订单 -->
    <el-dialog title="选择订单" :visible.sync="chooseOrderMask" :class="{'more-forms':moreForms}">
      <el-button type="text">订单列表</el-button>
      <el-table :data="chooseOrderData" fit height="180" :row-class-name="addOrderRowCName" @row-click="chooseOrderRowClick">
        <el-table-column v-for="item in chooseOrderHead" :label="item.label" align="center" :width="item.width" :key="item.label">
          <template slot-scope="scope">
            <span v-if="item.type=='img'">
              <el-popover placement="right" trigger="hover" popper-class="picture_detail">
                <img :src="scope.row[item.prop]">
                <img slot="reference" :src="scope.row[item.prop]" :alt="scope.row[item.alt]">
              </el-popover>
            </span>
            <span v-else>{{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}</span>
          </template>
        </el-table-column>
      </el-table>
      <el-button type="text">订单明细</el-button>
      <el-table :data="proData" fit height="180">
        <el-table-column v-for="item in chooseOrderProListHead" :label="item.label" align="center" :width="item.width" :key="item.label">
          <template slot-scope="scope">
            <span v-if="scope.row[item.prop]">{{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}</span>
          </template>
        </el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer clearfix">
        <div style="float: left">
          <el-button type="primary" @click="chooseOrderFetchData">刷新</el-button>
        </div>
        <div style="float: right">
          <el-button type="primary" @click="chooseOrderConfirm">确定</el-button>
          <el-button @click="chooseOrderCancel" type="warning">取消</el-button>
        </div>
      </div>
    </el-dialog>

    <!--商品明细-->
    <el-dialog title="添加商品" :visible.sync="proMask" :class="{'more-forms':moreForms,'threeParts':threeParts}">
      <el-button type="text">选择商品</el-button>
      <div class="searchBox">
        <span>
          <label>商品编码</label>
          <el-input v-model.trim="proQuery.commodity_code" clearable placeholder="请输入商品编码" @keyup.enter.native="proQueryClick"></el-input>
        </span>
        <span>
          <label>子件编码</label>
          <el-input v-model.trim="proQuery.component_code" clearable placeholder="请输入子件编码" @keyup.enter.native="proQueryClick"></el-input>
        </span>
        <span>
          <label>商品类别</label>
          <el-select v-model="proQuery.shops_id" clearable placeholder="请选择商品类别" @keyup.enter.native="proQueryClick">
            <el-option v-for="item in resData.shops" :key="item.value" :label="item.nick" :value="item.id"></el-option>
          </el-select>
        </span>
        <span>
          <label>商品简称</label>
          <el-input v-model.trim="proQuery.short_name" clearable placeholder="请输入子件编码" @keyup.enter.native="proQueryClick"></el-input>
        </span>
        <span>
          <label>组合筛选</label>
          <el-input v-model.trim="proQuery.component_code" clearable placeholder="请输入子件编码" @keyup.enter.native="proQueryClick"></el-input>
        </span>
        <span>
          <label>成品筛选</label>
          <el-input v-model.trim="proQuery.component_code" clearable placeholder="请输入子件编码" @keyup.enter.native="proQueryClick"></el-input>
        </span>
        <el-button type="primary" @click="proQueryClick">查询</el-button>
      </div>
      <el-table :data="proVal" fit height="250" @row-click="proRowClick">
        <el-table-column v-for="item in proHead" :label="item.label" align="center" :width="item.width" :key="item.label">
          <template slot-scope="scope">
            <span v-if="item.prop">
              <span v-if="item.type=='img'">
                <el-popover placement="right" trigger="hover" popper-class="picture_detail">
                  <img :src="scope.row[item.prop]">
                  <img slot="reference" :src="scope.row[item.prop]" :alt="scope.row[item.alt]">
                </el-popover>
              </span>
              <span v-else>{{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}</span>
            </span>
          </template>
        </el-table-column>
      </el-table>
      <el-button type="text">sku信息</el-button>
      <el-table :data="proSkuVal" fit height="230" :row-class-name="proSkuCName" @row-click="proSkuRowClick">
        <el-table-column v-for="item in proSkuHead" :label="item.label" align="center" :width="item.width" :key="item.label">
          <template slot-scope="scope">
            <span v-if="item.prop=='newData'">
              <span v-if="proCompRowIndex == 'index'+scope.$index">
                <span v-if="item.type=='number'">
                  <span v-if="item.inProp=='quantity'">
                    <el-input size="small" type="number" v-model.trim="scope.row[item.prop][item.inProp]" :placeholder="item.holder" @input="quantityChg"></el-input>
                  </span>
                  <span v-else>
                    <el-input size="small" type="number" v-model.trim="scope.row[item.prop][item.inProp]" :placeholder="item.holder"></el-input>
                  </span>
                </span>
                <span v-else-if="item.type=='checkbox'">
                  <el-checkbox v-model="scope.row[item.prop][item.inProp]"></el-checkbox>
                </span>
                <span v-else>
                  <el-input size="small" v-model.trim="scope.row[item.prop][item.inProp]" :placeholder="item.holder"></el-input>
                </span>
              </span>
              <span v-else>
                <span v-if="item.type=='checkbox'">
                  <el-checkbox v-model="scope.row[item.prop][item.inProp]" disabled></el-checkbox>
                </span>
                <span v-else>{{scope.row[item.prop][item.inProp]}}</span>
              </span>
            </span>
            <span v-else-if="item.prop">
              <span v-if="item.type=='checkbox'">
                <el-checkbox v-model="scope.row[item.prop]" disabled></el-checkbox>
              </span>
              <span v-else-if="item.type=='img'">
                <el-popover placement="right" trigger="hover" popper-class="picture_detail">
                  <img :src="scope.row[item.prop]">
                  <img slot="reference" :src="scope.row[item.prop]" :alt="scope.row[item.alt]">
                </el-popover>
              </span>
              <span v-else>{{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}</span>
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
                    <span v-else>{{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}</span>
                  </span>
                </template>
              </el-table-column>
            </el-table>
          </template>
        </el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="confirmAddProDtl">确定</el-button>
        <el-button @click="cancelAddProDtl">关闭</el-button>
      </div>
    </el-dialog>

    <!--*********************************以下为*修改*所需的Dialog*****************************-->

    <!--修改-->
    <el-dialog title="变更订单修改" :visible.sync="updateOrderChangesMask" :class="{'more-forms':moreForms,'threeParts':threeParts}" class="bigDialog">
      <el-button type="text">基础信息</el-button>
      <el-form :model="updateChangeOrderFormVal" :rules="addChangeOrderFormRules" class="addChangeOrderForm" id="form">
        <el-form-item v-for="(item,index) in addChangeOrderFormHead" :key="index" :label="item.label" :prop="item.prop">
          <span v-if="item.type=='text'">
            <span v-if="item.inProp">
              <el-input v-model.trim="updateChangeOrderFormVal[item.prop][item.inProp]" :placeholder="item.holder" :disabled="item.addChgAble"></el-input>
            </span>
            <span v-else>
              <el-input v-model.trim="updateChangeOrderFormVal[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble"></el-input>
            </span>
          </span>
          <span v-else-if="item.type=='number'">
            <span v-if="item.prop=='deliver_goods_fee' || item.prop=='move_upstairs_fee' || item.prop=='installation_fee'">
              <el-input type="number" v-model.trim="updateChangeOrderFormVal[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble" @input="formChg"></el-input>
            </span>
            <span v-else>
              <el-input type="number" v-model.trim="updateChangeOrderFormVal[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble"></el-input>
            </span>
          </span>
          <span v-else-if="item.type=='select'">
            <el-select v-model="updateChangeOrderFormVal[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble">
              <span v-for="list in addSubData[item.stateVal]" :key="list.id">
                <el-option :label="list.name?list.name:list.nick" :value="list.id"></el-option>
              </span>
            </el-select>
          </span>
          <span v-else-if="item.type=='textarea'">
            <el-input type="textarea" v-model.trim="updateChangeOrderFormVal[item.prop]" :placehode="item.holder"></el-input>
          </span>
          <span v-else-if="item.type=='checkbox'">
            <el-checkbox v-model="updateChangeOrderFormVal[item.prop]" :disabled="item.chgAble"></el-checkbox>
          </span>
          <span v-else-if="item.type=='radio'">
            <el-radio v-model="updateChangeOrderFormVal[item.prop]" label="volume">{{item.choiceName[0]}}</el-radio>
            <el-radio v-model="updateChangeOrderFormVal[item.prop]" label="weight">{{item.choiceName[1]}}</el-radio>
          </span>
          <span v-else-if="item.type=='DatePicker'">
            <el-date-picker v-model="updateChangeOrderFormVal[item.prop]" type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期"></el-date-picker>
          </span>
        </el-form-item>
      </el-form>
      <el-tabs v-model="addTabActiveName">
        <el-tab-pane label="产品明细" name="0">
          <el-table :data="proData" fit @row-click="addProRowClick" :row-class-name="addProRCName">
            <el-table-column v-for="item in addHead[0]" :label="item.label" align="center" :width="item.width" :key="item.label">
              <template slot-scope="scope">
                <span v-if="item.prop=='newData'">
                  <span v-if="proRIndex == 'index'+scope.$index">
                    <span v-if="item.type=='number'">
                      <el-input size="small" type="number" v-model.trim="scope.row[item.prop][item.inProp]" :placeholder="item.holder"></el-input>
                    </span>
                    <span v-else-if="item.type == 'checkbox'">
                      <el-checkbox v-model="scope.row[item.prop][item.inProp]"></el-checkbox>
                    </span>
                    <span v-else>
                      <el-input size="small" v-model.trim="scope.row[item.prop][item.inProp]" :placeholder="item.holder"></el-input>
                    </span>
                  </span>
                  <span v-else>
                    <span v-if="item.type=='checkbox'">
                      <el-checkbox v-model="scope.row[item.prop][item.inProp]" disabled></el-checkbox>
                    </span>
                    <span v-else>{{scope.row[item.prop][item.inProp]}}</span>
                  </span>
                </span>
                <span v-else-if="item.prop">
                  <span v-if="item.type=='checkbox'">
                    <el-checkbox v-model="scope.row[item.prop]" disabled></el-checkbox>
                  </span>
                  <span v-else-if="item.type=='img'">
                    <el-popover placement="right" trigger="hover" popper-class="picture_detail">
                      <img :src="scope.row[item.prop]">
                      <img slot="reference" :src="scope.row[item.prop]" :alt="scope.row[item.alt]">
                    </el-popover>
                  </span>
                  <span v-else>{{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}</span>
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
                        <span v-else>{{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}</span>
                      </span>
                    </template>
                  </el-table-column>
                </el-table>
              </template>
            </el-table-column>
            <el-table-column label="操作" width="90" align="center" fixed="right">
              <template slot-scope="scope">
                <el-button size="mini" type="danger" @click="addDelPro(scope.$index)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="订单信息">
          <el-form :model="updateChangeOrderFormVal">
            <el-form-item v-for="(item,index) in addDialogOrderDtlFormHead" :key="index" :label="item.label" :prop="item.prop">
              <span v-if="item.type=='number'">
                <span v-if="item.prop=='deliver_goods_fee' || item.prop=='move_upstairs_fee' || item.prop=='installation_fee'">
                  <el-input type="number" v-model.trim="updateChangeOrderFormVal[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble" @input="formChg"></el-input>
                </span>
                <span v-else-if="item.type=='number'">
                  <el-input type="number" v-model.trim="updateChangeOrderFormVal[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble"></el-input>
                </span>
              </span>
              <span v-else-if="item.type=='select'">
                <el-select v-model="updateChangeOrderFormVal[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble">
                  <span v-for="list in addSubData[item.stateVal]" :key="list.id">
                    <el-option :label="list.name?list.name:list.nick" :value="list.id"></el-option>
                  </span>
                </el-select>
              </span>
              <span v-else-if="item.type=='textarea'">
                <el-input type="textarea" v-model.trim="updateChangeOrderFormVal[item.prop]" :placehode="item.holder"></el-input>
              </span>
              <span v-else-if="item.type=='checkbox'">
                <el-checkbox v-model="updateChangeOrderFormVal[item.prop]" :disabled="item.chgAble"></el-checkbox>
              </span>
              <span v-else-if="item.type=='radio'">
                <el-radio v-model="updateChangeOrderFormVal[item.prop]" label="volume">{{item.choiceName[0]}}</el-radio>
                <el-radio v-model="updateChangeOrderFormVal[item.prop]" label="weight">{{item.choiceName[1]}}</el-radio>
              </span>
              <span v-else-if="item.type=='DatePicker'">
                <el-date-picker v-model="updateChangeOrderFormVal[item.prop]" type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期"></el-date-picker>
              </span>
              <span v-if="item.type=='text'">
                <span v-if="item.inProp">
                  <el-input v-model.trim="updateChangeOrderFormVal[item.prop][item.inProp]" :placeholder="item.holder" :disabled="item.addChgAble"></el-input>
                </span>
                <span v-else>
                  <el-input v-model.trim="updateChangeOrderFormVal[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble"></el-input>
                </span>
              </span>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="费用类型" name="2">
          <el-table :data="expenseData" fit @row-click="addExpenseRClick" :row-class-name="addExpenseRCName">
            <el-table-column v-for="item in expenseHead" :label="item.label" align="center" :width="item.width" :key="item.label">
              <template slot-scope="scope">
                <span v-if="expenseRIndex == 'index'+scope.$index">
                  <span v-if="item.type=='select'">
                    <el-select v-model="scope.row[item.prop]" :placeholder="item.holder">
                      <span v-for="list in addSubData[item.stateVal]" :key="list.id">
                        <el-option :label="list.name" :value="list.id"></el-option>
                      </span>
                    </el-select>
                  </span>
                  <span v-else>
                    <el-input size="small" type="number" v-model.trim="scope.row[item.prop]" :placeholder="item.holder"></el-input>
                  </span>
                </span>
                <span v-else>
                  <span v-if="item.type=='select'">
                    <span v-for="(list,index) in addSubData[item.stateVal]" :key="index">
                      <span v-if="list.id==scope.row[item.prop]">{{list.name}}</span>
                    </span>
                  </span>
                  <span v-else>{{scope.row[item.prop]}}</span>
                </span>
              </template>
            </el-table-column>
            <el-table-column label="操作" width="90" align="center" fixed="right">
              <template slot-scope="scope">
                <el-button size="mini" type="danger" @click="addDelExpense(scope.$index)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
      <div slot="footer" class="dialog-footer clearfix">
        <div style="float: left">
          <el-button type="primary" @click="chooseOrders" v-if="addTabActiveName=='0'">选择订单</el-button>
          <el-button type="primary" @click="addProDtl" v-if="addTabActiveName=='0'">添加商品</el-button>
          <el-button type="primary" @click="addExpenseLine" v-if="addTabActiveName=='2'">新增费用类型</el-button>
        </div>
        <div style="float: right">
          <el-button type="primary" @click="updateChangeOrdersConfirm">确定</el-button>
          <el-button @click="updateChangeOrderCancel">关闭</el-button>
        </div>
      </div>
    </el-dialog>

    <!-- 选择订单 -->
    <el-dialog title="选择订单" :visible.sync="chooseOrderMask" :class="{'more-forms':moreForms}">
      <el-button type="text">订单列表</el-button>
      <el-table :data="chooseOrderData" fit height="180" :row-class-name="addOrderRowCName" @row-click="chooseOrderRowClick">
        <el-table-column v-for="item in chooseOrderHead" :label="item.label" align="center" :width="item.width" :key="item.label">
          <template slot-scope="scope">
            <span v-if="item.type=='img'">
              <el-popover placement="right" trigger="hover" popper-class="picture_detail">
                <img :src="scope.row[item.prop]">
                <img slot="reference" :src="scope.row[item.prop]" :alt="scope.row[item.alt]">
              </el-popover>
            </span>
            <span v-else>{{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}</span>
          </template>
        </el-table-column>
      </el-table>
      <el-button type="text">订单明细</el-button>
      <el-table :data="proData" fit height="180">
        <el-table-column v-for="item in chooseOrderProListHead" :label="item.label" align="center" :width="item.width" :key="item.label">
          <template slot-scope="scope">
            <span v-if="scope.row[item.prop]">{{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}</span>
          </template>
        </el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer clearfix">
        <div style="float: left">
          <el-button type="primary" @click="chooseOrderFetchData">刷新</el-button>
        </div>
        <div style="float: right">
          <el-button type="primary" @click="chooseOrderConfirm">确定</el-button>
          <el-button @click="chooseOrderCancel" type="warning">取消</el-button>
        </div>
      </div>
    </el-dialog>

    <!--商品明细-->
    <el-dialog title="商品明细" :visible.sync="proMask" :class="{'more-forms':moreForms,'threeParts':threeParts}">
      <el-button type="text">选择商品</el-button>
      <div class="searchBox">
        <span>
          <label>商品编码</label>
          <el-input v-model.trim="proQuery.commodity_code" clearable placeholder="请输入商品编码" @keyup.enter.native="proQueryClick"></el-input>
        </span>
        <span>
          <label>子件编码</label>
          <el-input v-model.trim="proQuery.component_code" clearable placeholder="请输入子件编码" @keyup.enter.native="proQueryClick"></el-input>
        </span>
        <span>
          <label>商品类别</label>
          <el-select v-model="proQuery.shops_id" clearable placeholder="请选择商品类别" @keyup.enter.native="proQueryClick">
            <el-option v-for="item in resData.shops" :key="item.value" :label="item.nick" :value="item.id"></el-option>
          </el-select>
        </span>
        <span>
          <label>商品简称</label>
          <el-input v-model.trim="proQuery.short_name" clearable placeholder="请输入子件编码" @keyup.enter.native="proQueryClick"></el-input>
        </span>
        <span>
          <label>组合筛选</label>
          <el-input v-model.trim="proQuery.component_code" clearable placeholder="请输入子件编码" @keyup.enter.native="proQueryClick"></el-input>
        </span>
        <span>
          <label>成品筛选</label>
          <el-input v-model.trim="proQuery.component_code" clearable placeholder="请输入子件编码" @keyup.enter.native="proQueryClick"></el-input>
        </span>
        <el-button type="primary" @click="proQueryClick">查询</el-button>
      </div>
      <el-table :data="proVal" fit height="250" @row-click="proRowClick">
        <el-table-column v-for="item in proHead" :label="item.label" align="center" :width="item.width" :key="item.label">
          <template slot-scope="scope">
            <span v-if="item.prop">
              <span v-if="item.type=='img'">
                <el-popover placement="right" trigger="hover" popper-class="picture_detail">
                  <img :src="scope.row[item.prop]">
                  <img slot="reference" :src="scope.row[item.prop]" :alt="scope.row[item.alt]">
                </el-popover>
              </span>
              <span v-else>{{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}</span>
            </span>
          </template>
        </el-table-column>
      </el-table>
      <el-button type="text">sku信息</el-button>
      <el-table :data="proSkuVal" fit height="230" :row-class-name="proSkuCName" @row-click="proSkuRowClick">
        <el-table-column v-for="item in proSkuHead" :label="item.label" align="center" :width="item.width" :key="item.label">
          <template slot-scope="scope">
            <span v-if="item.prop=='newData'">
              <span v-if="proCompRowIndex == 'index'+scope.$index">
                <span v-if="item.type=='number'">
                  <span v-if="item.inProp=='quantity'">
                    <el-input size="small" type="number" v-model.trim="scope.row[item.prop][item.inProp]" :placeholder="item.holder" @input="quantityChg"></el-input>
                  </span>
                  <span v-else>
                    <el-input size="small" type="number" v-model.trim="scope.row[item.prop][item.inProp]" :placeholder="item.holder"></el-input>
                  </span>
                </span>
                <span v-else-if="item.type=='checkbox'">
                  <el-checkbox v-model="scope.row[item.prop][item.inProp]"></el-checkbox>
                </span>
                <span v-else>
                  <el-input size="small" v-model.trim="scope.row[item.prop][item.inProp]" :placeholder="item.holder"></el-input>
                </span>
              </span>
              <span v-else>
                <span v-if="item.type=='checkbox'">
                  <el-checkbox v-model="scope.row[item.prop][item.inProp]" disabled></el-checkbox>
                </span>
                <span v-else>{{scope.row[item.prop][item.inProp]}}</span>
              </span>
            </span>
            <span v-else-if="item.prop">
              <span v-if="item.type=='checkbox'">
                <el-checkbox v-model="scope.row[item.prop]" disabled></el-checkbox>
              </span>
              <span v-else-if="item.type=='img'">
                <el-popover placement="right" trigger="hover" popper-class="picture_detail">
                  <img :src="scope.row[item.prop]">
                  <img slot="reference" :src="scope.row[item.prop]" :alt="scope.row[item.alt]">
                </el-popover>
              </span>
              <span v-else>{{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}</span>
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
                    <span v-else>{{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}</span>
                  </span>
                </template>
              </el-table-column>
            </el-table>
          </template>
        </el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="confirmAddProDtl">确定</el-button>
        <el-button @click="cancelAddProDtl">关闭</el-button>
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
          cnt: "增加",
          icon: "bf-add",
          ent: this.addChanges,
          ref: "add",
          nClick: false
        },
        {
          cnt: "修改",
          icon: "bf-change",
          ent: this.updateChanges,
          nClick: true
        },
        {
          cnt: "删除",
          icon: "bf-del",
          ent: this.deleteChanges,
          nClick: true
        },
        {
          cnt: "提交",
          icon: "bf-submit",
          ent: this.submitChanges,
          nClick: true
        },
        {
          cnt: "审核",
          icon: "bf-audit",
          ent: this.handleAudit,
          nClick: true
        },
        {
          cnt: "退审",
          icon: "bf-auditfaild",
          ent: this.handleUnAudit,
          nClick: true
        },
        {
          cnt: "作废",
          icon: "bf-void",
          ent: this.cancel,
          nClick: true
        },
        {
          cnt: "刷新",
          icon: "bf-refresh",
          ent: this.refresh,
          nClick: false
        }
      ],
      addTabActiveName: "0",
      middleActiveName: "0",
      bottomActiveName: "0",
      filterBox: false,
      loading: true, //loading标识
      checkBoxInit: false, //checked 属性l

      /**选择订单界面Dialog 订单列表*/
      chooseOrderMask: false,
      chooseOrderData: {},
      chooseOrderHead: [
        {
          label: "订单编号",
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
          prop: "member_nick",
          type: "text"
        },
        {
          label: "收货人",
          prop: "receiver_name",
          type: "text"
        },
        {
          label: "收货人手机",
          prop: "receiver_mobile",
          type: "text"
        },
        {
          label: "省",
          prop: "receiver_state",
          type: "text"
        },
        {
          label: "市",
          prop: "receiver_city",
          type: "text"
        },
        {
          label: "区",
          prop: "receiver_district",
          type: "text"
        },
        {
          label: "代发供应商",
          prop: "suppliers_id",
          type: "text"
        }
      ],
      /**选择订单界面Dialog 产品列表*/
      proData: {},
      chooseOrderProListHead: [
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

      searchBox: {
        change_order_no: "",
        member_nick: "",
        system_order_no: "",
        receiver_name: "",
        applier_id: ""
      },

      /**首页中间主要table 新建 */
      newOrderListData: [],
      untreatedOrderListData: [],
      treatedOrderListData: [],
      canceledOrderListData: [],
      middleTableHead: [
        // 后端再改inprop
        {
          label: "变更单号",
          width: "220",
          prop: "change_order_no",
          type: "text"
        },
        {
          label: "订单号",
          width: "220",
          prop: "system_order_no",
          type: "text"
        },
        {
          label: "申请人",
          width: "100",
          prop: "applier",
          inProp: "username",
          type: "text"
        },
        {
          label: "审核人",
          width: "100",
          prop: "audit_name",
          type: "text"
        },
        {
          label: "状态",
          width: "100",
          prop: "change_state",
          type: "text"
        },
        {
          label: "服务车金额",
          width: "100",
          prop: "service_car_fee",
          type: "number"
        },
        {
          label: "服务车信息",
          width: "120",
          prop: "service_car_info",
          type: "text"
        },
        //这里需要时间戳转换
        {
          label: "创建时间",
          width: "100",
          prop: "created_at",
          type: "text"
        },
        {
          label: "审核时间",
          width: "130",
          prop: "updated_at",
          type: "text"
        },
        {
          label: "备注",
          width: "200",
          prop: "change_remark",
          type: "text"
        },
        {
          label: "取消单号",
          width: "95",
          prop: "cancel_order_no",
          type: "text"
        },
        {
          label: "全单取消",
          width: "95",
          prop: "cancel_all",
          type: "checkBox"
        }
      ],

      curRowId: "",
      curRowData: {},
      payDtlData: [],

      addDialogOrderDtlFormHead: [
        //新增会话框 下部订单信息formhead
        {
          label: "店铺名称",
          prop: "shops_id",
          holder: "请选择店铺",
          type: "select",
          stateVal: "shop",
          editChgAble: true
        },
        {
          label: "买家姓名",
          width: "130",
          prop: "receiver_name",
          type: "text"
        },
        {
          label: "会员昵称",
          width: "130",
          prop: "member_nick",
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
          label: "固定电话",
          width: "180",
          prop: "receiver_phone",
          type: "text"
        },
        {
          label: "手机号码",
          width: "180",
          prop: "receiver_mobile",
          type: "text"
        },
        {
          label: "邮政编码",
          width: "180",
          prop: "receiver_zip",
          type: "text"
        },
        {
          label: "接单用户",
          prop: "accept_order_user",
          holder: "请输入接单用户",
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
          label: "承诺日期",
          prop: "promise_ship_time",
          type: "DatePicker"
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
          label: "配送类型",
          prop: "distribution_types_id",
          holder: "请选择配送类型",
          type: "select",
          stateVal: "distribution_type"
        },
        {
          label: "配送单号",
          width: "180",
          prop: "distribution_no",
          type: "text"
        },
        {
          label: "送货费用",
          width: "120",
          prop: "deliver_goods_fee",
          type: "number"
        },
        {
          label: "搬楼费用",
          width: "120",
          prop: "move_upstairs_fee",
          type: "number"
        },
        {
          label: "安装费用",
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
          label: "发货仓库",
          holder: "请选择发货仓库",
          prop: "warehouses_id",
          type: "select",
          stateVal: "warehouse"
        },
        {
          label: "代发工厂",
          holder: "请选择代发工厂",
          prop: "warehouses_id",
          type: "select",
          stateVal: "warehouse"
        },
        {
          label: "买家留言",
          width: "150",
          prop: "buyer_message",
          type: "textarea"
        },
        {
          label: "客服备注",
          width: "150",
          prop: "customer_service_remark",
          type: "textarea"
        },
        {
          label: "卖家备注",
          width: "150",
          prop: "customer_service_remark",
          type: "textarea"
        }
      ],
      proSkuVal: [],
      /*新增*/
      addOrderChangesMask: false,
      moreForms: true,
      threeParts: true,
      addChangeOrderFormHead: [
        {
          label: "变更单号",
          holder: "系统自动生成",
          prop: "change_order_no",
          type: "text",
          editChgAble: true,
          addChgAble: true
        },
        {
          label: "订单编码",
          holder: "系统自动填写订单编码",
          prop: "system_order_no",
          type: "text",
          editChgAble: true,
          addChgAble: true
        },
        {
          label: "申请人",
          holder: "系统自动填写申请人",
          prop: "applier_id",
          type: "text",
          editChgAble: true,
          addChgAble: true
        },
        {
          label: "全单取消",
          prop: "is_canceled",
          type: "checkbox"
        },
        {
          label: "备注",
          holder: "请输入备注",
          prop: "remark",
          type: "textarea"
        },
        {
          label: "作废",
          prop: "is_trashed",
          type: "checkbox"
        }
      ],
      addChangeOrderFormRules: {
        //新建订单的要求格式
        system_order_no: [
          { required: true, message: "系统单号必选", trigger: "blur" }
        ]
      },
      addChangeOrderFormVal: {
        id: "",
        change_order_no: "",
        cancel_order_no: "",
        is_canceled: false,
        change_remark: "",
        change_status: 10,
        orders_id: 0,
        //-----变更订单与原始order分界线--------
        system_order_no: "",
        shops_id: 0,
        shops_name: "",
        logistics_id: 0,
        logistics_sn: "",
        billing_way: "",
        promise_ship_time: null,
        freight_types_id: 0,
        expected_freight: 0,
        actual_freight: 0,
        logistics_remark: "",
        is_logistics_checked: false,
        logistics_check_remark: "",
        logistics_checked_at: null,
        distributions_id: 0,
        distribution_methods_id: 0,
        deliver_goods_fee: 0,
        move_upstairs_fee: 0,
        installation_fee: 0,
        total_distribution_fee: 0,
        distribution_phone: "",
        distribution_no: "",
        distribution_types_id: 0,
        is_distribution_checked: false,
        distribution_check_remark: "",
        distribution_checked_at: null,
        service_car_fee: 0,
        service_car_info: "",
        take_delivery_goods_fee: 0,
        take_delivery_goods_ways_id: 0,
        express_fee: 0,
        cancel_after_verification_code: "",
        wooden_frame_costs: 0,
        preferential_cashback: 0,
        favorable_cashback: 0,
        customer_types_id: 0,
        is_invoice: false,
        invoice_express_fee: 0,
        express_invoice_title: "",
        contract_no: "",
        payment_methods_id: 0,
        deposit: 0,
        document_title: "",
        warehouses_id: 0,
        payment_date: null,
        interest_concessions: 0,
        is_notice: false,
        is_cancel_after_verification: false,
        accept_order_user: "",
        tax_number: "",
        receipt: "",
        buyer_message: "",
        seller_remark: "",
        customer_service_remark: "",
        stockout_remark: "",
        taobao_oid: 0,
        taobao_tid: 0,
        member_nick: "",
        seller_name: "",
        seller_flag: "",
        created: null,
        est_con_time: null,
        receiver_name: "",
        receiver_phone: "",
        receiver_mobile: "",
        receiver_state: "",
        receiver_city: "",
        receiver_district: "",
        receiver_address: "",
        receiver_zip: "",
        refund_info: "",
        business_personnel_id: 0,
        locker_id: 0,
        locked_at: null,
        auditor_id: 0,
        audit_at: null,
        cs_auditor_id: 0,
        cs_audited_at: null,
        fd_auditor_id: 0,
        fd_audited_at: null,
        ca_auditor_id: 0,
        ca_audited_at: null,
        stockout_op_id: 0,
        stockout_at: null,
        association_taobao_oid: 0,
        is_merge: false,
        is_split: false,
        is_association: false,
        status: true,
        order_items: [],
        payment_details: []
      },
      updateChangeOrderFormVal: {
        id: "",
        change_order_no: "",
        cancel_order_no: "",
        is_canceled: false,
        change_remark: "",
        change_status: 10,
        orders_id: 0,
        //-----变更订单与原始order分界线--------
        system_order_no: "",
        shops_id: 0,
        shops_name: "",
        logistics_id: 0,
        logistics_sn: "",
        billing_way: "",
        promise_ship_time: null,
        freight_types_id: 0,
        expected_freight: 0,
        actual_freight: 0,
        logistics_remark: "",
        is_logistics_checked: false,
        logistics_check_remark: "",
        logistics_checked_at: null,
        distributions_id: 0,
        distribution_methods_id: 0,
        deliver_goods_fee: 0,
        move_upstairs_fee: 0,
        installation_fee: 0,
        total_distribution_fee: 0,
        distribution_phone: "",
        distribution_no: "",
        distribution_types_id: 0,
        is_distribution_checked: false,
        distribution_check_remark: "",
        distribution_checked_at: null,
        service_car_fee: 0,
        service_car_info: "",
        take_delivery_goods_fee: 0,
        take_delivery_goods_ways_id: 0,
        express_fee: 0,
        cancel_after_verification_code: "",
        wooden_frame_costs: 0,
        preferential_cashback: 0,
        favorable_cashback: 0,
        customer_types_id: 0,
        is_invoice: false,
        invoice_express_fee: 0,
        express_invoice_title: "",
        contract_no: "",
        payment_methods_id: 0,
        deposit: 0,
        document_title: "",
        warehouses_id: 0,
        payment_date: null,
        interest_concessions: 0,
        is_notice: false,
        is_cancel_after_verification: false,
        accept_order_user: "",
        tax_number: "",
        receipt: "",
        buyer_message: "",
        seller_remark: "",
        customer_service_remark: "",
        stockout_remark: "",
        taobao_oid: 0,
        taobao_tid: 0,
        member_nick: "",
        seller_name: "",
        seller_flag: "",
        created: null,
        est_con_time: null,
        receiver_name: "",
        receiver_phone: "",
        receiver_mobile: "",
        receiver_state: "",
        receiver_city: "",
        receiver_district: "",
        receiver_address: "",
        receiver_zip: "",
        refund_info: "",
        business_personnel_id: 0,
        locker_id: 0,
        locked_at: null,
        auditor_id: 0,
        audit_at: null,
        cs_auditor_id: 0,
        cs_audited_at: null,
        fd_auditor_id: 0,
        fd_audited_at: null,
        ca_auditor_id: 0,
        ca_audited_at: null,
        stockout_op_id: 0,
        stockout_at: null,
        association_taobao_oid: 0,
        is_merge: false,
        is_split: false,
        is_association: false,
        status: true,
        order_items: [],
        payment_details: []
      },
      proDtlHead: [
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
      expenseHead: [
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
          prop: "img",
          type: "img"
        },
        {
          label: "商品编码",
          prop: "commodity_code",
          type: "text"
        },
        {
          label: "工厂型号",
          prop: "factory_model",
          type: "text"
        },
        {
          label: "商品简称",
          prop: "short_name",
          type: "text"
        },
        {
          label: "类别名称",
          prop: "goodsCategory",
          inProp: "name",
          type: "text"
        },
        {
          label: "商品备注",
          prop: "remark",
          type: "text"
        }
      ],
      proVal: [],

      /*审核*/
      submitData: {},
      submitId: 0,

      toggleText: false,
      toggleHeight: true,
      clickFlag: false,
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

      proDtlVal: {},
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
      addChangeOrderFormVal: {},
      updateActiveName: "0",
      updateProData: [],
      updateReceiveInfo: {},
      updateExpenseData: [],
      addChangeOrderProIds: [],
      /*删除单条*/

      showDel: false,
      delUrl: "",
      delId: "",

      /**底部变更明细*/
      changeDetails: {},
      changeDetailsHead: [
        {
          label: "组合商品",
          prop: "combinations",
          type: "checkbox"
        },
        {
          label: "规格图片",
          prop: "spec_img",
          type: "img"
        },
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
          label: "规格名称",
          prop: "spec",
          type: "text"
        },
        {
          label: "数量",
          prop: "quantity",
          type: "number"
        },
        {
          label: "销售价格",
          prop: "price",
          type: "number"
        },
        {
          label: "实际价格",
          prop: "actual_price",
          type: "number"
        },
        {
          label: "类型",
          prop: "type",
          type: "text"
        }
      ],
      changeOrdersMainInfo: {},
      changeOrdersMainInfoHead: [
        {
          label: "单据来源",
          prop: "order_source",
          width: "200",
          type: "text",
          editChgAble: true,
          addChgAble: true
        },
        {
          label: "单据编号",
          prop: "taobao_oid",
          type: "text",
          editChgAble: true,
          addChgAble: true
        },
        {
          label: "店铺名称",
          prop: "shops_id",
          holder: "请选择店铺",
          type: "text",
          editChgAble: true
        },
        {
          label: "会员昵称",
          prop: "member_nick",
          holder: "请输入会员昵称",
          type: "text"
        },
        {
          label: "业务员",
          prop: "business_personnel_id",
          //inProp: "name",
          type: "text"
        },
        {
          label: "物流公司",
          prop: "logistics_id",
          holder: "请选择物流公司",
          type: "text"
        },
        {
          label: "承诺日期",
          prop: "promise_ship_time",
          type: "text"
        },
        {
          label: "预计运费",
          prop: "expected_freight",
          holder: "请输入预计运费",
          type: "number"
        },
        {
          label: "运费类型",
          prop: "freight_types_id",
          holder: "请选择运费类型",
          type: "text"
        },
        {
          label: "三包服务",
          prop: "sanbao_service",
          holder: "请选择运费类型",
          type: "text"
        },
        {
          label: "三包类型",
          prop: "sanbao_type",
          holder: "请选择运费类型",
          type: "text"
        },
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
          type: "text"
        },
        {
          label: "邮编",
          prop: "receiver_zip",
          holder: "请输入邮编",
          type: "text"
        },
        {
          label: "地址",
          prop: "receiver_address",
          type: "text"
        },
        {
          label: "配送方式",
          prop: "distribution_methods_id",
          type: "text"
        },
        {
          label: "配送信息",
          prop: "service_car_info",
          type: "text"
        },
        {
          label: "买家留言",
          prop: "buyer_message",
          type: "textarea",
          editChgAble: false,
          addChgAble: false
        },
        {
          label: "卖家备注",
          prop: "seller_remark",
          type: "textarea",
          editChgAble: false,
          addChgAble: false
        }
      ],
      operationData: {},
      operationHead: [
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
          label: "创建时间",
          prop: "created_at",
          type: "text"
        }
      ],

      //批量选择 批量删除
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
      chooseOrderRowIndex: "",
      chooseOrderRowId: "",
      mergerIds: [],
      orderItemListData: [],
      orderItemListHead: [
        {
          label: "系统单号",
          prop: "system_order_no",
          width: "220",
          type: "text"
        },
        {
          label: "店铺名称",
          prop: "shops_id",
          width: "200",
          type: "text"
        },
        {
          label: "订单金额",
          prop: "deposit",
          width: "200",
          type: "text"
        },
        {
          label: "会员ID",
          prop: "member_nick",
          width: "200",
          type: "text"
        }
      ],
      updateOrderChangesMask: false
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
        let searchRegex = new RegExp(this.searchBox.member_nick, 'i');
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
    toogleShow() {
      this.filterBox = !this.filterBox;
    },
    fetchData() {
      let index = this.middleActiveName - 0;
      switch (index) {
        case 0:
          this.$fetch(this.urls.changeorders + "/searchnew", {
            include:
              "shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems.combination.productComponents,orderItems.product,businessPersonnel,locker,paymentDetails.paymentMethod,paymentDetails,applier"
          }).then(
            res => {
              this.loading = false;
              this.newOrderListData = [];
              this.newOrderListData = res.data;
              //this.addChangeOrderFormVal = res.data[0];
              let pg = res.meta.pagination;
              this.$store.dispatch("currentPage", pg.current_page);
              this.$store.commit("PER_PAGE", pg.per_page);
              this.$store.commit("PAGE_TOTAL", pg.total);
              this.$store.dispatch("paymentmethods", this.urls.paymentmethods);
              this.$fetch(this.urls.changeorders + "/create").then(
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
          this.$fetch(this.urls.changeorders + "/searchuntreated", {
            include:
              "shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems.combination.productComponents,orderItems.product,businessPersonnel,locker,paymentDetails.paymentMethod,paymentDetails,applier"
          }).then(
            res => {
              this.loading = false;
              this.untreatedOrderListData = [];
              this.untreatedOrderListData = res.data;
              let pg = res.meta.pagination;
              this.$store.dispatch("currentPage", pg.current_page);
              this.$store.commit("PER_PAGE", pg.per_page);
              this.$store.commit("PAGE_TOTAL", pg.total);
              this.$store.dispatch("paymentmethods", this.urls.paymentmethods);
              this.$fetch(this.urls.changeorders + "/create").then(
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
        case 2:
          this.$fetch(this.urls.changeorders + "/searchtreated", {
            include:
              "shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems.combination.productComponents,orderItems.product,businessPersonnel,locker,paymentDetails.paymentMethod,paymentDetails"
          }).then(
            res => {
              this.loading = false;
              this.treatedOrderListData = [];
              this.treatedOrderListData = res.data;
              let pg = res.meta.pagination;
              this.$store.dispatch("currentPage", pg.current_page);
              this.$store.commit("PER_PAGE", pg.per_page);
              this.$store.commit("PAGE_TOTAL", pg.total);
              this.$store.dispatch("paymentmethods", this.urls.paymentmethods);
              this.$fetch(this.urls.changeorders + "/create").then(
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
        case 3:
          this.$fetch(this.urls.changeorders + "/searchcanceled", {
            include:
              "shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems.combination.productComponents,orderItems.product,businessPersonnel,locker,paymentDetails.paymentMethod,paymentDetails"
          }).then(
            res => {
              this.loading = false;
              this.canceledOrderListData = [];
              this.canceledOrderListData = res.data;
              let pg = res.meta.pagination;
              this.$store.dispatch("currentPage", pg.current_page);
              this.$store.commit("PER_PAGE", pg.per_page);
              this.$store.commit("PAGE_TOTAL", pg.total);
              this.$store.dispatch("paymentmethods", this.urls.paymentmethods);
              this.$fetch(this.urls.changeorders + "/create").then(
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
      }
    },
    /**
     * ********************************************新  增  变  更  订  单 ***************************************************
     * 
     **/
    //1、新增订单变更，功能主要为打开新增变更Dialog
    addChanges() {
      console.log("addChanges");
      this.addOrderChangesMask = true;
      this.addIds = [];
      this.proData = [];
      this.proRIndex = "";
    },
    //2、选择订单·功能主要为打开选择订单dialog
    chooseOrders() {
      this.chooseOrderFetchData();
      this.chooseOrderMask = true;
    },
    //3、选择订单加载数据·从数据库读取数据
    chooseOrderFetchData() {
      this.$fetch(this.urls.changeorders + "/searchorders", {
        include:
          "shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems.combination.productComponents,orderItems.product,businessPersonnel,locker,paymentDetails.paymentMethod,paymentDetails.order"
      }).then(
        res => {
          this.loading = false;
          //将数据存入chooseOrderData渲染选择订单的dialog
          this.chooseOrderData = res.data;
          let pg = res.meta.pagination;
          this.$store.dispatch("currentPage", pg.current_page);
          this.$store.commit("PER_PAGE", pg.per_page);
          this.$store.commit("PAGE_TOTAL", pg.total);
          this.$store.dispatch("paymentmethods", this.urls.paymentmethods);
          this.$fetch(this.urls.changeorders + "/create").then(
            res => {
              this.addSubData = res;
            },
            err => {}
          );
          data[5].orderItems.data[0].combination.productComponents.data[0];
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
    //4、选择订单并将数据填入chooseOrderData中，产品数据存在proData，费用数据存入expenseData
    chooseOrderRowClick(row) {
      this.chooseOrderRowIndex = `index${row.index}`;
      this.chooseOrderRowId = row.id; //选择订单的当前行订单的id，也就是orders的id
      this.proData = []; //存储订单的商品信息
      this.expenseData = []; //存储订单的费用类型信息
      this.proCompRowIndex = "";
      this.addChangeOrderProIds = [];
      this.curRowData = row;
      this.$fetch(
        this.urls.customerservicedepts + "/" + this.chooseOrderRowId,
        {
          include:
            "shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems.combination.productComponents,orderItems.product,businessPersonnel,locker,paymentDetails"
        }
      ).then(
        res => {
          this.id = res["id"];
          this.addChangeOrderFormVal.orders_id = res["id"];
          //-----变更订单与原始order分界线--------
          this.addChangeOrderFormVal.system_order_no = res["system_order_no"];
          this.addChangeOrderFormVal.shops_id = res["shops_id"];
          this.addChangeOrderFormVal.shops_name = res["shops_name"];
          this.addChangeOrderFormVal.logistics_id = res["logistics_id"];
          this.addChangeOrderFormVal.logistics_sn = res["logistics_sn"];
          this.addChangeOrderFormVal.billing_way = res["billing_way"];
          this.addChangeOrderFormVal.promise_ship_time =
            res["promise_ship_time"];
          this.addChangeOrderFormVal.freight_types_id = res["freight_types_id"];
          this.addChangeOrderFormVal.expected_freight = res["expected_freight"];
          this.addChangeOrderFormVal.actual_freight = res["actual_freight"];
          this.addChangeOrderFormVal.logistics_remark = res["logistics_remark"];
          this.addChangeOrderFormVal.is_logistics_checked =
            res["is_logistics_checked"];
          this.addChangeOrderFormVal.logistics_check_remark =
            res["logistics_check_remark"];
          this.addChangeOrderFormVal.logistics_checked_at = res[
            "logistics_checked_at"
          ]
            ? res["logistics_checked_at"]
            : 0;
          this.addChangeOrderFormVal.distributions_id = res["distributions_id"];
          this.addChangeOrderFormVal.distribution_methods_id =
            res["distribution_methods_id"];
          this.addChangeOrderFormVal.deliver_goods_fee =
            res["deliver_goods_fee"];
          this.addChangeOrderFormVal.move_upstairs_fee =
            res["move_upstairs_fee"];
          this.addChangeOrderFormVal.installation_fee = res["installation_fee"];
          this.addChangeOrderFormVal.total_distribution_fee =
            res["total_distribution_fee"];
          this.addChangeOrderFormVal.distribution_phone =
            res["distribution_phone"];
          this.addChangeOrderFormVal.distribution_no = res["distribution_no"];
          this.addChangeOrderFormVal.distribution_types_id =
            res["distribution_types_id"];
          this.addChangeOrderFormVal.is_distribution_checked =
            res["is_distribution_checked"];
          this.addChangeOrderFormVal.distribution_check_remark =
            res["distribution_check_remark"];
          this.addChangeOrderFormVal.distribution_checked_at =
            res["distribution_checked_at"];
          this.addChangeOrderFormVal.service_car_fee = res["service_car_fee"];
          this.addChangeOrderFormVal.service_car_info = res["service_car_info"];
          this.addChangeOrderFormVal.take_delivery_goods_fee =
            res["take_delivery_goods_fee"];
          this.addChangeOrderFormVal.take_delivery_goods_ways_id =
            res["take_delivery_goods_ways_id"];
          this.addChangeOrderFormVal.express_fee = res["express_fee"];
          this.addChangeOrderFormVal.cancel_after_verification_code =
            res["cancel_after_verification_code"];
          this.addChangeOrderFormVal.wooden_frame_costs =
            res["wooden_frame_costs"];
          this.addChangeOrderFormVal.preferential_cashback =
            res["preferential_cashback"];
          this.addChangeOrderFormVal.favorable_cashback =
            res["favorable_cashback"];
          this.addChangeOrderFormVal.customer_types_id =
            res["customer_types_id"];
          this.addChangeOrderFormVal.is_invoice = res["is_invoice"];
          this.addChangeOrderFormVal.invoice_express_fee =
            res["invoice_express_fee"];
          this.addChangeOrderFormVal.express_invoice_title =
            res["express_invoice_title"];
          this.addChangeOrderFormVal.contract_no = res["contract_no"];
          this.addChangeOrderFormVal.payment_methods_id =
            res["payment_methods_id"];
          this.addChangeOrderFormVal.deposit = res["deposit"];
          this.addChangeOrderFormVal.document_title = res["document_title"];
          this.addChangeOrderFormVal.warehouses_id = res["warehouses_id"];
          this.addChangeOrderFormVal.payment_date = res["payment_date"];
          this.addChangeOrderFormVal.interest_concessions =
            res["interest_concessions"];
          this.addChangeOrderFormVal.is_notice = res["is_notice"];
          this.addChangeOrderFormVal.is_cancel_after_verification =
            res["is_cancel_after_verification"];
          this.addChangeOrderFormVal.accept_order_user =
            res["accept_order_user"];
          this.addChangeOrderFormVal.tax_number = res["tax_number"];
          this.addChangeOrderFormVal.receipt = res["receipt"];
          this.addChangeOrderFormVal.buyer_message = res["buyer_message"];
          this.addChangeOrderFormVal.seller_remark = res["seller_remark"];
          this.addChangeOrderFormVal.customer_service_remark =
            res["customer_service_remark"];
          this.addChangeOrderFormVal.stockout_remark = res["stockout_remark"];
          this.addChangeOrderFormVal.taobao_oid = res["taobao_oid"];
          this.addChangeOrderFormVal.taobao_tid = res["taobao_tid"];
          this.addChangeOrderFormVal.member_nick = res["member_nick"];
          this.addChangeOrderFormVal.seller_name = res["seller_name"];
          this.addChangeOrderFormVal.seller_flag = res["seller_flag"];
          this.addChangeOrderFormVal.est_con_time = res["est_con_time"];
          this.addChangeOrderFormVal.receiver_name = res["receiver_name"];
          this.addChangeOrderFormVal.receiver_phone = res["receiver_phone"];
          this.addChangeOrderFormVal.receiver_mobile = res["receiver_mobile"];
          this.addChangeOrderFormVal.receiver_state = res["receiver_state"];
          this.addChangeOrderFormVal.receiver_city = res["receiver_city"];
          this.addChangeOrderFormVal.receiver_district =
            res["receiver_district"];
          this.addChangeOrderFormVal.receiver_address = res["receiver_address"];
          this.addChangeOrderFormVal.receiver_zip = res["receiver_zip"];
          this.addChangeOrderFormVal.refund_info = res["refund_info"];
          this.addChangeOrderFormVal.association_taobao_oid =
            res["association_taobao_oid"];
          this.addChangeOrderFormVal.is_merge = res["is_merge"];
          this.addChangeOrderFormVal.is_split = res["is_split"];
          this.addChangeOrderFormVal.is_association = res["is_association"];
          this.addChangeOrderFormVal.order_items = [];
          this.addChangeOrderFormVal.payment_details = [];

          if (res["orderItems"]["data"].length > 0) {
            res["orderItems"]["data"].map(item => {
              this.addChangeOrderProIds.push(item["combination"].id);
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

          this.proData = res["orderItems"]["data"];
          this.expenseData = res["paymentDetails"]["data"];
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
    //5、确认选择订单-实际并不对订单进行操作，相关操作已经在chooseOrderRowClick完成
    chooseOrderConfirm() {
      this.chooseOrderMask = false;
      this.$message({
        message: "选择订单成功",
        type: "success"
      });
    },
    //6、确认新建订单变更，并把订单提交到数据库存储
    addChangeOrdersConfirm() {
      this.proData.map(item => {
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
        this.addChangeOrderFormVal.order_items.push(proD);
      });
      this.expenseData.map(list => {
        let expenseD = {
          payment: list.payment,
          payment_methods_id: list.payment_methods_id
        };
        this.addChangeOrderFormVal.payment_details.push(expenseD);
      });
      this.$post(this.urls.changeorders, this.addChangeOrderFormVal).then(
        () => {
          this.addOrderChangesMask = false;
          this.refresh();
          this.$message({
            message: "添加成功",
            type: "success"
          });
          this.addChangeOrderFormVal = {
            change_order_no: "",
            cancel_order_no: "",
            is_canceled: false,
            change_remark: "",
            change_status: 10,
            orders_id: 0,
            //-----变更订单与原始order分界线--------
            system_order_no: "",
            shops_id: 0,
            shops_name: "",
            logistics_id: 0,
            logistics_sn: "",
            billing_way: "",
            promise_ship_time: null,
            freight_types_id: 0,
            expected_freight: 0,
            actual_freight: 0,
            logistics_remark: "",
            is_logistics_checked: false,
            logistics_check_remark: "",
            logistics_checked_at: null,
            distributions_id: 0,
            distribution_methods_id: 0,
            deliver_goods_fee: 0,
            move_upstairs_fee: 0,
            installation_fee: 0,
            total_distribution_fee: 0,
            distribution_phone: "",
            distribution_no: "",
            distribution_types_id: 0,
            is_distribution_checked: false,
            distribution_check_remark: "",
            distribution_checked_at: null,
            service_car_fee: 0,
            service_car_info: "",
            take_delivery_goods_fee: 0,
            take_delivery_goods_ways_id: 0,
            express_fee: 0,
            cancel_after_verification_code: "",
            wooden_frame_costs: 0,
            preferential_cashback: 0,
            favorable_cashback: 0,
            customer_types_id: 0,
            is_invoice: false,
            invoice_express_fee: 0,
            express_invoice_title: "",
            contract_no: "",
            payment_methods_id: 0,
            deposit: 0,
            document_title: "",
            warehouses_id: 0,
            payment_date: null,
            interest_concessions: 0,
            is_notice: false,
            is_cancel_after_verification: false,
            accept_order_user: "",
            tax_number: "",
            receipt: "",
            buyer_message: "",
            seller_remark: "",
            customer_service_remark: "",
            stockout_remark: "",
            taobao_oid: 0,
            taobao_tid: 0,
            member_nick: "",
            seller_name: "",
            seller_flag: "",
            created: null,
            est_con_time: null,
            receiver_name: "",
            receiver_phone: "",
            receiver_mobile: "",
            receiver_state: "",
            receiver_city: "",
            receiver_district: "",
            receiver_address: "",
            receiver_zip: "",
            refund_info: "",
            business_personnel_id: 0,
            locker_id: 0,
            locked_at: null,
            auditor_id: 0,
            audit_at: null,
            cs_auditor_id: 0,
            cs_audited_at: null,
            fd_auditor_id: 0,
            fd_audited_at: null,
            ca_auditor_id: 0,
            ca_audited_at: null,
            stockout_op_id: 0,
            stockout_at: null,
            association_taobao_oid: 0,
            is_merge: false,
            is_split: false,
            is_association: false,
            status: true,
            order_items: [],
            payment_details: []
          };
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

    /**
     * ******************************************** 修  改 ***************************************************
     * 
     **/
    //1、点击提交按钮，fetch数据并加载到update窗口里
    updateChanges() {
      console.log("updateChanges");
      if (this.newOpt[1].nClick) {
        return;
      } else {
        this.updateOrderChangesMask = true;
        let id = this.checkboxId ? this.checkboxId : this.curRowId;
        this.$fetch(this.urls.changeorders + "/" + id, {
          include:
            "shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems.combination.productComponents,orderItems.product,businessPersonnel,locker,paymentDetails.paymentMethod,paymentDetails.order"
        }).then(
          res => {
            this.updateChangeOrderFormVal = res;
            if (res["orderItems"]["data"].length > 0) {
              res["orderItems"]["data"].map(item => {
                this.addChangeOrderProIds.push(item["combination"].id);
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

            this.proData = res["orderItems"]["data"];
            this.expenseData = res["paymentDetails"]["data"];
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
      }
    },
    updateChangeOrdersConfirm() {
      let forData = this.updateChangeOrderFormVal;
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
        receiver_name: forData.receiver_name,
        receiver_phone: forData.receiver_phone,
        receiver_mobile: forData.receiver_mobile,
        receiver_state: forData.receiver_state,
        receiver_city: forData.receiver_city,
        receiver_district: forData.receiver_district,
        receiver_address: forData.receiver_address,
        receiver_zip: forData.receiver_zip,
        order_items: [],
        payment_details: []
      };
      this.proData.map(item => {
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
      });
      this.expenseData.map(list => {
        let expenseD = {
          payment: list.payment,
          payment_methods_id: list.payment_methods_id
        };
        submitData.payment_details.push(expenseD);
      });
      let id = this.checkboxId ? this.checkboxId : this.curRowId;
      this.$patch(this.urls.changeorders + "/" + id, submitData).then(
        () => {
          this.updateOrderChangesMask = false;
          this.refresh();
          this.$message({
            message: "更新成功",
            type: "success"
          });
          this.updateChangeOrderFormVal = {
            change_order_no: "",
            cancel_order_no: "",
            is_canceled: false,
            change_remark: "",
            change_status: 10,
            orders_id: 0,
            //-----变更订单与原始order分界线--------
            system_order_no: "",
            shops_id: 0,
            shops_name: "",
            logistics_id: 0,
            logistics_sn: "",
            billing_way: "",
            promise_ship_time: null,
            freight_types_id: 0,
            expected_freight: 0,
            actual_freight: 0,
            logistics_remark: "",
            is_logistics_checked: false,
            logistics_check_remark: "",
            logistics_checked_at: null,
            distributions_id: 0,
            distribution_methods_id: 0,
            deliver_goods_fee: 0,
            move_upstairs_fee: 0,
            installation_fee: 0,
            total_distribution_fee: 0,
            distribution_phone: "",
            distribution_no: "",
            distribution_types_id: 0,
            is_distribution_checked: false,
            distribution_check_remark: "",
            distribution_checked_at: null,
            service_car_fee: 0,
            service_car_info: "",
            take_delivery_goods_fee: 0,
            take_delivery_goods_ways_id: 0,
            express_fee: 0,
            cancel_after_verification_code: "",
            wooden_frame_costs: 0,
            preferential_cashback: 0,
            favorable_cashback: 0,
            customer_types_id: 0,
            is_invoice: false,
            invoice_express_fee: 0,
            express_invoice_title: "",
            contract_no: "",
            payment_methods_id: 0,
            deposit: 0,
            document_title: "",
            warehouses_id: 0,
            payment_date: null,
            interest_concessions: 0,
            is_notice: false,
            is_cancel_after_verification: false,
            accept_order_user: "",
            tax_number: "",
            receipt: "",
            buyer_message: "",
            seller_remark: "",
            customer_service_remark: "",
            stockout_remark: "",
            taobao_oid: 0,
            taobao_tid: 0,
            member_nick: "",
            seller_name: "",
            seller_flag: "",
            created: null,
            est_con_time: null,
            receiver_name: "",
            receiver_phone: "",
            receiver_mobile: "",
            receiver_state: "",
            receiver_city: "",
            receiver_district: "",
            receiver_address: "",
            receiver_zip: "",
            refund_info: "",
            business_personnel_id: 0,
            locker_id: 0,
            locked_at: null,
            auditor_id: 0,
            audit_at: null,
            cs_auditor_id: 0,
            cs_audited_at: null,
            fd_auditor_id: 0,
            fd_audited_at: null,
            ca_auditor_id: 0,
            ca_audited_at: null,
            stockout_op_id: 0,
            stockout_at: null,
            association_taobao_oid: 0,
            is_merge: false,
            is_split: false,
            is_association: false,
            status: true,
            order_items: [],
            payment_details: []
          };
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

    /**
     * ******************************************** 提  交 ***************************************************
     * 
     **/
    handleSubmit() {
      console.log("handleSubmit");
      if (this.newOpt[3].nClick) {
        return;
      } else {
        let id = this.checkboxId ? this.checkboxId : this.curRowId;
        this.$put(this.urls.customerservicedepts + "/" + id + "submit").then(
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

    /**
     * ******************************************** 审  核 ***************************************************
     * 
     **/
    handleAudit() {
      console.log("handleAudit");
      if (this.newOpt[4].nClick) {
        return;
      } else {
        let id = this.checkboxId ? this.checkboxId : this.curRowId;
        this.$fetch(this.urls.changeorders + "/" + id, {
          include:
            "shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems.combination.productComponents,orderItems.product,businessPersonnel,locker,paymentDetails.paymentMethod,paymentDetails"
        }).then(
          res => {
            /*请求选中的数据并拼接用于patch Order的submit*/
            //this.submitData = res;
            this.submitData = res;
            let patchId = res.orders_id;
            let patchItemId = res.order_items_id;
            let paymentDtlId = res.payment_details_id;
            let forData = this.submitData;
            let patchData = {
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
              cancel_after_verification_code:
                forData.cancel_after_verification_code,
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
              is_cancel_after_verification:
                forData.is_cancel_after_verification,
              accept_order_user: forData.accept_order_user,
              tax_number: forData.tax_number,
              receipt: forData.receipt,
              logistics_remark: forData.logistics_remark,
              seller_remark: forData.seller_remark,
              customer_service_remark: forData.customer_service_remark,
              buyer_message: forData.buyer_message,
              status: forData.status,
              receiver_name: forData.receiver_name,
              receiver_phone: forData.receiver_phone,
              receiver_mobile: forData.receiver_mobile,
              receiver_state: forData.receiver_state,
              receiver_city: forData.receiver_city,
              receiver_district: forData.receiver_district,
              receiver_address: forData.receiver_address,
              receiver_zip: forData.receiver_zip,
              order_items: [],
              payment_details: []
            };
            /** 对orderItems进行处理*/
            if (res["orderItems"]["data"].length > 0) {
              res["orderItems"]["data"].map(item => {
                this.addChangeOrderProIds.push(item["combination"].id);
                item["name"] = item["combination"]["name"];
                item["id"] = patchItemId; //这里赋值的是change_orders的itemid，应该赋值为order的item id
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
            this.proData = res["orderItems"]["data"];
            this.expenseData = res["paymentDetails"]["data"];
            /**将proData数据加入到submitData里 */
            this.proData.map(item => {
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
                under_line_total_amount:
                  item["newData"].under_line_total_amount,
                under_line_preferential: item["newData"].under_line_preferential
              };
              patchData.order_items.push(proD);
            });
            /**将expenseData加入到submitData里*/
            this.expenseData.map(list => {
              if (list.id) {
                let expenseD = {
                  id: paymentDtlId,
                  payment: list.payment,
                  payment_methods_id: list.payment_methods_id
                };
                patchData.payment_details.push(expenseD);
              } else {
                let expenseD = {
                  payment: list.payment,
                  payment_methods_id: list.payment_methods_id
                };
                patchData.payment_details.push(expenseD);
              }
            });
            let id = this.checkboxId ? this.checkboxId : this.curRowId;
            this.$patch(
              this.urls.customerservicedepts + "/" + patchId,
              patchData
            ).then(
              () => {
                this.$put(
                  this.urls.changeorders + "/" + id + "/auditchanges"
                ).then(
                  () => {
                    this.$message({
                      message: "审核成功",
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
              this.$message.error(arr1.join(","));
            }
          }
        );
      }
    },
    test() {
      console.log(1);
    },
    confirmAddProDtl() {
      if (this.addOrderChangesMask) {
        this.proSubmitData.map(item => {
          if (this.addIds.indexOf(item.id) == -1) {
            this.proData.push(item);
            this.addIds.push(item.id);
            this.$message({
              message: "添加商品信息成功",
              type: "success"
            });
            this.proMask = false;
          } else {
            this.proData.map((list, index) => {
              if (list.id == item.id) {
                this.proData.splice(index, 1);
                this.proData.push(item);
                this.$message({
                  message: "添加商品信息成功",
                  type: "success"
                });
                this.proMask = false;
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
    addProRCName({ row, rowIndex }) {
      row.index = rowIndex;
    },
    refresh() {
      this.loading = true;
      this.fetchData();
    },
    addProRowClick(row) {
      this.proRIndex = `index${row.index}`;
    },
    addAfterSProRowCName({ row, rowIndex }) {
      row.index = rowIndex;
    },
    addOrderRowCName({ row, rowIndex }) {
      row.index = rowIndex;
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
    addExpenseRClick(row) {
      this.expenseRIndex = `index${row.index}`;
    },
    addExpenseRCName({ row, rowIndex }) {
      row.index = rowIndex;
    },
    proSkuRowClick(row) {
      this.proCompRowIndex = `index${row.index}`;
      this.proCompRow = row;
    },
    /*新增行*/
    addExpenseLine() {
      if (this.chooseOrderMask) {
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
    addDelExpense(index) {
      this.expenseData.splice(index, 1);
      this.$message({
        message: "删除成功",
        type: "success"
      });
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
    proSkuCName({ row, rowIndex }) {
      row.index = rowIndex;
    },
    proSkuRowClick(row) {
      this.proCompRowIndex = `index${row.index}`;
      this.proCompRow = row;
    },
    addProRowClick(row) {
      this.proRIndex = `index${row.index}`;
    },
    addDelPro(index) {
      this.proData.splice(index, 1);
    },
    cancelAddProDtl() {
      this.proMask = false;
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
    /*页码*/
    handlePagChg(page) {
      this.$fetch(this.urls.changeorders + "?page=" + page, {
        include:
          "shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems.combination.productComponents,orderItems.product,businessPersonnel,locker,paymentDetails.paymentMethod,paymentDetails"
      }).then(res => {
        let index = this.middleActiveName - 0;
        switch (index) {
          case 0:
            this.newOrderListData = res.data;
            break;
          case 1:
            this.untreatedOrderListData = res.data;
            break;
          case 2:
            this.treatedOrderListData = res.data;
            break;
          case 3:
            this.canceledOrderListData = rew.data;
            break;
        }
      });
    },
    firstHandleClick() {
      this.loading = true;
      this.fetchData();
    },
    secondHandleClick() {
      let index = this.bottomActiveName - 0;
      switch (index) {
        case 0:
          this.loading = true;
          this.fetchData();
          break;
        case 1:
          console.log(index);
          break;
        case 2:
          console.log(index);
          break;
        case 3:
          console.log(index);
          break;
      }
    },
    orderListRClick(row) {
      if (row["change_status"] == 10) {
        this.newOpt[0].nClick = false;
        this.newOpt[1].nClick = false;
        this.newOpt[2].nClick = false;
        this.newOpt[3].nClick = false;
        this.newOpt[4].nClick = true;
        this.newOpt[5].nClick = true;
        this.newOpt[6].nClick = false;
        this.newOpt[7].nClick = false;
      }
      if (row["change_status"] == 20) {
        this.newOpt[0].nClick = false;
        this.newOpt[1].nClick = false;
        this.newOpt[2].nClick = false;
        this.newOpt[3].nClick = true;
        this.newOpt[4].nClick = false;
        this.newOpt[5].nClick = false;
        this.newOpt[6].nClick = false;
        this.newOpt[7].nClick = false;
      }
      if (row["change_status"] == 30) {
        this.newOpt[0].nClick = false;
        this.newOpt[1].nClick = true;
        this.newOpt[2].nClick = true;
        this.newOpt[3].nClick = true;
        this.newOpt[4].nClick = true;
        this.newOpt[5].nClick = true;
        this.newOpt[6].nClick = true;
        this.newOpt[7].nClick = false;
      }
      if (row["status"] == 0) {
        this.newOpt[0].nClick = false;
        this.newOpt[1].nClick = true;
        this.newOpt[2].nClick = true;
        this.newOpt[3].nClick = true;
        this.newOpt[4].nClick = true;
        this.newOpt[5].nClick = true;
        this.newOpt[6].nClick = false;
        this.newOpt[7].nClick = false;
      }
      this.curRowId = row.id;
      this.curRowData = row;
      this.changeOrdersMainInfo = this.curRowData;
    },
    deleteChanges() {
      console.log("deleteChanges");
    },
    submitChanges() {
      if (this.newOpt[3].nClick) {
        return;
      } else {
        let id = this.checkboxId ? this.checkboxId : this.curRowId;
        this.$put(this.urls.changeorders + "/" + id + "/submit").then(
          () => {
            // this.newOpt[1].nClick = true;
            this.refresh();
            this.$message({
              message: "提交成功",
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
      if (this.newOpt[5].nClick) {
        return;
      } else {
        let id = this.checkboxId ? this.checkboxId : this.curRowId;
        this.$put(this.urls.changeorders + "/" + id + "/unaudit").then(
          () => {
            this.refresh();
            this.$message({
              message: "退回提交成功",
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
    addProDtl() {
      this.proMask = true;
      Object.assign(this.proQuery, this.$options.data().proQuery);
      this.proVal = [];
      this.proSkuVal = [];
      this.proIds = [];
    },
    formChg() {
      let formVal;
      if (this.addOrderChangesMask) {
        formVal = this.addChangeOrderFormVal;
      } else {
        formVal = this.updateChangeOrderFormVal;
      }
      formVal["total_distribution_fee"] =
        formVal["deliver_goods_fee"] -
        0 +
        (formVal["move_upstairs_fee"] - 0) +
        (formVal["installation_fee"] - 0);
      if (this.addOrderChangesMask) {
        this.addChangeOrderFormVal.total_distribution_fee =
          formVal["total_distribution_fee"];
      } else {
        this.updateChangeOrderFormVal.total_distribution_fee =
          formVal["total_distribution_fee"];
      }
    },
    addChangeOrderCancel() {
      this.addOrderChangesMask = false;
    },
    updateChangeOrderCancel() {
      this.updateOrderChangesMask = false;
    },
    //批量删除操作
    handleSelectionChange(val) {
      console.log(val);
      //拿到当前id集合
      let delArr = [];
      val.forEach(seletedIem => {
        delArr.push(selecteItem.id);
      });
      console.log(+delArr);
      this.ids = delArr.join(",");
      console.log(delArr);
      //拿到当前id
      this.checkboxId = val.length > 0 ? val[val.length - 1].id : "";
      this.curRowData = val.length > 0 ? val[val.length - 1] : "";
      this.mergerIds = val;
    },
    chooseOrderCancel() {
      this.chooseOrderMask = false;
      this.$message({
        message: "取消选择订单",
        type: "success"
      });
    },
    cancel() {
      if (this.newOpt[6].nClick) {
        return;
      } else {
        let id = this.checkboxId ? this.checkboxId : this.curRowId;
        this.$put(this.urls.changeorders + "/" + id + "/cancel").then(
          () => {
            this.refresh();
            this.$message({
              message: "订单已作废",
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
    resets() {
      this.searchBox = {};
    }
  },
  mounted() {
    this.fetchData();
    // this.$store.state.opt.opts = this.newOpt;
    // this.$store.commit('change', this.newOpt);
    // const that = this;
    this.$store.dispatch("setOpt", this.newOpt);
    let that = this;
    $(window).resize(() => {
      return (() => {
        // that.$store.state.opt.opts = that.newOpt;
        // that.$store.commit('change', that.newOpt);
        that.$store.dispatch("setOpt", that.newOpt);
      })();
    });
  }
};
</script>
