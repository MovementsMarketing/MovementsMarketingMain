<template>
    <div class="navigation is-main" @mouseleave="onMouseLeave">
        <div class=" is-fullwidth" style="max-width: 2500px;" @mouseleave="isServicesActive = false">
            <div class="navigation__navbar navigation__navbar--desktop">
              <router-link to="/">
                <div class="navigation__logo">
                  <img src="@/assets/images/movements-marketing-logo.png" alt="Movements Marketing"/>
                </div>
              </router-link>

              <div :class="isMobileActive ? `navigation__items is-mobile-active` : `navigation__items`">

                <navigation-dropdown is-full-width="true" ref="services">
                  <template v-slot:title>
                    <span>
                      {{ $t(`navigation.services`) }}
                    </span>
                  </template>
                  <template v-slot:content>
                    <div class="services-options">
                      <div class="services-option-group">
                        <span class="services-main-option">
                             <router-link :to="routes.customerExperience" class="m-b-10" @click="isMobileActive=false">
                               {{ $t(`navigation.servicesOptions.customerExperience`) }}
                             </router-link>
                        </span>
                        <span class="services-suboption">
                             <router-link :to="routes.customerExperienceEngagementStrategy" class="m-b-10" @click="isMobileActive=false">
                               {{ $t(`navigation.servicesOptions.engagementStrategy`) }}
                             </router-link>
                        </span>
                        <span class="services-suboption">
                             <router-link :to="routes.customerExperienceTelephoneCustomerCare" class="m-b-10" @click="isMobileActive=false">
                               {{ $t(`navigation.servicesOptions.telephoneCustomerCare`) }}
                             </router-link>
                        </span>
                        <span class="services-suboption">
                             <router-link :to="routes.customerExperienceAppointmentOptimization" class="m-b-10" @click="isMobileActive=false">
                               {{ $t(`navigation.servicesOptions.appointmentOptimization`) }}
                             </router-link>
                        </span>
                        <span class="services-suboption">
                             <router-link :to="routes.customerExperienceAiVoicebot" class="m-b-10" @click="isMobileActive=false">
                               {{ $t(`navigation.servicesOptions.aiAssistant`) }}
                             </router-link>
                        </span>
                      </div>
                      <div class="services-option-group">
                        <span class="services-main-option">
                             <router-link :to="routes.endToEnd" class="m-b-10" @click="isMobileActive=false">
                               {{ $t(`navigation.servicesOptions.endToEnd`) }}
                             </router-link>
                        </span>
                        <span class="services-suboption">
                             <router-link :to="routes.endToEndEngagementStrategy" class="m-b-10" @click="isMobileActive=false">
                               {{ $t(`navigation.servicesOptions.engagementStrategy`) }}
                             </router-link>
                        </span>
                        <span class="services-suboption">
                             <router-link :to="routes.endToEndDataEnrichment" class="m-b-10" @click="isMobileActive=false">
                               {{ $t(`navigation.servicesOptions.dataEnrichment`) }}
                             </router-link>
                        </span>
                        <span class="services-suboption">
                             <router-link :to="routes.endToEndLeadGeneration" class="m-b-10" @click="isMobileActive=false">
                               {{ $t(`navigation.servicesOptions.leadGeneration`) }}
                             </router-link>
                        </span>
                        <span class="services-suboption">
                             <router-link :to="routes.endToEndLeadClosing" class="m-b-10" @click="isMobileActive=false">
                               {{ $t(`navigation.servicesOptions.leadClosing`) }}
                             </router-link>
                        </span>
                      </div>
                    </div>
                  </template>
                </navigation-dropdown>

                <navigation-dropdown  @navigationDropdown:open="onMouseLeave">
                  <template v-slot:title>
                    <span>
                      {{ $t(`navigation.clients`) }}
                    </span>
                  </template>
                  <template v-slot:content>
                    <div class="m-b-30"  @click="isMobileActive=false">
                      <router-link :to="routes.partnerships" class="m-b-10" @click="isMobileActive=false">
                        {{ $t(`navigation.clientsOptions.partnerships`) }}
                      </router-link>
                    </div>

                    <div  @click="isMobileActive=false">
                      <router-link :to="routes.testimonials">
                        {{ $t(`navigation.clientsOptions.stories`) }}
                      </router-link>
                    </div>

                  </template>
                </navigation-dropdown>

                <navigation-dropdown @navigationDropdown:open="onMouseLeave">
                  <template v-slot:title>
                    <span>
                      {{ $t(`navigation.about`) }}
                    </span>
                  </template>
                  <template v-slot:content>
                    <div class="m-b-30"  @click="isMobileActive=false">
                      <router-link :to="routes.values" class="m-b-10" @click="isMobileActive=false">
                        {{ $t(`navigation.aboutOptions.ourValues`) }}
                      </router-link>
                    </div>

                    <div  @click="isMobileActive=false">
                      <router-link :to="routes.team">
                        {{ $t(`navigation.aboutOptions.ourTeam`) }}
                      </router-link>
                    </div>

                  </template>
                </navigation-dropdown>

                <div class="navigation__item" @click="isMobileActive = false">
                  <router-link :to="routes.careers">
                    {{ $t(`navigation.career`) }}
                  </router-link>
                </div>

                <div class="is-hidden-desktop">
                  <router-link :to="routes.contact" class="button button--primary">
                    <span class="text">
                      {{ $t(`connect`) }}
                    </span>
                    <span class="dot"></span>
                    <span class="icon-wrapper">
                      <icons icon="arrowRight" stroke-width="3" stroke="#fff" height="20" width="20" />
                    </span>
                  </router-link>
                </div>
              </div>


              <div class="navigation__actions">

                <div class="is-hidden-touch">
                  <router-link :to="routes.contact" class="button button--primary">
                    <span class="text">
                      {{ $t(`connect`) }}
                    </span>
                    <span class="dot"></span>
                    <span class="icon-wrapper">
                      <icons icon="arrowRight" stroke-width="3" stroke="#fff" height="20" width="20" />
                    </span>
                  </router-link>
                </div>

                <language-selector :translate-url="translateUrl"/>

                <div class="is-hidden-desktop">
                  <div class="navigation__burger" @click="onBurgerClick">
                    <ul :class="isMobileActive ? 'active' : ''">
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
<!--          <div v-show="isServicesActive" class="section navigation__services-options">-->
<!--            <div class="columns m-0">-->
<!--              <div class="column is-6 navigation__services-options__option">-->
<!--                <div class="icon">-->
<!--                  <img src="@/assets/images/icons/services_icon_1.png"  alt="Movements Marketing Outbound Lead Generation"/>-->
<!--                </div>-->
<!--                <div class="divider"></div>-->
<!--                <div class="text">-->
<!--                  <router-link to="/outbound">-->
<!--                    <p class="title" @click="isServicesActive = !isServicesActive">-->
<!--                      {{ $t(`navigation.servicesOptions.outbound`) }}-->
<!--                    </p>-->
<!--                  </router-link>-->
<!--                  <div class="list" @click="isServicesActive = !isServicesActive">-->
<!--                    <router-link :to="routes.telemarketing">-->
<!--                      {{ $t(`navigation.servicesOptions.telemarketing`) }}-->
<!--                    </router-link>-->
<!--                    <router-link :to="routes.telemarketing">-->
<!--                      {{ $t(`navigation.servicesOptions.leadGeneration`) }}-->
<!--                    </router-link>-->
<!--                    <router-link :to="routes.telemarketing">-->
<!--                      <span v-html="$t(`navigation.servicesOptions.newAppointments`)">-->
<!--                      </span>-->
<!--                    </router-link>-->
<!--                    <router-link :to="routes.telemarketing">-->
<!--                      {{ $t(`navigation.servicesOptions.dataEnrichment`) }}-->
<!--                    </router-link>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->

