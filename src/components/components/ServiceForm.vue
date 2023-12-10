<template>
  <div class="section is-white has-padding service-form">
    <div class="contact__title">
      <h2 v-html="title" class="has-line-center"></h2>
    </div>
    <div class="section__content has-text-centered">

      <div class="is-relative">
        <img :src="dots" :class="{'dots': true}">

        <div class="contact__form is-relative">
          <div class="form-intro">
            <h5 v-html="subtitle" ></h5>
            <p v-html="text" ></p>
          </div>

          <form class="form" :name="`service-${formName}`" method="post" netlify netlify-honeypot="bot-field" :action="`/thank-you/${serviceType}`">
            <input type="hidden" name="form-name" :value="`service-${formName}`" />
            <div class="columns is-multiline">
              <div class="column is-6">
                <input class="form__input" type="text" id="name" name="name" required :placeholder="$t(`services.form.name`)">
              </div>
              <div class="column is-6">
                <input class="form__input"  type="text" id="companyName" name="companyName" required :placeholder="$t(`services.form.companyName`)">
              </div>
              <div class="column is-6">
                <input class="form__input"  type="email" id="email" name="email" required  :placeholder="$t(`services.form.businessEmail`)">
              </div>
              <div class="column is-6">
                <input class="form__input" name="message" id="phone" required :placeholder="$t(`services.form.phone`)"/>
              </div>

              <div class="column is-12 has-text-right">
                <button class="button button--primary m-t-10">
                <span class="text">
                  {{ $t(`services.form.cta`) }}
                </span>
                  <span class="dot"></span>
                  <span class="icon-wrapper">
                  <icons icon="arrowRight" stroke-width="3" stroke="#fff" height="20" width="20" />
                </span>
                </button>
              </div>

              <!--            <div class="column is-12 has-text-right">-->
              <!--              <div class="contact__info">-->
              <!--                <p v-html="$t(`services.form.info`)"></p>-->
              <!--              </div>-->
              <!--            </div>-->
            </div>
          </form>

        </div>

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
    subtitle: string;

    @Prop({default: ''})
    text: string;

    @Prop({default: ''})
    formName: string;

    @Prop({default: ''})
    serviceType: string;


    dots = require('@/assets/images/dots-green.png');

  }

  export default ServiceForm;
</script>

<style lang="scss">
.service-form {
  .dots {
    position: absolute;
    left: -100px;
    top: -100px;
    z-index: 0;

    @media screen and (max-width: 780px) {
      width: 100px;
      top: -40px;
      left: -40px;
    }
  }
}

</style>
