<template>
  <div class="footer footer--movements">
    <div class="columns is-multiline">

      <div class="column is-4 is-offset-1-desktop footer__impressum">
        <div class="block block--impressum m-b-20">
          <span class="block__title">
            Impressum
          </span>
          <span class="is-block">
            Movements Marketing
          </span>
          <span class="is-block">
            +31 85 210 37 55
          </span>
          <span class="is-block">
            info@movementsmarketing.com
          </span>
        </div>
        <div class="block block--impressum m-b-10">
          <span class="block__title">
            Registered offices
          </span>
          <span class="is-block">
            Sarajevo, Utrecht, Istanbul
          </span>
        </div>
        <div class="block block--impressum">
          <img src="@/assets/images/movements-marketing-logo-white.png"/>
        </div>

      </div>

      <div class="column is-4-tablet is-2-desktop footer__links">
        <div class="columns is-multiline">
          <div class="column is-12 p-b-0">
            <router-link to="/about">
              {{ $t(`navigation.about`) }}
            </router-link>
          </div>
          <div class="column is-12 p-0">
            <router-link to="/outbound">
              {{ $t(`navigation.services`) }}
            </router-link>
          </div>
          <div class="column is-12 p-0">
            <router-link to="/careers">
              {{ $t(`navigation.career`) }}
            </router-link>
          </div>
          <div class="column is-12 p-0">
            <router-link to="/clients">
              {{ $t(`navigation.clients`) }}
            </router-link>
          </div>
          <div class="column is-12 p-0">
            <router-link to="/contact">
              {{ $t(`navigation.contact`) }}
            </router-link>
          </div>
          <div class="column is-12 p-t-0">
            <router-link to="/privacy-policy">
              {{ $t(`navigation.privacyPolicy`) }}
            </router-link>
          </div>
        </div>
        <div class="footer__icons">
          <div class="columns m-0 is-mobile">
            <div class="column is-3">
              <a href="https://www.linkedin.com/company/movements-marketing/" target="_blank">
                <div class="footer__icon">
                  <icons icon="linkedin" stroke="transparent" fill="#9FF882" :width="14" :height="14"/>
                </div>
              </a>
            </div>
            <div class="column is-3">
              <a href="https://www.facebook.com/Movements.Marketing" target="_blank">
                <div class="footer__icon">
                  <icons icon="facebook" stroke="transparent" fill="#9FF882" :width="14" :height="14"/>
                </div>
              </a>
            </div>
            <div class="column is-3">
              <a href="https://www.instagram.com/movementsmarketing" target="_blank">
                <div class="footer__icon">
                  <icons icon="instagram" view-box="0 0 242 242" stroke="transparent" fill="#9FF882" :width="14" :height="14"/>
                </div>
              </a>
            </div>
            <div class="column is-3">
              <a href="https://youtube.com/channel/UCAAdAaaSGa_LDaZu5jS-77A" target="_blank">
                <div class="footer__icon">
                  <icons icon="youtube" view-box="0 0 100 100" stroke="transparent" fill="#9FF882" :width="14" :height="14"/>
                </div>
              </a>
            </div>
          </div>
        </div>

      </div>

      <div class="column is-4 footer__logos">
        <div class="footer__bvmw">
          We are a member of:
          <a href="https://www.bvmw.de/?lang=en" target="_blank">
            <div class="bvmw__img">
              <img src="@/assets/images/bvmw.png" alt="bvmw">
            </div>
          </a>
        </div>
      </div>

      <div class="column is-12 footer__copyright">
        <div class="">
          © 2022 Movements Marketing Inc. All Rights Reserved
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';

  @Component
  class Footer extends Vue {
    get policyLink() {
      return this.$i18n.locale === 'nl' ? 'https://drive.google.com/file/d/1vXHSUX6ixFlZud2xzOfZpWmKQRAA3tgB/view' : 'https://drive.google.com/file/d/13JrSBecSq-rMm0diCgUAUUkID1yI6_Vk/view';
    }
  }

  export default Footer;
</script>

<style lang="scss">

  .footer.footer--movements {
    padding: 20px 20px 10px 20px;
    background: #0b4144;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    > .columns {
      width: 100%;
      max-width: 1800px;
    }

    .footer__logos,
    .footer__impressum {
      align-items: flex-start;
      display: flex;
      flex-direction: column;
      font-size: 12px;
      font-weight: 400;

      @media screen and (max-width: 768px) {
        align-items: center;
      }
    }

    .footer__logos {
      align-items: flex-end;

      @media screen and (max-width: 768px) {
        align-items: center;
      }
    }

    .footer__impressum {
      text-align: left;

      @media screen and (max-width: 768px) {
        text-align: center;
      }

      .block {
        color: #fff;

        .block__title {
          color: #9FF882;
          text-transform: uppercase;
          font-size: 12px;
          font-weight: 400;
        }

        img {
          width: 120px;
        }
      }

      @media screen and (max-width: 768px) {
        border-bottom: 1px solid #ffffff;
        margin-bottom: 10px;
      }
    }

    .footer__links {
      text-align: center;

      @media screen and (max-width: 768px) {
        border-bottom: 1px solid #ffffff;
        margin-bottom: 10px;
      }

      a {
        color: #fff;
        font-size: 14px;
        font-weight: 400;

        &:hover {
          color: #9FF882;
        }
      }
    }

    .footer__mail{
      font-size: 18px;
      color: #9FF882;
      font-weight: 900;
    }

    .footer__bvmw {
      color: #ffffff;
      text-align: right;

      @media screen and (max-width: 768px) {
        text-align: center;
      }

      .bvmw__img {
        max-width: 120px;
        margin-bottom: 30px;
      }
    }

    .footer__icons {
      max-width: 250px;
      margin: auto;

      .footer__icon {
        border: 1px solid #9FF882;
        border-radius: 50%;
        padding: 0;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
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
      border-top: 1px solid #fff;
    }
    }

</style>
