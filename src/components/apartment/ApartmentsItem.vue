<template>
  <div class="apartment-item">
    <div class="apartment-item__inner">
      <img :src="imgSrc" alt="" class="apartment-item__photo" />
      <div class="apartment-item__content">
        <p class="apartment-item__description">
          {{ descr }}
        </p>
        <div class="apartment-item__rating">
          <StarRating :rating="rating" />
        </div>
        <div class="apartment-item_price">UAH {{ price }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "../StarRating.vue";

export default {
  name: "ApartmentsItem",
  components: {
    StarRating,
  },
  props: {
    descr: {
      type: String,
      default: "",
    },
    rating: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
    },
    imgSrc: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.apartment-item {
  position: relative;
  max-width: 350px;
  padding: 0 20px;

  &__inner {
    position: relative;
  }

  &__content {
    position: relative;
    padding: 20px;
    opacity: 0;
    transition: opacity 0.4s;
    background-color: rgba(#0f1d2d, 0.7);
    min-height: 200px;
    color: #fff;
    text-align: left;
    line-height: 1.4;
    cursor: pointer;
    z-index: 1;

    &:hover {
      opacity: 1;
    }
  }

  &__description {
    margin-bottom: 20px;
  }
  &__rating {
    margin-bottom: 20px;
  }
  &__price {
    font-size: 20px;
    font-weight: 600;
  }

  &__photo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
