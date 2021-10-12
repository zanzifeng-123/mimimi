<template>
 <div class="swiper">
    <div class="box">
    <product></product>
    <div class="img" :style="list[index].img"></div>
    <div class="left" @click="prev">
      <i class="prev iconfont icon-prevpage"></i>
    </div>
    <div class="right" @click="next">
      <i class="next iconfont icon-prevpage"></i>
    </div>
    <div class="dian">
      <div
        class="dot"
        v-for="(item, index) in list"
        :key="index"
        :class="item.active ? 'active' : ''"
        @click="active(index)"
      ></div>
    </div>
  </div>

 </div>
</template>

<script>
export default {
  components: {
    product: require("@/views/product-list/product").default,
  },
  data() {
    return {
      index: 0,
      timer: null,
      list: [
        {
          img: `background-image: url("https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d65e7bc110ca74b9d7fa7ce53a841971.jpg?w=2452&h=920")`,
          active: true,
        },
        {
          img: `background-image: url("https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bf00c9bc91cd04aa07d9d33c4c350903.jpg?thumb=1&w=1226&h=460&f=webp&q=90")`,
          active: false,
        },
        {
          img: `background-image: url("https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9ebff5f5c1f52f2dbdd611897adbefd4.jpg?thumb=1&w=1226&h=460&f=webp&q=90")`,
          active: false,
        },
        {
          img: `background-image: url("https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0ef4160c861b998239bce9adb82341e7.jpg?thumb=1&w=1226&h=460&f=webp&q=90")`,
          active: false,
        },
        {
          img: `background-image: url("https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0e4acf11840c1d9600c34c46ffa73ec8.jpg?thumb=1&w=1226&h=460&f=webp&q=90")`,
          active: false,
        },
      ],
    };
  },
  methods: {
    prev() {
      clearTimeout(this.timer);
      if (this.index == 0) {
        this.index = this.list.length - 1;
      } else {
        this.index--;
      }
      this.auto();
    },
    next() {
      clearTimeout(this.timer);
      if (this.index == this.list.length - 1) {
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
  },
  mounted() {
    this.auto();
  },
  watch: {
    index(val) {
      this.list.forEach((ro) => (ro.active = false));
      this.list[val].active = true;
    },
  },
};
</script>

<style lang="less" scoped>
.swiper{
  // width: 1920px;
  .box {
  position: relative;
  display: block;
  width: 1226px;
  height: 460px;
  margin: 0 auto;
  &::after {
    content: "";
    clear: both;
    display: block;
  }
  .img {
    width: 1226px;
    height: 460px;
    transition: all 0.4s linear;
    background-size: 100%;
  }
  .left {
    cursor: pointer;
    position: absolute;
    top: 50%;
    left: 234px;
    width: 41px;
    height: 69px;
    transform: translateY(-50%);
    transition: all 0.3s;
    border-radius: 0 3px 3px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background-color: rgba(0, 0, 0, 0.5);
      .prev {
        color: rgba(255, 255, 255, 0.8);
      }
    }
    .prev {
      font-size: 25px;
      color: rgba(0, 0, 0, 0.3);
      transform: rotate(-180deg);
    }
  }
  .right {
    cursor: pointer;
    position: absolute;
    top: 50%;
    right: 0;
    width: 41px;
    height: 69px;
    transform: translateY(-50%);
    transition: all 0.3s;
    border-radius: 3px 0px 0px 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background-color: rgba(0, 0, 0, 0.5);
      .next {
        color: rgba(255, 255, 255, 0.8);
      }
    }
    .next {
      font-size: 25px;
      color: rgba(0, 0, 0, 0.3);
    }
  }
  .dian {
    position: absolute;
    bottom: 10%;
    right: 5%;
    .dot {
      cursor: pointer;
      float: left;
      width: 7px;
      height: 7px;
      border-radius: 50%;
      border: 2px solid rgba(255, 255, 255, 0.5);
      background-color: rgba(0, 0, 0, 0.5);
      margin-left: 5px;
      &:hover {
        border: 2px solid rgba(0, 0, 0, 0.5);
        background-color: rgba(255, 255, 255, 0.5);
      }
    }
    .active {
      border: 2px solid rgba(0, 0, 0, 0.5);
      background-color: rgba(255, 255, 255, 0.5);
    }
  }
}
}
</style>