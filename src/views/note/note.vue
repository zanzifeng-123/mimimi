<template>
  <div class="note">
    <div class="top">
      <div class="title">{{ name }}</div>
      <div class="title-btn">
        <div
          class="btn"
          :class="item.active ? 'btn-true' : ''"
          v-for="(item, index) in product"
          :key="index"
          @mouseenter="switchover(index)"
        >
          {{ item.btn }}
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="AD">
        <img :src="AD" alt="" />
      </div>
      <div class="note-list " :class="ite.active?'':'note-list-false'"  v-for="(ite,index) in product" :key="index">
        <div class="item" v-for="(item, index) in ite.product" :key="index" @click="to_buy">
          <img :src="item.img" :alt="item.name" />
          <div class="name">{{ item.name }}</div>
          <div class="txt">{{ item.txt }}</div>
          <div class="money">{{ item.money }}元起</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { product} from "./node";
export default {
  data() {
    return {
      props:{
        note:{}
      },
        product,
      AD:
        "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/574c6643ab91c6618bfb2d0e2c761d0b.jpg?thumb=1&w=234&h=614&f=webp&q=90",
      name: "手机",
      note_list:[
          {
              active:true,
          },
           {
              active:false,
          },
      ],
    };
  },
  methods:{
    to_buy(){
      this.$router.push("/buy");
      document.documentElement.scrollTop =0;
    },
      switchover(index){
          this.product.forEach((ro) => (ro.active = false));
      this.product[index].active = true;
      }
  }
};
</script>

<style lang="less" scoped>
.note {
  // width: 1920px;
  background: #f5f5f5;
  &::after{
    content: '';
    clear: both;
    display: block;
  }
  .top {
    width: 1226px;
    margin: 0 auto;
    height: 58px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .title {
      font-size: 22px;
      font-weight: 200;
      line-height: 58px;
      color: #333;
    }
    .title-btn {
      font-size: 16px;
      color: #333;
      display: flex;
      flex-direction: row;

      .btn {
        cursor: pointer;
        padding: 0 0 5px 0;
        & + .btn {
          margin-left: 15px;
        }
      }
      .btn-true {
        border-bottom-width: 2px;
        color: #ff6700;
        border-bottom: 2px solid #ff6700;
      }
    }
  }
  .bottom {
    width: 1226px;
    height: 614px;
    margin: 0 auto;
    display: block;
    .AD {
      float: left;
      width: 234px;
      height: 614px;
      img {
        width: 234px;
        height: 614px;
      }
    }
    .note-list {
      float: left;
      width: 992px;
      .item {
        cursor: pointer;
        height: 260px;
        padding: 20px 0;
        z-index: 1;
        float: left;
        width: 234px;
        margin-left: 14px;
        margin-bottom: 14px;
        background: #fff;
        transition: all 0.2s linear;
        &:hover {
          transform: translate3d(0, -2px, 0);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        }
        img {
          width: 160px;
          height: 160px;
          margin: 0 auto;
          display: block;
        }
        .name {
          display: block;
          margin: 0 10px 2px;
          text-align: center;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          font-size: 14px;
          font-weight: 400;
          color: #333;
        }
        .txt {
          margin: 0 10px 10px;
          height: 18px;
          font-size: 12px;
          color: #b0b0b0;
          text-align: center;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
        .money {
          text-align: center;
          color: #ff6700;
          margin: 0 10px 14px;
          font-size: 14px;
        }
      }
    }
    .note-list-false{
        display: none;
    }
  }
}
</style>