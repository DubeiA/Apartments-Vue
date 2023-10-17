<template>
  <Form ref="form" @submit.prevent="handleSubmit">
    <CustomInput
      name="email"
      :value="formData.email"
      @input="updateEmail"
      :rules="emailRules"
    />
    <CustomInput
      name="password"
      :value="formData.password"
      @input="updatePassword"
      :rules="passwordRules"
    />
    <Button type="submit">Click</Button>
  </Form>
</template>

<script>
import Form from "../shared/form/Form";
import CustomInput from "../shared/CustomInput.vue";
import Button from "../shared/Button.vue";
import {
  emailValidation,
  passwordValidation,
  isRequired,
} from "@/utils/validationRules";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",
  components: {
    Form,
    CustomInput,
    Button,
  },

  data() {
    return {
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
      return [this.rules.isRequired, this.rules.passwordValidation];
    },
  },
  methods: {
    updateEmail(event) {
      this.formData.email = event.target.value;
    },
    updatePassword(event) {
      this.formData.password = event.target.value;
    },
    handleSubmit() {
      const isFormValid = this.$refs.form.validate();
      console.log(this.$refs.form.validate());
      if (isFormValid) {
        console.log(this.formData, "ssdsdsdsdsdsd");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
