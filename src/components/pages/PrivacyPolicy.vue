<template>
  <div class="privacy-policy-wrapper">
    <navigation :full-logo="true" :light-logo="true"/>

    <div class="privacy-policy has-bg-white">
      <div class="section">
        <div class="section__content">
          <div class="p-b-10">
            <h3 class="m-b-10">
              {{$t('privacyPolicy.title')}}
            </h3>
            <p v-html="$t('privacyPolicy.description')"></p>
          </div>

          <div class="p-b-10">
            <h5 v-html="$t('privacyPolicy.dataUsage.subtitle')"></h5>
            <p v-html="$t('privacyPolicy.dataUsage.text')"></p>
          </div>

          <div class="p-b-10">
            <h5 v-html="$t('privacyPolicy.personalData.subtitle')"></h5>
            <p v-html="$t('privacyPolicy.personalData.text')"></p>
          </div>

          <div class="p-b-10">
            <h5 v-html="$t('privacyPolicy.collaboration.subtitle')"></h5>
            <p v-html="$t('privacyPolicy.collaboration.text')"></p>
          </div>

          <div class="p-b-10">
            <h5 v-html="$t('privacyPolicy.thirdParties.subtitle')"></h5>
            <p v-html="$t('privacyPolicy.thirdParties.text')"></p>
          </div>

          <div class="p-b-10">
            <h5 v-html="$t('privacyPolicy.retention.subtitle')"></h5>
            <p v-html="$t('privacyPolicy.retention.text')"></p>
          </div>

          <div class="p-b-10">
            <h5 v-html="$t('privacyPolicy.security.subtitle')"></h5>
            <p v-html="$t('privacyPolicy.security.text')"></p>
          </div>

          <div class="p-b-10">
            <h5 v-html="$t('privacyPolicy.intellectual.subtitle')"></h5>
            <p v-html="$t('privacyPolicy.intellectual.text')"></p>
          </div>

          <div class="p-b-10">
            <h5 v-html="$t('privacyPolicy.minors.subtitle')"></h5>
            <p v-html="$t('privacyPolicy.minors.text')"></p>
          </div>

          <div class="p-b-10">
            <h5 v-html="$t('privacyPolicy.cookiePolicy.subtitle')"></h5>
            <p v-html="$t('privacyPolicy.cookiePolicy.text')"></p>
          </div>

          <div class="p-b-10">
            <h5 v-html="$t('privacyPolicy.cookies.subtitle')"></h5>
            <p v-html="$t('privacyPolicy.cookies.text')"></p>
          </div>

          <div class="p-b-10">
            <h5 v-html="$t('privacyPolicy.technicalCookies.subtitle')"></h5>
            <p v-html="$t('privacyPolicy.technicalCookies.text')"></p>
          </div>

          <div class="p-b-10">
            <h5 v-html="$t('privacyPolicy.analyticalCookies.subtitle')"></h5>
            <p v-html="$t('privacyPolicy.analyticalCookies.text')"></p>
          </div>

          <div class="p-b-10">
            <h5 v-html="$t('privacyPolicy.enableDisableCookies.subtitle')"></h5>
            <p v-html="$t('privacyPolicy.enableDisableCookies.text')"></p>
          </div>

          <div class="p-b-10">
            <h5 v-html="$t('privacyPolicy.deleteCookies.subtitle')"></h5>
            <p v-html="$t('privacyPolicy.deleteCookies.text')"></p>
          </div>

          <div class="p-b-10">
            <h5 v-html="$t('privacyPolicy.websiteLinks.subtitle')"></h5>
            <p v-html="$t('privacyPolicy.websiteLinks.text')"></p>
          </div>

          <div class="p-b-10">
            <h5 v-html="$t('privacyPolicy.legalRights.subtitle')"></h5>
            <p v-html="$t('privacyPolicy.legalRights.text')"></p>
          </div>

          <div class="p-b-10">
            <h5 v-html="$t('privacyPolicy.statementChanges.subtitle')"></h5>
            <p v-html="$t('privacyPolicy.statementChanges.text')"></p>
          </div>

          <div class="p-b-10">
            <h5 v-html="$t('privacyPolicy.authority.subtitle')"></h5>
            <p v-html="$t('privacyPolicy.authority.text')"></p>
          </div>
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
class PrivacyPolicy extends Vue {

}

export default PrivacyPolicy;
</script>

<style lang="scss">
.privacy-policy {
  text-align: left;

  ul {
    list-style: disc;
    padding-left: 25px;
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
