<template>
  <form class="form" @submit.prevent="handleSubmit">
    <CustomSelect
      :items="cities"
      class="form__select"
      :value="city"
      @input="updateCity"
    />
    <CustomInput :value="price" @input="updatePrice" placeholder="Ціна, від " />
    <Button type="submit" class="form__submit">Підбір житла</Button>
  </form>
</template>

<script>
import CustomInput from "../shared/CustomInput.vue";
import CustomSelect from "../shared/CustomSelect.vue";
import Button from "../shared/Button.vue";

export default {
  name: "ApartmentFilterForm",
  components: {
    CustomSelect,
    CustomInput,
    Button,
  },
  data() {
    return {
      price: "",
      city: "",
    };
  },
  computed: {
    cities() {
      return [
        { value: "", label: "Місто", selected: true },
        "Kyiv",
        "Odesa",
        "Poltava",
        "Dnipro",
        "Lviv",
        "Mariupol",
        "Kharkiv",
        "Kherson",
      ];
    },
  },
  methods: {
    handleSubmit() {
      this.$emit("submit", {
        city: this.city,
        price: this.price,
      });
    },
    updatePrice(event) {
      this.price = event.target.value;
    },
    updateCity(event) {
      this.city = event.target.value;
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;

  &__select {
    margin-right: 30px;
  }

  &__submit {
    margin-left: auto;
  }
}
</style>
