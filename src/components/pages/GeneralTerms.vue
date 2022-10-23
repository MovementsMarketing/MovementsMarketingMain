<template>
  <div class="general-terms has-bg-white">
    <navigation :full-logo="true" :light-logo="true"/>

    <div class="section">
      <div class="section__content">
        <div class="p-b-10 p-t-10">
          <h4 class="m-b-15">
            {{$t('generalTerms.title')}}
          </h4>
        </div>

        <div v-for="(a, i) in articles" :key="`article-${i}`" class="p-b-10">
          <h6 v-html="a.title" class="has-text-weight-semibold"></h6>
          <p v-html="a.text"></p>
        </div>

      </div>
    </div>

    <movements-footer/>

  </div>

</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
class GeneralTerms extends Vue {
  get articles(){
    return [
      {
        title: this.$t(`generalTerms.article1.title`),
        text: this.$t(`generalTerms.article1.text`),
      },
      {
        title: this.$t(`generalTerms.article2.title`),
        text: this.$t(`generalTerms.article2.text`),
      },
      {
        title: this.$t(`generalTerms.article3.title`),
        text: this.$t(`generalTerms.article3.text`),
      },
      {
        title: this.$t(`generalTerms.article4.title`),
        text: this.$t(`generalTerms.article4.text`),
      },
      {
        title: this.$t(`generalTerms.article5.title`),
        text: this.$t(`generalTerms.article5.text`),
      },
      {
        title: this.$t(`generalTerms.article6.title`),
        text: this.$t(`generalTerms.article6.text`),
      },
      {
        title: this.$t(`generalTerms.article7.title`),
        text: this.$t(`generalTerms.article7.text`),
      },
      {
        title: this.$t(`generalTerms.article8.title`),
        text: this.$t(`generalTerms.article8.text`),
      },
      {
        title: this.$t(`generalTerms.article9.title`),
        text: this.$t(`generalTerms.article9.text`),
      },
      {
        title: this.$t(`generalTerms.article10.title`),
        text: this.$t(`generalTerms.article10.text`),
      },
      {
        title: this.$t(`generalTerms.article11.title`),
        text: this.$t(`generalTerms.article11.text`),
      },
      {
        title: this.$t(`generalTerms.article12.title`),
        text: this.$t(`generalTerms.article12.text`),
      },
      {
        title: this.$t(`generalTerms.article13.title`),
        text: this.$t(`generalTerms.article13.text`),
      },
      {
        title: this.$t(`generalTerms.article14.title`),
        text: this.$t(`generalTerms.article14.text`),
      },
      {
        title: this.$t(`generalTerms.article15.title`),
        text: this.$t(`generalTerms.article15.text`),
      },
      {
        title: this.$t(`generalTerms.article16.title`),
        text: this.$t(`generalTerms.article16.text`),
      },
      {
        title: this.$t(`generalTerms.article17.title`),
        text: this.$t(`generalTerms.article17.text`),
      },
      {
        title: this.$t(`generalTerms.article18.title`),
        text: this.$t(`generalTerms.article18.text`),
      },
      {
        title: this.$t(`generalTerms.article19.title`),
        text: this.$t(`generalTerms.article19.text`),
      },
      {
        title: this.$t(`generalTerms.article20.title`),
        text: this.$t(`generalTerms.article20.text`),
      },
      {
        title: this.$t(`generalTerms.article21.title`),
        text: this.$t(`generalTerms.article21.text`),
      },
      {
        title: this.$t(`generalTerms.article22.title`),
        text: this.$t(`generalTerms.article22.text`),
      },
      {
        title: this.$t(`generalTerms.article23.title`),
        text: this.$t(`generalTerms.article23.text`),
      },
      {
        title: this.$t(`generalTerms.article24.title`),
        text: this.$t(`generalTerms.article24.text`),
      },
      {
        title: this.$t(`generalTerms.article25.title`),
        text: this.$t(`generalTerms.article25.text`),
      },
      {
        title: this.$t(`generalTerms.article26.title`),
        text: this.$t(`generalTerms.article26.text`),
      },
      {
        title: this.$t(`generalTerms.article27.title`),
        text: this.$t(`generalTerms.article27.text`),
      },
      {
        title: this.$t(`generalTerms.article28.title`),
        text: this.$t(`generalTerms.article28.text`),
      },
    ];
  }
}

export default GeneralTerms;
</script>

<style lang="scss">
.general-terms {
  text-align: left;

  ol {
    padding-left: 15px;

    li {
      margin-bottom: 2px;
    }
  }

  p {
    font-size: 16px;
    line-height: 24px;
  }

  .section {
    a {
      font-weight: 700;
      color: #186267;

      &:hover {
        color: #9FF882;
      }
    }
  }
}

</style>
