<template>
  <div class="vid">
    <div class="top">
      <div>{{ video.name }}</div>
      <div class="more">
        {{ video.btn }}
        <i class="iconfont icon-qianjin-copy go"></i>
      </div>
    </div>
    <div class="bottom">
      <div class="item" v-for="(item, index) in video.element" :key="index">
        <div class="img">
          <img :src="item.img" alt="" />
          <i class="iconfont icon-play play"></i>
        </div>
        <div class="name">{{ item.name }}</div>
        <div class="txt">{{ item.txt }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { video } from "./video";
export default {
  data() {
    return {
      video,
    };
  },
};
</script>

<style lang="less" scoped>
.vid {
  width: 1226px;
  //   height: 300px;
  margin: 0 auto;
  //   background-color: yellow;
  .top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    font-size: 22px;
    font-weight: 200;
    line-height: 58px;
    color: #333;
    .more {
      cursor: pointer;
      font-size: 16px;
      line-height: 58px;
      color: #424242;
      -webkit-transition: all 0.4s;
      transition: all 0.4s;
      &:hover {
        color: #ff6700;
        .go {
          color: #ff6700;
        }
      }
      .go {
        color: #b0b0b0;
        font-size: 18px;
        transition: all 0.4s;
      }
    }
  }
  .bottom {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .item {
      padding-bottom: 30px;
      cursor: pointer;
      width: 296px;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      transition: all 0.1s;
      background: #fff;
      &:hover {
        transform: translate3d(0, -2px, 0);
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
      }
      .img {
        img {
          width: 100%;
          height: 180px;
        }
        .play {
          position: absolute;
          top: 140px;
          left: 20px;
          color: #fff;
          font-size: 20px;
          transition: all 0.5s;
        }
        &:hover {
          .play {
            color: #ff6700;
          }
        }
      }

      .name {
        margin: 0 14px 6px;
        margin-top: 30px;
        font-size: 14px;
        font-weight: 400;
        // text-align: center;
        color: #333;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .txt {
        // height: 18px;
        line-height: 18px;
        // margin: 0 14px;
        font-size: 12px;
        color: #b0b0b0;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
}
</style>