<template>
  <div class="home-container">
    <a-card class="shadow">
      <div class="input-field">
        <a-input placeholder="Nhap url" v-model="url" />
        <a-button type="primary" @click="translate" :loading="translate_loading">Dich</a-button>
      </div>
      <a-row>
        <a-col :span="11">
          <div v-html="english"></div>
        </a-col>
        <a-col :span="2"></a-col>
        <a-col :span="11">
          <div v-html="vietnamese" v-if="!editable"></div>
          <a-textarea v-model="vietnamese" v-else auto-size></a-textarea>
          <div class="button-group" v-if="vietnamese != '' && english != ''">
            <a-button type="primary" @click="editable = true">edit</a-button>
            <a-button type="primary" @click="editable = false">done</a-button>
            <a-button type="primary" @click="post">Post</a-button>
          </div>
        </a-col>
      </a-row>
    </a-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      translate_loading: false,
      vietnamese: "",
      english: "",
      url: "",
      editable: false
    };
  },
  methods: {
    async translate() {
      this.translate_loading = true;
      axios({
        method: "post",
        url: "http://localhost:5000/translate",
        data: { url: this.url }
      })
        .then(res => {
          let data = res.data;
          this.english = data.english;
          this.vietnamese = data.vietnamese;
          this.translate_loading = false;
        })
        .catch(err => {
          print(err);
        });
    },
    async post() {
      axios({
        method: "post",
        url: "http://localhost:5000/posting",
        data: { data: this.vietnamese }
      }).then(res => {
        if (res.data.message == "oke") {
          this.vietnamese = "";
          this.english = "";
        }
      });
    }
  }
};
</script>

<style scoped>
.home-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.shadow {
  min-width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.input-field {
  display: flex;
  flex-direction: column;
}
.button-group {
  float: right;
}
</style>>
