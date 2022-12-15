<template>
  <div class="iframe">
    <div class="dpheader">
      <img src="@/assets/images/common/u2428.png" alt="" />
      <span @click="goBack">城市大脑运行监测</span>
      <img src="@/assets/images/common/u2426.png" alt="" />
      <span>{{title}}</span>
    </div>
    <div class="dpContent">
        <iframe class="isframe" :src="frameSrc" frameborder=0 Border=0 Marginwidth=0 Marginheight=0 width=100% height="100%" scrolling=auto></iframe>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      name: "iframe",
      title: "嵌套页面",
      frameSrc: ''
    };
  },
  created() {
    console.log('created', this.$route)
    this.title = this.$route.query.title
    this.frameSrc = this.$route.query.url
  },
  mounted() {
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
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

.iframe {
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
    background-color: #ffffff;
    .isframe{
        position: absolute;
        height: 100%;
        width: 100%;
        pointer-events: auto;
    }
  }
}
</style>