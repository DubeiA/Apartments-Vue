<template>
  <div class="wrapper-input">
    <input
      class="custom-input"
      type="text"
      v-bind="$attrs"
      :class="!isValid && 'custom-input--error'"
      v-model="inputValue"
    />
    <span v-if="!isValid" class="custom-input__error">{{ error }}</span>
  </div>
</template>

<script>
// import { onMounted } from 'vue';

export default {
  name: "CustomInput",
  inheritAttrs: false,

  data() {
    return {
      isValid: true,
      error: "",
      inputValue: this.value,
    };
  },
  inject: ["form"],
  props: {
    errorMessage: {
      type: String,
      default: "",
    },
    rules: {
      type: Array,
      default: () => [],
    },
    value: {
      type: String,
      default: "",
    },
  },
  watch: {
    inputValue() {
      this.validate(this.inputValue);
    },
  },
  mounted() {
    if (!this.form) return;

    this.form.registerInput(this);
  },
  beforeUnmount() {
    if (!this.form) return;

    this.form.unRegisterInput(this);
  },

  // setup() {
  //   onMounted(() => {
  //     this.form.registerInput(this);
  //   });
  // },
  methods: {
    validate() {
      this.isValid = this.rules.every((rule) => {
        const { hasPassed, message } = rule(this.value);

        if (!hasPassed) {
          this.error = message || this.errorMessage;
        }

        return hasPassed;
      });

      return this.isValid;
    },
    reset() {
      // this.inputValue = "";
      this.$emit("input", "");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

.wrapper-input {
  position: relative;
  display: inline-flex;
}
.custom-input {
  min-height: 40px;
  border: 2px solid $orange;
  font-size: 18px;
  outline: none;
  line-height: inherit;
  padding: 8px 15px;
  max-width: 220px;
  width: 100%;

  &::placeholder {
    color: inherit;
  }

  &--error {
    border-color: $error;
  }

  &__error {
    position: absolute;
    top: 100%;
    right: 0;
    width: 100%;
    font-size: 12px;
    color: $error;
    line-height: 1.3;
  }
}
</style>
