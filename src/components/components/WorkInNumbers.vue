<template>
  <div v-intersection-observer="startNumberAnimation" class="our-numbers">
    <div class="bg-image">
      <img src="@/assets/images/backgrounds/movements_globe_bg.png" alt="Movements Marketing Globe Background">
    </div>
    <div class="line"></div>
    <div class="section__content has-text-left">
      <div class="columns p-t-40 is-variable is-6 is-multiline">
        <div class="column is-12-tablet is-6-desktop is-7-widescreen">
          <h2 v-html="$t(`home.numbers.ourNumbers`)" class="m-b-0"></h2>
        </div>
        <div class="column is-12-tablet is-6-desktop is-5-widescreen">
          <div class="columns is-multiline is-mobile">
            <div class="column is-6" v-for="(number, index) in workInNumbers" :key="index">
              <div class="number-wrapper">
                <p class="digit" :data-value="number.value" v-text="animatedNumber(number)"/>
                <p class="text">{{ $t(number.translationKey) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
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
.our-numbers {
  .number-wrapper {
    padding: 10px 20px;

    .digit {
      font-size: 84px;
      line-height: 92px;
      color: #fff;
      font-weight: 900;

      @media (min-resolution: 100dpi) {
        font-size: 68px;
        line-height: 72px;
      }

      @media screen  and (max-width: 780px) {
        font-size: 78px;
        line-height: 84px;
      }

      @media screen  and (max-width: 460px) {
        font-size: 72px;
        line-height: 78px;
      }

      @media screen  and (max-width: 460px) {
        font-size: 68px;
        line-height: 72px;
      }

      &::after {
        content: '';
        display: block;
        width: 45px;
        height: 3px;
        background: #9FF882;

        @media (min-resolution: 100dpi) {
          width: 40px;
        }
      }
    }

    .text {
      color: #fff;
      font-size: 18px;
      padding-top: 15px;

      @media (min-resolution: 100dpi) {
        padding-top: 10px;
        font-size: 17px;
        line-height: 20px;
      }
    }
  }

}




</style>
