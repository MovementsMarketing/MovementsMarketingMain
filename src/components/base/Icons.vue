<template>
    <span class="vue-icon__wrapper is-flex">
        <svg
                v-html="icons[icon]"
                xmlns="http://www.w3.org/2000/svg"
                :width="width"
                :height="height"
                :viewBox="viewBox"
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

    @Prop({default: 'currentColor'})
    stroke: string;

      @Prop({default: '0 0 24 24'})
      viewBox: string;

    icons = {
        x: `<line xmlns="http://www.w3.org/2000/svg" x1="18" y1="6" x2="6" y2="18"/> <line xmlns="http://www.w3.org/2000/svg" x1="6" y1="6" x2="18" y2="18"/>`,
        facebook: `<path xmlns="http://www.w3.org/2000/svg" d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>`,
        instagram: `<path xmlns="http://www.w3.org/2000/svg" d="M160,128a32,32,0,1,1-32-32A32.03667,32.03667,0,0,1,160,128Zm68-44v88a56.06353,56.06353,0,0,1-56,56H84a56.06353,56.06353,0,0,1-56-56V84A56.06353,56.06353,0,0,1,84,28h88A56.06353,56.06353,0,0,1,228,84Zm-52,44a48,48,0,1,0-48,48A48.05436,48.05436,0,0,0,176,128Zm16-52a12,12,0,1,0-12,12A12,12,0,0,0,192,76Z"/>`,
        linkedin: `<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>`,
        youtube: `<path xmlns="http://www.w3.org/2000/svg" d="M95.201,25.538c-1.186-5.152-5.4-8.953-10.473-9.52c-12.013-1.341-24.172-1.348-36.275-1.341   c-12.105-0.007-24.266,0-36.279,1.341c-5.07,0.567-9.281,4.368-10.467,9.52C0.019,32.875,0,40.884,0,48.438   C0,55.992,0,64,1.688,71.336c1.184,5.151,5.396,8.952,10.469,9.52c12.012,1.342,24.172,1.349,36.277,1.342   c12.107,0.007,24.264,0,36.275-1.342c5.07-0.567,9.285-4.368,10.471-9.52c1.689-7.337,1.695-15.345,1.695-22.898   C96.875,40.884,96.889,32.875,95.201,25.538z M35.936,63.474c0-10.716,0-21.32,0-32.037c10.267,5.357,20.466,10.678,30.798,16.068   C56.434,52.847,46.23,58.136,35.936,63.474z"></path>`,
        globe: `<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>`,
        chevronDown: `<polyline xmlns="http://www.w3.org/2000/svg" points="6 9 12 15 18 9"/>`,
        chevronsDown: `<polyline xmlns="http://www.w3.org/2000/svg" points="7 13 12 18 17 13"/><polyline xmlns="http://www.w3.org/2000/svg" points="7 6 12 11 17 6"/>`,
        chevronUp: `<polyline xmlns="http://www.w3.org/2000/svg" points="18 15 12 9 6 15"/>`,
        chevronRight: `<polyline xmlns="http://www.w3.org/2000/svg" points="9 18 15 12 9 6"/>`,
        chevronLeft: `<polyline xmlns="http://www.w3.org/2000/svg" points="15 18 9 12 15 6"/>`,
        check: `<polyline xmlns="http://www.w3.org/2000/svg" points="20 6 9 17 4 12"/>`,
        location: `<path xmlns="http://www.w3.org/2000/svg" d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/> <circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="10" r="3"/>`,
        arrowRight: `<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>`,
    };

  }

  export default Icons;
</script>
