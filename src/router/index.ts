import Vue from 'vue';
import VueRouter from 'vue-router'

import Home from "@/components/pages/Home.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history', // -->  history mode leverages the history.pushState API to achieve URL navigation without a page reload
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
  ],
  scrollBehavior: function (to) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth',
      }
    }
  }
});
