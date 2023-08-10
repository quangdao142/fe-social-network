<template>
  <div style="padding: 24px">
    <div style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '100vh' }">
      <!-- content -->
      <div>
        <div class="no-dot-list">
          <div v-for="item in items" :key="item._id">
            <a-card style="margin-bottom: 24px">
              <template #actions>
                <a-icon
              :key="`like-${item._id}`"
              :type="item.liked ? 'like' : 'like-o'"
              @click="toggleLike(item)"
              />
                <a-icon key="message" type="message" @click="showModal(item)" />
                <!-- Truyền thông tin bài viết cho showModal -->
                <a-icon key="fullscreen" type="fullscreen" @click="showModal(item)" />
                <!-- Truyền thông tin bài viết cho showModal -->
              </template>
              <a-card-meta :title="item.fullname" :description="item.content">
                <a-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              </a-card-meta>
              <img
                slot="cover"
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            </a-card>
          </div>
        </div>
      </div>

      <!-- modal -->
      <div>
        <a-modal v-model="visible" :title="'Bài viết của ' + currentPost?.fullname" @ok="handleOk">
          <a-card-meta :title="currentPost?.fullname" :description="currentPost?.content" style="margin-bottom: 10px">
            <a-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          </a-card-meta>
          <img
            width="100%"
            margin-bottom="5px"
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
          <hr>
          <a-card-meta style="margin-top: 10px" :title="currentPost?.fullname">
            <a-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          </a-card-meta>
          <!-- add Comment -->
          <div class="comment-container">
            <a-textarea v-model="commentText" placeholder="Bình luận ..." :auto-size="{ minRows: 1, maxRows: 3 }" />
            <a-button @click="sendComment"> <a-icon type="message" /></a-button>
          </div>

          <!-- Show Comment -->
          <div v-for="comment in reversedComments" :key="comment._id">
            <a-card-meta
              v-if="comment.postId === currentPost?._id"
              style="margin-top: 10px"
              :title="comment.fullname"
              :description="comment.content"
            >
              <a-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            </a-card-meta>
          </div>
        </a-modal>
      </div>
    </div>
  </div>
</template>

<script>
import customAxios from "@/utils/axios";
import axios from "axios";
import jwt_decode from "jwt-decode";
export default {
  data() {
    return {
      visible: false,
      headers: {
        authorization: "authorization-text"
      },
      formInline: {
        content: ""
      },
      items: [],
      fullname: "",
      username: "",
      commentText: "",
      currentPost: null,
      comments: []
    };
  },
  methods: {
    // showModal() {
    //   this.visible = true;
    // },
    showModal(post) {
      this.currentPost = post;
      this.visible = true;
      this.fetchComments(post?._id);
    },
    handleChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        this.$message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
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
    },
    async fetchPosts() {
      try {
        const response = await customAxios.get("get-post");
        this.items = response.data.items;
      } catch (error) {
        console.error(error);
      }
    },
    async fetchComments(postId) {
      try {
        const response = await customAxios.get("comment-by-post/" + postId);
        this.comments = response.data.message;
      } catch (error) {
        console.error(error);
      }
    },
    async sendComment() {
      try {
        const response = await customAxios.post(
          "comment",
          {
            postId: this.currentPost._id,
            content: this.commentText
          }
        );
        console.log(response.data);
        await this.fetchComments(this.currentPost._id);
      } catch (error) {
        console.error(error);
      }
    }
  },
  created() {
    this.fetchPosts();
  },
  mounted() {},
  computed: {
    // reservedComments
    reversedComments() {
      return this.comments.slice().reverse();
    }
  },
  async toggleLike(item) {
      try {
        const response = await customAxios.post(
          `like/${item._id}`
        );
        console.log(response.data);
        item.liked = !item.liked;
      } catch (error) {
        console.error(error);
      }
    }
};
</script>

<style scoped>
.no-dot-list {
  /* Loại bỏ dấu chấm cho danh sách */
  list-style: none;
  /* Loại bỏ đệm và khoảng cách giữa các phần tử trong danh sách */
  padding: 0;
  margin: 0;
}
.comment-container {
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-left: 40px;
}
.comment-container a-textarea {
  flex: 1;
  margin-right: 5px;
}
</style>
