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
        <service-block :img-url="el.imgSrc" :name="el.title" :is-left="el.isLeft">
          <template #title>
            <span v-html="el.title"></span>
          </template>
          <template #text>
            <span v-html="el.text"></span>
          </template>
          <template #cta>
<!--            <learn-more :url="el.url"/>-->
          </template>
        </service-block>
      </div>
    </div>

    <case-studies :title="$t(`services.endToEnd.caseStudies.title`)" :case-studies="caseStudies"/>

    <div id="getStarted">
      <service-form
          :title="$t(`services.endToEnd.contact.title`)"
          :subtitle="$t(`services.endToEnd.contact.subtitle`)"
          :text="$t(`services.endToEnd.contact.text`)"
          form-name="endToEnd"
          service-type="endToEnd"/>
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
  class EndToEndSupport extends Vue {


    dots = require('@/assets/images/dots-green.png');
    debouncedHandleScroll = _.debounce(this.handleScroll, 1200);


    isElementInViewport = {
      getStarted: false,
      engagementStrategy: false,
      dataEnrichment: false,
      leadGeneration: false,
      leadClosing: false,
    }

    get coverData(){
      return {
        img: require('@/assets/images/services/end_to_end/end-to-end-cover.png'),
        title: this.$t(`services.endToEnd.cover.title`),
        subtitle: this.$t(`services.endToEnd.cover.subtitle`),
        cta: this.$t(`services.endToEnd.cover.cta`),
      };
    }

    get caseStudies(){
      return [
        {
          img:  require('@/assets/images/services/end_to_end/caseStudies/end-to-end-study-1.png'),
          title: this.$t(`services.endToEnd.caseStudies.study1.title`),
          text: this.$t(`services.endToEnd.caseStudies.study1.text`),
        },
        {
          img:  require('@/assets/images/services/end_to_end/caseStudies/end-to-end-study-2.png'),
          title: this.$t(`services.endToEnd.caseStudies.study2.title`),
          text: this.$t(`services.endToEnd.caseStudies.study2.text`),
        },
        {
          img:  require('@/assets/images/services/end_to_end/caseStudies/end-to-end-study-3.png'),
          title: this.$t(`services.endToEnd.caseStudies.study3.title`),
          text: this.$t(`services.endToEnd.caseStudies.study3.text`),
        },
      ]

    }

    //todo translations
    get routes() {
      if(this.$i18n.locale === 'nl') {
        return {
          getStarted: '/end-to-end-sales-support/getStarted',
        }
      } else if(this.$i18n.locale === 'de') {
        return {
          getStarted: '/end-to-end-sales-support/getStarted',
        }
      } else {
        return {
          getStarted: '/end-to-end-sales-support/getStarted',
        }
      }
    }

    get services() {
      return  [
        {
          title: this.$t(`services.endToEnd.engagementStrategy.title`),
          text: this.$t(`services.endToEnd.engagementStrategy.text`),
          imgSrc: require('@/assets/images/services/end_to_end/end-to-end-engagement.png'),
          isLeft: false,
          id: 'engagementStrategy'
        },
        {
          title: this.$t(`services.endToEnd.dataEnrichment.title`),
          text: this.$t(`services.endToEnd.dataEnrichment.text`),
          imgSrc: require('@/assets/images/services/end_to_end/end-to-end-data.png'),
          isLeft: true,
          id: 'dataEnrichment'
        },
        {
          title: this.$t(`services.endToEnd.leadGeneration.title`),
          text: this.$t(`services.endToEnd.leadGeneration.text`),
          imgSrc: require('@/assets/images/services/end_to_end/end-to-end-lead-generation.png'),
          isLeft: false,
          id: 'leadGeneration'
        },
        {
          title: this.$t(`services.endToEnd.leadClosing.title`),
          text: this.$t(`services.endToEnd.leadClosing.text`),
          imgSrc: require('@/assets/images/services/end_to_end/end-to-end-lead-closing.png'),
          isLeft: true,
          id: 'leadClosing'
        },
      ];
    }


    handleScroll() {
      // @ts-ignore
      const element = this.$router.history.current?.meta?.element;

      setTimeout(() => {
        // @ts-ignore
        if(element && !this.isElementInViewport[element.substring(1)]) {
          // @ts-ignore
          const pathArray = this.$router.history.current.fullPath.split('/');
          pathArray.pop();

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


    updated () {
      this.scrollToAnchor();
    }

    // Remove the scroll event listener when the component is destroyed
    beforeDestroy() {
      window.removeEventListener('scroll', this.debouncedHandleScroll);
    }

  }

  export default EndToEndSupport;
</script>

<style lang="scss">


</style>
