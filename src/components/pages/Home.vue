<template>
    <div :class="'home'">
        <navigation :full-logo="true" :light-logo="true"/>

        <div class="section section--cover" :style="`background-image: url(${images.coverBg});`">
            <div class="section__mask"></div>
            <div class="section__content">
                <h1>
                    {{ $t(`home.title`) }}
                </h1>
                <h2>
                    {{ $t(`home.subtitle`) }}
                </h2>
                <div>
                    <a class="button button--hollow">
                        <span class="text">
                            {{ $t(`navigation.contactUs`) }}
                        </span>
                        <span class="dot"></span>
                        <span class="icon-wrapper">
                    <icons icon="chevronRight" stroke-width="3" stroke="#fff" height="24" width="24" />
                  </span>
                    </a>
                </div>

            </div>
        </div>

        <div class="section-divider"></div>

        <div class="section section--about full-height">
            <div class="facts">
                <div class="fact">
                    <span class="icon-wrapper">
                        <icons icon="check" stroke="#fff" stroke-width="2" height="18" width="18" />
                    </span>
                    {{ $t(`home.about.facts.qualitativeTelemarketing`) }}
                </div>
                <div class="fact-divider"></div>
                <div class="fact">
                    <span class="icon-wrapper">
                        <icons icon="check" stroke="#fff" stroke-width="2" height="18" width="18" />
                    </span>
                    {{ $t(`home.about.facts.multilingualTelemarketers`) }}
                </div>
                <div class="fact-divider"></div>
                <div class="fact">
                    <span class="icon-wrapper">
                        <icons icon="check" stroke="#fff" stroke-width="2" height="18" width="18" />
                    </span>
                    {{ $t(`home.about.facts.costEffectiveResults`) }}
                </div>
            </div>
            <div class="about">

            </div>
        </div>
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

      images = {
          gradientMask: '',
          coverBg: '',
      };

      created() {
          // this.images.gradientMask = require('@/assets/images/backgrounds/gradient_layer.png');
          this.images.coverBg = require('@/assets/images/backgrounds/movements_call-center_bg.png');

      }
  }

  export default Home;
</script>

<style lang="scss">
    .section--cover {
        height: calc(100vh - 160px);
        position: relative;
        background-position: center;

        .section__content {
            text-align: left;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;

            .button {
                transform: translateX(-20px);
                transition: transform ease 350ms;

                &:hover {
                    transform: translateX(0px);
                }
            }

            h1 {
                font-size: 72px;
                line-height: 68px;
                color: #186267;
                font-weight: 800;
                -webkit-text-stroke-width: 2px;
                -webkit-text-stroke-color: #186267;
                max-width: 60%;
                margin-bottom: 50px;
                letter-spacing: 1px;

                &::before {
                    content: '';
                    display: block;
                    width: 50px;
                    height: 8px;
                    background: #e8a500;
                }
            }

            h2 {
                color: #186267;
                font-size: 34px;
                font-style: italic;
                margin-bottom: 80px;
            }
        }
    }

    .section--about {

        .facts {
            height: 120px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #186267;

            .fact {
                font-size: 24px;
                letter-spacing: 1px;
                display: flex;
                align-items: center;

                .icon-wrapper {
                    padding: 5px;
                    margin-right: 10px;
                    border-radius: 50px;
                    background: #49AF4E;
                }
            }

            .fact-divider {
                height: 50px;
                width: 4px;
                margin: 0 20px;
                background: #e8a500;
            }
        }

        .about {

        }
    }

</style>
