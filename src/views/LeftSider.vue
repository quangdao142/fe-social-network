<template>
  <a-layout-sider width="350" style="background: #fff">
    <a-menu mode="inline" :default-selected-keys="['1']" :style="{ height: '100%', borderRight: 0 }">
      <a-menu-item key="1">
        <a-icon type="home" />
        <span>Trang chủ</span>
      </a-menu-item>
      <a-sub-menu key="sub">
        <span slot="title"><a-icon type="user" />Quang Đào</span>
        <a-menu-item key="1"> Trang cá nhân </a-menu-item>
        <a-menu-item key="2"> Đăng xuất </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>

<script></script>

<style></style>
