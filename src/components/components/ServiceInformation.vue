<template>
  <div class="section section--service-information">
    <div class="columns m-0">
      <div class="services-cover column is-6 p-t-0 p-l-0 p-b-0 lh-0 has-overflow-hidden">
        <div class="services-cover__image">
          <img :src="data.cover">
        </div>
      </div>
      <div class="section__content column is-6">
        <h1 v-html="data.title"></h1>
        <p v-html="data.text"></p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component, Prop } from 'vue-property-decorator';

  @Component
  class ServiceInformation extends Vue {
    @Prop({required: true})
    data: any;
  }

  export default ServiceInformation;
</script>

<style lang="scss">


  .section.section--service-information {
    position: relative;
    background: linear-gradient(90deg, #9FF882 0%, #186267 80%, #186267 100%);

    .section__content {
      padding-left: 80px !important;
    }

    .services-cover {
      .services-cover__mask {
        right: 12px;
      }
    }

    .section__content {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;


      h1 {
        max-width: 100%;
        text-align: left;
        color: #fff;
        margin-bottom: 0px;

        .is-highlighted {
          display: block;
          white-space: nowrap;
        }
      }

      p {
        color: #fff;
        line-height: 26px;
        font-size: 18px;
        text-align: justify;
        margin-bottom: 80px;
      }
    }

    .services-cover {
      position: relative;

      .services-cover__mask {
        position: absolute;
      }
    }


  }

</style>
