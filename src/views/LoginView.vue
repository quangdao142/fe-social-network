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
      });
    }
  }
};
</script>
