<template>
    <div :class="'home'">
        <navigation :full-logo="true" :light-logo="true"/>

        <div class="section section--cover" :style="`background-image: url(${images.coverBg});`">
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
                    <a class="button button--hollow">
                        <span class="text">
                            {{ $t(`navigation.contactUs`) }}
                        </span>
                        <span class="dot"></span>
                        <span class="icon-wrapper">
                    <icons icon="chevronRight" stroke-width="3" stroke="#fff" height="24" width="24" />
                  </span>
                    </a>
                </div>

            </div>
        </div>

        <div class="section-divider"></div>

        <div id="about" class="section section--about">
            <facts :facts="[$t(`home.about.facts.qualitativeTelemarketing`), $t(`home.about.facts.multilingualTelemarketers`), $t(`home.about.facts.costEffectiveResults`)]"></facts>
<!--            <div class="facts m-b-20 m-t-20">-->
<!--                <div class="fact">-->
<!--                    <span class="icon-wrapper">-->
<!--                        <icons icon="check" stroke="#fff" stroke-width="2" height="18" width="18" />-->
<!--                    </span>-->
<!--                    {{ $t(`home.about.facts.qualitativeTelemarketing`) }}-->
<!--                </div>-->
<!--                <div class="fact-divider"></div>-->
<!--                <div class="fact">-->
<!--                    <span class="icon-wrapper">-->
<!--                        <icons icon="check" stroke="#fff" stroke-width="2" height="18" width="18" />-->
<!--                    </span>-->
<!--                    {{ $t(`home.about.facts.multilingualTelemarketers`) }}-->
<!--                </div>-->
<!--                <div class="fact-divider"></div>-->
<!--                <div class="fact">-->
<!--                    <span class="icon-wrapper">-->
<!--                        <icons icon="check" stroke="#fff" stroke-width="2" height="18" width="18" />-->
<!--                    </span>-->
<!--                    {{ $t(`home.about.facts.costEffectiveResults`) }}-->
<!--                </div>-->
<!--            </div>-->
            <div class="about">
                <div class="bg-image">
                    <img src="@/assets/images/backgrounds/movements_about-us_map.png">
                </div>
                <div class="section__content has-text-left">
                    <h1 v-html="$t(`home.about.aboutUs.aboutUs`)" class="m-b-0"></h1>
                    <div class="columns">
                        <div class="column is-10">
                            <div class="columns about__text is-variable is-8">
                                <div class="column is-5">
                                    <p v-html="$t(`home.about.aboutUs.p1`)"></p>
                                </div>
                                <div class="column is-5">
                                    <p v-html="$t(`home.about.aboutUs.p2`)"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="section section--numbers" id="numbersSection">
            <div class="our-numbers">
                <div class="bg-image">
                    <img src="@/assets/images/backgrounds/movements_globe_bg.png">
                </div>
                <div class="line"></div>
                <div class="section__content has-text-left">
                    <div class="columns p-t-40 is-variable is-6">
                        <div class="column is-7">
                            <h2 v-html="$t(`home.numbers.ourNumbers`)" class="m-b-0"></h2>
                        </div>
                        <div class="column is-5">
                            <div class="columns is-multiline">
                                <div class="column is-6">
                                    <div class="number-wrapper">
                                        <p class="digit"> {{ ourNumbers.projects.current }} </p>
                                        <p class="text"> {{$t(`home.numbers.projects`)}} </p>
                                    </div>
                                </div>
                                <div class="column is-6">
                                    <div class="number-wrapper">
                                        <p class="digit"> 0{{ ourNumbers.languages.current }} </p>
                                        <p class="text"> {{$t(`home.numbers.languages`)}} </p>
                                    </div>
                                </div>
                                <div class="column is-6">
                                    <div class="number-wrapper">
                                        <p class="digit"> 0{{ ourNumbers.offices.current }} </p>
                                        <p class="text"> {{$t(`home.numbers.offices`)}} </p>
                                    </div>
                                </div>
                                <div class="column is-6">
                                    <div class="number-wrapper">
                                        <p class="digit"> 0{{ ourNumbers.teams.current }} </p>
                                        <p class="text"> {{$t(`home.numbers.teams`)}} </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="section section--quote">
            <div class="section__content">
                <h3>
                    {{ $t(`home.quote`) }}
                </h3>
            </div>
        </div>

        <div id="outbound" class="section section--services section--services--outbound columns m-0">
            <div class="section__content column is-6">
                <h1 v-html="$t(`home.services.outbound.title`)"></h1>
                <p v-html="$t(`home.services.outbound.text`)"></p>
            </div>
            <div class="services-cover column is-6 p-0">
                <div class="services-cover__mask">
                    <img src="@/assets/images/backgrounds/blue-mask.png">
                </div>
                <div class="services-cover__image">
                    <img src="@/assets/images/backgrounds/movements_customer-service_outbound_cover.png">
                </div>
            </div>
        </div>

        <div class="section section--work">
            <div class="section__content columns m-0">
                <div class="column is-6 has-text-left">
                    <h2 v-html="$t(`home.work.title`)"></h2>
                    <p v-html="$t(`home.work.text`)"></p>
                    <a class="button button--hollow">
                        <span class="text">
                            {{ $t(`home.work.button`) }}
                        </span>
                        <span class="dot"></span>
                        <span class="icon-wrapper">
                            <icons icon="chevronsDown" stroke-width="3" stroke="#fff" height="24" width="24" />
                        </span>
                    </a>
                </div>
                <div class="column is-6">
                    <img src="@/assets/images/backgrounds/movements_work_cover.png">
                </div>
            </div>
        </div>

        <div id="inbound" class="section section--services section--services--inbound columns m-0">
            <div class="services-cover column is-6 p-t-0 p-l-0 p-b-0">
                <div class="services-cover__mask">
                    <img src="@/assets/images/backgrounds/yellow-mask.png">
                </div>
                <div class="services-cover__image">
                    <img src="@/assets/images/backgrounds/movements_customer-service_inbound_cover.png">
                </div>
            </div>
            <div class="section__content column is-6">
                <h1 v-html="$t(`home.services.inbound.title`)"></h1>
                <p v-html="$t(`home.services.inbound.text`)"></p>
            </div>
        </div>

        <div class="section section--clients">
            <slider :slidesData="clients"/>
        </div>

        <div class="section section--telemarketers-title">
            <div class="section__content">
                <h3 v-html="$t(`home.telemarketers`)">
                </h3>
            </div>
        </div>

        <div class="section--telemarketers lh-0">
            <img src="@/assets/images/backgrounds/movements_marketing_telemarketers.jpg">
        </div>

        <div class="section-divider section-divider--green"></div>

        <div id="contact" class="section section--contact">
            <div class="contact__title">
                <h1 v-html="$t(`home.contact.title`)"></h1>
            </div>
            <div class="columns m-0">
                <div class="column is-6 p-l-0 p-t-0 p-b-0 lh-0" style="position: relative">
                    <img src="@/assets/images/backgrounds/movemens_contact_bg.png"/>
                    <div class="offices">
                        <div class="columns is-multiline">
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
                <div class="column is-6">

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

  @Component({
    components: {
        Navigation,
        Facts,
    }
  })
  class Home extends Vue {

      images = {
          coverBg: '',
          contactBg: '',
      };

      clients: any[];

      ourNumbers : {
          [key: string]: {current: number, target: number, step: number, timer: any}
      } = {
          languages: {
              current: 0,
              target: 9,
              step: 1,
              timer: 0,
          },
          projects:{
              current: 0,
              target: 598,
              step: 62,
              timer: 0,
          },
          offices: {
              current: 0,
              target: 3,
              step: 1,
              timer: 0,

          },
          teams: {
              current: 0,
              target: 7,
              step: 1,
              timer: 0,

          }
      };

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
              address: 'Marka Marulića 2B',
              postal: '71000 Utrecht',
              country: 'Bosnia and Herzegovina',
              phone: '+31 85 210 37 55',
              mail: 'info@movementsmarketing.com'
          },
          {
              key: 'istanbul',
              title: 'Istanbul',
              address: 'Marka Marulića 2B',
              postal: '71000 Istanbul',
              country: 'Bosnia and Herzegovina',
              phone: '+31 85 210 37 55',
              mail: 'info@movementsmarketing.com'
          },
      ];

      onScroll() {
          let targetTop = document.querySelector('#numbersSection')?.getBoundingClientRect().top,
              targetBottom = document.querySelector('#numbersSection')?.getBoundingClientRect().bottom,
              bottomPosition = window.innerHeight - 200;

          if(!targetTop || !targetBottom) return;

          if (( targetTop >= 50 && targetTop <= bottomPosition ) || ( targetBottom >= 50 && targetBottom <= bottomPosition )) {
              Object.keys(this.ourNumbers).forEach(key => {

                  let timer = setInterval(() => {
                      if(this.ourNumbers[key].target - this.ourNumbers[key].current >= this.ourNumbers[key].step) {
                          Vue.nextTick(() => {
                              Vue.set(this.ourNumbers[key], 'current', (this.ourNumbers[key].current + this.ourNumbers[key].step));
                          });
                      } else {
                          Vue.nextTick(() => {
                              this.ourNumbers[key].current = this.ourNumbers[key].current + (this.ourNumbers[key].target - this.ourNumbers[key].current)
                          });
                      }

                      if(this.ourNumbers[key].current === this.ourNumbers[key].target) {
                          clearInterval(timer)
                      }
                  }, 1000)
              });
              return false;
          }
          return true;
      }

      created() {
          this.images.coverBg = require('@/assets/images/backgrounds/movements_call-center_bg.png');
          this.images.contactBg = require('@/assets/images/backgrounds/movemens_contact_bg.png');

          this.clients = [
              {
                  name: 'Shypple',
                  text: this.$t(`home.clients.shypple.text`),
                  img: require('@/assets/images/backgrounds/movements_call-center_bg.png'),
              },
              {
                  name: 'Client 2',
                  text: this.$t(`home.clients.client.text`),
                  img: require('@/assets/images/backgrounds/movements_customer-service_inbound_cover.png'),
              },
              {
                  name: 'Client 3',
                  text: this.$t(`home.clients.client.text`),
                  img: require('@/assets/images/backgrounds/movements_customer-service_inbound_cover.png'),
              },
          ];

          window.addEventListener("scroll", this.onScroll);
      }

      mounted(): void {
          this.onScroll();
      }

      beforeDestroy() {
          window.removeEventListener("scroll", this.onScroll)
      }
  }

  export default Home;
