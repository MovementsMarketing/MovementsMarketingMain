<template>
  <div class="">
    <navigation :full-logo="true" :light-logo="true"/>

    <service-cover :data="coverData"/>

    <facts :facts="[$t(`services.customerService.facts.fact1`), $t(`services.customerService.facts.fact2`), $t(`services.customerService.facts.fact3`)]"></facts>

    <service-information :data="informationData" />

    <movements-footer/>

  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';
  import ServiceCover from "@/components/components/ServiceCover.vue";
  import Facts from "@/components/components/Facts.vue";
  import ServiceInformation from "@/components/components/ServiceInformation.vue";

  @Component({
    components: {
      ServiceCover,
      Facts,
      ServiceInformation,
    }
  })
  class CustomerService extends Vue {
    coverData = {
      cover: require('@/assets/images/services/customer_service/cover.png'),
      mask: require('@/assets/images/services/customer_service/mask.png'),
      title: this.$t(`services.customerService.cover.title`),
      subtitle: this.$t(`services.customerService.cover.subtitle`),
      cta: this.$t(`services.customerService.cover.cta`),
    };

    informationData = {
      title: this.$t(`services.customerService.info.title`),
      text: this.$t(`services.customerService.info.content`),
      cover: require('@/assets/images/services/customer_service/info-cover.png'),
    }
  }

  export default CustomerService;
</script>

<style lang="scss">


</style>
