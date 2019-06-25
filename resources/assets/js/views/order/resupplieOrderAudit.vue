<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="outerHandleClick">
      <el-tab-pane label="订单" name="0">
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
            <span>
              <label>业务日期</label>
              <el-date-picker v-model="searchBox.created_at" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
              </el-date-picker>
            </span>
          </div>
          <div class="searchBox">
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
            <span></span>
            <span></span>
          </div>
          <div style="text-align: right">
            <el-button type="primary" @click="fetchData">筛选</el-button>
            <el-button @click="resets">重置</el-button>
          </div>
        </div>
        <!--显示列表-未处理-->
        <el-tabs v-model="leftTopActiveName" @tab-click="fetchData" style="height: 400px;">
          <el-tab-pane label="未提交" name="0">
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
                  <el-button size="mini" type="danger" @click="delSingle(scope.row,$event)">删除
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="未审核" name="1">
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
                  <el-button size="mini" type="danger" @click="delSingle(scope.row,$event)">删除
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="已审核" name="2">
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
                  <el-button size="mini" type="danger" @click="delSingle(scope.row,$event)">删除
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="所有数据" name="3">
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
                  <el-button size="mini" type="danger" @click="delSingle(scope.row,$event)">删除
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
      <el-tab-pane label="订单明细" name="1">
        <!-- 上方信息 -->
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
        <!-- 下方信息 -->
        <el-tabs v-model="rightActiveName" @tab-click="fetchData">
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
                    <el-table-column v-for="item in orderDtlHead[rightActiveName]" :label="item.label" align="center" :width="item.width" :key="item.label">
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
            <el-table :data="innerNote" fit>
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
            <el-table :data="operationData" fit>
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
            <el-table :data="relatedInfoData" fit>
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
            <el-table :data="otherFeeData" fit>
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
            <el-table :data="rejectReasonData" fit>
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
            <el-table :data="offListData" fit>
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
            <el-table :data="imageData" fit>
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

    <!--修改-->
    <el-dialog title="修改明细" :visible.sync="updateResupplieOrderMask" :class="{'more-forms':moreForms,'threeParts':threeParts}" class="bigDialog">
      <div class="clearfix">
        <span style="float: left">修改信息</span>
      </div>
      <el-form :model="updateResupplieOrderFormVal" :rules="updateResupplieOrderFormRules" class="resupplieOrderUpdateForm" id="form">
        <el-form-item v-for="(item,index) in updateResupplieOrderFormHead" :key="index" :label="item.label" :prop="item.prop">
          <span v-if="item.type=='text'">
            <span v-if="item.inProp">
              <el-input v-model.trim="updateResupplieOrderFormVal[item.prop][item.inProp]" :placeholder="item.holder" :disabled="item.addChgAble"></el-input>
            </span>
            <span v-else>
              <el-input v-model.trim="updateResupplieOrderFormVal[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble"></el-input>
            </span>
          </span>
          <span v-else-if="item.type=='number'">
            <span v-if="item.prop=='deliver_goods_fee' || item.prop=='move_upstairs_fee' || item.prop=='installation_fee'">
              <el-input type="number" v-model.trim="updateResupplieOrderFormVal[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble" @input="formChg"></el-input>
            </span>
            <span v-else>
              <el-input type="number" v-model.trim="updateResupplieOrderFormVal[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble"></el-input>
            </span>
          </span>
          <span v-else-if="item.type=='select'">
            <el-select v-model="updateResupplieOrderFormVal[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble">
              <span v-for="list in addSubData[item.stateVal]" :key="list.id">
                <el-option :label="list.name?list.name:list.nick" :value="list.id"></el-option>
              </span>
            </el-select>
          </span>
          <span v-else-if="item.type=='textarea'">
            <el-input type="textarea" v-model.trim="updateResupplieOrderFormVal[item.prop]" :placehode="item.holder"></el-input>
          </span>
          <span v-else-if="item.type=='checkbox'">
            <el-checkbox v-model="updateResupplieOrderFormVal[item.prop]" :disabled="item.chgAble"></el-checkbox>
          </span>
          <span v-else-if="item.type=='radio'">
            <el-radio v-model="updateResupplieOrderFormVal[item.prop]" label="volume">{{item.choiceName[0]}}</el-radio>
            <el-radio v-model="updateResupplieOrderFormVal[item.prop]" label="weight">{{item.choiceName[1]}}</el-radio>
          </span>
          <span v-else-if="item.type=='DatePicker'">
            <el-date-picker v-model="updateResupplieOrderFormVal[item.prop]" type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期">
            </el-date-picker>
          </span>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer clearfix">
        <div style="float: right">
          <el-button type="primary" @click="updateResupplieOrderConfirm">确定</el-button>
          <el-button @click="updateResupplieOrderCancel">取消</el-button>
        </div>
      </div>
    </el-dialog>

    <!--发货-->
    <el-dialog title="订单发货" :visible.sync="stockOutMask" :class="{'more-forms':moreForms}">
      <el-tabs>
        <el-tab-pane label="发货明细" name="0">
          <el-form :model="updateResupplieOrderFormVal" :rules="addStockOutDtlRules" class="storageUpdateForm" id="form">
            <el-form-item v-for="(item,index) in stockOutDtlHead" :key="index" :label="item.label" :prop="item.prop">
              <span v-if="item.type=='text'">
                <span v-if="item.inProp">
                  <el-input v-model.trim="updateResupplieOrderFormVal[item.prop][item.inProp]" :placeholder="item.holder" :disabled="item.addChgAble"></el-input>
                </span>
                <span v-else>
                  <el-input v-model.trim="updateResupplieOrderFormVal[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble"></el-input>
                </span>
              </span>
              <span v-else-if="item.type=='number'">
                <span v-if="item.prop=='deliver_goods_fee' || item.prop=='move_upstairs_fee' || item.prop=='installation_fee'">
                  <el-input type="number" v-model.trim="updateResupplieOrderFormVal[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble" @input="formChg"></el-input>
                </span>
                <span v-else>
                  <el-input type="number" v-model.trim="updateResupplieOrderFormVal[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble"></el-input>
                </span>
              </span>
              <span v-else-if="item.type=='select'">
                <el-select v-model="updateResupplieOrderFormVal[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble">
                  <span v-for="list in addSubData[item.stateVal]" :key="list.id">
                    <el-option :label="list.name?list.name:list.nick" :value="list.id"></el-option>
                  </span>
                </el-select>
              </span>
              <span v-else-if="item.type=='textarea'">
                <el-input type="textarea" v-model.trim="updateResupplieOrderFormVal[item.prop]" :placehode="item.holder"></el-input>
              </span>
              <span v-else-if="item.type=='checkbox'">
                <el-checkbox v-model="updateResupplieOrderFormVal[item.prop]" :disabled="item.chgAble"></el-checkbox>
              </span>
              <span v-else-if="item.type=='radio'">
                <el-radio v-model="updateResupplieOrderFormVal[item.prop]" label="volume">{{item.choiceName[0]}}</el-radio>
                <el-radio v-model="updateResupplieOrderFormVal[item.prop]" label="weight">{{item.choiceName[1]}}</el-radio>
              </span>
              <span v-else-if="item.type=='DatePicker'">
                <el-date-picker v-model="updateResupplieOrderFormVal[item.prop]" type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期">
                </el-date-picker>
              </span>
            </el-form-item>
          </el-form>
          <el-table :data="updateResupplieOrderFormVal" fit @row-click="updateProRowClick">
            <el-table-column v-for="item in stockOutDtlBottomHead" :label="item.label" align="center" :width="item.width" :key="item.label">
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
                    <span v-else>
                      {{scope.row[item.prop][item.inProp]}}
                    </span>
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
                  <span v-else>
                    {{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}
                  </span>
                </span>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="分拣明细" name="1">

        </el-tab-pane>
        <el-tab-pane label="高拍仪" name="2">

        </el-tab-pane>
        <el-tab-pane label="订单图片" name="3">

        </el-tab-pane>
      </el-tabs>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="stockOutConfirm">确定</el-button>
        <el-button @click="stockOutCancel">取消</el-button>
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

    <!--页码-->
    <Pagination :page-url="this.urls.customerservicedepts" @handlePagChg="handlePagChg" v-if="activeName=='0'"></Pagination>
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
      //按钮
      newOpt: [
        {
          cnt: "修改",
          icon: "bf-change",
          ent: this.updateData,
          nClick: true
        },
        {
          cnt: "删除",
          icon: "bf-del",
          ent: this.delBatch,
          nClick: true
        },
        {
          cnt: "提交",
          icon: "bf-submit",
          ent: this.resupplieOrderSubmit,
          nClick: true
        },
        {
          cnt: "驳回",
          icon: "bf-examination",
          ent: this.handleStockOutToCS,
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
          ent: this.handleunStockOut,
          nClick: true
        },
        {
          cnt: "发货",
          icon: "bf-deliver",
          ent: this.stockOut,
          nClick: true
        },
        {
          cnt: "导出",
          icon: "bf-out",
          ent: this.test,
          nClick: true
        },
        {
          cnt: "物流单",
          icon: "bf-logCode",
          ent: this.logisticsBill,
          nClick: true
        },
        {
          cnt: "发货单",
          icon: "bf-bill",
          ent: this.dispatchBill,
          nClick: true
        },
        {
          cnt: "电子面单",
          icon: "bf-salesinvoice",
          ent: this.elecBill,
          nClick: true
        },
        {
          cnt: "刷新",
          icon: "bf-refresh",
          ent: this.refresh,
          nClick: true
        }
      ],
      //临时存储工具类
      curRowId: "",
      curRowData: {},
      addSubData: [],
      //数据加载有关
      activeName: "0",
      leftTopActiveName: "0",
      rightActiveName: "0",

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
        promise_ship_time: [
          "2018-12-31T16:00:00.000Z",
          "2099-12-31T16:00:00.000Z"
        ],
        created_at: ["2018-12-31T16:00:00.000Z", "2099-12-31T16:00:00.000Z"],
        audit_at: ["2018-12-31T16:00:00.000Z", "2099-12-31T16:00:00.000Z"],
        order_transMStart: "",
        order_order_transMEndmark: ""
      },

      orderListData: [], //表格订单信息
      orderListHead: [
        {
          label: "订单状态",
          width: "140",
          prop: "order_status",
          type: "text"
        },
        {
          label: "系统订单",
          width: "220",
          prop: "system_order_no",
          type: "text"
        },
        {
          label: "创建时间",
          width: "220",
          prop: "created_at",
          type: "text"
        },
        {
          label: "淘宝单号",
          width: "220",
          prop: "taobao_oid",
          type: "text"
        },
        {
          label: "订单来源",
          width: "130",
          prop: "order_source",
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
          label: "客户类型",
          width: "130",
          prop: "customerType",
          inProp: "name",
          type: "text"
        },
        {
          label: "淘宝旗帜",
          width: "130",
          prop: "seller_flag",
          type: "flag"
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
          label: "发货仓库",
          width: "130",
          prop: "warehouses",
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
          label: "配送方式",
          width: "130",
          prop: "distributionMethod",
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
          label: "拍单时间",
          width: "180",
          prop: "created",
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
          label: "木架费",
          width: "120",
          prop: "wooden_frame_costs",
          type: "number"
        },
        {
          label: "优惠返现",
          width: "120",
          prop: "preferential_cashback",
          type: "number"
        },
        {
          label: "好评返现",
          width: "120",
          prop: "favorable_cashback",
          type: "number"
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
          label: "关联订单",
          width: "90",
          prop: "is_association",
          type: "checkbox"
        },
        {
          label: "关联单号",
          width: "220",
          prop: "association_taobao_oid",
          type: "text"
        },
        {
          label: "接单人",
          width: "120",
          prop: "accept_order_user",
          type: "text"
        },
        {
          label: "收据",
          width: "130",
          prop: "receipt",
          type: "text"
        },
        {
          label: "退款信息",
          width: "130",
          prop: "refund_info",
          type: "text"
        },
        {
          label: "需要核销",
          width: "90",
          prop: "is_cancel_after_verification",
          type: "checkbox"
        },
        {
          label: "等通知发货",
          width: "90",
          prop: "is_notice",
          type: "checkbox"
        },
        {
          label: "业务员账号",
          width: "140",
          prop: "businessPersonnel",
          inProp: "username",
          type: "text"
        },
        {
          label: "锁定人账号",
          width: "130",
          prop: "locker",
          inProp: "username",
          type: "text"
        },
        {
          label: "锁定时间",
          width: "180",
          prop: "locked_at",
          type: "text"
        },
        {
          label: "客审人账号",
          width: "130",
          prop: "csAudit",
          inProp: "username",
          type: "text"
        },
        {
          label: "客审时间",
          width: "180",
          prop: "cs_audited_at",
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
        }
      ],

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
            prop: "user_name",
            type: "text"
          },
          {
            label: "操作",
            prop: "operation",
            type: "text"
          },
          {
            label: "操作描述",
            prop: "description",
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
          }
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
          }
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
          }
        ],
        [
          {
            label: "订单图片",
            prop: "img",
            type: "img"
          }
        ]
      ],
      proDtlData: [], //订单包含的产品信息
      payDtlData: [], //费用信息
      operationData: [], //操作记录
      relatedInfoData: [], //关联信息
      otherFeeData: [], //其他费用
      rejectReasonData: [], //驳回原因
      offListData: [], //优惠列表
      imageData: [], //订单图片
      innerNote: [], //内部便签
      //标记有关
      filterBox: false,
      loading: true,
      checkboxInit: false, //初始化checkbox为false
      moreForms: true,
      threeParts: true,
      halfForm: true,

      addResupplieOrderMask: false,
      //修改
      updateResupplieOrderMask: false,
      updateResupplieOrderFormVal: {},
      updateResupplieOrderFormHead: [
        {
          label: "所属店铺",
          prop: "shops_id",
          holder: "所属店铺",
          // width: '200',
          type: "select",
          stateVal: "shop",
          editChgAble: true
        },
        {
          label: "系统单号",
          prop: "system_order_no",
          type: "text",
          editChgAble: false
        },
        {
          label: "买家昵称",
          prop: "member_nick",
          type: "text"
        },
        {
          label: "物流公司",
          prop: "logistics_id",
          holder: "请选择物流公司",
          type: "select",
          stateVal: "logistics",
          editChgAble: true
        },
        {
          label: "物流单号",
          prop: "logistic_oid",
          holder: "请填写物流单号",
          type: "text",
          editChgAble: true
        },
        {
          label: "实际运费",
          prop: "actual_freight",
          holder: "请输入实际运费",
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
          label: "配送电话",
          prop: "distribution_phone",
          holder: "请输入配送电话",
          type: "text"
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
          label: "收货人",
          prop: "receive_num",
          holder: "请填写收货人",
          type: "text",
          stateVal: "receive"
        },
        {
          label: "手机",
          prop: "receive_phone",
          holder: "请填写手机号",
          type: "text",
          stateVal: "receive"
        },
        {
          label: "手动修改体积",
          prop: "mod_total_volume",
          type: "number"
        },
        {
          label: "手动修改包件数",
          prop: "mod_total_number",
          type: "number"
        },
        {
          label: "手动修改重量",
          prop: "mod_total_weight",
          type: "number"
        },
        {
          label: "物流保价",
          prop: "distribution_save_price",
          type: "number",
          editChgAble: true,
          addChgAble: true
        },
        {
          label: "保价",
          prop: "save_price",
          type: "number"
        }
      ],
      updateResupplieOrderFormRules: {
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
      updateActiveName: "0",
      updateProData: [],
      updateReceiveInfo: {},
      updateExpenseData: [],
      updateProIds: [],
      //删除
      showDel: false,
      ids: [],
      delUrl: "",
      delId: "",
      //提交
      //驳回
      //审核
      //退审
      //发货
      proIds: [], //产品Ids（暂时没用）
      proRIndex: "", //用于切换产品所在行
      expenseRIndex: "", //用于切换费用类型行（暂时没用）
      stockOutMask: false,
      stockOutDtlHead: [
        {
          label: "订单编号",
          prop: "system_order_no",
          type: "text"
        },
        {
          label: "收货人",
          prop: "receiver_name",
          type: "text"
        },
        {
          label: "收货手机",
          prop: "receiver_mobile",
          type: "text"
        },
        {
          label: "收货地址",
          prop: "receiver_address",
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
          label: "物流单号",
          prop: "logistics_sn",
          type: "text"
        },
        {
          label: "物流运费",
          prop: "actual_freight",
          type: "text"
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
          label: "总体积",
          width: "120",
          prop: "total_volume",
          type: "number"
        },
        {
          label: "配送电话",
          prop: "distribution_phone",
          holder: "请输入配送电话",
          type: "text"
        },
        {
          label: "配送公司",
          prop: "distributions_id",
          holder: "请选择配送公司",
          type: "select",
          stateVal: "distribution"
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
          label: "搬楼费用",
          prop: "move_upstairs_fee",
          holder: "请输入搬楼费用",
          type: "number"
        },
        {
          label: "送货费用",
          prop: "deliver_goods_fee",
          holder: "请输入送货费用",
          type: "number"
        },
        {
          label: "配送总计",
          prop: "total_distribution_fee",
          holder: "请输入配送总计",
          type: "number"
        },
        {
          label: "安装费用",
          prop: "installation_fee",
          holder: "请输入安装费用",
          type: "number"
        },
        {
          label: "包件总数",
          width: "130",
          prop: "package_quantity",
          type: "number"
        },
        {
          label: "木架费",
          width: "120",
          prop: "wooden_frame_costs",
          type: "number"
        },
        {
          label: "供应商",
          width: "120",
          prop: "supplier_id",
          type: "text"
        },
        {
          label: "好评返现",
          prop: "favorable_cashback",
          holder: "请输入好评返现",
          type: "number"
        },
        {
          label: "发货时间",
          prop: "stockout_at",
          holder: "请输入发货时间",
          type: "DatePicker"
        },
        {
          label: "优惠返现",
          width: "120",
          prop: "preferential_cashback",
          type: "number"
        },
        {
          label: "发货备注",
          width: "120",
          prop: "stockout_remark",
          type: "textarea"
        },
        {
          label: "发货仓库",
          holder: "请选择发货仓库",
          prop: "warehouses_id",
          type: "select",
          stateVal: "warehouse"
        }
      ],
      stockOutDtlBottomHead: [
        {
          label: "淘宝单号",
          width: "220",
          prop: "taobao_oid",
          type: "text"
        },
        {
          label: "淘宝状态",
          width: "220",
          prop: "taobao_status",
          type: "text"
        },
        {
          label: "服务车",
          width: "90",
          prop: "service_car",
          type: "checkbox"
        },
        {
          label: "验证通过",
          width: "90",
          prop: "is_validated",
          type: "checkbox"
        }
      ],
      addStockOutDtlRules: {
        system_order_no: [
          { required: true, message: "系统单号必选", trigger: "blur" }
        ],
        logistics_id: [{ required: true, message: "物流公司必选", trigger: "blur" }],
        actual_freight: [
          { required: true, message: "物流运费必选", trigger: "blur" }
        ],
        distributions_id: [
          { required: true, message: "配送方式必选", trigger: "blur" }
        ],
        freight_types_id: [
          { required: true, message: "运费类型必选", trigger: "blur" }
        ],
        total_volume: [{ required: true, message: "总体积必选", trigger: "blur" }],
        package_quantity: [
          { required: true, message: "包件总数必选", trigger: "blur" }
        ],
        stockout_at: [{ required: true, message: "发货时间", trigger: "blur" }]
      }
      //导出
      //物流单
      //发货单
      //电子面单
      //刷新
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
    test() {
      console.log(1);
    },
    //获取数据
    outerHandleClick() {
      let index = this.activeName - 0;
      switch (index) {
        case 0:
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
      this.orderListData = [];
      this.loading = true;
      switch (index) {
        case 0:
          this.$fetch(this.urls.resupplieorderaudit, {
            order_status: [110],
            member_nick: this.searchBox.member_nick,
            system_order_no: this.searchBox.system_order_no,
            receiver_name: this.searchBox.receiver_name,
            receiver_phone: this.searchBox.receiver_phone,
            receiver_address: this.searchBox.receiver_address,
            shops_id: this.searchBox.shops_id,
            business_personnel_id: this.searchBox.business_personnel_id,
            seller_remark: this.searchBox.seller_remark,
            logistics_id: this.searchBox.logistics_id,
            seller_flag: this.searchBox.seller_flag,
            include:
              "shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems.combination.productComponents,orderItems.product,businessPersonnel,locker,paymentDetails.paymentMethod,paymentDetails.order,orderOperationRecord"
          }).then(
            res => {
              this.loading = false;
              this.orderListData = res.data;
              let pg = res.meta.pagination;
              this.$store.dispatch("suppliers", "/suppliers");
              this.$store.dispatch("shops", "/shops");
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
          this.$fetch(this.urls.resupplieorderaudit, {
            order_status: [120],
            member_nick: this.searchBox.member_nick,
            system_order_no: this.searchBox.system_order_no,
            receiver_name: this.searchBox.receiver_name,
            receiver_phone: this.searchBox.receiver_phone,
            receiver_address: this.searchBox.receiver_address,
            shops_id: this.searchBox.shops_id,
            business_personnel_id: this.searchBox.business_personnel_id,
            seller_remark: this.searchBox.seller_remark,
            logistics_id: this.searchBox.logistics_id,
            seller_flag: this.searchBox.seller_flag,
            include:
              "shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems.combination.productComponents,orderItems.product,businessPersonnel,locker,paymentDetails.paymentMethod,paymentDetails.order,orderOperationRecord"
          }).then(
            res => {
              this.loading = false;
              this.orderListData = res.data;
              let pg = res.meta.pagination;
              this.$store.dispatch("suppliers", "/suppliers");
              this.$store.dispatch("shops", "/shops");
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
          this.$fetch(this.urls.resupplieorderaudit, {
            order_status: [130],
            member_nick: this.searchBox.member_nick,
            system_order_no: this.searchBox.system_order_no,
            receiver_name: this.searchBox.receiver_name,
            receiver_phone: this.searchBox.receiver_phone,
            receiver_address: this.searchBox.receiver_address,
            shops_id: this.searchBox.shops_id,
            business_personnel_id: this.searchBox.business_personnel_id,
            seller_remark: this.searchBox.seller_remark,
            logistics_id: this.searchBox.logistics_id,
            seller_flag: this.searchBox.seller_flag,
            include:
              "shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems.combination.productComponents,orderItems.product,businessPersonnel,locker,paymentDetails.paymentMethod,paymentDetails.order,orderOperationRecord"
          }).then(
            res => {
              this.loading = false;
              this.orderListData = res.data;
              let pg = res.meta.pagination;
              this.$store.dispatch("suppliers", "/suppliers");
              this.$store.dispatch("shops", "/shops");
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
          this.$fetch(this.urls.resupplieorderaudit, {
            order_status: [110, 120, 130],
            member_nick: this.searchBox.member_nick,
            system_order_no: this.searchBox.system_order_no,
            receiver_name: this.searchBox.receiver_name,
            receiver_phone: this.searchBox.receiver_phone,
            receiver_address: this.searchBox.receiver_address,
            shops_id: this.searchBox.shops_id,
            business_personnel_id: this.searchBox.business_personnel_id,
            seller_remark: this.searchBox.seller_remark,
            logistics_id: this.searchBox.logistics_id,
            seller_flag: this.searchBox.seller_flag,
            include:
              "shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems.combination.productComponents,orderItems.product,businessPersonnel,locker,paymentDetails.paymentMethod,paymentDetails.order,orderOperationRecord"
          }).then(
            res => {
              this.loading = false;
              this.orderListData = res.data;
              let pg = res.meta.pagination;
              this.$store.dispatch("suppliers", "/suppliers");
              this.$store.dispatch("shops", "/shops");
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
    handlePagChg(page) {
      this.$fetch(this.urls.customerservicedepts + "?page=" + page, {
        include:
          "shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems.combination.productComponents,orderItems.product,businessPersonnel,locker,paymentDetails.paymentMethod,paymentDetails.order"
      }).then(res => {
        if (this.leftTopActiveName == "0") {
          this.orderListData = res.data;
        } else {
          this.orderListData = res.data;
        }
      });
    },
    //点击与改变checkbox状态
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
    orderListRowClick(row) {
      this.curRowId = row.id;
      this.curRowData = row;
      this.operationData = row["orderOperationRecord"].data;
      if (row["order_status"] == "未提交") {
        this.newOpt[0].nClick = false;
        this.newOpt[1].nClick = false;
        this.newOpt[2].nClick = false;
        this.newOpt[3].nClick = true;
        this.newOpt[4].nClick = true;
        this.newOpt[5].nClick = true;
        this.newOpt[6].nClick = true;
        this.newOpt[7].nClick = false;
        this.newOpt[8].nClick = false;
        this.newOpt[9].nClick = false;
        this.newOpt[10].nClick = false;
        this.newOpt[11].nClick = false;
      }
      if (row["order_status"] == "未审核") {
        this.newOpt[0].nClick = false;
        this.newOpt[1].nClick = true;
        this.newOpt[2].nClick = true;
        this.newOpt[3].nClick = false;
        this.newOpt[4].nClick = false;
        this.newOpt[5].nClick = true;
        this.newOpt[6].nClick = true;
        this.newOpt[7].nClick = false;
        this.newOpt[8].nClick = false;
        this.newOpt[9].nClick = false;
        this.newOpt[10].nClick = false;
        this.newOpt[11].nClick = false;
      }
      if (row["order_status"] == "已审核") {
        this.newOpt[0].nClick = true;
        this.newOpt[1].nClick = true;
        this.newOpt[2].nClick = true;
        this.newOpt[3].nClick = true;
        this.newOpt[4].nClick = true;
        this.newOpt[5].nClick = false;
        this.newOpt[6].nClick = false;
        this.newOpt[7].nClick = false;
        this.newOpt[8].nClick = false;
        this.newOpt[9].nClick = false;
        this.newOpt[10].nClick = false;
        this.newOpt[11].nClick = false;
      }
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
    //修改
    updateData() {
      this.proIds = [];
      this.updateProIds = [];
      this.updateResupplieOrderFormVal = {};
      this.updateProData = [];
      this.updateReceiveInfo = {};
      this.updateExpenseData = [];
      this.updateResupplieOrderMask = true;
      this.proRIndex = "";
      let id = this.checkboxId ? this.checkboxId : this.curRowId;
      this.$fetch(this.urls.customerservicedepts + "/" + id, {
        include:
          "shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems.combination.productComponents,orderItems.product,businessPersonnel,locker,paymentDetails"
      }).then(
        res => {
          this.updateResupplieOrderFormVal = res;
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
    updateResupplieOrderConfirm() {
      let forData = this.updateResupplieOrderFormVal;
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
          this.updateResupplieOrderMask = false;
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
    updateResupplieOrderCancel() {
      this.updateResupplieOrderMask = false;
      this.$message({
        message: "取消修改订单明细",
        type: "success"
      });
    },
    updateProRowClick(row) {
      this.proRIndex = `index${row.index}`;
    },
    //删除
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
    //提交
    resupplieOrderSubmit(){
      if (this.newOpt[2].nClick) {
        return;
      } else {
        let id = this.checkboxId ? this.checkboxId : this.curRowId;
        this.$put(this.urls.resupplieorderaudit + "/" + id + "/submit").then(
          () => {
            this.newOpt[0].nClick = true;
            this.newOpt[1].nClick = true;
            this.newOpt[2].nClick = true;
            this.newOpt[3].nClick = true;
            this.newOpt[4].nClick = true;
            this.newOpt[5].nClick = true;
            this.newOpt[6].nClick = true;
            this.newOpt[7].nClick = true;
            this.newOpt[8].nClick = true;
            this.newOpt[9].nClick = true;
            this.newOpt[10].nClick = true;
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
    //驳回
    handleStockOutToCS() {
      if (this.newOpt[3].nClick) {
        return;
      } else {
        let id = this.checkboxId ? this.checkboxId : this.curRowId;
        this.$put(this.urls.warehousingdepts + "/" + id + "/stockouttocs").then(
          () => {
            this.newOpt[0].nClick = true;
            this.newOpt[1].nClick = true;
            this.newOpt[2].nClick = true;
            this.newOpt[3].nClick = true;
            this.newOpt[4].nClick = true;
            this.newOpt[5].nClick = true;
            this.newOpt[6].nClick = true;
            this.newOpt[7].nClick = true;
            this.newOpt[8].nClick = true;
            this.newOpt[9].nClick = true;
            this.newOpt[10].nClick = true;
            this.newOpt[11].nClick = true;
            this.newOpt[12].nClick = true;
            this.refresh();
            this.$message({
              message: "退回客审成功",
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
    //审核
    handleAudit() {
      if (this.newOpt[5].nClick) {
        return;
      } else {
        let id = this.checkboxId ? this.checkboxId : this.curRowId;
        this.$put(this.urls.customerservicedepts + "/" + id + "/audit").then(
          () => {
            this.newOpt[1].nClick = true;
            this.newOpt[2].nClick = true;
            this.newOpt[3].nClick = true;
            this.newOpt[4].nClick = true;
            this.newOpt[5].nClick = true;
            this.newOpt[6].nClick = true;
            this.newOpt[8].nClick = true;
            this.newOpt[9].nClick = true;
            this.newOpt[13].nClick = true;
            this.newOpt[14].nClick = true;
            this.newOpt[15].nClick = true;
            this.newOpt[18].nClick = true;
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
    //退审
    handleunStockOut() {
      if (this.newOpt[2].nClick) {
        return;
      } else {
        let id = this.checkboxId ? this.checkboxId : this.curRowId;
        this.$put(this.urls.customerservicedepts + "/" + id + "/unaudit").then(
          () => {
            this.newOpt[0].nClick = false;
            this.newOpt[1].nClick = true;
            this.newOpt[2].nClick = false;
            this.newOpt[3].nClick = false;
            this.newOpt[4].nClick = false;
            this.newOpt[5].nClick = false;
            this.newOpt[6].nClick = false;
            this.newOpt[7].nClick = false;
            this.newOpt[8].nClick = false;
            this.newOpt[9].nClick = false;
            this.newOpt[10].nClick = false;
            this.newOpt[11].nClick = false;
            this.newOpt[12].nClick = false;
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
      }
    },
    //发货
    stockOut() {
      if (this.newOpt[5].nClick) {
        this.$message({
          message: "请点击要选择的订单并重试",
          type: "info"
        });
      } else {
        this.stockOutMask = true;
        if (this.checkboxId == "") {
          this.$message({
            type: "info",
            message: "请先选择订单"
          });
        } else {
          this.proIds = [];
          this.updateProIds = [];
          this.updateResupplieOrderFormVal = {};
          this.updateProData = [];
          this.updateReceiveInfo = {};
          this.updateExpenseData = [];
          this.proRIndex = "";
          let id = this.checkboxId ? this.checkboxId : this.curRowId;
          this.$fetch(this.urls.customerservicedepts + "/" + id, {
            include:
              "shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems.combination.productComponents,orderItems.product,businessPersonnel,locker,paymentDetails,orderOperationRecord"
          }).then(
            res => {
              this.updateResupplieOrderFormVal = res;
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
                receiver_state: res.receiver_state,
                receiver_state: res.receiver_city,
                receiver_district: res.receiver_district,
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
        }
      }
    },
    stockOutConfirm() {
      let forData = this.updateResupplieOrderFormVal;
      let submitData = {
        shops_id: forData.shops_id,
        member_nick: forData.member_nick,
        logistics_id: forData.logistics_id,
        logistics_sn: forData.logistics_sn,
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
        receiver_state: this.updateReceiveInfo.receiver_state,
        receiver_city: this.updateReceiveInfo.receiver_city,
        receiver_district: this.updateReceiveInfo.receiver_district,
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
      this.$message({
        message: "加载成功",
        type: "success"
      });
      this.$patch(this.urls.merchandiserdepts + "/" + id, submitData).then(
        () => {
          this.stockOutMask = false;
          this.refresh();
          this.$message({
            message: "发货成功",
            type: "success"
          });
          this.newOpt[0].nClick = false;
          this.newOpt[1].nClick = true;
          this.newOpt[2].nClick = true;
          this.newOpt[3].nClick = true;
          this.newOpt[4].nClick = true;
          this.newOpt[5].nClick = true;
          this.newOpt[6].nClick = false;
          this.newOpt[7].nClick = false;
          this.newOpt[8].nClick = true;
          this.newOpt[9].nClick = true;
          this.newOpt[10].nClick = true;
          this.newOpt[11].nClick = false;
          this.newOpt[12].nClick = false;
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
    stockOutCancel() {
      this.stockOutMask = false;
    },
    formChg() {
      let formVal;
      if (this.addResupplieOrderMask) {
        formVal = this.updateResupplieOrderFormVal;
      } else {
        formVal = this.updateResupplieOrderFormVal;
      }
      formVal["total_distribution_fee"] =
        formVal["deliver_goods_fee"] -
        0 +
        (formVal["move_upstairs_fee"] - 0) +
        (formVal["installation_fee"] - 0);
    },
    //导出
    //物流单
    logisticsBill() {
      this.$message({
        message: "请先配置打印机",
        type: "success"
      });
    },
    //发货单
    dispatchBill() {
      if (this.newOpt[5].nClick) {
        return;
      } else {
        this.$message({
          message: "请先配置打印机",
          type: "success"
        });
        let id = this.checkboxId ? this.checkboxId : this.curRowId;
        this.$put(
          this.urls.warehousingdepts + "/" + id + "/isprintdispatchbill"
        ).then(
          () => {
            this.newOpt[0].nClick = false;
            this.newOpt[1].nClick = false;
            this.newOpt[2].nClick = false;
            this.newOpt[3].nClick = false;
            this.newOpt[4].nClick = false;
            this.newOpt[5].nClick = true;
            this.newOpt[6].nClick = true;
            this.newOpt[7].nClick = false;
            this.newOpt[8].nClick = false;
            this.newOpt[9].nClick = false;
            this.newOpt[10].nClick = false;
            this.refresh();
            this.$message({
              message: "打印发货单成功",
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
    //电子面单
    elecBill() {
      this.$message({
        message: "请先配置打印机",
        type: "success"
      });
    },
    //刷新
    refresh() {
      this.loading = true;
      this.fetchData();
    },
    resets() {
      this.searchBox = {
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
        promise_ship_time: [
          "2018-12-31T16:00:00.000Z",
          "2099-12-31T16:00:00.000Z"
        ],
        created_at: ["2018-12-31T16:00:00.000Z", "2099-12-31T16:00:00.000Z"],
        audit_at: ["2018-12-31T16:00:00.000Z", "2099-12-31T16:00:00.000Z"],
        order_transMStart: "",
        order_order_transMEndmark: ""
      };
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