<template>
  <div class="service-block">
    <div class="service-block__content has-margin" :class="{'is-left': isLeft, 'is-highlighted': isHighlighted}" :style="{ 'min-height': coverHeight }">
      <div class="service-block__photo-wrapper">
        <img :src="dots" :alt="name" :class="{'dots': true, 'is-left': isLeft}">
        <div class="service-block__photo">
          <img :src="imgUrl" :alt="name" :class="{'is-left': isLeft}"  ref="serviceBlockCover" @load="onImageLoad">
        </div>
      </div>
      <div class="service-block__info">
        <div class="service-block__box" :class="{'is-left': isLeft}">
          <h2 class="has-text-left service-block__title has-line-left">
            <slot name="title"> </slot>
          </h2>
          <p class="has-text-left service-block__text">
            <slot name="text"> </slot>
          </p>
          <div class="service-block__cta">
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
class ServiceBlock extends Vue {
  @Prop({default: false})
  isLeft: String;

  @Prop({default: false})
  isHighlighted: String;

  @Prop({default: ''})
  name: String;

  @Prop({required: true})
  imgUrl: String;

  dots = require('@/assets/images/dots-green.png');

  coverHeightOnLoad = null;

  get coverHeight() {
    return this.coverHeightOnLoad ? `${this.coverHeightOnLoad + 120}px` : 'auto';
  }

  onImageLoad() {
    // @ts-ignore
    this.coverHeightOnLoad = this.$refs.serviceBlockCover?.clientHeight;
  }
}

export default ServiceBlock;
</script>

<style lang="scss">
.service-block {
  background: #ffffff;

  .service-block__content {
    display: flex;
    background: #F2F2F2;
    border-radius: 20px;

    &.is-highlighted {
      background: linear-gradient(165deg, rgba(48,168,143,1) 0%, rgba(48,174,188,1) 50%, rgba(154,223,130,1) 100%);

      h2 {
        .is-highlighted {
          color: #ffffff;
        }

        &::before {
          background: #ffffff;
        }
      }

      p {
        color: #ffffff;
      }

      .button--hollow {
        color: #ffffff;
        border: 2px solid #fff;
        margin-left: 0 !important;
      }
    }

    &.is-left {
      flex-direction: row-reverse;
    }

    @media screen  and (max-width: 780px) {
      flex-direction: column !important;
    }

    .service-block__photo-wrapper {
      width: 50%;
      position: relative;

      @media screen  and (max-width: 768px) {
        width: 100%;
      }

      .dots {
        position: absolute;
        top: -20px;
        left: -150px;

        @media screen  and (max-width: 768px) {
          width: 100px;
          top: -40px;
          left: -20px;
        }

        &.is-left {
          left: unset;
          right: -150px;
          top: unset;
          bottom: -20px;

          @media screen  and (max-width: 768px) {
            top: -10px;
            right: -20px;
          }
        }
      }

      .service-block__photo {
        line-height: 0;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        @media screen  and (max-width: 768px) {
          justify-content: center;
        }

        img {
          position: absolute;
          left: -100px;
          min-width: 100px;
          width: 100%;
          background: #186267;
          border-radius: 120px 0 120px 0;
          box-shadow: 2px 4px 8px 0px rgba(0, 0, 0, 0.30);

          @media screen and (max-width: 1400px) {
            width: 100%;
            left: -60px;
          }

          &.is-left {
            left: unset;
            right: -100px;

            @media screen and (max-width: 1400px) {
              right: -60px;
            }

            @media screen  and (max-width: 768px) {
              right: 0;
            }
          }

          @media screen  and (max-width: 768px) {
            position: relative;
            margin-bottom: -40px;
            top: -50px;
            right: unset;
            left: unset !important;
            width: calc(100% - 80px);
            border-radius: 60px 0 60px 0;
          }

        }
      }
    }

    .service-block__info {
      width: 50%;

      @media screen  and (max-width: 768px) {
        width: 100%;
      }

      .service-block__box {
        padding-top: 100px;
        padding-bottom: 60px;
        padding-right: 80px;

        &.is-left {
          padding-right: unset;
          padding-left: 80px;

          @media screen  and (max-width: 768px) {
            padding-left: unset;
          }
        }

        @media screen  and (max-width: 768px) {
          width: calc(100% - 40px);
          margin-left: 20px;
          padding-left: unset;
          padding-right: unset;
          padding-bottom: 40px;
          padding-top: 60px;
        }

        .service-block__cta {
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
