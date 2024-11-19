<template>
  <nav class="navBar">
    <div class="links">
      <router-link to="/">Posts</router-link>
      <router-link to="/signup">Signup</router-link>
    </div>
  </nav>
  <router-view/>
<Footer></Footer>
</template>

<script>
import Footer from "@/components/Footer.vue"
export default {
  name: 'App',
  components: {Footer},
}
</script>

<style>
#app{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
}
body{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
}

a, p{
  font-family: sans-serif;
  color: white;
}


.navBar{
  display: flex;
  top: 0;
  background: #545454;
  border-radius: 15px;
  position: sticky;
  justify-content: space-between;
}
.links{
  display: flex;
  align-items: center;
}

.links > a{
  font-size: 1.5rem;
  padding: 10px;
  cursor: pointer;
  border-radius: 15px;
  margin: 2% 0 2% 2%;
  justify-content: start;
}

.navBar .links a:hover{
  background-color: darkgrey;
}

.navBar > a > img{
  max-width: 50px;
  padding: 5px;
  height: auto;
  border-radius: 100%;
  margin: 1%;
}

@media(min-width: 500px){
  .navBar{
    width: 90%;
    margin: 2%;
  }
  #posts{
    width: 60%;
  }
  .login_cont{
    width: 20%;
  }

}

@media(max-width: 500px){
  .login_cont{
    width: 90%;
  }
  .navBar{
    margin: 0;
    width: 100%;
  }
  #posts{
    width: 90%;
  }
  footer p{
    font-size: 0.7rem;
  }
}
</style>
