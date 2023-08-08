<template>
  <a-form
    id="components-form-demo-normal-login"
    :form="form"
    class="login-form"
    @submit="handleSubmit"
    style="padding: 100px 700px"
  >
    <h1 class="center-text bold-text large-text">SOCIAL NETWORK</h1>
    <h2 class="center-text large-text">REGISTER</h2>
    <br />

    <a-form-item>
      <a-input v-model="formInline.fullname" placeholder="Fullname">
        <a-icon slot="prefix" type="user" style="color: rgba(0, 0, 0, 0.25)" />
      </a-input>
    </a-form-item>

    <a-form-item>
      <a-input v-model="formInline.username" placeholder="Username">
        <a-icon slot="prefix" type="user" style="color: rgba(0, 0, 0, 0.25)" />
      </a-input>
    </a-form-item>

    <a-form-item>
      <a-input v-model="formInline.password" type="password" placeholder="Password">
        <a-icon slot="prefix" type="lock" style="color: rgba(0, 0, 0, 0.25)" />
      </a-input>
    </a-form-item>

    <a-form-item>
      <a-button
        type="primary"
        html-type="submit"
        :disabled="formInline.fullname === '' || formInline.username === '' || formInline.password === ''"
      >
      Register
      </a-button>
      Or
      <router-link to="/login">Login now!</router-link>
    </a-form-item>
  </a-form>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      formInline: {
        fullname: "",
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
        url: "http://localhost:3000/api/register",
        data: {
          fullname: this.formInline.fullname,
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

<style scoped>
#components-form-demo-normal-login .login-form {
  max-width: 100px;
}
.center-text {
  text-align: center;
  color: #0066ff;
}
.bold-text {
  font-weight: bold;
}
.large-text {
  font-size: 40px;
}
</style>
