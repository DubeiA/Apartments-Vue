<template>
  <main class="orders">
    <SectionHeaderSpacer>
      <Container>
        <section class="orders__content">
          <MainTitle>Замовлення</MainTitle>
          <OrderList :orders="orders" />
        </section>
      </Container>
    </SectionHeaderSpacer>
  </main>
</template>

<script>
import SectionHeaderSpacer from "@/components/shared/SectionHeaderSpacer.vue";
import Container from "@/components/shared/Container.vue";
import MainTitle from "@/components/shared/MainTitle.vue";
import OrderList from "../components/orders/OrdersList";
import { getOrders } from "../services/orders";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Orders",
  components: {
    SectionHeaderSpacer,
    Container,
    MainTitle,
    OrderList,
  },
  data() {
    return {
      orders: [],
    };
  },
  async created() {
    try {
      const { data } = await getOrders();
      this.orders = data;
    } catch (error) {
      this.$notify({
        type: "error",
        title: "Сталась помилка",
        text: error.message,
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.orders {
  &__content {
    max-width: 730px;
    margin: 0 auto 100px;
  }
}
</style>
