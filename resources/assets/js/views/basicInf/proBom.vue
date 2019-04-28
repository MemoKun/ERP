<template>
    <div>
        <div class="searchBox" v-if="currentPage">
            <span>
                <label>商品简称</label>
                <el-input v-model="searchBox.shortName" clearable class="half" @keyup.enter.native="getData"></el-input>
            </span>
            <span>
                <label>规格名称</label>
                <el-input v-model="searchBox.spec" clearable class="half" @keyup.enter.native="getData"></el-input>
            </span>
            <span>
                <label>包含材料</label>
                <el-input  clearable class="half" @keyup.enter.native="getData"></el-input>
            </span>
            <el-button type="primary">筛选</el-button>
            <el-button type="info" @click="resetAddPro">重置</el-button>
        </div>
        <!--产品信息-->
        <el-tabs>
          <el-tab-pane label="产品信息" name ="0">
            <el-table :data="productsData" v-loading="productsLoading" @row-click="proRowClick" @selection-change="handleSelectionChange">
              <el-table-column type="selection" width="95" align="center"
                :checked="checkboxInit">
              </el-table-column>
              <el-table-column v-for="item in productsHead" :label="item.label" 
              :width="item.width" :key="item.label" align="center">
                <template slot-scope="scope">
                  <span v-if="item.type=='checkbox'">
                    <el-checkbox v-model="scope.row[item.prop]" disabled></el-checkbox>
                  </span>
                  <span v-else>
                    {{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}
                  </span>
                </template>
              </el-table-column>
              <el-table-column label="操作" width="90" align="center">
                <template slot-scope="scope">
                   <el-button size="mini" type="danger" @click="delSingle(scope.row,$event)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
        <!--页码-->
        <Pagination :page-url="this.urls.proBom" @handlePagChg="handlePagChg"></Pagination>
        <!--原材料-->
        <el-tabs>
          <el-tab-pane label="原材料" name="0">
            <el-table :data="materialData" v-loading="productsLoading">
              <el-table-column type="selection" width="95" align="center" :checked="checkboxInit"></el-table-column>
              <el-table-column v-for="item in materialHead" :label="item.label" 
              :width="item.width" :key="item.label" align="center">
                <template slot-scope="scope">
                  <span v-if="item.type=='checkbox'">
                    <el-checkbox v-model="scope.row[item.prop]" disabled></el-checkbox>
                  </span>
                  <span v-else>
                    {{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}
                  </span>
                </template>
              </el-table-column>
              <el-table-column label="操作" width="90" align="center">
                <template slot-scope="scope">
                   <el-button size="mini" type="danger" @click="delSingle(scope.row,$event)">删除原材料</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
        <!--新增-->
        <el-dialog title="新增" :visible.sync="addProMask" :class="{'more-forms':moreForms}">
          <el-button type="text">产品信息</el-button>
          <add-new :rule-form="addProForm" :rules="addProRules" :add-arr="addProHead" :onlyInputs="true"></add-new>
          <el-button type="text">原材料</el-button>
          <el-table :data="addMaterialForm" fit height="300" :row-class-name="addMaterialCName" @row-click="addMaterialRClick">
            <el-table-column v-for="item in addMaterialHead" :label="item.label" align="center" :width="item.width" :key="item.label">
              <template slot-scope="scope">
                <span v-if="materialIndex == 'index'+scope.$index">
                  <span v-if="item.type == 'checkbox'">
                    <el-checkbox v-model="scope.row[item.prop]"></el-checkbox>
                  </span>
                  <span v-else>
                    <el-input size="small" v-model.trim="scope.row[item.prop]" :placeholder="item.holder"></el-input>
                  </span>
                </span>
                <span v-else>
                  <span v-if="item.type == 'checkbox'">
                    <el-checkbox v-model="scope.row[item.prop]" disabled></el-checkbox>
                  </span>
                  <span v-else>
                    {{scope.row[item.prop]}}
                  </span>
                </span>
              </template>
            </el-table-column>
            <el-table-column label="操作" width="90" align="center" fixed="right">
              <template slot-scope="scope">
                <el-button size="mini" type="danger" @click="addMaterialDtl(scope.$index)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div slot="footer" class="dialog-footer clearfix">
                <div style="float: left">
                    <el-button type="primary" @click="addMaterial">添加原材料</el-button>
                </div>
                <div style="float: right">
                    <el-button type="primary" @click="addConfirm">确定</el-button>
                    <el-button type="info" @click="addReset">重置</el-button>
                    <el-button @click="addCancel">取消</el-button>
                </div>
            </div>
        </el-dialog>
        <!--修改-->
        <el-dialog title="编辑" :visible.sync="updateMask" :class="{'more-forms':moreForms}">
          <el-button type="text">产品信息</el-button>
          <add-new :rule-form="updateProForm" :rules="addProRules" :add-arr="addProHead" :onlyInputs="true"></add-new>
          <el-button type="text">原材料</el-button>
          <el-table :data="updateMaterialForm" fit height="300" :row-class-name="updateMaterialCName" @row-click="updateMaterialRClick">
            <el-table-column v-for="item in addMaterialHead" :label="item.label" align="center" :width="item.width" :key="item.label">
              <template slot-scope="scope">
                <span v-if="materialIndex == 'index'+scope.$index">
                  <span v-if="item.type == 'checkbox'">
                    <el-checkbox v-model="scope.row[item.prop]"></el-checkbox>
                  </span>
                  <span v-else>
                    <el-input size="small" v-model.trim="scope.row[item.prop]" :placeholder="item.holder"></el-input>
                  </span>
                </span>
                <span v-else>
                  <span v-if="item.type == 'checkbox'">
                    <el-checkbox v-model="scope.row[item.prop]" disabled></el-checkbox>
                  </span>
                  <span v-else>
                    {{scope.row[item.prop]}}
                  </span>
                </span>
              </template>
            </el-table-column>
            <el-table-column label="操作" width="90" align="center" fixed="right">
              <template slot-scope="scope">
                <el-button size="mini" type="danger" @click="updateMaterialDtl(scope.$index)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div slot="footer" class="dialog-footer clearfix">
                <div style="float: left">
                    <el-button type="primary" @click="addMaterial">添加原材料</el-button>
                </div>
                <div style="float: right">
                    <el-button type="primary" @click="updateConfirm">确定</el-button>
                    <el-button @click="updateCancel">取消</el-button>
                </div>
            </div>
        </el-dialog>
        <!--删除-->
        <el-popover
                placement="top"
                width="160"
                v-model="showDel" slot="tip">
            <p>确定删除该条数据？</p>
            <div style="text-align: right; margin: 0">
                <el-button size="mini" type="text" @click="cancelD">取消</el-button>
                <el-button type="primary" size="mini" @click="confirmD(delUrl,delId)">确定</el-button>
            </div>
        </el-popover>
    </div>
</template>
<script>
  import { regionDataPlus, CodeToText, TextToCode } from 'element-china-area-data'
  export default {
    data() {
      return {
        newOpt: [
          {
            cnt: '新增',
            icon: 'bf-add',
            ent: this.addPro
          },
          {
            cnt: '修改',
            icon: 'bf-change',
            ent: this.updatePro
          },
          {
            cnt: '删除',
            icon: 'bf-del',
            ent: this.delPro
          },
          {
            cnt: '刷新',
            icon: 'bf-refresh',
            ent: this.refresh
          }
        ],
        //筛选信息输入
        searchBox:{
          shortName:'',//商品简称
          spec:'',//规格名称
          //包含材料
        },
        /*产品信息 */
        productsData:[],
         productsHead:[
          {
              label: '商品编码',
              width: '160',
              prop:'commodity_code',
              type: 'text'
          },
          {
              label: '规格编码',
              width: '160',
              prop:'spec_code',
              type: 'text'
          },
          {
              label: '商品简称',
              width: '160',
              prop:'short_name',
              type: 'text'
          },
          {
              label: '规格',
              width: '160',
              prop:'spec',
              type: 'text'
          },
          {
               label: '颜色',
               width: '120',
               prop: "color",
               type: 'text'
          },
          {
               label: '材质',
               width: '160',
               prop: "material_quality",
               type: 'text'
          },
          {
               label: '特殊',
               width: '160',
               prop: "special",
               type: 'text'
          },
          {
               label: '其他',
               width: '160',
               prop: "other",
               type: 'text'
          }
        ],
        productRow:{},
        /*原材料 */
        materialData:[],
        materialHead:[
          {
            label: '材料编码',
            width: '160',
            prop:'material_code',
            type: 'text'
          },
          {
            label: '规格编码',
            width: '160',
            prop:'spec_code',
            type: 'text'
          },
          {
            label: '材料名称',
            width: '160',
            prop:'material_name',
            type: 'text'
          },
          {
            label: '规格',
            width: '160',
            prop:'spec',
            type: 'text'
          },
          {
            label: '颜色',
            width: '120',
            prop: "color",
            type: 'text'
          },
          {
            label: '材质',
            width: '160',
            prop: "material_quality",
            type: 'text'
          },
          {
            label: '特殊',
            width: '160',
            prop: "special",
            type: 'text'
          },
          {
            label: '其他',
            width: '160',
            prop: "other",
            type: 'text'
          },
          {
            label: '体积',
            width: '160',
            prop: "volume",
            type: 'text'
          },
          {
            label: '重量',
            width: '160',
            prop: "weight",
            type: 'text'
          },
          {
            label: '单位',
            width: '160',
            prop: "unit",
            type: 'text'
          },
          {
            label: '半成品',
            width: '160',
            prop: "semi_finished",
            type: 'checkbox'
          },
          {
            label: '启用',
            width: '160',
            prop: "status",
            type: 'checkbox'
          },
          {
            label: '所需数量',
            width: '160',
            prop: "need",
            type: 'text'
          }
        ],
        currentPage: true,
        checkboxInit:false,
        //新增
        addProMask:false,
        moreForms:true,
        addProForm:{
          commodity_code:'',
          spec_code:'',
          short_name:'',
          spec:'',
          color:'',
          material_quality:'',
          special:'',
          other:'',
          status:true,
        },
        addProRules:{
          commodity_code: [
            {required: true, message: '请输入商品编码', trigger: 'blur'},
          ],
          spec_code: [
            {required: true, message: '请输入规格编码', trigger: 'blur'},
          ],
        },
        addProHead:[
          {
            label: '商品编码',
            prop: 'commodity_code',
            holder: '请输入商品编码',
            type: 'text'
          },
          {
            label: '规格编码',
            prop: 'spec_code',
            holder: '请输入规格编码',
            type: 'text'
          },
          {
            label: '商品简称',
            prop: 'short_name',
            holder: '请输入商品简称',
            type: 'text'
          },
          {
            label: '规格',
            prop: 'spec',
            holder: '请输入规格',
            type: 'text'
          },
          {
            label: '颜色',
            prop: 'color',
            holder: '请输入颜色',
            type: 'text'
          },
          {
            label: '材质',
            prop: 'material_quality',
            holder: '请输入材质',
            type: 'text'
          },
          {
            label: '特殊',
            prop: 'special',
            holder: '请输入特殊',
            type: 'text'
          },
          {
            label: '其他',
            prop: 'other',
            holder: '请输入其他',
            type: 'text'
          },
        ],
        addMaterialForm:[{
          material_code:'',
          spec_code:'',
          material_name:'',
          spec:'',
          color:'',
          material_quality:'',
          special:'',
          other:'',
          volume:'',
          weight:'',
          unit:'',
          semi_finished:false,
          status:true,
          need:'',
        }],
        addMaterialHead:[
          {
            label: '材料编码',
            prop: 'material_code',
            holder: '请输入材料编码',
            type: 'text'
          },
          {
            label: '规格编码',
            prop: 'spec_code',
            holder: '请输入规格编码',
            type: 'text'
          },
          {
            label: '材料名称',
            prop: 'material_name',
            holder: '请输入材料名称',
            type: 'text'
          },
          {
            label: '规格',
            prop: 'spec',
            holder: '请输入规格',
            type: 'text'
          },
          {
            label: '颜色',
            prop: 'color',
            holder: '请输入颜色',
            type: 'text'
          },
          {
            label: '材质',
            prop: 'material_quality',
            holder: '请输入材质',
            type: 'text'
          },
          {
            label: '特殊',
            prop: 'special',
            holder: '请输入特殊',
            type: 'text'
          },
          {
            label: '其他',
            prop: 'other',
            holder: '请输入其他',
            type: 'text'
          },
          {
            label: '体积',
            prop: 'volume',
            holder: '请输入体积',
            type: 'text'
          },
          {
            label: '重量',
            prop: 'weight',
            holder: '请输入重量',
            type: 'text'
          },
          {
            label: '单位',
            prop: 'unit',
            holder: '请输入单位',
            type: 'text'
          },
          {
            label: '半成品',
            prop: 'semi_finished',
            holder: '请选择是否为半成品',
            type: 'checkbox'
          },
          {
            label: '状态',
            prop: 'status',
            holder: '请输入状态',
            type: 'checkbox'
          },
          {
            label: '所需数量',
            prop: 'need',
            holder: '请输入所需数量',
            type: 'text'
          },
        ],
        options: regionDataPlus,
        materialIndex:'',
        /*刷新 */
        productsLoading:true,
        /*删除 */
        showDel:false,
        delId:'',
        delUrl:'',
        delBatchUrl: '',
        ids:[],
        currentId: '',
        //修改
        updateMask:false,
        updateProForm:{},
        updateMaterialForm:[],
        updateIndex:''
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
      getData(){
        alert(this.searchBox);
        console.log(this.searchBox);
      },
      //新增
      addPro(){
        this.addProMask=true;
        this.materialIndex='index0';
        Object.assign(this.addProForm,this.$options.data().addProForm);
        Object.assign(this.addMaterialForm,this.$options.data().addMaterialForm);
      },
      addMaterialCName({row,rowIndex}){row.index = rowIndex},
      addMaterialRClick(row){
        this.materialIndex=`index${row.index}`;
      },
      addMaterial(){
        let material={
          material_code:'',
          spec_code:'',
          material_name:'',
          spec:'',
          color:'',
          material_quality:'',
          special:'',
          other:'',
          volume:'',
          weight:'',
          unit:'',
          semi_finished:false,
          status:true,
          need:'',
        }
        if(this.addProMask){
          this.addMaterialForm.push(material);
          this.materialIndex = 'index'+ (this.addMaterialForm.length-1);
        }else{
          this.updateMaterialForm.push(material);
          this.updateIndex = 'index'+ (this.updateMaterialForm.length-1);
        }
      },
      addMaterialDtl(index){
        this.addMaterialForm.splice(index,1);
        this.$message({
          message:'删除城市信息成功',
          type:'success'
        })
      },
      addConfirm(){
        let data ={
          commodity_code:this.addProForm.commodity_code,
          spec_code:this.addProForm.spec_code,
          short_name:this.addProForm.short_name,
          spec:this.addProForm.spec,
          color:this.addProForm.color,
          material_quality:this.addProForm.material_quality,
          special:this.addProForm.special,
          other:this.addProForm.other,
          pro_bom_material:this.addMaterialForm
        };
        this.$post(this.urls.proBom,data)
          .then(()=>{
            this.addProMask = false;
            this.refresh();
            this.$message({
              message: '添加成功',
              type: 'success'
            })
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
      addReset(){
        Object.assign(this.addProForm,this.$options.data().addProForm);
        Object.assign(this.addMaterialForm,this.$options.data().addMaterialForm);
      },
      addCancel(){
        this.addLogicMask = false;
        this.$message({
          message:'取消添加',
          type: 'info'
        })
      },
      //修改
      updatePro(){
        this.updateMask=true;
        let id=this.currentId?this.currentId:this.productRow.id;
        this.$fetch(this.urls.proBom+'/'+id,{include:'proBomMaterial.proBom'})
          .then(res=>{
            this.updateProForm={
              commodity_code:res.commodity_code,
              spec_code:res.spec_code,
              short_name:res.short_name,
              spec:res.spec,
              color:res.color,
              material_quality:res.material_quality,
              special:res.special,
              other:res.other,
            };
            this.updateMaterialForm=res['proBomMaterial']['data']
          },err=>{})
      },
      updateMaterialCName({row,rowIndex}){row.index = rowIndex},
      updateMaterialRClick(row){
        this.updateIndex =  `index${row.index}`;
      },
      updateMaterialDtl(row,index){
        if(row.id){
          this.$del(this.urls.proBomMaterial+'/'+row.id)
            .then(()=>{
              this.updateMaterialForm.splice(index,1);
              this.$message({
                message: '删除原材料成功',
                type: 'success'
              })
            })
        }else{
          this.updateMaterialForm.splice(index,1);
          this.$message({
            message: '删除原材料成功',
            type: 'success'
          })
        }
      },
      updateConfirm(){
        let id=this.currentId?this.currentId:this.productRow.id;
        let data={
              commodity_code:this.updateProForm.commodity_code,
              spec_code:this.updateProForm.spec_code,
              short_name:this.updateProForm.short_name,
              spec:this.updateProForm.spec,
              color:this.updateProForm.color,
              material_quality:this.updateProForm.material_quality,
              special:this.updateProForm.special,
              other:this.updateProForm.other,
              pro_bom_material:this.updateMaterialForm
        };
        this.$patch(this.urls.proBom+'/'+id,data)
          .then(()=>{
            this.updateMask = false;
            this.refresh();
            this.$message({
              message:'修改成功',
              type:'success'
            })
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
      updateCancel(){
        this.updateMask = false;
        this.$message({
          message:'取消修改',
          type: 'info'
        })
      },
      //删除
      delPro(){
        if (this.ids.length === 0) {
          this.$message({
            message: '没有选中数据',
            type: 'warning'
          });
        } else {
          this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$del(this.urls.proBom, {ids: this.ids})
              .then(() => {
                this.$message({
                  message: '删除成功',
                  type: 'success'
                });
                this.refresh();
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
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          });
        }
      },
      /*表中删除*/
      delSingle(row,e){
        this.showDel = true;
        $('.el-popper').css({left: e.x - 100 + 'px', top: e.y - 125 + 'px'});
        this.delId = row.id;
        this.delUrl = row['proBomMaterial']?this.urls.proBom:this.urls.proBomMaterial;
      },
      cancelD(){
        this.showDel = false;
        this.$message({
          message: '取消删除',
          type: 'info'
        });
      },
      confirmD(url,id){
        this.$del(url+'/'+id)
          .then(()=>{
            this.$message({
              message: '删除成功',
              type: 'success'
            });
            this.showDel = false;
            this.refresh();
          },err=>{
            if (err.response) {
              this.showDel = false;
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
      //批量选择
      handleSelectionChange(val){
        /*拿到id集合*/
        let delArr = [];
        val.forEach(selectedItem => {
          delArr.push(selectedItem.id);
        });
        this.ids = delArr.join(',');
        /*拿到当前id*/
        this.currentId =val.length>0?val[val.length-1].id:'';
      },
      /*刷新 */
      refresh(){
        this.productsLoading=true;
        this.fetchData();
      },
      /*获取数据 */
      fetchData(){
        this.$fetch(this.urls.proBom,{include:'proBomMaterial.proBom'})
        .then(res =>{
          this.productsLoading=false;
          this.productsData=res.data;
          this.materialData=res.data[0]?res.data[0]['proBomMaterial'].data:[];
          //let pg = res.meta.pagination;
          //this.$store.dispatch('currentPage',pg.current_page);
          //this.$store.commit('PER_PAGE', pg.per_page);
          //this.$store.commit('PAGE_TOTAL', pg.total);
        },err =>{
          if(err.response){
            let arr=err.response.data.errors;
            let arr1=[];
            for(let i in arr){
              arr1.push(arr[i]);
            }
            let str = arr1.join(',');
            this.$message.error({$message:str});
          }
        });
      },
      proRowClick(row){
        this.materialData=row['proBomMaterial'].data;
        this.productRow=row;
      },
      //重置
      resetAddPro(){},
      /*分页*/
      handlePagChg(page){
        this.$fetch()
          .then(res=>{
            this.productsData = res.data;
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