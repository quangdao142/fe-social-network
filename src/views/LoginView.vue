<template>
  <a-form-model layout="inline" :model="formInline" @submit="handleSubmit" @submit.native.prevent>
    <a-form-model-item>
      <a-input v-model="formInline.username" placeholder="Username">
        <a-icon slot="prefix" type="user" style="color: rgba(0, 0, 0, 0.25)" />
      </a-input>
    </a-form-model-item>
    <a-form-model-item>
      <a-input v-model="formInline.password" type="password" placeholder="Password">
        <a-icon slot="prefix" type="lock" style="color: rgba(0, 0, 0, 0.25)" />
      </a-input>
    </a-form-model-item>
    <a-form-model-item>
      <a-button type="primary" html-type="submit" :disabled="formInline.username === '' || formInline.password === ''">
        Log in
      </a-button>
    </a-form-model-item>
  </a-form-model>
</template>
<script>
import axios from "axios";
import jwt_decode from "jwt-decode";
import store from "../store";

export default {
  data() {
    return {
      formInline: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    async handleSubmit() {
      console.log(this.formInline);
      axios({
        method: "post",
        url: "http://localhost:3000/api/login",
        data: {
          username: this.formInline.username,
          password: this.formInline.password
        }
      }).then(res => {
        console.log(res);
        localStorage.setItem("key", res.data.token);
        this.$router.push({ name: "home" });
        let decoded = jwt_decode(res.data.token);
        store.commit('setUsername', decoded.username)
        console.log(store.state.username)
      });
    }
  },
  beforeCreate(){
    let data = localStorage.getItem("key");
    if (data) {
      this.$router.push({ name: "home" });
    }
  },
  mounted() {

  }
};
</script>
