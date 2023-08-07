<template>

    <div class="chat-app">
      <div class="chat-header">
        <h2>Chat App</h2>
      </div>
      <div class="chat-messages">
        <ul>
          <li v-for="(message, index) in messages" :key="index">
            {{ message.text }}
          </li>
        </ul>
      </div>
      <div class="chat-input">
        <input v-model="newMessage" @keyup.enter="sendMessage" placeholder="Type a message..." />
        <button @click="sendMessage">Send</button>
      </div>
    </div>

</template>
<script>
export default {
  data() {
    return {
      messages: [],
      newMessage: ""
    };
  },
  methods: {
    sendMessage() {
      if (this.newMessage) {
        this.messages.push({ text: this.newMessage });
        this.newMessage = "";
      }
    }
  }
};
</script>

<style></style>
