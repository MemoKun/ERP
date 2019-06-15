webpackJsonp([14],{

/***/ 1057:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1058);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(21)("e2606f54", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-366eba34\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-366eba34\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1058:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "\n.dashboard-container[data-v-366eba34] {\n  margin: 30px;\n}\n.dashboard-text[data-v-366eba34] {\n  font-size: 30px;\n  line-height: 46px;\n}\n", ""]);

// exports


/***/ }),

/***/ 1059:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_element_china_area_data__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_element_china_area_data___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_element_china_area_data__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_echarts__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_echarts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_echarts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_resource__ = __webpack_require__(296);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





Vue.use(__WEBPACK_IMPORTED_MODULE_3_vue_resource__["a" /* default */]);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "dashboard",
  data: function data() {
    return {
      msg: "Welcome to Your Vue.js App",
      newOpt: [],
      title: "新增",
      salesData: 1111,
      salesOrderOption: {
        title: { text: "销售订单" },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "right",
          data: ["未客审", "未货审", "未财审", "未打单", "未发货"]
        },
        series: [{
          name: "销售订单",
          type: "pie",
          radius: ["50%", "70%"],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: "center"
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: "30",
                fontWeight: "bold"
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [{ value: 0, name: "未客审" }, { value: 0, name: "未货审" }, { value: 0, name: "未财审" }, { value: 0, name: "未打单" }, { value: 0, name: "未发货" }]
        }]
      },
      changeOrderOption: {
        title: { text: "变更订单" },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "right",
          data: ["未提交", "未审核"]
        },
        series: [{
          name: "变更订单",
          type: "pie",
          radius: ["50%", "70%"],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: "center"
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: "30",
                fontWeight: "bold"
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [{ value: 335, name: "未提交" }, { value: 310, name: "未审核" }]
        }]
      },
      refundOrderOption: {
        title: { text: "退款订单" },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "right",
          data: ["未客审", "未财审", "售后未审核"]
        },
        series: [{
          name: "退款订单",
          type: "pie",
          radius: ["50%", "70%"],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: "center"
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: "30",
                fontWeight: "bold"
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [{ value: 310, name: "未客审" }, { value: 234, name: "未财审" }, { value: 135, name: "售后未审核" }]
        }]
      },
      purchaseOrderOption: {
        title: { text: "采购订单" },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "right",
          data: ["新采购单", "部分入库"]
        },
        series: [{
          name: "采购订单",
          type: "pie",
          radius: ["50%", "70%"],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: "center"
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: "30",
                fontWeight: "bold"
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [{ value: 335, name: "新采购单" }, { value: 310, name: "部分入库" }]
        }]
      },
      purchaseCancelOrderOption: {
        title: { text: "取消采购订单" },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "right",
          data: ["新建", "已提交"]
        },
        series: [{
          name: "采购取消订单",
          type: "pie",
          radius: ["50%", "70%"],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: "center"
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: "30",
                fontWeight: "bold"
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [{ value: 335, name: "新建" }, { value: 310, name: "已提交" }]
        }]
      },
      stockInOrderOption: {
        title: { text: "入库订单" },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "right",
          data: ["未提交", "未入库"]
        },
        series: [{
          name: "入库订单",
          type: "pie",
          radius: ["50%", "70%"],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: "center"
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: "30",
                fontWeight: "bold"
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [{ value: 335, name: "未提交" }, { value: 135, name: "未入库" }]
        }]
      },
      resupplieOrderOption: {
        title: { text: "补件订单" },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "right",
          data: ["未提交", "未审核（大件）", "未审核（零件）", "未审核（金额）"]
        },
        series: [{
          name: "补件订单",
          type: "pie",
          radius: ["50%", "70%"],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: "center"
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: "30",
                fontWeight: "bold"
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [{ value: 335, name: "未提交" }, { value: 234, name: "未审核" }, { value: 135, name: "未结算" }]
        }]
      },
      aftersaleOrderOption: {
        title: { text: "售后订单" },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "right",
          data: ["未客审", "未售后提交", "未售后审核"]
        },
        series: [{
          name: "售后订单",
          type: "pie",
          radius: ["50%", "70%"],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: "center"
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: "30",
                fontWeight: "bold"
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [{ value: 335, name: "未客审" }, { value: 310, name: "未售后提交" }, { value: 234, name: "未售后审核" }]
        }]
      },
      cmptnOrderOption: {
        title: { text: "售后赔偿" },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "right",
          data: ["未售后提交", "未售后审核"]
        },
        series: [{
          name: "售后订单",
          type: "pie",
          radius: ["50%", "70%"],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: "center"
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: "30",
                fontWeight: "bold"
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [{ value: 335, name: "未售后提交" }, { value: 310, name: "未售后审核" }]
        }]
      }
    };
  },

  computed: _extends({
    resData: {
      get: function get() {
        return this.$store.state.responseData;
      },
      set: function set() {}
    },
    urls: {
      get: function get() {
        return this.$store.state.urls;
      },
      set: function set() {}
    }
  }, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapGetters */])(["name", "roles"])),
  components: {
    // addM
  },
  methods: {
    fetchData: function fetchData() {
      var _this = this;

      this.$fetch(this.urls.reportstatistics + "/indexreport").then(function (res) {
        //销售订单赋值
        _this.salesOrderOption.series[0].data[0].value = res[0][0] + res[0][1];
        _this.salesOrderOption.series[0].data[1].value = res[0][4];
        _this.salesOrderOption.series[0].data[2].value = res[0][3];
        _this.salesOrderOption.series[0].data[3].value = res[0][5];
        _this.salesOrderOption.series[0].data[4].value = res[0][6];

        _this.changeOrderOption.series[0].data[0].value = res[1][0];
        _this.changeOrderOption.series[0].data[1].value = res[1][1];

        _this.refundOrderOption.series[0].data[0].value = res[2][0] + res[2][1];
        _this.refundOrderOption.series[0].data[1].value = res[2][2];
        _this.refundOrderOption.series[0].data[2].value = res[2][3] + res[2][4];

        _this.purchaseOrderOption.series[0].data[0].value = res[3][0];
        _this.purchaseOrderOption.series[0].data[1].value = res[3][1];

        _this.purchaseCancelOrderOption.series[0].data[0].value = res[4][0];
        _this.purchaseCancelOrderOption.series[0].data[1].value = res[4][1];

        _this.stockInOrderOption.series[0].data[0].value = res[5][0];
        _this.stockInOrderOption.series[0].data[1].value = res[5][1];

        _this.resupplieOrderOption.series[0].data[0].value = res[6][0];
        _this.resupplieOrderOption.series[0].data[1].value = res[6][1];
        _this.resupplieOrderOption.series[0].data[2].value = res[6][2];

        _this.aftersaleOrderOption.series[0].data[0].value = res[7][0];
        _this.aftersaleOrderOption.series[0].data[1].value = res[7][1] + res[7][2];
        _this.aftersaleOrderOption.series[0].data[2].value = res[7][3];

        _this.cmptnOrderOption.series[0].data[0].value = res[8][0];
        _this.cmptnOrderOption.series[0].data[1].value = res[8][1];

        //销售订单绘制
        var salesOrderCharts = _this.$echarts.init(document.getElementById("salesOrder"), "light");
        salesOrderCharts.setOption(_this.salesOrderOption);

        //变更订单绘制
        var changeOrderCharts = _this.$echarts.init(document.getElementById("changeOrder"), "light");
        changeOrderCharts.setOption(_this.changeOrderOption);

        //退款订单绘制
        var refundOrderCharts = _this.$echarts.init(document.getElementById("refundOrder"), "light");
        refundOrderCharts.setOption(_this.refundOrderOption);

        //采购订单绘制
        var purchaseOrderCharts = _this.$echarts.init(document.getElementById("purchaseOrder"), "light");
        purchaseOrderCharts.setOption(_this.purchaseOrderOption);

        //取消采购订单绘制
        var purchaseCancelOrderCharts = _this.$echarts.init(document.getElementById("purchaseCancelOrder"), "light");
        purchaseCancelOrderCharts.setOption(_this.purchaseCancelOrderOption);

        //入库订单绘制
        var stockInOrderCharts = _this.$echarts.init(document.getElementById("stockInOrder"), "light");
        stockInOrderCharts.setOption(_this.stockInOrderOption);

        //补件订单绘制
        var resupplieOrderCharts = _this.$echarts.init(document.getElementById("resupplieOrder"), "light");
        resupplieOrderCharts.setOption(_this.resupplieOrderOption);

        //售后订单绘制
        var aftersaleOrder = _this.$echarts.init(document.getElementById("aftersaleOrder"), "light");
        aftersaleOrder.setOption(_this.aftersaleOrderOption);

        var cmptnOrder = _this.$echarts.init(document.getElementById("cmptnOrder"), "light");
        cmptnOrder.setOption(_this.cmptnOrderOption);

        _this.monthlySalesPrediction();
        _this.salesPrediction();
        _this.productHotMap();
      }, function (err) {});
    },
    monthlySalesPrediction: function monthlySalesPrediction() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("monthlySalesPrediction"), "light");
      var dataAxis = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
      var data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149];
      var yMax = 500;
      var dataShadow = [];

      for (var i = 0; i < data.length; i++) {
        dataShadow.push(yMax);
      }
      // 绘制图表
      myChart.setOption({
        title: {
          text: "月份销售单量预测"
        },
        xAxis: {
          data: dataAxis,
          axisLabel: {
            inside: true,
            textStyle: {
              color: "#fff"
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          z: 10
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: "#999"
            }
          }
        },
        dataZoom: [{
          type: "inside"
        }],
        series: [{
          // For shadow
          type: "bar",
          itemStyle: {
            normal: { color: "rgba(0,0,0,0.05)" }
          },
          barGap: "-100%",
          barCategoryGap: "40%",
          data: dataShadow,
          animation: false
        }, {
          type: "bar",
          itemStyle: {
            normal: {
              color: new __WEBPACK_IMPORTED_MODULE_2_echarts___default.a.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: "#83bff6" }, { offset: 0.5, color: "#188df0" }, { offset: 1, color: "#188df0" }])
            },
            emphasis: {
              color: new __WEBPACK_IMPORTED_MODULE_2_echarts___default.a.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: "#2378f7" }, { offset: 0.7, color: "#2378f7" }, { offset: 1, color: "#83bff6" }])
            }
          },
          data: data
        }]
      });
      // Enable data zoom when user click bar.
      var zoomSize = 6;
      myChart.on("click", function (params) {
        console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
        myChart.dispatchAction({
          type: "dataZoom",
          startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
          endValue: dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
        });
      });
    },
    salesPrediction: function salesPrediction() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("salesPrediction", "light"));
      //app.title = "多 Y 轴示例";

      var colors = ["#5793f3", "#d14a61", "#675bba"];
      // 绘制图表
      myChart.setOption({
        title: { text: "利润与销售额预计" },
        color: colors,

        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross"
          }
        },
        grid: {
          right: "20%"
        },
        toolbox: {
          feature: {
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        legend: {
          data: ["销售单量", "销售额", "利润额"]
        },
        xAxis: [{
          type: "category",
          axisTick: {
            alignWithLabel: true
          },
          data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
        }],
        yAxis: [{
          type: "value",
          name: "销售单量",
          min: 0,
          max: 1200,
          position: "right",
          axisLine: {
            lineStyle: {
              color: colors[0]
            }
          },
          axisLabel: {
            formatter: "{value} 单"
          }
        }, {
          type: "value",
          name: "销售额",
          min: 0,
          max: 1500,
          position: "right",
          offset: 80,
          axisLine: {
            lineStyle: {
              color: colors[1]
            }
          },
          axisLabel: {
            formatter: "{value} 万元"
          }
        }, {
          type: "value",
          name: "利润额",
          min: 0,
          max: 600,
          position: "left",
          axisLine: {
            lineStyle: {
              color: colors[2]
            }
          },
          axisLabel: {
            formatter: "{value} 万元"
          }
        }],
        series: [{
          name: "销售单量",
          type: "bar",
          data: [500, 515, 516, 519, 560, 590, 670, 680, 760, 879, 709, 1001]
        }, {
          name: "销售额",
          type: "bar",
          yAxisIndex: 1,
          data: [515.6, 518.1, 560.7, 590.1, 601.1, 670.2, 700.2, 820.5, 860.7, 920.1, 1000.1, 1309.9]
        }, {
          name: "利润额",
          type: "line",
          yAxisIndex: 2,
          data: [215.6, 218.1, 260.7, 290.1, 301.1, 370.2, 400.2, 420.5, 460.7, 520.1, 501.1, 539.9]
        }]
      });
    },
    salesHotMap: function salesHotMap() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("salesHotMap"), "light");
      // 绘制图表
      $.get("data/asset/data/hangzhou-tracks.json", function (data) {
        var points = [].concat.apply([], data.map(function (track) {
          return track.map(function (seg) {
            return seg.coord.concat([1]);
          });
        }));
        myChart.setOption(option = {
          animation: false,
          bmap: {
            center: [120.13066322374, 30.240018034923],
            zoom: 14,
            roam: true
          },
          visualMap: {
            show: false,
            top: "top",
            min: 0,
            max: 5,
            seriesIndex: 0,
            calculable: true,
            inRange: {
              color: ["blue", "blue", "green", "yellow", "red"]
            }
          },
          series: [{
            type: "heatmap",
            coordinateSystem: "bmap",
            data: points,
            pointSize: 5,
            blurSize: 6
          }]
        });
        if (!app.inNode) {
          // 添加百度地图插件
          var bmap = myChart.getModel().getComponent("bmap").getBMap();
          bmap.addControl(new BMap.MapTypeControl());
        }
      });
    },
    productHotMap: function productHotMap() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("productHotMap"), "light");
      var hours = ["12a", "1a", "2a", "3a", "4a", "5a", "6a", "7a", "8a", "9a", "10a", "11a", "12p", "1p", "2p", "3p", "4p", "5p", "6p", "7p", "8p", "9p", "10p", "11p"];
      var days = ["Saturday", "Friday", "Thursday", "Wednesday", "Tuesday", "Monday", "Sunday"];

      var data = [[0, 0, 5], [0, 1, 1], [0, 2, 0], [0, 3, 0], [0, 4, 0], [0, 5, 0], [0, 6, 0], [0, 7, 0], [0, 8, 0], [0, 9, 0], [0, 10, 0], [0, 11, 2], [0, 12, 4], [0, 13, 1], [0, 14, 1], [0, 15, 3], [0, 16, 4], [0, 17, 6], [0, 18, 4], [0, 19, 4], [0, 20, 3], [0, 21, 3], [0, 22, 2], [0, 23, 5], [1, 0, 7], [1, 1, 0], [1, 2, 0], [1, 3, 0], [1, 4, 0], [1, 5, 0], [1, 6, 0], [1, 7, 0], [1, 8, 0], [1, 9, 0], [1, 10, 5], [1, 11, 2], [1, 12, 2], [1, 13, 6], [1, 14, 9], [1, 15, 11], [1, 16, 6], [1, 17, 7], [1, 18, 8], [1, 19, 12], [1, 20, 5], [1, 21, 5], [1, 22, 7], [1, 23, 2], [2, 0, 1], [2, 1, 1], [2, 2, 0], [2, 3, 0], [2, 4, 0], [2, 5, 0], [2, 6, 0], [2, 7, 0], [2, 8, 0], [2, 9, 0], [2, 10, 3], [2, 11, 2], [2, 12, 1], [2, 13, 9], [2, 14, 8], [2, 15, 10], [2, 16, 6], [2, 17, 5], [2, 18, 5], [2, 19, 5], [2, 20, 7], [2, 21, 4], [2, 22, 2], [2, 23, 4], [3, 0, 7], [3, 1, 3], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 0], [3, 7, 0], [3, 8, 1], [3, 9, 0], [3, 10, 5], [3, 11, 4], [3, 12, 7], [3, 13, 14], [3, 14, 13], [3, 15, 12], [3, 16, 9], [3, 17, 5], [3, 18, 5], [3, 19, 10], [3, 20, 6], [3, 21, 4], [3, 22, 4], [3, 23, 1], [4, 0, 1], [4, 1, 3], [4, 2, 0], [4, 3, 0], [4, 4, 0], [4, 5, 1], [4, 6, 0], [4, 7, 0], [4, 8, 0], [4, 9, 2], [4, 10, 4], [4, 11, 4], [4, 12, 2], [4, 13, 4], [4, 14, 4], [4, 15, 14], [4, 16, 12], [4, 17, 1], [4, 18, 8], [4, 19, 5], [4, 20, 3], [4, 21, 7], [4, 22, 3], [4, 23, 0], [5, 0, 2], [5, 1, 1], [5, 2, 0], [5, 3, 3], [5, 4, 0], [5, 5, 0], [5, 6, 0], [5, 7, 0], [5, 8, 2], [5, 9, 0], [5, 10, 4], [5, 11, 1], [5, 12, 5], [5, 13, 10], [5, 14, 5], [5, 15, 7], [5, 16, 11], [5, 17, 6], [5, 18, 0], [5, 19, 5], [5, 20, 3], [5, 21, 4], [5, 22, 2], [5, 23, 0], [6, 0, 1], [6, 1, 0], [6, 2, 0], [6, 3, 0], [6, 4, 0], [6, 5, 0], [6, 6, 0], [6, 7, 0], [6, 8, 0], [6, 9, 0], [6, 10, 1], [6, 11, 0], [6, 12, 2], [6, 13, 1], [6, 14, 3], [6, 15, 4], [6, 16, 0], [6, 17, 0], [6, 18, 0], [6, 19, 0], [6, 20, 1], [6, 21, 2], [6, 22, 2], [6, 23, 6]];

      data = data.map(function (item) {
        return [item[1], item[0], item[2] || "-"];
      });
      // 绘制图表
      myChart.setOption({
        title: { text: "产品销售热力图" },
        tooltip: {
          position: "top"
        },
        animation: false,
        grid: {
          height: "50%",
          y: "10%"
        },
        xAxis: {
          type: "category",
          data: hours,
          splitArea: {
            show: true
          }
        },
        yAxis: {
          type: "category",
          data: days,
          splitArea: {
            show: true
          }
        },
        visualMap: {
          min: 0,
          max: 10,
          calculable: true,
          orient: "horizontal",
          left: "center",
          bottom: "15%"
        },
        series: [{
          name: "Punch Card",
          type: "heatmap",
          data: data,
          label: {
            normal: {
              show: true
            }
          },
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        }]
      });
    },
    confirmAdd: function confirmAdd() {
      console.log(1);
    },
    cancelAdd: function cancelAdd() {
      console.log(2);
    }
  },
  mounted: function mounted() {
    this.fetchData();
    this.$store.state.opt.opts = this.newOpt;
    var that = this;
    $(window).resize(function () {
      that.$store.dispatch("setOpt", that.newOpt);
    });
  }
});

