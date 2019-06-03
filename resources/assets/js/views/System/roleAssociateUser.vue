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

    <el-dialog title="角色权限管理" :visible.sync="userPermissionMask">
      <div class="searchBox">
        <div>
          <label width="200">所属角色</label>
        </div>
        <el-select v-model="selectRoleId" placeholder="请选择" width="200px">
          <span v-for="list in roleData" :key="list.id">
            <el-option :label="list.name?list.name:list.nick" :value="list.id"></el-option>
          </span>
        </el-select>
      </div>
      <br>
      <div>
        <el-tree :data="permissionListData" show-checkbox node-key="id" :default-expanded-keys="[2, 3]" :default-checked-keys="[5]" :props="defaultProps">
        </el-tree>
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
          ent: this.addUserPermission
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
      userPermissionMask: false,
      permissionListData: [
        {
          id: 1,
          label: "订单管理",
          children: [
            {
              id: 11,
              label: "客服部",
              children: [
                {
                  id: 9,
                  label: "新增"
                },
                {
                  id: 10,
                  label: "修改"
                },
                {
                  id: 10,
                  label: "删除"
                },
                {
                  id: 10,
                  label: "锁定"
                },
                {
                  id: 10,
                  label: "解锁"
                },
                {
                  id: 10,
                  label: "审核"
                },
                {
                  id: 10,
                  label: "退审"
                },
                {
                  id: 10,
                  label: "导出"
                },
                {
                  id: 10,
                  label: "合并"
                },
                {
                  id: 10,
                  label: "拆分"
                },
                {
                  id: 10,
                  label: "转补单"
                },
                {
                  id: 10,
                  label: "转补款"
                },
                {
                  id: 10,
                  label: "订单关联"
                },
                {
                  id: 10,
                  label: "取消关联"
                },
                {
                  id: 10,
                  label: "通知发货"
                },
                {
                  id: 10,
                  label: "打印"
                },
                {
                  id: 10,
                  label: "转送款"
                },
                {
                  id: 10,
                  label: "刷新"
                }
              ]
            },
            {
              id: 12,
              label: "跟单部",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 13,
              label: "财务部",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 14,
              label: "仓储部",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 15,
              label: "订单变更",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 16,
              label: "订单中心",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 17,
              label: "审计部",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 18,
              label: "财务刷单审核",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 19,
              label: "物流查询订单",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 20,
              label: "订单结算",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: "采购管理",
          children: [
            {
              id: 21,
              label: "采购单管理",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 22,
              label: "入库单管理",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 23,
              label: "取消采购管理",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 24,
              label: "采购退货管理",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 25,
              label: "其他入库管理",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            }
          ]
        },
        {
          id: 3,
          label: "退款管理",
          children: [
            {
              id: 26,
              label: "客服退款申请",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 27,
              label: "售后退款申请",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 28,
              label: "财务退款审核",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 29,
              label: "退款中心",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 30,
              label: "审核校对",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
          ]
        },
        {
          id: 4,
          label: "下载中心",
          children: [
            {
              id: 4,
              label: "订单下载",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "商品下载",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "退款单下载",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
          ]
        },
        {
          id: 5,
          label: "基础信息",
          children: [
            {
              id: 4,
              label: "商品管理",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "会员管理",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "仓库管理",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "店铺管理",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "物流管理",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "供应商管理",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "费用类型管理",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "物流区域",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "部门管理",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "标记颜色管理",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "订单状态配置",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "城市配置",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "商品类别配置",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "公告管理",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "打印机配置",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "费用类型配置",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "用户关联供应商",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "负库存配置",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "用户关联仓库",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "发货单配置",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "配送方式管理",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "复检配置管理",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "配送管理",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "面料管理",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "记账类型",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "量子用户",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "运费类型",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "买就送管理",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "产品Bom",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "关联物流",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "下载配置",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "产品映射",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "最小包管理",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "线下账户配置",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "核销配置",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "刷单锁单配置",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "门店收款管理",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "售后状态管理",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "售后类型管理",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "评价类别管理",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "库存盘点类型",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "款项类型设置",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "标签打印配置",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "抽检配置",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "补件责任方配置",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "电子面单配置",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "售后基础配置",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "退货责任方",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "售后原因管理",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "承诺日期配置",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "规格修改配置",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "月结功能配置",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "采购退货类型",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "回访超时配置",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "商品属性设置",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "标准词库",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            }
          ]
        },
        {
          id: 6,
          label: "系统管理",
          children: [
            {
              id: 4,
              label: "角色管理",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "用户管理",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "角色用户关联",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
          ]
        },
        {
          id: 7,
          label: "报表统计",
          children: [
            {
              id: 4,
              label: "销售报表3.0",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
          ]
        },
        {
          id: 8,
          label: "补件管理",
          children: [
            {
              id: 4,
              label: "补件申请",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "补件审核",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "补件中心",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "补件发货",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
          ]
        },
        {
          id: 9,
          label: "售后管理",
          children: [
            {
              id: 4,
              label: "售后申请",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "售后提交",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "售后审核",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "售后中心",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
          ]
        },
        {
          id: 10,
          label: "售后赔偿",
          children: [
            {
              id: 4,
              label: "赔偿申请",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "赔偿审核",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
            {
              id: 4,
              label: "赔偿中心",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            },
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      },
      selectRoleId:"",
      roleData:{},
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
    addUserPermission() {
      this.userPermissionMask = true;
      this.$fetch(this.urls.roles).then(
        res=>{
          this.roleData = res.data;
        },
        err => {}
      )
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