<template>
  <div class="">
    <navigation :full-logo="true" :light-logo="true"/>

    <service-cover :data="coverData"/>

    <facts :facts="[$t(`services.emailManagement.facts.fact1`), $t(`services.emailManagement.facts.fact2`), $t(`services.emailManagement.facts.fact3`)]"></facts>

    <service-information :data="informationData" />

    <quote :text="$t(`services.emailManagement.quote1`)"/>

    <service-trial
        :title="$t(`services.emailManagement.trial.title`)"
        :text="$t(`services.emailManagement.trial.text`)"
        :cta="$t(`services.emailManagement.trial.cta`)"
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
  class EmailManagement extends Vue {
    coverData = {
      cover: require('@/assets/images/services/email_management/cover.png'),
      mask: require('@/assets/images/services/email_management/mask.png'),
      title: this.$t(`services.emailManagement.cover.title`),
      subtitle: this.$t(`services.emailManagement.cover.subtitle`),
      cta: this.$t(`services.emailManagement.cover.cta`),
    };

    informationData = {
      title: this.$t(`services.emailManagement.info.title`),
      text: this.$t(`services.emailManagement.info.content`),
      cover: require('@/assets/images/services/email_management/info-cover.png'),
    }
  }

  export default EmailManagement;
</script>

<style lang="scss">


</style>
