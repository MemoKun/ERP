<template>
  <div>
    <!--用户信息-->
    <el-tabs>
      <el-tab-pane label="用户信息" name="0">
        <el-table :data="UserData" fit v-loading="loading" @row-click="logicRowClick" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="95" align="center" :checked="checkboxInit">
          </el-table-column>
          <el-table-column v-for="item in UserHead" :label="item.label" :width="item.width" :key="item.prop" align="center">
            <template slot-scope="scope">
              <span>
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
    <Pagination :page-url="this.urls.relateLogistics" @handlePagChg="handlePagChg"></Pagination>
    <!--物流公司-->
    <el-tabs>
      <el-tab-pane label="物流公司" name="0">
        <el-table :data="logisticsData" v-loading="loading">
          <el-table-column type="selection" width="95" align="center" :checked="checkboxInit">
          </el-table-column>
          <el-table-column v-for="item in logisticsHead" :label="item.label" :width="item.width" :key="item.prop" align="center">
            <template slot-scope="scope">
              <span>
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
    <!--新增-->
    <el-dialog title="关联物流" :visible.sync="addMask" :class="{'more-forms':moreForms}">
      <el-button type="text">用户信息</el-button>
      <add-new :rule-form="addUserForm" :rules="addUserRules" :add-arr="addUserHead" :onlyInputs="true"></add-new>
      <el-button type="text">物流公司</el-button>
      <el-table :data="addLogisticsForm" fit height="300" :row-class-name="addLogisticsCName" @row-click="addLogisticsRClick">
        <el-table-column v-for="item in addLogisticsHead" :label="item.label" align="center" :width="item.width" :key="item.label">
          <template slot-scope="scope">
            <span v-if="addLogisticsIndex=='index'+scope.$index">
              <span v-if="item.type=='text'">
                <el-input size="small" type="text" v-model.trim="scope.row[item.prop]" :placeholder="item.holder"></el-input>
              </span>
            </span>
            <span v-else>
              <span v-if="item.type=='text'">
                {{scope.row[item.prop]}}
              </span>
            </span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="90" align="center">
          <template slot-scope="scope">
            <el-button size="mini" type="danger" @click="addLogisticsDel(scope.$index)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer clearfix">
        <div style="float: left">
          <el-button type="primary" @click="addLogisticsRow">添加物流公司</el-button>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="addConfirm">添加</el-button>
        <el-button type="info" @click="addReset">重置</el-button>
        <el-button @click="addCancel">取消</el-button>
      </div>
    </el-dialog>
    <!--修改-->
    <el-dialog title="编辑关联物流" :visible.sync="updateMask" :class="{'more-forms':moreForms}">
      <el-button type="text">用户信息</el-button>
      <add-new :rule-form="updateUserForm" :rules="addUserRules" :add-arr="addUserHead" :onlyInputs="true"></add-new>
      <el-button type="text">物流公司</el-button>
      <el-table :data="updateLogisticsForm" fit height="300" :row-class-name="addLogisticsCName" @row-click="addLogisticsRClick">
        <el-table-column v-for="item in addLogisticsHead" :label="item.label" align="center" :width="item.width" :key="item.label">
          <template slot-scope="scope">
            <span v-if="addLogisticsIndex=='index'+scope.$index">
              <span v-if="item.type=='text'">
                <el-input size="small" type="text" v-model.trim="scope.row[item.prop]" :placeholder="item.holder"></el-input>
              </span>
            </span>
            <span v-else>
              <span v-if="item.type=='text'">
                {{scope.row[item.prop]}}
              </span>
            </span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="90" align="center">
          <template slot-scope="scope">
            <el-button size="mini" type="danger" @click="updateLogisticsDel(scope.$index)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer clearfix">
        <div style="float: left">
          <el-button type="primary" @click="addLogisticsRow">添加物流公司</el-button>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="updateConfirm">修改</el-button>
        <el-button type="info" @click="updateCancel">取消</el-button>
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
import { regionDataPlus } from 'element-china-area-data';
export default {
  data() {
    return {
      newOpt: [
        {
          cnt: '新增',
          icon: 'bf-add',
          ent: this.addUser
        },
        {
          cnt: '修改',
          icon: 'bf-change',
          ent: this.updateUser
        },
        {
          cnt: '删除',
          icon: 'bf-del',
          ent: this.delUser
        },
        {
          cnt: '刷新',
          icon: 'bf-refresh',
          ent: this.refresh
        }
      ],
      //分页
      pagination: {
        current_page: 1,
        per_page: 0,
        page_total: 0
      },
      /*用户信息 */
      UserData: [],
      UserHead: [
        {
          label: '用户账号',
          width: '160',
          prop: 'username',
          type: 'text'
        },
        {
          label: '名字',
          width: '160',
          prop: 'name',
          type: 'text'
        },
        {
          label: '手机',
          width: '160',
          prop: 'phone',
          type: 'text'
        }
      ],
      /*物流公司 */
      logisticsData: [],
      logisticsHead: [
        {
          label: '物流代码',
          width: '160',
          prop: 'code',
          type: 'text'
        },
        {
          label: '物流名称',
          width: '160',
          prop: 'logistics_name',
          type: 'text'
        }
      ],
      checkboxInit: false,
      options: regionDataPlus,
      moreForms: false,
      logicRow: {},
      //新增
      addMask: false,
      addUserForm: {
        username: '',
        name: '',
        phone: ''
      },
      addLogisticsForm: [
        {
          code: '',
          logistics_name: ''
        }
      ],
      addUserHead: [
        {
          label: '用户账号',
          prop: 'username',
          holder: '请输入用户账号',
          type: 'text'
        },
        {
          label: '名字',
          prop: 'name',
          holder: '请输入名字',
          type: 'text'
        },
        {
          label: '手机',
          prop: 'phone',
          holder: '请输入手机',
          type: 'text'
        }
      ],
      addLogisticsHead: [
        {
          label: '物流代码',
          prop: 'code',
          holder: '请输入物流代码',
          type: 'text'
        },
        {
          label: '物流名称',
          prop: 'logistics_name',
          holder: '物流名称',
          type: 'text'
        }
      ],
      addUserRules: {
        username: [{ required: true, message: '请输入用户', trigger: 'blur' }]
      },
      addLogisticsIndex: '',
      //修改
      updateLogisticsIndex: '',
      updateMask: false,
      updateUserForm: {},
      updateLogisticsForm: [],
      //删除
      showDel: false,
      delUrl: '',
      delId: '',
      delBatchUrl: '',
      delIds: [],
      currentId: '',
      //刷新
      loading: true
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
      this.$fetch(this.urls.relateLogistics, {
        include: 'relateLogisticsCompany.relateLogistics'
      }).then(
        res => {
          this.loading = false;
          this.UserData = res.data;
          this.logisticsData = res.data[0]
            ? res.data[0]['relateLogisticsCompany'].data
            : [];
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
    logicRowClick(row) {
      this.logisticsData = row['relateLogisticsCompany'].data;
      this.logicRow = row;
    },
    //新增
    addUser() {
      this.addMask = true;
      this.addLogisticsIndex = 'index0';
      Object.assign(this.addUserForm, this.$options.data().addUserForm);
      Object.assign(
        this.addLogisticsForm,
        this.$options.data().addLogisticsForm
      );
    },
    addConfirm() {
      let data = {
        username: this.addUserForm.username,
        name: this.addUserForm.name,
        phone: this.addUserForm.phone,
        relate_logistics_company: this.addLogisticsForm
      };
      this.$post(this.urls.relateLogistics, data).then(
        () => {
          this.addMask = false;
          this.refresh();
          this.$message({
            message: '添加成功',
            type: 'success'
          });
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
    addReset() {
      Object.assign(this.addUserForm, this.$options.data().addUserForm);
      Object.assign(
        this.addLogisticsForm,
        this.$options.data().addLogisticsForm
      );
    },
    addCancel() {
      this.addMask = false;
      this.$message({
        message: '取消添加',
        type: 'info'
      });
    },
    addLogisticsCName({ row, rowIndex }) {
      row.index = rowIndex;
    },
    addLogisticsRClick(row) {
      this.addLogisticsIndex = `index${row.index}`;
    },
    addLogisticsRow() {
      let proKey = {
        code: '',
        logistics_name: '',
        status: true
      };
      if (this.addMask) {
        this.addLogisticsForm.push(proKey);
        this.addLogisticsIndex = 'index' + (this.addLogisticsForm.length - 1);
      } else {
        this.updateLogisticsForm.push(proKey);
        this.updateLogisticsIndex =
          'index' + (this.updateLogisticsForm.length - 1);
      }
    },
    addLogisticsDel(index) {
      this.addLogisticsForm.splice(index, 1);
      this.$message({
        message: '删除物流公司成功',
        type: 'success'
      });
    },
    //修改
    updateUser() {
      this.updateMask = true;
      let id;
      id = this.currentId ? this.currentId : this.logicRow.id;
      this.$fetch(this.urls.relateLogistics + '/' + id, {
        include: 'relateLogisticsCompany.relateLogistics'
      }).then(
        res => {
          this.updateUserForm = {
            username: res.username,
            name: res.name,
            phone: res.phone,
            status: res.status
          };
          this.updateLogisticsForm = res['relateLogisticsCompany']['data'];
        },
        err => {}
      );
    },
    updateConfirm() {
      let id;
      id = this.currentId ? this.currentId : this.logicRow.id;
      let data = {
        username: this.updateUserForm.username,
        name: this.updateUserForm.name,
        phone: this.updateUserForm.phone,
        relate_logistics_company: this.updateLogisticsForm
      };
      this.$patch(this.urls.relateLogistics + '/' + id, data).then(
        () => {
          this.updateMask = false;
          this.refresh();
          this.$message({
            message: '修改成功',
            type: 'success'
          });
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
      this.updateMask = false;
      this.$message({
        message: '取消修改',
        type: 'info'
      });
    },
    updateLogisticsDel(row, index) {
      if (row.id) {
        this.$del(this.urls.relateLogisticsCompany + '/' + row.id).then(() => {
          this.updateLogisticsForm.splice(index, 1);
          this.$message({
            message: '删除城市信息成功',
            type: 'success'
          });
        });
      } else {
        this.updateLogisticsForm.splice(index, 1);
        this.$message({
          message: '删除城市信息成功',
          type: 'success'
        });
      }
    },
    //按钮批量删除
    handleSelectionChange(val) {
      let delArr = [];
      val.forEach(selectedItem => {
        delArr.push(selectedItem.id);
      });
      this.ids = delArr.join(',');
      this.currentId = val.length > 0 ? val[val.length - 1].id : '';
    },
    delUser() {
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
        })
          .then(() => {
            this.$del(this.urls.relateLogistics, { ids: this.ids }).then(
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
      this.delUrl = row['relateLogisticsCompany']
        ? this.urls.relateLogistics
        : this.urls.relateLogisticsCompany;
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
            this.$message.error(str);
          }
        }
      );
    },
    //刷新
    refresh() {
      this.loading = true;
      this.fetchData();
    },
    //分页
    handlePagChg(page) {
      this.$fetch(this.urls.relateLogistics + '?page=' + page, {
        include: 'relateLogisticsCompany.relateLogistics'
      }).then(res => {
        this.logisticsData = res.data;
      });
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
