<template>
  <div class="govern">
    <div class="dpheader">
      <img src="@/assets/images/common/u2428.png" alt="" />
      <span @click="goBack">城市大脑运行监测</span>
      <img src="@/assets/images/common/u2426.png" alt="" />
      <span>{{ title }}</span>
    </div>
    <div class="dpContent">
      <div class="dpBlock">
        <div class="dpItem overallBusiness">
          <div class="header">
            <div class="left">
              <span class="blueLine"></span>
              <span>总体业务量统计</span>
            </div>
            <date-picker
              :target="'overallBusinessTimeType'"
              :initValue="overallBusinessTimeType"
              @datePickerClick="datePickerClick"
            ></date-picker>
          </div>
          <div class="underline"></div>
          <div class="center">
            <div id="overallBusinessStatic"></div>
          </div>
        </div>
        <div class="dpItem">
          <div class="header">
            <div class="left">
              <span class="blueLine"></span>
              <span>一体机统计</span>
            </div>
          </div>
          <div class="underline"></div>
          <div class="center">
            <div id="ytj" style="height: 100%; width: 100%"></div>
          </div>
        </div>
        <div class="dpItem long">
          <div class="header">
            <div class="left">
              <span class="blueLine"></span>
              <span>叫号业务量统计</span>
            </div>
            <date-picker
              :target="'overallBusincalling'"
              :initValue="overallBusincalling"
              @datePickerClick="datePickerClick"
            ></date-picker>
          </div>
          <div class="underline"></div>
          <div class="center">
            <div
              id="busincallingStatic"
              style="height: 100%; width: 100%"
            ></div>
          </div>
        </div>
        <div class="dpItem">
          <div class="header">
            <div class="left">
              <span class="blueLine"></span>
              <span>业务来源业务量统计</span>
            </div>
            <date-picker
              :target="'businessSourceTimeType'"
              :initValue="businessSourceTimeType"
              @datePickerClick="datePickerClick"
            ></date-picker>
          </div>
          <div class="underline"></div>
          <div class="center">
            <div id="businessSourceStatic"></div>
          </div>
        </div>
        <div class="dpItem">
          <div class="header">
            <div class="left">
              <span class="blueLine"></span>
              <span>12345热线业务量统计</span>
            </div>
            <div class="selectBlock">
              <select @change="selectTimeChange">
                <option>第一季度</option>
                <option>第二季度</option>
                <option>第三季度</option>
                <option>第四季度</option>
              </select>
            </div>
          </div>
          <div class="underline"></div>
          <div class="center hotLine">
            <div class="hotItem">
              <img src="@/assets/images/u2811.svg" alt="" />
              <p>{{ AlloneList[0] }}</p>
              <p>收件量</p>
            </div>
            <div class="columnLine"></div>
            <div class="hotItem">
              <img src="@/assets/images/u2812.svg" alt="" />
              <p>{{ AlloneList[1] }}</p>
              <p>已办结</p>
            </div>
            <div class="columnLine"></div>
            <div class="hotItem">
              <img src="@/assets/images/u2813.svg" alt="" />
              <p>{{ AlloneList[2] }}%</p>
              <p>办结率</p>
            </div>
          </div>
        </div>
        <div class="dpItem long">
          <div class="header">
            <div class="left">
              <span class="blueLine"></span>
              <span>考核指标统计</span>
            </div>
          </div>
          <div class="underline"></div>
          <div class="center assessmentStatistics">
            <div class="assessmentStatisticsItem">
              <img src="@/assets/images/u2817.svg" alt="" />
              <p>{{ assessmentStatistics.negativeCommentPercent }}</p>
              <p>差评率</p>
            </div>
            <div class="columnLine"></div>
            <div class="assessmentStatisticsItem">
              <img src="@/assets/images/u2818.svg" alt="" />
              <p>{{ assessmentStatistics.appraiseCoveragePercent }}</p>
              <p>好差覆盖率</p>
            </div>
            <div class="columnLine"></div>
            <div class="assessmentStatisticsItem">
              <img src="@/assets/images/u2819.svg" alt="" />
              <p>{{ assessmentStatistics.fastApprove }}</p>
              <p>秒批业务量</p>
            </div>
            <div class="columnLine"></div>
            <div class="assessmentStatisticsItem">
              <img src="@/assets/images/u2820.svg" alt="" />
              <p>{{ assessmentStatistics.fastApprovePercent }}</p>
              <p>秒批占比</p>
            </div>
            <div class="columnLine"></div>
            <div class="assessmentStatisticsItem">
              <img src="@/assets/images/u2821.svg" alt="" />
              <p>{{ assessmentStatistics.businessManage }}</p>
              <p>即办件业务量</p>
            </div>
            <div class="columnLine"></div>
            <div class="assessmentStatisticsItem">
              <img src="@/assets/images/u2822.svg" alt="" />
              <p>{{ assessmentStatistics.businessManagePercent }}</p>
              <p>即办件占比</p>
            </div>
          </div>
        </div>
        <div class="dpItem">
          <div class="header">
            <div class="left">
              <span class="blueLine"></span>
              <span>人才引进统计</span>
            </div>
          </div>
          <div class="underline"></div>
          <div class="center talentIntroduction">
            <div class="subTitle">
              <span>人才引进总数</span>&nbsp;&nbsp;<span>68</span>
            </div>
            <div class="mainImport">
              <div class="governImport">
                <div id="governImportStatic"></div>
                <div>政府机关人才引进占比</div>
              </div>
              <div class="businessImport">
                <div id="businessImportStatic"></div>
                <div>企业人才引进占比</div>
              </div>
            </div>
          </div>
        </div>
        <div class="dpItem">
          <div class="header">
            <div class="left">
              <span class="blueLine"></span>
              <span>行政服务大厅统计</span>
            </div>
          </div>
          <div class="underline"></div>
          <div class="center hallStatistics">
            <div class="hallItem">
              <img src="@/assets/images/u2814.svg" alt="" />
              <p>1</p>
              <p>区大厅数量</p>
            </div>
            <div class="columnLine"></div>
            <div class="hallItem">
              <img src="@/assets/images/u2815.svg" alt="" />
              <p>3</p>
              <p>办事处大厅数量</p>
            </div>
            <div class="columnLine"></div>
            <div class="hallItem">
              <img src="@/assets/images/u2816.png" alt="" />
              <p>25</p>
              <p>社区大厅数量</p>
            </div>
          </div>
        </div>
        <div class="dpItem long">
          <div class="header">
            <div class="left">
              <span class="blueLine"></span>
              <span>个人生命周期业务量统计</span>
            </div>
            <date-picker
              :target="'personalLifeType'"
              :initValue="personalLifeType"
              @datePickerClick="datePickerClick"
            ></date-picker>
          </div>
          <div class="underline"></div>
          <div class="center personalLife">
            <div class="personalLifeItem item1">
              <p>{{personalLife.education}}</p>
              <p>入学</p>
            </div>
            <div class="personalLifeItem item2">
              <p>{{personalLife.work}}</p>
              <p>就业</p>
            </div>
            <div class="personalLifeItem item3">
              <p>{{personalLife.marry}}</p>
              <p>婚育</p>
            </div>
            <div class="personalLifeItem item4">
              <p>{{personalLife.entrepreneurship}}</p>
              <p>创业</p>
            </div>
            <div class="personalLifeItem item5">
              <p>{{personalLife.unemployment}}</p>
              <p>失业</p>
            </div>
            <div class="personalLifeItem item6">
              <p>{{personalLife.home}}</p>
              <p>住房</p>
            </div>
            <div class="personalLifeItem item7">
              <p>{{personalLife.retire}}</p>
              <p>退休</p>
            </div>
            <div class="personalLifeItem item8">
              <p>{{personalLife.funeral}}</p>
              <p>后事</p>
            </div>
            <div class="personalLifeItem item9">
              <p>{{personalLife.fullLife}}</p>
              <p>全生命阶段</p>
            </div>
            <img class="middleLine" src="@/assets/images/u3103.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import * as echarts from "echarts";
