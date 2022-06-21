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
      path: '/contact',
      name: 'Home',
      component: Home,
      meta: {element: '#contact'}
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
