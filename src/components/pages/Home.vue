<template>
  <div :class="'home has-bg-gray'">
    <navigation :full-logo="true" :light-logo="true" :translate-url="true"/>

    <cover :cover-image="coverData.img" :cover-title="coverData.title" :cover-subtitle="coverData.subtitle"/>

    <div class="section is-white p-t-120">
      <div v-for="(el, index) in services" :key="`service-${index}`" class="home__service">
        <home-block :img-url="el.imgSrc" :name="el.title" :is-left="el.isLeft">
          <template #title>
            <span v-html="el.title"></span>
          </template>
          <template #text>
            <span v-html="el.text"></span>
          </template>
          <template #cta>
            <learn-more :url="el.url"/>
          </template>
        </home-block>
      </div>
    </div>

    <div id="partnerships" class="section is-white partnerships p-l-40 p-r-40 p-t-40">
      <h5 v-html="$t(`home.partnerships.partnerships`)" class="has-line-center partnerships__title"></h5>
      <div class="partnerships__slider lh-0">
        <div class="fade is-left"></div>
        <div class="partnerships__img-wrapper lh-0">
          <div v-for="(p, i) in partnerships" :key="`partner-${i}`">
            <img :src="p"/>
          </div>
        </div>
        <div class="fade is-right"></div>
      </div>
    </div>

    <div id="testimonials" class="is-white">
      <testimonials/>
    </div>

    <div id="values" class="is-white">
      <values/>
    </div>

    <div id="contact" class="section contact is-white has-padding">
      <div class="contact__title">
        <h2 v-html="$t(`home.contact.title`)" class="has-line-center"></h2>
      </div>
      <div class="columns m-0 is-multiline contact__columns">
        <div class="column is-12-tablet is-4-desktop is-relative">
          <img :src="dots" :class="{'dots': true}">

          <div class="contact__info has-small-radius-diagonal is-gray">
            <img :src="connectIcon" :class="{'connect-icon': true}">

            <div class="offices">
              <div class="office headquarters">
                {{$t(`home.contact.headquarters`)}}:
              </div>
              <div class="office is-uppercase" :class="activeOfficeIndex === 0 ? 'is-active' : ''" @click="activeOfficeIndex = 0">
                <span>
                  Sarajevo
                </span>
              </div>
