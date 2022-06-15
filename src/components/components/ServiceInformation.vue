<template>
  <div class="section section--service-information">
    <div class="columns m-0">
      <div class="services-cover column is-6 p-t-0 p-l-0 p-b-0 lh-0 has-overflow-hidden">
        <div class="services-cover__image has-text-left">
          <img :src="data.cover" :alt="data.title">
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

    @media screen  and (max-width: 7680px) {
      background: linear-gradient(90deg, #6abe77 0%, #186267 100%);
    }

    .section__content {
      padding-left: 80px !important;

      @media screen  and (max-width: 1400px) {
        padding-left: 40px !important;
      }

      @media screen  and (max-width: 1024px) {
        padding-left: 20px !important;
        padding-right: 80px !important;
      }

      @media screen  and (max-width: 768px) {
        padding: 40px !important;
      }
    }

    .services-cover {
      @media screen  and (max-width: 768px) {
        padding-right: 0;
      }

      .services-cover__mask {
        right: 12px;
      }

      .services-cover__image {
        @media screen  and (max-width: 1240px) {
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            height: 100%;
            max-width: unset;
          }
        }

        @media screen  and (max-width: 768px) {
          img {
            height: auto;
            max-width: 100%;
          }
        }
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

        @media screen  and (max-width: 1400px) {
          font-size: 56px;
          line-height: 58px;
          margin-bottom: 20px;
        }

        @media screen  and (max-width: 1024px) {
          font-size: 46px;
          line-height: 48px;
        }
      }

      p {
        color: #fff;
        line-height: 26px;
        font-size: 18px;
        text-align: justify;
        margin-bottom: 80px;

        @media screen  and (max-width: 1024px) {
          margin-bottom: 40px;
        }

        @media screen  and (max-width: 768px) {
          margin-bottom: 0px;
        }
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
