<template>
  <div id="app">
    <router-view/>
    <cookie-law ref="cookieLaw" v-on:accept="setCookies"></cookie-law>
  </div>
</template>

<script>
import CookieLaw from 'vue-cookie-law'
import {Component, Watch} from "vue-property-decorator";
import Vue from "vue";

@Component({
  components: {
    CookieLaw
  },
})
class App extends Vue {
  @Watch('currentLanguage')
  onLangChange(lang) {
    if(this.$refs.cookieLaw.isAccepted()) {
      const newLang = { value: lang };
      this.$cookies.set('language', newLang);
    }
  }

  get currentLanguage() {
    return this.$i18n.locale;
  }

  setCookies() {
    if (this.$cookies.get('language')) return;
    const lang = { value: this.$i18n.locale };
    this.$cookies.set('language', lang);
  }

  mounted() {
    if(this.$refs.cookieLaw.isAccepted() && this.$cookies.get('language')) {
      this.$i18n.locale = this.$cookies.get('language')?.value;
    }
  }
}

export default App;
</script>

<style lang="scss" >
#app {
  font-family: 'Source Sans Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 150px;
  background: #ECECEC;

  @media (min-resolution: 100dpi) {
    margin-top: 120px;
  }
}

.Cookie {
  background: #e8a500;

  .Cookie__content {
    color: #fff;
    font-weight: 600;
  }

  .Cookie__button {
    background: #008d90;
  }
}
</style>
