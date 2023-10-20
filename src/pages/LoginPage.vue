<template>
  <main class="login">
    <AuthSection>
      <Login />
    </AuthSection>
  </main>
</template>

<script>
import Login from "@/components/auth/login";
import AuthSection from "../components/auth/AuthSection";
export default {
  name: "LoginPage",
  components: {
    Login,
    AuthSection,
  },
};
</script>

<style lang="scss" scoped></style>
