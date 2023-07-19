<template>
    <div id="app">
      <a-layout id="components-layout-demo-top-side-2">
      <HomeHeader />
      <a-layout>
        <LeftSider />
        <PersonalContent />
        <RightSider />
      </a-layout>
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
  
  <style>
  #components-layout-demo-top-side-2 .logo {
    width: 120px;
    height: 31px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px 28px 16px 0;
    float: left;
  }
  </style>
  