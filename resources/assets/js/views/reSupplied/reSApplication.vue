<template>
    <div>
      <div>
        <div class="searchBox" v-if="currentPage">
            <span>
                <label>单号</label>
                <el-input v-model="searchBox.shopTitle" clearable class="half" ></el-input>
            </span>
            <span>
                <label>买家昵称</label>
                <el-input v-model="searchBox.shopTitle" clearable class="half" ></el-input>
            </span>
            <span>
                <label>买家姓名</label>
                <el-input v-model="searchBox.shopTitle" clearable class="half" ></el-input>
            </span>
            <span v-if="filterBox">
              <label>补件类别</label>
                <el-select v-model="searchBox.shopTitle" clearable placeholder="请选择">
                  <el-option v-for="item in searchBox.shopTitle"
                      :key="item.value" :label="item.label" :value="item.value">
                   </el-option>
               </el-select>            
            </span>
            <span v-else>
               <el-button type="primary">筛选</el-button>
               <el-button @click="resets">重置</el-button>
               <span @click="toggleShow">
                 <el-button type="text">展开</el-button>
                    <i class="el-icon-arrow-down" style="color:#409EFF"></i>
                </span>
            </span>
        </div>
        <div class="searchBox" v-show="filterBox">
           <span>
                <label>包含产品</label>
                <el-input v-model="searchBox.shopTitle" clearable class="half" ></el-input>
            </span>
            <span>
                <label>店铺昵称</label>
                  <el-select v-model="searchBox.shopTitle" clearable placeholder="请选择">
                    <el-option v-for="item in searchBox.shopTitle"
                        :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>            
            </span>
            <span>
                <label>省市区</label>
                <el-cascader size="middle" :options="options" v-model="searchBox.shopTitle" ></el-cascader>
            </span>
        </div>
        <div class="searchBox" v-show="filterBox">
          <span style="text-align: left">
            <label>审核时间</label>
            <el-date-picker v-model="searchBox.shopTitle"
             type="daterange" range-separator="至"
             start-placeholder="开始日期" end-placeholder="结束日期">
            </el-date-picker>
          </span>
          <div v-if="filterBox" style="text-align: right">
            <el-button type="primary" >筛选</el-button>
              <el-button @click="resets">重置</el-button>
                <span @click="toggleShow" style="display: inline">
                  <el-button type="text">收起</el-button>
                     <i class="el-icon-arrow-up" style="color:#409EFF"></i>
                </span>
           </div>
         </div>
      </div>
        <!--提交信息tab-->
        <el-tabs v-model="activeName" @tab-click="handleTabsClick">
          <el-tab-pane label="未提交" name="0">
            <el-table :data="submitData" @selection-change="handleSelectionChange"
             v-loading="orderLoading" @row-click="orderRClick" >
              <el-table-column type="selection" width="95" align="center"
                :checked="checkboxInit">
              </el-table-column>
              <el-table-column v-for="item in submitHead" :label="item.label" 
              :width="item.width" :key="item.label" align="center">
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
          <el-tab-pane label="已提交" name="1">
            <el-table :data="submitData" @selection-change="handleSelectionChange"
             v-loading="orderLoading" @row-click="orderRClick" >
              <el-table-column type="selection" width="95" align="center"
                :checked="checkboxInit">
              </el-table-column>
              <el-table-column v-for="item in submitHead" :label="item.label" 
              :width="item.width" :key="item.label" align="center">
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
        <!--补件产品信息tab-->
        <div>
          <el-tabs v-model="bottomActiveName" @tab-click="bottomTabsClick">
          <el-tab-pane label="补件产品" name="0">
            <el-table :data="resupplyInfoData" v-loading="orderLoading">
            <el-table-column v-for="item in btmTableHead[this.bottomActiveName]"
            :label="item.label" align="center" :width="item.width" :key="item.label">
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
            <el-table-column v-for="item in btmTableHead[this.bottomActiveName]"
            :label="item.label" align="center" :width="item.width" :key="item.label">
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
          <el-tab-pane label="图片信息" name="2" v-loading="orderLoading">图片信息
            <div style="text-align: right">
              <el-button>粘贴</el-button>
              <el-button>删除</el-button>
              <el-button>上传</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="驳回原因" name="3" v-loading="orderLoading">
            <el-table :data="rejectReasonData">
            <el-table-column v-for="item in btmTableHead[this.bottomActiveName]"
            :label="item.label" align="center" :width="item.width" :key="item.label">

            </el-table-column>
            </el-table>
            <div></div>
          </el-tab-pane>
          <el-tab-pane label="操作记录" name="4" v-loading="orderLoading">
           <el-table :data="operationData">
            <el-table-column v-for="item in btmTableHead[this.bottomActiveName]"
            :label="item.label" align="center" :width="item.width" :key="item.label">

            </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="补件进度" name="5" v-loading="orderLoading">
            <el-table :data="progressData">
            <el-table-column v-for="item in btmTableHead[this.bottomActiveName]"
            :label="item.label" align="center" :width="item.width" :key="item.label">

            </el-table-column>
            </el-table>
            <div style="text-align: right">
              <el-button>新增进度</el-button>
              <el-button>修改进度</el-button>
              <el-button>删除进度</el-button>
            </div>
          </el-tab-pane>
        </el-tabs>
        <!--修改-->
        <el-dialog title="修改补件单" :visible.sync="updateMask" :class="{'more-forms':moreForms}">
          <el-form :model="orderForm" :rules="orderRules" ref="addNew" >
            <el-form-item v-for="(item,index) in orderHead" :key="index" :label="item.label" :prop="item.prop">
              <span v-if="item.type=='text'">
                <el-input v-model.trim="orderForm[item.prop]" :disabled="(item.prop=='resupply_order_no')||(item.prop=='system_order_no')?true:false"></el-input>
              </span>
              <span v-else-if="item.type == 'cascader'">
                <el-cascader size="middle" :options="options" v-model="orderForm[item.prop]"></el-cascader>
              </span>
              <span v-else-if="item.type == 'number'">
                <el-input type="number" v-model="orderForm[item.prop]"></el-input>
              </span>
              <span v-else-if="item.type=='textarea'">
                <el-input type="textarea" v-model.trim="orderForm[item.prop]"></el-input>
              </span>
              <span v-else-if="item.type=='select'">
               <!-- <el-select v-model="orderForm[item.prop]">
                  <span v-for="list in resData[item.stateVal]" :key="list.id">
                    <el-option :label="list.name?list.name:list.nick" :value="list.id"></el-option>
                  </span>
                </el-select>-->
                <el-select></el-select>
              </span>
              <span v-else-if="item.type=='time'">
                <el-date-picker v-model="orderForm[item.prop]" type="datetime"></el-date-picker>
              </span>
            </el-form-item>
          </el-form>
          <el-button type="text">问题产品</el-button>
          <el-table :data="orderForm.problemPro" fit height="300" :row-class-name="updateProCName" @row-click="updateProRowClick">
            <el-table-column v-for="(item,index) in problemProHead" :label="item.label" align="center" :width="item.width" :key="index">
              <template slot-scope="scope">
                <span v-if="updateProIndex=='index'+scope.$index">
                  <span v-if="item.type=='text'">
                    <el-input size="small" type="text" v-model.trim="scope.row[item.prop]"></el-input>
                  </span>
                  <span v-else-if="item.type=='img'">
                    <span v-if="updateProUpload=='upload'+scope.$index">
                      <el-upload action="" :before-upload="updateProImgUpload">
                        <el-button size="small" type="primary">点击上传</el-button>
                      </el-upload>
                    </span>
                    <sapn v-else>
                      <img :src="scope.row[item.imgPath]">
                      <el-upload class="chgDiv" action="" :before-upload="beforeUploadProImg">
                        <el-button type="primary" icon="el-icon-edit" size="mini" class="chg" v-show="updateProImgBtn=='show'+scope.$index"></el-button>
                      </el-upload>
                    </sapn>
                  </span>
                  <span v-else-if="item.type=='textarea'">
                    <el-input type="textarea" v-model.trim="orderForm[item.prop]"></el-input>
                  </span>
                </span>
                <span v-else>
                  <span v-if="item.type=='text'">
                    {{scope.row[item.prop]}}
                  </span>
                  <span v-else-if="item.type=='img'">
                    <img :src="scope.row[item.imgPath]">
                  </span>
                  <span v-else>
                    {{scope.row[item.prop]}}
                  </span>
                </span>
              </template>
            </el-table-column>
            <el-table-column type="selection" width="95" align="center" :checked="checkboxInit"></el-table-column>
          </el-table>
          <el-button type="text">补件产品信息</el-button>
          <el-table :data="orderForm.resupplyInfo" fit height="300" :row-class-name="updateInfoCName" @row-click="updateInfoRowClick">
            <el-table-column v-for="(item,index) in resupplyInfoHead" :label="item.label" align="center" :width="item.width" :key="index">
              <template slot-scope="scope">
                <span v-if="updateInfoIndex=='index'+scope.$index">
                  <span v-if="item.type=='text'">
                    <el-input size="small" type="text" v-model.trim="scope.row[item.prop]"></el-input>
                  </span>
                  <span v-else-if="item.type=='img'">
                    <span v-if="updateInfoUpload=='upload'+scope.$index">
                      <el-upload action="" :before-upload="updateInfoImgUpload">
                        <el-button size="small" type="primary">点击上传</el-button>
                      </el-upload>
                    </span>
                    <sapn v-else>
                      <img :src="scope.row[item.imgPath]">
                      <el-upload class="chgDiv" action="" :before-upload="beforeUploadInfoImg">
                        <el-button type="primary" icon="el-icon-edit" size="mini" class="chg" v-show="updateInfoImgBtn=='show'+scope.$index"></el-button>
                      </el-upload>
                    </sapn>
                  </span>
                  <span v-else-if="item.type=='number'">
                    <el-input type="number" v-model="orderForm[item.prop]"></el-input>
                  </span>
                  <span v-else-if="item.type=='textarea'">
                    <el-input type="textarea" v-model.trim="orderForm[item.prop]"></el-input>
                  </span>
                  <span v-else-if="item.type=='select'">
                    <!--<el-select v-model="scope.roe[item.prop]">
                      <span v-for="list in resData[item.stateVal]" :key="list.id">
                        <el-option :label="list.name?list.name:list.nick" :value="list.id"></el-option>
                      </span>
                    </el-select>-->
                    <el-select></el-select>
                  </span>
                </span>
                <span v-else>
                  <span v-if="item.type=='text'">
                    {{scope.row[item.prop]}}
                  </span>
                  <span v-else-if="item.type=='img'">
                    <img :src="scope.row[item.imgPath]">
                  </span>
                  <span v-else>
                    {{scope.row[item.prop]}}
                  </span>
                </span>
              </template>
            </el-table-column>
            <el-table-column label="操作" width="90" align="center">
                <template slot-scope="scope">
                   <el-button size="mini" type="danger" @click="addInfoDel(scope.$index)">删除</el-button>
                </template>
          </el-table-column>
          </el-table>
          <div>
            <el-button type="primary" @click="addInfo">添加产品</el-button>
          </div>
          <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="updateConfirm">确定</el-button>
            <el-button @click="updateCancel">取消</el-button>
          </div>
        </el-dialog>
        <!--修改中添加补件产品-->
        <el-dialog title="添加产品" :visible.sync="addInfoMask" :class="{'more-forms':moreForms}">
          <div class="searchBox">
            <span>
              <label>商品编码</label>
              <el-input v-model.trim="searchBox.commodityCode" clearble></el-input>
            </span>
            <span>
              <label >规格编码</label>
              <el-input v-model.trim="searchBox.specCode" clearble></el-input>
            </span>
            <span>
              <label>商品类别</label>
              <el-select v-model.trim="searchBox.categoryId" clearble placeholder="请选择">
                <!--<el-option v-for="item in resData.categoryIds" :key="item.value" :label="item.nick" :value="item.id"></el-option>-->
              </el-select>
            </span>
            <span>
              <label>所属仓库</label>
              <el-select v-model.trim="searchBox.warehouseName" clearble placeholder="请选择">
                <!--<el-option v-for="item in resData.warehouses" :key="item.value" :label="item.nick" :value="item.id"></el-option>-->
              </el-select>
            </span>
            <el-button type="primary" @click="searchInfo">查询</el-button>
          </div>
          <el-button type="text">产品</el-button>
          <el-table :data="addInfoVal.productInfo" height="300" v-loading="proInfoLoading" @row-click="proInfoRowClick" :row-class-name="proInfoRowCName">
            <el-table-column v-for="item in addInfoProHead" :label="item.label" align="center" :width="item.width" :key="item.prop">
              <template slot-scope="scope">
                <span v-if="item.type=='img'">
                  <el-popover placement="right" trigger="hover" popper-class="picture_detail">
                    <img :src="scope.row[item.prop]" >
                    <img slot="reference" :src="scope.row[item.prop]" :alt="scope.row[item.alt]">
                  </el-popover>
                </span>
                <span v-else>
                  {{scope.row[item.prop]}}
                </span>
              </template>
            </el-table-column>
          </el-table>
          <el-button type="text">规格</el-button>
          <el-table :data="addInfoVal.specInfo" v-loading="specInfoLoading" @row-click="specInfoRowClick" :row-class-name="specInfoRowCName">
            <el-table-column v-for="item in addInfoSpecHead" :label="item.label" align="center" :width="item.width" :key="item.prop">
              <template slot-scope="scope">
                <span v-if="item.type=='img'">
                  <el-popover placement="right" trigger="hover" popper-class="picture_detail">
                    <img :src="scope.row[item.prop]" >
                    <img slot="reference" :src="scope.row[item.prop]" :alt="scope.row[item.alt]">
                  </el-popover>
                </span>
                <span v-else>
                  {{scope.row[item.prop]}}
                </span>
              </template>
            </el-table-column>
          </el-table>
        </el-dialog>
        </div>
    </div>
