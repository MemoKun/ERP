<template>
    <div>
        <!--查询模块-->
        <el-table :data="rolesList" fit
                  width="1000"
                  v-loading="loading"
                  height="400"
                  @selection-change="handleSelectionChange">

            <el-table-column
                    type="selection"
                    width="95" align="center"
                    :checked="checkboxInit">
            </el-table-column>
            <el-table-column v-for="item in tableHead[0]" :label="item.label" align="center" :width="item.width"
                             :key="item.prop">
                <template slot-scope="scope">
                            <span v-if="item.type==='checkbox'">
                           <el-checkbox v-model="scope.row[item.prop]" disabled></el-checkbox>
                        </span>
                    <span v-else>
                            {{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}
                        </span>
                </template>
            </el-table-column>
        </el-table>
        <!--新增角色-->
        <el-dialog title="新增用户" :visible.sync="addRoleMask">
            <el-row>
                <el-col :span="8">角色名</el-col>
                <el-col :span="16"><el-input v-model="newInfo.username" placeholder="请输入内容"></el-input></el-col>
            </el-row>
            <el-row>
                <el-col :span="8">描述</el-col>
                <el-col :span="16"><el-input v-model="newInfo.description" placeholder="请输入内容"></el-input></el-col>
            </el-row>
            <el-row>
                <el-col :span="8">备注</el-col>
                <el-col :span="16"><el-input v-model="newInfo.remark" placeholder="请输入内容"></el-input></el-col>
            </el-row>
            <el-row>
                <el-col :span="8">选择分组</el-col>
                <el-col :span="16">
                    <el-select v-model="newInfo.role_group_id" placeholder="请选择">
                        <el-option
                                v-for="item in groupOptions"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id">
                        </el-option>
                    </el-select>
                </el-col>
            </el-row>
            <el-row>
                配置权限
            </el-row>
            <el-row>
                <el-col span="24">
                    <el-transfer v-model="newInfo.permission" :data="permissionList" :titles="['未选','已选']"></el-transfer>
                </el-col>
            </el-row>
            <br><br>
            <el-button type="primary" @click="submitNewOne">提交</el-button>
        </el-dialog>
        <!--修改信息-->
        <el-dialog title="修改信息" :visible.sync="changeRoleMask">
            <el-row>
                <el-col :span="8">角色名</el-col>
                <el-col :span="16"><el-input v-model="nowInfo.username" placeholder="请输入内容"></el-input></el-col>
            </el-row>
            <el-row>
                <el-col :span="8">描述</el-col>
                <el-col :span="16"><el-input v-model="nowInfo.description" placeholder="请输入内容"></el-input></el-col>
            </el-row>
            <el-row>
                <el-col :span="8">备注</el-col>
                <el-col :span="16"><el-input v-model="nowInfo.remark" placeholder="请输入内容"></el-input></el-col>
            </el-row>
            <el-row>
                <el-col :span="8">选择分组</el-col>
                <el-col :span="16">
                    <el-select v-model="nowInfo.role_group_id" placeholder="请选择">
                        <el-option
                                v-for="item in groupOptions"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id">
                        </el-option>
                    </el-select>
                </el-col>
            </el-row>
            <el-row>
                配置权限
            </el-row>
            <el-row>
                <el-col span="24">
                    <el-transfer v-model="nowInfo.permission" :data="permissionList" :titles="['未选','已选']"></el-transfer>
                </el-col>
            </el-row>
            <br><br>
            <el-button type="primary" @click="updateOne">提交</el-button>
        </el-dialog>


        <!--页码-->
        <!--<Pagination :page-url="delBatchUrl" @handlePagChg="handlePagChg"></Pagination>-->
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
                        ent: this.addRole
                    },
                    {
                        cnt: '修改',
                        icon: 'bf-change',
                        ent: this.changeRole
                    },
                    {
                        cnt: '删除',
                        icon: 'bf-del',
                        ent: this.deleteRole
                    },
                    {
                        cnt: '刷新',
                        icon: 'bf-refresh',
                        ent: this.refreshRole
                    }
                ],
                /*获取数据*/
                rolesList: [],
                seriesVal: [],
                checkboxInit: false,
                tableHead: [
                    [
                        {
                            label: '名称',
                            width: '120',
                            prop: "name",
                            holder: '请输入名称',
                            type: 'text',
                            // beAble: true
                        },
                        {
                            label: '组',
                            width: '120',
                            prop: "roleGroup",
                            inProp: "name",
                            holder: '请输入角色组',
                            type: 'text'
                        },
                        {
                            label: '描述',
                            width: '250',
                            prop: "description",
                            holder: '请输入角色描述',
                            type: 'text'
                        },
                        {
                            label: '备注',
                            width: '250',
                            prop: "remark",
                            holder: '请输入备注'
                        },
                        {
                            label: '状态',
                            width: '150',
                            prop: "status",
                            holder: '请选择状态',
                            type: 'checkbox'
                        }
                    ],
                    //待更新
                    [
                        {
                            label: '供应商名称',
                            width: '130',
                            prop: "suppliers",
                            inProp: 'name',
                            holder: '请选择供应商名称',
                            type: 'select'
                        },
                        {
                            label: '系列代码',
                            width: '130',
                            prop: "code",
                            holder: '请输入系列代码',
                            type: 'text'
                        },
                        {
                            label: '系列名称',
                            width: '130',
                            prop: "name",
                            holder: '请输入系列名称',
                            type: 'text'
                        },
                        {
                            label: '系列描述',
                            width: '150',
                            prop: "description",
                            holder: '请输入系列描述',
                            type: 'textarea'
                        },
                        {
                            label: '备注',
                            width: '130',
                            prop: "remark",
                            holder: '请输入名称',
                            type: 'textarea'
                        },
                        {
                            label: '状态',
                            width: '90',
                            prop: "status",
                            holder: '请选择状态',
                            type: 'checkbox'
                        }
                    ]
                ],
                supplierRow: {},
                seriesRow: {},
                loading: true,
                //添加
                addRoleMask: false,
                changeRoleMask:false,
                newInfo: {
                    username: '',
                    role_group_id:'',
                    description:'',
                    remark:'',
                    permission:[]
                },
                nowInfo: {
                    username: '',
                    role_group_id:'',
                    description:'',
                    remark:'',
                    permission:[]
                },
                groupOptions:[],
                permissionList:[]
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
            //获取数据
            fetchData() {
                this.$fetch(this.urls.roles, {
                    include: 'roleGroup'
                })
                    .then(res => {
                        console.log(res.data);
                        this.loading = false;
                        this.rolesList = res.data;
                        let pg = res.meta.pagination;
                        this.$store.dispatch('currentPage', pg.current_page);
                        this.$store.commit('PER_PAGE', pg.per_page);
                        this.$store.commit('PAGE_TOTAL', pg.total);
                        this.delBatchUrl = this.urls.roledetails;
                    }, err => {
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
            //    获取分组
                this.$fetch(this.urls.rolegroup).then(
                    res => {
                        console.log(res);
                        this.groupOptions = res.data;
                    },
                    err => {}
                )
            //    获取权限列表
                this.$fetch(this.urls.permissions).then(
                    res => {
                        console.log(res.data)
                        this.permissionList = res.data
                    },
                    err => {}
                )
            },
            submitNewOne(){
                console.log(this.newInfo);
                this.$post(this.urls.roles,this.newInfo).then(
                    res => {
                        console.log(res)
                    }
                )
            },
            updateOne(){
                this.$patch(this.urls.roles + '/' +this.nowInfo.id,this.nowInfo).then(
                    res => {
                        console.log(res)
                    }
                )
            },
            handleSelectionChange(val){
                this.multipleSelection = val;
            },
            addRole() {
                console.log("addRole");
                this.addRoleMask = true;
            },
            changeRole() {
                console.log("change")
                console.log(this.multipleSelection)
                this.changeRoleMask = true;
                if(this.multipleSelection.length === 0){
                    this.$message({
                        message: '请至少选择一条',
                        type: 'warning'
                    });
                }else{
                    this.multipleSelection[0].username = this.multipleSelection[0].name;
                    this.nowInfo = this.multipleSelection[0]
                }
            },
            deleteRole() {
                console.log("delete")
            },
            refreshRole() {
                this.loading = true;
                this.fetchData();
            },
            /*分页*/
            handlePagChg(page) {
                this.$fetch(this.urls.roledetails + '?page=' + page, {
                    include: 'group'
                })
                    .then(res => {
                        this.supplierVal = res.data;
                    })
            },
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
<style scoped>
    .newInput{
        width: 500px;
    }
</style>
