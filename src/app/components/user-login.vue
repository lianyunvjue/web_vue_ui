<template>
  <div>
    <div>用户登录{{ username }}</div>
    <AppInput v-model="username" />
  </div>
</template>

<script>
import AppInput from './app-input.vue';

export default {
  data() {
    return {
      username: '',
    };
  },

  components: {
    AppInput,
  },
};
</script>
