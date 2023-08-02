<template>
  <div style="padding: 24px">
    <div style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '100vh' }">
      <!-- upload a post -->
      <a-card style="margin-bottom: 10px">
        <a-card-meta title="Quang Đào">
          <a-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        </a-card-meta>
        <div style="margin-top: 20px">
          <a-textarea
            v-model="formInline.content"
            placeholder="Bạn đang nghĩ gì ?"
            :auto-size="{ minRows: 2, maxRows: 6 }"
          />
        </div>
        <a-space style="margin-top: 10px">
          <a-upload
            name="file"
            :multiple="true"
            :headers="headers"
            @change="handleChange"
          >
            <a-button> <a-icon type="upload" /> Click to Upload </a-button>
          </a-upload>
          <a-button type="primary" @click="handleSubmit"> Đăng </a-button>
        </a-space>
      </a-card>
      <!-- content -->
      <a-card style="margin-bottom: 24px">
        <template slot="actions">
          <a-icon key="like" type="like" />
          <a-icon key="message" type="message" @click="showModal" />
          <a-icon key="fullscreen" type="fullscreen" @click="showModal" />
        </template>
        <a-card-meta
          title="Quang Đào"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates consequatur labore vitae quod recusandae exercitationem quasi voluptatem deserunt ab molestias soluta excepturi dolorem ex magni, veritatis obcaecati quaerat. Pariatur, obcaecati."
        >
          <a-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        </a-card-meta>
        <img slot="cover" alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
      </a-card>
      <!-- modal -->
      <div>
        <a-modal v-model="visible" title="Bài viết của Quang Đào" @ok="handleOk">
          <a-card-meta
            title="Quang Đào"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates consequatur labore vitae quod recusandae exercitationem quasi voluptatem deserunt ab molestias soluta excepturi dolorem ex magni, veritatis obcaecati quaerat. Pariatur, obcaecati."
            style="margin-bottom: 10px"
          >
            <a-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          </a-card-meta>
          <img
            width="100%"
            margin-bottom="5px"
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
          <div style="margin: 10px 0px">
            <a-button> <a-icon type="like" /> Like</a-button>
            <a-button> <a-icon type="message" /> Comment</a-button>
          </div>
          <a-card-meta style="margin-top: 10px" title="Card title">
            <a-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          </a-card-meta>
          <div style="margin: 10px 0px 0px 40px">
            <a-textarea placeholder="Bình luận ..." :auto-size="{ minRows: 1, maxRows: 3 }" />
          </div>
          <a-card-meta
            style="margin-top: 10px"
            title="Card title"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates consequatur labore vitae quod recusandae exercitationem quasi voluptatem deserunt ab molestias soluta excepturi dolorem ex magni, veritatis obcaecati quaerat. Pariatur, obcaecati."
          >
            <a-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          </a-card-meta>
        </a-modal>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      visible: false,
      headers: {
        authorization: 'authorization-text',
      },
      formInline: {
        content: ""
      },
    };
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        this.$message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        this.$message.error(`${info.file.name} file upload failed.`);
      }
    },
    handleOk(e) {
      console.log(e);
      this.visible = false;
    },
    async handleSubmit() {
      console.log(this.formInline);
      axios({
        method: "post",
        url: "http://localhost:3000/api/post",
        data: {
          content: this.formInline.content
        },
        headers: {}
      }).then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style></style>