/***/ }),

/***/ 1060:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "login-container ", attrs: { height: "100%" } },
    [
      _c("div", { staticClass: "dashboard-container" }, [
        _c("h1", [_vm._v("Welcome Back!")]),
        _vm._v(" "),
        _c("h2", [_vm._v("待办事项")]),
        _vm._v(" "),
        _c("div", { staticClass: "searchBox" }, [
          _c("div", {
            style: { width: "400px", height: "350px" },
            attrs: { id: "salesOrder" }
          }),
          _vm._v(" "),
          _c("div", {
            style: { width: "400px", height: "350px" },
            attrs: { id: "changeOrder" }
          }),
          _vm._v(" "),
          _c("div", {
            style: { width: "400px", height: "350px" },
            attrs: { id: "refundOrder" }
          }),
          _vm._v(" "),
          _c("div", {
            style: { width: "400px", height: "350px" },
            attrs: { id: "purchaseOrder" }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "searchBox" }, [
          _c("div", {
            style: { width: "400px", height: "350px" },
            attrs: { id: "purchaseCancelOrder" }
          }),
          _vm._v(" "),
          _c("div", {
            style: { width: "400px", height: "350px" },
            attrs: { id: "stockInOrder" }
          }),
          _vm._v(" "),
          _c("div", {
            style: { width: "400px", height: "350px" },
            attrs: { id: "resupplieOrder" }
          }),
          _vm._v(" "),
          _c("div", {
            style: { width: "400px", height: "350px" },
            attrs: { id: "aftersaleOrder" }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "searchBox" }, [
          _c("div", {
            style: { width: "400px", height: "350px" },
            attrs: { id: "cmptnOrder" }
          })
        ]),
        _vm._v(" "),
        _c("div", {
          style: { width: "1000px", height: "500px" },
          attrs: { id: "monthlySalesPrediction" }
        }),
        _vm._v(" "),
        _c("div", {
          style: { width: "1000px", height: "500px" },
          attrs: { id: "salesPrediction" }
        }),
        _vm._v(" "),
        _c("div", {
          style: { width: "1000px", height: "500px" },
          attrs: { id: "productHotMap" }
        })
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-366eba34", module.exports)
  }
}

/***/ }),

/***/ 946:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1057)
}
var normalizeComponent = __webpack_require__(12)
/* script */
var __vue_script__ = __webpack_require__(1059)
/* template */
var __vue_template__ = __webpack_require__(1060)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-366eba34"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/views/dashboard/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-366eba34", Component.options)
  } else {
    hotAPI.reload("data-v-366eba34", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});