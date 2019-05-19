<template>
  <div>
    <!--买就送商品-->
    <el-tabs>
      <el-tab-pane label="买就送商品" name="0">
        <el-table :data="productsData" v-loading="loading" @row-click="logicRowClick" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="95" align="center" :checked="checkboxInit">
          </el-table-column>
          <el-table-column v-for="item in productsHead" :label="item.label" :width="item.width" :key="item.label" align="center">
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
    <Pagination :page-url="this.urls.buyAndSendPro" @handlePagChg="handlePagChg"></Pagination>
    <!--买就送赠品-->
    <el-tabs>
      <el-tab-pane label="买就送赠品" name="0">
        <el-table :data="giftData" v-loading="loading">
          <el-table-column type="selection" width="95" align="center" :checked="checkboxInit"></el-table-column>
          <el-table-column v-for="item in giftHead" :label="item.label" :width="item.width" :key="item.label" align="center">
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
              <el-button size="mini" type="danger" @click="delSingle(scope.row,$event)">删除赠品</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
    <!--新增-->
    <el-dialog title="新增" :visible.sync="addMask" :class="{'more-forms':moreForms}">
      <el-button type="text">买就送商品</el-button>
      <add-new :rule-form="addProForm" :rules="addProRules" :add-arr="addProHead" :onlyInputs="true"></add-new>
      <div>
        <el-button type="text">买就送赠品</el-button>
        <el-table :data="addGiftForm" fit height="300" :row-class-name="addGiftName" @row-click="addGiftRClick">
          <el-table-column type="selection" width="95" align="center" :checked="checkboxInit"></el-table-column>
          <el-table-column v-for="item in addGiftHead" :label="item.label" :width="item.width" :key="item.label">
            <template slot-scope="scope">
              <span v-if="addGiftIndex=='index'+scope.$index">
                <span v-if="item.type=='text'">
                  <el-input size="small" type="text" v-model.trim="scope.row[item.prop]" :placeholder="item.holder"></el-input>
                </span>
                <span v-else-if="item.type=='number'">
                  <el-input size="small" type="number" v-model.trim="scope.row[item.prop]" :placeholder="item.holder"></el-input>
                </span>
              </span>
              <span v-else>
                <span v-if="item.type=='text'">
                  {{scope.row[item.prop]}}
                </span>
                <span v-if="item.type=='number'">
                  {{scope.row[item.prop]}}
                </span>
              </span>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="90" align="center">
            <template slot-scope="scope">
              <el-button size="mini" type="danger" @click="addGiftDel(scope.$index)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div slot="footer" class="dialog-footer clearfix">
          <div style="float: left">
            <el-button type="primary" @click="addGiftRow">添加买就送赠品</el-button>
          </div>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="addConfirm">添加</el-button>
        <el-button type="info" @click="addReset">重置</el-button>
        <el-button @click="addCancel">取消</el-button>
      </div>
    </el-dialog>
    <!--修改-->
    <el-dialog title="修改" :visible.sync="updateMask" :class="{'more-forms':moreForms}">
      <el-button type="text">买就送商品</el-button>
      <add-new :rule-form="updateProForm" :rules="addProRules" :add-arr="addProHead" :onlyInputs="true"></add-new>
      <div>
        <el-button type="text">买就送赠品</el-button>
        <el-table :data="updateGiftForm" fit height="300" :row-class-name="updateGiftCName" @row-click="updateGiftRClick">
          <el-table-column type="selection" width="95" align="center" :checked="checkboxInit"></el-table-column>
          <el-table-column v-for="item in addGiftHead" :label="item.label" :width="item.width" :key="item.label">
            <template slot-scope="scope">
              <span v-if="updateGiftIndex=='index'+scope.$index">
                <span v-if="item.type=='text'">
                  <el-input size="small" type="text" v-model.trim="scope.row[item.prop]" :placeholder="item.holder"></el-input>
                </span>
                <span v-else-if="item.type=='number'">
                  <el-input size="small" type="number" v-model.trim="scope.row[item.prop]" :placeholder="item.holder"></el-input>
                </span>
              </span>
              <span v-else>
                <span v-if="item.type=='text'">
                  {{scope.row[item.prop]}}
                </span>
                <span v-if="item.type=='number'">
                  {{scope.row[item.prop]}}
                </span>
              </span>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="90" align="center">
            <template slot-scope="scope">
              <el-button size="mini" type="danger" @click="updateGiftDtl(scope.$index)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div slot="footer" class="dialog-footer clearfix">
          <div style="float: left">
            <el-button type="primary" @click="addGiftRow">添加买就送赠品</el-button>
          </div>
        </div>
      </div>
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
import {
  regionDataPlus,
  CodeToText,
  TextToCode
} from 'element-china-area-data';
export default {
  data() {
    return {
      newOpt: [
        {
          cnt: '新增',
          icon: 'bf-add',
          ent: this.addPro
        },
        {
          cnt: '修改',
          icon: 'bf-change',
          ent: this.updatePro
        },
        {
          cnt: '删除',
          icon: 'bf-del',
          ent: this.delPro
        },
        {
          cnt: '审核',
          icon: 'bf-audit',
          ent: this.audit,
          nClick: false
        },
        {
          cnt: '作废',
          icon: 'bf-void',
          ent: this.void,
          nClick: false
        },
        {
          cnt: '刷新',
          icon: 'bf-refresh',
          ent: this.refresh
        }
      ],
      /*买就送商品 */
      productsData: [],
      productsHead: [
        {
          label: '标题',
          width: '160',
          prop: 'title',
          type: 'text'
        },
        {
          label: '商品编码',
          width: '160',
          prop: 'commodity_code',
          type: 'text'
        },
        {
          label: '规格编码',
          width: '160',
          prop: 'spec_code',
          type: 'text'
        },
        {
          label: '商品简称',
          width: '160',
          prop: 'short_name',
          type: 'text'
        },
        {
          label: '规格名称',
          width: '160',
          prop: 'spec_name',
          type: 'text'
        },
        {
          label: '是否启用',
          width: '160',
          prop: 'status',
          type: 'checkbox'
        },
        {
          label: '创建时间',
          width: '160',
          prop: 'created_at',
          type: 'text'
        }
      ],
      productsRow: {},
      /*买就送赠品*/
      giftData: [],
      giftHead: [
        {
          label: '商品编码',
          width: '160',
          prop: 'commodity_code',
          type: 'text'
        },
        {
          label: '规格编码',
          width: '160',
          prop: 'spec_code',
          type: 'text'
        },
        {
          label: '商品简称',
          width: '160',
          prop: 'short_name',
          type: 'text'
        },
        {
          label: '规格名称',
          width: '160',
          prop: 'spec_name',
          type: 'text'
        },
        {
          label: '数量',
          width: '160',
          prop: 'quantity',
          type: 'number'
        }
      ],
      checkboxInit: false,
      moreForms: true,
      //新增
      addMask: false,
      addProForm: {
        title: '',
        commodity_code: '',
        spec_code: '',
        short_name: '',
        spec_name: '',
        status: true
      },
      addGiftForm: [
        {
          commodity_code: '',
          spec_code: '',
          short_name: '',
          spec_name: '',
          quantity: ''
        }
      ],
      addProHead: [
        {
          label: '标题',
          prop: 'title',
          width: '160',
          holder: '请输入标题',
          type: 'text'
        },
        {
          label: '商品编码',
          prop: 'commodity_code',
          width: '160',
          holder: '请输入商品编码',
          type: 'text'
        },
        {
          label: '规格编码',
          prop: 'spec_code',
          width: '160',
          holder: '请输入规格编码',
          type: 'text'
        },
        {
          label: '商品简称',
          prop: 'short_name',
          width: '160',
          holder: '请输入商品简称',
          type: 'text'
        },
        {
          label: '规格名称',
          prop: 'spec_name',
          width: '160',
          holder: '请输入规格名称',
          type: 'text'
        }
      ],
      addGiftHead: [
        {
          label: '商品编码',
          prop: 'commodity_code',
          width: '160',
          holder: '请输入商品编码',
          type: 'text'
        },
        {
          label: '规格编码',
          prop: 'spec_code',
          width: '160',
          holder: '请输入规格编码',
          type: 'text'
        },
        {
          label: '商品简称',
          prop: 'short_name',
          width: '160',
          holder: '请输入商品简称',
          type: 'text'
        },
        {
          label: '规格名称',
          prop: 'spec_name',
          width: '160',
          holder: '请输入规格名称',
          type: 'text'
        },
        {
          label: '赠品数量',
          prop: 'quantity',
          width: '160',
          holder: '请输入赠品数量',
          type: 'number'
        }
      ],
      addProRules: {
        title: [{ required: true, message: '请输入标题', trigger: 'blur' }]
      },
      addGiftIndex: '',
      options: regionDataPlus,
      //修改
      updateMask: false,
      updateProForm: {},
      updateGiftForm: [],
      updateGiftIndex: '',
      //删除
      showDel: false,
      delUrl: '',
      delId: '',
      delBatchUrl: '',
      delIds: [],
      currentId: '',
      //审核
      //作废
      //刷新
      loading: true,
      //分页
      pagination: {
        current_page: 1,
        per_page: 0,
        page_total: 0
      }
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
      this.$fetch(this.urls.buyAndSendPro, {
        include: 'buyAndSendGift.buyAndSendPro'
      }).then(
        res => {
          this.loading = false;
          this.productsData = res.data;
          this.giftData = res.data[0] ? res.data[0]['buyAndSendGift'].data : [];
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
      this.giftData = row['buyAndSendGift'].data;
      this.productsRow = row;
    },
    //新增
    addPro() {
      this.addMask = true;
      this.addGiftIndex = 'index0';
      Object.assign(this.addProForm, this.$options.data().addProForm);
      Object.assign(this.addGiftForm, this.$options.data().addGiftForm);
    },
    addGiftName({ row, rowIndex }) {
      row.index = rowIndex;
    },
    addGiftRClick(row) {
      this.addGiftIndex = `index${row.index}`;
    },
    addConfirm() {
      let data = {
        title: this.addProForm.title,
        commodity_code: this.addProForm.commodity_code,
        spec_code: this.addProForm.spec_code,
        short_name: this.addProForm.short_name,
        spec_name: this.addProForm.spec_name,
        buy_and_send_gift: this.addGiftForm
      };
      this.$post(this.urls.buyAndSendPro, data).then(
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
      Object.assign(this.addProForm, this.$options.data().addProForm);
      Object.assign(this.addGiftForm, this.$options.data().addGiftForm);
    },
    addCancel() {
      this.addMask = false;
    },
    addGiftRow() {
      let giftKey = {
        commodity_code: '',
        spec_code: '',
        short_name: '',
        spec_name: '',
        quantity: ''
      };
      if (this.addMask) {
        this.addGiftForm.push(giftKey);
        this.addGiftIndex = 'index' + (this.addGiftForm.length - 1);
      } else {
        this.updateGiftForm.push(giftKey);
        this.updateGiftIndex = 'index' + (this.updateGiftForm.length - 1);
      }
    },
    addGiftDel(index) {
      this.addGiftForm.splice(index, 1);
      this.$message({
        message: '删除买就送赠品成功',
        type: 'success'
      });
    },
    addCancel() {
      this.addMask = false;
      this.$message({
        message: '取消添加',
        type: 'info'
      });
    },
    //修改
    updatePro() {
      this.updateMask = true;
      let id;
      id = this.currentId ? this.currentId : this.productsRow.id;
      this.$fetch(this.urls.buyAndSendPro + '/' + id, {
        include: 'buyAndSendGift.buyAndSendPro'
      }).then(
        res => {
          this.updateProForm = {
            title: res.title,
            commodity_code: res.commodity_code,
            spec_code: res.spec_code,
            short_name: res.short_name,
            spec_name: res.spec_name
          };
          this.updateGiftForm = res['buyAndSendGift']['data'];
        },
        err => {}
      );
    },
    updateGiftCName({ row, rowIndex }) {
      row.index = rowIndex;
    },
    updateGiftRClick(row) {
      this.updateGiftIndex = `index${row.index}`;
    },
    updateGiftDtl(row, index) {
      if (row.id) {
        this.$del(this.urls.buyAndSendGift + '/' + row.id).then(() => {
          this.updateGiftForm.splice(index, 1);
          this.$message({
            message: '删除买就送赠品成功',
            type: 'success'
          });
        });
      } else {
        this.updateGiftForm.splice(index, 1);
        this.$message({
          message: '删除买就送赠品成功',
          type: 'success'
        });
      }
    },
    updateConfirm() {
      let id;
      id = this.currentId ? this.currentId : this.productsRow.id;
      let data = {
        title: this.updateProForm.title,
        commodity_code: this.updateProForm.commodity_code,
        spec_code: this.updateProForm.spec_code,
        short_name: this.updateProForm.short_name,
        spec_name: this.updateProForm.spec_name,
        buy_and_send_gift: this.updateGiftForm
      };
      this.$patch(this.urls.buyAndSendPro + '/' + id, data).then(
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
    //按钮批量删除
    handleSelectionChange(val) {
      let delArr = [];
      val.forEach(selectedItem => {
        delArr.push(selectedItem.id);
      });
      this.ids = delArr.join(',');
      this.currentId = val.length > 0 ? val[val.length - 1].id : '';
    },
    delPro() {
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
            this.$del(this.urls.buyAndSendPro, { ids: this.ids }).then(
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
    //表格单条删除
    delSingle(row, e) {
      this.showDel = true;
      $('.el-popper').css({ left: e.x - 100 + 'px', top: e.y - 125 + 'px' });
      this.delId = row.id;
      this.delUrl = row['buyAndSendGift']
        ? this.urls.buyAndSendPro
        : this.urls.buyAndSendGift;
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
    cancelD() {
      this.showDel = false;
      this.$message({
        message: '取消删除',
        type: 'info'
      });
    },
    //审核
    audit() {
      let id = this.currentId ? this.currentId : this.productsRow.id;
      this.$put(this.urls.buyAndSendPro + '/' + id + '/audit').then(
        () => {
          this.refresh();
          this.$message({
            message: '审核成功',
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
    //作废
    void() {
      let id = this.currentId ? this.currentId : this.productsRow.id;
      this.$put(this.urls.buyAndSendPro + '/' + id + '/void').then(
        () => {
          this.refresh();
          this.$message({
            message: '作废成功',
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
    //刷新
    refresh() {
      this.loading = true;
      this.fetchData();
    },
    //分页
    handlePagChg(page) {
      this.$fetch(this.urls.buyAndSendPro, {
        include: 'buyAndSendGift.buyAndSendPro'
      }).then(res => {
        this.productsData = res.data;
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