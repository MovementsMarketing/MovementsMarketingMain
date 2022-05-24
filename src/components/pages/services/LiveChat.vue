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
    }
  }

  export default LiveChat;
</script>

<style lang="scss">


</style>
