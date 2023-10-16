<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header class="header">
    <Container>
      <Logo />
    </Container>
  </header>
</template>

<script>
import Container from "./Container.vue";
import Logo from "./Logo.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
  components: {
    Container,
    Logo,
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
}
</style>
