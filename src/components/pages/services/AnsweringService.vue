<template>
  <div class="">
    <navigation :full-logo="true" :light-logo="true"/>

    <service-cover :data="coverData"/>

    <facts :facts="[$t(`services.answeringService.facts.fact1`), $t(`services.answeringService.facts.fact2`), $t(`services.answeringService.facts.fact3`)]"></facts>


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
  class AnsweringService extends Vue {

    coverData = {
      cover: require('@/assets/images/services/answering_service/cover.png'),
      mask: require('@/assets/images/services/answering_service/mask.png'),
      title: this.$t(`services.answeringService.cover.title`),
      subtitle: this.$t(`services.answeringService.cover.subtitle`),
      cta: this.$t(`services.answeringService.cover.cta`),
    }

  }

  export default AnsweringService;
</script>

<style lang="scss">


</style>