import { getoverall } from "@/api/service";
import { getsection, getsource, gettarget, getpersonage } from "@/api/gov";
import { getbusinessType } from "@/api/citynew";
import { filterDate, subStringFormatter } from "@/utils/echartsUtils";
import {
  getbusinranking,
  getbusingood,
  getbusinOvertime,
  getbusinCompleted,
  getbusincalling,
} from "@/api/business";
import businData from "@/utils/businData.js";
export default {
  name: "governServices",
  data() {
    return {
      title: "政务服务",
      overallBusinessTimeType: "month",
      overallBusinessSum: 0,
      departBusinesTimeType: "year",
      businessSourceTimeType: "year",
      completeRankingTimeType: "year",
      overallBusincalling: "month",
      personalLifeType: "year",
      timeType: "month",
      barColors: ["#2FE3EA", "#2FEA9C"],
      rankingVal: "部门办结率",
      assessmentStatistics: {
        negativeCommentPercent: "",
        appraiseCoveragePercent: "",
        fastApprove: "",
        fastApprovePercent: "",
        businessManage: "",
        businessManagePercent: "",
      },
      personalLife: {
        education: 0,
        work: 0,
        marry: 0,
        home: 0,
        unemployment: 0,
        entrepreneurship: 0,
        retire: 0,
        funeral: 0,
        fullLife: 0
      },
      AlloneList: [],
    };
  },
  created() {
    this.initData();
  },
  mounted() {
    this.initOverallBusiness();
    // 一体机统计
    this.initBusinessType();
    // 叫号业务量统计
    this.initBusincalling();
    // this.initDepartBusines();
    this.initBusinessSource();
    // this.initDepartAnalysis();
    // this.initCompleteRanking(this.rankingVal);
    this.initTalentIntroduction();
    this.initGetpersonage();
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    yFormatter(val) {
      return val;
    },
    initData() {
      // 12345热线业务量统计
      this.AlloneList = businData.quarterOne.type6;
      // 考核指标统计
      gettarget().then((res) => {
        res.data.data && (this.assessmentStatistics = res.data.data);
        // this.assessmentStatistics =  {"fastApprove":4004,"fastApprovePercent":0.3105,"appraiseCoveragePercent":0.0312,"negativeCommentPercent":0.0,"businessManage":4189,"businessManagePercent":0.3248}
      });
    },
    initOverallBusiness() {
      let postData = {
        timeType: this.overallBusinessTimeType,
      };
      getoverall(postData).then((res) => {
        let { x, y, total } = res.data.data;
        this.overallBusinessSum = total;
        var labels = x;
        var values = y;
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(
          document.getElementById("overallBusinessStatic")
        );
        var barColors = ["#00ffff", "#02a7f0"];
        // 绘制图表
        var option = {
          tooltip: {
            confine: true,
            trigger: "axis",
            axisPointer: {
              type: "shadow",
            },
          },
          grid: {
            top: "20%",
            right: "10px",
            left: "10px",
            bottom: "6%",
            // height:'100px',
            containLabel: true,
          },
          legend: {
            show: false,
            data: [],
            left: "30%",
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
              color: "#86B3B8",
              fontSize: 10,
            },
            y: "top",
          },
          xAxis: [
            {
              type: "category",
              offset: 0,
              data: labels,
              axisLine: {
                lineStyle: {
                  color: "rgba(255,255,255,0.12)",
                },
              },
              axisLabel: {
                show: true,
                interval: 0,
                margin: 10,
                color: "#2FE3EA",
                textStyle: {
                  fontSize: 12,
                  color: "#86B3B8",
                },
                formatter: (value, index) => {
                  return filterDate(value, this.overallBusinessTimeType);
                },
              },
            },
          ],
          yAxis: [
            {
              minInterval: 1,
              axisLabel: {
                formatter: "{value}",
                color: "#86B3B8",
              },
              axisLine: {
                show: false,
                lineStyle: {
                  color: "rgba(44,242,152,.2)",
                },
              },
              splitLine: {
                lineStyle: {
                  color: "rgba(0,242,152,.2)",
                },
              },
            },
          ],
          dataZoom: [
            {
              show: true,
              height: 7,
              maxSpan: 50,
              xAxisIndex: [0],
              bottom: "1%",
              start: "100",
              end: 60,
              handleSize: "110%",
              handleStyle: {
                color: "#d3dee5",
              },
              textStyle: {
                color: "#fff",
              },
              borderColor: "#2FE3EA",
            },
            {
              type: "inside",
              show: true,
              heght: 15,
              start: 0,
              end: 35,
            },
          ],
          splitLine: {
            lineStyle: {
              color: "rgba(0,242,152,.2)",
            },
          },
          series: [
            {
              name: "总体业务量",
              type: "bar",
              barWidth: "30%",
              data: values,
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: barColors[0],
                    },
                    {
                      offset: 1,
                      color: barColors[1],
                    },
                  ]),
                },
              },
            },
          ],
        };
        option && myChart.setOption(option);
      });
    },
    datePickerClick(e) {
      if (e.target === "overallBusinessTimeType") {
        this.overallBusinessTimeType = e.type;
        this.initOverallBusiness();
      }
      if (e.target === "departBusinesTimeType") {
        this.departBusinesTimeType = e.type;
        this.initDepartBusines();
      }
      if (e.target === "businessSourceTimeType") {
        this.businessSourceTimeType = e.type;
        this.initBusinessSource();
      }
      if (e.target === "completeRankingTimeType") {
        this.completeRankingTimeType = e.type;
        this.initCompleteRanking();
      }
      if (e.target === "overallBusincalling") {
        this.overallBusincalling = e.type;
        this.initBusincalling();
      }
      if (e.target === "personalLifeType") {
        this.personalLifeType = e.type;
        this.initGetpersonage();
      }
    },
    getTotal(arr) {
      return arr.length ? arr.reduce((acc, val) => (acc += val)) : 0;
    },
    // 一体机统计
    initBusinessType() {
      getbusinessType().then((res) => {
        let allList = res.data.data.commonResult;
        var values = [];
        var labels = [];
        allList.forEach((item) => {
          labels.push(item.commonName);
          values.push(item.num);
        });
        var beachSum = this.getTotal(values);
        var subtext = "总数:";
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById("ytj"));
        // 绘制图表
        var option = {
          //  backgroundColor: "#0f375f",
          title: {
            subtext: `${beachSum}个`,
            text: subtext,
            left: "34%",
            top: "35%",
            itemGap: 6,
            textAlign: "center",
            textStyle: {
              fontSize: 12,
              color: "#86B3B8",
            },
            subtextStyle: {
              fontSize: 12,
              color: "#86B3B8",
            },
          },
          legend: {
            top: "top",
            left: "70%",
            data: labels,
            textStyle: {
              color: "#000000",
              fontSize: 12,
            },
          },
          tooltip: {
            trigger: "item",
            confine: true,
          },
          series: [
            {
              name: "统计分析",
              type: "pie",
              radius: ["50%", "85%"],
              center: ["20%", "50%"],
              top: "0%",
              left: "20%",
              right: "0%",
              bottom: "0",
              label: {
                show: false,
              },
              labelLine: {
                show: false,
              },
              data: [
                {
                  value: values[1],
                  name: "办理",
                  itemStyle: {
                    color: "rgba(44,158,253,1)",
                    borderWidth: 3,
                  },
                },
                {
                  value: values[3],
                  name: "预约",
                  itemStyle: {
                    color: "#9F29FE",
                    borderWidth: 3,
                  },
                },
                {
                  value: values[2],
                  name: "打印",
                  itemStyle: {
                    color: "rgba(0,244,149,1)",
                    borderWidth: 3,
                  },
                },
                {
                  value: values[0],
                  name: "查询",
                  itemStyle: {
                    color: "rgba(50,253,246,1)",
                    borderWidth: 3,
                  },
                },
              ],
            },
          ],
        };
        option && myChart.setOption(option);
      });
    },
    // 叫号业务量统计
    initBusincalling() {
      let postData = {
        timeType: this.overallBusincalling,
      };
      getbusincalling(postData).then((res) => {
        var labels = [];
        var values = [];
        res.data.data.forEach((item) => {
          labels.push(item.commonName);
          values.push(item.num);
        });

        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(
          document.getElementById("busincallingStatic")
        );
        var barColors = ["#00ffff", "#02a7f0"];
        // 绘制图表
        var option = {
          animationDuration: 1500,
          grid: {
            right: "10px",
            left: "10px",
            bottom: "0%",
            top: "8%",
            // height:"88px",
            containLabel: true,
          },
          tooltip: {
            formatter: "{b0}: {c0}个",
            confine: true,
          },
          xAxis: {
            type: "category",
            data: labels,
            axisTick: "none",
            axisLine: {
              show: true,
            },
            axisLabel: {
              interval: 0,
              margin: 10,
              color: "#e2e9ff",
              textStyle: {
                fontSize: 12,
                color: "#86B3B8",
              },
              formatter: subStringFormatter,
            },
          },
          yAxis: [
            {
              name: "个",
              title: "个",
              minInterval: 1,
              type: "value",
              axisLabel: {
                formatter: this.yFormatter,
                color: "#86B3B8",
              },
              axisLine: {
                show: false,
              },
              splitLine: {
                lineStyle: {
                  color: "rgba(0,242,152,.2)",
                },
              },
            },
          ],
          series: [
            {
              data: values,
              type: "bar",
              barWidth: 24,
              itemStyle: {
                normal: {
                  color: echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: barColors[0],
                    },
                    {
                      offset: 1,
                      color: barColors[1],
                    },
                  ]),
                },
              },
            },
          ],
        };
        option && myChart.setOption(option);
      });
    },
    //
    initBusinessSource() {
      let postData = {
        timeType: this.businessSourceTimeType,
      };
      getsource(postData).then((res) => {
        var labels = [];
        var list = [];
        var colors = ["#62d8d8", "#9bc03f", "#f2d468", "#e86562", "#25b371"];
        if (res.data.data.length > 0) {
          res.data.data.forEach((item, index) => {
            labels.push(item.commonName);
            list.push({
              name: item.commonName,
              value: item.num,
              itemStyle: {
                color: colors[index],
              },
            });
          });
        }

        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(
          document.getElementById("businessSourceStatic")
        );
        var barColors = ["#ec808d", "#ff5959"];
        // 绘制图表
        var option = {
          tooltip: {
            trigger: "item",
          },
          legend: {
            right: "-10px",
            orient: "vertical",
            left: "right",
          },
          series: [
            {
              name: "Access From",
              type: "pie",
              radius: "80%",
              data: list,
              right: "25%",
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: "rgba(0, 0, 0, 0.5)",
                },
              },
            },
          ],
        };

        option && myChart.setOption(option);
      });
    },
    selectTimeChange(e) {
      if (e.target.selectedIndex == 0) {
        this.AlloneList = businData.quarterOne.type6;
      }
      if (e.target.selectedIndex == 1) {
        this.AlloneList = businData.quarterTwo.type6;
      }
      if (e.target.selectedIndex == 2) {
        this.AlloneList = businData.quarterThree.type6;
      }
      if (e.target.selectedIndex == 3) {
        this.AlloneList = businData.quarterFour.type6;
      }
    },
    // 人才引进
    initTalentIntroduction() {
      var data = [
        { value: 2.8, id: "governImportStatic" },
        { value: 97.2, id: "businessImportStatic" },
      ];
      data.forEach((item) => {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById(item.id));
        // 绘制图表
        var option = {
          series: [
            {
              type: "gauge",
              radius: "100%",
              axisLine: {
                lineStyle: {
                  width: 10,
                  color: [
                    [0.3, "#67e0e3"],
                    [0.7, "#37a2da"],
                    [1, "#fd666d"],
                  ],
                },
              },
              pointer: {
                itemStyle: {
                  color: "auto",
                },
              },
              axisTick: {
                distance: -5,
                length: 5,
                lineStyle: {
                  color: "#fff",
                  width: 1,
                },
              },
              splitLine: {
                distance: -5,
                length: 5,
                lineStyle: {
                  color: "#fff",
                  width: 4,
                },
              },
              axisLabel: {
                color: "auto",
                distance: 13,
                fontSize: 7,
              },
              detail: {
                valueAnimation: true,
                formatter: "{value}%",
                color: "auto",
                fontSize: 10,
              },
              data: [
                {
                  value: item.value,
                },
              ],
            },
          ],
        };
        option && myChart.setOption(option);
      });
    },
    // 个人生命周期业务量统计
    initGetpersonage() {
      let postData = {
        timeType: this.personalLifeType,
      };
      getpersonage(postData).then((res) => {
        if (res.data.data) {
          res.data.data.forEach(item => {
            if (item.commonName == '入学') {
                this.personalLife.education = item.num;
            }
            if (item.commonName == '就业') {
                this.personalLife.work = item.num;
            }
            if (item.commonName == '婚育') {
                this.personalLife.marry = item.num;
            }
            if (item.commonName == '住房') {
                this.personalLife.home = item.num;
            }
            if (item.commonName == '失业') {
                this.personalLife.unemployment = item.num;
            }
            if (item.commonName == '创业') {
                this.personalLife.entrepreneurship = item.num;
            }
            if (item.commonName == '退休') {
                this.personalLife.retire = item.num;
            }
            if (item.commonName == '后事') {
                this.personalLife.funeral = item.num;
            }
            if (item.commonName == '全生命阶段') {
                this.personalLife.fullLife = item.num;
            }
          })
        }
      });
    },
  },
};
</script>
<style scoped lang="scss">
* {
  box-sizing: border-box;
}
p {
  margin: 0;
}

