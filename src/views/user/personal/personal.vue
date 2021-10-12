<template>
  <div class="personal">
    {{ order.list[personal_index].title }}
  </div>
</template>

<script>
export default {
  props: ["order", "personal_index"],
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.personal {
 display: flex;
 align-items: center;
 justify-content: center;
  font-size: 50px;
  height: 100%;
  width: 100%;
}
</style>