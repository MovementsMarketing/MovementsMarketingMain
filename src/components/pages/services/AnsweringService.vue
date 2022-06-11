<template>
  <div class="has-bg-gray">
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

    <service-sales :title="salesData.title" :blocks="salesData.blocks"/>

    <div id="tryService">
      <quote :text="$t(`services.answeringService.quote2`)" class="is-gradient"/>
      <service-form :title="$t(`services.answeringService.formTitle`)" form-name="answeringService"/>
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
  class AnsweringService extends Vue {

    get coverData(){
      return {
        cover: require('@/assets/images/services/answering_service/cover.png'),
        mask: require('@/assets/images/services/answering_service/mask.png'),
        title: this.$t(`services.answeringService.cover.title`),
        subtitle: this.$t(`services.answeringService.cover.subtitle`),
        cta: this.$t(`services.answeringService.cover.cta`),
      };
    }

    get informationData(){
      return {
        title: this.$t(`services.answeringService.info.title`),
        text: this.$t(`services.answeringService.info.content`),
        cover: require('@/assets/images/services/answering_service/info-cover.png'),
      };
    }

    get salesData() {
      return {
        title: this.$t(`services.answeringService.info.title`),
        blocks: [
          {
            icon: require('@/assets/images/services/answering_service/sales/1.png'),
            title: this.$t(`services.answeringService.sales.block1.title`),
            text: this.$t(`services.answeringService.sales.block1.text`)
          },
          {
            icon: require('@/assets/images/services/answering_service/sales/2.png'),
            title: this.$t(`services.answeringService.sales.block2.title`),
            text: this.$t(`services.answeringService.sales.block2.text`)
          },
          {
            icon: require('@/assets/images/services/answering_service/sales/3.png'),
            title: this.$t(`services.answeringService.sales.block3.title`),
            text: this.$t(`services.answeringService.sales.block3.text`)
          },
        ]
      };
    }

  }

  export default AnsweringService;
</script>

<style lang="scss">


</style>
