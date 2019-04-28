<template>
    <div>
        <!--筛选信息输入-->
        <div>
          <div class="searchBox" v-if="currentPage">
            <span>
                <label>单号</label>
                <el-input v-model="searchBox.shopTitle" clearable class="half" @keyup.enter.native="getData"></el-input>
            </span>
            <span>
                <label>买家昵称</label>
                <el-input v-model="searchBox.shopTitle" clearable class="half" @keyup.enter.native="getData"></el-input>
            </span>
            <span>
                <label>买家姓名</label>
                <el-input v-model="searchBox.shopTitle" clearable class="half" @keyup.enter.native="getData"></el-input>
            </span>
            <span v-if="filterBox">
              <label>补件类别</label>
                <el-select v-model="searchBox.shopTitle" clearable placeholder="请选择">
                  <el-option v-for="item in searchBox.shopTitle"
                      :key="item.value" :label="item.label" :value="item.value">
                   </el-option>
               </el-select>            
            </span>
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
            <span>
                <label>包含产品</label>
                <el-input v-model="searchBox.shopTitle" clearable class="half" @keyup.enter.native="getData"></el-input>
            </span>
            <span>
                <label>店铺昵称</label>
                  <el-select v-model="searchBox.shopTitle" clearable placeholder="请选择">
                    <el-option v-for="item in searchBox.shopTitle"
                        :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>            
            </span>
            <span>
                <label>省市区</label>
                <el-cascader size="middle" :options="options" v-model="searchBox.shopTitle" ></el-cascader>
            </span>
            <span>
            <label>审核时间</label>
            <el-date-picker v-model="searchBox.shopTitle"
             type="daterange" range-separator="至"
             start-placeholder="开始日期" end-placeholder="结束日期">
            </el-date-picker>
          </span>
          <div v-if="filterBox" style="text-align: right">
            <el-button type="primary">筛选</el-button>
              <el-button @click="resets">重置</el-button>
                <span @click="toggleShow" style="display: inline">
                  <el-button type="text">收起</el-button>
                     <i class="el-icon-arrow-up" style="color:#409EFF"></i>
                </span>
           </div>
          </div>
        </div>
        <!--订单信息tab-->
        <el-tabs v-model="activeName" @tab-click="handleTabsClick">
          <el-tab-pane label="未打印" name="0">
            <el-table :data="orderData">
              <el-table-column v-for="item in orderHead" :label="item.label" 
              :width="item.width" :key="item.label" align="center">

              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="已打印" name="1">
            <el-table :data="orderData">
              <el-table-column v-for="item in orderHead" :label="item.label" 
              :width="item.width" :key="item.label" align="center">

              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="未发货" name="2">
            <el-table :data="orderData">
              <el-table-column v-for="item in orderHead" :label="item.label" 
              :width="item.width" :key="item.label" align="center">

              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="已发货" name="3">
            <el-table :data="orderData">
              <el-table-column v-for="item in orderHead" :label="item.label" 
              :width="item.width" :key="item.label" align="center">

              </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
        <!--补件信息tab-->
        <el-tabs v-model="bottomActiveName" @tab-click="bottomTabsClick">
          <el-tab-pane label="补件产品" name='0'>
            <el-table :data="resupplyData">
            <el-table-column v-for="item in resupplyHead[this.bottomActiveName]"
            :label="item.label" align="center" :width="item.width" :key="item.label">

            </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="问题产品" name='1'>
            <el-table :data="resupplyData">
            <el-table-column v-for="item in resupplyHead[this.bottomActiveName]"
            :label="item.label" align="center" :width="item.width" :key="item.label">

            </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="图片信息" name='2'>图片信息</el-tab-pane>
          <el-tab-pane label="驳回原因" name='3'>
            <el-table :data="resupplyData">
            <el-table-column v-for="item in resupplyHead[this.bottomActiveName]"
            :label="item.label" align="center" :width="item.width" :key="item.label">

            </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="采购明细" name='4'>
            <el-table :data="resupplyData">
            <el-table-column v-for="item in resupplyHead[this.bottomActiveName]"
            :label="item.label" align="center" :width="item.width" :key="item.label">

            </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="操作记录" name='5'>
            <el-table :data="resupplyData">
            <el-table-column v-for="item in resupplyHead[this.bottomActiveName]"
            :label="item.label" align="center" :width="item.width" :key="item.label">

            </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="补件进度" name='6'>
            <el-table :data="resupplyData">
            <el-table-column v-for="item in resupplyHead[this.bottomActiveName]"
            :label="item.label" align="center" :width="item.width" :key="item.label">

            </el-table-column>
            </el-table>
            <div style="text-align: right">
              <el-button>新增进度</el-button>
              <el-button>修改进度</el-button>
              <el-button>删除进度</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="电子面单" name='7'>
            <el-table :data="resupplyData">
            <el-table-column v-for="item in resupplyHead[this.bottomActiveName]"
            :label="item.label" align="center" :width="item.width" :key="item.label">

            </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="内部便签" name='8'>
            <el-table :data="resupplyData">
            <el-table-column v-for="item in resupplyHead[this.bottomActiveName]"
            :label="item.label" align="center" :width="item.width" :key="item.label">

            </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
  import {regionDataPlus} from'element-china-area-data'
  export default {
    data() {
      return {
        newOpt: [
          {
            cnt: '修改',
            icon: 'bf-change',
            ent: this.test,
            nClick:false
          },
          {
            cnt: '发货',
            icon: 'bf-deliver',
            ent: this.test
          },
          {
            cnt: '批量处理',//批量发货
            icon: 'bf-more',
            ent: this.test
          },
          {
            cnt: '导出',
            icon: 'bf-out',
            ent: this.test
          },
          {
            cnt: '打印',
            icon: 'bf-printer',
            ent: this.test
          },
          {
            cnt: '刷新',
            icon: 'bf-refresh',
            ent: this.test
          }
        ],
        currentPage:true,
        filterBox:false,
        activeName:'0',
        bottomActiveName:'0',
        searchBox:{
          buyNick:'',
          shopTitle:''
        },
        options: regionDataPlus,
        //订单信息tab
        orderData:[],
        orderHead:[
          {
            label: '补件单号',
            width: '220',
            prop: 'resupply_order_no',
            type: 'text',
          },
          {
            label: '系统单号',
            width: '220',
            prop: 'system_order_no',
            type: 'text',
          },
          {
            label: '补件类别',
            width: '140',
            prop: 'resupply_type',
            type: 'text',
          },
          {
            label: '补件成本',
            width: '130',
            prop: 'resupply_cost',
            type: 'number',
          },
          {
            label: '补件金额',
            width: '130',
            prop: 'resupply_money',
            type: 'number',
          },
          {
            label: '补件原因',
            width: '300',
            prop: 'resupply_reason',
            type: 'text',
          },
          {
            label: '补件责任方',
            width: '160',
            prop: 'resupply_responsibility',
            type: 'text',
          },
          {
            label: '补件备注',
            width: '300',
            prop: 'resupply_remark',
            type: 'text',
          },
          {
            label: '店铺昵称',
            width: '130',
            prop: 'shop_nick',
            type: 'text',
          },
          {
            label: '买家昵称',
            width: '130',
            prop: 'member_nick',
            type: 'text',
          },
          {
            label: '店铺分组',
            width: '140',
            prop: 'shop_group',
            type: 'text',
          },
          {
            label: '买家姓名',
            width: '130',
            prop: 'member_name',
            type: 'text',
          },
          {
            label: '买家电话',
            width: '160',
            prop: 'member_telephone',
            type: 'number',
          },
          {
            label: '物流公司',
            width: '140',
            prop: 'logistic',
            type: 'text',
          },
          {
            label: '快递单号',
            width: '140',
            prop: 'express_no',
            type: 'text',
          },
          {
            label: '预计运费',
            width: '130',
            prop: 'estimated_fee',
            type: 'number',
          },
          {
            label: '物流赔偿费用',
            width: '130',
            prop: 'compensate_fee',
            type: 'number',
          },
          {
            label: '送装费用',
            width: '130',
            prop: 'load_fee',
            type: 'number',
          },
          {
            label: '配送方式',
            width: '160',
            prop: 'distribution_method',
            type: 'text',
          },
          {
            label: '运费类型',
            width: '140',
            prop: 'fee_type',
            type: 'text',
          },
          {
            label: '供应商',
            width: '130',
            prop: 'supplier',
            type: 'text',
          },
          {
            label: '承诺时间',
            width: '140',
            prop: 'promise_time',
            type: 'text',
          },
          {
            label: '补款方式',
            width: '140',
            prop: 'refund_method',
            type: 'text',
          },
          {
            label: '补款账号',
            width: '160',
            prop: 'refund_account',
            type: 'text',
          },
          {
            label: '开户银行',
            width: '140',
            prop: 'bank',
            type: 'text',
          },
          {
            label: '发货人',
            width: '140',
            prop: 'consigner',
            type: 'text',
          },
          {
            label: '发货仓库',
            width: '160',
            prop: 'consign_warehouse',
            type: 'text',
          },
          {
            label: '发货备注',
            width: '200',
            prop: 'consign_remark',
            type: 'text',
          },
          {
            label: '省',
            width: '120',
            prop: 'province',
            type: 'text',
          },
          {
            label: '市',
            width: '120',
            prop: 'city',
            type: 'text',
          },
          {
            label: '区',
            width: '120',
            prop: 'district',
            type: 'text',
          },
          {
            label: '详细地址',
            width: '200',
            prop: 'address',
            type: 'text',
          },
          {
            label: '创建人',
            width: '140',
            prop: 'creator',
            type: 'text',
          },
          {
            label: '创建时间',
            width: '140',
            prop: 'create_time',
            type: 'text',
          },
          {
            label: '打印时间',
            width: '140',
            prop: 'print_time',
            type: 'text',
          },
          {
            label: '发货时间',
            width: '140',
            prop: 'consign_time',
            type: 'text',
          },
          {
            label: '配送公司',
            width: '140',
            prop: 'distribution_company',
            type: 'text',
          },
          {
            label: '配送电话',
            width: '140',
            prop: 'distribution_phone',
            type: 'number',
          },
          {
            label: '方数',
            width: '140',
            prop: 'square_number',
            type: 'number',
          },
          {
            label: '件数',
            width: '140',
            prop: 'number',
            type: 'number',
          },
          {
            label: '标记名称',
            width: '140',
            prop: 'mark_name',
            type: 'text'
          },
          {
            label: '标记人',
            width: '140',
            prop: 'marker',
            type: 'text',
          },
          {
            label: '标记时间',
            width: '140',
            prop: 'mark_time',
            type: 'text',
          },
          {
            label: '入库状态',
            width: '140',
            prop: 'warehousing_status',
            type: 'text',
          },
          {
            label: '采购',
            width: '140',
            prop: 'is_purchase',
            type: 'checkbox',
          },
        ],
        //补件信息
        resupplyData:[],
        resupplyHead:[
          //补件产品，0
          [
            {
               label: '规格图片',
               width: '120',
               prop: "img_url",
               type: 'img'
            },
            {
              label: '商品编码',
              width: '160',
              prop: "commodity_code",
              type: 'text'
            },
            {
              label: '规格编码',
              width: '160',
              prop: "spec_code",
              type: 'text'
            },
            {
              label: '商品简称',
              width: '160',
              prop:'short_name',
              type: 'text'
            },
            {
              label: '规格名称',
              width: '160',
              prop:'spec_name',
              type: 'text'
            },
            {
              label: '数量',
              width: '120',
              prop:'quantity',
              type: 'number'
            },
            {
              label: '包件数',
              width: '120',
              prop:'package_number',
              type: 'number'
            },
            {
              label: '实际售价',
              width: '120',
              prop:'real_price',
              type: 'number'
            },
            {
              label: '备注',
              width: '200',
              prop:'remark',
              type: 'text'
            }
          ],
          //问题产品，1
          [
            {
               label: '规格图片',
               width: '120',
               prop: "img_url",
               type: 'img'
            },
            {
              label: '商品编码',
              width: '160',
              prop: "commodity_code",
              type: 'text'
            },
            {
              label: '规格编码',
              width: '160',
              prop: "spec_code",
              type: 'text'
            },
            {
              label: '商品简称',
              width: '160',
              prop:'short_name',
              type: 'text'
            },
            {
              label: '规格名称',
              width: '160',
              prop:'spec_name',
              type: 'text'
            },
            {
              label: '供应商',
              width: '130',
              prop: 'supplier',
              type: 'text',
            },
            {
              label: '问题描述',
              width: '200',
              prop: 'description',
              type: 'text',
            }
          ],
          //图片信息，2
          [],
          //驳回原因，3
          [
            {
              label: '驳回人',
              width: '130',
              prop: 'rejecter',
              type: 'text',
            },
            {
              label: '驳回时间',
              width: '130',
              prop: 'reject_time',
              type: 'text',
            },
            {
              label: '驳回原因',
              width: '200',
              prop: 'reject_reason',
              type: 'text',
            }
          ],
          //采购明细，4
          [
            {
              label: '商品编码',
              width: '160',
              prop: "commodity_code",
              type: 'text'
            },
            {
              label: '规格编码',
              width: '160',
              prop: "spec_code",
              type: 'text'
            },
            {
              label: '商品简称',
              width: '160',
              prop:'short_name',
              type: 'text'
            },
            {
              label: '规格名称',
              width: '160',
              prop:'spec_name',
              type: 'text'
            },
            {
              label: '采购数',
              width: '120',
              prop:'purchase_number',
              type: 'number'
            },
            {
              label: '已入库数',
              width: '120',
              prop:'stock_number',
              type: 'number'
            },
          ],
          //操作记录，5
          [
            {
              label: '用户',
              width: '130',
              prop: 'username',
              type: 'text',
            },
            {
              label: '操作',
              width: '160',
              prop: 'operation',
              type: 'text',
            },
            {
              label: '操作描述',
              width: '200',
              prop: 'operation_description',
              type: 'text',
            },
            {
              label: '创建时间',
              width: '130',
              prop: 'create_time',
              type: 'text',
            }
          ],
          //补件进度，6
          [
            {
              label: '进度描述',
              width: '200',
              prop: 'progress_description',
              type: 'text',
            },
            {
              label: '创建人',
              width: '150',
              prop: 'creator',
              type: 'text',
            },
            {
              label: '创建时间',
              width: '200',
              prop: 'create_time',
              type: 'text',
            }
          ],
          //电子面单，7
          [
            {
              label: '电子面单号',
              width: '130',
              prop: 'esheet_code',
              type: 'text',
            },
          ],
          //内部便签，8
          [
            {
              label: '主题',
              width: '130',
              prop: 'theme',
              type: 'text',
            },
            {
              label: '用户',
              width: '130',
              prop: 'username',
              type: 'text',
            },
            {
              label: '内容',
              width: '130',
              prop: 'content',
              type: 'text',
            },
            {
              label: '提出时间',
              width: '130',
              prop: 'proposal_time',
              type: 'text',
            },
          ],
        ],
        checkboxInit:false,
      }
    },
    methods:{
      test(){
        console.log(1);
      },
      /*展开 */
      toggleShow(){
        this.filterBox = !this.filterBox;
      },
      //订单信息tab切换 
      handleTabsClick(){},
      /*补件信息tab */
      bottomTabsClick(){},
      
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