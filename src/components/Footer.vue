<template>
  <footer class="footer">
    <div class="footer-content">
      <p>&copy; 2024 Facenook. All rights reserved.</p>
      <button @click="scrollToTop" class="back-to-top">Back to Top</button>
    </div>
  </footer>
</template>

<script>
export default {
  name: "customFooter",
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
.footer {
  background-color: #696969;
  width: 100%;
  color: #fff;
  text-align: center;
  padding: 3px;

}
.footer-content a:hover {
  color: #fff;
}

.back-to-top {
  background: none;
  border: none;
  color: #bbb;
  cursor: pointer;
  margin-top: 10px;
  font-size: 0.9em;
  transition: color 0.3s;
}

.back-to-top:hover {
  color: #fff;
}
</style>