<template>
  <div class="buy">
    <header-box></header-box>
    <body-box></body-box>
    <div class="container">
      <div class="menus-box">
        <div class="left">
          <div class="title">{{ list.title }}</div>
          <span> | </span>
          <div class="item">{{ list.item }}</div>
        </div>
        <div class="right">
          <div class="item" v-for="(item, index) in list.help" :key="index">
            {{ item }}
          </div>
        </div>
      </div>
    </div>
    <div class="container menus-top" :class="menus ? 'menus' : ''">
      <div class="menus-box">
        <div class="left">
          <div class="title">{{ list.title }}</div>
          <span> | </span>
          <div class="item">{{ list.item }}</div>
        </div>
        <div class="right">
          <div class="item" v-for="(item, index) in list.help" :key="index">
            {{ item }}
          </div>
        </div>
      </div>
    </div>
    <div class="product-box">
      <div class="product-swiper">
        <div class="img" :style="list.img[index].back"></div>
        <div class="prev" @click="prev">
          <i class="left iconfont icon-prevpage"></i>
        </div>
        <div class="next" @click="next">
          <i class="right iconfont icon-prevpage"></i>
        </div>
        <div class="dot">
          <div
            class="dian"
            v-for="(item, index) in list.img"
            :key="index"
            @click="active(index)"
            :class="item.active ? 'dian-true' : ''"
          ></div>
        </div>
      </div>
      <div class="product-con">
        <div class="title">{{ list.title }}</div>
        <div class="salle">
          <span class="a">{{ list.salle.a }}</span>
          <span class="p">{{ list.salle.p }}</span>
        </div>
        <div class="from">{{ list.from }}</div>
        <div class="money">{{ list.money }}元</div>
        <div class="address-box">
          <i class="iconfont icon-dizhi"></i>
          <span
            class="address"
            v-for="(item, index) in list.site"
            :key="index"
            >{{ item }}</span
          >
          <span class="changed">修改 </span>
          <p>此地区暂时没有货</p>
        </div>
        <div
          class="product-type"
          v-for="(item, index) in list.product_type"
          :key="index"
        >
          <div class="name">{{ item.title }}</div>
          <div class="type-box">
            <div
              class="type"
              :class="ite.active ? 'type-true ' : ''"
              v-for="(ite, inde) in item.type"
              :key="inde"
              @click="add(index, inde)"
            >
              {{ ite.num }}
            </div>
          </div>
        </div>
        <div class="serve">
          <div
            class="serve-type"
            v-for="(item, index) in list.serve"
            :key="index"
          >
            <div class="top">
              <div class="name">{{ item.title }}</div>
              <div class="help">{{ item.help }}</div>
            </div>
            <div
              class="type"
              v-for="(ite, ind) in item.service"
              :key="ind"
              :class="ite.active ? 'type-true' : ''"
              @click="add_serve(index, ind)"
            >
              <div class="icon">
                <div class="gou">✔</div>
              </div>
              <img :src="ite.img" alt="" />
              <div class="serve-box">
                <div class="name">
                  <span class="desc">{{ ite.name }}</span>
                  <span class="servemoney">{{ ite.money }}元</span>
                </div>
                <div class="p">{{ ite.txt }}</div>
                <div class="add">
                  <span class="icon2">
                    <div class="gou">✔</div>
                  </span>
                  <span>我已同意</span>
                  <span class="consent"> 服务条款|常见问题</span>
                  <span class="serve-money2">{{ ite.money }}元</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="total">
          <div class="txt"></div>
          <div class="money">总计：{{product_money}}</div>
        </div>
        <div class="buy-btn">
          <div class="btn" @click="goshopping_car">加入购物车</div>
          <div class="like"><i class="iconfont icon-xihuan"></i>喜欢</div>
        </div>
        <div class="safeguard">
          <div v-for="(item, index) in list.safeguard" :key="index">
            <i class="iconfont icon-gou"></i>{{ item }}
          </div>
        </div>
      </div>
    </div>
    <div class="explain-box">
      <div class="explain">
        <div class="top">
          <div class="txt">价格说明</div>
        </div>
        <div class="bottom">
          <img
            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a482afa34053b1b32ece1023475af7fb.jpeg"
            alt=""
          />
        </div>
      </div>
    </div>
    <foot></foot>
    <home></home>
  </div>
