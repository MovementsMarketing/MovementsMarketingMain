import Vue from 'vue';
import App from './App.vue';
import VModal from 'vue-js-modal';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import VueI18n from 'vue-i18n';
import Carousel3d from 'vue-carousel-3d';
import VueCookies from 'vue-cookies'
import Meta from 'vue-meta';

import router from './router';
import IntersectionObserver from './directives/IntersectionObserver';

import Icons from "@/components/base/Icons.vue";
import Footer from "@/components/base/Footer.vue";
import Navigation from "@/components/base/Navigation.vue";


Vue.use(Meta);
Vue.use(VModal);
Vue.use(Buefy);
Vue.use(VueI18n);
Vue.use(Carousel3d);
Vue.use(VueCookies);

Vue.directive('intersection-observer', IntersectionObserver);

Vue.component('icons', Icons);
Vue.component('movements-footer', Footer);
Vue.component('navigation', Navigation);

Vue.config.productionTip = false;

import './assets/scss/main.scss';

import locales from "./constants/locales";
const messages = locales;

const i18n = new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
});


new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')