<!--              <div class="office" :class="activeOfficeIndex === 1 ? 'is-active' : ''" @click="activeOfficeIndex = 1">-->
<!--                <span>-->
<!--                  Utrecht-->
<!--                </span>-->
<!--              </div>-->
<!--              <div class="office" :class="activeOfficeIndex === 2 ? 'is-active' : ''" @click="activeOfficeIndex = 2">-->
<!--                <span>-->
<!--                  Istanbul-->
<!--                </span>-->
<!--              </div>-->
            </div>

            <div class="office__info">
              <div class="office__info-data">
                <div class="office__icon">
                  <icons icon="pin" stroke-width="1" height="24" width="24" class="is-fixed"/>
                </div>
                <div>
                  <p>
                    {{offices[activeOfficeIndex].address}}
                  </p>
                  <p>
                    {{offices[activeOfficeIndex].postal}}
                  </p>
                  <p>
                    {{offices[activeOfficeIndex].country}}
                  </p>
                </div>

              </div>
              <div class="office__info-data">
                <div class="office__icon">
                  <icons icon="phone" stroke-width="1" height="24" width="24" class="is-fixed"/>
                </div>
                <p>
                  {{offices[activeOfficeIndex].phone}}
                </p>
              </div>
              <div class="office__info-data">
                <div class="office__icon">
                  <icons icon="mail" stroke-width="1" height="24" width="24" class="is-fixed"/>
                </div>
                <p style="overflow-wrap: anywhere">
                  {{offices[activeOfficeIndex].mail}}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-12-tablet is-8-desktop">
          <div class="contact__form">
            <div class="form-intro">
              <h5 v-html="$t(`home.contact.subtitle`)" ></h5>
              <p v-html="$t(`home.contact.text`)" ></p>
            </div>

            <form class="form" name="ask-question" method="post" netlify netlify-honeypot="bot-field" action="/thank-you/general/">
              <input type="hidden" name="form-name" value="ask-question" />
              <div class="columns is-multiline">
                <div class="column is-6">
                  <input
                      class="form__input" type="text" id="name" name="name" required :placeholder="$t(`home.contact.name`)"
                      @keydown="declineFirstKeys($event, ['-', ' '])"
                  >
                </div>
                <div class="column is-6">
                  <input class="form__input"  type="text" id="companyName" name="companyName" required :placeholder="$t(`home.contact.companyName`)"
                         @keydown="declineFirstKeys($event, ['-', ' '])"
                  >
                </div>
                <div class="column is-6">
                  <input class="form__input"  type="email" id="email" name="email" required  :placeholder="$t(`home.contact.email`)"
                         @keydown="declineFirstKeys($event, ['-', ' '])"
                  >
                </div>
                <div class="column is-6">
                  <input class="form__input" name="phone" id="phone" required :placeholder="$t(`home.contact.phone`)"
                         @keydown="declineFirstKeys($event, ['-', ' '])"
                  />
                </div>
                <div class="column is-12">
                  <textarea class="form__textarea"  name="message" id="message" required :placeholder="$t(`home.contact.message`)"
                            @keydown="declineFirstKeys($event, ['-', ' '])"
                  />
                </div>
                <div class="column is-12 has-text-right">
                  <button class="button button--primary m-t-10">
                    <span class="text">
                      {{ $t(`contactUs`) }}
                    </span>
                    <span class="dot"></span>
                    <span class="icon-wrapper">
                      <icons icon="arrowRight" stroke-width="3" stroke="#fff" height="20" width="20" />
                    </span>
                  </button>
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>

        <movements-footer/>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';
  import Navigation from "@/components/base/Navigation.vue";
  import Facts from "@/components/components/Facts.vue";
  import Service from "@/components/components/Service.vue";
  import Quote from "@/components/components/Quote.vue";
  import WorkInNumbers from "@/components/components/WorkInNumbers.vue";
  import Cover from "@/components/components/Cover.vue";
  import HomeBlock from "@/components/components/HomeBlock.vue";
  import LearnMore from "@/components/components/LearnMore.vue";
  import Testimonials from "@/components/components/Testimonials.vue";
  import Values from "@/components/components/Values.vue";
  import _ from 'lodash';

  @Component({
    components: {
      Navigation,
      Facts,
      Service,
      Quote,
      WorkInNumbers,
      Cover,
      HomeBlock,
      LearnMore,
      Testimonials,
      Values,
    }
  })
  class Home extends Vue {

      images = {
          coverBg: '',
          contactBg: '',
      };

    dots = require('@/assets/images/dots-green.png');
    connectIcon = require('@/assets/images/contact-connect.png');

    debouncedHandleScroll = _.debounce(this.handleScroll, 1200);

    isElementInViewport = {
      values: false,
      testimonials: false,
      partnerships: false,
      contact: false,
    }

    get coverData(){
      return {
        img: require('@/assets/images/movements-marketing-cover.png'),
        title: this.$t(`home.title`),
        subtitle: this.$t(`home.subtitle`),
      };
    }

    get routesTranslated() {
      if(this.$i18n.locale === 'nl') {
        return {
          customerExperience: '/oplossingen/customer-experience',
          endToEnd: '/oplossingen/end-to-end-sales-support',
        }
      } else if(this.$i18n.locale === 'de') {
        return {
          customerExperience: '/losungen/kundenerlebnis',
          endToEnd: '/losungen/end-to-end-vertriebsunterstutzung',
        }
      } else {
        return {
          customerExperience: '/solutions/customer-experience',
          endToEnd: '/solutions/end-to-end-sales-support',
        }
      }
    }

    get services() {
      return  [
        {
          title: this.$t(`home.services.customerExperience.title`),
          text: this.$t(`home.services.customerExperience.text`),
          url: this.routesTranslated.customerExperience,
          imgSrc: require('@/assets/images/services/movements-customer-experience.png'),
          isLeft: false,
        },
        {
          title: this.$t(`home.services.endToEnd.title`),
          text: this.$t(`home.services.endToEnd.text`),
          url: this.routesTranslated.endToEnd,
          imgSrc: require('@/assets/images/services/movements-end-to-end-sales-support.png'),
          isLeft: true,
        },
      ];
    }

    get partnerships() {
      return [
        require('@/assets/images/clients/sazas.png'),
        require('@/assets/images/clients/dak.png'),
        require('@/assets/images/clients/diagnost.png'),
        require('@/assets/images/clients/scorito.png'),
        require('@/assets/images/clients/shypple.png'),
        require('@/assets/images/clients/abc_display.png'),
        require('@/assets/images/clients/oct8ne.png'),
        require('@/assets/images/clients/trans.png'),
        require('@/assets/images/clients/x2com.png'),
        require('@/assets/images/clients/aleger.png'),

        require('@/assets/images/clients/sazas.png'),
        require('@/assets/images/clients/dak.png'),
        require('@/assets/images/clients/diagnost.png'),
        require('@/assets/images/clients/scorito.png'),
        require('@/assets/images/clients/shypple.png'),
        require('@/assets/images/clients/abc_display.png'),
        require('@/assets/images/clients/oct8ne.png'),
        require('@/assets/images/clients/trans.png'),
        require('@/assets/images/clients/x2com.png'),
        require('@/assets/images/clients/aleger.png'),
      ]
    }

      activeOfficeIndex = 0;

      offices = [
          {
              key: 'sarajevo',
              title: 'Sarajevo',
              address: 'Marka Marulića 2B',
              postal: '71000 Sarajevo',
              country: 'Bosnia and Herzegovina',
              phone: '+31 85 210 37 55',
              mail: 'info@movementsmarketing.com'
          },
          {
              key: 'utrecht',
              title: 'Utrecht',
              address: 'Beresteinseweg 34',
              postal: '1217 TJ Hilversum',
              country: 'Netherlands',
              phone: '+31 85 210 37 55',
              mail: 'info@movementsmarketing.com'
          },
          {
              key: 'istanbul',
              title: 'Istanbul',
              address: 'Kagithane merkez mah. Seckin sok. (Dap Vadisi I Ofis nr.56 )',
              postal: 'Istanbul / Kagithane',
              country: 'Turkey',
              phone: '+31 85 210 37 55',
              mail: 'info@movementsmarketing.com'
          },
      ];


    scrollToAnchor () {
      console.log('scroll to ancor')
      this.$nextTick(() => {
        if (this.$route.meta?.element) {
          const $el = document.querySelector(this.$route.meta?.element);
          $el && window.scrollTo(0, $el.offsetTop - 120);
        }
      });
    }

    // async handleFormSubmit ($event) {
    //   const form = $event.target;
    //   const body = new URLSearchParams(new FormData(form))
    //   try {
    //     const res = await fetch(form.action, { method: 'POST', body })
    //     if (res.ok) {
    //       this.$router.push({ path: '/thank-you/general' })
    //     } else {
    //       throw res
    //     }
    //   } catch (err) {
    //     console.error(err)
    //     // you don't have an error page but maybe you should add one
    //   }
    // }

    declineFirstKeys(event: KeyboardEvent, parameters: string[]){
      // @ts-ignore
      if (parameters.includes(event.key) && event.target?.selectionStart === 0) event.preventDefault();
    }

    handleScroll() {
      // @ts-ignore
      const element = this.$router.history.current?.meta?.element;

      setTimeout(() => {
        // @ts-ignore
        if(element && !this.isElementInViewport[element.substring(1)]) {
          // @ts-ignore
          // const pathArray = this.$router.history.current.fullPath.split('/');
          // pathArray.pop();

          const state = { isRouterChange: true };
          window.history.pushState(state, '',  '/');
        }
      }, 200)
    }

    mounted() {
      this.scrollToAnchor();

      window.addEventListener('scroll', this.debouncedHandleScroll);

      const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              const elementId = entry.target.id;
              this.$set(this.isElementInViewport, elementId, entry.isIntersecting);
            });
          },
          {
            root: null,
            rootMargin: '0px',
            threshold: 0.2,
          }
      );

      Object.keys(this.isElementInViewport).forEach(elementId => {
        const targetElement = document.getElementById(elementId);

        if (targetElement) {
          observer.observe(targetElement);
        }
      });
    }

    beforeDestroy() {
      window.removeEventListener('scroll', this.debouncedHandleScroll);
    }

      updated () {
        this.scrollToAnchor();
      }
  }

  export default Home;
