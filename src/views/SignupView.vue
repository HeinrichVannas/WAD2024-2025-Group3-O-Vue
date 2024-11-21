<script>
export default {
  data() {
    return {
      password: "",
      message: "",
    };
  },
  methods: {
    validatePassword() {
      const password = this.password;
      // Check password length
      if (!(password.length >= 8 && password.length < 15)) {
        this.message =
            "Password must be at least 8 characters and less than 15 characters.";
        return;
      }
      // Check if it starts with an uppercase letter
      if (!/^[A-Z]/.test(password)) {
        this.message = "Password must start with an uppercase letter.";
        return;
      }
      // Check for at least two lowercase letters
      if ((password.match(/[a-z]/g) || []).length < 2) {
        this.message =
            "Password must include at least two lowercase alphabet characters.";
        return;
      }
      // Check for at least one numeric value
      if (!/\d/.test(password)) {
        this.message = "Password must include at least one numeric value.";
        return;
      }
      if (!password.includes("_")) {
        this.message = 'Password must include the character "_".';
        return;
      }
      this.$router.push({ name: 'posts' });
    },
  },
};
</script>

<template>
   <div class="login_cont">
     <h2>Signup</h2>
       <form class="login_form" @submit.prevent="validatePassword">
         <div class="form-row">
           <label>Email: </label>
           <input type="email" name="email" title="Email" placeholder="Email" required><br>
         </div>
         <div class="form-row">
           <label>Password: </label>
           <input type="password" id="password" v-model="password" placeholder="Password"/><br>
         </div>
         <p v-if="message">{{ message }}</p>
         <button type="submit">Signup</button>
      </form>
    </div>
</template>

<style scoped>
h2 {
  font-family: sans-serif;
  color: white;
  font-size: 1.3rem;
}

.login_cont {
  width: 30%;
  display: flex;
  flex-direction: column;
  background-color: #696969;
  margin-top: 20px;
  border-radius: 15px;
  padding: 20px;
  justify-content: center;
  align-items: center;
}

.login_form {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
}

.form-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

label {
  font-family: sans-serif;
  color: white;
  font-size: 1.2rem;
  flex: 1;
}

input {
  border-radius: 15px;
  padding: 10px;
  font-size: 1.1rem;
  border: 1px solid #ccc;
  flex: 2;
}

button {
  border-radius: 15px;
  padding: 10px;
  font-size: 1.1rem;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  background-color: #45a049;
}

p {
  color: white;
  font-family: sans-serif;
  font-size: 1rem;
  text-align: center;
}
</style>