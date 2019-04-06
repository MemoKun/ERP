<template>
    <div>
        <el-tabs v-model="activeName" @tab-click="outerHandleClick">
            <el-tab-pane label="订单列表" name="0">
                <div>
                    <div class="searchBox">
                        <span><label>买家昵称</label><el-input v-model="searchBox.cmptn_buyerNickname" clearable></el-input></span>
                        <span><label>买家姓名</label><el-input v-model="searchBox.cmptn_buyerName" clearable></el-input></span>
                        <span><label>买家电话</label><el-input v-model="searchBox.cmptn_buyerPhone" clearable></el-input></span>
                        <span v-if="filterBox"><label>买家地址</label><el-input v-model="searchBox.cmptn_buyerAddress" clearable></el-input></span>
                        <span v-else>
                                <el-button type="primary">筛选</el-button>
                                <el-button>重置</el-button>
                                <span @click="toggleShow">
                                    <el-button type="text">展开</el-button>
                                    <i class="el-icon-arrow-down" style="color:#409EFF"></i>
                                </span>
                        </span>
                    </div>
                    <div class="searchBox" v-show="filterBox">
                        <span><label>业务员</label><el-input v-model="searchBox.cmptn_businessPersonnel" clearable></el-input></span>
                        <span>
                            <label>赔偿方向</label>
                            <el-select v-model="searchBox.cmptn_Direction" clearable placeholder="请选择">
                                <el-option
                                        v-for="item in searchBox.cmptn_Directions"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                </el-option>
                            </el-select>
                        </span>
                        <span>
                            <label>责任方</label>
                            <el-select v-model="searchBox.cmptn_responsibleParty" clearable placeholder="请选择">
                                <el-option
                                        v-for="item in searchBox.cmptn_responsiblePartys"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                </el-option>
                            </el-select>
                        </span>
                        <span><label>责任人</label><el-input v-model="searchBox.cmptn_responsiblePerson" clearable></el-input></span>
                    </div>
                    <div class="searchBox" v-show="filterBox">
                        <span>
                            <label>发货物流</label>
                            <el-select v-model="searchBox.cmptn_logisticsCompany" clearable placeholder="请选择">
                                <el-option
                                        v-for="item in searchBox.cmptn_logisticsCompanys"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                </el-option>
                            </el-select>
                        </span>
                        <span><label>物流单号</label><el-input v-model="searchBox.cmptn_logisticsTrackingNumber"></el-input></span>
                        <span>
                            <label>所属店铺</label>
                            <el-select v-model="searchBox.cmptn_orderShop" clearable placeholder="请选择">
                                <el-option
                                        v-for="item in searchBox.cmptn_orderShops"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                </el-option>
                            </el-select>
                        </span>
                    </div>
                    <div v-if="filterBox" style="text-align: right">
                        <el-button type="primary">筛选</el-button>
                        <el-button @click="resets">重置</el-button>
                        <span @click="toggleShow" style="display: inline">
                                <el-button type="text">收起</el-button>
                                <i class="el-icon-arrow-up" style="color:#409EFF"></i>
                            </span>
                    </div>
                </div>

                <!--显示列表-未审核-->
                <el-tabs v-model="leftTopActiveName" @tab-click="leftHandleClick" style="height: 400px;">
                    <el-tab-pane label="未审核" name="0">
                        <el-table :data="cmptnOrderListData" fit
                                  v-loading="loading" 
                                  height="350"
                                  >
                            <!--选择列-->
                            <el-table-column
                                    type="selection"
                                    width="95" align="center"
                                    :checked="checkboxInit">
                            </el-table-column>

                            <!--信息列-->
                            <el-table-column v-for="item in cmptnOrderListHead" :label="item.label" align="center" :width="item.width" :key="item.label">
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
                    <el-tab-pane label="已审核" name="1">
                        <el-table :data="cmptn_alreadyHandle" fit
                                  height="350">
                            <el-table-column
                                    type="selection"
                                    width="95" align="center"
                                    :checked="checkboxInit">
                            </el-table-column>
                            <el-table-column v-for="item in cmptnOrderListHead" :label="item.label" align="center" :width="item.width" :key="item.label">
                                <!--<template slot-scope="scope">
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
                                </template>-->
                            </el-table-column>
                        </el-table>
                    </el-tab-pane>
                </el-tabs>
            </el-tab-pane>
        </el-tabs>

        <!--底部tabs-->
        <div class="clearfix">
          <div style="float: left;">
            <el-tabs v-model="leftBottomActiveName">
              <el-tab-pane label="问题产品" name="0">
                <el-table :data="defectiveProductsListVal" fit >
                  <el-table-column v-for="item in defectiveProductsHead" :label="item.label" align="center" :key="item.prop">
                    <template slot-scope="scope">
                      {{scope.row[item.prop][item.inProp]}}
                    </template>
                  </el-table-column>
                </el-table>
              </el-tab-pane>
              <el-tab-pane label="图片信息" name="1">
                
              </el-tab-pane>
            </el-tabs>
          </div>
       
        </div>

        <!--新增售后赔偿订单-->
        <el-dialog title="新增售后赔偿订单" :visible.sync="addCmptnOrderMask" :class="{'more-forms':moreForms,'threeParts':threeParts}" class="bigDialog">
          <div class="clearfix">
            <el-button type="text" style="float: left">基础信息</el-button>
            <el-button type="primary" style="float: right;padding: 6px 10px;font-size: 12px;margin-bottom:5px;" @click="toggleForm">{{toggleText?"折叠":"展开"}}</el-button>
          </div>
          <el-form :model="addCmptnOrderFormVal" class="cmptnOrderAddForm hidePart" id="form">
            <el-form-item v-for="(item,index) in addCmptnOrderFormHead" :key="index" :label="item.label" :prop="item.prop">
              <span v-if="item.type=='text'">
                <span v-if="item.inProp">
                  <el-input v-model.trim="addCmprnOrderFormVal[item.prop][item.inProp]" :disabled="item.addChgAble"></el-input>
                </span>
                <span v-else>
                  <el-input v-model.trim="addCmptnOrderFormVal[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble"></el-input>
                </span>
              </span>
            </el-form-item>
          </el-form>
          <el-tabs v-model="addActiveName" @tab-click="addHandleClick" id="elTabs" class="hidePart">
            <el-tab-pane label="问题产品" name="0">
              <el-table :data="defectiveProductsData" fit @row-click="addProRowClick" :row-class-name="addProRCName">
                <el-table-column v-for="item in addHead[addActiveName]" :label="item.label" align="center" :width="item.width" :key="item.label">
                  <template slot-scope="scope">
                    <!--<span v-if="item.prop=='newData'">
                      <span v-if="proRIndex=='index'+scope.$index">
                        <span v-if="item.type=='number'">
                          <el-input size="small" type="number" v-model.trim="scope.row[item.prop][item.inProp]" :placeholder="item.holder"></el-input>
                        </span>
                        <sapn v-if="item.type=='checkbox'">
                          <el-checkbox v-model="scope.row[item.prop][item.inProp]"></el-checkbox>
                        </sapn>
                        <span v-else>
                          <span v-if="item.type=='checkbox'">
                            <el-checkbox v-model="scope.row[item.prop][item.inProp]" disabled></el-checkbox>
                          </span>
                          <span v-else>
                            {{scope.row[item.prop][item.inProp]}}
                          </span>
                        </span>
                      </span>
                    </span>-->
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
          </el-tabs>
          <div slot="footer" class="dialog-footer clearfix">
            <div style="float:right">
              <el-button type="primary" @click="addCmptnOrderConfirm">确定</el-button>
              <el-button @click="addCmptnOrderCancel">取消</el-button>
            </div>
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
            ent: this.addCmptnOrder,
            ref:'add'
          },
          {
            cnt: '修改',
            icon: 'bf-change',
            ent: this.test
          },
          {
            cnt: '审核',
            icon: 'bf-audit',
            ent: this.test
          },
          {
            cnt: '退审',
            icon: 'bf-auditfaild',
            ent: this.test
          },
          {
            cnt: '作废',
            icon: 'bf-void',
            ent: this.test
          },
          {
            cnt: '刷新',
            icon: 'bf-refresh',
            ent: this.test
          }
        ],
        filterBox: false,
        searchBox:{
          cmptn_buyerNickname:'',
          cmptn_buyerName:'',
          cmptn_buyerPhone:'',
          cmptn_buyerAddress:'',
          cmptn_businessPersonnel:'',
          cmptn_Direction:'',
          cmptn_Directions: [
            {label:'我们赔偿',value:0},
            {label:'赔偿我们',value:1}
          ],
          cmptn_responsibleParty:'',
          cmptn_responsiblePartys: [
              {label:'物流',value:0},
              {label:'工厂',value:1},
              {label:'服务商',value:2},
              {label:'客户',value:3},
              {label:'公司',value:4},
              {label:'其他',value:5}
          ],
          cmptn_responsiblePerson:'',
          cmptn_logisticsCompany:'',
          cmptn_logisticsCompanys:[
              {label:'顺丰速运',value:0},
              {label:'韵达快递',value:1}
          ],
          cmptn_logisticsTrackingNumber:'',
          cmptn_orderShop:'',
          cmptn_orderShops:[
              {label:'Dreasylife家居旗舰店',value:0},
              {label:'思享家官方旗舰店',value:1}
          ],
        },
        activeName: '0',
        addActiveName:'0',
        defectiveProductsData: [],
        leftTopActiveName:'0',
        leftBottomActiveName:'0',
        rightActiveName: '0',
        cmptnOrderListData: [],
        cmptnOrderListHead: [//订单表头标签
          {
            label: '系统单号',
            width: '220',
            prop: 'system_order_number',
            type: 'text',
          },
          {
            label: '赔偿方向',
            width: '220',
            prop: 'cmptn_direction',
            type: 'text'
          },
          {
            label: '责任方',
            width: '150',
            prop: 'responsible_party',
            type: 'text'
          },
          {
            label: '责任人',
            width: '140',
            prop: 'responsible_person',
            type: 'text',
          },
          {
            label: '买家昵称',
            width: '140',
            prop: 'customer_nickname',
            type: 'text',
          },
          {
            label: '买家姓名',
            width: '130',
            prop: 'customer_name',
            type: 'text',
          },
          {
            label: '客户电话',
            width: '130',
            prop: 'customer_phone',
            type: 'text',
          },
          {
            label: '客户城市',
            width: '130',
            prop: 'customer_city',
            type: 'text',
          },
          {
            label: '赔偿金额',
            width: '130',
            prop: 'cmptn_fee',
            type: 'text'
          },
          {
            label: '协商日期',
            width: '140',
            prop: 'negotiation_date',
            type: 'text',
          },
          {
            label: '发货物流',
            width: '120',
            prop: 'logistics_company',
            type: 'text',
          },
          {
            label: '物流单号',
            width: '130',
            prop: 'logistics_tracking_number',
            type: 'text',
          },
          {
            label: '结账方式',
            width: '120',
            prop: 'payment_method',
            type: 'text'
          },
          {
            label: '业务员',
            width: '120',
            prop: 'order_stuff',
            type: 'text'
          }
        ],
        loading: true,//加载数据
        checkboxInit: false,//初始化Checkbox为不选中
        orderListIndex: '',//作用未知
        cmptn_alreadyHandle: [],//已经处理的cmptn订单
        addCmptnOrderMask:false,
        addCmptnOrderFormVal:{
          id:'',
          system_order_number:'',
          cmptn_status:'',
          order_source:'',
          cmptn_direction:'',
          cmptn_shop:'',
          responsible_party:'',
          responsible_person:'',
          customer_nickname:'',
          customer_name:'',
          customer_phone:'',
          customer_city:'',
          customer_address:'',
          cmptn_address:'',
          cmptn_amount:'',
          negotiation_date:'',
          logistics_company:'',
          logistics_tracking_number:'',
          payment_method:'',
          order_stuff:'',
          order_number:'',
          problem_goods:'',
          problem_description:'',
          note:'',
          refuse_reason:'',
          fee_type:'',
          payee:'',
          payee_account:'',
        },
        addCmptnOrderFormHead:[//新建订单的文本框表头
          {
            label: '系统单号',
            prop: 'system_order_number',
            holder: '系统自动生成',
            width:'200',
            type: 'text',
            editChgAble: true,
            addChgAble: true
          },
          {
            label: '买家昵称',
            prop: 'customer_nickname',
            type: 'text',
            editChgAble: true,
            addChgAble: true
          },
          {
            label: '买家姓名',
            prop: 'customer_name',
            type: 'text',
            editChgAble: true,
            addChgAble: true,
          },
          {
            label: '买家电话',
            prop: 'customer_phone',
            type: 'text',
            editChgAble: true,
            addChgAble: true,
          },
          {
            label: '买家城市',
            prop: 'customer_city',
            type: 'text',
            editChgAble: true,
            addChgAble: true,
          },
          {
            label: '结账方式',
            prop: 'payment_method',
            type: 'text',
            editChgAble: true,
            addChgAble: true,
          },
          {
            label: '发货物流',
            prop: 'logistics_company',
            type: 'text',
            editChgAble: true,
            addChgAble: true,
          },
          {
            label: '物流单号',
            prop: 'logistics_tracking_number',
            type: 'text',
            editChgAble: true,
            addChgAble: true,
          },
          {
            label: '责任方',
            prop: 'responsible_party',
            type: 'text',
            editChgAble: true,
            addChgAble: true,
          },
          {
            label: '责任人',
            prop: 'responsible_person',
            type: 'text',
            editChgAble: true,
            addChgAble: true,
          },
          {
            label: '赔偿方向',
            prop: 'cmptn_direction',
  
            type: 'text',
            editChgAble: true,
            addChgAble: true,
          },
          {
            label: '赔偿金额',
            prop: 'cmptn_amount',
            type: 'text',
            editChgAble: true,
            addChgAble: true,
          },
          {
            label: '协商日期',
            prop: 'negotiation_date',
            type: 'DatePicker',
            editChgAble: true,
            addChgAble: true,
          },
          {
            label: '业务员',
            prop: 'order_stuff',
            type: 'text',
            editChgAble: true,
            addChgAble: false,
          },
          {
            label: '费用类型',
            prop: 'fee_type',
            type: 'text',
            editChgAble: true,
            addChgAble: true,
          },
          {
            label: '收款人',
            prop: 'payee',
            type: 'text',
            editChgAble: true,
            addChgAble: true,
          },
          {
            label: '收款账号',
            prop: 'payee_account',
            type: 'text',
            editChgAble: true,
            addChgAble: true,
          },
          {
            label: '问题描述',
            prop: 'problem_description',
            type: 'text',
            editChgAble: true,
            addChgAble: true,
          },
          {
            label: '备注信息',
            prop: 'note',
            type: 'text',
            editChgAble: true,
            addChgAble: true,
          }
        ],
        moreForms:true,
        threeParts:true,
        toggleText:false,
        defectiveProductsListVal:[],
        defectiveProductsHead:[
          {
            label:'商品编码',
            width:'200',
            prop:'proCode',
            type:'text',
          },
          {
            label:'规格编码',
            width:'200',
            prop:'specCode',
            type:'text',
          },
          {
            label:'商品简称',
            width:'200',
            prop:'proName',
            type:'text',
          },
          {
            label:'规格',
            width:'200',
            prop:'spec',
            type:'text',
          },
          {
            label:'颜色',
            width:'200',
            prop:'color',
            type:'text',
          },
          {
            label:'材质',
            width:'200',
            prop:'material',
            type:'text',
          },
          {
            label:'功能',
            width:'200',
            prop:'function',
            type:'text',
          },
          {
            label:'特殊',
            width:'200',
            prop:'special',
            type:'text',
          },
          {
            label:'其他',
            width:'200',
            prop:'other',
            type:'text',
          },
          {
            label:'购买数量',
            width:'200',
            prop:'purQuantity',
            type:'text',
          },
        ],
        addHead:[
          [
            {
            label:'商品编码',
            width:'160',
            prop:'proCode',
            type:'text',
          },
          {
            label:'规格编码',
            width:'160',
            prop:'specCode',
            type:'text',
          },
          {
            label:'商品简称',
            width:'160',
            prop:'proName',
            type:'text',
          },
          {
            label:'规格',
            width:'130',
            prop:'spec',
            type:'text',
          },
          {
            label:'颜色',
            width:'130',
            prop:'color',
            type:'text',
          },
          {
            label:'材质',
            width:'130',
            prop:'material',
            type:'text',
          },
          {
            label:'功能',
            width:'130',
            prop:'function',
            type:'text',
          },
          {
            label:'特殊',
            width:'130',
            prop:'special',
            type:'text',
          },
          {
            label:'其他',
            width:'130',
            prop:'other',
            type:'text',
          },
          {
            label:'购买数量',
            width:'130',
            prop:'purQuantity',
            type:'text',
          },
          ],
        ]
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
    methods: {
      toggleShow(){
        this.filterBox = !this.filterBox;
      },
      test() {
        console.log(1);
      },
      /*获取数据*/
      outerHandleClick() {
       
      },
      fetchData(){ 
        this.$fetch(this.urls.aftercompensation)
              .then(res => {
                this.loading = false;
                this.cmptnOrderListData = res.data;
              }, err => {
                if (err.response) {
                  let arr = err.response.data.errors;
                  let arr1 = [];
                  for (let i in arr) {
                    arr1.push(arr[i]);
                  }
                  this.$message.error(arr1.join(','));
                }
              });
      },
      leftHandleClick(){
        this.loading = true;
        this.fetchData();
      },
      rightHandleClick(){},
      orderListRClick(row){
        if(row['locker_id'] == 0){
          this.newOpt[1].nClick = true;
          this.newOpt[2].nClick = true;
          this.newOpt[3].nClick = false;
          this.newOpt[4].nClick = true;
          this.newOpt[8].nClick = true;
          this.newOpt[9].nClick = true;
          this.newOpt[14].nClick = true;
          if(row['order_status']=="已客审"){
            this.newOpt[5].nClick = true;
            this.newOpt[6].nClick = false;
          }else{
            this.newOpt[5].nClick = false;
            this.newOpt[6].nClick = true;
          }
        }else{
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
      proDtlRClick(row){},
      /*新增*/
      addCmptnOrder(){
        this.addCmptnOrderMask = true;
        this.addIds =[];
        this.defectiveProductsData = [];
        this.proRIndex = '';
      },
      proQueryClick(){
        this.proSkuVal = [];
        this.$fetch(this.urls.products,{'status': true,'commodity_code':this.proQuery.commodity_code,'component_code':this.proQuery.component_code,'shops_id': this.proQuery.shops_id,'short_name':this.proQuery.short_name,'include':'productComponents.product,shop,supplier,goodsCategory,combinations.productComponents'})
          .then(res=>{
            this.proVal = res.data;
            let comb = res.data[0]['combinations']['data'];
            if(comb.length>0){
              let total_volume = 0;
              comb.map(item=>{
                item['productComp']=item['productComponents']['data'];
                if(item['productComponents']['data'].length>0){
                  item['productComponents']['data'].map(list=>{
                    total_volume += list.volume;
                  });
                }else{
                  total_volume = 0;
                }
                this.$set(item,'newData',{
                  quantity: '',
                  paint:'',
                  is_printing: false,
                  printing_fee: '',
                  is_spot_goods: true,
                  under_line_univalent: '',
                  under_line_preferential: '',
                  total_volume: total_volume
                });
              })
            }else{
              comb['productComp']=[];
            }
            this.proSkuVal = comb;
          },err=>{})
      },
      addHandleClick(){

      },
      addProRCName({row,rowIndex}){row.index =rowIndex;},
      addProRowClick(row){
        this.proRIndex = `index${row.index}`;
      },
      addDelPro(index){this.defectiveProductsData.splice(index,1)},
      addCmptnOrderConfirm(){
        let forData = this.addCmptnOrderFormVal;
        let submitData = {
          shops_id: forData.shops_id,
          member_nick: forData.member_nick,
          logistics_id:forData.logistics_id,
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
          is_cancel_after_verification : forData.is_cancel_after_verification,
          accept_order_user: forData.accept_order_user,
          tax_number: forData.tax_number,
          receipt: forData.receipt,
          logistics_remark: forData.logistics_remark,
          seller_remark: forData.seller_remark,
          customer_service_remark: forData.customer_service_remark,
          buyer_message: forData.buyer_message,
          status: forData.status,
          receiver_name: this.receiveInfo.receiver_name,
          receiver_phone: this.receiveInfo.receiver_phone,
          receiver_mobile: this.receiveInfo.receiver_mobile,
          receiver_state:  CodeToText[this.receiveInfo.provinces[0]],
          receiver_city: CodeToText[this.receiveInfo.provinces[1]],
          receiver_district: CodeToText[this.receiveInfo.provinces[2]],
          receiver_address: this.receiveInfo.receiver_address,
          receiver_zip: this.receiveInfo.receiver_zip,
          order_items: [],
          payment_details:[]
        };
        this.defectiveProductsData.map(item=>{
          let proD ={
            products_id: item.pid,
            combinations_id: item.id,
            total_volume: item['newData'].total_volume,
            paint: item['newData'].paint,
            is_printing: item['newData'].is_printing,
            printing_fee: item['newData'].printing_fee,
            is_spot_goods: item['newData'].is_spot_goods,
            under_line_univalent: item['newData'].under_line_univalent,
            under_line_total_amount: item['newData'].under_line_total_amount,
            under_line_preferential: item['newData'].under_line_preferential
          };
          submitData.order_items.push(proD);
        });
        this.expenseData.map(list=>{
          let expenseD = {
            payment: list.payment,
            payment_methods_id: list.payment_methods_id
          };
          submitData.payment_details.push(expenseD);
        });
        this.$post(this.urls.aftercompensation,submitData)
          .then(()=>{
            this.addCmptnOrderMask = false;
            this.refresh();
            this.$message({
              message: '添加成功',
              type: 'success'
            })
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
      addCmptnOrderCancel(){
        this.addCmptnOrderMask = false;
        this.$message({
          message: '取消新增订单明细',
          type: 'success'
        })
      },
      /*商品明细*/
      addProDtl(){
        this.proMask = true;
        Object.assign(this.proQuery,this.$options.data().proQuery);
        this.proVal = [];
        this.proSkuVal = [];
        this.proIds = [];
      },
      toggleForm(){
        /*展开  partHide
        * 折叠  没有partHide*/
        this.clickFlag = !this.clickFlag;
        this.toggleText = !this.toggleText;
        if(this.clickFlag){
          $('#form').removeClass('hidePart');
          $('#elTabs').removeClass('hidePart');
        }else{
          $('#form').addClass('hidePart');
          $('#elTabs').addClass('hidePart');
        }
      },
      proRowClick(row){
        this.proSkuVal = [];
        this.proCompRowIndex = '';
        let comb = row['combinations']['data'];
        if(comb.length>0){
          let total_volume = 0;
          comb.map(item=>{
            item['productComp']=item['productComponents']['data'];
            if(item['productComponents']['data'].length>0){
              item['productComponents']['data'].map(list=>{
                total_volume += list.volume;
              });
            }else{
              total_volume = 0;
            }
            this.$set(item,'newData',{
              quantity: '',
              paint:'',
              is_printing: false,
              printing_fee: '0.0',
              is_spot_goods: false,
              under_line_univalent: '0.0',
              under_line_preferential: '0.0',
              total_volume: total_volume
            });
          })
        }else{
          comb['productComp']=[];
        }
        this.proSkuVal = comb;
      },
      proCName(){},
      proSkuCName({row,rowIndex}){row.index = rowIndex},
      proSkuRowClick(row){
        this.proCompRowIndex = `index${row.index}`;
        this.proCompRow =row;
      },
      quantityChg(value){
        if(value>0){
          let proCRow = this.proCompRow;
          if(this.proIds.indexOf(proCRow.id)==-1){
            this.proIds.push(proCRow.id);
            this.proSubmitData.push(proCRow);
          }else{
            this.proSubmitData.map((list,index)=>{
              if(list.id==proCRow.id){
                this.proSubmitData.splice(index,1);
                this.proSubmitData.push(proCRow);
              }
            });
          }
        }
      },
      formChg(){
        let formVal;
        if(this.addCmptnOrderMask){
          formVal = this.updateCustomerFormVal;
        }else{
          formVal = this.updateCustomerFormVal;
        }
        formVal['total_distribution_fee']= (formVal['deliver_goods_fee']-0)+(formVal['move_upstairs_fee']-0)+(formVal['installation_fee']-0);
      },
      confirmAddProDtl(){
        if(this.addCmptnOrderMask){
          this.proSubmitData.map(item=>{
            if(this.addIds.indexOf(item.id)==-1){
              this.defectiveProductsData.push(item);
              this.addIds.push(item.id);
              this.$message({
                message: '添加商品信息成功',
                type: 'success'
              })
            }else{
              this.defectiveProductsData.map((list,index)=>{
                if(list.id == item.id){
                  this.defectiveProductsData.splice(index,1);
                  this.defectiveProductsData.push(item);
                  this.$message({
                    message: '添加商品信息成功',
                    type: 'success'
                  })
                }
              })
            }
          });
        }else{
          this.proSubmitData.map(item=>{
            if(this.updateProIds.indexOf(item.id)==-1){
              this.updateProData.push(item);
              this.updateProIds.push(item.id);
              this.$message({
                message: '添加商品信息成功',
                type: 'success'
              })
            }else{
              this.updateProData.map((list,index)=>{
                if(list.combinations_id == item.id){
                  this.$set(item,'originalId',list.id);
                  this.updateProData.splice(index,1);
                  this.updateProData.push(item);
                  this.$message({
                    message: '添加商品信息成功',
                    type: 'success'
                  })
                }
              })
            }
          });
        }
      },
      cancelAddProDtl(){
        this.proMask = false;
      },
      addDelExpense(index){
        this.expenseData.splice(index,1);
        this.$message({
          message: '删除成功',
          type: 'success'
        })
      },
      addExpenseRCName({row,rowIndex}){row.index = rowIndex;},
      addExpenseRClick(row){
        this.expenseRIndex = `index${row.index}`;
      },
      /*新增行*/
      addExpenseLine(){
        if(this.addCmptnOrderMask){
          this.expenseData.push({
            payment_methods_id: '',
            payment:''
          })
        }else{
          this.updateExpenseData.push({
            payment_methods_id: '',
            payment:''
          })
        }
      },
      /*删除单条*/
      delSingle(row,e){
        this.showDel = true;
        $('.el-popper').css({left: e.x - 100 + 'px', top: e.y - 125 + 'px'});
        this.delId = row.id;
        this.delUrl = row['orderItems']?this.urls.aftercompensation:(row['payment']?this.urls['paymentdetails']:this.urls.orderitems);
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
            this.showDel = false;
            this.refresh();
            this.$message({
              message: '删除成功',
              type: 'success'
            });
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
      /*批量删除*/
      handleSelectionChange(val){
        console.log(val);
        /*拿到id集合*/
        let delArr = [];
        val.forEach(selectedItem => {
          delArr.push(selectedItem.id);
        });
        this.ids = delArr.join(',');
        /*拿到当前id*/
        this.checkboxId=val.length>0?val[val.length-1].id:'';
        this.curRowData=val.length>0?val[val.length-1]:'';
        this.mergerIds = val;
      },
      delBatch(){
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
            this.$del(this.urls.aftercompensation, {ids: this.ids})
              .then(() => {
                this.refresh();
                this.$message({
                  message: '删除成功',
                  type: 'success'
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
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          });
        }
      },
      /*页码*/
      handlePagChg(page){
        this.$fetch(this.urls.aftercompensation+'?page='+page,{include:'shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems.combination.productComponents,orderItems.product,businessPersonnel,locker,paymentDetails.paymentMethod,paymentDetails.order'})
          .then(res=>{
            if(this.leftTopActiveName == '0'){
              this.cmptnOrderListData = res.data;
            }else{
              this.alreadyHandle = res.data;
            }
          })
      },
      refresh(){
        this.loading = true;
        this.fetchData();
      },
      /*锁定*/
      lockOrder(){
        if (this.newOpt[3].nClick) {
          return
        } else {
          let id = this.checkboxId?this.checkboxId:this.curRowId;
          this.$put(this.urls.aftercompensation + '/' + id + '/lockorunlock')
            .then(()=>{
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
                message:'锁定成功',
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
        }
      },
      /*解锁*/
      debLock(){
        if (this.newOpt[4].nClick) {
          return
        } else {
          let id = this.checkboxId?this.checkboxId:this.curRowId;
          this.$put(this.urls.aftercompensation + '/' + id + '/lockorunlock')
            .then(()=>{
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
                message:'解锁成功',
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
        }
      },
      /*修改*/
      updateData(){
        this.proIds = [];
        this.updateProIds = [];
        this.expenseRIndex ='';
        this.updateCustomerFormVal = {};
        this.updateProData =[];
        this.updateReceiveInfo ={};
        this.updateExpenseData = [];
        this.updateCustomerMask = true;
        this.proRIndex = '';
        let id = this.checkboxId?this.checkboxId:this.curRowId;
        this.$fetch(this.urls.aftercompensation+'/'+id,{'include':'shop,logistic,freightType,distribution,distributionMethod,distributionType,takeDeliveryGoodsWay,customerType,paymentMethod,warehouses,orderItems.combination.productComponents,orderItems.product,businessPersonnel,locker,paymentDetails'})
          .then(res=>{
            this.updateCustomerFormVal = res;
            if(res['orderItems']['data'].length>0){
              res['orderItems']['data'].map(item=>{
                this.updateProIds.push(item['combination'].id);
                item['name']=item['combination']['name'];
                item['id']=item.id;
                item['products_id']=item.products_id;
                item['combinations_id']=item.combinations_id;
                item['productComp']=item['combination']['productComponents']['data'];
                this.$set(item,'newData',{
                  quantity: item.quantity,
                  paint:item.paint,
                  is_printing: item.is_printing,
                  printing_fee: item.printing_fee,
                  is_spot_goods: item.is_spot_goods,
                  under_line_univalent: item.under_line_univalent,
                  under_line_preferential: item.under_line_preferential,
                  total_volume: item.total_volume
                });
              })
            }
            this.updateProData = res['orderItems']['data'];
            this.updateReceiveInfo = {
              receiver_name: res.receiver_name,
              receiver_phone: res.receiver_phone,
              receiver_mobile: res.receiver_mobile,
              provinces: [TextToCode[res.receiver_state].code, TextToCode[res.receiver_state][res.receiver_city].code, TextToCode[res.receiver_state][res.receiver_city][res.receiver_district].code],
              receiver_address: res.receiver_address,
              receiver_zip: res.receiver_zip
            };
            this.updateExpenseData = res['paymentDetails']['data'];
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
      updateDelPro(row,index){
        if(row['originalId']){
          this.$del(this.urls.orderitems+'/'+row['originalId'])
            .then(()=>{
              this.updateProData.splice(index,1);
              this.$message({
                message: '删除成功',
                type: 'success'
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
        }else if(row.id ){
          this.$del(this.urls.orderitems+'/'+row.id)
            .then(()=>{
              this.updateProData.splice(index,1);
              this.$message({
                message: '删除成功',
                type: 'success'
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
        }else{
          this.updateProData.splice(index,1);
          this.$message({
            message:'删除商品信息成功',
            type: 'success'
          })
        }
      },
      updateDelExpense(row,index){
        if(row.id){
          this.$del(this.urls.paymentdetails+'/'+row.id)
            .then(()=>{
              this.updateExpenseData.splice(index,1);
              this.$message({
                message: '删除成功',
                type: 'success'
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
        }else{
          this.updateExpenseData.splice(index,1);
          this.$message({
            message:'删除商品信息成功',
            type: 'success'
          })
        }
      },
      updateCustomerConfirm(){
        let forData = this.updateCustomerFormVal;
        let submitData = {
          shops_id: forData.shops_id,
          member_nick: forData.member_nick,
          logistics_id:forData.logistics_id,
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
          is_cancel_after_verification : forData.is_cancel_after_verification,
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
          receiver_state:  CodeToText[this.updateReceiveInfo.provinces[0]],
          receiver_city: CodeToText[this.updateReceiveInfo.provinces[1]],
          receiver_district: CodeToText[this.updateReceiveInfo.provinces[2]],
          receiver_address: this.updateReceiveInfo.receiver_address,
          receiver_zip: this.updateReceiveInfo.receiver_zip,
          order_items: [],
          payment_details:[]
        };
        this.updateProData.map(item=>{
          if(item.combinations_id){
            let proD ={
              id: item.id,
              products_id: item.products_id,
              combinations_id: item.combinations_id,
              quantity: item['newData'].quantity,
              total_volume: item['newData'].total_volume,
              paint: item['newData'].paint,
              is_printing: item['newData'].is_printing,
              printing_fee: item['newData'].printing_fee,
              is_spot_goods: item['newData'].is_spot_goods,
              under_line_univalent: item['newData'].under_line_univalent,
              under_line_total_amount: item['newData'].under_line_total_amount,
              under_line_preferential: item['newData'].under_line_preferential
            };
            submitData.order_items.push(proD);
          }else if(item['originalId']){
            let proD ={
              id: item['originalId'],
              products_id: item.pid,
              combinations_id: item.id,
              quantity: item['newData'].quantity,
              total_volume: item['newData'].total_volume,
              paint: item['newData'].paint,
              is_printing: item['newData'].is_printing,
              printing_fee: item['newData'].printing_fee,
              is_spot_goods: item['newData'].is_spot_goods,
              under_line_univalent: item['newData'].under_line_univalent,
              under_line_total_amount: item['newData'].under_line_total_amount,
              under_line_preferential: item['newData'].under_line_preferential
            };
            submitData.order_items.push(proD);
          }else{
            let proD ={
              products_id: item.pid,
              combinations_id: item.id,
              quantity: item['newData'].quantity,
              total_volume: item['newData'].total_volume,
              paint: item['newData'].paint,
              is_printing: item['newData'].is_printing,
              printing_fee: item['newData'].printing_fee,
              is_spot_goods: item['newData'].is_spot_goods,
              under_line_univalent: item['newData'].under_line_univalent,
              under_line_total_amount: item['newData'].under_line_total_amount,
              under_line_preferential: item['newData'].under_line_preferential
            };
            submitData.order_items.push(proD);
          }
        });
        this.updateExpenseData.map(list=>{
          if(list.id){
            let expenseD = {
              id: list.id,
              payment: list.payment,
              payment_methods_id: list.payment_methods_id
            };
            submitData.payment_details.push(expenseD);
          }else{
            let expenseD = {
              payment: list.payment,
              payment_methods_id: list.payment_methods_id
            };
            submitData.payment_details.push(expenseD);
          }
        });
        let id = this.checkboxId?this.checkboxId:this.curRowId;
        this.$patch(this.urls.aftercompensation+'/'+id,submitData)
          .then(()=>{
            this.updateCustomerMask = false;
            this.refresh();
            this.$message({
              message: '修改成功',
              type: 'success'
            })
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
      updateCustomerCancel(){
        this.updateCustomerMask = false;
        this.$message({
          message: '取消修改订单明细',
          type: 'success'
        })
      },
      /*审核*/
      handleAudit(){
        if (this.newOpt[5].nClick) {
          return
        } else {
          let id = this.checkboxId?this.checkboxId:this.curRowId;
          this.$put(this.urls.aftercompensation + '/' + id + '/audit')
            .then(()=>{
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
                message:'审核成功',
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
        }
      },
      handleUnAudit(){
        if (this.newOpt[6].nClick) {
          return
        } else {
          let id = this.checkboxId?this.checkboxId:this.curRowId;
          this.$put(this.urls.aftercompensation + '/' + id + '/unaudit')
            .then(()=>{
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
                message:'退审成功',
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
        }
      },
      handleSplitOrder(){
        if (this.newOpt[9].nClick) {
          return
        } else {
          this.splitMask = true;
          this.splitRowIndex ='';
          this.splitVal = [];
          let orderData = this.curRowData['orderItems']['data'];
          if(orderData.length>0){
            orderData.map(item=>{
              let list = {
                id: item.id,
                commodity_code: item.product['commodity_code'],
                short_name: item.product['short_name'],
                quantity: item['quantity'],
                newData: {
                  quantity: ''
                }
              };
              this.splitVal.push(list);
            })
          }
        }
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
        })
      })
    },
  }
</script>