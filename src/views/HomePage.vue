<template>
  <div id="app">
    <a-layout>
      <a-layout-sider class="leftsider" :width="400"> <LeftSider /> </a-layout-sider>
      <a-layout>
        <a-layout-header class="header"> <HomeHeader /> </a-layout-header>
        <a-layout-content class="content"> <HomeContent /> </a-layout-content>
      </a-layout>
      <a-layout-sider class="rightsider" :width="400"> <RightSider /> </a-layout-sider>
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
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}
#app .header {
  background-color: #3b5998;
  flex: 0 0 auto;
}
#app .content {
  flex: 1;
  overflow: auto;
}
#app .leftsider,
.rightsider {
  background-color: white;
  flex: 0 0 400px;
}
</style>
