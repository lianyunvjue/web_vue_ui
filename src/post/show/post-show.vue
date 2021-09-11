<template>
  <div>
    <div>postshow{{ postId }}</div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: {
    postId: String,
  },

  create() {
    console.log('1111', this.$route.params.postId);
  },
};
</script>
