<template>
  <div class="">
    <navigation :full-logo="true" :light-logo="true"/>

    <service-cover :data="coverData"/>

    <facts :facts="[$t(`services.customerService.facts.fact1`), $t(`services.customerService.facts.fact2`), $t(`services.customerService.facts.fact3`)]"></facts>

    <movements-footer/>

  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';
  import ServiceCover from "@/components/components/ServiceCover";
  import Facts from "@/components/components/Facts";

  @Component({
    components: {
      ServiceCover,
      Facts,
    }
  })
  class CustomerService extends Vue {
    coverData = {
      cover: require('@/assets/images/services/customer_service/cover.png'),
      mask: require('@/assets/images/services/customer_service/mask.png'),
      title: this.$t(`services.customerService.cover.title`),
      subtitle: this.$t(`services.customerService.cover.subtitle`),
      cta: this.$t(`services.customerService.cover.cta`),
    }
  }

  export default CustomerService;
</script>

<style lang="scss">


</style>
