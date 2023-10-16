<template>
  <select v-bind="$attrs" class="custom-select">
    <option
      v-for="item in formatedItems"
      :key="item.value"
      :value="item.value"
      :selected="item.selected"
    >
      {{ item.label }}
    </option>
  </select>
</template>

<script>
export default {
  name: "CustomSelect",
  inheritAttrs: false,
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  computed: {
    formatedItems() {
      return this.items.map((item) => {
        return typeof item === "object" ? item : { value: item, label: item };
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
.custom-select {
  height: 40px;
  border: 2px solid $orange;
  font-size: 18px;
  outline: none;
  padding: 8px 15px;
  cursor: pointer;
  display: inline-block;
  max-width: 220px;
  width: 100%;
}
</style>
