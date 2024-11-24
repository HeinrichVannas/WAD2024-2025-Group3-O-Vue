<template>
  <div class="post" v-for="(post, index) in getPosts" :key="index">
    <div class="postHead">
      <img src="@/assets/default_profile.jpg" alt="default profile image" />
      <p class="date">{{ post.postDate }}</p>
    </div>
    <img v-if="post.image" :src="resolveImagePath(post.image)" alt="posted image" />
    <p class="postMessage">{{ post.message }}</p>
    <div class="likeSection">
      <img class="like" src="@/assets/likeIcon.png" alt="like button icon" @click="addLike(index)"
      />
      <span class="likeCount">{{ post.likes }} {{ post.likes === 1 ? "like" : "likes" }}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "PostComponent",
  computed: {
    ...mapGetters(["getPosts"]), //Get posts from store
  },
  methods: {
    ...mapActions(["addLike"]), //Commit the like count increase to store
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

<style scoped>
@import '@/assets/styles/post.css';
</style>