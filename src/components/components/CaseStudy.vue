<template>
  <div class="study p-0 is-white">
    <div class="study__image">
      <img :src="data.img" :alt="data.title"/>
    </div>
    <div class="study__info">
      <h6 v-html="data.title" class="has-line-left m-b-10 "></h6>
      <p v-html="data.text" class=""></p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
class CaseStudy extends Vue {
  @Prop({required: true})
  data:     {
    img: String,
    title: String,
    text: String,
  }
}

export default CaseStudy;
</script>

<style lang="scss">
$border-radius: 60px;
$border-radius-small: 40px;
$gap: 20px;


  .study {
    border-radius: $border-radius 0 $border-radius 0;
    width: 100%;
    height: 100%;

    @media screen  and (max-width: 768px) {
      border-radius: $border-radius-small 0 $border-radius-small 0;
      margin-bottom: 20px;
    }

    .study__image {
      line-height: 0;

      img {
        width: 100%;
        border-radius: $border-radius 0 $border-radius 0;

        @media screen  and (max-width: 768px) {
          border-radius: $border-radius-small 0 $border-radius-small 0;
        }
      }
    }

    .study__info {
      padding: 60px 40px 40px;
      text-align: left;

      @media (min-resolution: 200dpi) {
        padding: 40px 20px 20px 20px;
      }


      > {
        color: #000000;
      }

      h6 {
        font-weight: 700;
        color: #000000;
        line-height: 24px;
        font-size: 20px;
        min-height: 100px;

        @media (min-resolution: 200dpi) {
          font-size: 19px;
        }

        @media (min-resolution: 220dpi) {
          font-size: 18px;
        }
      }

      @media screen  and (max-width: 768px) {
        padding: 40px 20px 20px;
      }
    }
  }

</style>
