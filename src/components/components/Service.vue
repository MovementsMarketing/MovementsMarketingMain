<template>
  <router-link :to="url">

    <div class="service">
      <h4 class="service__name">
        {{ name }}
      </h4>
      <div class="service__line">
      </div>
      <div class="service__action">
        <icons icon="chevronRight" stroke-width="3" stroke="#fff" height="24" width="24" />
      </div>
      <div class="service__icon">
        <img :src="imgSrc">

      </div>

    </div>
  </router-link>

</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component, Prop } from 'vue-property-decorator';

  @Component
  class Service extends Vue {
    @Prop({default: ''})
    name: string;

    @Prop({default: ''})
    url: string;

    @Prop({default: ''})
    imgSrc: string;

  }

  export default Service;
</script>

<style lang="scss">
  .service {
    position: relative;
    overflow: hidden;
    height: 160px;
    width: 220px;
    background: #fff;
    padding: 10px;
    text-align: left;
    border-radius: 12px;

    @media screen  and (max-width: 1400px) {
      height: 150px;
      width: 200px;
    }

    @media screen  and (max-width: 1200px) {
      height: 140px;
      width: 180px;
    }

    @media screen  and (max-width: 1024px) {
      margin-bottom: 20px;
    }

    @media screen  and (max-width: 768px) {
      width: 100%;
    }

    .service__name {
      max-width: 30%;
      font-size: 18px;
      line-height: 22px;
      font-weight: 800;
      color: #C8C8C8;
      padding-bottom: 5px;
    }

    .service__line {
      width: 50%;
      height: 2px;
      background: #c8c8c8;
    }

    .service__action {
      padding-top: 25px;

      .vue-icon__wrapper {
        background: #c8c8c8;
        width: 40px;
        height: 40px;
        justify-content: center;
        align-items: center;
        border-radius: 50px;
      }
    }

    .service__icon {
      position: absolute;
      width: 80%;
      left: 45%;
      top: 35px;

      @media screen and (max-width: 768px) {
        width: auto;
        right: -5%;
        left: unset;
      }

      img {
        filter: grayscale(1);
      }
    }

    &:hover {
      box-shadow: 1px 1px 12px rgb(0 0 0 / 20%);

      .service__name {
        color: #008d90;
      }

      .service__line {
        background: #9FF882;
      }

      .service__action {
        .vue-icon__wrapper {
          background: #008d90;
        }
      }

      .service__icon {
        img {
          filter: none;
        }
      }
    }
  }


</style>
