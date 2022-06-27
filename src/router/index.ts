import Vue from 'vue';
import VueRouter from 'vue-router'

import Home from "@/components/pages/Home.vue";
import Careers from "@/components/pages/Careers.vue";
import ThankYou from "@/components/pages/ThankYou.vue";
import AnsweringService from "@/components/pages/services/AnsweringService.vue";
import CustomerService from "@/components/pages/services/CustomerService.vue";
import EmailManagement from "@/components/pages/services/EmailManagement.vue";
import LiveChat from "@/components/pages/services/LiveChat.vue";
import SocialWebcare from "@/components/pages/services/SocialWebcare.vue";
import Telemarketing from "@/components/pages/services/Telemarketing.vue";

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
      path: '/about',
      name: 'Home',
      component: Home,
      meta: {element: '#about'}
    },
    {
      path: '/over-ons',
      name: 'Home',
      component: Home,
      meta: {element: '#about', locale: 'nl'}
    },
    {
      path: '/uber-uns',
      name: 'Home',
      component: Home,
      meta: {element: '#about', locale: 'de'}
    },

    {
      path: '/outbound',
      name: 'Home',
      component: Home,
      meta: {element: '#outbound'}
    },
    {
      path: '/inbound',
      name: 'Home',
      component: Home,
      meta: {element: '#inbound'}
    },

    {
      path: '/clients',
      name: 'Home',
      component: Home,
      meta: {element: '#clients'}
    },
    {
      path: '/klanten',
      name: 'Home',
      component: Home,
      meta: {element: '#clients', locale: 'nl'}
    },
    {
      path: '/kunden',
      name: 'Home',
      component: Home,
      meta: {element: '#clients', locale: 'de'}
    },

    {
      path: '/contact',
      name: 'Home',
      component: Home,
      meta: {element: '#contact'}
    },
    {
      path: '/kontakt',
      name: 'Home',
      component: Home,
      meta: {element: '#contact', locale: 'de'}
    },

    {
      path: '*',
      name: 'Home',
      component: Home,
    },

    {
      path: '/careers',
      name: 'Careers',
      component: Careers,
    },

    {
      path: '/service/answering-service',
      name: 'AnsweringService',
      component: AnsweringService,
    },
    {
      path: '/diensten/telefoonservice',
      name: 'AnsweringService',
      component: AnsweringService,
      meta: {locale: 'nl'}
    },
    {
      path: '/dienstleistungen/telefonservice',
      name: 'AnsweringService',
      component: AnsweringService,
      meta: {locale: 'de'}
    },
    {
      path: '/service/answering-service/tryNow',
      name: 'AnsweringService',
      component: AnsweringService,
      meta: {element: '#tryService'}
    },

    {
      path: '/service/customer-service',
      name: 'CustomerService',
      component: CustomerService,
    },
    {
      path: '/diensten/klantenservice',
      name: 'CustomerService',
      component: CustomerService,
      meta: {locale: 'nl'}
    },
    {
      path: '/dienstleistungen/kundenservice',
      name: 'CustomerService',
      component: CustomerService,
      meta: {locale: 'de'}
    },
    {
      path: '/service/customer-service/tryNow',
      name: 'CustomerService',
      component: CustomerService,
      meta: {element: '#tryService'}
    },

    {
      path: '/service/email-management',
      name: 'EmailManagement',
      component: EmailManagement,
    },
    {
      path: '/diensten/email-management',
      name: 'EmailManagement',
      component: EmailManagement,
      meta: {locale: 'nl'}
    },
    {
      path: '/dienstleistungen/email-management',
      name: 'EmailManagement',
      component: EmailManagement,
      meta: {locale: 'de'}
    },
    {
      path: '/service/email-management/tryNow',
      name: 'EmailManagement',
      component: EmailManagement,
      meta: {element: '#tryService'}
    },

    {
      path: '/service/live-chat',
      name: 'LiveChat',
      component: LiveChat,
    },
    {
      path: '/diensten/live-chat',
      name: 'LiveChat',
      component: LiveChat,
      meta: {locale: 'nl'}
    },
    {
      path: '/dienstleistungen/live-chat',
      name: 'LiveChat',
      component: LiveChat,
      meta: {locale: 'de'}
    },
    {
      path: '/service/live-chat/tryNow',
      name: 'LiveChat',
      component: LiveChat,
      meta: {element: '#tryService'}
    },

    {
      path: '/service/social-webcare',
      name: 'SocialWebcare',
      component: SocialWebcare,
    },
    {
      path: '/diensten/social-webcare',
      name: 'SocialWebcare',
      component: SocialWebcare,
      meta: {locale: 'nl'}
    },
    {
      path: '/dienstleistungen/social-webcare',
      name: 'SocialWebcare',
      component: SocialWebcare,
      meta: {locale: 'de'}
    },
    {
      path: '/service/social-webcare/tryNow',
      name: 'SocialWebcare',
      component: SocialWebcare,
      meta: {element: '#tryService'}
    },

    {
      path: '/service/b2b-telemarketing',
      name: 'Telemarketing',
      component: Telemarketing,
    },
    {
      path: '/diensten/b2b-telemarketing',
      name: 'Telemarketing',
      component: Telemarketing,
      meta: {locale: 'nl'}
    },
    {
      path: '/dienstleistungen/b2b-telemarketing',
      name: 'Telemarketing',
      component: Telemarketing,
      meta: {locale: 'de'}
    },
    {
      path: '/service/b2b-telemarketing/tryNow',
      name: 'Telemarketing',
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
    console.log(to);
    if (to.meta?.element) {
      return {
        selector: to.meta.element,
        behavior: 'smooth',
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
