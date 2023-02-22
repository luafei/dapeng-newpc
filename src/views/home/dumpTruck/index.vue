<template>
  <div class="dumpTruck">
    <div class="dpheader">
      <img src="@/assets/images/common/u2428.png" alt="" />
      <span @click="goBack">城市大脑运行监测</span>
      <img src="@/assets/images/common/u2426.png" alt="" />
      <span>{{ title }}</span>
    </div>
    <div class="dpContent">
      <div class="dpBlock">
        <div class="dpItem">
          <div class="trafficStatistics">
            <div class="header">
              <div class="left">
                <span class="blueLine"></span>
                <span>泥头车车流量统计</span>
              </div>
              <date-picker
                :target="'trafficStatisticsTimeType'"
                @datePickerClick="datePickerClick"
              ></date-picker>
            </div>
            <div class="center">
              <div class="item">
                <img src="@/assets/images/traffic_in.png" alt="" />
                <div>{{ trafficStatistics.carIn }}</div>
                <div>驶入车辆</div>
              </div>
              <div class="item">
                <img src="@/assets/images/traffic_out.png" alt="" />
                <div>{{ trafficStatistics.carOut }}</div>
                <div>驶出车辆</div>
              </div>
              <div class="item">
                <img src="@/assets/images/traffic_pure.png" alt="" />
                <div>{{ trafficStatistics.carNetinflow }}</div>
                <div>净流入车辆</div>
              </div>
              <div class="item">
                <img src="@/assets/images/traffic_vehicle.png" alt="" />
                <div>{{ trafficStatistics.total }}</div>
                <div>总车辆</div>
              </div>
            </div>
          </div>
          <div class="underline"></div>
          <div class="trafficRanking">
            <div class="header">
              <div class="left">
                <span class="blueLine"></span>
                <span>泥头车出入口通行量排名</span>
              </div>
              <drive-picker
                :target="'direction'"
                @drivePickerClick="drivePickerClick"
              ></drive-picker>
            </div>
            <div class="center">
              <div id="trafficRankingStatic"></div>
            </div>
          </div>
          <div class="underline"></div>
          <div class="mainLoad">
            <div class="header">
              <div class="left">
                <span class="blueLine"></span>
                <span>泥头车主要路段通行量</span>
              </div>
            </div>
            <div class="center">
              <div id="mainLoadStatic"></div>
            </div>
          </div>
        </div>
        <div class="dpItem">
          <div class="trafficDistribution">
            <div class="header">
              <div class="left">
                <span class="blueLine"></span>
                <span>泥头车出入口通行量时间分布</span>
              </div>
              <drive-picker
                :target="'driveTimeDirection'"
                @drivePickerClick="drivePickerClick"
              ></drive-picker>
            </div>
            <div class="subHeader">
              <time-picker
                :target="'trafficDistributionTimeType'"
                :initValue="trafficDistributionTimeType"
                @timePickerClick="timePickerClick"
              ></time-picker>
            </div>
            <div class="center">
              <div id="trafficDistributionStatic"></div>
            </div>
          </div>
          <div class="underline"></div>
          <div class="loadSection">
            <div class="header">
              <div class="left">
                <span class="blueLine"></span>
                <span>泥头车主要路段通行量时间分布</span>
              </div>
              <time-picker
                :target="'monitorTimeType'"
                :initValue="monitorTimeType"
                @timePickerClick="timePickerClick"
              ></time-picker>
            </div>
            <div class="center">
              <div id="loadSectionStatic"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import * as echarts from "echarts";
