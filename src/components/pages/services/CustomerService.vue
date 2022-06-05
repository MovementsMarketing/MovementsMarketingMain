<template>
  <div class="">
    <navigation :full-logo="true" :light-logo="true"/>

    <service-cover :data="coverData"/>

    <facts :facts="[$t(`services.customerService.facts.fact1`), $t(`services.customerService.facts.fact2`), $t(`services.customerService.facts.fact3`)]"></facts>

    <service-information :data="informationData" />

    <quote :text="$t(`services.customerService.quote1`)"/>

    <service-trial
        :title="$t(`services.customerService.trial.title`)"
        :text="$t(`services.customerService.trial.text`)"
        :cta="$t(`services.customerService.trial.cta`)"
    />

    <service-sales :title="salesData.title" :blocks="salesData.blocks"/>

    <div id="tryService">
      <quote :text="$t(`services.customerService.quote2`)" class="is-gradient"/>
      <service-form :title="$t(`services.customerService.formTitle`)" form-name="customerService"/>
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
  class CustomerService extends Vue {
    get coverData() {
      console.log(this.$t(`services.customerService.cover.title`));
      return {
        cover: require('@/assets/images/services/customer_service/cover.png'),
        mask: require('@/assets/images/services/customer_service/mask.png'),
        title: this.$t(`services.customerService.cover.title`),
        subtitle: this.$t(`services.customerService.cover.subtitle`),
        cta: this.$t(`services.customerService.cover.cta`),
      };
    }

  get informationData() {
    return  {
      title: this.$t(`services.customerService.info.title`),
      text: this.$t(`services.customerService.info.content`),
      cover: require('@/assets/images/services/customer_service/info-cover.png'),
    };
  }

  get salesData() {
    return{
      title: this.$t(`services.customerService.info.title`),
      blocks: [
        {
          icon: require('@/assets/images/services/customer_service/sales/1.png'),
          title: this.$t(`services.customerService.sales.block1.title`),
          text: this.$t(`services.customerService.sales.block1.text`)
        },
        {
          icon: require('@/assets/images/services/customer_service/sales/2.png'),
          title: this.$t(`services.customerService.sales.block2.title`),
          text: this.$t(`services.customerService.sales.block2.text`)
        },
        {
          icon: require('@/assets/images/services/customer_service/sales/3.png'),
          title: this.$t(`services.customerService.sales.block3.title`),
          text: this.$t(`services.customerService.sales.block3.text`)
        },
      ]
    };
  }
  }

  export default CustomerService;
</script>

<style lang="scss">


</style>
