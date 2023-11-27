<template>
  <div class="testimonials columns">
    <div class="column is-3 slider">
    </div>
    <div class="column is-9 content">
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
class WorkInNumbers extends Vue {

  workInNumbers = [
    { value: 598, current: 0, translationKey: 'home.numbers.projects' },
    { value: 9, current: 0, translationKey: 'home.numbers.languages' },
    { value: 3, current: 0, translationKey: 'home.numbers.offices' },
    { value: 4, current: 0, translationKey: 'home.numbers.teams' },
  ];

  animatedNumber(number) {
    console.log(number, `${Math.floor(number.current)}`);
    return `${Math.floor(number.current)}`;
  }

  startNumberAnimation() {
    // const incrementInterval = 100 / 60; // 60 frames per second
    // let totalFrames = 100 / incrementInterval;

    this.workInNumbers.forEach((number) => {
      const timeout = 1500/number.value;
      const increment = number.value > 20 ? 2 : 1

      const intervalId = setInterval(() => {
        number.current += increment;

        if (number.current === number.value) {
          clearInterval(intervalId);
        }
      }, timeout);
    });
  }

  mounted () {
    // setTimeout(() => {
    //   this.startNumberAnimation();
    // }, 500);
  }
}

export default WorkInNumbers;
</script>

<style lang="scss">
.testimonials {
  background: pink;


}



</style>
