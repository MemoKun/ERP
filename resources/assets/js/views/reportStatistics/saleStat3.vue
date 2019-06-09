<template>
  <div>
    <div>
      <h3>店铺销售状况统计</h3>
      <el-table :data="salesAmount" align="center" stripe>
        <el-table-column align="center" prop="category">
        </el-table-column>
        <el-table-column align="center" prop="sales">
        </el-table-column>
        <el-table-column align="center" prop="orderNum">
        </el-table-column>
        <el-table-column align="center" prop="OrderPrice">
        </el-table-column>
        <el-table-column align="center" prop="monthSales">
        </el-table-column>
        <el-table-column align="center" prop="monthOrderNum">
        </el-table-column>
        <el-table-column align="center" prop="monthCustomerOrderPrice">
        </el-table-column>
      </el-table>
    </div>
    <div>
      <el-table :data="costAmount" align="center" stripe>
        <el-table-column align="center" prop="category">
        </el-table-column>
        <el-table-column align="center" prop="sales">
        </el-table-column>
        <el-table-column align="center" prop="orderNum">
        </el-table-column>
        <el-table-column align="center" prop="OrderPrice">
        </el-table-column>
        <el-table-column align="center" prop="monthSales">
        </el-table-column>
        <el-table-column align="center" prop="monthOrderNum">
        </el-table-column>
        <el-table-column align="center" prop="monthCustomerOrderPrice">
        </el-table-column>
      </el-table>
    </div>
    <div class="searchBox">
      <div id="shopsPercent" :style="{width: '400px', height: '400px'}"></div>
      <div id="aftersales" :style="{width: '900px', height: '400px'}"></div>
    </div>

    <div id="salesPrediction" :style="{width: '1300px', height: '400px'}"></div>

    <div id="regionSale" :style="{width: '1300px', height: '400px'}"></div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import echarts from "echarts";
