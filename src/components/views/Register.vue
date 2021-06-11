<template>
  <form class="register">
    <h2>Register form</h2>
    <input type="text" placeholder="Enter Username" name="uname" required />
    <input type="password" placeholder="Enter Password" name="psw" required />
    <input
      type="password"
      placeholder="Repeat Password"
      name="repsw"
      required
    />
    <button type="submit">Register</button>
    <h5>Already have an account? Click <a href="/login">here</a> to login.</h5>
  </form>
</template>

<script>
export default {
  name: 'Register',
};
</script>

<style scoped>
.register {
  box-shadow: 0px 5px 15px -12px black;
  width: 350px;
  height: auto;
  padding: 1rem 3rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--color-three);
  color: var(--color-four);
  border-radius: 1rem;
}

.register h2 {
  display: flex;
  justify-content: center;
  font-size: 2rem;
}

.register input {
  padding: 0.7rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  border: 2px solid var(--color-two);
}
.register input:focus {
  outline: none;
  border-radius: 0.5rem;
  border: 2px solid rgb(95, 211, 95);
}
.register button {
  padding: 0.5rem;
  font-size: 1.3rem;
  border-radius: 0.5rem;
  border: 2px solid var(--color-one);
  background-color: var(--color-one);
  color: var(--color-two);
  cursor: pointer;
}

.register h5 {
  padding: 0 0 1rem 0;
  display: flex;
  justify-content: center;
  gap: 4px;
}
.register h5 a {
  text-decoration: none;
  color: var(--color-one);
}
</style>
