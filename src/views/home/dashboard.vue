<template>
  <div class="dashboard">
    <div class="dpheader">
      <span class="line"></span>
      <span>城市大脑运行监测</span>
    </div>
    <div class="dpContent">
      <div class="base1">
        <div class="dpItem mldp">
          <div class="header">
            <span>美丽大鹏</span>
            <img src="@/assets/images/home/u23.png" />
          </div>
          <div class="center">
            <div class="item">
              <img src="@/assets/images/home/u422.svg" />
              <p><span>370.4</span>亿元</p>
              <p>GDP</p>
            </div>
            <div class="lin"></div>
            <div class="item">
              <img src="@/assets/images/home/u697.svg" />
              <p><span>23.4</span>万元</p>
              <p>人均GDP</p>
            </div>
          </div>
          <div class="footer">
            <div><span>数据来源：</span><span>发展和财政局 </span></div>
            <div><span>统计频率：</span><span>年</span></div>
          </div>
        </div>
        <div class="dpItem zhdp">
          <div class="header">
            <span>智慧大鹏</span>
            <img src="@/assets/images/home/u23.png" />
          </div>
          <div class="center">
            <div>
              <p>55</p>
              <p>
                <img src="@/assets/images/home/u197.svg" />
                <span>系统数</span>
              </p>
            </div>
            <div>
              <p>15</p>
              <p>
                <img src="@/assets/images/home/u194.svg" />
                <span>在建数</span>
              </p>
            </div>
            <div>
              <p>25</p>
              <p>
                <img src="@/assets/images/home/u164.svg" />
                <span>已建数</span>
              </p>
            </div>
            <div>
              <p>15</p>
              <p>
                <img src="@/assets/images/home/u171.svg" />
                <span>审批数</span>
              </p>
            </div>
          </div>
          <div class="footer">
            <div><span>数据来源：</span><span>政务服务数据管理局 </span></div>
            <div><span>统计频率：</span><span>年</span></div>
          </div>
        </div>
        <div class="dpItem sjgx">
          <div class="header">
            <span>数据共享平台</span>
            <img src="@/assets/images/home/u23.png" />
          </div>
          <div class="center">
            <div>
              <p><span>52</span> <span>个</span></p>
              <p>
                <img src="@/assets/images/home/u444.svg" />
                <span>数据湖系统</span>
              </p>
            </div>
            <div>
              <p><span>19.2</span><span>亿</span></p>
              <p>
                <img src="@/assets/images/home/u445.svg" />
                <span>数据湖数据量</span>
              </p>
            </div>
            <div>
              <p><span>19</span><span>个</span></p>
              <p>
                <img src="@/assets/images/home/u446.svg" />
                <span>数据共享应用</span>
              </p>
            </div>
            <div>
              <p><span>16.4</span><span>亿</span></p>
              <p>
                <img src="@/assets/images/home/u447.svg" />
                <span>数据共享数据量</span>
              </p>
            </div>
          </div>
          <div class="footer">
            <div><span>数据来源：</span><span>政务服务数据管理局 </span></div>
            <div><span>统计频率：</span><span>天</span></div>
          </div>
        </div>
        <div class="dpItem lywh">
          <div class="header" @click="goDetail('lywh')">
            <span>旅游文化</span>
            <img src="@/assets/images/home/u23.png" />
          </div>
          <div class="center">
            <div class="item">
              <img src="@/assets/images/home/u714.svg" />
              <p><span>1394</span>万人次</p>
              <p>接待总人数</p>
            </div>
            <div class="lin"></div>
            <div class="item">
              <img src="@/assets/images/home/u713.svg" />
              <p><span>66.3</span>亿元</p>
              <p>旅游业总收入</p>
            </div>
          </div>
          <div class="footer">
            <div><span>数据来源：</span><span>文化广电旅游体育局 </span></div>
            <div><span>统计频率：</span><span>月</span></div>
          </div>
        </div>
        <div class="dpItem stzb">
          <div class="header">
            <span>生态指标</span>
            <img src="@/assets/images/home/u23.png" />
          </div>
          <div class="center">
            <div class="mcenter">
              <div>
                <img src="@/assets/images/home/u134.svg" />
                <p>空气质量</p>
              </div>
              <div>
                <span>25</span>
                <span>优</span>
              </div>
              <div>
                <p>无</p>
                <p>首要污染物</p>
              </div>
            </div>
            <div class="bcenter">
              <div class="item">
                <div>
                  <p>SO2</p>
                  <p>5ug/m³</p>
                </div>
                <div>
                  <p>PM2.5</p>
                  <p>13ug/m³</p>
                </div>
              </div>
              <div class="item">
                <div>
                  <p>PM10</p>
                  <p>25ug/m³</p>
                </div>
                <div>
                  <p>NO2</p>
                  <p>9ug/m³</p>
                </div>
              </div>
              <div class="item">
                <div>
                  <p>CO</p>
                  <p>0.5ug/m³</p>
                </div>
                <div>
                  <p>O2</p>
                  <p>76ug/m³</p>
                </div>
              </div>
            </div>
          </div>
          <div class="footer">
            <div>
              <span>数据来源：</span><span>市生态环境局大鹏管理局 </span>
            </div>
            <div><span>统计频率：</span><span>小</span></div>
          </div>
        </div>
        <div class="dpItem traffic">
          <div class="header" @click="goDetail('traffic')">
            <span>交通运行</span>
            <img src="@/assets/images/home/u23.png" />
          </div>
          <div class="center">
            <div class="mcenter">
              <img src="@/assets/images/home/u93.svg" alt="" />
              <p>通行量</p>
            </div>
            <div class="bcenter">
              <template v-for="item in traffic">
                <div class="item">
                  <p>
                    <span>{{ item.num }}</span
                    >辆
                  </p>
                  <p>{{ item.title }}</p>
                </div>
                <span class="lin"></span>
              </template>
            </div>
          </div>
          <div class="footer">
            <div><span>数据来源：</span><span>政务服务数据管理局 </span></div>
            <div><span>统计频率：</span><span>实时</span></div>
          </div>
        </div>
        <div class="dpItem dump">
          <div class="header" @click="goDetail('dumpTruck')">
            <span>泥头车</span>
            <img src="@/assets/images/home/u23.png" />
          </div>
          <div class="center">
            <div class="mcenter">
              <img src="@/assets/images/home/u395.png" alt="" />
              <p>泥头车</p>
            </div>
            <div class="bcenter">
              <div class="item">
                <p>
                  <span>{{ dump.sum }}</span
                  >辆
                </p>
                <p>当前总数</p>
              </div>
              <div class="lin"></div>
              <div class="item">
                <p>
                  <span>{{ dump.load }}</span>
                </p>
                <p>主要路段</p>
              </div>
            </div>
          </div>
          <div class="footer">
            <div><span>数据来源：</span><span>市交通运输局 </span></div>
            <div><span>统计频率：</span><span>实时</span></div>
          </div>
        </div>
        <div class="dpItem hazardous">
          <div class="header" @click="goDetail('hazardous')">
            <span>危化品车</span>
            <img src="@/assets/images/home/u23.png" />
          </div>
          <div class="center">
            <div class="mcenter">
              <img src="@/assets/images/home/u264.svg" alt="" />
              <p>危化品车</p>
            </div>
            <div class="bcenter">
              <div class="item">
                <p><span>{{hazardous.sum}}</span>辆</p>
                <p>当前总数</p>
              </div>
              <div class="lin"></div>
              <div class="item">
                <p><span>{{hazardous.load}}</span></p>
                <p>主要路段</p>
              </div>
            </div>
          </div>
          <div class="footer">
            <div><span>数据来源：</span><span>应急管理局 </span></div>
            <div><span>统计频率：</span><span>实时</span></div>
          </div>
        </div>
      </div>
      <div class="underline"></div>
      <div class="base2">
        <div class="dpItem xmtz">
          <div class="header">
            <span>重大项目投资</span>
            <img src="@/assets/images/home/u23.png" />
          </div>
          <div class="center">
            <div>
              <p></p>
              <p>
                <img src="@/assets/images/home/u523.svg" />
                <span>年度计划项目数</span>
              </p>
            </div>
            <div>
              <p></p>
              <p>
                <img src="@/assets/images/home/u517.svg" />
                <span>计划执行率</span>
              </p>
            </div>
            <div>
              <p></p>
              <p>
                <img src="@/assets/images/home/u524.svg" />
                <span>完成固投</span>
              </p>
            </div>
            <div>
              <p></p>
              <p>
                <img src="@/assets/images/home/u518.svg" />
                <span>发展和财政局</span>
              </p>
            </div>
          </div>
          <div class="footer">
            <div><span>数据来源：</span><span>发展和财政局 </span></div>
            <div><span>统计频率：</span><span>月</span></div>
          </div>
        </div>
        <div class="dpItem qzsq">
          <div class="header">
            <span>群众诉求服务</span>
            <img src="@/assets/images/home/u23.png" />
          </div>
          <div class="center">
            <div class="item">
              <div class="tcenter">政法系统光明模式</div>
              <div class="bcenter">
                <div>
                  <p>&nbsp;</p>
                  <p>受理数</p>
                </div>
                <span class="lin"></span>
                <div>
                  <p>&nbsp;</p>
                  <p>化解数</p>
                </div>
              </div>
            </div>
            <div class="lin"></div>
            <div class="item">
              <div class="tcenter">12345热线</div>
              <div class="bcenter">
                <div>
                  <p>&nbsp;</p>
                  <p>受理数</p>
                </div>
                <span class="lin"></span>
                <div>
                  <p>&nbsp;</p>
                  <p>办结数</p>
                </div>
              </div>
            </div>
          </div>
          <div class="footer">
            <div><span>数据来源：</span><span>政法办公室 </span></div>
            <div><span>统计频率：</span><span>年</span></div>
          </div>
        </div>
        <div class="dpItem wgxx">
          <div class="header">
            <span>网格信息</span>
            <img src="@/assets/images/home/u23.png" />
          </div>
          <div class="center">
            <div>
              <p></p>
              <p>
                <img src="@/assets/images/home/u147.svg" />
                <span>人口数量</span>
              </p>
            </div>
            <div>
              <p></p>
              <p>
                <img src="@/assets/images/home/u152.svg" />
                <span>房屋数量</span>
              </p>
            </div>
            <div>
              <p></p>
              <p>
                <img src="@/assets/images/home/u142.svg" />
                <span>法人数量</span>
              </p>
            </div>
            <div>
              <p></p>
              <p>
                <img src="@/assets/images/home/u155.svg" />
                <span>已处置事件</span>
              </p>
            </div>
          </div>
          <div class="footer">
            <div><span>数据来源：</span><span>政法办公室 </span></div>
            <div><span>统计频率：</span><span>天</span></div>
          </div>
        </div>
        <div class="dpItem zwfw">
          <div class="header" @click="goDetail('hazardousVehicle')">
            <span>政务服务</span>
            <img src="@/assets/images/home/u23.png" />
          </div>
          <div class="center">
            <div>
              <p>{{ govern.byyw }}&nbsp;</p>
              <p>
                <img src="@/assets/images/home/u424.svg" />
                <span>本月总体业务量</span>
              </p>
            </div>
            <div>
              <p>{{ govern.hp }}&nbsp;</p>
              <p>
                <img src="@/assets/images/home/u425.svg" />
                <span>好评率</span>
              </p>
            </div>
            <div>
              <p>{{ govern.fastApprovePercent }}&nbsp;</p>
              <p>
                <img src="@/assets/images/home/u426.svg" />
                <span>秒批业务占比</span>
              </p>
            </div>
            <div>
              <p>{{ govern.bnbj }}&nbsp;</p>
              <p>
                <img src="@/assets/images/home/u427.svg" />
                <span>本年办结率</span>
              </p>
            </div>
          </div>
          <div class="footer">
            <div><span>数据来源：</span><span>市政务服务数据管理局 </span></div>
            <div><span>统计频率：</span><span>小时</span></div>
          </div>
        </div>
      </div>
      <div class="underline"></div>
      <div class="base3">
        <div class="dpItem zhyj">
          <div class="header">
            <span>智慧应急</span>
            <img src="@/assets/images/home/u23.png" />
          </div>
          <div class="center">
            <div>
              <p>&nbsp;</p>
              <p>
                <img src="@/assets/images/home/u523.svg" />
                <span>重大危险源</span>
              </p>
            </div>
            <div>
              <p>&nbsp;</p>
              <p>
                <img src="@/assets/images/home/u517.svg" />
                <span>预警</span>
              </p>
            </div>
            <div>
              <p>&nbsp;</p>
              <p>
                <img src="@/assets/images/home/u524.svg" />
                <span>三防</span>
              </p>
            </div>
            <div>
              <p>&nbsp;</p>
              <p>
                <img src="@/assets/images/home/u518.svg" />
                <span>气象</span>
              </p>
            </div>
          </div>
          <div class="footer">
            <div><span>数据来源：</span><span>应急管理局 </span></div>
            <div><span>统计频率：</span><span>实时</span></div>
          </div>
        </div>
        <div class="dpItem zhjf">
          <div class="header">
            <span>智慧经服</span>
            <img src="@/assets/images/home/u23.png" />
          </div>
          <div class="center">
            <div class="title">
              <span>科技研发资金</span>
              <span>专利情况</span>
            </div>
            <div class="mcenter">
              <div>
                <div><span>投入</span><span>万元</span></div>
                <span class="lin"></span>
                <div><span>同比</span><span>%</span></div>
              </div>
              <span class="lin"></span>
              <div>
                <div><span>申请数</span><span>个</span></div>
                <span class="lin"></span>
                <div><span>同比</span><span>%</span></div>
              </div>
            </div>
          </div>
        </div>
        <div class="dpItem zhsw">
          <div class="header">
            <span>智慧水务</span>
            <img src="@/assets/images/home/u23.png" />
          </div>
          <div class="center">
            <div class="xy">
              <span>响应级别</span>
              <span>无</span>
            </div>
            <div class="mcenter">
              <div class="item">
                <div>水库水位</div>
                <div>
                  <p>监测点<span>个</span></p>
                  <p>超汛限<span>个</span></p>
                </div>
              </div>
              <div class="item">
                <div>河道水位</div>
                <div>
                  <p>监测点<span>个</span></p>
                  <p>超汛限<span>个</span></p>
                </div>
              </div>
              <div class="item">
                <div>潮位</div>
                <div>
                  <p>监测点<span>个</span></p>
                  <p>超汛限<span>个</span></p>
                </div>
              </div>
              <div class="item">
                <div>积涝</div>
                <div>
                  <p>监测点<span>个</span></p>
                  <p>超汛限<span>个</span></p>
                </div>
              </div>
            </div>
          </div>
          <div class="footer">
            <div><span>数据来源：</span><span>水务局 </span></div>
            <div><span>统计频率：</span><span>小时</span></div>
          </div>
        </div>
        <div class="dpItem zhzj">
          <div class="header">
            <span>智慧住建</span>
            <img src="@/assets/images/home/u23.png" />
          </div>
          <div class="center">
            <div class="mcenter">
              <div class="item">
                <p><span></span>个</p>
                <p><img src="@/assets/images/home/u805.svg" />项目总数</p>
              </div>
              <span class="lin"></span>
              <div class="item">
                <p><span></span>人</p>
                <p><img src="@/assets/images/home/u808.svg" />在场总人数</p>
              </div>
            </div>
            <div class="bcenter">
              <div>
                <p><span>个</span></p>
                <p><img src="@/assets/images/home/u816.svg" />深基坑</p>
              </div>
              <div>
                <p><span>个</span></p>
                <p><img src="@/assets/images/home/u817.svg" />暗挖工程</p>
              </div>
              <div>
                <p><span>个</span></p>
                <p><img src="@/assets/images/home/u818.svg" />起重机械</p>
              </div>
            </div>
          </div>
          <div class="footer">
            <div><span>数据来源：</span><span>市住房和建设局 </span></div>
            <div><span>统计频率：</span><span>天</span></div>
          </div>
        </div>
        <div class="dpItem zhyl">
          <div class="header">
            <span>智慧医疗</span>
            <img src="@/assets/images/home/u23.png" />
          </div>
          <div class="center">
            <div>
              <img src="@/assets/images/home/u905.svg" alt="" />
              <p>医疗收支差额</p>
            </div>
            <div class="lin"></div>
            <div>
              <img src="@/assets/images/home/u907.svg" alt="" />
              <p>参保人数</p>
            </div>
            <div class="lin"></div>
            <div>
              <img src="@/assets/images/home/u906.svg" alt="" />
              <p>基金累计结余</p>
            </div>
          </div>
          <div class="footer">
            <div><span>数据来源：</span><span>教育和卫生健康局 </span></div>
            <div><span>统计频率：</span><span>月</span></div>
          </div>
        </div>
        <div class="dpItem zhcg">
          <div class="header">
            <span>智慧城管</span>
            <img src="@/assets/images/home/u23.png" />
          </div>
          <div class="center">
            <div>
              <img src="@/assets/images/home/u539.svg" alt="" />
              <p>智慧城管</p>
              <p>万元</p>
              <p>城市维护费</p>
            </div>
            <span class="lin"></span>
            <div>
              <img src="@/assets/images/home/u540.svg" alt="" />
              <p>环卫指数</p>
              <p>%</p>
              <p>生活垃圾分类回收量</p>
            </div>
          </div>
          <div class="footer">
            <div><span>数据来源：</span><span>城市管理和综合执法局 </span></div>
            <div><span>统计频率：</span><span>月</span></div>
          </div>
        </div>
        <div class="dpItem sszt">
          <div class="header">
            <span>智慧城管</span>
            <img src="@/assets/images/home/u23.png" />
          </div>
          <div class="center">
            <div class="mcenter">
              <div class="caption">
                <span>
                  <img src="@/assets/images/home/u918.svg" alt="" />
                  <span>商事主体数</span>
                </span>
                <span>家</span>
              </div>
            </div>
            <div class="bcenter">
              <div>
                <p>家</p>
                <p>
                  <img src="@/assets/images/home/u923.svg" alt="" />
                  <span>企业数量</span>
                </p>
              </div>
              <span class="lin"></span>
              <div>
                <p>家</p>
                <p>
                  <img src="@/assets/images/home/u924.svg" alt="" />
                  <span>个体商户数量</span>
                </p>
              </div>
            </div>
          </div>
          <div class="footer">
            <div><span>数据来源：</span><span>市市场监督管理局 </span></div>
            <div><span>统计频率：</span><span>月</span></div>
          </div>
        </div>
        <div class="dpItem gis">
          <div class="header">
            <span>三维GIS</span>
            <img src="@/assets/images/home/u23.png" />
          </div>
          <div class="center">
            <div class="item">
              <img src="@/assets/images/home/u411.png" />
              <p>96</p>
              <p>地图服务</p>
            </div>
            <span class="lin"></span>
            <div class="item">
              <img src="@/assets/images/home/u412.png" />
              <p>253</p>
              <p>功能服务</p>
            </div>
            <span class="lin"></span>
            <div class="item">
              <img src="@/assets/images/home/u410.png" />
              <p>3</p>
              <p>已应用系统数</p>
            </div>
          </div>
          <div class="footer">
            <div>
              <span>数据来源：</span><span>市规资局及相关业务单位 </span>
            </div>
            <div><span>统计频率：</span><span>天</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  queryPieChart,
  getTrafficFlow,
  getMainRoadRank,
} from "@/api/dumpTruck";
import { parseTime } from "@/utils/util";
import { getoverall } from "@/api/service";
import { gettarget } from "@/api/gov";
import { getbusinranking } from "@/api/business";

