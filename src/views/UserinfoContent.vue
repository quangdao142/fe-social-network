<template>
  <div class="user-profile">
    <div class="avatar">
      <img :src="avatar" alt="Avatar" />
    </div>
    <div class="info">
      <h2>Tên người dùng</h2>
      <p class="joined">Ngày tạo: {{ formatDate(create_at) }}</p>
      <button @click="editProfile">Chỉnh sửa thông tin cá nhân</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    fullname: String,
    avatar: String,
    create_at: String
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString();
    },
    editProfile() {
    }
  }
};
</script>

<style scoped>
.user-profile {
  display: flex;
  align-items: center;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
.avatar img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
}
.info {
  display: flex;
  flex-direction: column;
}
h2 {
  font-size: 24px;
  margin: 0;
  margin-bottom: 5px;
  color: #333;
}
.joined {
  color: #777;
  font-size: 14px;
}
button {
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}
</style>
