<template>
  <div class="home-page">
    <a-layout>
      <HomeHeader />
      <a-layout>
        <HomeSider />
        <HomeContent />
      </a-layout>
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
#components-layout-demo-basic .code-box-demo {
  text-align: center;
}
#components-layout-demo-basic > .code-box-demo > .ant-layout + .ant-layout {
  margin-top: 48px;
}
</style>
