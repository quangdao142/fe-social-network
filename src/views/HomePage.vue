<template>
  <a-layout id="components-layout-demo-top-side-2">
    <HomeHeader />
    <a-layout>
      <HomeSider />
      <HomeContent />
    </a-layout>
  </a-layout>
</template>

<script>
import HomeHeader from "./HomeHeader.vue";
import HomeSider from "./HomeSider.vue";
import HomeContent from "./HomeContent.vue";
export default {
  components: {
    HomeHeader,
    HomeSider,
    HomeContent
  }
};
</script>

<style>
#components-layout-demo-top-side-2 .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px 16px 0;
  float: left;
}
</style>
