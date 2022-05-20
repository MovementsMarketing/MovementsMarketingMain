<template>
    <div class="slide">
      <div class="slide__images" :style="imagesPosition">
        <div v-for="(s, index) in slidesData" :key="`img-${index}`" class="slide__image lh-0">
          <img :src="slidesData[currentNumber].img"/>
        </div>
      </div>

      <div class="slide__title">
        <h2  v-html="$t(`home.clients.ourClients`)"></h2>
      </div>

        <div class="columns is-multiline slide__content">
            <div
                class="column p-0 is-6"
                :style="`background-image: url('${glassMask}'); backdrop-filter: blur(5.6px); -webkit-backdrop-filter: blur(5.6px);`"
            >
              <div class="slide__text">
                <div v-for="(s, index) in slidesData" :key="index">
                  <transition name='fade' mode="out-in">
                    <div>
                      <div class="logo" v-if="currentNumber === index">
                        <img :src="slidesData[currentNumber].logo"/>
                      </div>
                      <p class="text"  v-if="currentNumber === index">
                        <span v-html="slidesData[currentNumber].text"></span>
                      </p>
                    </div>
                  </transition>
                </div>
              </div>
            </div>
          <div class="column p-0 is-6"></div>
        </div>
      <div class="slider__nav-wrapper">
        <div :style="this.currentNumber > 0 ? 'opacity: 1' : 'opacity: 0'" class="slider__nav slider__nav--prev" @click="previousSlide">
          <icons icon="chevronLeft" stroke="#fff" :width="24" :height="24" :stroke-width="3"></icons>
        </div>
        <div :style="this.currentNumber < (this.slidesData.length - 1) ? 'opacity: 1' : 'opacity: 0'" class="slider__nav slider__nav--prev" @click="nextSlide">
          <icons icon="chevronRight" stroke="#fff" :width="24" :height="24" :stroke-width="3"></icons>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component, Prop } from 'vue-property-decorator';

  @Component
  class Slider extends Vue {
    @Prop()
    slidesData: any[];

    timer: null | number;

    currentNumber = 0;

    glassMask = require('@/assets/images/backgrounds/glass_mask.png');

    get imagesPosition() {
      return `right: ${this.currentNumber * 100}%`;
    }

    startRotation() {
      this.timer = setInterval(this.nextSlide, 8000);
    }

    stopRotation() {
      if(this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
    }

    nextSlide(){
        if(this.currentNumber === this.slidesData.length - 1) {
           // this.currentNumber = 0;
            return;
        }
        this.currentNumber += 1
    }

      previousSlide(){
        if(this.currentNumber === 0) {
        //  this.currentNumber = this.slidesData.length - 1;
          return;
        }
          this.currentNumber -= 1
      }

      created(): void {
        //this.startRotation();
      }


  }

  export default Slider;
</script>

<style lang="scss">
    .slide {
        position: relative;
      overflow: hidden;

      .slide__images {
        display: flex;
        position: relative;
        transition: all ease 600ms;

        .slide__image {
          flex: none;
        }
      }

      .slide__title {
        position: absolute;
        top: 30px;
        width: 100%;
        z-index: 6;

        h2 {
          display: inline-block;
          position: relative;
          color: #fff;

          &::after {
            content: '';
            display: block;
            width: 100vw;
            height: 3px;
            background: #9FF882;
            left: 0;
            position: absolute;
          }
        }

      }

        .slide__content {
            position: absolute;
            height: 100%;
            width:100%;
            top:12px;
            left:0;

          .slide__text {
            height: 100%;
            text-align: justify;
            position: relative;

            >div {
              position: absolute;
              height: 100%;
              width: 100%;
              padding-left: 360px;
              padding-right: 100px;
              display: flex;
              align-items: center;
            }

            .logo {
              max-width: 50%;
              margin-bottom: 40px;
            }

            p {
              color: white;
            }

          }
        }
    }

  .slider__nav-wrapper {
    display: flex;
    width: 100px;
    justify-content: space-between;
    position: absolute;
    right: 120px;
    bottom: 100px;

    .slider__nav {
      width: 45px;
      height: 45px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background: #008d90;
      z-index: 5;
      position: relative;
      cursor: pointer;

      &:hover {
        background: #9FF882;
      }
    }
  }

</style>
