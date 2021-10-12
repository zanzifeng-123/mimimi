<template>
  <div class="user">
    <header-box></header-box>
    <body-box></body-box>
    <div class="person">
      <div class="route">
        <a href="/index">首页</a> /
        <p>个人中心</p>
      </div>
      <div class="user-txt">
        <div class="left">
              <div class="title">
            <div class="name">{{ order.name }}</div>
            <router-link  v-for="(item, index) in order.list" :key="index" @click.native="personal_index=index" :to="patch">
              <div class="list">
              {{ item.title }}
            </div>
            </router-link>
            
          </div>
          <div class="title">
            <div class="name">{{ user.name }}</div>
            <div class="list">{{ user.person.title }}</div>
            <div class="list" v-for="(item, index) in user.list" :key="index" >
              {{ item.title }}
            </div>
          </div>
        
        </div>
        <div class="right">
           <router-view :order="order" :personal_index="personal_index"/>
        </div>
      </div>
    </div>
    <foot></foot>
    <home></home>
  </div>
</template>

<script>
import { order } from "./order";
import { user } from "./user";
export default {
  components: {
    headerBox: require("../header/header").default,
    bodyBox: require("../body/body_box.vue").default,
    foot: require("../footer/footer.vue").default,
    home: require("../home/home.vue").default,
  },
  data() {
    return {
      patch:'/user/personal',
      order,
      user,
      personal_index:0
    };
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
a{
  text-decoration: none;
  color: #333;
}
.user {
  text-decoration: none;
  outline: none;
  width: 100%;
  .route {
    width: 1240px;
    margin: 0 auto;
    display: flex;
    color: #757575;
    font-size: 12px;
    padding: 10px 0;
    flex-direction: row;
    align-items: center;
    a {
      text-decoration: none;
      color: #757575;
      padding: 0 10px;
      &:hover {
        color: #ff6700;
      }
    }
    p {
      padding: 0 5px;
     
    }
  }
  .person {
    width: 100%;
    background-color: #f5f5f5;
     
    .user-txt {
      width: 1240px;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      padding-bottom: 30px;
      .left {
        width: 234px;
        background: #fff;
        padding: 36px 0;
        .title {
          .name {
            font-size: 16px;
            font-weight: 400;
            line-height: 52px;
            color: #333;
            text-align: center;
          }
          .list {
            cursor: pointer;
            color: #757575;
            text-align: center;
            font-size: 14px;
            padding: 6px 0;
            &:hover{
              color: #333;
            }
          }
        }
      }
      .right{
        flex: 1;
        // background-color: lawngreen;
      }
    }
  }
}
</style>