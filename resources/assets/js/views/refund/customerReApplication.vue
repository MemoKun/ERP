<template>
    <div>
        <el-tabs v-model="activeName" @tab-click="outerHandleClick">
            <div>
                <div class="searchBox">
                    <span>
                        <label>店铺昵称</label>
                        <el-input v-model.trim="searchBox.shop_nick" clearable></el-input>
                    </span>
                    <span>
                        <label>订单编号</label>
                        <el-input v-model.trim="searchBox.order_no" clearable></el-input>
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
                        <label>还款信息</label>
                        <el-input v-model.trim="searchBox.refund_info" clearable></el-input>
                    </span>
                    <span>
                        <label>锁定人</label>
                        <el-input v-model.trim="searchBox.locker" clearable></el-input>
                    </span>
                    <span>
                        <label>还款时间</label>
                        <el-date-picker v-model="searchBox.refund_time" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
                    </span>
                </div>
            </div>

            <!--显示列表-未处理-->
            <el-tabs v-model="leftTopActiveName" @tab-click="leftHandleClick" style="height: 400px;">
                <el-tab-pane label="未处理" name="0">
                    <el-table :data="orderListData" fit @selection-change="handleSelectionChange" v-loading="loading" height="350" @row-click="orderListRClick" @row-dblclick="orderDbClick">
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
                                <el-button size="mini" type="danger" @click="delSingle(scope.row,$event)">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="已处理" name="1">
                    <el-table :data="alreadyHandle" fit @selection-change="handleSelectionChange" v-loading="loading" height="350" @row-click="orderListRClick" @row-dblclick="orderDbClick">
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
                                <el-button size="mini" type="danger" @click="delSingle(scope.row,$event)">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
            </el-tabs>
            <el-tabs>
                <el-tab-pane label="详细信息" name="0">
                    <el-form :model="detailRefundOrderInfo">
                        <el-table-item v-for="(item,index) in detailRefundOrderHead" :label="item.label" align="center" :width="item.width" :key="index">
                            <span v-if="item.type=='text'">
                                <span v-if="item.inProp">
                                    <el-input v-model.trim="detailRefundOrderInfo[item.prop][item.inProp]" :placeholder="item.holder" :disabled="item.addChgAble"></el-input>
                                </span>
                                <span v-else>
                                    <el-input v-model.trim="detailRefundOrderInfo[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble"></el-input>
                                </span>
                            </span>
                            <span v-else-if="item.type=='number'">
                                <span v-if="item.prop=='deliver_goods_fee' || item.prop=='move_upstairs_fee' || item.prop=='installation_fee'">
                                    <el-input type="number" v-model.trim="detailRefundOrderInfo[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble" @input="formChg"></el-input>
                                </span>
                                <span v-else>
                                    <el-input type="number" v-model.trim="detailRefundOrderInfo[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble"></el-input>
                                </span>
                            </span>
                            <!--选择框拉取数据库数据-->
                            <span v-else-if="item.type=='select'">
                                <el-select v-model="detailRefundOrderInfo[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble">
                                    <span v-for="list in resData[item.stateVal]" :key="list.id">
                                        <el-option :label="list.name?list.name:list.nick" :value="list.id"></el-option>
                                    </span>
                                </el-select>
                            </span>
                            <span v-else-if="item.type == 'selects'">
                                <el-select v-model="detailRefundOrderInfo[item.prop]" :placeholder="item.holder">
                                    <span v-for="list in selectVal[item.prop]" :key="list.value">
                                        <el-option :label="list.label" :value="list.value"></el-option>
                                    </span>
                                </el-select>
                            </span>
                            <span v-else-if="item.type=='textarea'">
                                <el-input type="textarea" v-model.trim="detailRefundOrderInfo[item.prop]" :placehode="item.holder"></el-input>
                            </span>
                            <span v-else-if="item.type=='checkbox'">
                                <el-checkbox v-model="detailRefundOrderInfo[item.prop]" :disabled="item.chgAble"></el-checkbox>
                            </span>
                            <span v-else-if="item.type=='radio'">
                                <el-radio v-model="detailRefundOrderInfo[item.prop]" label="volume">{{item.choiceName[0]}}</el-radio>
                                <el-radio v-model="detailRefundOrderInfo[item.prop]" label="weight">{{item.choiceName[1]}}</el-radio>
                            </span>
                            <span v-else-if="item.type=='DatePicker'">
                                <el-date-picker v-model="detailRefundOrderInfo[item.prop]" type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期"></el-date-picker>
                            </span>
                        </el-table-item>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane label="操作日志" name="1">
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
                                    <span v-if="scope.row[item.prop]">
                                        {{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}
                                    </span>
                                </span>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="图片信息" name="2">
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
                                    <span v-if="scope.row[item.prop]">
                                        {{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}
                                    </span>
                                </span>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="多张图片" name="3">
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
                                    <span v-if="scope.row[item.prop]">
                                        {{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}
                                    </span>
                                </span>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="退款原因" name="4">
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
                                    <span v-if="scope.row[item.prop]">
                                        {{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}
                                    </span>
                                </span>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
            </el-tabs>
        </el-tabs>

        <!--新增-->
        <el-dialog title="新增退款单" :visible.sync="addCustomerMask" :class="{'more-forms':moreForms,'threeParts':threeParts}" class="bigDialog">
            <div class="clearfix">
                <el-button type="text" style="float: left">新增退款单信息</el-button>
            </div>
            <el-form :model="addCustomerFormVal" :rules="addCustomerFormRules" class="customerAddForm" id="form">
                <el-form-item v-for="(item,index) in addCustomerFormHead" :key="index" :label="item.label" :prop="item.prop">
                    <span v-if="item.type=='text'">
                        <span v-if="item.inProp">
                            <el-input v-model.trim="addCustomerFormVal[item.prop][item.inProp]" :placeholder="item.holder" :disabled="item.addChgAble"></el-input>
                        </span>
                        <span v-else>
                            <el-input v-model.trim="addCustomerFormVal[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble"></el-input>
                        </span>
                    </span>
                    <span v-else-if="item.type=='number'">
                        <span v-if="item.prop=='deliver_goods_fee' || item.prop=='move_upstairs_fee' || item.prop=='installation_fee'">
                            <el-input type="number" v-model.trim="addCustomerFormVal[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble" @input="formChg"></el-input>
                        </span>
                        <span v-else>
                            <el-input type="number" v-model.trim="addCustomerFormVal[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble"></el-input>
                        </span>
                    </span>
                    <span v-else-if="item.type=='select'">
                        <el-select v-model="addCustomerFormVal[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble">
                            <span v-for="list in addSubData[item.stateVal]" :key="list.id">
                                <el-option :label="list.name?list.name:list.nick" :value="list.id"></el-option>
                            </span>
                        </el-select>
                    </span>
                    <span v-else-if="item.type=='textarea'">
                        <el-input type="textarea" v-model.trim="addCustomerFormVal[item.prop]" :placehode="item.holder"></el-input>
                    </span>
                    <span v-else-if="item.type=='checkbox'">
                        <el-checkbox v-model="addCustomerFormVal[item.prop]" :disabled="item.chgAble"></el-checkbox>
                    </span>
                    <span v-else-if="item.type=='radio'">
                        <el-radio v-model="addCustomerFormVal[item.prop]" label="volume">{{item.choiceName[0]}}</el-radio>
                        <el-radio v-model="addCustomerFormVal[item.prop]" label="weight">{{item.choiceName[1]}}</el-radio>
                    </span>
                    <span v-else-if="item.type=='DatePicker'">
                        <el-date-picker v-model="addCustomerFormVal[item.prop]" type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期">
                        </el-date-picker>
                    </span>
                </el-form-item>
            </el-form>
            <el-button type="text">退款原因</el-button>
            <el-tabs v-model="addActiveName" @tab-click="addHandleClick">
                <el-table :data="addCustomerFormVal.refund_reason" fit @row-click="addRefundReasonRowClick" :row-class-name="addProRCName">
                    <el-table-column v-for="(item,index) in addHead" :label="item.label" align="center" :width="item.width" :key="index">
                        <template slot-scope="scope">
                            <span v-if="addProblemProCurIndex =='index'+scope.$index">
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
                                    <span v-if="addProblemProUpload=='upload'+scope.$index">
                                        <el-upload action="" :before-upload="beforeAddUploadProblemProImg">
                                            <el-button size="small" type="primary">点击上传</el-button>
                                        </el-upload>
                                    </span>
                                    <span v-else>
                                        <img :src="scope.row[item.prop]">
                                        <el-upload class="chgDiv" action="" :before-upload="beforeUpload">
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
                                            <span v-if="list.id==scope.row[item.prop]">
                                                {{list.name}}
                                            </span>
                                        </span>
                                    </span>
                                </span>
                                <span v-else-if="item.type=='checkbox'">
                                    <el-checkbox v-model="scope.row[item.prop]" disabled></el-checkbox>
                                </span>
                                <span v-else-if="item.type == 'img'">
                                    <img :src="scope.row[item.prop]" alt="">
                                </span>
                                <span v-else>
                                    {{scope.row[item.prop]}}
                                </span>
                            </span>
                        </template>
                    </el-table-column>
                </el-table>
            </el-tabs>
            <div slot="footer" class="dialog-footer clearfix">
                <div style="float: left">
                    <el-button type="primary" @click="addProDtl" v-if="addActiveName=='0'">添加商品</el-button>
                    <el-button type="primary" @click="addExpenseLine" v-if="addActiveName=='2'">新增行</el-button>
                </div>
                <div style="float: right">
                    <el-button type="primary" @click="addCustomerConfirm">确定</el-button>
                    <el-button @click="addCustomerCancel">取消</el-button>
                </div>
            </div>
        </el-dialog>

        <!--修改-->
        <el-dialog title="修改明细" :visible.sync="updateCustomerMask" :class="{'more-forms':moreForms,'threeParts':threeParts}" class="bigDialog">
            <div class="clearfix">
                <el-button type="text" style="float: left">基础信息</el-button>
            </div>
            <el-form :model="updateCustomerFormVal" :rules="addCustomerFormRules" class="customerAddForm" id="form">
                <el-form-item v-for="(item,index) in addCustomerFormHead" :key="index" :label="item.label" :prop="item.prop">
                    <span v-if="item.type=='text'">
                        <span v-if="item.inProp">
                            <el-input v-model.trim="updateCustomerFormVal[item.prop][item.inProp]" :placeholder="item.holder" :disabled="item.addChgAble"></el-input>
                        </span>
                        <span v-else>
                            <el-input v-model.trim="updateCustomerFormVal[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble"></el-input>
                        </span>
                    </span>
                    <span v-else-if="item.type=='number'">
                        <span v-if="item.prop=='deliver_goods_fee' || item.prop=='move_upstairs_fee' || item.prop=='installation_fee'">
                            <el-input type="number" v-model.trim="updateCustomerFormVal[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble" @input="formChg"></el-input>
                        </span>
                        <span v-else>
                            <el-input type="number" v-model.trim="updateCustomerFormVal[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble"></el-input>
                        </span>
                    </span>
                    <span v-else-if="item.type=='select'">
                        <el-select v-model="updateCustomerFormVal[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble">
                            <span v-for="list in addSubData[item.stateVal]" :key="list.id">
                                <el-option :label="list.name?list.name:list.nick" :value="list.id"></el-option>
                            </span>
                        </el-select>
                    </span>
                    <span v-else-if="item.type=='textarea'">
                        <el-input type="textarea" v-model.trim="updateCustomerFormVal[item.prop]" :placehode="item.holder"></el-input>
                    </span>
                    <span v-else-if="item.type=='checkbox'">
                        <el-checkbox v-model="updateCustomerFormVal[item.prop]" :disabled="item.chgAble"></el-checkbox>
                    </span>
                    <span v-else-if="item.type=='radio'">
                        <el-radio v-model="updateCustomerFormVal[item.prop]" label="volume">{{item.choiceName[0]}}</el-radio>
                        <el-radio v-model="updateCustomerFormVal[item.prop]" label="weight">{{item.choiceName[1]}}</el-radio>
                    </span>
                    <span v-else-if="item.type=='DatePicker'">
                        <el-date-picker v-model="updateCustomerFormVal[item.prop]" type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期">
                        </el-date-picker>
                    </span>
                </el-form-item>
            </el-form>
            <el-tabs v-model="updateActiveName" @tab-click="addHandleClick" id="elTabs">
                <el-tab-pane label="商品信息" name="0">
                    <el-table :data="updateProData" fit @row-click="addRefundReasonRowClick" :row-class-name="addProRCName">
                        <el-table-column v-for="item in addHead[updateActiveName]" :label="item.label" align="center" :width="item.width" :key="item.label">
                            <template slot-scope="scope">
                                <span v-if="item.prop=='newData'">
                                    <span v-if="refundReasonRowIndex == 'index'+scope.$index">
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
                                                <span v-else>
                                                    {{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}
                                                </span>
                                            </span>
                                        </template>
                                    </el-table-column>
                                </el-table>
                            </template>
                        </el-table-column>
                        <el-table-column label="操作" width="90" align="center" fixed="right">
                            <template slot-scope="scope">
                                <el-button size="mini" type="danger" @click="updateDelPro(scope.row,scope.$index)">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="收货信息" name="1">
                    <el-form :model="updateReceiveInfo" class="half">
                        <el-form-item v-for="(item,index) in addHead[updateActiveName]" :key="index" :label="item.label" :prop="item.label">
                            <span v-if="item.type=='number'">
                                <el-input type="number" v-model.trim="updateReceiveInfo[item.prop]" :placeholder="item.holder"></el-input>
                            </span>
                            <span v-else-if="item.type=='cascader'">
                                <el-cascader size="large" :options="options" v-model="updateReceiveInfo[item.prop]">
                                </el-cascader>
                            </span>
                            <span v-else>
                                <el-input v-model.trim="updateReceiveInfo[item.prop]" :placeholder="item.holder"></el-input>
                            </span>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane label="费用类型" name="2">
                    <el-table :data="updateExpenseData" fit @row-click="addExpenseRClick" :row-class-name="addExpenseRCName">
                        <el-table-column v-for="item in addHead[updateActiveName]" :label="item.label" align="center" :width="item.width" :key="item.label">
                            <!--<template slot-scope="scope">
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
                                             <span v-if="list.id==scope.row[item.prop]">
                                                 {{list.name}}
                                             </span>
                                         </span>
                                    </span>
                                <span v-else>
                                    {{scope.row[item.prop]}}
                                </span>
                            </span>
                            </template>-->
                        </el-table-column>
                        <el-table-column label="操作" width="90" align="center" fixed="right">
                            <template slot-scope="scope">
                                <el-button size="mini" type="danger" @click="updateDelExpense(scope.row,scope.$index)">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
            </el-tabs>
            <div slot="footer" class="dialog-footer clearfix">
                <div style="float: left">
                    <el-button type="primary" @click="addProDtl" v-if="updateActiveName=='0'">添加商品</el-button>
                    <el-button type="primary" @click="addExpenseLine" v-if="updateActiveName=='2'">新增行</el-button>
                </div>
                <div style="float: right">
                    <el-button type="primary" @click="updateCustomerConfirm">确定</el-button>
                    <el-button @click="updateCustomerCancel">取消</el-button>
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
      newOpt: [
        {
          cnt: "新增",
          icon: "bf-add",
          ent: this.addCustomer,
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
          nClick: true
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
      filterBox: false,
      searchBox: {
        shop_nick: "",
        order_no: "",
        buyer_nick: "",
        buyer_name: "",
        refund_info: "",
        locker: "",
        refund_time: ""
      },
      /*获取数据*/
      activeName: "0",
      leftTopActiveName: "0",
      rightActiveName: "0",
      orderListData: [],
      orderListHead: [
        //订单表头标签
        {
          label: "系统单号",
          width: "200",
          prop: "refund_sn",
          type: "text"
        },
        {
          label: "订单编号",
          width: "120",
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
          prop: "creator_id",
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
          prop: "locker_id",
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
          prop: "business_personnel_id",
          type: "text"
        },
        {
          label: "业务审核时间",
          width: "180",
          prop: "bs_audit_at",
          type: "text"
        },
        {
          label: "售后审核人",
          width: "180",
          prop: "after_sales_id",
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
          prop: "financial_id",
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
      loading: true, //作用未知
      checkboxInit: false, //作用未知
      orderListIndex: "", //作用未知
      alreadyHandle: [],
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
          label: "单号失联",
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
      proDtlData: [],
      curRowId: "",
      curRowData: {},
      orderDtlHead: [
        //新建订单的商品信息的表头
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
            label: "交易号",
            prop: "taobao_tid",
            type: "text"
          },
          {
            label: "来源单号",
            prop: "taobao_oid",
            type: "text"
          }
        ],
        [],
        []
      ],
      payDtlData: [],
      /*新增*/
      addCustomerMask: false,
      moreForms: true,
      threeParts: true,
      addCustomerFormVal: {
        refund_sn: "",
        order_sn: "",
        refund_payment_methods_id: "",
        shops_id: "",
        refund_account: "",
        bank: "",
        bank_address: "",
        refund_amount: "",
        transaction_sn: "",
        refund_reasons_id: "",
        buyer_nick: "",
        buyer_name: "",
        payment_amount: "",
        order_price: "",
        order_time: "",
        is_delivered: "",
        responsible_person: "",
        refund_description: "",
        business_remark: "",
        refund_reason: [
          {
            refund_reason: "",
            refund_description: "",
            refund_amount: ""
          }
        ]
      },
      addProblemProCurIndex: "index0",
      addCustomerFormRules: {
        //新建订单的要求格式
        order_sn: [{ required: true, message: "系统单号必选", trigger: "blur" }],
        refund_payment_methods_id: [
          { required: true, message: "退款方式必选", trigger: "blur" }
        ],
        shops_id: [{ required: true, message: "所属店铺必选", trigger: "blur" }],
        refund_reasons_id: [
          { required: true, message: "退款原因必选", trigger: "blur" }
        ],
        buyer_nick: [{ required: true, message: "买家昵称必填", trigger: "blur" }]
      },
      addCustomerFormHead: [
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
          type: "text"
        },
        {
          label: "退款方式",
          prop: "refund_payment_methods_id",
          holder: "请选择退款方式",
          width: "200",
          type: "text"
        },
        {
          label: "所属店铺",
          prop: "shops_id",
          holder: "请选择所属店铺",
          width: "200",
          type: "text"
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
          type: "text"
        },
        {
          label: "交易单号",
          prop: "transaction_sn",
          holder: "请输入交易单号",
          width: "200",
          type: "text"
        },
        {
          label: "退款原因",
          prop: "refund_reasons_id",
          holder: "请选择退款原因",
          width: "200",
          type: "text"
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
          type: "text"
        },
        {
          label: "拍单金额",
          prop: "order_price",
          holder: "输入用户拍单金额",
          width: "200",
          type: "text"
        },
        {
          label: "拍单时间",
          prop: "order_time",
          width: "200",
          type: "DatePicker"
        },
        {
          label: "是否发货",
          prop: "is_delivered",
          width: "200",
          type: "checkbox"
        },
        {
          label: "责任人",
          prop: "responsible_person",
          width: "200",
          type: "text"
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
      addActiveName: "0",
      proData: [],
      detailRefundOrderInfo: {
        refund_sn: "",
        order_sn: "",
        refund_payment_methods_id: "",
        shops_id: "",
        refund_account: "",
        bank: "",
        bank_address: "",
        refund_amount: "",
        transaction_sn: "",
        refund_reasons_id: "",
        buyer_nick: "",
        buyer_name: "",
        payment_amount: "",
        order_price: "",
        order_time: "",
        is_delivered: "",
        responsible_person: "",
        refund_description: "",
        business_remark: "",
        refund_reason: [
          {
            refund_reason: "",
            refund_description: "",
            refund_amount: ""
          }
        ]
      },
      detailRefundOrderHead: [
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
          type: "text"
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
          label: "退款金额",
          prop: "refund_amount",
          width: "200",
          type: "text"
        },
        {
          label: "支付金额",
          prop: "payment_amount",
          holder: "买家的付款金额",
          width: "200",
          type: "text"
        },
        {
          label: "退款方式",
          prop: "refund_payment_methods_id",
          holder: "请选择退款方式",
          width: "200",
          type: "text"
        },
        {
          label: "创建时间",
          prop: "created_at",
          width: "200",
          type: "text"
        },
        {
          label: "单据类型",
          prop: "receipt_type",
          holder: "请选择单据类型",
          width: "200",
          type: "text"
        },
        {
          label: "淘宝售价",
          prop: "order_price",
          holder: "输入用户拍单金额",
          width: "200",
          type: "text"
        },
        {
          label: "数量",
          prop: "order_number",
          holder: "输入用户拍单金额",
          width: "200",
          type: "text"
        },
        {
          label: "交易单号",
          prop: "transaction_sn",
          width: "200",
          type: "text"
        },
        {
          label: "明细单号",
          prop: "detail_sn",
          width: "200",
          type: "text"
        },
        {
          label: "退款原因",
          prop: "refund_reasons_id",
          holder: "请选择退款原因",
          width: "200",
          type: "text"
        },
        {
          label: "退款类型",
          prop: "payback_type",
          holder: "退款方式（支付宝、现金等）",
          width: "200",
          type: "text"
        },
        {
          label: "业务备注",
          prop: "business_remark",
          width: "200",
          type: "textarea"
        },
        {
          label: "售后备注",
          prop: "as_remark",
          width: "200",
          type: "textarea"
        },
        {
          label: "财务备注",
          prop: "f_remark",
          width: "200",
          type: "textarea"
        },
        {
          label: "退款说明",
          prop: "refund_description",
          width: "200",
          type: "textarea"
        }
      ],
      options: regionDataPlus,
      addHead: [
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
          type: "text"
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
          width: "120",
          prop: "img",
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
      toggleHeight: true,
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
      proCompRowIndex: "",
      proSubmitData: [],
      proIds: [],
      addIds: [],
      proCompRow: {},
      refundReasonRowIndex: "",
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
      updateCustomerFormVal: {},
      updateActiveName: "0",
      updateProData: [],
      updateReceiveInfo: {},
      updateExpenseData: [],
      updateProIds: [],
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
      mergerIds: []
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
      switch (index) {
        case 0:
          this.$fetch(
            this.urls.customerservicerefunds + "/searchuntreated"
          ).then(
            res => {
              this.loading = false;
              this.orderListData = res.data;
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
          this.$fetch(this.urls.customerservicedepts, {
            order_status: 20,
            include:
              "shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems.combination.productComponents,orderItems.product,businessPersonnel,locker,paymentDetails.paymentMethod,paymentDetails.order"
          }).then(
            res => {
              this.loading = false;
              this.alreadyHandle = res.data;
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
        case 2:
          this.$fetch(this.urls.customerservicedepts, {
            order_status: "等通知发货",
            include:
              "shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems,businessPersonnel,locker,paymentDetails"
          }).then(
            res => {
              this.loading = false;
              this.orderListData = res.data;
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
    leftHandleClick() {
      this.loading = true;
      this.fetchData();
    },
    rightHandleClick() {},
    orderListRClick(row) {
      if (row["locker_id"] == 0) {
        this.newOpt[1].nClick = true;
        this.newOpt[2].nClick = true;
        this.newOpt[3].nClick = false;
        this.newOpt[4].nClick = true;
        this.newOpt[8].nClick = true;
        this.newOpt[9].nClick = true;
        this.newOpt[14].nClick = true;
        if (row["order_status"] == "已客审") {
          this.newOpt[5].nClick = true;
          this.newOpt[6].nClick = false;
        } else {
          this.newOpt[5].nClick = false;
          this.newOpt[6].nClick = true;
        }
      } else {
        this.newOpt[1].nClick = false;
        this.newOpt[2].nClick = false;
        this.newOpt[3].nClick = true;
        this.newOpt[4].nClick = false;
        this.newOpt[5].nClick = false;
        this.newOpt[6].nClick = true;
        this.newOpt[8].nClick = false;
        this.newOpt[9].nClick = false;
        this.newOpt[14].nClick = false;
      }
      this.curRowId = row.id;
      this.curRowData = row;
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
    addCustomer() {
      this.addCustomerMask = true;
      this.addIds = [];
      this.proData = [];
      this.refundReasonRowIndex = "";
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
    addHandleClick() {},
    addProRCName({ row, rowIndex }) {
      row.index = rowIndex;
    },
    addRefundReasonRowClick(row) {
      this.refundReasonRowIndex = `index${row.index}`;
    },
    addDelPro(index) {
      this.proData.splice(index, 1);
    },
    addCustomerConfirm() {
      this.$post(
        this.urls.customerservicerefunds,
        this.addCustomerFormVal
      ).then(
        () => {
          this.addCustomerMask = false;
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
    addCustomerCancel() {
      this.addCustomerMask = false;
      this.$message({
        message: "取消新增订单明细",
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
      if (this.addCustomerMask) {
        formVal = this.updateCustomerFormVal;
      } else {
        formVal = this.updateCustomerFormVal;
      }
      formVal["total_distribution_fee"] =
        formVal["deliver_goods_fee"] -
        0 +
        (formVal["move_upstairs_fee"] - 0) +
        (formVal["installation_fee"] - 0);
    },
    confirmAddProDtl() {
      if (this.addCustomerMask) {
        this.proSubmitData.map(item => {
          if (this.addIds.indexOf(item.id) == -1) {
            this.proData.push(item);
            this.addIds.push(item.id);
            this.$message({
              message: "添加商品信息成功",
              type: "success"
            });
          } else {
            this.proData.map((list, index) => {
              if (list.id == item.id) {
                this.proData.splice(index, 1);
                this.proData.push(item);
                this.$message({
                  message: "添加商品信息成功",
                  type: "success"
                });
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
      if (this.addCustomerMask) {
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
    resetAddInfo() {
      Object.assign(
        this.$data.addCustomerFormVal,
        this.$options.data().addCustomerFormVal
      );
      this.addProblemProCurIndex = "index0";
      this.updateProblemProCurIndex = "index0";
      this.addProblemProCurIndexNum = 0;
      this.updateProblemProCurIndexNum = 0;

      this.noUpload = true;
    },
    /*页码*/
    handlePagChg(page) {
      this.$fetch(this.urls.customerservicedepts + "?page=" + page, {
        include:
          "shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems.combination.productComponents,orderItems.product,businessPersonnel,locker,paymentDetails.paymentMethod,paymentDetails.order"
      }).then(res => {
        if (this.leftTopActiveName == "0") {
          this.orderListData = res.data;
        } else {
          this.alreadyHandle = res.data;
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
        let id = this.checkboxId ? this.checkboxId : this.curRowId;
        this.$put(
          this.urls.customerservicedepts + "/" + id + "/lockorunlock"
        ).then(
          () => {
            this.newOpt[1].nClick = false;
            this.newOpt[2].nClick = false;
            this.newOpt[3].nClick = true;
            this.newOpt[4].nClick = false;
            this.newOpt[5].nClick = false;
            this.newOpt[6].nClick = true;
            this.newOpt[8].nClick = false;
            this.newOpt[9].nClick = false;
            this.newOpt[14].nClick = false;
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
        let id = this.checkboxId ? this.checkboxId : this.curRowId;
        this.$put(
          this.urls.customerservicedepts + "/" + id + "/lockorunlock"
        ).then(
          () => {
            this.newOpt[1].nClick = true;
            this.newOpt[2].nClick = true;
            this.newOpt[3].nClick = false;
            this.newOpt[4].nClick = true;
            this.newOpt[5].nClick = true;
            this.newOpt[6].nClick = true;
            this.newOpt[8].nClick = true;
            this.newOpt[9].nClick = true;
            this.newOpt[14].nClick = true;
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
      this.proIds = [];
      this.updateProIds = [];
      this.expenseRIndex = "";
      this.updateCustomerFormVal = {};
      this.updateProData = [];
      this.updateReceiveInfo = {};
      this.updateExpenseData = [];
      this.updateCustomerMask = true;
      this.refundReasonRowIndex = "";
      let id = this.checkboxId ? this.checkboxId : this.curRowId;
      this.$fetch(this.urls.customerservicedepts + "/" + id, {
        include:
          "shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems.combination.productComponents,orderItems.product,businessPersonnel,locker,paymentDetails"
      }).then(
        res => {
          this.updateCustomerFormVal = res;
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
    updateCustomerConfirm() {
      let forData = this.updateCustomerFormVal;
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
          this.updateCustomerMask = false;
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
      this.updateCustomerMask = false;
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
    handleUnAudit() {
      if (this.newOpt[6].nClick) {
        return;
      } else {
        let id = this.checkboxId ? this.checkboxId : this.curRowId;
        this.$put(this.urls.customerservicedepts + "/" + id + "/unaudit").then(
          () => {
            this.newOpt[1].nClick = true;
            this.newOpt[2].nClick = true;
            this.newOpt[3].nClick = false;
            this.newOpt[4].nClick = true;
            this.newOpt[5].nClick = true;
            this.newOpt[6].nClick = true;
            this.newOpt[8].nClick = true;
            this.newOpt[9].nClick = true;
            this.newOpt[13].nClick = true;
            this.newOpt[14].nClick = true;
            this.newOpt[15].nClick = true;
            this.newOpt[18].nClick = false;
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