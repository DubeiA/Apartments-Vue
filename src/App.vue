<template>
  <div id="app">
    <div class="content">
      <Header />
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/shared/Footer.vue";
import Header from "./components/shared/Header.vue";

export default {
  name: "App",
  components: {
    Footer,
    Header,
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.content {
  flex-grow: 1;
  padding-top: 120px;
}
</style>
