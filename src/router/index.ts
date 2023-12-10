import Vue from 'vue';
import VueRouter from 'vue-router'

import Home from "@/components/pages/Home.vue";
import Careers from "@/components/pages/Careers.vue";
import ThankYou from "@/components/pages/ThankYou.vue";
import CustomerService from "@/components/pages/services/CustomerService.vue";
import EmailManagement from "@/components/pages/services/EmailManagement.vue";
import LiveChat from "@/components/pages/services/LiveChat.vue";
import SocialWebcare from "@/components/pages/services/SocialWebcare.vue";
import Telemarketing from "@/components/pages/services/Telemarketing.vue";
import PrivacyPolicy from "@/components/pages/PrivacyPolicy.vue";
import GeneralTerms from "@/components/pages/GeneralTerms.vue";
import CustomerExperience from "@/components/pages/services/CustomerExperience.vue";
import EndToEndSupport from "@/components/pages/services/EndToEndSupport.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history', // -->  history mode leverages the history.pushState API to achieve URL navigation without a page reload
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },

    {
      path: '/privacy-policy',
      name: 'PrivacyPolicy',
      component: PrivacyPolicy,
    },
    {
      path: '/general-terms',
      name: 'GeneralTerms',
      component: GeneralTerms,
    },

    //Translations and redirects: ABOUT
    {
      path: '/about',
      name: 'Home-about',
      component: Home,
      meta: {element: '#about'}
    },

    {
      path: '/over-ons',
      name: 'Home-about-nl',
      component: Home,
      meta: {element: '#about', locale: 'nl'}
    },

    {
      path: '/uber-uns',
      name: 'Home-about-de',
      component: Home,
      meta: {element: '#about', locale: 'de'}
    },
    {
      path: '/uber-uns/en',
      redirect: () => {
        return '/about'
      }
    },
    {
      path: '/uber-uns/nl',
      redirect: () => {
        return '/over-ons'
      }
    },
    {
      path: '/uber-uns/de',
      redirect: () => {
        return '/uber-uns'
      }
    },

    //Translations and redirects: service groups
    {
      path: '/outbound',
      name: 'Home-outbound',
      component: Home,
      meta: {element: '#outbound'}
    },

    {
      path: '/inbound',
      name: 'Home-inbound',
      component: Home,
      meta: {element: '#inbound'}
    },


    //Translations and redirects: CLIENTS

    {
      path: '/clients',
      name: 'Home-clients',
      component: Home,
      meta: {element: '#clients'}
    },

    {
      path: '/klanten',
      name: 'Home-clients-nl',
      component: Home,
      meta: {element: '#clients', locale: 'nl'}
    },
    {
      path: '/kunden',
      name: 'Home-clients-de',
      component: Home,
      meta: {element: '#clients', locale: 'de'}
    },

    {
      path: '/contact',
      name: 'Home-contact',
      component: Home,
      meta: {element: '#contact'}
    },
    {
      path: '/kontakt',
      name: 'Home-contact-de',
      component: Home,
      meta: {element: '#contact', locale: 'de'}
    },

    {
      path: '*',
      name: 'Home-redirect',
      component: Home,
    },

    {
      path: '/careers',
      name: 'Careers',
      component: Careers,
    },

      //ANSWERING SERVICE
    {
      path: '/customer-experience',
      name: 'CustomerExperience',
      component: CustomerExperience,
    },
    {
      path: '/service/answering-service/en',
      redirect: () => {
        return '/service/answering-service'
      }
    },
    {
      path: '/service/answering-service/nl',
      redirect: () => {
        return '/diensten/telefoonservice'
      }
    },
    {
      path: '/service/answering-service/de',
      redirect: () => {
        return '/dienstleistungen/telefonservice'
      }
    },
    {
      path: '/diensten/telefoonservice',
      name: 'AnsweringService-nl',
      // component: AnsweringService,
      component: CustomerExperience,
      meta: {locale: 'nl'}
    },
    {
      path: '/diensten/telefoonservice/en',
      redirect: () => {
        return '/service/answering-service'
      }
    },
    {
      path: '/diensten/telefoonservice/nl',
      redirect: () => {
        return '/diensten/telefoonservice'
      }
    },
    {
      path: '/diensten/telefoonservice/de',
      redirect: () => {
        return '/dienstleistungen/telefonservice'
      }
    },
    {
      path: '/dienstleistungen/telefonservice',
      name: 'AnsweringService-de',
      // component: AnsweringService,
      component: CustomerExperience,
      meta: {locale: 'de'}
    },
    {
      path: '/dienstleistungen/telefonservice/en',
      redirect: () => {
        return '/service/answering-service'
      }
    },
    {
      path: '/dienstleistungen/telefonservice/nl',
      redirect: () => {
        return '/diensten/telefoonservice'
      }
    },
    {
      path: '/dienstleistungen/telefonservice/de',
      redirect: () => {
        return '/dienstleistungen/telefonservice'
      }
    },
    {
      path: '/customer-experience/getStarted',
      name: 'CustomerExperience-try',
      component: CustomerExperience,
      meta: {element: '#getStarted'}
    },

      //END to END SERVICE
    {
      path: '/end-to-end-sales-support',
      name: 'EndToEndSupport',
      component: EndToEndSupport,
    },
    {
      path: '/service/answering-service/en',
      redirect: () => {
        return '/service/answering-service'
      }
    },
    {
      path: '/service/answering-service/nl',
      redirect: () => {
        return '/diensten/telefoonservice'
      }
    },
    {
      path: '/service/answering-service/de',
      redirect: () => {
        return '/dienstleistungen/telefonservice'
      }
    },
    {
      path: '/diensten/telefoonservice',
      name: 'AnsweringService-nl',
      // component: AnsweringService,
      component: CustomerExperience,
      meta: {locale: 'nl'}
    },
    {
      path: '/diensten/telefoonservice/en',
      redirect: () => {
        return '/service/answering-service'
      }
    },
    {
      path: '/diensten/telefoonservice/nl',
      redirect: () => {
        return '/diensten/telefoonservice'
      }
    },
    {
      path: '/diensten/telefoonservice/de',
      redirect: () => {
        return '/dienstleistungen/telefonservice'
      }
    },
    {
      path: '/dienstleistungen/telefonservice',
      name: 'AnsweringService-de',
      // component: AnsweringService,
      component: EndToEndSupport,
      meta: {locale: 'de'}
    },
    {
      path: '/dienstleistungen/telefonservice/en',
      redirect: () => {
        return '/service/answering-service'
      }
    },
    {
      path: '/dienstleistungen/telefonservice/nl',
      redirect: () => {
        return '/diensten/telefoonservice'
      }
    },
    {
      path: '/dienstleistungen/telefonservice/de',
      redirect: () => {
        return '/dienstleistungen/telefonservice'
      }
    },
    {
      path: '/end-to-end-sales-support/getStarted',
      name: 'EndToEnd-try',
      component: EndToEndSupport,
      meta: {element: '#getStarted'}
    },
    {
      path: '/end-to-end-sales-support/engagementStrategy',
      name: 'EndToEnd-engagementStrategy',
      component: EndToEndSupport,
      meta: {element: '#engagementStrategy'}
    },
    {
      path: '/end-to-end-sales-support/dataEnrichment',
      name: 'EndToEnd-dataEnrichment',
      component: EndToEndSupport,
      meta: {element: '#dataEnrichment'}
    },
    {
      path: '/end-to-end-sales-support/leadGeneration',
      name: 'EndToEnd-leadGeneration',
      component: EndToEndSupport,
      meta: {element: '#leadGeneration'}
    },
    {
      path: '/end-to-end-sales-support/leadClosing',
      name: 'EndToEnd-leadClosing',
      component: EndToEndSupport,
      meta: {element: '#leadClosing'}
    },

      //CUSTOMER SERVICE
    {
      path: '/service/customer-service',
      name: 'CustomerService',
      component: CustomerService,
    },
    {
      path: '/service/customer-service/en',
      redirect: () => {
        return '/service/customer-service'
      }
    },
    {
      path: '/service/customer-service/nl',
      redirect: () => {
        return '/diensten/klantenservice'
      }
    },
    {
      path: '/service/customer-service/de',
      redirect: () => {
        return '/dienstleistungen/kundenservice'
      }
    },
    {
      path: '/diensten/klantenservice',
      name: 'CustomerService-nl',
      component: CustomerService,
      meta: {locale: 'nl'}
    },
    {
      path: '/diensten/klantenservice/en',
      redirect: () => {
        return '/service/customer-service'
      }
    },
    {
      path: '/diensten/klantenservice/nl',
      redirect: () => {
        return '/diensten/klantenservice'
      }
    },
    {
      path: '/diensten/klantenservice/de',
      redirect: () => {
        return '/dienstleistungen/kundenservice'
      }
    },
    {
      path: '/dienstleistungen/kundenservice',
      name: 'CustomerService-de',
      component: CustomerService,
      meta: {locale: 'de'}
    },
    {
      path: '/dienstleistungen/kundenservice/en',
      redirect: () => {
        return '/service/customer-service'
      }
    },
    {
      path: '/dienstleistungen/kundenservice/nl',
      redirect: () => {
        return '/diensten/klantenservice'
      }
    },
    {
      path: '/dienstleistungen/kundenservice/de',
      redirect: () => {
        return '/dienstleistungen/kundenservice'
      }
    },
    {
      path: '/service/customer-service/tryNow',
      name: 'CustomerService-try',
      component: CustomerService,
      meta: {element: '#tryService'}
    },

      //EMAIL MANAGEMENT
    {
      path: '/service/email-management',
      name: 'EmailManagement',
      component: EmailManagement,
    },
    {
      path: '/service/email-management/en',
      redirect: () => {
        return '/service/email-management'
      }
    },
    {
      path: '/service/email-management/nl',
      redirect: () => {
        return '/diensten/email-management'
      }
    },
    {
      path: '/service/email-management/de',
      redirect: () => {
        return '/dienstleistungen/email-management'
      }
    },
    {
      path: '/diensten/email-management',
      name: 'EmailManagement-nl',
      component: EmailManagement,
      meta: {locale: 'nl'}
    },
    {
      path: '/diensten/email-management/en',
      redirect: () => {
        return '/service/email-management'
      }
    },
    {
      path: '/diensten/email-management/nl',
      redirect: () => {
        return '/diensten/email-management'
      }
    },
    {
      path: '/diensten/email-management/de',
      redirect: () => {
        return '/dienstleistungen/email-management'
      }
    },
    {
      path: '/dienstleistungen/email-management',
      name: 'EmailManagement-de',
      component: EmailManagement,
      meta: {locale: 'de'}
    },
    {
      path: '/dienstleistungen/email-management/en',
      redirect: () => {
        return '/service/email-management'
      }
    },
    {
      path: '/dienstleistungen/email-management/nl',
      redirect: () => {
        return '/diensten/email-management'
      }
    },
    {
      path: '/dienstleistungen/email-management/de',
      redirect: () => {
        return '/dienstleistungen/email-management'
      }
    },
    {
      path: '/service/email-management/tryNow',
      name: 'EmailManagement-try',
      component: EmailManagement,
      meta: {element: '#tryService'}
    },

      // LIVE CHAT
    {
      path: '/service/live-chat',
      name: 'LiveChat',
      component: LiveChat,
    },
    {
      path: '/service/live-chat/en',
      redirect: () => {
        return '/service/live-chat'
      }
    },
    {
      path: '/service/live-chat/nl',
      redirect: () => {
        return '/diensten/live-chat'
      }
    },
    {
      path: '/service/live-chat/de',
      redirect: () => {
        return '/dienstleistungen/live-chat'
      }
    },
    {
      path: '/diensten/live-chat',
      name: 'LiveChat-nl',
      component: LiveChat,
      meta: {locale: 'nl'}
    },
    {
      path: '/diensten/live-chat/en',
      redirect: () => {
        return '/service/live-chat'
      }
    },
    {
      path: '/diensten/live-chat/nl',
      redirect: () => {
        return '/diensten/live-chat'
      }
    },
    {
      path: '/diensten/live-chat/de',
      redirect: () => {
        return '/dienstleistungen/live-chat'
      }
    },
    {
      path: '/dienstleistungen/live-chat',
      name: 'LiveChat-de',
      component: LiveChat,
      meta: {locale: 'de'}
    },
    {
      path: '/dienstleistungen/live-chat/en',
      redirect: () => {
        return '/service/live-chat'
      }
    },
    {
      path: '/dienstleistungen/live-chat/nl',
      redirect: () => {
        return '/diensten/live-chat'
      }
    },
    {
      path: '/dienstleistungen/live-chat/de',
      redirect: () => {
        return '/dienstleistungen/live-chat'
      }
    },
    {
      path: '/service/live-chat/tryNow',
      name: 'LiveChat-try',
      component: LiveChat,
      meta: {element: '#tryService'}
    },

      //SOCIAL WEBCARE
    {
      path: '/service/social-webcare',
      name: 'SocialWebcare',
      component: SocialWebcare,
    },
    {
      path: '/service/social-webcare/en',
      redirect: () => {
        return '/service/social-webcare'
      }
    },
    {
      path: '/service/social-webcare/nl',
      redirect: () => {
        return '/diensten/social-webcare'
      }
    },
    {
      path: '/service/social-webcare/de',
      redirect: () => {
        return '/dienstleistungen/social-webcare'
      }
    },
    {
      path: '/diensten/social-webcare',
      name: 'SocialWebcare-nl',
      component: SocialWebcare,
      meta: {locale: 'nl'}
    },
    {
      path: '/diensten/social-webcare/en',
      redirect: () => {
        return '/service/social-webcare'
      }
    },
    {
      path: '/diensten/social-webcare/nl',
      redirect: () => {
        return '/diensten/social-webcare'
      }
    },
    {
      path: '/diensten/social-webcare/de',
      redirect: () => {
        return '/dienstleistungen/social-webcare'
      }
    },
    {
      path: '/dienstleistungen/social-webcare',
      name: 'SocialWebcare-de',
      component: SocialWebcare,
      meta: {locale: 'de'}
    },
    {
      path: '/dienstleistungen/social-webcare/en',
      redirect: () => {
        return '/service/social-webcare'
      }
    },
    {
      path: '/dienstleistungen/social-webcare/nl',
      redirect: () => {
        return '/diensten/social-webcare'
      }
    },
    {
      path: '/dienstleistungen/social-webcare/de',
      redirect: () => {
        return '/dienstleistungen/social-webcare'
      }
    },
    {
      path: '/service/social-webcare/tryNow',
      name: 'SocialWebcare-try',
      component: SocialWebcare,
      meta: {element: '#tryService'}
    },

      //TELEMARKETING
    {
      path: '/service/b2b-telemarketing',
      name: 'Telemarketing',
      component: Telemarketing,
    },
    {
      path: '/service/b2b-telemarketing/en',
      redirect: () => {
        return '/service/b2b-telemarketing'
      }
    },
    {
      path: '/service/b2b-telemarketing/nl',
      redirect: () => {
        return '/diensten/b2b-telemarketing'
      }
    },
    {
      path: '/service/b2b-telemarketing/de',
      redirect: () => {
        return '/dienstleistungen/b2b-telemarketing'
      }
    },
    {
      path: '/diensten/b2b-telemarketing',
      name: 'Telemarketing-nl',
      component: Telemarketing,
      meta: {locale: 'nl'}
    },
    {
      path: '/diensten/b2b-telemarketing/en',
      redirect: () => {
        return '/service/b2b-telemarketing'
      }
    },
    {
      path: '/diensten/b2b-telemarketing/nl',
      redirect: () => {
        return '/diensten/b2b-telemarketing'
      }
    },
    {
      path: '/diensten/b2b-telemarketing/de',
      redirect: () => {
        return '/dienstleistungen/b2b-telemarketing'
      }
    },
    {
      path: '/dienstleistungen/b2b-telemarketing',
      name: 'Telemarketing-de',
      component: Telemarketing,
      meta: {locale: 'de'}
    },
    {
      path: '/dienstleistungen/b2b-telemarketing/en',
      redirect: () => {
        return '/service/b2b-telemarketing'
      }
    },
    {
      path: '/dienstleistungen/b2b-telemarketing/nl',
      redirect: () => {
        return '/diensten/b2b-telemarketing'
      }
    },
    {
      path: '/dienstleistungen/b2b-telemarketing/de',
      redirect: () => {
        return '/dienstleistungen/b2b-telemarketing'
      }
    },
    {
      path: '/service/b2b-telemarketing/tryNow',
      name: 'Telemarketing-try',
      component: Telemarketing,
      meta: {element: '#tryService'}
    },

    {
      path: '/thank-you/:form',
      name: 'Thank You',
      component: ThankYou,
    },
  ],
  scrollBehavior: function (to) {
    if (to.meta?.element) {
        return {
          selector: to.meta.element,
          behavior: 'smooth',
          offset: { x: 0, y: 100 },
        }
    }
    else {
      return {
        x: 0,
        y: 0,
      }
    }
  }
});
