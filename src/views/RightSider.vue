<template>
  <div style="background: #fff">
    <a-menu mode="inline" 
    :default-open-keys="['sub']" 
    :style="{ height: '100%', borderRight: 0 }">
      <a-sub-menu key="sub">
        <span slot="title"><a-icon type="mail" />Trò chuyện</span>
        <a-menu-item key="1"> Mai </a-menu-item>
        <a-menu-item key="2"> Tuấn </a-menu-item>
        <a-menu-item key="3">  </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>
import axios from "axios";

export default{
  data(){
    return{
      // fullname:""
    }
  },
  created(){
    // this.fetchFullname();
  },
  methods:{
    // async fetchFullname() {
    //   try {
    //     const response = await axios.get("http://localhost:3000/api/");
    //     this.fullname = response.data.fullname;
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }
  }
}
</script>

<style></style>