import {
  getTrafficFlow,
  getTrafficRank,
  getTimeDistribution,
  getMainRoadRank,
} from "@/api/dumpTruck";
import { parseTime } from "@/utils/util";
export default {
  name: "dumpTruck",
  data() {
    return {
      title: "泥头车",
      carType: "dumpTruck",
      trafficStatisticsTimeType: "day",
      trafficStatistics: {
        carIn: 0,
        carOut: 0,
        carNetinflow: 0,
        total: 0,
      },
      monitoringEntranceIndex: 0,
      direction: 0,
      driveTimeDirection: 0,
      trafficDistributionTimeType: "month",
      monitorTimeType: "day",
    };
  },
  created() {
    this.initData();
  },
  mounted() {
    this.initTrafficRanking();
    this.initTrafficDistribution();
    this.initMainLoad();
    this.initLoadSection();
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    initData() {
      let postData = {
        carType: this.carType,
        timeType: this.trafficStatisticsTimeType,
      };
      getTrafficFlow(postData).then((res) => {
        let { carIn, carOut, carNetinflow, total } = res.data.data;
        this.trafficStatistics.carIn = carIn || 0;
        this.trafficStatistics.carOut = carOut || 0;
        this.trafficStatistics.carNetinflow = carNetinflow || 0;
        this.trafficStatistics.total = total || 0;
      });
    },
    datePickerClick(e) {
      if (e.target === "trafficStatisticsTimeType") {
        this.trafficStatisticsTimeType = e.type;
        this.initData();
      }
    },
    drivePickerClick(e) {
      if (e.target === "direction") {
        this.direction = e.type;
        this.initTrafficRanking();
      }
      if (e.target === "driveTimeDirection") {
        this.driveTimeDirection = e.type;
        this.initTrafficDistribution();
      }
    },
    timePickerClick(e) {
      if (e.target === "monitorTimeType") {
        this.monitorTimeType = e.type;
        this.initLoadSection();
      }
      if (e.target === "trafficDistributionTimeType") {
        this.trafficDistributionTimeType = e.type;
        this.initTrafficDistribution();
      }
    },
    initTrafficRanking() {
      let postData = {
        carType: this.carType,
        direction: this.direction,
        timeType: "day",
      };
      getTrafficRank(postData).then((res) => {
        // 基于准备好的dom，初始化echarts实例
        var labels = [];
        var values = [];
        var allTime = [];
        var maxArr = [];
        res.data.data.forEach((item, index) => {
          item.value = item.flowNum;
          allTime.push(item);
          if (this.carType !== "all") {
            labels.push("0" + (index + 1) + " " + item.tollName);
          } else {
            labels.push(item.tollName);
          }
          values.push(item.flowNum);
        });
        if (values.length !== 0) {
          maxArr = [];
          let max = Math.max(...values);
          values.forEach(() => {
            maxArr.push(max);
          });
        } else {
          maxArr = [];
        }

        var myChart = echarts.init(
          document.getElementById("trafficRankingStatic")
        );
        // 绘制图表
        var option = {
          animationDuration: 1500,
          grid: {
            left: "10px",
            right: "10px",
            bottom: "0%",
            top: "0%",
            containLabel: true,
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow",
            },
            formatter: "{b0}: {c0}",
          },
          xAxis: {
            show: false, //是否显示x轴
            type: "value",
          },
          yAxis: [
            {
              type: "category",
              inverse: true, //让y轴数据逆向
              triggerEvent: true,
              axisLabel: {
                show: true,
                textStyle: {
                  color: (val, index) => {
                    if (index === 0) {
                      return "#41FFEA";
                    } else {
                      return "#86B3B8";
                    }
                  }, //y轴字体颜色
                },
                //定义富文本标签
                rich: {
                  lg: {
                    fontWeight: "bold",
                    fontSize: 12, //字体默认12
                    color: "#08C",
                    padding: [0, 5, 0, 0],
                  },
                  title: {
                    color: "#000000",
                    fontWeight: "lighter",
                  },
                },
              },
              splitLine: { show: false }, //横向的线
              axisTick: { show: false }, //y轴的端点
              axisLine: { show: false }, //y轴的线
              data: labels,
            },
            {
              type: "category",
              inverse: true,
              axisTick: "none",
              axisLine: "none",
              show: true,
              axisLabel: {
                textStyle: {
                  color: function (value, index) {
                    if (index === 0) return "#FF3600";
                    if (index === 1) return "#FE8602";
                    if (index === 2) return "#EFC500";
                    if (index === 3) return "#7CFF00";
                    if (index === 4) return "#7CFF00";
                  },
                  fontSize: "12",
                },
                formatter: (value, index) => {
                  if (allTime.length > 0) {
                    return value + "/" + allTime[index].allNum;
                  } else {
                    return value;
                  }
                },
              },
              data: values,
            },
          ],
          series: [
            {
              name: "数据内框",
              type: "bar",
              itemStyle: {
                normal: {
                  barBorderRadius: 30,
                  color: echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    {
                      offset: 0,
                      color: "rgba(2, 167, 240, 1)",
                    },
                    {
                      offset: 1,
                      color: "rgba(0, 255, 255, 1)",
                    },
                  ]),
                },
              },
              barWidth: 11,
              data: values,
            },
            {
              name: "外框",
              type: "bar",
              itemStyle: {
                normal: {
                  borderColor: "rgba(115,255,254,1)",
                  borderWidth: 0.5,
                  barBorderRadius: 15,
                  color: "rgba(102, 102, 102,0)",
                },
              },
              barGap: "-100%",
              z: 0,
              barWidth: 11,
              data: maxArr,
            },
          ],
        };
        option && myChart.setOption(option);
      });
    },
    initTrafficDistribution() {
      let postData = {
        timeType: this.trafficDistributionTimeType,
        carType: this.carType,
        direction: this.driveTimeDirection,
        roadName: "all",
        roadFlag: 1,
      };
      getTimeDistribution(postData).then((res) => {
        var labels = [];
        var values = [];
        res.data.data.forEach((item) => {
          item.name = item.name.replace("出入口", "");
        });
        labels = res.data.data[1].x;
        values = res.data.data;

        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(
          document.getElementById("trafficDistributionStatic")
        );
        // 绘制图表
        var option = {
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow",
            }
          },
          grid: {
            top: "25%",
            right: "10px",
            left: "10px",
            bottom: "0",
            containLabel: true,
          },
          legend: {
            data: [],
            left: "35%",
            right: 0,
            icon: "circle",
            itemWidth: 8, // 设置宽度
            itemHeight: 4, // 设置高度
            itemGap: 1, // 设置间距
            itemStyle: {
              fontSize: 4,
            },
            textStyle: {
              //图例文字的样式
              color: "#000000",
              fontSize: 10,
            },
            y: "top",
          },
          xAxis: [
            {
              type: "category",
              data: labels,
              axisLine: {
                lineStyle: {
                  color: "rgba(255,255,255,0.12)",
                },
              },
              axisLabel: {
                margin: 10,
                color: "#e2e9ff",
                textStyle: {
                  fontSize: 10,
                  color: "#86B3B8",
                },
              },
            },
          ],
          yAxis: [
            {
              name: "个",
              minInterval: 1,
              axisLabel: {
                formatter: "{value}",
                color: "#86B3B8",
              },
              axisLine: {
                show: false,
                lineStyle: {
                  color: "rgba(0,242,152,.2)",
                },
              },
              splitLine: {
                lineStyle: {
                  color: "rgba(0,242,152,.2)",
                },
              },
            },
          ],
          series: [],
        };
        const colorList = ["#00f298", "#32fdf6", "#efc500", "#219efe"];
        if (values.length > 0) {
          for (const key in values) {
            option.legend.data.push(values[key].name);
            var color = Math.round(Math.random() * 10);
            option.series.push({
              type: "line",
              name: values[key].name,
              smooth: true,
              data: values[key].y,
              barWidth: "4px",
              symbolSize: 5,
              symbol: "circle",
              itemStyle: {
                normal: {
                  color: colorList[key],
                },
              },
            });
          }
        }
        option && myChart.setOption(option);
      });
    },
    initMainLoad() {
      let postData = {
        dataTime: parseTime(new Date(), "{y}{m}{d}"),
        carType: this.carType,
      };
      getMainRoadRank(postData).then((res) => {
        var labels = [];
        var values = [];
        var allTime = [];
        var maxArr = [];
        res.data.data.forEach((item) => {
          labels.push(item.roadName.slice(0, 4));
          values.push(item.num);
          allTime.push(item);
        });

        var eData = values;
        var cData = [...values].map((value) => {
          return parseInt(value);
        });
        if (values.length !== 0) {
          maxArr = [];
          let max = Math.max(...cData);
          values.forEach(() => {
            maxArr.push(max);
          });
        } else {
          this.maxArr = [];
        }

        var arr = [];
        var maxLen = 0;
        for (let index = 0; index < labels.length; index++) {
          arr.push(labels[index].length);
        }
        if (arr.length) {
          maxLen = Math.max(...arr);
        }

        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById("mainLoadStatic"));
        // 绘制图表
        var option = {
          animationDuration: 1500,
          grid: {
            left: "0%",
            right: "10px",
            bottom: "0%",
            top: "0%",
            containLabel: true,
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow",
            },
            formatter: "{b0}: {c0}",
          },
          xAxis: {
            show: false, //是否显示x轴
            type: "value",
          },
          yAxis: [
            {
              type: "category",
              inverse: true, //让y轴数据逆向
              triggerEvent: true, //开启监听点击事件
              offset: maxLen <= 3 ? 50 : 200,
              axisLabel: {
                show: true,
                margin: 20,
                textStyle: {
                  color: "#41FFEA", //y轴字体颜色
                  align: "left",
                },
                formatter: function (val, index) {
                  return "{" + (index + 1) + "|" + (index + 1) + " }  " + val;
                },
                //定义富文本标签
                rich: {
                  1: {
                    color: "#fff",
                    backgroundColor: "#FF3602",
                    padding: [1, 1, 2, 2],
                    fontSize: 12,
                    align: "right",
                    align: "center",
                    verticalAlign: "middle",
                  },
                  2: {
                    color: "#fff",
                    backgroundColor: "#EFC500",
                    padding: [1, 1, 2, 2],
                    fontSize: 12,
                    align: "center",
                    verticalAlign: "middle",
                  },
                  3: {
                    color: "#fff",
                    backgroundColor: "#7DFF00",
                    padding: [1, 1, 2, 2],
                    fontSize: 12,
                    align: "center",
                    verticalAlign: "middle",
                  },
                  4: {
                    color: "#fff",
                    backgroundColor: "#7CFF00",
                    padding: [1, 1, 2, 2],
                    fontSize: 12,
                    align: "center",
                    verticalAlign: "middle",
                  },
                  5: {
                    color: "#fff",
                    backgroundColor: "#7CFF00",
                    padding: [1, 1, 2, 2],
                    fontSize: 12,
                    align: "center",
                    verticalAlign: "middle",
                  },
                  lg: {
                    fontWeight: "bold",
                    fontSize: 12, //字体默认12
                    color: "#08C",
                    padding: [0, 5, 0, 0],
                  },
                  title: {
                    color: "#86B3B8",
                    fontWeight: "lighter",
                  },
                },
              },
              splitLine: { show: false }, //横向的线
              axisTick: { show: false }, //y轴的端点
              axisLine: { show: false }, //y轴的线
              data: labels,
            },
            {
              type: "category",
              inverse: true,
              axisTick: "none",
              axisLine: "none",
              show: true,
              axisLabel: {
                textStyle: {
                  color: function (value, index) {
                    if (index === 0) return "#FF3600";
                    if (index === 1) return "#EFC500";
                    if (index === 2) return "#7DFF00";
                    if (index === 3) return "#7DFF00";
                    if (index === 4) return "#7DFF00";
                  },
                  fontSize: "12",
                },
                formatter: (value, index) => {
                  if (allTime.length > 0) {
                    return value + "/" + allTime[index].allNum;
                  } else {
                    return value;
                  }
                },
              },
              data: eData,
            },
          ],
          series: [
            {
              name: "数据内框",
              type: "bar",
              itemStyle: {
                normal: {
                  barBorderRadius: 30,
                  color: echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    {
                      offset: 0,
                      color: "rgba(71,181,255,0.6)",
                    },
                    {
                      offset: 1,
                      color: "rgba(65,255,234,0.7)",
                    },
                  ]),
                },
              },
              barWidth: 11,
              data: cData,
            },
            {
              name: "外框",
              type: "bar",
              itemStyle: {
                normal: {
                  borderColor: "rgba(115,255,254,1)",
                  borderWidth: 0.5,
                  barBorderRadius: 15,
                  color: "rgba(102, 102, 102,0)",
                },
              },
              barGap: "-100%",
              z: 0,
              barWidth: 11,
              data: maxArr,
            },
          ],
        };

        option && myChart.setOption(option);
      });
    },
    initLoadSection() {
      let postData = {
        timeType: this.monitorTimeType,
        carType: this.carType,
        direction: 2,
        roadName: "all",
        roadFlag: 0,
      };
      getTimeDistribution(postData).then((res) => {
        var labels = [];
        var values = [];
        labels = res.data.data[0].x;
        values = res.data.data;
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(
          document.getElementById("loadSectionStatic")
        );
        // 绘制图表
        var option = {
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow",
              shadowStyle: {
                color: echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(255,255,255,.08)", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgba(29,235,255,.08)", // 100% 处的颜色
                    },
                  ],
                  false
                ),
              },
            },
          },
          grid: {
            top: "25%",
            right: "10px",
            left: "10px",
            bottom: "0",
            containLabel: true,
          },
          legend: {
            data: [],
            left: "right",
            right: 0,
            icon: "circle",
            top: 12,
            bottom: 8,
            itemWidth: 8, // 设置宽度
            itemHeight: 6, // 设置高度
            itemGap: 2, // 设置间距
            itemStyle: {
              fontSize: 4,
            },
            textStyle: {
              //图例文字的样式
              color: "#000",
              fontSize: 10,
            },
            // y:"top"
          },
          xAxis: [
            {
              type: "category",
              data: labels,
              axisLine: {
                lineStyle: {
                  color: "rgba(255,255,255,0.12)",
                },
              },
              axisLabel: {
                margin: 10,
                interval: "auto",
                color: "#e2e9ff",
                textStyle: {
                  fontSize: 10,
                  color: "#86B3B8",
                },
              },
            },
          ],
          yAxis: [
            {
              name: "个",
              minInterval: 1,
              splitNumber: 3,

              axisLabel: {
                formatter: (val) => {
                  if (val === 0) {
                    return "个";
                  } else {
                    return val;
                  }
                },

                color: "#86B3B8",
              },
              axisLine: {
                show: false,
                lineStyle: {
                  color: "rgba(0,242,152,.2)",
                },
              },
              splitLine: {
                lineStyle: {
                  color: "rgba(0,242,152,.2)",
                },
              },
            },
          ],
          series: [],
        };
        const colorList = ["#00f298", "#32fdf6", "#efc500", "#219efe"];
        if (values.length > 0) {
          for (const key in values) {
            option.legend.data.push(values[key].name); //图例数组 名字需和series的name相同
            var color = Math.round(Math.random() * 10);
            option.series.push({
              type: "line",
              name: values[key].name,
              smooth: true, //是否平滑
              data: values[key].y,
              smooth: "true",
              symbol: "circle",
              symbolSize: 5,
              itemStyle: {
                normal: {
                  color: colorList[key],
                },
              },
            });
          }
        }
        option && myChart.setOption(option);
      });
    },
  },
};
</script>
<style scoped lang="scss">
* {
  box-sizing: border-box;
}

