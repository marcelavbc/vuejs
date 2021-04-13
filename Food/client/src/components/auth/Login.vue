<template>
  <div>
    <the-register-form>
      <div class="container">
        <appear :delay="100" :translate="['-100px', 0]">
          <h2>Login To Your Account</h2>
        </appear>
        <form @submit.prevent="login">
          <div class="inputs">
            <appear :delay="200" :translate="['100px', 0]">
              <input
                id="email"
                type="text"
                placeholder="Your email"
                name="email"
                v-model="email"
                class="form-control"
              />
            </appear>
            <appear :delay="300" :translate="['100px', 0]">
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                name="password"
                id="password"
                v-model="password"
              />
            </appear>
            <appear :delay="400" :translate="['-100px', 0]">
              <input type="submit" class="btn" value="Login" />
            </appear>
          </div>
        </form>
        <appear :delay="600" :translate="[0, '100px']">
          <router-link to="/register" class="link btn"
            >Need an account?</router-link
          >
        </appear>
      </div>
    </the-register-form>
  </div>
</template>

<script>
import TheRegisterForm from "../utils/TheRegisterForm.vue";
export default {
  name: "Login",
  components: { TheRegisterForm },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login: function () {
      let email = this.email;
      let password = this.password;
      this.$store
        .dispatch("users/login", { email, password })
        .then(() => this.$router.push("/"))
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style lang="scss" scoped>
</style>