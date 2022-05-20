<template>
  <div class="">
    <navigation :full-logo="true" :light-logo="true"/>

    <service-cover :data="coverData"/>

    <facts :facts="[$t(`services.liveChat.facts.fact1`), $t(`services.liveChat.facts.fact2`), $t(`services.liveChat.facts.fact3`)]"></facts>

    <movements-footer/>

  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';
  import ServiceCover from "@/components/components/ServiceCover";
  import Facts from "@/components/components/Facts";

  @Component({
    components: {
      ServiceCover,
      Facts,
    }
  })
  class LiveChat extends Vue {

    coverData = {
      cover: require('@/assets/images/services/live_chat/cover.png'),
      mask: require('@/assets/images/services/live_chat/mask.png'),
      title: this.$t(`services.liveChat.cover.title`),
      subtitle: this.$t(`services.liveChat.cover.subtitle`),
      cta: this.$t(`services.liveChat.cover.cta`),
    }
  }

  export default LiveChat;
</script>

<style lang="scss">


</style>
