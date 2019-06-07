<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="tabsClick">
      <el-tab-pane label="售后状态" name="0">
        <light-table :listData="getsData" :tableHead="disHead" @editSave="editSave" @handleEdit="handleEdit" @del="del" height="400" :loading="loading" :currentIndex="currentIndex" @edit="edit" @editCancel="editCancel" @handleSelect="handleSelectionChange"></light-table>
      </el-tab-pane>
    </el-tabs>

    <!--新增-->
    <add-new :visible-add="showMask" :title="title" :rule-form="ruleForm" :rules="rules" :add-arr="addArr" :url="url" @submitEvent="submitForm" :new-ref="refArr" @CB-dialog="CB_dialog"></add-new>

    <!--删除-->
    <el-popover placement="top" width="160" v-model="showDel" slot="tip">
      <p>确定删除该条数据？</p>
      <div style="text-align: right; margin: 0">
        <el-button size="mini" type="text" @click="cancelD">取消</el-button>
        <el-button type="primary" size="mini" @click="confirmD(delId)">确定</el-button>
      </div>
    </el-popover>

    <Pagination :page-url="url"></Pagination>
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
      disHead: [
        {
          label: "售后状态",
          prop: "name",
          holder: "售后状态",
          type: "text"
        },
        {
          label: "状态",
          prop: "status",
          holder: "状态",
          type: "checkbox",
          doSort: true,
          chgAble: true,
          editChgAble: false
        }
      ],
      url: "/aftersalestate",
      ruleForm: {
        name: "",
        status: true
      },
      rules: {
        name: [{ required: true, message: "请输入售后状态", trigger: "blur" }]
      },
      addArr: [
        {
          label: "售后状态",
          prop: "name",
          holder: "请输入售后状态",
          type: "text"
        },
        {
          label: "状态",
          prop: "status",
          holder: "请选择状态",
          type: "checkbox"
        }
      ],
      activeName: "0",
      getsData: [],
      loading: true,
      currentIndex: "",
      /*新增*/
      showMask: false,
      showDel: false,
      editId: "",
      inputChange: false,
      delArr: [],
      multipleSelection: [],
      refArr: "state"
    };
  },
  methods: {
    test() {
      console.log(1);
    },
    //新增
    addNew() {
      this.showMask = true;
    },
    CB_dialog(val) {
      this.showMask = val;
    },
    submitForm() {
      this.$post(this.url, this.ruleForm).then(
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
    tabsClick() {
      this.loading = true;
      this.getData(this.url);
    },
    getData(url) {
      this.$fetch(url).then(
        res => {
          this.loading = false;
          this.getsData = res.data;
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
    edit(index) {
      this.currentIndex = "index" + index;
    },
    handleEdit() {
      this.inputChange = true;
    },
    editCancel() {
      this.$message({
        message: "取消修改",
        type: "info"
      });
      this.currentIndex = "";
    },
    editSave(row) {
      this.$patch(this.url + "/" + row.id, row).then(
        () => {
          this.$message({
            message: "修改成功",
            type: "success"
          });
          this.currentIndex = "";
          this.inputChange = false;
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
      this.$del(this.url + "/" + id).then(
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
    /*批量删除*/
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
            this.$del(this.url, { ids: this.delArr }).then(
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
    handleSelectionChange(val) {
      if (val.length != 0) {
        this.editId = val[0].id;
      } else {
        this.editId = "";
      }
      this.multipleSelection = val;
      let del = [];
      this.multipleSelection.forEach(selectedItem => {
        del.push(selectedItem.id);
      });
      this.delArr = del.join(",");
    },
    /*页面刷新*/
    refresh() {
      this.loading = true;
      this.getData(this.url);
    }
  },
  mounted() {
    this.getData(this.url);
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