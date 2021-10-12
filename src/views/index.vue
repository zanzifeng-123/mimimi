<template>
     <div id="nav">
       <back></back>
      <header-box></header-box>
      <body-box></body-box>
      <swiper></swiper>
      <rukou></rukou>
      <div class="back">
        <flash></flash>
        <note></note>
        <note2></note2>
        <vid></vid>
      </div>
        <foot></foot>
        <home></home> 
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
</template>

<script>
export default {
  components: {
    back:require('./header/background').default,
    headerBox: require("./header/header").default,
    bodyBox: require("./body/body_box.vue").default,
    swiper: require("./swiper/swiper").default,
    rukou: require("./rukou/rukou.vue").default,
    flash: require("./mi-falsh/falsh.vue").default,
    note: require("./note/note.vue").default,
    note2:require('./note/note-box.vue').default,
    vid:require("./vid/video.vue").default,
    foot:require('./footer/footer.vue').default,
    home:require('./home/home.vue').default

  },
}
</script>

<style lang="less" scoped>
.nav{
  position: relative;
  .back{
          background-color: #f5f5f5;
    }
}
</style>