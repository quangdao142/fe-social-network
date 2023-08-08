<template>
  <div class="chat-page">
    <div class="chat-main">
      <div class="chat-header">
        <img :src="selectedUser.avatar" alt="Selected User Avatar" />
        <h2>{{ selectedUser.name }}</h2>
      </div>
      <div class="chat-messages">
        <div class="message" v-for="(message, index) in messages" :key="index">
          <div class="message-user">{{ message.user }}</div>
          <div class="message-content">{{ message.content }}</div>
        </div>
      </div>

      <div class="chat-input-container">
        <input v-model="newMessage" @keydown.enter="sendMessage" placeholder="Type a message..." />
        <button @click="sendMessage">Send</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        { name: "User 1", avatar: "https://via.placeholder.com/40" },
        { name: "User 2", avatar: "https://via.placeholder.com/40" }
        // Add more users
      ],
      selectedUser: { name: "User 1", avatar: "https://via.placeholder.com/40" },
      messages: [
        { user: "User 1", content: "Hello" },
        { user: "User 2", content: "Hi there" }
        // Add more messages
      ],
      newMessage: ""
    };
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim() !== "") {
        this.messages.push({
          user: this.selectedUser.name,
          content: this.newMessage
        });
        this.newMessage = "";
      }
    }
  }
};
</script>

<style scoped>
/* Tùy chỉnh CSS để tạo giao diện trang chat */
.chat-page {
  display: flex;
  height: 100vh;
}

.chat-main {
  flex: 3;
  display: flex;
  flex-direction: column;
}

.chat-header {
  padding: 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  background-color: #f8f8f8;
}

.chat-header img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.chat-messages {
  flex: 1;
  overflow-y: scroll;
  padding: 20px;
}

.message {
  margin-bottom: 10px;
}

.message-user {
  font-weight: bold;
  margin-bottom: 5px;
}
.chat-input-container {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 58%;
  background-color: #f8f8f8;
  padding: 10px;
  border-top: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.chat-input-container input {
  flex: 1;
  padding: 8px;
  border: 2px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
}

.chat-input-container button {
  padding: 8px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
