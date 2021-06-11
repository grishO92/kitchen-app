<template>
  <div class="front">
    <Header />
    <div class="content">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: { Header, Footer },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

:root {
  --color-one: rgb(220, 20, 60);
  --color-two: rgb(255, 255, 255);
  --color-three: rgb(245, 245, 245);
  --color-four: rgb(10, 10, 10);
}
body {
  background-color: var(--color-two);
}
.front {
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
}
.content {
  display: flex;
  justify-content: center;
}

#app {
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  padding: 0;
}
</style>
