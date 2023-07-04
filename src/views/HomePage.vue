<template>
  <div class="home-page" id="components-layout">
      <HomeHeader />
      <a-layout>
        <HomeSider />
        <HomeContent />
      </a-layout>
  </div>
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
#components-layout {
  text-align: center;
}
#components-layout > .ant-layout {
  margin-bottom: 48px;
}
#components-layoutc > .ant-layout:last-child {
  margin: 0;
}
</style>
