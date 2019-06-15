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
            <el-input v-model.trim="searchBox.order_sn" clearable></el-input>
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
        <el-tab-pane label="未处理" name="0">
          <el-table :data="untreatedOrderListData" fit @selection-change="handleSelectionChange" v-loading="loading" height="350" @row-click="orderListRowClick" @row-dblclick="orderDbClick">
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
            <el-table-column label="操作" width="90" align="center" fixed="right">
              <template slot-scope="scope">
                <el-button size="mini" type="danger" @click="delSingle(scope.row,$event)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="已处理" name="1">
          <el-table :data="treatedOrderListData" fit @selection-change="handleSelectionChange" v-loading="loading" height="350" @row-click="orderListRowClick" @row-dblclick="orderDbClick">
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
                  <span v-if="scope.row[item.prop]">{{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}</span>
                </span>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="多张图片" name="2">
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
                  <span v-if="scope.row[item.prop]">{{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}</span>
                </span>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </el-tabs>

    <!--新增-->
    <el-dialog title="新增退款单" :visible.sync="addRefundOrderMask" :class="{'more-forms':moreForms,'threeParts':threeParts}" class="bigDialog">
      <div class="clearfix">
        <el-button type="text" style="float: left">新增退款单信息</el-button>
      </div>
      <el-form :model="addRefundOrderFormVal" :rules="addRefundFormRules" class="customerAddForm" id="form">
        <el-form-item v-for="(item,index) in addRefundFormHead" :key="index" :label="item.label" :prop="item.prop">
          <span v-if="item.type=='text'">
            <span v-if="item.inProp">
              <el-input v-model.trim="addRefundOrderFormVal[item.prop][item.inProp]" :placeholder="item.holder" :disabled="item.addChgAble"></el-input>
            </span>
            <span v-else>
              <el-input v-model.trim="addRefundOrderFormVal[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble"></el-input>
            </span>
          </span>
          <span v-else-if="item.type=='number'">
            <span v-if="item.prop=='deliver_goods_fee' || item.prop=='move_upstairs_fee' || item.prop=='installation_fee'">
              <el-input type="number" v-model.trim="addRefundOrderFormVal[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble" @input="formChg"></el-input>
            </span>
            <span v-else>
              <el-input type="number" v-model.trim="addRefundOrderFormVal[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble"></el-input>
            </span>
          </span>
          <span v-else-if="item.type=='select'">
            <el-select v-model="addRefundOrderFormVal[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble">
              <span v-for="list in resData[item.stateVal]" :key="list.id">
                <el-option :label="list.name?list.name:list.nick" :value="list.id"></el-option>
              </span>
            </el-select>
          </span>
          <span v-else-if="item.type=='textarea'">
            <el-input type="textarea" v-model.trim="addRefundOrderFormVal[item.prop]" :placehode="item.holder"></el-input>
          </span>
          <span v-else-if="item.type=='checkbox'">
            <el-checkbox v-model="addRefundOrderFormVal[item.prop]" :disabled="item.chgAble"></el-checkbox>
          </span>
          <span v-else-if="item.type=='radio'">
            <el-radio v-model="addRefundOrderFormVal[item.prop]" label="volume">{{item.choiceName[0]}}</el-radio>
            <el-radio v-model="addRefundOrderFormVal[item.prop]" label="weight">{{item.choiceName[1]}}</el-radio>
          </span>
          <span v-else-if="item.type=='DatePicker'">
            <el-date-picker v-model="addRefundOrderFormVal[item.prop]" type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期"></el-date-picker>
          </span>
        </el-form-item>
      </el-form>
      <el-button type="text">退款原因</el-button>
      <el-table :data="addRefundOrderFormVal.refund_reason" fit @row-click="refundReasonRowClick" :row-class-name="addProRCName">
        <el-table-column v-for="(item,index) in refundReasonHead" :label="item.label" align="center" :width="item.width" :key="index">
          <template slot-scope="scope">
            <span v-if="addRefundReasonCurIndex =='index'+scope.$index">
              <span v-if="item.type=='number'">
                <el-input size="small" type="number" v-model.trim="scope.row[item.prop]" :placeholder="item.holder"></el-input>
              </span>
              <span v-else-if="item.type=='url'">
                <el-input size="small" type="url" v-model.trim="scope.row[item.prop]" :placeholder="item.holder"></el-input>
              </span>
              <span v-else-if="item.type == 'textarea'">
                <el-input type="textarea" size="small" v-model.trim="scope.row[item.prop]" :placeholder="item.holder"></el-input>
              </span>
              <span v-else-if="item.type == 'select'">
                <el-select v-model="scope.row[item.prop]" :placeholder="item.holder">
                  <span v-for="list in resData[item.stateVal]" :key="list.id">
                    <el-option :label="list.name" :value="list.id"></el-option>
                  </span>
                </el-select>
              </span>
              <span v-else-if="item.type == 'checkbox'">
                <el-checkbox v-model="scope.row[item.prop]"></el-checkbox>
              </span>
              <span v-else-if="item.type=='img'">
                <span v-if="addRefundReasonUploadIndex=='upload'+scope.$index">
                  <el-upload action :before-upload="beforeAddUploadRefundReasonImg">
                    <el-button size="small" type="primary">点击上传</el-button>
                  </el-upload>
                </span>
                <span v-else>
                  <img :src="scope.row[item.prop]">
                  <el-upload class="chgDiv" action :before-upload="beforeAddUpload">
                    <el-button type="primary" icon="el-icon-edit" size="mini" class="chg" v-show="tableChgBtn=='show'+scope.$index"></el-button>
                  </el-upload>
                </span>
              </span>
              <span v-else>
                <el-input size="small" v-model.trim="scope.row[item.prop]" :placeholder="item.holder"></el-input>
              </span>
            </span>
            <span v-else>
              <span v-if="item.type=='select'">
                <span v-if="scope.row[item.prop]==''"></span>
                <span v-else>
                  <span v-for="(list,index) in resData[item.stateVal]" :key="index">
                    <span v-if="list.id==scope.row[item.prop]">{{list.name}}</span>
                  </span>
                </span>
              </span>
              <span v-else-if="item.type=='checkbox'">
                <el-checkbox v-model="scope.row[item.prop]" disabled></el-checkbox>
              </span>
              <span v-else-if="item.type == 'img'">
                <img :src="scope.row[item.prop]" alt>
              </span>
              <span v-else>{{scope.row[item.prop]}}</span>
            </span>
          </template>
        </el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer clearfix">
        <div style="float: left">
          <el-button type="primary" @click="addMoreProblemPro">选择订单</el-button>
          <el-button type="primary" @click="addTabAddMoreRefundReason">添加退款原因</el-button>
        </div>
        <div style="float: right">
          <el-button type="primary" @click="addRefundOrderConfirm">确定</el-button>
          <el-button @click="resetAddInfo" type="info">重置</el-button>
          <el-button @click="addRefundReasonCancel" type="warning">取消</el-button>
        </div>
      </div>
    </el-dialog>

    <!--修改-->
    <el-dialog title="修改退款单" :visible.sync="updateRefundOrderMask" :class="{'more-forms':moreForms,'threeParts':threeParts}" class="bigDialog">
      <div class="clearfix">
        <el-button type="text" style="float: left">退款单信息</el-button>
      </div>
      <el-form :model="updateRefundOrderFormVal" :rules="addRefundFormRules" class="customerUpdateForm" id="form">
        <el-form-item v-for="(item,index) in addRefundFormHead" :key="index" :label="item.label" :prop="item.prop">
          <span v-if="item.type=='text'">
            <span v-if="item.inProp">
              <el-input v-model.trim="updateRefundOrderFormVal[item.prop][item.inProp]" :placeholder="item.holder" :disabled="item.addChgAble"></el-input>
            </span>
            <span v-else>
              <el-input v-model.trim="updateRefundOrderFormVal[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble"></el-input>
            </span>
          </span>
          <span v-else-if="item.type=='number'">
            <span v-if="item.prop=='deliver_goods_fee' || item.prop=='move_upstairs_fee' || item.prop=='installation_fee'">
              <el-input type="number" v-model.trim="updateRefundOrderFormVal[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble" @input="formChg"></el-input>
            </span>
            <span v-else>
              <el-input type="number" v-model.trim="updateRefundOrderFormVal[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble"></el-input>
            </span>
          </span>
          <span v-else-if="item.type=='select'">
            <el-select v-model="updateRefundOrderFormVal[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble">
              <span v-for="list in resData[item.stateVal]" :key="list.id">
                <el-option :label="list.name?list.name:list.nick" :value="list.id"></el-option>
              </span>
            </el-select>
          </span>
          <span v-else-if="item.type=='textarea'">
            <el-input type="textarea" v-model.trim="updateRefundOrderFormVal[item.prop]" :placehode="item.holder"></el-input>
          </span>
          <span v-else-if="item.type=='checkbox'">
            <el-checkbox v-model="updateRefundOrderFormVal[item.prop]" :disabled="item.chgAble"></el-checkbox>
          </span>
          <span v-else-if="item.type=='radio'">
            <el-radio v-model="updateRefundOrderFormVal[item.prop]" label="volume">{{item.choiceName[0]}}</el-radio>
            <el-radio v-model="updateRefundOrderFormVal[item.prop]" label="weight">{{item.choiceName[1]}}</el-radio>
          </span>
          <span v-else-if="item.type=='DatePicker'">
            <el-date-picker v-model="updateRefundOrderFormVal[item.prop]" type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期"></el-date-picker>
          </span>
        </el-form-item>
      </el-form>
      <el-button type="text">退款原因</el-button>
      <el-table :data="updateRefundOrderFormVal.refund_reason" fit @row-click="refundReasonRowClick" :row-class-name="addProRCName">
        <el-table-column v-for="(item,index) in refundReasonHead" :label="item.label" align="center" :width="item.width" :key="index">
          <template slot-scope="scope">
            <span v-if="updateRefundReasonCurIndex =='index'+scope.$index">
              <span v-if="item.type=='number'">
                <el-input size="small" type="number" v-model.trim="scope.row[item.prop]" :placeholder="item.holder"></el-input>
              </span>
              <span v-else-if="item.type=='url'">
                <el-input size="small" type="url" v-model.trim="scope.row[item.prop]" :placeholder="item.holder"></el-input>
              </span>
              <span v-else-if="item.type == 'textarea'">
                <el-input type="textarea" size="small" v-model.trim="scope.row[item.prop]" :placeholder="item.holder"></el-input>
              </span>
              <span v-else-if="item.type == 'select'">
                <el-select v-model="scope.row[item.prop]" :placeholder="item.holder">
                  <span v-for="list in resData[item.stateVal]" :key="list.id">
                    <el-option :label="list.name" :value="list.id"></el-option>
                  </span>
                </el-select>
              </span>
              <span v-else-if="item.type == 'checkbox'">
                <el-checkbox v-model="scope.row[item.prop]"></el-checkbox>
              </span>
              <span v-else-if="item.type=='img'">
                <span v-if="updateRefundReasonUploadIndex=='upload'+scope.$index">
                  <el-upload action :before-upload="beforeUpdateUploadRefundReasonImg">
                    <el-button size="small" type="primary">点击上传</el-button>
                  </el-upload>
                </span>
                <span v-else>
                  <img :src="scope.row[item.prop]">
                  <el-upload class="chgDiv" action :before-upload="beforeUpdateUpload">
                    <el-button type="primary" icon="el-icon-edit" size="mini" class="chg" v-show="tableChgBtn=='show'+scope.$index"></el-button>
                  </el-upload>
                </span>
              </span>
              <span v-else>
                <el-input size="small" v-model.trim="scope.row[item.prop]" :placeholder="item.holder"></el-input>
              </span>
            </span>
            <span v-else>
              <span v-if="item.type=='select'">
                <span v-if="scope.row[item.prop]==''"></span>
                <span v-else>
                  <span v-for="(list,index) in resData[item.stateVal]" :key="index">
                    <span v-if="list.id==scope.row[item.prop]">{{list.name}}</span>
                  </span>
                </span>
              </span>
              <span v-else-if="item.type=='checkbox'">
                <el-checkbox v-model="scope.row[item.prop]" disabled></el-checkbox>
              </span>
              <span v-else-if="item.type == 'img'">
                <img :src="scope.row[item.prop]" alt>
              </span>
              <span v-else>{{scope.row[item.prop]}}</span>
            </span>
          </template>
        </el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer clearfix">
        <div style="float: left">
          <el-button type="primary" @click="addMoreProblemPro">选择订单</el-button>
          <el-button type="primary" @click="updateTabAddMoreRefundReason">添加退款原因</el-button>
        </div>
        <div style="float: right">
          <el-button type="primary" @click="updateCustomerConfirm">确定</el-button>
          <el-button @click="updateCustomerCancel">取消</el-button>
        </div>
      </div>
    </el-dialog>

    <!-- 选择订单 -->
    <el-dialog title="选择订单" :visible.sync="addProMask" :class="{'more-forms':moreForms}">
      <el-button type="text">订单列表</el-button>
      <el-table :data="orderDtlVal" fit height="180" :row-class-name="addOrderRowCName" @row-click="addOrderRowClick">
        <el-table-column v-for="item in addOrderProHead" :label="item.label" align="center" :width="item.width" :key="item.label">
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
      <el-button type="text">明细列表</el-button>
      <el-table :data="proDtlVal" fit height="180" :row-class-name="addDefProRowCName" @row-click="addDefProRowClick">
        <el-table-column v-for="item in addProHead" :label="item.label" align="center" :width="item.width" :key="item.label">
          <template slot-scope="scope">
            <span v-if="scope.row[item.prop]">{{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}</span>
          </template>
        </el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer clearfix">
        <div style="float: left">
          <el-button type="primary" @click="proQueryRefresh">刷新</el-button>
        </div>
        <div style="float: right">
          <el-button type="primary" @click="confirmAddPro">确定</el-button>
          <el-button @click="cancelAddPro" type="warning">取消</el-button>
        </div>
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
          cnt: "新增",
          icon: "bf-add",
          ent: this.addRefundOrder,
          ref: "add"
        },
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
          nClick: false
        },
        {
          cnt: "锁定",
          icon: "bf-lock",
          ent: this.lockOrder,
          nClick: false
        },
        {
          cnt: "解锁",
          icon: "bf-delock",
          ent: this.debLock,
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

      /**订单列表Tab
       * 订单列表的相关参数
       * */
      activeName: "0",
      orderListActiveName: "0",

      orderListTabCurRowId: "",

      addSubData: [],
      untreatedOrderListData: [],
      treatedOrderListData: [],
      OrderListCurRowData: {},

      orderListHead: [
        {
          label: "系统单号",
          width: "200",
          prop: "refund_sn",
          type: "text"
        },
        {
          label: "订单编号",
          width: "200",
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
          prop: "creator",
          inProp: "username",
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
          label: "业务审核人",
          width: "180",
          prop: "businessPersonnel",
          inProp: "username",
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
          prop: "afterSale",
          inProp: "username",
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
          prop: "financial",
          inProp: "username",
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
        refund_amount: 0
      },
      addRefundOrderFormVal: {
        refund_sn: "",
        order_sn: "",
        refund_payment_methods_id: "",
        shops_id: "",
        refund_account: 0,
        bank: "",
        bank_address: "",
        refund_amount: 0,
        transaction_sn: "",
        paipai_sn: "",
        refund_reason_type_id: "",
        buyer_nick: "",
        buyer_name: "",
        payment_amount: 0,
        order_price: 0,
        order_time: "",
        is_delivered: "0",
        responsible_party: "",
        responsible_person: "",
        responsible_amount: "",
        refund_description: "",
        business_remark: "",
        refund_reason: [
          {
            img_url: "",
            refund_reason: "",
            refund_description: "",
            refund_amount: 0
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
          type: "text",
          addChgAble: true
        },
        {
          label: "退款方式",
          prop: "refund_payment_methods_id",
          holder: "请选择退款方式",
          width: "200",
          type: "select",
          stateVal: "refundMethod"
        },
        {
          label: "所属店铺",
          prop: "shops_id",
          holder: "请选择所属店铺",
          width: "200",
          type: "select",
          stateVal: "shops"
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
          type: "number"
        },
        {
          label: "交易单号",
          prop: "transaction_sn",
          holder: "请输入交易单号",
          width: "200",
          type: "text"
        },
        {
          label: "拍拍单号",
          prop: "paipai_sn",
          holder: "请输入拍拍单号",
          width: "200",
          type: "text"
        },
        {
          label: "退款原因",
          prop: "refund_reason_type_id",
          holder: "请选择退款原因",
          width: "200",
          type: "select",
          stateVal: "refundreasontype"
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
          type: "number"
        },
        {
          label: "拍单金额",
          prop: "order_price",
          holder: "输入用户拍单金额",
          width: "200",
          type: "number"
        },
        {
          label: "拍单时间",
          prop: "order_time",
          width: "200",
          type: "text",
          addChgAble: true
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
          type: "number"
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
        refund_account: 0,
        bank: "",
        bank_address: "",
        refund_amount: "",
        transaction_sn: "",
        paipai_sn: "",
        refund_reason_type_id: "",
        buyer_nick: "",
        buyer_name: "",
        payment_amount: "",
        order_price: 0,
        order_time: "",
        is_delivered: "0",
        responsible_party: "",
        responsible_person: "",
        responsible_amount: 0,
        refund_description: "",
        business_remark: "",
        refund_reason: [
          {
            img_url: "",
            refund_reason: "",
            refund_description: "",
            refund_amount: 0
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
          type: "number"
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
      selection: "",
      // 选择订单
      addProMask: false,
      addProDtlVal: [],
      proDtlVal: [],
      addOrderDtlVal: [],
      orderDtlVal: [],
      addProHead: [
        {
          label: "商品编码",
          prop: "commodity_code",
          width: "180",
          type: "text"
        },
        {
          label: "规格编码",
          prop: "spec_code",
          width: "180",
          type: "text"
        },
        {
          label: "商品简称",
          prop: "short_name",
          width: "150",
          type: "text"
        },
        {
          label: "规格",
          prop: "spec",
          width: "180",
          type: "text"
        },
        {
          label: "颜色",
          prop: "color",
          width: "120",
          type: "text"
        },
        {
          label: "材质",
          prop: "materials",
          width: "120",
          type: "text"
        },
        {
          label: "功能",
          prop: "function",
          width: "120",
          type: "text"
        },
        {
          label: "特殊",
          prop: "special",
          width: "120",
          type: "text"
        },
        {
          label: "其他",
          prop: "other",
          width: "120",
          type: "text"
        },
        {
          label: "购买数量",
          prop: "buy_number",
          width: "120",
          type: "text"
        }
      ],
      addOrderProHead: [
        {
          label: "系统单号",
          prop: "system_order_no",
          width: "200",
          type: "text"
        },
        {
          label: "淘宝单号",
          prop: "taobao_oid",
          width: "200",
          type: "text"
        },
        {
          label: "买家昵称",
          prop: "receiver_name",
          width: "150",
          type: "text"
        },
        {
          label: "买家电话",
          prop: "receiver_phone",
          width: "150",
          type: "text"
        },
        {
          label: "收货地址",
          prop: "receiver_address",
          width: "200",
          type: "text"
        },
        {
          label: "店铺昵称",
          prop: "shop_name",
          width: "150",
          type: "text"
        }
      ],
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
          let data = this.untreatedOrderListData[0];
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
          this.newOpt[0].nClick = false;
          this.newOpt[1].nClick = false;
          this.newOpt[2].nClick = false;
          this.newOpt[3].nClick = true;
          this.newOpt[4].nClick = false;
          this.newOpt[5].nClick = false;
          this.newOpt[6].nClick = true;
          this.$fetch(this.urls.customerservicerefunds + "/searchuntreated", {
            shops_id: this.searchBox.shops_id,
            order_sn: this.searchBox.order_sn,
            buyer_nick: this.searchBox.buyer_nick,
            buyer_name: this.searchBox.buyer_name,
            locker_id: this.searchBox.locker_id,
            include:
              "shop,locker,refundReason,refundReasonType,creator,businessPersonnel,locker,afterSale,financial,refundOperationRecord"
          }).then(
            res => {
              this.loading = false;
              this.$fetch(this.urls.customerservicedepts + "/create").then(
                res => {
                  this.addSubData = res;
                },
                err => {}
              );
              this.untreatedOrderListData = res.data;
              let pg = res.meta.pagination;
              this.$store.dispatch("currentPage", pg.current_page);
              this.$store.commit("PER_PAGE", pg.per_page);
              this.$store.commit("PAGE_TOTAL", pg.total);
              this.$store.dispatch("refundreasontype", "/refundreasontype");
              this.$store.dispatch("refundMethod", "/refundMethod");
              this.$store.dispatch("shops", "/shops");
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
          this.newOpt[0].nClick = false;
          this.newOpt[1].nClick = true;
          this.newOpt[2].nClick = true;
          this.newOpt[3].nClick = true;
          this.newOpt[4].nClick = true;
          this.newOpt[5].nClick = true;
          this.newOpt[6].nClick = false;
          this.$fetch(this.urls.customerservicerefunds + "/searchtreated", {
            shops_id: this.searchBox.shops_id,
            order_sn: this.searchBox.order_sn,
            buyer_nick: this.searchBox.buyer_nick,
            buyer_name: this.searchBox.buyer_name,
            locker_id: this.searchBox.locker_id,
            include:
              "shop,locker,refundReason,refundReasonType,creator,businessPersonnel,locker,afterSale,financial,refundOperationRecord"
          }).then(
            res => {
              this.loading = false;
              this.treatedOrderListData = res.data;
              let pg = res.meta.pagination;
              this.$store.dispatch("currentPage", pg.current_page);
              this.$store.commit("PER_PAGE", pg.per_page);
              this.$store.commit("PAGE_TOTAL", pg.total);
              this.$store.dispatch("refundreasontype", "/refundreasontype");
              this.$store.dispatch("refundMethod", "/refundMethod");
              this.$store.dispatch("shops", "/shops");
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
          this.$fetch(this.urls.customerservicerefunds, {
            order_status: "等通知发货",
            shops_id: this.searchBox.shops_id,
            order_sn: this.searchBox.order_sn,
            buyer_nick: this.searchBox.buyer_nick,
            buyer_name: this.searchBox.buyer_name,
            locker_id: this.searchBox.locker_id,
            include:
              "shop,creator,businessPersonnel,locker,afterSale,financial,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,warehouses,orderItems,businessPersonnel,locker,paymentDetails,refundOperationRecord"
          }).then(
            res => {
              this.loading = false;
              this.$fetch(this.urls.customerservicedepts + "/create").then(
                res => {
                  this.addSubData = res;
                },
                err => {}
              );
              this.untreatedOrderListData = res.data;
              let pg = res.meta.pagination;
              this.$store.dispatch("currentPage", pg.current_page);
              this.$store.commit("PER_PAGE", pg.per_page);
              this.$store.commit("PAGE_TOTAL", pg.total);
              this.$store.dispatch("refundreasontype", "/refundreasontype");
              this.$store.dispatch("refundMethod", "/refundMethod");
              this.$store.dispatch("shops", "/shops");
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
      let index = this.orderListActiveName - 0;
      if (index == 0) {
        if (row.refund_order_status == "订单锁定") {
          this.newOpt[1].nClick = false;
          this.newOpt[3].nClick = true;
          this.newOpt[4].nClick = false;
          this.newOpt[5].nClick = true;
        } else {
          this.newOpt[1].nClick = true;
          this.newOpt[3].nClick = false;
          this.newOpt[4].nClick = true;
          this.newOpt[5].nClick = false;
        }
      }
    },
    orderDbClick(row) {
      this.activeName = "1";
      let index = this.orderListActiveName - 0;
      if (index == 0) {
        if (row.refund_order_status == "订单锁定") {
          this.newOpt[1].nClick = false;
          this.newOpt[3].nClick = true;
          this.newOpt[4].nClick = false;
          this.newOpt[5].nClick = true;
        } else {
          this.newOpt[1].nClick = true;
          this.newOpt[3].nClick = false;
          this.newOpt[4].nClick = true;
          this.newOpt[5].nClick = false;
        }
      }
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
    addRefundOrder() {
      this.addRefundOrderMask = true;
      this.addIds = [];
      this.proData = [];
      this.addRefundReasonCurIndex = "index0";
    },
    addHandleClick() {},
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
        refund_amount: 0
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
    addRefundOrderConfirm() {
      this.$post(
        this.urls.customerservicerefunds,
        this.addRefundOrderFormVal
      ).then(
        () => {
          this.addRefundOrderMask = false;
          this.resetAddInfo();
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
    // 选择订单
    addMoreProblemPro() {
      this.addProMask = true;
      this.proQueryClick();
    },
    addOrderRowCName({ row, rowIndex }) {
      row.index = rowIndex;
    },
    addDefProRowCName({ row, rowIndex }) {
      // row.index = rowIndex;
    },
    addDefProRowClick(row) {},
    addOrderRowClick(row) {
      this.proDtlVal = [];
      this.addOrderDtlVal = row;
      this.addOrderDtlVal.orderItems["data"].map(list => {
        list.combination.productComponents["data"].map(item => {
          let defPro = {
            commodity_code: list.product.commodity_code,
            spec_code: item.component_code,
            short_name: list.product.short_name,
            spec: item.spec,
            color: item.color,
            materials: item.materials,
            function: item.function,
            special: item.special,
            other: item.other,
            buy_number: list.quantity,
            img_url: ""
          };
          this.proDtlVal.push(defPro);
        });
      });
    },
    proQueryClick() {
      this.orderDtlVal = [];
      this.proDtlVal = [];
      this.addOrderDtlVal = [];
      this.$fetch(this.urls.customerservicedepts, {
        include:
          "orderItems.combination.productComponents,orderItems.product,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,businessPersonnel,locker,paymentDetails.paymentMethod,paymentDetails.order,refundOperationRecord"
      }).then(
        res => {
          this.orderDtlVal = res.data;
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
    proQueryRefresh() {
      this.proQueryClick();
      this.$message({
        message: "刷新成功",
        type: "success"
      });
    },
    cancelAddPro() {
      this.addProMask = false;
      this.$message({
        message: "取消选择订单",
        type: "info"
      });
    },
    confirmAddPro() {
      this.addProMask = false;
      this.addRefundOrderFormVal.order_sn = this.addOrderDtlVal.system_order_no;
      this.addRefundOrderFormVal.refund_payment_methods_id = "";
      this.addRefundOrderFormVal.shops_id = this.addOrderDtlVal.shops_id;
      this.addRefundOrderFormVal.refund_account = "";
      this.addRefundOrderFormVal.bank = "";
      this.addRefundOrderFormVal.bank_address = "";
      this.addRefundOrderFormVal.refund_amount = "";
      this.addRefundOrderFormVal.transaction_sn = this.addOrderDtlVal.taobao_tid;
      this.addRefundOrderFormVal.refund_reason_type_id = "";
      this.addRefundOrderFormVal.buyer_nick = this.addOrderDtlVal.member_nick;
      this.addRefundOrderFormVal.buyer_name = this.addOrderDtlVal.receiver_name;
      this.addRefundOrderFormVal.payment_amount = "";
      this.addRefundOrderFormVal.order_price = "";
      this.addRefundOrderFormVal.order_time = this.addOrderDtlVal.created_at;
      this.addRefundOrderFormVal.responsible_party = "";
      this.addRefundOrderFormVal.responsible_person = "";
      this.addRefundOrderFormVal.responsible_amount = "";
      this.addRefundOrderFormVal.refund_description = "";
      this.addRefundOrderFormVal.business_remark = "";
    },
    // 新增退款单
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
      this.selection = val;
      let index = this.orderListActiveName - 0;
      if (index == 0) {
        if (this.selection.length == 1) {
          if (val[0].refund_order_status == "订单锁定") {
            this.newOpt[1].nClick = false;
            this.newOpt[3].nClick = true;
            this.newOpt[4].nClick = false;
            this.newOpt[5].nClick = true;
          } else {
            this.newOpt[1].nClick = true;
            this.newOpt[3].nClick = false;
            this.newOpt[4].nClick = true;
            this.newOpt[5].nClick = false;
          }
        } else if (this.selection.length >= 2) {
          this.newOpt[1].nClick = true;
          this.newOpt[3].nClick = true;
          this.newOpt[4].nClick = true;
          this.newOpt[5].nClick = true;
        }
      }
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
        if (this.orderListActiveName == "0") {
          this.untreatedOrderListData = res.data;
        } else {
          this.treatedOrderListData = res.data;
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
        let id = this.checkboxId ? this.checkboxId : this.orderListTabCurRowId;
        this.$put(
          this.urls.customerservicerefunds + "/" + id + "/lockorunlock"
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
      }
    },
    /*解锁*/
    debLock() {
      if (this.newOpt[4].nClick) {
        return;
      } else {
        let id = this.checkboxId ? this.checkboxId : this.orderListTabCurRowId;
        this.$put(
          this.urls.customerservicerefunds + "/" + id + "/lockorunlock"
        ).then(
          () => {
            // this.newOpt[1].nClick = true;
            // this.newOpt[2].nClick = true;
            // this.newOpt[3].nClick = false;
            // this.newOpt[4].nClick = true;
            // this.newOpt[5].nClick = true;
            // this.newOpt[6].nClick = true;
            // this.newOpt[8].nClick = true;
            // this.newOpt[9].nClick = true;
            // this.newOpt[14].nClick = true;
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
      if (this.newOpt[1].nClick) {
        return;
      } else {
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
      }
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
      if (this.newOpt[5].nClick) {
        return;
      } else {
        let id = this.checkboxId ? this.checkboxId : this.orderListTabCurRowId;
        this.$put(this.urls.customerservicerefunds + "/" + id + "/audit").then(
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
      if (this.newOpt[6].nClick) {
        return;
      } else {
        let id = this.checkboxId ? this.checkboxId : this.orderListTabCurRowId;
        this.$put(
          this.urls.customerservicerefunds + "/" + id + "/unaudit"
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
      }
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
    this.$store.dispatch("setOpt", this.newOpt);
    let that = this;
    $(window).resize(() => {
      that.$store.dispatch("setOpt", that.newOpt);
    });
  }
};
</script>