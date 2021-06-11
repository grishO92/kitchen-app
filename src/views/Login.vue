<template>
  <form class="login">
    <h2>Login form</h2>
    <input type="text" placeholder="Enter Username" name="uname" required />
    <input type="password" placeholder="Enter Password" name="psw" required />
    <button type="submit">Log in</button>
    <h5>
      Don't have an account? Click
      <router-link :to="{ name: 'Register' }">
        here
      </router-link>
      to register.
    </h5>
  </form>
</template>

<script>
export default {
  name: 'Login',
};
</script>

<style scoped>
.login {
  box-shadow: 0px 5px 15px -12px black;
  width: 350px;
  height: auto;
  padding: 20px 3rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--color-three);
  color: var(--color-four);
  border-radius: 1rem;
}

.login h2 {
  display: flex;
  justify-content: center;
  font-size: 2rem;
}

.login input {
  padding: 0.7rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  border: 2px solid var(--color-two);
}
.login input:focus {
  outline: none;
  border-radius: 0.5rem;
  border: 2px solid rgb(95, 211, 95);
}
.login button {
  padding: 0.5rem;
  font-size: 1.3rem;
  border-radius: 0.5rem;
  border: 2px solid var(--color-one);
  background-color: var(--color-one);
  color: var(--color-two);
  cursor: pointer;
}

.login h5 {
  padding: 0 0 1rem 0;
  display: flex;
  justify-content: center;
  gap: 4px;
}
.login h5 a {
  text-decoration: none;
  color: var(--color-one);
}
</style>
