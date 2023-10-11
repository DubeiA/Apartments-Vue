<template>
  <div :id="$style.app">
    <ApartmentsItem
      :descr="apartment.descr"
      :price="apartment.price"
      :rating="apartment.rating"
      imgSrc="https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg"
    />
  </div>
  <!-- <Btn @click="increment">Click me</Btn> -->
</template>

<script>
// import Btn from "./components/Button";
import ApartmentsItem from "./components/apartment/ApartmentsItem";

export default {
  name: "App",
  components: {
    // Btn,
    ApartmentsItem,
  },
  data() {
    return {
      apartment: {
        id: "2p3oij423ij5235ijp3223ijp",
        title:
          "Aut qui adipisci distinctio maiores molestiae sit est inventore vero.",
        descr:
          "Non perferendis rerum a in nisi exercitationem dolorum perferendis. Eligendi sit error sed a. Facere maiores sit adipisci sete est inventore vero",
        price: 2032,
        rating: 4.5,
        location: {
          city: "Kherson",
        },
        owner: {
          name: "Ellen",
          phone: "115-355-5652",
          email: "Tracey.Morar86@hotmail.com",
        },
      },
    };
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
