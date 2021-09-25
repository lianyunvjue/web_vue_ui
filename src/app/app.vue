<template>
  <div>
    <h3>
      <router-link to="/">{{ name }}</router-link>
    </h3>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '宁皓网',
    };
  },

  created() {
    console.log(this.$store.state);
  },
};
</script>

<style>
@import './styles/app.css';
</style>
