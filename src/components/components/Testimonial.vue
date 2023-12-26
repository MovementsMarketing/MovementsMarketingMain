<template>
  <div class="columns m-0 testimonial">
    <transition :name="transitionName" mode="out-in">
      <div :key="`testimonial__company-${index}`" class="column is-4 testimonial__company p-0" :class="`translation-${transitionName}`">
        <div class="company__image">
          <img :src="data.cover" :alt="data.company" ref="testimonialCover"  @load="onImageLoad"/>
        </div>
        <div class="company__info">
          <h6 v-html="data.company" class="has-line-center m-b-10 is-movements-green"></h6>
          <p v-html="data.companyDescription" class="is-movements-green"></p>
        </div>
      </div>
    </transition>
      <div class="column testimonial__content p-0 is-8">
        <transition :name="transitionName" mode="out-in">
            <div :key="`testimonial__quote-${index}`" class="testimonial__quote" :style="{ 'min-height': coverHeight }" :class="`translation-${transitionName}`">
              <h6 class="has-text-white">
                <span v-html="data.quote" ></span>
              </h6>
              <hr/>
              <span v-html="data.quotePerson" class="person"></span>
          </div>
        </transition>
        <transition :name="transitionName" mode="out-in">
          <div :key="`testimonial__impact-${index}`" class="testimonial__impact" :class="`translation-${transitionName}`">
            <h6 class="is-highlighted" v-text="$t(`home.testimonials.impact`)"/>
            <ul v-html="data.impact"></ul>
          </div>
        </transition>
      </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
class Testimonial extends Vue {
  @Prop({required: true})
  data:     {
    cover: String,
    company: String,
    companyDescription: String,
    quote: String,
    quotePerson: String,
    impact: String,
  }

  @Prop({required: true})
  index: Number

  @Prop({required: true})
  transitionName: string

  coverHeightOnLoad = 0;

  get coverHeight() {
    return `${this.coverHeightOnLoad}px` || '200px';
  }

  onImageLoad() {
    // @ts-ignore
    this.coverHeightOnLoad = this.$refs.testimonialCover?.clientHeight;
  }
}

export default Testimonial;
</script>

<style lang="scss">
$border-radius: 100px;
$border-radius-small: 60px;
$gap: 20px;

.testimonial {
  gap: $gap;

  h6 {
    font-weight: 700;
  }

  p {
    @media screen  and (max-width: 768px) {
      line-height: 22px;
    }
  }

  .testimonial__company {
    background: #ffffff;
    border-radius: $border-radius 0 $border-radius 0;
    width: 100%;

    @media screen  and (max-width: 768px) {
      border-radius: $border-radius-small 0 0 0;
      margin-bottom: 5px;
    }

    .company__image {
      line-height: 0;

      @media screen  and (max-width: 768px) {
        border-radius: $border-radius-small 0 0 0;
        height: 120px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      img {
        width: 100%;
        border-radius: $border-radius 0 $border-radius 0;

        @media screen  and (max-width: 768px) {
          border-radius: 0;
          //border-radius: $border-radius-small 0 0 0;
        //  border-radius: $border-radius-small 0 $border-radius-small 0;
        }
      }
    }

    .company__info {
      padding: 60px 20px;

      @media screen  and (max-width: 768px) {
        padding: 20px 10px 10px;

        h6 {
          margin-bottom: 5px !important;

          &::before {
            top: -8px;
          }
        }

        p {
          font-size: 12px;
          line-height: 16px;
        }
      }
    }
  }

  .testimonial__content {
    display: flex;
    flex-direction: column;
    gap: $gap;

    @media screen  and (max-width: 768px) {
      gap: 5px;
    }

    .testimonial__quote {
      background: #186267;
      color: #ffffff;
      border-radius: $border-radius 0 0 0;
      padding: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 20px;
      animation-delay: 150ms;

      @media screen  and (max-width: 768px) {
        border-radius: 0;
        padding: 20px 10px;
        gap: 10px;

        .person {
          font-size: 12px;
        }
      }

      h6 {
        font-weight: 400;

        @media screen  and (max-width: 768px) {
          line-height: 24px;
          font-size: 16px;
        }

        @media screen  and (max-width: 420px) {
          line-height: 22px;
          font-size: 14px;
        }
      }

      hr {
        width: 50px;
        height: 4px;
        background: #69BC77;
        margin: 0;
      }
    }

    .testimonial__impact {
      background: #ffffff;
      display: flex;
      gap: 40px;
      padding: 40px;
      text-align: left;
      align-items: center;
      border-radius: 0 0 $border-radius 0;
      min-height: 200px;
      height: 100%;
      animation-delay: 300ms;

      @media screen  and (max-width: 768px) {
        border-radius: 0 0 $border-radius-small 0;
        flex-direction: column;
        gap: 10px;
        padding: 10px 10px 10px 15px;
        min-height: unset;
      }

      h6 {
        text-wrap: nowrap;
      }

      ul {
        li {
          font-size: 18px;
          color: #186267;
          margin-bottom: 5px;

          @media (min-resolution: 220dpi) {
            font-size: 16px;
          }

          &::before {
            color: #69BC77;
            content: "\2022";  /* Add content: \2022 is the CSS Code/unicode for a bullet */
            font-weight: bold; /* If you want it to be bold */
            display: inline-block; /* Needed to add space between the bullet and the text */
            width: 12px; /* Also needed for space (tweak if needed) */
            margin-left: -12px; /* Also needed for space (tweak if needed) */
          }

          @media screen  and (max-width: 768px) {
            line-height: 24px;
            font-size: 16px;
          }

          @media screen  and (max-width: 420px) {
            line-height: 22px;
            font-size: 14px;
          }
        }
      }
    }
  }

  .backward-slide-enter-to, .backward-slide-leave-enter, .backward-slide-enter-active,
  .backward-slide-enter, .backward-slide-leave-to {
    &.testimonial__company {
     animation-delay: 300ms;
    }

    &.testimonial__impact {
      animation-delay: 0ms;
    }

  }
}
</style>
