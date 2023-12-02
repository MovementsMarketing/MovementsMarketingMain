<template>
  <div class="cover">
    <div class="cover__content m-0">
      <div class="cover__text">
        <div class="cover__text__box has-padding-left">
          <h1 v-html="$t(`home.title`)" class="cover__title"></h1>
          <h5 v-html="$t(`home.subtitle`)" class="cover__subtitle is-movements-green"></h5>
        </div>
      </div>
      <div class="cover__photo">
        PHOTO
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
class Cover extends Vue {

}

export default Cover;
</script>

<style lang="scss">
.cover {
  background: #fff;
  width: 100%;
  height: calc(100vh - 120px);

  @media screen  and (max-width: 780px) {
    min-height: 65vw;
  }

  .cover__content {
    background: #F2F2F2;
    border-radius: 0 0 260px 0;
    width: 100%;
    height: 100%;
    display: flex;

    @media screen  and (max-width: 780px) {
      position: relative;
      border-radius: 0 0 160px 0;
    }

    .cover__text {
      flex-grow: 1;
      display: flex;
      align-items: center;
      position: relative;

      @media screen  and (max-width: 780px) {
        position: unset;
      }

      .cover__text__box {
        background: #ffffff;
        position: absolute;
        width: calc(100% + 180px);
        min-height: 50vh;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        border-radius: 0 20px 20px 0;
        padding-top: 50px;
        padding-bottom: 50px;
        padding-right: 50px;

        @media screen and (max-width: 1400px) {
          width: calc(100% + 240px);
        }

        @media screen  and (max-width: 780px) {
          width: calc(100% + -60px);
          background: rgba(255, 255, 255, 0.6);
          left: 30px;
          padding-top: 40px;
          padding-bottom: 40px;
          padding-right: 40px;
          border-radius: 15px;
        }

        .cover__title {
          text-align: left;
          margin-bottom: 40px;

          @media screen  and (max-width: 780px) {
            text-align: center;
            margin-bottom: 20px;
          }
        }

        .cover__subtitle {
          text-align: left;

          @media screen  and (max-width: 780px) {
            text-align: center;
          }
        }
      }
    }

    .cover__photo {
      width: calc(100vh - 120px);
      background: #186267;
      border-radius: 260px 0 260px 0;

      @media screen and (max-width: 1400px) {
        max-width: 60%;
      }

      @media screen  and (max-width: 780px) {
        max-width: 100%;
        width: 100%;
        border-radius: 0 0 160px 0;
      }
    }
  }
}
</style>
