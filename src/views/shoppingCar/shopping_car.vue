<template>
  <div class="shopping_car">
    <div class="commodity_item" v-for="(item, index) in commodity" :key="index">
      <div class="img" :style="item.img"></div>
      <div class="commodity_txt">
        <div class="title">{{ item.title }}</div>
        <div class="money">{{ item.money }}</div>
      </div>
      <div class="delete">
        <div class="icon_box" @click="delete_commodity(index)">
          <i class="iconfont icon-shanchu"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["commodity"],
  methods:{
    delete_commodity(index){
      if(window.confirm('你确定删除该商品吗')){
        this.$store.dispatch('shopping_car/delete_commodity',index)
      }
    }
  }
};
</script>

<style lang="less" scoped>
.shopping_car {
  width: 100%;
  .commodity_item {
    width: 100%;
    height: 80px;
    padding: 0 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;

    &:hover {
      background-color: #ccc;
      .commodity_txt {
        .money {
          color: #ff6700;
        }
      }
      .delete {
        width: 50px;
      }
    }
    .img {
      width: 80px;
      height: 80px;
      background-size: 100%;
    }
    .commodity_txt {
      flex: 1;
      color: #000;
      text-align: right;
    }
    .delete {
      width: 0;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      transition: all 0.5s;
      .icon_box {
        cursor: pointer;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        background-color: #f56c6c;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
      }
    }
  }
}
</style>