<template>
  <div class="section section--quote" :class="cssClass">
    <div class="quote__wrapper">
      <h3 v-html="text"></h3>
    </div>
  </div>

</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component, Prop } from 'vue-property-decorator';

  @Component
  class Quote extends Vue {
    @Prop({default: ''})
    text: string;

    @Prop({default: 'is-white'})
    cssClass: string;

  }

  export default Quote;
</script>

<style lang="scss">

  .section.section--quote {

    .quote__wrapper {
      padding: 20px 120px;

      @media screen  and (max-width: 1024px) {
        padding: 20px 80px;
      }

      @media screen  and (max-width: 780px) {
        padding: 20px 40px;
      }

      @media screen  and (max-width: 460px) {
        padding: 15px 20px;
      }
    }

    h3 {
      font-size: 58px;
      line-height: 62px;
      font-weight: 200;
      margin: 30px 0;

      @media (min-resolution: 100dpi) {
        font-size: 50px;
        line-height: 54px;
      }

      @media screen  and (max-width: 1024px) {
        font-size: 48px;
        line-height: 50px;
      }

      @media screen  and (max-width: 780px) {
        font-size: 42px;
        line-height: 46px;
      }

      @media screen  and (max-width: 460px) {
        font-size: 36px;
        line-height: 42px;
      }
    }

    &.is-white {
      background: #fff;

      h3 {
        color: #008d90;
      }
    }

    &.is-gradient {
      background: linear-gradient(90deg, #186267 0%, #186267 20%, #9FF882 100%);

      h3 {
        color: #fff;
      }
    }
  }

</style>
