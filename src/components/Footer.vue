<template>
  <p class="footer">
    Feel free to check my <a href="https://github.com/grishO92">github</a>
  </p>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: center;
  gap: 4px;
  color: var(--color-one);
}
.footer a {
  color: var(--color-four);
  text-decoration: none;
}
</style>
