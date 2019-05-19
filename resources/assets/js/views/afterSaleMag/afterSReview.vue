<template>
  <div>
    <!-- 查询 -->
    <div class="search_box">
      <div class="searchBox">
        <span>
          <label>系统单号</label>
          <el-input v-model="searchBox.after_sale_order_no" clearable @keyup.enter.native="handleQuery"></el-input>
        </span>
        <span>
          <label>订单号</label>
          <el-input v-model="searchBox.order_no" clearable @keyup.enter.native="handleQuery"></el-input>
        </span>
        <span>
          <label>会员昵称</label>
          <el-input v-model="searchBox.vip_name" clearable @keyup.enter.native="handleQuery"></el-input>
        </span>
        <span v-if="filterBox">
          <label>业务员</label>
          <el-select v-model="searchBox.user_id" clearable placeholder="请选择" @keyup.enter.native="handleQuery">
            <el-option v-for="item in searchBox.orderStaff" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </span>
        <span v-else>
          <el-button type="primary" @click="handleQuery">筛选</el-button>
          <el-button @click="resets" style="margin-right: 5px">重置</el-button>
          <span @click="toggleShow">
            <el-button type="text">展开</el-button>
            <i class="el-icon-arrow-down" style="color:#409EFF"></i>
          </span>
        </span>
      </div>
      <div v-if="filterBox" class="searchBox">
        <span>
          <label>客户姓名</label>
          <el-input v-model="searchBox.client_name" clearable @keyup.enter.native="handleQuery"></el-input>
        </span>
        <span>
          <label>售后分类</label>
          <el-select v-model="searchBox.after_sale_sort" clearable placeholder="请选择" @keyup.enter.native="handleQuery">
            <el-option v-for="item in searchBox.afterSaleSort" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </span>
        <span>
          <label>售后类型</label>
          <el-input v-model="searchBox.after_sale_type" clearable @keyup.enter.native="handleQuery"></el-input>
        </span>
      </div>
      <div v-if="filterBox" class="searchBox">
        <span>
          <label>联系方式</label>
          <el-input v-model="searchBox.order_phone" clearable @keyup.enter.native="handleQuery"></el-input>
        </span>
        <span>
          <label>创建时间</label>
          <el-date-picker v-model="searchBox.created_at" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
        </span>
        <span>
          <label>售后状态</label>
          <el-select v-model="searchBox.after_sale_status" clearable placeholder="请选择" @keyup.enter.native="handleQuery">
            <el-option v-for="item in searchBox.afterSaleStatus" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </span>
      </div>
      <div class="opt" v-if="filterBox" style="text-align: right">
        <el-button @click="handleQuery" type="primary">筛选</el-button>
        <el-button style="margin-right: 5px" @click="resets">重置</el-button>
        <span @click="toggleShow" style="display: inline">
          <el-button type="text">收起</el-button>
          <i class="el-icon-arrow-up" style="color:#409EFF"></i>
        </span>
      </div>
    </div>

    <!-- 数据 -->
    <el-tabs v-model="topActiveName" @tab-click="clickTopTabs">
      <el-tab-pane label="未提交" name="0">
        <el-table :data="unsubmitData" ref="unsubmitTable" fit height="300" v-loading="unsubmitLoading" @selection-change="handleSelectionChange" :row-class-name="afterSaleRCName" :row-style="rowStyle" @row-click="afterSReviewRowClick">
          <!-- 左侧选择框 -->
          <el-table-column type="selection" width="95" align="center" :checked="checkboxInit"></el-table-column>
          <!-- 中间表格 -->
          <el-table-column align="center" v-for="item in tableHead" :label="item.label" :width="item.width" :key="item.prop">
            <template slot-scope="scope">
              <span v-if="item.type=='select'">
                <span v-if="scope.row[item.prop]==''"></span>
                <span v-else-if="typeof scope.row[item.prop] == 'object' && item.nmProp">{{ scope.row[item.prop][item.nmProp] }}</span>
              </span>
              <span v-else-if="item.type=='checkbox'">
                <el-checkbox v-model="scope.row[item.prop]" disabled></el-checkbox>
              </span>
              <span v-else-if="item.type=='img'">
                <el-popover placement="right" trigger="hover" popper-class="picture_detail">
                  <img :src="scope.row[item.prop]">
                  <img slot="reference" :src="scope.row[item.prop]" :alt="scope.row[item.alt]">
                </el-popover>
              </span>
              <span v-else>{{ item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop] }}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="90" align="center" fixed="right">
            <template slot-scope="scope">
              <el-button size="mini" type="primary" @click="addSchedule(scope.row)">新增进度</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="已提交" name="1">
        <el-table :data="submitData" fit ref="submitTable" v-loading="submitLoading" @selection-change="handleSelectionChange" height="300" :row-class-name="afterSaleRCName" :row-style="rowStyle" @row-click="afterSReviewRowClick">
          <!-- 左侧选择框 -->
          <el-table-column type="selection" width="95" align="center" :checked="checkboxInit"></el-table-column>
          <!-- 中间表格 -->
          <el-table-column align="center" v-for="item in tableHead" :label="item.label" :width="item.width" :key="item.prop">
            <template slot-scope="scope">
              <span v-if="item.type=='select'">
                <span v-if="scope.row[item.prop]==''"></span>
                <span v-else-if="typeof scope.row[item.prop] == 'object' && item.nmProp">{{ scope.row[item.prop][item.nmProp] }}</span>
              </span>
              <span v-else-if="item.type=='checkbox'">
                <el-checkbox v-model="scope.row[item.prop]" disabled></el-checkbox>
              </span>
              <span v-else-if="item.type=='img'">
                <el-popover placement="right" trigger="hover" popper-class="picture_detail">
                  <img :src="scope.row[item.prop]">
                  <img slot="reference" :src="scope.row[item.prop]" :alt="scope.row[item.alt]">
                </el-popover>
              </span>
              <span v-else>{{ item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop] }}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="90" align="center" fixed="right">
            <template slot-scope="scope">
              <el-button size="mini" type="primary" @click="addSchedule(scope.row)">新增进度</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>

    <!-- 页码 -->

    <!--底部tabs删除-->
    <el-popover placement="top" width="160" v-model="showBtmDel" slot="tip">
      <p>确定删除该条数据？</p>
      <div style="text-align: right; margin: 0">
        <el-button size="mini" type="text" @click="cancelBtmD">取消</el-button>
        <el-button type="primary" size="mini" @click="confirmBtmD(delId)">确定</el-button>
      </div>
    </el-popover>

    <!-- 底部tabs -->
    <el-tabs v-model="bottomActiveName">
      <el-tab-pane label="售后进度" name="0">
        <el-table :data="scheduleData">
          <el-table-column v-for="item in btmTableHead[this.bottomActiveName]" :label="item.label" align="center" :width="item.width" :key="item.label">
            <template slot-scope="scope">
              <span v-if="scope.row[item.prop]">{{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}</span>
            </template>
          </el-table-column>
          <!-- 右侧删除键 -->
          <el-table-column label="操作" width="180" align="center" fixed="right">
            <template slot-scope="scope">
              <el-button size="mini" type="primary" @click="updateSchedule(scope.row,$event)">修改</el-button>
              <el-button size="mini" type="danger" @click="delBtmTab(scope.row,$event)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="售后图片" name="1">
        <el-table :data="defProData">
          <el-table-column v-for="item in btmTableHead[this.bottomActiveName]" :label="item.label" align="center" :width="item.width" :key="item.label">
            <template slot-scope="scope">
              <span v-if="item.type=='img'">
                <el-popover placement="right" trigger="hover" popper-class="picture_detail">
                  <img :src="scope.row[item.prop]">
                  <img slot="reference" :src="scope.row[item.prop]" :alt="scope.row[item.alt]">
                </el-popover>
              </span>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="退款明细" name="2">
        <el-table :data="Data">
          <el-table-column v-for="item in btmTableHead[this.bottomActiveName]" :label="item.label" align="center" :width="item.width" :key="item.label">
            <template slot-scope="scope">
              <span v-if="item.type=='select'">
                <span v-if="scope.row[item.prop]==''"></span>
                <span v-else-if="typeof scope.row[item.prop] == 'object' && item.inProp">{{scope.row[item.prop][item.inProp]}}</span>
              </span>
              <span v-else-if="item.type=='checkbox'">
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
      <el-tab-pane label="退货明细" name="3">
        <el-table :data="Data">
          <el-table-column v-for="item in btmTableHead[this.bottomActiveName]" :label="item.label" align="center" :width="item.width" :key="item.label">
            <template slot-scope="scope">
              <span v-if="item.type=='select'">
                <span v-if="scope.row[item.prop]==''"></span>
                <span v-else-if="typeof scope.row[item.prop] == 'object' && item.inProp">{{scope.row[item.prop][item.inProp]}}</span>
              </span>
              <span v-else-if="item.type=='checkbox'">
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
      <el-tab-pane label="补件明细" name="4">
        <el-table :data="Data">
          <el-table-column v-for="item in btmTableHead[this.bottomActiveName]" :label="item.label" align="center" :width="item.width" :key="item.label">
            <template slot-scope="scope">
              <span v-if="item.type=='select'">
                <span v-if="scope.row[item.prop]==''"></span>
                <span v-else-if="typeof scope.row[item.prop] == 'object' && item.inProp">{{scope.row[item.prop][item.inProp]}}</span>
              </span>
              <span v-else-if="item.type=='checkbox'">
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
      <el-tab-pane label="补发问题产品" name="5">
        <el-table :data="defProData">
          <el-table-column v-for="item in btmTableHead[this.bottomActiveName]" :label="item.label" align="center" :width="item.width" :key="item.label">
            <template slot-scope="scope">
              <span v-if="item.type=='select'">
                <span v-if="scope.row[item.prop]==''"></span>
                <span v-else-if="typeof scope.row[item.prop] == 'object' && item.inProp">{{scope.row[item.prop][item.inProp]}}</span>
              </span>
              <span v-else-if="item.type=='checkbox'">
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
      <el-tab-pane label="退款责任方" name="6">
        <el-table :data="refundData">
          <el-table-column v-for="item in btmTableHead[this.bottomActiveName]" :label="item.label" align="center" :width="item.width" :key="item.label">
            <template slot-scope="scope">
              <span v-if="item.type=='select'">
                <span v-if="scope.row[item.prop]==''"></span>
                <span v-else-if="typeof scope.row[item.prop] == 'object' && item.inProp">{{scope.row[item.prop][item.inProp]}}</span>
              </span>
              <span v-else-if="item.type=='checkbox'">
                <el-checkbox v-model="scope.row[item.prop]" disabled></el-checkbox>
              </span>
              <span v-else>
                <span v-if="scope.row[item.prop]">{{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}</span>
              </span>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="退货责任方" name="7">
        <el-table :data="returnData">
          <el-table-column v-for="item in btmTableHead[this.bottomActiveName]" :label="item.label" align="center" :width="item.width" :key="item.label">
            <template slot-scope="scope">
              <span v-if="item.type=='select'">
                <span v-if="scope.row[item.prop]==''"></span>
                <span v-else-if="typeof scope.row[item.prop] == 'object' && item.inProp">{{scope.row[item.prop][item.inProp]}}</span>
              </span>
              <span v-else-if="item.type=='checkbox'">
                <el-checkbox v-model="scope.row[item.prop]" disabled></el-checkbox>
              </span>
              <span v-else>
                <span v-if="scope.row[item.prop]">{{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}</span>
              </span>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="补件责任方" name="8">
        <el-table :data="patchData">
          <el-table-column v-for="item in btmTableHead[this.bottomActiveName]" :label="item.label" align="center" :width="item.width" :key="item.label">
            <template slot-scope="scope">
              <span v-if="item.type=='select'">
                <span v-if="scope.row[item.prop]==''"></span>
                <span v-else-if="typeof scope.row[item.prop] == 'object' && item.inProp">{{scope.row[item.prop][item.inProp]}}</span>
              </span>
              <span v-else-if="item.type=='checkbox'">
                <el-checkbox v-model="scope.row[item.prop]" disabled></el-checkbox>
              </span>
              <span v-else>
                <span v-if="scope.row[item.prop]">{{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}</span>
              </span>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="驳回原因" name="9">
        <el-table :data="Data">
          <el-table-column v-for="item in btmTableHead[this.bottomActiveName]" :label="item.label" align="center" :width="item.width" :key="item.label">
            <template slot-scope="scope">
              <span v-if="item.type=='select'">
                <span v-if="scope.row[item.prop]==''"></span>
                <span v-else-if="typeof scope.row[item.prop] == 'object' && item.inProp">{{scope.row[item.prop][item.inProp]}}</span>
              </span>
              <span v-else-if="item.type=='checkbox'">
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
      <el-tab-pane label="售后问题产品" name="10">
        <el-table :data="defProData">
          <el-table-column v-for="item in btmTableHead[this.bottomActiveName]" :label="item.label" align="center" :width="item.width" :key="item.label">
            <template slot-scope="scope">
              <span v-if="scope.row[item.prop]">{{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}</span>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="内部便签" name="11">
        <el-table :data="Data">
          <el-table-column v-for="item in btmTableHead[this.bottomActiveName]" :label="item.label" align="center" :width="item.width" :key="item.label">
            <template slot-scope="scope">
              <span v-if="item.type=='select'">
                <span v-if="scope.row[item.prop]==''"></span>
                <span v-else-if="typeof scope.row[item.prop] == 'object' && item.inProp">{{scope.row[item.prop][item.inProp]}}</span>
              </span>
              <span v-else-if="item.type=='checkbox'">
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
      <el-tab-pane label="操作记录" name="12">
        <el-table :data="Data">
          <el-table-column v-for="item in btmTableHead[this.bottomActiveName]" :label="item.label" align="center" :width="item.width" :key="item.label">
            <template slot-scope="scope">
              <span v-if="item.type=='select'">
                <span v-if="scope.row[item.prop]==''"></span>
                <span v-else-if="typeof scope.row[item.prop] == 'object' && item.inProp">{{scope.row[item.prop][item.inProp]}}</span>
              </span>
              <span v-else-if="item.type=='checkbox'">
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

    <!-- 修改 -->
    <el-dialog titie="修改责任金额" :visible.sync="updateMask" :class="{'more-forms':moreForms}">
      <el-button type="text">修改类型</el-button>
      <add-new :rule-form="ruleForm" :rules="rules" :add-arr="updateArr" :onlyInputs="true"></add-new>
      <el-tabs v-model="addActiveName" @tab-click="addHandleClick" id="elTabs" class="hidePart">
        <el-tab-pane label="退款责任方" name="0">
          <el-table :data="updateForm.refund_data" fit height="300" :row-class-name="updateCName" @row-click="updateRowClick">
            <el-table-column v-for="(item,index) in refundHead" :label="item.label" align="center" :width="item.width" :key="index">
              <template slot-scope="scope">
                <span v-if="updateProIndex =='index'+scope.$index">
                  <span v-if="item.type=='number'">
                    <el-input size="small" type="number" v-model.trim="scope.row[item.prop]"></el-input>
                  </span>
                  <span v-else-if="item.type == 'select'">
                    <el-select v-model="scope.row[item.prop]">
                      <span v-for="list in resData[item.stateVal]" :key="list.id">
                        <el-option :label="list.name?list.name:list.nick" :value="list.id"></el-option>
                      </span>
                    </el-select>
                  </span>
                  <span v-else>
                    <el-input size="small" v-model.trim="scope.row[item.prop]"></el-input>
                  </span>
                </span>
                <span v-else>
                  <span v-if="item.type=='select'">
                    <span v-if="scope.row[item.prop]==''"></span>
                    <span v-else>
                      <span v-for="(list,index) in resData[item.stateVal]" :key="index">
                        <span v-if="list.id==scope.row[item.prop]">{{list.name?list.name:list.nick}}</span>
                      </span>
                    </span>
                  </span>
                  <span v-else>{{scope.row[item.prop]}}</span>
                </span>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="退货责任方" name="1">
          <el-table :data="updateForm.return_data" fit height="300" :row-class-name="updateCName" @row-click="updateRowClick">
            <el-table-column v-for="(item,index) in returnHead" :label="item.label" align="center" :width="item.width" :key="index">
              <template slot-scope="scope">
                <span v-if="updateProIndex =='index'+scope.$index">
                  <span v-if="item.type=='number'">
                    <el-input size="small" type="number" v-model.trim="scope.row[item.prop]"></el-input>
                  </span>
                  <span v-else-if="item.type == 'select'">
                    <el-select v-model="scope.row[item.prop]">
                      <span v-for="list in resData[item.stateVal]" :key="list.id">
                        <el-option :label="list.name?list.name:list.nick" :value="list.id"></el-option>
                      </span>
                    </el-select>
                  </span>
                  <span v-else>
                    <el-input size="small" v-model.trim="scope.row[item.prop]"></el-input>
                  </span>
                </span>
                <span v-else>
                  <span v-if="item.type=='select'">
                    <span v-if="scope.row[item.prop]==''"></span>
                    <span v-else>
                      <span v-for="(list,index) in resData[item.stateVal]" :key="index">
                        <span v-if="list.id==scope.row[item.prop]">{{list.name?list.name:list.nick}}</span>
                      </span>
                    </span>
                  </span>
                  <span v-else>{{scope.row[item.prop]}}</span>
                </span>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="补件责任方" name="2">
          <el-table :data="updateForm.patch_data" fit height="300" :row-class-name="updateCName" @row-click="updateRowClick">
            <el-table-column v-for="(item,index) in patchHead" :label="item.label" align="center" :width="item.width" :key="index">
              <template slot-scope="scope">
                <span v-if="updateProIndex =='index'+scope.$index">
                  <span v-if="item.type=='number'">
                    <el-input size="small" type="number" v-model.trim="scope.row[item.prop]"></el-input>
                  </span>
                  <span v-else-if="item.type == 'select'">
                    <el-select v-model="scope.row[item.prop]">
                      <span v-for="list in resData[item.stateVal]" :key="list.id">
                        <el-option :label="list.name?list.name:list.nick" :value="list.id"></el-option>
                      </span>
                    </el-select>
                  </span>
                  <span v-else>
                    <el-input size="small" v-model.trim="scope.row[item.prop]"></el-input>
                  </span>
                </span>
                <span v-else>
                  <span v-if="item.type=='select'">
                    <span v-if="scope.row[item.prop]==''"></span>
                    <span v-else>
                      <span v-for="(list,index) in resData[item.stateVal]" :key="index">
                        <span v-if="list.id==scope.row[item.prop]">{{list.name?list.name:list.nick}}</span>
                      </span>
                    </span>
                  </span>
                  <span v-else>{{scope.row[item.prop]}}</span>
                </span>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
      <div slot="footer" class="dialog-footer clearfix">
        <div style="float: left">
          <el-button type="primary" @click="updateAddDuty">添加责任方</el-button>
        </div>
        <div style="float: right">
          <el-button type="primary" @click="confirmAdd">确定添加</el-button>
          <el-button @click="cancelAdd" type="warning">取消</el-button>
        </div>
      </div>
    </el-dialog>

    <!--底部tabs删除-->
    <el-popover placement="top" width="160" v-model="showBtmDel" slot="tip">
      <p>确定删除该条数据？</p>
      <div style="text-align: right; margin: 0">
        <el-button size="mini" type="text" @click="cancelBtmD">取消</el-button>
        <el-button type="primary" size="mini" @click="confirmBtmD(delId)">确定</el-button>
      </div>
    </el-popover>

    <!-- 新增进度 -->
    <el-dialog title="新增售后进度" :visible.sync="addScheduleMask">
      <el-form :model="scheduleRuleFormVal" :rules="scheduleRules" id="form">
        <el-form-item v-for="(item,index) in scheduleRuleFormHead" :key="index" :label="item.label" :prop="item.prop">
          <span v-if="item.type=='textarea'">
            <el-input type="textarea" v-model.trim="scheduleRuleFormVal[item.prop]" :placehode="item.holder"></el-input>
          </span>
          <span v-else-if="item.type=='DatePicker'">
            <el-date-picker v-model="scheduleRuleFormVal[item.prop]" type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期"></el-date-picker>
          </span>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer clearfix">
        <div style="float: right">
          <el-button type="primary" @click="addScheduleFrom">确定</el-button>
          <el-button @click="cancelAddSch">取消</el-button>
        </div>
      </div>
    </el-dialog>

    <!-- 修改进度 -->
    <el-dialog title="修改售后进度" :visible.sync="updateScheduleMask">
      <el-form :model="updateScheduleRuleFormVal" :rules="scheduleRules" id="form">
        <el-form-item v-for="(item,index) in scheduleRuleFormHead" :key="index" :label="item.label" :prop="item.prop">
          <span v-if="item.type=='textarea'">
            <el-input type="textarea" v-model.trim="updateScheduleRuleFormVal[item.prop]" :placehode="item.holder"></el-input>
          </span>
          <span v-else-if="item.type=='DatePicker'">
            <el-date-picker v-model="updateScheduleRuleFormVal[item.prop]" type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期"></el-date-picker>
          </span>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer clearfix">
        <div style="float: right">
          <el-button type="primary" @click="updateScheduleFrom(updateSchIndex)">确定</el-button>
          <el-button @click="cancelUpdateSch">取消</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newOpt: [
        {
          cnt: "修改",
          icon: "bf-change",
          ent: this.edit,
          nClick: true
        },
        {
          cnt: "驳回",
          icon: "bf-reject",
          ent: this.reject,
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
          ent: this.unAudit,
          nClick: true
        },
        {
          cnt: "结算",
          icon: "bf-finSettle",
          ent: this.finish,
          nClick: true
        },
        {
          cnt: "刷新",
          icon: "bf-refresh",
          ent: this.refresh
        }
      ],
      /* 搜索框 */
      filterBox: false,
      searchBox: {
        after_sale_order_no: "",
        order_no: "",
        vip_name: "",
        user_id: "",
        orderStaff: [{ label: "ceshi", value: 0 }],
        client_name: "",
        after_sale_sort: "",
        afterSaleSort: [{ label: "售后", value: 0 }, { label: "售中", value: 1 }],
        after_sale_type: "",
        order_phone: "",
        created_at: "",
        after_sale_status: "",
        afterSaleStatus: [{ label: "ceshi", value: 0 }]
      },
      /* 中间tabs */
      topActiveName: "0",
      checkboxInit: false,
      unsubmitData: [],
      submitData: [],
      tableHead: [
        {
          label: "系统单号",
          width: "200",
          prop: "after_sale_order_no",
          type: "text"
        },
        {
          label: "店铺名称",
          width: "150",
          prop: "shop_name",
          type: "text"
        },
        {
          label: "店铺分组",
          width: "150",
          prop: "shop_group",
          type: "text"
        },
        {
          label: "订单号",
          width: "200",
          prop: "order_no",
          type: "text"
        },
        {
          label: "会员昵称",
          width: "120",
          prop: "vip_name",
          type: "text"
        },
        {
          label: "客户姓名",
          width: "120",
          prop: "client_name",
          type: "text"
        },
        {
          label: "补件责任方",
          width: "120",
          prop: "parts_duty",
          type: "text"
        },
        {
          label: "供应商",
          width: "120",
          prop: "suppliers_id",
          type: "text"
        },
        {
          label: "物流公司",
          width: "150",
          prop: "logistic_name",
          type: "text"
        },
        {
          label: "物流单号",
          width: "200",
          prop: "logistics_id",
          type: "text"
        },
        {
          label: "发货时间",
          width: "200",
          prop: "deliver_date",
          type: "text"
        },
        {
          label: "业务员",
          width: "150",
          prop: "user",
          inProp: "username",
          type: "text"
        },
        {
          label: "售后处理人",
          width: "150",
          prop: "after_sale_person",
          type: "text"
        },
        {
          label: "订单金额",
          width: "200",
          prop: "order_amount",
          type: "text"
        },
        {
          label: "售后类型",
          width: "200",
          prop: "after_sale_type",
          type: "text"
        },
        {
          label: "售后状态",
          width: "150",
          prop: "after_sale_status",
          type: "number"
        },
        {
          label: "售后分类",
          width: "130",
          prop: "after_sale_group",
          type: "text"
        },
        {
          label: "联系方式",
          width: "150",
          prop: "order_phone",
          type: "text"
        },
        {
          label: "问题描述",
          width: "200",
          prop: "problem_description",
          type: "text"
        },
        {
          label: "客服要求",
          width: "200",
          prop: "customer_service_requirements",
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
          label: "地址",
          width: "180",
          prop: "receiver_address",
          type: "text"
        },
        {
          label: "创建日期",
          width: "180",
          prop: "created_at",
          type: "text"
        },
        {
          label: "备注",
          width: "180",
          prop: "order_remark",
          type: "text"
        },
        {
          label: "补件信息",
          width: "180",
          prop: "rfe_information",
          type: "text"
        },
        {
          label: "驳回",
          width: "90",
          prop: "is_reject",
          type: "checkbox"
        },
        {
          label: "补件拆分",
          width: "150",
          prop: "patch_split",
          type: "text"
        },
        {
          label: "需要退款",
          width: "90",
          prop: "is_refund",
          type: "checkbox"
        },
        {
          label: "需要退货",
          width: "90",
          prop: "is_return",
          type: "checkbox"
        },
        {
          label: "需发补件",
          width: "90",
          prop: "is_patch",
          type: "checkbox"
        },
        {
          label: "已解决",
          width: "90",
          prop: "is_solve",
          type: "checkbox"
        }
      ],
      // 数据
      submitData: [],
      unsubmitData: [],
      submitLoading: true,
      unsubmitLoading: true,
      // 新增售后进度
      addScheduleMask: false,
      updateScheduleMask: false,
      scheduleFrom: {},
      // 底部tabs
      addId: "",
      bottomActiveName: "0",
      showBtmDel: false,
      scheduleData: [],
      defProData: [],
      refundData: [],
      returnData: [],
      patchData: [],
      scheduleRuleFormVal: {
        schedule_description: "",
        subscribed_at: ""
      },
      updateScheduleRuleFormVal: {
        after_sale_id: "",
        schedule_description: "",
        subscribed_at: ""
      },
      scheduleRules: {
        schedule_description: [
          { required: true, message: "进度描述必填", trigger: "blur" }
        ]
      },
      scheduleRuleFormHead: [
        {
          label: "进度描述",
          holder: "请输入进度描述",
          prop: "schedule_description",
          type: "textarea"
        },
        {
          label: "预约时间",
          prop: "subscribed_at",
          type: "DatePicker"
        }
      ],
      btmTableHead: [
        [
          {
            label: "进度描述",
            width: "180",
            prop: "schedule_description",
            type: "text"
          },
          {
            label: "创建人",
            width: "180",
            prop: "user",
            inProp: "username",
            type: "text"
          },
          {
            label: "业务日期",
            width: "180",
            prop: "created_at",
            type: "text"
          },
          {
            label: "预约时间",
            width: "180",
            prop: "subscribed_at",
            type: "text"
          }
        ],
        [
          {
            label: "售后图片",
            width: "120",
            prop: "img_url",
            type: "img"
          }
        ],
        [],
        [],
        [],
        [],
        [
          {
            label: "责任方",
            prop: "refund_party",
            width: "180",
            type: "text"
          },
          {
            label: "责任方姓名",
            prop: "refund_party_name",
            width: "180",
            type: "text"
          },
          {
            label: "责任金额",
            prop: "refund_amount",
            width: "180",
            type: "number"
          }
        ],
        [
          {
            label: "责任方",
            prop: "return_party",
            width: "180",
            type: "text"
          },
          {
            label: "责任方姓名",
            prop: "return_party_name",
            width: "180",
            type: "text"
          },
          {
            label: "责任金额",
            prop: "return_amount",
            width: "180",
            type: "number"
          }
        ],
        [
          {
            label: "责任方",
            prop: "patch_party",
            width: "180",
            type: "text"
          },
          {
            label: "责任方姓名",
            prop: "patch_party_name",
            width: "180",
            type: "text"
          },
          {
            label: "责任金额",
            prop: "patch_amount",
            width: "180",
            type: "number"
          }
        ],
        [
          {
            label: "驳回人",
            prop: "reject_people",
            width: "180",
            type: "text"
          },
          {
            label: "驳回原因",
            prop: "reject_reason",
            width: "250",
            type: "text"
          },
          {
            label: "驳回时间",
            prop: "reject_at",
            width: "180",
            type: "text"
          }
        ],
        [
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
            label: "购买数量",
            prop: "buy_number",
            width: "120",
            type: "text"
          },
          {
            label: "供应商",
            prop: "supplier_id",
            width: "150",
            type: "text"
          }
        ],
        [
          {
            label: "主题",
            width: "150",
            prop: "theme",
            type: "text"
          },
          {
            label: "用户",
            width: "150",
            prop: "user",
            type: "text"
          },
          {
            label: "内容",
            width: "150",
            prop: "content",
            type: "text"
          },
          {
            label: "主题",
            width: "150",
            prop: "proposed_at",
            type: "text"
          }
        ],
        [
          {
            label: "用户",
            width: "150",
            prop: "user",
            type: "text"
          },
          {
            label: "操作",
            width: "150",
            prop: "operate",
            type: "text"
          },
          {
            label: "操作描述",
            width: "150",
            prop: "operate_description",
            type: "text"
          },
          {
            label: "创建时间",
            width: "150",
            prop: "created_at",
            type: "text"
          }
        ]
      ],
      // 修改
      moreForms: true,
      selection: "",
      updateMask: false,
      updateId: "",
      updateIndex: "",
      updateSchIndex: "",
      updateForm: {
        refund_data: [],
        return_data: [],
        patch_data: []
      },
      refundHead: [
        {
          label: "责任方",
          width: "200",
          prop: "refund_party",
          stateVal: "responsible_party",
          type: "text"
        },
        {
          label: "责任方姓名",
          width: "200",
          prop: "refund_party_name",
          type: "text"
        },
        {
          label: "责任金额",
          width: "200",
          prop: "refund_amount",
          type: "number"
        }
      ],
      returnHead: [
        {
          label: "责任方",
          width: "200",
          prop: "return_party",
          stateVal: "responsible_party",
          type: "text"
        },
        {
          label: "责任方姓名",
          width: "200",
          prop: "return_party_name",
          type: "text"
        },
        {
          label: "责任金额",
          width: "200",
          prop: "return_amount",
          type: "number"
        }
      ],
      patchHead: [
        {
          label: "责任方",
          width: "200",
          prop: "patch_party",
          stateVal: "responsible_party",
          type: "text"
        },
        {
          label: "责任方姓名",
          width: "200",
          prop: "patch_party_name",
          type: "text"
        },
        {
          label: "责任金额",
          width: "200",
          prop: "patch_amount",
          type: "number"
        }
      ],
      componentShowChg: true,
      updateCompUpload: "upload0",
      updateRwIndex: "0",
      ruleForm: {
        is_refund: false,
        is_return: false,
        is_patch: false
      },
      rules: {},
      updateArr: [
        {
          label: "退款责任方",
          prop: "is_refund",
          holder: "请选择状态",
          type: "checkbox"
        },
        {
          label: "退货责任方",
          prop: "is_return",
          holder: "请选择状态",
          type: "checkbox"
        },
        {
          label: "补件责任方",
          prop: "is_patch",
          holder: "请选择状态",
          type: "checkbox"
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
  methods: {
    /* 测试 */
    test() {
      this.$message({
        message: "操作成功",
        type: "success"
      });
    },
    /* 搜索框 */
    handleQuery() {
      console.log(666);
    },
    toggleShow() {
      this.filterBox = !this.filterBox;
    },
    resets() {
      this.searchBox = {
        after_sale_order_no: "",
        order_no: "",
        vip_name: "",
        user_id: "",
        orderStaff: [{ label: "ceshi", value: 0 }],
        client_name: "",
        after_sale_sort: "",
        afterSaleSort: [{ label: "售后", value: 0 }, { label: "售中", value: 1 }],
        after_sale_type: "",
        order_phone: "",
        created_at: "",
        after_sale_status: "",
        afterSaleStatus: [{ label: "ceshi", value: 0 }]
      };
    },
    /* 中间tabs */
    clickTopTabs() {
      this.selection = "";
      this.fetchAfterSaleData();
    },
    fetchAfterSaleData() {
      let index = this.topActiveName - 0;
      switch (index) {
        case 0:
          this.newOpt[0].nClick = true;
          this.newOpt[1].nClick = false;
          this.newOpt[2].nClick = false;
          this.newOpt[3].nClick = true;
          this.newOpt[4].nClick = true;
          this.$fetch(this.urls.aftersale, {
            order_status: 30,
            include:
              "afterSaleSchedules.user,afterSaleDefPros,user,afterSaleRefunds,afterSaleReturns,afterSalePatchs"
          }).then(
            res => {
              this.unsubmitLoading = false;
              this.unsubmitData = res.data;
              this.scheduleData = res.data[0]
                ? res.data[0]["afterSaleSchedules"].data
                : [];
              this.defProData = res.data[0]
                ? res.data[0]["afterSaleDefPros"].data
                : [];
              this.refundData = res.data[0]
                ? res.data[0]["afterSaleRefunds"].data
                : [];
              this.returnData = res.data[0]
                ? res.data[0]["afterSaleReturns"].data
                : [];
              this.patchData = res.data[0]
                ? res.data[0]["afterSalePatchs"].data
                : [];
              this.checkboxInit = false;
              let pg = res.meta.pagination;
              this.$store.dispatch("currentPage", pg.current_page);
              this.$store.commit("PER_PAGE", pg.per_page);
              this.$store.commit("PAGE_TOTAL", pg.total);
              this.$store.dispatch("aftersalestate", "/aftersalestate");
              this.$store.dispatch("aftersaletype", "/aftersaletype");
            },
            err => {
              if (err.response) {
                let arr = err.response.data.errors;
                let arr1 = [];
                for (let i in arr) {
                  arr1.push(arr[i]);
                }
                let str = arr1.join(",");
                this.$message.error({
                  message: str
                });
              }
            }
          );
          break;
        case 1:
          this.newOpt[0].nClick = false;
          this.newOpt[1].nClick = true;
          this.newOpt[2].nClick = true;
          this.newOpt[3].nClick = false;
          this.newOpt[4].nClick = false;
          this.$fetch(this.urls.aftersale, {
            order_status: 40,
            include:
              "afterSaleSchedules.user,afterSaleDefPros,user,afterSaleRefunds,afterSaleReturns,afterSalePatchs"
          }).then(
            res => {
              this.submitLoading = false;
              this.submitData = res.data;
              this.scheduleData = res.data[0]
                ? res.data[0]["afterSaleSchedules"].data
                : [];
              this.defProData = res.data[0]
                ? res.data[0]["afterSaleDefPros"].data
                : [];
              this.refundData = res.data[0]
                ? res.data[0]["afterSaleRefunds"].data
                : [];
              this.returnData = res.data[0]
                ? res.data[0]["afterSaleReturns"].data
                : [];
              this.patchData = res.data[0]
                ? res.data[0]["afterSalePatchs"].data
                : [];
              this.checkboxInit = false;
              let pg = res.meta.pagination;
              this.$store.dispatch("currentPage", pg.current_page);
              this.$store.commit("PER_PAGE", pg.per_page);
              this.$store.commit("PAGE_TOTAL", pg.total);
              this.$store.dispatch("aftersalestate", "/aftersalestate");
              this.$store.dispatch("aftersaletype", "/aftersaletype");
            },
            err => {
              if (err.response) {
                let arr = err.response.data.errors;
                let arr1 = [];
                for (let i in arr) {
                  arr1.push(arr[i]);
                }
                let str = arr1.join(",");
                this.$message.error({
                  message: str
                });
              }
            }
          );
          break;
      }
    },
    afterSaleRCName({ row, rowIndex }) {
      row.index = rowIndex;
    },
    afterSReviewRowClick(row) {
      this.curRowId = row.id;
      this.curRowData = row;
      this.scheduleData = row["afterSaleSchedules"].data;
      this.refundData = row["afterSaleRefunds"].data;
      this.returnData = row["afterSaleReturns"].data;
      this.patchData = row["afterSalePatchs"].data;
      this.defProData = row["afterSaleDefPros"].data;
    },
    handleSelectionChange(val) {
      if (val.length != 0) {
        this.updateId = val[0].id;
        this.refundForm = {};
        this.returnForm = {};
        this.patchForm = {};
      } else {
        this.updateId = "";
      }
      this.selection = val;
      let del = [];
      val.forEach(selectedItem => {
        del.push(selectedItem.id);
      });
      /*拿到当前id*/
      this.checkboxId = val.length > 0 ? val[val.length - 1].id : "";
      this.curRowData = val.length > 0 ? val[val.length - 1] : "";
      this.delArr = del.join(",");
    },
    // 底部tabs
    cancelBtmD() {
      this.showBtmDel = false;
      this.$message({
        message: "取消删除",
        type: "info"
      });
    },
    confirmBtmD(id) {
      let index = this.bottomActiveName - 0;
      switch (index) {
        case 0:
          this.$del(this.urls.aftersaleschedule + "/" + id).then(
            () => {
              this.$message({
                message: "删除成功",
                type: "success"
              });
              this.showBtmDel = false;
              this.refresh();
            },
            err => {
              if (err.response) {
                this.showBtmDel = false;
                let arr = err.response.data.errors;
                let arr1 = [];
                for (let i in arr) {
                  arr1.push(arr[i]);
                }
                let str = arr1.join(",");
                this.$message.error({
                  message: str
                });
              }
            }
          );
          break;
      }
    },
    delBtmTab(row, e) {
      this.showBtmDel = true;
      $(".el-popper").css({ left: e.x - 100 + "px", top: e.y - 125 + "px" });
      this.delId = row.id;
    },
    // 新增售后进度
    addSchedule(row) {
      this.addScheduleMask = true;
      this.addId = row.id;
    },
    cancelAddSch() {
      this.addScheduleMask = false;
      this.$message({
        message: "取消新增进度",
        type: "info"
      });
    },
    addScheduleFrom() {
      let id = this.addId;
      let data = this.scheduleRuleFormVal;
      let submitData = {
        after_sale_id: id,
        schedule_description: data.schedule_description,
        subscribed_at: data.subscribed_at
      };
      this.$post(this.urls.aftersaleschedule, submitData).then(
        () => {
          this.$message({
            message: "新建售后进度成功",
            type: "success"
          });
          this.addScheduleMask = false;
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
            this.$message.error({
              message: str
            });
          }
        }
      );
    },
    // 修改售后进度
    updateSchedule(row) {
      this.updateScheduleMask = true;
      this.updateSchIndex = row.id;
      this.$fetch(this.urls.aftersaleschedule + "/" + this.updateSchIndex).then(
        res => {
          this.updateScheduleRuleFormVal = {
            after_sale_id: res.after_sale_id,
            schedule_description: res.schedule_description,
            subscribed_at: res.subscribed_at
          };
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
    updateScheduleFrom(row) {
      this.$patch(
        this.urls.aftersaleschedule + "/" + this.updateSchIndex,
        this.updateScheduleRuleFormVal
      ).then(
        () => {
          this.$message({
            message: "修改售后进度成功",
            type: "success"
          });
          this.updateScheduleMask = false;
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
            this.$message.error({
              message: str
            });
          }
        }
      );
    },
    cancelUpdateSch() {
      this.updateScheduleMask = false;
      this.$message({
        message: "取消新增进度",
        type: "info"
      });
    },
    // 修改
    updateCName({ row, rowIndex }) {
      row.index = rowIndex;
    },
    updateAddDuty() {
      let index = this.addActiveName - 0;
      switch (index) {
        case 0:
          if (this.ruleForm.is_refund == true) {
            let refundCombKey = {
              after_sale_id: this.updateId,
              refund_party: "",
              refund_party_name: "",
              refund_amount: ""
            };
            if (
              this.updateForm.refund_data.length > 0 &&
              !this.updateForm.refund_data[
                this.updateForm.refund_data.length - 1
              ].refund_party
            ) {
              this.$message({
                message: "责任方为空时不能添加新责任方",
                type: "info"
              });
            } else {
              this.updateForm.refund_data.push(refundCombKey);
              this.updateRwIndex = this.updateForm.refund_data.length - 1;
              this.updateCompUpload = "upload" + this.updateRwIndex;
              this.updateProIndex = "index" + this.updateRwIndex;
            }
          } else {
            this.$message({
              message: "需先选择退款责任方",
              type: "info"
            });
          }
          break;
        case 1:
          if (this.ruleForm.is_return == true) {
            let returnCombKey = {
              after_sale_id: this.updateId,
              return_party: "",
              return_party_name: "",
              return_amount: ""
            };
            if (
              this.updateForm.return_data.length > 0 &&
              !this.updateForm.return_data[
                this.updateForm.return_data.length - 1
              ].return_party
            ) {
              this.$message({
                message: "责任方为空时不能添加新责任方",
                type: "info"
              });
            } else {
              this.updateForm.return_data.push(returnCombKey);
              this.updateRwIndex = this.updateForm.return_data.length - 1;
              this.updateCompUpload = "upload" + this.updateRwIndex;
              this.updateProIndex = "index" + this.updateRwIndex;
            }
          } else {
            this.$message({
              message: "需先选择退货责任方",
              type: "info"
            });
          }
          break;
        case 2:
          if (this.ruleForm.is_patch == true) {
            let patchCombKey = {
              after_sale_id: this.updateId,
              patch_party: "",
              patch_party_name: "",
              patch_amount: ""
            };
            if (
              this.updateForm.patch_data.length > 0 &&
              !this.updateForm.patch_data[this.updateForm.patch_data.length - 1]
                .patch_party
            ) {
              this.$message({
                message: "责任方为空时不能添加新责任方",
                type: "info"
              });
            } else {
              this.updateForm.patch_data.push(patchCombKey);
              this.updateRwIndex = this.updateForm.patch_data.length - 1;
              this.updateCompUpload = "upload" + this.updateRwIndex;
              this.updateProIndex = "index" + this.updateRwIndex;
            }
          } else {
            this.$message({
              message: "需先选择补件责任方",
              type: "info"
            });
          }
          break;
      }
    },
    updateRowClick(row) {
      this.updateRwIndex = row.index;
      this.updateProIndex = "index" + row.index;
      if (row.img_url) {
        this.updateChgBtn = "show" + row.index;
      } else {
        this.updateChgBtn = "upload" + row.index;
      }
    },
    cancelAdd() {
      this.updateMask = false;
      this.$message({
        message: "取消添加",
        type: "info"
      });
    },
    confirmAdd() {
      if (this.ruleForm.is_refund) {
        this.updateForm.refund_data.map(item => {
          this.$post(this.urls.aftersalerefund, item).then(
            () => {},
            err => {
              if (err.response) {
                let arr = err.response.data.errors;
                let arr1 = [];
                for (let i in arr) {
                  arr1.push(arr[i]);
                }
                let str = arr1.join(",");
                this.$message.error({
                  message: str
                });
              }
            }
          );
        });
        this.updateMask = false;
        this.updateForm.refund_data = [];
        this.refresh();
      }
      if (this.ruleForm.is_return) {
        this.updateForm.return_data.map(item => {
          this.$post(this.urls.aftersalereturn, item).then(
            () => {},
            err => {
              if (err.response) {
                let arr = err.response.data.errors;
                let arr1 = [];
                for (let i in arr) {
                  arr1.push(arr[i]);
                }
                let str = arr1.join(",");
                this.$message.error({
                  message: str
                });
              }
            }
          );
        });
        this.updateMask = false;
        this.updateForm.return_data = [];
        this.refresh();
      }
      if (this.ruleForm.is_patch) {
        this.updateForm.patch_data.map(item => {
          this.$post(this.urls.aftersalepatch, item).then(
            () => {},
            err => {
              if (err.response) {
                let arr = err.response.data.errors;
                let arr1 = [];
                for (let i in arr) {
                  arr1.push(arr[i]);
                }
                let str = arr1.join(",");
                this.$message.error({
                  message: str
                });
              }
            }
          );
        });
        this.updateMask = false;
        this.refresh();
      }
      if (
        !this.ruleForm.is_refund &&
        !this.ruleForm.is_return &&
        !this.ruleForm.is_patch
      ) {
        this.$message({
          message: "没有选中责任方",
          type: "warning"
        });
      }
      this.updateForm.patch_data = [];
    },
    edit() {
      if (this.newOpt[0].nClick) {
        return;
      } else {
        if (this.selection.length == 0) {
          this.$message({
            message: "没有选择要修改的数据",
            type: "warning"
          });
          return;
        } else if (this.selection.length >= 2) {
          this.$message({
            message: "只能修改单条数据",
            type: "warning"
          });
          return;
        } else {
          this.updateMask = true;
          this.updateIndex = "";
          this.$fetch(this.urls.aftersale + "/" + this.updateId).then(
            res => {},
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
    // 审核
    handleAudit() {
      if (this.newOpt[2].nClick) {
        return;
      } else {
        let id = this.checkboxId ? this.checkboxId : this.curRowId;
        this.$put(this.urls.aftersale + "/" + id + "/twoaudit").then(
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
    // 退审
    unAudit() {
      if (this.newOpt[3].nClick) {
        return;
      } else {
        let id = this.checkboxId ? this.checkboxId : this.curRowId;
        this.$put(this.urls.aftersale + "/" + id + "/untwoaudit").then(
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
    // 驳回
    reject() {
      if (this.newOpt[1].nClick) {
        return;
      } else {
        let id = this.checkboxId ? this.checkboxId : this.curRowId;
        this.$put(this.urls.aftersale + "/" + id + "/reject").then(
          () => {
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
      }
    },
    // 结算
    finish() {
      if (this.newOpt[4].nClick) {
        return;
      } else {
        let id = this.checkboxId ? this.checkboxId : this.curRowId;
        this.$put(this.urls.aftersale + "/" + id + "/finish").then(
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
      }
    },
    refresh() {
      this.submitLoading = true;
      this.unsubmitLoading = true;
      this.checkboxInit = false;
      this.fetchAfterSaleData();
    }
  },
  mounted() {
    this.fetchAfterSaleData();
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