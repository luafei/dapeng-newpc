<template>
  <div
    class="login"
    :style="`background:url(${loginBg});background-size: cover;`"
  >
    <DpHeader :is-show-menu="false">
      <span>登录</span>
    </DpHeader>
    <div class="content">
      <div class="left">
        <img :src="leftPic" width="476" alt="" />
      </div>
      <div
        class="right"
        :style="`background:url(${loginFormBg});background-size: cover;`"
      >
        <h2 class="title">欢迎登录</h2>
        <el-select
          style="width: 100%"
          class="login-form"
          v-model="isUkey"
          @change="changeLogin"
          placeholder="选择登录方式"
        >
          <el-option
            v-for="item in isUkeyList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-form
          v-show="isUkey"
          ref="ukeyFormLogin"
          class="login-form"
          :model="ukeyForm"
          :rules="ukeyFormRules"
        >
          <el-form-item prop="ukeyUser">
            <el-select
              style="width: 100%"
              v-model="ukeyForm.ukeyUser"
              placeholder="请选择数字证书"
            >
              <el-option
                v-for="item in ukeyList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="ukeyPassword">
            <el-input
              v-model="ukeyForm.ukeyPassword"
              type="password"
              placeholder="请输入证书密码"
            >
              <template slot="prefix">
                <img class="password-icon" :src="passwordIcon" alt="密码" />
              </template>
            </el-input>
          </el-form-item>
        </el-form>
        <!-- <el-checkbox v-model="checked"> 记住密码 </el-checkbox> -->
        <el-form
          v-show="!isUkey"
          ref="formLogin"
          class="login-form"
          :model="form"
          :rules="formRules"
        >
          <el-form-item prop="username">
            <el-input
              autocomplete="new-password"
              v-model="form.username"
              placeholder="请输入账号"
            >
              <template slot="prefix">
                <img class="username-icon" :src="usernameIocn" alt="用户名" />
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="form.password"
              type="password"
              placeholder="请输入密码"
            >
              <template slot="prefix">
                <img class="password-icon" :src="passwordIcon" alt="密码" />
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="code" v-if="hasFirstError">
            <div class="code-wrap">
              <el-input
                v-model="form.code"
                class="code-input"
                placeholder="请输入验证码"
              >
                <!-- <template slot="prefix">
                                    <img class="password-icon" :src="codeIcon" alt="验证码">
                                </template> -->
              </el-input>
              <div class="code-canvas-wrap" @click="getIdentifyCode">
                <!-- <cdoe-indentify :identifyCode="identifyCode"></cdoe-indentify> -->
                <img :src="this.identifyCode" alt="验证码" />
              </div>
            </div>
          </el-form-item>
        </el-form>

        <el-checkbox v-if="!isUkey" v-model="checked"> 记住密码 </el-checkbox>
        <el-button
          class="login-btn"
          @click="handleLogin"
          :loading="loginLoading"
          type="primary"
          >登录</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { validatePassword } from "@/utils/validate";
import DpHeader from "@/components/content/DpHeader";

