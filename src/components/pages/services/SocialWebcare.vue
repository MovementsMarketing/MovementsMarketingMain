<template>
  <div class="">
    <navigation :full-logo="true" :light-logo="true"/>

    <service-cover :data="coverData"/>

    <facts :facts="[$t(`services.socialWebcare.facts.fact1`), $t(`services.socialWebcare.facts.fact2`), $t(`services.socialWebcare.facts.fact3`)]"></facts>

    <service-information :data="informationData" />

    <quote :text="$t(`services.socialWebcare.quote1`)"/>

    <service-trial
        :title="$t(`services.socialWebcare.trial.title`)"
        :text="$t(`services.socialWebcare.trial.text`)"
        :cta="$t(`services.socialWebcare.trial.cta`)"
    />

    <service-sales :title="salesData.title" :blocks="salesData.blocks"/>

    <div id="tryService">
      <quote :text="$t(`services.socialWebcare.quote2`)" class="is-gradient"/>

      <service-form :title="$t(`services.socialWebcare.formTitle`)" form-name="socialWebcare"/>
    </div>

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
  import ServiceSales from "@/components/components/ServiceSales.vue";
  import ServiceForm from "@/components/components/ServiceForm.vue";

  @Component({
    components: {
      ServiceCover,
      Facts,
      ServiceInformation,
      Quote,
      ServiceTrial,
      ServiceSales,
      ServiceForm,
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
    };

    salesData = {
      title: this.$t(`services.telemarketing.info.title`),
      blocks: [
        {
          icon: require('@/assets/images/services/social_webcare/sales/1.png'),
          title: this.$t(`services.socialWebcare.sales.block1.title`),
          text: this.$t(`services.socialWebcare.sales.block1.text`)
        },
        {
          icon: require('@/assets/images/services/social_webcare/sales/2.png'),
          title: this.$t(`services.socialWebcare.sales.block2.title`),
          text: this.$t(`services.socialWebcare.sales.block2.text`)
        },
        {
          icon: require('@/assets/images/services/social_webcare/sales/3.png'),
          title: this.$t(`services.socialWebcare.sales.block3.title`),
          text: this.$t(`services.socialWebcare.sales.block3.text`)
        },
      ]
    };

  }

  export default SocialWebcare;
</script>

<style lang="scss">


</style>
