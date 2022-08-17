<template>
  <div class="home">
    <div class="top">
      <div class="left">
        <span class="title">大 鹏 新 区 管 理 服 务 指 挥 平 台</span>
        <span class="date">2021年7月26日</span>
        <span class="month">星期一</span>
        <span class="ssd">
          <img src="@/assets/images/home/u17.svg" alt="" /> 27~32 晴</span
        >
      </div>
      <div class="right">
        <span><img src="@/assets/images/home/u13.svg" alt="" />管理员</span>
        <span><img src="@/assets/images/home/u15.svg" alt="" />全屏</span>
        <span><img src="@/assets/images/home/u14.svg" alt="" />返回</span>
        <span @click="logout"
          ><img src="@/assets/images/home/u16.svg" alt="" />退出</span
        >
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
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
  methods: {
    logout() {
      this.$store
        .dispatch("FedLogOut")
        .then(() => {
          this.$router.replace({ path: "/login" });
        })
        .catch((err) => {
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

.home {
  width: 100%;
  height: 100vh;
  .top {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100px;
    background: url("../../assets/images/home/u1.jpg") no-repeat;
    background-size: cover;
    .left {
      width: 60%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      float: left;
      .title {
        font-weight: 400;
        font-size: 44px;
        color: rgb(70, 112, 224);
      }
      span {
        font-weight: 400;
        font-size: 20px;
        color: rgb(70, 112, 224);
        img {
          width: 25px;
          height: auto;
        }
        &.ssd {
          display: flex;
          align-items: center;
        }
      }
    }
    .right {
      width: 40%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      float: left;
      span {
        font-weight: 700;
        font-size: 20px;
        color: rgb(70, 112, 224);
        display: flex;
        align-items: center;
        cursor: pointer;
        img {
          width: 36px;
          height: auto;
          margin-right: 5px;
        }
      }
    }
  }
  .content {
    // flex: 1;
    position: absolute;
    top: 100px;
    width: 100%;
    left: 0;
    bottom: 0;
    background-color: #ededed;
  }
}
</style>