<template>
    <div :class="'home has-bg-gray'">
        <navigation :full-logo="true" :light-logo="true"/>

        <div class="section section--cover">
            <div class="video-container">
                <video autoplay muted loop playsinline>
                    <source src="@/assets/video/movements_marketing.mp4" type="video/mp4" />
                </video>
                <div class="caption">
                </div>
            </div>
            <div class="section__mask"></div>
            <div class="section__content">
                <h1>
                    <span class="is-highlighted">
                        {{ $t(`home.title`) }}
                    </span>
                </h1>
                <h2>
                    {{ $t(`home.subtitle`) }}
                </h2>
                <div>
                    <router-link to="/contact" class="button button--hollow">
                        <span class="text">
                            {{ $t(`navigation.contactUs`) }}
                        </span>
                        <span class="dot"></span>
                        <span class="icon-wrapper">
                            <icons icon="chevronRight" stroke-width="3" stroke="#fff" height="24" width="24" />
                        </span>
                    </router-link>
                </div>

            </div>
        </div>

        <div class="section-divider"></div>

        <div id="about" class="section section--about">
            <facts :facts="[$t(`home.about.facts.qualitativeTelemarketing`), $t(`home.about.facts.multilingualTelemarketers`), $t(`home.about.facts.costEffectiveResults`)]"></facts>
            <div class="about has-bg-white">
                <div class="bg-image has-text-right">
                    <img src="@/assets/images/backgrounds/movements_about-us_map.png" alt="Movements Marketing Locations">
                </div>
                <div class="section__content has-text-left">
                    <h1 v-html="$t(`home.about.aboutUs.aboutUs`)" class="m-b-0"></h1>
                    <div class="columns">
                        <div class="column is-12-tablet is-9-desktop">
                            <div class="columns about__text is-variable is-6 is-multiline">
                                <div class="column is-12-tablet is-5-desktop">
                                    <p v-html="$t(`home.about.aboutUs.p1`)"></p>
                                </div>
                                <div class="column is-12-tablet is-5-desktop">
                                    <p v-html="$t(`home.about.aboutUs.p2`)"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="section section--numbers" id="numbersSection" style="overflow: visible">
            <div class="our-numbers">
                <div class="bg-image">
                    <img src="@/assets/images/backgrounds/movements_globe_bg.png" alt="Movements Marketing Globe Background">
                </div>
                <div class="line"></div>
                <div class="section__content has-text-left">
                    <div class="columns p-t-40 is-variable is-6 is-multiline">
                        <div class="column is-12-tablet is-6-desktop is-7-widescreen">
                            <h2 v-html="$t(`home.numbers.ourNumbers`)" class="m-b-0"></h2>
                        </div>
                        <div class="column is-12-tablet is-6-desktop is-5-widescreen">
                            <div class="columns is-multiline is-mobile">
                                <div class="column is-6">
                                    <div class="number-wrapper">
                                        <p class="digit"> 598 </p>
                                        <p class="text"> {{$t(`home.numbers.projects`)}} </p>
                                    </div>
                                </div>
                                <div class="column is-6">
                                    <div class="number-wrapper">
                                        <p class="digit"> 09 </p>
                                        <p class="text"> {{$t(`home.numbers.languages`)}} </p>
                                    </div>
                                </div>
                                <div class="column is-6">
                                    <div class="number-wrapper">
                                        <p class="digit"> 03 </p>
                                        <p class="text"> {{$t(`home.numbers.offices`)}} </p>
                                    </div>
                                </div>
                                <div class="column is-6">
                                    <div class="number-wrapper">
                                        <p class="digit"> 04 </p>
                                        <p class="text"> {{$t(`home.numbers.teams`)}} </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <quote :text="$t(`home.quote`)"/>

        <div id="outbound" class="section section--services section--services--outbound">
            <div class="columns m-0">
                <div class="section__content column is-8-tablet is-6-desktop">
                    <h1 v-html="$t(`home.services.outbound.title`)"></h1>
                    <p v-html="$t(`home.services.outbound.text`)"></p>
                </div>
                <div class="services-cover column is-4-tablet is-6-desktop p-0">
                    <div class="services-cover__mask">
                        <img src="@/assets/images/backgrounds/blue-mask.png" alt="Movements Marketing Image Mask">
                    </div>
                    <div class="services-cover__image has-text-right">
                        <img src="@/assets/images/backgrounds/movements_customer-service_outbound_cover.png" alt="Outbound Lead Generation">
                    </div>
                </div>
            </div>
            <div class="services__list">
                <div v-for="(el, index) in services.outbound" :key="`outbound-${index}`" class="m-l-20">
                    <service :name="el.name" :url="el.url" :imgSrc="el.src" />
                </div>
            </div>
        </div>

        <div class="section section--work">
            <div class="section__content columns m-0 is-multiline">
                <div class="column is-12-tablet is-6-desktop has-text-left">
                    <h2 v-html="$t(`home.work.title`)"></h2>
                    <p v-html="$t(`home.work.text`)"></p>
                    <a class="button button--hollow" href="https://issuu.com/movementsmarketing" target="_blank">
                        <span class="text">
                            {{ $t(`home.work.button`) }}
                        </span>
                        <span class="dot"></span>
                        <span class="icon-wrapper">
                            <icons icon="chevronsDown" stroke-width="3" stroke="#fff" height="24" width="24" />
                        </span>
                    </a>
                </div>
                <div class="column is-12-tablet is-6-desktop work__img-wrapper">
                    <img src="@/assets/images/backgrounds/movements_work_cover.png" alt="Movements Marketing Work Practice">
                </div>
            </div>
        </div>

        <div id="inbound" class="section section--services section--services--inbound">
            <div class="columns m-0">
                <div class="services-cover column is-4-tablet is-6-desktop p-t-0 p-l-0 p-b-0 l-h-0">
                    <div class="services-cover__mask">
                        <img src="@/assets/images/backgrounds/yellow-mask.png" alt="Movements Marketing Image Mask">
                    </div>
                    <div class="services-cover__image has-text-left">
                        <img src="@/assets/images/backgrounds/movements_customer-service_inbound_cover.png" alt="Inbound Customer Service">
                    </div>
                </div>
                <div class="section__content column is-8-tablet is-6-desktop">
                    <h1 v-html="$t(`home.services.inbound.title`)"></h1>
                    <p v-html="$t(`home.services.inbound.text`)"></p>
                </div>
            </div>
            <div class="services__list">
                <div v-for="(el, index) in services.inbound" :key="`inbound-${index}`" class="m-l-20">
                    <service :name="el.name" :url="el.url" :imgSrc="el.src" />
                </div>
            </div>
        </div>

        <div id="clients" class="section section--clients">
            <slider :slidesData="clients"/>
        </div>

        <quote :text="$t(`home.telemarketers`)" cssClass="is-gradient"/>

        <div class="section--telemarketers lh-0">
        <div class="section--telemarketers__wrapper lh-0">

            <img src="@/assets/images/backgrounds/movements_marketing_telemarketers.jpg" alt="Movements Marketing Telemarketers">
        </div>
        </div>

        <div class="section-divider section-divider--green"></div>

        <div id="contact" class="section section--contact">
            <div class="contact__title">
                <h1 v-html="$t(`home.contact.title`)"></h1>
            </div>
            <div class="columns m-0 is-multiline contact__columns">
                <div class="column is-12-tablet is-6-desktop p-0 lh-0" style="position: relative; background: #ffffff;">
                    <img src="@/assets/images/backgrounds/movemens_contact_bg.png" alt="Movements Marketing Contact"/>
                    <div class="offices">
                        <div class="columns is-multiline is-mobile">
                            <div class="column is-4 has-text-left">
                                <div class="office" :class="activeOfficeIndex === 0 ? 'is-active' : ''" @click="activeOfficeIndex = 0">
                                    <span>
                                        Sarajevo
                                    </span>
                                </div>
                            </div>
                            <div class="column is-4 has-text-centered">
                                <div class="office" :class="activeOfficeIndex === 1 ? 'is-active' : ''" @click="activeOfficeIndex = 1">
                                   <span>
                                       Utrecht
                                   </span>
                                </div>
                            </div>
                            <div class="column is-4 has-text-right">
                                <div class="office" :class="activeOfficeIndex === 2 ? 'is-active' : ''" @click="activeOfficeIndex = 2">
                                    <span>
                                        Istanbul
                                    </span>
                                </div>
                            </div>
                            <div class="column is-12">
                                <div class="office-data">
                                    <p>
                                        {{offices[activeOfficeIndex].address}}
                                    </p>
                                    <p>
                                        {{offices[activeOfficeIndex].postal}}
                                    </p>
                                    <p>
                                        {{offices[activeOfficeIndex].country}}
                                    </p>
                                    <p>
                                        {{offices[activeOfficeIndex].phone}}
                                    </p>
                                    <p>
                                        {{offices[activeOfficeIndex].mail}}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column is-12-tablet is-6-desktop">
                    <div class="contact__form">
                        <form class="form" name="ask-question" method="post" netlify netlify-honeypot="bot-field" action="/thank-you/general/">
                            <input type="hidden" name="form-name" value="ask-question" />
                            <div class="columns is-multiline">
                                <div class="column is-6">
                                    <input class="form__input" type="text" id="name" name="name" required :placeholder="$t(`home.contact.name`)">
                                </div>
                                <div class="column is-6">
                                    <input class="form__input"  type="text" id="companyName" name="companyName" required :placeholder="$t(`home.contact.companyName`)">
                                </div>
                                <div class="column is-6">
                                    <input class="form__input"  type="email" id="email" name="email" required  :placeholder="$t(`home.contact.email`)">
                                </div>
                                <div class="column is-6">
                                    <input class="form__input" name="phone" id="phone" required :placeholder="$t(`home.contact.phone`)"/>
                                </div>
                                <div class="column is-12">
                                    <textarea class="form__textarea"  name="message" id="message" required :placeholder="$t(`home.contact.message`)"/>
                                </div>
                                <div class="column is-12 has-text-right">
                                    <button class="button button--hollow m-t-10">
                                        <span class="text">
                                            {{ $t(`home.contactUs`) }}
                                        </span>
                                        <span class="dot"></span>
                                        <span class="icon-wrapper">
                                            <icons icon="chevronRight" stroke-width="3" stroke="#fff" height="24" width="24" />
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

  @Component({
    components: {
        Navigation,
        Facts,
        Service,
        Quote,
    }
  })
  class Home extends Vue {

      images = {
          coverBg: '',
          contactBg: '',
      };

      get clients() {
        return [
          {
            name: 'Scorito',
            text: this.$t(`home.clients.scorito.text`),
            img: require('@/assets/images/clients/scorito_bg.png'),
            logo: require('@/assets/images/clients/scorito_logo.png'),
          },
          {
            name: 'Dak',
            text: this.$t(`home.clients.dak.text`),
            img: require('@/assets/images/clients/dak_bg.png'),
            logo: require('@/assets/images/clients/dak_logo.png'),
          },
          {
            name: 'Shypple',
            text: this.$t(`home.clients.shypple.text`),
            img: require('@/assets/images/clients/shypple_bg.png'),
            logo: require('@/assets/images/clients/shypple_logo.png'),
          },
        ];
      }

      get services() {
        return  {
          outbound: [
            {
              name: this.$t(`navigation.servicesOptions.telemarketing`),
              url: '/service/b2b-telemarketing',
              src: require('@/assets/images/services/icons/b2b_telemarketing.png'),
            },
            {
              name: this.$t(`navigation.servicesOptions.leadGeneration`),
              url: '/service/b2b-telemarketing',
              src: require('@/assets/images/services/icons/lead_generation.webp'),
            },
            {
              name: this.$t(`navigation.servicesOptions.newAppointments`),
              url: '/service/b2b-telemarketing',
              src: require('@/assets/images/services/icons/new_appointments.webp'),
            },
            {
              name: this.$t(`navigation.servicesOptions.dataEnrichment`),
              url: '/service/b2b-telemarketing',
              src: require('@/assets/images/services/icons/data_enrichment.webp'),
            },
          ],
          inbound: [
            {
              name: this.$t(`navigation.servicesOptions.customerService`),
              url: '/service/customer-service',
              src: require('@/assets/images/services/icons/customer_service.png'),
            },
            {
              name: this.$t(`navigation.servicesOptions.answeringService`),
              url: '/service/answering-service',
              src: require('@/assets/images/services/icons/answering_service.png'),
            },
            {
              name: this.$t(`navigation.servicesOptions.liveChat`),
              url: '/service/live-chat',
              src: require('@/assets/images/services/icons/live_chat.png'),
            },
            {
              name: this.$t(`navigation.servicesOptions.emailManagement`),
              url: '/service/email-management',
              src: require('@/assets/images/services/icons/email_management.png'),
            },
            {
              name: this.$t(`navigation.servicesOptions.socialWebcare`),
              url: '/service/social-webcare',
              src: require('@/assets/images/services/icons/social_webcare.png'),
            },
          ],
        };
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
      this.$nextTick(() => {
        if (this.$route.meta?.element) {
          const $el = document.querySelector(this.$route.meta?.element);
          $el && window.scrollTo(0, $el.offsetTop);
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

      created() {
          this.images.coverBg = require('@/assets/images/backgrounds/movements_call-center_bg.png');
          this.images.contactBg = require('@/assets/images/backgrounds/movemens_contact_bg.png');
      }

      mounted () {
         this.scrollToAnchor();
      }

      updated () {
        this.scrollToAnchor();
      }
  }

  export default Home;
</script>

<style lang="scss">
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

            .number-wrapper {
                padding: 10px 20px;

                .digit {
                    font-size: 84px;
                    line-height: 92px;
                    color: #fff;
                    font-weight: 900;

                    @media (min-resolution: 100dpi) {
                        font-size: 68px;
                        line-height: 72px;
                    }

                    @media screen  and (max-width: 780px) {
                        font-size: 78px;
                        line-height: 84px;
                    }

                    @media screen  and (max-width: 460px) {
                        font-size: 72px;
                        line-height: 78px;
                    }

                    @media screen  and (max-width: 460px) {
                        font-size: 68px;
                        line-height: 72px;
                    }

                    &::after {
                        content: '';
                        display: block;
                        width: 45px;
                        height: 3px;
                        background: #9FF882;

                        @media (min-resolution: 100dpi) {
                            width: 40px;
                        }
                    }
                }

                .text {
                    color: #fff;
                    font-size: 18px;
                    padding-top: 15px;

                    @media (min-resolution: 100dpi) {
                      padding-top: 10px;
                      font-size: 17px;
                      line-height: 20px;
                    }
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

    .section.section--telemarketers-title {
        background: linear-gradient(90deg, #186267 0%, #186267 20%, #9FF882 100%);

        h3 {
            font-size: 58px;
            color: #fff;
            line-height: 62px;
            font-weight: 200;
            margin: 30px 0;
        }
    }

    .section--telemarketers {
        overflow: hidden;
    }

    .section--telemarketers__wrapper {
        width: 300vw;
        position: relative;
        animation-name: slide-left-right;
        animation-duration: 60000ms;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }

    .section.section--contact {
        position: relative;

        .contact__title {
            position: absolute;
            top: 30px;
            width: 100%;
            z-index: 6;
            padding: 50px 0;

          @media screen and (max-width: 1400px){
            padding-top: 20px;
          }

          @media screen and (max-width: 768px){
            position: relative;
          }

            h1 {
                font-size: 72px;
                line-height: 76px;
                color: #008d90;
                display: inline-block;
                position: relative;

                @media (min-resolution: 100dpi) {
                    font-size: 62px;
                    line-height: 68px;
                }

              @media screen and (max-width: 460px){
                font-size: 42px;
                line-height: 46px;
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

        .offices {
            position: absolute;
            top: 0;
            display: flex;
            width: 100%;
            height: 100%;
            justify-content: center;
            align-items: center;
            padding-left: 320px;
            padding-right: 100px;

            @media (min-resolution: 100dpi) {
                padding-left: 200px;
            }

          @media screen and (max-width: 1400px){
            padding-left: 100px;
            padding-right: 50px;
          }

          @media screen and (max-width: 1024px){
            padding-right: 50px;
            padding-left: 50px;
          }

          @media screen and (max-width: 460px){
            padding-right: 20px;
            padding-left: 20px;
          }

            .columns {
                width: 100%;

                .office {
                    color: #008d90;
                    font-size: 32px;
                    cursor: pointer;

                  @media screen and (max-width: 460px){
                    font-size: 24px;
                  }

                  @media screen and (max-width: 340px){
                    font-size: 22px;
                  }

                  @media screen and (max-width: 320px){
                    font-size: 20px;
                  }

                  @media screen and (max-width: 300px){
                    font-size: 18px;
                  }

                    span {
                        position: relative;
                        line-height: 34px;
                    }

                    &.is-active {
                        font-weight: 700;

                        span {
                            &::after {
                                content: '';
                                display: block;
                                width: 100%;
                                height: 3px;
                                background: #9FF882;
                                left: 0;
                                bottom: -2px;
                                position: absolute;
                            }
                        }

                    }
                }

                .office-data {
                    background: #fff;
                    border-radius: 30px;
                    box-shadow: 1px 1px 12px rgb(0 0 0 / 20%);
                    padding: 20px 40px;

                  @media screen and (max-width: 460px){
                    padding: 10px 20px;
                  }

                    p {
                        color: #008d90;
                        font-weight: 600;
                        font-size: 15px;
                        line-height: 28px;
                        text-align: left;

                      @media screen and (max-width: 460px){
                        font-size: 13px;
                      }
                    }
                }
            }
        }

        .contact__form {
            display: flex;
            width: 100%;
            height: 100%;
            justify-content: center;
            align-items: center;
            padding-right: 320px;
            padding-left: 100px;
            padding-top: 70px;

            @media (min-resolution: 100dpi) {
                padding-right: 200px;
            }

          @media screen and (max-width: 1400px){
            padding-right: 100px;
            padding-left: 50px;
            padding-top: 150px;

            @media screen and (max-width: 1024px){
              padding-right: 50px;
              padding-left: 50px;
              padding-top: 150px;
              padding-bottom: 50px;
            }

            @media screen and (max-width: 768px){
              padding: 20px;

              form {
                width: 100%;
              }
            }
          }
        }

      .contact__columns {
        @media screen and (max-width: 1024px){
          flex-direction: column-reverse;
        }

        @media screen and (max-width: 768px){
          display: flex;
        }
      }
    }


</style>
