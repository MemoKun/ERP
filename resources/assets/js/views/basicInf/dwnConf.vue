<template>
  <div>
    <!--下载配置-->
    <el-tabs>
      <el-tab-pane label="下载配置" name="0">
        <el-table :data="confData" fit v-loading="confLoading" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="95" align="center" :checked="checkboxInit">
          </el-table-column>
          <el-table-column v-for="item in confHead" :label="item.label" :width="item.width" :key="item.prop" align="center">
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
    <Pagination :page-url="this.urls.dwnConf" @handlePagChg="handlePagChg"></Pagination>
    <!--新增-->
    <el-dialog title="下载配置" :visible.sync="addConfMask" :class="{'more-forms':moreForms}">
      <el-form :data="addForm" ref="addNew">
        <el-form-item v-for="item in addConfHead" :key="item.prop" :label="item.label" :prop="item.prop">
          <span v-if="item.type=='checkbox'">
            <el-checkbox v-model="addForm[item.prop]"></el-checkbox>
          </span>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="addConfirm">添加</el-button>
        <el-button type="info" @click="addReset">重置</el-button>
      </div>
    </el-dialog>
    <!--修改-->
    <el-dialog title="修改下载配置" :visible.sync="updateConfMask" :class="{'more-forms':moreForms}">
      <el-form :model="updateForm" ref="addNew">
        <el-form-item v-for="item in addConfHead" :key="item.prop" :label="item.label" :prop="item.prop">
          <span v-if="item.type=='checkbox'">
            <el-checkbox v-model="updateForm[item.prop]"></el-checkbox>
          </span>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="updateConfirm">修改</el-button>
        <el-button @click="updateCancel">取消</el-button>
      </div>
    </el-dialog>
    <!--删除-->
    <el-popover placement="top" width="160" v-model="showDel" slot="tip">
      <p>确定删除该条数据？</p>
      <div style="text-align: right; margin: 0">
        <el-button size="mini" type="text" @click="cancelD">取消</el-button>
        <el-button type="primary" size="mini" @click="confirmD(delUrl,delId)">确定</el-button>
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
          cnt: '新增',
          icon: 'bf-add',
          ent: this.addConf
        },
        {
          cnt: '修改',
          icon: 'bf-change',
          ent: this.updateConf
        },
        {
          cnt: '删除',
          icon: 'bf-del',
          ent: this.delConf
        },
        {
          cnt: '刷新',
          icon: 'bf-refresh',
          ent: this.refresh
        }
      ],
      checkboxInit: false,
      moreForms: false,
      selections: '',
      //分页
      pagination: {
        current_page: 1,
        per_page: 0,
        page_total: 0
      },
      //新增
      addConfMask: false,
      addForm: [
        {
          is_covered: false,
          is_merged: false
        }
      ],
      addConfHead: [
        {
          label: '启用覆盖',
          width: '160',
          prop: 'is_covered',
          type: 'checkbox'
        },
        {
          label: '启用合并',
          width: '160',
          prop: 'is_merged',
          type: 'checkbox'
        }
      ],
      //修改
      updateIndex: '',
      updateConfMask: false,
      updateForm: {},
      //删除
      showDel: false,
      delUrl: '',
      delId: '',
      currentId: '',
      delIds: [],
      //刷新
      confLoading: true,
      //获取数据
      confData: [],
      confHead: [
        {
          label: '启用覆盖',
          width: '160',
          prop: 'is_covered',
          type: 'checkbox'
        },
        {
          label: '启用合并',
          width: '160',
          prop: 'is_merged',
          type: 'checkbox'
        },
        {
          label: '创建时间',
          width: '160',
          prop: 'created_at',
          type: 'text'
        }
      ]
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
    //获取数据
    fetchData() {
      this.$fetch(this.urls.dwnConf).then(
        res => {
          this.confData = res.data;
          this.confLoading = false;
        },
        err => {
          if (err.response) {
            let arr = err.response.data.errors;
            let arr1 = [];
            for (let i in arr) {
              arr1.push(arr[i]);
            }
            let str = arr1.join(',');
            this.$message.error(str);
          }
        }
      );
    },
    //分页
    handlePagChg(page) {
      this.$fetch(this.urls.dwnConf + '?page=' + page).then(res => {
        this.confData = res.data;
      });
    },
    //新增
    addConf() {
      this.addConfMask = true;
      Object.assign(this.addForm, this.$options.data().addForm);
    },
    addConfirm() {
      let obj = {
        is_covered: this.addForm[0].is_covered,
        is_merged: this.addForm[0].is_merged
      };
      this.$post(this.urls.dwnConf, obj).then(
        () => {
          this.$message({
            message: '添加成功',
            type: 'success'
          });
          this.addConfMask = false;
          this.refresh();
        },
        err => {
          if (err.response) {
            let arr = err.response.data.errors;
            let arr1 = [];
            for (let i in arr) {
              arr1.push(arr[i]);
            }
            let str = arr1.join(',');
            this.$message.error({
              message: str
            });
          }
        }
      );
    },
    addReset() {
      Object.assign(this.addForm, this.$options.data().addForm);
    },
    //修改
    updateConf() {
      if (this.selections.length == 0) {
        this.$message({
          message: '没有选择要修改的数据',
          type: 'warning'
        });
        return;
      } else if (this.selections.length >= 2) {
        this.$message({
          message: '只能修改单条数据',
          type: 'warning'
        });
        return;
      } else {
        this.updateConfMask = true;
        this.$fetch(this.urls.dwnConf + '/' + this.currentId).then(
          res => {
            this.updateForm = {
              is_covered: res.is_covered,
              is_merged: res.is_merged
            };
          },
          err => {
            if (err.response) {
              let arr = err.response.data.errors;
              let arr1 = [];
              for (let i in arr) {
                arr1.push(arr[i]);
              }
              let str = arr1.join(',');
              this.$message.error(str);
            }
          }
        );
      }
    },
    updateConfirm() {
      this.$patch(
        this.urls.dwnConf + '/' + this.currentId,
        this.updateForm
      ).then(
        () => {
          this.updateConfMask = false;
          this.$message({
            message: '商品修改成功',
            type: 'success'
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
            let str = arr1.join(',');
            this.$message.error(str);
          }
        }
      );
    },
    updateCancel() {
      this.updateConfMask = false;
      this.$message({
        message: '取消修改',
        type: 'info'
      });
    },
    //批量选择
    handleSelectionChange(val) {
      //获取id集合
      let array = [];
      val.forEach(selectedItem => {
        array.push(selectedItem.id);
      });
      this.selections = val;
      this.delIds = array.join(',');
      //获取当前id
      this.currentId = val.length > 0 ? val[val.length - 1].id : '';
    },
    //删除
    delConf() {
      if (this.delIds.length === 0) {
        this.$message({
          message: '没有选中数据',
          type: 'warning'
        });
      } else {
        this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            this.$del(this.urls.dwnConf, { ids: this.delIds }).then(
              () => {
                this.$message({
                  message: '删除成功',
                  type: 'success'
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
                  let str = arr1.join(',');
                  this.$message.error(str);
                }
              }
            );
          })
          .catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          });
      }
    },
    delSingle(row, e) {
      this.showDel = true;
      $('.el-popper').css({ left: e.x - 100 + 'px', top: e.y - 125 + 'px' });
      this.delId = row.id;
      this.delUrl = this.urls.dwnConf;
    },
    cancelD() {
      this.showDel = false;
      this.$message({
        message: '取消删除',
        type: 'info'
      });
    },
    confirmD(url, id) {
      this.$del(url + '/' + id).then(
        () => {
          this.$message({
            message: '删除成功',
            type: 'success'
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
            let str = arr1.join(',');
            this.$message.error({
              message: str
            });
          }
        }
      );
    },
    //刷新
    refresh() {
      this.confLoading = true;
      this.fetchData();
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    }
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
      })();
    });
  }
};
</script>
