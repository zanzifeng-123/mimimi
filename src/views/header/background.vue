<template>
  <div class="box">
    <div
      class="top-img"
      :style="{
        'background-image': backgroundimg,
      }"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      backgroundimg: `url(${require("../../img/head-background.jpg")})`,
    };
  },
};
</script>

<style>
 .top-img {
    width: 100%;
    height: 120px;
    background-size: auto 120px;
    background-position: center;
  }
</style>