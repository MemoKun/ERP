<template>
  <div>
    <!-- 数据 -->
    <el-tabs>
      <el-tab-pane label="所有数据">
        <el-table
          :data="allData"
          fit
          v-loading="newLoading"
          height="400"
          ref="multipleTable"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="95" align="center" :checked="checkboxInit"></el-table-column>
          <el-table-column
            v-for="item in tableHead"
            :label="item.label"
            align="center"
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
          <el-table-column label="操作" width="180" align="center" fixed="right">
            <template slot-scope="scope">
              <el-button size="mini" type="danger" @click="del(scope.row,$event)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>

    <!-- 新增 -->
    <el-dialog title="新建" :visible.sync="showMask">
      <add-new :rule-form="ruleForm" :rules="rules" :add-arr="addArr" :onlyInputs="true"></add-new>
      <div slot="footer" class="dialog-footer clearfix">
        <div style="float: right">
          <el-button type="primary" @click="submitForm">确定</el-button>
          <el-button @click="cancelAdd">取消</el-button>
        </div>
      </div>
    </el-dialog>

    <!-- 修改 -->
    <el-dialog title="修改" :visible.sync="updateMask">
      <add-new :rule-form="updateForm" :rules="rules" :add-arr="addArr" :onlyInputs="true"></add-new>
      <div slot="footer" class="dialog-footer clearfix">
        <div style="float: right">
          <el-button type="primary" @click="confirmUpdate(updateIndex)">确定</el-button>
          <el-button @click="cancelUpdate">取消</el-button>
        </div>
      </div>
    </el-dialog>

    <Pagination :page-url="this.urls.offlineaccountconf" @handlePagChg="handlePagChg"></Pagination>

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
          cnt: "修改",
          icon: "bf-change",
          ent: this.edit
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
      // 数据
      allData: [],
      newLoading: true,
      tableHead: [
        {
          label: "账号信息",
          width: "220",
          prop: "account_information",
          type: "text"
        },
        {
          label: "创建人",
          width: "200",
          prop: "user",
          inProp: "username",
          type: "text"
        },
        {
          label: "创建时间",
          width: "220",
          prop: "created_at",
          type: "text"
        }
      ],
      checkboxInit: false,
      getsData: [],
      // 新增
      showMask: false,
      selection: "",
      ruleForm: {
        account_information: ""
      },
      rules: {
        account_information: [
          { required: true, message: "请输入账号信息", trigger: "blur" }
        ]
      },
      addArr: [
        {
          label: "账户信息",
          prop: "account_information",
          holder: "请输入账户信息",
          type: "text"
        }
      ],
      // 修改
      updateMask: false,
      updateId: "",
      updateIndex: "",
      updateForm: {},
      componentShowChg: true,
      updateCompUpload: "upload0",
      updateRwIndex: "0",
      // 删除
      showDel: false,
      delId: "",
      delArr: [],
      selection: ""
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
    // 新增
    addNew() {
      this.showMask = true;
    },
    submitForm() {
      this.$post(this.urls.offlineaccountconf, this.ruleForm).then(
        () => {
          this.$message({
            message: "添加成功",
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
        message: "取消新建账户配置",
        type: "info"
      });
    },
    getData() {
      this.$fetch(this.urls.offlineaccountconf, {
        include: "user"
      }).then(
        res => {
          this.newLoading = false;
          this.allData = res.data;
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
              $message: str
            });
          }
        }
      );
    },
    handleSelectionChange(val) {
      if (val.length != 0) {
        this.updateId = val[0].id;
        this.updateForm = {
          account_information: val[0].account_information,
          user: val[0].user,
          user_id: val[0].user_id
        };
      } else {
        this.updateId = "";
      }
      this.selection = val;
      let del = [];
      val.forEach(selectedItem => {
        del.push(selectedItem.id);
      });
      this.delArr = del.join(",");
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
      console.log(id);
      console.log(666);
      this.$del(this.urls.offlineaccountconf + "/" + id).then(
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
    // 删除
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
            this.$del(this.urls.offlineaccountconf, { ids: this.delArr }).then(
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
    // 修改
    edit() {
      if (this.selection.length == 0) {
        this.$message({
          message: "没有选择要修改的数据",
          type: "warning"
        });
        return;
      } else if (this.selection.length >= 2) {
        this.$message({
          message: "只能修改单条数据",
          type: "warning"
        });
        return;
      } else {
        this.updateMask = true;
        this.updateIndex = "";
      }
    },
    confirmUpdate() {
      this.$del(this.urls.offlineaccountconf, { ids: this.delArr }).then(
        () => {
          this.$post(this.urls.offlineaccountconf, this.updateForm).then(
            () => {
              this.$message({
                message: "修改成功",
                type: "success"
              });
              this.updateMask = false;
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
    },
    cancelUpdate() {
      this.updateMask = false;
      this.$message({
        message: "已取消修改",
        type: "info"
      });
    },
    // 页码
    handlePagChg(page) {
      this.$fetch(this.urls.offlineaccountconf + "?page=" + page).then(res => {
        this.alreadyHandle = res.data;
      });
    },
    refresh() {
      this.newLoading = true;
      this.getData();
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