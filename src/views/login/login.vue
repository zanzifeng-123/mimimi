<template>
  <div class="login">
    <div class="top">
      <img :src="logo" alt="" />
    </div>
    <div class="bottom" :style="{ 'background-image': background }">
      <div class="login-text">
        <!-- 登录界面 -->
        <div v-if="text_active" class="text">
          <div class="text-top">
            <div
              class="name"
              :class="active ? 'active' : ''"
              @click="num_login"
            >
              账号登录
            </div>
            <div class="name-solid"></div>
            <div
              class="name"
              :class="active ? '' : 'active'"
              @click="sao_login"
            >
              扫码登录
            </div>
          </div>
          <div class="text-bottom">
            <div class="log" :class="active ? '' : 'log-false'">
              <form ref="login_btn">
                <div class="user">
                  <input
                  @keydown.13="doLogin"
                    class="item_account"
                    type="text"
                    name="user"
                    v-model="user.admin"
                    placeholder="邮箱/手机号码/小米ID"
                  />
                  <em v-if="user.user_err">用户名错误</em>
                </div>
                <div class="user">
                  <input
                    class="item_account"
                    type="password"
                    placeholder="密码"
                    @keydown.13="doLogin"
                    v-model="user.password"
                  />
                  <em v-if="user.user_err">密码错误</em>
                </div>
                <button type="button" class="login-btn" @click="doLogin">
                  登录
                </button>
              </form>
              <!-- <div class="login-btn" @click="to_user">登录</div> -->
              <div class="login-link">手机短信登录/注册</div>
              <div class="forget">
                <div class="pad-forget" @click="text_active = false">
                  立即注册
                </div>
                <span>|</span>
                <div class="pad-forget">忘记密码？</div>
              </div>
              <div class="login-icon">
                <i class="iconfont icon-weixin1 weixin"></i>
                <i class="iconfont icon-weibo1 weibo"></i>
                <i class="iconfont icon-zhifubao zfb"></i>
                <i class="iconfont icon-QQ QQ"></i>
              </div>
            </div>
            <div class="log" :class="active ? 'log-false' : ''">
              <div class="query">
                请使用小米手机/米家等小米旗下APP扫码登录
                <i class="iconfont icon-wenhao"></i>
              </div>
              <img :src="qr" alt="" />
              <div class="txt">使用<span>小米商城APP</span>扫一扫</div>
              <p>小米手机可打开「设置」>「小米帐号」扫码登录</p>
            </div>
          </div>
        </div>
        <!-- 注册界面 -->
        <div v-else class="text">
          <div class="text-top">
            <div
              class="name"
              :class="active ? 'active' : ''"
              @click="num_login"
            >
              账号注册
            </div>
          </div>
          <div class="text-bottom">
            <div class="log" :class="active ? '' : 'log-false'">
              <form ref="login_btn">
                <div class="user">
                  <input
                    @keydown.13="doRegister"
                    class="item_account"
                    type="text"
                    name="user"
                    v-model="register.admin"
                    placeholder="邮箱/手机号码/小米ID"
                  />
                  <em v-if="register.register_err">该用户名已存在或错误</em>
                </div>
                <div class="user">
                  <input
                  @keydown.13="doRegister"
                    class="item_account"
                    type="password"
                    placeholder="密码"
                    v-model="register.password"
                  /><em v-if="register.register_err">密码必须6位以上</em>
                </div>
                <button type="button" class="login-btn" @click="doRegister">
                  确认
                </button>
              </form>
              <div class="login-link" @click="text_active = true">
                已有账号登录
              </div>
              <div class="login-icon">
                <i class="iconfont icon-weixin1 weixin"></i>
                <i class="iconfont icon-weibo1 weibo"></i>
                <i class="iconfont icon-zhifubao zfb"></i>
                <i class="iconfont icon-QQ QQ"></i>
              </div>
            </div>
            <div class="log" :class="active ? 'log-false' : ''">
              <div class="query">
                请使用小米手机/米家等小米旗下APP扫码登录
                <i class="iconfont icon-wenhao"></i>
              </div>
              <img :src="qr" alt="" />
              <div class="txt">使用<span>小米商城APP</span>扫一扫</div>
              <p>小米手机可打开「设置」>「小米帐号」扫码登录</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="txt">
        <div class="font" v-for="(item, index) in foot" :key="index">
          {{ foot[index] }}
        </div>
      </div>
      <p>
        小米公司版权所有-京ICP备10046444-
        <span>
          <img
            src="https://account.xiaomi.com/static/res/9204d06/account-static/respassport/acc-2014/img/ghs.png"
            alt=""
          /> </span
        >京公网安备11010802020134号-京ICP证110507号
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logo: "https://account.xiaomi.com/static/res/7f6f2f5/account-static/respassport/acc-2014/img/mistore_logo.png",
      background: `url(https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/72644d9b8031286de3cc74e151aefd90.jpg)`,
      active: true,
      text_active: true,
      qr: require("@/img/qr.png"),
      foot: ["简体", "繁体", "English", "常见问题", "隐私政策"],
      regular: {
        //信息正则验证
        adminIn: false,
        passwordIn: false,
      },
      user: {
        //登录信息
        admin: "",
        password: "",
        user_err: false,
        timer: null,
      },
      register: {
        //注册信息
        admin: "",
        password: "",
        register_err: false,
        timer: null,
      },
    };
  },
  methods: {
    to_user() {
      this.$router.push("/user");
    },
    num_login() {
      this.active = true;
    },
    sao_login() {
      this.active = false;
    },
    reset_from() {
      //重置表单信息
      this.user = this.$options.data().user;
      this.register = this.$options.data().register;
      this.regular = this.$options.data().regular;
    },
    doRegister() {
      // console.log(1);
      /* 正则验证 */
      this.regular.adminIn =
        this.register.admin == "" || /\W/g.test(this.register.admin)
          ? false
          : true;
      this.regular.passwordIn =
        this.register.password.length < 6 ? false : true;
      if (this.regular.adminIn && this.regular.passwordIn) {
        setTimeout(() => {
          this.$store.dispatch("users/register_message", this.register);

          if (sessionStorage.register && sessionStorage.register == 1) {
            this.reset_from();
            // this.$router.replace("/index");
            this.text_active = true;
          } else {
            this.register.register_err = true;
            clearTimeout(this.register.timer);
            this.register.timer = setTimeout(() => {
              this.register.register_err = false;
            }, 2000);
          }
        }, 1000);
      } else {
        this.register.register_err = true;
        clearTimeout(this.register.timer);
        this.register.timer = setTimeout(() => {
          this.register.register_err = false;
        }, 2000);
      }
    },
    doLogin() {
      this.regular.adminIn =
        this.user.admin == "" || /\W/g.test(this.user.admin) ? false : true;
      this.regular.passwordIn = this.user.password.length < 6 ? false : true;
      if (this.regular.adminIn && this.regular.passwordIn) {
        this.$store.dispatch("users/login_message", this.user);
        setTimeout(() => {
          if (sessionStorage.login && sessionStorage.login == 1) {
            this.$router.replace("/user/personal");
            this.shopping_car_init()
          } else {
            this.user.user_err = true;
            clearTimeout(this.user.user_err);
            this.user.user_err = setTimeout(() => {
              this.user.user_err = false;
            }, 2000);
          }
        },1000);
      } else {
        this.user.user_err = true;
        clearTimeout(this.user.user_err);
        this.user.user_err = setTimeout(() => {
          this.user.user_err = false;
        }, 2000);
      }
    },
        /* 读取用户购物车 */
    shopping_car_init(){
      this.$store.dispatch('shopping_car/goshopping_car_init')
    },
  },
  mounted() {
    // console.log(/\W/g.test('zan'));
  },
  computed: {
    users() {
     return this.$store.getters.getUsers;
    },
  },
  watch: {
    text_active() {
      this.reset_from();
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  min-width: 1130px;
  .top {
    width: 1130px;
    height: 98px;
    margin: 0 auto;
    display: block;
    img {
      width: 200px;
      height: 98px;
    }
  }
  .bottom {
    width: 100%;
    height: 588px;
    background-repeat: no-repeat;
    background-position: top center;
    .login-text {
      position: relative;
      width: 1130px;
      margin: 0 auto;
      display: block;
      .text {
        position: absolute;
        top: 62px;
        width: 410px;
        height: 526px;
        background-color: #fff;
        right: 0px;
        box-sizing: border-box;
        .text-top {
          // width: 100%;
          padding: 27px 0 24px;
          text-align: center;
          color: #666;
          font-size: 24px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          .name-solid {
            width: 1px;
            height: 27px;
            background: #e0e0e0;
            border: 1px solid #e0e0e0;
            box-sizing: border-box;
          }
          .name {
            cursor: pointer;
            padding: 0 20px;
          }
          .active {
            color: #f56600;
          }
        }

        .text-bottom {
          padding: 0 20px;
          .log {
            display: block;
            .user {
              position: relative;
              .item_account {
                margin: 0 auto;
                width: 306px;
                height: 22px;
                line-height: 22px;
                padding: 13px 16px 13px 14px;
                display: block;
                outline: none;
                border: 1px solid #e0e0e0;
                margin-bottom: 30px;
              }
              em {
                position: absolute;
                color: red;
                font-size: 12px;
                bottom: -20px;
                left: 20px;
                font-family: "微软雅黑";
              }
            }
            .login-btn {
              cursor: pointer;
              width: 346px;
              height: 50px;
              background: #f56600;
              text-align: center;
              line-height: 50px;
              color: white;
              margin: 10px auto;
              display: block;
              outline: none;
              border: none;
            }
            .login-link {
              cursor: pointer;
              width: 100%;
              text-align: center;
              font-size: 14px;
              color: #f56600;
            }
            .forget {
              margin-top: 30px;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              color: #999;
              font-size: 14px;
              .pad-forget {
                cursor: pointer;
                padding: 0 5px;
                &:hover {
                  color: #f56600;
                }
              }
            }
            .login-icon {
              width: 346px;
              margin: 0 auto;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: space-between;
              padding: 0 50px;
              box-sizing: border-box;
              margin-top: 100px;
              i {
                cursor: pointer;
              }
              .weixin {
                font-size: 35px;
                color: #00d20d;
              }
              .weibo {
                font-size: 35px;
                color: #d32f2f;
              }
              .zfb {
                font-size: 35px;
                color: #00aaee;
              }
              .QQ {
                font-size: 35px;
                color: #0288d1;
              }
            }
            .query {
              margin-top: 130px;
              margin-bottom: 30px;
              font-size: 14px;
              text-align: center;
              color: #333;
              .icon-wenhao {
                color: #e0e0e0;
                font-size: 25px;
              }
            }
            img {
              display: block;
              margin: 20px auto;
              width: 180px;
              height: 180px;
            }
            .txt {
              text-align: center;
              font-size: 14px;
              color: #757575;
              span {
                padding: 0 5px;
                color: #ff6700;
              }
            }
            p {
              text-align: center;
              font-size: 14px;
              color: #757575;
            }
          }
          .log-false {
            display: none;
          }
        }
      }
    }
  }
  .footer {
    width: 100%;
    margin-top: 100px;
    .txt {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      .font {
        position: relative;
        font-size: 14px;
        color: #757575;
        padding: 0 10px;
        &::after {
          position: absolute;
          content: "";
          width: 1px;
          height: 13px;
          right: 0;
          top: 3px;
          background-color: #757575;
        }
        &:nth-last-child(1) {
          &::after {
            background-color: transparent;
          }
        }
      }
    }
    p {
      margin: 15px auto;
      text-align: center;
      font-size: 14px;
      color: #757575;
    }
  }
}
</style>