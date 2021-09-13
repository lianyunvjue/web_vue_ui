<template>
  <div class="page">
    <div class="card">
      <div class="card__header">
        <h3 class="card-title">{{ name }}</h3>
        <div class="card-subtitle">Transition & Animation</div>
      </div>
      <!-- <div class="card__content">
        <transition-group
          name="custom"
          leave-active-class="animate__animated animate__tada"
        >
          <div class="emoji" v-for="emoji in emojiList" :key="emoji">
            {{ emoji }}
          </div>
        </transition-group>
      </div> -->
      <div class="card__content">
        <div class="emoji">
          {{ animatedNumber }}
        </div>
      </div>
      <div class="card__action">
        <button @click="number = number + 10" :class="{ active: isActive }">
          请按这里
        </button>
        <!-- <button @click="shuffle" :class="{ active: isActive }">
          请按这里
        </button>
        <button @click="pop">
          请按这里
        </button> -->
      </div>
    </div>
    <div class="status">
      <small>isActive: {{ isActive }} </small>
    </div>
  </div>
</template>

<script>
// import GhostEmoji from './components/ghost-emoji';
// import RobotEmoji from './components/robot-emoji';
import _ from 'lodash';
import gsap from 'gsap';

export default {
  data() {
    return {
      name: '宁皓网',
      isActive: true,
      emoji: 'GhostEmoji',
      emojiList: ['🦴', '🤏', '🎃'],
      number: 0,
      tweenedNumber: 0,
    };
  },

  computed: {
    animatedNumber() {
      return this.tweenedNumber.toFixed(0);
    },
  },

  watch: {
    number(newValue) {
      gsap.to(this.$data, { duration: 0.5, tweenedNumber: newValue });
    },
  },

  methods: {
    shuffle() {
      this.emojiList = _.shuffle(this.emojiList);
    },
    pop() {
      this.emojiList.pop();
    },
  },
};
</script>

<style>
@import './styles/app.css';
@import './styles/card.css';
@import './styles/animate.css';
</style>
