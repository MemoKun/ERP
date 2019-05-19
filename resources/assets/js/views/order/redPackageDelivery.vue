<template>
  <div>
    <!--搜索框-->
    <div class="searchBox">
      <span>
        <label>商品名称</label>
        <el-input v-model.trim="searchBox.goodsName" clearable @keyup.enter.native="getData"></el-input>
      </span>
      <span>
      </span>
      <span>
      </span>
      <span>
      </span>
    </div>

    <!--商品信息-->
    <el-table :data="RedPackageListData" fit ref="multipleTable" @selection-change="handleSelectionChange" v-loading="loading" height="400" @row-click="proRowClick" :row-class-name="goodsRowCName">
      <el-table-column type="selection" width="95" align="center" :checked="checkboxInit" @change="toggleChecked">
      </el-table-column>
      <el-table-column v-for="(item,index) in orderListHead" :label="item.label" align="center" :width="item.width" :key="index">
        <template slot-scope="scope">
          <span v-if="item.type=='select'">
            <span v-if="scope.row[item.prop]==''"></span>
            <span v-else-if="typeof scope.row[item.prop] =='object' && item.nmProp">
              {{scope.row[item.prop][item.nmProp]}}
            </span>
            <span v-else>
              <span v-for="(list,index) in resData[item.stateVal]" :key="index">
                <span v-if="item.inProp">
                  <span v-if="list.id==scope.row[item.prop][item.inProp]">
                    {{list.name}}
                  </span>
                </span>
                <span v-else>
                  <span v-if="list.id==scope.row[item.prop]">
                    {{list.name}}
                  </span>
                </span>
              </span>
            </span>
          </span>
          <span v-else-if="item.type=='checkbox'">
            <span v-if="item.inProp">
              <el-checkbox v-model="scope.row[item.prop][item.inProp]" disabled></el-checkbox>
            </span>
            <span v-else>
              <el-checkbox v-model="scope.row[item.prop]" disabled></el-checkbox>
            </span>
          </span>
          <span v-else>
            {{item.inProp?scope.row[item.prop][item.inProp]:scope.row[item.prop]}}
          </span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="180" align="center" fixed="right">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="del(scope.row,$event)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!--页码-->
    <Pagination :page-url="goodsUrl"></Pagination>
    <label>{{this.editId}}</label>
    <!--新增商品-->
    <el-dialog :title="title" :visible.sync="showMask" :class="{'more-forms':moreForms}">
      <el-form :model="addRedPackageMagData" :rules="rules" ref="addNew" label-width="100px" :class="{'half-form':halfForm}">
        <el-form-item v-for="(item,index) in addRedPackageMagHead" :key="index" :label="item.label" :prop="item.prop">
          <span v-if="item.type=='text'">
            <span v-if="item.inProp">
              <el-input v-model.trim="addRedPackageMagData[item.prop][item.inProp]" :placeholder="item.holder"></el-input>
            </span>
            <span v-else>
              <el-input v-model.trim="addRedPackageMagData[item.prop]" :placeholder="item.holder"></el-input>
            </span>
          </span>
          <span v-else-if="item.type=='url'">
            <el-input type="url" v-model.trim="addRedPackageMagData[item.prop]" :placeholder="item.holder"></el-input>
          </span>
          <!--选择框拉取数据库数据-->
          <span v-else-if="item.type=='select'">
            <el-select v-model="addRedPackageMagData[item.prop]" :placeholder="item.holder">
              <span v-for="list in resData[item.stateVal]" :key="list.id">
                <el-option :label="list.name?list.name:list.nick" :value="list.id"></el-option>
              </span>
            </el-select>
          </span>
          <span v-else-if="item.type=='textarea'">
            <el-input type="textarea" v-model.trim="addRedPackageMagData[item.prop]" :placehoder="item.holder"></el-input>
          </span>
          <span v-else-if="item.type=='img'">
            <span v-if="noUpload">
              <el-upload class="upload-demo" action="" :before-upload="beforeUpload" :on-preview="handlePreview" :on-remove="handleRemove">
                <el-button size="small" type="primary">点击上传</el-button>
              </el-upload>
            </span>
            <span v-else>
              <img :src="item.imgPath" alt="商品图片">
            </span>
          </span>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer clearfix">
        <div style="float: right">
          <el-button type="primary" @click="submitForm">确认新建</el-button>
          <el-button @click="resetAddInfo">重置</el-button>
          <el-button @click="cancelAdd">取消</el-button>
        </div>
      </div>
    </el-dialog>

    <!--修改-->
    <el-dialog title="修改商品" :visible.sync="editMask" :class="{'more-forms':moreForms}">
      <add-new :rule-form="editData" :rules="rules" :add-arr="addRedPackageMagHead" :son-ref="addInfoRef" :onlyInputs="true" ref="addNew" :editSign="true"></add-new>
      <!--底部操作按钮-->
      <div slot="footer" class="dialog-footer clearfix">
        <div style="float: right">
          <el-button type="primary" @click="confirmEdit">确定</el-button>
          <el-button @click="cancelEdit">取消</el-button>
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

  </div>
