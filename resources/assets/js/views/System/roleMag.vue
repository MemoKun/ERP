<template>
  <div>
    <!--查询模块-->
    <el-table :data="rolesList" fit width="1000" v-loading="loading" height="400" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="95" align="center" :checked="checkboxInit">
      </el-table-column>
      <el-table-column v-for="item in tableHead[0]" :label="item.label" align="center" :width="item.width" :key="item.prop">
        <template slot-scope="scope">
          <span v-if="item.type==='checkbox'">
            <el-checkbox v-model="scope.row[item.prop]" disabled></el-checkbox>
          </span>
          <span v-else>
            {{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}
          </span>
        </template>
      </el-table-column>
    </el-table>

    <!--新增角色-->
    <el-dialog title="新增角色" :visible.sync="addRoleMask">
      <el-form :model="addData" class="addRoleForm" id="addRoleForm">
        <el-form-item v-for="(item,index) in tableHead[1]" :key="index" :label="item.label" :prop="item.prop">
          <span v-if="item.type=='text'">
            <span v-if="item.inProp">
              <el-input v-model.trim="addData[item.prop][item.inProp]" :placeholder="item.holder" :disabled="item.addChgAble"></el-input>
            </span>
            <span v-else>
              <el-input v-model.trim="addData[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble"></el-input>
            </span>
          </span>
          <span v-else-if="item.type=='textarea'">
            <el-input type="textarea" v-model.trim="addData[item.prop]" :placehode="item.holder"></el-input>
          </span>
          <span v-else-if="item.type=='select'">
            <el-select v-model="addData[item.prop]" :placeholder="item.holder">
              <span v-for="list in groupOptions" :key="list.id">
                <el-option :label="list.name?list.name:list.nick" :value="list.id"></el-option>
              </span>
            </el-select>
          </span>
          <span v-else-if="item.type=='checkbox'">
            <el-checkbox v-model="addData[item.prop]" :disabled="item.chgAble"></el-checkbox>
          </span>
          <span v-else-if="item.type=='transfer'">
            <el-transfer v-model="addData.permission" :data="permissionList" :titles="['未选','已选']"></el-transfer>
          </span>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer clearfix">
        <div style="float: right">
          <el-button type="primary" @click="addRoleConfirm">提交</el-button>
        </div>
      </div>
    </el-dialog>
    <!--修改信息-->
    <el-dialog title="修改信息" :visible.sync="updateRoleMask">
      <label>{{this.updateData}}</label>
      <el-form :model="updateData" class="updateRoleForm" id="updateRoleForm">
        <el-form-item v-for="(item,index) in tableHead[1]" :key="index" :label="item.label" :prop="item.prop">
          <span v-if="item.type=='text'">
            <span v-if="item.inProp">
              <el-input v-model.trim="updateData[item.prop][item.inProp]" :placeholder="item.holder" :disabled="item.addChgAble"></el-input>
            </span>
            <span v-else>
              <el-input v-model.trim="updateData[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble"></el-input>
            </span>
          </span>
          <span v-else-if="item.type=='textarea'">
            <el-input type="textarea" v-model.trim="updateData[item.prop]" :placehode="item.holder"></el-input>
          </span>
          <span v-else-if="item.type=='select'">
            <el-select v-model="updateData[item.prop]" :placeholder="item.holder">
              <span v-for="list in groupOptions" :key="list.id">
                <el-option :label="list.name?list.name:list.nick" :value="list.id"></el-option>
              </span>
            </el-select>
          </span>
          <span v-else-if="item.type=='checkbox'">
            <el-checkbox v-model="updateData[item.prop]" :disabled="item.chgAble"></el-checkbox>
          </span>
          <span v-else-if="item.type=='transfer'">
            <el-transfer v-model="updateData.permission" :data="permissionList" :titles="['未选','已选']"></el-transfer>
          </span>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer clearfix">
        <div style="float: right">
          <el-button type="primary" @click="updateRoleConfirm">提交</el-button>
        </div>
      </div>
    </el-dialog>

    <!--页码-->
    <!--<Pagination :page-url="delBatchUrl" @handlePagChg="handlePagChg"></Pagination>-->
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
          ent: this.addRole
        },
        {
          cnt: "修改",
          icon: "bf-change",
          ent: this.updateRole
        },
        {
          cnt: "删除",
          icon: "bf-del",
          ent: this.deleteRole
        },
        {
          cnt: "刷新",
          icon: "bf-refresh",
          ent: this.refresh
        }
      ],
      /*获取数据*/
      rolesList: [],
      seriesVal: [],
      checkboxInit: false,
      tableHead: [
        [
          {
            label: "角色名称",
            width: "120",
            prop: "name",
            holder: "请输入名称",
            type: "text"
          },
          {
            label: "描述",
            width: "250",
            prop: "description",
            holder: "请输入角色描述",
            type: "text"
          },
          {
            label: "备注",
            width: "250",
            prop: "remark",
            holder: "请输入备注"
          },
          {
            label: "状态",
            width: "150",
            prop: "status",
            holder: "请选择状态",
            type: "checkbox"
          }
        ],
        [
          {
            label: "角色名称",
            prop: "name",
            type: "text"
          },
          {
            label: "描述",
            prop: "description",
            type: "text"
          },
          {
            label: "备注",
            prop: "remark",
            type: "text"
          },
          {
            label: "状态",
            prop: "status",
            type: "checkbox"
          }
        ]
      ],
      supplierRow: {},
      seriesRow: {},
      loading: true,
      //添加
      addRoleMask: false,
      updateRoleMask: false,
      addData: {
        name: "",
        role_group_id: "",
        description: "",
        remark: "",
        permission: []
      },
      updateData: {},
      groupOptions: [],
      permissionList: [],
      curRowId: "",
      curRowData: {}
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
    //获取数据
    fetchData() {
      this.$fetch(this.urls.roles).then(
        res => {
          this.loading = false;
          this.rolesList = res.data;
          let pg = res.meta.pagination;
          this.$store.dispatch("currentPage", pg.current_page);
          this.$store.commit("PER_PAGE", pg.per_page);
          this.$store.commit("PAGE_TOTAL", pg.total);
          this.delBatchUrl = this.urls.roledetails;
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
      //    获取权限列表
      this.$fetch(this.urls.permissions).then(
        res => {
          console.log(res.data);
          this.permissionList = res.data;
        },
        err => {}
      );
    },
    /**
     * ********************************************  新  增  角  色  ***************************************************
     * 
     **/
    addRole() {
      console.log("addRole");
      this.addRoleMask = true;
    },
    addRoleConfirm() {
      this.$post(this.urls.roles, this.addData).then(res => {
        this.$message({
          message: "添加角色成功",
          type: "success"
        });
        this.addRoleMask = false;
        this.refresh();
      });
    },
    /**
     * ********************************************  修  改  角  色  ***************************************************
     * 
     **/
    updateRole() {
      if (this.ids.length == 0) {
        this.$message({
          message: "请至少选择一条",
          type: "warning"
        });
      } else {
        this.updateRoleMask = true;
        let id = this.checkboxId ? this.checkboxId : this.curRowId;
        this.$fetch(this.urls.roles + "/" + id).then(
          res => {
            this.updateData = res.data[0];
          },
          err => {}
        );
      }
    },
    updateRoleConfirm() {
      let id = this.checkboxId ? this.checkboxId : this.curRowId;
      let forData = this.updateData;
      let submitData = {
        id: forData.id,
        name: forData.name,
        description: forData.description,
        remark: forData.remark,
        created_at: forData.created_at,
        updated_at: forData.updated_at
      };
      this.$patch(this.urls.roles + "/" + id, submitData).then(
        res => {
          this.$message({
            message: "修改角色成功",
            type: "success"
          });
          this.refresh();
          this.updateRoleMask = false;
        },
        err => {}
      );
    },
    handleSelectionChange(val) {
      console.log(val);
      /*拿到id集合*/
      let delArr = [];
      val.forEach(selectedItem => {
        delArr.push(selectedItem.id);
      });
      this.ids = delArr.join(",");
      /*拿到当前id*/
      this.checkboxId = val.length > 0 ? val[val.length - 1].id : "";
      this.curRowData = val.length > 0 ? val[val.length - 1] : "";
      this.additionOrderIds = val;
    },
    deleteRole() {
      console.log("delete");
    },

    /**
     * ********************************************  刷  新  ***************************************************
     * 
     **/
    refresh() {
      this.loading = true;
      this.fetchData();
    },
    /*分页*/
    handlePagChg(page) {
      this.$fetch(this.urls.roledetails + "?page=" + page, {}).then(res => {
        this.supplierVal = res.data;
      });
    }
  },
  mounted() {
    this.fetchData();
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
<style scoped>
.newInput {
  width: 500px;
}
</style>
