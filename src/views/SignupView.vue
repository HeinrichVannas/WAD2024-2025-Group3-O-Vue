<script setup>

</script>

<template>
   <div class="login_cont">
        <h2 class>Welcome to PostIT</h2>
        <router-link to="/">Create a account</router-link>
       <p >or</p>
       <p>Please log in</p>
       

       <form action="index.html" class="login_form">
        <input type="email" name="email" title="Email" placeholder="Email" required><br>
        <input type="password" name="email" title="Email" placeholder="Password" required><br>
        <button type="submit">Log in</button>
    </form>
    </div>
</template>

<style scoped>
.login_cont{
    width: 20%;
    display: flex;
    flex-direction: column;
    background-color: #696969;
    margin-top: 20px;
    border-radius: 15px;
    padding: 10px;
    justify-content: center;
    align-items: center;
}
.login_form{
   text-align:center
}
</style>