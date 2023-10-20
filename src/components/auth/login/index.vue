<template>
  <AuthContainer class="login">
    <MainTitle class="login__title">Логін</MainTitle>
    <Form ref="form" class="login__form" @submit.prevent="handleSubmit">
      <CustomInput
        placeholder="Email"
        class="login__input"
        name="email"
        :value="formData.email"
        @input="updateEmail"
        :rules="emailRules"
      />
      <CustomInput
        type="password"
        placeholder="Password"
        class="login__input"
        name="password"
        :value="formData.password"
        @input="updatePassword"
        :rules="passwordRules"
      />
      <Button class="login__btn" type="submit" :loading="loading">Вхід</Button>
    </Form>
  </AuthContainer>
</template>

<script>
import Form from "../../shared/form/Form";
import CustomInput from "../../shared/CustomInput.vue";
import Button from "../../shared/Button.vue";
import {
  emailValidation,
  passwordValidation,
  isRequired,
} from "@/utils/validationRules";
import AuthContainer from "../AuthContainer.vue";
import MainTitle from "../../shared/MainTitle.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",
  components: {
    Form,
    CustomInput,
    Button,
    AuthContainer,
    MainTitle,
  },

  data() {
    return {
      loading: false,
      formData: {
        email: "",
        password: "",
      },
    };
  },
  computed: {
    rules() {
      return {
        emailValidation,
        passwordValidation,
        isRequired,
      };
    },
    emailRules() {
      return [this.rules.isRequired, this.rules.emailValidation];
    },
    passwordRules() {
      return [this.rules.isRequired];
    },
  },
  methods: {
    updateEmail(event) {
      this.formData.email = event.target.value;
    },
    updatePassword(event) {
      this.formData.password = event.target.value;
    },
    async handleSubmit() {
      const { form } = this.$refs;
      const isFormValid = form.validate();

      if (isFormValid) {
        try {
          this.loading = true;

          await this.$store.dispatch("auth/login", this.formData);

          form.reset();
          this.$router.push({ name: "home" });
        } catch (error) {
          this.$notify({
            type: "error",
            title: "Виникла помилка",
            text: error.message,
          });
        } finally {
          this.loading = false;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  &__form {
    display: flex;
    flex-direction: column;
  }

  &__title {
    text-align: center;
  }

  &__input {
    margin-bottom: 20px;
    width: 100%;
  }

  &__btn {
    margin-top: 15px;
    width: 100%;
  }
}
</style>
