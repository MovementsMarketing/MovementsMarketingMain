<template>
  <div class="section section--service-form" :style="`background-image: url(${bgImage});`">
    <div class="contact__mask"></div>
    <div class="contact__title">
      <h1 v-html="title"></h1>
    </div>
    <div class="section__content has-text-centered">

      <div class="contact__form">
        <form class="form" :name="`service-${formName}`" method="post" netlify netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" :value="`service-${formName}`" />
          <div class="columns is-multiline">
            <div class="column is-6 is-offset-3">
              <input class="form__input" type="text" id="name" name="name" required :placeholder="$t(`services.form.name`)">
            </div>
            <div class="column is-6 is-offset-3">
              <input class="form__input"  type="text" id="companyName" name="companyName" required :placeholder="$t(`services.form.companyName`)">
            </div>
            <div class="column is-6 is-offset-3">
              <input class="form__input"  type="email" id="email" name="email" required  :placeholder="$t(`services.form.businessEmail`)">
            </div>
            <div class="column is-6 is-offset-3">
              <input class="form__input" name="message" id="phone"  :placeholder="$t(`services.form.phone`)"/>
            </div>

            <div class="column is-6 is-offset-3 has-text-right">
              <button class="button button--hollow m-t-10">
                <span class="text">
                  {{ $t(`services.form.cta`) }}
                </span>
                <span class="dot"></span>
                <span class="icon-wrapper">
                  <icons icon="chevronRight" stroke-width="3" stroke="#fff" height="24" width="24" />
                </span>
              </button>
            </div>

            <div class="column is-6 is-offset-3 has-text-right">
              <div class="contact__info">
                <p v-html="$t(`services.form.info`)"></p>
              </div>
            </div>
          </div>
        </form>

      </div>

    </div>
  </div>

</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component, Prop } from 'vue-property-decorator';

  @Component
  class ServiceForm extends Vue {
    @Prop({default: ''})
    title: string;

    @Prop({default: ''})
    formName: string;

    bgImage = require('@/assets/images/backgrounds/movemens_contact_bg.png');

  }

  export default ServiceForm;
</script>

<style lang="scss">

  .section.section--service-form {
    position: relative;
    background-position: top left;
    background-repeat: no-repeat;
    background-color: #ffffff;

    .contact__mask {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: #ECECEC;
      opacity: 0.6;
      z-index: 0;
    }

    .contact__title {
      position: absolute;
      top: 30px;
      left: 0;
      width: 100%;
      z-index: 6;
      padding: 50px 0;

      @media screen  and (max-width: 1024px) {
        padding: 40px 0;

      }

      @media screen  and (max-width: 768px) {
        padding: 20px 0;
      }

      h1 {
        font-size: 68px;
        line-height: 72px;
        color: #008d90;
        display: inline-block;
        position: relative;
        font-weight: 800;

        @media (min-resolution: 100dpi) {
          font-size: 58px;
          line-height: 62px;
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
          padding: 0 20px;
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
          font-weight: 800;
        }

        &::after {
          content: '';
          display: block;
          width: 100vw;
          height: 3px;
          background: #9FF882;
          left: 0;
          position: absolute;
        }
      }
    }

    .contact__form {
      padding: 220px 0 60px;

      @media (min-resolution: 100dpi) {
        padding: 200px 0 40px;
      }
    }

    .contact__info {
      padding-top: 30px;

      p {
        font-size: 14px;
        @media screen  and (max-width: 768px) {
          font-size: 10px;
          line-height: 12px;
        }

      }
    }

  }

</style>
