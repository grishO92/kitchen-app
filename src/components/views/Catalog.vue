<template>
  <div class="catalog">
    <div class="title">
      <h3>welcome to</h3>
      <h1>THE KITCHEN</h1>
    </div>
    <div class="card-grid">
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
    </div>
  </div>
</template>

<script>
import RecipeCard from './common/RecipeCard.vue';

export default {
  name: 'Catalog',
  components: { RecipeCard },
};
</script>

<style scoped>
.catalog .title {
  margin-top: -70px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.catalog .title h3 {
  position: relative;
  font-size: 1.2rem;
  top: 4.8rem;
  left: -10rem;
  color: var(--color-four);
}
.catalog .title h1 {
  font-size: 4rem;
  color: var(--color-one);
}

.catalog .card-grid {
  display: grid;
  margin: 0rem 3rem;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 400px;
}
</style>
