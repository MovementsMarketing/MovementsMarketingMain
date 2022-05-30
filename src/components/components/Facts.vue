<template>
  <div class="facts m-b-20 m-t-20">
    <div v-for="(f,i) in facts" class="fact" :key="`fact-${i}`">
      <div class="fact">
             <span class="icon-wrapper">
        <icons icon="check" stroke="#fff" stroke-width="2" height="18" width="18" />
      </span>
        {{ f }}
      </div>
      <div v-if="i !== facts.length-1" class="fact-divider"></div>
    </div>
  </div>

</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component, Prop } from 'vue-property-decorator';

  @Component
  class Facts extends Vue {
    @Prop({default: ()=>[]})
    facts: string[];

  }

  export default Facts;
</script>

<style lang="scss">
  .facts {
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #186267;

    @media screen  and (max-width: 920px) {
      flex-direction: column;
      height: auto;
      padding: 20px;

      >.fact {
        flex-direction: column;
      }
    }

    .fact {
      font-size: 24px;
      letter-spacing: 1px;
      display: flex;
      align-items: center;

      @media screen  and (max-width: 1200px) {
        font-size: 20px;
      }

      @media screen  and (max-width: 340px) {
        font-size: 18px;
      }

      .icon-wrapper {
        padding: 5px;
        margin-right: 10px;
        border-radius: 50px;
        background: #49AF4E;

        @media screen  and (max-width: 1200px) {
          margin-right: 5px;
        }

      }
    }

    .fact-divider {
      height: 50px;
      width: 4px;
      margin: 0 20px;
      background: #e8a500;

      @media screen  and (max-width: 1200px) {
        margin: 0 10px;
      }

      @media screen  and (max-width: 920px) {
        width: 50px;
        height: 4px;
        margin: 20px 0;
      }
    }
  }


</style>
