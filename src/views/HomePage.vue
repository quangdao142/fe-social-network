<template>
  <div id="app">
    <a-layout>
      <a-layout-sider class="leftsider"> <LeftSider /> </a-layout-sider>
    <a-layout>
      <a-layout-header class="header"> <HomeHeader /> </a-layout-header>
      <a-layout-content> <HomeContent /> </a-layout-content>
    </a-layout>
    <a-layout-sider class="rightsider"> <RightSider /> </a-layout-sider>
    </a-layout>
    
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

<style scoped>
#app .header{

}
#app .leftsider{
  background-color: white;
  width: 700px;
}
</style>
