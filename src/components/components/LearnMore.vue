<template>
  <router-link :to="url" class="button button--hollow">
    <span class="text">
      {{ $t(`learnMore`) }}
    </span>
    <span class="dot"></span>
    <span class="icon-wrapper">
      <icons icon="arrowRight" stroke-width="3" stroke="#fff" height="20" width="20" />
    </span>
  </router-link>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
class LearnMore extends Vue {
  @Prop({required: true})
  url: String;
}

export default LearnMore;
</script>

<style lang="scss">

</style>
