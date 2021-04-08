<template>
  <div>
    <the-register-form>
      <div class="container">
        <h2>Create Your Account</h2>
        <form @submit.prevent="registerUser">
          <div class="inputs">
            <input
              id="username"
              type="text"
              placeholder="Username"
              name="username"
              v-model="username"
              class="form-control"
            />
            <input
              id="name"
              type="text"
              placeholder="Name"
              name="name"
              v-model="name"
              class="form-control"
            />
            <input
              id="email"
              type="text"
              placeholder="Email"
              name="email"
              v-model="email"
              class="form-control"
            />
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              name="password"
              id="password"
              v-model="password"
            />
            <input
              type="password"
              class="form-control"
              placeholder="Confirm Password"
              name="confirm_password"
              id="confirm_password"
              v-model="confirm_password"
            />
            <input type="submit" class="btn" value="Sign up" />
          </div>
        </form>
        <router-link to="/login" class="link btn"
          >Already have an account?</router-link
        >
      </div>
    </the-register-form>
  </div>
</template>

<script>
import TheRegisterForm from "../components/utils/TheRegisterForm.vue";
export default {
  components: { TheRegisterForm },
  name: "Register",
  data() {
    return {
      username: "",
      name: "",
      email: "",
      password: "",
      confirm_password: "",
      recipes: []
    };
  },
  methods: {
    registerUser() {
      let user = {
        username: this.username,
        password: this.password,
        confirm_password: this.confirm_password,
        email: this.email,
        name: this.name,
        recipes: this.recipes
      };
      this.$store.dispatch("users/register", user);
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  margin-top: 4rem;
}
</style>