<template>
  <div class="box">
    <!-- <img :src="background" alt="" /> -->

    <!-- <img :src="background" alt=""> -->
    <div class="top-list">
      <div class="head-item">
        <div class="left">
          <div class="item" v-for="(item, index) in list" :key="index">
            {{ item.name }}
          </div>
        </div>
        <div class="right">
          <!-- <div class="item" @click="go_login"></div> -->
          <router-link class="item" to="/user">{{ user_Name }}</router-link>
          <router-link class="item" to="/login">注册</router-link>
          <!-- <div class="item">注册</div> -->
          <div class="item">消息通知</div>
          <div
            :class="shoppcar_active ? 'shoppingcar' : 'shopping-car'"
            @mouseenter="move"
            @mouseleave="out"
          >
            购物车({{ commodity.length }})
            <div class="car">
              <shoppingcar :commodity="commodity"></shoppingcar>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shoppcar_active: false,
      background: require("../../img/head-background.jpg"),
      timer: null,
      timer2: null,
      shopcarnum: "0",
      shoppingcar: [{}],

      list: [
        {
          name: "小米商城",
          active: true,
        },
        {
          name: "MIUI",
          active: true,
        },
        {
          name: "loT",
          active: true,
        },
        {
          name: "云服务",
          active: true,
        },
        {
          name: "天星数科",
          active: true,
        },
        {
          name: "有品",
          active: true,
        },
        {
          name: "小爱开放平台",
          active: true,
        },
        {
          name: "企业团购",
          active: true,
        },
        {
          name: "资质证照",
          active: true,
        },
        {
          name: "协议规则",
          active: true,
        },
        {
          name: "下载app",
          active: true,
        },
        {
          name: "智能生活",
          active: true,
        },
        {
          name: "Select Location",
          active: true,
        },
      ],
    };
  },
  components: {
    shoppingcar: require("../shoppingCar/shopping_car.vue").default,
  },
  mounted() {
    this.shopping_car_init();
  },
  methods: {
    /* 读取用户购物车 */
    shopping_car_init() {
      // console.log(1);
      this.$store.dispatch("shopping_car/goshopping_car_init");
    },
    go_login() {
      this.$router.push("/login");
    },
    move() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.shoppcar_active = true;
      }, 100);
    },
    out() {
      clearTimeout(this.timer2);
      this.timer2 = setTimeout(() => {
        this.shoppcar_active = false;
      }, 100);
    },
  },
  computed: {
    user_Name() {
      return localStorage.login_name;
    },
    commodity() {
      return this.$store.getters.getShopping_car;
    },
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
.box {
  // width: 1920px;

  .top-list {
    width: 100%;
    height: 40px;
    background-color: #333;
    display: flex;
    flex-direction: row;
    align-items: center;

    .head-item {
      width: 1226px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;

      .left {
        display: flex;
        flex-direction: row;
        align-items: center;
        .item {
          height: 16px;
          cursor: pointer;
          color: #b0b0b0;
          font-size: 12px;
          padding: 0 10px;
          line-height: 16px;
          text-align: center;
          border-right: 1px solid #424242;
          &:hover {
            color: white;
          }
          &:nth-last-child(1) {
            border: none;
          }
        }
      }
      .right {
        display: flex;
        flex-direction: row;
        align-items: center;
        .item {
          height: 16px;
          cursor: pointer;
          color: #b0b0b0;
          font-size: 12px;
          padding: 0 10px;
          line-height: 16px;
          text-align: center;
          border-right: 1px solid #424242;
          &:hover {
            color: white;
          }
          &:nth-last-child(1) {
            border: none;
          }
        }
        .shopping-car {
          position: relative;
          cursor: pointer;
          height: 40px;
          font-size: 12px;
          color: #b0b0b0;
          background-color: #424242;
          padding: 0 30px;
          text-align: center;
          line-height: 40px;
          .car {
            cursor: auto;
            position: absolute;
            width: 360px;
            top: 100%;
            left: -250px;
            height: 0;
            background: white;
            font-size: 12px;
            transition: all 0.5s;
            overflow: auto;
          }
        }
        .shoppingcar {
          position: relative;
          cursor: pointer;
          height: 40px;
          font-size: 12px;
          color: #ff6700;
          background-color: white;
          padding: 0 30px;
          text-align: center;
          line-height: 40px;
          .car {
            cursor: auto;
            top: 100%;
            position: absolute;
            width: 360px;
            left: -250px;
            min-height: 78px;
            max-height: 300px;
            overflow: auto;
            // background-color: yellow;
            background: white;
            padding: 20px 0 0;
            font-size: 12px;
            border: 1px solid #e1e2e5;
            border-top-color: transparent;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.14);
            transition: all 0.5s;
            z-index: 100;
          }
        }
      }
    }
  }
}
</style>
