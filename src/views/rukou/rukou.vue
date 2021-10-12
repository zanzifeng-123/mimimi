<template>
  <div class="rukou-list">
    <div class="rukou">
      <div class="rukou-link">
        <div class="item" v-for="(item, index) in list" :key="index">
          <img :src="item.img" alt="" />
          <div class="name">{{ item.name }}</div>
        </div>
      </div>
      <div class="img">
        <img :src="item.images" alt="" v-for="(item, index) in img" :key="index" />
      </div>
    </div>
  </div>
</template>

<script>
import { list } from "./rukou";
export default {
  data() {
    return {
      list,
      img: [
        {
          images:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e5f20a62c3d5b3d6806bd51ab6c5dd12.jpg?w=632&h=340",
        },
       {
         images: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8a43378b96501d7e227a9018fe2668c5.jpg?w=632&h=340",
       },
      {
        images:  "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/793913688bfaee26b755a0b0cc8575fd.jpg?w=632&h=340",
      },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.rukou-list {
  margin-top: 10px;
  // width: 1920px;
  height: 170px;
  &::after{
    content: '';
    display: block;
    clear: both;
  }
  .rukou {
    width: 1226px;
    margin: 0 auto;
    height: 170px;
    .rukou-link {
      width: 234px;
      height: 170px;
      float: left;
      background-color: #665e57;
      .item {
        cursor: pointer;
        float: left;
        padding-top: 20px;
        box-sizing: border-box;
        width: 76px;
        height: 82px;
        transition: all 0.3s;
        opacity: 0.5;
        &:hover {
          opacity: 1;
        }
        img {
          width: 24px;
          height: 24px;
          display: block;
          margin: 0 auto;
        }
        .name {
          font-size: 12px;
          margin-top: 5px;
          color: #fff;
          text-align: center;
        }
      }
    }
    .img {
      margin-left: 20px;
      float: left;
      height: 170px;
      // background-color: yellow;
      width: 972px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      img{
        width: 316px;
        height: 170px;
      }
    }
  }
}
</style>