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
      path: '/service/customer-service',
      name: 'CustomerService',
      component: CustomerService,
    },
    {
      path: '/service/email-management',
      name: 'EmailManagement',
      component: EmailManagement,
    },
    {
      path: '/service/live-chat',
      name: 'LiveChat',
      component: LiveChat,
    },
    {
      path: '/service/social-webcare',
      name: 'SocialWebcare',
      component: SocialWebcare,
    },
    {
      path: '/service/b2b-telemarketing',
      name: 'Telemarketing',
      component: Telemarketing,
    },
    {
      path: '/thank-you/:form',
      name: 'Thank You',
      component: ThankYou,
    },
    {
      path: '/:form/thank-you',
      name: 'Thank You',
      component: ThankYou,
    },
    {
      path: '/home/thanks',
      name: 'Thank You',
      component: ThankYou,
    },
    {
      path: '/inbound/thank-you',
      name: 'Thank You',
      component: ThankYou,
    },
    {
      path: '/outbound/thank-you',
      name: 'Thank You',
      component: ThankYou,
    },
  ],
  scrollBehavior: function (to) {
    if (to.hash) {
      return {
        selector: to.hash,
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
