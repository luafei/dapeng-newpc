<template>
  <div class="dpHeader">
    <img class="logo" src="@/assets/images/logo.png" alt />
    <div class="headerLine"></div>
    <div class="titleLine" v-if="isShowMenu">
      <img class="left-button" src="@/assets/images/dpHeader_left_btn.png" alt @click="moveLeft" />
      <div class="contentUl">
      <ul class="titleUl">
        <li  v-for="subTitle in dpHeaderList" :key="subTitle.id" :class="{active:activeOn=== subTitle.id}">
          <span
              v-if="subTitle.children.length===0"
              class="el-dropdown-link traffic-title"
            >
              {{subTitle.text}}
              <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
        </li>
      
      </ul>
      </div>
      
      <img class="right-button" src="@/assets/images/dpHeader_right_btn.png" alt @click="moveRight"  />
    </div>

    <div class="theme" v-if="isShowMenu">
      <img class="imagesCar" src="@/assets/images/nitouche.png" />
      <slot></slot>
      <!-- <a href="http://113.105.69.185:6868/dist/#/loginzfByZHZX" style="margin-left:30px" target="_blank">首页</a> -->
      <!-- <a href="http://113.105.69.185:6868/dist/#/loginzfByZHZXSXT" style="margin-left:30px" target="_blank">视频</a> -->
    </div>
    <div class="time" v-html="currentTime"></div>
  </div>
</template>

<script>
import { getCurrentFromat } from "@/utils/util";
// import { component } from "vue/types/umd";
import { getters, mapGetters } from "vuex";

export default {
  props: {
    isShowMenu: {
      type: Boolean,
      default: true,
    },
    activeOn:{
      type:Number,
      default:0
    }
  },
  data() {
    return {
      WayLeaverImgVisible: {
        isShow: false,
      },
      currentTime: "",
      timer: null,
      leftIndex: 0,
      rightIndex: 0,
      dpHeaderList: [
        {
          id: 0,
          text: "交通运行",
          children:[]
        },
        {
          id: 1,
          text: "文化旅游",
          children:[]
        },
        {
          id: 2,
          text: "公共安全",
          children:[]
        },
        {
          id: 3,
          text: "政务服务",
          children:[]
        },
        {
          id: 4,
          text: "疫情防控",
          children:[]
        },
        {
          id: 5,
          text: "生态环境",
          children:[]
        },
        {
          id: 6,
          text: "智慧经服",
          children:[]
        },
        {
          id: 7,
          text: "数字孪生",
          children:[]
        }
      ]
    };
  },
  computed: {
    ...mapGetters({
      userName: 'userName',
    }),
  },
  created() {
    this.polling();
  },

  methods: {
    moveLeft() {
      if (this.leftIndex <= 0) {
        return
      }
      this.leftIndex--;
      var len = parseInt($(".dpHeader .titleUl").width() / 5)  + 4;
      var offset = this.leftIndex * len;
      $(".dpHeader .titleUl").css("left", "-" + offset + "px")
    },
    moveRight() {
      if (this.leftIndex >= 3) {
        return;
      }
      this.leftIndex++;
      var len = parseInt($(".dpHeader .titleUl").width() / 5) + 4;
      var offset = this.leftIndex * len;
      $(".dpHeader .titleUl").css("left", "-" + offset + "px")
    },
    polling() {
      let time = getCurrentFromat()
      this.currentTime = this.userName ? `${time}&nbsp;|&nbsp;欢迎${this.userName}登录` : time
      clearTimeout(this.timer)
      this.timer = setTimeout(this.polling, 1000);
    },
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>

<style lang="scss" scoped>
.dpHeader {
  position: relative;
  z-index: 1;
  pointer-events: auto;
  position: relative;
  height: 70px;
  font-size: 14px;

  .logo {
    position: absolute;
    left: 50%;
    margin-left: -200px;
    top: 50%;
    transform: translateY(-50%);
    width: 400px;
    height: 36px;
  }
}

.headerLine {
  width: 100%;
  height: 70px;
  background: url("../../assets/images/header_background.png");
  background-size: 100% 100%;
}

.titleLine {
  position: relative;
  width: 602px;
  height: 43px;
  margin: 0 auto;
  background: url("../../assets/images/check_title.png");
  background-size: 100% 100%;
  .contentUl {
    position: absolute;
    left: 50px;
    height: 100%;
    right: 50px;
    width: 500px;
    overflow: hidden;
    .titleUl {
      white-space: nowrap;
      box-sizing: border-box;
      // padding: 0 52px;
      color: #ffffff;
      height: 43px;
      // display: flex;
      position: relative;
      // justify-content: space-between;
      // align-items: center;
      li{
        display: inline-block;
        position: relative;
        padding:0 15px 0 15px;
        width: 104px;
      }
    }
  }
  .left-button {
    position: absolute;
    width: 6px;
    height: 11px;
    left: 35px;
    top: 17px;
    cursor: pointer;
  }

  .right-button {
    position: absolute;
    width: 6px;
    height: 11px;
    right: 35px;
    top: 17px;
    cursor: pointer;
  }
}

.theme {
  position: absolute;
  left: 49px;
  top: 10px;
  font-weight: bolder;
  font-size: 16px;
  background: linear-gradient(
    180deg,
    rgba(227, 229, 229, 1) 0%,
    rgba(56, 206, 223, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  .imagesCar {
    width: 20px;
    height: 20px;
    vertical-align: middle;
    margin-right: 10px;
  }

  div {
    display: inline-block;
    vertical-align: middle;
  }
}

.time {
  position: absolute;
  top: 14px;
  right: 26px;
  font-size: 16px;
  color: #38cedf;

  span {
    display: inline-block;
    padding-left: 10px;
  }
}

.router-link-active {
  background: linear-gradient(
    180deg,
    rgba(227, 229, 229, 1) 0%,
    rgba(56, 206, 223, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
