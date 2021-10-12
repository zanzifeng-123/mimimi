<template>
  <div class="footer">
    <div class="top">
      <div class="title" v-for="(item, index) in foot.title" :key="index">
        <i class="iconfont icon" :class="item.icon"></i>
        <div class="name">{{ item.name }}</div>
      </div>
    </div>
    <div class="bottom">
      <div class="help" v-for="(item, index) in foot.bottom" :key="index">
        <div class="name">{{ item.name }}</div>
        <div class="txt" v-for="(ite, index) in item.txt" :key="index">
          {{ item.txt[index] }}
        </div>
      </div>
      <div class="service">
        <div class="phone">400-100-5678</div>
        <div class="time">8:00-18:00（仅收市话费）</div>
        <div class="relation">
          <i class="iconfont icon-xiaoxi-bt xiaoxi"></i>
          人工客服
        </div>
        <div class="add">
          <div>关注小米:</div>
          <i class="iconfont icon-weibo btn"></i>
          <i class="iconfont icon-weixin btn"></i>
        </div>
      </div>
    </div>
    <txt></txt>
  </div>
</template>

<script>
import { foot } from "./footer";
export default {
  components: {
    txt: require("@/views/footer/txt.vue").default,
  },
  data() {
    return {
      foot,
    };
  },
};
</script>

<style lang="less" scoped>
.footer {
  width: 100%;
  margin-top: 30px;
      background: #fafafa;
  &::after {
    content: "";
    clear: both;
    display: flex;
  }
  .top {
    width: 1226px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    border-bottom: 1px solid #e0e0e0;
    .title {
      cursor: pointer;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 245.2px;
      color: #616161;
      font-size: 16px;
      transition: all 0.35s;
      border-right: 1px solid #e0e0e0;
      &:nth-last-child(1) {
        border: none;
      }
      &:hover {
        color: #ff6700;
      }
      .icon {
      }
      .name {
        margin-left: 10px;
      }
    }
  }
  .bottom {
    width: 1226px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    padding: 40px 0;
    .help {
      width: 160px;
      display: flex;
      flex-direction: column;
      
      .name {
        
        padding-bottom: 20px;
        color: #424242;
        font-size: 14px;
      }
      .txt {
        color: #757575;
        font-size: 12px;
        padding: 5px 0;
        cursor: pointer;
        &:hover {
          color: #ff6700;
        }
      }
    }
    .service {
      border-left: 1px solid #e0e0e0;
      margin-top: 20px;
      width: 251px;
      text-align: center;
      //   display: flex;
      //   flex-direction: column;
      //   justify-content: center;
      .phone {
        // width: 100%;
        font-size: 22px;
        line-height: 1;
        color: #ff6700;
        text-align: center;
        margin: 0 0 5px 0;
      }
      .time {
        margin: 0 0 5px 0;
        font-size: 12px;
        text-align: center;
        color: #616161;
      }
      .relation {
        cursor: pointer;
        width: 120px;
        height: 30px;
        text-align: center;
        border-color: #ff6700;
        background: #fff;
        color: #ff6700;
        margin: 0 auto;
        line-height: 30px;
        border: 1px solid;
        font-size: 12px;
        transition: 0.3s;
        &:hover {
          background: #ff6700;
          color: #fff;
        }
        .xiaoxi {
          font-size: 12px;
        }
      }
      .add {
        margin-top: 5px;
        font-size: 12px;
        text-align: center;
        color: #616161;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        .btn {
          font-size: 20px;
          margin-left: 3px;
        }
      }
    }
  }
}
</style>