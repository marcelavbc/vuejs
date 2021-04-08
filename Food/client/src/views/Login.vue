<template>
  <div>
    <the-register-form>
      <div class="container">
        <h2>Login To Your Account</h2>
        <form @submit.prevent="loginUser">
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
              type="password"
              class="form-control"
              placeholder="Password"
              name="password"
              id="password"
              v-model="password"
            />
            <input type="submit" class="btn" value="Login" />
          </div>
        </form>
        <router-link to="/register" class="link btn"
          >Need an account?</router-link
        >
      </div>
    </the-register-form>
  </div>
</template>

<script>
import TheRegisterForm from "../components/utils/TheRegisterForm.vue";
// import { mapActions, mapMutations } from "vuex";
export default {
  components: { TheRegisterForm },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    loginUser() {
      let user = {
        username: this.username,
        password: this.password,
      };
      this.$store.dispatch("users/login", user);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>