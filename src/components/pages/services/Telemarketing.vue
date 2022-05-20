<template>
  <div class="">
    <navigation :full-logo="true" :light-logo="true"/>

    <service-cover :data="coverData"/>
    <facts :facts="[$t(`services.telemarketing.facts.fact1`), $t(`services.telemarketing.facts.fact2`), $t(`services.telemarketing.facts.fact3`)]"></facts>

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
  class Telemarketing extends Vue {
    coverData = {
      cover: require('@/assets/images/services/b2b_telemarketing/cover.png'),
      mask: require('@/assets/images/services/b2b_telemarketing/mask.png'),
      title: this.$t(`services.telemarketing.cover.title`),
      subtitle: this.$t(`services.telemarketing.cover.subtitle`),
      cta: this.$t(`services.telemarketing.cover.cta`),
    }

  }

  export default Telemarketing;
</script>

<style lang="scss">


</style>
