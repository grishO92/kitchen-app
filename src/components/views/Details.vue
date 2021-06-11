<template>
  <div class="details">
    <h2>Details</h2>
    <div class="card">
      <img class="img" src="../../assets/pancakes.jpg" />
      <div class="detail-grid">
        <div class="desc">
          <div class="title"><span>title: </span>Pancakes</div>
          <div class="author"><span>author: </span>Bro</div>
          <div class="Description">
            <span>description: </span> Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Nobis tempora architecto error distinctio facere
          </div>
          <div class="recipe">
            <span>Recipe: </span>
            <li>eggs</li>
            <li>flower</li>
            <li>oil</li>
            <li>backing soda</li>
            <li>milk</li>
          </div>
        </div>
        <div class="recipe-desc">
          <div class="recipe-btn">How to prepare?</div>
          <div class="recipe-info">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            obcaecati doloribus sunt maiores quam magni recusandae quod officia
            sed consequuntur dolorum, deleniti eum! Fugiat, cum iusto? Commodi
            incidunt molestiae tempore? Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Aspernatur obcaecati doloribus sunt maiores quam
            magni recusandae quod officia sed consequuntur dolorum, deleniti
            eum! Fugiat, cum iusto? Commodi incidunt molestiae tempore? Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            obcaecati doloribus sunt maiores quam magni recusandae quod officia
            sed consequuntur dolorum, deleniti eum! Fugiat, cum iusto? Commodi
            incidunt molestiae tempore?
          </div>
        </div>
        <div class="btns">
          <a class="btn edit">Edit</a>
          <a class="btn delete">Delete</a>
          <a class="btn back">Back</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Details',
};
</script>

<style scoped>
.details {
  box-shadow: 0px 5px 15px -12px black;
  min-width: 768px;
  max-width: 1560px;
  height: auto;
  padding: 20px 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--color-three);
  color: var(--color-four);
  border-radius: 1rem;
}

.details h2 {
  display: flex;
  justify-content: center;
  font-size: 2rem;
}

.card {
  display: flex;
  gap: 2rem;
  border-radius: 0.5rem;
}
.card .img {
  object-position: center;
  width: 60rem;
  height: auto;
  border-radius: 0.5rem;
  object-fit: cover;
}

.detail-grid {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
}

.detail-grid .desc {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.title {
  font-size: 1.8rem;
}
.author {
  font-size: 1.5rem;
}

.detail-grid span {
  font-size: 1.3rem;
  font-style: normal;
}

.recipe li {
  margin-left: 1.2rem;
  list-style: circle;
}

.detail-grid .btns {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.detail-grid .btn {
  padding: 0.5rem;
  font-size: 1.3rem;
  border-radius: 0.5rem;
  border: 2px solid var(--color-one);
  background-color: var(--color-one);
  color: var(--color-two);
  cursor: pointer;
}

.detail-grid .recipe-desc .recipe-btn {
  display: flex;
  justify-content: center;
  align-self: center;
  width: 20rem;
  padding: 0.5rem;
  font-size: 1.3rem;
  border-radius: 0.5rem;
  color: var(--color-four);
}

.detail-grid .recipe-desc {
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.detail-grid .recipe-desc .recipe-info {
  overflow: scroll;
  scrollbar-width: 0;
  border-radius: 0.5rem;
  height: 20rem;
  background-color: white;
  padding: 1rem;
}

::-webkit-scrollbar {
  display: none;
}
</style>
