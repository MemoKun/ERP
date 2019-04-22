<template>
    <div>
        <!--查询模块-->
        <el-table :data="rolesList" fit
                  width="1000"
                  v-loading="loading"
                  height="400">

            <el-table-column
                    type="selection"
                    width="95" align="center"
                    :checked="checkboxInit">
            </el-table-column>
            <el-table-column v-for="item in tableHead[0]" :label="item.label" align="center" :width="item.width" :key="item.prop">
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
            111
        </el-dialog>


        <!--页码-->
        <Pagination :page-url="delBatchUrl" @handlePagChg="handlePagChg"></Pagination>
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
          supplierRow:{},
          seriesRow: {},
          loading: true,

          addRoleMask:false,



      }
    },
    computed:{
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
        //获取数据
        fetchData(){
            this.$fetch(this.urls.roledetails,{
                include:'roleGroup'
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
        },
        addRole(){
            console.log("addRole");
            this.addRoleMask = true;
        },
        changeRole(){
            console.log("change")
        },
        deleteRole(){
            console.log("delete")
        },
        refreshRole(){
            this.loading = true;
            this.fetchData();
        },
        /*分页*/
        handlePagChg(page){
            this.$fetch(this.urls.roledetails+'?page='+page,{
                include:'group'
            })
                .then(res=>{
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
