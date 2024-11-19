
<script>
export default {
  name: "PostComponent",
  props: ["posts"],
  methods: {
    resolveImagePath(imagePath) {   
      try {
        
        return require(`@/assets/${imagePath}`);
      } catch (e) {

        return require('@/assets/default_profile.jpg');
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
.post{
  width: 90%;
  display: flex;
  flex-direction: column;
  background-color: #696969;
  margin-top: 20px;
  border-radius: 15px;
  padding: 10px;
}

.postHead + img{
  margin: 1%;
}

.post p {
  font-size: 1.5rem;
  padding: 1%;
}

.postHead{
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.postHead img{
  max-width: 10%;
  height: auto;
  align-self: start;
  border-radius: 100%;
  margin-top: 1%;
}

.postHead ~ p{
  font-size: 1.2rem;
}

.like{
  cursor: pointer;
  max-width: 10%;
  border-radius: 100%;
}
</style>