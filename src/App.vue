<template>
  <div :id="$style.app">
    <h2>{{ text }}</h2>
    <CustomInput
      :value="text"
      @input="(event) => (text = event.target.value)"
    />

    <ApartmentsList :items="apartments">
      <template v-slot:apartment="{ apartment }">
        <ApartmentsItem
          :key="apartment.id"
          :descr="apartment.descr"
          :rating="apartment.rating"
          :imgSrc="apartment.imgUrl"
          :price="apartment.price"
          @click="handleItemClick"
        />
      </template>
    </ApartmentsList>
  </div>
</template>

<script>
import ApartmentsList from "./components/apartment/ApartmentsList";
import ApartmentsItem from "./components/apartment/ApartmentsItem";
import apartments from "./components/apartment/apartments";
import CustomInput from "./components/shared/CustomInput";

export default {
  name: "App",
  components: {
    ApartmentsList,
    ApartmentsItem,
    CustomInput,
  },
  data() {
    return {
      text: "",
      apartments,
    };
  },
  methods: {
    handleItemClick() {
      console.log("Click item");
      // console.log(event.target);
    },
  },
};
</script>

<style module>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
