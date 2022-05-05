<template>
    <div :class="'home'">
        <navigation :full-logo="true" :light-logo="true"/>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';
  import Navigation from "@/components/base/Navigation.vue";

  @Component({
    components: {
        Navigation,
    }
  })
  class Home extends Vue {

  }

  export default Home;
</script>

<style lang="scss">

</style>