@mixin head() {
  color: #333333;
  font-weight: 700;
  font-size: 24px;
  height: 60px;
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

.govern {
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
      flex-wrap: wrap;
      .dpItem {
        width: 469px;
        height: 243px;
        background-color: #ffffff;
        border-radius: 10px;
        position: relative;
        padding: 0 20px;
        margin-bottom: 30px;
        &.long {
          width: 714px;
        }
        .header {
          @include head();
          .selectBlock {
            select {
              padding: 0 3px;
              border: 1px solid #02a7f0;
              outline-color: #02a7f0;
            }
          }
        }
        .underline {
          width: 100%;
          border: 1px solid #e2e2e2;
        }
        .center {
          width: 100%;
          height: 170px;
          #overallBusinessStatic {
            width: 100%;
            height: 100%;
          }
          #businessSourceStatic {
            width: 100%;
            height: 100%;
          }
          &.hotLine,
          &.assessmentStatistics,
          &.hallStatistics {
            display: flex;
            align-items: center;
            justify-content: space-between;
            .hotItem,
            .assessmentStatisticsItem,
            .hallItem {
              flex: 1;
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              align-items: center;
              p {
                &:nth-of-type(1) {
                  font-weight: 700;
                  font-size: 28px;
                  color: #3c4047;
                }
                &:nth-of-type(2) {
                  font-weight: 400;
                  font-size: 18px;
                  color: #333333;
                }
              }
            }
            img {
              width: 56px;
              height: auto;
            }
          }
          &.talentIntroduction {
            .subTitle {
              width: 100%;
              height: 30px;
              font-weight: 400;
              font-size: 20px;
              text-align: center;
              span {
                &:nth-of-type(2) {
                  font-weight: 700;
                  font-size: 28px;
                  color: #3c4047;
                }
              }
            }
            .mainImport {
              width: 100%;
              height: 130px;
              display: flex;
              align-items: center;
              justify-content: space-around;
              font-weight: 400;
              font-size: 20px;
              & > div {
                flex: 1;
                height: 100%;
                width: 50%;
                text-align: center;
                font-weight: 400;
                font-size: 20px;
              }
              #governImportStatic {
                height: 110px;
                width: 100%;
              }
              #businessImportStatic {
                height: 110px;
                width: 100%;
              }
            }
          }
          &.personalLife {
            position: relative;
            .middleLine {
              width: 100%;
              height: auto;
              position: absolute;
              top: 70px;
              left: 0;
              margin-top: -18px;
            }
            .personalLifeItem {
                position: absolute;
                text-align: center;
                white-space: nowrap;
                p {
                  font-weight: 700;
                  font-size: 28px;
                  line-height: 30px;
                  color: #3c4047;
                  &:nth-of-type(2) {
                    font-size: 20px;
                    color: #333333;
                    line-height: 25px;
                  }
                }
                img {
                  width: 25px;
                  height: auto;
                }
                &.item1 {
                  top: calc(50% + 18px);
                  left: calc(12% * 0 - 10px);
                }
                &.item2 {
                  top: 0;
                  left: calc(12% * 1 -  10px);
                }
                &.item3 {
                  top: calc(50% + 18px);
                  left: calc(12% * 2 -  10px);
                }
                &.item4 {
                  top: 0;
                  left: calc(12% * 3 -  10px);
                }
                &.item5 {
                  top: calc(50% + 18px);
                  left: calc(12% * 4 -  10px);
                }
                &.item6 {
                  top: 0;
                  left: calc(12% * 5 -  25px);
                }
                &.item7{
                  top: calc(50% + 18px);
                  left: calc(12% * 6 -  25px);
                }
                &.item8{
                  top: 0;
                  left: calc(12% * 7 -  25px);
                }
                &.item9{
                  top: calc(50% + 18px);
                  left: calc(12% * 8 -  70px);
                }
            }
          }
          .columnLine {
            height: 80%;
            border: 1px solid #e2e2e2;
          }
        }
        #governImportStatic1 {
          width: 50%;
          height: 120px;
        }
      }
    }
  }
}
</style>