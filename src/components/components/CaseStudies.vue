<template>
    <div class="is-white section p-b-0">
      <div class="studies has-radius-bottom-right is-gray section p-t-0">
        <div class="section slider has-padding has-text-centered has-bg-dark">
          <h2 v-html="title" class="has-line-center studies__title m-0"></h2>
        </div>
        <div class="columns is-multiline has-padding studies__list">
          <div v-for="s in caseStudies" :key="s.title" class="column is-6-tablet is-4-desktop p-20">
            <case-study :data="s"/>
          </div>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  import CaseStudy from "@/components/components/CaseStudy.vue";

  @Component({
    components: {
      CaseStudy,
    }
  })
  class CaseStudies extends Vue {
    @Prop({required: true})
    title: string

    @Prop({required: true})
    caseStudies: {
      img: String,
      title: String,
      text: String,
    }[]


  }
  export default CaseStudies;
</script>

<style lang="scss">
.studies {
  .studies__title {
    color: #ffffff;
  }

  .studies__list {
    margin-top: -78px;
  }
}

</style>
