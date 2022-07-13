<template>
  <div class="has-bg-gray">
    <navigation :full-logo="true" :light-logo="true" :translate-url="true"/>

    <service-cover :data="coverData" custom-link="/service/email-management/tryNow"/>

    <facts :facts="[$t(`services.emailManagement.facts.fact1`), $t(`services.emailManagement.facts.fact2`), $t(`services.emailManagement.facts.fact3`)]"></facts>

    <service-information :data="informationData" />

    <quote :text="$t(`services.emailManagement.quote1`)"/>

    <service-trial
        :title="$t(`services.emailManagement.trial.title`)"
        :text="$t(`services.emailManagement.trial.text`)"
        :cta="$t(`services.emailManagement.trial.cta`)"
    />

    <service-sales :title="salesData.title" :blocks="salesData.blocks"/>

    <div id="tryService">
      <quote :text="$t(`services.emailManagement.quote2`)" class="is-gradient"/>
      <service-form :title="$t(`services.emailManagement.formTitle`)" form-name="emailManagement"/>
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
  class EmailManagement extends Vue {
    get coverData() {
      return  {
        cover: require('@/assets/images/services/email_management/cover.png'),
            mask: require('@/assets/images/services/email_management/mask.png'),
            title: this.$t(`services.emailManagement.cover.title`),
            subtitle: this.$t(`services.emailManagement.cover.subtitle`),
            cta: this.$t(`services.emailManagement.cover.cta`),
      };
    }

    get informationData() {
      return {
        title: this.$t(`services.emailManagement.info.title`),
        text: this.$t(`services.emailManagement.info.content`),
        cover: require('@/assets/images/services/email_management/info-cover.png'),
      };
    }

    get salesData() {
      return  {
        title: this.$t(`services.emailManagement.info.title`),
        blocks: [
          {
            icon: require('@/assets/images/services/email_management/sales/1.png'),
            title: this.$t(`services.emailManagement.sales.block1.title`),
            text: this.$t(`services.emailManagement.sales.block1.text`)
          },
          {
            icon: require('@/assets/images/services/email_management/sales/2.png'),
            title: this.$t(`services.emailManagement.sales.block2.title`),
            text: this.$t(`services.emailManagement.sales.block2.text`)
          },
          {
            icon: require('@/assets/images/services/email_management/sales/3.png'),
            title: this.$t(`services.emailManagement.sales.block3.title`),
            text: this.$t(`services.emailManagement.sales.block3.text`)
          },
        ]
      };
    }
  }

  export default EmailManagement;
</script>

<style lang="scss">


</style>
