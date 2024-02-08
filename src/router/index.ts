import Vue from 'vue';
import VueRouter from 'vue-router'

import Home from "@/components/pages/Home.vue";
import Careers from "@/components/pages/Careers.vue";
import ThankYou from "@/components/pages/ThankYou.vue";
import PrivacyPolicy from "@/components/pages/PrivacyPolicy.vue";
import GeneralTerms from "@/components/pages/GeneralTerms.vue";
import CustomerExperience from "@/components/pages/services/CustomerExperience.vue";
import EndToEndSupport from "@/components/pages/services/EndToEndSupport.vue";
import Team from "@/components/pages/Team.vue";

Vue.use(VueRouter);

const ourPartnerships = {
  en: '/clients/our-partnerships',
  nl: '/klanten/onze-partnerships',
  de: '/kunden/unsere-kooperationspartner',
};

const testimonials = {
  en: '/clients/client-success-stories',
  nl: '/klanten/klant-succesverhalen',
  de: '/kunden/erfolgsgeschichten-unserer-kunden',
};

const values = {
  en: '/about-us/our-values',
  nl: '/over-ons/onze-waarden',
  de: '/uber-ons/unsere-werte',
};

const contact = {
  en: '/contact',
  nl: '/nl/contact',
  de: '/de/contact',
};

const team = {
  en: '/about-us/our-team',
  nl: '/over-ons/ons-team',
  de: '/uber-uns/unser-team',
};

const careers = {
  en: '/join-us',
  nl: '/werken-bij',
  de: '/de/join-us',
};

const customerExperience = {
  en: '/solutions/customer-experience',
  nl: '/oplossingen/customer-experience',
  de: '/losungen/kundenerlebnis',
};
const customerExperienceContact = {
  en: '/solutions/customer-experience/contact',
  nl: '/oplossingen/customer-experience/contact',
  de: '/losungen/kundenerlebnis/contact',
};
const customerExperienceEngagementStrategy = {
  en: '/solutions/customer-experience/customer-engagement-strategy',
  nl: '/oplossingen/customer-experience/klantstrategie',
  de: '/losungen/kundenerlebnis/kundenstrategie',
};
const customerExperienceTelephoneCustomerCare = {
  en: '/solutions/customer-experience/end-to-end-telephone-customer-care',
  nl: '/oplossingen/customer-experience/end-to-end-telefonische-klantenservice',
  de: '/losungen/kundenerlebnis/end-to-end-kundenservice',
};
const customerExperienceAppointmentOptimization = {
  en: '/solutions/customer-experience/appointment-optimization-solutions',
  nl: '/oplossingen/customer-experience/afspraak-optimalisatie-oplossingen',
  de: '/losungen/kundenerlebnis/optimierung-der-terminvereinbarung',
};
const customerExperienceAiVoicebot = {
  en: '/solutions/customer-experience/ai-voicebot',
  nl: '/oplossingen/customer-experience/ai-voicebot',
  de: '/losungen/kundenerlebnis/ki-voicebot',
};

const endToEndSupport = {
  en: '/solutions/end-to-end-sales-support',
  nl: '/oplossingen/end-to-end-sales-support',
  de: '/losungen/end-to-end-vertriebsunterstutzung',
};
const endToEndSupportContact = {
  en: '/solutions/end-to-end-sales-support/contact',
  nl: '/oplossingen/end-to-end-sales-support/contact',
  de: '/losungen/end-to-end-vertriebsunterstutzung/contact',
};
const endToEndSupportCustomerEngagement = {
  en: '/solutions/end-to-end-sales-support/customer-engagement-strategy',
  nl: '/oplossingen/end-to-end-sales-support/klantstrategie',
  de: '/losungen/end-to-end-vertriebsunterstutzung/kundenstrategie',
};
const endToEndSupportDataEnrichment = {
  en: '/solutions/end-to-end-sales-support/data-enrichment-and-qualification',
  nl: '/oplossingen/end-to-end-sales-support/data-verrijkingen-en-kwalificatie',
  de: '/losungen/end-to-end-vertriebsunterstutzung/datenanreicherung-und-qualifizierung',
};
const endToEndSupportLeadGeneraton = {
  en: '/solutions/end-to-end-sales-support/lead-generation-and-follow-up',
  nl: '/oplossingen/end-to-end-sales-support/leadgeneratie-en-leadopvolging',
  de: '/losungen/end-to-end-vertriebsunterstutzung/lead-generierung-und-nachverfolgung-der-leads',
};
const endToEndSupportLeadClosing = {
  en: '/solutions/end-to-end-sales-support/lead-closing',
  nl: '/oplossingen/end-to-end-sales-support/lead-closing',
  de: '/losungen/end-to-end-vertriebsunterstutzung/lead-closing',
};

