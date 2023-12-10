<template>
  <div class="section testimonials slider has-padding has-text-centered has-radius-top-left">
    <h2 v-html="$t(`home.testimonials.title`)" class="has-line-center testimonials_itle"></h2>
    <p v-html="$t(`home.testimonials.text`)" class="testimonials_subtitle"></p>
    <div class="testimonial-slider">
<!--      <transition :name="transitionName" mode="out-in">-->
<!--        <div :key="currentIndex" class="testimonial-container">-->
          <testimonial :data="testimonials[currentIndex]" :index="currentIndex" :transition-name="transitionName"/>
<!--        </div>-->
<!--      </transition>-->
    </div>

    <div class="columns m-0 p-t-20">
      <div class="column is-4 p-0"></div>
      <div class="column has-text-centered p-0 slider__dots">
            <div v-for="(t, i) in testimonials" :key="`dot-${i}`" :class="{'dot': true, 'is-active': i === currentIndex}"></div>
      </div>
      <div class="column is-4 has-text-right slider__navigation p-0">
        <div class="slider__navigation__arrow" @click="prevSlide">
          <icons icon="chevronLeft" :width="32" :height="32" :stroke-width="3"></icons>
        </div>
        <div class="slider__navigation__arrow" @click="nextSlide">
          <icons icon="chevronRight" :width="32" :height="32" :stroke-width="3"></icons>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Testimonial from "@/components/components/Testimonial.vue";

@Component({
  components: {
    Testimonial
  }
})
class Testimonials extends Vue {
  currentIndex = 0;

  direction = 'forward'

  testimonials = [
    {
      cover: require('@/assets/images/testimonials/shypple.png'),
      company: `Scorito`,
      companyDescription: this.$t(`home.testimonials.scorito.companyDescription`),
      quote: this.$t(`home.testimonials.scorito.quote`),
      quotePerson: this.$t(`home.testimonials.scorito.quotePerson`),
      impact: this.$t(`home.testimonials.scorito.impact`),
    },
    {
      cover: require('@/assets/images/testimonials/shypple.png'),
      company: `Dak`,
      companyDescription: this.$t(`home.testimonials.dak.companyDescription`),
      quote: this.$t(`home.testimonials.dak.quote`),
      quotePerson: this.$t(`home.testimonials.dak.quotePerson`),
      impact: this.$t(`home.testimonials.dak.impact`),
    },
    {
      cover: require('@/assets/images/testimonials/shypple.png'),
      company: `Shypple`,
      companyDescription: this.$t(`home.testimonials.shypple.companyDescription`),
      quote: this.$t(`home.testimonials.shypple.quote`),
      quotePerson: this.$t(`home.testimonials.shypple.quotePerson`),
      impact: this.$t(`home.testimonials.shypple.impact`),
    },
    {
      cover: require('@/assets/images/testimonials/shypple.png'),
      company: `ABC Display`,
      companyDescription: this.$t(`home.testimonials.abcDisplay.companyDescription`),
      quote: this.$t(`home.testimonials.abcDisplay.quote`),
      quotePerson: this.$t(`home.testimonials.abcDisplay.quotePerson`),
      impact: this.$t(`home.testimonials.abcDisplay.impact`),
    },
    {
      cover: require('@/assets/images/testimonials/shypple.png'),
      company: `Diagnost-IQ`,
      companyDescription: this.$t(`home.testimonials.diagnost.companyDescription`),
      quote: this.$t(`home.testimonials.diagnost.quote`),
      quotePerson: this.$t(`home.testimonials.diagnost.quotePerson`),
      impact: this.$t(`home.testimonials.diagnost.impact`),
    },
    {
      cover: require('@/assets/images/testimonials/shypple.png'),
      company: `Sazas`,
      companyDescription: this.$t(`home.testimonials.sazas.companyDescription`),
      quote: this.$t(`home.testimonials.sazas.quote`),
      quotePerson: this.$t(`home.testimonials.sazas.quotePerson`),
      impact: this.$t(`home.testimonials.sazas.impact`),
    },
    {
      cover: require('@/assets/images/testimonials/shypple.png'),
      company: `Cargoplot`,
      companyDescription: this.$t(`home.testimonials.cargoplot.companyDescription`),
      quote: this.$t(`home.testimonials.cargoplot.quote`),
      quotePerson: this.$t(`home.testimonials.cargoplot.quotePerson`),
      impact: this.$t(`home.testimonials.cargoplot.impact`),
    },
    {
      cover: require('@/assets/images/testimonials/shypple.png'),
      company: `Oct8ne`,
      companyDescription: this.$t(`home.testimonials.oct8ne.companyDescription`),
      quote: this.$t(`home.testimonials.oct8ne.quote`),
      quotePerson: this.$t(`home.testimonials.oct8ne.quotePerson`),
      impact: this.$t(`home.testimonials.oct8ne.impact`),
    },
    {
      cover: require('@/assets/images/testimonials/shypple.png'),
      company: `X2com`,
      companyDescription: this.$t(`home.testimonials.x2com.companyDescription`),
      quote: this.$t(`home.testimonials.x2com.quote`),
      quotePerson: this.$t(`home.testimonials.x2com.quotePerson`),
      impact: this.$t(`home.testimonials.x2com.impact`),
    },
    {
      cover: require('@/assets/images/testimonials/shypple.png'),
      company: `Trans.eu`,
      companyDescription: this.$t(`home.testimonials.trans.companyDescription`),
      quote: this.$t(`home.testimonials.trans.quote`),
      quotePerson: this.$t(`home.testimonials.trans.quotePerson`),
      impact: this.$t(`home.testimonials.trans.impact`),
    }
  ];

  get transitionName() {
    return `${this.direction}-slide`
  }

  nextSlide() {
    this.direction = 'forward';
    this.currentIndex = this.currentIndex === this.testimonials.length-1 ? 0 : this.currentIndex + 1;
  }

  prevSlide() {
    this.direction = 'backward';
    this.currentIndex = this.currentIndex === 0 ? this.testimonials.length-1 : this.currentIndex - 1;
  }
}

export default Testimonials;
</script>

<style lang="scss">
.testimonials {
  background: #f2f2f2;

  .testimonials_subtitle {
    max-width: 980px;
    margin: 0 auto 80px;
  }

  .testimonial-slider {
    position: relative;
    overflow: hidden; /* Add this line to hide overflow */
  }

  .testimonial-container {
    display: flex;
    min-height: 590px;
    transition: transform 400ms ease;
  }
}
</style>
