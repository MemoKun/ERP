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
            <span>
              <label>买家地址</label>
              <el-input v-model="searchBox.customer_address" clearable></el-input>
            </span>
          </div>
          <div class="searchBox">
            <span>
              <label>业务员</label>
              <el-input v-model="searchBox.order_stuff" clearable></el-input>
            </span>
            <span>
              <label>赔偿方向</label>
              <el-select v-model="searchBox.cmptn_direction" clearable placeholder="请选择">
                <el-option v-for="item in searchBox.cmptn_directions" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </span>
            <span>
              <label>责任方</label>
              <el-select v-model="searchBox.responsible_party" clearable placeholder="请选择">
                <el-option v-for="item in searchBox.responsible_partys" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </span>
            <span>
              <label>责任人</label>
              <el-input v-model="searchBox.responsible_person" clearable></el-input>
            </span>
          </div>
          <div class="searchBox">
            <span>
              <label>发货物流</label>
              <el-select v-model="searchBox.logistics_company" clearable placeholder="请选择">
                <el-option v-for="item in searchBox.logistics_companys" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </span>
            <span>
              <label>物流单号</label>
              <el-input v-model="searchBox.logistics_tracking_number"></el-input>
            </span>
            <span>
              <label>所属店铺</label>
              <el-select v-model="searchBox.cmptn_shop" clearable placeholder="请选择">
                <el-option v-for="item in searchBox.cmptn_shops" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </span>
            <span></span>
          </div>
          <div style="text-align: right">
            <el-button type="primary" @click="searchData">筛选</el-button>
            <el-button @click="resets">重置</el-button>
          </div>
        </div>

        <!--显示列表-未处理-->
        <el-tabs v-model="leftTopActiveName" @tab-click="leftHandleClick" style="height: 400px;">
          <el-tab-pane label="未处理" name="0">
            <el-table :data="cmptnOrderListTableData" fit @selection-change="handleSelectionChange" v-loading="loading" height="350" @row-click="problemProRowClick" @row-dblclick="orderDbClick">
              <el-table-column type="selection" width="95" align="center" :checked="checkboxInit"></el-table-column>
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
            <el-table :data="alreadyHandle" fit @selection-change="handleSelectionChange" v-loading="loading" height="350" @row-click="problemProRowClick" @row-dblclick="orderDbClick">
              <el-table-column type="selection" width="95" align="center" :checked="checkboxInit"></el-table-column>
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

        <!--底部tab-->
        <el-tabs>
          <el-tab-pane label="问题产品" name="0">
            <el-table :data="problemProData">
              <el-table-column v-for="item in problemProTableHead" :label="item.label" align="center" :width="item.width" :key="item.prop">
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
      </el-tab-pane>
    </el-tabs>

    <!--新增-->
    <el-dialog title="新增售后赔偿申请" :visible.sync="addCmptnOrderMask" :class="{'more-forms':moreForms}">
      <div class="clearfix">
        <el-button type="text" style="float: left">售后赔偿信息</el-button>
      </div>
      <el-form :model="addCmptnOrderFormVal" :rules="addCmptnOrderFormRules" class="cmptnAddForm" id="form">
        <el-form-item v-for="(item,index) in cmptnOrderFormHead" :key="index" :label="item.label" :prop="item.prop">
          <span v-if="item.type=='text'">
            <span v-if="item.inProp">
              <el-input v-model.trim="addCmptnOrderFormVal[item.prop][item.inProp]" :placeholder="item.holder" :disabled="item.addChgAble"></el-input>
            </span>
            <span v-else>
              <el-input v-model.trim="addCmptnOrderFormVal[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble"></el-input>
            </span>
          </span>
          <span v-else-if="item.type=='number'">
            <span v-if="item.prop=='deliver_goods_fee' || item.prop=='move_upstairs_fee' || item.prop=='installation_fee'">
              <el-input type="number" v-model.trim="addCmptnOrderFormVal[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble" @input="formChg"></el-input>
            </span>
            <span v-else>
              <el-input type="number" v-model.trim="addCmptnOrderFormVal[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble"></el-input>
            </span>
          </span>
          <!--选择框拉取数据库数据-->
          <span v-else-if="item.type=='select'">
            <el-select v-model="addCmptnOrderFormVal[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble">
              <span v-for="list in resData[item.stateVal]" :key="list.id">
                <el-option :label="list.name?list.name:list.nick" :value="list.id"></el-option>
              </span>
            </el-select>
          </span>
          <span v-else-if="item.type == 'selects'">
            <el-select v-model="addCmptnOrderFormVal[item.prop]" :placeholder="item.holder">
              <span v-for="list in selectVal[item.prop]" :key="list.value">
                <el-option :label="list.label" :value="list.value"></el-option>
              </span>
            </el-select>
          </span>
          <span v-else-if="item.type=='textarea'">
            <el-input type="textarea" v-model.trim="addCmptnOrderFormVal[item.prop]" :placehode="item.holder"></el-input>
          </span>
          <span v-else-if="item.type=='checkbox'">
            <el-checkbox v-model="addCmptnOrderFormVal[item.prop]" :disabled="item.chgAble"></el-checkbox>
          </span>
          <!-- <span v-else-if="item.type=='radio'">
            <el-radio v-model="addCmptnOrderFormVal[item.prop]" label="volume">{{item.choiceName[0]}}</el-radio>
            <el-radio v-model="addCmptnOrderFormVal[item.prop]" label="weight">{{item.choiceName[1]}}</el-radio>
          </span>-->
          <span v-else-if="item.type=='DatePicker'">
            <el-date-picker v-model="addCmptnOrderFormVal[item.prop]" type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期"></el-date-picker>
          </span>
        </el-form-item>
      </el-form>
      <el-button type="text">问题商品信息</el-button>
      <el-table :data="addCmptnOrderFormVal.problem_product" fit height="150" :row-class-name="addProRCName" @row-click="addProRowClick">
        <el-table-column v-for="(item,index) in addProblemProHead" :label="item.label" align="center" :width="item.width" :key="index">
          <template slot-scope="scope">
            <span v-if="addProblemProCurIndex =='index'+scope.$index">
              <span v-if="item.type=='url'">
                <el-input size="small" type="url" v-model.trim="scope.row[item.prop]" :placeholder="item.holder"></el-input>
              </span>
              <span v-else-if="item.type == 'checkbox'">
                <el-checkbox v-model="scope.row[item.prop]"></el-checkbox>
              </span>
              <span v-else-if="item.type=='img'">
                <span v-if="addProblemProUpload=='upload'+scope.$index">
                  <el-upload action :before-upload="beforeAddUploadProblemProImg">
                    <el-button size="small" type="primary">点击上传</el-button>
                  </el-upload>
                </span>
                <span v-else>
                  <img :src="scope.row[item.prop]">
                  <el-upload class="chgDiv" action :before-upload="beforeUpload">
                    <el-button type="primary" icon="el-icon-edit" size="mini" class="chg" v-show="tableChgBtn=='show'+scope.$index"></el-button>
                  </el-upload>
                </span>
              </span>
              <span v-else-if="scope.row[item.prop]">{{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}</span>
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
        <el-table-column label="操作" width="90" align="center" fixed="right">
          <template slot-scope="scope">
            <el-button size="mini" type="danger" @click="addProblemProDel(scope.$index)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer clearfix">
        <div style="float: left">
          <el-button type="primary" @click="addMoreProblemPro" v-if="addActiveName=='0'">添加问题商品</el-button>
        </div>
        <div style="float: right">
          <el-button type="primary" @click="addCmptnOrderConfirm">确定</el-button>
          <el-button @click="resetAddInfo" type="info">重置</el-button>
          <el-button @click="addCmptnOrderCancel">取消</el-button>
        </div>
      </div>
    </el-dialog>

    <!--添加问题商品-->
    <!--<el-dialog title="添加商品" :visible.sync="proMask" :class="{'more-forms':moreForms,'threeParts':threeParts}">
            <el-button type="text">选择商品</el-button>
            <div class="searchBox">
                <span>
                    <label>商品编码</label>
                    <el-input v-model.trim="proQuery.commodity_code" clearable placeholder="请输入商品编码" @keyup.enter.native="proQueryClick"></el-input>
                </span>
                <span>
                    <label>规格编码</label>
                    <el-input v-model.trim="proQuery.component_code" clearable placeholder="请输入子件编码" @keyup.enter.native="proQueryClick"></el-input>
                </span>
                <span>
                    <label>商品简称</label>
                    <el-input v-model.trim="proQuery.short_name" clearable placeholder="请输入子件编码" @keyup.enter.native="proQueryClick"></el-input>
                </span>
                <span>
                     <label>规格</label>
                    <el-input v-model.trim="proQuery.component_code" clearable placeholder="请输入子件编码" @keyup.enter.native="proQueryClick"></el-input>
                </span>
                <el-button type="primary" @click="proQueryClick">查询</el-button>
            </div>
            <el-table :data="proVal" fit height="250" :row-class-name="proCName" @row-click="proRowClick">
                <el-table-column v-for="item in proHead" :label="item.label" align="center" :width="item.width" :key="item.label">
                    <template slot-scope="scope">
                       <span v-if="item.prop">
                           <span v-if="item.type=='img'">
                               <el-popover placement="right" trigger="hover"
                                           popper-class="picture_detail">
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
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="addCmptnOrderConfirm">确定</el-button>
                <el-button @click="cancelAddProDtl">关闭</el-button>
            </div>
    </el-dialog>-->

    <!--修改-->
    <el-dialog title="修改售后赔偿订单" :visible.sync="updateCmptnOrderMask" :class="{'more-forms':moreForms,'threeParts':threeParts}" class="bigDialog">
      <div class="clearfix">
        <el-button type="text" style="float: left">售后赔偿订单信息</el-button>
        <el-button type="primary" style="float: right;padding: 6px 10px;font-size: 12px;margin-bottom: 5px;" @click="toggleForm">{{toggleText?"折叠":"展开"}}</el-button>
      </div>
      <el-form :model="updateCmptnOrderFormVal" :rules="addCmptnOrderFormRules" class="cmptnUpdateForm hidePart" id="form">
        <el-form-item v-for="(item,index) in cmptnOrderFormHead" :key="index" :label="item.label" :prop="item.prop">
          <span v-if="item.type=='text'">
            <span v-if="item.inProp">
              <el-input v-model.trim="updateCmptnOrderFormVal[item.prop][item.inProp]" :placeholder="item.holder" :disabled="item.addChgAble"></el-input>
            </span>
            <span v-else>
              <el-input v-model.trim="updateCmptnOrderFormVal[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble"></el-input>
            </span>
          </span>
          <span v-else-if="item.type=='number'">
            <span v-if="item.prop=='deliver_goods_fee' || item.prop=='move_upstairs_fee' || item.prop=='installation_fee'">
              <el-input type="number" v-model.trim="updateCmptnOrderFormVal[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble" @input="formChg"></el-input>
            </span>
            <span v-else>
              <el-input type="number" v-model.trim="updateCmptnOrderFormVal[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble"></el-input>
            </span>
          </span>
          <span v-else-if="item.type=='select'">
            <el-select v-model="updateCmptnOrderFormVal[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble">
              <span v-for="list in resData[item.stateVal]" :key="list.id">
                <el-option :label="list.name?list.name:list.nick" :value="list.id"></el-option>
              </span>
            </el-select>
          </span>
          <span v-else-if="item.type == 'selects'">
            <el-select v-model="updateCmptnOrderFormVal[item.prop]" :placeholder="item.holder">
              <span v-for="list in selectVal[item.prop]" :key="list.value">
                <el-option :label="list.label" :value="list.value"></el-option>
              </span>
            </el-select>
          </span>
          <span v-else-if="item.type=='textarea'">
            <el-input type="textarea" v-model.trim="updateCmptnOrderFormVal[item.prop]" :placehode="item.holder"></el-input>
          </span>
          <span v-else-if="item.type=='checkbox'">
            <el-checkbox v-model="updateCmptnOrderFormVal[item.prop]" :disabled="item.chgAble"></el-checkbox>
          </span>
          <span v-else-if="item.type=='radio'">
            <el-radio v-model="updateCmptnOrderFormVal[item.prop]" label="volume">{{item.choiceName[0]}}</el-radio>
            <el-radio v-model="updateCmptnOrderFormVal[item.prop]" label="weight">{{item.choiceName[1]}}</el-radio>
          </span>
          <span v-else-if="item.type=='DatePicker'">
            <el-date-picker v-model="updateCmptnOrderFormVal[item.prop]" type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期"></el-date-picker>
          </span>
        </el-form-item>
      </el-form>
      <el-button type="text">问题商品信息</el-button>
      <!--ceshi-->
      <label>{{updateProblemProCurIndex}}</label>
      <label>{{updateProblemProCurIndexNum}}</label>
      <el-table :data="updateCmptnOrderFormVal.problem_product" fit @row-click="addProRowClick" :row-class-name="addProRCName">
        <el-table-column v-for="(item,index) in addProblemProHead" :label="item.label" align="center" :width="item.width" :key="index">
          <template slot-scope="scope">
            <span v-if="updateProblemProCurIndex =='index'+scope.$index">
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
                <span v-if="updateProblemProUpload=='upload'+scope.$index">
                  <el-upload action :before-upload="beforeUpdateUploadProblemProImg">
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
        <el-table-column label="操作" width="90" align="center" fixed="right">
          <template slot-scope="scope">
            <el-button size="mini" type="danger" @click="updateProblemProDel(scope.row,scope.$index)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer clearfix">
        <div style="float: left">
          <el-button type="primary" @click="addProDtl" v-if="updateActiveName=='0'">添加商品</el-button>
          <el-button type="primary" @click="addproblemProRow">新增行</el-button>
        </div>
        <div style="float: right">
          <el-button type="primary" @click="updateCmptnConfirm">确定</el-button>
          <el-button @click="updateCustomerCancel">取消</el-button>
        </div>
      </div>
    </el-dialog>

    <!-- 新增问题产品 -->
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

    <!--页码-->
    <Pagination :page-url="this.urls.aftercompensation" @handlePagChg="handlePagChg" v-if="activeName=='0'"></Pagination>
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
      imgPath: "",
      fileList2: [
        {
          name: "food.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        },
        {
          name: "food2.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        }
      ],
      addProblemProCurIndexNum: "",
      fd: [],
      newOpt: [
        {
          cnt: "增加",
          icon: "bf-add",
          ent: this.addCmptnOrder,
          ref: "add",
          nClick: false
        },
        {
          cnt: "修改",
          icon: "bf-change",
          ent: this.updateData,
          nClick: false
        },
        {
          cnt: "删除",
          icon: "bf-del",
          ent: this.delBatch,
          nClick: false
        },
        {
          cnt: "审核",
          icon: "bf-audit",
          ent: this.handleAudit,
          nClick: false
        },
        {
          cnt: "退审",
          icon: "bf-auditfaild",
          ent: this.handleUnAudit,
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
      filterBox: false,
      searchBox: {
        customer_nickname: "",
        customer_name: "",
        customer_phone: "",
        customer_address: "",
        order_stuff: "",
        cmptn_direction: "",
        cmptn_directions: [
          { label: "我们赔偿", value: "我们赔偿" },
          { label: "赔偿我们", value: "赔偿我们" }
        ],
        responsible_party: "",
        responsible_partys: [
          { label: "物流", value: "物流" },
          { label: "工厂", value: "工厂" },
          { label: "服务商", value: "服务商" },
          { label: "客户", value: "客户" },
          { label: "公司", value: "公司" },
          { label: "仓库", value: "仓库" },
          { label: "其他", value: "其他" }
        ],
        responsible_person: "",
        logistics_company: "",
        logistics_companys: [
          { label: "顺丰速运", value: "顺丰速运" },
          { label: "韵达快递", value: "韵达快递" }
        ],
        logistics_tracking_number: "",
        cmptn_shop: "",
        cmptn_shops: [
          { label: "Dreasylife家居旗舰店", value: "Dreasylife家居旗舰店" },
          { label: "思享家官方旗舰店", value: "思享家官方旗舰店" }
        ]
      },
      /*获取数据*/
      activeName: "0",
      leftTopActiveName: "0",
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
          nmprop: "name",
          type: "select"
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
          label: "驳回原因",
          prop: "refuse_reason",
          type: "text",
          editChgAble: true,
          addChgAble: false
        },
        {
          label: "费用类型",
          prop: "feeType",
          inProp: "name",
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
      noUpload: true,
      loading: true,
      checkboxInit: false,
      orderListIndex: "",
      alreadyHandle: [],
      orderDtlFormVal: {},
      curRowId: "",
      curRowData: {},
      problemProListIndexNum: "0",

      /*新增*/
      addCmptnOrderMask: false,
      moreForms: true,
      threeParts: true,
      addCmptnOrderFormVal: {
        order_number: "",
        cmptn_shop: "",
        cmptn_direction: "",
        responsible_party: "",
        responsible_person: "",
        customer_nickname: "",
        customer_name: "",
        customer_phone: "",
        customer_city: "",
        customer_address: "",
        cmptn_fee: "",
        fee_type_id: "",
        logistics_company: "",
        logistics_tracking_number: "",
        payment_method: "",
        order_stuff: "",
        payee: "",
        payee_account: "",
        problem_product_id: "",
        problem_description: "",
        note: "",
        refuse_reason: "",
        negotiation_date: "",
        created_at: "",
        submited_at: "",
        audited_at: "",
        updated_at: "",
        status: true,
        problem_product: [
          {
            commodity_code: "",
            spec_code: "",
            short_name: "",
            spec: "",
            color: "",
            materials: "",
            function: "",
            special: "",
            other: "",
            buy_number: "",
            img_url: ""
          }
        ]
      },
      addCmptnOrderFormRules: {
        //新建订单的要求格式
        customer_nickname: [
          { required: true, message: "买家昵称必填", trigger: "blur" }
        ],
        customer_name: [{ required: true, message: "买家姓名必填", trigger: "blur" }],
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
        fee_type_id: [{ required: true, message: "费用类型必选", trigger: "blur" }],
        payee: [{ required: true, message: "收款人必选", trigger: "blur" }],
        payee_account: [{ required: true, message: "收款账号必选", trigger: "blur" }],
        cmptn_shop: [{ required: true, message: "店铺昵称必选", trigger: "blur" }],
        problem_description: [
          { required: true, message: "问题描述必选", trigger: "blur" }
        ],
        problem_product: [
          { required: true, message: "请选择选择问题商品", trigger: "blur" }
        ]
      },
      cmptnOrderFormHead: [
        //新建订单的文本框表头
        {
          label: "系统单号",
          prop: "order_number",
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
          type: "selects",
          stateVal: "payment_method"
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
          type: "selects",
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
          type: "selects",
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
          prop: "fee_type_id",
          type: "select",
          stateVal: "feetypes",
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
      addActiveName: "0",
      proData: [],
      options: regionDataPlus,
      addProblemProHead: [
        {
          label: "产品图片",
          width: "120",
          prop: "img_url",
          type: "img",
          imgPath: ""
        },
        {
          label: "商品编码",
          prop: "commodity_code",
          type: "text",
          width: "160",
          holder: "请输入商品编码"
        },
        {
          label: "规格编码",
          prop: "spec_code",
          type: "text",
          width: "160"
        },
        {
          label: "商品简称",
          prop: "short_name",
          type: "text",
          width: "160"
        },
        {
          label: "规格",
          prop: "spec",
          type: "text",
          width: "160"
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
          width: "160"
        },
        {
          label: "功能",
          prop: "function",
          type: "text",
          width: "160"
        },
        {
          label: "特殊",
          prop: "special",
          type: "text",
          width: "160"
        },
        {
          label: "其他",
          prop: "other",
          type: "text",
          width: "160"
        },
        {
          label: "购买数量",
          prop: "buy_number",
          type: "number",
          width: "100"
        }
      ],
      problemProKey: {
        commodity_code: "",
        spec_code: "",
        short_name: "",
        spec: "",
        color: "",
        materials: "",
        function: "",
        special: "",
        other: "",
        buy_number: "",
        img_url: ""
      },
      proMask: false,
      showChgBtn: "",
      proQuery: {
        commodity_code: "",
        component_code: "",
        shops_id: "",
        short_name: ""
      },
      editSpecIndex: "",
      editIndex: 0,
      chgEId: "",
      proHead: [
        {
          label: "产品图片",
          width: "200",
          prop: "img_url",
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
          prop: "img",
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
      addProblemProCurIndexNum: 0,
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
      updateCmptnOrderMask: false,
      updateCmptnOrderFormVal: {
        order_number: "",
        cmptn_shop: "",
        cmptn_direction: "",
        responsible_party: "",
        responsible_person: "",
        customer_nickname: "",
        customer_name: "",
        customer_phone: "",
        customer_city: "",
        customer_address: "",
        cmptn_fee: "",
        fee_type_id: "",
        logistics_company: "",
        logistics_tracking_number: "",
        payment_method: "",
        order_stuff: "",
        payee: "",
        payee_account: "",
        problem_product_id: "",
        problem_description: "",
        note: "",
        refuse_reason: "",
        negotiation_date: "",
        created_at: "",
        submited_at: "",
        audited_at: "",
        updated_at: "",
        status: true,
        problem_product: [
          {
            commodity_code: "",
            spec_code: "",
            short_name: "",
            spec: "",
            color: "",
            materials: "",
            function: "",
            special: "",
            other: "",
            buy_number: "",
            img_url: ""
          }
        ]
      },
      updateActiveName: "0",
      updateProData: [],
      updateReceiveInfo: {},
      updateExpenseData: [],
      updateProIds: [],
      updateProblemProCurIndexNum: 0,
      updateProblemProCurIndex: "index0",
      tableChgBtn: "",
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
      problemProTableHead: [
        {
          label: "产品图片",
          width: "200",
          prop: "img_url",
          type: "img"
        },
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
      inputChange: false,
      addProblemProCurIndex: "",
      problemProData: [],
      addSubData: [],
      addProblemProUpload: "upload0",
      updateProblemProUpload: "",
      updateCompUpload: "upload0",
      updateRwIndex: "0",
      updateChgBtn: false,
      selectVal: {
        payment_method: [
          { label: "支付宝", value: "支付宝" },
          { label: "微信", value: "微信" },
          { label: "银行卡", value: "银行卡" }
        ],
        cmptn_direction: [
          { label: "我们赔偿", value: "我们赔偿" },
          { label: "赔偿我们", value: "赔偿我们" }
        ],
        responsible_party: [
          { label: "客户", value: "客户" },
          { label: "公司", value: "公司" },
          { label: "仓库", value: "仓库" },
          { label: "供应商", value: "供应商" },
          { label: "工厂", value: "工厂" },
          { label: "物流", value: "物流" },
          { label: "其他", value: "其他" }
        ]
      },
      // 新增问题产品
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
      ]
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
      this.$message({
        message:"此功能处于开发调试中",
        type:"success"
      })
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
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
          this.newOpt[0].nClick = false;
          this.newOpt[1].nClick = false;
          this.newOpt[2].nClick = false;
          this.newOpt[3].nClick = false;
          this.newOpt[4].nClick = true;
          this.$fetch(this.urls.aftercompensation + "/searchuntreated", {
            customer_nickname: this.searchBox.customer_nickname,
            customer_name: this.searchBox.customer_name,
            customer_phone: this.searchBox.customer_phone,
            customer_address: this.searchBox.customer_address,
            order_stuff: this.searchBox.order_stuff,
            cmptn_direction: this.searchBox.cmptn_direction,
            responsible_party: this.searchBox.responsible_party,
            responsible_person: this.searchBox.responsible_person,
            logistics_company: this.searchBox.logistics_company,
            logistics_tracking_number: this.searchBox.logistics_tracking_number,
            cmptn_shop: this.searchBox.cmptn_shop,
            include: "problemProduct.afterCompensationOrder,feeType"
          }).then(
            res => {
              this.loading = false;
              this.cmptnOrderListTableData = res.data;
              this.problemProData = res.data[0]
                ? res.data[0]["problemProduct"].data
                : [];
              //this.addSubData = res.data;
              this.$store.dispatch("feetypes", "/feetypes");

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
          this.newOpt[0].nClick = true;
          this.newOpt[1].nClick = true;
          this.newOpt[2].nClick = true;
          this.newOpt[3].nClick = true;
          this.newOpt[4].nClick = false;
          this.$fetch(this.urls.aftercompensation + "/searchtreated", {
            customer_nickname: this.searchBox.customer_nickname,
            customer_name: this.searchBox.customer_name,
            customer_phone: this.searchBox.customer_phone,
            customer_address: this.searchBox.customer_address,
            order_stuff: this.searchBox.order_stuff,
            cmptn_direction: this.searchBox.cmptn_direction,
            responsible_party: this.searchBox.responsible_party,
            responsible_person: this.searchBox.responsible_person,
            logistics_company: this.searchBox.logistics_company,
            logistics_tracking_number: this.searchBox.logistics_tracking_number,
            cmptn_shop: this.searchBox.cmptn_shop,
            include: "problemProduct.afterCompensationOrder"
          }).then(
            res => {
              this.loading = false;
              this.alreadyHandle = res.data;
              this.problemProData = res.data[0]
                ? res.data[0]["problemProduct"].data
                : [];
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
    //筛选
    searchData() {
      this.loading = true;
      this.fetchData();
    },
    leftHandleClick() {
      this.loading = true;
      this.fetchData();
    },
    rightHandleClick() {},
    problemProRowClick(row) {
      this.curRowId = row.id;
      this.problemProData = row["problemProduct"].data;
    },
    addproblemProRow() {
      //数据初始化
      this.combArr = [];
      this.combCount = [];
      this.combIndex = "";
      this.idNew = [];
      /*修改*/
      /* if(this.editMask){
          this.showComb = true;
          if(this.chgOrNew=='edit'){
            /!*修改时修改规格*!/
            this.$fetch(this.urls.productspecs,{'is_combination':'false'}).then(res => {
              this.combData = res.data;
            });
          }else if(this.chgOrNew=='new'){
            /!*修改时添加规格*!/
            this.$fetch(this.urls.productspecs,{'is_combination':'false'}).then(res => {
              this.combData = res.data;
            });
          }
        }else if(this.showMask){
          /!*添加*!/
          if(!this.ruleForm.commodity_code){
            this.$message.error({
              message: '商品编码不能为空'
            });
            return
          }else if(!this.ruleForm.productspecs[0].spec_code){
            /!*规格编码不能为空*!/
            this.$message.error({
              message: '规格编码不能为空'
            });
            return
          }else{
            this.showComb = true;
            this.$fetch(this.url[1],{'is_combination':'false'}).then(res => {
              this.combData = res.data;
            }, err => {});
          }
        }*/
      if (this.editMask) {
        this.showComb = true;
      } else if (this.showMask) {
        if (!this.addCmptnOrderFormVal.problem_product[0].commodity_code) {
          this.$message.error({
            message: "商品编码不能为空"
          });
          return;
        } else if (!this.addCmptnOrderFormVal.problem_product[0].spec) {
          /*规格编码不能为空*/
          this.$message.error({
            message: "规格编码不能为空"
          });
          return;
        } else {
          this.showComb = true;
        }
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
    proDtlRClick(row) {},
    /*新增*/
    resetAddInfo() {
      Object.assign(
        this.$data.addCmptnOrderFormVal,
        this.$options.data().addCmptnOrderFormVal
      );
      this.addProblemProCurIndex = "index0";
      this.updateProblemProCurIndex = "index0";
      this.addProblemProCurIndexNum = 0;
      this.updateProblemProCurIndexNum = 0;
      this.addProblemProUpload = "upload0";

      this.noUpload = true;
    },
    addCmptnOrder() {
      this.resetAddInfo();
      this.addCmptnOrderMask = true;
      this.addIds = [];
      this.addProblemProCurIndexNum = 0;
      this.addProblemProCurIndex = "index0";
      this.addProblemProUpload = "upload0";
    },
    // 新增问题产品
    addMoreProblemPro() {
      this.addProMask = true;
      this.proQueryClick();
      // let problemProKey = {
      //   commodity_code: "",
      //   spec_code: "",
      //   short_name: "",
      //   spec: "",
      //   color: "",
      //   materials: "",
      //   function: "",
      //   special: "",
      //   other: "",
      //   buy_number: "1",
      //   img_url: ""
      // };
      // if (
      //   this.addCmptnOrderFormVal.problem_product.length > 0 &&
      //   !this.addCmptnOrderFormVal.problem_product[
      //     this.addCmptnOrderFormVal.problem_product.length - 1
      //   ].commodity_code
      // ) {
      //   this.$message({
      //     message: "商品编码为空时不能添加新规格",
      //     type: "info"
      //   });
      // } else {
      //   this.addCmptnOrderFormVal.problem_product.push(problemProKey);
      //   this.problemProListIndexNum =
      //     this.addCmptnOrderFormVal.problem_product.length - 1;
      //   this.addProblemProUpload = "upload" + this.problemProListIndexNum;
      //   this.addProblemProCurIndex = "index" + this.problemProListIndexNum;
      // }
    },
    addOrderRowCName({ row, rowIndex }) {
      row.index = rowIndex;
    },
    addDefProRowCName({ row, rowIndex }) {
      row.index = rowIndex;
    },
    addDefProRowClick(row) {
      this.addCmptnOrderFormVal.problem_product.push(row);
    },
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
      this.addCmptnOrderFormVal.problem_product = [];
      this.$fetch(this.urls.customerservicedepts, {
        include:
          "orderItems.combination.productComponents,orderItems.product,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,businessPersonnel,locker,paymentDetails.paymentMethod,paymentDetails.order"
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
      // this.proSkuVal = [];
      // this.$fetch(this.urls.products, {
      //   status: true,
      //   commodity_code: this.proQuery.commodity_code,
      //   component_code: this.proQuery.component_code,
      //   shops_id: this.proQuery.shops_id,
      //   short_name: this.proQuery.short_name,
      //   include:
      //     "productComponents.product,shop,supplier,goodsCategory,combinations.productComponents"
      // }).then(
      //   res => {
      //     this.proVal = res.data;
      //     let comb = res.data[0]["combinations"]["data"];
      //     if (comb.length > 0) {
      //       let total_volume = 0;
      //       comb.map(item => {
      //         item["productComp"] = item["productComponents"]["data"];
      //         if (item["productComponents"]["data"].length > 0) {
      //           item["productComponents"]["data"].map(list => {
      //             total_volume += list.volume;
      //           });
      //         } else {
      //           total_volume = 0;
      //         }
      //         this.$set(item, "newData", {
      //           quantity: "",
      //           paint: "",
      //           is_printing: false,
      //           printing_fee: "",
      //           is_spot_goods: true,
      //           under_line_univalent: "",
      //           under_line_preferential: "",
      //           total_volume: total_volume
      //         });
      //       });
      //     } else {
      //       comb["productComp"] = [];
      //     }
      //     this.proSkuVal = comb;
      //   },
      //   err => {}
      // );
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
        message: "取消问题产品",
        type: "info"
      });
    },
    confirmAddPro() {
      this.addProMask = false;
      this.addCmptnOrderFormVal.order_number = this.addOrderDtlVal.system_order_no;
      this.addCmptnOrderFormVal.cmptn_shop = this.addOrderDtlVal.shop_name;
      this.addCmptnOrderFormVal.cmptn_direction = "";
      this.addCmptnOrderFormVal.responsible_party = "";
      this.addCmptnOrderFormVal.responsible_person = "";
      this.addCmptnOrderFormVal.customer_nickname = this.addOrderDtlVal.member_nick;
      this.addCmptnOrderFormVal.customer_name = this.addOrderDtlVal.receiver_name;
      this.addCmptnOrderFormVal.customer_phone = this.addOrderDtlVal.receiver_phone;
      this.addCmptnOrderFormVal.customer_city = this.addOrderDtlVal.receiver_city;
      this.addCmptnOrderFormVal.customer_address = this.addOrderDtlVal.receiver_address;
      this.addCmptnOrderFormVal.cmptn_fee = "";
      this.addCmptnOrderFormVal.logistics_company = this.addOrderDtlVal.logistic.name;
      this.addCmptnOrderFormVal.logistics_tracking_number = this.addOrderDtlVal.logistics_sn;
      this.addCmptnOrderFormVal.payment_method = this.addOrderDtlVal.paymentMethod.name;
      this.addCmptnOrderFormVal.payee = "";
      this.addCmptnOrderFormVal.payee_account = "";
      this.addCmptnOrderFormVal.problem_product_id = "";
      this.addCmptnOrderFormVal.problem_description = "";
      this.addCmptnOrderFormVal.note = "";
      this.addCmptnOrderFormVal.refuse_reason = "";
      this.addCmptnOrderFormVal.problem_description = "";
    },

    addHandleClick() {},
    addProRCName({ row, rowIndex }) {
      row.index = rowIndex;
    },
    addProRowClick(row) {
      this.addProblemProCurIndexNum = row.index;
      this.addProblemProCurIndex = "index" + row.index;
      if (row.img_url) {
        this.tableChgBtn = "show" + row.index;
      } else {
        this.addProblemProUpload = "upload" + row.index;
      }
    },
    addDelPro(index) {
      this.proData.splice(index, 1);
    },
    addCmptnOrderConfirm() {
      let formData = this.addCmptnOrderFormVal;
      formData.problem_product.map((item, index) => {
        if (!item.commodity_code) {
          formData.problem_product.splice(index, 1);
        }
      });
      this.$post(this.urls.aftercompensation, formData).then(
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
    addCmptnOrderCancel() {
      this.addCmptnOrderMask = false;
      this.$message({
        message: "取消新增售后赔偿订单",
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
    addProblemProDel(index) {
      this.addCmptnOrderFormVal.problem_product.splice(index, 1);
      this.$message({
        message: "删除问题商品行成功",
        type: "success"
      });
    },
    updateProblemProDel(index) {
      this.updateCmptnOrderFormVal.problem_product.splice(index, 1);
      this.$message({
        message: "删除问题商品行成功",
        type: "success"
      });
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
      this.proCompRowIndex = `index${row.index}`;
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
    },
    delBatch() {
      if (this.newOpt[2].nClick) {
        return;
      } else {
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
      }
    },
    /*页码*/
    handlePagChg(page) {
      this.$fetch(this.urls.customerservicedepts + "?page=" + page, {
        customer_nickname: this.searchBox.customer_nickname,
        customer_name: this.searchBox.customer_name,
        customer_phone: this.searchBox.customer_phone,
        customer_address: this.searchBox.customer_address,
        order_stuff: this.searchBox.order_stuff,
        cmptn_direction: this.searchBox.cmptn_direction,
        responsible_party: this.searchBox.responsible_party,
        responsible_person: this.searchBox.responsible_person,
        logistics_company: this.searchBox.logistics_company,
        logistics_tracking_number: this.searchBox.logistics_tracking_number,
        cmptn_shop: this.searchBox.cmptn_shop,
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
    /*修改*/
    updateData() {
      if (this.newOpt[1].nClick) {
        return;
      } else {
        this.proIds = [];
        this.updateProIds = [];
        this.expenseRIndex = "";
        this.updateCmptnOrderFormVal = {};
        this.updateCmptnOrderMask = true;
        this.updateProblemProCurIndex = "index0";
        this.updateProblemProCurIndexNum = 0;
        let id = this.checkboxId ? this.checkboxId : this.curRowId;
        this.$fetch(this.urls.aftercompensation + "/" + id, {
          include: "problemProduct.afterCompensationOrder"
        }).then(
          res => {
            this.updateCmptnOrderFormVal = res;
            this.updateCmptnOrderFormVal.problem_product =
              res.problemProduct.data;
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
      let id = this.checkboxId ? this.checkboxId : this.curRowId;
      this.$patch(
        this.urls.aftercompensation + "/" + id,
        this.updateCmptnOrderFormVal
      ).then(
        () => {
          this.updateCmptnOrderMask = false;
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
      this.updateCmptnOrderMask = false;
      this.$message({
        message: "取消修改订单明细",
        type: "success"
      });
    },
    /*审核*/
    handleAudit() {
      if (this.newOpt[3].nClick) {
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
    handleEdit() {
      this.inputChange = true;
    },
    handleUnAudit() {
      if (this.newOpt[4].nClick) {
        return;
      } else {
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
    beforeAddUploadProblemProImg(file) {
      this.tableChgBtn = "";
      this.judgeFm(file);
      let formData = new FormData();
      formData.append("image", file);
      axios
        .post(this.urls.uploadimages, formData)
        .then(res => {
          let imageInfo = res.data.meta;
          if (imageInfo.status_code == 201) {
            this.addProblemProUpload = "";
            this.tableChgBtn = "show" + this.addProblemProCurIndexNum;
            this.addCmptnOrderFormVal.problem_product[
              this.addProblemProCurIndexNum
            ].img_url =
              res.data.path;
          }
        })
        .catch(err => {});
    },
    beforeUpdateUploadProblemProImg(file) {
      this.tableChgBtn = "";
      this.judgeFm(file);
      let formData = new FormData();
      formData.append("image", file);
      axios
        .post(this.urls.uploadimages, formData)
        .then(res => {
          let imageInfo = res.data.meta;
          if (imageInfo.status_code == 201) {
            this.updateProblemProUpload = "";
            this.tableChgBtn = "show" + this.updateProblemProCurIndexNum;
            this.addCmptnOrderFormVal.problem_product[
              this.updateProblemProCurIndexNum
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
    beforeUpload(file) {
      this.showChgBtn = false;
      this.judgeFm(file);
      let formData = new FormData();
      formData.append("image", file);
      axios
        .post(this.urls.uploadimages, formData)
        .then(res => {
          let imageInfo = res.data.meta;
          if (imageInfo.status_code == 201) {
            this.noUpload = false;
            this.showChgBtn = true;
            this.proForm.img = res.data.path;
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
            this.noUpload = false;
            this.showChgBtn = true;
            this.updateCmptnOrderFormVal.problem_product[
              this.updateProblemProCurIndexNum
            ].img_url =
              res.data.path;
          }
        })
        .catch(err => {});
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
    //筛选信息重置
    resets() {
      this.searchBox = {
        customer_nickname: "",
        customer_name: "",
        customer_phone: "",
        customer_address: "",
        order_stuff: "",
        cmptn_direction: "",
        cmptn_directions: [
          { label: "我们赔偿", value: "我们赔偿" },
          { label: "赔偿我们", value: "赔偿我们" }
        ],
        responsible_party: "",
        responsible_partys: [
          { label: "物流", value: "物流" },
          { label: "工厂", value: "工厂" },
          { label: "服务商", value: "服务商" },
          { label: "客户", value: "客户" },
          { label: "公司", value: "公司" },
          { label: "仓库", value: "仓库" },
          { label: "其他", value: "其他" }
        ],
        responsible_person: "",
        logistics_company: "",
        logistics_companys: [
          { label: "顺丰速运", value: "顺丰速运" },
          { label: "韵达快递", value: "韵达快递" }
        ],
        logistics_tracking_number: "",
        cmptn_shop: "",
        cmptn_shops: [
          { label: "Dreasylife家居旗舰店", value: "Dreasylife家居旗舰店" },
          { label: "思享家官方旗舰店", value: "思享家官方旗舰店" }
        ]
      };
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