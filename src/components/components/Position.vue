<template>
  <a class="position-link" :href="data.link" target="_blank">
    <div class="position">
      <p class="type"> {{data.type}} </p>
      <h3 class="name"> {{data.name}} </h3>
      <p class="location">
        <icons icon="location" stroke="#008d90" height="16" width="16" />
        {{data.location}}
      </p>
      <div class="cta">
        <icons icon="chevronRight" stroke-width="3" stroke="#fff" height="24" width="24" />
      </div>
    </div>
  </a>

</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component, Prop } from 'vue-property-decorator';

  @Component
  class Position extends Vue {
    @Prop({default: ()=>[]})
    data: any;

  }

  export default Position;
</script>

<style lang="scss">

  .position-link {
    border-radius: 20px;

    .position {
      background: #fff;
      box-shadow: 0 0 12px rgb(0 0 0 / 10%);
      border-radius: 20px;
      text-align: left;
      padding: 15px;
      position: relative;
      transition: all 200ms ease;
      min-height: 135px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .type,
      .location {
        font-size: 16px;

        @media screen  and (max-width: 768px) {
          font-size: 14px;
        }
      }

      .type {
        color: #9e9e9e;
        font-size: 14px;
        margin-bottom: 2px;
      }

      .location {
        color: #008d90;
        display: flex;
        align-items: center;

        .vue-icon__wrapper {
          margin-right: 5px;
        }
      }

      .name {
        color: #008d90;
        font-weight: 800;
        padding-bottom: 5px;
        font-size: 20px;
        line-height: 22px;
        padding-right: 50px;


        @media screen  and (max-width: 768px) {
          font-size: 18px;
          line-height: 20px;
        }
      }

      .cta {
        background-color: #008d90;
        border-radius: 50%;
        position: absolute;
        height: 40px;
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        right: 20px;
        top: calc(50% - 20px);
        transition: all 200ms ease;
      }

      &:hover {
        box-shadow: 0 0 15px rgb(0 0 0 / 25%);

        .cta {
          background: #9FF882;
        }
      }
    }
  }

</style>
