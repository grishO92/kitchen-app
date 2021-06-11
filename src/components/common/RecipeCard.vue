<template>
  <div class="card">
    <img class="img" src="../../assets/breakfast.jpg" />
    <div class="info">
      <h2 class="title">Pancakes</h2>
      <router-link :to="{ name: 'Details', params: { id: ':id' } }">
        Details
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecipeCard',
};
</script>

<style scoped>
.card {
  overflow: hidden;
  border-radius: 0.5rem;
  opacity: 0.8;
  box-shadow: 0px 5px 15px -12px black;
}
.card:hover {
  box-shadow: 0px 10px 15px -12px black;
  opacity: 1;
  transform: scale(1.05);
  transition: transform 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.card .img {
  object-position: center;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  object-fit: cover;
}

.card .info {
  z-index: 1;
  background: linear-gradient(
    hsl(0 0% 0%/0),
    hsl(20 0% 0%/0.3) 20%,
    hsl(0 0% 0%/1)
  );
  padding: 20px;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: translateY(0);
  transition: transform 500ms ease;
}
.card:hover .info {
  transform: translateY(-100%);
}
.card .info .title {
  color: var(--color-two);
}
.card .info a {
  padding: 0.4rem;
  color: var(--color-two);
  text-decoration: none;
  border-radius: 0.5rem;
  border: 0.1rem solid var(--color-one);
  background-color: var(--color-one);
}
</style>
