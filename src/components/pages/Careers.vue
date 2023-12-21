<template>
  <div class="careers has-bg-gray">
    <navigation :full-logo="true" :light-logo="true" :translate-url="true"/>

    <cover :cover-image="coverData.img" :cover-title="coverData.title" :cover-subtitle="coverData.subtitle" :is-green="true">
      <template #cta>
        <a href="https://app.healthboxhr.com/jobs-feed/web/company/63cf8f5f4fdd0" target="_blank" class="button button--primary cover__cta">
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

    <div class="team__video-slider slider has-margin section is-relative">
            <transition :name="transitionName" mode="out-in">
              <div :key="videos[currentIndex]" class="team__video-slide">
                <iframe :src="videos[currentIndex]"></iframe>
              </div>
            </transition>

      <div class="has-text-centered p-0 slider__dots p-t-15">
        <div v-for="(t, i) in videos" :key="`dot-${i}`" :class="{'dot': true, 'is-active': i === currentIndex}"></div>
      </div>
      <div class="has-text-right slider__navigation p-0 p-t-15">
        <div class="slider__navigation__arrow" @click="prevSlide">
          <icons icon="chevronLeft" :width="32" :height="32" :stroke-width="3"></icons>
        </div>
        <div class="slider__navigation__arrow" @click="nextSlide">
          <icons icon="chevronRight" :width="32" :height="32" :stroke-width="3"></icons>
        </div>
      </div>
    </div>

    <movements-footer :is-gray="true"/>

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
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media screen and (max-width: 1240px){
      justify-content: flex-end;
    }

    .slider__navigation {
      position: absolute;
      width: 100%;
      display: flex;
      justify-content: space-between;

      @media screen and (max-width: 1240px){
        bottom: 65px;
      }

    }

    .team__video-slide {
      iframe {
        border-radius: 50px 0 50px 0;
        width: 1000px;
        height: 680px;
        max-width: 100%;


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
