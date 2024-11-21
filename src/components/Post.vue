
<script>
export default {
  name: "PostComponent",
  props: ["posts"],
  methods: {
    resolveImagePath(imagePath) {   
      try {
        
        return require(`@/assets/${imagePath}`);
      } catch (e) {
        return null;
      }
    },
  },
};

</script>

<template>
  <div class="post" v-for="(post, index) in posts" :key="index">
    <div class="postHead">
      <img src="@/assets/default_profile.jpg" alt="default profile image" />
      <p class="date">{{ post.postDate }}</p>
    </div>
    <img v-if="post.image" :src="resolveImagePath(post.image)" alt="posted image" />
    <p class="postMessage">{{ post.message }}</p>
    <img class="like" src="@/assets/likeIcon.png" alt="like button icon" />
  </div>
</template>

<style scoped>
@import '@/assets/styles/post.css';
</style>