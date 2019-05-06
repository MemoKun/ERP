<template>
  <div>
    <!-- 查询 -->
    <div class="search_box">
      <div class="searchBox">
        <span>
          <label>供应商</label>
          <el-input v-model="searchBox.provider" clearable @keyup.enter.native="handleQuery"></el-input>
        </span>
        <span>
          <label>商品编码</label>
          <el-input v-model="searchBox.commodity_code" clearable @keyup.enter.native="handleQuery"></el-input>
        </span>
        <span>
          <label>规格编码</label>
          <el-input
            v-model="searchBox.specification_code"
            clearable
            @keyup.enter.native="handleQuery"
          ></el-input>
        </span>
        <span>
          <label>商品简称</label>
          <el-input
            v-model="searchBox.commodity_abbreviation"
            clearable
            @keyup.enter.native="handleQuery"
          ></el-input>
        </span>
        <span>
          <label>规格名称</label>
          <el-input
            v-model="searchBox.specification_name"
            clearable
            @keyup.enter.native="handleQuery"
          ></el-input>
        </span>
      </div>
    </div>

    <!-- 数据 -->
    <el-tabs>
      <el-tab-pane label="主数据">
        <el-table
          :data="miniData"
          fit
          v-loading="mainloading"
          height="300"
          ref="multipleTable"
          @selection-change="handleSelectionChange"
          @row-click="miniRowClick"
          :row-class-name="miniRowCName"
        >
          <el-table-column type="selection" width="95" align="center" :checked="mainCheckboxInit"></el-table-column>
          <el-table-column
            v-for="item in topTableHead"
            :label="item.label"
            align="center"
            :width="item.width"
            :key="item.prop"
          >
            <template slot-scope="scope">
              <span v-if="item.type=='checkbox'">
                <el-checkbox v-model="scope.row[item.prop]" disabled></el-checkbox>
              </span>
              <span v-else>
                <span
                  v-if="scope.row[item.prop]"
                >{{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}</span>
              </span>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="150" align="center" fixed="right">
            <template slot-scope="scope">
              <el-button size="mini" type="danger" @click="del(scope.row,$event)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>

    <!-- 页码 -->
    <Pagination :page-url="this.urls.minipackage" @handlePagChg="handlePagChg"></Pagination>

    <!-- 底部tabs -->
    <el-tabs>
      <el-tab-pane label="缺失包件">
        <el-table :data="packageData">
          <el-table-column
            v-for="item in bottomTableHead"
            :label="item.label"
            align="center"
            :width="item.width"
            :key="item.label"
          >
            <template slot-scope="scope">
              <span v-if="item.type=='checkbox'">
                <el-checkbox v-model="scope.row[item.prop]" disabled></el-checkbox>
              </span>
              <span v-else>
                <span
                  v-if="scope.row[item.prop]"
                >{{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}</span>
              </span>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>

    <!-- 新增 -->
    <el-dialog title="新建" :visible.sync="showMask" :class="{'more-forms':moreForms}">
      <el-button type="text">主数据</el-button>
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
      <el-button type="text">缺失包件</el-button>
      <el-table
        :data="defProDtlVal"
        highlight-current-row
        height="180"
        :row-class-name="defProRowCName"
        @row-click="defProRowClick"
      >
        <!-- 左侧选择框 -->
        <el-table-column type="selection" width="95" align="center" :checked="defCheckboxInit"></el-table-column>
        <el-table-column
          v-for="item in defProHead"
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
      searchBox: {
        provider: "",
        commodity_code: "",
        specification_code: "",
        commodity_abbreviation: "",
        specification_name: ""
      },
      mainCheckboxInit: false,
      miniData: [],
      packageData: [],
      mainloading: true,
      mainIndex: "",
      topTableHead: [
        {
          label: "供应商",
          prop: "supplier_id",
          width: "150",
          type: "text"
        },
        {
          label: "商品编码",
          prop: "order_id",
          width: "200",
          type: "text"
        },
        {
          label: "规格编码",
          prop: "specification_id",
          width: "200",
          type: "text"
        },
        {
          label: "商品简称",
          prop: "order_name",
          width: "150",
          type: "text"
        },
        {
          label: "规格名称",
          prop: "specification_name",
          width: "150",
          type: "text"
        }
      ],
      bottomTableHead: [
        {
          label: "商品编码",
          prop: "def_order_id",
          width: "200",
          type: "text"
        },
        {
          label: "规格编码",
          prop: "def_specification_id",
          width: "200",
          type: "text"
        },
        {
          label: "商品简称",
          prop: "def_order_name",
          width: "150",
          type: "text"
        },
        {
          label: "规格名称",
          prop: "def_specification_name",
          width: "150",
          type: "text"
        }
      ],
      // 新增
      moreForms: true,
      showMask: false,
      mainProDtlVal: [],
      addMainProDtlVal: [],
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
        },
        {
          label: "供应商",
          prop: "supplier",
          inProp: "name",
          width: "130",
          type: "text"
        }
      ],
      defCheckboxInit: [],
      addDefProDtlVal: [],
      defProDtlVal: [],
      defProHead: [
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
        },
        {
          label: "供应商",
          prop: "supplier",
          inProp: "name",
          width: "130",
          type: "text"
        }
      ],
      // 删除
      showDel: false,
      delId: "",
      delArr: [],
      proSelection: "",
      proCompValChg: false,
      proCompIndex: "",
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
      console.log(this.resData);
    },
    // 获取数据
    miniRowCName({ row, rowIndex }) {
      row.index = rowIndex;
    },
    miniRowClick(row) {
      this.packageData = [];
      this.packageData.push(row);
    },
    getData() {
      this.$fetch(this.urls.minipackage).then(
        res => {
          this.mainloading = false;
          this.miniData = res.data;
          this.defCheckboxInit = false;
          this.mainCheckboxInit = false;
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
    // 新增
    mainRowClick(row) {
      this.addMainProDtlVal = row;
    },
    defProRowClick(row) {
      this.addDefProDtlVal = row;
    },
    addNew() {
      this.showMask = true;
      this.addMainProDtlVal = [];
      this.addDefProDtlVal = [];
      this.proQueryClick();
    },
    proQueryClick() {
      this.addMainProDtlVal = [];
      this.addDefProDtlVal = [];
      this.mainProDtlVal = [];
      this.defProDtlVal = [];
      this.proCompValChg = false;
      this.proCompIndex = "0";
      this.$fetch(this.urls.products, {
        include:
          "productComponents,shop,supplier,goodsCategory,combinations.productComponents"
      }).then(
        res => {
          this.mainProDtlVal = res.data;
          this.defProDtlVal = res.data;
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
    // 确定添加
    submitForm() {
      let mainData = this.addMainProDtlVal;
      let defData = this.addDefProDtlVal;
      let submitData = {
        supplier_id: mainData.supplier.name,
        order_id: mainData.commodity_code,
        // specification_id: mainData.specification_id,
        order_name: mainData.short_name,
        // specification_name: mainData.specification_name,
        def_order_id: defData.commodity_code,
        // def_specification_id: defData.def_specification_id,
        def_order_name: defData.short_name
        // def_specification_name: defData.def_specification_name,
      };
      this.$post(this.urls.minipackage, submitData).then(
        () => {
          this.$message({
            message: "新建最小包成功",
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
        message: "取消新建最小包",
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
      this.$del(this.urls.minipackage + "/" + id).then(
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
            this.$del(this.urls.minipackage, { ids: this.delArr }).then(
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
                  this.$message.error({
                    message: str
                  });
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
    refresh() {
      this.mainloading = true;
      this.packageData = [];
      this.getData();
    },
    // 分页
    handlePagChg(page) {
      this.$fetch(this.urls.minipackage + "?page=" + page, {}).then(res => {
        this.logisticsData = res.data;
      });
    }
  },
  mounted() {
    this.getData();
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