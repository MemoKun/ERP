<template>
  <div>
    <div>
      <div class="searchBox" v-if="currentPage">
        <span>
          <label>单号</label>
          <el-input v-model="searchBox.shopTitle" clearable class="half"></el-input>
        </span>
        <span>
          <label>买家昵称</label>
          <el-input v-model="searchBox.shopTitle" clearable class="half"></el-input>
        </span>
        <span>
          <label>买家姓名</label>
          <el-input v-model="searchBox.shopTitle" clearable class="half"></el-input>
        </span>
        <span v-if="filterBox">
          <label>补件类别</label>
          <el-select v-model="searchBox.shopTitle" clearable placeholder="请选择">
            <el-option v-for="item in searchBox.shopTitle" :key="item.value" :label="item.label" :value="item.value"></el-option>
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
          <el-input v-model="searchBox.shopTitle" clearable class="half"></el-input>
        </span>
        <span>
          <label>店铺昵称</label>
          <el-select v-model="searchBox.shopTitle" clearable placeholder="请选择">
            <el-option v-for="item in searchBox.shopTitle" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </span>
        <span>
          <label>省市区</label>
          <el-cascader size="middle" :options="options" v-model="searchBox.shopTitle"></el-cascader>
        </span>
      </div>
      <div class="searchBox" v-show="filterBox">
        <span style="text-align: left">
          <label>审核时间</label>
          <el-date-picker v-model="searchBox.shopTitle" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
        </span>
        <div v-if="filterBox" style="text-align: right">
          <el-button type="primary">筛选</el-button>
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
        <el-table :data="submitData" @selection-change="handleSelectionChange" v-loading="orderLoading" @row-click="orderRClick">
          <el-table-column type="selection" width="95" align="center" :checked="checkboxInit"></el-table-column>
          <el-table-column v-for="item in submitHead" :label="item.label" :width="item.width" :key="item.label" align="center">
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
                <span v-if="scope.row[item.prop]">{{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}</span>
              </span>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="已提交" name="1">
        <el-table :data="submitData" @selection-change="handleSelectionChange" v-loading="orderLoading" @row-click="orderRClick">
          <el-table-column type="selection" width="95" align="center" :checked="checkboxInit"></el-table-column>
          <el-table-column v-for="item in submitHead" :label="item.label" :width="item.width" :key="item.label" align="center">
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
                <span v-if="scope.row[item.prop]">{{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}</span>
              </span>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
    <!--页码-->
    <Pagination :page-url="this.urls.resupplieApplication" @handlePagChg="handlePagChg"></Pagination>
    <!--补件产品信息tab-->
    <div>
      <el-tabs v-model="bottomActiveName" @tab-click="bottomTabsClick">
        <el-tab-pane label="补件产品" name="0">
          <el-table :data="resupplyInfoData" v-loading="orderLoading">
            <el-table-column v-for="item in resupplyInfoHead" :label="item.label" align="center" :width="item.width" :key="item.label">
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
                  <span v-if="scope.row[item.prop]">{{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}</span>
                </span>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="问题产品" name="1" v-loading="orderLoading">
          <el-table :data="problemProData">
            <el-table-column v-for="item in problemProHead" :label="item.label" align="center" :width="item.width" :key="item.label">
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
                  <span v-if="scope.row[item.prop]">{{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}</span>
                </span>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="图片信息" name="2" v-loading="orderLoading">
          <div style="text-align: right">
            <template slot-scope="scope">
              <div :data="imageData">
                <span v-for="item in imageHead" :key="item.prop">
                  <img :src="scope.row[item.prop]">
                </span>
              </div>
            </template>
            <el-button>删除</el-button>
            <el-button>上传</el-button>
          </div>
        </el-tab-pane>
        <el-tab-pane label="驳回原因" name="3" v-loading="orderLoading">
          <el-table :data="rejectReasonData">
            <el-table-column v-for="item in rejectReasonHead" :label="item.label" align="center" :width="item.width" :key="item.label">
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
                  <span v-if="scope.row[item.prop]">{{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}</span>
                </span>
              </template>
            </el-table-column>
          </el-table>
          <div></div>
        </el-tab-pane>
        <el-tab-pane label="操作记录" name="4" v-loading="orderLoading">
          <el-table :data="operationData">
            <el-table-column v-for="item in operationHead" :label="item.label" align="center" :width="item.width" :key="item.label">
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
                  <span v-if="scope.row[item.prop]">{{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}</span>
                </span>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="补件进度" name="5" v-loading="orderLoading">
          <el-table :data="progressData" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="95" align="center" :checked="checkboxInit"></el-table-column>
            <el-table-column v-for="item in progressHead" :label="item.label" align="center" :width="item.width" :key="item.label">
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
                  <span v-if="scope.row[item.prop]">{{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}</span>
                </span>
              </template>
            </el-table-column>
          </el-table>
          <div style="text-align: right">
            <el-button @click="addProgress">新增进度</el-button>
            <el-button @click="updateProgress">修改进度</el-button>
            <el-button @click="delProgress">删除进度</el-button>
          </div>
        </el-tab-pane>
      </el-tabs>

      <!--新增-->
      <el-dialog title="新增" :visible.sync="addMask" :class="{'more-forms':moreForms}">
        <el-form :model="addOrderForm" :rules="orderRules" ref="addNew">
          <el-form-item v-for="(item,index) in addOrderHead" :key="index" :label="item.label" :prop="item.prop">
            <span v-if="item.type=='text'">
              <el-input v-model.trim="addOrderForm[item.prop]" :disabled="item.addChgAble"></el-input>
            </span>
            <span v-else-if="item.type == 'cascader'">
              <el-cascader size="middle" v-model="addOrderForm[item.prop]"></el-cascader>
            </span>
            <span v-else-if="item.type == 'number'">
              <el-input type="number" v-model="addOrderForm[item.prop]"></el-input>
            </span>
            <span v-else-if="item.type=='textarea'">
              <el-input type="textarea" v-model.trim="addOrderForm[item.prop]"></el-input>
            </span>
            <span v-else-if="item.type=='select'">
              <el-select v-model="addOrderForm[item.prop]" :placeholder="item.holder">
                <span v-for="list in resData[item.stateVal]" :key="list.id">
                  <el-option :label="list.name?list.name:list.nick" :value="list.id"></el-option>
                </span>
              </el-select>
            </span>
            <span v-else-if="item.type=='DatePicker'">
              <el-date-picker v-model="addOrderForm[item.prop]" type="datetime"></el-date-picker>
            </span>
          </el-form-item>
        </el-form>
        <el-button type="text">问题产品</el-button>
        <el-table :data="addProblemProVal" fit height="180" :row-class-name="addProCName" @row-click="addProRowClick">
          <el-table-column v-for="item in addProblemProHead" :label="item.label" align="center" :width="item.width" :key="item.label">
            <template slot-scope="scope">
              <span v-if="problemProIndex=='index'+scope.$index">
                <span v-if="item.type=='text'">
                  <el-input size="small" type="text" v-model.trim="scope.row[item.prop]"></el-input>
                </span>
                <span v-else-if="item.type=='textarea'">
                  <el-input type="textarea" v-model.trim="scope.row[item.prop]"></el-input>
                </span>
                <span v-else-if="item.type=='select'">
                  <el-select v-model="scope.row[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble">
                    <span v-for="list in resData[item.stateVal]" :key="list.id">
                      <span v-if="item.stateVal=='products'">
                        <el-option :label="list.commodity_code?list.commodity_code:list.name" :value="list.id"></el-option>
                      </span>
                      <span v-else-if="item.stateVal=='productcomponents'">
                        <el-option :label="list.component_code?list.component_code:list.name" :value="list.id"></el-option>
                      </span>
                      <span v-else>
                        <el-option :label="list.name?list.name:list.nick" :value="list.id"></el-option>
                      </span>
                    </span>
                  </el-select>
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
                <span v-else>{{scope.row[item.prop]}}</span>
              </span>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="90" align="center">
            <template slot-scope="scope">
              <el-button size="mini" type="danger" @click="addProDel(scope.$index)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div>
          <el-button type="primary" @click="addProblemPro">添加问题产品</el-button>
        </div>
        <el-button type="text">补件产品</el-button>
        <el-table :data="addResupplyInfoVal" fit height="300" :row-class-name="addInfoCName" @row-click="addInfoRowClick">
          <el-table-column v-for="item in addResupplyInfoHead" :label="item.label" align="center" :width="item.width" :key="item.label">
            <template slot-scope="scope">
              <span v-if="problemProIndex=='index'+scope.$index">
                <span v-if="item.type=='text'">
                  <el-input size="small" type="text" v-model.trim="scope.row[item.prop]"></el-input>
                </span>
                <span v-else-if="item.type=='number'">
                  <el-input size="small" type="number" v-model.trim="scope.row[item.prop]"></el-input>
                </span>
                <span v-else-if="item.type=='textarea'">
                  <el-input type="textarea" v-model.trim="scope.row[item.prop]"></el-input>
                </span>
                <span v-else-if="item.type=='select'">
                  <el-select v-model="scope.row[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble">
                    <span v-for="list in resData[item.stateVal]" :key="list.id">
                      <span v-if="item.stateVal=='products'">
                        <el-option :label="list.commodity_code?list.commodity_code:list.name" :value="list.id"></el-option>
                      </span>
                      <span v-else-if="item.stateVal=='productcomponents'">
                        <el-option :label="list.component_code?list.component_code:list.name" :value="list.id"></el-option>
                      </span>
                      <span v-else>
                        <el-option :label="list.name?list.name:list.nick" :value="list.id"></el-option>
                      </span>
                    </span>
                  </el-select>
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
                <span v-else>{{scope.row[item.prop]}}</span>
              </span>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="90" align="center">
            <template slot-scope="scope">
              <el-button size="mini" type="danger" @click="addResupplyInfoDel(scope.$index)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div>
          <el-button type="primary" @click="addResupplyInfo">添加补件产品</el-button>
        </div>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="addConfirm">确定</el-button>
          <el-button @click="addCancel">取消</el-button>
        </div>
      </el-dialog>
      <!--修改-->
      <el-dialog title="修改" :visible.sync="updateMask" :class="{'more-forms':moreForms}">
        <el-form :model="updateOrderForm" :rules="orderRules" ref="addNew">
          <el-form-item v-for="(item,index) in addOrderHead" :key="index" :label="item.label" :prop="item.prop">
            <span v-if="item.type=='text'">
              <el-input v-model.trim="updateOrderForm[item.prop]" :disabled="item.addChgAble||item.updateChgAble"></el-input>
            </span>
            <span v-else-if="item.type == 'cascader'">
              <el-cascader size="middle" v-model="updateOrderForm[item.prop]"></el-cascader>
            </span>
            <span v-else-if="item.type == 'number'">
              <el-input type="number" v-model="updateOrderForm[item.prop]"></el-input>
            </span>
            <span v-else-if="item.type=='textarea'">
              <el-input type="textarea" v-model.trim="updateOrderForm[item.prop]"></el-input>
            </span>
            <span v-else-if="item.type=='select'">
              <el-select v-model="updateOrderForm[item.prop]" :placeholder="item.holder">
                <span v-for="list in resData[item.stateVal]" :key="list.id">
                  <el-option :label="list.name?list.name:list.nick" :value="list.id"></el-option>
                </span>
              </el-select>
            </span>
            <span v-else-if="item.type=='DatePicker'">
              <el-date-picker v-model="updateOrderForm[item.prop]" type="datetime"></el-date-picker>
            </span>
          </el-form-item>
        </el-form>
        <el-button type="text">问题产品</el-button>
        <el-table :data="updateProblemProVal" fit height="180" :row-class-name="addProCName" @row-click="addProRowClick">
          <el-table-column v-for="item in addProblemProHead" :label="item.label" align="center" :width="item.width" :key="item.label">
            <template slot-scope="scope">
              <span v-if="problemProIndex=='index'+scope.$index">
                <span v-if="item.type=='text'">
                  <el-input size="small" type="text" v-model.trim="scope.row[item.prop]"></el-input>
                </span>
                <span v-else-if="item.type=='textarea'">
                  <el-input type="textarea" v-model.trim="scope.row[item.prop]"></el-input>
                </span>
                <span v-else-if="item.type=='select'">
                  <el-select v-model="scope.row[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble">
                    <span v-for="list in resData[item.stateVal]" :key="list.id">
                      <span v-if="item.stateVal=='products'">
                        <el-option :label="list.commodity_code?list.commodity_code:list.name" :value="list.id"></el-option>
                      </span>
                      <span v-else-if="item.stateVal=='productcomponents'">
                        <el-option :label="list.component_code?list.component_code:list.name" :value="list.id"></el-option>
                      </span>
                      <span v-else>
                        <el-option :label="list.name?list.name:list.nick" :value="list.id"></el-option>
                      </span>
                    </span>
                  </el-select>
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
                <span v-else>{{scope.row[item.prop]}}</span>
              </span>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="90" align="center">
            <template slot-scope="scope">
              <el-button size="mini" type="danger" @click="updateProDel(scope.$index)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div>
          <el-button type="primary" @click="addProblemPro">添加问题产品</el-button>
        </div>
        <el-button type="text">补件产品</el-button>
        <el-table :data="updateResupplyInfoVal" fit height="300" :row-class-name="addInfoCName" @row-click="addInfoRowClick">
          <el-table-column v-for="item in addResupplyInfoHead" :label="item.label" align="center" :width="item.width" :key="item.label">
            <template slot-scope="scope">
              <span v-if="problemProIndex=='index'+scope.$index">
                <span v-if="item.type=='text'">
                  <el-input size="small" type="text" v-model.trim="scope.row[item.prop]"></el-input>
                </span>
                <span v-else-if="item.type=='number'">
                  <el-input size="small" type="number" v-model.trim="scope.row[item.prop]"></el-input>
                </span>
                <span v-else-if="item.type=='textarea'">
                  <el-input type="textarea" v-model.trim="scope.row[item.prop]"></el-input>
                </span>
                <span v-else-if="item.type=='select'">
                  <el-select v-model="scope.row[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble">
                    <span v-for="list in resData[item.stateVal]" :key="list.id">
                      <span v-if="item.stateVal=='products'">
                        <el-option :label="list.commodity_code?list.commodity_code:list.name" :value="list.id"></el-option>
                      </span>
                      <span v-else-if="item.stateVal=='productcomponents'">
                        <el-option :label="list.component_code?list.component_code:list.name" :value="list.id"></el-option>
                      </span>
                      <span v-else>
                        <el-option :label="list.name?list.name:list.nick" :value="list.id"></el-option>
                      </span>
                    </span>
                  </el-select>
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
                <span v-else>{{scope.row[item.prop]}}</span>
              </span>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="90" align="center">
            <template slot-scope="scope">
              <el-button size="mini" type="danger" @click="updateResupplyInfoDel(scope.$index)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div>
          <el-button type="primary" @click="addResupplyInfo">添加补件产品</el-button>
        </div>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="updateConfirm">确定</el-button>
          <el-button @click="updateCancel">取消</el-button>
        </div>
      </el-dialog>
      <!--驳回-->
      <el-dialog title="驳回" :visible.sync="rejectMask">
        <add-new :rule-form="rejectForm" :add-arr="rejectHead" :onlyInputs="true"></add-new>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="rejectConfirm">确定</el-button>
          <el-button @click="rejectCancel">取消</el-button>
        </div>
      </el-dialog>
      <!--添加补件进度-->
      <el-dialog title="新增补件进度" :visible.sync="addProgressMask">
        <add-new :rule-form="addProgressForm" :add-arr="addProgressHead" :onlyInputs="true"></add-new>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="addProgressConfirm">确定</el-button>
          <el-button @click="addProgressCancel">取消</el-button>
        </div>
      </el-dialog>
      <!--修改补件进度-->
      <el-dialog title="修改补件进度" :visible.sync="updateProgressMask">
        <add-new :rule-form="updateProgressFrom" :add-arr="addProgressHead" :onlyInputs="true"></add-new>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="updateProgressConfirm">确定</el-button>
          <el-button @click="updateProgressCancel">取消</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import { regionDataPlus } from "element-china-area-data";
export default {
  data() {
    return {
      newOpt: [
        {
          cnt: "新增",
          icon: "bf-add",
          ent: this.addOrder
        },
        {
          cnt: "修改",
          icon: "bf-change",
          ent: this.updateOrder,
          nClick: false
        },
        {
          cnt: "提交",
          icon: "bf-submit",
          ent: this.submit,
          nClick: false
        },
        {
          cnt: "驳回",
          icon: "bf-reject",
          ent: this.reject,
          nClick: true
        },
        {
          cnt: "打印",
          icon: "bf-printer",
          ent: this.test
        },
        {
          cnt: "作废",
          icon: "bf-void",
          ent: this.void
        },
        {
          cnt: "刷新",
          icon: "bf-refresh",
          ent: this.refresh
        }
      ],
      checkboxInit: false,
      currentPage: true,
      filterBox: false,
      activeName: "0",
      bottomActiveName: "0",
      searchBox: {
        buyNick: "",
        shopTitle: ""
      },
      //分页
      pagination: {
        current_page: 1,
        per_page: 0,
        page_total: 0
      },
      /*提交信息 */
      submitData: [],
      submitHead: [
        {
          label: "补件单号",
          width: "220",
          prop: "resupply_order_no",
          type: "text"
        },
        {
          label: "系统单号",
          width: "220",
          prop: "system_order_no",
          type: "text"
        },
        {
          label: "补件类别",
          width: "140",
          prop: "resupplieCategory",
          inProp: "name",
          type: "text"
        },
        {
          label: "补件金额",
          width: "130",
          prop: "resupply_money",
          type: "number"
        },
        {
          label: "补件原因",
          width: "300",
          prop: "resupply_reason",
          type: "text"
        },
        {
          label: "补件责任方",
          width: "160",
          prop: "resupplieResponsible",
          inProp: "name",
          type: "text"
        },
        {
          label: "店铺昵称",
          width: "130",
          prop: "shop_nick",
          type: "text"
        },
        {
          label: "买家昵称",
          width: "130",
          prop: "member_nick",
          type: "text"
        },
        {
          label: "店铺分组",
          width: "140",
          prop: "shop_group",
          type: "text"
        },
        {
          label: "买家姓名",
          width: "130",
          prop: "member_name",
          type: "text"
        },
        {
          label: "买家电话",
          width: "160",
          prop: "member_phone",
          type: "number"
        },
        {
          label: "物流公司",
          width: "140",
          prop: "logistic",
          inProp: "name",
          type: "text"
        },
        {
          label: "预计运费",
          width: "130",
          prop: "estimated_fee",
          type: "number"
        },
        {
          label: "物流赔偿费用",
          width: "130",
          prop: "compensate_fee",
          type: "number"
        },
        {
          label: "运费类型",
          width: "140",
          prop: "freightType",
          inProp: "name",
          type: "text"
        },
        {
          label: "供应商",
          width: "130",
          prop: "supplier",
          inProp: "name",
          type: "text"
        },
        {
          label: "配送方式",
          width: "160",
          prop: "distributionMethod",
          inProp: "name",
          type: "text"
        },
        {
          label: "送装费",
          width: "130",
          prop: "load_fee",
          type: "number"
        },
        {
          label: "承诺时间",
          width: "140",
          prop: "promise_time",
          type: "text"
        },
        {
          label: "补款方式",
          width: "140",
          prop: "refundMethod",
          inProp: "name",
          type: "text"
        },
        {
          label: "补款账号",
          width: "160",
          prop: "refund_account",
          type: "text"
        },
        {
          label: "开户银行",
          width: "140",
          prop: "bank",
          type: "text"
        },
        {
          label: "省",
          width: "120",
          prop: "supplier",
          inProp: "province",
          type: "text"
        },
        {
          label: "市",
          width: "120",
          prop: "supplier",
          inProp: "city",
          type: "text"
        },
        {
          label: "区",
          width: "120",
          prop: "supplier",
          inProp: "district",
          type: "text"
        },
        {
          label: "创建人",
          width: "140",
          prop: "creator",
          type: "text"
        },
        {
          label: "创建时间",
          width: "140",
          prop: "created_at",
          type: "text"
        },
        {
          label: "备注",
          width: "300",
          prop: "remark",
          type: "text"
        },
        {
          label: "标记名称",
          width: "140",
          prop: "mark_name",
          type: "text"
        },
        {
          label: "标记人",
          width: "140",
          prop: "marker",
          type: "text"
        },
        {
          label: "标记时间",
          width: "140",
          prop: "mark_time",
          type: "text"
        }
      ],
      /*补件产品信息 */
      resupplyInfoData: [], //补件产品
      problemProData: [], //问题产品
      imageData: [], //图片信息
      rejectReasonData: [], //驳回原因
      operationData: [], //操作记录
      progressData: [], //补件进度
      resupplyInfoHead: [
        //补件产品
        {
          label: "商品编码",
          width: "160",
          prop: "product",
          inProp: "commodity_code",
          type: "text"
        },
        {
          label: "规格编码",
          width: "160",
          prop: "productComponent",
          inProp: "component_code",
          type: "text"
        },
        {
          label: "商品简称",
          width: "160",
          prop: "product",
          inProp: "short_name",
          type: "text"
        },
        {
          label: "规格名称",
          width: "160",
          prop: "productComponent",
          inProp: "spec",
          type: "text"
        },
        {
          label: "数量",
          width: "120",
          prop: "quantity",
          type: "number"
        },
        {
          label: "商品成本",
          width: "120",
          prop: "productComponent",
          inProp: "cost",
          type: "number"
        },
        {
          label: "实际售价",
          width: "120",
          prop: "actual_price",
          type: "number"
        },
        {
          label: "备注",
          width: "200",
          prop: "remark",
          type: "text"
        }
      ],
      problemProHead: [
        //问题产品
        {
          label: "商品编码",
          width: "160",
          prop: "product",
          inProp: "commodity_code",
          type: "text"
        },
        {
          label: "规格编码",
          width: "160",
          prop: "productComponent",
          inProp: "component_code",
          type: "text"
        },
        {
          label: "商品简称",
          width: "160",
          prop: "product",
          inProp: "short_name",
          type: "text"
        },
        {
          label: "规格名称",
          width: "160",
          prop: "productComponent",
          inProp: "spec",
          type: "text"
        },
        {
          label: "供应商",
          width: "130",
          prop: "supplier",
          inProp: "name",
          type: "text"
        },
        {
          label: "问题描述",
          width: "200",
          prop: "problem_description",
          type: "text"
        }
      ],
      imageHead: [
        //图片信息
        {
          prop: "img_url",
          tyep: "img"
        }
      ],
      rejectReasonHead: [
        //驳回原因
        {
          label: "驳回人",
          width: "130",
          prop: "rejecter",
          type: "text"
        },
        {
          label: "驳回时间",
          width: "130",
          prop: "created_at",
          type: "text"
        },
        {
          label: "驳回原因",
          width: "200",
          prop: "reason",
          type: "text"
        }
      ],
      operationHead: [
        //操作记录
        {
          label: "用户",
          width: "130",
          prop: "user_name",
          type: "text"
        },
        {
          label: "操作",
          width: "160",
          prop: "operated",
          type: "text"
        },
        {
          label: "操作描述",
          width: "200",
          prop: "description",
          type: "text"
        },
        {
          label: "创建时间",
          width: "130",
          prop: "created_at",
          type: "text"
        }
      ],
      progressHead: [
        //补件进度
        {
          label: "进度描述",
          width: "200",
          prop: "description",
          type: "text"
        },
        {
          label: "创建人",
          width: "150",
          prop: "creator",
          type: "text"
        },
        {
          label: "创建时间",
          width: "200",
          prop: "created_at",
          type: "text"
        }
      ],
      orderId: "",
      orderRow: {},
      options: regionDataPlus,
      moreForms: true,
      //新增
      addMask: false,
      resupplyIndex: "",
      problemProIndex: "",
      //resData:[],
      addOrderForm: {
        system_order_no: "",
        member_name: "",
        member_phone: "",
        re_supplie_categories_id: "",
        resupply_money: "",
        refund_methods_id: "",
        refund_account: "",
        bank: "",
        logistics_id: "",
        estimated_fee: "",
        compensate_fee: "",
        load_fee: "",
        suppliers_id: "",
        resupply_reason: "",
        distribution_methods_id: "",
        freight_types_id: "",
        promise_time: "",
        remark: "",
        address: "",
        re_supplie_responsibles_id: "",
        package_types_id: ""
      },
      addResupplyInfoVal: [
        {
          products_id: "",
          product_components_id: "",
          quantity: "",
          actual_price: "",
          remark: ""
        }
      ],
      addProblemProVal: [
        {
          products_id: "",
          product_components_id: "",
          suppliers_id: "",
          problem_description: ""
        }
      ],
      addOrderHead: [
        {
          label: "补件单号",
          prop: "resupply_order_no",
          holder: "系统自动生成",
          type: "text",
          addChgAble: true
        },
        {
          label: "系统单号",
          prop: "system_order_no",
          holder: "请输入系统单号",
          type: "text",
          updateChgAble: true
        },
        {
          label: "买家姓名",
          prop: "member_name",
          holder: "请输入买家姓名",
          type: "text"
        },
        {
          label: "买家电话",
          prop: "member_phone",
          holder: "请输入买家电话",
          type: "text"
        },
        {
          label: "补件类别",
          prop: "re_supplie_categories_id",
          holder: "请选择补件类别",
          type: "select",
          stateVal: "resupplieCategory"
        },
        {
          label: "补件金额",
          prop: "resupply_money",
          holder: "请输入补件金额",
          type: "number"
        },
        {
          label: "补款方式",
          prop: "refund_methods_id",
          holder: "请选择补款方式",
          type: "select",
          stateVal: "refundMethod"
        },
        {
          label: "补款账号",
          prop: "refund_account",
          holder: "请输入补款账号",
          type: "text"
        },
        {
          label: "开户银行",
          prop: "bank",
          holder: "请输入开户银行",
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
          label: "预计运费",
          prop: "estimated_fee",
          holder: "请输入预计运费",
          type: "number"
        },
        {
          label: "物流补偿费",
          prop: "compensate_fee",
          holder: "请输入物流补偿费",
          type: "number"
        },
        {
          label: "送装费",
          prop: "load_fee",
          holder: "请输入送装费",
          type: "number"
        },
        {
          label: "供应商",
          prop: "suppliers_id",
          holder: "请选择供应商",
          type: "select",
          stateVal: "suppliers"
        },
        {
          label: "补件原因",
          prop: "resupply_reason",
          holder: "请输入补件原因",
          type: "textarea"
        },
        {
          label: "配送方式",
          prop: "distribution_methods_id",
          holder: "请选择配送方式",
          type: "select",
          stateVal: "distmets"
        },
        {
          label: "运费类型",
          prop: "freight_types_id",
          holder: "请选择运费类型",
          type: "select",
          stateVal: "freighttypes"
        },
        {
          label: "承诺时间",
          prop: "promise_time",
          holder: "请输入承诺时间",
          type: "DatePicker"
        },
        {
          label: "客服备注",
          prop: "remark",
          holder: "请输入客服备注",
          type: "textarea"
        },
        {
          label: "收货地址",
          prop: "address",
          holder: "请输入收货地址",
          type: "textarea"
        },
        {
          label: "补件责任方",
          prop: "re_supplie_responsibles_id",
          holder: "请选择补件责任方",
          type: "select",
          stateVal: "resupplieResponsible"
        },
        {
          label: "包件类型",
          width: "140",
          prop: "package_types_id",
          type: "select",
          stateVal: "packageType"
        }
      ],
      orderRules: {
        resupply_order_no: [
          { required: true, message: "请输入补件单号", trigger: "blur" }
        ],
        system_order_no: [
          { required: true, message: "请输入系统单号", trigger: "blur" }
        ],
        re_supplie_categories_id: [
          { required: true, message: "请选择补件类别", trigger: "blur" }
        ],
        refund_methods_id: [
          { required: true, message: "请选择补款方式", trigger: "blur" }
        ],
        logistics_id: [{ required: true, message: "请选择物流公司", trigger: "blur" }],
        suppliers_id: [{ required: true, message: "请选择供应商", trigger: "blur" }],
        distribution_methods_id: [
          { required: true, message: "请选择配送方式", trigger: "blur" }
        ],
        freight_types_id: [
          { required: true, message: "请选择运费类型", trigger: "blur" }
        ],
        re_supplie_responsibles_id: [
          { required: true, message: "请选择补件责任方", trigger: "blur" }
        ]
      },
      addProblemProHead: [
        {
          label: "商品编码",
          width: "160",
          prop: "products_id",
          stateVal: "products",
          type: "select"
        },
        {
          label: "规格编码",
          width: "160",
          prop: "product_components_id",
          stateVal: "productcomponents",
          type: "select"
        },
        {
          label: "供应商",
          width: "130",
          prop: "suppliers_id",
          stateVal: "suppliers",
          type: "select"
        },
        {
          label: "问题描述",
          width: "200",
          prop: "problem_description",
          type: "textarea"
        }
      ],
      addResupplyInfoHead: [
        {
          label: "商品编码",
          width: "160",
          prop: "products_id",
          stateVal: "products",
          type: "select"
        },
        {
          label: "规格编码",
          width: "160",
          prop: "product_components_id",
          stateVal: "productcomponents",
          type: "select"
        },
        {
          label: "数量",
          width: "120",
          prop: "quantity",
          type: "number"
        },
        {
          label: "商品成本",
          width: "120",
          prop: "cost",
          type: "number"
        },
        {
          label: "实际售价",
          width: "120",
          prop: "actual_price",
          type: "number"
        },
        {
          label: "备注",
          width: "200",
          prop: "remark",
          type: "textarea"
        }
      ],
      //修改
      updateMask: false,
      updateResupplyInfoIndex: "",
      updateproblemProIndex: "",
      updateOrderForm: {},
      updateProblemProVal: [],
      updateResupplyInfoVal: [],
      //选择
      currentId: "",
      orderSelection: "",
      delUrl: "",
      delId: "",
      delArr: [],
      //驳回
      rejectMask: false,
      rejectForm: {
        rejecter: "",
        reason: ""
      },
      rejectHead: [
        {
          label: "驳回人",
          holder: "请输入驳回人",
          prop: "rejecter",
          type: "text"
        },
        {
          label: "驳回原因",
          holder: "请输入驳回原因",
          prop: "reason",
          type: "textarea"
        }
      ],
      //补件进度
      addProgressMask: false,
      addProgressForm: {
        creator: "",
        description: ""
      },
      addProgressHead: [
        {
          label: "创建人",
          holder: "请输入创建人",
          prop: "creator",
          type: "text",
          updateChgAble: true
        },
        {
          label: "进度描述",
          holder: "请输入进度描述",
          prop: "description",
          type: "textarea"
        }
      ],
      updateProgressMask: false,
      updateProgressFrom: {},
      //刷新
      orderLoading: true
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
      console.log(1);
    },
    /*展开 */
    toggleShow() {
      this.filterBox = !this.filterBox;
    },
    //重置筛选信息
    resets() {
      this.searchBox = {};
    },
    //获取数据
    fetchData() {
      let index = this.activeName - 0;
      switch (index) {
        case 0:
          this.$fetch(this.urls.resupplieApplication + "/searchUnsubmited", {
            include:
              "resupplieCategory,resupplieResponsible,logistic,freightType,supplier,distributionMethod,refundMethod,resupplieOrderItem.resupplieOrder,resupplieOrderItem.productComponent,resupplieOrderItem.product,resupplieProblemProduct.resupplieOrder,resupplieProblemProduct.product,resupplieProblemProduct.productComponent,resupplieProblemProduct.supplier,resupplieImage,resupplieRejectReason,resupplieOperationRecord,resupplieProgress"
          }).then(
            res => {
              this.orderLoading = false;
              this.submitData = res.data;
              let pg = res.meta.pagination;
              this.$store.dispatch("currentPage", pg.current_page);
              this.$store.commit("PER_PAGE", pg.per_page);
              this.$store.commit("PAGE_TOTAL", pg.total);
              //请求子数据
              this.$store.dispatch("suppliers", "/suppliers");
              this.$store.dispatch("packageType", "/packageType");
              this.$store.dispatch("distmets", "/distmets");
              this.$store.dispatch("resupplieCategory", "/resupplieCategory");
              this.$store.dispatch("refundMethod", "/refundMethod");
              this.resupplyInfoData = res.data[0]
                ? res.data[0]["resupplieOrderItem"].data
                : [];
              this.problemProData = res.data[0]
                ? res.data[0]["resupplieProblemProduct"].data
                : [];
              this.imageData = res.data[0]
                ? res.data[0]["resupplieImage"].data
                : [];
              this.rejectReasonData = res.data[0]
                ? res.data[0]["resupplieRejectReason"].data
                : [];
              this.operationData = res.data[0]
                ? res.data[0]["resupplieOperationRecord"].data
                : [];
              this.progressData = res.data[0]
                ? res.data[0]["resupplieProgress"].data
                : [];
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
          this.$fetch(this.urls.resupplieApplication + "/searchSubmited", {
            include:
              "resupplieCategory,resupplieResponsible,logistic,freightType,supplier,distributionMethod,refundMethod,resupplieOrderItem.resupplieOrder,resupplieOrderItem.productComponent,resupplieOrderItem.product,resupplieProblemProduct.resupplieOrder,resupplieProblemProduct.product,resupplieProblemProduct.productComponent,resupplieProblemProduct.supplier,resupplieImage,resupplieRejectReason,resupplieOperationRecord,resupplieProgress"
          }).then(
            res => {
              this.orderLoading = false;
              this.submitData = res.data;
              let pg = res.meta.pagination;
              this.$store.dispatch("currentPage", pg.current_page);
              this.$store.commit("PER_PAGE", pg.per_page);
              this.$store.commit("PAGE_TOTAL", pg.total);
              //请求子数据
              this.resupplyInfoData = res.data[0]
                ? res.data[0]["resupplieOrderItem"].data
                : [];
              this.problemProData = res.data[0]
                ? res.data[0]["resupplieProblemProduct"].data
                : [];
              this.imageData = res.data[0]
                ? res.data[0]["resupplieImage"].data
                : [];
              this.rejectReasonData = res.data[0]
                ? res.data[0]["resupplieRejectReason"].data
                : [];
              this.operationData = res.data[0]
                ? res.data[0]["resupplieOperationRecord"].data
                : [];
              this.progressData = res.data[0]
                ? res.data[0]["resupplieProgress"].data
                : [];
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
    orderRClick(row) {
      //点击上方tab的某行底部tab更新
      this.orderId = row.id;
      this.resupplyInfoData = row["resupplieOrderItem"].data;
      this.problemProData = row["resupplieProblemProduct"].data;
      this.imageData = row["resupplieImage"].data;
      this.rejectReasonData = row["resupplieRejectReason"].data;
      this.operationData = row["resupplieOperationRecord"].data;
      this.progressData = row["resupplieProgress"].data;
      this.orderRow = row;
    },
    //提交信息tab切换
    handleTabsClick() {
      this.newOpt[0].nClick = this.activeName == "1" ? true : false; //新增
      this.newOpt[1].nClick = this.activeName == "1" ? true : false; //修改
      this.newOpt[2].nClick = this.activeName == "1" ? true : false; //提交
      this.newOpt[3].nClick = this.activeName == "0" ? true : false; //驳回
      this.newOpt[5].nClick = this.activeName == "1" ? true : false; //作废
      this.refresh();
    },
    /*补件信息tab */
    bottomTabsClick() {},
    //新增
    addOrder() {
      this.addMask = true;
      this.resupplyIndex = "index0";
      this.problemProIndex = "index0";
      Object.assign(this.addOrderForm, this.$options.data().addOrderForm);
      Object.assign(
        this.addResupplyInfoVal,
        this.$options.data().addResupplyInfoVal
      );
      Object.assign(
        this.addProblemProVal,
        this.$options.data().addProblemProVal
      );
      this.$store.dispatch("logistics", "/logistics");
      this.$store.dispatch("freighttypes", "/freighttypes");
      this.$store.dispatch("resupplieResponsible", "/resupplieResponsible");
      this.$store.dispatch("products", "/products");
      this.$store.dispatch("productcomponents", "/productcomponents");
    },
    addConfirm() {
      let orderData = {
        system_order_no: this.addOrderForm.system_order_no,
        member_name: this.addOrderForm.member_name,
        member_phone: this.addOrderForm.member_phone,
        re_supplie_categories_id: this.addOrderForm.re_supplie_categories_id,
        resupply_money: this.addOrderForm.resupply_money,
        refund_methods_id: this.addOrderForm.refund_methods_id,
        refund_account: this.addOrderForm.refund_account,
        bank: this.addOrderForm.bank,
        logistics_id: this.addOrderForm.logistics_id,
        estimated_fee: this.addOrderForm.estimated_fee,
        compensate_fee: this.addOrderForm.compensate_fee,
        load_fee: this.addOrderForm.load_fee,
        suppliers_id: this.addOrderForm.suppliers_id,
        resupply_reason: this.addOrderForm.resupply_reason,
        distribution_methods_id: this.addOrderForm.distribution_methods_id,
        freight_types_id: this.addOrderForm.freight_types_id,
        promise_time: this.addOrderForm.promise_time,
        remark: this.addOrderForm.remark,
        address: this.addOrderForm.address,
        re_supplie_responsibles_id: this.addOrderForm
          .re_supplie_responsibles_id,
        package_types_id: this.addOrderForm.package_types_id,
        re_supplie_order_items: this.addResupplyInfoVal,
        re_supplie_problem_products: this.addProblemProVal
      };
      this.$post(this.urls.resupplieApplication, orderData).then(
        () => {
          this.addMask = false;
          this.refresh();
          this.$message({
            message: "添加成功",
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
    addCancel() {
      this.addMask = false;
    },
    addInfoCName({ row, rowIndex }) {
      row.index = rowIndex;
    },
    addInfoRowClick(row) {
      this.resupplyIndex = `index${row.index}`;
    },
    addProCName({ row, rowIndex }) {
      row.index = rowIndex;
    },
    addProRowClick(row) {
      this.problemProIndex = `index${row.index}`;
    },
    addProDel(index) {
      this.addProblemProVal.splice(index, 1);
      this.$message({
        message: "删除问题成功",
        type: "success"
      });
    },
    addResupplyInfoDel(index) {
      this.addResupplyInfoVal.splice(index, 1);
      this.$message({
        message: "删除补件产品成功",
        type: "success"
      });
    },
    addProblemPro() {
      let problemProKey = {
        products_id: "",
        product_components_id: "",
        suppliers_id: "",
        problem_description: ""
      };
      if (this.addMask) {
        this.addProblemProVal.push(problemProKey);
        this.problemProIndex = "index" + (this.addProblemProVal.length - 1);
      } else {
        this.updateProblemProVal.push(problemProKey);
        this.updateproblemProIndex =
          "index" + (this.updateProblemProVal.length - 1);
      }
    },
    addResupplyInfo() {
      let resupplyInfoKey = {
        products_id: "",
        product_components_id: "",
        quantity: "",
        actual_price: "",
        remark: ""
      };
      if (this.addMask) {
        this.addResupplyInfoVal.push(resupplyInfoKey);
        this.resupplyIndex = "index" + (this.addResupplyInfoVal.length - 1);
      } else {
        this.updateResupplyInfoVal.push(resupplyInfoKey);
        this.updateResupplyInfoIndex =
          "index" + (this.updateResupplyInfoVal.length - 1);
      }
    },
    //修改
    updateOrder() {
      this.updateResupplyInfoIndex = "";
      this.updateproblemProIndex = "";
      this.updateOrderForm = {};
      this.updateProblemProVal = [];
      this.updateResupplyInfoVal = [];
      this.updateMask = true;
      let id = this.currentId ? this.currentId : this.orderRow.id;
      this.$fetch(this.urls.resupplieApplication + "/" + id, {
        include:
          "resupplieCategory,resupplieResponsible,logistic,freightType,supplier,distributionMethod,refundMethod,resupplieOrderItem.resupplieOrder,resupplieOrderItem.productComponent,resupplieOrderItem.product,resupplieProblemProduct.resupplieOrder,resupplieProblemProduct.product,resupplieProblemProduct.productComponent,resupplieProblemProduct.supplier,resupplieImage,resupplieRejectReason,resupplieOperationRecord,resupplieProgress"
      }).then(
        res => {
          this.updateOrderForm = res;
          this.updateProblemProVal = res["resupplieProblemProduct"]["data"];
          this.updateResupplyInfoVal = res["resupplieOrderItem"]["data"];
          this.$store.dispatch("logistics", "/logistics");
          this.$store.dispatch("freighttypes", "/freighttypes");
          this.$store.dispatch("resupplieResponsible", "/resupplieResponsible");
          this.$store.dispatch("products", "/products");
          this.$store.dispatch("productcomponents", "/productcomponents");
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
    updateConfirm() {
      let id = this.currentId ? this.currentId : this.orderRow.id;
      let updateData = {
        system_order_no: this.updateOrderForm.system_order_no,
        member_name: this.updateOrderForm.member_name,
        member_phone: this.updateOrderForm.member_phone,
        re_supplie_categories_id: this.updateOrderForm.re_supplie_categories_id,
        resupply_money: this.updateOrderForm.resupply_money,
        refund_methods_id: this.updateOrderForm.refund_methods_id,
        refund_account: this.updateOrderForm.refund_account,
        bank: this.updateOrderForm.bank,
        logistics_id: this.updateOrderForm.logistics_id,
        estimated_fee: this.updateOrderForm.estimated_fee,
        compensate_fee: this.updateOrderForm.compensate_fee,
        load_fee: this.updateOrderForm.load_fee,
        suppliers_id: this.updateOrderForm.suppliers_id,
        resupply_reason: this.updateOrderForm.resupply_reason,
        distribution_methods_id: this.updateOrderForm.distribution_methods_id,
        freight_types_id: this.updateOrderForm.freight_types_id,
        promise_time: this.updateOrderForm.promise_time,
        remark: this.updateOrderForm.remark,
        address: this.updateOrderForm.address,
        re_supplie_responsibles_id: this.updateOrderForm
          .re_supplie_responsibles_id,
        package_types_id: this.updateOrderForm.package_types_id,
        re_supplie_order_items: this.updateResupplyInfoVal,
        re_supplie_problem_products: this.updateProblemProVal
      };
      this.$patch(this.urls.resupplieApplication + "/" + id, updateData).then(
        () => {
          this.updateMask = false;
          this.refresh();
          this.$message({
            message: "修改成功",
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
    updateCancel() {
      this.updateMask = false;
    },
    updateProDel(index) {
      if (row.id) {
        this.$del(this.urls.resupplieProblemProduct + "/" + row.id).then(() => {
          this.updateProblemProVal.splice(index, 1);
          this.$message({
            message: "删除问题产品成功",
            type: "success"
          });
        });
      } else {
        this.updateProblemProVal.splice(index, 1);
        this.$message({
          message: "删除问题产品成功",
          type: "success"
        });
      }
    },
    updateResupplyInfoDel(index) {
      if (row.id) {
        this.$del(this.urls.resupplieOrderItem + "/" + row.id).then(() => {
          this.updateResupplyInfoVal.splice(index, 1);
          this.$message({
            message: "删除补件产品成功",
            type: "success"
          });
        });
      } else {
        this.updateResupplyInfoVal.splice(index, 1);
        this.$message({
          message: "删除补件产品成功",
          type: "success"
        });
      }
    },
    //批量选择
    handleSelectionChange(val) {
      let arr = [];
      val.forEach(selectedItem => {
        arr.push(selectedItem.id);
      });
      this.delArr = arr.join(",");
      this.currentId = val.length > 0 ? val[val.length - 1].id : "";
    },
    //提交
    submit() {
      let id = this.currentId ? this.currentId : this.orderRow.id;
      this.$put(this.urls.resupplieApplication + "/" + id + "/submit").then(
        () => {
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
    },
    //驳回
    reject() {
      this.rejectMask = true;
      Object.assign(this.rejectForm, this.$options.data().rejectForm);
    },
    rejectConfirm() {
      let id = this.currentId ? this.currentId : this.orderRow.id;
      let rejectData = {
        re_supplie_orders_id: this.currentId
          ? this.currentId
          : this.orderRow.id,
        rejecter: this.rejectForm.rejecter,
        reason: this.rejectForm.reason
      };
      this.$post(this.urls.resupplieRejectReason, rejectData).then(
        () => {
          this.$put(this.urls.resupplieApplication + "/" + id + "/reject").then(
            () => {
              this.rejectMask = false;
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
    rejectCancel() {
      this.rejectMask = false;
    },
    //补件进度
    addProgress() {
      this.addProgressMask = true;
      Object.assign(this.addProgressForm, this.$options.data().addProgressForm);
    },
    addProgressConfirm() {
      let id = this.currentId ? this.currentId : this.orderRow.id;
      let addProgressData = {
        re_supplie_orders_id: this.currentId
          ? this.currentId
          : this.orderRow.id,
        description: this.addProgressForm.description,
        creator: this.addProgressForm.creator
      };
      this.$post(this.urls.resupplieProgress, addProgressData).then(
        () => {
          this.addProgressMask = false;
          this.refresh();
          this.$message({
            message: "添加进度成功",
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
    addProgressCancel() {
      this.addProgressMask = false;
      this.$message({
        message: "取消添加",
        type: "info"
      });
    },
    updateProgress() {
      this.updateProgressMask = true;
      let id = this.currentId;
      this.$fetch(this.urls.resupplieProgress + "/" + id).then(
        res => {
          this.updateProgressFrom = {
            description: res.description,
            creator: res.creator
          };
        },
        err => {}
      );
    },
    updateProgressConfirm() {
      let id = this.currentId;
      let data = {
        description: this.updateProgressFrom.description,
        creator: this.updateProgressFrom.creator
      };
      this.$patch(this.urls.resupplieProgress + "/" + id, data).then(
        () => {
          this.updateProgressMask = false;
          this.refresh();
          this.$message({
            message: "修改成功",
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
    updateProgressCancel() {
      this.updateMask = false;
      this.$message({
        message: "取消修改",
        type: "info"
      });
    },
    delProgress() {
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
            this.$del(this.urls.resupplieProgress, { ids: this.delArr }).then(
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
    //作废
    void() {
      let id = this.currentId ? this.currentId : this.orderRow.id;
      this.$put(this.urls.resupplieCenter + "/" + id + "/invalid").then(
        () => {
          this.refresh();
          this.$message({
            message: "作废成功",
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
    //刷新
    refresh() {
      this.orderLoading = true;
      this.fetchData();
    },
    /*分页*/
    handlePagChg(page) {
      this.$fetch(this.urls.resupplieApplication + "?page=" + page, {
        include:
          "resupplieCategory,resupplieResponsible,logistic,freightType,supplier,distributionMethod,refundMethod,resupplieOrderItem.resupplieOrder,resupplieOrderItem.productComponent,resupplieOrderItem.product,resupplieProblemProduct.resupplieOrder,resupplieProblemProduct.product,resupplieProblemProduct.productComponent,resupplieProblemProduct.supplier,resupplieImage,resupplieRejectReason,resupplieOperationRecord,resupplieProgress"
      }).then(res => {
        this.orderData = res.data;
      });
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