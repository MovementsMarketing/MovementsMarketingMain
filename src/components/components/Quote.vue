<template>
  <div class="section section--quote" :class="cssClass">
    <div class="section__content">
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

  .section--quote {
    h3 {
      font-size: 58px;
      line-height: 62px;
      font-weight: 200;
      margin: 30px 0;
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
