<template>
  <div class="">
    <navigation :full-logo="true" :light-logo="true"/>

    <service-cover :data="coverData"/>

    <facts :facts="[$t(`services.socialWebcare.facts.fact1`), $t(`services.socialWebcare.facts.fact2`), $t(`services.socialWebcare.facts.fact3`)]"></facts>

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
  class SocialWebcare extends Vue {
    coverData = {
      cover: require('@/assets/images/services/social_webcare/cover.png'),
      mask: require('@/assets/images/services/social_webcare/mask.png'),
      title: this.$t(`services.socialWebcare.cover.title`),
      subtitle: this.$t(`services.socialWebcare.cover.subtitle`),
      cta: this.$t(`services.socialWebcare.cover.cta`),
    };

    informationData = {
      title: this.$t(`services.socialWebcare.info.title`),
      text: this.$t(`services.socialWebcare.info.content`),
      cover: require('@/assets/images/services/social_webcare/info-cover.png'),
    }
  }

  export default SocialWebcare;
</script>

<style lang="scss">


</style>
