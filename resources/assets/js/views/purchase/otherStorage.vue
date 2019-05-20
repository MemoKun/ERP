<template>
    <div>
        <div class="search_box">
            <div class="searchBox">
                <span>
                    <label>入库单号</label>
                    <el-input v-model.trim="searchBox.storage_no" clearable @keyuo.enter.native="handleQuery"></el-input>
                </span>
                <span>
                    <label>外部单号</label>
                    <el-input v-model.trim="searchBox.external_no" clearable @keyup.enter.native="handleQuery"></el-input>
                </span>
                <span>
                    <label>商品编码</label>
                    <el-input v-model.trim="searchBox.purchase_no" clearable @keyup.enter.native="handleQuery"></el-input>
                </span>
                <span>
                    <label>规格编码</label>
                    <el-input v-model.trim="searchBox.spec_no" clearable @keyup.enter.native="handleQuery"></el-input>
                </span>
            </div>
            <div class="searchBox">
                <span>
                    <label>创建时间</label>
                    <el-date-picker v-model="searchBox.create_time" type="daterange" range-separator="至"
                                    start-placeholder="开始日期" end-placeholder="结束日期">
                    </el-date-picker>
                </span>
                <span>
                    <label>提交时间</label>
                    <el-date-picker v-model="searchBox.commit_time" type="daterange" range-separator="至"
                                    start-placeholder="开始日期" end-placeholder="结束日期">
                    </el-date-picker>
                </span>
                <span>
                    <label>入库时间</label>
                    <el-date-picker v-model="searchBox.storage_time" type="daterange" range-separator="至"
                                    start-placeholder="开始日期" end-placeholder="结束日期">
                    </el-date-picker>
                </span>
            </div>
        </div>

        <el-tabs v-model="topActiveName" @tab-click="clickTopTabs">
            <!--tab页-->
            <el-tab-pane label="新建" name="newStorage">
                <!--表格-->
                <el-table :data="newStorage.data" fit
                          v-loading="newStorage.loading"
                          height="300">
                    <el-table-column
                            type="selection"
                            width="95" align="center"
                            :checked="checkboxInit">
                    </el-table-column>
                    <el-table-column v-for="item in newStorage.table" :label="item.label" align="center"
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
            <el-tab-pane label="已提交" name="commitStorage">
                <!--表格-->
                <el-table :data="commitStorage.data" fit
                          v-loading="commitStorage.loading"
                          height="300">
                    <el-table-column
                            type="selection"
                            width="95" align="center"
                            :checked="checkboxInit">
                    </el-table-column>
                    <el-table-column v-for="item in commitStorage.table" :label="item.label" align="center"
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

        <Pagination :page-url="urls['otherStorage']"></Pagination>

        <el-tabs v-model="btmActiveName" @tab-click="clickBtmTabs">
            <el-tab-pane label="入库单明细" name="storageDetail">
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

            <el-tab-pane label="入库图片" name="storagePicture">
            </el-tab-pane>

            <el-tab-pane label="操作记录" name="storageRecord">
            </el-tab-pane>


        </el-tabs>

        <el-dialog title="新增采购面料" :visible.sync="newStorageDialog.show" :class="{'more-forms':moreForms}">
            <div class="searchBox cancelPur">
                <span>
                    <label>入库单号</label>
                    <el-input placeholder="系统自动生成" disabled v-model="newStorageDialog.data.storage_no"></el-input>
                </span>
                <span>
                    <label>外部单号</label>
                    <el-input v-model="newStorageDialog.data.external_no"></el-input>
                </span>
                <span>
                    <label>入库仓库</label>
                    <el-select v-model="newStorageDialog.data.shopName" clearable placeholder="请选择" @keyup.enter.native="handleQuery">
                    <el-option v-for="item in resData.shopNames" :key="item.value" :label="item.name" :value="item.id"></el-option>
                </el-select>
                </span>
                <span>
                    <label>供应商</label>
                    <el-select v-model="newStorageDialog.data.supplier" clearable placeholder="请选择" @keyup.enter.native="handleQuery">
                    <el-option v-for="item in resData.suppliers" :key="item.value" :label="item.name" :value="item.id"></el-option>
                    </el-select>
                </span>
                <span>
                    <label>开单时间</label>
                    <el-date-picker v-model="newStorageDialog.data.start_at" type="date">
                    </el-date-picker>
                </span>
            </div>
            <el-button type="text">入库明细</el-button>
            <el-table :data="newStorageDialog.data.data" fit height="350" :row-class-name="cancelRowCName" @cell-click="addCellClick">
                <el-table-column v-for="(item,index) in newStorageDialog.data.tableHead" :label="item.label" align="center" :width="item.width" :key="index">
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
                        ent: this.addOtherStorage,
                        nClick: false
                    },
                    {
                        cnt: '修改',
                        icon: 'bf-change',
                        ent: this.test,
                        nClick: false
                    },
                    {
                        cnt: '删除',
                        icon: 'bf-del',
                        ent: this.test,
                        nClick: false
                    },
                    {
                        cnt: '提交',
                        icon: 'bf-submit',
                        ent: this.test,
                        nClick: false
                    },
                    {
                        cnt: '审核',
                        icon: 'bf-audit',
                        ent: this.test,
                        nClick: false
                    },
                    {
                        cnt: '退审',
                        icon: 'bf-auditfaild',
                        ent: this.test,
                        nClick: false
                    },
                    {
                        cnt: '导出',
                        icon: 'bf-out',
                        ent: this.test,
                        nClick: false
                    },
                    {
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
                    storage_no: '',
                    external_no: '',
                    purchase_no: '',
                    spec_no: '',
                    create_time: '',
                    commit_time: '',
                    storage_time: '',
                },
                topActiveName: 'newStorage',
                btmActiveName: 'storageDetail',
                newStorage: {
                    table: [
                        {
                            label: '入库单号',
                            width: '200',
                            prop: 'storage_no',
                            type: 'text',
                        },
                        {
                            label: '外部单号',
                            width: '120',
                            prop: 'external_no',
                            type: 'text',
                        },
                        {
                            label: '入库仓库',
                            width: '120',
                            prop: 'warehouse',
                            type: 'text',
                        },
                        {
                            label: '供应商',
                            width: '120',
                            prop: 'supplier',
                            type: 'text',
                        },
                        {
                            label: '创建人',
                            width: '120',
                            prop: 'create_user',
                            type: 'text',
                        },
                        {
                            label: '提交人',
                            width: '120',
                            prop: 'commit_user',
                            type: 'text',
                        },
                        {
                            label: '入库人',
                            width: '120',
                            prop: 'storage_user',
                            type: 'text',
                        },
                        {
                            label: '创建时间',
                            width: '180',
                            prop: 'create_at',
                            type: 'text',
                        },
                        {
                            label: '提交时间',
                            width: '180',
                            prop: 'commit_at',
                            type: 'text',
                        },
                        {
                            label: '入库时间',
                            width: '180',
                            prop: 'storage_at',
                            type: 'text',
                        },
                        {
                            label: '开单时间',
                            width: '180',
                            prop: 'start_at',
                            type: 'text',
                        },
                        {
                            label: '提交状态',
                            width: '180',
                            prop: 'is_commit',
                            type: 'checkbox',
                        },
                        {
                            label: '入库状态',
                            width: '180',
                            prop: 'is_storage',
                            type: 'checkbox',
                        }
                    ],
                    loading: true,
                    data: []
                },
                commitStorage: {
                    table: [
                        {
                            label: '入库单号',
                            width: '200',
                            prop: 'storage_no',
                            type: 'text',
                        },
                        {
                            label: '外部单号',
                            width: '120',
                            prop: 'external_no',
                            type: 'text',
                        },
                        {
                            label: '入库仓库',
                            width: '120',
                            prop: 'warehouse',
                            type: 'text',
                        },
                        {
                            label: '供应商',
                            width: '120',
                            prop: 'supplier',
                            type: 'text',
                        },
                        {
                            label: '创建人',
                            width: '120',
                            prop: 'create_user',
                            type: 'text',
                        },
                        {
                            label: '提交人',
                            width: '120',
                            prop: 'commit_user',
                            type: 'text',
                        },
                        {
                            label: '入库人',
                            width: '120',
                            prop: 'storage_user',
                            type: 'text',
                        },
                        {
                            label: '创建时间',
                            width: '180',
                            prop: 'create_at',
                            type: 'text',
                        },
                        {
                            label: '提交时间',
                            width: '180',
                            prop: 'commit_at',
                            type: 'text',
                        },
                        {
                            label: '入库时间',
                            width: '180',
                            prop: 'storage_at',
                            type: 'text',
                        },
                        {
                            label: '开单时间',
                            width: '180',
                            prop: 'start_at',
                            type: 'text',
                        },
                        {
                            label: '提交状态',
                            width: '180',
                            prop: 'is_commit',
                            type: 'checkbox',
                        },
                        {
                            label: '入库状态',
                            width: '180',
                            prop: 'is_storage',
                            type: 'checkbox',
                        }
                    ],
                    loading: true,
                    data: []
                },
                inStorage: {
                    table: [
                        {
                            label: '入库单号',
                            width: '200',
                            prop: 'storage_no',
                            type: 'text',
                        },
                        {
                            label: '外部单号',
                            width: '120',
                            prop: 'external_no',
                            type: 'text',
                        },
                        {
                            label: '入库仓库',
                            width: '120',
                            prop: 'warehouse',
                            type: 'text',
                        },
                        {
                            label: '供应商',
                            width: '120',
                            prop: 'supplier',
                            type: 'text',
                        },
                        {
                            label: '创建人',
                            width: '120',
                            prop: 'create_user',
                            type: 'text',
                        },
                        {
                            label: '提交人',
                            width: '120',
                            prop: 'commit_user',
                            type: 'text',
                        },
                        {
                            label: '入库人',
                            width: '120',
                            prop: 'storage_user',
                            type: 'text',
                        },
                        {
                            label: '创建时间',
                            width: '180',
                            prop: 'create_at',
                            type: 'text',
                        },
                        {
                            label: '提交时间',
                            width: '180',
                            prop: 'commit_at',
                            type: 'text',
                        },
                        {
                            label: '入库时间',
                            width: '180',
                            prop: 'storage_at',
                            type: 'text',
                        },
                        {
                            label: '开单时间',
                            width: '180',
                            prop: 'start_at',
                            type: 'text',
                        },
                        {
                            label: '提交状态',
                            width: '180',
                            prop: 'is_commit',
                            type: 'checkbox',
                        },
                        {
                            label: '入库状态',
                            width: '180',
                            prop: 'is_storage',
                            type: 'checkbox',
                        }
                    ],
                    loading: true,
                    data: []
                },
                storageDetail: {
                    table: [
                        {
                            label: '规格图片',
                            width: '120',
                            prop: 'model_img',
                            type: 'img',
                        },
                        {
                            label: '商品编码',
                            width: '200',
                            prop: 'purchase_no',
                            type: 'text',
                        },
                        {
                            label: '规格编码',
                            width: '120',
                            prop: 'spec_no',
                            type: 'text',
                        },
                        {
                            label: '商品简称',
                            width: '120',
                            prop: 'purchase_short',
                            type: 'text',
                        },
                        {
                            label: '包件数',
                            width: '120',
                            prop: 'number',
                            type: 'text',
                        },
                        {
                            label: '规格',
                            width: '120',
                            prop: 'spec',
                            type: 'text',
                        },
                        {
                            label: '规格一',
                            width: '120',
                            prop: 'spec1',
                            type: 'text',
                        },
                        {
                            label: '颜色',
                            width: '120',
                            prop: 'color',
                            type: 'text',
                        },
                        {
                            label: '材质',
                            width: '120',
                            prop: 'material',
                            type: 'text',
                        },
                        {
                            label: '功能',
                            width: 'function',
                            prop: 'arrival_time',
                            type: 'text',
                        },
                        {
                            label: '特殊',
                            width: '120',
                            prop: 'special',
                            type: 'text',
                        },
                        {
                            label: '其他',
                            width: '120',
                            prop: 'other',
                            type: 'text',
                        },
                        {
                            label: '成本金额',
                            width: '120',
                            prop: 'cost',
                            type: 'text',
                        },
                        {
                            label: '成本总价',
                            width: '120',
                            prop: 'cost_all',
                            type: 'text',
                        },
                        {
                            label: '入库数量',
                            width: '120',
                            prop: 'storage_number',
                            type: 'text',
                        },
                        {
                            label: '备注',
                            width: '120',
                            prop: 'remark',
                            type: 'text',
                        }
                    ],
                    loading: true,
                    data: []
                },

                newStorageDialog: {
                    show: false,
                    data: {
                        storage_no: '',
                        external_no: '',
                        shopName: '',
                        supplier: '',
                        start_at: '',
                        data: [],
                        tableHead: [
                            {
                                label: '规格图片',
                                width: '120',
                                prop: 'model_img',
                                type: 'img',
                            },
                            {
                                label: '商品编码',
                                width: '200',
                                prop: 'purchase_no',
                                type: 'text',
                            },
                            {
                                label: '规格编码',
                                width: '120',
                                prop: 'spec_no',
                                type: 'text',
                            },
                            {
                                label: '商品简称',
                                width: '120',
                                prop: 'purchase_short',
                                type: 'text',
                            },
                            {
                                label: '包件数',
                                width: '120',
                                prop: 'number',
                                type: 'text',
                            },
                            {
                                label: '规格',
                                width: '120',
                                prop: 'spec',
                                type: 'text',
                            },
                            {
                                label: '规格一',
                                width: '120',
                                prop: 'spec1',
                                type: 'text',
                            },
                            {
                                label: '颜色',
                                width: '120',
                                prop: 'color',
                                type: 'text',
                            },
                            {
                                label: '材质',
                                width: '120',
                                prop: 'material',
                                type: 'text',
                            },
                            {
                                label: '功能',
                                width: 'function',
                                prop: 'arrival_time',
                                type: 'text',
                            },
                            {
                                label: '特殊',
                                width: '120',
                                prop: 'special',
                                type: 'text',
                            },
                            {
                                label: '其他',
                                width: '120',
                                prop: 'other',
                                type: 'text',
                            },
                            {
                                label: '成本金额',
                                width: '120',
                                prop: 'cost',
                                type: 'text',
                            },
                            {
                                label: '成本总价',
                                width: '120',
                                prop: 'cost_all',
                                type: 'text',
                            },
                            {
                                label: '入库数量',
                                width: '120',
                                prop: 'storage_number',
                                type: 'text',
                            },
                            {
                                label: '备注',
                                width: '120',
                                prop: 'remark',
                                type: 'text',
                            }
                        ]
                    }
                },
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
            cancelRowCName({row,rowIndex}){
                row.index = rowIndex;
            },
            addCellClick(row){
                this.addCurRow = 'index'+row.index;
            },
            delAddPur(index){
                // this.addPFDialog.data.data.splice(index,1);
            },
            confirmAdd() {

            },
            cancelAdd() {

            },

            clickTopTabs() {
                switch (this.topActiveName) {
                    case 'newStorage':
                        this.newStorage.loading = true;
                        this.newOpt[3].nClick = false;
                        this.newOpt[4].nClick = true;
                        this.newOpt[5].nClick = true;

                        this.newStorage.loading = false;
                        break;
                    case 'commitStorage':
                        this.commitStorage.loading = true;
                        this.newOpt[3].nClick = true;
                        this.newOpt[4].nClick = false;
                        this.newOpt[5].nClick = false;

                        this.commitStorage.loading = false;
                        break;
                    case 'inStorage':
                        this.inStorage.loading = true;
                        this.newOpt[3].nClick = true;
                        this.newOpt[4].nClick = true;
                        this.newOpt[5].nClick = false;

                        this.inStorage.loading = false;

                        break;
                }
            },
            clickBtmTabs() {
                switch (this.btmActiveName) {
                    case 'storageDetail':
                        this.storageDetail.loading = true;


                        this.storageDetail.loading = false;
                        break;
                    case 'storagePicture':

                        break;

                    case 'storageRecord':

                        break;
                }
            },
            addOtherStorage() {

                this.newStorageDialog.show = true;
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
        mounted() {
            this.clickTopTabs();
            this.clickBtmTabs();
            this.updateOpts();
        }
    }
</script>
