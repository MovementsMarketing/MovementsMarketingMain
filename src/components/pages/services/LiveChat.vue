<template>
  <div class="">
    <navigation :full-logo="true" :light-logo="true"/>

    <service-cover :data="coverData"/>

    <facts :facts="[$t(`services.liveChat.facts.fact1`), $t(`services.liveChat.facts.fact2`), $t(`services.liveChat.facts.fact3`)]"></facts>

    <service-information :data="informationData" />

    <quote :text="$t(`services.liveChat.quote1`)"/>

    <service-trial
        :title="$t(`services.liveChat.trial.title`)"
        :text="$t(`services.liveChat.trial.text`)"
        :cta="$t(`services.liveChat.trial.cta`)"
    />

    <service-sales :title="salesData.title" :blocks="salesData.blocks"/>

    <div id="tryService">

      <quote :text="$t(`services.liveChat.quote2`)" class="is-gradient"/>

      <service-form :title="$t(`services.liveChat.formTitle`)" form-name="liveChat"/>

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
  class LiveChat extends Vue {

    coverData = {
      cover: require('@/assets/images/services/live_chat/cover.png'),
      mask: require('@/assets/images/services/live_chat/mask.png'),
      title: this.$t(`services.liveChat.cover.title`),
      subtitle: this.$t(`services.liveChat.cover.subtitle`),
      cta: this.$t(`services.liveChat.cover.cta`),
    };

    informationData = {
      title: this.$t(`services.liveChat.info.title`),
      text: this.$t(`services.liveChat.info.content`),
      cover: require('@/assets/images/services/live_chat/info-cover.png'),
    };

    salesData = {
      title: this.$t(`services.liveChat.info.title`),
      blocks: [
        {
          icon: require('@/assets/images/services/live_chat/sales/1.png'),
          title: this.$t(`services.liveChat.sales.block1.title`),
          text: this.$t(`services.liveChat.sales.block1.text`)
        },
        {
          icon: require('@/assets/images/services/live_chat/sales/2.png'),
          title: this.$t(`services.liveChat.sales.block2.title`),
          text: this.$t(`services.liveChat.sales.block2.text`)
        },
        {
          icon: require('@/assets/images/services/live_chat/sales/3.png'),
          title: this.$t(`services.liveChat.sales.block3.title`),
          text: this.$t(`services.liveChat.sales.block3.text`)
        },
      ]
    };
  }

  export default LiveChat;
</script>

<style lang="scss">


</style>
