<template>
  <div>
    <!--查询模块-->
    <el-table :data="userListData" fit width="1000" v-loading="loading" height="400">
      <el-table-column type="selection" width="95" align="center" :checked="checkboxInit">
      </el-table-column>
      <el-table-column v-for="item in tableHead[0]" :label="item.label" align="center" :width="item.width" :key="item.prop">
        <template slot-scope="scope">
          <span v-if="item.type==='checkbox'">
            <el-checkbox v-model="scope.row[item.prop]" disabled></el-checkbox>
          </span>
          <span v-else-if="item.type=='img'">
            <el-popover placement="right" trigger="hover" popper-class="picture_detail">
              <img :src="scope.row[item.prop]">
              <img slot="reference" :src="scope.row[item.prop]" :alt="scope.row[item.alt]">
            </el-popover>
          </span>
          <span v-else>
            {{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}
          </span>
        </template>
      </el-table-column>
    </el-table>
    <!--新增角色-->
    <el-dialog title="新增用户" :visible.sync="addUserMask">
      <div>
        <el-form :model="addUserFormVal" class="addChangeOrderForm" id="form">
          <el-form-item v-for="(item,index) in tableHead[1]" :key="index" :label="item.label" :prop="item.prop">
            <span v-if="item.type=='text'">
              <span v-if="item.inProp">
                <el-input v-model.trim="addUserFormVal[item.prop][item.inProp]" :placeholder="item.holder" :disabled="item.addChgAble"></el-input>
              </span>
              <span v-else>
                <el-input v-model.trim="addUserFormVal[item.prop]" :placeholder="item.holder" :disabled="item.addChgAble"></el-input>
              </span>
            </span>
            <span v-else-if="item.type=='textarea'">
              <el-input type="textarea" v-model.trim="addUserFormVal[item.prop]" :placehode="item.holder"></el-input>
            </span>
            <span v-else-if="item.type=='checkbox'">
              <el-checkbox v-model="addUserFormVal[item.prop]" :disabled="item.chgAble"></el-checkbox>
            </span>
            <span v-else-if="item.type=='DatePicker'">
              <el-date-picker v-model="addUserFormVal[item.prop]" type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期"></el-date-picker>
            </span>
          </el-form-item>
        </el-form>
      </div>
      <div slot="footer" class="dialog-footer clearfix">
        <div style="float: right">
          <el-button type="primary" @click="addUserConfirm">确定</el-button>
          <el-button @click="resetAddUser">重置</el-button>
        </div>
      </div>
    </el-dialog>

    <el-dialog title="批量导入用户" :visible.sync="importUsersMask">
      <el-button type="text">导入用户Excel</el-button>
      <el-upload class='image-uploader' :multiple='false' :auto-upload='true' list-type='text' :show-file-list='true' :before-upload="beforeUpload" :drag='true' action='' :limit="1" :on-exceed="handleExceed" :http-request="uploadFile">
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或
          <em>点击上传</em>
        </div>
        <div class="el-upload__tip" slot="tip">一次只能上传一个文件，仅限text格式，单文件不超过1MB</div>
      </el-upload>
      <el-button type="primary" @click="importUsersConfirm">确定</el-button>
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
          ent: this.addNew
        },
        {
          cnt: "修改",
          icon: "bf-change",
          ent: this.test
        },
        {
          cnt: "导入",
          icon: "bf-in",
          ent: this.importUsers
        },
        {
          cnt: "删除",
          icon: "bf-del",
          ent: this.test
        },
        {
          cnt: "刷新",
          icon: "bf-refresh",
          ent: this.refresh
        }
      ],
      loading: false,
      checkboxInit: false,
      userListData:[],

      tableHead: [
        [
          /*{
            label: "用户图片",
            prop: "user_img",
            type: "img"
          },*/
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
          /*{
            label: "入职时间",
            prop: "hiredate",
            type: "text"
          },
          {
            label: "离职时间",
            prop: "departure_time",
            type: "text"
          },*/
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
            label: "创建日期",
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
            label: "密码",
            prop: "password",
            type: "text"
          },
          {
            label: "邮箱",
            prop: "email",
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
          }
        ]
      ],
      /**新增 */
      addUserMask: false,
      addUserFormVal: {},
      importUsersMask:false,
      xlsxFile:""
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
      this.$fetch(this.urls.users).then(res => {
        this.userListData = res.data;
        this.loading = false;
      });
    },

    /**新增 */
    addNew() {
      this.addUserMask = true;
    },
    addUserConfirm() {
      this.$post(this.urls.users + "/create", this.addUserFormVal).then(() => {
        this.addUserMask = false;
        this.refresh();
        this.$message({
          message: "添加成功",
          type: "success"
        });
      });
    },
    resetAddUser() {
      this.addUserFormVal = {};
    },
    /**修改 */
    refresh() {
      this.loading = true;
      this.fetchData();
    },
    importUsers(){
      this.importUsersMask = true;
    },
    importUsersConfirm() {
      this.$post(this.urls.users + "/import", this.xlsxFile);
    },
    beforeUpload(file) {
      console.log("beforeUpload");
      console.log(file.type);
      this.xlsxFile = file;
      const isText = file.type === "application/vnd.ms-excel";
      const isTextComputer =
        file.type ===
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
      return isText | isTextComputer;
    },
    // 上传文件个数超过定义的数量
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 1 个文件，请删除后继续上传`);
    },
    // 上传文件
    uploadFile(item) {
      console.log(item);
      const fileObj = item.file;
      // FormData 对象
      const form = new FormData();
      // 文件对象
      form.append("file", fileObj);
      form.append("comId", this.comId);
      console.log(JSON.stringify(form));
      // let formTwo = JSON.stringify(form)
      this.$post(this.urls.users+"/import",form).then(res => {
        console.log("MediaAPI.upload");
        console.log(res);
        this.$message.info("文件：" + fileObj.name + "上传成功");
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