</template>
<script>
import axios from "axios";
import qs from "qs";
export default {
  data() {
    let validateNum = (rule, value, callback) => {
      if (value != parseFloat(value)) {
        callback(new Error("只能是数字"));
      } else if (value <= 0) {
        callback(new Error("不能为负数"));
      } else {
        callback();
      }
    };
    let validateTel = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("手机号不能为空"));
      } else {
        const reg = /^1[3|4|5|7|8|9][0-9]\d{8}$/;
        if (reg.test(value)) {
          callback();
        } else {
          return callback(new Error("请输入正确的手机号"));
        }
      }
    };
    let validateUrl = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("网址不能为空"));
      } else {
        // const reg = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
        const reg = /^((ht|f)tps?):\/\/([\w\-]+(\.[\w\-]+)*\/)*[\w\-]+(\.[\w\-]+)*\/?(\?([\w\-\.,@?^=%&:\/~\+#]*)+)?/;
        if (reg.test(value)) {
          callback();
        } else {
          return callback(new Error("请输入正确的网址"));
        }
      }
    };
    return {
      imgPath: "",
      fileList2: [
        {
          name: "food.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        },
        {
          name: "food2.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        }
      ],
      newC: "",
      fd: [],
      newOpt: [
        {
          cnt: "新增",
          icon: "bf-add",
          ent: this.addNew
        },
        {
          cnt: "修改",
          icon: "bf-change",
          ent: this.editInfo,
          nClick: false
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
      addInfoRef: "goods",
      activeName: "0",
      RedPackageListData: [],
      orderListHead: [
        /*{
          label: "产品图片",
          width: "200",
          prop: "img",
          imgPath: "",
          type: "img"
        },*/
        {
          label: "商品编码",
          width: "180",
          prop: "commodity_code",
          type: "text"
        },
        {
          label: "商品简称",
          width: "120",
          prop: "short_name",
          type: "text"
        },
        {
          label: "备注",
          width: "120",
          prop: "remark",
          type: "textarea"
        },
        {
          label: "启用",
          width: "80",
          prop: "status",
          type: "checkbox"
        }
      ],
      goodsUrl: "/goods",
      loading: true,
      showMask: false,
      getsInfo: [[], [], []],
      btmTableHead: [
        [],
        [
          {
            label: "规格编码",
            width: "160",
            prop: "spec_code",
            type: "text"
          },
          {
            label: "京东规格编号",
            width: "180",
            prop: "jd_specs_code",
            type: "text"
          },
          {
            label: "唯品会规格编号",
            width: "180",
            prop: "vips_specs_code",
            type: "text"
          },
          /* {
              label: '规格图片',
              width: '120',
              prop: "img_url",
              holder: '请输入图片地址',
              type: 'text'
            },*/
          {
            label: "淘宝价格",
            width: "120",
            prop: "tb_price",
            type: "number"
          },
          {
            label: "成本价格",
            width: "120",
            prop: "cost",
            type: "number"
          },
          {
            label: "销售价格",
            width: "120",
            prop: "price",
            type: "number"
          },
          {
            label: "仓库成本",
            width: "120",
            prop: "warehouse_cost",
            type: "number"
          },
          {
            label: "折扣",
            width: "120",
            prop: "discount",
            type: "number"
          },
          {
            label: "佣金点",
            width: "100",
            prop: "commission",
            type: "number"
          },
          {
            label: "木架费",
            width: "120",
            prop: "wooden_frame_costs",
            type: "number"
          },
          {
            label: "采购运费",
            width: "120",
            prop: "purchase_freight",
            type: "number"
          },
          {
            label: "组合",
            width: "120",
            prop: "is_combination",
            type: "checkbox",
            chgAble: false,
            editChgAble: true
          },
          {
            label: "包件数量",
            width: "120",
            prop: "package_quantity",
            type: "number"
          },
          {
            label: "库存预警数量",
            width: "150",
            prop: "inventory_warning",
            type: "number"
          },
          {
            label: "采购预警天数",
            width: "150",
            prop: "purchase_days_warning",
            // holder: '请输入采购预警天数',
            type: "number"
          },
          {
            label: "产品配送类别",
            width: "150",
            prop: "distribution_method_id",
            stateVal: "distmets",
            type: "select"
          },
          {
            label: "规格",
            width: "200",
            prop: "spec",
            // holder: '请输入规格',
            type: "text"
          },
          /*{
              label: '最高价格',
              width: '120',
              prop: "highest_price",
              holder: '请输入最高价格',
              type: 'number'
            },
            {
              label: '成本价格',
              width: '120',
              prop: "cost",
              holder: '请输入所成本价格',
              type: 'number'
            },
            {
              label: '装配价格',
              width: '120',
              prop: "assembly_price",
              holder: '请输入装配价格',
              type: 'number'
            },
            {
              label: '最低价格',
              width: '120',
              prop: "lowest_price",
              holder: '请输入最低价格',
              type: 'number'
            },
            {
              label: '销售价格',
              width: '120',
              prop: "price",
              holder: '请输入销售价格',
              type: 'number'
            },
            {
              label: '打包费用',
              width: '120',
              prop: "package_costs",
              holder: '请输入打包费用',
              type: 'number'
            },

            {
              label: '条形码',
              width: '100',
              prop: "bar_code",
              holder: '请输入佣金点',
              type: 'text'
            },
            {
              label: '可售数预警数量',
              width: '180',
              prop: "available_warning",
              holder: '请输入可售数预警数量',
              type: 'number'
            },
*/
          {
            label: "颜色",
            width: "120",
            prop: "color",
            // holder: '请输入颜色',
            type: "text"
          },
          {
            label: "材质",
            width: "130",
            prop: "materials",
            // holder: '请输入材质',
            type: "text"
          },
          {
            label: "功能",
            width: "100",
            prop: "function",
            // holder: '请输入功能',
            type: "text"
          },
          {
            label: "特殊",
            width: "130",
            prop: "special",
            // holder: '请输入特殊',
            type: "text"
          },
          {
            label: "其他",
            width: "150",
            prop: "other",
            // holder: '请输入其他',
            type: "text"
          },
          {
            label: "长度",
            width: "120",
            prop: "longness",
            // holder: '请输入长度',
            type: "number"
          },
          {
            label: "宽度",
            width: "120",
            prop: "width",
            // holder: '请输入宽度',
            type: "number"
          },
          {
            label: "高度",
            width: "120",
            prop: "height",
            // holder: '请输入高度',
            type: "number"
          },
          {
            label: "体积",
            width: "120",
            prop: "volume",
            // holder: '请输入体积',
            type: "number"
          },
          {
            label: "重量",
            width: "120",
            prop: "weight",
            // holder: '请输入重量',
            type: "number"
          },
          {
            label: "备注",
            width: "150",
            prop: "remark",
            // holder: '请输入备注',
            type: "textarea"
          },
          {
            label: "成品",
            width: "120",
            prop: "finished_pro",
            // holder: '请选择是否是成品',
            type: "checkbox"
          },
          {
            label: "停产",
            width: "120",
            prop: "is_stop_pro",
            // holder: '请选择是否是停产',
            type: "checkbox"
          }
        ],
        [
          {
            label: "产品规格编码",
            width: "150",
            prop: "product_specs",
            holder: "请选择产品规格编码",
            type: "select",
            val: this.sonArr
          },
          {
            label: "组合产品规格编码",
            width: "150",
            prop: "com_pro_specs",
            holder: "请选择组合产品规格编码",
            type: "select",
            val: this.sonArr
          },
          {
            label: " 组合件数",
            width: "120",
            prop: "count",
            holder: "请输入 组合件数",
            type: "number"
          },
          {
            label: "状态",
            width: "80",
            prop: "status",
            type: "select_stu"
          }
        ],
        []
      ],
      chgSpecVal: [],
      loading: true,
      currentIndex: "",
      url: ["", "/productspecs"],
      title: "新增商品",
      addRedPackageMagData: {
        commodity_code: "",
        short_name: "",
        remark: "",
        //img: "",
        status: true
      },
      rules: {
        commodity_code: [
          { required: true, message: "请输入商品编码", trigger: "blur" }
        ],
        short_name: [{ required: true, message: "请输入商品简称", trigger: "blur" }],
        nick: [{ required: true, message: "请输入店铺名称", trigger: "blur" }],
        supplier_id: [{ required: true, message: "请选择供应商", trigger: "blur" }],
        category_id: [{ required: true, message: "请选择产品类别", trigger: "blur" }],
        title: [{ required: true, message: "请输入商品标题", trigger: "blur" }],
        img: [{ required: true, message: "请输入商品图片", trigger: "blur" }]
      },
      addRedPackageMagHead: [
        {
          label: "商品编码",
          prop: "commodity_code",
          holder: "请输入商品编号",
          type: "text",
        },
        {
          label: "商品名称",
          prop: "short_name",
          holder: "请输入商品名称",
          type: "text"
        },
        {
          label: "商品描述",
          prop: "remark",
          holder: "请输入商品描述",
          type: "textarea"
        },
        {
          label: "是否启用",
          prop: "status",
          type: "checkbox",
        }
      ],
      noUpload: true,
      /*子件信息*/
      halfForm: true,
      refArr: "ruleGoods",
      showDel: false,
      delId: "",
      inputChange: false,
      multipleSelection: [],
      delArr: [],
      sonArr: [],
      pagination: {
        current_page: 1,
        per_page: 0,
        page_total: 0
      },
      editTitle: "修改商品信息",
      editMask: false,
      editId: "",
      editData: {},
      leftTab: "修改",
      showComb: false,
      CombForm: {},
      combRules: {},
      checkboxInit: false,
      multipleTable: [],
      tData: [],
      countComp: "",
      compRow: {},
      combIndex: "",
      specRow: {},
      searchBox: {
        goodsName: ""
      },
      moreForms: true,
      newArr: [],
      specIndex: "",
      combCount: [],
      combArr: [],
      idNew: [],
      combinationsArr: [],
      fetchCombData: [],
      specAddIndex: "",
      combRowIndex: "",
      sonData: [],
      specRowInfo: {},
      curRowId:"",
      /*新数据*/
      // goodsComp:[{is_combination: false,finished_pro: true,is_stop_pro: false}],
      goodsComp: [],
      selectPro: [
        {
          label: "成品",
          width: "80",
          prop: "finished_pro",
          type: "checkbox",
          /*false 可点击 不写默认false 即不写是可点击*/
          clickAble: true
        },
        {
          label: "组合",
          width: "86",
          prop: "is_combination",
          type: "checkbox",
          /*true不可点击*/
          clickAble: true
        },
        {
          label: "商品编码",
          width: "150",
          prop: "goods",
          inProp: "commodity_code",
          type: "text"
        },
        {
          label: "规格编码",
          width: "150",
          prop: "spec_code",
          type: "text"
        },
        {
          label: "商品名称",
          width: "150",
          prop: "goods",
          inProp: "short_name",
          type: "text"
        },
        {
          label: "规格名称",
          width: "200",
          prop: "spec",
          type: "text"
        }
      ],
      /*选取规格默认值*/
      pushData: {
        is_combination: false,
        finished_pro: true,
        is_stop_pro: false
      },
      /*点击时push规格数据*/
      combData: [],
      combHead: [
        {
          label: "商品简称",
          // width: '120',
          prop: "goods",
          inProp: "short_name",
          type: "text"
        },
        {
          label: "商品编码",
          // width: '160',
          prop: "goods",
          inProp: "commodity_code",
          type: "text"
        },
        {
          label: "规格编码",
          // width: '160',
          prop: "spec_code",
          type: "text"
        },
        {
          label: "淘宝价格",
          // width: '120',
          prop: "tb_price",
          type: "number"
        },
        {
          label: "成本价格",
          // width: '120',
          prop: "cost",
          type: "number"
        },
        {
          label: "销售价格",
          // width: '120',
          prop: "price",
          type: "number"
        },
        {
          label: "包件数量",
          // width: '120',
          prop: "package_quantity",
          type: "number"
        },
        {
          label: "规格",
          // width: '150',
          prop: "spec",
          type: "text"
        },
        {
          label: "颜色",
          // width: '120',
          prop: "color",
          type: "text"
        },
        {
          label: "材质",
          // width: '130',
          prop: "materials",
          type: "text"
        },
        {
          label: "特殊",
          // width: '130',
          prop: "special",
          type: "text"
        },
        {
          label: "其他",
          // width: '150',
          prop: "other",
          type: "text"
        },
        {
          label: "体积",
          // width: '120',
          prop: "volume",
          type: "number"
        },
        {
          label: "成品",
          prop: "finished_pro",
          type: "checkbox"
        },
        {
          label: "最低销售价格",
          // width: '120',
          prop: "lowest_price",
          type: "number"
        },
        {
          label: "最高销售价格",
          // width: '120',
          prop: "highest_price",
          type: "number"
        }
      ],
      btmSpecHead: [
        {
          label: "规格编码",
          // width: '160',
          prop: "com_pro_spec",
          inProp: "spec_code",
          type: "text"
        },
        {
          label: "京东规格编码",
          // width: '180',
          prop: "com_pro_spec",
          inProp: "jd_specs_code",
          type: "text"
        },
        {
          label: "唯品会规格编码",
          // width: '180',
          prop: "com_pro_spec",
          inProp: "vips_specs_code",
          type: "text"
        },
        {
          label: "淘宝价格",
          // width: '120',
          prop: "com_pro_spec",
          inProp: "tb_price",
          type: "number"
        },
        {
          label: "成本价格",
          // width: '120',
          prop: "com_pro_spec",
          inProp: "cost",
          type: "number"
        },
        {
          label: "销售价格",
          // width: '120',
          prop: "com_pro_spec",
          inProp: "price",
          type: "number"
        },
        {
          label: "折扣",
          // width: '120',
          prop: "com_pro_spec",
          inProp: "discount",
          type: "number"
        },
        {
          label: "木架费",
          // width: '120',
          prop: "com_pro_spec",
          inProp: "wooden_frame_costs",
          type: "number"
        },
        {
          label: "包件数量",
          // width: '120',
          prop: "com_pro_spec",
          inProp: "package_quantity",
          type: "number"
        },
        {
          label: "规格",
          // width: '150',
          prop: "com_pro_spec",
          inProp: "spec",
          type: "text"
        },
        {
          label: "颜色",
          // width: '120',
          prop: "com_pro_spec",
          inProp: "color",
          type: "text"
        },
        {
          label: "材质",
          // width: '130',
          prop: "com_pro_spec",
          inProp: "materials",
          type: "text"
        },
        {
          label: "特殊",
          // width: '130',
          prop: "com_pro_spec",
          inProp: "special",
          type: "text"
        },
        {
          label: "其他",
          // width: '150',
          prop: "com_pro_spec",
          inProp: "other",
          type: "text"
        },
        {
          label: "体积",
          // width: '120',
          prop: "com_pro_spec",
          inProp: "volume",
          type: "number"
        },
        {
          label: "成品",
          // width: '120',
          prop: "com_pro_spec",
          inProp: "finished_pro",
          type: "checkbox"
        },
        {
          label: "最低销售价格",
          // width: '120',
          prop: "com_pro_spec",
          inProp: "lowest_price",
          type: "number"
        },
        {
          label: "最高销售价格",
          // width: '120',
          prop: "com_pro_spec",
          inProp: "highest_price",
          type: "number"
        }
      ],
      editSpecIndex: "",
      combUrl: "/combinations",
      editIndex: 0,
      inputChg: false,
      chgEId: "",
      conditionPro: ""
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
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    /* handleAvatarSuccess(res, file){
        console.log(res);
        console.log(file);
        this.noUpload = false;
        console.log(this.noUpload);
      },*/
    toggleChecked() {
      this.checkboxInit = !this.checkboxInit;
    },
    test() {},
    /*点击添加商品*/
    addNew() {
      this.showMask = true;
      this.resetAddInfo();
    },
    CB_dialog(val) {
      this.showMask = val;
      this.editMask = val;
    },
    /*提交添加数据*/
    submitForm() {
      /*提交数据时，如果规格中有空白项目，踢除
        * 修改规格中的组合字段
        * 如果组合字段长度大于0，默认组合自动开启
        * */
      console.log(this.addRedPackageMagData);
      let obj = this.addRedPackageMagData;
      this.$post(this.urls.redpackagemag, obj).then(
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
    resetAddInfo() {
      Object.assign(
        this.$data.addRedPackageMagData,
        this.$options.data().addRedPackageMagData
      );
      this.newC = "index0";
      this.specIndex = 0;
    },
    /*取消添加*/
    cancelAdd() {
      this.showMask = false;
    },
    /*修改保存*/
    edit(index) {
      this.currentIndex = "index" + index;
    },
    editCancel() {
      this.$message({
        message: "取消修改",
        type: "info"
      });
      this.currentIndex = "";
    },
    editSave(row) {
      let newData = {};
      if (this.activeName == "0") {
        newData = {
          code: row.code,
          name: row.name,
          report: row.report,
          expected_days: row.expected_days,
          phone: row.phone,
          address: row.address,
          freight_type: row.freight_type,
          remark: row.remark,
          status: row.status
        };
      } else if (this.activeName == "1") {
        newData = {
          logistics: row.logistics.id,
          province: row.province,
          city: row.city,
          district: row.district,
          address: row.address,
          phone: row.phone,
          price: row.price,
          weight_univalent: row.weight_univalent,
          expected_days: row.expected_days,
          route: row.route,
          is_free_shipping: row.is_free_shipping,
          remark: row.remark
        };
      } else if (this.activeName == "2") {
        newData = {
          order_no: row.order_no,
          good_sn: row.good_sn,
          standard_code: row.standard_code,
          quantity: row.quantity,
          money: row.money,
          remark: row.remark
          // status: row.status
        };
      } else if (this.activeName == "3") {
        newData = {
          file: row.file,
          name: row.name,
          paper_format: row.paper_format,
          status: row.status
        };
      }
      if (this.inputChange) {
        this.$patch(this.url[this.activeName] + "/" + row.id, newData).then(
          () => {
            this.$message({
              message: "修改成功",
              type: "success"
            });
            this.getInfo(this.url[this.activeName]);
            this.currentIndex = "";
            this.inputChange = false;
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
      } else {
        this.$message({
          message: "数据未改动",
          type: "info"
        });
      }
    },
    handleEdit() {
      this.inputChange = true;
    },
    /*获取商品信息*/
    fetchData() {
      this.loading = true;
      this.$fetch(this.urls.redpackagemag).then(
        res => {
          this.loading = false;
          this.RedPackageListData = res.data;
          if (res.data[0] && res.data[0].productspecs[0]) {
            this.goodsComp = res.data[0].productspecs[0].combinations;
          }
          let pg = res.meta.pagination;
          this.$store.dispatch("currentPage", pg.current_page);
          this.$store.commit("PER_PAGE", pg.per_page);
          this.$store.commit("PAGE_TOTAL", pg.total);
          /*请求数据成功之后，请求需要的所有子数据*/
          this.$store.dispatch("shops", "/shops");
          this.$store.dispatch("suppliers", "/suppliers");
          this.$store.dispatch("goodscates", "/goodscates");
          this.$store.dispatch("distmets", "/distmets");
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
    /*在商品中单击时，tab显示为id为当前商品的规格及其他*/
    proRowClick(row) {
      this.$refs.multipleTable.toggleRowSelection(row);
      /*单击时拿到子件和sku*/
      // this.goodsComp=row.productspecs;
      /*if(row.productspecs.length==0){
          this.goodsComp=[];
        }else{
          // this.goodsComp=[{is_combination:'',finished_pro:'',is_stop_pro:''}];
         /!* row.productspecs.map(item=>{
            this.goodsComp.push(item);
          });*!/
        }*/
    },
    /*删除单条*/
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
      this.$del(this.urls.redpackagemag + "/" + id).then(
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
    /*批量删除*/
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
            this.$del(this.urls.redpackagemag, { ids: this.delArr }).then(
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
    handleSelectionChange(val) {
      this.editId = val.length > 0 ? val[val.length - 1].id : "";
      this.multipleSelection = val;
      let del = [];
      this.multipleSelection.forEach(selectedItem => {
        del.push(selectedItem.id);
      });
      this.delArr = del.join(",");
    },
    /*页面刷新*/
    refresh() {
      this.loading = true;
      this.fetchData();
    },
    /*修改商品信息*/
    editInfo() {
      /*如果修改按钮是不可点击状态*/
      if (this.newOpt[2].nClick) {
        return;
      } else {
        /*如果没有选择要修改的项*/
        if (this.multipleSelection.length == 0) {
          this.$message({
            message: "没有选择要修改的数据",
            type: "warning"
          });
          return;
        } else if (this.multipleSelection.length >= 2) {
          this.$message({
            message: "只能修改单条数据",
            type: "warning"
          });
          return;
        } else {
          this.editMask = true;
          let id = this.checkboxId ? this.checkboxId : this.curRowId;
          this.$fetch(this.urls.redpackagemag + "/" + this.editId).then(
            res => {
              this.editData = {
                commodity_code: res.commodity_code,
                short_name: res.short_name,
                remark: res.remark,
                status: res.status
              };
            },
            err => {
              console.log(err);
            }
          );
        }
      }
    },
    getData() {
      console.log(this.searchBox);
    },
    /*规格信息单击进行修改*/
    rowEdit() {
      this.currentIndex = "index" + index;
    },
    tableRowClassName({ row, rowIndex }) {
      row.index = rowIndex;
    },
    /*修改*/
    confirmEdit() {
      let obj = this.editData;
      this.$patch(this.urls.redpackagemag + "/" + this.editId, this.editData).then(
        () => {
          this.$message({
            message: "修改成功",
            type: "success"
          });
          this.editMask = false;
          this.refresh();
          this.chgEId = "";
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
    cancelEdit() {
      this.editMask = false;
      this.chgEId = "";
    },
    /*要追加到哪条规格 修改时行切换*/
    editRowCName({ row, rowIndex }) {
      row.index = rowIndex;
    },
    editRowClick(row) {
      this.editIndex = row.index;
      this.chgEId = row.id ? row.id : "";
    },
    goodsRowCName({ row, rowIndex }) {
      if (rowIndex % 2 == 1) {
        return "warning-row";
      } else if (rowIndex % 2 == 0) {
        return "success-row";
      }
      return "";
    },
    beforeUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isGIF = file.type === "image/gif";
      const isPNG = file.type === "image/png";
      // const isBMP = file.type === 'image/bmp';

      if (!isJPG && !isGIF && !isPNG) {
        this.$message.error({
          message: "上传图片必须是JPG/GIF/PNG 格式!"
        });
      }
      let formData = new FormData();
      formData.append("image", file);
      axios
        .post(this.urls.uploadimages, formData)
        .then(res => {
          let imageInfo = res.data.meta;
          this.addRedPackageMagData.img = res.data.path;
          if (imageInfo.status_code == 201) {
            this.noUpload = false;
            this.addRedPackageMagHead.map(item => {
              if (item.type == "img") {
                item.imgPath = res.data.path;
              }
            });
          }
        })
        .catch(err => {});
    }
  },
  mounted() {
    this.fetchData();
    this.$store.dispatch("setOpt", this.newOpt);
    const that = this;
    $(window).resize(() => {
      that.$store.dispatch("setOpt", that.newOpt);
    });
  }
};
</script>
