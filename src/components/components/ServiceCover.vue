<template>
  <div class="section section--service-cover">
    <div class="columns m-0">
      <div class="section__content column is-6 lh-0" >
        <h1 v-html="data.title"></h1>
        <h2 v-html=" data.subtitle"></h2>
        <div class="has-text-left">
          <router-link :to="customLink ? customLink : '#tryService'" class="button button--hollow is-green button--light-text">
            <span class="text">
            {{ data.cta }}
            </span>
            <span class="dot"></span>
            <span class="icon-wrapper">
              <icons icon="chevronRight" stroke-width="3" stroke="#fff" height="24" width="24" />
            </span>
          </router-link>
        </div>
      </div>
      <div class="services-cover column is-6 p-0 lh-0">
        <div class="services-cover__mask">
          <img :src="data.mask">
        </div>
        <div class="services-cover__image">
          <img :src="data.cover">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component, Prop } from 'vue-property-decorator';

  @Component
  class ServiceCover extends Vue {
    @Prop({required: true})
    data: any;

    @Prop({default: null})
    customLink: string | null;
  }

  export default ServiceCover;
</script>

<style lang="scss">
  .section.section--service-cover {
    position: relative;
    background: linear-gradient(90deg, #186267 0%, #186267 20%, #9FF882 100%);
    overflow: hidden;

    .section__content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-right: 20px !important;


      h1 {
        max-width: 100%;
        text-align: left;
        color: #fff;
        margin-bottom: 120px;
        font-size: 92px;
        font-weight: 800;
        position: relative;
        z-index: 1;
        white-space: nowrap;

        @media (min-resolution: 100dpi) {
          font-size: 78px;
        }
        @media screen  and (max-width: 1024px) {
          font-size: 72px;
          line-height: 78px;
          margin-top: 40px;
          margin-bottom: 60px;
        }

        @media screen  and (max-width: 768px) {
          font-size: 46px;
          line-height: 42px;
          margin-top: 20px;
          margin-bottom: 30px;
        }

        @media screen  and (max-width: 460px) {
          font-size: 36px;
          line-height: 32px;
        }

        @media screen  and (max-width: 320px) {
          font-size: 32px;
          line-height: 32px;
        }

        .is-highlighted {
          display: block;
          white-space: nowrap;
        }
      }

      h2 {
        color: #fff;
        text-align: left;
        font-size: 62px;
        font-weight: 300;
        margin-bottom: 80px;
        line-height: 58px;

        @media (min-resolution: 100dpi) {
          font-size: 54px;
        }

        @media screen  and (max-width: 1024px) {
          font-size: 36px;
          line-height: 42px;
          margin-bottom: 50px;
        }

        @media screen  and (max-width: 768px) {
          font-size: 24px;
          line-height: 20px;
        }

        @media screen  and (max-width: 460px) {
          font-size: 20px;
          line-height: 18px;
          margin-bottom: 25px;
        }
      }

      .button {
        transform: translateX(-20px);
        transition: transform ease 350ms;

        &:hover {
          transform: translateX(0px);
        }
      }

      p {
        color: #fff;
        line-height: 28px;
        font-size: 20px;
        text-align: justify;
      }
    }

    .services-cover {
      position: relative;

      .services-cover__image {
        @media screen  and (max-width: 1300px) {
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

      .services-cover__mask {
        position: absolute;

        @media screen  and (max-width: 768px) {
         display: none;
        }
      }
    }

  }


</style>