export default {
  name: "home",
  data() {
    return {
      title: "专题场景",
      name: "home",
      timeType: "month",
      time2Type: "year",
      traffic: [],
      govern: {
        byyw: "",
        hp: "",
        fastApprovePercent: "",
        bnbj: "",
      },
      dump: {
        sum: "",
        load: "",
      },
      hazardous: {
        sum: "",
        load: "",
      },
    };
  },
  mounted() {
    console.log('dashboard')
    this.initTrafficOperation();
    // 泥头车
    this.initDumpTruck();
    this.initHazardousVehicle();
    this.initGovernService();
  },
  methods: {
    goDetail(type) {
      if (type == "traffic") {
        this.$router.push({ name: "traffic" });
      }
      if (type == "dumpTruck") {
        this.$router.push({ name: "dumpTruck" });
      }
      if (type == "hazardous") {
        this.$router.push({ name: "hazardous" });
      }
      if (type == "hazardousVehicle") {
        this.$router.push({ name: "governServices" });
      }
      if (type == "lywh") {
        this.$router.push({
          name: "iframe",
          query: {
            title: "旅游文化",
            url: "http://172.21.112.39:8090/datacard/index.html",
          },
        });
      }
    },
    initTrafficOperation() {
      queryPieChart({
        date: parseTime(new Date(), "{y}-{m}-{d}"),
        vehicleType: "all",
      }).then((res) => {
        if (res.data.data) {
          res.data.data.forEach((item) => {
            this.traffic.push({
              title: item.name,
              num: item.num,
            });
          });
        }
      });
    },
    initDumpTruck() {
      getTrafficFlow({ carType: "dumpTruck", timeType: "day" }).then((res) => {
        var { total } = res.data.data;
        if (!total) {
          total = 0;
        }
        this.dump.sum = total;
      });
      let postData = {
        dataTime: parseTime(new Date(), "{y}{m}{d}"),
        carType: "dumpTruck",
      };
      getMainRoadRank(postData).then((res) => {
        if (res.data.data.length > 0) {
          this.dump.load = res.data.data[0].roadName;
        }
      });
    },
    initHazardousVehicle() {
      getTrafficFlow({ carType: "dangerCar", timeType: "day" }).then((res) => {
        var { total } = res.data.data;
        if (!total) {
          total = 0;
        }
        this.hazardous.sum = total;
      });
      let postData = {
        dataTime: parseTime(new Date(), "{y}{m}{d}"),
        carType: "dangerCar",
      };
      getMainRoadRank(postData).then((res) => {
        if (res.data.data.length > 0) {
          this.hazardous.load = res.data.data[0].roadName;
        }
      });
    },
    initGovernService() {
            let self = this;
            getoverall({
                timeType: 'month'
            }).then(res => {
                if (res.data.data) {
                    let { total } = res.data.data;
                    self.govern.byyw = total;
                }
            });
            
            gettarget().then(res => {
                if (res.data.data) {
                    self.govern.fastApprovePercent = (res.data.data.fastApprovePercent * 100 ).toFixed(2)+ "%";
                    self.govern.hp = (1 - res.data.data.negativeCommentPercent) * 100 + "%";
                }
            });
            
            getbusinranking({
                timeType: 'year'
            }).then(res => {
                if (res.data.data.length > 0) {
                    var all_percent = 0;
                    res.data.data.forEach((item) => {
                        all_percent += item.percent
                    });
                    var per_percent = (all_percent  *100).toFixed(2) + '%';
                    self.govern.bnbj =  per_percent;
                }
            });
        },
  },
};
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

