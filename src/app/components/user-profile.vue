<template>
  <div>
    <keep-alive>
      <component :is="currentComponet"></component>
    </keep-alive>
    <small @click="onClickHintText">{{ hintText }}</small>
  </div>
</template>
<script>
import UserLogin from './user-login.vue';
import UserRegister from './user-register.vue';

export default {
  data() {
    return {
      currentComponet: 'UserRegister',
      hintText: '还没有账户,点击注册',
    };
  },

  methods: {
    onClickHintText() {
      switch (this.currentComponet) {
        case 'UserRegister':
          this.currentComponet = 'UserLogin';
          this.hintText = '还没有账户,点击注册';
          break;
        case 'UserLogin':
          this.currentComponet = 'UserRegister';
          this.hintText = '已有账户,点击登录';
          break;
      }
    },
  },

  components: {
    UserLogin,
    UserRegister,
  },
};
</script>
