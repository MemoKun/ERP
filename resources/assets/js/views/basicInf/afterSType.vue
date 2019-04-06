<template>
    <div>
      <el-tabs v-model="activeName">
        <el-tab-pane label="售后类型" name="0">
          <el-table :data="typeData" fit v-loading="loading" height="300">
            <el-table-column type="selection" width="95" align="center" :checked="checkboxInit"></el-table-column>
            <el-table-column v-for="item in tableHead" :label="item.label" align="center" :width="item.width" :key="item.prop">
              <template slot-scope="scope">
                   <span v-if="item.type=='checkbox'">
                       <el-checkbox v-model="scope.row[item.prop]" disabled></el-checkbox>
                   </span>
                   <span v-else>
                     <span v-if="scope.row[item.prop]">{{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}</span>
                   </span>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>

      <!--新增售后类型-->
      <el-dialog title="新增" :visible.sync="addMask" class="dialog">
        <div class="clearfix">
          <el-form :model="addTypeFormVal" :rules="addTypeFormRules" class="afterSType hidePart" id="form">
            <el-form-item v-for="(item,index) in addTypeFormHead" :key="index" :label="item.label" :prop="item.prop">
              <span v-if="item.type=='text'">
                <el-input v-model.trim="addTypeFormVal[item.prop]"></el-input>
              </span>
              <span v-if="item.type=='checkbox'">
                <el-checkbox v-model="addTypeFormVal[item.prop]"></el-checkbox>
              </span>
            </el-form-item>
          </el-form>
        </div>
        <div style="float：right">
            <el-button type="primary" @click="addTypeConfirm">确定</el-button>
            <el-button type="default" @click="addCancel">取消</el-button>
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
            ent: this.addType,
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
            ent: this.refresh
          }
        ],
        activeName:'0',
        typeData:[],
        loading:true,
        checkboxInit:false,
        tableHead:[
          {
            label:'售后类型',
            prop:'after_s_type',
            width:'200',
            type:'text'
          },
          {
            label:'是否启用',
            prop:'status',
            width:'200',
            type:'text'
          }
        ],
        addMask:false,
        addTypeFormVal:{
          after_s_type:'',
          status:''
        },
        addTypeFormRules:{
          after_s_type:[
            {required:true,message:'售后类型必填',trigger:'blur'},
          ],
          status:[
            {required:true,message:'是否启用必填',trigger:'blur'}
          ]
        },
        addTypeFormHead:[
          {
            label:'售后类型',
            prop:'after_s_type',
            width:'200',
            type:'text',
            editChgAble:true,
            addChgAble:true
          },
          {
            label:'是否启用',
            prop:'status',
            width:'200',
            type: 'checkbox',
            editChgAble:true,
            addChgAble:true
          }
        ],
        typeData:[],
        addIDs:[],
        typeRIndex:[]
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
      this.$fetch(this.urls.afterstype)
      .then(res => {
        this.typeData = res.data;
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
      addType(){
        this.addMask = true;
        this.addIds =[];
        this.typeData = [];
        this.typeRIndex = '';
      },
      addTypeConfirm(){
        let forData=this.addTypeFormVal;
        let submitData= {
          after_s_type: forData.after_s_type,
          status: forData.status
        };
        this.$post(this.urls.afterstype,submitData)
        .then(()=>{
          this.addMask=false;
          this.refresh();
          this.$message(
            {
              message:'添加成功',
              type:'success'
            });
        },err=>{
          if (err.response) {
              let arr = err.response.data.errors;
              let arr1 = [];
              for (let i in arr) {
                arr1.push(arr[i]);
              }
              let str = arr1.join(',');
              this.$message.error(str);
            }
        })
      },
      refresh() {
        this.loading = true;
        this.fetchData();
      },
      addCancel(){
        this.addMask = false;
        this.$message({
          message:'取消添加',
          type: 'info'
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