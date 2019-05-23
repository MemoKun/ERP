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
          <label>客户姓名</label>
          <el-input v-model="searchBox.client_name" clearable @keyup.enter.native="handleQuery"></el-input>
        </span>
        <span v-else>
          <el-button @click="handleQuery" type="primary">筛选</el-button>
          <el-button @click="resets" style="margin-right: 5px">重置</el-button>
          <span @click="toggleShow">
            <el-button type="text">展开</el-button>
            <i class="el-icon-arrow-down" style="color:#409EFF"></i>
          </span>
        </span>
      </div>
      <div v-if="filterBox" class="searchBox">
        <span>
          <label>业务员</label>
          <el-select
            v-model="searchBox.user_id"
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
        <span>
          <label>联系方式</label>
          <el-input v-model="searchBox.order_phone" clearable @keyup.enter.native="handleQuery"></el-input>
        </span>
        <span>
          <label>售后类型</label>
          <el-input v-model="searchBox.after_sale_type" clearable @keyup.enter.native="handleQuery"></el-input>
        </span>
        <span>
          <label>进度描述</label>
          <el-input v-model="searchBox.order_schedule" clearable @keyup.enter.native="handleQuery"></el-input>
        </span>
      </div>
      <div v-if="filterBox" class="searchBox">
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
          <label>主管审核时间</label>
          <el-date-picker
            v-model="searchBox.charge_checkDate"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
        </span>
        <span>
          <label>客服提交时间</label>
          <el-date-picker
            v-model="searchBox.order_submitDate"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
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
              v-for="item in resData.aftersaletype"
              :key="item.value"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </span>
      </div>
      <div v-if="filterBox" class="searchBox">
        <span>
          <label>售后审核时间</label>
          <el-date-picker
            v-model="searchBox.after_sale_checkDate"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
        </span>
        <span>
          <label>标记名称</label>
          <el-input v-model="searchBox.tag_name" clearable @keyup.enter.native="handleQuery"></el-input>
        </span>
        <span>
          <label>发货时间</label>
          <el-date-picker
            v-model="searchBox.deliveryDate"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
        </span>
      </div>
      <div class="opt" v-if="filterBox" style="text-align: right">
        <el-button @click="handleQuery" type="primary">筛选</el-button>
        <el-button @click="resets">重置</el-button>
        <span @click="toggleShow" style="display: inline">
          <el-button type="text">收起</el-button>
          <i class="el-icon-arrow-up" style="color:#409EFF"></i>
        </span>
      </div>
    </div>

    <!-- 数据 -->
    <el-tabs v-model="topActiveName" @tab-click="clickTopTabs">
      <el-tab-pane label="所有数据" name="0">
        <el-table
          :data="allData"
          ref="allTable"
          fit
          height="300"
          v-loading="allLoading"
          @selection-change="handleSelectionChange"
          :row-class-name="afterSaleRCName"
          @row-click="afterSCenterRowClick"
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
          <!-- 右侧删除键 -->
          <el-table-column label="操作" width="180" align="center" fixed="right">
            <template slot-scope="scope">
              <el-button size="mini" type="primary" @click="addSchedule(scope.row)">新增进度</el-button>
              <el-button size="mini" type="danger" @click="del(scope.row,$event)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="未完结" name="1">
        <el-table
          :data="unfinishData"
          fit
          ref="unfinishTable"
          v-loading="unfinishLoading"
          @selection-change="handleSelectionChange"
          height="300"
          :row-class-name="afterSaleRCName"
          @row-click="afterSCenterRowClick"
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
          <!-- 右侧删除键 -->
          <el-table-column label="操作" width="180" align="center" fixed="right">
            <template slot-scope="scope">
              <el-button size="mini" type="primary" @click="addSchedule(scope.row)">新增进度</el-button>
              <el-button size="mini" type="danger" @click="del(scope.row,$event)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="已完结" name="2">
        <el-table
          :data="finishData"
          ref="finishTable"
          fit
          height="300"
          v-loading="finishLoading"
          @selection-change="handleSelectionChange"
          :row-class-name="afterSaleRCName"
          @row-click="afterSCenterRowClick"
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
          <!-- 右侧删除键 -->
          <el-table-column label="操作" width="180" align="center" fixed="right">
            <template slot-scope="scope">
              <el-button size="mini" type="primary" @click="addSchedule(scope.row)">新增进度</el-button>
              <el-button size="mini" type="danger" @click="del(scope.row,$event)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>

    <!-- 页码 -->
    <Pagination :page-url="this.urls.aftersale" @handlePagChg="handlePagChg"></Pagination>

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

    <!--删除-->
    <el-popover placement="top" width="160" v-model="showDel" slot="tip">
      <p>确定删除该条数据？</p>
      <div style="text-align: right; margin: 0">
        <el-button size="mini" type="text" @click="cancelD">取消</el-button>
        <el-button type="primary" size="mini" @click="confirmD(delId)">确定</el-button>
      </div>
    </el-popover>

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
          cnt: "删除",
          icon: "bf-del",
          ent: this.delMore
        },
        {
          cnt: "导出",
          icon: "bf-out",
          ent: this.test
        },
        {
          cnt: "还原",
          icon: "bf-reduce",
          ent: this.test
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
        client_name: "",
        user_id: "",
        orderStaff: [{ label: "ceshi", value: 0 }],
        order_phone: "",
        after_sale_type: "",
        order_schedule: "",
        created_at: "",
        charge_checkDate: "",
        order_submitDate: "",
        after_sale_sort: "",
        afterSaleSort: [
          { label: "售后", value: 0 },
          { label: "售中", value: 1 }
        ],
        after_sale_checkDate: "",
        tag_name: "",
        deliveryDate: ""
      },
      /* 中间tabs */
      topActiveName: "0",
      checkboxInit: false,
      allData: [],
      uncloseData: [],
      closeData: [],
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
          label: "原订单业务员",
          width: "150",
          prop: "previous_order_staff",
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
          label: "退货责任方",
          width: "120",
          prop: "after_responsible_party",
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
          label: "补件信息",
          width: "180",
          prop: "rfe_information",
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
        },
        {
          label: "售后单类型",
          width: "180",
          prop: "after_sale_order_type",
          type: "text"
        },
        {
          label: "客服提交",
          width: "90",
          prop: "is_service_submit",
          type: "checkbox"
        },
        {
          label: "客服提交人",
          width: "150",
          prop: "service_submit_person",
          type: "text"
        },
        {
          label: "客服提交时间",
          width: "180",
          prop: "service_submit_date",
          type: "text"
        },
        {
          label: "售后审核",
          width: "90",
          prop: "is_after_sale_check",
          type: "checkbox"
        },
        {
          label: "售后审核人",
          width: "150",
          prop: "after_sale_check_person",
          type: "text"
        },
        {
          label: "售后审核时间",
          width: "180",
          prop: "after_sale_check_date",
          type: "text"
        },
        {
          label: "主管审核",
          width: "90",
          prop: "is_director_check",
          type: "checkbox"
        },
        {
          label: "主管审核人",
          width: "150",
          prop: "director_check_person",
          type: "text"
        },
        {
          label: "主管审核时间",
          width: "180",
          prop: "director_check_date",
          type: "text"
        },
        {
          label: "启用",
          width: "90",
          prop: "status",
          type: "checkbox"
        },
        {
          label: "结算",
          width: "90",
          prop: "is_close",
          type: "checkbox"
        },
        {
          label: "结算时间",
          width: "180",
          prop: "close_date",
          type: "text"
        }
      ],
      // 数据
      allData: [],
      finishData: [],
      unfinishData: [],
      allLoading: true,
      finishLoading: true,
      unfinishLoading: true,
      // 删除
      addId: "",
      showDel: false,
      delId: "",
      delArr: [],
      selection: "",
      // 修改
      updateMask: false,
      updateId: "",
      updateIndex: "",
      updateSchIndex: "",
      updateForm: {},
      componentShowChg: true,
      updateCompUpload: "upload0",
      updateRwIndex: "0",
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
      //查询
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
        client_name: "",
        user_id: "",
        orderStaff: [{ label: "ceshi", value: 0 }],
        order_phone: "",
        after_sale_type: "",
        order_schedule: "",
        created_at: "",
        charge_checkDate: "",
        order_submitDate: "",
        after_sale_sort: "",
        afterSaleSort: [
          { label: "售后", value: 0 },
          { label: "售中", value: 1 }
        ],
        after_sale_checkDate: "",
        tag_name: "",
        deliveryDate: ""
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
          this.$fetch(this.urls.aftersale, {
            include: "afterSaleSchedules.user,afterSaleDefPros,user,afterSaleRefunds,afterSaleReturns,afterSalePatchs"
          }).then(
            res => {
              this.allLoading = false;
              this.allData = res.data;
              this.checkboxInit = false;
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
              let pg = res.meta.pagination;
              this.$store.dispatch("currentPage", pg.current_page);
              this.$store.commit("PER_PAGE", pg.per_page);
              this.$store.commit("PAGE_TOTAL", pg.total);
              /*请求子数据*/
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
          this.$fetch(this.urls.aftersale, {
            is_finish: false,
            include: "afterSaleSchedules.user,afterSaleDefPros,user,afterSaleRefunds,afterSaleReturns,afterSalePatchs"
          }).then(
            res => {
              this.unfinishLoading = false;
              this.unfinishData = res.data;
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
        case 2:
          this.$fetch(this.urls.aftersale, {
            order_status: 50,
            include: "afterSaleSchedules.user,afterSaleDefPros,user,afterSaleRefunds,afterSaleReturns,afterSalePatchs"
          }).then(
            res => {
              this.finishLoading = false;
              this.finishData = res.data;
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
    afterSCenterRowClick(row) {
      this.curRowId = row.id;
      this.curRowData = row;
      this.scheduleData = row["afterSaleSchedules"].data;
      this.defProData = row["afterSaleDefPros"].data;
    },
    // 单条删除
    del(row, e) {
      this.showDel = true;
      $(".el-popper").css({ left: e.x - 100 + "px", top: e.y - 125 + "px" });
      this.delId = row.id;
    },
    cancelD() {
      this.showDel = false;
      this.$message({
        message: "取消删除",
        type: "info"
      });
    },
    confirmD(id) {
      this.$del(this.urls.aftersale + "/" + id).then(
        () => {
          this.$message({
            message: "删除成功",
            type: "success"
          });
          this.showDel = false;
          this.refresh();
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
            this.$message.error({
              message: str
            });
          }
        }
      );
    },
    handleSelectionChange(val) {
      if (val.length != 0) {
        this.updateId = val[0].id;
      } else {
        this.updateId = "";
      }
      this.selection = val;
      let del = [];
      val.forEach(selectedItem => {
        del.push(selectedItem.id);
      });
      this.delArr = del.join(",");
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
    // 删除
    delMore() {
      if (this.delArr.length === 0) {
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
            this.$del(this.urls.aftersale, { ids: this.delArr }).then(
              () => {
                this.$message({
                  message: "删除成功",
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
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消删除"
            });
          });
      }
    },
    // 刷新
    refresh() {
      this.allLoading = true;
      this.finishLoading = true;
      this.unfinishLoading = true;
      this.checkboxInit = false;
      this.fetchAfterSaleData();
    },
    // 分页
    handlePagChg(page) {
      this.$fetch(this.urls.aftersale + "?page=" + page).then(res => {
        this.logisticsData = res.data;
      });
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