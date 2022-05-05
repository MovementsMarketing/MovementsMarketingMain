<template>
    <div class="navigation">
        <div class="navigation__language-selector">
          <img :class="currentLang === 'en' ? `navigation__language active` : `navigation__language`"
               @click="setLanguage('en')"
               src="@/assets/images/flags/united-kingdom.png"
          />
          <img
              :class="currentLang === 'nl' ? `navigation__language active` : `navigation__language`"
              @click="setLanguage('nl')"
              src="@/assets/images/flags/netherlands.png"
          />
          <img
              :class="currentLang === 'de' ? `navigation__language active` : `navigation__language`"
              @click="setLanguage('de')"
              src="@/assets/images/flags/germany.png"
          />
        </div>
        <div class="is-hidden-desktop">
          <div class="navigation__navbar navigation__navbar--touch">
            <router-link to="/" :class="fullLogo ? 'navigation__logo navigation__logo--large' : 'navigation__logo'"
            >
              <div class="navigation__logo">
                <img src="@/assets/images/movements-marketing-logo.png"/>
              </div>
            </router-link>
            <div class="navigation__burger" @click="onBurgerClick">
              <ul :class="isActive ? 'active' : ''">
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div class="navigation__menu" :class="isActive ? 'is-active' : ''">
              <div class="navigation__menu__items">
                <router-link to="/">
                    <span  @click="isActive=false">
                        home
                    </span>
                </router-link>
                <router-link to="/portfolio/branding-graphic-design">
                    <span  @click="isActive=false">
                        branding
                    </span>
                </router-link>
                <router-link to="/portfolio/architecture-interiors">
                    <span  @click="isActive=false">
                        architecture
                    </span>
                </router-link>
                <router-link to="/about">
                    <span  @click="isActive=false">
                        about
                    </span>
                </router-link>
                <router-link to="/contact">
                    <span  @click="isActive=false">
                        contact
                    </span>
                </router-link>
              </div>
            </div>
          </div>

        </div>
        <div class="is-hidden-touch">
            <div class="navigation__navbar navigation__navbar--desktop">
                <div class="navigation__logo">
                  <img src="@/assets/images/movements-marketing-logo.png"/>
                </div>
                <div class="navigation__item">
                  <router-link to="#about">
                    {{ $t(`navigation.about`) }}
                  </router-link>
                </div>
                <div class="navigation__item">
                  <span class="navigation__item--dropdown">
                    <span class="text-wrapper">
                      {{ $t(`navigation.services`) }}
                      <span class="m-l-20">
                        <icons icon="chevronDown" stroke="#2a4647" stroke-width="2" height="20" width="20" />
                      </span>
                    </span>
                  </span>
                </div>
                <div class="navigation__item">
                  <router-link to="#career">
                    {{ $t(`navigation.career`) }}
                  </router-link>
                </div>
              <div class="navigation__item">
                <router-link to="#contact">
                  {{ $t(`navigation.contact`) }}
                </router-link>
              </div>
              <div class="navigation__item navigation__item--button">
                <a class="button button--primary">
                  {{ $t(`navigation.contactUs`) }}
                  <span class="m-l-20">
                    <icons icon="chevronRight" stroke="#fff" stroke-width="3" height="24" width="24" />
                  </span>
                </a>
              </div>

              <div class="navigation__item navigation__item--button">
                <a class="button button--hollow">
                  <span class="text">
                                      {{ $t(`navigation.linkedInBlogs`) }}

                  </span>

                  <span class="dot">

                  </span>

                  <span class="icon-wrapper">
                    <icons icon="chevronRight" stroke-width="3" stroke="#fff" height="24" width="24" />
                  </span>
                </a>
              </div>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';

    @Component
    class Navigation extends Vue {
        isActive: boolean = false;

        onBurgerClick() {
            this.isActive = !this.isActive;
        }

      setLanguage(lang: string) {
        this.$i18n.locale = lang;
      }

      get currentLang() {
          return this.$i18n.locale
      }

        created(): void {
          console.log(this.$i18n.locale);
        }
    }
    export default Navigation;
</script>

<style lang="scss" scoped>
  .navigation {
    .navigation__language-selector {
      padding: 0 64px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      position: fixed;
      top: 0;
      width: 100%;
      height: 30px;
      background: #9DACA7;

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
      position: fixed;
      top: 30px;
      left: 0;
      padding: 20px;
      z-index: 100;

      @media screen and (max-width: 768px){
        padding: 16px 20px;
      }

      .navigation__logo {
        display: flex;
        width: 180px;
        z-index: 150;
      }

      &.navigation__navbar--desktop {
        padding: 0 64px;
        height: 140px;

        .navigation__item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 20px;
          color: #2a4647 !important;

          a:not(.button),
          .navigation__item--dropdown {
            color: #2a4647 !important;
            text-align: left;
            line-height: 50px;
            width: 150px;

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

          .navigation__item--dropdown {
            .text-wrapper {
              display: flex;
              align-items: center;
              width: 150px;
              justify-content: space-between;
            }
          }
        }

      }

      &.navigation__navbar--touch {
        .navigation__burger {
          position: relative;
          width: 30px;
          height: 30px;
          cursor: pointer;
          z-index: 150;

          @media screen and (max-width: 768px){
            width: 24px;
            height: 24px;
          }

          ul li{
            list-style: none;
            width: 100%;
            height: 4px;
            background: #000000;
            position: absolute;
            left: 0;
            transform: translateY(-50%);
            transition: 500ms;

            @media screen and (max-width: 768px){
              height: 3px;
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

        .navigation__menu {
          position: fixed;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
          background: rgba(0, 0, 0, 0.05);
          transform: translateX(120%);
          transition: transform 250ms ease-out;
          backdrop-filter: blur(10px) saturate(100%) contrast(45%) brightness(130%);

          &.is-active {
            transform: translateX(0%);
          }

          .navigation__menu__items {
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            a {
              color: white;
              font-size: 48px;
              font-weight: 900;
              font-family: 'Poppins', sans-serif;
              padding: 5px;
              text-shadow: 0 0 4px rgba(0, 0, 0, 0.5);

              &:hover {
                color: black;
              }

              @media screen and (max-width: 720px){
                font-size: 38px;
              }
            }
          }
        }
      }

    }

  }
</style>
