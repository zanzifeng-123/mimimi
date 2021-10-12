<template>
  <div class="falsh">
    <div class="box">
      <div class="top">
        <div class="title">小米闪购</div>
        <div class="btn">
          <div class="prev iconfont icon-prevpage" @click="prev"></div>
          <div class="next iconfont icon-prevpage" @click="next"></div>
        </div>
      </div>
      <div class="bottom">
        <div class="falsh-time" @click="falsh">
          <div class="start">{{ time.start }}</div>
          <img
            src="data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAA1CAYAAAAklDnhAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ
bWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp
bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6
eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1
MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo
dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw
dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAv
IiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RS
ZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpD
cmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5j
ZUlEPSJ4bXAuaWlkOjY4Q0ZFMkY5MTJFNzExRThCMkM4OEM1RTNBNjczQUVBIiB4bXBNTTpEb2N1
bWVudElEPSJ4bXAuZGlkOjY4Q0ZFMkZBMTJFNzExRThCMkM4OEM1RTNBNjczQUVBIj4gPHhtcE1N
OkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjhDRkUyRjcxMkU3MTFFOEIy
Qzg4QzVFM0E2NzNBRUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjhDRkUyRjgxMkU3MTFF
OEIyQzg4QzVFM0E2NzNBRUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94Onht
cG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5oEyacAAACoklEQVR42sSYv0tbURTHX0LqD6T4g4pE
cHDoUOloBxVd/QFFEcQqWtrSKlKFmmAslopohzgIbv4FwUEE0clFujiIi+BSIbRQ0ooKRReRULHf
S48Qgu++c3/FAx+iyU3eJzf3nnPuC/1qavQ04zVY8szjCHRGNN9cBD6DSkOJKzAGzsOaH/AW1FuY
jRg4EH/oiJSCTxYk1sDK7T86Iu9BraHED/Au9wlVkYdg2lAiC/rBhYnIB/DIUOQj2M9/UkWkCsQN
JbbA8l0vqIhMgXIDiZ/gFbgxEakBEwYSf8Eg+OM3gCsyA8oMRETy25UN4IjUgVEDiW2wGDSIIzIL
ijUljsFLv3WhIvKYFphOXNO6OOUMDhKZA7qFcQF85Q6WXeQpeKEpcULlvY8xthp8iwR8I93qLLb7
KnOsSPWNfhd6Bro99yHqTi9IhyWzEXIsIXbSG7Djt1jbQHsBZkMkyZRs13wpgIRoiJKy7dsBWh1L
bN5Vt3JFQrQ2XMYeGKBk5yvSI7aRQ4k0eA4uZZlVPM47lDgTZxd6lKb4AcqkLuKSZiIdVGsiVFNc
xDV9yT1Orekjoe+MDw4pHqwmaJewit66Ql0QaX+DOTaZe4DitAFZxQaaEynKnJ6KCDeaQAtj3A7V
kBtXIpwT3iFV06zqquaKPKEtKIsM6Mo/StoWiQeMvSCJjO4+54hEwTCjuTk0STgckUm6QxTY3LgU
Kc+/jyFrblyKCIkKbnPjSkT8HDGV5saVyBAtVHZz40Ik7HNTRtrcuBARF2tQbW5ciCR0mhvbIs2E
cnNjWySh29zYFGnIK25KzY1Nkdziptzc2BKJUu7Qbm5sicQom2o3NzZEKqiu/DZpbmyIjIAHNBMZ
7x4iTALjhcgVQSIl3v87w5vePcY/AQYAFYR6skFSqBUAAAAASUVORK5CYII="
            alt=""
          />
          <div class="txt">距离结束还有</div>
          <div class="time">
            <div class="data" >{{time.hour|flterTime}}</div>
            <div class="dot">:</div>
            <div class="data">{{time.min|flterTime}}</div>
            <div class="dot">:</div>
            <div class="data" >{{time.sec|flterTime}}</div>
          </div>
        </div>
        <div class="falsh-product">
          <div
            class="list"
            :style="{
              width: list_width,
              transform: `translateX(-${falsh_style}px)`,
            }"
          >
            <div
              class="item"
              v-for="(item, index) in list"
              :key="index"
              :style="item.background"
            >
              <img :src="item.img" alt="" />
              <div class="name">{{ item.name }}</div>
              <div class="txt">{{ item.txt }}</div>
              <div class="money">
                <div class="now">{{ item.nowmoney }}元</div>
                <div class="old">{{ item.oldmoney }}元</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="home-banner-box">
      <img :src="AD" alt="" />
    </div>
  </div>
</template>

