<template>
  <div class="has-bg-gray">
    <navigation :full-logo="true" :light-logo="true" :translate-url="true"/>

    <cover :cover-image="coverData.img" :cover-title="coverData.title" :cover-subtitle="coverData.subtitle" :is-green="true">
      <template #cta>
        <router-link :to="routes.getStarted" class="button button--primary cover__cta">
          <span class="text">
            {{ coverData.cta }}
          </span>
          <span class="dot"></span>
          <span class="icon-wrapper">
            <icons icon="arrowRight" stroke-width="3" stroke="#fff" height="20" width="20" />
          </span>
        </router-link>
      </template>
    </cover>

    <div class="section is-white">
      <div v-for="(el, index) in services" :key="`service-${index}`" class="home__service" :id="el.id">
        <service-block :img-url="el.imgSrc" :name="el.title" :is-left="el.isLeft" :is-highlighted="el.isHighlighted">
          <template #title>
            <span v-html="el.title"></span>
          </template>
          <template #text>
            <span v-html="el.text"></span>
          </template>
          <template #cta v-if="el.url">
            <a :href="el.url" target="_blank" class="button button--hollow">
              <span class="text">
                {{ el.cta }}
              </span>
              <span class="dot"></span>
              <span class="icon-wrapper">
                <icons icon="arrowRight" stroke-width="3" stroke="#fff" height="20" width="20" />
              </span>
            </a>
          </template>
        </service-block>
      </div>
    </div>

    <case-studies :title="$t(`services.customerExperience.caseStudies.title`)" :case-studies="caseStudies"/>

    <div id="getStarted">
      <service-form
          :title="$t(`services.customerExperience.contact.title`)"
          :subtitle="$t(`services.customerExperience.contact.subtitle`)"
          :text="$t(`services.customerExperience.contact.text`)"
          form-name="customerExperience"
          service-type="customerExperience"/>
    </div>

    <movements-footer/>

  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';
  import ServiceCover from "@/components/components/ServiceCover.vue";
  import Facts from "@/components/components/Facts.vue";
  import ServiceInformation from "@/components/components/ServiceInformation.vue";
  import Quote from "@/components/components/Quote.vue";
  import ServiceTrial from "@/components/components/ServiceTrial.vue";
  import ServiceSales from "@/components/components/ServiceSales.vue";
  import ServiceForm from "@/components/components/ServiceForm.vue";
  import Cover from "@/components/components/Cover.vue";
  import ServiceBlock from "@/components/components/ServiceBlock.vue";
  import LearnMore from "@/components/components/LearnMore.vue";
  import CaseStudies from "@/components/components/CaseStudies.vue";
  import _ from 'lodash';

  @Component({
    components: {
      LearnMore,
      CaseStudies,
      Cover,
      ServiceBlock,
      ServiceCover,
      Facts,
      ServiceInformation,
      Quote,
      ServiceTrial,
      ServiceSales,
      ServiceForm,
    }
  })
  class CustomerExperience extends Vue {


    dots = require('@/assets/images/dots-green.png');
    debouncedHandleScroll = _.debounce(this.handleScroll, 1200);

    isElementInViewport = {
      getStarted: false,
      engagementStrategy: false,
      telephoneCustomerCare: false,
      appointmentOptimization: false,
      aiVoicebot: false,
    }


    get coverData(){
      return {
        img: require('@/assets/images/services/customer_experience/customer-experience-cover.png'),
        title: this.$t(`services.customerExperience.cover.title`),
        subtitle: this.$t(`services.customerExperience.cover.subtitle`),
        cta: this.$t(`services.customerExperience.cover.cta`),
      };
    }

    get caseStudies(){
      return [
        {
          img:  require('@/assets/images/services/customer_experience/caseStudies/customer-experience-study-1.png'),
          title: this.$t(`services.customerExperience.caseStudies.study1.title`),
          text: this.$t(`services.customerExperience.caseStudies.study1.text`),
        },
        {
          img:  require('@/assets/images/services/customer_experience/caseStudies/customer-experience-study-2.png'),
          title: this.$t(`services.customerExperience.caseStudies.study2.title`),
          text: this.$t(`services.customerExperience.caseStudies.study2.text`),
        },
        {
          img:  require('@/assets/images/services/customer_experience/caseStudies/customer-experience-study-3.png'),
          title: this.$t(`services.customerExperience.caseStudies.study3.title`),
          text: this.$t(`services.customerExperience.caseStudies.study3.text`),
        },
      ]

    }

    //todo translations
    get routes() {
      if(this.$i18n.locale === 'nl') {
        return {
          getStarted: '/customer-experience/getStarted',
        }
      } else if(this.$i18n.locale === 'de') {
        return {
          getStarted: '/customer-experience/getStarted',
        }
      } else {
        return {
          getStarted: '/customer-experience/getStarted',
        }
      }
    }

    get services() {
      return  [
        {
          title: this.$t(`services.customerExperience.engagementStrategy.title`),
          text: this.$t(`services.customerExperience.engagementStrategy.text`),
          imgSrc: require('@/assets/images/services/customer_experience/customer-experience-engagement.png'),
          isLeft: false,
          id: 'engagementStrategy'
        },
        {
          title: this.$t(`services.customerExperience.telephoneCustomerCare.title`),
          text: this.$t(`services.customerExperience.telephoneCustomerCare.text`),
          imgSrc: require('@/assets/images/services/customer_experience/customer-experience-telephone.png'),
          isLeft: true,
          id: 'telephoneCustomerCare'
        },
        {
          title: this.$t(`services.customerExperience.appointmentOptimization.title`),
          text: this.$t(`services.customerExperience.appointmentOptimization.text`),
          imgSrc: require('@/assets/images/services/customer_experience/customer-experience-appointment.png'),
          isLeft: false,
          id: 'appointmentOptimization'
        },
        {
          title: this.$t(`services.customerExperience.aiAssistant.title`),
          text: this.$t(`services.customerExperience.aiAssistant.text`),
          imgSrc: require('@/assets/images/services/customer_experience/customer-experience-ai.png'),
          isLeft: true,
          isHighlighted: true,
          cta: this.$t(`services.customerExperience.aiAssistant.cta`),
          url: `https://services.movementsmarketing.com/voicebot/`,
          id: 'aiVoicebot'
        },
      ];
    }




    get informationData(){
      return {
        title: this.$t(`services.answeringService.info.title`),
        text: this.$t(`services.answeringService.info.content`),
        cover: require('@/assets/images/services/answering_service/info-cover.png'),
      };
    }

    get salesData() {
      return {
        title: this.$t(`services.answeringService.info.title`),
        blocks: [
          {
            icon: require('@/assets/images/services/answering_service/sales/1.png'),
            title: this.$t(`services.answeringService.sales.block1.title`),
            text: this.$t(`services.answeringService.sales.block1.text`)
          },
          {
            icon: require('@/assets/images/services/answering_service/sales/2.png'),
            title: this.$t(`services.answeringService.sales.block2.title`),
            text: this.$t(`services.answeringService.sales.block2.text`)
          },
          {
            icon: require('@/assets/images/services/answering_service/sales/3.png'),
            title: this.$t(`services.answeringService.sales.block3.title`),
            text: this.$t(`services.answeringService.sales.block3.text`)
          },
        ]
      };
    }

    handleScroll() {
      // @ts-ignore
      const element = this.$router.history.current?.meta?.element;
      const elementSubstring = element.substring(1);

      setTimeout(() => {
        // @ts-ignore
        if(element && !this.isElementInViewport[elementSubstring]) {
          // @ts-ignore
          const pathArray = this.$router.history.current.fullPath.split('/');
          pathArray.pop();

          console.log('IN IF', pathArray)

          const state = { isRouterChange: true };
          window.history.pushState(state, '',  pathArray.join('/'));
        }
      }, 200)
    }

    scrollToAnchor () {
      this.$nextTick(() => {
        if (this.$route.meta?.element) {
          const $el = document.querySelector(this.$route.meta?.element);
          $el && window.scrollTo(0, $el.offsetTop);
        }
      });
    }

    mounted() {
      this.scrollToAnchor();

      window.addEventListener('scroll', this.debouncedHandleScroll);

      const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              const elementId = entry.target.id;
              this.$set(this.isElementInViewport, elementId, entry.isIntersecting);
            });
          },
          {
            root: null,
            rootMargin: '0px',
            threshold: 0.2,
          }
      );

      Object.keys(this.isElementInViewport).forEach(elementId => {
        const targetElement = document.getElementById(elementId);

        if (targetElement) {
          observer.observe(targetElement);
        }
      });
    }

    beforeDestroy() {
      window.removeEventListener('scroll', this.debouncedHandleScroll);
    }

  }

  export default CustomerExperience;
</script>

<style lang="scss">


</style>
