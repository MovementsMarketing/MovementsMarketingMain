<template>
  <div class="careers">
    <navigation :full-logo="true" :light-logo="true"/>

    <service-cover :data="coverData"/>

    <div class="section-divider"></div>

    <movements-footer/>

  </div>

</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';
  import ServiceCover from "@/components/components/ServiceCover.vue";

  @Component({
    components: {
      ServiceCover
    }
  })
  class Careers extends Vue {
    coverData = {
      cover: require('@/assets/images/careers/cover.png'),
      mask: require('@/assets/images/careers/mask.png'),
      title: this.$t(`careers.cover.title`),
      subtitle: this.$t(`careers.cover.subtitle`),
      cta: this.$t(`careers.cover.cta`),
    };
  }

  export default Careers;
</script>

<style lang="scss">
  .careers {
    .section.section--service-cover {
      .section__content {
        h1 {
          font-weight: 300;

          .is-highlighted {
            display: unset;
          }
        }
      }
    }
  }

</style>