const generateRedirect = (basePaths: any, fromLocale: string, toLocale: string) => {
  return {
    path: `${basePaths[fromLocale]}/${toLocale}`,
    redirect: basePaths[toLocale],
  }
};

export default new VueRouter({
  mode: 'history', // -->  history mode leverages the history.pushState API to achieve URL navigation without a page reload
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/en',
      redirect: () => {
        return '/'
      }
    },
    {
      path: '/nl',
      redirect: () => {
        return '/'
      }
    },
    {
      path: '/de',
      redirect: () => {
        return '/'
      }
    },
    {
      path: `${contact.en}`,
      name: 'Home-contact',
      component: Home,
      meta: { element: '#contact', locale: 'en' },
    },
    {
      path: `${contact.nl}`,
      name: 'Home-contact-nl',
      component: Home,
      meta: { element: '#contact', locale: 'nl' },
    },
    {
      path: `${contact.de}`,
      name: 'Home-contact-de',
      component: Home,
      meta: { element: '#contact', locale: 'de' },
    },
    generateRedirect(contact, 'en', 'en'),
    generateRedirect(contact, 'en', 'nl'),
    generateRedirect(contact,'en', 'de'),
    generateRedirect(contact,'nl', 'en'),
    generateRedirect(contact,'nl', 'nl'),
    generateRedirect(contact,'nl', 'de'),
    generateRedirect(contact,'de', 'en'),
    generateRedirect(contact,'de', 'nl'),
    generateRedirect(contact,'de', 'de'),

    {
      path: '*',
      name: 'Home-redirect',
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

      //PARTNERSHIPS

    {
      path: `${ourPartnerships.en}`,
      name: 'Home-partnerships',
      component: Home,
      meta: { element: '#partnerships', locale: 'en' },
    },
    {
      path: `${ourPartnerships.nl}`,
      name: 'Home-clients-nl',
      component: Home,
      meta: { element: '#partnerships', locale: 'nl' },
    },
    {
      path: `${ourPartnerships.de}`,
      name: 'Home-clients-de',
      component: Home,
      meta: { element: '#partnerships', locale: 'de' },
    },
    generateRedirect(ourPartnerships, 'en', 'en'),
    generateRedirect(ourPartnerships, 'en', 'nl'),
    generateRedirect(ourPartnerships,'en', 'de'),
    generateRedirect(ourPartnerships,'nl', 'en'),
    generateRedirect(ourPartnerships,'nl', 'nl'),
    generateRedirect(ourPartnerships,'nl', 'de'),
    generateRedirect(ourPartnerships,'de', 'en'),
    generateRedirect(ourPartnerships,'de', 'nl'),
    generateRedirect(ourPartnerships,'de', 'de'),


    //
    // {
    //   path: '/clients/our-partnerships',
    //   name: 'Home-partnerships',
    //   component: Home,
    //   meta: {element: '#partnerships', locale: 'en'}
    // },
    // {
    //   path: '/klanten/onze-partnerships',
    //   name: 'Home-clients-nl',
    //   component: Home,
    //   meta: {element: '#partnerships', locale: 'nl'}
    // },
    // {
    //   path: '/kunden/unsere-kooperationspartner',
    //   name: 'Home-clients-de',
    //   component: Home,
    //   meta: {element: '#partnerships', locale: 'de'}
    // },
    // {
    //   path: '/clients/our-partnerships/en',
    //   redirect: () => {
    //     return '/clients/our-partnerships'
    //   }
    // },
    // {
    //   path: '/klanten/onze-partnerships/en',
    //   redirect: () => {
    //     return '/clients/our-partnerships'
    //   }
    // },
    // {
    //   path: '/kunden/unsere-kooperationspartner/en',
    //   redirect: () => {
    //     return '/clients/our-partnerships'
    //   }
    // },
    // {
    //   path: '/clients/our-partnerships/nl',
    //   redirect: () => {
    //     return '/klanten/onze-partnerships'
    //   }
    // },
    // {
    //   path: '/klanten/onze-partnerships/nl',
    //   redirect: () => {
    //     return '/klanten/onze-partnerships'
    //   }
    // },
    // {
    //   path: '/kunden/unsere-kooperationspartner/nl',
    //   redirect: () => {
    //     return '/klanten/onze-partnerships'
    //   }
    // },
    // {
    //   path: '/clients/our-partnerships/de',
    //   redirect: () => {
    //     return '/kunden/unsere-kooperationspartner'
    //   }
    // },
    // {
    //   path: '/klanten/onze-partnerships/de',
    //   redirect: () => {
    //     return '/kunden/unsere-kooperationspartner'
    //   }
    // },
    // {
    //   path: '/kunden/unsere-kooperationspartner/de',
    //   redirect: () => {
    //     return '/kunden/unsere-kooperationspartner'
    //   }
    // },

      //TESTIMONIALS

    {
      path: `${testimonials.en}`,
      name: 'Home-testimonials',
      component: Home,
      meta: { element: '#testimonials', locale: 'en' },
    },
    {
      path: `${testimonials.nl}`,
      name: 'Home-testimonials-nl',
      component: Home,
      meta: { element: '#testimonials', locale: 'nl' },
    },
    {
      path: `${testimonials.de}`,
      name: 'Home-testimonials-de',
      component: Home,
      meta: { element: '#testimonials', locale: 'de' },
    },
    generateRedirect(testimonials, 'en', 'en'),
    generateRedirect(testimonials, 'en', 'nl'),
    generateRedirect(testimonials,'en', 'de'),
    generateRedirect(testimonials,'nl', 'en'),
    generateRedirect(testimonials,'nl', 'nl'),
    generateRedirect(testimonials,'nl', 'de'),
    generateRedirect(testimonials,'de', 'en'),
    generateRedirect(testimonials,'de', 'nl'),
    generateRedirect(testimonials,'de', 'de'),


    //VALUES
    {
      path: `${values.en}`,
      name: 'Home-values',
      component: Home,
      meta: { element: '#values', locale: 'en' },
    },
    {
      path: `${values.nl}`,
      name: 'Home-values-nl',
      component: Home,
      meta: { element: '#values', locale: 'nl' },
    },
    {
      path: `${values.de}`,
      name: 'Home-values-de',
      component: Home,
      meta: { element: '#values', locale: 'de' },
    },
    generateRedirect(values, 'en', 'en'),
    generateRedirect(values, 'en', 'nl'),
    generateRedirect(values,'en', 'de'),
    generateRedirect(values,'nl', 'en'),
    generateRedirect(values,'nl', 'nl'),
    generateRedirect(values,'nl', 'de'),
    generateRedirect(values,'de', 'en'),
    generateRedirect(values,'de', 'nl'),
    generateRedirect(values,'de', 'de'),

    //TEAM
    {
      path: `${team.en}`,
      name: 'Team',
      component: Team,
      meta: { locale: 'en' },
    },
    {
      path: `${team.nl}`,
      name: 'Team-nl',
      component: Team,
      meta: { locale: 'nl' },
    },
    {
      path: `${team.de}`,
      name: 'Team-de',
      component: Team,
      meta: { locale: 'de' },
    },
    generateRedirect(team, 'en', 'en'),
    generateRedirect(team, 'en', 'nl'),
    generateRedirect(team,'en', 'de'),
    generateRedirect(team,'nl', 'en'),
    generateRedirect(team,'nl', 'nl'),
    generateRedirect(team,'nl', 'de'),
    generateRedirect(team,'de', 'en'),
    generateRedirect(team,'de', 'nl'),
    generateRedirect(team,'de', 'de'),

      //CAREERS
    {
      path: `${careers.en}`,
      name: 'Careers',
      component: Careers,
      meta: { locale: 'en' },
    },
    {
      path: `${careers.nl}`,
      name: 'Careers-nl',
      component: Careers,
      meta: { locale: 'nl' },
    },
    {
      path: `${careers.de}`,
      name: 'Careers-de',
      component: Careers,
      meta: { locale: 'de' },
    },
    generateRedirect(careers, 'en', 'en'),
    generateRedirect(careers, 'en', 'nl'),
    generateRedirect(careers,'en', 'de'),
    generateRedirect(careers,'nl', 'en'),
    generateRedirect(careers,'nl', 'nl'),
    generateRedirect(careers,'nl', 'de'),
    generateRedirect(careers,'de', 'en'),
    generateRedirect(careers,'de', 'nl'),
    generateRedirect(careers,'de', 'de'),

      // CUSTOMER EXPERIENCE
    {
      path: `${customerExperience.en}`,
      name: 'CustomerExperience',
      component: CustomerExperience,
      meta: { locale: 'en' },
    },
    {
      path: `${customerExperience.nl}`,
      name: 'CustomerExperience-nl',
      component: CustomerExperience,
      meta: { locale: 'nl' },
    },
    {
      path: `${customerExperience.de}`,
      name: 'CustomerExperience-de',
      component: CustomerExperience,
      meta: { locale: 'de' },
    },
    generateRedirect(customerExperience, 'en', 'en'),
    generateRedirect(customerExperience, 'en', 'nl'),
    generateRedirect(customerExperience,'en', 'de'),
    generateRedirect(customerExperience,'nl', 'en'),
    generateRedirect(customerExperience,'nl', 'nl'),
    generateRedirect(customerExperience,'nl', 'de'),
    generateRedirect(customerExperience,'de', 'en'),
    generateRedirect(customerExperience,'de', 'nl'),
    generateRedirect(customerExperience,'de', 'de'),



      // CUSTOMER EXPERIENCE CONTACT
    {
      path: `${customerExperienceContact.en}`,
      name: 'CustomerExperience-Contact',
      component: CustomerExperience,
      meta: {element: '#getStarted', locale: 'en' },
    },
    {
      path: `${customerExperienceContact.nl}`,
      name: 'CustomerExperience-Contact-nl',
      component: CustomerExperience,
      meta: {element: '#getStarted', locale: 'nl' },
    },
    {
      path: `${customerExperienceContact.de}`,
      name: 'CustomerExperience-Contact-de',
      component: CustomerExperience,
      meta: {element: '#getStarted', locale: 'de' },
    },
    generateRedirect(customerExperienceContact, 'en', 'en'),
    generateRedirect(customerExperienceContact, 'en', 'nl'),
    generateRedirect(customerExperienceContact,'en', 'de'),
    generateRedirect(customerExperienceContact,'nl', 'en'),
    generateRedirect(customerExperienceContact,'nl', 'nl'),
    generateRedirect(customerExperienceContact,'nl', 'de'),
    generateRedirect(customerExperienceContact,'de', 'en'),
    generateRedirect(customerExperienceContact,'de', 'nl'),
    generateRedirect(customerExperienceContact,'de', 'de'),


      // CUSTOMER EXPERIENCE ENGAGEMENT STRATEGY
    {
      path: `${customerExperienceEngagementStrategy.en}`,
      name: 'CustomerExperience-EngagementStrategy',
      component: CustomerExperience,
      meta: {element: '#engagementStrategy', locale: 'en' },
    },
    {
      path: `${customerExperienceEngagementStrategy.nl}`,
      name: 'CustomerExperience-EngagementStrategy-nl',
      component: CustomerExperience,
      meta: {element: '#engagementStrategy', locale: 'nl' },
    },
    {
      path: `${customerExperienceEngagementStrategy.de}`,
      name: 'CustomerExperience-EngagementStrategy-de',
      component: CustomerExperience,
      meta: {element: '#engagementStrategy', locale: 'de' },
    },
    generateRedirect(customerExperienceEngagementStrategy, 'en', 'en'),
    generateRedirect(customerExperienceEngagementStrategy, 'en', 'nl'),
    generateRedirect(customerExperienceEngagementStrategy,'en', 'de'),
    generateRedirect(customerExperienceEngagementStrategy,'nl', 'en'),
    generateRedirect(customerExperienceEngagementStrategy,'nl', 'nl'),
    generateRedirect(customerExperienceEngagementStrategy,'nl', 'de'),
    generateRedirect(customerExperienceEngagementStrategy,'de', 'en'),
    generateRedirect(customerExperienceEngagementStrategy,'de', 'nl'),
    generateRedirect(customerExperienceEngagementStrategy,'de', 'de'),


      // CUSTOMER EXPERIENCE TELEPHONE CUSTOMER CARE
    {
      path: `${customerExperienceTelephoneCustomerCare.en}`,
      name: 'CustomerExperience-TelephoneCustomerCare',
      component: CustomerExperience,
      meta: {element: '#telephoneCustomerCare', locale: 'en' },
    },
    {
      path: `${customerExperienceTelephoneCustomerCare.nl}`,
      name: 'CustomerExperience-TelephoneCustomerCare-nl',
      component: CustomerExperience,
      meta: {element: '#telephoneCustomerCare', locale: 'nl' },
    },
    {
      path: `${customerExperienceTelephoneCustomerCare.de}`,
      name: 'CustomerExperience-TelephoneCustomerCare-de',
      component: CustomerExperience,
      meta: {element: '#telephoneCustomerCare', locale: 'de' },
    },
    generateRedirect(customerExperienceTelephoneCustomerCare, 'en', 'en'),
    generateRedirect(customerExperienceTelephoneCustomerCare, 'en', 'nl'),
    generateRedirect(customerExperienceTelephoneCustomerCare,'en', 'de'),
    generateRedirect(customerExperienceTelephoneCustomerCare,'nl', 'en'),
    generateRedirect(customerExperienceTelephoneCustomerCare,'nl', 'nl'),
    generateRedirect(customerExperienceTelephoneCustomerCare,'nl', 'de'),
    generateRedirect(customerExperienceTelephoneCustomerCare,'de', 'en'),
    generateRedirect(customerExperienceTelephoneCustomerCare,'de', 'nl'),
    generateRedirect(customerExperienceTelephoneCustomerCare,'de', 'de'),

    // CUSTOMER EXPERIENCE APPOINTMENT OPTIMIZATION
    {
      path: `${customerExperienceAppointmentOptimization.en}`,
      name: 'CustomerExperience-AppointmentOptimization',
      component: CustomerExperience,
      meta: {element: '#appointmentOptimization', locale: 'en' },
    },
    {
      path: `${customerExperienceAppointmentOptimization.nl}`,
      name: 'CustomerExperience-AppointmentOptimization-nl',
      component: CustomerExperience,
      meta: {element: '#appointmentOptimization', locale: 'nl' },
    },
    {
      path: `${customerExperienceAppointmentOptimization.de}`,
      name: 'CustomerExperience-AppointmentOptimization-de',
      component: CustomerExperience,
      meta: {element: '#appointmentOptimization', locale: 'de' },
    },
    generateRedirect(customerExperienceAppointmentOptimization, 'en', 'en'),
    generateRedirect(customerExperienceAppointmentOptimization, 'en', 'nl'),
    generateRedirect(customerExperienceAppointmentOptimization,'en', 'de'),
    generateRedirect(customerExperienceAppointmentOptimization,'nl', 'en'),
    generateRedirect(customerExperienceAppointmentOptimization,'nl', 'nl'),
    generateRedirect(customerExperienceAppointmentOptimization,'nl', 'de'),
    generateRedirect(customerExperienceAppointmentOptimization,'de', 'en'),
    generateRedirect(customerExperienceAppointmentOptimization,'de', 'nl'),
    generateRedirect(customerExperienceAppointmentOptimization,'de', 'de'),

    // CUSTOMER EXPERIENCE AI VOICEBOT
    {
      path: `${customerExperienceAiVoicebot.en}`,
      name: 'CustomerExperience-AiVoicebot',
      component: CustomerExperience,
      meta: {element: '#aiVoicebot', locale: 'en' },
    },
    {
      path: `${customerExperienceAiVoicebot.nl}`,
      name: 'CustomerExperience-AiVoicebot-nl',
      component: CustomerExperience,
      meta: {element: '#aiVoicebot', locale: 'nl' },
    },
    {
      path: `${customerExperienceAiVoicebot.de}`,
      name: 'CustomerExperience-AiVoicebot-de',
      component: CustomerExperience,
      meta: {element: '#aiVoicebot', locale: 'de' },
    },
    generateRedirect(customerExperienceAiVoicebot, 'en', 'en'),
    generateRedirect(customerExperienceAiVoicebot, 'en', 'nl'),
    generateRedirect(customerExperienceAiVoicebot,'en', 'de'),
    generateRedirect(customerExperienceAiVoicebot,'nl', 'en'),
    generateRedirect(customerExperienceAiVoicebot,'nl', 'nl'),
    generateRedirect(customerExperienceAiVoicebot,'nl', 'de'),
    generateRedirect(customerExperienceAiVoicebot,'de', 'en'),
    generateRedirect(customerExperienceAiVoicebot,'de', 'nl'),
    generateRedirect(customerExperienceAiVoicebot,'de', 'de'),



      //END to END SUPPORT

    {
      path: `${endToEndSupport.en}`,
      name: 'EndToEndSupport',
      component: EndToEndSupport,
      meta: { locale: 'en' },
    },
    {
      path: `${endToEndSupport.nl}`,
      name: 'EndToEndSupport-nl',
      component: EndToEndSupport,
      meta: { locale: 'nl' },
    },
    {
      path: `${endToEndSupport.de}`,
      name: 'EndToEndSupport-de',
      component: EndToEndSupport,
      meta: { locale: 'de' },
    },
    generateRedirect(endToEndSupport, 'en', 'en'),
    generateRedirect(endToEndSupport, 'en', 'nl'),
    generateRedirect(endToEndSupport,'en', 'de'),
    generateRedirect(endToEndSupport,'nl', 'en'),
    generateRedirect(endToEndSupport,'nl', 'nl'),
    generateRedirect(endToEndSupport,'nl', 'de'),
    generateRedirect(endToEndSupport,'de', 'en'),
    generateRedirect(endToEndSupport,'de', 'nl'),
    generateRedirect(endToEndSupport,'de', 'de'),


    //END to END SUPPORT CONTACT

    {
      path: `${endToEndSupportContact.en}`,
      name: 'EndToEndSupport-Contact',
      component: EndToEndSupport,
      meta: { element: '#getStarted', locale: 'en' },
    },
    {
      path: `${endToEndSupportContact.nl}`,
      name: 'EndToEndSupport-Contact-nl',
      component: EndToEndSupport,
      meta: { element: '#getStarted', locale: 'nl' },
    },
    {
      path: `${endToEndSupportContact.de}`,
      name: 'EndToEndSupport-Contact-de',
      component: EndToEndSupport,
      meta: { element: '#getStarted', locale: 'de' },
    },
    generateRedirect(endToEndSupportContact, 'en', 'en'),
    generateRedirect(endToEndSupportContact, 'en', 'nl'),
    generateRedirect(endToEndSupportContact,'en', 'de'),
    generateRedirect(endToEndSupportContact,'nl', 'en'),
    generateRedirect(endToEndSupportContact,'nl', 'nl'),
    generateRedirect(endToEndSupportContact,'nl', 'de'),
    generateRedirect(endToEndSupportContact,'de', 'en'),
    generateRedirect(endToEndSupportContact,'de', 'nl'),
    generateRedirect(endToEndSupportContact,'de', 'de'),


    //END to END SUPPORT ENGAGEMENT

    {
      path: `${endToEndSupportCustomerEngagement.en}`,
      name: 'EndToEndSupport-CustomerEngagement',
      component: EndToEndSupport,
      meta: { element: '#engagementStrategy', locale: 'en' },
    },
    {
      path: `${endToEndSupportCustomerEngagement.nl}`,
      name: 'EndToEndSupport-CustomerEngagement-nl',
      component: EndToEndSupport,
      meta: { element: '#engagementStrategy', locale: 'nl' },
    },
    {
      path: `${endToEndSupportCustomerEngagement.de}`,
      name: 'EndToEndSupport-CustomerEngagement-de',
      component: EndToEndSupport,
      meta: { element: '#engagementStrategy', locale: 'de' },
    },
    generateRedirect(endToEndSupportCustomerEngagement, 'en', 'en'),
    generateRedirect(endToEndSupportCustomerEngagement, 'en', 'nl'),
    generateRedirect(endToEndSupportCustomerEngagement,'en', 'de'),
    generateRedirect(endToEndSupportCustomerEngagement,'nl', 'en'),
    generateRedirect(endToEndSupportCustomerEngagement,'nl', 'nl'),
    generateRedirect(endToEndSupportCustomerEngagement,'nl', 'de'),
    generateRedirect(endToEndSupportCustomerEngagement,'de', 'en'),
    generateRedirect(endToEndSupportCustomerEngagement,'de', 'nl'),
    generateRedirect(endToEndSupportCustomerEngagement,'de', 'de'),


    //END to END SUPPORT DATA ENRICHMENT

    {
      path: `${endToEndSupportDataEnrichment.en}`,
      name: 'EndToEndSupport-DataEnrichment',
      component: EndToEndSupport,
      meta: { element: '#dataEnrichment', locale: 'en' },
    },
    {
      path: `${endToEndSupportDataEnrichment.nl}`,
      name: 'EndToEndSupport-DataEnrichment-nl',
      component: EndToEndSupport,
      meta: { element: '#dataEnrichment', locale: 'nl' },
    },
    {
      path: `${endToEndSupportDataEnrichment.de}`,
      name: 'EndToEndSupport-DataEnrichment-de',
      component: EndToEndSupport,
      meta: { element: '#dataEnrichment', locale: 'de' },
    },
    generateRedirect(endToEndSupportDataEnrichment, 'en', 'en'),
    generateRedirect(endToEndSupportDataEnrichment, 'en', 'nl'),
    generateRedirect(endToEndSupportDataEnrichment,'en', 'de'),
    generateRedirect(endToEndSupportDataEnrichment,'nl', 'en'),
    generateRedirect(endToEndSupportDataEnrichment,'nl', 'nl'),
    generateRedirect(endToEndSupportDataEnrichment,'nl', 'de'),
    generateRedirect(endToEndSupportDataEnrichment,'de', 'en'),
    generateRedirect(endToEndSupportDataEnrichment,'de', 'nl'),
    generateRedirect(endToEndSupportDataEnrichment,'de', 'de'),


    //END to END SUPPORT LEAD GENERATION

    {
      path: `${endToEndSupportLeadGeneraton.en}`,
      name: 'EndToEndSupport-LeadGeneraton',
      component: EndToEndSupport,
      meta: { element: '#leadGeneration', locale: 'en' },
    },
    {
      path: `${endToEndSupportLeadGeneraton.nl}`,
      name: 'EndToEndSupport-LeadGeneraton-nl',
      component: EndToEndSupport,
      meta: { element: '#leadGeneration', locale: 'nl' },
    },
    {
      path: `${endToEndSupportLeadGeneraton.de}`,
      name: 'EndToEndSupport-LeadGeneraton-de',
      component: EndToEndSupport,
      meta: { element: '#leadGeneration', locale: 'de' },
    },
    generateRedirect(endToEndSupportLeadGeneraton, 'en', 'en'),
    generateRedirect(endToEndSupportLeadGeneraton, 'en', 'nl'),
    generateRedirect(endToEndSupportLeadGeneraton,'en', 'de'),
    generateRedirect(endToEndSupportLeadGeneraton,'nl', 'en'),
    generateRedirect(endToEndSupportLeadGeneraton,'nl', 'nl'),
    generateRedirect(endToEndSupportLeadGeneraton,'nl', 'de'),
    generateRedirect(endToEndSupportLeadGeneraton,'de', 'en'),
    generateRedirect(endToEndSupportLeadGeneraton,'de', 'nl'),
    generateRedirect(endToEndSupportLeadGeneraton,'de', 'de'),

    //END to END SUPPORT LEAD CLOSING

    {
      path: `${endToEndSupportLeadClosing.en}`,
      name: 'EndToEndSupport-LeadClosing',
      component: EndToEndSupport,
      meta: { element: '#leadClosing', locale: 'en' },
    },
    {
      path: `${endToEndSupportLeadClosing.nl}`,
      name: 'EndToEndSupport-LeadClosing-nl',
      component: EndToEndSupport,
      meta: { element: '#leadClosing', locale: 'nl' },
    },
    {
      path: `${endToEndSupportLeadClosing.de}`,
      name: 'EndToEndSupport-LeadClosing-de',
      component: EndToEndSupport,
      meta: { element: '#leadClosing', locale: 'de' },
    },
    generateRedirect(endToEndSupportLeadClosing, 'en', 'en'),
    generateRedirect(endToEndSupportLeadClosing, 'en', 'nl'),
    generateRedirect(endToEndSupportLeadClosing,'en', 'de'),
    generateRedirect(endToEndSupportLeadClosing,'nl', 'en'),
    generateRedirect(endToEndSupportLeadClosing,'nl', 'nl'),
    generateRedirect(endToEndSupportLeadClosing,'nl', 'de'),
    generateRedirect(endToEndSupportLeadClosing,'de', 'en'),
    generateRedirect(endToEndSupportLeadClosing,'de', 'nl'),
    generateRedirect(endToEndSupportLeadClosing,'de', 'de'),

      //THANK YOU
    {
      path: '/thank-you/:form',
      name: 'Thank You',
      component: ThankYou,
    },
  ],
  fallback: true,
  scrollBehavior: function (to) {
    if (to.meta?.element) {
        return {
          selector: to.meta.element,
          behavior: 'smooth',
          offset: { x: 0, y: 120 },
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