<script>
import { list } from "./falsh";
let index = 0;
export default {
  data() {
    return {
      AD:
        "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a59db7dac2804ee2b5c7be1b02b3770e.jpg?thumb=1&w=1226&h=120&f=webp&q=90",
      list_width: null,
      list,
      timer: null,
      index: 0,
      falsh_style: null,
      time: {
        start: "14:00 场",
        hour: 0,
        min: 0,
        sec: 0,
        num: 3600,
      },
      data: new Date("2021/10/15 15:00"),
      nowdata: new Date(),
    };
  },
  mounted() {
    // console.log(this.time.num);
    this.auto();
    this.wid();
    index = this.list.length;
    this.time.num = (this.data - this.nowdata) / 1000;
  },
  methods: {
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
    wid() {
      this.list_width = (this.list.length + 1) * 233.5 + "px";
    },
    prev() {
      if (index == this.list.length) {
        return;
      } else if (index <= 3) {
        this.falsh_style += -index * 247.5;
        index += 4;
      } else {
        index += 4;
        this.falsh_style -= 4 * 247.5;
      }
    },
    next() {
      if (index <= 4) {
        return;
      } else if (index < 8) {
        index -= 4;
        this.falsh_style += index * 247.5;
      } else {
        index -= 4;
        this.falsh_style += 4 * 247.5;
      }
    },
    falsh(){
      this.$router.push("/falshbuy");
      document.documentElement.scrollTop =0;
    }
  },
  computed: {},

  watch: {
    "time.num"(val) {
      if(val<=0){
        this.time.hour=0;
        this.time.min=0;
        this.time.sec=0;
      }else{
        let hour = parseInt(val / 3600);
        let min = parseInt((val - hour * 3600) / 60);
        let sec = parseInt(val % 60);
        this.time.hour=hour;
        this.time.min=min;
        this.time.sec=sec;
      }
      // this.time = {
      //   hour,
      //   min,
      //   sec,
      //   num: val,
      // };
    },
  },
  filters:{
    flterTime(val){
      val = Number(val);
            return val>9?val:'0'+val
    }
  }
};
</script>

<style lang="less" scoped>
.falsh {
  background-color: #f5f5f5;
  // width: 1920px;
  &::after {
    content: "";
    clear: both;
    display: block;
  }
  .box {
    width: 1226px;
    display: block;
    margin: 0 auto;
    &::after {
      content: "";
      clear: both;
      display: block;
    }
    .top {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      .title {
        font-size: 22px;
        font-weight: 200;
        line-height: 58px;
        color: #333;
      }
      .btn {
        display: flex;
        flex-direction: row;
        .prev {
          transform: rotate(-180deg);
        }
        div {
          cursor: pointer;
          width: 35px;
          height: 20px;
          border: 1px solid #e0e0e0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #b0b0b0;
        }
      }
    }
    .bottom {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .falsh-time {
        cursor: pointer;
        padding: 0 30px;
        box-sizing: border-box;
        display: block;
        width: 234px;
        height: 300px;
        padding-top: 39px;
        border-top-width: 1px;
        border-top-style: solid;
        border-top-color: #e53935;
        background: #f1eded;
        text-align: center;
        .start {
          font-size: 21px;
          padding-top: 15px;
          color: #e53935;
          padding-bottom: 30px;
        }
        .txt {
          padding-top: 30px;
          color: rgba(0, 0, 0, 0.54);
          font-size: 15px;
        }
        .time {
          margin-top: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-direction: row;
          .data {
            width: 46px;
            height: 46px;
            background: #605751;
            color: #fff;
            font-size: 24px;
            line-height: 46px;
          }
        }
      }
      .falsh-product {
        width: 992px;
        overflow: hidden;
        // background-color: red;
        .list {
          height: 300px;
          transition: all 0.5s linear;
          .item {
            border-top-width: 1px;
            border-top-style: solid;
            width: 233.5px;
            margin-left: 14px;
            float: left;
            height: 100%;
            background-color: #fff;
            img {
              display: block;
              margin: 20px auto;
              width: 160px;
              height: 160px;
              border: 0;
            }
            .name {
              display: block;
              width: 100%;
              margin: 0px auto;
              font-size: 14px;
              font-weight: 400;
              text-overflow: ellipsis;
              color: #212121;
              overflow: hidden;
              white-space: nowrap;
              text-align: center;
            }
            .txt {
              text-align: center;
              display: block;
              width: 100%;
              height: 18px;
              font-size: 14px;
              margin: 0px auto;
              font-size: 12px;
              text-overflow: ellipsis;
              color: #b0b0b0;
              overflow: hidden;
              white-space: nowrap;
            }
            .money {
              width: 100%;
              text-align: center;
              display: block;
              margin: 10px auto;
              color: #ff6709;
              display: flex;
              flex-direction: row;
              justify-content: center;
              font-size: 14px;
              .now {
                text-align: center;
              }
              .old {
                margin-left: 8px;
                color: #b0b0b0;
                text-decoration: line-through;
              }
            }
          }
        }
      }
    }
  }
  .home-banner-box {
    width: 1226px;
    height: 120px;
    display: block;
    margin: 0 auto ;
    margin-top: 20px;
    img {
      width: 1226px;
      height: 120px;
    }
  }
}
</style>