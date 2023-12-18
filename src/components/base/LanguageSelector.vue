<template>
  <div class="is-flex is-fullheight">
    <navigation-dropdown :is-mobile="true" :is-right="true">
      <template v-slot:title>
        <div class="is-flex is-align-items-center">
          <icons icon="globe" stroke-width="2" height="24" width="24" class="is-fixed"/>
          <span v-text="currentLang.toUpperCase()" class="m-l-5"></span>
        </div>
      </template>
      <template v-slot:content>
        <div :class="currentLang === 'en' ? `navigation__language active` : `navigation__language`"
             @click="setLanguage('en')"
        >
          <div class="navigation__language__flag">
            <img src="@/assets/images/flags/united-kingdom.png"/>
          </div>
          <span> EN </span>
        </div>
        <div :class="currentLang === 'nl' ? `navigation__language active` : `navigation__language`"
             @click="setLanguage('nl')"
        >
          <div class="navigation__language__flag">
            <img src="@/assets/images/flags/netherlands.png"/>
          </div>
          <span> NL </span>
        </div>
        <div :class="currentLang === 'de' ? `navigation__language active` : `navigation__language`"
             @click="setLanguage('de')"
        >
          <div class="navigation__language__flag">
            <img src="@/assets/images/flags/germany.png"/>
          </div>
          <span> DE </span>
        </div>
      </template>
    </navigation-dropdown>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import NavigationDropdown from "@/components/base/NavigationDropdown.vue";

@Component({
  components: {
    NavigationDropdown
  }
})
class LanguageSelector extends Vue {
  @Prop({default: true})
  translateUrl: boolean;

  isLanguagesActive = false;

  setLanguage(lang: string) {
    console.log(lang, this.$i18n.locale, this.translateUrl)
    if(lang === this.$i18n.locale) return;

    this.$i18n.locale = lang;

    if(this.translateUrl && !this.$route.fullPath.includes('tryNow')) {
      let newPath = `${this.$route.fullPath}/${lang}`.replace('//', '/');
      console.log(newPath)
     this.$router.push(newPath);
    }
  }

  get currentLang() {
    return this.$i18n.locale
  }
}

export default LanguageSelector;
</script>

<style lang="scss">
.navigation__language {
  display: flex;
  gap: 5px;
  align-items: center;
  cursor: pointer;

  &:not(:last-of-type) {
    margin-bottom: 20px;
  }

  &:hover {
    span {
      color: #69BC77 !important;
    }
  }

  &.active {
    opacity: 0.5;
  }

  .navigation__language__flag {
    width: 24px;
    height: 24px;
  }

}
</style>