</template>
<script>
  import {regionDataPlus} from'element-china-area-data'
  export default {
    data() {
      return {
        newOpt: [
          {
            cnt: '新增',
            icon: 'bf-add',
            ent: this.test
          },
          {
            cnt: '修改',
            icon: 'bf-change',
            ent: this.updateOrder,
            nClick:false
          },
          {
            cnt: '删除',
            icon: 'bf-del',
            ent: this.test,
            nClick:false
          },
          {
            cnt: '提交',
            icon: 'bf-submit',
            ent: this.test,
            nClick:false
          },
          {
            cnt: '驳回',
            icon: 'bf-reject',
            ent: this.test,
            nClick:true
          },
          {
            cnt: '打印',
            icon: 'bf-printer',
            ent: this.test
          },
          {
            cnt: '作废',
            icon: 'bf-void',
            ent: this.void,
          },
          {
            cnt: '刷新',
            icon: 'bf-refresh',
            ent: this.refresh
          }
        ],
        checkboxInit:false,
        currentPage:true,
        filterBox:false,
        activeName:'0',
        bottomActiveName:'0',
        searchBox:{
          buyNick:'',
          shopTitle:'',
          //修改中添加补件产品
          commodityCode:'',
          specCode:'',
          categoryId:'',
          warehouseName:'',
        },
        /*提交信息 */
        submitData:[],
        submitHead:[
          {
            label: '补件单号',
            width: '220',
            prop: 'resupply_order_no',
            type: 'text',
          },
          {
            label: '系统单号',
            width: '220',
            prop: 'system_order_no',
            type: 'text',
          },
          {
            label: '补件类别',
            width: '140',
            prop: 'resupplieCategory',
            inProp: 'name',
            type: 'text',
          },
          {
            label: '补件金额',
            width: '130',
            prop: 'resupply_money',
            type: 'number',
          },
          {
            label: '补件原因',
            width: '300',
            prop: 'resupply_reason',
            type: 'text',
          },
          {
            label: '补件责任方',
            width: '160',
            prop: 'resupplieResponsible',
            inProp: 'name',
            type: 'text',
          },
          {
            label: '店铺昵称',
            width: '130',
            prop: 'shop_nick',
            type: 'text',
          },
          {
            label: '买家昵称',
            width: '130',
            prop: 'member_nick',
            type: 'text',
          },
          {
            label: '店铺分组',
            width: '140',
            prop: 'shop_group',
            type: 'text',
          },
          {
            label: '买家姓名',
            width: '130',
            prop: 'member_name',
            type: 'text',
          },
          {
            label: '买家电话',
            width: '160',
            prop: 'member_phone',
            type: 'number',
          },
          {
            label: '物流公司',
            width: '140',
            prop: 'logistic',
            inProp: 'name',
            type: 'text',
          },
          {
            label: '预计运费',
            width: '130',
            prop: 'estimated_fee',
            type: 'number',
          },
          {
            label: '物流赔偿费用',
            width: '130',
            prop: 'compensate_fee',
            type: 'number',
          },
          {
            label: '运费类型',
            width: '140',
            prop: 'freightType',
            inProp: 'name',
            type: 'text',
          },
          {
            label: '供应商',
            width: '130',
            prop: 'supplier',
            inProp: 'name',
            type: 'text',
          },
          {
            label: '配送方式',
            width: '160',
            prop: 'distributionMethod',
            inProp: 'name',
            type: 'text',
          },
          {
            label: '送装费',
            width: '130',
            prop: 'load_fee',
            type: 'number',
          },
          {
            label: '承诺时间',
            width: '140',
            prop: 'promise_time',
            type: 'text',
          },
          {
            label: '补款方式',
            width: '140',
            prop: 'refundMethod',
            inProp: 'name',
            type: 'text',
          },
          {
            label: '补款账号',
            width: '160',
            prop: 'refund_account',
            type: 'text',
          },
          {
            label: '开户银行',
            width: '140',
            prop: 'bank',
            type: 'text',
          },
          {
            label: '省',
            width: '120',
            prop:'supplier',
            inProp: 'province',
            type: 'text',
          },
          {
            label: '市',
            width: '120',
            prop:'supplier',
            inProp: 'city',
            type: 'text',
          },
          {
            label: '区',
            width: '120',
            prop:'supplier',
            inProp: 'district',
            type: 'text',
          },
          {
            label: '创建人',
            width: '140',
            prop: 'creator',
            type: 'text',
          },
          {
            label: '创建时间',
            width: '140',
            prop: 'created_at',
            type: 'text',
          },
          {
            label: '备注',
            width: '300',
            prop: 'remark',
            type: 'text',
          },
          {
            label: '标记名称',
            width: '140',
            prop: 'mark_name',
            type: 'text'
          },
          {
            label: '标记人',
            width: '140',
            prop: 'marker',
            type: 'text',
          },
          {
            label: '标记时间',
            width: '140',
            prop: 'mark_time',
            type: 'text',
          }
        ],
        /*补件产品信息 */
        resupplyInfoData:[],//补件产品
        problemProData:[],//问题产品
        rejectReasonData:[],//驳回原因
        operationData:[],//操作记录
        progressData:[],//补件进度
        btmTableHead:[
          //补件产品,0
          [
            {
              label: '商品编码',
              width: '160',
              prop: "commodity_code",
              type: 'text'
            },
            {
              label: '规格编码',
              width: '160',
              prop: "spec_code",
              type: 'text'
            },
            {
              label: '商品简称',
              width: '160',
              prop:'short_name',
              type: 'text'
            },
            {
              label: '规格名称',
              width: '160',
              prop:'spec_name',
              type: 'text'
            },
            {
              label: '数量',
              width: '120',
              prop:'quantity',
              type: 'number'
            },
            {
              label: '商品成本',
              width: '120',
              prop:'cost',
              type: 'number'
            },
            {
              label: '实际售价',
              width: '120',
              prop:'actual_price',
              type: 'number'
            },
            {
              label: '备注',
              width: '200',
              prop:'remark',
              type: 'text'
            }
          ],
          //问题产品,1
          [
            {
              label: '商品编码',
              width: '160',
              prop: "commodity_code",
              type: 'text'
            },
            {
              label: '规格编码',
              width: '160',
              prop: "spec_code",
              type: 'text'
            },
            {
              label: '商品简称',
              width: '160',
              prop:'short_name',
              type: 'text'
            },
            {
              label: '规格名称',
              width: '160',
              prop:'spec_name',
              type: 'text'
            },
            {
              label: '供应商',
              width: '130',
              prop: 'supplier',
              type: 'text',
            },
            {
              label: '问题描述',
              width: '200',
              prop: 'description',
              type: 'text',
            }
          ],
          //图片信息,2
          [],
          //驳回原因,3
          [
            {
              label: '驳回人',
              width: '130',
              prop: 'rejecter',
              type: 'text',
            },
            {
              label: '驳回时间',
              width: '130',
              prop: 'reject_time',
              type: 'text',
            },
            {
              label: '驳回原因',
              width: '200',
              prop: 'reject_reason',
              type: 'text',
            }
          ],
          //操作记录，4
          [
            {
              label: '用户',
              width: '130',
              prop: 'username',
              type: 'text',
            },
            {
              label: '操作',
              width: '160',
              prop: 'operation',
              type: 'text',
            },
            {
              label: '操作描述',
              width: '200',
              prop: 'operation_description',
              type: 'text',
            },
            {
              label: '创建时间',
              width: '130',
              prop: 'create_time',
              type: 'text',
            }
          ],
          //补件进度,5
          [
            {
              label: '进度描述',
              width: '200',
              prop: 'progress_description',
              type: 'text',
            },
            {
              label: '创建人',
              width: '150',
              prop: 'creator',
              type: 'text',
            },
            {
              label: '创建时间',
              width: '200',
              prop: 'create_time',
              type: 'text',
            }
          ]
        ],
        orderId:'',
        options: regionDataPlus,
        //修改
        moreForms: true,
        updateMask:false,
        updateId:'',
        updateProRowIndex:'0',
        updateProIndex:'',
        updateProUpload:'upload0',
        updateProImgBtn:true,
        updateInfoRowIndex:'0',
        updateInfoIndex:'',
        updateInfoUpload:'upload0',
        updateInfoImgBtn:true,
        orderForm:{
          resupply_order_no:'',
          system_order_no:'',//系统单号或订单编号
          member_name:'',
          member_telephone:'',
          //补件方
          resupplieCategory:'',
          resupply_money:'',
          refundMethod:'',
          refund_account:'',
          bank:'',
          logistic:'',
          estimated_fee:'',
          compensate_fee:'',
          load_fee:'',
          supplier:'',
          resupply_reason:'',
          distributionMethod:'',
          fee_type:'',
          promise_time:'',
          remark:'',//客服备注
          province:'',
          address:'',//收货地址
          resupplieResponsible:'',
          distribution_company:'',//配送公司
          distribution_phone:'',//配送电话
          problemPro:[
            {
              commodity_code:'',
              spec_code:'',
              short_name:'',
              spec_name:'',
              supplier:'',
              description:''
            }
          ],
          resupplyInfo:[
            {
              commodity_code:'',
              spec_code:'',
              short_name:'',
              spec_name:'',
              quantity:'',
              cost:'',
              actual_price:'',
              type:'',
              remark:''
            }
          ],
        },
        orderHead:[
          {
            label:'补件单号',
            prop:'resupply_order_no',
            holder:'请输入补件单号',
            type:'text'
          },
          {
            label:'系统单号',
            prop:'system_order_no',
            holder:'请输入系统单号',
            type:'text'
          },
          {
            label:'买家姓名',
            prop:'member_name',
            holder:'请输入买家姓名',
            type:'text'
          },
          {
            label:'买家电话',
            prop:'member_telephone',
            holder:'请输入买家电话',
            type:'text'
          },
          /*{
            label:'补件方',
            prop:'resupplier',
            holder:'请输入补件方',
            type:'text'
          },*/
          {
            label:'补件类别',
            prop:'resupplieCategory',
            holder:'请选择补件类别',
            type:'select',
            //stateVal:'resupply_type_list'
          },
          {
            label:'补件金额',
            prop:'resupply_money',
            holder:'请输入补件金额',
            type:'number'
          },
          {
            label:'补款方式',
            prop:'refundMethod',
            holder:'请选择补款方式',
            type:'select',
           //stateVal:'refund_method_list'
          },
          {
            label:'补款账号',
            prop:'refund_account',
            holder:'请输入补款账号',
            type:'text'
          },
          {
            label:'开户银行',
            prop:'bank',
            holder:'请输入开户银行',
            type:'text'
          },
          {
            label:'物流公司',
            prop:'logistic',
            holder:'请选择物流公司',
            type:'select',
            //stateVal:'logistics_list'
            
          },
          {
            label:'预计运费',
            prop:'estimated_fee',
            holder:'请输入预计运费',
            type:'number'
          },
          {
            label:'物流补偿费',
            prop:'compensate_fee',
            holder:'请输入物流补偿费',
            type:'number'
          },
          {
            label:'送装费',
            prop:'load_fee',
            holder:'请输入送装费',
            type:'number'
          },
          {
            label:'供应商',
            prop:'supplier',
            holder:'请输入系统单号',
            type:'select',
            //stateVal:'supplier_list'
          },
          {
            label:'补件原因',
            prop:'resupply_reason',
            holder:'请输入系统单号',
            type:'textarea'
          },
          {
            label:'配送方式',
            prop:'distributionMethod',
            holder:'请选择配送方式',
            type:'select',
            //stateVal:'distribution_method_list'
          },
          {
            label:'运费类型',
            prop:'fee_type',
            holder:'请选择运费类型',
            type:'select',
            //stateVal:'fee_type_list'
          },
          {
            label:'承诺时间',
            prop:'promise_time',
            holder:'请输入承诺时间',
            type:'time'
          },
          {
            label:'客服备注',
            prop:'remark',
            holder:'请输入客服备注',
            type:'textarea'
          },
          {
            label:'省市区',
            prop:'province',
            holder:'请选择省市区',
            type:'cascader'
          },
          {
            label:'收货地址',
            prop:'address',
            holder:'请输入收货地址',
            type:'textarea'
          },
          {
            label:'补件责任方',
            prop:'resupplieResponsible',
            holder:'请选择补件责任方',
            type:'select',
            //stateVal: 'resupply_responsibility_list'
          },
          {
            label:'配送公司',
            prop:'distribution_company',
            holder:'请选择配送公司',
            type:'select',
            //stateVal: 'distribution_company_list'
          },
          {
            label:'配送电话',
            prop:'distribution_phone',
            holder:'请输入配送电话',
            type:'text'
          },
        ],
        orderRules:{
          resupply_order_no:[
            {required:true,message:'请输入补件单号',trigger:'blur'},
          ],
          system_order_no:[
            {required:true,message:'请输入系统单号',trigger:'blur'},
          ],
          resupplieCategory:[
            {required:true,message:'请输入补件类别',trigger:'blur'},
          ],
          logistic:[
            {required:true,message:'请输入物流公司',trigger:'blur'},
          ],
        },
        problemProHead:[
            {
              label: '商品编码',
              width: '160',
              prop: "commodity_code",
              type: 'text'
            },
            {
              label: '规格编码',
              width: '160',
              prop: "spec_code",
              type: 'text'
            },
            {
              label: '商品简称',
              width: '160',
              prop:'short_name',
              type: 'text'
            },
            {
              label: '规格名称',
              width: '160',
              prop:'spec_name',
              type: 'text'
            },
            {
              label: '供应商',
              width: '130',
              prop: 'supplier',
              type: 'text',
            },
            {
              label: '问题描述',
              width: '200',
              prop: 'description',
              type: 'textarea',
            }
        ],
        resupplyInfoHead:[
            {
              label: '商品编码',
              width: '160',
              prop: "commodity_code",
              type: 'text'
            },
            {
              label: '规格编码',
              width: '160',
              prop: "spec_code",
              type: 'text'
            },
            {
              label: '商品简称',
              width: '160',
              prop:'short_name',
              type: 'text'
            },
            {
              label: '规格名称',
              width: '160',
              prop:'spec_name',
              type: 'text'
            },
            {
              label: '数量',
              width: '120',
              prop:'quantity',
              type: 'number'
            },
            {
              label: '商品成本',
              width: '120',
              prop:'cost',
              type: 'number'
            },
            {
              label: '实际售价',
              width: '120',
              prop:'actual_price',
              type: 'number'
            },
            {
              label: '包件类型',
              width: '140',
              prop: 'package_type',
              type: 'select',
              stateVal: 'types'
            },
            {
              label: '备注',
              width: '200',
              prop:'remark',
              type: 'textarea'
            }
        ],
        //修改中添加补件商品
        addInfoMask:false,
        proInfoLoading:false,
        specInfoLoading:false,
        addInfoVal:{
          productInfo:[{
            productsImg:'',
            commodity_code:'',
            productsName:'',
            short_name:'',
            category_id:''
          }],
          specInfo:[{
            combination:'',
            specImg:'',
            spec_code:'',
            spec_name:'',
            cost:'',
            tb_price:'',
            standard_price:'',
            quantity:'',
            actual_price:'',
            package_type:'',
            standard_money:'',
            volume:'',
            package_quantity:'',
            stock_quantity:''
          }]
        },
        addInfoHead:[
          {
            label: '商品编码',
            prop: 'commodity_code',
            holder: '请输入商品编号',
            type: 'text',
          },
          {
            label: '规格编码',
            prop: 'spec_code',
            holder: '请输入规格编码',
            type: 'text',
          },
          {
            label: '商品类别',
            prop: 'category_id',
            holder: '请选择商品类别',
            type: 'select',
          },
          {
            label: '所属仓库',
            prop: 'warehouse_name',
            holder: '请选择所属仓库',
            type: 'select',
          }
        ],
        addInfoProHead:[
          {
            label: '产品图片',
            width: '120',
            prop: "productsImg",
            type: 'img'
          },
          {
            label: '商品编码',
            width: '120',
            prop: "commodity_code",
            type: 'text'
          },
          {
            label: '商品名称',
            width: '120',
            prop: "productsName",
            type: 'text'
          },
          {
            label: '商品简称',
            width: '120',
            prop: "short_name",
            type: 'text'
          },
          {
            label: '商品类别',
            width: '120',
            prop: "category_id",
            type: 'text'
          },
        ],
        addInfoSpecHead:[
          {
            label: '规格编码',
            width: '120',
            prop: "spec_code",
            type: 'text'
          },
          {
            label: '规格名称',
            width: '120',
            prop: "spec_name",
            type: 'text'
          },
          {
            label: '成本',
            width: '100',
            prop: "cost",
            type: 'number'
          },
          {
            label: '淘宝售价',
            width: '120',
            prop: "tb_price",
            type: 'number'
          },
          {
            label: '标准售价',
            width: '120',
            prop: "standard_price",
            type: 'number'
          },
          {
            label: '数量',
            width: '120',
            prop: "quantity",
            type: 'number'
          },
          {
            label: '实际售价',
            width: '120',
            prop: "actual_price",
            type: 'number'
          },
          {
            label: '包件类型',
            width: '120',
            prop: "package_type",
            type: 'text'
          },
          {
            label: '标准金额',
            width: '120',
            prop: "standard_money",
            type: 'number'
          },
          {
            label: '体积',
            width: '120',
            prop: "volume",
            type: 'number'
          },
          {
            label: '包件数',
            width: '120',
            prop: "package_quantity",
            type: 'number'
          },
          {
            label: '库存数',
            width: '120',
            prop: "stock_quantity",
            type: 'number'
          },
        ],
        //删除
        orderSelection:'',
        delArr:[],
        //提交
        //驳回
        //导出          
        //下载
        //还原
        //刷新
        orderLoading:true,
      }
    },
    computed: {
      resData:{
        get:function(){
          return this.$store.state.responseData
        },
        set:function(){}
      },
      urls:{
        get:function(){
          return this.$store.state.urls
        },
        set:function(){}
      }
    },
    methods:{
      test(){
        console.log(1);
      },
      /*展开 */
      toggleShow(){
        this.filterBox = !this.filterBox;
      },
      //重置筛选信息
      resets(){},
      //获取数据
      fetchData(){
        let index = this.activeName-0;
        switch(index){
          case 0:
           this.$fetch(this.urls.resupplieApplication+'/searchUnsubmited',{include:'resupplieCategory,resupplieResponsible,logistic,freightType,supplier,distributionMethod,refundMethod,resupplieOrderItem.resupplieOrder,resupplieProblemProduct.resupplieOrder'})
            .then(res=>{
              this.orderLoading=false;
              this.submitData=res.data;
              let pg = res.meta.pagination;
              this.$store.dispatch('currentPage', pg.current_page);
              this.$store.commit('PER_PAGE', pg.per_page);
              this.$store.commit('PAGE_TOTAL', pg.total);
              this.resupplyInfoData=this.problemProData=res.data[0]?res.data[0]['resupplieOrderItem'].data:[];
              this.problemProData=res.data[1]?res.data[1]['resupplieProblemProduct'].data:[];
            },err=>{
              if (err.response) {
                  let arr = err.response.data.errors;
                  let arr1 = [];
                  for (let i in arr) {
                    arr1.push(arr[i]);
                  }
                  this.$message.error(arr1.join(','));
                }
            })
        }
      },
      orderRClick(row){//点击上方tab的某行底部tab更新
        this.orderId=row.id;
        /*this.resupplyData=row[].data;
        this.problemProData=row[].data;
        this.rejectReasonData=row[].data;
        this.operationData=row[].data;
        this.progressData=row[].data;*/
      },
      //提交信息tab切换
      handleTabsClick(){
        this.newOpt[0].nClick=this.activeName=='1'?true:false;//修改
        this.newOpt[1].nClick=this.activeName=='1'?true:false;//删除
        this.newOpt[2].nClick=this.activeName=='1'?true:false;//提交
        this.newOpt[3].nClick=this.activeName=='0'?true:false;//驳回
      },
      /*补件信息tab */
      bottomTabsClick(){},
      //修改
      updateOrder(){
        if(this.orderSelection.length==0){
          this.$message({
            message:'没有选择要修改的数据',
            type:'warning'
          });
          return
        }else if(this.orderSelection.length>=2){
          this.$message({
            message:'只能修改单条数据',
            type:'warning'
          });
          return
        }else{
          this.updateMask=true;
        }
      },
      updateProCName({row,rowIndex}){
        row.index = rowIndex;
      },
      updateProRowClick(row){
        this.updateProRowIndex=row.index;
        this.updateProIndex='index'+row.index;
        //图片
      },
      updateProImgUpload(file){},
      beforeUploadProImg(file){},
      updateInfoImgUpload(file){},
      beforeUploadInfoImg(file){},
      updateInfoCName({row,rowIndex}){
        row.index = rowIndex;
      },
      updateInfoRowClick(row){
        this.updateInfoRowIndex=row.index;
        this.updateInfoIndex='index'+row.index;
      },
      addInfoDel(index){
        this.orderForm.resupplyInfo.splice(index,1);
        this.$message({
          message:'删除补件产品成功',
          type:'success'
        })
      },
      updateConfirm(){},
      updateCancel(){
        this.updateMask=false;
      },
      //修改中添加补件产品
      addInfo(){
        this.addInfoMask=true;
      },
      proInfoRowClick(row){},
      proInfoRowCName({row,rowIndex}){
        row.index = rowIndex;
      },
      specInfoRowClick(row){},
      specInfoRowCName({row,rowIndex}){
        row.index = rowIndex;
      },
      searchInfo(){},
      //删除
      //批量删除
      handleSelectionChange(val){
        if(val.length!=0){
          this.update=val[0].id;
        }else{
          this.updateId='';
        }
        this.orderSelection=val;
        let del=[];
        val.forEach(selectedItem =>{
          del.push(selectedItem.id);
        });
        this.delArr=del.join(',');
      },
      //提交
      //驳回
      //刷新
      refresh(){
        this.orderLoading=true;
        this.fetchData();
      }
    },
    mounted() {
      this.fetchData();
      this.$store.state.opt.opts = this.newOpt;
      this.$store.commit('change', this.newOpt);
      const that = this;
      $(window).resize(() => {
        return (() => {
          that.$store.state.opt.opts = that.newOpt;
          that.$store.commit('change', that.newOpt);
        })()
      })
    }
  }
</script>