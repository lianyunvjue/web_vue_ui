<template>
  <div>
    <h3>{{ name }}</h3>
    <Userprofile />
  </div>
</template>

<script>
import Userprofile from './components/user-profile';

export default {
  data() {
    return {
      name: '宁皓网',
    };
  },

  methods: {
    onTapAppButton(text) {
      console.log('on tap app button', text);
    },

    onInitAppButton(text) {
      console.log('on init app button', text);
    },
  },

  components: { Userprofile },
};
</script>

<style>
@import './styles/app.css';
</style>
