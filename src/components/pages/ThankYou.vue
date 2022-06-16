<template>
  <div class="thank-you has-bg-gray">
    <navigation :full-logo="true" :light-logo="true"/>

    <div class="section">
      <div class="section-content">
        <h1 class="has-text-weight-bold" v-html="$t(`thanks.title`)"></h1>
        <h2 class="has-text-weight-light" v-html="$t(`thanks.subtitle`)"></h2>
      </div>
    </div>

    <div class="section-divider"></div>

  </div>

</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
class ThankYou extends Vue {

}

export default ThankYou;
</script>

<style lang="scss">
.thank-you {
  height: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;

  .section-content {
    h1,
    h2 {
      font-size: 46px;
      line-height: 58px;
      color: #186267;
    }

    @media screen and (max-width: 768px) {
      h2 {
        font-size: 36px;
        line-height: 40px;
      }
    }

    &::after {
      content: '';
      display: block;
      width: 40px;
      height: 5px;
      background: #e8a500;
      margin: 15px auto;
    }
  }

  .section-divider {
    position: absolute;
    bottom: 0;
  }
}
</style>
