<template>
  <div class="careers has-bg-gray">
    <navigation :full-logo="true" :light-logo="true"/>

    <cover :cover-image="coverData.img" :cover-title="coverData.title" :cover-subtitle="coverData.subtitle" :is-green="true">
      <template #cta>
        <a href="routes.getStarted" target="_blank" class="button button--primary cover__cta">
          <span class="text">
            {{ coverData.cta }}
          </span>
          <span class="dot"></span>
          <span class="icon-wrapper">
            <icons icon="arrowRight" stroke-width="3" stroke="#fff" height="20" width="20" />
          </span>
        </a>
      </template>
    </cover>

<!--    <div class="section section&#45;&#45;positions has-bg-gray">-->
<!--      <h2 class="positions__title" v-html="$t(`careers.positions.title`)"> </h2>-->

<!--      <div class="section__content positions__open columns m-t-30 m-b-30 is-multiline">-->
<!--        <div v-for="(position, index) in positions" :key="`position-${index}`" class="column is-6">-->
<!--          <position :data="position"/>-->
<!--        </div>-->
<!--      </div>-->

<!--      <p class="positions__copy" v-html="$t(`careers.positions.copy`)"></p>-->
<!--    </div>-->

<!--    <div class="section-divider"></div>-->

<!--    <div class="section section&#45;&#45;offers">-->
<!--      <h2 class="offers__title" v-html="$t(`careers.offers.title`)"> </h2>-->

<!--      <div class="section__content offers__perks columns m-t-30 m-b-30 is-multiline">-->
<!--        <div v-for="(perk, index) in perks" :key="`perk-${index}`" class="column is-4">-->
<!--          <div class="perk">-->
<!--            <div class="perk__icon">-->
<!--              <img :src="perk.icon"/>-->

<!--            </div>-->
<!--            <div class="perk__name">-->
<!--              <h5 v-text="perk.name" />-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->

<!--    </div>-->

    <div class="team__video-slider has-padding">
            <transition :name="transitionName" mode="out-in">
              <div :key="videos[currentIndex]" class="team__video-slide">
                <iframe :src="videos[currentIndex]"></iframe>
              </div>
            </transition>

      <div class="column has-text-centered p-0 slider__dots">
        <div v-for="(t, i) in videos" :key="`dot-${i}`" :class="{'dot': true, 'is-active': i === currentIndex}"></div>
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

    <div class="section section--careers-videos">
      <div class="is-hidden-touch">
        <carousel-3d :width="440" :height="330" :controls-visible="true" :clickable="true">
          <slide :index="0">
            <iframe width="440" height="330"
                    src="https://www.youtube.com/embed/3Fn8LbUXtuI">
            </iframe>
          </slide>
          <slide :index="1">
            <iframe width="440" height="330"
                    src="https://www.youtube.com/embed/tVIhRSCdb_0">
            </iframe>
          </slide>
          <slide :index="2">
            <iframe width="440" height="330"
                    src="https://www.youtube.com/embed/D2eLnglOQK0">
            </iframe>
          </slide>
          <slide :index="3">
            <iframe width="440" height="330"
                    src="https://www.youtube.com/embed/D1mI3ifIQ00">
            </iframe>
          </slide>
          <slide :index="4">
            <iframe width="440" height="330"
                    src="https://www.youtube.com/embed/hDnRNnOVSro">
            </iframe>
          </slide>
          <slide :index="5">
            <iframe width="440" height="330"
                    src="https://www.youtube.com/embed/aZHOEyUalNs">
            </iframe>
          </slide>
          <slide :index="6">
            <iframe width="440" height="330"
                    src="https://www.youtube.com/embed/sJodW2ex4SY">
            </iframe>
          </slide>
        </carousel-3d>
      </div>

    </div>

    <movements-footer/>

  </div>

</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';
  import Position from "@/components/components/Position.vue";
  import Cover from "@/components/components/Cover.vue";

  @Component({
    components: {
      Cover,
      Position,
    }
  })
  class Careers extends Vue {

    currentIndex = 0;
    direction = 'forward'

    get coverData() {
      return  {
        img: require('@/assets/images/careers/join-team-cover.png'),
        title: this.$t(`careers.cover.title`),
        subtitle: this.$t(`careers.cover.subtitle`),
        cta: this.$t(`careers.cover.cta`),
      };
    }

    get transitionName() {
      return `${this.direction}-slide`
    }

    videos = [
      "https://www.youtube.com/embed/3Fn8LbUXtuI",
      "https://www.youtube.com/embed/tVIhRSCdb_0",
      "https://www.youtube.com/embed/D2eLnglOQK0",
      "https://www.youtube.com/embed/D1mI3ifIQ00",
      "https://www.youtube.com/embed/hDnRNnOVSro",
      "https://www.youtube.com/embed/aZHOEyUalNs",
      "https://www.youtube.com/embed/sJodW2ex4SY",
    ];

    nextSlide() {
      this.direction = 'forward';
      this.currentIndex = this.currentIndex === this.videos.length-1 ? 0 : this.currentIndex + 1;
    }

    prevSlide() {
      this.direction = 'backward';
      this.currentIndex = this.currentIndex === 0 ? this.videos.length-1 : this.currentIndex - 1;
    }
  }

  export default Careers;
</script>

<style lang="scss">
.careers {
  .team__video-slider {
    .team__video-slide {
      iframe {
        border-radius: 50px 0 50px 0;
        width: 1200px;
        height: 800px;
        max-width: 100%;

        @media screen and (max-width: 1580px){
          width: 1000px;
          height: 680px;
        }

        @media screen and (max-width: 1240px){
          width: 900px;
          height: 600px;
        }

        @media screen and (max-width: 980px){
          width: 600px;
          height: 400px;
        }

        @media screen and (max-width: 768px){
          border-radius: 20px 0 20px 0;
          width: 280px;
          height: 180px;
        }
      }
    }
  }
}
</style>