</script>

<style lang="scss">
    .section--cover {
        height: calc(100vh - 160px);
        position: relative;
        background-position: center;

        .section__content {
            text-align: left;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;

            h2 {
                color: #186267;
                font-size: 34px;
                font-style: italic;
                margin-bottom: 80px;
            }

            .button {
                transform: translateX(-20px);
                transition: transform ease 350ms;

                &:hover {
                    transform: translateX(0px);
                }
            }
        }
    }

    .section--about {
        /*.facts {*/
        /*    height: 120px;*/
        /*    display: flex;*/
        /*    align-items: center;*/
        /*    justify-content: center;*/
        /*    color: #186267;*/

        /*    .fact {*/
        /*        font-size: 24px;*/
        /*        letter-spacing: 1px;*/
        /*        display: flex;*/
        /*        align-items: center;*/

        /*        .icon-wrapper {*/
        /*            padding: 5px;*/
        /*            margin-right: 10px;*/
        /*            border-radius: 50px;*/
        /*            background: #49AF4E;*/
        /*        }*/
        /*    }*/

        /*    .fact-divider {*/
        /*        height: 50px;*/
        /*        width: 4px;*/
        /*        margin: 0 20px;*/
        /*        background: #e8a500;*/
        /*    }*/
        /*}*/

        .about {
            position: relative;

            .section__content {
                position: absolute;
                top: 0;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
            }

            .about__text {
                p {
                    color: #186267;
                    line-height: 28px;
                    font-size: 20px;
                    text-align: justify;
                }
            }
        }
    }

    .section--numbers {

        .line {
            position: absolute;
            top: -100px;
            height: 200px;
            width: 3px;
            background: #9FF882;
            left: 280px;
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

                    &::after {
                        content: '';
                        display: block;
                        width: 45px;
                        height: 3px;
                        background: #9FF882;
                    }
                }

                .text {
                    color: #fff;
                    font-size: 20px;
                    padding-top: 15px;
                }
            }

        }
    }

    .section--quote {
        background: #fff;

        h3 {
            font-size: 64px;
            color: #008d90;
            line-height: 120px;
            font-weight: 200;
        }
    }

    .section.section--services {
        .section__content {
            display: flex;
            flex-direction: column;
            justify-content: center;


            h1 {
                max-width: 100%;
                text-align: left;
                color: #fff;
                margin-bottom: 120px;

                .is-highlighted {
                    display: block;
                    white-space: nowrap;
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

            .services-cover__mask {
                position: absolute;
            }
        }

        &.section--services--outbound {
            background: linear-gradient(90deg, #186267 0%, #186267 20%, #9FF882 100%);

            .section__content {
                padding-right: 120px !important;
            }

            .services-cover {
                .services-cover__mask {
                    left: 0;
                }
            }

        }

        &.section--services--inbound {
            background: linear-gradient(90deg, #9FF882 0%, #186267 80%, #186267 100%);

            .section__content {
                padding-left: 120px !important;
            }

            .services-cover {
                .services-cover__mask {
                    right: 12px;
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

        .section__content {
            h2 {
                max-width: 100%;
                text-align: left;
                margin-bottom: 50px;
                display: block;
                white-space: nowrap;
            }

            p {
                max-width: 75%;
                text-align: left;
                margin-bottom: 50px;
            }


            .button {
                transform: translateX(-20px);
                transition: transform ease 350ms;

                &:hover {
                    transform: translateX(0px);
                }
            }
        }
    }

    .section.section--clients {
        margin-top: -12px;
    }

    .section.section--telemarketers-title {
        background: linear-gradient(90deg, #186267 0%, #186267 20%, #9FF882 100%);

        h3 {
            font-size: 64px;
            color: #fff;
            line-height: 120px;
            font-weight: 200;
        }
    }

    .section--telemarketers {
        width: 200vw;
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

            h1 {
                font-size: 74px;
                line-height: 76px;
                color: #008d90;
                display: inline-block;
                position: relative;

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

            .columns {
                width: 100%;

                .office {
                    color: #008d90;
                    font-size: 32px;

                    span {
                        position: relative;
                        line-height: 34px;
                    }

                    &.is-active {
                        font-weight: 700;
                        //border-bottom: 2px solid #9FF882;

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
                    border-radius: 8px;
                    box-shadow: 1px 1px 12px rgb(0 0 0 / 20%);
                    padding: 20px 40px;

                    p {
                        color: #008d90;
                        font-weight: 600;
                        font-size: 15px;
                        line-height: 28px;
                        text-align: left;
                    }
                }
            }
        }
    }


</style>
