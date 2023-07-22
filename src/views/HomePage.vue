<template>
  <div id="app">
    <a-layout>
      <a-layout-sider class="leftsider" :width="350"> <LeftSider /> </a-layout-sider>
      <a-layout>
        <a-layout-header class="header"> <HomeHeader /> </a-layout-header>
        <a-layout-content> <HomeContent /> </a-layout-content>
      </a-layout>
      <a-layout-sider class="rightsider" :width="350"> <RightSider /> </a-layout-sider>
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
  },
  beforeCreate(){
    let data = localStorage.getItem('key')
    if(!data){
      this.$router.push({name:'login'})
    }
  },
  mounted(){

  }
};
</script>

<style scoped>
#app .header {
  background-color: white;
}
#app .leftsider, .rightsider {
  background-color: white;
}
</style>
