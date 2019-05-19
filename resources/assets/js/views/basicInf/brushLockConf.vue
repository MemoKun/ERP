<template>
  <div>
    <div class="searchBox" v-if="currentPage">
      <span>
        <label>执行类型</label>
        <el-input v-model="searchBox.buyNick" clearable class="half" @keyup.enter.native="getData"></el-input>
      </span>
      <span>
        <label>包含字符</label>
        <el-input
          v-model="searchBox.shopTitle"
          clearable
          class="half"
          @keyup.enter.native="getData"
        ></el-input>
      </span>
    </div>

    <!-- 数据 -->
    <el-tabs>
      <el-tab-pane label="所有数据">
        <el-table
          :data="allData"
          fit
          v-loading="loading"
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
                  v-else-if="typeof scope.row[item.prop] == 'object' && item.inProp"
                >{{scope.row[item.prop][item.inProp]}}</span>
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
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="执行类型">
          <el-select v-model="ruleForm.perform_type" placeholder="请选择执行类型">
            <el-option label="自动转刷单" value="自动转刷单"></el-option>
            <el-option label="自动转锁单" value="自动转锁单"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="包含字符" prop="name">
          <el-input v-model="ruleForm.include_string" placehold></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer clearfix">
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

    <!-- 修改 -->
    <el-dialog title="修改" :visible.sync="updateMask">
      <el-form
        :model="updateForm"
        :rules="rules"
        ref="updateForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="执行类型">
          <el-select v-model="updateForm.perform_type" placeholder="请选择执行类型">
            <el-option label="自动转刷单" value="自动转刷单"></el-option>
            <el-option label="自动转锁单" value="自动转锁单"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="包含字符" prop="name">
          <el-input v-model="updateForm.include_string" placehold></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer clearfix">
        <div style="float: right">
          <el-button type="primary" @click="confirmUpdate(updateIndex)">确定</el-button>
          <el-button @click="cancelUpdate">取消</el-button>
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
      searchBox: {
        buyNick: "",
        shopTitle: ""
      },
      allData: [],
      currentPage: true,
      tableHead: [
        {
          label: "执行类型",
          width: "200",
          prop: "perform_type",
          type: "text"
        },
        {
          label: "包含字符",
          width: "220",
          prop: "include_string",
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
          nmProp: "date",
          type: "text"
        }
      ],
      loading: true,
      currentIndex: "",
      url: "/brushlockconf",
      // 新增
      showMask: false,
      selection: "",
      ruleForm: {
        perform_type: "",
        include_string: ""
      },
      rules: {
        perform_type: [
          { required: true, message: "请选择执行类型", trigger: "blur" }
        ],
        include_string: [
          { required: true, message: "请输入包含字符", trigger: "blur" }
        ]
      },
      addArr: [
        {
          label: "执行类型",
          prop: "perform_type",
          holder: "请选择执行类型",
          stateVal: "perform_type",
          type: "text"
        },
        {
          label: "包含字符",
          prop: "include_string",
          holder: "请输入包含字符",
          type: "text"
        }
      ],
      // 删除
      showDel: false,
      delId: "",
      delArr: [],
      selection: "",
      // 修改
      updateMask: false,
      updateId: "",
      updateIndex: "",
      updateForm: {},
      componentShowChg: true,
      updateCompUpload: "upload0",
      updateRwIndex: "0"
    };
  },
  methods: {
    test() {
      console.log(1);
    },
    getData(url) {
      this.$fetch(url, {
        include: "user"
      }).then(
        res => {
          this.loading = false;
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
      this.selection = val;
      let del = [];
      val.forEach(selectedItem => {
        del.push(selectedItem.id);
      });
      this.delArr = del.join(",");
    },
    // 新增
    addNew() {
      this.ruleForm = {
        perform_type: "",
        include_string: ""
      };
      this.showMask = true;
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
    cancelAdd() {
      this.showMask = false;
      this.$message({
        message: "取消新建刷单锁单配置",
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
      // console.log(id);
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
        this.$fetch(this.url + "/" + this.updateId).then(
          res => {
            this.updateForm = {
              perform_type: res.perform_type,
              include_string: res.include_string,
            };
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
      }
    },
    confirmUpdate() {
      this.$patch(this.url + "/" + this.updateId, this.updateForm).then(
        () => {
          this.updateMask = false;
          this.$message({
            message: "修改成功",
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
    },
    cancelUpdate() {
      this.updateMask = false;
      this.$message({
        message: "已取消修改",
        type: "info"
      });
    },
    // 刷新
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