export default {
  data() {
    return {
      newOpt: [
        {
          cnt: "刷新",
          icon: "bf-refresh",
          ent: this.refresh
        }
      ],
      salesAmount: [
        {
          category: "类别",
          sales: "销售额",
          orderNum: "订单数",
          OrderPrice: "客单价",
          monthSales: "本月销售额",
          monthOrderNum: "本月订单数",
          monthCustomerOrderPrice: "本月客单价"
        },
        {
          category: "金额",
          sales: "",
          orderNum: "",
          OrderPrice: "",
          monthSales: "",
          monthOrderNum: "",
          monthCustomerOrderPrice: ""
        },
        {
          category: "同比增长速率",
          sales: "",
          orderNum: "",
          OrderPrice: "",
          monthSales: "",
          monthOrderNum: "",
          monthCustomerOrderPrice: ""
        }
      ],
      costAmount: [
        {
          category: "类别",
          sales: "总销售金额",
          orderNum: "总物流成本",
          OrderPrice: "总配送成本",
          monthSales: "总售后成本",
          monthOrderNum: "总记账成本",
          monthCustomerOrderPrice: "总盈亏金额"
        },
        {
          category: "金额",
          sales: "988230",
          orderNum: "12012",
          OrderPrice: "167121",
          monthSales: "8901",
          monthOrderNum: "2341",
          monthCustomerOrderPrice: "652123"
        }
      ]
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
      this.$fetch(this.urls.reportstatistics + "/orderAmount").then(
        res => {
          this.salesAmount = res;
        },
        err => {}
      );
    },
    salesPrediction() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(
        document.getElementById("salesPrediction", "light")
      );
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
        xAxis: [
          {
            type: "category",
            axisTick: {
              alignWithLabel: true
            },
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月"
            ]
          }
        ],
        yAxis: [
          {
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
          },
          {
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
          },
          {
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
          }
        ],
        series: [
          {
            name: "销售单量",
            type: "bar",
            data: [500, 515, 516, 519, 560, 590, 670, 680, 760, 879, 709, 1001]
          },
          {
            name: "销售额",
            type: "bar",
            yAxisIndex: 1,
            data: [
              515.6,
              518.1,
              560.7,
              590.1,
              601.1,
              670.2,
              700.2,
              820.5,
              860.7,
              920.1,
              1000.1,
              1309.9
            ]
          },
          {
            name: "利润额",
            type: "line",
            yAxisIndex: 2,
            data: [
              215.6,
              218.1,
              260.7,
              290.1,
              301.1,
              370.2,
              400.2,
              420.5,
              460.7,
              520.1,
              501.1,
              539.9
            ]
          }
        ]
      });
    },
    shopsPercent() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(
        document.getElementById("shopsPercent"),
        "light"
      );
      // 绘制图表
      myChart.setOption({
        title: { text: "店铺销售额占比图" },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "right",
          data: ["Dreasylife旗舰店", "迪洛家居旗舰店", "思享家官方旗舰店", "Dreasylife家居旗舰店-京东"]
        },
        series: [
          {
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
            data: [
              { value: 335, name: "Dreasylife旗舰店" },
              { value: 310, name: "迪洛家居旗舰店" },
              { value: 234, name: "思享家官方旗舰店" },
              { value: 135, name: "Dreasylife家居旗舰店-京东" }
            ]
          }
        ]
      });
    },
    regionSale() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(
        document.getElementById("regionSale"),
        "light"
      );
      var dataAxis = [
        "北京",
        "上海",
        "广东",
        "广西",
        "湖北",
        "湖南",
        "四川",
        "江苏",
        "浙江",
        "河南",
        "福建",
        "贵州",
        "重庆",
        "新疆",
        "西藏",
        "陕西",
        "天津",
        "河北",
        "海南",
        "江西"
      ];
      var data = [
        220,
        182,
        191,
        234,
        290,
        330,
        310,
        123,
        442,
        321,
        90,
        149,
        210,
        122,
        133,
        334,
        198,
        123,
        125,
        220
      ];
      var yMax = 500;
      var dataShadow = [];

      for (var i = 0; i < data.length; i++) {
        dataShadow.push(yMax);
      }

      // 绘制图表
      myChart.setOption({
        title: { text: "销售区域分布图" },
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
        dataZoom: [
          {
            type: "inside"
          }
        ],
        series: [
          {
            // For shadow
            type: "bar",
            itemStyle: {
              normal: { color: "rgba(0,0,0,0.05)" }
            },
            barGap: "-100%",
            barCategoryGap: "40%",
            data: dataShadow,
            animation: false
          },
          {
            type: "bar",
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#83bff6" },
                  { offset: 0.5, color: "#188df0" },
                  { offset: 1, color: "#188df0" }
                ])
              },
              emphasis: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#2378f7" },
                  { offset: 0.7, color: "#2378f7" },
                  { offset: 1, color: "#83bff6" }
                ])
              }
            },
            data: data
          }
        ]
      });
      // Enable data zoom when user click bar.
      var zoomSize = 6;
      myChart.on("click", function(params) {
        console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
        myChart.dispatchAction({
          type: "dataZoom",
          startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
          endValue:
            dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
        });
      });
    },
    aftersales() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(
        document.getElementById("aftersales"),
        "light"
      );
      var colors = ["#5793f3", "#d14a61", "#675bba"];
      // 绘制图表
      myChart.setOption({
        title: { text: "售后同比对比图" },
        color: ["#3398DB"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: [
              "Dreasylife旗舰店",
              "迪洛家居旗舰店",
              "思享家官方旗舰店",
              "Dreasylife家居旗舰店-京东"
            ],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "售后数量",
            type: "bar",
            barWidth: "30%",
            data: [5, 2, 7, 8]
          }
        ]
      });
    },
    refresh(){
      this.fetchData();
    }
  },
  mounted() {
    this.fetchData();
    this.salesPrediction();
    this.shopsPercent();
    this.regionSale();
    this.aftersales();
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