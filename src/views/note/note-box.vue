<template>
  <div>
    <note  :item="item" v-for="(item,index) in note" :key="index"></note>
  </div>
</template>

<script>
import { note } from "./TV";
export default {
  components:{
    note:require('../note/component/note2.vue').default,
  },
  data() {
    return {
      note,
    };
  }
};
</script>

<style lang="less" scoped>
</style>