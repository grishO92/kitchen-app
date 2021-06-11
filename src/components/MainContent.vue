<template>
  <div class="main">
    <router-link :to="{ name: 'Catalog' }"></router-link>
    <router-link :to="{ name: 'Create' }"></router-link>
    <router-link :to="{ name: 'Details' }"></router-link>
    <router-link :to="{ name: 'Edit' }"></router-link>
    <router-link :to="{ name: 'About' }"></router-link>
    <router-link :to="{ name: 'Login' }"></router-link>
    <router-link :to="{ name: 'Register' }"></router-link>
  </div>
  <router-view />
</template>

<script>
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import About from '../views/About.vue';
import Catalog from '../views/Catalog.vue';
import Create from '../views/Create.vue';
import Details from '../views/Details.vue';
import Edit from '../views/Edit.vue';

export default {
  name: 'MainContent',
  components: { Login, Register, Catalog, Details, Create, About, Edit },
};
</script>

<style>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
}
</style>
