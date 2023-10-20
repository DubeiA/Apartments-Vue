<template>
  <div id="app">
    <Notification />
    <div class="content">
      <Header />
      <router-view></router-view>
    </div>

    <Footer />
  </div>
</template>

<script>
import Footer from "./components/shared/Footer.vue";
import Header from "./components/headers/Header";
import Notification from "./components/notification";

export default {
  name: "App",
  components: {
    Footer,
    Header,
    Notification,
  },
  data() {
    return {
      isNotificationsShown: false,
    };
  },
  mounted() {
    console.log(this.$store.getters["auth/isloggedIn"]);
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
}
</style>
