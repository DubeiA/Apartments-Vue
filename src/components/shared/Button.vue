<template>
  <button
    v-bind:type="type"
    :disabled="loading"
    :class="{ btn: true, 'btn--outlined': outlined }"
  >
    <Loader v-if="loading" width="38" height="38" class="btn__loader" />
    <span class="btn__content" :class="contentStyle">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import Loader from "../loader/Loader";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Button",
  components: {
    Loader,
  },
  props: {
    type: {
      type: String,
      default: "button",
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    contentStyle() {
      return { "btn__content--hidden": this.loading };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
.btn {
  position: relative;
  display: inline-block;
  font-size: 18px;
  background-color: $orange;
  color: $white;
  cursor: pointer;
  min-width: 220px;
  border: 1px solid transparent;
  padding: 8px 15px;
  transition: background-color 0.4s, color 0.4s;
  font-family: Montserrat, sans-serif;

  &:hover {
    background-color: $white;
    color: $orange;
    border: 1px solid $orange;
  }

  &--outlined {
    background: none;
    border: 1px solid $orange;
    color: $orange;
  }

  &__content {
    &--hidden {
      opacity: 0;
    }
  }
  &__loader {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
