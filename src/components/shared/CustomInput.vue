<template>
  <label>
    <input class="custom-input" type="text" v-bind="$attrs" />
  </label>
</template>

<script>
export default {
  name: "CustomInput",
  inheritAttrs: false,
};
</script>

<style lang="scss" scoped>
@import "../../assets//scss/utils.scss";
.custom-input {
  min-height: 40px;
  border: 2px solid $orange;
  font-size: 18px;
  outline: none;
  line-height: inherit;
  padding: 8px 15px;
}
</style>