</script>

<style lang="scss">

.home__service:not(:last-of-type){
  margin-bottom: 120px;
}

    .section.section--cover {
        min-height: calc(100vh - 160px);
        position: relative;
        background-position: center;
        overflow: hidden;

        @media (min-resolution: 100dpi) {
            min-height: calc(100vh - 130px);
        }

        @media screen  and (max-width: 1024px) {
            min-height: unset;
        }

        .video-container {
            position: absolute;
            z-index: 0;
            padding-left: 12%;
            right: 0;

            @media screen and (max-width: 1500px) {
                right: 0;
                padding: 0;

                video {
                    max-width: unset;
                    width: auto;
                    height: 100%;
                }
            }

            @media screen  and (max-width: 1024px) {
                position: relative;
                width: 100%;
                height: auto;

                video {
                    height: auto;
                    width: 100%;
                }
            }
        }

        @media screen  and (max-width: 1024px) {
            .section__mask {
                display: none;
            }
        }

            .section__content {
            text-align: left;
            height: 100%;
            min-height: calc(100vh - 160px);
            display: flex;
            flex-direction: column;
            justify-content: center;

                @media (min-resolution: 100dpi) {
                    min-height: calc(100vh - 130px);
                }

                @media screen  and (max-width: 1024px) {
                    margin-top: -200px;
                    text-align: center;
                    min-height: unset;
                    height: auto;
                }

                @media screen  and (max-width: 780px) {
                    margin-top: -120px;
                }

                @media screen  and (max-width: 460px) {
                    margin-top: -80px;
                }

                @media screen  and (max-width: 320px) {
                    margin-top: -40px;
                }

            h1 {
                font-size: 84px;

                @media (min-resolution: 100dpi) {
                    font-size: 72px;
                }

                @media screen  and (max-width: 1024px) {
                    font-size: 58px;
                    line-height: 56px;
                    padding: 20px;
                    background: #fff;
                    text-align: center;
                    width: 100%;
                    max-width: 100%;

                    &::before {
                        margin: 0 auto 20px;
                    }
                }

                @media screen  and (max-width: 780px) {
                    font-size: 46px;
                    line-height: 42px;
                }

                @media screen  and (max-width: 460px) {
                    font-size: 36px;
                    line-height: 32px;
                }

                @media screen  and (max-width: 320px) {
                    font-size: 32px;
                    line-height: 32px;
                    margin-bottom: 30px;
                }

            }

            h2 {
                color: #186267;
                font-size: 36px;
                font-style: italic;
                margin-bottom: 80px;

                @media screen  and (max-width: 1024px) {
                    font-size: 28px;
                    margin-bottom: 35px;
                }

                @media screen  and (max-width: 780px) {
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

                @media screen and (max-width: 1024px) {
                    transform: unset;
                    margin-bottom: 30px;
                }
            }
        }
    }

    .section--about {

        .about {
            position: relative;

            @media screen  and (max-width: 1500px) {
                padding: 50px 0;
            }

            @media screen  and (max-width: 1024px) {
                padding-top: 0;
                background: #fff;
            }

            .bg-image {
                @media screen  and (max-width: 1500px) {
                    position: absolute;
                    top: 0;
                    height: 100%;
                    right: 0;
                    opacity: 0.3;

                    img {
                        height: 100%;
                        max-width: unset;
                        width: auto;
                    }
                }

                @media screen  and (max-width: 1024px) {
                    position: relative;
                    width: 100%;
                    height: auto;
                    opacity: 1;

                    img {
                        height: auto;
                        max-width: 100%;
                        width: 100%;
                    }
                }
            }

            .section__content {
                position: absolute;
                top: 0;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-around;

                @media screen  and (max-width: 1500px) {
                    position: relative;

                    h1 {
                        padding-bottom: 40px;
                    }
                }

                @media screen  and (max-width: 1024px) {
                    margin-top: -150px;

                    h1 {
                        padding-bottom: 100px;
                    }
                }

                @media screen  and (max-width: 760px) {
                    margin-top: -100px;

                    h1 {
                        padding-bottom: 50px;
                    }
                }
            }

            .about__text {
                p {
                    color: #186267;
                    line-height: 26px;
                    font-size: 18px;
                    text-align: justify;
                }
            }
        }
    }

    .section--numbers {
        background: linear-gradient(90deg, #1b7679 0%, #30a1a6 100%);

        .line {
            position: absolute;
            top: -100px;
            height: 200px;
            width: 3px;
            background: #9FF882;
            left: 280px;

            @media (min-resolution: 100dpi) {
                left: 160px;
            }

            @media screen  and (max-width: 1400px) {
                left: 100px;
            }

            @media screen  and (max-width: 780px) {
                left: 80px;
            }

            @media screen  and (max-width: 460px) {
                left: 20px;
            }
        }

        .section__content {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            padding-top: 20px;

            h2 {
                color: #fff;
                font-size: 64px;

                @media (min-resolution: 100dpi) {
                    font-size: 58px;
                    line-height: 52px;
                }

                @media screen  and (max-width: 1024px) {
                    font-size: 52px;
                    line-height: 50px;
                }

                @media screen  and (max-width: 780px) {
                    font-size: 48px;
                    line-height: 46px;
                }

                @media screen  and (max-width: 460px) {
                    font-size: 38px;
                    line-height: 40px;
                }

                @media screen  and (max-width: 340px) {
                    font-size: 38px;
                    line-height: 36px;
                }


                .is-highlighted {
                    color: #9FF882;
                }
            }

            @media screen  and (max-width: 1500px) {
                position: relative;
            }
        }

        .bg-image {
            @media screen  and (max-width: 1500px) {
                position: absolute;
                bottom: 0;
            }
        }
    }

    .section--quote {
        background: #fff;

        h3 {
            font-size: 58px;
            color: #008d90;
            line-height: 62px;
            font-weight: 200;
            margin: 30px 0;
        }
    }

    .section.section--services {
        position: relative;

        @media screen and (max-width: 768px) {
            padding-top: 0px;
        }

        .section__content {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;

            @media screen and (max-width: 768px) {
                margin-top: 30px;
            }

            h1 {
                max-width: 100%;
                text-align: left;
                color: #fff;
                margin-bottom: 0px;
                position: relative;
                z-index: 2;

                .is-highlighted {
                    display: block;
                    white-space: nowrap;

                    @media screen  and (max-width: 768px) {
                        white-space: unset;
                    }
                }

                @media screen  and (max-width: 1024px) {
                    margin-bottom: 40px;
                }
            }

            p {
                color: #fff;
                line-height: 26px;
                font-size: 18px;
                text-align: justify;
                margin-bottom: 200px;

                @media screen  and (max-width: 1024px) {
                    margin-bottom: 40px;
                }
            }
        }

        .services-cover {
            position: relative;

            .services-cover__mask {
                position: absolute;

                @media screen  and (max-width: 1024px) {
                    display: none;
                }

              @media screen  and (min-width: 1920px) {
                display: none;
              }
            }

            @media screen  and (max-width: 1400px) {
                .services-cover__image {
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    overflow: hidden;

                    img {
                        max-width: unset;
                        width: auto;
                        height: 100%;
                    }
                }
            }

            @media screen  and (max-width: 1024px) {
                .services-cover__image {
                    position: relative;
                    min-height: 840px;

                    img {
                        position: absolute;
                        filter: grayscale(1);
                    }
                }
            }

            @media screen  and (max-width: 768px) {
                .services-cover__image {
                    position: relative;
                    min-height: unset;
                    margin: 0;

                    img {
                        position: relative;
                        filter: none;
                        width: 100%;
                        height: auto;
                    }
                }
            }



        }

        .services__list {
            position: absolute;
            bottom: 50px;
            width: 100%;
            display: flex;
            justify-content: flex-end;
            padding: 0 320px;

            @media (min-resolution: 100dpi) {
                padding: 0 200px;
            }

            @media screen  and (max-width: 1400px) {
                padding: 0 150px;
            }

            @media screen  and (max-width: 1024px) {
                flex-direction: column;
                bottom: 20px;
            }

            @media screen  and (max-width: 768px) {
                position: relative;
                padding: 0 50px;
                align-items: center;

                >div {
                    width: 80%;
                    margin-right: 20px;
                }
            }
        }

        &.section--services--outbound {
            background: linear-gradient(90deg, #186267 0%, #186267 20%, #9FF882 100%);

          @media screen  and (max-width: 7680px) {
            background: linear-gradient(90deg, #186267 0%, #6abe77 100%);
          }

            @media screen  and (max-width: 768px) {
                >.columns {
                    display: flex;
                    flex-direction: column-reverse;
                }
            }

            .section__content {
                padding-right: 80px !important;

                @media screen  and (max-width: 1400px) {
                    padding-right: 40px !important;
                }

                @media screen  and (max-width: 1024px) {
                    padding-right: 20px !important;
                }

                @media screen  and (max-width: 768px) {
                    padding-right: 100px !important;
                }

                @media screen  and (max-width: 460px) {
                    padding-right: 50px !important;
                }

                @media screen  and (max-width: 320px) {
                    padding-right: 30px !important;
                }
            }

            .services-cover {
                .services-cover__mask {
                    left: 0;
                }
            }

            .services__list {
                @media screen  and (max-width: 1024px) {
                    align-items: end;
                    padding-right: 40px;
                }

                @media screen  and (max-width: 768px) {
                    align-items: center;
                    padding-right: 50px;
                }
            }

        }

        &.section--services--inbound {
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
                }

                @media screen  and (max-width: 768px) {
                    padding-left: 100px !important;
                }

                @media screen  and (max-width: 460px) {
                    padding-left: 50px !important;
                }

                @media screen  and (max-width: 320px) {
                    padding-left: 30px !important;
                }

            }

            .services-cover {
              @media screen  and (max-width: 768px) {
                padding: 0;
              }

                .services-cover__mask {
                    right: 12px;
                }
            }

            .services__list {
                @media screen  and (max-width: 1024px) {
                    padding-left: 20px;

                }

                @media screen  and (max-width: 768px) {
                    align-items: center;
                    padding-left: 50px;
                }
            }
        }

    }

    .section.section--work {
        margin-top: -5px;
        background: #ECECEC;
        position: relative;
        z-index: 1;
        padding: 60px 0;

      @media screen  and (max-width: 1600px) {
        padding: 40px 0;
      }

        .section__content {
            h2 {
              max-width: 100%;
              text-align: left;
              margin-bottom: 50px;
              display: block;
              white-space: nowrap;
              font-size: 60px;

                @media screen  and (max-width: 1600px) {
                    white-space: unset;
                    line-height: 48px;
                }


              @media screen  and (max-width: 460px) {
                font-size: 36px;
                line-height: 42px;
              }
            }

            p {
                max-width: 75%;
                text-align: left;
                margin-bottom: 50px;

                @media screen  and (max-width: 1024px) {
                    max-width: 100%;
                }

              @media screen  and (max-width: 768px) {
                text-align: justify;
              }
            }


            .button {
                transform: translateX(-20px);
                transition: transform ease 350ms;

                &:hover {
                    transform: translateX(0px);
                }
            }
        }

        .work__img-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;

            @media screen  and (max-width: 1024px) {
                margin-top: 30px;
            }
        }
    }

    .section.section--clients {
        margin-top: -12px;
    }

    .partnerships {
      .partnerships__title {
        margin-bottom: 100px;

        @media screen  and (max-width: 768px) {
          margin-bottom: 60px;
        }

      }

      .partnerships__slider {
        overflow: hidden;
        position: relative;
        padding-bottom: 20px;

        .fade {
          position: absolute;
          height: 100%;
          width: 240px;
          z-index: 1;
          top: 0;

          @media screen  and (max-width: 1400px) {
            width: 100px;
          }

          @media screen  and (max-width: 768px) {
            width: 40px;
          }

          &.is-left {
            left: 0;
            background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
          }

          &.is-right {
            right: 0;
            background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
          }
        }

        .partnerships__img-wrapper {
          width: 300%;
          position: relative;
          animation-name: slide-left-right;
          animation-duration: 100000ms;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          display: flex;
          align-items: center;
          gap: 100px;

          @media screen  and (max-width: 1400px) {
            width: 600%;
            animation-name: slide-left-right-medium;
          }

          @media screen  and (max-width: 768px) {
            width: 1000%;
            gap: 60px;
            animation-name: slide-left-right-small;
          }

        }
      }
    }

.contact {

  .contact__columns {
    > .column {
      padding: 20px;

      @media screen and (max-width: 1024px) {
        padding: 20px 0 !important;
      }
    }
  }

  .dots {
    position: absolute;
    left: -60px;
    top: -60px;
    z-index: 0;
    width: 160px;

    @media (min-resolution: 100dpi) {
      width: 140px;
    }

    @media (min-resolution: 220dpi) {
      width: 120px;
      left: -40px;
      top: -40px;
    }

    @media screen and (max-width: 780px) {
      width: 100px;
      top: -40px;
      left: -40px;
    }
  }

  .contact__info {
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    overflow: hidden;
    z-index: 1;
    height: 100%;

    @media screen and (max-width: 780px) {
      padding: 20px;
    }

    .connect-icon {
      position: absolute;
      right: -50px;
      top: -50px;
      max-width: 240px;
      z-index: 0;
    }

    .offices {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 5px;
      margin: 60px 0;
      z-index: 1;
      padding-left: 32px;

      .office {
        font-weight: 700;
        color: #186267;
        //text-transform: uppercase;
        //opacity: 0.5;
        //cursor: pointer;

        &.headquarters {
          font-weight: 500;
        }

        &.is-active {
          opacity: 1;
        }

        //&:hover {
        //  opacity: 1;
        //  color: #69BC77;
        //}
      }
    }

    .office__info {
      display: flex;
      flex-direction: column;
      gap: 20px;

      .office__info-data {
        display: flex;
        align-items: center;
        gap: 10px;

        p {
          text-align: left;
          font-size: 15px;
          line-height: 20px;

          @media (min-resolution: 200dpi) {
            font-size: 14px;
          }

          @media (min-resolution: 220dpi) {
            font-size: 12px;
            line-height: 16px;
          }

          @media screen and (max-width: 1600px) {
            font-size: 13px;
          }
        }
      }
    }
  }
}


</style>
