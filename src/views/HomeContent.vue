<template>
  <a-layout style="padding: 24px">
    <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '100vh' }">
      <a-list :grid="{ gutter: 16, column: 4 }" :data-source="data">
        <a-list-item slot="renderItem" slot-scope="item">
          <a-card hoverable style="width: 300px">
            <img slot="cover" alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
            <template slot="actions">
              <a-icon type="like" />
              <a-icon type="message" />
            </template>
            <a-card-meta :title="item.title" description="This is the description">
              <a-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            </a-card-meta>
            <div>
              <p style="padding: 15px 0 0 5px">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quae voluptatem hic excepturi.
              </p>
              <a-tag>Tag 1</a-tag>
              <a-tag>Tag 2</a-tag>
            </div>
          </a-card>
        </a-list-item>
      </a-list>
    </a-layout-content>
  </a-layout>
</template>

<script>
const data = [
  {
    title: "Title 1"
  },
  {
    title: "Title 2"
  },
  {
    title: "Title 3"
  },
  {
    title: "Title 4"
  }
];
export default {
  data() {
    return {
      data
    };
  }
};
</script>

<style></style>
