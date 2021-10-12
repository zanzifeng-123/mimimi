<template>
  <div class="falsh-buy">
    <header-box></header-box>
    <body-box></body-box>
    <div class="seckill" :style="{ background: back }">
      <div class="seckill-banner" :class="menus ? 'seckill-true' : ''">
        <div
          class="data"
          v-for="(item, index) in falsh"
          :key="index"
          :class="item.active ? 'data-true' : ''"
          @click="add(index)"
        >
          <div class="hour">{{ item.date }}</div>
          <div class="em">
            <div class="txt">{{ item.state.one }}</div>
            <div class="time" :class="item.time.active ? '' : 'none'">
              <span class="p">距结束</span>
              <span class="hou">{{ time.hour | flterTime }}</span
              >: <span class="min">{{ time.min | flterTime }}</span
              >:
              <span class="sec">{{ time.sec | flterTime }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="commodity">
      <item
        :item="item"
        v-for="(item, index) in falsh[index].commodity"
        :key="index"
      ></item>
    </div>

    <foot></foot>
    <home></home>
  </div>
</template>

<script>
import { falsh } from "./false-buy";
export default {
  components: {
    headerBox: require("../header/header").default,
    bodyBox: require("../body/body_box.vue").default,
    foot: require("../footer/footer.vue").default,
    home: require("../home/home.vue").default,
    item: require("./components/item.vue").default,
  },
  data() {
    return {
      falsh,
      index: 0,
      menus: false,
      back:
        "#f5f5f5 url(//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3cba013aa492551729f3a42e1668b9d9.jpg) 50% 0 no-repeat",
      time: {
        start: "14:00 场",
        hour: 0,
        min: 0,
        sec: 0,
        num: 3600,
      },
      data: new Date("2021/10/15 14:00"),
      nowdata: new Date(),
    };
  },
  mounted() {
    this.active();
    this.auto();
    this.time.num = (this.data - this.nowdata) / 1000;
    window.addEventListener("scroll", this.menu);

    // this.buy_num();
  },
  methods: {
    menu() {
      if (document.documentElement.scrollTop > 250) {
        this.menus = true;
      } else {
        this.menus = false;
      }
    },
    auto() {
      this.timer = setTimeout(() => {
        this.time.num--;
        if (this.time.num <= 0) {
          clearTimeout(this.timer);
        } else {
          this.auto();
        }
      }, 1000);
    },
    // buy_num() {
    //   this.falsh.forEach((ro) => {
    //     ro.commodity.forEach((row) => {
    //       row.percent = (row.buy_num / row.num) * 100;
    //       row.percent = row.percent.toFixed(2);
    //       this.$set(row, "width", row.percent * 1.5 + "px");
    //     });
    //   });
    // },

    active() {
      this.falsh.forEach((ro) => {
        ro.active = false;
      });
      this.falsh[0].active = true;
    },
    add(index) {
      this.falsh.forEach((ro) => {
        ro.active = false;
        this.falsh[index].active = true;
        this.index = index;
      });
    },
  },
  watch: {
    "time.num"(val) {
      if (val <= 0) {
        this.time.hour = 0;
        this.time.min = 0;
        this.time.sec = 0;
      } else {
        let hour = parseInt(val / 3600);
        let min = parseInt((val - hour * 3600) / 60);
        let sec = parseInt(val % 60);
        this.time.hour = hour;
        this.time.min = min;
        this.time.sec = sec;
      }
    },
  },
  filters: {
    flterTime(val) {
      val = Number(val);
      return val > 9 ? val : "0" + val;
    },
  },
};
</script>

<style lang="less">
.falsh-buy {
  background-color: #f5f5f5;
  position: relative;
  width: 100%;
  &::after {
    content: "";
    display: block;
    clear: both;
  }
  .seckill {
    position: relative;
    width: 100%;
    height: 170px;
    .seckill-banner {
      position: absolute;
      width: 1226px;
      left: 50%;
      transform: translateX(-50%);
      height: 68px;
      bottom: 0;
      display: flex;
      flex-direction: row;
      z-index: 50;
      .data {
        cursor: pointer;
        display: flex;
        flex: 1;
        background-color: #414141;
        color: white;
        align-items: center;
        justify-content: center;
        .hour {
          display: inline-block;
          margin-right: 15px;
          font-style: normal;
          font-size: 18px;
          line-height: 1;
          vertical-align: middle;
        }
        .em {
          .txt {
            line-height: 20px;
            text-align: left;
            display: inline-block;
            *zoom: 1;
            *display: inline;
            font-style: normal;
            margin-left: 0;
            font-size: 14px;
          }
          .time {
            font-size: 14px;
            .p {
              margin-right: 5px;
            }
          }
          .none {
            display: none;
          }
        }
      }
      .data-true {
        background-color: #f1393a;
      }
    }
    .seckill-true {
      position: fixed;
      top: 0;
    }
  }
  .commodity {
    width: 1239px;
    margin: 0 auto;
    margin-top: 30px;
    .item {
      -webkit-user-select: none;

      -moz-user-select: none;

      -ms-user-select: none;

      user-select: none;
      float: left;
      margin: 0 6px;
      margin-bottom: 13px;
      width: 400px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      transition: all 0.3s;
      cursor: pointer;
      background-color: #fff;
      &:hover {
        transform: translate3d(0, -2px, 0);
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
      }
      img {
        width: 190px;
        height: 190px;
      }
      .element {
        position: relative;
        flex: 1;
        padding: 30px 15px 0;
        box-sizing: border-box;
        .name {
          // margin-top: 30px;
          width: 180px;
          font-size: 16px;
          color: #333;
          height: 16px;
          text-overflow: ellipsis;
          white-space: nowrap;
          display: block;
          line-height: 16px;
          overflow: hidden;
        }
        .txt {
          margin-top: 8px;
          width: 100%;
          height: 30px;
          overflow: hidden;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          font-size: 14px;
          color: #757575;
        }
        .money {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin-top: 24px;
          .nowmoney {
            color: #f1393a;
            font-size: 16px;
            line-height: 1;
          }
          .oldmoney {
            color: rgba(0, 0, 0, 0.54);
            font-style: normal;
            font-size: 12px;
            margin-left: 15px;
            text-decoration: line-through;
          }
        }
        .percent {
          position: absolute;
          width: 150px;
          height: 10px;
          background-color: #333;
          bottom: 85px;
          .percent-num {
            position: absolute;
            // bottom: 85px;
            width: 25px;
            height: 10px;
            background-color: #f1393a;
          }
          .num {
            position: absolute;
            right: -45px;
            font-size: 12px;
            color: #757575;
          }
        }
        .to-buy {
          position: absolute;
          bottom: 25px;
          right: 70px;
          color: #fff;
          background: #f1393a;
          padding: 5px 30px;
          cursor: pointer;
          font-size: 14px;
        }
        .remind {
          position: absolute;
          bottom: 25px;
          right: 70px;
          color: #fff;
          background: #83c44e;
          padding: 5px 30px;
          cursor: pointer;
          font-size: 14px;
        }
        .buy-none {
          display: none;
        }
      }
    }
  }
  .aa {
    height: 1920px;
  }
}
</style>