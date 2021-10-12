<template>
  <div class="home">
    <div class="item" v-for="(item, index) in list" :key="index">
      <img class="img1" :src="item.img1" alt="" />
      <img class="img2" :src="item.img2" alt="" />
      <div class="name">{{ item.name }}</div>
    </div>
  </div>
</template>

<script>
import { list } from "./home";
export default {
  data() {
    return {
      list,
    };
  },
};
</script>

<style lang="less" scoped>
.home {
  position: fixed;
  bottom: 100px;
  right: 0;
  z-index: 100;
  width: 84px;
  //   height: 100px;
  background-color: #fff;
  .item {
    border-bottom: 1px solid #f5f5f5;
    background-color: #fff;
    &:hover {
      .img1 {
        display: none;
      }
      .img2 {
        display: block;
      }
      .name{
         color: #ff6709;
      }
    }
    width: 100%;
    .img1 {
      height: 30px;
      width: 30px;
      margin: 0 auto;
      display: block;
      padding: 15px;
    }
    .img2 {
      display: none;
      height: 30px;
      width: 30px;
      margin: 0 auto;
      padding: 15px;
    }
    .name {
      color: #757575;
      transition: color 0.3s;
      font-size: 13px;
      text-align: center;
      padding-bottom: 10px;
    }
  }
}
</style>