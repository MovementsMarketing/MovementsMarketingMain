<template>
  <div class="footer footer--movements p-0">
    <div class="footer__links ">
      <div class="columns">
        <div class="column is-3">
          <router-link to="/#about">
            {{ $t(`navigation.about`) }}
          </router-link>
        </div>
        <div class="column is-3">
          <router-link to="/#outbound">
            {{ $t(`navigation.services`) }}
          </router-link>
        </div>
<!--        <div class="column is-2">-->
<!--          <router-link to="/#inbound">-->
<!--            {{ $t(`navigation.servicesOptions.inbound`) }}-->
<!--          </router-link>-->
<!--        </div>-->
        <div class="column is-3">
          <router-link to="/#career">
            {{ $t(`navigation.career`) }}
          </router-link>
        </div>
        <div class="column is-3">
          <router-link to="/#contact">
            {{ $t(`navigation.contact`) }}
          </router-link>
        </div>
<!--        <div class="column is-2">-->
<!--          <router-link to="/">-->
<!--            {{ $t(`navigation.about`) }}-->
<!--          </router-link>-->
<!--        </div>-->
      </div>
    </div>
    <div class="footer__icons">
      <div class="columns m-0">
        <div class="column is-3">
          <div class="footer__icon">
            <icons icon="linkedin" stroke="transparent" fill="#9FF882" :width="24" :height="24"/>
          </div>
        </div>
        <div class="column is-3">
          <div class="footer__icon">
            <icons icon="facebook" stroke="transparent" fill="#9FF882" :width="24" :height="24"/>
          </div>
        </div>
        <div class="column is-3">
          <div class="footer__icon">
            <icons icon="instagram" view-box="0 0 242 242" stroke="transparent" fill="#9FF882" :width="24" :height="24"/>
          </div>
        </div>
        <div class="column is-3">
          <div class="footer__icon">
            <icons icon="youtube" view-box="0 0 100 100" stroke="transparent" fill="#9FF882" :width="24" :height="24"/>
          </div>
        </div>
      </div>
    </div>

    <div class="footer__mail">
      info@movementsmarketing.com
    </div>

    <div class="footer__copyright">
      © 2022 Movements Marketing Inc. All Rights Reserved
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';

  @Component
  class Footer extends Vue {


  }

  export default Footer;
</script>

<style lang="scss">

  .footer.footer--movements {
    height: 300px;
    background: #186267;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    .footer__links {
      a {
        color: #fff;
        font-size: 18px;
        font-weight: 600;

        &:hover {
          color: #9FF882;
        }
      }
    }

    .footer__mail {
      font-size: 18px;
      color: #9FF882;
      font-weight: 900;
    }

    .footer__icons {
      .footer__icon {
        border: 2px solid #9FF882;
        border-radius: 50%;
        padding: 10px;
        transition: transform ease 400ms;
        cursor: pointer;

          &:hover {
            transform: scale(1.15);
          }
        }
      }

    .footer__copyright {
      color: #fff;
      font-size: 12px;
    }
    }

</style>
