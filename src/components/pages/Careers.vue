<template>
  <div class="careers">
    <navigation :full-logo="true" :light-logo="true"/>

    <service-cover :data="coverData"/>

    <div class="section section--positions">
      <h2 class="positions__title" v-html="$t(`careers.positions.title`)"> </h2>

      <div class="section__content positions__open columns m-t-30 m-b-30 is-multiline">
        <div v-for="(position, index) in positions" :key="`position-${index}`" class="column is-6">
          <position :data="position"/>
        </div>
      </div>

      <p class="positions__copy" v-html="$t(`careers.positions.copy`)"></p>
    </div>

    <div class="section-divider"></div>

    <div class="section section--offers">
      <h2 class="offers__title" v-html="$t(`careers.offers.title`)"> </h2>

      <div class="section__content offers__perks columns m-t-30 m-b-30 is-multiline">
        <div v-for="(perk, index) in perks" :key="`perk-${index}`" class="column is-4">
          <div class="perk">
            <div class="perk__icon">
              <img :src="perk.icon"/>

            </div>
            <div class="perk__name">
              <h5 v-text="perk.name" />
            </div>
          </div>
        </div>
      </div>

    </div>

    <div class="section section--careers-videos">
      <carousel-3d :width="600" :height="450" :controls-visible="true" :clickable="true">
        <slide :index="0">
          <iframe width="600" height="450"
                  src="https://www.youtube.com/embed/3Fn8LbUXtuI">
          </iframe>
        </slide>
        <slide :index="1">
          <iframe width="600" height="450"
                  src="https://www.youtube.com/embed/tVIhRSCdb_0">
          </iframe>
        </slide>
        <slide :index="2">
          <iframe width="600" height="450"
                  src="https://www.youtube.com/embed/D2eLnglOQK0">
          </iframe>
        </slide>
      </carousel-3d>
    </div>

    <movements-footer/>

  </div>

</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';
  import ServiceCover from "@/components/components/ServiceCover.vue";
  import Position from "@/components/components/Position.vue";

  @Component({
    components: {
      ServiceCover,
      Position,
    }
  })
  class Careers extends Vue {
    get coverData() {
      return  {
        cover: require('@/assets/images/careers/cover.png'),
        mask: require('@/assets/images/careers/mask.png'),
        title: this.$t(`careers.cover.title`),
        subtitle: this.$t(`careers.cover.subtitle`),
        cta: this.$t(`careers.cover.cta`),
      };
    }

    positions = [
      {
        name: 'Sales Manager Benelux',
        link: 'https://movements.bamboohr.com/jobs/',
        location: 'Utrecht, NL',
        type: 'Full - Time',
      },
      {
        name: 'Teamleader',
        link: 'https://movements.bamboohr.com/jobs/',
        location: 'Utrecht, NL',
        type: 'Full - Time',
      },
      {
        name: 'Sales Manager Benelux',
        link: 'https://movements.bamboohr.com/jobs/',
        location: 'Istanbul, TR',
        type: 'Full - Time',
      },
      {
        name: 'Teamleader',
        link: 'https://movements.bamboohr.com/jobs/',
        location: 'Istanbul, TR',
        type: 'Full - Time',
      },
    ];

    get perks() {
      return  [
        {
          icon: require('@/assets/images/careers/perks/1.png'),
          name: this.$t(`careers.offers.perks.perk1`),
        },
        {
          icon: require('@/assets/images/careers/perks/2.png'),
          name: this.$t(`careers.offers.perks.perk2`),
        },
        {
          icon: require('@/assets/images/careers/perks/3.png'),
          name: this.$t(`careers.offers.perks.perk3`),
        },
        {
          icon: require('@/assets/images/careers/perks/4.png'),
          name: this.$t(`careers.offers.perks.perk4`),
        },
        {
          icon: require('@/assets/images/careers/perks/5.png'),
          name: this.$t(`careers.offers.perks.perk5`),
        },
        {
          icon: require('@/assets/images/careers/perks/6.png'),
          name: this.$t(`careers.offers.perks.perk6`),
        },
      ];
    }
  }

  export default Careers;
</script>

<style lang="scss">
  .careers {
    .section.section--service-cover {
      .section__content {
        h1 {
          font-weight: 300;

          .is-highlighted {
            display: unset;
          }
        }
      }
    }

    .section.section--positions {
      padding: 50px 0;

      h2.positions__title,
      .positions__copy {
        color: #008d90;

        .is-highlighted {
          font-weight: 700;
        }
      }
    }

    .section.section--offers {
      padding: 50px 0;
      background: #fff;

      h2.offers__title {
        color: #008d90;

        .is-highlighted {
          font-weight: 700;
        }
      }

      .perk {
        .perk__icon {
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
        }

        .perk__name {
          color: #008d90;
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 20px;

          @media (min-resolution: 100dpi) {
            font-size: 24px;
          }
        }
      }
    }

    .section.section--careers-videos {
      padding: 50px 0;

      .carousel-3d-container {
        .carousel-3d-controls {
          .prev,
          .next {
            background: #008d90;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 10px 10px 10px;

            span {
              color: #fff;
            }

            &:hover {
              background: #9FF882;
            }
          }

          .prev {
            left: 300px;
          }

          .next {
            right: 300px;
          }
        }
      }
    }
  }

</style>
