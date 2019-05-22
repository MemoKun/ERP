<template>
  <div :style="backgroundDiv">
    <div class="dashboard-container">
      <h1>欢迎回来！</h1>
      <p class="dashboard-text">{{name}}</p>
      <p class="dashboard-text">你的身份是：
        <span v-for='role in roles' :key='role'>{{role}}</span>
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "dashboard",
  data() {
    return {
      newOpt: [],
      title: "新增",
      backgroundDiv: {
        backgroundImage: "url(" + require("../../img/background.jpg") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%"
      },
      formDialog: {
        title: "测试",
        dialogFormVisible: false,
        form: [
          {
            label: "名称",
            type: "text",
            formLabelWidth: "120px",
            name: "hh"
          },
          {
            label: "代码",
            type: "text",
            formLabelWidth: "120px",
            name: "vv"
          },
          {
            label: "状态",
            type: "select",
            formLabelWidth: "120px",
            ps: {
              s: "1"
            },
            status: [
              {
                label: "是",
                value: 1
              },
              {
                label: "否",
                value: 0
              }
            ]
          }
        ]
      }
    };
  },
  computed: {
    ...mapGetters(["name", "roles"]),
    getKey() {
      let arr = this.formDialog.form.ps;
    }
  },
  components: {
    // addM
  },
  methods: {
    toggle() {
      this.formDialog.dialogFormVisible = !this.formDialog.dialogFormVisible;
    },
    confirmAdd() {
      console.log(1);
    },
    cancelAdd() {
      console.log(2);
    }
  },
  mounted() {
    this.$store.state.opt.opts = this.newOpt;
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
