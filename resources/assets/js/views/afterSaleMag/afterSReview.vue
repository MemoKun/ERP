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
          <el-select
            v-model="searchBox.order_staff"
            clearable
            placeholder="请选择"
            @keyup.enter.native="handleQuery"
          >
            <el-option
              v-for="item in searchBox.orderStaff"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
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
          <el-select
            v-model="searchBox.after_sale_sort"
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
          <el-date-picker
            v-model="searchBox.created_at"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
        </span>
        <span>
          <label>售后状态</label>
          <el-select
            v-model="searchBox.after_sale_status"
            clearable
            placeholder="请选择"
            @keyup.enter.native="handleQuery"
          >
            <el-option
              v-for="item in searchBox.afterSaleStatus"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
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
        <el-table
          :data="unsubmitData"
          ref="unsubmitTable"
          fit
          height="300"
          v-loading="unsubmitLoading"
          @selection-change="handleSelectionChange"
          :row-class-name="afterSaleRCName"
          :row-style="rowStyle"
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
                  v-else-if="typeof scope.row[item.prop] == 'object' && item.nmProp"
                >{{ scope.row[item.prop][item.nmProp] }}</span>
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
          :row-style="rowStyle"
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
                  v-else-if="typeof scope.row[item.prop] == 'object' && item.nmProp"
                >{{ scope.row[item.prop][item.nmProp] }}</span>
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
      <el-tab-pane label="售后图片" name="1">
        <el-table :data="scheduleData">
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
      <el-tab-pane label="退款明细" name="2">
        <el-table :data="scheduleData">
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
        <el-table :data="scheduleData">
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
        <el-table :data="scheduleData">
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
        <el-table :data="scheduleData">
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
        <el-table :data="scheduleData">
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
        <el-table :data="scheduleData">
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
        <el-table :data="scheduleData">
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
        <el-table :data="scheduleData">
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
        <el-table :data="scheduleData">
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
      <el-tab-pane label="内部便签" name="11">
        <el-table :data="scheduleData">
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
        <el-table :data="scheduleData">
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
    <el-dialog titie="修改责任金额" :visible.sync="updateMask" :class="{'more-forms':moreForms}">
      <el-button type="text">修改类型</el-button>
      <add-new :rule-form="ruleForm" :rules="rules" :add-arr="updateArr" :onlyInputs="true"></add-new>
      <el-tabs v-model="addActiveName" @tab-click="addHandleClick" id="elTabs" class="hidePart">
        <el-tab-pane label="退款责任方" name="0">
          <el-table
            :data="updateForm.refund_data"
            fit
            height="300"
            :row-class-name="updateCName"
            @row-click="updateRowClick"
          >
            <el-table-column
              v-for="(item,index) in refundHead"
              :label="item.label"
              align="center"
              :width="item.width"
              :key="index"
            >
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
          <el-table
            :data="updateForm.return_data"
            fit
            height="300"
            :row-class-name="updateCName"
            @row-click="updateRowClick"
          >
            <el-table-column
              v-for="(item,index) in returnHead"
              :label="item.label"
              align="center"
              :width="item.width"
              :key="index"
            >
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
          <el-table
            :data="updateForm.patch_data"
            fit
            height="300"
            :row-class-name="updateCName"
            @row-click="updateRowClick"
          >
            <el-table-column
              v-for="(item,index) in patchHead"
              :label="item.label"
              align="center"
              :width="item.width"
              :key="index"
            >
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
          ent: this.test,
          nClick: false
        },
        {
          cnt: "审核",
          icon: "bf-audit",
          ent: this.test,
          nClick: false
        },
        {
          cnt: "退审",
          icon: "bf-auditfaild",
          ent: this.test,
          nClick: true
        },
        {
          cnt: "结算",
          icon: "bf-finSettle",
          ent: this.test,
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
        order_staff: "",
        orderStaff: [{ label: "ceshi", value: 0 }],
        client_name: "",
        after_sale_sort: "",
        afterSaleSort: [
          { label: "售后", value: 0 },
          { label: "售中", value: 1 }
        ],
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
          prop: "order_staff",
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
      // 底部tabs
      bottomActiveName: "0",
      scheduleData: [],
      btmTableHead: [
        [
          {
            label: "进度描述",
            width: "180",
            prop: "taobao_oid",
            type: "text"
          },
          {
            label: "创建人",
            width: "180",
            prop: "user",
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
            prop: "order_time",
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
            prop: "responsible_party",
            width: "180",
            type: "text"
          },
          {
            label: "责任方姓名",
            prop: "responsible_party_name",
            width: "180",
            type: "text"
          },
          {
            label: "责任金额",
            prop: "responsible_money",
            width: "180",
            type: "number"
          }
        ],
        [
          {
            label: "责任方",
            prop: "responsible_party",
            width: "180",
            type: "text"
          },
          {
            label: "责任方姓名",
            prop: "responsible_party_name",
            width: "180",
            type: "text"
          },
          {
            label: "责任金额",
            prop: "responsible_money",
            width: "180",
            type: "number"
          }
        ],
        [
          {
            label: "责任方",
            prop: "responsible_party",
            width: "180",
            type: "text"
          },
          {
            label: "责任方姓名",
            prop: "responsible_party_name",
            width: "180",
            type: "text"
          },
          {
            label: "责任金额",
            prop: "responsible_money",
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
            prop: "specification_id",
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
            prop: "quantity ",
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
      updateForm: {
        refund_data: [],
        return_data: [],
        patch_data: []
      },
      refundHead: [
        {
          label: "责任方",
          width: "200",
          prop: "refund_duty",
          stateVal: "responsible_party",
          type: "text"
        },
        {
          label: "责任方姓名",
          width: "200",
          prop: "refund_duty_name",
          type: "text"
        },
        {
          label: "责任金额",
          width: "200",
          prop: "refund_price",
          type: "number"
        }
      ],
      returnHead: [
        {
          label: "责任方",
          width: "200",
          prop: "after_responsible_party",
          stateVal: "responsible_party",
          type: "text"
        },
        {
          label: "责任方姓名",
          width: "200",
          prop: "after_responsible_party_name",
          type: "text"
        },
        {
          label: "责任金额",
          width: "200",
          prop: "return_price",
          type: "number"
        }
      ],
      patchHead: [
        {
          label: "责任方",
          width: "200",
          prop: "patch_duty",
          stateVal: "responsible_party",
          type: "text"
        },
        {
          label: "责任方姓名",
          width: "200",
          prop: "patch_duty_name",
          type: "text"
        },
        {
          label: "责任金额",
          width: "200",
          prop: "patch_price",
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
        order_staff: "",
        orderStaff: [{ label: "ceshi", value: 0 }],
        client_name: "",
        after_sale_sort: "",
        afterSaleSort: [
          { label: "售后", value: 0 },
          { label: "售中", value: 1 }
        ],
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
            order_status: "new",
            include: "afterSaleSchedules.user"
          }).then(
            res => {
              this.unsubmitLoading = false;
              this.unsubmitData = res.data;
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
            order_status: "submit",
            include: "afterSaleSchedules.user"
          }).then(
            res => {
              this.submitLoading = false;
              this.submitData = res.data;
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
    afterSReviewRowClick(row) {
      /* 点击行 */
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
              refund_duty: "",
              refund_duty_name: "",
              refund_price: ""
            };
            if (
              this.updateForm.refund_data.length > 0 &&
              !this.updateForm.refund_data[
                this.updateForm.refund_data.length - 1
              ].refund_duty
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
              after_responsible_party: "",
              after_responsible_party_name: "",
              return_price: ""
            };
            if (
              this.updateForm.return_data.length > 0 &&
              !this.updateForm.return_data[
                this.updateForm.return_data.length - 1
              ].after_responsible_party
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
              patch_duty: "",
              patch_duty_name: "",
              patch_price: ""
            };
            if (
              this.updateForm.patch_data.length > 0 &&
              !this.updateForm.patch_data[this.updateForm.patch_data.length - 1]
                .patch_duty
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
      this.updateMask = false;
      this.$message({
        message: "添加成功",
        type: "success"
      });
    },
    edit() {
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