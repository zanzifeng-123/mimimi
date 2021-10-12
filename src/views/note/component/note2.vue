<template>
  <div class="note">
    <div class="top">
      <div class="title">{{ item.name }}</div>
      <div class="title-btn">
        <div
          class="btn"
          :class="ite.active ? 'btn-true' : ''"
          v-for="(ite, ind) in item.arr"
          :key="ind"
          @mouseenter="switchover(ite)"
        >
          {{ ite.btn }}
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="AD">
        <img :src="AD" alt="" />
      </div>
      <div
        class="note-list"
        :class="ite.active ? '' : 'note-list-false'"
        v-for="(ite, ind) in item.arr"
        :key="ind"
      >
        <div
          class="item"
          v-for="(it, inde) in ite.product"
          :key="inde"
          @click="to_buy"
        >
          <img :src="it.img" :alt="it.name" />
          <div class="name">{{ it.name }}</div>
          <div class="txt">{{ it.txt }}</div>
          <div class="money">{{ it.money }}元起</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {},
  },
  data() {
    return {
      AD:
        "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/574c6643ab91c6618bfb2d0e2c761d0b.jpg?thumb=1&w=234&h=614&f=webp&q=90",
    };
  },
  mounted() {
    this.item.arr.forEach(ro => {
      ro.active = false
    });
    this.item.arr[0].active = true;
  },
  methods: {
    to_buy() {
      this.$router.push("/buy");
      document.documentElement.scrollTop = 0;
    },
    switchover(ite) {
      this.item.arr.forEach(ro => {
      ro.active = false
    });
    ite.active = true
      // this.$emit('change',this.note)
      // note.active = true;
    },
  },
};
</script>

<style lang="less" scoped>
.note {
  // width: 1920px;
  background: #f5f5f5;
  &::after {
    content: "";
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
    .note-list-false {
      display: none;
    }
  }
}
</style>