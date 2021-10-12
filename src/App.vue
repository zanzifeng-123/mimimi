<template>
  <div id="app">
      <!-- <router-link to="/"></router-link> | -->
      <!-- <router-link to="/about">About</router-link> -->

    <router-view/>
  </div>
</template>
<script>
export default {
  // components: {
  //   headerBox: require("./views/header/header").default,
  //   bodyBox: require("./views/body/body-box.vue").default,
  //   swiper: require("./views/swiper/swiper").default,
  //   rukou: require("./views/rukou/rukou.vue").default,
  //   flash: require("./views/mi-falsh/falsh.vue").default,
  //   note: require("./views/note/note.vue").default,
  // },
};
</script>


<style lang="less" >
@import url(./css/iconfont.css);
* {
  margin: 0;
  padding: 0;
}
#nprogress .bar {
    background: #f66495 !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  min-width: 1226px;
}

#nav {
  // padding: 30px;

  a {
    // font-weight: bold;
    // color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
   
  }
}
 
</style>
