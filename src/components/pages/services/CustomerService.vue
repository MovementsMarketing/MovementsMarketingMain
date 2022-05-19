<template>
  <div class="">
    <navigation :full-logo="true" :light-logo="true"/>

    CustomerService
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';

  @Component
  class CustomerService extends Vue {


  }

  export default CustomerService;
</script>

<style lang="scss">


</style>
