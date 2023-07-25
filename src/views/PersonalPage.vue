<template>
  <div id="app">
    <a-layout>
      <a-layout-sider class="leftsider" :width="400"> <LeftSider /> </a-layout-sider>
      <a-layout>
        <a-layout-header class="header"> <HomeHeader /> </a-layout-header>
        <a-layout-content class="content"> <PersonalContent /> </a-layout-content>
      </a-layout>
      <a-layout-sider class="rightsider" :width="400"> <RightSider /> </a-layout-sider>
    </a-layout>
  </div>
</template>

<script>
import HomeHeader from "./HomeHeader.vue";
import LeftSider from "./LeftSider.vue";
import RightSider from "./RightSider.vue";
import PersonalContent from "./PersonalContent.vue";
export default {
  components: {
    HomeHeader,
    LeftSider,
    RightSider,
    PersonalContent
  }
};
</script>

<style scoped>
#app .header {
  background-color: #3b5998;
}
#app .content {

}
#app .leftsider,
.rightsider {
  background-color: white;
  width: 700px;
}
</style>