<!--              <div class="column is-6 navigation__services-options__option">-->
<!--                <div class="icon">-->
<!--                  <img src="@/assets/images/icons/services_icon_2.png"  alt="Movements Marketing Inbound Customer Service"/>-->
<!--                </div>-->
<!--                <div class="divider">-->

<!--                </div>-->
<!--                <div class="text">-->
<!--                  <router-link to="/inbound" @click="isServicesActive = !isServicesActive">-->
<!--                    <p class="title">-->
<!--                      {{ $t(`navigation.servicesOptions.inbound`) }}-->
<!--                    </p>-->
<!--                  </router-link>-->
<!--                  <div class="list" @click="isServicesActive = !isServicesActive">-->
<!--                    <router-link :to="routes.customer">-->
<!--                      {{ $t(`navigation.servicesOptions.customerService`) }}-->
<!--                    </router-link>-->
<!--                    <router-link :to="routes.answering">-->
<!--                      {{ $t(`navigation.servicesOptions.answeringService`) }}-->
<!--                    </router-link>-->
<!--                    <router-link :to="routes.liveChat">-->
<!--                      {{ $t(`navigation.servicesOptions.liveChat`) }}-->
<!--                    </router-link>-->
<!--                    <router-link :to="routes.email">-->
<!--                      {{ $t(`navigation.servicesOptions.emailManagement`) }}-->
<!--                    </router-link>-->
<!--                    <router-link :to="routes.webcare">-->
<!--                      {{ $t(`navigation.servicesOptions.socialWebcare`) }}-->
<!--                    </router-link>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->

