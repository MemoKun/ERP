<template>
  <div>
    <el-tabs>
      <el-tab-pane label="退款单下载" name="0">
        <div>
          <div class="searchBox">
            <span><label>店铺</label><el-select v-model="searchBox.buyer_nickname" clearable placeholder="请选择">
              <el-option
                v-for="item in searchBox.orderShops"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
              </el-select>
            </span>
            <span>
              <label>业务日期</label>
              <el-date-picker
                v-model="searchBox.order_workDate"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker>
            </span>
            <span>
              <label>买家昵称</label>
              <el-input v-model="searchBox.buyer_nickname" clearable></el-input>
            </span>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
    <el-tabs>
      <el-tab-pane label="退款单下载" name="0">
        <el-table :data="downloadData" fit
        v-loading="loading"
        height="350">
         <el-table-column
            type="selection"
            width="95" align="center"
            :checked="checkboxInit">
          </el-table-column>
          <el-table-column v-for="item in orderListHead" :label="item.label" align="center" :width="item.width" :key="item.label">
            <template slot-scope="scope">
              <span v-if="item.type=='checkbox'">
                <span v-if="item.inProp">
                  <el-checkbox v-model="scope.row[item.prop][item.inProp]" disabled></el-checkbox>
                </span>
                <span v-else>
                  <el-checkbox v-model="scope.row[item.prop]" disabled></el-checkbox>
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
    </el-tabs>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        newOpt: [
          {
            cnt: '导出',
            icon: 'bf-out',
            ent: this.test
          },
          {
            cnt: '下载',
            icon: 'bf-dwn',
            ent: this.test
          }
        ],
        searchBox:{
          shop_id:'',
          order_workDate:'',
          buyer_nickname:'',
          orderShops:[
            {label:'简艺家具旗舰店',value:0},
            {label:'迪洛家具旗舰店',value:1}
          ]
        },
        loading:true,
        downloadData:[],
        checkboxInit:false,
        orderListHead:[
          {
            label:'退款单号',
            width:'150',
            prop:'refund_num',
            type:'text'
          },
          {
            label:'淘宝交易单号',
            width:'150',
            prop:'refund_num',
            type:'text'
          },
          {
            label:'子订单号',
            width:'150',
            prop:'refund_num',
            type:'text'
          },
          {
            label:'交易金额',
            width:'150',
            prop:'refund_num',
            type:'text'
          },
          {
            label:'买家昵称',
            width:'150',
            prop:'refund_num',
            type:'text'
          },
          {
            label:'退款金额',
            width:'150',
            prop:'refund_num',
            type:'text'
          },
          {
            label:'退款原因',
            width:'150',
            prop:'refund_num',
            type:'text'
          },
          {
            label:'退款说明',
            width:'150',
            prop:'refund_num',
            type:'text'
          },
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
