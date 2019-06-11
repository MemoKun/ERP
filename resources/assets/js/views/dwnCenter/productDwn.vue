<template>
  <div>
    <el-tabs>
      <el-tab-pane label="商品下载" name="0">
        <div class="searchBox">
          <span>
            <label>店铺名称</label>
            <el-select v-model="searchBox.shop_name" clearable placeholder="请选择">
              <el-option v-for="item in searchBox.shopNames" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </span>
          <span>
            <label>下载类型</label>
            <el-select v-model="searchBox.dwn_type" clearable placeholder="请选择">
              <el-option v-for="item in searchBox.dwnTypes" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </span>
          <span>
            <label>商品编码</label>
            <el-input v-model="searchBox.pro_num" clearable></el-input>
          </span>
        </div>
      </el-tab-pane>
    </el-tabs>
    <el-tabs>
      <el-tab-pane label="商品信息" name="0">
        <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="55">
          </el-table-column>
          <el-table-column label="商品编码" width="120">
            <!--<template slot-scope="scope">{{ scope.row.date }}</template>-->
          </el-table-column>
          <el-table-column prop="" label="商品标题" width="120">
          </el-table-column>
          <el-table-column prop="" label="卖家昵称" show-overflow-tooltip>
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
          cnt: "删除",
          icon: "bf-del",
          ent: this.downloadOrders
        },
        {
          cnt: "导出",
          icon: "bf-out",
          ent: this.downloadOrders
        },
        {
          cnt: "同步",
          icon: "bf-sync",
          ent: this.downloadOrders
        },
        {
          cnt: "下载",
          icon: "bf-dwn",
          ent: this.downloadOrders
        }
      ],
      searchBox: {
        shop_name: "",
        dwn_type: "",
        pro_num: "",
        shopNames: [{ label: "店铺1", value: 0 }, { label: "店铺2", value: 1 }],
        dwnTypes: [{ label: "下载类型1", value: 0 }, { label: "下载类型2", value: 1 }]
      },
      tableData3: [],
      multipleSelection: []
    };
  },
  methods: {
    test() {
      console.log(1);
    },
    downloadOrders() {
      this.$message({
        message: "请先连接淘宝API",
        type: "success"
      });
    }
  },
  mounted() {
    this.$store.state.opt.opts = this.newOpt;
    this.$store.commit("change", this.newOpt);
    const that = this;
    $(window).resize(() => {
      return (() => {
        that.$store.state.opt.opts = that.newOpt;
        that.$store.commit("change", that.newOpt);
      })();
    });
  }
};
</script>
