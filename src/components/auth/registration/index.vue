<template>
  <AuthContainer class="registration">
    <MainTitle class="registration__title">Регістрація</MainTitle>
    <Form ref="form" class="registration__form" @submit.prevent="handleSubmit">
      <CustomInput
        placeholder="Name"
        class="registration__input"
        name="name"
        :value="formData.name"
        @input="updateName"
        :rules="nameRules"
      />
      <CustomInput
        placeholder="Email"
        class="registration__input"
        name="email"
        :value="formData.email"
        @input="updateEmail"
        :rules="emailRules"
      />
      <CustomInput
        placeholder="Password"
        class="registration__input"
        name="password"
        :value="formData.password"
        @input="updatePassword"
        :rules="passwordRules"
      />
      <CustomInput
        placeholder="Confirm password"
        class="registration__input"
        name="password"
        :value="formData.confirm"
        @input="updateConfirm"
        :rules="confirmPassword"
      />
      <Button class="registration__btn" type="submit" :loading="loading"
        >Вхід</Button
      >
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
  name: "Registration",
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
        name: "",
        email: "",
        password: "",
        confirm: "",
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
    nameRules() {
      return [this.rules.isRequired];
    },
    emailRules() {
      return [this.rules.isRequired, this.rules.emailValidation];
    },
    passwordRules() {
      return [this.rules.isRequired, this.rules.passwordValidation];
    },
    confirmPassword() {
      return [
        (val) => ({
          hasPassed: val === this.formData.password,
          message: "Паролі не співпадають",
        }),
      ];
    },
  },
  methods: {
    updateEmail(event) {
      this.formData.email = event.target.value;
    },
    updatePassword(event) {
      this.formData.password = event.target.value;
    },
    updateName(event) {
      this.formData.name = event.target.value;
    },
    updateConfirm(event) {
      this.formData.confirm = event.target.value;
    },
    async handleSubmit() {
      const { form } = this.$refs;
      const isFormValid = form.validate();

      if (isFormValid) {
        try {
          this.loading = true;

          this.$store.dispatch("auth/register", this.formData);

          this.$router.push({ name: "home" });
          form.reset();
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
.registration {
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
