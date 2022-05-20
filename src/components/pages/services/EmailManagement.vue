<template>
  <div class="">
    <navigation :full-logo="true" :light-logo="true"/>

    <service-cover :data="coverData"/>

    <facts :facts="[$t(`services.emailManagement.facts.fact1`), $t(`services.emailManagement.facts.fact2`), $t(`services.emailManagement.facts.fact3`)]"></facts>

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
  class EmailManagement extends Vue {
    coverData = {
      cover: require('@/assets/images/services/email_management/cover.png'),
      mask: require('@/assets/images/services/email_management/mask.png'),
      title: this.$t(`services.emailManagement.cover.title`),
      subtitle: this.$t(`services.emailManagement.cover.subtitle`),
      cta: this.$t(`services.emailManagement.cover.cta`),
    }
  }

  export default EmailManagement;
</script>

<style lang="scss">


</style>
