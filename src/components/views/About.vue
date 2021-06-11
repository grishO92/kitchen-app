<template>
  <div class="about">
    <h1>About</h1>
    <h2>
      <span>THE KITCHEN</span> - the right place to store your favorite recipes!
    </h2>
  </div>
</template>

<script>
export default {
  name: 'About',
};
</script>

<style scoped>
.about {
  box-shadow: 0px 5px 15px -12px black;
  width: 400px;
  height: auto;
  padding: 20px 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--color-three);
  color: var(--color-four);
  border-radius: 1rem;
}

span {
  color: var(--color-one);
}
</style>
