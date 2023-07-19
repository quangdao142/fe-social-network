<template>
  <div width="350" style="background: #fff">
    <a-menu mode="inline" 
    :default-open-keys="['sub']" 
    :style="{ height: '100%', borderRight: 0 }">
      <a-sub-menu key="sub">
        <span slot="title"><a-icon type="mail" />Trò chuyện</span>
        <a-menu-item key="1"> Mai </a-menu-item>
        <a-menu-item key="2"> Tuấn </a-menu-item>
        <a-menu-item key="3"> Sơn </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script></script>

<style></style>
