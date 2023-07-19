<template>
  <div id="app">
    <a-layout-sider> <LeftSider /> </a-layout-sider>
    <a-layout>
      <a-layout-header> <HomeHeader /> </a-layout-header>
      <a-layout-content> <HomeContent /> </a-layout-content>
    </a-layout>
    <a-layout-sider> <RightSider /> </a-layout-sider>
  </div>
</template>

<script>
import HomeHeader from "./HomeHeader.vue";
import LeftSider from "./LeftSider.vue";
import RightSider from "./RightSider.vue";
import HomeContent from "./HomeContent.vue";
export default {
  components: {
    HomeHeader,
    LeftSider,
    RightSider,
    HomeContent
  }
};
</script>

<style>
/* #components-layout-demo-top-side-2 .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px 16px 0;
  float: left;
} */
</style>
