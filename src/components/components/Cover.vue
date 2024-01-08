<template>
  <div class="cover" :class="{'has-bg-gray': hasGrayBg}">
    <div class="cover__content m-0 has-radius-bottom-right" :class="{'is-green': isGreen}">
      <div class="cover__text" >
        <div class="cover__text__box has-padding-left">
          <h1 v-html="coverTitle" class="cover__title"></h1>
          <h5 v-html="coverSubtitle" class="cover__subtitle is-movements-green has-text-weight-normal"></h5>
          <slot name="cta"></slot>
          <img src="@/assets/images/dots-green.png" class="dots">
        </div>
      </div>
      <div class="cover__photo" :style="`background-image: url('${coverImage}');`"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import {LocaleMessages} from "vue-i18n";

@Component
class Cover extends Vue {
  @Prop({required: true})
  coverImage: string;

  @Prop({required: true})
  coverTitle: string | LocaleMessages;

  @Prop({required: true})
  coverSubtitle: string | LocaleMessages;

  @Prop({default: false})
  isGreen: boolean;

  @Prop({default: false})
  hasGrayBg: boolean;
}

export default Cover;
</script>

<style lang="scss">
.cover {
  background: #fff;
  width: 100%;
  height: calc(100vh - 100px);

  @media screen  and (max-width: 1024px) {
    min-height: 65vw;
  }

  .cover__content {
    background: #F2F2F2;
    width: 100%;
    height: 100%;
    display: flex;

    &.is-green {
      background: #186267;
    }

    .cover__text {
      flex-grow: 1;
      display: flex;
      align-items: center;
      position: relative;

      @media screen  and (max-width: 1024px) {
        position: unset;
      }

      .cover__text__box {
        background: #ffffff;
        position: absolute;
        min-width: calc(100% + 120px);
        min-height: 50vh;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        border-radius: 0 20px 20px 0;
        padding-top: 42px;
        padding-bottom: 42px;
        padding-right: 56px;

        @media (min-resolution: 200dpi) {
          min-width: calc(100% + 120px);
          padding-right: 40px;
          padding-top: 40px;
          padding-bottom: 40px;
        }

        @media (min-resolution: 220dpi) {
          min-width: calc(100% + 100px);
          padding-right: 30px;
        }

        @media screen and (max-width: 1400px) {
          min-width: calc(100% + 240px);
        }

        @media screen  and (max-width: 1024px) {
          min-width: calc(100% + -60px);
          max-width: calc(100% + -60px);
          background: rgba(255, 255, 255, 0.75);
          left: 30px;
          padding-top: 40px;
          padding-bottom: 40px;
          padding-right: 60px;
          border-radius: 15px;
          align-items: center;

          h1 {
            width: 100%;
          }
        }

        @media screen  and (max-width: 520px) {
          padding-right: 20px;
        }

        .cover__title {
          text-align: left;
          margin-bottom: 32px;

          @media screen  and (max-width: 1024px) {
            text-align: center;
            margin-bottom: 20px;
          }
        }

        .cover__subtitle {
          text-align: left;

          @media screen  and (max-width: 1024px) {
            text-align: center;
          }
        }
      }
    }

    .cover__photo {
      width: calc(100vh - 80px);
      border-radius: 240px 0 240px 0;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;

      @media screen and (max-width: 1400px) {
        max-width: 60%;
      }

      @media screen  and (max-width: 1024px) {
        max-width: 100%;
        width: 100%;
        border-radius: 0 0 120px 0;
      }
    }
  }

  .cover__cta {
    margin-top: 60px;
  }

  .dots {
    width: 120px;
    position: absolute;
    right: -58px;
    top: -60px;

    @media (min-resolution: 220dpi) {
      width: 120px;
      right: -40px;
      top: -80px;
    }

    @media screen  and (max-width: 1024px) {
      width: 100px;
      right: -20px;
      top: -60px;
    }

    @media screen  and (max-width: 420px) {
      width: 60px;
      right: -20px;
      top: -40px;
    }
  }
}
</style>
