<template>
    <div class="navigation" :class="navBlurred && !isServicesActive ? 'is-blurred' : 'is-main'">
        <div class="navigation__language-selector">
          <img :class="currentLang === 'en' ? `navigation__language active` : `navigation__language`"
               @click="setLanguage('en')"
               src="@/assets/images/flags/united-kingdom.png"
               alt="english"
          />
          <img
              :class="currentLang === 'nl' ? `navigation__language active` : `navigation__language`"
              @click="setLanguage('nl')"
              src="@/assets/images/flags/netherlands.png"
              alt="dutch"
          />
          <img
              :class="currentLang === 'de' ? `navigation__language active` : `navigation__language`"
              @click="setLanguage('de')"
              src="@/assets/images/flags/germany.png"
              alt="german"
          />
        </div>
        <div class="is-hidden-desktop is-fullwidth">
          <div class="navigation__navbar navigation__navbar--touch">
            <router-link to="/" class="navigation__logo navigation__logo--large" @click="isMobileActive = false">
              <div class="navigation__logo">
                <img src="@/assets/images/movements-marketing-logo.png" alt="Movements Marketing"/>
              </div>
            </router-link>
            <div class="navigation__burger" @click="onBurgerClick">
              <ul :class="isMobileActive ? 'active' : ''">
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div class="navigation__menu" :class="isMobileActive ? 'is-active' : ''">
              <div class="navigation__menu__items">
                <div class="navigation__item" @click="isMobileActive = false">
                  <router-link to="/#about" >
                    {{ $t(`navigation.about`) }}
                  </router-link>
                </div>

                <div class="navigation__item" @click="isServicesActive = !isServicesActive">
                  <span class="navigation__item--dropdown" :class="isServicesActive ? 'is-active' : ''">
                    <span class="text-wrapper">
                      {{ $t(`navigation.services`) }}
                      <span class="m-l-5">
                        <icons icon="chevronDown" stroke="#2a4647" stroke-width="4" height="24" width="24" />
                      </span>
                    </span>
                  </span>
                </div>

                <div v-show="isServicesActive" class="section navigation__services-options">
                  <div class="columns m-0">
                    <div class="column is-6 navigation__services-options__option">
                      <div class="icon">
                        <img src="@/assets/images/icons/services_icon_1.png"  alt="Movements Marketing Outbound Lead Generation"/>
                      </div>
                      <div class="divider"></div>
                      <div class="text">
                        <router-link to="/#outbound">
                          <p class="title" @click="isServicesActive = !isServicesActive; isMobileActive = false;">
                            {{ $t(`navigation.servicesOptions.outbound`) }}
                          </p>
                        </router-link>
                        <div class="list" @click="isServicesActive = !isServicesActive; isMobileActive = false;">
                          <router-link to="/service/b2b-telemarketing">
                            {{ $t(`navigation.servicesOptions.telemarketing`) }}
                          </router-link>
                          <router-link to="/service/b2b-telemarketing">
                            {{ $t(`navigation.servicesOptions.leadGeneration`) }}
                          </router-link>
                          <router-link to="/service/b2b-telemarketing">
                            <span v-html="$t(`navigation.servicesOptions.newAppointments`)"/>
                          </router-link>
                          <router-link to="/service/b2b-telemarketing">
                            {{ $t(`navigation.servicesOptions.dataEnrichment`) }}
                          </router-link>
                        </div>
                      </div>
                    </div>

                    <div class="column is-6 navigation__services-options__option">
                      <div class="icon">
                        <img src="@/assets/images/icons/services_icon_2.png"  alt="Movements Marketing Inbound Customer Service"/>
                      </div>
                      <div class="divider">

                      </div>
                      <div class="text">
                        <router-link to="/#inbound">
                          <p class="title" @click="isServicesActive = !isServicesActive; isMobileActive = false;">
                            {{ $t(`navigation.servicesOptions.inbound`) }}
                          </p>
                        </router-link>
                        <div class="list" @click="isServicesActive = !isServicesActive; isMobileActive = false;">
                          <router-link to="/service/customer-service">
                            {{ $t(`navigation.servicesOptions.customerService`) }}
                          </router-link>
                          <router-link to="/service/answering-service">
                            {{ $t(`navigation.servicesOptions.answeringService`) }}
                          </router-link>
                          <router-link to="/service/live-chat">
                            {{ $t(`navigation.servicesOptions.liveChat`) }}
                          </router-link>
                          <router-link to="/service/email-management">
                            {{ $t(`navigation.servicesOptions.emailManagement`) }}
                          </router-link>
                          <router-link to="/service/social-webcare">
                            {{ $t(`navigation.servicesOptions.socialWebcare`) }}
                          </router-link>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>



                <div class="navigation__item">
                  <router-link to="/#clients" @click="isMobileActive = false;">
                    {{ $t(`navigation.clients`) }}
                  </router-link>
                </div>

                <div class="navigation__item">
                  <router-link to="/careers"  @click="isMobileActive = false;">
                    {{ $t(`navigation.career`) }}
                  </router-link>
                </div>


                <div class="navigation__actions-divider"></div>
                <div class="navigation__item navigation__item--button"  @click="isMobileActive = false;">
                  <router-link to="/#contact" class="button button--hollow">
                    <span class="text">
                      {{ $t(`navigation.contact`) }}
                    </span>
                    <span class="dot"></span>
                    <span class="icon-wrapper">
                      <icons icon="chevronRight" stroke-width="3" stroke="#fff" height="24" width="24" />
                    </span>
                  </router-link>

                </div>

                <div class="navigation__item navigation__item--button">
                  <a class="button button--hollow" href="https://www.linkedin.com/company/movements-marketing/posts/?feedView=articles&viewAsMember=true" target="_blank">
                  <span class="text">
                    {{ $t(`navigation.linkedInBlogs`) }}
                  </span>
                    <span class="dot"></span>
                    <span class="icon-wrapper">
                    <icons icon="chevronRight" stroke-width="3" stroke="#fff" height="24" width="24" />
                  </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div class="is-hidden-touch is-fullwidth" style="max-width: 2500px;" @mouseleave="isServicesActive = false">
            <div class="navigation__navbar navigation__navbar--desktop">
              <router-link to="/">

              <div class="navigation__logo">
                  <img src="@/assets/images/movements-marketing-logo.png" alt="Movements Marketing"/>
                </div>
              </router-link>
                <div class="navigation__item">
                  <router-link to="/#about">
                    {{ $t(`navigation.about`) }}
                  </router-link>
                </div>
                <div class="navigation__item" @click="isServicesActive = !isServicesActive">
                  <span class="navigation__item--dropdown" :class="isServicesActive ? 'is-active' : ''">
                    <span class="text-wrapper">
                      {{ $t(`navigation.services`) }}
                      <span class="m-l-5">
                        <icons icon="chevronDown" stroke="#2a4647" stroke-width="2" height="20" width="20" />
                      </span>
                    </span>
                  </span>

                </div>

              <div class="navigation__item">
                <router-link to="/#clients">
                  {{ $t(`navigation.clients`) }}
                </router-link>
              </div>

              <div class="navigation__item">
                <router-link to="/careers">
                  {{ $t(`navigation.career`) }}
                </router-link>
              </div>

              <div class="navigation__item navigation__item--button">
                  <router-link to="/#contact" class="button button--hollow">
                    <span class="text">
                      {{ $t(`navigation.contact`) }}
                    </span>
                    <span class="dot"></span>
                    <span class="icon-wrapper">
                      <icons icon="chevronRight" stroke-width="3" stroke="#fff" height="24" width="24" />
                    </span>
                  </router-link>

              </div>

              <div class="navigation__item navigation__item--button">
                <a class="button button--hollow" href="https://www.linkedin.com/company/movements-marketing/posts/?feedView=articles&viewAsMember=true" target="_blank">
                  <span class="text">
                    {{ $t(`navigation.linkedInBlogs`) }}
                  </span>
                  <span class="dot"></span>
                  <span class="icon-wrapper">
                    <icons icon="chevronRight" stroke-width="3" stroke="#fff" height="24" width="24" />
                  </span>
                </a>
              </div>
            </div>
          <div v-show="isServicesActive" class="section navigation__services-options">
            <div class="columns m-0">
              <div class="column is-6 navigation__services-options__option">
                <div class="icon">
                  <img src="@/assets/images/icons/services_icon_1.png"  alt="Movements Marketing Outbound Lead Generation"/>
                </div>
                <div class="divider"></div>
                <div class="text">
                  <router-link to="/#outbound">
                    <p class="title" @click="isServicesActive = !isServicesActive">
                      {{ $t(`navigation.servicesOptions.outbound`) }}
                    </p>
                  </router-link>
                  <div class="list" @click="isServicesActive = !isServicesActive">
                    <router-link to="/service/b2b-telemarketing">
                      {{ $t(`navigation.servicesOptions.telemarketing`) }}
                    </router-link>
                    <router-link to="/service/b2b-telemarketing">
                      {{ $t(`navigation.servicesOptions.leadGeneration`) }}
                    </router-link>
                    <router-link to="/service/b2b-telemarketing">
                      <span v-html="$t(`navigation.servicesOptions.newAppointments`)">
                      </span>
                    </router-link>
                    <router-link to="/service/b2b-telemarketing">
                      {{ $t(`navigation.servicesOptions.dataEnrichment`) }}
                    </router-link>
                  </div>
                </div>
              </div>

              <div class="column is-6 navigation__services-options__option">
                <div class="icon">
                  <img src="@/assets/images/icons/services_icon_2.png"  alt="Movements Marketing Inbound Customer Service"/>
                </div>
                <div class="divider">

                </div>
                <div class="text">
                  <router-link to="/#inbound" @click="isServicesActive = !isServicesActive">
                    <p class="title">
                      {{ $t(`navigation.servicesOptions.inbound`) }}
                    </p>
                  </router-link>
                  <div class="list" @click="isServicesActive = !isServicesActive">
                    <router-link to="/service/customer-service">
                      {{ $t(`navigation.servicesOptions.customerService`) }}
                    </router-link>
                    <router-link to="/service/answering-service">
                      {{ $t(`navigation.servicesOptions.answeringService`) }}
                    </router-link>
                    <router-link to="/service/live-chat">
                      {{ $t(`navigation.servicesOptions.liveChat`) }}
                    </router-link>
                    <router-link to="/service/email-management">
                      {{ $t(`navigation.servicesOptions.emailManagement`) }}
                    </router-link>
                    <router-link to="/service/social-webcare">
                      {{ $t(`navigation.servicesOptions.socialWebcare`) }}
                    </router-link>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component, Watch } from 'vue-property-decorator';

    @Component
    class Navigation extends Vue {
        isMobileActive: boolean = false;
        isServicesActive: boolean = false;
        navClass: string = 'is-main';
        navBlurred:  boolean = false;

        @Watch('isMobileActive')
        onMobileActive(isActive: boolean) {
          console.log('change', isActive)
          if (isActive) {
            document.documentElement.style.overflow = "hidden";
            return;
          }

          document.documentElement.style.overflow = "auto";
        }

        onBurgerClick() {
            this.isMobileActive = !this.isMobileActive;
        }

      setLanguage(lang: string) {
        this.$i18n.locale = lang;
      }

      get currentLang() {
          return this.$i18n.locale
      }

      clicked() {
          console.log('clicked')
      }

      onScroll() {
          if (window.pageYOffset > 120) {
            this.navClass = 'is-blurred';
            this.navBlurred = true;
            return
          }

        this.navClass = 'is-main';
        this.navBlurred = false;

      }

        created(): void {
          window.addEventListener("scroll", this.onScroll);
          document.documentElement.style.overflow = "auto";

        }

      beforeDestroy() {
        window.removeEventListener("scroll", this.onScroll)
      }
    }
    export default Navigation;
