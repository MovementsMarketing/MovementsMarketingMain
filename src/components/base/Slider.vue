<template>
    <div class="slide">
      <div class="slide__images" :style="imagesPosition">
        <div v-for="(s, index) in slidesData" :key="`img-${index}`" class="slide__image lh-0">
          <img :src="slidesData[currentNumber].img" :alt="slidesData[currentNumber].name"/>
        </div>
      </div>

      <div class="slide__title">
        <h2  v-html="$t(`home.clients.ourClients`)"></h2>
      </div>

        <div class="columns is-multiline slide__content m-r-0 m-l-0">
            <div
                class="column p-0 is-12-tablet is-6-desktop slide__text-column"
                :style="`background-image: url('${glassMask}'); backdrop-filter: blur(5.6px); -webkit-backdrop-filter: blur(5.6px);`"
            >
              <div class="slide__text">
                <div v-for="(s, index) in slidesData" :key="index">
                  <transition name='fade' mode="out-in">
                    <div>
                      <div class="logo" v-if="currentNumber === index">
                        <img :src="slidesData[currentNumber].logo" :alt="`Client ${slidesData[currentNumber].name}`"/>
                      </div>
                      <p class="text"  v-if="currentNumber === index">
                        <span v-html="slidesData[currentNumber].text"></span>
                      </p>
                    </div>
                  </transition>
                </div>
              </div>
            </div>
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

          img {
            width: 100vw;
            max-width: 2500px;

            @media screen and (max-width: 768px) {
              width: 100vw;
            }
          }
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
          font-weight: 800;
          text-shadow: 1px 1px 2px #909090;

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

          @media screen and (max-width: 768px) {
            position: relative;
            background: #186267;
          }

          .slide__text-column {
            @media screen and (max-width: 768px) {
              position: relative;
            }

            @media screen and (max-width: 768px) {
              background: none !important;
            }
          }

          .slide__text {
            height: 100%;
            text-align: justify;
            position: relative;

            @media screen and (max-width: 768px) {
              padding: 50px 100px;
            }

            @media screen and (max-width: 420px) {
              padding: 20px 20px 80px;
            }

            >div {
              position: absolute;
              height: 100%;
              width: 100%;
              padding-left: 350px;
              padding-right: 100px;
              display: flex;
              align-items: center;

              @media (min-resolution: 100dpi) {
                padding-left: 220px;
              }

              @media screen and (max-width: 1400px) {
                padding-left: 100px;
              }

              @media screen and (max-width: 1024px) {
                padding-left: 80px;
                padding-right: 80px;
              }

              @media screen and (max-width: 768px) {
                position: relative;
                padding: 0;
              }
            }

            .text {
              @media screen and (max-width: 768px) {
                font-size: 15px;
              }
            }

            .logo {
              max-width: 50%;
              margin-bottom: 40px;

              @media screen and (max-width: 768px) {
                max-width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto 10px;

                img {
                  width: auto;
                  height: 40px;
                }
              }
            }

            p {
              color: white;
              font-weight: 600;
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

    @media screen and (max-width: 768px) {
      right: 20px;
      bottom: 20px;
    }

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

      @media screen and (max-width: 768px) {
        width: 40px;
        height: 40px;
      }

      &:hover {
        background: #9FF882;
      }
    }
  }

</style>
