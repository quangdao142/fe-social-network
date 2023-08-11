<template>
  <div class="chat-page">
    <div class="chat-main">
      <div class="chat-header">
        <h2>{{ users[0]._id }}</h2>
      </div>

      <div class="chat-messages">
        <div class="message" v-for="(message, index) in messages" :key="index">
          {{ message.message }}
          <div :class="[message.user === selectedUser.name ? 'user-1' : 'user-2', 'message-content']">
            <div class="message-user">{{ message.user }}</div>
            <div class="message-text">{{ message.message }}</div>
          </div>
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
import store from '@/store';
import customAxios from '@/utils/axios';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:3000',
  {
    auth: {
      token: `Bearer ${store.state.Auth.token}`
    }
  });

socket.on('user-connected', (userId) => {
  console.log(userId);
});

socket.on('error', (err) => {
  alert(err);
})
export default {
  data() {
    return {
      users: [
        { _id: store.state.Auth.user, avatar: "https://via.placeholder.com/40" },
        { _id: this.$route.params.userId, avatar: "https://via.placeholder.com/40" }
      ],
      selectedUser: { name: "My name", avatar: "https://via.placeholder.com/40" },
      newMessage: "",
      messages: [],
      conversationId: 0,
    };
  },
  async beforeMount() {
    await customAxios.post("/start-conversation", {
      userId: this.$route.params.userId
    }).then(res => {
      this.conversationId = res.data.data._id
    });
    await customAxios.get(`message-by-conversation/${this.conversationId}`)
      .then(res => { this.messages = res.data.data });
    console.log(this.messages);

    socket.emit('join', this.conversationId);
    socket.on('message', (message) => {
      console.log(message)
      this.messages.push(message);
    })
  },
  async mounted() {



  },
  methods: {
    sendMessage() {

      console.log({
        conversationId: this.conversationId,
        message: this.newMessage
      })
      socket.emit("message", {
        conversationId: this.conversationId,
        message: this.newMessage
      })

      this.newMessage = ""
    }
  }
};
</script>

<style scoped>
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
  position: sticky;
  top: 0;
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

.chat-input-container {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 47%;
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

.message-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 8px;
  max-width: 70%;
  font-size: 16px;
  margin-top: 5px;
  color: #222;
}

.message {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
}

.message-user {
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 14px;
}

.message-text {
  font-size: 16px;
  margin-top: 5px;
}

.user-1 {
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  margin-left: auto;
}

.user-2 {
  background-color: #0275d8;
  color: white;
  border: 1px solid #ccc;
  margin-right: auto;
}
</style>
