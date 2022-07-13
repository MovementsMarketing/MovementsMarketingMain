<template>
  <div class="has-bg-gray">
    <navigation :full-logo="true" :light-logo="true" :translate-url="true"/>

    <service-cover :data="coverData" custom-link="/service/b2b-telemarketing/tryNow"/>

    <facts :facts="[$t(`services.telemarketing.facts.fact1`), $t(`services.telemarketing.facts.fact2`), $t(`services.telemarketing.facts.fact3`)]"></facts>

    <service-information :data="informationData" />

    <quote :text="$t(`services.telemarketing.quote1`)"/>

    <service-trial :title="$t(`services.telemarketing.trial.title`)" :text="$t(`services.telemarketing.trial.text`)" :cta="$t(`services.telemarketing.trial.cta`)"/>

    <service-sales :title="salesData.title" :blocks="salesData.blocks"/>

    <div id="tryService">
      <quote :text="$t(`services.telemarketing.quote2`)" class="is-gradient"/>

      <service-form :title="$t(`services.telemarketing.formTitle`)" form-name="telemarketing" service-type="outbound"/>
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
  class Telemarketing extends Vue {
    get coverData() {
      return  {
        cover: require('@/assets/images/services/b2b_telemarketing/cover.png'),
        mask: require('@/assets/images/services/b2b_telemarketing/mask.png'),
        title: this.$t(`services.telemarketing.cover.title`),
        subtitle: this.$t(`services.telemarketing.cover.subtitle`),
        cta: this.$t(`services.telemarketing.cover.cta`),
      };
    }

    get informationData() {
      return {
        title: this.$t(`services.telemarketing.info.title`),
        text: this.$t(`services.telemarketing.info.content`),
        cover: require('@/assets/images/services/b2b_telemarketing/info-cover.png'),
      }
    }

     get salesData() {
      return {
        title: this.$t(`services.telemarketing.info.title`),
        blocks: [
          {
            icon: require('@/assets/images/services/b2b_telemarketing/sales/1.png'),
            title: this.$t(`services.telemarketing.sales.block1.title`),
            text: this.$t(`services.telemarketing.sales.block1.text`)
          },
          {
            icon: require('@/assets/images/services/b2b_telemarketing/sales/2.png'),
            title: this.$t(`services.telemarketing.sales.block2.title`),
            text: this.$t(`services.telemarketing.sales.block2.text`)
          },
          {
            icon: require('@/assets/images/services/b2b_telemarketing/sales/3.png'),
            title: this.$t(`services.telemarketing.sales.block3.title`),
            text: this.$t(`services.telemarketing.sales.block3.text`)
          },
        ]
      }
    }

  }

  export default Telemarketing;
</script>

<style lang="scss">


</style>
