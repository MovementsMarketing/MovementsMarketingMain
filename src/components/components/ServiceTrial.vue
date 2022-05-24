<template>
  <div class="section section--trial" :style="`background-image: url(${bgImage});`">
    <div class="section__content has-text-centered">
      <h3 v-html="title"></h3>
      <p v-html="text"></p>
      <a class="button is-hollow is-green">
        <span class="text" v-text="cta"></span>
        <span class="dot"></span>
        <span class="icon-wrapper">
          <icons icon="chevronRight" stroke-width="3" stroke="#fff" height="24" width="24" />
        </span>
      </a>
    </div>
  </div>

</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component, Prop } from 'vue-property-decorator';

  @Component
  class ServiceTrial extends Vue {
    @Prop({default: ''})
    title: string;

    @Prop({default: ''})
    text: string;

    @Prop({default: ''})
    cta: string;

    bgImage = require('@/assets/images/services/free_trials_bg.png');

  }

  export default ServiceTrial;
</script>

<style lang="scss">

  .section.section--trial {
    padding: 60px 0;
    background-position: center;

    .section__content {
      h3 {
        color: #fff;
        margin-bottom: 50px;
        font-size: 48px;

        @media (min-resolution: 100dpi) {
          font-size: 42px;
          margin-bottom: 35px;
        }
      }

      p {
        color: #fff;
        margin-bottom: 50px;
        font-size: 24px;

        @media (min-resolution: 100dpi) {
          font-size: 20px;
          margin-bottom: 35px;
        }
      }

      a.button {
        color: #fff
      }
    }
  }

</style>