p {
  margin: 0;
}

$yellowHeader: #f2ba11;
$blueHeader: #3092ed;
$greenHeader: #23b471;
$pinkHeader: #6300bf;
$orangeHeader: #b7741b;
$deepBlueHeader: #0700bf;

@mixin head($bacgroundColor) {
  height: 45px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $bacgroundColor;
  font-size: 28px;
  font-weight: 700;
  position: relative;
  border-radius: 5px 5px 0 0;
  cursor: pointer;
  img {
    width: 34px;
    height: auto;
    position: absolute;
    right: 20px;
  }
}

@mixin footer() {
  height: 20px;
  font-weight: 400;
  font-size: 16px;
  color: #bcbcbc;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    &:nth-of-type(1) {
      margin-right: 20px;
    }
  }
}

.dashboard {
  position: relative;
  width: 100%;
  height: 100%;
  .dpheader {
    width: 100%;
    height: 100px;
    background-color: #ededed;
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 30px;
    color: rgb(51, 51, 51);
    padding-left: 20px;
    .line {
      width: 8px;
      height: 38px;
      background-color: rgba(74, 112, 222, 1);
      border-radius: 10px;
      margin-right: 10px;
      box-shadow: 0.15625rem 0.15625rem 0.15625rem rgb(170 170 170 / 53%);
    }
  }
  .dpContent {
    position: absolute;
    top: 100px;
    width: 100%;
    bottom: 0;
    overflow-y: scroll;
    padding: 0 40px;
    padding-bottom: 50px;
    .base1,
    .base2,
    .base3 {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .dpItem {
        width: 432px;
        height: 259px;
        background-color: #ffffff;
        border-radius: 10px;
        margin: 0 0 20px 0px;
        .footer {
          @include footer();
        }
        &.mldp {
          .header {
            @include head($yellowHeader);
          }
          .center {
            height: 180px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            div {
              text-align: center;
              p {
                margin: 0;
                white-space: nowrap;
                font-size: 20px;
                color: #9e9e9e;
                span {
                  font-size: 28px;
                  color: #3c4047;
                }
                &:nth-of-type(2) {
                  color: #333333;
                  margin-top: 5px;
                  font-weight: 700;
                  font-size: 22px;
                  text-align: center;
                }
              }
            }
            img {
              width: 72px;
              height: auto;
            }
            .lin {
              height: 80%;
              border: 1px dashed $yellowHeader;
            }
          }
        }
        &.zhdp {
          .header {
            @include head($blueHeader);
          }
          .center {
            height: 180px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            flex-wrap: wrap;
            div {
              width: 180px;
              height: 70px;
              margin-bottom: 5px;
              background-color: #e0ebf9;
              border: 1px dashed #4b6bc6;
              font-size: 20px;
              font-weight: 700;
              color: #333333;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              border-radius: 10px;
              p {
                margin: 0;
                &:nth-of-type(1) {
                  text-align: center;
                  font-weight: 400;
                  font-size: 28px;
                  color: #3c4047;
                }
                &:nth-of-type(2) {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  white-space: nowrap;
                  text-align: center;
                }
              }
              img {
                width: 25px;
                height: auto;
              }
            }
          }
        }
        &.sjgx {
          .header {
            @include head($greenHeader);
          }
          .center {
            height: 180px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            flex-wrap: wrap;
            div {
              width: 180px;
              height: 70px;
              margin-bottom: 5px;
              background-color: #e0f1e7;
              border: 1px dashed #4b6bc6;
              font-size: 20px;
              font-weight: 700;
              color: #333333;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              border-radius: 10px;
              p {
                margin: 0;
                &:nth-of-type(1) {
                  text-align: center;
                  font-weight: 400;
                  font-size: 28px;
                  color: #3c4047;
                  span {
                    &:nth-of-type(2) {
                      font-size: 20px;
                      color: #7f7f7f;
                    }
                  }
                }
                &:nth-of-type(2) {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  white-space: nowrap;
                  text-align: center;
                }
              }
              img {
                width: 25px;
                height: auto;
              }
            }
          }
        }
        &.lywh {
          .header {
            @include head($pinkHeader);
          }
          .center {
            height: 180px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            div {
              text-align: center;
              p {
                margin: 0;
                white-space: nowrap;
                font-size: 20px;
                color: #9e9e9e;
                span {
                  font-size: 28px;
                  color: #3c4047;
                }
                &:nth-of-type(2) {
                  color: #333333;
                  margin-top: 5px;
                  font-weight: 700;
                  font-size: 22px;
                  text-align: center;
                }
              }
            }
            img {
              width: 82px;
              height: auto;
            }
            .lin {
              height: 80%;
              border: 1px dashed #e9daf6;
            }
          }
        }
        &.stzb {
          .header {
            @include head($yellowHeader);
          }
          .center {
            height: 180px;
            width: 100%;
            .mcenter {
              height: 90px;
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: space-around;
              text-align: center;
              img {
                width: 45px;
                height: auto;
              }
              div {
                font-weight: 700;
                &:nth-of-type(1) {
                  font-size: 20px;
                }
                &:nth-of-type(2) {
                  span {
                    &:nth-of-type(1) {
                      line-height: 48px;
                      font-size: 48px;
                    }
                    &:nth-of-type(2) {
                      line-height: 36px;
                      font-size: 36px;
                      color: #dea90a;
                    }
                  }
                }
                &:nth-of-type(3) {
                  p {
                    &:nth-of-type(1) {
                      font-size: 36px;
                      color: #dea90a;
                    }
                    &:nth-of-type(2) {
                      font-size: 20px;
                    }
                  }
                }
              }
            }
            .bcenter {
              height: 80px;
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: space-around;
              font-size: 12px;
              .item {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                height: 100%;
                div {
                  width: 110px;
                  height: 38px;
                  background-color: #f7efdd;
                  border: 1px dashed $yellowHeader;
                  border-radius: 10px;
                  display: flex;
                  flex-direction: column;
                  justify-content: space-around;
                  align-items: center;
                  p {
                    line-height: 15px;
                  }
                }
              }
            }
          }
        }
        &.traffic {
          .header {
            @include head($pinkHeader);
          }
          .center {
            height: 180px;
            width: 100%;
            .mcenter {
              height: 90px;
              width: 100%;
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              align-items: center;
              font-weight: 700;
              font-size: 22px;
              img {
                width: 54px;
                height: auto;
              }
            }
            .bcenter {
              height: 90px;
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: space-around;
              .item {
                text-align: center;
                p {
                  &:nth-of-type(1) {
                    font-weight: 400;
                    font-size: 20px;
                    color: #9e9e9e;
                    span {
                      &:nth-of-type(1) {
                        font-size: 28px;
                        color: #3c4047;
                      }
                    }
                  }
                  &:nth-of-type(2) {
                    font-weight: 700;
                    font-size: 20px;
                  }
                }
              }
              .lin {
                height: 80%;
                border: 1px dashed $pinkHeader;
                &:last-child {
                  display: none;
                }
              }
            }
          }
        }
        &.dump {
          .header {
            @include head($blueHeader);
          }
          .center {
            height: 180px;
            width: 100%;
            .mcenter {
              height: 90px;
              width: 100%;
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              align-items: center;
              font-weight: 700;
              font-size: 22px;
              img {
                width: 54px;
                height: auto;
              }
            }
            .bcenter {
              height: 90px;
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: space-around;
              .item {
                text-align: center;
                p {
                  &:nth-of-type(1) {
                    font-weight: 400;
                    font-size: 20px;
                    color: #9e9e9e;
                    span {
                      &:nth-of-type(1) {
                        font-size: 28px;
                        color: #3c4047;
                      }
                    }
                  }
                  &:nth-of-type(2) {
                    font-weight: 700;
                    font-size: 20px;
                  }
                }
              }
              .lin {
                height: 80%;
                border: 1px dashed $blueHeader;
              }
            }
          }
        }
        &.hazardous {
          .header {
            @include head($yellowHeader);
          }
          .center {
            height: 180px;
            width: 100%;
            .mcenter {
              height: 90px;
              width: 100%;
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              align-items: center;
              font-weight: 700;
              font-size: 22px;
              img {
                width: 54px;
                height: auto;
              }
            }
            .bcenter {
              height: 90px;
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: space-around;
              .item {
                text-align: center;
                p {
                  &:nth-of-type(1) {
                    font-weight: 400;
                    font-size: 20px;
                    color: #9e9e9e;
                    span {
                      &:nth-of-type(1) {
                        font-size: 28px;
                        color: #3c4047;
                      }
                    }
                  }
                  &:nth-of-type(2) {
                    font-weight: 700;
                    font-size: 20px;
                  }
                }
              }
              .lin {
                height: 80%;
                border: 1px dashed $yellowHeader;
              }
            }
          }
        }
        &.xmtz {
          .header {
            @include head($yellowHeader);
          }
          .center {
            height: 180px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            flex-wrap: wrap;
            div {
              width: 180px;
              height: 70px;
              margin-bottom: 5px;
              background-color: #faf2de;
              border: 1px dashed #f1ba12;
              font-size: 20px;
              font-weight: 700;
              color: #333333;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              border-radius: 10px;
              p {
                margin: 0;
                &:nth-of-type(1) {
                  text-align: center;
                  font-weight: 400;
                  font-size: 28px;
                  color: #3c4047;
                  span {
                    &:nth-of-type(2) {
                      font-size: 20px;
                      color: #7f7f7f;
                    }
                  }
                }
                &:nth-of-type(2) {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  white-space: nowrap;
                  text-align: center;
                }
              }
              img {
                width: 25px;
                height: auto;
              }
            }
          }
        }
        &.qzsq {
          .header {
            @include head($blueHeader);
          }
          .center {
            height: 180px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            .item {
              width: 50%;
              .tcenter {
                height: 90px;
                font-weight: 700;
                font-size: 22px;
                text-align: center;
                line-height: 90px;
              }
              .bcenter {
                height: 80px;
                display: flex;
                text-align: center;
                font-weight: 400;
                font-size: 28px;
                color: #3c4047;
                div {
                  width: 50%;

                  p {
                    &:nth-of-type(2) {
                      font-weight: 700;
                      font-size: 20px;
                    }
                  }
                }
              }
            }
            .lin {
              height: 80%;
              border: 1px dashed $blueHeader;
            }
          }
        }
        &.wgxx {
          .header {
            @include head($greenHeader);
          }
          .center {
            height: 180px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            flex-wrap: wrap;
            div {
              width: 180px;
              height: 70px;
              margin-bottom: 5px;
              background-color: #def2e0;
              border: 1px dashed $greenHeader;
              font-size: 20px;
              font-weight: 700;
              color: #333333;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              border-radius: 10px;
              p {
                margin: 0;
                &:nth-of-type(1) {
                  text-align: center;
                  font-weight: 400;
                  font-size: 28px;
                  color: #3c4047;
                  span {
                    &:nth-of-type(2) {
                      font-size: 20px;
                      color: #7f7f7f;
                    }
                  }
                }
                &:nth-of-type(2) {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  white-space: nowrap;
                  text-align: center;
                }
              }
              img {
                width: 25px;
                height: auto;
              }
            }
          }
        }
        &.zwfw {
          .header {
            @include head(#4b6bc6);
          }
          .center {
            height: 180px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            flex-wrap: wrap;
            div {
              width: 180px;
              height: 70px;
              margin-bottom: 5px;
              background-color: #e1e6f4;
              border: 1px dashed $blueHeader;
              font-size: 20px;
              font-weight: 700;
              color: #333333;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              border-radius: 10px;
              p {
                margin: 0;
                &:nth-of-type(1) {
                  text-align: center;
                  font-weight: 400;
                  font-size: 28px;
                  color: #3c4047;
                  span {
                    &:nth-of-type(2) {
                      font-size: 20px;
                      color: #7f7f7f;
                    }
                  }
                }
                &:nth-of-type(2) {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  white-space: nowrap;
                  text-align: center;
                }
              }
              img {
                width: 25px;
                height: auto;
              }
            }
          }
        }
        &.zhyj {
          .header {
            @include head($pinkHeader);
          }
          .center {
            height: 180px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            flex-wrap: wrap;
            div {
              width: 180px;
              height: 70px;
              margin-bottom: 5px;
              background-color: #f3e9fc;
              border: 1px dashed #c280ff;
              font-size: 20px;
              font-weight: 700;
              color: #333333;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              border-radius: 10px;
              p {
                margin: 0;
                &:nth-of-type(1) {
                  text-align: center;
                  font-weight: 400;
                  font-size: 28px;
                  color: #3c4047;
                  span {
                    &:nth-of-type(2) {
                      font-size: 20px;
                      color: #7f7f7f;
                    }
                  }
                }
                &:nth-of-type(2) {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  white-space: nowrap;
                  text-align: center;
                }
              }
              img {
                width: 25px;
                height: auto;
              }
            }
          }
        }
        &.zhjf {
          .header {
            @include head(#4a7903);
          }
          .center {
            height: 180px;
            .title {
              height: 50px;
              font-weight: 700;
              font-size: 22px;
              display: flex;
              align-items: center;
              justify-content: space-around;
            }
            .mcenter {
              height: 120px;
              width: 100%;
              display: flex;
              align-items: center;
              & > div {
                width: 50%;
                display: flex;
                flex-direction: column;
                font-weight: 700;
                font-size: 20px;
                justify-content: space-around;
                align-items: center;
                height: 100%;
                .lin {
                  display: inline-block;
                  width: 80%;
                  border: 1px dashed $greenHeader;
                }
                div {
                  display: flex;
                  align-items: center;
                  justify-content: space-around;
                  width: 100%;
                  span {
                    &:nth-of-type(2) {
                      font-weight: 400;
                      font-size: 20px;
                      color: #9e9e9e;
                    }
                  }
                }
              }
              & > .lin {
                height: 80%;
                border: 1px dashed $greenHeader;
              }
            }
          }
        }
        &.zhsw {
          .header {
            @include head($orangeHeader);
          }
          .center {
            height: 180px;
            .xy {
              height: 40px;
              font-size: 22px;
              text-align: center;
              font-weight: 400;
              display: flex;
              align-items: center;
              justify-content: space-around;
              span {
                &:nth-of-type(2) {
                  margin-left: 5px;
                  color: #ba7721;
                  font-size: 22px;
                }
              }
            }
            .mcenter {
              height: 120px;
              display: flex;
              justify-content: space-around;
              flex-wrap: wrap;
              .item {
                width: 150px;
                height: 65px;
                margin-bottom: 5px;
                background-color: #f4eade;
                border: 1px dashed #c48c47;
                font-size: 20px;
                font-weight: 700;
                color: #333333;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 10px;
                div {
                  display: flex;
                  flex-direction: column;
                  flex: 4;
                  &:nth-of-type(1) {
                    color: #7f7f7f;
                    width: 10px;
                    height: 100%;
                    flex: 1;
                    line-height: 14px;
                    font-size: 8px;
                    justify-content: center;
                  }
                }
                p {
                  margin: 0;
                  display: flex;
                  align-items: center;
                  justify-content: space-around;
                  span {
                    color: #9e9e9e;
                    font-weight: 600;
                  }
                }
                img {
                  width: 15px;
                  height: auto;
                }
              }
            }
          }
        }
        &.zhzj {
          .header {
            @include head($deepBlueHeader);
          }
          .center {
            height: 180px;
            .mcenter {
              height: 90px;
              display: flex;
              justify-content: space-around;
              align-items: center;
              .item {
                color: #333333;
                p {
                  margin: 0;
                  font-size: 22px;
                  font-weight: 700;
                  color: #333333;
                  &:nth-of-type(1) {
                    color: #9e9e9e;
                    margin-bottom: 3px;
                    font-size: 20p;
                    text-align: right;
                  }
                }
                img {
                  width: 31px;
                  height: auto;
                }
              }
              .lin {
                height: 80%;
                border: 1px dashed #dadcf6;
              }
            }
            .bcenter {
              height: 90px;
              display: flex;
              flex-wrap: wrap;
              justify-content: space-around;
              margin-top: 10px;
              div {
                width: 119px;
                height: 72px;
                background-color: #dadcf6;
                border: 1px dashed #0000bf;
                font-size: 20px;
                font-weight: 700;
                color: #333333;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                border-radius: 10px;
                p {
                  margin: 0;
                  &:nth-of-type(1) {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    span {
                      color: #9e9e9e;
                      font-weight: 400;
                    }
                  }
                  &:nth-of-type(2) {
                    white-space: nowrap;
                    text-align: center;
                  }
                }
                img {
                  width: 28px;
                  height: auto;
                }
              }
            }
          }
        }
        &.zhyl {
          .header {
            @include head($greenHeader);
          }
          .center {
            height: 180px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            font-weight: 700;
            font-size: 20px;
            div {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: space-around;
              height: 100%;
            }
            .lin {
              height: 80%;
              border: 1px dashed $greenHeader;
            }
            img {
              width: 78px;
              height: auto;
            }
          }
        }
        &.zhcg {
          .header {
            @include head(#70b601);
          }
          .center {
            height: 180px;
            display: flex;
            font-weight: 700;
            font-size: 20px;
            div {
              width: 50%;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: space-around;
              p {
                &:nth-of-type(2) {
                  color: #9e9e9e;
                }
              }
            }
            .lin {
              margin-top: 10px;
              height: 80%;
              border: 1px dashed $greenHeader;
            }
            img {
              width: 61px;
              height: auto;
            }
          }
        }
        &.sszt {
          .header {
            @include head(#4b6bc6);
          }
          .center {
            height: 180px;
            .mcenter {
              height: 90px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-weight: 700;
              font-size: 20px;
              .caption {
                width: 376px;
                height: 65px;
                background-color: #e1e6f4;
                padding: 0 30px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                border: 1px dashed #4b6bc6;
                img {
                  width: 35px;
                  height: auto;
                }
                & > span {
                  display: flex;
                  align-items: center;
                  &:nth-of-type(2) {
                    color: #9e9e9e;
                  }
                }
              }
            }
            .bcenter {
              height: 90px;
              display: flex;
              font-weight: 700;
              font-size: 20px;
              div {
                width: 50%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-around;
              }
              p {
                &:nth-of-type(1) {
                  font-weight: 400;
                  color: #9e9e9e;
                }
              }
              .lin {
                height: 80%;
                border: 1px dashed #4b6bc6;
              }
              img {
                width: 25px;
                height: auto;
              }
            }
          }
        }
        &.gis {
          .header {
            @include head(#545efb);
          }
          .center {
            height: 180px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            div {
              text-align: center;
              p {
                margin: 0;
                white-space: nowrap;
                font-size: 20px;
                color: #9e9e9e;
                span {
                  font-size: 28px;
                  color: #3c4047;
                }
                &:nth-of-type(2) {
                  color: #333333;
                  margin-top: 5px;
                  font-weight: 700;
                  font-size: 22px;
                  text-align: center;
                }
              }
            }
            img {
              width: 82px;
              height: auto;
            }
            .lin {
              height: 80%;
              border: 1px dashed #e9daf6;
            }
          }
        }
      }
    }
    .underline {
      width: 100%;
      background-color: #d7d7d7;
      height: 1px;
      margin: 50px 0;
    }
  }
}
</style>