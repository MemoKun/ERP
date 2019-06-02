<template>
  <div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="角色列表" name="0">
        <el-table :data="roleListData" fit @selection-change="handleSelectionChange" v-loading="loading" height="250" @row-click="listRowClick">
          <el-table-column type="selection" width="95" align="center" :checked="checkboxInit">
          </el-table-column>
          <el-table-column v-for="item in tableHead[0]" :label="item.label" align="center" :width="item.width" :key="item.label">
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
        </el-table>
      </el-tab-pane>
    </el-tabs>

    <el-tabs v-model="activeName" name="0">
      <el-tab-pane label="用户列表">
        <el-table :data="userListData" fit @selection-change="handleSelectionChange" v-loading="loading" height="250" @row-click="listRowClick">
          <el-table-column type="selection" width="95" align="center" :checked="checkboxInit">
          </el-table-column>
          <el-table-column v-for="item in tableHead[1]" :label="item.label" align="center" :width="item.width" :key="item.label">
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
          cnt: "角色权限",
          icon: "bf-jurisdiction",
          ent: this.test
        },
        {
          cnt: "角色用户",
          icon: "bf-juruser",
          ent: this.test
        },
        {
          cnt: "刷新",
          icon: "bf-refresh",
          ent: this.test
        }
      ],
      activeName: "0",
      loading: false,
      roleListData: {},
      userListData: {},
      curRowId: "",
      curRowData: {},
      checkboxId: "",
      checkboxInit: false,
      tableHead: [
        [
          {
            label: "角色名称",
            width: "120",
            prop: "name",
            type: "text"
          },
          {
            label: "角色描述",
            width: "250",
            prop: "description",
            type: "text"
          },
          {
            label: "备注",
            width: "250",
            prop: "remark",
            type: "text"
          },
          {
            label: "是否启用",
            width: "150",
            prop: "status",
            type: "checkbox"
          },
          {
            label: "创建日期",
            width: "250",
            prop: "created_at",
            type: "text"
          },
        ],
        [
          {
            label: "账号",
            prop: "username",
            type: "text"
          },
          {
            label: "员工工号",
            prop: "work_id",
            type: "text"
          },
          {
            label: "员工姓名",
            prop: "real_name",
            type: "text"
          },
          {
            label: "员工手机",
            prop: "phone",
            type: "text"
          },
          {
            label: "身份证号",
            prop: "id_no",
            type: "text"
          },
          {
            label: "家庭地址",
            prop: "home_address",
            type: "text"
          },
          {
            label: "备注信息",
            prop: "remark",
            type: "text"
          },
          {
            label: "是否启用",
            width: "150",
            prop: "status",
            type: "checkbox"
          },
          {
            label: "创建日期",
            prop: "created_at",
            type: "text"
          }
        ]
      ]
    };
  },
  methods: {
    test() {
      console.log(1);
    },
    listRowClick(row) {
      this.curRowId = row.id;
      this.curRowData = row;
    },
    handleSelectionChange(val) {
      /*拿到id集合*/
      let delArr = [];
      val.forEach(selectedItem => {
        delArr.push(selectedItem.id);
      });
      this.ids = delArr.join(",");
      /*拿到当前id*/
      this.checkboxId = val.length > 0 ? val[val.length - 1].id : "";
      this.curRowData = val.length > 0 ? val[val.length - 1] : "";
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