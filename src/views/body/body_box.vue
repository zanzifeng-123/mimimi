<template>
  <div class="title">
    <div class="body_box">
      <div class="title_box">
        <div class="mi_logo">
          <div class="logo_img">
            <img
              :src="item.logoimg"
              alt=""
              v-for="(item, index) in logo"
              :key="index"
            />
          </div>
        </div>
        <div class="product_type">
          <div
            class="type_name"
            v-for="(ite, inde) in list"
            :key="inde"
            @mousemove="product_hover(inde)"
            @mouseout="product_close"
          >
            {{ ite.name }}
          </div>
        </div>
        <div class="search">
          <input
            :class="search.active ? 'input_focus' : ''"
            type="text"
            :placeholder="search.placeholder"
            @focus="search_open"
            @blur="search_close"
            @click="search_open"
            v-model="search.value"
            @keydown="search_open"
          />
          <div class="search_icon" :class="search.active ? 'icon-solid' : ''">
            <i class="iconfont icon--search1 icon"></i>
          </div>
          <div class="search_txt" v-show="search.active">
            <div
              class="txt"
              v-for="(txt, num) in list"
              :key="num"
              @click="search_value(txt.name)"
              @mousedown="blur_stop"
            >
              {{ txt.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="product_box"
      :class="active ? '' : 'product_box_close'"
      @mouseover="product_open"
      @mouseout="product_close"
    >
      <div class="product">
        <div
          class="product_item"
          v-for="(it, ind) in list[type_index].product"
          :key="ind"
        >
          <div class="img">
            <img :src="it.img" alt="" />
          </div>
          <span class="product_name">{{ it.name }}</span>
          <span class="product_money">{{ it.money }}元起</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { list } from "./body_box";
export default {
  data() {
    return {
      list,
      active: false,
      time_open: null,
      time_close: null,
      type_index: 0,
      index: 0,
      search: {
        active: false,
        index: 0,
        value: "",
        placeholder: "黑鲨游戏机",
      },
      logo: [
        {
          logoimg: require("@/img/mi-logo.png"),
        },
        {
          logoimg: require("@/img/mi-logo.png"),
        },
      ],
    };
  },
  mounted() {
    this.search_placeholder();
  },
  methods: {
    product_hover(index) {
      this.type_index = index;
      if (this.list[index].product.length == 0) {
        this.active = false;
      }
      if (this.list[index].product.length >= 1) {
        this.product_open();
      }
    },
    product_open() {
      clearTimeout(this.time_close);
      clearTimeout(this.time_open);
      this.time_open = setTimeout(() => {
        this.active = true;
        this.search_close()
      }, 100);
    },
    product_close() {
      clearTimeout(this.time_close);
      clearTimeout(this.time_open);
      this.time_close = setTimeout(() => {
        this.active = false;
      }, 500);
    },
    search_open() {
      this.search.active = true;
      this.product_close();
    },
    search_close() {
      this.search.active = false;
    },
    blur_stop(event) {
      event.preventDefault();
    },
    search_value(name) {
      this.search.value = name;
      this.search_close();
    },
    search_placeholder() {
      setInterval(() => {
        this.search.index++;
        this.index = this.search.index % this.list.length

      },5000);
    },
  },
  watch:{
      index(val){
          this.search.placeholder = this.list[val].name
      }
  }
};
</script>

<style lang="less" scoped>
.title {
  width: 100%;
  position: relative;
  .body_box {
    width: 1226px;
    height: 100px;
    display: block;
    margin: 0 auto;
    line-height: 100px;
    &::after {
      content: "";
      clear: both;
      zoom: 1;
      display: block;
    }
    .title_box {
      width: 100%;
      height: 100px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .mi_logo {
        cursor: pointer;
        width: 55px;
        height: 55px;
        overflow: hidden;
        margin-right: 179px;
        &:hover {
          .logo_img {
            transform: translateX(-55px);
          }
        }
        .logo_img {
          height: inherit;
          width: 110px;
          transition: all 0.3s;
          img {
            float: left;
            width: 55px;
            height: 55px;
            background-color: #ff6700;
          }
        }
      }
      .product_type {
        width: 60%;
        height: inherit;
        flex: 1;
        display: flex;
        justify-content: space-between;
        padding-right: 30px;
        .type_name {
        //   padding-right: 30px;
          height: 100%;
          font-size: 16px;
          cursor: pointer;

          &:hover {
            color: #ff6700;
          }
        }
      }
      .search {
        position: relative;
        display: flex;
        flex-wrap: nowrap;
        width: 295px;
        input {
          height: 50px;
          outline: none;
          border: 1px solid #e0e0e0;
          width: 245px;
          padding: 0 20px;
          box-sizing: border-box;
        }
        .input_focus {
          border-color: #ff6700;
        }
        .search_icon {
          cursor: pointer;
          width: 50px;
          height: 50px;
          background-color: #ffffff;
          border: 1px solid #e0e0e0;
          border-left-color: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
          .icon {
            font-size: 15px;
            color: #5e5e5e;
            font-weight: 700;
          }
        }
        .search_txt {
          position: absolute;
          top: 100%;
          left: 0;
          width: 245px;
          z-index: 1;
          background-color: #fff;
          border: 1px solid #ff6700;
          border-top-color: transparent;
          box-sizing: border-box;
          .txt {
            cursor: pointer;
            padding-left: 20px;
            line-height: 25px;
            font-size: 12px;
            background-color: #fff;
            &:hover {
              background-color: #fafafa;
            }
          }
        }
        .icon-solid {
          border: 1px solid #ff6700;
          border-left-color: transparent;
        }
      }
    }
  }
  .product_box {
    position: absolute;
    left: 0;
    top: 100%;
    background-color: #fff;
    width: 100%;
    height: 218px;
    z-index: 1;
    overflow: hidden;
    transition: all 0.5s;
    border-top: 1px solid #e1e2e5;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    .product {
      width: 1226px;
      height: 100%;
      margin: 0 auto;
      //   background-color: lawngreen;
    }
    .product_item {
      cursor: pointer;
      float: left;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-top: 30px;
      .img {
        position: relative;
        display: block;
        padding: 0 22px;
        &::before {
          content: "";
          width: 1px;
          height: 100%;
          position: absolute;
          right: 0;
          top: 0;
          background-color: #e1e2e5;
        }
      }
      .product_name {
        font-size: 12px;
        padding-top: 10px;
        color: #333;
        line-height: 20px;
      }
      .product_money {
        color: #ff6700;
        font-size: 12px;
        font-weight: bold;
      }
    }
    .product_item:last-child {
      .img::before {
        display: none;
      }
    }
  }
  .product_box_close {
    height: 0;
    box-shadow: none;
    border: transparent;
  }
}
</style>