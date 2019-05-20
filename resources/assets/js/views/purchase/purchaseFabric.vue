<template>
    <div>
        <!--<h2>采购面料管理</h2>-->
        <div class="search_box">
            <div class="searchBox">
                <span>
                    <label>面料单号</label>
                    <el-input v-model.trim="searchBox.fab_no" clearable @keyuo.enter.native="handleQuery"></el-input>
                </span>
                <span>
                    <label>型号</label>
                    <el-input v-model.trim="searchBox.model" clearable @keyup.enter.native="handleQuery"></el-input>
                </span>
                <span>
                    <label>供应商</label>
                    <el-select v-model="searchBox.order_shop" clearable placeholder="请选择"
                               @keyup.enter.native="handleQuery" value="">
                        <el-option v-for="item in resData.suppliers"
                                   :key="item.value"
                                   :label="item.name"
                                   :value="item.id">
                        </el-option>
                    </el-select>
                </span>
                <span>
                    <label>订购日期</label>
                    <el-date-picker v-model="searchBox.order_promiseDate" type="daterange" range-separator="至"
                                    start-placeholder="开始日期" end-placeholder="结束日期">
                    </el-date-picker>
                </span>
            </div>
        </div>

        <!--tabs标签-->
        <el-tabs v-model="topActiveName" @tab-click="clickTopTabs">
            <!--tab页-->
            <el-tab-pane label="未入库" name="notStorage">
                <!--表格-->
                <el-table :data="notStorage.data" fit
                          v-loading="notStorage.loading"
                          height="300">
                    <el-table-column
                            type="selection"
                            width="95" align="center"
                            :checked="checkboxInit">
                    </el-table-column>
                    <el-table-column v-for="item in notStorage.table" :label="item.label" align="center"
                                     :width="item.width"
                                     :key="item.prop">
                        <template slot-scope="scope">
                            <span v-if="item.type === 'select'">
                                <span v-if="scope.row[item.prop] === ''"></span>
                                <span v-else-if="typeof scope.row[item.prop] == 'object' && item.nmProp">
                                    {{scope.row[item.prop][item.nmProp]}}
                                </span>
                            </span>
                            <span v-else-if="item.type === 'checkbox'">
                                <el-checkbox v-model="scope.row[item.prop]" disabled></el-checkbox>
                            </span>
                            <span v-else-if="item.type === 'img'">
                                <el-popover placement="right" trigger="hover" popper-class="picture_detail">
                                    <img :src="scope.row[item.prop]" alt="">
                                    <img slot="reference" :src="scope.row[item.prop]" :alt="scope.row[item.alt]">
                                </el-popover>
                            </span>
                            <span v-else>
                                <span v-if="scope.row[item.prop]">
                                    {{item.inProp ? scope.row[item.prop][item.inProp] : scope.row[item.prop]}}
                                </span>
                            </span>
                        </template>
                    </el-table-column>

                </el-table>
            </el-tab-pane>
            <!--tab页-->
            <el-tab-pane label="部分入库" name="partialStorage">
                <!--表格-->
                <el-table :data="partialStorage.data" fit
                          v-loading="partialStorage.loading"
                          height="300">
                    <el-table-column
                            type="selection"
                            width="95" align="center"
                            :checked="checkboxInit">
                    </el-table-column>
                    <el-table-column v-for="item in partialStorage.table" :label="item.label" align="center"
                                     :width="item.width"
                                     :key="item.prop">
                        <template slot-scope="scope">
                            <span v-if="item.type === 'select'">
                                <span v-if="scope.row[item.prop] === ''"></span>
                                <span v-else-if="typeof scope.row[item.prop] == 'object' && item.nmProp">
                                    {{scope.row[item.prop][item.nmProp]}}
                                </span>
                            </span>
                            <span v-else-if="item.type === 'checkbox'">
                                <el-checkbox v-model="scope.row[item.prop]" disabled></el-checkbox>
                            </span>
                            <span v-else-if="item.type === 'img'">
                                <el-popover placement="right" trigger="hover" popper-class="picture_detail">
                                    <img :src="scope.row[item.prop]" alt="">
                                    <img slot="reference" :src="scope.row[item.prop]" :alt="scope.row[item.alt]">
                                </el-popover>
                            </span>
                            <span v-else>
                                <span v-if="scope.row[item.prop]">
                                    {{item.inProp ? scope.row[item.prop][item.inProp] : scope.row[item.prop]}}
                                </span>
                            </span>
                        </template>
                    </el-table-column>

                </el-table>
            </el-tab-pane>
            <!--tab页-->
            <el-tab-pane label="已入库" name="inStorage">
                <!--表格-->
                <el-table :data="inStorage.data" fit
                          v-loading="inStorage.loading"
                          height="300">
                    <el-table-column
                            type="selection"
                            width="95" align="center"
                            :checked="checkboxInit">
                    </el-table-column>
                    <el-table-column v-for="item in inStorage.table" :label="item.label" align="center"
                                     :width="item.width"
                                     :key="item.prop">
                        <template slot-scope="scope">
                            <span v-if="item.type === 'select'">
                                <span v-if="scope.row[item.prop] === ''"></span>
                                <span v-else-if="typeof scope.row[item.prop] == 'object' && item.nmProp">
                                    {{scope.row[item.prop][item.nmProp]}}
                                </span>
                            </span>
                            <span v-else-if="item.type === 'checkbox'">
                                <el-checkbox v-model="scope.row[item.prop]" disabled></el-checkbox>
                            </span>
                            <span v-else-if="item.type === 'img'">
                                <el-popover placement="right" trigger="hover" popper-class="picture_detail">
                                    <img :src="scope.row[item.prop]" alt="">
                                    <img slot="reference" :src="scope.row[item.prop]" :alt="scope.row[item.alt]">
                                </el-popover>
                            </span>
                            <span v-else>
                                <span v-if="scope.row[item.prop]">
                                    {{item.inProp ? scope.row[item.prop][item.inProp] : scope.row[item.prop]}}
                                </span>
                            </span>
                        </template>
                    </el-table-column>

                </el-table>
            </el-tab-pane>
        </el-tabs>

        <Pagination :page-url="urls['purchaseFabric']"></Pagination>

        <el-tabs v-model="btmActiveName" @tab-click="clickBtmTabs">
            <el-tab-pane label="面料明细" name="fabricDetail">
                <el-table :data="fabricDetail.data" fit
                          v-loading="fabricDetail.loading"
                          height="300">
                    <el-table-column
                            type="selection"
                            width="95" align="center"
                            :checked="checkboxInit">
                    </el-table-column>
                    <el-table-column v-for="item in fabricDetail.table" :label="item.label" align="center"
                                     :width="item.width"
                                     :key="item.prop">
                        <template slot-scope="scope">
                            <span v-if="item.type === 'select'">
                                <span v-if="scope.row[item.prop] === ''"></span>
                                <span v-else-if="typeof scope.row[item.prop] == 'object' && item.nmProp">
                                    {{scope.row[item.prop][item.nmProp]}}
                                </span>
                            </span>
                            <span v-else-if="item.type === 'checkbox'">
                                <el-checkbox v-model="scope.row[item.prop]" disabled></el-checkbox>
                            </span>
                            <span v-else-if="item.type === 'img'">
                                <el-popover placement="right" trigger="hover" popper-class="picture_detail">
                                    <img :src="scope.row[item.prop]" alt="">
                                    <img slot="reference" :src="scope.row[item.prop]" :alt="scope.row[item.alt]">
                                </el-popover>
                            </span>
                            <span v-else>
                                <span v-if="scope.row[item.prop]">
                                    {{item.inProp ? scope.row[item.prop][item.inProp] : scope.row[item.prop]}}
                                </span>
                            </span>
                        </template>
                    </el-table-column>
                </el-table>
            </el-tab-pane>

            <el-tab-pane label="入库明细" name="storageDetail">
                <el-table :data="storageDetail.data" fit
                          v-loading="storageDetail.loading"
                          height="300">
                    <el-table-column
                            type="selection"
                            width="95" align="center"
                            :checked="checkboxInit">
                    </el-table-column>
                    <el-table-column v-for="item in storageDetail.table" :label="item.label" align="center"
                                     :width="item.width"
                                     :key="item.prop">
                        <template slot-scope="scope">
                            <span v-if="item.type === 'select'">
                                <span v-if="scope.row[item.prop] === ''"></span>
                                <span v-else-if="typeof scope.row[item.prop] == 'object' && item.nmProp">
                                    {{scope.row[item.prop][item.nmProp]}}
                                </span>
                            </span>
                            <span v-else-if="item.type === 'checkbox'">
                                <el-checkbox v-model="scope.row[item.prop]" disabled></el-checkbox>
                            </span>
                            <span v-else-if="item.type === 'img'">
                                <el-popover placement="right" trigger="hover" popper-class="picture_detail">
                                    <img :src="scope.row[item.prop]" alt="">
                                    <img slot="reference" :src="scope.row[item.prop]" :alt="scope.row[item.alt]">
                                </el-popover>
                            </span>
                            <span v-else>
                                <span v-if="scope.row[item.prop]">
                                    {{item.inProp ? scope.row[item.prop][item.inProp] : scope.row[item.prop]}}
                                </span>
                            </span>
                        </template>
                    </el-table-column>
                </el-table>
            </el-tab-pane>
        </el-tabs>

        <br/>
        <div slot="footer" class="dialog-footer clearfix">
            <div style="float: right">
                <el-button type="primary" @click="addUse">新增用途</el-button>
                <el-button @click="changeUse">修改用途</el-button>
            </div>
        </div>

        <el-dialog title="新增采购面料" :visible.sync="addPFDialog.show" :class="{'more-forms':moreForms}">
            <div class="searchBox cancelPur">
                <span>
                    <label>收件方</label>
                    <el-input v-model="addPFDialog.data.receiver"></el-input>
                </span>
                <span>
                    <label>采购单号</label>
                    <el-input v-model="addPFDialog.data.remark"></el-input>
                </span>
            </div>
            <el-button type="text">面料明细</el-button>
            <el-table :data="addPFDialog.data.data" fit height="350" :row-class-name="cancelRowCName" @cell-click="addCellClick">
                <el-table-column v-for="(item,index) in addPFDialog.data.tableHead" :label="item.label" align="center" :width="item.width" :key="index">
                    <template slot-scope="scope">
                        <span v-if="item.prop == 'purchase_fabric'">
                            <span v-if="addCurRow == 'index'+scope.$index">
                                <el-input v-model.trim="scope.row[item.prop]" @input="purQChg(scope.row)"></el-input>
                            </span>
                            <span v-else>
                                {{scope.row[item.prop]}}
                            </span>
                        </span>
                        <span v-else>
                            <span v-if="item.type == 'img'">
                             <el-popover
                                     placement="right"
                                     trigger="hover"
                                     popper-class="picture_detail">
                                 <img :src="scope.row[item.prop]">
                                 <img slot="reference" :src="scope.row[item.prop]">
                             </el-popover>
                        </span>
                            <span v-else-if="item.type=='select'">
                             <span v-for="(list,index) in resData[item.stateVal]" :key="index">
                                           <span v-if="list.id==scope.row[item.prop]">
                                           {{list.name}}
                                           </span>
                             </span>
                         </span>
                            <span v-else>
                              {{scope.row[item.prop]}}
                         </span>
                        </span>
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="90" align="center" fixed="right">
                    <template slot-scope="scope">
                        <el-button size="mini" type="danger" @click="delAddPur(scope.$index)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="confirmAdd">确定</el-button>
                <el-button @click="cancelAdd">取消</el-button>
            </div>
        </el-dialog>

        <el-dialog title="修改采购面料" :visible.sync="addPFDialog.show" :class="{'more-forms':moreForms}">
            <div class="searchBox cancelPur">
                <span>
                    <label>收件方</label>
                    <el-input v-model="addPFDialog.data.receiver"></el-input>
                </span>
                <span>
                    <label>采购单号</label>
                    <el-input v-model="addPFDialog.data.remark"></el-input>
                </span>
            </div>
            <el-button type="text">面料明细</el-button>
            <el-table :data="addPFDialog.data.data" fit height="350" :row-class-name="cancelRowCName" @cell-click="addCellClick">
                <el-table-column v-for="(item,index) in addPFDialog.data.tableHead" :label="item.label" align="center" :width="item.width" :key="index">
                    <template slot-scope="scope">
                        <span v-if="item.prop == 'purchase_fabric'">
                            <span v-if="addCurRow == 'index'+scope.$index">
                                <el-input v-model.trim="scope.row[item.prop]" @input="purQChg(scope.row)"></el-input>
                            </span>
                            <span v-else>
                                {{scope.row[item.prop]}}
                            </span>
                        </span>
                        <span v-else>
                            <span v-if="item.type == 'img'">
                             <el-popover
                                     placement="right"
                                     trigger="hover"
                                     popper-class="picture_detail">
                                 <img :src="scope.row[item.prop]">
                                 <img slot="reference" :src="scope.row[item.prop]">
                             </el-popover>
                        </span>
                            <span v-else-if="item.type=='select'">
                             <span v-for="(list,index) in resData[item.stateVal]" :key="index">
                                           <span v-if="list.id==scope.row[item.prop]">
                                           {{list.name}}
                                           </span>
                             </span>
                         </span>
                            <span v-else>
                              {{scope.row[item.prop]}}
                         </span>
                        </span>
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="90" align="center" fixed="right">
                    <template slot-scope="scope">
                        <el-button size="mini" type="danger" @click="delAddPur(scope.$index)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="confirmAdd">确定</el-button>
                <el-button @click="cancelAdd">取消</el-button>
            </div>
        </el-dialog>


        <el-dialog title="新增面料用途" :visible.sync="addUseDialog.show">
            <div class="searchBox cancelPur">
                <span>
                    <label>使用数量</label>
                    <el-input v-model="addUseDialog.data.useNumber"></el-input>
                </span>
            </div>
            <div class="searchBox cancelPur">
                <span>
                    <label>用途描述</label>
                    <el-input type="textarea" v-model="addUseDialog.data.useDescription"></el-input>
                </span>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary">确定</el-button>
                <el-button>取消</el-button>
            </div>
        </el-dialog>

        <el-dialog title="修改面料用途" :visible.sync="changeUseDialog.show">
            <div class="searchBox cancelPur">
                <span>
                    <label>使用数量</label>
                    <el-input v-model="changeUseDialog.data.useNumber"></el-input>
                </span>
            </div>
            <div class="searchBox cancelPur">
                <span>
                    <label>用途描述</label>
                    <el-input type="textarea" v-model="changeUseDialog.data.useDescription"></el-input>
                </span>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary">确定</el-button>
                <el-button>取消</el-button>
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
                        cnt: '新增',
                        icon: 'bf-add',
                        ent: this.addPurchaseFabric,
                        nClick: false
                    }, {
                        cnt: '修改',
                        icon: 'bf-change',
                        ent: this.test,
                        nClick: false
                    }, {
                        cnt: '删除',
                        icon: 'bf-del',
                        ent: this.test,
                        nClick: false
                    }, {
                        cnt: '打印',
                        icon: 'bf-printer',
                        ent: this.test,
                        nClick: false
                    }, {
                        cnt: '刷新',
                        icon: 'bf-refresh',
                        ent: this.test,
                        nClick: false
                    }
                ],
                moreForms: true,
                checkboxInit: false,
                filterBox: false,
                searchBox: {
                    fab_no: '',
                    model: '',
                    order_shop: '',
                },
                topActiveName: 'notStorage',
                btmActiveName: 'fabricDetail',
                notStorage: {
                    table: [
                        {
                            label: '系统单号',
                            width: '200',
                            prop: 'order_no',
                            type: 'text',
                        },
                        {
                            label: '收件方',
                            width: '120',
                            prop: 'order_user',
                            type: 'text',
                        },
                        {
                            label: '创建人',
                            width: '120',
                            prop: 'user',
                            type: 'text',
                        },
                        {
                            label: '订购日期',
                            width: '180',
                            prop: 'order_at',
                            type: 'text',
                        },
                        {
                            label: '备注',
                            width: '180',
                            prop: 'remark',
                            type: 'text',
                        }
                    ],
                    loading: true,
                    data: []
                },
                partialStorage: {
                    table: [
                        {
                            label: '系统单号',
                            width: '200',
                            prop: 'order_no',
                            type: 'text',
                        },
                        {
                            label: '收件方',
                            width: '120',
                            prop: 'order_user',
                            type: 'text',
                        },
                        {
                            label: '创建人',
                            width: '120',
                            prop: 'user',
                            type: 'text',
                        },
                        {
                            label: '订购日期',
                            width: '180',
                            prop: 'order_at',
                            type: 'text',
                        },
                        {
                            label: '备注',
                            width: '180',
                            prop: 'remark',
                            type: 'text',
                        }
                    ],
                    loading: true,
                    data: []
                },
                inStorage: {
                    table: [
                        {
                            label: '系统单号',
                            width: '200',
                            prop: 'order_no',
                            type: 'text',
                        },
                        {
                            label: '收件方',
                            width: '120',
                            prop: 'order_user',
                            type: 'text',
                        },
                        {
                            label: '创建人',
                            width: '120',
                            prop: 'user',
                            type: 'text',
                        },
                        {
                            label: '订购日期',
                            width: '180',
                            prop: 'order_at',
                            type: 'text',
                        },
                        {
                            label: '备注',
                            width: '180',
                            prop: 'remark',
                            type: 'text',
                        }
                    ],
                    loading: true,
                    data: []
                },
                fabricDetail: {
                    table: [
                        {
                            label: '型号',
                            width: '200',
                            prop: 'model',
                            type: 'text',
                        },
                        {
                            label: '面料图片',
                            width: '120',
                            prop: 'fabric_img',
                            type: 'img',
                        },
                        {
                            label: '门幅(宽)',
                            width: '120',
                            prop: 'width',
                            type: 'text',
                        },
                        {
                            label: '数量(米)',
                            width: '120',
                            prop: 'length',
                            type: 'text',
                        },
                        {
                            label: '单价',
                            width: '120',
                            prop: 'price',
                            type: 'text',
                        },
                        {
                            label: '合计',
                            width: '120',
                            prop: 'sum',
                            type: 'text',
                        },
                        {
                            label: '散剪费',
                            width: '120',
                            prop: 'cut_cost',
                            type: 'text',
                        },
                        {
                            label: '快递费',
                            width: '120',
                            prop: 'courier',
                            type: 'text',
                        },
                        {
                            label: '总计',
                            width: '120',
                            prop: 'total',
                            type: 'text',
                        },
                        {
                            label: '到货时间',
                            width: '120',
                            prop: 'arrival_time',
                            type: 'text',
                        },
                        {
                            label: '供应商',
                            width: '120',
                            prop: 'supplier',
                            type: 'text',
                        },
                        {
                            label: '余额',
                            width: '120',
                            prop: 'balance',
                            type: 'text',
                        }
                    ],
                    loading: true,
                    data: []
                },
                storageDetail: {
                    table: [
                        {
                            label: '型号',
                            width: '200',
                            prop: 'model',
                            type: 'text',
                        },
                        {
                            label: '面料图片',
                            width: '120',
                            prop: 'fabric_img',
                            type: 'img',
                        },
                        {
                            label: '门幅(宽)',
                            width: '120',
                            prop: 'width',
                            type: 'text',
                        },
                        {
                            label: '数量(米)',
                            width: '120',
                            prop: 'length',
                            type: 'text',
                        },
                        {
                            label: '单价',
                            width: '120',
                            prop: 'price',
                            type: 'text',
                        },
                        {
                            label: '合计',
                            width: '120',
                            prop: 'sum',
                            type: 'text',
                        },
                        {
                            label: '散剪费',
                            width: '120',
                            prop: 'cut_cost',
                            type: 'text',
                        },
                        {
                            label: '快递费',
                            width: '120',
                            prop: 'courier',
                            type: 'text',
                        },
                        {
                            label: '总计',
                            width: '120',
                            prop: 'total',
                            type: 'text',
                        },
                        {
                            label: '到货时间',
                            width: '120',
                            prop: 'arrival_time',
                            type: 'text',
                        },
                        {
                            label: '供应商',
                            width: '120',
                            prop: 'supplier',
                            type: 'text',
                        },
                        {
                            label: '余额',
                            width: '120',
                            prop: 'balance',
                            type: 'text',
                        }
                    ],
                    loading: true,
                    data: []
                },
                addPFDialog: {
                    show: false,
                    data: {
                        receiver: '',
                        remark: '',
                        data: [],
                        tableHead: [
                            {
                                label: '型号',
                                width: '200',
                                prop: 'model',
                                type: 'text',
                            },
                            {
                                label: '面料图片',
                                width: '120',
                                prop: 'fabric_img',
                                type: 'img',
                            },
                            {
                                label: '门幅(宽)',
                                width: '120',
                                prop: 'width',
                                type: 'text',
                            },
                            {
                                label: '数量(米)',
                                width: '120',
                                prop: 'length',
                                type: 'text',
                            },
                            {
                                label: '单价',
                                width: '120',
                                prop: 'price',
                                type: 'text',
                            },
                            {
                                label: '合计',
                                width: '120',
                                prop: 'sum',
                                type: 'text',
                            },
                            {
                                label: '散剪费',
                                width: '120',
                                prop: 'cut_cost',
                                type: 'text',
                            },
                            {
                                label: '快递费',
                                width: '120',
                                prop: 'courier',
                                type: 'text',
                            },
                            {
                                label: '总计',
                                width: '120',
                                prop: 'total',
                                type: 'text',
                            },
                            {
                                label: '到货时间',
                                width: '120',
                                prop: 'arrival_time',
                                type: 'text',
                            },
                            {
                                label: '供应商',
                                width: '120',
                                prop: 'supplier',
                                type: 'text',
                            },
                            {
                                label: '余额',
                                width: '120',
                                prop: 'balance',
                                type: 'text',
                            }
                        ],
                    }
                },
                addUseDialog: {
                    show: false,
                    data: {
                        useNumber: '',
                        useDescription: '',
                    }
                },
                changeUseDialog: {
                    show: false,
                    data: {
                        useNumber: '',
                        useDescription: '',
                    }
                },
            }
        },
        computed: {
            resData: {
                get: function () {
                    return this.$store.state.responseData
                },
                set: function () {

                }
            },
            urls: {
                get: function () {
                    return this.$store.state.urls
                },
                set: function () {
                }
            }
        },
        methods: {
            updateOpts() {
                this.$store.state.opt.opts = this.newOpt;
                this.$store.commit('change', this.newOpt);
            },
            test() {
                console.log(1);
            },
            clickTopTabs() {
                switch (this.topActiveName) {
                    case 'notStorage':
                        this.notStorage.loading = true;
                        this.newOpt[0].nClick = false;
                        this.newOpt[1].nClick = false;
                        this.newOpt[2].nClick = false;
                        this.$fetch(this.urls.purchases, {
                            purchase_status: 'new',
                            include: 'user,purchaseLists.purchaseDetails.productComponent,purchaseLists.combination'
                        })
                            .then(res => {
                                    this.notStorage.loading = false;
                                    this.notStorage.data = res.data;
                                    this.checkboxInit = false;
                                },
                                err => {
                                    if (err.response) {
                                        let arr = err.response.data.errors;
                                        let arr1 = [];
                                        for (let i in arr) {
                                            arr1.push(arr[i]);
                                        }
                                        let str = arr1.join(',');
                                        this.$message.error({
                                            message: str
                                        });
                                    }
                                });
                        break;
                    case 'partialStorage':
                        this.partialStorage.loading = true;

                        this.newOpt[0].nClick = true;
                        this.newOpt[1].nClick = false;
                        this.newOpt[2].nClick = true;

                        this.partialStorage.loading = false;
                        break;
                    case 'inStorage':
                        this.inStorage.loading = true;

                        this.newOpt[0].nClick = true;
                        this.newOpt[1].nClick = true;
                        this.newOpt[2].nClick = true;

                        this.inStorage.loading = false;

                        break;
                }
            },
            clickBtmTabs() {
                switch (this.btmActiveName) {
                    case 'fabricDetail':
                        this.fabricDetail.loading = true;


                        this.fabricDetail.loading = false;
                        break;
                    case 'storageDetail':

                        this.storageDetail.loading = true;


                        this.storageDetail.loading = false;

                        break;
                }
            },
            addPurchaseFabric() {
                if(this.newOpt[0].nClick) {
                    return;
                }
                this.addPFDialog.show = true;
            },
            confirmAdd() {

            },
            cancelAdd() {

            },
            addUse() {
                this.addUseDialog.show = true;
            },
            changeUse() {
                this.addUseDialog.show = true;
            },



            cancelRowCName({row,rowIndex}){
                row.index = rowIndex;
            },
            addCellClick(row){
                this.addCurRow = 'index'+row.index;
            },
            delAddPur(index){
                this.addPFDialog.data.data.splice(index,1);
            },
        },
        watch: {
            newOpt:  {
                handler() {
                    this.updateOpts()
                },
                immediate: true,
                deep: true

            }
        },
        mounted() {
            this.clickTopTabs();
            this.clickBtmTabs();
            this.updateOpts();
        }
    }
</script>
