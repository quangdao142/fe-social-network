<template>
  <div style="padding: 24px">
    <div style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '100vh' }">
      <!-- upload a post -->
      <a-card style="margin-bottom: 10px">
        <a-card-meta :title="fullname">
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
            :before-upload="beforeUpload"
            :custom-request="customUpload"
            @change="handleUploadChange"
          >
            <a-button> <a-icon type="upload" /> Click to Upload </a-button>
          </a-upload>
          <a-button type="primary" @click="handleSubmit"> Đăng </a-button>
        </a-space>
      </a-card>

      <!-- content -->
      <div>
        <div class="no-dot-list">
          <div v-for="item in reversedItems" :key="item._id">
            <a-card style="margin-bottom: 24px" v-if="item.username === username">
              <template #actions>
                <a-icon key="like" type="like" />
                <a-icon key="message" type="message" @click="showModal(item)" />
                <a-icon key="fullscreen" type="fullscreen" @click="showModal(item)" />
              </template>
              <a-card-meta :title="fullname" :description="item.content">
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
          <div style="margin: 10px 0px">
            <a-button @click="showEditModal"> <a-icon type="edit" /> Chỉnh sửa</a-button>
            <a-button style="margin-left: 5px" key="delete" type="delete" @click="deletePost(item._id)">
              <a-icon type="delete" /> Xóa</a-button
            >
          </div>
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
      <!-- Edit Modal -->
      <div>
        <a-modal v-model="editvisible" title="Chỉnh sửa bài viết" @ok="handleEditOk">
          <a-textarea
            v-model="editedContent"
            :placeholder="currentPost?.content"
            :auto-size="{ minRows: 5}"
          />
          <a-button style="margin-top: 10px;">Cập nhật bài viết</a-button>
        </a-modal>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import jwt_decode from "jwt-decode";

export default {
  data() {
    return {
      visible: false,
      editvisible: false,
      headers: {
        authorization: "authorization-text"
      },
      formInline: {
        content: ""
      },
      items: [],
      fullname: "",
      username: "",
      currentPost: null,
      commentText: "",
      comments: []
    };
  },
  methods: {
    showModal(post) {
      this.currentPost = post;
      this.visible = true;
      this.fetchComments();
    },
    showEditModal() {
      this.editvisible = true;
    },
    handleEditOk(e) {
      console.log(e);
      this.editvisible = false;
    },
    // handleChange(info) {
    //   if (info.file.status !== "uploading") {
    //     console.log(info.file, info.fileList);
    //   }
    //   if (info.file.status === "done") {
    //     this.$message.success(`${info.file.name} file uploaded successfully`);
    //   } else if (info.file.status === "error") {
    //     this.$message.error(`${info.file.name} file upload failed.`);
    //   }
    // },
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
        this.formInline.content = "";
        this.fetchPosts();
      });
    },
    async fetchPosts() {
      try {
        const response = await fetch("http://localhost:3000/api/getpost");
        const data = await response.json();
        this.items = data.items;
      } catch (error) {
        console.error(error);
      }
    },
    async fetchComments() {
      try {
        const response = await fetch("http://localhost:3000/api/comment");
        const data = await response.json();
        // console.log(data)
        this.comments = data;
        console.log(this.comments);
      } catch (error) {
        console.error(error);
      }
    },
    async sendComment() {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/comment",
          {
            postId: this.currentPost._id,
            content: this.commentText
          },
          {
            headers: {}
          }
        );
        console.log(response.data);
        this.fetchComments();
      } catch (error) {
        console.error(error);
      }
    },
    beforeUpload(file) {
      const isImage = file.type.startsWith("image/");
      if (!isImage) {
        this.$message.error("Chỉ cho phép tải lên các tập tin hình ảnh!");
      }
      return isImage;
    },
    customUpload({ file, onSuccess, onError }) {
      const formData = new FormData();
      formData.append("file", file);

      axios
        .post("http://localhost:3000/api/post", formData, {
          headers: {}
        })
        .then(response => {
          onSuccess(response.data);
        })
        .catch(error => {
          onError(error);
        });
    },
    handleUploadChange(info) {
      if (info.file.status === "done") {
        this.$message.success(`${info.file.name} tải lên thành công`);
        // Lấy URL của ảnh từ response server nếu có
        const imageUrl = info.file.response.url; // Thay thế bằng key phù hợp trong response
        this.formInline.content += `\n![Image](${imageUrl})`;
      } else if (info.file.status === "error") {
        this.$message.error(`${info.file.name} tải lên thất bại.`);
      }
    }
  },
  created() {
    this.fetchPosts();
  },
  mounted() {
    let userToken = localStorage.getItem("key");
    let userDecoded = jwt_decode(userToken);
    this.fullname = userDecoded.fullname;
    this.username = userDecoded.username;
  },
  computed: {
    // reservedComments
    reversedComments() {
      return this.comments.slice().reverse();
    },
    reversedItems() {
      return this.items.slice().reverse();
    }
  },
  async deletePost() {
    try {
      const response = await axios.delete(`http://localhost:3000/api/post/${this.currentPost._id}`);
      console.log(response.data);
      this.visible = false;
      this.fetchPosts();
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
