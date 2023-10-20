<template>
  <article class="apartment-main-info">
    <div class="apartment-main-info__heading">
      <h1 class="apartment-main-info__title">{{ apartment.title }}</h1>
      <Rating :rating="apartment.rating" />
    </div>
    <img :src="apartment.imgUrl" alt="" class="apartment-main-info__img" />
    <p class="apartment-main-info__description">{{ apartment.descr }}</p>
    <div class="apartment-main-info__btn">
      <Button @click="handleApatrmentBookung" :loading="isLoading"
        >Забронювати</Button
      >
    </div>
  </article>
</template>

<script>
import Rating from "../shared/StarRating.vue";
import Button from "../shared/Button.vue";
import { bookApartment } from "../../services/orders";

export default {
  name: "ApartmentsMainInfo",
  components: {
    Rating,
    Button,
  },
  props: {
    apartment: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    async handleApatrmentBookung() {
      const body = {
        apartmentId: this.$route.params.id,
        date: Date.now(),
      };

      try {
        this.isLoading = true;
        await bookApartment(body);
        this.$notify({
          type: "success",
          title: "Замовлення добавлено",
        });
      } catch (error) {
        this.$notify({
          type: "error",
          title: "Виникла помилка",
          text: error.message,
        });
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.apartment-main-info {
  &__heading {
    display: flex;
  }

  &__title {
    font-size: 20px;
    font-weight: 700;
    text-transform: capitalize;
    margin-bottom: 20px;
    margin-right: 20px;
  }

  &__img {
    width: 730px;
    height: 410px;
  }

  &__description {
    line-height: 1.3;
    margin-top: 30px;
  }
  &__btn {
    margin-top: 20px;
    text-align: center;
  }
}
</style>
