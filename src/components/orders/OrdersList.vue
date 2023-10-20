<template>
  <div class="order-list">
    <p v-if="!orders.length">Заказів немає</p>
    <template v-else>
      <OrdersItem
        v-for="order in orders"
        :key="order.id"
        :order="order.apartment"
      />
    </template>
  </div>
</template>

<script>
import OrdersItem from "./OrdersItem.vue";
export default {
  name: "OrderList",
  components: {
    OrdersItem,
  },
  props: {
    orders: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.order-list {
  margin-top: 20px;
}
</style>
