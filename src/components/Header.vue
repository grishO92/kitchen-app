<template>
  <div class="header">
    <div class="logo">
      THE KITCHEN
    </div>
    <div class="nav">
      <router-link :to="{ name: 'Catalog' }">
        Catalog
      </router-link>
      <router-link v-if="loggedIn" :to="{ name: 'Create' }">
        Create
      </router-link>
      <router-link v-if="!loggedIn" :to="{ name: 'Register' }">
        Register
      </router-link>
      <router-link v-if="!loggedIn" :to="{ name: 'Login' }">
        Login
      </router-link>
      <router-link :to="{ name: 'About' }">
        About
      </router-link>
      <router-link @click="logout" v-if="loggedIn" :to="{ name: 'Catalog' }">
        Logout
      </router-link>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'Header',

  mounted() {
    this.setupFirebase();
  },
  methods: {
    setupFirebase() {
      firebase.auth().onAuthStateChanged((user) => {
        user ? (this.loggedIn = true) : (this.loggedIn = false);
      });
    },

    async logout() {
      await firebase.auth().signOut();
      this.$router.replace({ name: 'Catalog' });
    },
  },
  data() {
    return {
      loggedIn: false,
    };
  },
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
