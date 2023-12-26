<template>
  <div class="team has-bg-gray">
    <navigation :full-logo="true" :light-logo="true" :translate-url="true"/>

    <cover-video :cover-title="coverData.title" :cover-text="coverData.text">
    </cover-video>

    <div class="section has-padding is-white our-team">
      <h2 v-html="$t(`ourTeam.team.title`)" class="has-line-center"></h2>
      <p v-html="$t(`ourTeam.team.text`)" class=""></p>
    </div>

    <div class="has-padding team__members columns is-multiline m-b-30">
      <div v-for="member in teamMembers" :key="member.name" class="member column is-6-tablet is-3-desktop">
        <div class="member__info">
          <img :src="member.img" class="member__photo"/>
          <h6 v-text="member.name" class="member__name has-text-weight-semibold"></h6>
          <p v-text="member.position"  class="member__position"></p>
          <hr/>
        </div>
<!--        <span v-text="member.description"  class="member__description:is-gray="true""></span>-->
      </div>
    </div>


    <movements-footer :is-gray="true"/>

  </div>

</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';
  import Position from "@/components/components/Position.vue";
  import CoverVideo from "@/components/components/CoverVideo.vue";

  @Component({
    components: {
      CoverVideo,
      Position,
    }
  })
  class Team extends Vue {
    get coverData() {
      return  {
        title: this.$t(`ourTeam.title`),
        text: this.$t(`ourTeam.coverText`),
      };
    }

    get teamMembers() {
      return [
        {
          img: require('@/assets/images/team/Mirza.jpg'),
          name: 'Mirza Ćuk',
          position: 'Chief Executive Officer',
        },
        {
          img: require('@/assets/images/team/Joost.jpg'),
          name: 'Joost Van Beers',
          position: 'Founder',
        },
        {
          img: require('@/assets/images/team/Anel.jpg'),
          name: 'Anel Bašić',
          position: 'Director of Customer Onboarding & Project Management',
        },
        {
          img: require('@/assets/images/team/Frans.jpg'),
          name: 'Frans Saelman',
          position: 'Chief Operating Officer',
        },
        {
          img: require('@/assets/images/team/Azra.jpg'),
          name: 'Azra Kerić',
          position: 'Project Management Lead',
        },
        {
          img: require('@/assets/images/team/Drago.jpg'),
          name: 'Drago Bikarević',
          position: 'Project Management Lead',
        },
        {
          img: require('@/assets/images/team/Elvir.jpg'),
          name: 'Elvir Merić',
          position: 'Project Management Lead',
        },
        {
          img: require('@/assets/images/team/Saskia.jpg'),
          name: 'Saskia Rijnders',
          position: 'Quality Analyst',
        },
        {
          img: require('@/assets/images/team/Alma.jpg'),
          name: 'Alma Hadžović',
          position: 'HR Manager',
        },
        {
          img: require('@/assets/images/team/Jasna.jpg'),
          name: 'Jasna Ibraković',
          position: 'Finance Manager',
        },
        {
          img: require('@/assets/images/team/Aida.jpg'),
          name: 'Aida Cvjetinović',
          position: 'Senior Digital Marketer',
        },
        {
          img: require('@/assets/images/team/Anela.jpg'),
          name: 'Anela Alilovski',
          position: 'Team Leader (German)',
        },
        {
          img: require('@/assets/images/team/Emina.jpg'),
          name: 'Emina Husejnović',
          position: 'Team Leader (Dutch)',
        },
        {
          img: require('@/assets/images/team/Asli.jpg'),
          name: 'Asli Birsel Basan',
          position: 'Supervisor Inbound (Dutch)',
        },
      ]
    }
  }

  export default Team;
</script>

<style lang="scss">
$border-radius: 60px;
$border-radius-small: 40px;

.team {
  .our-team {
    margin-top: -180px;

    @media screen  and (max-width: 1024px) {
      margin-top: -80px;
    }

    @media screen  and (max-width: 768px) {
      margin-top: 0;
    }
  }

  .team__members {
    .member {
      padding: 140px 20px 100px;
      border-radius: $border-radius 0 $border-radius 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: -40px;
      transition: all 700ms ease;
      height: 485px;

      @media screen  and (max-width: 768px) {
        border-radius: $border-radius-small 0 $border-radius-small 0;
        padding: 140px 20px;
      }

      @media screen  and (max-width: 420px) {
        height: 400px;
      }

      * {
        color: #ffffff !important;
      }

      .member__name,
      .member__position,
      .member__description,
      hr {
        opacity: 0;
        height: 0;
      }


      .member__info {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .member__photo {
          border-radius: $border-radius 0 $border-radius 0;
          width: 100%;
          max-width: 300px;
          transition: all 550ms ease;

          @media screen  and (max-width: 768px) {
            border-radius: $border-radius-small 0 $border-radius-small 0;
          }
        }
        hr {
          width: 50px;
          height: 4px;
          background: #69BC77;
          margin: 0;
        }
      }


      &:hover {
        background: #186267;
        padding: 20px;

        .member__info {
          //margin-bottom: 60px;

          .member__photo {
            max-width: 140px;
            margin-bottom: 20px;
            border-radius: 20px 0 20px 0;
          }

        }

        .member__name,
        .member__position,
        .member__description {
          opacity: 1;
          height: unset;
        }

        hr {
          opacity: 1;
          height: 4px;
          margin: 15px 0 0;
        }
      }
    }
  }
}
</style>
