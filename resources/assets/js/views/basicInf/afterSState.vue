<template>
    <div>
      <el-tabs v-model="activeName">
        <el-tab-pane label="售后状态" name="0">
          <el-table :data="stateData" fit v-loading="loading" height="300">
            <el-table-column type="selection" width="95" align="center" :checked="checkboxInit"></el-table-column>
            <el-table-column v-for="item in tableHead" :label="item.label" align="center" :width="item.width" :key="item.prop">
              <template slot-scope="scope">
                   <span v-if="item.type=='checkbox'">
                       <el-checkbox v-model="scope.row[item.prop]" disabled></el-checkbox>
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
        ],
        tableHead:[
          {
            label:'售后状态',
            prop:'afterSState',
            width:'200',
            type:'text'
          }
        ],
        stateData:[],
        checkboxInit:false,
        loading:true,
        activeName:'0',
        tableHead:[
          {
            label:'售后状态',
            prop:'after_s_type',
            width:'200',
            type:'text'
          }
        ],
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
      test(){
        console.log(1);
      },
      fetchData(){
        this.$fetch(this.urls.aftersstate,{include:'after_s_state'})
              .then(res => {
                this.stateData = res.data;
                this.loading = false;
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