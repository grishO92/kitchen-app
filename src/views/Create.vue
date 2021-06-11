<template>
  <form class="create">
    <h2>Create recipe</h2>
    <input type="text" placeholder="recipe name" name="title" />
    <textarea type="text" placeholder="enter description" name="description" />
    <div class="recipe-ingr">
      <input
        class="add-ingr"
        type="text"
        placeholder="ingrediens"
        name="ingredients"
      />
      <button class="add">add</button>
    </div>
    <ul class="list">
      <li class="item">
        <h3>shit</h3>
        <button class="remove">remove</button>
      </li>
    </ul>
    <textarea type="text" placeholder="directions" name="directions" />
    <div class="buttons">
      <button class="createbtn" type="submit">Create</button>
      <router-link class="cancelBtn" :to="{ name: 'Catalog' }">
        Cancel
      </router-link>
    </div>
  </form>
</template>

<script>
export default {
  name: 'Create',
};
</script>

<style scoped>
.create {
  box-shadow: 0px 5px 15px -12px black;
  min-width: 1000px;
  max-width: 100vw;
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

.create h2 {
  display: flex;
  justify-content: center;
  font-size: 2rem;
}

.create input,
textarea {
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
.create button,
a {
  width: 100%;
  padding: 0.5rem;
  font-size: 1.3rem;
  border-radius: 0.5rem;
  border: 2px solid var(--color-one);
  background-color: var(--color-one);
  color: var(--color-two);
  cursor: pointer;
}

.recipe-ingr {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.add {
  margin: 0;
  width: 5rem;
}
.add-ingr {
  width: 150%;
}

.buttons {
  display: flex;
  align-items: center;
  text-align: center;
  cursor: pointer;
  gap: 1rem;
}

.cancelBtn {
  text-decoration: none;
  width: 100%;
}
.list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}

.item {
  text-align: justify;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}
</style>
