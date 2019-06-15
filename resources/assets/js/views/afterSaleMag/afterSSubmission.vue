<template>
  <div>
    <!-- 查询 -->
    <div class="search_box">
      <div class="searchBox">
        <span>
          <label>系统单号</label>
          <el-input
            v-model="searchBox.after_sale_order_no"
            clearable
            @keyup.enter.native="handleQuery"
          ></el-input>
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
          <el-select v-model="searchBox.user_id" clearable placeholder="请选择">
                <span v-for="list in addSubData['user']" :key="list.id">
                  <el-option :label="list['username']" :value="list.id"></el-option>
                </span>
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
          <label>售后状态</label>
          <el-select
            v-model="searchBox.after_sale_status"
            clearable
            placeholder="请选择"
            @keyup.enter.native="handleQuery"
          >
            <el-option
              v-for="item in resData.aftersalestate"
              :key="item.value"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </span>
        <span>
          <label>售后类型</label>
          <el-select
            v-model="searchBox.after_sale_type"
            clearable
            placeholder="请选择"
            @keyup.enter.native="handleQuery"
          >
            <el-option
              v-for="item in searchBox.afterSaleSort"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </span>
        </div>
        <div v-if="filterBox" class="searchBox">
        <span>
          <label>联系方式</label>
          <el-input v-model="searchBox.order_phone" clearable @keyup.enter.native="handleQuery"></el-input>
        </span>
        <span>
          <label>创建时间</label>
          <el-date-picker
            v-model="searchBox.created_at"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
        </span>
        <span>
          <label>售后分类</label>
          <el-select
            v-model="searchBox.after_sale_group"
            clearable
            placeholder="请选择"
            @keyup.enter.native="handleQuery"
          >
            <el-option
              v-for="item in resData.aftersaletype"
              :key="item.value"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </span>
      </div>
      <div class="opt" v-if="filterBox" style="text-align: right">
        <el-button type="primary" @click="handleQuery">筛选</el-button>
        <el-button @click="resets" style="margin-right: 5px">重置</el-button>
        <span @click="toggleShow" style="display: inline">
          <el-button type="text">收起</el-button>
          <i class="el-icon-arrow-up" style="color:#409EFF"></i>
        </span>
      </div>
    </div>

    <!-- 数据 -->
    <el-tabs v-model="topActiveName" @tab-click="clickTopTabs">
      <el-tab-pane label="未提交" name="0">
        <el-table
          :data="unsubmitData"
          ref="unsubmitTable"
          fit
          height="300"
          v-loading="unsubmitLoading"
          @selection-change="handleSelectionChange"
          :row-class-name="afterSaleRCName"
          @row-click="afterSSubmissionRowClick"
        >
          <!-- 左侧选择框 -->
          <el-table-column type="selection" width="95" align="center" :checked="checkboxInit"></el-table-column>
          <!-- 中间表格 -->
          <el-table-column
            align="center"
            v-for="item in tableHead"
            :label="item.label"
            :width="item.width"
            :key="item.prop"
          >
            <template slot-scope="scope">
              <span v-if="item.type=='select'">
                <span v-if="scope.row[item.prop]==''"></span>
                <span
                  v-else-if="typeof scope.row[item.prop] == 'object' && item.inProp"
                >{{ scope.row[item.prop][item.inProp] }}</span>
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
        <el-table
          :data="submitData"
          fit
          ref="submitTable"
          v-loading="submitLoading"
          @selection-change="handleSelectionChange"
          height="300"
          :row-class-name="afterSaleRCName"
          @row-click="afterSSubmissionRowClick"
        >
          <!-- 左侧选择框 -->
          <el-table-column type="selection" width="95" align="center" :checked="checkboxInit"></el-table-column>
          <!-- 中间表格 -->
          <el-table-column
            align="center"
            v-for="item in tableHead"
            :label="item.label"
            :width="item.width"
            :key="item.prop"
          >
            <template slot-scope="scope">
              <span v-if="item.type=='select'">
                <span v-if="scope.row[item.prop]==''"></span>
                <span
                  v-else-if="typeof scope.row[item.prop] == 'object' && item.inProp"
                >{{ scope.row[item.prop][item.inProp] }}</span>
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
    <Pagination :page-url="this.urls.purchases"></Pagination>

    <!-- 底部tabs -->
    <el-tabs v-model="bottomActiveName">
      <el-tab-pane label="售后进度" name="0">
        <el-table :data="scheduleData">
          <el-table-column
            v-for="item in btmTableHead[this.bottomActiveName]"
            :label="item.label"
            align="center"
            :width="item.width"
            :key="item.label"
          >
            <template slot-scope="scope">
              <span
                v-if="scope.row[item.prop]"
              >{{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}</span>
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
          <el-table-column
            v-for="item in btmTableHead[this.bottomActiveName]"
            :label="item.label"
            align="center"
            :width="item.width"
            :key="item.label"
          >
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
          <el-table-column
            v-for="item in btmTableHead[this.bottomActiveName]"
            :label="item.label"
            align="center"
            :width="item.width"
            :key="item.label"
          >
            <template slot-scope="scope">
              <span v-if="item.type=='select'">
                <span v-if="scope.row[item.prop]==''"></span>
                <span
                  v-else-if="typeof scope.row[item.prop] == 'object' && item.inProp"
                >{{scope.row[item.prop][item.inProp]}}</span>
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
                <span
                  v-if="scope.row[item.prop]"
                >{{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}</span>
              </span>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="退货明细" name="3">
        <el-table :data="Data">
          <el-table-column
            v-for="item in btmTableHead[this.bottomActiveName]"
            :label="item.label"
            align="center"
            :width="item.width"
            :key="item.label"
          >
            <template slot-scope="scope">
              <span v-if="item.type=='select'">
                <span v-if="scope.row[item.prop]==''"></span>
                <span
                  v-else-if="typeof scope.row[item.prop] == 'object' && item.inProp"
                >{{scope.row[item.prop][item.inProp]}}</span>
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
                <span
                  v-if="scope.row[item.prop]"
                >{{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}</span>
              </span>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="补件明细" name="4">
        <el-table :data="Data">
          <el-table-column
            v-for="item in btmTableHead[this.bottomActiveName]"
            :label="item.label"
            align="center"
            :width="item.width"
            :key="item.label"
          >
            <template slot-scope="scope">
              <span v-if="item.type=='select'">
                <span v-if="scope.row[item.prop]==''"></span>
                <span
                  v-else-if="typeof scope.row[item.prop] == 'object' && item.inProp"
                >{{scope.row[item.prop][item.inProp]}}</span>
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
                <span
                  v-if="scope.row[item.prop]"
                >{{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}</span>
              </span>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="补发问题产品" name="5">
        <el-table :data="defProData">
          <el-table-column
            v-for="item in btmTableHead[this.bottomActiveName]"
            :label="item.label"
            align="center"
            :width="item.width"
            :key="item.label"
          >
            <template slot-scope="scope">
              <span v-if="item.type=='select'">
                <span v-if="scope.row[item.prop]==''"></span>
                <span
                  v-else-if="typeof scope.row[item.prop] == 'object' && item.inProp"
                >{{scope.row[item.prop][item.inProp]}}</span>
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
                <span
                  v-if="scope.row[item.prop]"
                >{{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}</span>
              </span>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="退款责任方" name="6">
        <el-table :data="refundData">
          <el-table-column
            v-for="item in btmTableHead[this.bottomActiveName]"
            :label="item.label"
            align="center"
            :width="item.width"
            :key="item.label"
          >
            <template slot-scope="scope">
              <span v-if="item.type=='select'">
                <span v-if="scope.row[item.prop]==''"></span>
                <span
                  v-else-if="typeof scope.row[item.prop] == 'object' && item.inProp"
                >{{scope.row[item.prop][item.inProp]}}</span>
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
                <span
                  v-if="scope.row[item.prop]"
                >{{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}</span>
              </span>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="退货责任方" name="7">
        <el-table :data="returnData">
          <el-table-column
            v-for="item in btmTableHead[this.bottomActiveName]"
            :label="item.label"
            align="center"
            :width="item.width"
            :key="item.label"
          >
            <template slot-scope="scope">
              <span v-if="item.type=='select'">
                <span v-if="scope.row[item.prop]==''"></span>
                <span
                  v-else-if="typeof scope.row[item.prop] == 'object' && item.inProp"
                >{{scope.row[item.prop][item.inProp]}}</span>
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
                <span
                  v-if="scope.row[item.prop]"
                >{{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}</span>
              </span>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="补件责任方" name="8">
        <el-table :data="patchData">
          <el-table-column
            v-for="item in btmTableHead[this.bottomActiveName]"
            :label="item.label"
            align="center"
            :width="item.width"
            :key="item.label"
          >
            <template slot-scope="scope">
              <span v-if="item.type=='select'">
                <span v-if="scope.row[item.prop]==''"></span>
                <span
                  v-else-if="typeof scope.row[item.prop] == 'object' && item.inProp"
                >{{scope.row[item.prop][item.inProp]}}</span>
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
                <span
                  v-if="scope.row[item.prop]"
                >{{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}</span>
              </span>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="驳回原因" name="9">
        <el-table :data="Data">
          <el-table-column
            v-for="item in btmTableHead[this.bottomActiveName]"
            :label="item.label"
            align="center"
            :width="item.width"
            :key="item.label"
          >
            <template slot-scope="scope">
              <span v-if="item.type=='select'">
                <span v-if="scope.row[item.prop]==''"></span>
                <span
                  v-else-if="typeof scope.row[item.prop] == 'object' && item.inProp"
                >{{scope.row[item.prop][item.inProp]}}</span>
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
                <span
                  v-if="scope.row[item.prop]"
                >{{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}</span>
              </span>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="售后问题产品" name="10">
        <el-table :data="defProData">
          <el-table-column
            v-for="item in btmTableHead[this.bottomActiveName]"
            :label="item.label"
            align="center"
            :width="item.width"
            :key="item.label"
          >
            <template slot-scope="scope">
              <span
                v-if="scope.row[item.prop]"
              >{{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}</span>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="内部便签" name="11">
        <el-table :data="Data">
          <el-table-column
            v-for="item in btmTableHead[this.bottomActiveName]"
            :label="item.label"
            align="center"
            :width="item.width"
            :key="item.label"
          >
            <template slot-scope="scope">
              <span v-if="item.type=='select'">
                <span v-if="scope.row[item.prop]==''"></span>
                <span
                  v-else-if="typeof scope.row[item.prop] == 'object' && item.inProp"
                >{{scope.row[item.prop][item.inProp]}}</span>
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
                <span
                  v-if="scope.row[item.prop]"
                >{{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}</span>
              </span>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="操作记录" name="12">
        <el-table :data="Data">
          <el-table-column
            v-for="item in btmTableHead[this.bottomActiveName]"
            :label="item.label"
            align="center"
            :width="item.width"
            :key="item.label"
          >
            <template slot-scope="scope">
              <span v-if="item.type=='select'">
                <span v-if="scope.row[item.prop]==''"></span>
                <span
                  v-else-if="typeof scope.row[item.prop] == 'object' && item.inProp"
                >{{scope.row[item.prop][item.inProp]}}</span>
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
                <span
                  v-if="scope.row[item.prop]"
                >{{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}</span>
              </span>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>

    <!-- 修改 -->
    <el-dialog titie="修改售后单" :visible.sync="updateMask" :class="{'more-forms':moreForms}">
      <el-button type="text">编辑</el-button>
      <el-form
        :model="updateForm"
        :rules="addAfterSaleRules"
        ref="updateForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item
          v-for="(item,index) in addAfterSaleHead"
          :key="index"
          :label="item.label"
          :prop="item.prop"
        >
          <span v-if="item.type=='text'">
            <el-input
              v-model.trim="updateForm[item.prop]"
              :placeholder="item.holder"
              :disabled="item.addChgAble"
            ></el-input>
          </span>
          <span v-else-if="item.type=='select'">
            <el-select
              v-model="updateForm[item.prop]"
              :placeholder="item.holder"
              :disabled="item.addChgAble"
            >
              <span v-for="list in resData[item.stateVal]" :key="list.id">
                <el-option :label="list.name?list.name:list.nick" :value="list.id"></el-option>
              </span>
            </el-select>
          </span>
          <span v-else-if="item.type=='textarea'" :disabled="item.addChgAble">
            <el-input
              type="textarea"
              v-model.trim="updateForm[item.prop]"
              :placehoder="item.holder"
            ></el-input>
          </span>
          <span v-else-if="item.type=='number'">
            <el-input
              type="number"
              v-model.trim="updateForm[item.prop]"
              :placehoder="item.holder"
              :disabled="item.addChgAble"
            ></el-input>
          </span>
          <span v-else-if="item.type=='img'" :disabled="item.addChgAble">
            <span v-if="noUpload">
              <el-upload class="upload-demo" action :before-upload="beforeUpload">
                <el-button size="small" type="primary">点击上传</el-button>
              </el-upload>
            </span>
            <span v-else>
              <img :src="updateForm[item.prop]" :disabled="item.addChgAble">
              <el-upload class="chgDiv" action :before-upload="beforeUpload">
                <el-button
                  type="primary"
                  icon="el-icon-edit"
                  size="mini"
                  class="chg"
                  v-show="showChgBtn"
                ></el-button>
              </el-upload>
            </span>
          </span>
        </el-form-item>
      </el-form>
      <div class="clearfix">
        <el-button type="text">售后问题产品</el-button>
        <el-table
          :data="updateForm.after_sale_def_pro"
          fit
          height="180"
        >
          <el-table-column
            v-for="item in defProHead"
            :label="item.label"
            align="center"
            :width="item.width"
            :key="item.label"
          >
            <template slot-scope="scope">
              <span
                v-if="scope.row[item.prop]"
              >{{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}</span>
            </template>
          </el-table-column>
          <!-- <el-table-column label="操作" width="90" align="center" fixed="right">
            <template slot-scope="scope">
              <el-button size="mini" type="danger" @click="delUpdateDefPro(scope.row,$event)">删除</el-button>
            </template>
          </el-table-column> -->
        </el-table>
      </div>
      <div slot="footer" class="dialog-footer clearfix">
        <!-- <div style="float: left">
          <el-button type="primary" @click="updateAfterSProClick">新增售后产品</el-button>
        </div> -->
        <div style="float: right">
          <el-button type="primary" @click="confirmUpdate(updateIndex)">确定</el-button>
          <el-button @click="cancelUpdate" type="warning">取消</el-button>
        </div>
      </div>
    </el-dialog>

    <!-- 新增售后产品 -->
    <el-dialog title="选择订单" :visible.sync="addAfterSProMask" :class="{'more-forms':moreForms}">
      <el-button type="text">订单列表</el-button>
      <el-table
        :data="orderDtlVal"
        fit
        height="180"
        :row-class-name="addOrderRowCName"
        @row-click="addOrderRowClick"
      >
        <el-table-column
          v-for="item in addOrderProHead"
          :label="item.label"
          align="center"
          :width="item.width"
          :key="item.label"
        >
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
      <el-button type="text">产品列表</el-button>
      <el-table
        :data="proDtlVal"
        fit
        height="180"
        :row-class-name="addAfterSProRowCName"
        @row-click="addAfterSProRowClick"
      >
        <el-table-column
          v-for="item in addAfterSProHead"
          :label="item.label"
          align="center"
          :width="item.width"
          :key="item.label"
        >
          <template slot-scope="scope">
            <span
              v-if="scope.row[item.prop]"
            >{{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}</span>
          </template>
        </el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer clearfix">
        <div style="float: left">
          <el-button type="primary" @click="proQueryRefresh">刷新</el-button>
        </div>
        <div style="float: right">
          <el-button type="primary" @click="confirmAddAfterSPro">确定</el-button>
          <el-button @click="cancelAddAfterSPro" type="warning">取消</el-button>
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
        <el-form-item
          v-for="(item,index) in scheduleRuleFormHead"
          :key="index"
          :label="item.label"
          :prop="item.prop"
        >
          <span v-if="item.type=='textarea'">
            <el-input
              type="textarea"
              v-model.trim="scheduleRuleFormVal[item.prop]"
              :placehode="item.holder"
            ></el-input>
          </span>
          <span v-else-if="item.type=='DatePicker'">
            <el-date-picker
              v-model="scheduleRuleFormVal[item.prop]"
              type="date"
              format="yyyy-MM-dd"
              value-format="yyyy-MM-dd"
              placeholder="选择日期"
            ></el-date-picker>
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
        <el-form-item
          v-for="(item,index) in scheduleRuleFormHead"
          :key="index"
          :label="item.label"
          :prop="item.prop"
        >
          <span v-if="item.type=='textarea'">
            <el-input
              type="textarea"
              v-model.trim="updateScheduleRuleFormVal[item.prop]"
              :placehode="item.holder"
            ></el-input>
          </span>
          <span v-else-if="item.type=='DatePicker'">
            <el-date-picker
              v-model="updateScheduleRuleFormVal[item.prop]"
              type="date"
              format="yyyy-MM-dd"
              value-format="yyyy-MM-dd"
              placeholder="选择日期"
            ></el-date-picker>
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
          nClick: false
        },
        {
          cnt: "锁定",
          icon: "bf-lock",
          ent: this.lock,
          nClick: false
        },
        {
          cnt: "解锁",
          icon: "bf-delock",
          ent: this.unLock,
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
          cnt: "刷新",
          icon: "bf-refresh",
          ent: this.refresh
        }
      ],
      Data:[],
      /* 搜索框 */
      filterBox: false,
      searchBox: {
        after_sale_order_no: "",
        order_no: "",
        vip_name: "",
        user_id: "",
        orderStaff: [{ label: "ceshi", value: 0 }],
        after_sale_status: "",
        afterSaleStatus: [{ label: "ceshi", value: 0 }],
        after_sale_type: "",
        order_phone: "",
        created_at: "",
        after_sale_sort: "",
        afterSaleSort: [
          { label: "售后", value: 0 },
          { label: "售中", value: 1 }
        ],
        parts_duty: "",
        partsDuty: [
          { label: "物流", value: 0 },
          { label: "工厂", value: 1 },
          { label: "公司", value: 2 },
          { label: "员工", value: 3 },
          { label: "其他", value: 4 }
        ]
      },
      /* 中间tabs */
      topActiveName: "0",
      checkboxInit: false,
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
          label: "售后分类",
          width: "130",
          prop: "after_sale_group",
          type: "text"
        },
        {
          label: "售后状态",
          width: "150",
          prop: "after_sale_status",
          type: "number"
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
          label: "淘宝订单号",
          width: "180",
          prop: "taobao_oid",
          type: "text"
        },
        {
          label: "补件信息",
          width: "180",
          prop: "rfe_information",
          type: "text"
        },
        {
          label: "锁定人",
          width: "150",
          prop: "locking_people",
          type: "text"
        },
        {
          label: "锁定时间",
          width: "180",
          prop: "locking_at",
          type: "text"
        },
        {
          label: "标记人",
          width: "150",
          prop: "tag_people",
          type: "text"
        },
        {
          label: "标记名称",
          width: "150",
          prop: "tag_name",
          type: "text"
        },
        {
          label: "标记时间",
          width: "180",
          prop: "tag_date",
          type: "text"
        },
        {
          label: "驳回",
          width: "90",
          prop: "is_reject",
          type: "checkbox"
        },
        {
          label: "退款处理状态",
          width: "150",
          prop: "refund_status",
          type: "text"
        },
        {
          label: "退货处理状态",
          width: "150",
          prop: "return_status",
          type: "text"
        },
        {
          label: "补件处理状态",
          width: "150",
          prop: "patch_status",
          type: "text"
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
      submitData: [],
      unsubmitData: [],
      submitLoading: true,
      unsubmitLoading: true,
      // 新增售后进度
      addScheduleMask: false,
      updateScheduleMask: false,
      scheduleFrom: {},
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
      // 底部tabs
      addId: "",
      bottomActiveName: "0",
      showBtmDel: false,
      scheduleData: [],
      defProData: [],
      refundData: [],
      returnData: [],
      patchData: [],
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
      selection: "",
      updateMask: false,
      updateId: "",
      updateIndex: "",
      updateSchIndex: "",
      updateForm: {},
      componentShowChg: true,
      updateCompUpload: "upload0",
      updateRwIndex: "0",
      moreForms: true,
      addAfterSaleMask: false,
      addAfterSaleHead: [
        {
          label: "订单编号",
          prop: "order_no",
          holder: "系统自动生成",
          type: "text",
          addChgAble: true
        },
        {
          label: "店铺昵称",
          prop: "shop_name",
          holder: "请输入店铺昵称",
          type: "text"
        },
        {
          label: "订单金额",
          prop: "order_amount",
          holder: "请输入订单金额",
          type: "number"
        },
        {
          label: "售后类型",
          prop: "after_sale_type",
          holder: "请选择售后类型",
          type: "select",
          stateVal: "aftersaletype"
        },
        {
          label: "售后分类",
          prop: "after_sale_group",
          holder: "请输入售后分类",
          type: "text"
        },
        {
          label: "售后状态",
          prop: "after_sale_status",
          holder: "请选择售后状态",
          type: "select",
          stateVal: "aftersalestate"
        },
        {
          label: "联系方式",
          prop: "order_phone",
          holder: "请输入联系方式",
          type: "text"
        },
        {
          label: "上传图片",
          prop: "img",
          imgPath: "",
          holder: "请输入上传图片",
          type: "img"
        },
        {
          label: "会员ID",
          prop: "vip_name",
          holder: "请输入会员ID",
          type: "text"
        },
        {
          label: "业务员",
          prop: "user_id",
          holder: "系统自动生成",
          type: "text",
          addChgAble: true
        },
        {
          label: "供应商",
          prop: "suppliers_id",
          holder: "系统自动生成",
          type: "text",
          addChgAble: true
        },
        {
          label: "物流公司",
          prop: "logistic_name",
          holder: "系统自动生成",
          type: "text",
          addChgAble: true
        },
        {
          label: "物流单号",
          prop: "logistics_id",
          holder: "系统自动生成",
          type: "text",
          addChgAble: true
        },
        {
          label: "发货时间",
          prop: "deliver_date",
          holder: "系统自动生成",
          type: "text",
          addChgAble: true
        },
        {
          label: "省",
          prop: "receiver_state",
          holder: "请输入省",
          type: "text"
        },
        {
          label: "市",
          prop: "receiver_city",
          holder: "请输入市",
          type: "text"
        },
        {
          label: "区",
          prop: "receiver_district",
          holder: "请输入区",
          type: "text"
        },
        {
          label: "详细地址",
          prop: "receiver_address",
          holder: "请输入详细地址",
          type: "text"
        },
        {
          label: "问题单责任方",
          prop: "after_responsible_party",
          holder: "请输入问题单责任方",
          type: "text"
        },
        {
          label: "售后成本",
          prop: "after_sale_cost",
          holder: "请输入售后成本",
          type: "number"
        },
        {
          label: "问题描述",
          prop: "problem_description",
          holder: "请输入问题描述",
          type: "textarea"
        },
        {
          label: "客服要求",
          prop: "customer_service_requirements",
          holder: "请输入客服要求",
          type: "textarea"
        },
        {
          label: "补件信息",
          prop: "rfe_information",
          holder: "请输入补件信息",
          type: "textarea"
        }
      ],
      addAfterSaleForm: {
        order_no: "",
        shop_name: "",
        after_sale_type: "",
        order_amount: "",
        after_sale_group: "",
        after_sale_status: "",
        order_phone: "",
        img: "",
        vip_name: "",
        suppliers_id: "",
        logistic_name: "",
        logistics_id: "",
        deliver_date: "",
        receiver_state: "",
        receiver_city: "",
        receiver_district: "",
        receiver_address: "",
        after_responsible_party: "",
        after_sale_cost: "",
        problem_description: "",
        customer_service_requirements: "",
        rfe_information: ""
      },
      addAfterSaleRules: {
        order_no: [
          { required: true, message: "订单编号必选", trigger: "blur" }
        ],
        shop_name: [
          { required: true, message: "店铺昵称必选", trigger: "blur" }
        ],
        vip_name: [{ required: true, message: "会员ID必选", trigger: "blur" }]
      },
      // 上传图片
      noUpload: true,
      showChgBtn: false,
      updateChgBtn: false,
      defProHead: [
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
          prop: "specification_name",
          width: "180",
          type: "text"
        },
        {
          label: "颜色",
          prop: "productComponents",
          inProp: "color",
          width: "120",
          type: "text"
        },
        {
          label: "材质",
          prop: "productComponents",
          inProp: "materials",
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
      defectiveProduct: [],
      defProDtlVal: [],
      // 新增售后产品
      addAfterSProMask: false,
      addAfterSProDtlVal: [],
      proDtlVal: [],
      addOrderDtlVal: [],
      orderDtlVal: [],
      addAfterSProHead: [
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
          prop: "product_component",
          inProp: "spec",
          width: "180",
          type: "text"
        },
        {
          label: "颜色",
          prop: "product_component",
          width: "120",
          type: "text"
        },
        {
          label: "材质",
          prop: "product_component",
          inProp: "materials",
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
      addOrderProHead: [
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
    test() {
      this.$message({
        message: "操作成功",
        type: "success"
      });
    },
    /* 搜索框 */
    handleQuery() {
      this.newLoading=true;
      this.fetchAfterSaleData();
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
        after_sale_status: "",
        after_sale_type: "",
        order_phone: "",
        created_at: "",
        after_sale_group: "",
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
          this.newOpt[0].nClick = false;
          this.newOpt[1].nClick = false;
          this.newOpt[2].nClick = false;
          this.newOpt[3].nClick = false;
          this.newOpt[4].nClick = true;
          this.$fetch(this.urls.aftersale, {
            order_status: 20,
            after_sale_order_no:this.searchBox.after_sale_order_no,
            order_no:this.searchBox.order_no,
            vip_name:this.searchBox.vip_name,
            user_id:this.searchBox.user_id,
            after_sale_status:this.searchBox.after_sale_status,
            after_sale_type:this.searchBox.after_sale_type,
            order_phone:this.searchBox.order_phone,
            after_sale_group:this.searchBox.after_sale_group,
            include: "afterSaleSchedules.user,afterSaleDefPros,user,afterSaleRefunds,afterSaleReturns,afterSalePatchs"
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
          this.newOpt[0].nClick = true;
          this.newOpt[1].nClick = true;
          this.newOpt[2].nClick = true;
          this.newOpt[3].nClick = true;
          this.newOpt[4].nClick = false;
          this.$fetch(this.urls.aftersale, {
            order_status: 30,
            after_sale_order_no:this.searchBox.after_sale_order_no,
            order_no:this.searchBox.order_no,
            vip_name:this.searchBox.vip_name,
            user_id:this.searchBox.user_id,
            after_sale_status:this.searchBox.after_sale_status,
            after_sale_type:this.searchBox.after_sale_type,
            order_phone:this.searchBox.order_phone,
            after_sale_group:this.searchBox.after_sale_group,
            include: "afterSaleSchedules.user,afterSaleDefPros,user,afterSaleRefunds,afterSaleReturns,afterSalePatchs"
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
    afterSSubmissionRowClick(row) {
      let index = this.topActiveName - 0;
      if (index == 0) {
        if (row.is_locked == 1) {
        this.newOpt[1].nClick = true;
        this.newOpt[2].nClick = false;
        this.newOpt[3].nClick = true;
        } else {
        this.newOpt[1].nClick = false;
        this.newOpt[2].nClick = true; 
        this.newOpt[3].nClick = false;
        };
      };
      this.curRowId = row.id;
      this.curRowData = row;
      this.scheduleData = row["afterSaleSchedules"].data;
      this.defProData = row["afterSaleDefPros"].data;
    },
    handleSelectionChange(val) {
      if (val.length != 0) {
        this.updateId = val[0].id;
      } else {
        this.updateId = "";
      }
      this.selection = val;
      let index = this.topActiveName - 0;
      if (index == 0) {
        if (this.selection.length == 1) {
          if (val[0].is_locked == 1) {
            this.newOpt[1].nClick = true;
            this.newOpt[2].nClick = false;
            this.newOpt[3].nClick = true;
          } else {
            this.newOpt[1].nClick = false;
            this.newOpt[2].nClick = true; 
            this.newOpt[3].nClick = false;
          };
        } else if (this.selection.length >= 2) {
            this.newOpt[1].nClick = true;
            this.newOpt[2].nClick = true;
            this.newOpt[3].nClick = true;
        }
      };
      let del = [];
      val.forEach(selectedItem => {
        del.push(selectedItem.id);
      });
      /*拿到当前id*/
      this.checkboxId = val.length > 0 ? val[val.length - 1].id : "";
      this.curRowData = val.length > 0 ? val[val.length - 1] : "";
      this.delArr = del.join(",");
    },
    // 修改
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
          this.$fetch(this.urls.aftersale + "/" + this.updateId, {
              include:
                "afterSaleSchedules.user,afterSaleDefPros,user"
            }).then(
            res => {
              this.updateForm = res;
              this.updateForm.after_sale_def_pro = this.updateForm.afterSaleDefPros["data"];
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
    delUpdateDefPro(index) {
      this.updateForm.after_sale_def_pro.splice(index, 1);
    },
    confirmUpdate() {
      this.$patch(
        this.urls.aftersale + "/" + this.updateId,
        this.updateForm
      ).then(
        () => {
          this.updateMask = false;
          this.$message({
            message: "修改成功",
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
    cancelUpdate() {
      this.updateMask = false;
      this.$message({
        message: "已取消修改",
        type: "info"
      });
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
              subscribed_at: res.subscribed_at,
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
      this.$patch(this.urls.aftersaleschedule + "/" + this.updateSchIndex, this.updateScheduleRuleFormVal).then(
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
    // 新增售后产品
    addOrderRowCName({ row, rowIndex }) {
      row.index = rowIndex;
    },
    addAfterSProRowCName({ row, rowIndex }) {
      row.index = rowIndex;
    },
    addAfterSProRowClick(row) {
      this.addAfterSProDtlVal.push(row);
    },
    addOrderRowClick(row) {
      this.proDtlVal = [];
      this.addOrderDtlVal = row;
      this.addOrderDtlVal.orderItems["data"].map(list => {
        list.combination.productComponents["data"].map(item => {
          let defPro = {
          commodity_code: list.product.commodity_code,
          spec_code: "",
          short_name: list.product.short_name,
          spec: item.spec,
          color: item.color,
          materials: item.materials,
          buy_number: list.quantity,
          supplier_id: list.supplier_id,
          };
          this.proDtlVal.push(defPro);
        })
      });
    },
    updateAfterSProClick() {
      this.addAfterSProMask = true;
      this.proQueryClick();
    },
    proQueryClick() {
      this.orderDtlVal = [];
      this.proDtlVal = [];
      this.addOrderDtlVal = [];
      this.addAfterSProDtlVal = [];
      this.$fetch(this.urls.customerservicedepts,{
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
            this.addAfterSaleForm.after_sale_def_pro[0].img_url = res.data.path;
          }
        })
        .catch(err => {});
    },
    proQueryRefresh() {
      this.proQueryClick();
      this.$message({
        message: "刷新成功",
        type: "success"
      });
    },
    cancelAddAfterSPro() {
      this.addAfterSProMask = false;
      this.$message({
        message: "取消新增售后产品",
        type: "info"
      });
    },
    confirmAddAfterSPro() {
      this.addAfterSProMask = false;
      this.defProDtlVal = this.addAfterSProDtlVal;
      this.addAfterSaleForm.order_no = this.addOrderDtlVal.system_order_no;
      this.addAfterSaleForm.shop_name = this.addOrderDtlVal.shops_id;
      this.addAfterSaleForm.after_sale_type = "";
      this.addAfterSaleForm.order_amount = this.addOrderDtlVal.deposit;
      this.addAfterSaleForm.after_sale_group = "";
      this.addAfterSaleForm.after_sale_status = "";
      this.addAfterSaleForm.order_phone = this.addOrderDtlVal.receiver_mobile;
      this.addAfterSaleForm.img = "";
      this.addAfterSaleForm.vip_name = this.addOrderDtlVal.member_nick;
      this.addAfterSaleForm.suppliers_id = "";
      this.addAfterSaleForm.logistic_name = "";
      this.addAfterSaleForm.logistics_id = this.addOrderDtlVal.logistics_id;
      this.addAfterSaleForm.deliver_date = "";
      this.addAfterSaleForm.receiver_state = this.addOrderDtlVal.receiver_state;
      this.addAfterSaleForm.receiver_city = this.addOrderDtlVal.receiver_city;
      this.addAfterSaleForm.receiver_district = this.addOrderDtlVal.receiver_district;
      this.addAfterSaleForm.receiver_address = this.addOrderDtlVal.receiver_address;
      this.addAfterSaleForm.after_responsible_party = "";
      this.addAfterSaleForm.after_sale_cost = "";
      this.addAfterSaleForm.problem_description = "";
      this.addAfterSaleForm.customer_service_requirements = "";
      this.addAfterSaleForm.rfe_information = "";
    },
    // 锁定
    lock() {
      if (this.newOpt[1].nClick) {
        return;
      } else {
        let id = this.checkboxId ? this.checkboxId : this.curRowId;
        this.$put(this.urls.aftersale + "/" + id + "/lockorunlock").then(
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
    // 解锁
    unLock() {
      if (this.newOpt[2].nClick) {
        return;
      } else {
        let id = this.checkboxId ? this.checkboxId : this.curRowId;
        this.$put(this.urls.aftersale + "/" + id + "/lockorunlock").then(
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
      }
    },
    // 审核
    handleAudit() {
      if (this.newOpt[3].nClick) {
        return;
      } else {
        let id = this.checkboxId ? this.checkboxId : this.curRowId;
        this.$put(this.urls.aftersale + "/" + id + "/oneaudit").then(
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
      if (this.newOpt[4].nClick) {
        return;
      } else {
        let id = this.checkboxId ? this.checkboxId : this.curRowId;
        this.$put(this.urls.aftersale + "/" + id + "/unoneaudit").then(
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
    this.$fetch(this.urls.customerservicedepts + "/create").then(
      res => {
        this.addSubData = res;
      },
      err => {}
    );
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