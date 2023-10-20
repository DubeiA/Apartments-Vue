<template>
  <section class="auth-section">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "AuthSection",
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
.auth-section {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("../../../public/img/apartments/Rectangle 34.jpg");
  background-size: cover;
  background-position: center;
  min-height: calc(100vh - 30px);
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: $bgr-login;
    z-index: -1;
  }
}
</style>
