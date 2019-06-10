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
    <!--底部tab-->
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

    <el-dialog title="角色权限管理" :visible.sync="RolesPermissionMask">
      <div class="searchBox">
        <el-select v-model="selectRoleId" placeholder="所属角色" width="200px" @change="fetchRolePermissions">
          <span v-for="list in roleData" :key="list.id">
            <el-option :label="list.name?list.name:list.nick" :value="list.id"></el-option>
          </span>
        </el-select>
      </div>
      <br>
      <div>
        <el-tree ref="permissionTree" :data="permissionListTree" show-checkbox node-key="label" :props="defaultProps" @check="getCheckedNodes">
        </el-tree>
      </div>
      <div slot="footer" class="dialog-footer clearfix">
        <div style="float: right">
          <el-button type="primary" @click="changePermissionsConfirm">更改权限</el-button>
        </div>
      </div>
    </el-dialog>

    <el-dialog title="角色用户关联" :visible.sync="userRolesMask">
      <div>
        <el-select v-model="selectRoleId" placeholder="所属角色" width="200px" @change="getRolesAsUsers">
          <span v-for="list in roleData" :key="list.id">
            <el-option :label="list.name?list.name:list.nick" :value="list.id"></el-option>
          </span>
        </el-select>
      </div>
      <br>
      <div>
        <el-transfer v-model="alreadyContainUsers" :data="unContainUsers" :titles="['未包含用户', '已包含用户']"></el-transfer>
      </div>
      <div slot="footer" class="dialog-footer clearfix">
        <div style="float: right">
          <el-button type="primary" @click="changeUserRolesConfirm">设置关联角色</el-button>
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
          cnt: "角色权限",
          icon: "bf-jurisdiction",
          ent: this.addRolesPermission
        },
        {
          cnt: "角色用户",
          icon: "bf-juruser",
          ent: this.addUserRoles
        },
        {
          cnt: "刷新",
          icon: "bf-refresh",
          ent: this.refresh
        }
      ],
      activeName: "0",
      loading: false,
      roleListData: {},
      userListData: {},
      tempUserListData: {},
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
          }
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
      ],
      RolesPermissionMask: false,
      userRolesMask: false,
      permissionListTree: [
        {
          id: 1,
          label: "订单管理",
          children: [
            {
              id: 11,
              label: "客服部"
            },
            {
              id: 12,
              label: "跟单部"
            },
            {
              id: 13,
              label: "财务部"
            },
            {
              id: 14,
              label: "仓储部"
            },
            {
              id: 15,
              label: "订单变更"
            },
            {
              id: 16,
              label: "订单中心"
            },
            {
              id: 17,
              label: "审计部"
            },
            {
              id: 18,
              label: "财务刷单审核"
            },
            {
              id: 19,
              label: "物流查询订单"
            },
            {
              id: 20,
              label: "订单结算"
            }
          ]
        },
        {
          id: 2,
          label: "采购管理",
          children: [
            {
              id: 21,
              label: "采购单管理"
            },
            {
              id: 22,
              label: "入库单管理"
            },
            {
              id: 23,
              label: "取消采购管理"
            },
            {
              id: 24,
              label: "采购退货管理"
            },
            {
              id: 25,
              label: "其他入库管理"
            }
          ]
        },
        {
          id: 3,
          label: "退款管理",
          children: [
            {
              id: 26,
              label: "客服退款申请"
            },
            {
              id: 27,
              label: "售后退款申请"
            },
            {
              id: 28,
              label: "财务退款审核"
            },
            {
              id: 29,
              label: "退款中心"
            },
            {
              id: 30,
              label: "审核校对"
            }
          ]
        },
        {
          id: 4,
          label: "下载中心",
          children: [
            {
              id: 31,
              label: "订单下载"
            },
            {
              id: 32,
              label: "商品下载"
            },
            {
              id: 33,
              label: "退款单下载"
            }
          ]
        },
        {
          id: 5,
          label: "基础信息",
          children: [
            {
              id: 34,
              label: "商品管理"
            },
            {
              id: 35,
              label: "会员管理"
            },
            {
              id: 36,
              label: "仓库管理"
            },
            {
              id: 37,
              label: "店铺管理"
            },
            {
              id: 38,
              label: "物流管理"
            },
            {
              id: 39,
              label: "供应商管理"
            },
            {
              id: 40,
              label: "费用类型管理"
            },
            {
              id: 41,
              label: "物流区域"
            },
            {
              id: 42,
              label: "部门管理"
            },
            {
              id: 43,
              label: "标记颜色管理"
            },
            {
              id: 44,
              label: "订单状态配置"
            },
            {
              id: 45,
              label: "城市配置"
            },
            {
              id: 46,
              label: "商品类别配置"
            },
            {
              id: 47,
              label: "公告管理"
            },
            {
              id: 48,
              label: "打印机配置"
            },
            {
              id: 49,
              label: "费用类型配置"
            },
            {
              id: 50,
              label: "用户关联供应商"
            },
            {
              id: 51,
              label: "负库存配置"
            },
            {
              id: 52,
              label: "用户关联仓库"
            },
            {
              id: 53,
              label: "发货单配置"
            },
            {
              id: 54,
              label: "配送方式管理"
            },
            {
              id: 55,
              label: "复检配置管理"
            },
            {
              id: 56,
              label: "配送管理"
            },
            {
              id: 57,
              label: "面料管理"
            },
            {
              id: 58,
              label: "记账类型"
            },
            {
              id: 59,
              label: "量子用户"
            },
            {
              id: 60,
              label: "运费类型"
            },
            {
              id: 61,
              label: "买就送管理"
            },
            {
              id: 62,
              label: "产品Bom"
            },
            {
              id: 63,
              label: "关联物流"
            },
            {
              id: 64,
              label: "下载配置"
            },
            {
              id: 65,
              label: "产品映射"
            },
            {
              id: 66,
              label: "最小包管理"
            },
            {
              id: 67,
              label: "线下账户配置"
            },
            {
              id: 68,
              label: "核销配置"
            },
            {
              id: 69,
              label: "刷单锁单配置"
            },
            {
              id: 70,
              label: "门店收款管理"
            },
            {
              id: 71,
              label: "售后状态管理"
            },
            {
              id: 72,
              label: "售后类型管理"
            },
            {
              id: 73,
              label: "评价类别管理"
            },
            {
              id: 74,
              label: "库存盘点类型"
            },
            {
              id: 75,
              label: "款项类型设置"
            },
            {
              id: 76,
              label: "标签打印配置"
            },
            {
              id: 77,
              label: "抽检配置"
            },
            {
              id: 78,
              label: "补件责任方配置"
            },
            {
              id: 79,
              label: "电子面单配置"
            },
            {
              id: 80,
              label: "售后基础配置"
            },
            {
              id: 81,
              label: "退货责任方配置"
            },
            {
              id: 82,
              label: "售后原因管理"
            },
            {
              id: 83,
              label: "承诺日期配置"
            },
            {
              id: 84,
              label: "规格修改配置"
            },
            {
              id: 85,
              label: "月结功能配置"
            },
            {
              id: 86,
              label: "采购退货类型"
            },
            {
              id: 87,
              label: "回访超时配置"
            },
            {
              id: 88,
              label: "商品属性设置"
            },
            {
              id: 89,
              label: "标准词库"
            }
          ]
        },
        {
          id: 6,
          label: "系统管理",
          children: [
            {
              id: 90,
              label: "角色管理"
            },
            {
              id: 91,
              label: "用户管理"
            },
            {
              id: 92,
              label: "角色用户关联"
            }
          ]
        },
        {
          id: 7,
          label: "报表统计",
          children: [
            {
              id: 93,
              label: "销售报表3.0"
            }
          ]
        },
        {
          id: 8,
          label: "补件管理",
          children: [
            {
              id: 94,
              label: "补件申请"
            },
            {
              id: 95,
              label: "补件审核"
            },
            {
              id: 96,
              label: "补件中心"
            },
            {
              id: 97,
              label: "补件发货"
            }
          ]
        },
        {
          id: 9,
          label: "售后管理",
          children: [
            {
              id: 98,
              label: "售后申请"
            },
            {
              id: 99,
              label: "售后提交"
            },
            {
              id: 100,
              label: "售后审核"
            },
            {
              id: 101,
              label: "售后中心"
            }
          ]
        },
        {
          id: 10,
          label: "售后赔偿",
          children: [
            {
              id: 102,
              label: "赔偿申请"
            },
            {
              id: 103,
              label: "赔偿审核"
            },
            {
              id: 104,
              label: "赔偿中心"
            }
          ]
        }
      ],
      permissionListData: "",
      defaultProps: {
        children: "children",
        label: "label"
      },
      selectRoleId: "",
      roleData: {},
      alreadyContainUsers: [],
      unContainUsers: []
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
    fetchData() {
      this.loading = true;
      this.$fetch(this.urls.users).then(
        res => {
          this.tempUserListData = res.data;
          this.userListData = res.data;
          this.loading = false;
        },
        err => {}
      );
      this.$fetch(this.urls.roles).then(
        res => {
          this.roleListData = res.data;
          this.loading = false;
        },
        err => {}
      );
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
    },
    addRolesPermission() {
      this.RolesPermissionMask = true;
      this.$fetch(this.urls.roles).then(
        res => {
          this.roleData = res.data;
          this.getCheckedNodes();
        },
        err => {}
      );
    },
    addUserRoles() {
      this.unContainUsers = [];
      this.userRolesMask = true;
      this.$fetch(this.urls.roles).then(
        res => {
          this.roleData = res.data;
        },
        err => {}
      );
      this.$fetch(this.urls.users).then(res => {
        let usersData = res.data;
        usersData.map(item => {
          let users = {
            key: item.id,
            label: item.real_name
          };
          this.unContainUsers.push(users);
        });
      });
    },
    getCheckedNodes() {
      this.permissionListData = this.$refs.permissionTree.getCheckedKeys();
    },
    fetchRolePermissions() {
      let id = this.selectRoleId;
      this.$fetch(this.urls.permissions + "/" + id).then(
        res => {
          let checked = [
            "订单管理",
            "采购管理",
            "退款管理",
            "下载中心",
            "基础信息",
            "系统管理",
            "报表统计",
            "补件管理",
            "售后管理",
            "售后赔偿"
          ];
          this.$refs.permissionTree.setCheckedKeys(checked);
        },
        err => {}
      );
    },
    getRolesAsUsers() {
      let id = this.selectRoleId;
      let submitData = {
        roleId: this.selectRoleId
      };
      this.$fetch(
        this.urls.users + "/" + id + "/getrolesassociateusers",
        submitData
      ).then(
        res => {
          this.alreadyContainUsers = res;
        },
        err => {}
      );
    },
    changePermissionsConfirm() {
      this.RolesPermissionMask = false;
      let submitData = {
        roleId: this.selectRoleId,
        permissions: this.permissionListData
      };
      this.$post(this.urls.roles + "/giverolespermission", submitData).then(
        res => {
          this.$message({
            message: "更改权限成功！",
            type: "success"
          });
        },
        err => {}
      );
    },
    changeUserRolesConfirm() {
      this.RolesPermissionMask = false;
      let submitData = {
        userIds: this.alreadyContainUsers,
        roleId: this.selectRoleId
      };
      this.$post(this.urls.users + "/setroles", submitData).then(
        res => {
          if (res == 1) {
            this.$message({
              message: "设置角色成功！",
              type: "success"
            });
          } else {
            this.$message({
              message: "设置角色失败！",
              type: "info"
            });
          }
        },
        err => {}
      );
    },
    refresh() {
      this.loading = true;
      this.fetchData();
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