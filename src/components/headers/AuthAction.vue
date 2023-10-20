<template>
  <div class="auth-action">
    <router-link class="auth-action__link" :to="{ name: 'login' }"
      >Вхід</router-link
    >
    /
    <router-link class="auth-action__link" :to="{ name: 'register' }"
      >Регістрація</router-link
    >
  </div>
</template>

<script>
export default {
  name: "AuthAction",
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
.auth-action {
  color: $white;

  &__link {
    color: inherit;
    text-decoration: none;
    transition: color 0.4s;

    &:hover {
      color: $orange;
    }
  }
}
</style>
