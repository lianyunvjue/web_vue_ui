<template>
  <div><PostList /></div>
</template>

<script>
import { defineComponent } from 'vue';
import PostList from './components/post-list';

export default defineComponent({
  components: {
    PostList,
  },
});
</script>
