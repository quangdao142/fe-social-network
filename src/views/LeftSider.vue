<template>
  <div style="background: white">
    <a-menu mode="inline" :default-selected-keys="['1']" :style="{ height: '100%', borderRight: 0 }">
      <a-menu-item key="1">
        <a-icon type="home" />
        Trang chủ <router-link to="/"></router-link>
      </a-menu-item>

      <a-sub-menu key="sub">
        <span slot="title"><a-icon type="user" /> {{ fullname }} </span>

        <a-menu-item key="1"> Trang cá nhân 
          <router-link to="/personal"></router-link>
        </a-menu-item>

        <a-menu-item key="2"> Thông tin cá nhân 
          <router-link to="/userinfo"></router-link>
        </a-menu-item>
        
        <a-menu-item v-on:click="logout" key="3"> Đăng xuất </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>
import jwt_decode from "jwt-decode";

export default{
  data(){
    return{
      fullname:''
    }
  },
  methods:{
    logout(){
      localStorage.clear()
      this.$router.push({name: "login"})
    }
  },
  mounted(){
    let userToken = localStorage.getItem('key')
    let userDecoded = jwt_decode(userToken)
    this.fullname = userDecoded.fullname
  }
}
</script>

<style scoped></style>
