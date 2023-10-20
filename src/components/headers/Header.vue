<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header class="header">
    <Container>
      <div class="header__content">
        <router-link to="/">
          <Logo />
        </router-link>

        <AccountAction v-if="isLoggedIn" />
        <AuthAction v-else />
      </div>
    </Container>
  </header>
</template>

<script>
import Container from "../shared/Container.vue";
import Logo from "../shared/Logo.vue";
import AuthAction from "./AuthAction";
import AccountAction from "./AccountAction.vue";
import { mapGetters } from "vuex";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
  components: {
    Container,
    Logo,
    AuthAction,
    AccountAction,
  },
  computed: {
    ...mapGetters("auth", ["isLoggedIn"]),
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: $bgr;
  padding: 16px 0;
  z-index: 10;

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
