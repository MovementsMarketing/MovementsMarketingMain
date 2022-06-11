<template>
  <div class="section section--service-sales">
    <div class="section__content">
      <div class="columns is-multiline">
        <div class="column is-12">
          <h3 v-html="title"></h3>
        </div>
        <div
            v-for="(block, i) in blocks" :key="`block-${i}`"
            class="column is-4 has-text-centered"
            style="position: relative;"
        >
          <div class="sales__block">
            <div class="sales__icon">
              <img :src="block.icon"/>

            </div>
            <div class="sales__data">
              <h5 class="sales__title" v-text="block.title" />
              <p class="sales__text" v-text="block.text" />
            </div>
          </div>

          <div v-if="i !== blocks.length -1" class="sales__connection is-hidden-touch">
            <div class="line"></div>
            <div class="arrow">
              <icons icon="chevronRight" stroke="#9FF882" :width="40" :height="40" :stroke-width="2"/>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component, Prop } from 'vue-property-decorator';

  @Component
  class ServiceSales extends Vue {
    @Prop({default: ''})
    title: string;

    @Prop({default: () => []})
    blocks: any[];
  }

  export default ServiceSales;
</script>

<style lang="scss">

  .section.section--service-sales {
    padding: 40px 0 20px 0;

    .section__content {

      @media screen  and (max-width: 1024px) {
        padding: 40px !important;
      }

      h3 {
        color: #008d90;
        font-size: 48px;

        @media (min-resolution: 100dpi) {
          font-size: 42px;
        }

        @media screen  and (max-width: 768px) {
          font-size: 32px;
        }

        @media screen  and (max-width: 420px) {
          font-size: 28px;
        }
      }

      .sales__block {
        padding: 50px;

        @media screen  and (max-width: 1024px) {
          padding: 20px;
        }

        .sales__icon {
          margin: 0 auto 40px auto;
          background: #fff;
          border-radius: 50%;
          box-shadow: 0 0 12px rgb(0 0 0 / 20%);
          width: 180px;
          height: 180px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          z-index: 1;

          @media screen  and (max-width: 1024px) {
            width: 150px;
            height: 150px;
          }

          @media screen and (max-width: 768px) {
            width: 120px;
            height: 120px;
            padding: 30px;
          }
        }

        .sales__title {
          color: #008d90;
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 20px;

          @media (min-resolution: 100dpi) {
            font-size: 24px;
          }
        }

        .sales__text{
          color: #008d90;
          font-size: 20px;
          text-align: justify;

          @media (min-resolution: 100dpi) {
            font-size: 18px;
          }
        }
      }

      .sales__connection {
        position: absolute;
        width: 100%;
        top: 150px;
        left: 50%;
        z-index: 0;

        .line {
          border-top: 4px dashed #9FF882;
        }

        .arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          top: -18px;
          width: 100%;
        }
      }
    }

  }

</style>
