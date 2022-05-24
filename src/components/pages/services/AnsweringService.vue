<template>
  <div class="">
    <navigation :full-logo="true" :light-logo="true"/>

    <service-cover :data="coverData"/>

    <facts :facts="[$t(`services.answeringService.facts.fact1`), $t(`services.answeringService.facts.fact2`), $t(`services.answeringService.facts.fact3`)]"></facts>

    <service-information :data="informationData" />

    <quote :text="$t(`services.answeringService.quote1`)"/>

    <service-trial
        :title="$t(`services.answeringService.trial.title`)"
        :text="$t(`services.answeringService.trial.text`)"
        :cta="$t(`services.answeringService.trial.cta`)"
    />

    <movements-footer/>

  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';
  import ServiceCover from "@/components/components/ServiceCover.vue";
  import Facts from "@/components/components/Facts.vue";
  import ServiceInformation from "@/components/components/ServiceInformation.vue";
  import Quote from "@/components/components/Quote.vue";
  import ServiceTrial from "@/components/components/ServiceTrial.vue";

  @Component({
    components: {
      ServiceCover,
      Facts,
      ServiceInformation,
      Quote,
      ServiceTrial,
    }
  })
  class AnsweringService extends Vue {

    coverData = {
      cover: require('@/assets/images/services/answering_service/cover.png'),
      mask: require('@/assets/images/services/answering_service/mask.png'),
      title: this.$t(`services.answeringService.cover.title`),
      subtitle: this.$t(`services.answeringService.cover.subtitle`),
      cta: this.$t(`services.answeringService.cover.cta`),
    };

    informationData = {
      title: this.$t(`services.answeringService.info.title`),
      text: this.$t(`services.answeringService.info.content`),
      cover: require('@/assets/images/services/answering_service/info-cover.png'),
    }

  }

  export default AnsweringService;
</script>

<style lang="scss">


</style>
