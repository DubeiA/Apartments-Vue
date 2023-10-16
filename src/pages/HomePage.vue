<template>
  <main class="home-page">
    <Container>
      <ApartmentFilterForm class="apartment-filter" @submit="filter" />
    </Container>
    <Container>
      <p v-if="!filteredApartments.length">Нічого не знайдено</p>
      <ApartmentsList v-else :items="filteredApartments">
        <template v-slot:apartment="{ apartment }">
          <ApartmentsItem
            :key="apartment.id"
            :id="apartment.id"
            :descr="apartment.descr"
            :rating="apartment.rating"
            :imgSrc="apartment.imgUrl"
            :price="apartment.price"
          />
        </template>
      </ApartmentsList>
    </Container>
  </main>
</template>

<script>
import ApartmentsList from "../components/apartment/ApartmentsList";
import ApartmentsItem from "../components/apartment/ApartmentsItem";
import apartments from "../components/apartment/apartments";
import ApartmentFilterForm from "../components/apartment/ApartmentFilterForm.vue";
import Container from "../components/shared/Container.vue";

export default {
  name: "HomePage",
  components: {
    ApartmentsList,
    ApartmentsItem,
    Container,
    ApartmentFilterForm,
  },
  data() {
    return {
      text: "",
      apartments,
      filters: {
        city: "",
        price: 0,
      },
    };
  },
  computed: {
    filteredApartments() {
      return this.filterByCityName(this.filterByPrice(this.apartments));
    },
  },
  methods: {
    filter({ city, price }) {
      if (city !== undefined) {
        this.filters.city = city;
      }
      if (price !== undefined) {
        this.filters.price = price;
      }
      console.log({ city, price }, "event");
    },
    filterByCityName(apartments) {
      if (!this.filters.city) return apartments;

      return apartments.filter((apartment) => {
        return apartment.location.city === this.filters.city;
      });
    },
    filterByPrice(apartments) {
      if (!this.filters.price) return apartments;

      return apartments.filter((apartment) => {
        return apartment.price >= this.filters.price;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.apartment-filter {
  margin-bottom: 40px;
}
</style>
