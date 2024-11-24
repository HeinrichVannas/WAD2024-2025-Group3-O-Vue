<template>
  <div id="posts">
    <PostComponent :posts="posts" />
  </div>
</template>

<script setup>
import PostComponent from "@/components/Post.vue";
//import PostData from "@/assets/posts.json";
//const posts = PostData;
</script>

<style scoped >
#posts {
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
}

.resetButton {
  padding: 5px 10px;
  margin-top: 4px;
  margin-bottom: 4px;
  background-color: #6a6a6a;
  color: white;
  border-radius: 5px;
}
</style>