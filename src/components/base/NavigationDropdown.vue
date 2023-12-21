<template>
    <div class="navigation__item navigation__dropdown" :class="{'is-active': isActive, 'is-mobile': isMobile}" @click="handleClick" @mouseleave="onMouseLeave">
      <span class="navigation__dropdown__title">
        <slot name="title"></slot>
          <span class="m-l-5 is-flex is-align-items-center">
            <icons icon="chevronDown" stroke="#69BC77" stroke-width="4" height="20" width="20" />
          </span>
      </span>
      <div v-if="isActive" class="navigation-dropdown__content"  :class="{'is-mobile': isMobile, 'is-right': isRight, 'is-fullwidth': isFullWidth}">
        <slot name="content"></slot>
      </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
class NavigationDropdown extends Vue {
  @Prop({default: false})
  isFullWidth: boolean;

  @Prop({default: false})
  isMobile: boolean;

  @Prop({default: true})
  isRight: boolean;

  isActive = false;

  close() {
    this.isActive = false;
  }

  handleClick() {
    this.isActive = !this.isActive;

    if(this.isActive) {
      this.$emit('navigationDropdown:open')
    }
  }

  onMouseLeave() {
    if(this.isFullWidth) return;

    setTimeout(()=>{
      this.close();
    }, 300)
  }
}

export default NavigationDropdown;
</script>

<style lang="scss">
.navigation__dropdown {
  position: relative;
  height: 100%;

  &:not(.is-mobile) {
    @media screen and (max-width: 1024px) {
      height: auto;
      width: 100%;
      flex-direction: column;
      border-radius: 0 0 60px 0;
    }
  }


  .navigation__dropdown__title {
    display: flex;
    cursor: pointer;

    .vue-icon__wrapper {
      transition: transform ease 150ms;
    }

    &:hover {
      span {
        color: #69BC77 !important;
      }
    }
  }

  .navigation-dropdown__content {
    position: absolute;
    background: #F2F2F2;
    min-width: 100%;
    left: 0;
    top: 120px;
    padding: 40px 40px 40px 20px;
    border-radius: 0 0 60px 0;
    text-align: left;
    line-height: 18px;
    box-shadow: 0 4px 4px 0 rgba(157, 172, 167, 0.3);

    &.is-right {
      border-radius: 0 0 0 60px;
    }

    &.is-fullwidth {
      position: fixed;
      max-width: 100%;
      width: 100%;
      padding: 40px 260px;

      @media screen and (max-width: 1600px) {
        padding: 40px 180px;
      }

      @media screen and (max-width: 1400px) {
        padding: 40px 100px;
      }
    }

    @media screen and (max-width: 1024px) {
      border-radius: 0 0 40px 0;

      &.is-right {
        border-radius: 0 0 0 40px;
      }

      &:not(.is-mobile) {
        height: auto;
        width: 100%;
        position: relative;
        box-shadow: none;
        top: 0;
        padding: 20px 40px;
        background: transparent;
      }

      &.is-mobile {
        top: 118px;
        padding: 20px 20px 20px 10px;
      }
    }

    @media screen and (max-width: 768px) {
      &:not(.is-mobile) {
        padding: 20px;

        a {
          text-wrap: wrap !important;
        }
      }
    }

    &.is-mobile {
      @media screen  and (max-width: 780px) {
        top: 98px;
      }
    }
  }

  &.is-active {
    background: #F2F2F2;

    .vue-icon__wrapper:not(.is-fixed) {
      transform: rotate(180deg);
    }

    .navigation__dropdown__title {
      span {
        color: #69BC77 !important;
      }
    }
  }
}
</style>
