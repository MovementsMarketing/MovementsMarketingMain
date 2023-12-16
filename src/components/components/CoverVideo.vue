<template>
  <div class="video-cover">
    <div class="video-cover__video has-radius-bottom-right">
      <video autoplay muted loop playsinline>
        <source src="@/assets/video/movements_marketing.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="video-cover__content has-margin">
      <div class="cover-video__box">
        <img src="@/assets/images/dots-green.png" class="dots">
        <h1 v-html="coverTitle" class="cover__title has-line-center"></h1>
        <p v-html="coverText" class="cover__subtitle has-text-weight-normal"></p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import {LocaleMessages} from "vue-i18n";

@Component
class CoverVideo extends Vue {
  @Prop({required: true})
  coverTitle: string | LocaleMessages;

  @Prop({required: true})
  coverText: string | LocaleMessages;
}

export default CoverVideo;
</script>

<style lang="scss">
.video-cover {

  .video-cover__video {
    width: 100%;
    height: calc(100vh - 120px);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    video {
      width: 100%;
    }

    @media screen  and (max-width: 1024px) {
      min-height: unset;
      height: unset;
    }
  }

  .video-cover__content {
    position: relative;
    overflow: visible;

    .cover-video__box {
      position: relative;
      top: -300px;
      width: 100%;
      background: #ffffff;
      border-radius: 20px;
      padding: 120px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      @media screen  and (max-width: 1024px) {
        top: -180px;
        padding: 80px;
      }

      @media screen  and (max-width: 768px) {
        top: -100px;
        padding: 40px;
      }

      >* {
        max-width: 980px;
      }

      p {
        color: #000000;
      }

      .cover__title {
        margin-bottom: 80px;

        @media screen  and (max-width: 780px) {
          margin-bottom: 40px;
        }
      }

      .dots {
        width: 180px;
        position: absolute;
        left: -70px;
        top: -100px;

        @media screen  and (max-width: 780px) {
          width: 100px;
          left: -20px;
          top: -60px;
        }

        @media screen  and (max-width: 420px) {
          width: 60px;
          left: -20px;
          top: -40px;
        }
      }
    }
  }
}

</style>
