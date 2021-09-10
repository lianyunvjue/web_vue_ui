<template>
  <h3>
    <router-link to="/">{{ name }}</router-link>
  </h3>
</template>

<script>
export default {
  data() {
    return {
      name: '宁皓网',
    };
  },
};
</script>

<style>
@import './styles/app.css';
</style>
