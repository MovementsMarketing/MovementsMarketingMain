<template>
    <span class="vue-icon__wrapper is-flex">
        <svg
                v-html="icons[icon]"
                xmlns="http://www.w3.org/2000/svg"
                :width="width"
                :height="height"
                viewBox="0 0 24 24"
                :fill="fill"
                :stroke="stroke"
                :stroke-width="strokeWidth"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="vue-icon"
        >

        </svg>
    </span>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component, Prop } from 'vue-property-decorator';

  @Component
  class Icons extends Vue {
    @Prop()
    icon: string;

    @Prop({default: 18})
    width: number;

    @Prop({default: 2})
    strokeWidth: number;

    @Prop({default: 18})
    height: number;

    @Prop({default: 'none'})
    fill: string;

    @Prop({default: '#000'})
    stroke: string;

    icons = {
        x: `<line xmlns="http://www.w3.org/2000/svg" x1="18" y1="6" x2="6" y2="18"/> <line xmlns="http://www.w3.org/2000/svg" x1="6" y1="6" x2="18" y2="18"/>`,
        facebook: `<path xmlns="http://www.w3.org/2000/svg" d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>`,
        instagram: `<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>`,
        globe: `<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>`,
        chevronDown: `<polyline xmlns="http://www.w3.org/2000/svg" points="6 9 12 15 18 9"/>`,
        chevronUp: `<polyline xmlns="http://www.w3.org/2000/svg" points="18 15 12 9 6 15"/>`,
        chevronRight: `<polyline xmlns="http://www.w3.org/2000/svg" points="9 18 15 12 9 6"/>`,
    };

  }

  export default Icons;
</script>
