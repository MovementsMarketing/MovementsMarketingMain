<template>
  <div :class=" isGray ? 'is-gray' : 'is-white'">
    <div class="footer footer--movements">
      <div class="columns is-multiline footer__content is-align-items-center">

        <div class="column is-4 footer__logo p-0">
          <div class="block block--impressum m-0">
            <img src="@/assets/images/movements-marketing-logo-white.png"/>
          </div>
          <div class="footer__icons is-flex p-10" style="gap: 15px;">
            <div>
              <a href="https://www.linkedin.com/company/movements-marketing/" target="_blank">
                <div class="footer__icon">
                  <icons icon="linkedin" stroke="transparent" fill="#186267" :width="20" :height="20"/>
                </div>
              </a>
            </div>
            <div>
              <a href="https://www.facebook.com/Movements.Marketing" target="_blank">
                <div class="footer__icon">
                  <icons icon="facebook" stroke="transparent" fill="#186267" :width="20" :height="20"/>
                </div>
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com/movementsmarketing" target="_blank">
                <div class="footer__icon">
                  <icons icon="instagram" view-box="0 0 242 242" stroke="transparent" fill="#186267" :width="20" :height="20"/>
                </div>
              </a>
            </div>
            <div>
              <a href="https://youtube.com/channel/UCAAdAaaSGa_LDaZu5jS-77A" target="_blank">
                <div class="footer__icon">
                  <icons icon="youtube" view-box="0 0 100 100" stroke="transparent" fill="#186267" :width="20" :height="20"/>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div class="column is-4 footer__impressum is-flex is-fullheight is-align-items-center is-justify-content-center p-0">
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
          <div class="block block--impressum">
          <span class="block__title">
            Registered offices
          </span>
            <span class="is-block">
            Sarajevo, Utrecht, Istanbul
          </span>
          </div>
        </div>

        <div class="column is-4  footer__links p-0">
          <div class="columns is-multiline" style="gap: 5px;">
            <div class="column is-12 p-0 has-text-right-tablet">
              <router-link to="/careers">
                {{ $t(`navigation.career`) }}
              </router-link>
            </div>
            <div class="column is-12 p-0 has-text-right-tablet">
              <router-link to="/contact" >
                {{ $t(`contactUs`) }}
              </router-link>
            </div>
            <div class="column is-12 p-0 has-text-right-tablet">
              <router-link to="/general-terms">
                {{ $t(`generalTerms.name`) }}
              </router-link>
            </div>
            <div class="column is-12 p-0 has-text-right-tablet">
              <router-link to="/privacy-policy">
                {{ $t(`navigation.privacyPolicy`) }}
              </router-link>
            </div>
          </div>
        </div>


      </div>
      <div class="columns m-0">
        <div class="column is-12 footer__copyright">
          <div class="">
            © 2024 Movements Marketing Inc. All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  class Footer extends Vue {
    @Prop({default: false})
    isGray: boolean;

    get policyLink() {
      return this.$i18n.locale === 'nl' ? 'https://drive.google.com/file/d/1vXHSUX6ixFlZud2xzOfZpWmKQRAA3tgB/view' : 'https://drive.google.com/file/d/13JrSBecSq-rMm0diCgUAUUkID1yI6_Vk/view';
    }
  }

  export default Footer;
</script>

<style lang="scss">

  .footer.footer--movements {
    background: #186267;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 120px 120px 0 0;
    padding: 0;

    @media screen and (max-width: 768px) {
      border-radius: 60px 60px 0 0;
    }


    .footer__content {
      padding: 60px 240px;

      @media screen and (max-width: 1400px) {
        padding: 60px 120px;
      }

      @media screen and (max-width: 1200px) {
        padding: 60px 80px;
      }

      @media screen and (max-width: 520px) {
        padding: 60px 40px;
      }

    }

    > .columns {
      width: 100%;
      max-width: 1920px;
    }

    .footer__impressum {
      align-items: flex-start;
      display: flex;
      flex-direction: column;
      font-size: 12px;
      font-weight: 400;

      .block {
        color: #fff;

        .block__title {
          color: #69BC77;
          text-transform: uppercase;
          font-size: 12px;
          font-weight: 600;
        }
      }

      @media screen and (max-width: 768px) {
        margin: 20px 0 40px 0;
      }
    }

    .footer__logo {
      text-align: left;

      @media screen and (max-width: 768px) {
        text-align: center;
      }

      img {
        width: 180px;
        margin-bottom: 20px;

        @media screen and (max-width: 1200px) {
          width: 120px;
        }

        @media screen and (max-width: 768px) {
          margin-bottom: 0;
        }

      }
    }

    .footer__links {
      text-align: center;

      a {
        color: #fff;
        font-size: 13px;
        font-weight: 600;

        &:hover {
          color: #69BC77;
        }
      }
    }

    .footer__mail{
      font-size: 18px;
      color: #69BC77;
      font-weight: 900;
    }

    .footer__icons {
      @media screen and (max-width: 768px) {
        justify-content: center;
      }

      .footer__icon {
        background: #fff;
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
      color: #F2F2F2;
      font-size: 12px;
      border-top: 1px solid #fff;
    }
    }

</style>
