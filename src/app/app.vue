<template>
  <div>
    <h3>{{ name }}</h3>
    <div v-for="post in posts" :key="post.id">
      {{ post.title }}-
      <small> {{ post.user.name }} </small>
    </div>
  </div>
</template>

<script>
import { axios } from '@/app/app.service';

export default {
  data() {
    return {
      name: '宁皓网',
      posts: [],
      errorMessage: '',
    };
  },

  async created() {
    try {
      const response = await axios.get('/posts');
      this.posts = response.data;
    } catch (error) {
      this.errorMessage = error.message;
    }
  },
};
</script>

<style>
@import './styles/app.css';
</style>
