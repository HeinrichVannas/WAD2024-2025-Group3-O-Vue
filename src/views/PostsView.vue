<script setup>
import PostComponent from "@/components/Post.vue";
import PostData from "@/assets/posts.json";

const posts = PostData;
</script>

<template>
  <div id="posts">
    <PostComponent :posts="posts" />
  </div>
</template>

<style scoped>
#posts {
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
}
</style>