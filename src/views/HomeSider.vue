<template>
  <a-layout-sider width="200" style="background: #fff">
    <a-menu
      mode="inline"
      :default-selected-keys="['1']"
      :default-open-keys="['sub2']"
      :style="{ height: '100%', borderRight: 0 }"
    >
      <a-menu-item key="1">
        <a-icon type="home" />
        <span>Trang chủ</span>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <span slot="title"><a-icon type="user" />Quang Đào</span>
        <a-menu-item key="1"> Trang cá nhân </a-menu-item>
        <a-menu-item key="2"> Đăng xuất </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <span slot="title"><a-icon type="mail" />Trò chuyện</span>
        <a-menu-item key="5"> Mai </a-menu-item>
        <a-menu-item key="6"> Tuấn </a-menu-item>
        <a-menu-item key="7"> Sơn </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>

<script>

</script>

<style></style>
