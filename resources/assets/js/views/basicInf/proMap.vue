<template>
  <div>
    <el-tabs>
      <el-tab-pane label="映射产品">
        <el-table
          :data="promapVal"
          fit
          ref="proMapTable"
          @selection-change="handleSelectionChange"
          v-loading="loading"
          height="400"
          @row-click="proRowClick"
          :row-class-name="proRowCName"
        >
          <!-- 左侧选择框 -->
          <el-table-column type="selection" width="80" align="center" :checked="checkboxInit"></el-table-column>
          <el-table-column
            align="center"
            v-for="item in tableHead"
            :label="item.label"
            :width="item.width"
            :key="item.prop"
          >
            <template slot-scope="scope">
              <span v-if="item.type=='select'">
                <span v-if="scope.row[item.prop]==''"></span>
                <span
                  v-else-if="typeof scope.row[item.prop] == 'object' && item.nmProp"
                >{{scope.row[item.prop][item.nmProp]}}</span>
              </span>
              <span v-else-if="item.type=='checkbox'">
                <el-checkbox v-model="scope.row[item.prop]" disabled></el-checkbox>
              </span>
              <span v-else-if="item.type=='img'">
                <el-popover placement="right" trigger="hover" popper-class="picture_detail">
                  <img :src="scope.row[item.prop]">
                  <img slot="reference" :src="scope.row[item.prop]" :alt="scope.row[item.alt]">
                </el-popover>
              </span>
              <span v-else>
                <span
                  v-if="scope.row[item.prop]"
                >{{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}</span>
              </span>
            </template>
          </el-table-column>
          <!-- 右侧删除键 -->
          <el-table-column label="操作" width="90" align="center" fixed="right">
            <template slot-scope="scope">
              <el-button size="mini" type="danger" @click="del(scope.row,$event)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>

    <!--页码-->
    <Pagination :page-url="this.urls.promap" @handlePagChg="handlePagChg"></Pagination>

    <!-- 新增 -->
    <el-dialog title="新增产品映射" :visible.sync="showMask" :class="{'more-forms':moreForms}">
      <el-button type="text">主产品</el-button>
      <el-table
        :data="mainProDtlVal"
        highlight-current-row
        height="180"
        :row-class-name="mainRowCName"
        @row-click="mainRowClick"
      >
        <el-table-column
          v-for="item in mainProHead"
          :label="item.label"
          align="center"
          :width="item.width"
          :key="item.label"
        >
          <template slot-scope="scope">
            <span v-if="item.type=='img'">
              <el-popover placement="right" trigger="hover" popper-class="picture_detail">
                <img :src="scope.row[item.prop]">
                <img slot="reference" :src="scope.row[item.prop]" :alt="scope.row[item.alt]">
              </el-popover>
            </span>
            <span v-else>{{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}</span>
          </template>
        </el-table-column>
      </el-table>
      <el-button type="text">映射产品</el-button>
      <el-table
        :data="mapProDtlVal"
        highlight-current-row
        height="180"
        :row-class-name="mapRowCName"
        @row-click="mapRowClick"
      >
        <el-table-column
          v-for="item in mapProHead"
          :label="item.label"
          align="center"
          :width="item.width"
          :key="item.label"
        >
          <template slot-scope="scope">
            <span v-if="item.type=='img'">
              <el-popover placement="right" trigger="hover" popper-class="picture_detail">
                <img :src="scope.row[item.prop]">
                <img slot="reference" :src="scope.row[item.prop]" :alt="scope.row[item.alt]">
              </el-popover>
            </span>
            <span v-else>{{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}</span>
          </template>
        </el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer clearfix">
        <div style="float: left">
          <el-button type="primary" @click="proQueryClick">刷新</el-button>
        </div>
        <div style="float: right">
          <el-button type="primary" @click="submitForm">确定</el-button>
          <el-button @click="cancelAdd">取消</el-button>
        </div>
      </div>
    </el-dialog>

    <!--删除-->
    <el-popover placement="top" width="160" v-model="showDel" slot="tip">
      <p>确定删除该条数据？</p>
      <div style="text-align: right; margin: 0">
        <el-button size="mini" type="text" @click="cancelD">取消</el-button>
        <el-button type="primary" size="mini" @click="confirmD(delId)">确定</el-button>
      </div>
    </el-popover>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newOpt: [
        {
          cnt: "新增",
          icon: "bf-add",
          ent: this.addNew
        },
        {
          cnt: "删除",
          icon: "bf-del",
          ent: this.delMore
        },
        {
          cnt: "刷新",
          icon: "bf-refresh",
          ent: this.refresh
        }
      ],
      tableHead: [
        {
          label: "商品编码",
          width: "150",
          prop: "order_id",
          inPorp: "commodity_code",
          type: "text"
        },
        {
          label: "规格编码",
          width: "90",
          prop: "specification_id",
          type: "text"
        },
        {
          label: "商品简称",
          width: "150 ",
          prop: "order_name",
          inPorp: "short_name",
          type: "text"
        },
        {
          label: "规格名称",
          width: "200",
          prop: "specification_name",
          type: "text"
        },
        {
          label: "映射商品编码",
          width: "150",
          prop: "map_order_id",
          type: "text"
        },
        {
          label: "映射规格编码",
          width: "90",
          prop: "map_specification_id",
          type: "text"
        },
        {
          label: "映射商品简称",
          width: "150",
          prop: "map_order_name",
          type: "text"
        },
        {
          label: "映射规格名称",
          width: "200",
          prop: "map_specification_name",
          type: "text"
        }
      ],
      checkboxInit: false,
      loading: true,
      promapVal: [],
      // 新增
      moreForms: true,
      showMask: false,
      addMainProDtlVal: [],
      addMapProDtlVal: [],
      mainProDtlVal: [],
      mapProDtlVal: [],
      selection: "",
      mainProHead: [
        {
          label: "商品编码",
          prop: "commodity_code",
          width: "160",
          type: "text"
        },
        {
          label: "商品简称",
          prop: "short_name",
          width: "150",
          type: "text"
        },
        {
          label: "规格编码",
          prop: "specification_id",
          width: "200",
          type: "text"
        },
        {
          label: "商品名称",
          prop: "title",
          width: "130",
          type: "text"
        },
        {
          label: "规格名称",
          prop: "specification_name",
          width: "150",
          type: "text"
        }
      ],
      mapProHead: [
        {
          label: "商品编码",
          prop: "commodity_code",
          width: "160",
          type: "text"
        },
        {
          label: "商品简称",
          prop: "short_name",
          width: "150",
          type: "text"
        },
        {
          label: "规格编码",
          prop: "specification_id",
          width: "200",
          type: "text"
        },
        {
          label: "商品名称",
          prop: "title",
          width: "130",
          type: "text"
        },
        {
          label: "规格名称",
          prop: "specification_name",
          width: "150",
          type: "text"
        }
      ],
      // 删除
      showDel: false,
      delId: "",
      delArr: [],
      proSelection: "",
      // 修改
      updateProMask: false,
      updateId: "",
      updateProIndex: "",
      updateForm: {},
      componentShowChg: true,
      updateCompUpload: "upload0",
      updateRwIndex: "0"
    };
  },
  computed: {
    resData: {
      get: function() {
        return this.$store.state.responseData;
      },
      set: function() {}
    },
    urls: {
      get: function() {
        return this.$store.state.urls;
      },
      set: function() {}
    }
  },
  methods: {
    test() {
      console.log(1);
    },
    // 获取数据
    getDatas() {
      this.$fetch(this.urls.promap).then(
        res => {
          this.loading = false;
          this.promapVal = res.data;
          let pg = res.meta.pagination;
          this.$store.dispatch("currentPage", pg.current_page);
          this.$store.commit("PER_PAGE", pg.per_page);
          this.$store.commit("PAGE_TOTAL", pg.total);
        },
        err => {
          if (err.response) {
            let arr = err.response.data.errors;
            let arr1 = [];
            for (let i in arr) {
              arr1.push(arr[i]);
            }
            let str = arr1.join(",");
            this.$message.error({
              message: str
            });
          }
        }
      );
    },
    // 新增
    mainRowCName({ row, rowIndex }) {
      row.index = rowIndex;
    },
    mapRowCName({ row, rowIndex }) {
      row.index = rowIndex;
    },
    mainRowClick(row) {
      this.addMainProDtlVal = row;
    },
    mapRowClick(row) {
      this.addMapProDtlVal = row;
    },
    addNew() {
      this.showMask = true;
      this.addMainProDtlVal = [];
      this.addMapProDtlVal = [];
      this.proQueryClick();
    },
    proQueryClick() {
      this.addMainProDtlVal = [];
      this.addMapProDtlVal = [];
      this.$fetch(this.urls.products, {
        include:
          "productComponents,shop,supplier,goodsCategory,combinations.productComponents"
      }).then(
        res => {
          this.mainProDtlVal = res.data;
          this.mapProDtlVal = res.data;
          // if (
          //   res.data[0] &&
          //   res.data[0].combinations["data"][0]["productComponents"]["data"]
          //     .length > 0
          // ) {
          //   res.data[0].combinations["data"][0]["productComponents"][
          //     "data"
          //   ].map(item => {
          //     this.$set(item, "proPurchaseData", {
          //       purchase_quantity: "",
          //       shops_id: "",
          //       suppliers_id: "",
          //       arrival_time: "",
          //       remark: "",
          //       purchase_cost: item.purchase_cost,
          //       purchase_freight: item.purchase_freight,
          //       warehouse_cost: item.warehouse_cost,
          //       commission: item.commission,
          //       discount: item.discount,
          //       wooden_frame_costs: item.wooden_frame_costs
          //     });
          //   });
          // }
        },
        err => {
          if (err.response) {
            let arr = err.response.data.errors;
            let arr1 = [];
            for (let i in arr) {
              arr1.push(arr[i]);
            }
            let str = arr1.join(",");
            this.$message.error({
              message: str
            });
          }
        }
      );
    },
    submitForm() {
      let mainData = this.addMainProDtlVal;
      let mapData = this.addMapProDtlVal;
      let submitData = {
        order_id: mainData.commodity_code,
        // specification_id: mainData.specification_id,
        order_name: mainData.short_name,
        // specification_name: mairnData.specification_name,
        map_order_id: mapData.commodity_code,
        // map_specification_id: mapData.specification_id,
        map_order_name: mapData.short_name
        // map_specification_name: mapData.specification_name
      };
      this.$post(this.urls.promap, submitData).then(
        () => {
          this.$message({
            message: "新建产品映射成功",
            type: "success"
          });
          this.showMask = false;
          this.refresh();
        },
        err => {
          if (err.response) {
            let arr = err.response.data.errors;
            let arr1 = [];
            for (let i in arr) {
              arr1.push(arr[i]);
            }
            let str = arr1.join(",");
            this.$message.error({
              message: str
            });
          }
        }
      );
    },
    cancelAdd() {
      this.showMask = false;
      this.$message({
        message: "取消新增产品映射",
        type: "info"
      });
    },
    // 单条删除
    del(row, e) {
      this.showDel = true;
      $(".el-popper").css({ left: e.x - 100 + "px", top: e.y - 125 + "px" });
      this.delId = row.id;
    },
    cancelD() {
      this.showDel = false;
      this.$message({
        message: "取消删除",
        type: "info"
      });
    },
    confirmD(id) {
      this.$del(this.urls.promap + "/" + id).then(
        () => {
          this.$message({
            message: "删除成功",
            type: "success"
          });
          this.showDel = false;
          this.refresh();
        },
        err => {
          if (err.response) {
            this.showDel = false;
            let arr = err.response.data.errors;
            let arr1 = [];
            for (let i in arr) {
              arr1.push(arr[i]);
            }
            let str = arr1.join(",");
            this.$message.error({
              message: str
            });
          }
        }
      );
    },
    // 批量删除
    handleSelectionChange(val) {
      if (val.length != 0) {
        this.updateId = val[0].id;
      } else {
        this.updateId = "";
      }
      this.proSelection = val;
      let del = [];
      val.forEach(selectedItem => {
        del.push(selectedItem.id);
      });
      this.delArr = del.join(",");
    },
    proRowClick() {},
    proRowCName({ row, rowIndex }) {
      row.index = rowIndex;
    },
    // 单条删除
    delPur(row, e) {},
    delMore() {
      if (this.delArr.length === 0) {
        this.$message({
          message: "没有选中数据",
          type: "warning"
        });
      } else {
        this.$confirm("此操作将永久删除该数据, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            this.$del(this.urls.promap, { ids: this.delArr }).then(
              () => {
                this.$message({
                  message: "删除成功",
                  type: "success"
                });
                this.refresh();
              },
              err => {
                if (err.response) {
                  let arr = err.response.data.errors;
                  let arr1 = [];
                  for (let i in arr) {
                    arr1.push(arr[i]);
                  }
                  let str = arr1.join(",");
                  this.$message.error(str);
                }
              }
            );
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消删除"
            });
          });
      }
    },
    // 刷新
    refresh() {
      this.loading = true;
      this.addMainProDtlVal = [];
      this.addMapProDtlVal = [];
      this.getDatas();
    }
  },
  mounted() {
    this.getDatas();
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