@mixin head() {
  color: #333333;
  font-weight: 700;
  font-size: 24px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;
  .left {
      display: flex;
      align-items: center;
      .blueLine {
        width: 8px;
        height: 34px;
        background-color: #005bc9;
        border-radius: 10px;
        margin-right: 5px;
        box-shadow: 5px 5px 5px rgb(170 170 170 / 53%);
      }
    }
}

.dumpTruck {
  position: relative;
  width: 100%;
  height: 100%;
  .dpheader {
    width: 100%;
    height: 100px;
    background-color: #ededed;
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 30px;
    color: #4a70de;
    padding-left: 20px;
    span {
      &:nth-of-type(1) {
        cursor: pointer;
      }
    }
    img {
      &:nth-of-type(1) {
        width: 27px;
        height: auto;
        margin-right: 10px;
      }
      &:nth-of-type(2) {
        width: 16px;
        height: auto;
        margin: 0 15px 0 10px;
      }
    }
  }
  .dpContent {
    position: absolute;
    top: 100px;
    width: 100%;
    bottom: 0;
    overflow-y: scroll;
    padding-bottom: 50px;
    .dpBlock {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 25px 100px;
      .dpItem {
        width: 806px;
        height: 789px;
        background-color: #ffffff;
        border-radius: 10px;
        position: relative;
        padding: 0 20px;
        .trafficStatistics {
          position: relative;
          width: 100%;
          height: 280px;
          background-color: #ffffff;
          color: #333333;
          .header {
            @include head();
          }
          .center {
            display: flex;
            align-items: center;
            justify-content: space-around;
            height: 200;
            text-align: center;
            font-weight: 600;
            font-size: 36px;
            color: #02a7f0;
            .item {
              div {
                &:nth-of-type(2) {
                  font-weight: 300;
                  font-size: 20px;
                  color: #333333;
                }
              }
            }
          }
          img {
            width: 90px;
            height: auto;
          }
        }
        .underline {
          width: 100%;
          border: 1px solid #e2e2e2;
        }
        .trafficRanking {
          position: relative;
          width: 100%;
          height: 250px;
          background-color: #ffffff;
          color: #333333;
          .header {
            @include head();
          }
          .center {
            width: 100%;
            height: 150px;
            #trafficRankingStatic {
              width: 100%;
              height: 100%;
            }
          }
        }
        .mainLoad {
          position: relative;
          width: 100%;
          height: 250px;
          background-color: #ffffff;
          color: #333333;
          .header {
            @include head();
          }
          .center {
            width: 100%;
            height: 150px;
            #mainLoadStatic {
              width: 100%;
              height: 100%;
            }
          }
        }
        .trafficDistribution {
          position: relative;
          width: 100%;
          height: 394px;
          background-color: #ffffff;
          color: #333333;
          .header {
            @include head();
          }
          .subHeader {
            height: 80px;
          }
          .center {
            width: 100%;
            height: 234px;
            #trafficDistributionStatic {
              width: 100%;
              height: 100%;
            }
          }
        }
        .loadSection {
          position: relative;
          width: 100%;
          height: 394px;
          background-color: #ffffff;
          color: #333333;
          .header {
            @include head();
          }
          .subHeader {
            height: 80px;
          }
          .center {
            width: 100%;
            height: 234px;
            #loadSectionStatic {
              width: 100%;
              height: 100%;
            }
          }
        }
        
      }
    }
  }
}
</style>