</script>

<style lang="scss" scoped>
  .navigation {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 100;

    .navigation__language-selector {
      padding: 0 50px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      top: 0;
      width: 100%;
      height: 30px;
      background: #9DACA7;
      z-index: 200;
      max-width: 2500px;

      @media (min-resolution: 100dpi) {
        padding: 0 25px;
      }

      .navigation__language {
        height: 20px;
        margin: 0 4px;
        opacity: 0.5;

        &.active {
          opacity: 1;
        }
      }
    }

    .navigation__navbar {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      top: 30px;
      left: 0;
      padding: 20px;
      z-index: 100;
      -webkit-box-shadow: 0px 2px 5px 1px rgba(157,172,167,0.3);
      box-shadow: 0 1px 5px 0 rgba(157,172,167,0.5);
      background: #fff;
      transition: all ease 400ms;

      @media screen and (max-width: 768px){
        padding: 16px 20px;
      }

      .navigation__logo {
        display: flex;
        width: 150px;
        z-index: 150;

        @media (min-resolution: 100dpi) {
          width: 130px;
        }

        @media screen  and (max-width: 1400px) {
          width: 120px;
        }

      }

      &.navigation__navbar--desktop {
        padding: 0 50px;
        height: 120px;
        max-width: 2500px;
        width: 100%;

        @media (min-resolution: 100dpi) {
          padding: 0 25px;
          height: 100px;
        }

        @media screen and (max-width: 1400px) {
          padding: 0 12px;
        }

        .navigation__item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 24px;
          color: #186267 !important;

          @media (min-resolution: 100dpi) {
            font-size: 19px;
          }

          a:not(.button),
          .navigation__item--dropdown {
            color: #186267 !important;
            text-align: left;
            line-height: 50px;
            width: 150px;

            @media screen and (max-width: 1400px) {
              width: 100px;
            }

            @media screen and (max-width: 768px) {
              width: 250px;
            }

            &::before {
              content: '';
              display: block;
              width: 0;
              height: 2px;
              background: #008d90;
              transition: width 300ms ease;

              @media screen and (max-width: 1024px){
                display: none;
              }
            }

            &:hover {
              &::before {
                content: '';
                display: block;
                width: 150px;
                height: 2px;
                background: #008d90;
              }
            }
          }

          .navigation__item--dropdown {
            .text-wrapper {
              display: flex;
              align-items: center;
              width: 150px;
              justify-content: space-between;

              @media screen and (max-width: 1400px) {
                width: 100px;
                justify-content: flex-start;
              }
            }

            .vue-icon__wrapper {
              transition: transform ease 150ms;
            }

            &.is-active {
              &::before {
                content: '';
                display: block;
                width: 150px;
                height: 2px;
                background: #008d90;
              }

              .vue-icon__wrapper {
                transform: rotate(180deg);
              }
            }
          }
        }
      }

      &.navigation__navbar--touch {
        height: 100px;

        .navigation__burger {
          position: relative;
          width: 38px;
          height: 38px;
          cursor: pointer;
          z-index: 150;

          @media screen and (max-width: 768px){
            width: 32px;
            height: 32px;
          }

          ul li{
            list-style: none;
            width: 100%;
            height: 6px;
            background: #186267;
            position: absolute;
            left: 0;
            transform: translateY(-50%);
            transition: 500ms;

            @media screen and (max-width: 768px){
              height: 4px;
            }
          }
          ul li:nth-of-type(1){
            top: 20%;
          }
          ul li:nth-of-type(2){
            top: 50%;
            opacity: 1;
          }
          ul li:nth-of-type(3){
            top: 80%;
          }
          ul.active li:nth-of-type(1){
            top: 50%;
            transform: translateY(-50%) rotate(45deg) rotateY(180deg);
          }
          ul.active li:nth-of-type(2){
            /*left: 300%;*/
            opacity: 0;
          }
          ul.active li:nth-of-type(3){
            top: 50%;
            transform: translateY(-50%) rotate(-45deg) rotateY(180deg);
          }
        }

        .navigation__services-options {
          display: contents;

          >.columns {
            background: rgba(255, 255, 255, 0.5);
          }

          .navigation__services-options__option {
            justify-content: center;

            .icon {
              width: 50px;
            }

            .divider {
              display: none;
            }
          }
        }

        .navigation__actions-divider {
          display: none;
          width: 60%;
          height: 4px;
          background: #e8a500;
          margin: 15px auto 30px;
        }

        .navigation__menu {
          position: fixed;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
          background: rgba(255, 255, 255, 0.75);
          transform: translateX(120%);
          transition: transform 250ms ease-out;
          backdrop-filter: blur(10px) saturate(100%) contrast(45%) brightness(130%);

          &.is-active {
            transform: translateX(0%);
            height: 100vh;
            background: rgba(255, 255, 255, 1);

            .navigation__menu__items{
              backdrop-filter: blur(10px) saturate(100%) contrast(45%) brightness(130%);
              background: #ffffff;
            }
          }

          .navigation__menu__items {
            position: absolute;
            width: 100%;
            height: calc(100% - 150px);
            display: flex;
            flex-direction: column;
            align-items: center;
            top: 100px;
            padding: 20px 0;
            overflow: auto;

            .navigation__item {
              display: flex;
              justify-content: space-between;
              align-items: center;
              font-size: 28px;
              color: #2a4647 !important;
              margin-bottom: 20px;

              a:not(.button),
              .navigation__item--dropdown {
                color: #2a4647 !important;
                text-align: center;
                line-height: 50px;
                width: 150px;

                @media screen and (max-width: 1400px) {
                  width: 100px;
                }

                @media screen and (max-width: 768px) {
                  width: 250px;
                }

                &::before {
                  content: '';
                  display: block;
                  width: 0;
                  height: 2px;
                  background: #008d90;
                  transition: width 300ms ease;
                }

                &:hover {
                  &::before {
                    content: '';
                    display: block;
                    width: 150px;
                    height: 2px;
                    background: #008d90;
                  }
                }
              }
            }

            .navigation__item--dropdown {
              .text-wrapper {
                display: flex;
                align-items: center;
                width: 150px;
                justify-content: space-between;

                @media screen and (max-width: 1400px) {
                  justify-content: flex-start;
                }

                @media screen and (max-width: 768px) {
                  justify-content: center;
                  width: 100%;
                }
              }

              .vue-icon__wrapper {
                transition: transform ease 150ms;
              }

              &.is-active {
                .vue-icon__wrapper {
                  transform: rotate(180deg);
                }
              }
            }

          }
        }
      }

    }

    .section.navigation__services-options {
      position: fixed;
      width: 100%;
      top: 150px;
      padding: 0 15% !important;
      z-index: 15;

      @media (min-resolution: 100dpi) {
        top: 120px;
      }

      >.columns {
        background: #fff;

        .column {
          padding: 20px;
        }
      }

      .navigation__services-options__option {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .icon {
          width: 80px;
          margin: 0 20px;
        }

        .divider {
          height: 100%;
          width: 2px;
          margin: 0 20px;
          background: #008d90;
        }

        .text {
          margin: 0 20px;
          text-align: left;
          height: 100%;

          .title {
            font-size: 28px;
            font-weight: 500;
            color: #008d90;
            margin-bottom: 12px;

            @media (min-resolution: 100dpi) {
              font-size: 24px;
            }

            &:hover {
              color: #9FF882;
            }
          }

          .list {
            a {
              color: #008d90;
              display: block;
              font-size: 18px;
              font-weight: 700;

              &:hover {
                color: #9FF882;
              }
            }
          }
        }

      }

      @media screen and (max-width: 1024px){
        position: relative;
        top: unset;
      }
    }

    &.is-blurred {
      .navigation__navbar {
        background: rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(15px) saturate(100%) contrast(45%) brightness(130%);      }
    }

  }
</style>