</template>

<script>
import { list } from "./buy";
export default {
  components: {
    headerBox: require("../header/header").default,
    bodyBox: require("../body/body_box.vue").default,
    foot: require("../footer/footer.vue").default,
    home: require("../home/home.vue").default,
  },
  data() {
    return {
      props: {
        item: {},
      },
      list,
      menus: false,
      index: 0,
      ind: 0,
      timer: null,
      money: {
        type_money: 0,
        serve_money: 0,
      },
      aa: "",
      bb: "",
    };
  },
  mounted() {
    window.addEventListener("scroll", this.menu);
    this.auto();
    this.remove();
  },

  methods: {
    /* 继续产品价格 */
    commodity_Money() {
      this.money.type_money = 0;
      this.money.serve_money = 0;
      this.list.product_type.forEach((item) => {
        item.type.forEach((ro) => {
          if (ro.active) {
            this.money.type_money += parseInt(ro.money);
          }
        });
      });
      this.list.serve.forEach((item) => {
        item.service.forEach((ro) => {
          if (ro.active) {
            this.money.serve_money += parseInt(ro.money);
          }
        });
      });
    },

    /* 加入购物车 */
    goshopping_car(){
      let commodity = {
        money:this.product_money,
        img:this.list.images,
        title:this.list.title
      }
      this.$store.dispatch('shopping_car/goshopping_car',commodity)
    },
    menu() {
      if (document.documentElement.scrollTop >= 250) {
        this.menus = true;
      } else {
        this.menus = false;
      }
    },
    prev() {
      clearTimeout(this.timer);
      if (this.index == 0) {
        this.index = this.list.img.length - 1;
      } else {
        this.index--;
      }
      this.auto();
    },
    next() {
      clearTimeout(this.timer);
      if (this.index == this.list.img.length - 1) {
        this.index = 0;
      } else {
        this.index++;
      }
      this.auto();
    },
    active(index) {
      clearTimeout(this.timer);
      this.index = index;
      this.auto();
    },
    auto() {
      this.timer = setTimeout(() => {
        this.next();
        this.auto();
      }, 3000);
    },
    remove() {
      this.list.product_type.forEach((ro) => {
        ro.type.forEach((row) => {
          row.active = false;
        });
      });
      this.list.product_type.forEach((ro) => {
        ro.type[0].active = true;
      });
      this.list.serve.forEach((ro) => {
        ro.service.forEach((ro) => (ro.active = false));
      });
    },
    add(index, inde) {
      this.list.product_type[index].type.forEach((ro) => (ro.active = false));
      //   this.list.product_type[index].type.forEach(ro=>{
      //   ro.[inde].active=true;
      // })
      this.list.product_type[index].type[inde].active = true;
    },
    add_serve(index, ind) {
      if (this.list.serve[index].service[ind].active == true) {
        this.list.serve[index].service[ind].active = false;
      } else {
        this.list.serve[index].service.forEach((ro) => {
          ro.active = false;
        });
        this.list.serve[index].service[ind].active = true;
      }
    },
  },
  computed: {
    product_money() {
      return this.money.type_money + this.money.serve_money;
    },
  },
  watch: {
    index(val) {
      this.list.img.forEach((ro) => (ro.active = false));
      this.list.img[val].active = true;
    },
    list: {
      deep: true,
      handler() {
        this.commodity_Money();
      },
    },
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.buy {
  position: relative;
  &::after {
    content: "";
    display: block;
    clear: both;
  }
  .container {
    width: 100%;
    height: 63px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.07);
    border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
    background: #fff;
    z-index: 100;
    .menus-box {
      width: 1226px;
      height: 100%;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .left {
        display: flex;
        flex-direction: row;
        height: 100%;
        align-items: center;
        color: #616161;
        font-size: 12px;
        span {
          padding: 0 8px;
        }
        .item {
          cursor: pointer;
          &:hover {
            color: #ff6700;
          }
        }
        .title {
          color: #424242;
          font-weight: 400;
          font-size: 18px;
        }
      }
      .right {
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        color: #616161;
        font-size: 14px;
        .item {
          cursor: pointer;
          position: relative;
          padding-left: 15px;
          &:hover {
            color: #ff6700;
          }
          &::after {
            content: "";
            width: 1px;
            height: 10px;
            position: absolute;
            background-color: #e0e0e0;
            right: -7px;
            top: 5px;
          }
          &:nth-last-child(1) {
            &::after {
              background-color: transparent;
            }
          }
        }
      }
    }
  }
  .menus-top {
    position: fixed;
    top: -68px;
    left: 0;
    transition: all 0.5s;
  }
  .menus {
    top: 0;
  }
  .product-box {
    width: 1226px;
    margin: 0 auto;
    padding: 32px 0 12px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .product-swiper {
      position: relative;
      width: 560px;
      height: 560px;
      .img {
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-size: 100%;
        transition: all 0.4s linear;
      }
      .prev {
        cursor: pointer;
        position: absolute;
        left: 0;
        top: 45%;
        width: 41px;
        height: 69px;
        transition: all 0.3s;
        display: flex;
        align-items: center;
        justify-content: center;
        transform: translateY(-50%);
        border-radius: 0 3px 3px 0px;
        color: #a3a3a3;
        .left {
          transform: rotate(180deg);
          transition: all 0.3s;
        }
        &:hover {
          background-color: rgba(0, 0, 0, 0.5);
          .left {
            color: rgba(255, 255, 255, 0.8);
          }
        }
      }
      .next {
        cursor: pointer;
        position: absolute;
        right: 0;
        top: 45%;
        width: 41px;
        height: 69px;
        transition: all 0.3s;
        display: flex;
        align-items: center;
        justify-content: center;
        transform: translateY(-50%);
        border-radius: 3px 0px 0px 3px;
        color: #a3a3a3;
        .right {
          transition: all 0.3s;
        }
        &:hover {
          background-color: rgba(0, 0, 0, 0.5);
          .right {
            color: rgba(255, 255, 255, 0.8);
          }
        }
      }
      .dot {
        position: absolute;
        left: 100px;
        bottom: 40px;
        display: flex;
        flex-direction: row;
        align-items: center;
        .dian {
          cursor: pointer;
          width: 50px;
          height: 3px;
          background: #ccc;
          margin: 0 5px;
          &:hover {
            background: #a3a3a3;
          }
        }
        .dian-true {
          background-color: rgba(0, 0, 0, 0.5);
        }
      }
    }
    .product-con {
      width: 600px;
      .title {
        font-size: 24px;
        font-weight: 400;
        color: #212121;
      }
      .salle {
        margin-top: 25px;
        .a {
          color: rgb(255, 74, 0);
          outline: none;
          text-decoration: none;
          line-height: 1.5;
          font-size: 14px;
        }
        .p {
          color: #b0b0b0;
          outline: none;
          text-decoration: none;
          line-height: 1.5;
          font-size: 14px;
        }
      }
      .from {
        color: rgb(255, 74, 0);
        margin-top: 25px;
        font-size: 14px;
      }
      .money {
        color: rgb(255, 74, 0);
        padding: 12px 0 10px;
        font-size: 18px;
        line-height: 1;
        display: block;
      }
      .address-box {
        width: 600px;
        padding: 30px 50px;
        background: #fafafa;
        border: 1px solid #e0e0e0;
        position: relative;
        span {
          margin-right: 14px;
          color: #333;
          font-size: 14px;
        }
        i {
          padding-right: 10px;
          color: #999;
        }
        .changed {
          color: rgb(255, 74, 0);
          font-size: 14px;
        }
        p {
          color: rgb(255, 74, 0);
          font-size: 14px;
          padding-top: 10px;
          padding-left: 30px;
        }
      }
      .product-type {
        width: 600px;
        .name {
          margin-top: 10px;
          font-size: 18px;
          color: #333;
        }
        .type-box {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          flex-wrap: wrap;
          .type {
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 292px;
            padding: 10px 0;
            font-size: 16px;
            margin-top: 10px;
            border: 1px solid #e7e7e7;
            // transition: all 0.5s;
            &:hover {
              color: #ff6700;
              border: 1px solid #ff6700;
            }
          }
          .type-true {
            color: #ff6700;
            border: 1px solid #ff6700;
          }
        }
      }
      .serve {
        width: 100%;
        .serve-type {
          .top {
            margin-top: 20px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
            .name {
              font-size: 18px;
              font-weight: bold;
            }
            .help {
              cursor: pointer;
              color: #ff6700;
              font-size: 14px;
            }
          }
          .type {
            cursor: pointer;
            padding: 30px 0;
            border: 1px solid #e7e7e7;
            display: flex;
            flex-direction: row;
            align-items: center;
            .icon {
              margin-left: 40px;
              width: 15px;
              height: 15px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              border: 1px solid #e7e7e7;
              color: #333;
              .gou {
                text-align: center;
                font-size: 12px;
                display: none;
              }
              .gou-true {
                display: block;
              }
            }
            .icon-true {
              background: #ff6700;
              color: #fff;
            }
            img {
              width: 50px;
              height: 50px;
              margin-left: 10px;
              margin-right: 15px;
            }
            .serve-box {
              flex: 1;
              .name {
                color: #222;
                font-size: 18px;
                margin: 0 0 10px 0;
                .servemoney {
                  padding: 2px 6px;
                  background: #ff6700;
                  color: #fff;
                  border-radius: 10px;
                  font-size: 14px;
                }
              }
              .p {
                color: #b0b0b0;
                font-size: 14px;
                width: 286px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                margin-top: 5px;
              }
              .add {
                margin-top: 10px;
                font-size: 14px;
                .icon2 {
                  float: left;
                  width: 15px;
                  height: 15px;
                  border-radius: 50%;
                  border: 1px solid #e7e7e7;
                  color: #333;
                  font-size: 12px;
                  margin-right: 5px;
                  .gou {
                    text-align: center;
                    display: none;
                  }
                }
                .icon2-true {
                  background: #ff6700;
                  color: #fff;
                  .gou {
                    display: block;
                  }
                }
                span {
                  float: left;
                }
                .consent {
                  color: #ff6700;
                }
                .serve-money2 {
                  float: right;
                  color: #757575;
                  padding-right: 20px;
                }
              }
            }
          }
          .type-true {
            border: 1px solid #ff6700;
            box-sizing: border-box;
            .name {
              color: #ff6700 !important;
            }
            .icon {
              background-color: #ff6700;
              .gou {
                display: block;
                color: white;
              }
            }
            .icon2 {
              background-color: #ff6700;
              .gou {
                display: block !important;
                color: white;
              }
            }
          }
        }
      }
      .total {
        background: #f9f9fa;
        padding: 30px;
        margin-bottom: 30px;
        margin-top: 30px;
      }
      .buy-btn {
        display: flex;
        flex-direction: row;
        .btn {
          width: 300px;
          height: 54px;
          margin-right: 10px;
          color: #ff6700;
          background: #fff;
          border: 1px solid #ff6700;
          box-sizing: border-box;
          text-align: center;
          line-height: 54px;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.4s;
          &:hover {
            background-color: #ff6700;
            color: #fff;
          }
        }
        .like {
          width: 140px;
          height: 52px;
          line-height: 52px;
          border: 1px solid #b0b0b0;
          text-align: center;
          cursor: pointer;
          transition: all 0.4s;
          transition: all 0.4s;
          font-size: 16px;
          background: #b0b0b0;
          color: #fff;
          &:hover {
            background-color: #757575;
            border-color: #757575;
            color: #fff;
          }
        }
      }
      .safeguard {
        color: #b0b0b0;
        font-style: normal;
        // font-size: 14px;
        div {
          float: left;
          i {
            margin-right: 5px;
          }
          & + div {
            margin-left: 20px;
          }
        }
      }
    }
  }
  .explain-box {
    width: 100%;
    background: #f5f5f5;
    margin-top: 20px;
    .explain {
      width: 1226px;
      margin: 0 auto;

      padding-bottom: 50px;
      .top {
        padding: 22px 0;
        width: 100%;
        font-size: 22px;
        .txt {
          padding: 1em 0;
        }
      }
    }
  }
}
</style>