<template>
  <a-form id="components-form-demo-normal-login" class="login-form" @submit="handleSubmit" @submit.native.prevent
    style="padding: 100px 700px">
    <h1 class="center-text bold-text large-text">SOCIAL NETWORK</h1>
    <h2 class="center-text large-text">LOGIN</h2>
    <br />
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
      <a-button type="primary" html-type="submit" :disabled="formInline.username === '' || formInline.password === ''">
        Log in
      </a-button>
      Or
      <router-link to="/signup">Register now!</router-link>
    </a-form-item>
  </a-form>
</template>

<script>
import axios from "axios";
import jwt_decode from "jwt-decode";
import store from "../store";
import { AUTH_LOGIN } from "../store/actions/auth";
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
      // axios({
      //   method: "post",
      //   url: "http://localhost:3000/api/login",
      //   data: {
      //     username: this.formInline.username,
      //     password: this.formInline.password
      //   }
      // }).then(res => {
      //   console.log(res);
      //   if (res.data.statusCode === 200 && !res.data.err) {
      //     localStorage.setItem("key", res.data.token);
      //     this.$router.push({ name: "home" });
      //     let decoded = jwt_decode(res.data.data.token);
      //     store.commit("setUsername", decoded.username);
      //     console.log(store.state.username);
      //   } else if (res.data.statusCode === 400) {
      //     alert("Login failed: ", res.data.error);
      //   }
      // });

      this.$store.dispatch(AUTH_LOGIN, {
          username: this.formInline.username,
          password: this.formInline.password
        }).then(() => {
        this.setSocketToken(this.$store.state.Auth.token);
        // this.$socket.open();
        if (this.$route.query.redirect) {
          return this.$router.push(this.$route.query.redirect);
        }
        this.$router.push({ name: "home" });
      });

    },
    setSocketToken(token) {
      // this.$socket.io.opts.query.token = token;
    },
  },
  beforeCreate() {
    // let data = localStorage.getItem("key");
    // if (data) {
    //   this.$router.push({ name: "home" });
    // }
  },
  mounted() { }
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
