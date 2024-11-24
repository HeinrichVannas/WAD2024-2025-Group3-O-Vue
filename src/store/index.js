import { createStore } from 'vuex';

export default createStore({
  strict: true,
  state: {
    posts: [
      {
        message: "Look at this post.",
        postDate: "oct 22, 2024",
        image: "tartu2024.jpg",
        likes: 0
      },
      {
        message: "This is a post message",
        postDate: "oct 22, 2024",
        image: null,
        likes: 0
      },
      {
        message: "We need to make 2 more posts.",
        postDate: "oct 22, 2024",
        image: null,
        likes: 0
      },
      {
        message: "Hey I'm at Delta rn.",
        postDate: "oct 24, 2024",
        image: "delta.jpeg",
        likes: 0
      },
      {
        message: "Be right there!",
        postDate: "oct 24, 2024",
        image: null,
        likes: 0
      },
      {
        message: "Lunch with friends at the park.",
        postDate: "oct 25, 2024",
        image: "park_lunch.jpg",
        likes: 0
      },
      {
        message: "Sunset is beautiful today!",
        postDate: "oct 25, 2024",
        image: "sunset.jpg",
        likes: 0
      },
      {
        message: "Working on my project, almost done.",
        postDate: "oct 26, 2024",
        image: null,
        likes: 0
      },
      {
        message: "Check out this amazing view!",
        postDate: "oct 27, 2024",
        image: "amazing_view.jpg",
        likes: 0
      },
      {
        message: "Had a productive day!",
        postDate: "oct 28, 2024",
        image: null,
        likes: 0
      }
  ],},
  getters: {
    getPosts(state) {
      return state.posts;
    },
  },
  mutations: {
    addLike(state, postIndex) {
      state.posts[postIndex].likes++;
    },
    resetLikes(state){
      state.posts.forEach((post) => {post.likes=0})
    }
  },
  actions: {
    addLike({ commit }, postIndex) {
      commit("addLike", postIndex);
    },
    resetLikes({commit}){
      commit("resetLikes");
    }
  },

});