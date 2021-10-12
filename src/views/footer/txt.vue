<template>
  <div class="foot-txt">
    <div class="foot">
      <img class="logo" :src="txt.logo" alt="" />
      <div class="right">
        <div class="sites">
          <div class="" v-for="(item, index) in txt.product" :key="index">
            {{ item }}
          </div>
        </div>
        <div class="sites">
          <div class="" v-for="(item, index) in txt.association" :key="index">
            {{ item }}
          </div>
        </div>
        <p>
          <a href="">京ICP证110507号</a>
          <a href="http://beian.miit.gov.cn/">京ICP备10046444号</a>
          <a
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802020134"
            >京公网安备11010802020134号</a
          >
          <a href="//www.mi.com/culture-license/">京网文[2020]0276-042号</a>
        </p>
        <p>
          <a href="">（京）网械平台备字（2018）第00005号</a>
          <a href="">互联网药品信息服务资格证 (京)-非经营性-2014-0090</a>
          <a href="">营业执照</a>
          <a href="">医疗器械质量公告</a>
        </p>
        <p>
          <a href="">增值电信业务许可证</a> 网络食品经营备案
          京食药网食备202010048
          <a href="">食品经营许可证</a>
          <br />
          违法和不良信息举报电话：171-5104-4404
          <a
            href="https://www.mi.com/intellectual"
            target="_blank"
            stat_exposure="true"
            >知识产权侵权投诉</a
          >
          本网站所列数据，除特殊说明，所有数据均出自我司实验室测试
        </p>
        <div class="img">
          <img
            :src="item"
            alt=""
            v-for="(item, index) in txt.img"
            :key="index"
          />
          <div class="img2">
            <img :class="active ? '' : 'active'" :src="img1" alt="" />
            <img :class="active ? 'active' : ''" :src="img2" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="slogan">

    </div>
  </div>
</template>

<script>
import { txt } from "./txt";
export default {
  data() {
    return {
      txt,
      img1:
        "https://cnbj1.fds.api.xiaomi.com/b2c-misite-activity/f1ee261b96ae71e845efba398efeca02.png",
      img2:
        "https://cnbj1.fds.api.xiaomi.com/b2c-misite-activity/11f9c5c32af1f26fdd4a549edccd3d93.png",
      active: true,
    };
  },
  mounted() {
    this.auto();
  },
  methods: {
    auto() {
      setTimeout(() => {
        if (this.active == true) {
          this.active = false;
        }else if(this.active == false){
          this.active = true;
        }
        this.auto();
      }, 2000);
    },
  },
};
</script>

<style lang="less" scoped>
.foot-txt {
  width: 100%;
  background: #f5f5f5;
  // margin-top: 80px;
  padding: 40px 0;
  .foot {
    width: 1226px;
    margin: 0px auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .logo {
      width: 57px;
      height: 57px;
    }
    .right {
      width: 1159px;

      .sites {
        display: flex;
        flex-direction: row;
        align-items: center;
        color: #757575;
        div {
          cursor: pointer;
          position: relative;
          height: 15px;
          padding: 0 5px;
          font-size: 12px;
          &::after {
            content: "";
            width: 1px;
            height: 12px;
            position: absolute;
            background: #b0b0b0;
            right: 0;
            top: 2px;
          }
          &:nth-last-child(1) {
            &::after {
              background: transparent;
            }
          }
          &:hover {
            color: #ff6700;
          }
        }
      }
      p {
        padding: 0 5px;
        color: #b0b0b0;
        font-size: 12px;
        a {
          text-decoration: none;
          color: #b0b0b0;
          line-height: 18px;
          font-size: 12px;
          &:hover {
            color: #ff6700;
          }
        }
      }
      .img {
        display: flex;
        flex-direction: row;
        width: 100%;
        padding: 0 5px;
        img {
          margin-top: 12px;
          width: auto;
          height: 28px;
        }
      }
      .img2 {
        width: 150px;
        height: 40px;
        margin-left: 5px;
        img {
          margin-top: 5px;
          width: 110px;
          height: 40px;
        }
        .active {
          display: none;
        }
      }
    }
  }
  .slogan{
    margin: 30px auto 0;
    width: 100%;
    height: 19px;
    text-align: center;
    background: url(https://cdn.cnbj1.fds.api.mi-img.com/staticsfile/global/slogan2020.png) no-repeat center 0;
  }
}
</style>