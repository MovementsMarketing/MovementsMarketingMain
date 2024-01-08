<template>
  <div class="home-block">
    <div class="home-block__content m-0" :class="{'is-left': isLeft}">
      <div class="home-block__photo-wrapper has-padding">
        <img :src="dots" :alt="name" :class="{'dots': true, 'is-left': isLeft}">
        <div class="home-block__photo">
          <img :src="imgUrl" :alt="name" :class="{'is-left': isLeft}">
        </div>
      </div>
      <div class="home-block__info">
        <div class="home-block__box has-padding" :class="{'is-left': isLeft}">
          <h2 class="has-text-left home-block__title has-line-left">
            <slot name="title"> </slot>
          </h2>
          <p class="has-text-left home-block__text">
            <slot name="text"> </slot>
          </p>
          <div class="home-block__cta">
            <slot name="cta" > </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
class HomeBlock extends Vue {
  @Prop({default: false})
  isLeft: String;

  @Prop({default: ''})
  name: String;

  @Prop({required: true})
  imgUrl: String;

  dots = require('@/assets/images/dots-green.png');
}

export default HomeBlock;
</script>

<style lang="scss">
.home-block {
  background: #ffffff;

  .home-block__content {
    display: flex;

    &.is-left {
      flex-direction: row-reverse;
    }

    @media screen  and (max-width: 780px) {
      flex-direction: column !important;
    }

    .home-block__photo-wrapper {
      width: 33.333%;
      position: relative;

      @media screen  and (max-width: 780px) {
        width: 100%;
      }

      .dots {
        position: absolute;
        width: 140px;
        top: 40px;
        left: 160px;

        @media (min-resolution: 220dpi) {
          width: 120px;
          top: 60px;
          left: 160px;
        }

        @media screen and (max-width: 1600px) {
          top: 60px;
          left: 160px;
        }

        @media screen and (max-width: 1400px) {
          width: 120px;
          top: 60px;
          left: 85px;
        }

        @media screen  and (max-width: 780px) {
          width: 100px;
          top: -50px;
          left: 40px;
        }

        &.is-left {
          left: unset;
          right: 160px;
          top: unset;
          bottom: 40px;

          @media (min-resolution: 220dpi) {
            bottom: 60px;
            right: 160px;
          }

          @media screen and (max-width: 1600px) {
            bottom: 60px;
            right: 160px;
          }

          @media screen and (max-width: 1400px) {
            width: 120px;
            bottom: 60px;
            right: 85px;
          }

          @media screen  and (max-width: 780px) {
            top: -50px;
            right: 40px;
          }
        }
      }

      .home-block__photo {
        line-height: 0;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        @media screen  and (max-width: 780px) {
          justify-content: center;
        }

        img {
          position: absolute;
          right: -100px;
          min-width: 100px;
          width: calc(100% - 160px);
          background: #186267;
          border-radius: 120px 0 120px 0;
          box-shadow: 2px 4px 8px 0px rgba(0, 0, 0, 0.30);

          @media (min-resolution: 220dpi) {
            width: calc(100% - 100px);
          }

          @media screen and (max-width: 1600px) {
            width: calc(100% - 100px);
          }

          @media screen and (max-width: 1400px) {
            width: calc(100% - 60px);
            right: -60px;
          }

          &.is-left {
            right: unset;
            left: -100px;

            @media screen and (max-width: 1400px) {
              left: -60px;
            }
          }

          @media screen  and (max-width: 780px) {
            position: relative;
            margin-bottom: -40px;
            right: unset;
            left: unset !important;
            width: calc(100% - 60px);
            border-radius: 60px 0 60px 0;
          }

        }
      }
    }

    .home-block__info {
      width: 66.666%;

      @media screen  and (max-width: 780px) {
        width: 100%;
      }

      .home-block__box {
        background: #F2F2F2;
        padding-top: 100px;
        padding-bottom: 60px;
        border-radius: 20px 0 0 20px;

        &.is-left {
          border-radius: 0 20px 20px 0;
        }

        @media screen  and (max-width: 780px) {
          width: calc(100% - 40px);
          margin-left: 20px;
          border-radius: 15px;
          padding-bottom: 40px;
        }

        .home-block__cta {
          padding-top: 40px;
          text-align: left;

          @media screen  and (max-width: 780px) {
            padding-top: 20px;
          }

          a {
            margin-left: -20px;
          }
        }
      }
    }
  }
}
</style>
