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
            ent: this.test
          },
          {
            cnt: '修改',
            icon: 'bf-change',
            ent: this.test
          },
          {
            cnt: '删除',
            icon: 'bf-del',
            ent: this.test
          },
          {
            cnt: '刷新',
            icon: 'bf-refresh',
            ent: this.test
          }
        ]
      }
    },
    methods:{
      test(){
        console.log(1);
      }
    },
    mounted() {
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
