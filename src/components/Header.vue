<template>
  <div class="header">
    <div class="logo">
      THE KITCHEN
    </div>
    <div class="nav">
      <a href="/catalog">Catalog</a>
      <a href="/create">Create</a>
      <a href="/register">Register</a>
      <a href="/login">Login</a>
      <a href="/about">About</a>
      <a href="/logout">Logout</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
.header {
  padding: 0 3rem;
  margin: 0 0 3rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.logo {
  color: var(--color-one);
  font-size: 2rem;
}
.nav {
  display: flex;
  gap: 3rem;
  font-size: 1.3rem;
}
.nav a {
  padding: 0.4rem;
  color: var(--color-one);
  text-decoration: none;
  border-radius: 0.5rem;
  border: 0.1rem solid var(--color-two);
  background-color: var(--color-two);
}

.nav a:hover {
  background-color: var(--color-one);
  border-radius: 0.5rem;
  color: var(--color-two);
  border: 0.1rem solid var(--color-one);
}

.nav a:focus {
  background-color: var(--color-one);
  border-radius: 0.5rem;
  color: var(--color-two);
  border: 0.1rem solid var(--color-two);
}
</style>
