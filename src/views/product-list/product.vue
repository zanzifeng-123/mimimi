<template>
  <div class="product-list">
    <div class="left">
      <div class="item" v-for="(item, index) in product" :key="index">
        <div class="name">{{ item.name }}</div>
        <i class="iconfont icon-prevpage"></i>
        <div class="list" :style="{
          width:item.width
        }">
          <div class="product" v-for="(ite, ind) in item.list" :key="ind">
            <img :src="ite.img" alt="" />
            <div class="product-name">{{ ite.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { product } from "./product-list";
export default {
  data() {
    return {
      product,
      
      index: 0,
    };
  },
  mounted() {
    this.wid();
  },
  methods: {
    wid() {
      this.product.forEach(ro=>{
        // ro.width = Math.ceil(ro.list.length/6)*275+'px'
        this.$set(ro,'width',Math.ceil(ro.list.length/6)*252+'px')
        // console.log(this.product);
      })
    },
  },
};
</script>

<style lang="less" scoped>
.product-list {
  position: absolute;
  height: 460px;
  background: rgba(105, 101, 101, 0.6);
  &::after{
    content: '';
    display: block;
    clear: both;
  }
  .left {
    //   position: relative;
    margin-top: 20px;
    width: 234px;
    .item {
      cursor: pointer;
      width: 100%;
      height: 42px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 30px;
      box-sizing: border-box;
      // transition: all 0.25s;
      color: #fff;
      &:hover {
        background-color: #ff6700;
        .list {
          // display: block;
          display: flex;
        }
      }
      .name {
        color: #fff;
        font-size: 14px;
      }
      .list {
        cursor: auto;
        display: none;
        position: absolute;
        height: 460px;
        //   min-width: 300px;
        border: 1px solid #e1e2e5;
        background: white;
        border-left-color: transparent;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.14);
        top: 0;
        left: 234px;
        z-index: 10;
        padding: 10px 0;
        box-sizing: border-box;
        justify-content: flex-start;
        flex-direction: column;
        flex-wrap: wrap;
        .product {
          flex-shrink: 0;
          cursor: pointer;
          width: 234px;
          height: 42px;
          padding: 15px 9px;
          display: flex;
          flex-direction: row;
          align-items: center;
          color: #222;
          font-size: 14px;
          transition: all 0.3s;
          &:hover {
            color: #ff6700;
          }
          .product-name {
            padding-left: 20px;
          }
        }
      }
    }
  }
}
</style>