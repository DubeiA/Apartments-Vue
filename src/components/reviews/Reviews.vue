<template>
  <section class="reviews">
    <div class="reviews__heading">
      <h2 class="reviews__title">Загальний рейтинг</h2>
      <div class="reviews__rating">
        <span>{{ amountOfReviews }} відкук(ів)</span>
        <Rating :rating="totalRating" />
      </div>
    </div>
    <ReviewsItem
      v-for="review in currentReviews"
      :key="review.author"
      :review="review"
    />
    <button @click="toggleReviews" class="reviews__show-more">
      {{ buttonText }}
    </button>
  </section>
</template>

<script>
import ReviewsItem from "./reviews-item/ReviewsItem.vue";
import Rating from "../shared/StarRating.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Reviews",
  components: {
    ReviewsItem,
    Rating,
  },
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      reviewsLimit: 2,
    };
  },
  computed: {
    totalRating() {
      const total = this.reviews.reduce(
        (acc, review) => acc + review.rating,
        0
      );
      return total / this.reviews.length;
    },

    amountOfReviews() {
      return this.reviews.length;
    },

    currentReviews() {
      return this.reviews.slice(0, this.reviewsLimit);
    },
    buttonText() {
      return this.reviewsLimit === this.reviews.length
        ? "Звернути"
        : "Читати ще...";
    },
  },
  methods: {
    toggleReviews() {
      this.reviewsLimit === this.reviews.length
        ? (this.reviewsLimit = 2)
        : (this.reviewsLimit = this.reviews.length);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

.reviews {
  margin-top: 20px;
  background: $blue;
  padding: 0 2px;

  &__heading {
    padding: 20px 20px 10px;
  }

  &__title {
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  &__rating {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__show-more {
    background: none;
    border: none;
    cursor: pointer;
    width: 100%;
    padding: 12px;
    font-family: inherit;
    font-size: 16px;
  }
}
</style>
