<template>
  <div class="">
    <navigation :full-logo="true" :light-logo="true"/>

    <service-cover :data="coverData"/>

    <facts :facts="[$t(`services.telemarketing.facts.fact1`), $t(`services.telemarketing.facts.fact2`), $t(`services.telemarketing.facts.fact3`)]"></facts>

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
  class Telemarketing extends Vue {
    coverData = {
      cover: require('@/assets/images/services/b2b_telemarketing/cover.png'),
      mask: require('@/assets/images/services/b2b_telemarketing/mask.png'),
      title: this.$t(`services.telemarketing.cover.title`),
      subtitle: this.$t(`services.telemarketing.cover.subtitle`),
      cta: this.$t(`services.telemarketing.cover.cta`),
    };

    informationData = {
      title: this.$t(`services.telemarketing.info.title`),
      text: this.$t(`services.telemarketing.info.content`),
      cover: require('@/assets/images/services/b2b_telemarketing/info-cover.png'),
    }

  }

  export default Telemarketing;
</script>

<style lang="scss">


</style>