<!--            </div>-->

<!--          </div>-->
        </div>



    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component, Watch, Prop } from 'vue-property-decorator';
    import LanguageSelector from "@/components/base/LanguageSelector.vue";
    import NavigationDropdown from "@/components/base/NavigationDropdown.vue";

    @Component ({
      components: {
        LanguageSelector,
        NavigationDropdown,
      }
    })
    class Navigation extends Vue {
      @Prop({default: false})
      translateUrl: boolean;

        isMobileActive: boolean = false;
        isServicesActive: boolean = false;
        navClass: string = 'is-main';
        navBlurred:  boolean = false;

        fullWidthDropdowns = ['services'];

        @Watch('isMobileActive')
        onMobileActive(isActive: boolean) {
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
        if(lang === this.$i18n.locale) return;

        this.$i18n.locale = lang;

        if(this.translateUrl && !this.$route.fullPath.includes('tryNow')) {
          let newPath = `${this.$route.fullPath}/${lang}`.replace('//', '/');
          this.$router.push(newPath);
        }
      }

      onMouseLeave() {
          this.fullWidthDropdowns.forEach(d => {
            // @ts-ignore
            this.$refs[d]?.close();
          })
      }

      get currentLang() {
          return this.$i18n.locale
      }

      // onScroll() {
      //     if (window.pageYOffset > 120) {
      //       this.navClass = 'is-blurred';
      //       this.navBlurred = true;
      //       return
      //     }
      //
      //   this.navClass = 'is-main';
      //   this.navBlurred = false;
      // }

        created(): void {
          // window.addEventListener("scroll", this.onScroll);
          // document.documentElement.style.overflow = "auto";
        }

        //todo translations
        get routes() {
          if(this.$i18n.locale === 'nl') {
            return {
              home: '/',
              about: '/over-ons',
              partnerships: `/klanten/onze-partnerships`,
              testimonials: `/klanten/klant-succesverhalen`,
              values: '/over-ons/onze-waarden',
              team: `/over-ons/ons-team`,
              contact: '/nl/contact/',
              careers: '/werken-bij',
              customerExperience: '/oplossingen/customer-experience',
              customerExperienceEngagementStrategy: '/oplossingen/customer-experience/klantstrategie',
              customerExperienceTelephoneCustomerCare: '/oplossingen/customer-experience/end-to-end-telefonische-klantenservice',
              customerExperienceAppointmentOptimization: '/oplossingen/customer-experience/afspraak-optimalisatie-oplossingen',
              customerExperienceAiVoicebot: '/oplossingen/customer-experience/ai-voicebot',
              endToEnd: '/oplossingen/end-to-end-sales-support',
              endToEndEngagementStrategy: '/oplossingen/end-to-end-sales-support/klantstrategie',
              endToEndDataEnrichment: '/oplossingen/end-to-end-sales-support/data-verrijkingen-en-kwalificatie',
              endToEndLeadGeneration: '/oplossingen/end-to-end-sales-support/leadgeneratie-en-leadopvolging',
              endToEndLeadClosing: '/oplossingen/end-to-end-sales-support/lead-closing',
            }
          } else if(this.$i18n.locale === 'de') {
            return {
              home: '/',
              about: '/uber-uns',
              partnerships: `/kunden/unsere-kooperationspartner`,
              testimonials: `/kunden/erfolgsgeschichten-unserer-kunden`,
              values: `/uber-ons/unsere-werte`,
              team: `/uber-uns/unser-team`,
              customerExperience: '/losungen/kundenerlebnis',
              customerExperienceEngagementStrategy: '/losungen/kundenerlebnis/kundenstrategie',
              customerExperienceTelephoneCustomerCare: '/losungen/kundenerlebnis/end-to-end-kundenservice',
              customerExperienceAppointmentOptimization: '/losungen/kundenerlebnis/optimierung-der-terminvereinbarung',
              customerExperienceAiVoicebot: '/losungen/kundenerlebnis/ki-voicebot',
              endToEnd: '/losungen/end-to-end-vertriebsunterstutzung',
              endToEndEngagementStrategy: '/losungen/end-to-end-vertriebsunterstutzung/kundenstrategie',
              endToEndDataEnrichment: '/losungen/end-to-end-vertriebsunterstutzung/datenanreicherung-und-qualifizierung',
              endToEndLeadGeneration: '/losungen/end-to-end-vertriebsunterstutzung/lead-generierung-und-nachverfolgung-der-leads',
              endToEndLeadClosing: '/losungen/end-to-end-vertriebsunterstutzung/lead-closing',
              contact: '/de/contact/',
              careers: '/de/join-us/',
            }
          } else {
            return {
              home: '/',
              about: '/about',
              partnerships: `/clients/our-partnerships`,
              testimonials: `/clients/client-success-stories`,
              values: `/about-us/our-values`,
              team: `/about-us/our-team`,
              customerExperience: '/solutions/customer-experience',
              customerExperienceEngagementStrategy: '/solutions/customer-experience/customer-engagement-strategy',
              customerExperienceTelephoneCustomerCare: '/solutions/customer-experience/end-to-end-telephone-customer-care',
              customerExperienceAppointmentOptimization: '/solutions/customer-experience/appointment-optimization-solutions',
              customerExperienceAiVoicebot: '/solutions/customer-experience/ai-voicebot',
              endToEnd: '/solutions/end-to-end-sales-support',
              endToEndEngagementStrategy: '/solutions/end-to-end-sales-support/customer-engagement-strategy',
              endToEndDataEnrichment: '/solutions/end-to-end-sales-support/data-enrichment-and-qualification',
              endToEndLeadGeneration: '/solutions/end-to-end-sales-support/lead-generation-and-follow-up',
              endToEndLeadClosing: '/solutions/end-to-end-sales-support/lead-closing',
              contact: '/contact/',
              careers: '/join-us/',
            }
          }
        }

        mounted() {
          document.documentElement.style.overflow = "auto";

          if(this.$route.query.lang) {
            if(this.$route.query.lang.includes('nl')) {
              this.setLanguage('nl');
            } else if(this.$route.query.lang.includes('de')) {
              this.setLanguage('de');
            } else {
              this.setLanguage('en');
            }
          }

          if(this.$route.meta?.locale) {
            if(this.$route.meta?.locale.includes('nl')) {
              this.setLanguage('nl');
            } else if(this.$route.meta?.locale.includes('de')) {
              this.setLanguage('de');
            } else {
              this.setLanguage('en');
            }
          }
        }

      beforeDestroy() {
        //window.removeEventListener("scroll", this.onScroll)
      }
    }
    export default Navigation;
</script>

<style lang="scss" scoped>
.services-options {
  display: flex;
  gap: 40px;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 20px;
  }

  .services-option-group {
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media screen and (max-width: 1024px) {
      gap: 8px;
    }

    .services-main-option {
      margin-bottom: 20px;

      @media screen and (max-width: 1024px) {
        margin-bottom: 10px;
      }
    }

    .services-suboption {
      a {
        font-weight: 400;
      }

      @media screen and (max-width: 768px) {
        display: none;
      }
    }
  }
}
</style>
