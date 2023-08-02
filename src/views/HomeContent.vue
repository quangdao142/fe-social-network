<template>
  <div style="padding: 24px">
    <div style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '100vh' }">
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
          <div style="margin: 10px 0px;">
            <a-button> <a-icon type="like" /> Like</a-button>
            <!-- <a-button> <a-icon type="message" /> Comment</a-button> -->
          </div>
          <a-card-meta style="margin-top: 10px" title="Quang Đào">
            <a-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          </a-card-meta>
          <div style="margin: 10px 0px 0px 40px">
            <a-textarea placeholder="Bình luận ..." :auto-size="{ minRows: 1, maxRows: 3 }" />
          </div>
          <a-card-meta
            style="margin-top: 10px"
            title="Minh Nguyễn"
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
export default {
  data() {
    return {
      visible: false
    };
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      console.log(e);
      this.visible = false;
    }
  }
};
</script>

<style></style>
