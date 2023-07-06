<template>
  <a-form
    style="padding: 50px"
    id="components-form-demo-normal-login"
    :form="form"
    class="login-form"
    @submit="handleSubmit"
  >
    <a-form-item>
      <h1 style="color: rgb(0, 140, 255)">LOGIN</h1>
      <a-input
        v-decorator="['userName', { rules: [{ required: true, message: 'Please input your username!' }] }]"
        placeholder="Username"
      >
        <a-icon slot="prefix" type="user" style="color: rgba(0, 0, 0, 0.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input
        v-decorator="['password', { rules: [{ required: true, message: 'Please input your Password!' }] }]"
        type="password"
        placeholder="Password"
      >
        <a-icon slot="prefix" type="lock" style="color: rgba(0, 0, 0, 0.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a class="login-form-forgot" href=""> Forgot password </a>

      <br />

      <a-button type="primary" html-type="submit" class="login-form-button"> Log in </a-button>
      Or
      <a href=""> register now! </a>
    </a-form-item>
  </a-form>
</template>

<script>
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "normal_login" });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    }
  }
};
</script>

<style>
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: left;
}
#components-form-demo-normal-login {
  width: 100%;
}
</style>