export default {
  name: "Login",
  components: {
    DpHeader,
  },
  data() {
    return {
      leftPic: require("@/assets/images/login/pic.png"),
      usernameIocn: require("@/assets/images/login/user-icon.png"),
      passwordIcon: require("@/assets/images/login/password-icon.png"),
      codeIcon: require("@/assets/images/login/code-icon.png"),
      loginBg: require("@/assets/images/login/login-bg.jpg"),
      loginFormBg: require("@/assets/images/login/login-form-bg.png"),
      //admin Dapeng2020
      form: {
        username: "",
        password: "",
        code: "",
      },
      ukeyForm: {
        ukeyUser: "",
        password: "",
        ukeyPassword: "",
        code: "",
      },
      checked: false,
      loginLoading: false,
      identifyCode: "",
      hasFirstError: false,
      formRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ validator: validatePassword, trigger: "blur" }],
        code: [{ validator: this.validateCode, trigger: "blur" }],
      },
      ukeyFormRules: {
        ukeyUser: [
          { required: true, message: "请选择数字证书", trigger: "blur" },
        ],
        ukeyPassword: [
          { required: true, message: "请输入证书口令", trigger: "blur" },
        ],
      },
      timeStamps: 0,

      isUkeyList: [{ label: "账号密码登录", value: false }],
      isUkey: false,
      certID: null, //证书操作唯一标识，也支持只输入设备序列号。
      cert: null, //Base64 编码的证书。
      serialNum: null, //序列号
      InData: null, //服务器返回的InData(签名原文)
      ukeyList: [], //ukey列表
      signValue: null, //随机数签名值
      sfId: null, //证书唯一实体标识
    };
  },
  watch: {},
  computed: {},
  created() {
    //初始化ukey
    let hasFirstErrorCookie = sessionStorage.getItem("hasFirstErrorCookie");
    if (hasFirstErrorCookie && hasFirstErrorCookie !== "false") {
      this.hasFirstError = hasFirstErrorCookie;
      this.getIdentifyCode();
    }
  },
  mounted() {
    this.enterKeyup()
  },
  destroyed() {
    // 销毁enter事件
    this.enterKeyupDestroyed();
  },
  methods: {
    changeLogin() {
      for (const key in this.form) {
        this.form[key] = "";
      }
      for (const key in this.ukeyForm) {
        this.ukeyForm[key] = "";
      }
    },
    handleLogin1() {
      this.$router.push('home');
    },
    handleLogin() {
      let ref = "formLogin";
      if (this.isUkey) {
        ref = "ukeyFormLogin";
      }
      let that = this;
      this.$refs[ref].validate((valid) => {
        if (valid) {
          this.loginLoading = true;
          let postData = {
            ...this.form,
            flag: this.timeStamps,
          };
          this.$store
            .dispatch("LoginByUsername", postData)
            .then((res) => {
              this.loginLoading = false;
              sessionStorage.setItem("hasFirstErrorCookie", false);
              this.$router.push({ path: "/" });
            })
            .catch((res) => {
              this.loginLoading = false;
              this.getIdentifyCode();
              sessionStorage.setItem("hasFirstErrorCookie", true);
              this.hasFirstError = true;
            });
        }
      });
    },
    validateCode(rule, value, callback) {
      if (!value) {
        callback(new Error("请输入验证码"));
      } else {
        callback();
      }
    },
    async getIdentifyCode() {
      this.timeStamps = new Date().getTime();
      let postData = {
        flag: this.timeStamps,
      };
      const res = await this.$store.dispatch("GetPicCode", postData);
      this.identifyCode =
        "data:image/png;base64," +
        btoa(
          new Uint8Array(res.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ""
          )
        );
    },
    enterKey(event) {
      const componentName = this.$options.name;
      if (componentName == "Login") {
        const code = event.keyCode
          ? event.keyCode
          : event.which
          ? event.which
          : event.charCode;
        if (code == 13) {
          this.handleLogin();
        }
      }
    },
    enterKeyupDestroyed() {
      document.removeEventListener("keyup", this.enterKey);
    },
    enterKeyup() {
      document.addEventListener("keyup", this.enterKey);
    },
  },
};
</script>
<style lang="scss">
.login {
  width: 100%;
  height: 100vh;
  background: url('../../assets/images/login/login-bg.jpg') no-repeat;
  background-size: cover;
  .content {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .left {
      margin-right: 115px;
    }
    .right {
      display: flex;
      flex-direction: column;
      width: 400px;
      height: 440px;
      padding: 45px 40px;
      // background: url('../../assets/images/login/login-form-bg.png') no-repeat;
      // background-size: cover;
      .title {
        line-height: 30px;
        font-size: 20px;
        font-weight: 700;
        text-align: center;
        color: #fff;
      }
      .login-form {
        margin-top: 15px;
        .el-form-item {
          margin-bottom: 15px;
          .el-input__inner {
            height: 30px;
            background: rgba(11, 161, 248, 0.4);
            border: none;
            border-radius: 0;
            color: #fff;
          }
          .username-icon,
          .password-icon {
            width: 11px;
            margin-left: 5px;
          }
        }
      }
      .el-checkbox {
        margin-top: 10px;
        .el-checkbox__input {
          .el-checkbox__inner {
            background: rgba(11, 161, 248, 0.4);
            border-radius: 0;
            border: none;
          }
        }
        .el-checkbox__label {
          font-size: 12px;
          color: #fff;
        }
      }
      .login-btn {
        height: 30px;
        line-height: 30px;
        padding: 0;
        margin-top: 15px;
        border: none;
        border-radius: 0;
        background-color: rgba(83, 132, 217, 1);
      }
    }
  }
}
.el-message--error {
  font-size: 14px;
}
.code-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .code-input {
    width: 170px;
  }
  .code-canvas-wrap {
    width: 100px;
    height: 31px;
    background: rgba(11, 161, 248, 0.4);
    // overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
