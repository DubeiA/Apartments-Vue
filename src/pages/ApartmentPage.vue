<template>
  <main class="apartment-page">
    <SectionHeaderSpacer>
      <Container>
        <div v-if="apartment" class="apartment-page__content">
          <ApartmentsMainInfo :apartment="apartment" />
          <div class="apartment-page__additional-info">
            <ApartmentsOwner
              class="apartment-page__owner"
              :owner="apartment.owner"
            />
            <Reviews :reviews="reviewsList" />
          </div>
        </div>
      </Container>
    </SectionHeaderSpacer>
  </main>
</template>

<script>
import Container from "../components/shared/Container";
import ApartmentsMainInfo from "../components/apartment/ApartmentsMainInfo";
import ApartmentsOwner from "../components/apartment/ApartmentsOwner";
import Reviews from "../components/reviews/Reviews";
import reviewsList from "../components/reviews/reviews.json";
// import { onMounted } from "vue";
import { getApartmentsById } from "@/services/fetchApartments";
import SectionHeaderSpacer from "@/components/shared/SectionHeaderSpacer.vue";

export default {
  name: "ApartmentPage",
  components: {
    Container,
    ApartmentsMainInfo,
    ApartmentsOwner,
    Reviews,
    SectionHeaderSpacer,
  },

  data() {
    return {
      apartment: null,
    };
  },
  computed: {
    reviewsList() {
      return reviewsList;
    },
  },

  async created() {
    try {
      const { id } = this.$route.params;
      const { data } = await getApartmentsById(id);

      this.apartment = data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style lang="scss" scoped>
.apartment-page {
  padding-bottom: 55px;

  &__content {
    display: flex;
    align-items: flex-start;
  }

  &__additional-info {
    margin-left: 30px;
    max-width: 350px;
    flex-grow: 0;
    flex-shrink: 1;
  }
}
</style>
